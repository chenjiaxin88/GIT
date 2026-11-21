import assert from 'node:assert/strict';
import test from 'node:test';
import {mkdtemp, mkdir, writeFile, readFile, rm} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {request} from 'node:http';
import os from 'node:os';
import path from 'node:path';
import {openDesk} from './server.mjs';

const hash=x=>createHash('sha256').update(x).digest('hex');
const home='打开我的图词.html';
const origin='https://staff.test.invalid';
test('isolated read-only staff portal supports private videos, activation, restart, logout and per-person revocation',async t=>{
  const dir=await mkdtemp(path.join(os.tmpdir(),'intranet-desk-'));
  t.after(()=>rm(dir,{recursive:true,force:true}));
  const data=path.join(dir,'snapshot'),state=path.join(dir,'auth');
  const people=[];
  for(const name of ['员工甲','员工乙']){
    const id=hash(name).slice(0,24), video='原片/'+hash(name)+'.mp4';
    const folder=path.join(data,'people',id);
    await mkdir(path.join(folder,'原片'),{recursive:true});
    await writeFile(path.join(folder,home),name);
    await writeFile(path.join(folder,video),'0123456789');
    people.push({id,name,files:[home,video]});
  }
  await writeFile(path.join(data,'snapshot.json'),JSON.stringify({version:1,people}));
  const desk=await openDesk({data,state,origin});
  async function listen(d){
    const s=d.createServer();
    await new Promise(r=>s.listen(0,'127.0.0.1',r));
    t.after(()=>new Promise(resolve=>s.close(resolve)));
    return 'http://127.0.0.1:'+s.address().port;
  }
  let actual=await listen(desk);
  function call(p,opts={}) {
    return new Promise((resolve,reject)=>{
      const req=request(actual+p,{method:opts.method || 'GET',headers:{Host:new URL(origin).host,...opts.headers}},res=>{
        const pieces=[];res.on('data',chunk=>pieces.push(chunk));
        res.on('end',()=>resolve(new Response(Buffer.concat(pieces),{status:res.statusCode,headers:res.headers})));
        res.on('error',reject);
      });
      req.on('error',reject);req.end(opts.body);
    });
  }
  const mine='/mine/'+encodeURIComponent(home);
  const first=people[0].files[1].split('/').map(encodeURIComponent).join('/');
  const mineVideo='/mine/'+first;
  const activate=code=>call('/activate',{method:'POST',headers:{Origin:origin,'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({code}).toString()});
  const cookie=response=>response.headers.get('set-cookie').split(';')[0];
  const login=async name=>{const url=new URL(await desk.issue(name));return activate(url.hash.slice(1));};
  assert.equal((await call(mine)).status,401);
  assert.equal((await call(mineVideo,{headers:{Range:'bytes=1-4'}})).status,401);
  assert.equal((await call('/preview/admin')).status,404);
  assert.equal((await call('/snapshot.json')).status,404);
  assert.equal((await call('/',{headers:{Host:'unapproved.invalid'}})).status,421);
  assert.equal((await call('/activate',{method:'POST',headers:{Origin:'https://wrong.test'},body:'code=test'})).status,403);
  assert.equal((await activate('not-a-valid-code')).status,403);
  assert.equal((await call('/activate')).headers.get('referrer-policy'),'same-origin');
  const code=new URL(await desk.issue(people[0].name)).hash.slice(1);
  const result=await Promise.all([activate(code),activate(code)]);
  assert.deepEqual(result.map(x=>x.status).sort(),[303,403]);
  const good=result.find(x=>x.status===303);
  assert.match(good.headers.get('set-cookie'),/HttpOnly.*SameSite=Strict.*Secure/);
  const a=cookie(good), b=cookie(await login(people[1].name));
  assert.equal(await (await call(mine,{headers:{Cookie:a}})).text(),people[0].name);
  assert.equal(await (await call(mine,{headers:{Cookie:b}})).text(),people[1].name);
  assert.equal((await call(mineVideo,{headers:{Cookie:b}})).status,404);
  assert.equal((await call('/mine/people/'+people[0].id+'/'+first,{headers:{Cookie:b}})).status,404);
  const ranged=await call(mineVideo,{headers:{Cookie:a,Range:'bytes=3-6'}});
  assert.equal(ranged.status,206);
  assert.equal(ranged.headers.get('content-range'),'bytes 3-6/10');
  assert.equal(await ranged.text(),'3456');
  const suffix=await call(mineVideo,{headers:{Cookie:a,Range:'bytes=-3'}});
  assert.equal(await suffix.text(),'789');
  assert.equal((await call(mineVideo,{method:'HEAD',headers:{Cookie:a}})).headers.get('content-length'),'10');
  assert.equal((await call(mineVideo,{headers:{Cookie:a,Range:'bytes=12-'}})).status,416);
  assert.equal((await call(mineVideo,{method:'PUT',headers:{Cookie:a}})).status,405);
  const expired=new URL(await desk.issue(people[0].name)).hash.slice(1);
  const file=path.join(state,'invites',hash(expired));
  const stored=JSON.parse(await readFile(file,'utf8'));
  assert.ok(!(await readFile(file,'utf8')).includes(expired));
  await writeFile(file,JSON.stringify({...stored,expires:Date.now()-1}));
  assert.equal((await activate(expired)).status,403);
  const unredeemed=new URL(await desk.issue(people[0].name)).hash.slice(1);
  const reopened=await openDesk({data,state,origin});
  actual=await listen(reopened);
  assert.equal((await call(mine,{headers:{Cookie:a}})).status,200);
  await reopened.revoke(people[0].name);
  assert.equal((await call(mine,{headers:{Cookie:a}})).status,401);
  assert.equal((await activate(unredeemed)).status,403);
  assert.equal((await call(mine,{headers:{Cookie:b}})).status,200);
  assert.equal((await call('/logout',{method:'POST',headers:{Origin:origin,Cookie:b}})).status,303);
  assert.equal((await call(mine,{headers:{Cookie:b}})).status,401);
});
