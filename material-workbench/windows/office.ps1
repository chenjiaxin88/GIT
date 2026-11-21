[CmdletBinding()]
param([ValidateSet('Start','Issue','Revoke')][string]$Action = 'Start')

$ErrorActionPreference = 'Stop'

function Get-SitePaths([string]$Folder) {
    $root = (Get-Item -LiteralPath $Folder).FullName
    if (!(Test-Path -LiteralPath (Join-Path $root 'server.mjs'))) { $root = Split-Path $root -Parent }
    $catalog = Join-Path $root 'snapshot\snapshot.json'
    if (!(Test-Path -LiteralPath $catalog -PathType Leaf)) { throw '找不到 snapshot\snapshot.json。请先完整解压员工站交付包，再双击启动。' }
    $node = Join-Path $root 'runtime\node.exe'
    if (!(Test-Path -LiteralPath $node -PathType Leaf)) {
        $found = Get-Command node.exe -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1
        if (!$found) { throw '这台电脑没有找到 Node.js。请使用本包已验证的 Node.js 24，安装后重新打开此窗口。' }
        $node = $found.Source
    }
    $local = Join-Path (Split-Path $root -Parent) ('.'+(Split-Path $root -Leaf)+'.员工站本机状态')
    [pscustomobject]@{Root=$root; Node=$node; Catalog=$catalog; Data=(Join-Path $root 'snapshot'); Local=$local;
        State=(Join-Path $local 'login'); Settings=(Join-Path $local 'site.json'); Runtime=(Join-Path $local 'process.json')}
}

function Initialize-State($Paths) {
    if (Test-Path -LiteralPath $Paths.Local -PathType Container) { return }
    $dir = New-Item -ItemType Directory -Path $Paths.Local
    $sid = [Security.Principal.WindowsIdentity]::GetCurrent().User
    $acl = Get-Acl -LiteralPath $dir.FullName
    $acl.SetAccessRuleProtection($true,$false)
    foreach ($identity in @($sid,[Security.Principal.SecurityIdentifier]'S-1-5-18')) {
        $rule = [Security.AccessControl.FileSystemAccessRule]::new($identity,'FullControl','ContainerInherit, ObjectInherit','None','Allow')
        $acl.AddAccessRule($rule)
    }
    Set-Acl -LiteralPath $dir.FullName -AclObject $acl
}

function Save-Settings([string]$File,$Value) {
    $tmp = $File + '.' + [guid]::NewGuid().ToString('N') + '.tmp'
    [IO.File]::WriteAllText($tmp,($Value | ConvertTo-Json -Compress),[Text.UTF8Encoding]::new($false))
    if ([IO.File]::Exists($File)) { [IO.File]::Replace($tmp,$File,[Management.Automation.Language.NullString]::Value) } else { [IO.File]::Move($tmp,$File) }
}

function Read-Settings([string]$File) {
    if (Test-Path -LiteralPath $File -PathType Leaf) {
        return ([IO.File]::ReadAllText($File,[Text.Encoding]::UTF8) | ConvertFrom-Json)
    }
}

# Windows PowerShell 5 has no ProcessStartInfo.ArgumentList.
function Format-Argument([string]$Value) {
    '"' + [regex]::Replace([regex]::Replace($Value,'(\\*)"','$1$1\"'),'(\\+)$','$1$1') + '"'
}

function New-NodeProcess($Paths,[string[]]$Arguments,[bool]$Capture=$false,[bool]$PipeInput=$false) {
    $info = New-Object Diagnostics.ProcessStartInfo
    $info.FileName = $Paths.Node
    $info.WorkingDirectory = $Paths.Root
    $info.Arguments = (($Arguments | ForEach-Object { Format-Argument $_ }) -join ' ')
    $info.UseShellExecute = $false
    $info.CreateNoWindow = $true
    if ($Capture) {
        $info.RedirectStandardOutput = $true
        $info.RedirectStandardError = $true
        $info.StandardOutputEncoding = [Text.UTF8Encoding]::new($false)
        $info.StandardErrorEncoding = [Text.UTF8Encoding]::new($false)
    }
    $info.RedirectStandardInput = $PipeInput
    return [Diagnostics.Process]::Start($info)
}

