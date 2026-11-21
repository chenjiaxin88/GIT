import {readFile} from 'node:fs/promises';
import {createServer} from 'node:https';
import {isIPv4} from 'node:net';
import {networkInterfaces} from 'node:os';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {parseArgs} from 'node:util';
import {openDesk} from './server.mjs';

export function privateIPv4(address) {
  if (!address || !isIPv4(address)) return false;
  const [a,b] = address.split('.').map(Number);
  return a === 10 || (a === 192 && b === 168) || (a === 172 && b >= 16 && b <= 31) || a === 127;
}

async function passphraseFromPipe() {
  if (process.stdin.isTTY) throw new Error('请从 Windows 启动菜单输入证书口令。');
  const chunks = [];
  let length = 0;
  for await (const chunk of process.stdin) {
    length += chunk.length;
    if (length > 8192) throw new Error('证书口令输入过长。');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8').replace(/\r?\n$/, '');
}

export async function startOfficeTLS({origin,bind,data,state,pfx,passphrase}) {
  const url = new URL(origin);
  if (url.protocol !== 'https:' || url.origin !== origin)
    throw new Error('请填写与证书匹配的 HTTPS 网址，只包含域名和端口。');
  const addresses = Object.values(networkInterfaces()).flat().filter(Boolean);
  if (!privateIPv4(bind) || !addresses.some(item => item.address === bind))
    throw new Error('监听地址须为这台电脑已有的、指定的办公网私有 IPv4 地址。');
  if (!pfx) throw new Error('请选择 IT 提供的服务器 PFX 证书。');
  const desk = await openDesk({origin,data,state});
  const server = createServer({
    pfx:await readFile(pfx), passphrase, minVersion:'TLSv1.2',
    requestTimeout:60_000, headersTimeout:15_000,
  }, (req,res) => {
    if (!privateIPv4(req.socket.remoteAddress)) {
      res.writeHead(403).end(); return;
    }
    desk.handler(req,res);
  });
  const port = Number(url.port || 443);
  await new Promise((ok,fail) => {
    server.once('error',fail);
    server.listen(port,bind,() => {server.removeListener('error',fail);ok();});
  });
  return server;
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  try {
    const {values} = parseArgs({options:{
      data:{type:'string'},state:{type:'string'},origin:{type:'string'},bind:{type:'string'},
      pfx:{type:'string'},'passphrase-stdin':{type:'boolean',default:false},
    }});
    const phrase = values['passphrase-stdin'] ? await passphraseFromPipe() : undefined;
    const server = await startOfficeTLS({...values,passphrase:phrase});
    console.log('员工站已监听指定地址 '+server.address().address+'，入口 '+values.origin);
  } catch (error) {
    console.error('启动失败：'+error.message);
    process.exitCode = 1;
  }
}
