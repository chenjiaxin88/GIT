import {createHash, randomBytes} from 'node:crypto';
import {readFile, mkdir, stat, writeFile, rename, unlink, open} from 'node:fs/promises';
import {createServer} from 'node:http';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {pipeline} from 'node:stream/promises';
import {parseArgs} from 'node:util';

const home = '打开我的图词.html';
const hour = 3_600_000;
const tokenPattern = /^[A-Za-z0-9_-]{43}$/;
const digest = value => createHash('sha256').update(value).digest('hex');
const random = () => randomBytes(32).toString('base64url');
const scripts = [
  'KxkImwO28Xs+h/IFUcl8AAdkzob9JDPyHxTNiUM+RsE=',
  'PHlX77fYNxD5bc0MEzUgndMbLSbqlqd8ADr3aVaFXHU=',
];
const fragmentScript = "const code=location.hash.slice(1);history.replaceState(null,'',location.pathname);if(/^[A-Za-z0-9_-]{43}$/.test(code)){document.querySelector('[name=code]').value=code;}";
const csp = "default-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'self'; img-src data:; media-src 'self'; style-src 'unsafe-inline'; script-src " +
  [...scripts, createHash('sha256').update(fragmentScript).digest('base64')].map(hash => "'sha256-" + hash + "'").join(' ');

function localInside(root, other) {
  const relative = path.relative(root, other);
  return !relative || (!relative.startsWith('..' + path.sep) && relative !== '..' && !path.isAbsolute(relative));
}

function page(message = '') {
  return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>顿展素材工作台 · 员工登录</title><style>' +
    '*{box-sizing:border-box}body{background:#faf8f4;color:#342c27;font:16px/1.6 system-ui,"Microsoft YaHei",sans-serif;margin:0}main{max-width:440px;margin:12vh auto;padding:24px}h1{font-size:24px}label{display:block;margin:24px 0 5px}input,button{width:100%;font:inherit;border:1px solid #ab9f93;border-radius:6px;padding:10px}button{background:#874e39;color:white;margin-top:15px;cursor:pointer}small{color:#6b5b51}</style></head><body><main><small>顿展素材工作台</small><h1>打开我的制作图词</h1><p>使用负责人单独发给你的激活链接或激活码。</p>' +
    (message ? '<p role="status">' + message + '</p>' : '') +
    '<form action="/activate" method="post"><label for="code">本人激活码</label><input id="code" name="code" type="password" autocomplete="off" maxlength="43" required><button>进入我的资料</button></form></main><script>' +
    fragmentScript + '</script></body></html>';
}

function browserRange(header, size) {
  if (header === undefined) return {start: 0, end:size - 1, partial:false};
  const match = /^bytes=(\d*)-(\d*)$/.exec(header);
  if (!match || (!match[1] && !match[2]) || size < 1) return null;
  const a = match[1] === '' ? null : Number(match[1]);
  const b = match[2] === '' ? null : Number(match[2]);
  if ((a !== null && !Number.isSafeInteger(a)) || (b !== null && !Number.isSafeInteger(b))) return null;
  const start = a === null ? Math.max(0, size-b) : a;
  const end = a === null || b === null ? size-1 : Math.min(b, size-1);
  return start <= end && start < size ? {start, end, partial:true} : null;
}