function Get-Origin([string]$Text) {
    $candidate = $null
    if (![uri]::TryCreate($Text.Trim(),[UriKind]::Absolute,[ref]$candidate) -or $candidate.Scheme -ne 'https' -or
        !$candidate.Host -or $candidate.UserInfo -or $candidate.Query -or $candidate.Fragment -or $candidate.AbsolutePath -ne '/') {
        throw '请填写完整的公司 HTTPS 地址，仅填写域名和可选端口。例如 https://material.example:8443'
    }
    'https://' + $candidate.IdnHost.ToLowerInvariant() + $(if (!$candidate.IsDefaultPort) { ':'+$candidate.Port })
}

function Get-PrivateAddress([string]$Text) {
    $ip=$null
    if (![Net.IPAddress]::TryParse($Text.Trim(),[ref]$ip) -or $ip.AddressFamily -ne [Net.Sockets.AddressFamily]::InterNetwork) { throw '请填写办公网的私有 IPv4 地址。' }
    $b=$ip.GetAddressBytes()
    if (!(($b[0] -eq 10) -or ($b[0] -eq 172 -and $b[1] -ge 16 -and $b[1] -le 31) -or ($b[0] -eq 192 -and $b[1] -eq 168))) { throw '此模式须绑定办公网的 10.x、172.16–31.x 或 192.168.x 地址。' }
    if (!(Get-NetIPAddress -AddressFamily IPv4 -IPAddress $ip.ToString() -ErrorAction SilentlyContinue)) { throw '当前电脑没有这个办公网 IP。请连接公司网络后重新选择。' }
    return $ip.ToString()
}

function Get-OwnedProcess($Paths) {
    $memo=Read-Settings $Paths.Runtime
    if (!$memo) { return }
    $proc=Get-Process -Id ([int]$memo.pid) -ErrorAction SilentlyContinue
    if ($proc -and $proc.ProcessName -eq 'node' -and $proc.Path -eq $Paths.Node -and
        [string]$proc.StartTime.ToUniversalTime().Ticks -eq [string]$memo.ticks) { return $proc }
}

function Start-SiteProcess($Paths,$Site) {
    $uri=[uri]$Site.origin
    $argsList=@('--data',$Paths.Data,'--state',$Paths.State,'--origin',$Site.origin)
    if ($Site.mode -eq 'tls') {
        $script=Join-Path $Paths.Root 'native-office-tls.mjs'
        if (!(Test-Path -LiteralPath $script -PathType Leaf)) { throw '缺少 native-office-tls.mjs，请完整解压交付包。' }
        $bind=Get-PrivateAddress $Site.bind
        if (!(Test-Path -LiteralPath $Site.pfx -PathType Leaf)) {throw '服务器 PFX 的本机路径不存在，请重新配置。'}
        $port=$uri.Port
        $argsList=@($script)+$argsList+@('--bind',$bind,'--pfx',$Site.pfx,'--passphrase-stdin')
    } else {
        $bind='127.0.0.1'; $port=8791
        $argsList=@((Join-Path $Paths.Root 'server.mjs'),'serve')+$argsList+@('--port',[string]$port)
    }
    if (Get-NetTCPConnection -State Listen -LocalPort $port -ErrorAction SilentlyContinue | Where-Object {$_.LocalAddress -in @($bind,'0.0.0.0','::')}) {
        throw "地址 $bind 的 $port 端口已被占用。请先检查原服务，无需反复启动。"
    }
    $proc=$null
    try {
        if ($Site.mode -eq 'tls') {
            $secret=Read-Host '请输入 PFX 口令（无口令按回车）' -AsSecureString
            $ptr=[IntPtr]::Zero
            try {
                $proc=New-NodeProcess $Paths $argsList $false $true
                $ptr=[Runtime.InteropServices.Marshal]::SecureStringToBSTR($secret)
                $chars=New-Object char[] $secret.Length
                if ($chars.Length) {[Runtime.InteropServices.Marshal]::Copy($ptr,$chars,0,$chars.Length)}
                $bytes=[Text.UTF8Encoding]::new($false).GetBytes($chars)
                try { $pipe=$proc.StandardInput.BaseStream; $pipe.Write($bytes,0,$bytes.Length); $pipe.Close() }
                finally { [Array]::Clear($bytes,0,$bytes.Length); [Array]::Clear($chars,0,$chars.Length) }
            } finally {
                if ($ptr -ne [IntPtr]::Zero) { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr) }
                $secret.Dispose()
            }
        } else { $proc=New-NodeProcess $Paths $argsList }
        for ($i=0; $i -lt 30; $i++) {
            if ($proc.HasExited) { throw '服务未能启动。请检查快照、端口；证书模式还需核对证书及口令。' }
            $listener=Get-NetTCPConnection -State Listen -LocalPort $port -ErrorAction SilentlyContinue |
                Where-Object {$_.OwningProcess -eq $proc.Id -and $_.LocalAddress -eq $bind} | Select-Object -First 1
            if ($listener) {
                Save-Settings $Paths.Settings $Site
                Save-Settings $Paths.Runtime @{pid=$proc.Id;ticks=[string]$proc.StartTime.ToUniversalTime().Ticks}
                return
            }
            Start-Sleep -Milliseconds 200
        }
        throw '在指定地址未检测到此员工站的监听，请检查网络和端口。'
    } catch {
        if ($proc -and !$proc.HasExited) { $proc.Kill() }
        throw
    } finally { if ($proc) { $proc.Dispose() } }
}

