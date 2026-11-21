@echo off
setlocal
powershell.exe -NoLogo -NoProfile -STA -ExecutionPolicy Bypass -File "%~dp0office.ps1" -Action Revoke
set "site_exit=%errorlevel%"
pause
exit /b %site_exit%