export async function openDesk({data, state, origin}) {
  if (!data || !state || !origin) throw Error('需要 --data、--state 和 --origin');
  const location = new URL(origin);
  if (location.origin !== origin || (location.protocol !== 'https:' &&
      !(location.protocol === 'http:' && location.hostname === '127.0.0.1'))) {
    throw Error('--origin 须为不带路径的 HTTPS 域名，本机核验可用 http://127.0.0.1:端口');
  }
  data = path.resolve(data); state = path.resolve(state);
  if (localInside(data, state) || localInside(state, data)) throw Error('快照和登录状态须为独立目录');
  const catalog = JSON.parse(await readFile(path.join(data,'snapshot.json'),'utf8'));
  if (catalog.version !== 1 || !Array.isArray(catalog.people) || !catalog.people.length) throw Error('无法识别员工快照');
  const people = new Map();
  for (const {id,name,files} of catalog.people) {
    if (!/^[a-f0-9]{24}$/.test(id) || !name || !Array.isArray(files) || !files.includes(home) ||
        people.has(id) || [...people.values()].some(person => person.name === name) ||
        files.some(f => f !== home && !/^任务\/任务[0-9]{2,3}\.html$/.test(f) && !/^原片\/[a-f0-9]{64}\.mp4$/.test(f))) {
      throw Error('快照文件范围或制作人有误');
    }
    people.set(id,{id,name,files:new Set(files)});
  }
  await mkdir(state,{recursive:true,mode:0o700});
  for (const folder of ['sessions','invites','epochs']) await mkdir(path.join(state,folder),{recursive:true,mode:0o700});

  async function epoch(owner) {
    const fn = path.join(state,'epochs',owner);
    try { return await readFile(fn,'utf8'); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    // A missing epoch denotes the initial generation. Only revocation writes this marker.
    return 'initial';
  }
  function personNamed(name) {
    const p = [...people.values()].find(entry => entry.name === name);
    if (!p) throw Error('快照里没有该制作人');
    return p;
  }
  const credentialFile = (kind,token) => path.join(state,kind,digest(token));
  async function storeToken(kind, owner, currentEpoch, lifetime) {
    const token = random();
    await writeFile(credentialFile(kind,token),JSON.stringify({owner,epoch:currentEpoch,expires:Date.now()+lifetime,origin}),{flag:'wx',mode:0o600});
    return token;
  }
  async function readToken(kind,token,consume = false) {
    if (typeof token !== 'string' || !tokenPattern.test(token)) return null;
    const fn = credentialFile(kind,token);
    let value;
    try {
      value = JSON.parse(await readFile(fn,'utf8'));
      if (consume) await unlink(fn);
    } catch (error) { if (error.code === 'ENOENT') return null; throw error; }
    if (!people.has(value.owner) || value.origin !== origin || !Number.isFinite(value.expires) || value.expires <= Date.now() ||
        value.epoch !== await epoch(value.owner)) return null;
    return value;
  }
  async function issue(name) {
    const person = personNamed(name);
    return origin + '/activate#' + await storeToken('invites',person.id,await epoch(person.id),24*hour);
  }
  async function revoke(name) {
    const person = personNamed(name), dest=path.join(state,'epochs',person.id);
    const temp=dest+'.'+random();
    await writeFile(temp,random(),{flag:'wx',mode:0o600}); await rename(temp,dest);
  }

  const isSecure=location.protocol === 'https:';
  const cookieName=isSecure ? '__Host-dzdesk' : 'dzdesk_local';
  const cookieFlags='; Path=/; HttpOnly; SameSite=Strict'+(isSecure ? '; Secure' : '');
  function getCookie(req) {
    return (req.headers.cookie || '').split(';').map(s=>s.trim()).find(s=>s.startsWith(cookieName+'='))?.slice(cookieName.length+1);
  }
  async function handle(req,res) {
    const send=(status,body='',headers={})=>{
      res.writeHead(status,{'Content-Type':'text/plain; charset=utf-8',...headers});
      res.end(req.method==='HEAD' ? undefined : body);
    };
    const html=(status,body,headers={})=>send(status,body,{'Content-Type':'text/html; charset=utf-8',...headers});
    const redirect=(at,headers={})=>send(303,'',{Location:at,...headers});
    res.setHeader('Cache-Control','private, no-store');
    res.setHeader('X-Content-Type-Options','nosniff');
    // Chromium uses this policy when serializing Origin for native form POSTs.
    res.setHeader('Referrer-Policy','same-origin');
    res.setHeader('Content-Security-Policy',csp);
    res.setHeader('X-Frame-Options','DENY');
    if (req.headers.host !== location.host) return send(421);
    if (!['GET','HEAD','POST'].includes(req.method)) return send(405);
    const raw = req.url || '/';
    if (!raw.startsWith('/') || raw.startsWith('//') || raw.includes('?')) return send(404);
    if (req.method==='POST') {
      if (req.headers.origin !== origin) return send(403);
      if (raw==='/logout') {
        const token=getCookie(req);
        if(token && tokenPattern.test(token)) {
          await unlink(credentialFile('sessions',token)).catch(error=>{if(error.code!=='ENOENT')throw error;});
        }
        return redirect('/',{'Set-Cookie':cookieName+'=; Max-Age=0'+cookieFlags});
      }
      if (raw!=='/activate') return send(404);
      if (req.headers['content-type']?.split(';')[0] !== 'application/x-www-form-urlencoded') return send(415);
      if (Number(req.headers['content-length']) > 256) return send(413);
      const chunks=[];let bytes=0;
      for await(const chunk of req){bytes+=chunk.length;if(bytes>256)return send(413);chunks.push(chunk);}
      const code=new URLSearchParams(Buffer.concat(chunks).toString('utf8')).get('code');
      const invitation = await readToken('invites',code,true);
      if(!invitation) return html(403,page('激活码无效、已使用或已到期，请向负责人领取新链接。'));
      const token=await storeToken('sessions',invitation.owner,invitation.epoch,7*24*hour);
      return redirect('/mine/'+encodeURIComponent(home),{'Set-Cookie':cookieName+'='+token+'; Max-Age=604800'+cookieFlags});
    }
    if(raw==='/activate') return html(200,page());
    const session=await readToken('sessions',getCookie(req));
    if(raw==='/') return session ? redirect('/mine/'+encodeURIComponent(home)) : html(200,page());
    if(!raw.startsWith('/mine/')) return send(404);
    if(!session) return html(401,page('请先激活本人的员工入口。'));
    let name;
    try {name=decodeURIComponent(raw.slice(6));} catch {return send(400);}
    const person=people.get(session.owner);
    if(!person.files.has(name)) return send(404);
    const file=path.join(data,'people',person.id,name);
    const video=name.endsWith('.mp4');
    const info=await stat(file);
    if(!info.isFile())return send(404);
    const range=browserRange(video ? req.headers.range : undefined,info.size);
    if(!range) return send(416,'',{'Content-Range':'bytes */'+info.size});
    const length=range.end - range.start + 1;
    const headers={'Content-Type':video ? 'video/mp4' : 'text/html; charset=utf-8','Content-Length':length};
    if(video)headers['Accept-Ranges']='bytes';
    if(range.partial)headers['Content-Range']='bytes '+range.start+'-'+range.end+'/'+info.size;
    if(req.method==='HEAD' || info.size===0) return send(range.partial ? 206 : 200,'',headers);
    const fd=await open(file,'r');
    try{
      res.writeHead(range.partial ? 206 : 200,headers);
      await pipeline(fd.createReadStream({start:range.start,end:range.end,autoClose:false}),res);
    }finally{await fd.close();}
  }
  function handler(req,res) {
    return handle(req,res).catch(err=>{
      if(!res.headersSent){res.writeHead(500,{'Cache-Control':'no-store'});res.end('暂时无法读取资料');}
      else res.destroy();
      if(!['ERR_STREAM_PREMATURE_CLOSE','ECONNRESET','EPIPE','ABORT_ERR'].includes(err.code)) console.error('员工服务请求失败',err.code||err.name);
    });
  }
  return {issue,revoke,handler,createServer:()=>createServer({requestTimeout:60_000,headersTimeout:15_000},handler)};
}

async function main() {
  const [command, ...args] = process.argv.slice(2);
  const {values}=parseArgs({args,options:{data:{type:'string'},state:{type:'string'},origin:{type:'string'},person:{type:'string'},port:{type:'string',default:'8791'}}});
  if(!['serve','issue','revoke'].includes(command)) throw Error('命令为 serve、issue 或 revoke');
  const desk=await openDesk(values);
  if(command==='issue'){console.log(await desk.issue(values.person));return;}
  if(command==='revoke'){await desk.revoke(values.person); console.log('该员工的激活链接与登录已失效');return;}
  const port=Number(values.port);if(!Number.isInteger(port)||port<1024||port>65535) throw Error('端口范围为1024–65535');
  const server=desk.createServer();
  server.listen(port,'127.0.0.1',()=>console.log('员工服务已监听本机回环 '+server.address().port));
}
if(process.argv[1] && import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
  main().catch(error=>{console.error(error.message);process.exitCode=1;});
}