function Show-Start($Paths) {
    Initialize-State $Paths
    $site=Read-Settings $Paths.Settings
    $running=Get-OwnedProcess $Paths
    if ($running) {
        Write-Host "员工站正在运行。入口为 $($site.origin)"
        $pick=Read-Host '回车保留运行，输入 S 停止这个员工站后重新选择'
        if ($pick -ne 'S') { return }
        $running.Kill()
        [void]$running.WaitForExit(5000)
    }
    Write-Host '1  在这台电脑试用'
    Write-Host '2  公司已有 HTTPS 反向代理'
    Write-Host '3  直接用公司受信任证书在办公网开放'
    if ($site) { Write-Host "回车  沿用上次设置 $($site.origin)" }
    $mode=(Read-Host '请选择').Trim()
    switch ($mode) {
        '1' { $site=@{mode='local';origin='http://127.0.0.1:8791'} }
        '2' { $site=@{mode='proxy';origin=(Get-Origin (Read-Host 'IT 配置的员工访问网址'))} }
        '3' {
            $origin=Get-Origin (Read-Host '证书匹配的员工访问网址（含端口，如 :8443）')
            $bind=Get-PrivateAddress (Read-Host '本机要监听的办公网 IPv4')
            $pfx=(Read-Host 'IT 提供的服务器 PFX 文件的完整路径').Trim().Trim('"')
            $site=@{mode='tls';origin=$origin;bind=$bind;pfx=(Get-Item -LiteralPath $pfx).FullName}
        }
        '' { if (!$site) { $site=@{mode='local';origin='http://127.0.0.1:8791'} } }
        default { throw '请选择 1、2 或 3。' }
    }
    Start-SiteProcess $Paths $site
    Write-Host "员工站已启动。入口为 $($site.origin)"
    if ($site.mode -eq 'local') {
        Write-Host '这个地址仅供当前电脑试用。现在可以双击“签发员工链接”。'
        Start-Process $site.origin
    } elseif ($site.mode -eq 'proxy') {
        Write-Host '员工站已在 127.0.0.1:8791 就绪。由同机的公司 HTTPS 反代保留原 Host 后转发，再用同事的设备核实访问。'
    } else {
        Write-Host "已监听指定办公网地址 $($site.bind)。请在同事的设备上通过上述 HTTPS 名称核实证书和访问。"
    }
}

function Get-Member($Paths) {
    $catalog=Read-Settings $Paths.Catalog
    $people=@($catalog.people)
    for ($i=0; $i -lt $people.Length; $i++) { Write-Host ("{0}  {1}" -f ($i+1),$people[$i].name) }
    $answer=(Read-Host '请选择一位制作人的编号').Trim()
    $n=0
    if (![int]::TryParse($answer,[ref]$n) -or $n -lt 1 -or $n -gt $people.Length) { throw '没有这个编号。' }
    return [string]$people[$n-1].name
}

function Invoke-MemberCommand($Paths,$Site,[string]$Command,[string]$Person) {
    $proc=New-NodeProcess $Paths @((Join-Path $Paths.Root 'server.mjs'),$Command,'--data',$Paths.Data,
        '--state',$Paths.State,'--origin',$Site.origin,'--person',$Person) $true
    try {
        $result=$proc.StandardOutput.ReadToEnd().Trim()
        $errorMessage=$proc.StandardError.ReadToEnd()
        $proc.WaitForExit()
        if ($proc.ExitCode -ne 0) { throw '操作失败，请核对快照内有该员工，当前 Windows 账号可读写本站状态。' }
        if ($Command -eq 'issue') {
            if ($result -cnotmatch ('^'+[regex]::Escape($Site.origin)+'/activate#[A-Za-z0-9_-]{43}$')) { throw '返回的个人入口网址格式无效，请检查交付包版本。' }
            return $result
        }
    } finally { $proc.Dispose() }
}

function Show-PrivateLink([string]$Person,[string]$Link,[bool]$Local) {
    Add-Type -AssemblyName System.Windows.Forms
    Add-Type -AssemblyName System.Drawing
    $form=New-Object Windows.Forms.Form
    try {
        $form.Text='给'+$Person+'的员工入口'
        $form.StartPosition='CenterScreen'; $form.Width=590; $form.Height=215
        $form.MinimizeBox=$false; $form.MaximizeBox=$false; $form.FormBorderStyle='FixedDialog'
        $explain=New-Object Windows.Forms.Label
        $explain.SetBounds(18,14,535,44)
        $explain.Text=if($Local){'本机试用链接。仅能在这台电脑上激活。'}else{"请单独把链接发给 $Person。首次激活限 24 小时，使用一次后失效。"}
        $box=New-Object Windows.Forms.TextBox; $box.ReadOnly=$true; $box.Text=$Link; $box.SetBounds(18,65,533,26)
        $copy=New-Object Windows.Forms.Button; $copy.Text='复制个人链接'; $copy.SetBounds(18,108,147,34)
        $copy.Add_Click({try {[Windows.Forms.Clipboard]::SetText($box.Text);$copy.Text='已复制'}catch {$box.SelectAll();$box.Focus();$copy.Text='请按 Ctrl+C'}})
        $done=New-Object Windows.Forms.Button; $done.Text='关闭'; $done.SetBounds(412,108,139,34); $done.Add_Click({$form.Close()})
        $form.Controls.AddRange(@($explain,$box,$copy,$done)); $form.AcceptButton=$copy
        [void]$form.ShowDialog()
    } finally {$form.Dispose()}
}

function Main {
    $paths=Get-SitePaths $PSScriptRoot
    if ($Action -eq 'Start') { Show-Start $paths; return }
    $site=Read-Settings $paths.Settings
    if (!$site -or !(Get-OwnedProcess $paths)) { throw '请先双击“启动员工站”，待服务启动后再执行此操作。' }
    $person=Get-Member $paths
    if ($Action -eq 'Issue') {
        $link=Invoke-MemberCommand $paths $site 'issue' $person
        Show-PrivateLink $person $link ($site.mode -eq 'local')
        return
    }
    if ((Read-Host "撤销 $person 的现有激活链接及该员工所有登录会话？输入该员工姓名确认") -cne $person) { Write-Host '已取消。';return }
    Invoke-MemberCommand $paths $site 'revoke' $person
    Write-Host "已撤销 $person 的激活链接与登录，可按需重新签发。"
}

if ($MyInvocation.InvocationName -ne '.') {
    try { Main } catch { [Console]::Error.WriteLine($_.Exception.Message); exit 1 }
}
