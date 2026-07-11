(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var zf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function Yx(){if($g)return To;$g=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return To.Fragment=e,To.jsx=i,To.jsxs=i,To}var t_;function jx(){return t_||(t_=1,zf.exports=Yx()),zf.exports}var W=jx(),Bf={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function Zx(){if(e_)return ee;e_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function M(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function _(L,nt,yt){this.props=L,this.context=nt,this.refs=y,this.updater=yt||A}_.prototype.isReactComponent={},_.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=_.prototype;function N(L,nt,yt){this.props=L,this.context=nt,this.refs=y,this.updater=yt||A}var U=N.prototype=new B;U.constructor=N,R(U,_.prototype),U.isPureReactComponent=!0;var Q=Array.isArray;function G(){}var z={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function w(L,nt,yt){var Y=yt.ref;return{$$typeof:o,type:L,key:nt,ref:Y!==void 0?Y:null,props:yt}}function C(L,nt){return w(L.type,nt,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ct(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return nt[yt]})}var st=/\/+/g;function gt(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?ct(""+L.key):nt.toString(36)}function _t(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(G,G):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,nt,yt,Y,ut){var Tt=typeof L;(Tt==="undefined"||Tt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(Tt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case o:case e:St=!0;break;case v:return St=L._init,O(St(L._payload),nt,yt,Y,ut)}}if(St)return ut=ut(L),St=Y===""?"."+gt(L,0):Y,Q(ut)?(yt="",St!=null&&(yt=St.replace(st,"$&/")+"/"),O(ut,nt,yt,"",function(ne){return ne})):ut!=null&&(H(ut)&&(ut=C(ut,yt+(ut.key==null||L&&L.key===ut.key?"":(""+ut.key).replace(st,"$&/")+"/")+St)),nt.push(ut)),1;St=0;var Gt=Y===""?".":Y+":";if(Q(L))for(var Ft=0;Ft<L.length;Ft++)Y=L[Ft],Tt=Gt+gt(Y,Ft),St+=O(Y,nt,yt,Tt,ut);else if(Ft=M(L),typeof Ft=="function")for(L=Ft.call(L),Ft=0;!(Y=L.next()).done;)Y=Y.value,Tt=Gt+gt(Y,Ft++),St+=O(Y,nt,yt,Tt,ut);else if(Tt==="object"){if(typeof L.then=="function")return O(_t(L),nt,yt,Y,ut);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return St}function Z(L,nt,yt){if(L==null)return L;var Y=[],ut=0;return O(L,Y,"","",function(Tt){return nt.call(yt,Tt,ut++)}),Y}function j(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var Mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},bt={map:Z,forEach:function(L,nt,yt){Z(L,function(){nt.apply(this,arguments)},yt)},count:function(L){var nt=0;return Z(L,function(){nt++}),nt},toArray:function(L){return Z(L,function(nt){return nt})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return ee.Activity=x,ee.Children=bt,ee.Component=_,ee.Fragment=i,ee.Profiler=l,ee.PureComponent=N,ee.StrictMode=r,ee.Suspense=m,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ee.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},ee.cache=function(L){return function(){return L.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(L,nt,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Y=R({},L.props),ut=L.key;if(nt!=null)for(Tt in nt.key!==void 0&&(ut=""+nt.key),nt)!K.call(nt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&nt.ref===void 0||(Y[Tt]=nt[Tt]);var Tt=arguments.length-2;if(Tt===1)Y.children=yt;else if(1<Tt){for(var St=Array(Tt),Gt=0;Gt<Tt;Gt++)St[Gt]=arguments[Gt+2];Y.children=St}return w(L.type,ut,Y)},ee.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},ee.createElement=function(L,nt,yt){var Y,ut={},Tt=null;if(nt!=null)for(Y in nt.key!==void 0&&(Tt=""+nt.key),nt)K.call(nt,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ut[Y]=nt[Y]);var St=arguments.length-2;if(St===1)ut.children=yt;else if(1<St){for(var Gt=Array(St),Ft=0;Ft<St;Ft++)Gt[Ft]=arguments[Ft+2];ut.children=Gt}if(L&&L.defaultProps)for(Y in St=L.defaultProps,St)ut[Y]===void 0&&(ut[Y]=St[Y]);return w(L,Tt,ut)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(L){return{$$typeof:d,render:L}},ee.isValidElement=H,ee.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:j}},ee.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},ee.startTransition=function(L){var nt=z.T,yt={};z.T=yt;try{var Y=L(),ut=z.S;ut!==null&&ut(yt,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(G,Mt)}catch(Tt){Mt(Tt)}finally{nt!==null&&yt.types!==null&&(nt.types=yt.types),z.T=nt}},ee.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ee.use=function(L){return z.H.use(L)},ee.useActionState=function(L,nt,yt){return z.H.useActionState(L,nt,yt)},ee.useCallback=function(L,nt){return z.H.useCallback(L,nt)},ee.useContext=function(L){return z.H.useContext(L)},ee.useDebugValue=function(){},ee.useDeferredValue=function(L,nt){return z.H.useDeferredValue(L,nt)},ee.useEffect=function(L,nt){return z.H.useEffect(L,nt)},ee.useEffectEvent=function(L){return z.H.useEffectEvent(L)},ee.useId=function(){return z.H.useId()},ee.useImperativeHandle=function(L,nt,yt){return z.H.useImperativeHandle(L,nt,yt)},ee.useInsertionEffect=function(L,nt){return z.H.useInsertionEffect(L,nt)},ee.useLayoutEffect=function(L,nt){return z.H.useLayoutEffect(L,nt)},ee.useMemo=function(L,nt){return z.H.useMemo(L,nt)},ee.useOptimistic=function(L,nt){return z.H.useOptimistic(L,nt)},ee.useReducer=function(L,nt,yt){return z.H.useReducer(L,nt,yt)},ee.useRef=function(L){return z.H.useRef(L)},ee.useState=function(L){return z.H.useState(L)},ee.useSyncExternalStore=function(L,nt,yt){return z.H.useSyncExternalStore(L,nt,yt)},ee.useTransition=function(){return z.H.useTransition()},ee.version="19.2.7",ee}var n_;function sd(){return n_||(n_=1,Bf.exports=Zx()),Bf.exports}var Ke=sd(),If={exports:{}},bo={},Ff={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function Kx(){return i_||(i_=1,(function(o){function e(O,Z){var j=O.length;O.push(Z);t:for(;0<j;){var Mt=j-1>>>1,bt=O[Mt];if(0<l(bt,Z))O[Mt]=Z,O[j]=bt,j=Mt;else break t}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var Z=O[0],j=O.pop();if(j!==Z){O[0]=j;t:for(var Mt=0,bt=O.length,L=bt>>>1;Mt<L;){var nt=2*(Mt+1)-1,yt=O[nt],Y=nt+1,ut=O[Y];if(0>l(yt,j))Y<bt&&0>l(ut,yt)?(O[Mt]=ut,O[Y]=j,Mt=Y):(O[Mt]=yt,O[nt]=j,Mt=nt);else if(Y<bt&&0>l(ut,j))O[Mt]=ut,O[Y]=j,Mt=Y;else break t}}return Z}function l(O,Z){var j=O.sortIndex-Z.sortIndex;return j!==0?j:O.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,x=null,S=3,M=!1,A=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=O)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function Q(O){if(R=!1,U(O),!A)if(i(m)!==null)A=!0,G||(G=!0,ct());else{var Z=i(p);Z!==null&&_t(Q,Z.startTime-O)}}var G=!1,z=-1,K=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<K)}function H(){if(y=!1,G){var O=o.unstable_now();w=O;var Z=!0;try{t:{A=!1,R&&(R=!1,B(z),z=-1),M=!0;var j=S;try{e:{for(U(O),x=i(m);x!==null&&!(x.expirationTime>O&&C());){var Mt=x.callback;if(typeof Mt=="function"){x.callback=null,S=x.priorityLevel;var bt=Mt(x.expirationTime<=O);if(O=o.unstable_now(),typeof bt=="function"){x.callback=bt,U(O),Z=!0;break e}x===i(m)&&r(m),U(O)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var L=i(p);L!==null&&_t(Q,L.startTime-O),Z=!1}}break t}finally{x=null,S=j,M=!1}Z=void 0}}finally{Z?ct():G=!1}}}var ct;if(typeof N=="function")ct=function(){N(H)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,gt=st.port2;st.port1.onmessage=H,ct=function(){gt.postMessage(null)}}else ct=function(){_(H,0)};function _t(O,Z){z=_(function(){O(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(O){switch(S){case 1:case 2:case 3:var Z=3;break;default:Z=S}var j=S;S=Z;try{return O()}finally{S=j}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var j=S;S=O;try{return Z()}finally{S=j}},o.unstable_scheduleCallback=function(O,Z,j){var Mt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Mt+j:Mt):j=Mt,O){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=j+bt,O={id:v++,callback:Z,priorityLevel:O,startTime:j,expirationTime:bt,sortIndex:-1},j>Mt?(O.sortIndex=j,e(p,O),i(m)===null&&O===i(p)&&(R?(B(z),z=-1):R=!0,_t(Q,j-Mt))):(O.sortIndex=bt,e(m,O),A||M||(A=!0,G||(G=!0,ct()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var Z=S;return function(){var j=S;S=Z;try{return O.apply(this,arguments)}finally{S=j}}}})(Hf)),Hf}var a_;function Qx(){return a_||(a_=1,Ff.exports=Kx()),Ff.exports}var Gf={exports:{}},bn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function Jx(){if(r_)return bn;r_=1;var o=sd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,bn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},bn.flushSync=function(m){var p=h.T,v=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=v,r.d.f()}},bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:M}):v==="script"&&r.d.X(m,{crossOrigin:x,integrity:S,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=d(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},bn.requestFormReset=function(m){r.d.r(m)},bn.unstable_batchedUpdates=function(m,p){return m(p)},bn.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},bn.version="19.2.7",bn}var s_;function $x(){if(s_)return Gf.exports;s_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=Jx(),Gf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function tS(){if(o_)return bo;o_=1;var o=Qx(),e=sd(),i=$x();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,s=f;break}if(E===s){g=!0,s=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=c;break}if(E===s){g=!0,s=f,a=c;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function ct(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var st=Symbol.for("react.client.reference");function gt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===st?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case Q:return"Suspense";case G:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case N:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:gt(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return gt(t(n))}catch{}}return null}var _t=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Mt=[],bt=-1;function L(t){return{current:t}}function nt(t){0>bt||(t.current=Mt[bt],Mt[bt]=null,bt--)}function yt(t,n){bt++,Mt[bt]=t.current,t.current=n}var Y=L(null),ut=L(null),Tt=L(null),St=L(null);function Gt(t,n){switch(yt(Tt,n),yt(ut,t),yt(Y,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Mg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Mg(n),t=Eg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}nt(Y),yt(Y,t)}function Ft(){nt(Y),nt(ut),nt(Tt)}function ne(t){t.memoizedState!==null&&yt(St,t);var n=Y.current,a=Eg(n,t.type);n!==a&&(yt(ut,t),yt(Y,a))}function Ue(t){ut.current===t&&(nt(Y),nt(ut)),St.current===t&&(nt(St),So._currentValue=j)}var ue,ke;function I(t){if(ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ue=n&&n[1]||"",ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+t+ke}var En=!1;function ce(t,n){if(!t||En)return"";En=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var tt=rt}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(rt){tt=rt}t.call(mt.prototype)}}else{try{throw Error()}catch(rt){tt=rt}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&tt&&typeof rt.stack=="string")return[rt.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var P=g.split(`
`),$=E.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<$.length&&!$[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===$.length)for(s=P.length-1,c=$.length-1;1<=s&&0<=c&&P[s]!==$[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==$[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==$[c]){var ft=`
`+P[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=c);break}}}finally{En=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?I(a):""}function pe(t,n){switch(t.tag){case 26:case 27:case 5:return I(t.type);case 16:return I("Lazy");case 13:return t.child!==n&&n!==null?I("Suspense Fallback"):I("Suspense");case 19:return I("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return I("Activity");default:return""}}function Wt(t){try{var n="",a=null;do n+=pe(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ce=Object.prototype.hasOwnProperty,qt=o.unstable_scheduleCallback,D=o.unstable_cancelCallback,T=o.unstable_shouldYield,et=o.unstable_requestPaint,ht=o.unstable_now,Et=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Xt=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,me=o.unstable_IdlePriority,At=o.log,Bt=o.unstable_setDisableYieldValue,Yt=null,kt=null;function Nt(t){if(typeof At=="function"&&Bt(t),kt&&typeof kt.setStrictMode=="function")try{kt.setStrictMode(Yt,t)}catch{}}var Jt=Math.clz32?Math.clz32:V,ie=Math.log,Le=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(ie(t)/Le|0)|0}var Rt=256,lt=262144,vt=4194304;function Ct(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Dt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Ct(s):(g&=E,g!==0?c=Ct(g):a||(a=E&~t,a!==0&&(c=Ct(a))))):(E=s&~f,E!==0?c=Ct(E):g!==0?c=Ct(g):a||(a=s&~t,a!==0&&(c=Ct(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function $t(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function qe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cn(){var t=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),t}function ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _n(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ci(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,$=t.hiddenUpdates;for(a=g&~a;0<a;){var ft=31-Jt(a),mt=1<<ft;E[ft]=0,P[ft]=-1;var tt=$[ft];if(tt!==null)for($[ft]=null,ft=0;ft<tt.length;ft++){var rt=tt[ft];rt!==null&&(rt.lane&=-536870913)}a&=~mt}s!==0&&Ls(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Ls(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Jt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ns(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Jt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Si(t,n){var a=n&-n;return a=(a&42)!==0?1:Va(a),(a&(t.suspendedLanes|n))!==0?0:a}function Va(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Tr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Os(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Wg(t.type))}function Xa(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var ui=Math.random().toString(36).slice(2),Ye="__reactFiber$"+ui,vn="__reactProps$"+ui,Ui="__reactContainer$"+ui,Ps="__reactEvents$"+ui,wc="__reactListeners$"+ui,Dc="__reactHandles$"+ui,Go="__reactResources$"+ui,ka="__reactMarker$"+ui;function b(t){delete t[Ye],delete t[vn],delete t[Ps],delete t[wc],delete t[Dc]}function X(t){var n=t[Ye];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ui]||a[Ye]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Dg(t);t!==null;){if(a=t[Ye])return a;t=Dg(t)}return n}t=a,a=t.parentNode}return null}function it(t){if(t=t[Ye]||t[Ui]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function at(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function k(t){var n=t[Go];return n||(n=t[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function xt(t){t[ka]=!0}var Ut=new Set,Pt={};function Ot(t,n){Kt(t,n),Kt(t+"Capture",n)}function Kt(t,n){for(Pt[t]=n,t=0;t<n.length;t++)Ut.add(n[t])}var te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},ge={};function Me(t){return Ce.call(ge,t)?!0:Ce.call(jt,t)?!1:te.test(t)?ge[t]=!0:(jt[t]=!0,!1)}function Ge(t,n,a){if(Me(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ae(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function en(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ee(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Cn(t){if(!t._valueTracker){var n=en(t)?"checked":"value";t._valueTracker=Ee(t,n,""+t[n])}}function Li(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=en(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function pn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qa=/[\n"\\]/g;function fe(t){return t.replace(qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Tn(t,n,a,s,c,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ht(n)):t.value!==""+Ht(n)&&(t.value=""+Ht(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?un(t,g,Ht(n)):a!=null?un(t,g,Ht(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Ht(E):t.removeAttribute("name")}function wn(t,n,a,s,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Cn(t);return}a=a!=null?""+Ht(a):"",n=n!=null?""+Ht(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Cn(t)}function un(t,n,a){n==="number"&&pn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Ht(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function br(t,n,a){if(n!=null&&(n=""+Ht(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ht(a):""}function yi(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(_t(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Ht(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Cn(t)}function Ar(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var V0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||V0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Sd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&xd(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&xd(t,f,n[f])}function Uc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var X0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),k0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(t){return k0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ni(){}var Lc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rr=null,Cr=null;function yd(t){var n=it(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Tn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[vn]||null;if(!c)throw Error(r(90));Tn(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Li(s)}break t;case"textarea":br(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var Oc=!1;function Md(t,n,a){if(Oc)return t(n,a);Oc=!0;try{var s=t(n);return s}finally{if(Oc=!1,(Rr!==null||Cr!==null)&&(wl(),Rr&&(n=Rr,t=Cr,Cr=Rr=null,yd(n),t)))for(n=0;n<t.length;n++)yd(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[vn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(Oi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Pc=!1}var oa=null,zc=null,Xo=null;function Ed(){if(Xo)return Xo;var t,n=zc,a=n.length,s,c="value"in oa?oa.value:oa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Xo=c.slice(t,1<s?1-s:void 0)}function ko(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Td(){return!1}function On(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Td,this.isPropagationStopped=Td,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=On(Wa),Is=x({},Wa,{view:0,detail:0}),q0=On(Is),Bc,Ic,Fs,Yo=x({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Bc=t.screenX-Fs.screenX,Ic=t.screenY-Fs.screenY):Ic=Bc=0,Fs=t),Bc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),bd=On(Yo),W0=x({},Yo,{dataTransfer:0}),Y0=On(W0),j0=x({},Is,{relatedTarget:0}),Fc=On(j0),Z0=x({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=On(Z0),Q0=x({},Wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J0=On(Q0),$0=x({},Wa,{data:0}),Ad=On($0),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=nv[t])?!!n[t]:!1}function Hc(){return iv}var av=x({},Is,{key:function(t){if(t.key){var n=tv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ev[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rv=On(av),sv=x({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rd=On(sv),ov=x({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),lv=On(ov),cv=x({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=On(cv),fv=x({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hv=On(fv),dv=x({},Wa,{newState:0,oldState:0}),pv=On(dv),mv=[9,13,27,32],Gc=Oi&&"CompositionEvent"in window,Hs=null;Oi&&"documentMode"in document&&(Hs=document.documentMode);var gv=Oi&&"TextEvent"in window&&!Hs,Cd=Oi&&(!Gc||Hs&&8<Hs&&11>=Hs),wd=" ",Dd=!1;function Ud(t,n){switch(t){case"keyup":return mv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function _v(t,n){switch(t){case"compositionend":return Ld(n);case"keypress":return n.which!==32?null:(Dd=!0,wd);case"textInput":return t=n.data,t===wd&&Dd?null:t;default:return null}}function vv(t,n){if(wr)return t==="compositionend"||!Gc&&Ud(t,n)?(t=Ed(),Xo=zc=oa=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cd&&n.locale!=="ko"?null:n.data;default:return null}}var xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!xv[t.type]:n==="textarea"}function Od(t,n,a,s){Rr?Cr?Cr.push(s):Cr=[s]:Rr=s,n=zl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function Sv(t){gg(t,0)}function jo(t){var n=at(t);if(Li(n))return t}function Pd(t,n){if(t==="change")return n}var zd=!1;if(Oi){var Vc;if(Oi){var Xc="oninput"in document;if(!Xc){var Bd=document.createElement("div");Bd.setAttribute("oninput","return;"),Xc=typeof Bd.oninput=="function"}Vc=Xc}else Vc=!1;zd=Vc&&(!document.documentMode||9<document.documentMode)}function Id(){Gs&&(Gs.detachEvent("onpropertychange",Fd),Vs=Gs=null)}function Fd(t){if(t.propertyName==="value"&&jo(Vs)){var n=[];Od(n,Vs,t,Nc(t)),Md(Sv,n)}}function yv(t,n,a){t==="focusin"?(Id(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",Fd)):t==="focusout"&&Id()}function Mv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Vs)}function Ev(t,n){if(t==="click")return jo(n)}function Tv(t,n){if(t==="input"||t==="change")return jo(n)}function bv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:bv;function Xs(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ce.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function Hd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gd(t,n){var a=Hd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Hd(a)}}function Vd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=pn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pn(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Av=Oi&&"documentMode"in document&&11>=document.documentMode,Dr=null,qc=null,ks=null,Wc=!1;function kd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||Dr==null||Dr!==pn(s)||(s=Dr,"selectionStart"in s&&kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Xs(ks,s)||(ks=s,s=zl(qc,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Dr)))}function Ya(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ur={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},Yc={},qd={};Oi&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function ja(t){if(Yc[t])return Yc[t];if(!Ur[t])return t;var n=Ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qd)return Yc[t]=n[a];return t}var Wd=ja("animationend"),Yd=ja("animationiteration"),jd=ja("animationstart"),Rv=ja("transitionrun"),Cv=ja("transitionstart"),wv=ja("transitioncancel"),Zd=ja("transitionend"),Kd=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function fi(t,n){Kd.set(t,n),Ot(n,[t])}var Zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},$n=[],Lr=0,Zc=0;function Ko(){for(var t=Lr,n=Zc=Lr=0;n<t;){var a=$n[n];$n[n++]=null;var s=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var f=$n[n];if($n[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&Qd(a,c,f)}}function Qo(t,n,a,s){$n[Lr++]=t,$n[Lr++]=n,$n[Lr++]=a,$n[Lr++]=s,Zc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Kc(t,n,a,s){return Qo(t,n,a,s),Jo(t)}function Za(t,n){return Qo(t,null,null,n),Jo(t)}function Qd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Jt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jo(t){if(50<ho)throw ho=0,sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function Dv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new Dv(t,n,a,s)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Pi(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Jd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $o(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")Qc(t)&&(g=1);else if(typeof t=="string")g=Px(t,a,Y.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=Xn(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return Ka(a.children,c,f,n);case y:g=8,c|=24;break;case _:return t=Xn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case Q:return t=Xn(13,a,n,c),t.elementType=Q,t.lanes=f,t;case G:return t=Xn(19,a,n,c),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:g=10;break t;case B:g=9;break t;case U:g=11;break t;case z:g=14;break t;case K:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ka(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function Jc(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function $d(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function $c(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var tp=new WeakMap;function ti(t,n){if(typeof t=="object"&&t!==null){var a=tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Wt(n)},tp.set(t,n),n)}return{value:t,source:n,stack:Wt(n)}}var Or=[],Pr=0,tl=null,qs=0,ei=[],ni=0,la=null,Mi=1,Ei="";function zi(t,n){Or[Pr++]=qs,Or[Pr++]=tl,tl=t,qs=n}function ep(t,n,a){ei[ni++]=Mi,ei[ni++]=Ei,ei[ni++]=la,la=t;var s=Mi;t=Ei;var c=32-Jt(s)-1;s&=~(1<<c),a+=1;var f=32-Jt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Mi=1<<32-Jt(n)+c|a<<c|s,Ei=f+t}else Mi=1<<f|a<<c|s,Ei=t}function tu(t){t.return!==null&&(zi(t,1),ep(t,1,0))}function eu(t){for(;t===tl;)tl=Or[--Pr],Or[Pr]=null,qs=Or[--Pr],Or[Pr]=null;for(;t===la;)la=ei[--ni],ei[ni]=null,Ei=ei[--ni],ei[ni]=null,Mi=ei[--ni],ei[ni]=null}function np(t,n){ei[ni++]=Mi,ei[ni++]=Ei,ei[ni++]=la,Mi=n.id,Ei=n.overflow,la=t}var xn=null,Ve=null,xe=!1,ca=null,ii=!1,nu=Error(r(519));function ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ti(n,t)),nu}function ip(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Ye]=t,n[vn]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)de(mo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),wn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),yi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Sg(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=Ni),n=!0):n=!1,n||ua(t,!0)}function ap(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:xn=xn.return}}function zr(t){if(t!==xn)return!1;if(!xe)return ap(t),xe=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||yf(t.type,t.memoizedProps)),a=!a),a&&Ve&&ua(t),ap(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ve=wg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ve=wg(t)}else n===27?(n=Ve,Ta(t.type)?(t=Af,Af=null,Ve=t):Ve=n):Ve=xn?ri(t.stateNode.nextSibling):null;return!0}function Qa(){Ve=xn=null,xe=!1}function iu(){var t=ca;return t!==null&&(In===null?In=t:In.push.apply(In,t),ca=null),t}function Ws(t){ca===null?ca=[t]:ca.push(t)}var au=L(null),Ja=null,Bi=null;function fa(t,n,a){yt(au,n._currentValue),n._currentValue=a}function Ii(t){t._currentValue=au.current,nt(au)}function ru(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function su(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ru(f.return,a,t),s||(g=null);break t}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),ru(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Br(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=c.type;Vn(c.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(c===St.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}c=c.return}t!==null&&su(n,t,a,s),n.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function $a(t){Ja=t,Bi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return rp(Ja,t)}function nl(t,n){return Ja===null&&$a(t),rp(t,n)}function rp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Bi===null){if(t===null)throw Error(r(308));Bi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Bi=Bi.next=n;return a}var Uv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Lv=o.unstable_scheduleCallback,Nv=o.unstable_NormalPriority,nn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ou(){return{controller:new Uv,data:new Map,refCount:0}}function Ys(t){t.refCount--,t.refCount===0&&Lv(Nv,function(){t.controller.abort()})}var js=null,lu=0,Ir=0,Fr=null;function Ov(t,n){if(js===null){var a=js=[];lu=0,Ir=hf(),Fr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return lu++,n.then(sp,sp),n}function sp(){if(--lu===0&&js!==null){Fr!==null&&(Fr.status="fulfilled");var t=js;js=null,Ir=0,Fr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Pv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var op=O.S;O.S=function(t,n){km=ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ov(t,n),op!==null&&op(t,n)};var tr=L(null);function cu(){var t=tr.current;return t!==null?t:Fe.pooledCache}function il(t,n){n===null?yt(tr,tr.current):yt(tr,n.pool)}function lp(){var t=cu();return t===null?null:{parent:nn._currentValue,pool:t}}var Hr=Error(r(460)),uu=Error(r(474)),al=Error(r(542)),rl={then:function(){}};function cp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function up(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ni,Ni),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t;default:if(typeof n.status=="string")n.then(Ni,Ni);else{if(t=Fe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t}throw nr=n,Hr}}function er(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(nr=a,Hr):a}}var nr=null;function fp(){if(nr===null)throw Error(r(459));var t=nr;return nr=null,t}function hp(t){if(t===Hr||t===al)throw Error(r(483))}var Gr=null,Zs=0;function sl(t){var n=Zs;return Zs+=1,Gr===null&&(Gr=[]),up(Gr,t,n)}function Ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ol(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function dp(t){function n(q,F){if(t){var J=q.deletions;J===null?(q.deletions=[F],q.flags|=16):J.push(F)}}function a(q,F){if(!t)return null;for(;F!==null;)n(q,F),F=F.sibling;return null}function s(q){for(var F=new Map;q!==null;)q.key!==null?F.set(q.key,q):F.set(q.index,q),q=q.sibling;return F}function c(q,F){return q=Pi(q,F),q.index=0,q.sibling=null,q}function f(q,F,J){return q.index=J,t?(J=q.alternate,J!==null?(J=J.index,J<F?(q.flags|=67108866,F):J):(q.flags|=67108866,F)):(q.flags|=1048576,F)}function g(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,F,J,dt){return F===null||F.tag!==6?(F=Jc(J,q.mode,dt),F.return=q,F):(F=c(F,J),F.return=q,F)}function P(q,F,J,dt){var Zt=J.type;return Zt===R?ft(q,F,J.props.children,dt,J.key):F!==null&&(F.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===K&&er(Zt)===F.type)?(F=c(F,J.props),Ks(F,J),F.return=q,F):(F=$o(J.type,J.key,J.props,null,q.mode,dt),Ks(F,J),F.return=q,F)}function $(q,F,J,dt){return F===null||F.tag!==4||F.stateNode.containerInfo!==J.containerInfo||F.stateNode.implementation!==J.implementation?(F=$c(J,q.mode,dt),F.return=q,F):(F=c(F,J.children||[]),F.return=q,F)}function ft(q,F,J,dt,Zt){return F===null||F.tag!==7?(F=Ka(J,q.mode,dt,Zt),F.return=q,F):(F=c(F,J),F.return=q,F)}function mt(q,F,J){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=Jc(""+F,q.mode,J),F.return=q,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return J=$o(F.type,F.key,F.props,null,q.mode,J),Ks(J,F),J.return=q,J;case A:return F=$c(F,q.mode,J),F.return=q,F;case K:return F=er(F),mt(q,F,J)}if(_t(F)||ct(F))return F=Ka(F,q.mode,J,null),F.return=q,F;if(typeof F.then=="function")return mt(q,sl(F),J);if(F.$$typeof===N)return mt(q,nl(q,F),J);ol(q,F)}return null}function tt(q,F,J,dt){var Zt=F!==null?F.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Zt!==null?null:E(q,F,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Zt?P(q,F,J,dt):null;case A:return J.key===Zt?$(q,F,J,dt):null;case K:return J=er(J),tt(q,F,J,dt)}if(_t(J)||ct(J))return Zt!==null?null:ft(q,F,J,dt,null);if(typeof J.then=="function")return tt(q,F,sl(J),dt);if(J.$$typeof===N)return tt(q,F,nl(q,J),dt);ol(q,J)}return null}function rt(q,F,J,dt,Zt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return q=q.get(J)||null,E(F,q,""+dt,Zt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return q=q.get(dt.key===null?J:dt.key)||null,P(F,q,dt,Zt);case A:return q=q.get(dt.key===null?J:dt.key)||null,$(F,q,dt,Zt);case K:return dt=er(dt),rt(q,F,J,dt,Zt)}if(_t(dt)||ct(dt))return q=q.get(J)||null,ft(F,q,dt,Zt,null);if(typeof dt.then=="function")return rt(q,F,J,sl(dt),Zt);if(dt.$$typeof===N)return rt(q,F,J,nl(F,dt),Zt);ol(F,dt)}return null}function It(q,F,J,dt){for(var Zt=null,Te=null,Vt=F,se=F=0,ve=null;Vt!==null&&se<J.length;se++){Vt.index>se?(ve=Vt,Vt=null):ve=Vt.sibling;var be=tt(q,Vt,J[se],dt);if(be===null){Vt===null&&(Vt=ve);break}t&&Vt&&be.alternate===null&&n(q,Vt),F=f(be,F,se),Te===null?Zt=be:Te.sibling=be,Te=be,Vt=ve}if(se===J.length)return a(q,Vt),xe&&zi(q,se),Zt;if(Vt===null){for(;se<J.length;se++)Vt=mt(q,J[se],dt),Vt!==null&&(F=f(Vt,F,se),Te===null?Zt=Vt:Te.sibling=Vt,Te=Vt);return xe&&zi(q,se),Zt}for(Vt=s(Vt);se<J.length;se++)ve=rt(Vt,q,se,J[se],dt),ve!==null&&(t&&ve.alternate!==null&&Vt.delete(ve.key===null?se:ve.key),F=f(ve,F,se),Te===null?Zt=ve:Te.sibling=ve,Te=ve);return t&&Vt.forEach(function(wa){return n(q,wa)}),xe&&zi(q,se),Zt}function Qt(q,F,J,dt){if(J==null)throw Error(r(151));for(var Zt=null,Te=null,Vt=F,se=F=0,ve=null,be=J.next();Vt!==null&&!be.done;se++,be=J.next()){Vt.index>se?(ve=Vt,Vt=null):ve=Vt.sibling;var wa=tt(q,Vt,be.value,dt);if(wa===null){Vt===null&&(Vt=ve);break}t&&Vt&&wa.alternate===null&&n(q,Vt),F=f(wa,F,se),Te===null?Zt=wa:Te.sibling=wa,Te=wa,Vt=ve}if(be.done)return a(q,Vt),xe&&zi(q,se),Zt;if(Vt===null){for(;!be.done;se++,be=J.next())be=mt(q,be.value,dt),be!==null&&(F=f(be,F,se),Te===null?Zt=be:Te.sibling=be,Te=be);return xe&&zi(q,se),Zt}for(Vt=s(Vt);!be.done;se++,be=J.next())be=rt(Vt,q,se,be.value,dt),be!==null&&(t&&be.alternate!==null&&Vt.delete(be.key===null?se:be.key),F=f(be,F,se),Te===null?Zt=be:Te.sibling=be,Te=be);return t&&Vt.forEach(function(Wx){return n(q,Wx)}),xe&&zi(q,se),Zt}function Pe(q,F,J,dt){if(typeof J=="object"&&J!==null&&J.type===R&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Zt=J.key;F!==null;){if(F.key===Zt){if(Zt=J.type,Zt===R){if(F.tag===7){a(q,F.sibling),dt=c(F,J.props.children),dt.return=q,q=dt;break t}}else if(F.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===K&&er(Zt)===F.type){a(q,F.sibling),dt=c(F,J.props),Ks(dt,J),dt.return=q,q=dt;break t}a(q,F);break}else n(q,F);F=F.sibling}J.type===R?(dt=Ka(J.props.children,q.mode,dt,J.key),dt.return=q,q=dt):(dt=$o(J.type,J.key,J.props,null,q.mode,dt),Ks(dt,J),dt.return=q,q=dt)}return g(q);case A:t:{for(Zt=J.key;F!==null;){if(F.key===Zt)if(F.tag===4&&F.stateNode.containerInfo===J.containerInfo&&F.stateNode.implementation===J.implementation){a(q,F.sibling),dt=c(F,J.children||[]),dt.return=q,q=dt;break t}else{a(q,F);break}else n(q,F);F=F.sibling}dt=$c(J,q.mode,dt),dt.return=q,q=dt}return g(q);case K:return J=er(J),Pe(q,F,J,dt)}if(_t(J))return It(q,F,J,dt);if(ct(J)){if(Zt=ct(J),typeof Zt!="function")throw Error(r(150));return J=Zt.call(J),Qt(q,F,J,dt)}if(typeof J.then=="function")return Pe(q,F,sl(J),dt);if(J.$$typeof===N)return Pe(q,F,nl(q,J),dt);ol(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,F!==null&&F.tag===6?(a(q,F.sibling),dt=c(F,J),dt.return=q,q=dt):(a(q,F),dt=Jc(J,q.mode,dt),dt.return=q,q=dt),g(q)):a(q,F)}return function(q,F,J,dt){try{Zs=0;var Zt=Pe(q,F,J,dt);return Gr=null,Zt}catch(Vt){if(Vt===Hr||Vt===al)throw Vt;var Te=Xn(29,Vt,null,q.mode);return Te.lanes=dt,Te.return=q,Te}finally{}}}var ir=dp(!0),pp=dp(!1),ha=!1;function fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function da(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Re&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Jo(t),Qd(t,null,a),n}return Qo(t,s,n,a),Jo(t)}function Qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ns(t,a)}}function du(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pu=!1;function Js(){if(pu){var t=Fr;if(t!==null)throw t}}function $s(t,n,a,s){pu=!1;var c=t.updateQueue;ha=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,$=P.next;P.next=null,g===null?f=$:g.next=$,g=P;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,E=ft.lastBaseUpdate,E!==g&&(E===null?ft.firstBaseUpdate=$:E.next=$,ft.lastBaseUpdate=P))}if(f!==null){var mt=c.baseState;g=0,ft=$=P=null,E=f;do{var tt=E.lane&-536870913,rt=tt!==E.lane;if(rt?(_e&tt)===tt:(s&tt)===tt){tt!==0&&tt===Ir&&(pu=!0),ft!==null&&(ft=ft.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var It=t,Qt=E;tt=n;var Pe=a;switch(Qt.tag){case 1:if(It=Qt.payload,typeof It=="function"){mt=It.call(Pe,mt,tt);break t}mt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Qt.payload,tt=typeof It=="function"?It.call(Pe,mt,tt):It,tt==null)break t;mt=x({},mt,tt);break t;case 2:ha=!0}}tt=E.callback,tt!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[tt]:rt.push(tt))}else rt={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ft===null?($=ft=rt,P=mt):ft=ft.next=rt,g|=tt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ft===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=$,c.lastBaseUpdate=ft,f===null&&(c.shared.lanes=0),xa|=g,t.lanes=g,t.memoizedState=mt}}function mp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)mp(a[t],n)}var Vr=L(null),ll=L(0);function _p(t,n){t=Yi,yt(ll,t),yt(Vr,n),Yi=t|n.baseLanes}function mu(){yt(ll,Yi),yt(Vr,Vr.current)}function gu(){Yi=ll.current,nt(Vr),nt(ll)}var kn=L(null),ai=null;function ma(t){var n=t.alternate;yt(Je,Je.current&1),yt(kn,t),ai===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(ai=t)}function _u(t){yt(Je,Je.current),yt(kn,t),ai===null&&(ai=t)}function vp(t){t.tag===22?(yt(Je,Je.current),yt(kn,t),ai===null&&(ai=t)):ga()}function ga(){yt(Je,Je.current),yt(kn,kn.current)}function qn(t){nt(kn),ai===t&&(ai=null),nt(Je)}var Je=L(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Tf(a)||bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Fi=0,re=null,Ne=null,an=null,ul=!1,Xr=!1,ar=!1,fl=0,to=0,kr=null,zv=0;function je(){throw Error(r(321))}function vu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function xu(t,n,a,s,c,f){return Fi=f,re=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?em:Ou,ar=!1,f=a(s,c),ar=!1,Xr&&(f=Sp(n,a,s,c)),xp(t),f}function xp(t){O.H=io;var n=Ne!==null&&Ne.next!==null;if(Fi=0,an=Ne=re=null,ul=!1,to=0,kr=null,n)throw Error(r(300));t===null||rn||(t=t.dependencies,t!==null&&el(t)&&(rn=!0))}function Sp(t,n,a,s){re=t;var c=0;do{if(Xr&&(kr=null),to=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,an=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=nm,f=n(a,s)}while(Xr);return f}function Bv(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(re.flags|=1024),n}function Su(){var t=fl!==0;return fl=0,t}function yu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Mu(t){if(ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ul=!1}Fi=0,an=Ne=re=null,Xr=!1,to=fl=0,kr=null}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?re.memoizedState=an=t:an=an.next=t,an}function $e(){if(Ne===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=an===null?re.memoizedState:an.next;if(n!==null)an=n,Ne=t;else{if(t===null)throw re.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},an===null?re.memoizedState=an=t:an=an.next=t}return an}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=to;return to+=1,kr===null&&(kr=[]),t=up(kr,t,n),n=re,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?em:Ou),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===N)return Sn(t)}throw Error(r(438,String(t)))}function Eu(t){var n=null,a=re.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=re.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),re.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function Hi(t,n){return typeof n=="function"?n(t):n}function pl(t){var n=$e();return Tu(n,Ne,t)}function Tu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=g=null,P=null,$=n,ft=!1;do{var mt=$.lane&-536870913;if(mt!==$.lane?(_e&mt)===mt:(Fi&mt)===mt){var tt=$.revertLane;if(tt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),mt===Ir&&(ft=!0);else if((Fi&tt)===tt){$=$.next,tt===Ir&&(ft=!0);continue}else mt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=mt,g=f):P=P.next=mt,re.lanes|=tt,xa|=tt;mt=$.action,ar&&a(f,mt),f=$.hasEagerState?$.eagerState:a(f,mt)}else tt={lane:mt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},P===null?(E=P=tt,g=f):P=P.next=tt,re.lanes|=mt,xa|=mt;$=$.next}while($!==null&&$!==n);if(P===null?g=f:P.next=E,!Vn(f,t.memoizedState)&&(rn=!0,ft&&(a=Fr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function bu(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Vn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function yp(t,n,a){var s=re,c=$e(),f=xe;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Vn((Ne||c).memoizedState,a);if(g&&(c.memoizedState=a,rn=!0),c=c.queue,Cu(Tp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},Ep.bind(null,s,c,a,n),null),Fe===null)throw Error(r(349));f||(Fi&127)!==0||Mp(s,n,a)}return a}function Mp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=re.updateQueue,n===null?(n=hl(),re.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ep(t,n,a,s){n.value=a,n.getSnapshot=s,bp(n)&&Ap(t)}function Tp(t,n,a){return a(function(){bp(n)&&Ap(t)})}function bp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Ap(t){var n=Za(t,2);n!==null&&Fn(n,t,2)}function Au(t){var n=Dn();if(typeof t=="function"){var a=t;if(t=a(),ar){Nt(!0);try{a()}finally{Nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:t},n}function Rp(t,n,a,s){return t.baseState=a,Tu(t,Ne,typeof s=="function"?s:Hi)}function Iv(t,n,a,s,c){if(_l(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Cp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Cp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var E=a(c,s),P=O.S;P!==null&&P(g,E),wp(t,n,E)}catch($){Ru(t,n,$)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,s),wp(t,n,f)}catch($){Ru(t,n,$)}}function wp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Dp(t,n,s)},function(s){return Ru(t,n,s)}):Dp(t,n,a)}function Dp(t,n,a){n.status="fulfilled",n.value=a,Up(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Cp(t,a)))}function Ru(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Up(n),n=n.next;while(n!==s)}t.action=null}function Up(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Lp(t,n){return n}function Np(t,n){if(xe){var a=Fe.formState;if(a!==null){t:{var s=re;if(xe){if(Ve){e:{for(var c=Ve,f=ii;c.nodeType!==8;){if(!f){c=null;break e}if(c=ri(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ve=ri(c.nextSibling),s=c.data==="F!";break t}}ua(s)}s=!1}s&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lp,lastRenderedState:n},a.queue=s,a=Jp.bind(null,re,s),s.dispatch=a,s=Au(!1),f=Nu.bind(null,re,!1,s.queue),s=Dn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=Iv.bind(null,re,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Op(t){var n=$e();return Pp(n,Ne,t)}function Pp(t,n,a){if(n=Tu(t,n,Lp)[0],t=pl(Hi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(g){throw g===Hr?al:g}else s=n;n=$e();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(re.flags|=2048,qr(9,{destroy:void 0},Fv.bind(null,c,a),null)),[s,f,t]}function Fv(t,n){t.action=n}function zp(t){var n=$e(),a=Ne;if(a!==null)return Pp(n,a,t);$e(),n=n.memoizedState,a=$e();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function qr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=re.updateQueue,n===null&&(n=hl(),re.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Bp(){return $e().memoizedState}function ml(t,n,a,s){var c=Dn();re.flags|=t,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function gl(t,n,a,s){var c=$e();s=s===void 0?null:s;var f=c.memoizedState.inst;Ne!==null&&s!==null&&vu(s,Ne.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(re.flags|=t,c.memoizedState=qr(1|n,f,a,s))}function Ip(t,n){ml(8390656,8,t,n)}function Cu(t,n){gl(2048,8,t,n)}function Hv(t){re.flags|=4;var n=re.updateQueue;if(n===null)n=hl(),re.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Fp(t){var n=$e().memoizedState;return Hv({ref:n,nextImpl:t}),function(){if((Re&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Hp(t,n){return gl(4,2,t,n)}function Gp(t,n){return gl(4,4,t,n)}function Vp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xp(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,Vp.bind(null,n,t),a)}function wu(){}function kp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&vu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function qp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&vu(n,s[1]))return s[0];if(s=t(),ar){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s}function Du(t,n,a){return a===void 0||(Fi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Wm(),re.lanes|=t,xa|=t,a)}function Wp(t,n,a,s){return Vn(a,n)?a:Vr.current!==null?(t=Du(t,a,s),Vn(t,n)||(rn=!0),t):(Fi&42)===0||(Fi&1073741824)!==0&&(_e&261930)===0?(rn=!0,t.memoizedState=a):(t=Wm(),re.lanes|=t,xa|=t,n)}function Yp(t,n,a,s,c){var f=Z.p;Z.p=f!==0&&8>f?f:8;var g=O.T,E={};O.T=E,Nu(t,!1,n,a);try{var P=c(),$=O.S;if($!==null&&$(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ft=Pv(P,s);no(t,n,ft,jn(t))}else no(t,n,s,jn(t))}catch(mt){no(t,n,{then:function(){},status:"rejected",reason:mt},jn())}finally{Z.p=f,g!==null&&E.types!==null&&(g.types=E.types),O.T=g}}function Gv(){}function Uu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=jp(t).queue;Yp(t,c,n,j,a===null?Gv:function(){return Zp(t),a(s)})}function jp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Zp(t){var n=jp(t);n.next===null&&(n=t.alternate.memoizedState),no(t,n.next.queue,{},jn())}function Lu(){return Sn(So)}function Kp(){return $e().memoizedState}function Qp(){return $e().memoizedState}function Vv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=da(a);var s=pa(n,t,a);s!==null&&(Fn(s,n,a),Qs(s,n,a)),n={cache:ou()},t.payload=n;return}n=n.return}}function Xv(t,n,a){var s=jn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?$p(n,a):(a=Kc(t,n,a,s),a!==null&&(Fn(a,t,s),tm(a,n,s)))}function Jp(t,n,a){var s=jn();no(t,n,a,s)}function no(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))$p(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Vn(E,g))return Qo(t,n,c,0),Fe===null&&Ko(),!1}catch{}finally{}if(a=Kc(t,n,c,s),a!==null)return Fn(a,t,s),tm(a,n,s),!0}return!1}function Nu(t,n,a,s){if(s={lane:2,revertLane:hf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(r(479))}else n=Kc(t,a,s,2),n!==null&&Fn(n,t,2)}function _l(t){var n=t.alternate;return t===re||n!==null&&n===re}function $p(t,n){Xr=ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function tm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ns(t,a)}}var io={readContext:Sn,use:dl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};io.useEffectEvent=je;var em={readContext:Sn,use:dl,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Ip,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ml(4194308,4,Vp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ml(4194308,4,t,n)},useInsertionEffect:function(t,n){ml(4,2,t,n)},useMemo:function(t,n){var a=Dn();n=n===void 0?null:n;var s=t();if(ar){Nt(!0);try{t()}finally{Nt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Dn();if(a!==void 0){var c=a(n);if(ar){Nt(!0);try{a(n)}finally{Nt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Xv.bind(null,re,t),[s.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:function(t){t=Au(t);var n=t.queue,a=Jp.bind(null,re,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:wu,useDeferredValue:function(t,n){var a=Dn();return Du(a,t,n)},useTransition:function(){var t=Au(!1);return t=Yp.bind(null,re,t.queue,!0,!1),Dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=re,c=Dn();if(xe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Fe===null)throw Error(r(349));(_e&127)!==0||Mp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ip(Tp.bind(null,s,f,t),[t]),s.flags|=2048,qr(9,{destroy:void 0},Ep.bind(null,s,f,a,n),null),a},useId:function(){var t=Dn(),n=Fe.identifierPrefix;if(xe){var a=Ei,s=Mi;a=(s&~(1<<32-Jt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lu,useFormState:Np,useActionState:Np,useOptimistic:function(t){var n=Dn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nu.bind(null,re,!0,a),a.dispatch=n,[t,n]},useMemoCache:Eu,useCacheRefresh:function(){return Dn().memoizedState=Vv.bind(null,re)},useEffectEvent:function(t){var n=Dn(),a={impl:t};return n.memoizedState=a,function(){if((Re&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Ou={readContext:Sn,use:dl,useCallback:kp,useContext:Sn,useEffect:Cu,useImperativeHandle:Xp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:qp,useReducer:pl,useRef:Bp,useState:function(){return pl(Hi)},useDebugValue:wu,useDeferredValue:function(t,n){var a=$e();return Wp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=pl(Hi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:yp,useId:Kp,useHostTransitionStatus:Lu,useFormState:Op,useActionState:Op,useOptimistic:function(t,n){var a=$e();return Rp(a,Ne,t,n)},useMemoCache:Eu,useCacheRefresh:Qp};Ou.useEffectEvent=Fp;var nm={readContext:Sn,use:dl,useCallback:kp,useContext:Sn,useEffect:Cu,useImperativeHandle:Xp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:qp,useReducer:bu,useRef:Bp,useState:function(){return bu(Hi)},useDebugValue:wu,useDeferredValue:function(t,n){var a=$e();return Ne===null?Du(a,t,n):Wp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=bu(Hi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:yp,useId:Kp,useHostTransitionStatus:Lu,useFormState:zp,useActionState:zp,useOptimistic:function(t,n){var a=$e();return Ne!==null?Rp(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:Qp};nm.useEffectEvent=Fp;function Pu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=jn(),c=da(s);c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(Fn(n,t,s),Qs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=jn(),c=da(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=pa(t,c,s),n!==null&&(Fn(n,t,s),Qs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),s=da(a);s.tag=2,n!=null&&(s.callback=n),n=pa(t,s,a),n!==null&&(Fn(n,t,a),Qs(n,t,a))}};function im(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(c,f):!0}function am(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&zu.enqueueReplaceState(n,n.state,null)}function rr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=x({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function rm(t){Zo(t)}function sm(t){console.error(t)}function om(t){Zo(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function lm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Bu(t,n,a){return a=da(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function cm(t){return t=da(t),t.tag=3,t}function um(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){lm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){lm(n,a,s),typeof c!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function kv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Br(n,a,c,!0),a=kn.current,a!==null){switch(a.tag){case 31:case 13:return ai===null?Dl():a.alternate===null&&Ze===0&&(Ze=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),cf(t,s,c)),!1;case 22:return a.flags|=65536,s===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),cf(t,s,c)),!1}throw Error(r(435,a.tag))}return cf(t,s,c),Dl(),!1}if(xe)return n=kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==nu&&(t=Error(r(422),{cause:s}),Ws(ti(t,a)))):(s!==nu&&(n=Error(r(423),{cause:s}),Ws(ti(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ti(s,a),c=Bu(t.stateNode,s,c),du(t,c),Ze!==4&&(Ze=2)),!1;var f=Error(r(520),{cause:s});if(f=ti(f,a),fo===null?fo=[f]:fo.push(f),Ze!==4&&(Ze=2),n===null)return!0;s=ti(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Bu(a.stateNode,s,t),du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=cm(c),um(c,t,a,s),du(a,c),!1}a=a.return}while(a!==null);return!1}var Iu=Error(r(461)),rn=!1;function yn(t,n,a,s){n.child=t===null?pp(n,null,a,s):ir(n,t.child,a,s)}function fm(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return $a(n),s=xu(t,n,a,g,f,c),E=Su(),t!==null&&!rn?(yu(t,n,c),Gi(t,n,c)):(xe&&E&&tu(n),n.flags|=1,yn(t,n,s,c),n.child)}function hm(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Qc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,dm(t,n,f,s,c)):(t=$o(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Wu(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(g,s)&&t.ref===n.ref)return Gi(t,n,c)}return n.flags|=1,t=Pi(f,s),t.ref=n.ref,t.return=n,n.child=t}function dm(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Xs(f,s)&&t.ref===n.ref)if(rn=!1,n.pendingProps=s=f,Wu(t,c))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,Gi(t,n,c)}return Fu(t,n,a,s,c)}function pm(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return mm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,f!==null?f.cachePool:null),f!==null?_p(n,f):mu(),vp(n);else return s=n.lanes=536870912,mm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(il(n,f.cachePool),_p(n,f),ga(),n.memoizedState=null):(t!==null&&il(n,null),mu(),ga());return yn(t,n,c,a),n.child}function ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function mm(t,n,a,s,c){var f=cu();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&il(n,null),mu(),vp(n),t!==null&&Br(t,n,s,!0),n.childLanes=c,null}function xl(t,n){return n=yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function gm(t,n,a){return ir(n,t.child,null,a),t=xl(n,n.pendingProps),t.flags|=2,qn(n),n.memoizedState=null,t}function qv(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(xe){if(s.mode==="hidden")return t=xl(n,s),n.lanes=536870912,ao(null,t);if(_u(n),(t=Ve)?(t=Cg(t,ii),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=$d(t),a.return=n,n.child=a,xn=n,Ve=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return xl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(_u(n),c)if(n.flags&256)n.flags&=-257,n=gm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||Br(t,n,a,!1),c=(a&t.childLanes)!==0,rn||c){if(s=Fe,s!==null&&(g=Si(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Za(t,g),Fn(s,t,g),Iu;Dl(),n=gm(t,n,a)}else t=f.treeContext,Ve=ri(g.nextSibling),xn=n,xe=!0,ca=null,ii=!1,t!==null&&np(n,t),n=xl(n,s),n.flags|=4096;return n}return t=Pi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Fu(t,n,a,s,c){return $a(n),a=xu(t,n,a,s,void 0,c),s=Su(),t!==null&&!rn?(yu(t,n,c),Gi(t,n,c)):(xe&&s&&tu(n),n.flags|=1,yn(t,n,a,c),n.child)}function _m(t,n,a,s,c,f){return $a(n),n.updateQueue=null,a=Sp(n,s,a,c),xp(t),s=Su(),t!==null&&!rn?(yu(t,n,f),Gi(t,n,f)):(xe&&s&&tu(n),n.flags|=1,yn(t,n,a,f),n.child)}function vm(t,n,a,s,c){if($a(n),n.stateNode===null){var f=Nr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},fu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Nr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Pu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&zu.enqueueReplaceState(f,f.state,null),$s(n,s,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=rr(a,E);f.props=P;var $=f.context,ft=a.contextType;g=Nr,typeof ft=="object"&&ft!==null&&(g=Sn(ft));var mt=a.getDerivedStateFromProps;ft=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||$!==g)&&am(n,f,s,g),ha=!1;var tt=n.memoizedState;f.state=tt,$s(n,s,f,c),Js(),$=n.memoizedState,E||tt!==$||ha?(typeof mt=="function"&&(Pu(n,a,mt,s),$=n.memoizedState),(P=ha||im(n,a,P,s,tt,$,g))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=g,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,hu(t,n),g=n.memoizedProps,ft=rr(a,g),f.props=ft,mt=n.pendingProps,tt=f.context,$=a.contextType,P=Nr,typeof $=="object"&&$!==null&&(P=Sn($)),E=a.getDerivedStateFromProps,($=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||tt!==P)&&am(n,f,s,P),ha=!1,tt=n.memoizedState,f.state=tt,$s(n,s,f,c),Js();var rt=n.memoizedState;g!==mt||tt!==rt||ha||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof E=="function"&&(Pu(n,a,E,s),rt=n.memoizedState),(ft=ha||im(n,a,ft,s,tt,rt,P)||t!==null&&t.dependencies!==null&&el(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=P,s=ft):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Sl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=ir(n,t.child,null,c),n.child=ir(n,null,a,c)):yn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Gi(t,n,c),t}function xm(t,n,a,s){return Qa(),n.flags|=256,yn(t,n,a,s),n.child}var Hu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gu(t){return{baseLanes:t,cachePool:lp()}}function Vu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Yn),t}function Sm(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Je.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(xe){if(c?ma(n):ga(),(t=Ve)?(t=Cg(t,ii),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:la!==null?{id:Mi,overflow:Ei}:null,retryLane:536870912,hydrationErrors:null},a=$d(t),a.return=n,n.child=a,xn=n,Ve=null)):t=null,t===null)throw ua(n);return bf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(ga(),c=n.mode,E=yl({mode:"hidden",children:E},c),s=Ka(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Gu(a),s.childLanes=Vu(t,g,a),n.memoizedState=Hu,ao(null,s)):(ma(n),Xu(n,E))}var P=t.memoizedState;if(P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(ma(n),n.flags&=-257,n=ku(t,n,a)):n.memoizedState!==null?(ga(),n.child=t.child,n.flags|=128,n=null):(ga(),E=s.fallback,c=n.mode,s=yl({mode:"visible",children:s.children},c),E=Ka(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,ir(n,t.child,null,a),s=n.child,s.memoizedState=Gu(a),s.childLanes=Vu(t,g,a),n.memoizedState=Hu,n=ao(null,s));else if(ma(n),bf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var $=g.dgst;g=$,s=Error(r(419)),s.stack="",s.digest=g,Ws({value:s,source:null,stack:null}),n=ku(t,n,a)}else if(rn||Br(t,n,a,!1),g=(a&t.childLanes)!==0,rn||g){if(g=Fe,g!==null&&(s=Si(g,a),s!==0&&s!==P.retryLane))throw P.retryLane=s,Za(t,s),Fn(g,t,s),Iu;Tf(E)||Dl(),n=ku(t,n,a)}else Tf(E)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Ve=ri(E.nextSibling),xn=n,xe=!0,ca=null,ii=!1,t!==null&&np(n,t),n=Xu(n,s.children),n.flags|=4096);return n}return c?(ga(),E=s.fallback,c=n.mode,P=t.child,$=P.sibling,s=Pi(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,$!==null?E=Pi($,E):(E=Ka(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,ao(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Gu(a):(c=E.cachePool,c!==null?(P=nn._currentValue,c=c.parent!==P?{parent:P,pool:P}:c):c=lp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=Vu(t,g,a),n.memoizedState=Hu,ao(t.child,s)):(ma(n),a=t.child,t=a.sibling,a=Pi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Xu(t,n){return n=yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function ku(t,n,a){return ir(n,t.child,null,a),t=Xu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function ym(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ru(t.return,n,a)}function qu(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function Mm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=Je.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,yt(Je,g),yn(t,n,s,a),s=xe?qs:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,a,n);else if(t.tag===19)ym(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),qu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&cl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}qu(n,!0,a,null,f,s);break;case"together":qu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Gi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Br(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Pi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Pi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function Wv(t,n,a){switch(n.tag){case 3:Gt(n,n.stateNode.containerInfo),fa(n,nn,t.memoizedState.cache),Qa();break;case 27:case 5:ne(n);break;case 4:Gt(n,n.stateNode.containerInfo);break;case 10:fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_u(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sm(t,n,a):(ma(n),t=Gi(t,n,a),t!==null?t.sibling:null);ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Br(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Mm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(Je,Je.current),s)break;return null;case 22:return n.lanes=0,pm(t,n,a,n.pendingProps);case 24:fa(n,nn,t.memoizedState.cache)}return Gi(t,n,a)}function Em(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!Wu(t,a)&&(n.flags&128)===0)return rn=!1,Wv(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,xe&&(n.flags&1048576)!==0&&ep(n,qs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=er(n.elementType),n.type=t,typeof t=="function")Qc(t)?(s=rr(t,s),n.tag=1,n=vm(null,n,t,s,a)):(n.tag=0,n=Fu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===U){n.tag=11,n=fm(null,n,t,s,a);break t}else if(c===z){n.tag=14,n=hm(null,n,t,s,a);break t}}throw n=gt(t)||t,Error(r(306,n,""))}}return n;case 0:return Fu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=rr(s,n.pendingProps),vm(t,n,s,c,a);case 3:t:{if(Gt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,hu(t,n),$s(n,s,null,a);var g=n.memoizedState;if(s=g.cache,fa(n,nn,s),s!==f.cache&&su(n,[nn],a,!0),Js(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=xm(t,n,s,a);break t}else if(s!==c){c=ti(Error(r(424)),n),Ws(c),n=xm(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ve=ri(t.firstChild),xn=n,xe=!0,ca=null,ii=!0,a=pp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qa(),s===c){n=Gi(t,n,a);break t}yn(t,n,s,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=Og(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,t=n.pendingProps,s=Bl(Tt.current).createElement(a),s[Ye]=n,s[vn]=t,Mn(s,a,t),xt(s),n.stateNode=s):n.memoizedState=Og(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return ne(n),t===null&&xe&&(s=n.stateNode=Ug(n.type,n.pendingProps,Tt.current),xn=n,ii=!0,c=Ve,Ta(n.type)?(Af=c,Ve=ri(s.firstChild)):Ve=c),yn(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&xe&&((c=s=Ve)&&(s=Mx(s,n.type,n.pendingProps,ii),s!==null?(n.stateNode=s,xn=n,Ve=ri(s.firstChild),ii=!1,c=!0):c=!1),c||ua(n)),ne(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,yf(c,f)?s=null:g!==null&&yf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=xu(t,n,Bv,null,null,a),So._currentValue=c),Sl(t,n),yn(t,n,s,a),n.child;case 6:return t===null&&xe&&((t=a=Ve)&&(a=Ex(a,n.pendingProps,ii),a!==null?(n.stateNode=a,xn=n,Ve=null,t=!0):t=!1),t||ua(n)),null;case 13:return Sm(t,n,a);case 4:return Gt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=ir(n,null,s,a):yn(t,n,s,a),n.child;case 11:return fm(t,n,n.type,n.pendingProps,a);case 7:return yn(t,n,n.pendingProps,a),n.child;case 8:return yn(t,n,n.pendingProps.children,a),n.child;case 12:return yn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,fa(n,n.type,s.value),yn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=Sn(c),s=s(c),n.flags|=1,yn(t,n,s,a),n.child;case 14:return hm(t,n,n.type,n.pendingProps,a);case 15:return dm(t,n,n.type,n.pendingProps,a);case 19:return Mm(t,n,a);case 31:return qv(t,n,a);case 22:return pm(t,n,a,n.pendingProps);case 24:return $a(n),s=Sn(nn),t===null?(c=cu(),c===null&&(c=Fe,f=ou(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},fu(n),fa(n,nn,c)):((t.lanes&a)!==0&&(hu(t,n),$s(n,null,null,a),Js()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),fa(n,nn,s)):(s=f.cache,fa(n,nn,s),s!==c.cache&&su(n,[nn],a,!0))),yn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Vi(t){t.flags|=4}function Yu(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Km())t.flags|=8192;else throw nr=rl,uu}else t.flags&=-16777217}function Tm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Fg(n))if(Km())t.flags|=8192;else throw nr=rl,uu}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?cn():536870912,t.lanes|=n,Zr|=n)}function ro(t,n){if(!xe)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Yv(t,n,a){var s=n.pendingProps;switch(eu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(nn),Ft(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zr(n)?Vi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,iu())),Xe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Vi(n),f!==null?(Xe(n),Tm(n,f)):(Xe(n),Yu(n,c,null,s,a))):f?f!==t.memoizedState?(Vi(n),Xe(n),Tm(n,f)):(Xe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Vi(n),Xe(n),Yu(n,c,t,s,a)),null;case 27:if(Ue(n),a=Tt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}t=Y.current,zr(n)?ip(n):(t=Ug(c,s,a),n.stateNode=t,Vi(n))}return Xe(n),null;case 5:if(Ue(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(f=Y.current,zr(n))ip(n);else{var g=Bl(Tt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[Ye]=n,f[vn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Mn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Vi(n)}}return Xe(n),Yu(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Vi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Tt.current,zr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=xn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Ye]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Sg(t.nodeValue,a)),t||ua(n,!0)}else t=Bl(t).createTextNode(s),t[Ye]=n,n.stateNode=t}return Xe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=zr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Ye]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),t=!1}else a=iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(qn(n),n):(qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Xe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=zr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Ye]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=iu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(qn(n),n):(qn(n),null)}return qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Xe(n),null);case 4:return Ft(),t===null&&gf(n.stateNode.containerInfo),Xe(n),null;case 10:return Ii(n.type),Xe(n),null;case 19:if(nt(Je),s=n.memoizedState,s===null)return Xe(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ro(s,!1);else{if(Ze!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,ro(s,!1),t=f.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Jd(a,t),a=a.sibling;return yt(Je,Je.current&1|2),xe&&zi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&ht()>Rl&&(n.flags|=128,c=!0,ro(s,!1),n.lanes=4194304)}else{if(!c)if(t=cl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!xe)return Xe(n),null}else 2*ht()-s.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,c=!0,ro(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ht(),t.sibling=null,a=Je.current,yt(Je,c?a&1|2:a&1),xe&&zi(n,s.treeForkCount),t):(Xe(n),null);case 22:case 23:return qn(n),gu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&nt(tr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(nn),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jv(t,n){switch(eu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ii(nn),Ft(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ue(n),null;case 31:if(n.memoizedState!==null){if(qn(n),n.alternate===null)throw Error(r(340));Qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return nt(Je),null;case 4:return Ft(),null;case 10:return Ii(n.type),null;case 22:case 23:return qn(n),gu(),t!==null&&nt(tr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ii(nn),null;case 25:return null;default:return null}}function bm(t,n){switch(eu(n),n.tag){case 3:Ii(nn),Ft();break;case 26:case 27:case 5:Ue(n);break;case 4:Ft();break;case 31:n.memoizedState!==null&&qn(n);break;case 13:qn(n);break;case 19:nt(Je);break;case 10:Ii(n.type);break;case 22:case 23:qn(n),gu(),t!==null&&nt(tr);break;case 24:Ii(nn)}}function so(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(E){De(n,n.return,E)}}function _a(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var P=a,$=E;try{$()}catch(ft){De(c,P,ft)}}}s=s.next}while(s!==f)}}catch(ft){De(n,n.return,ft)}}function Am(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gp(n,a)}catch(s){De(t,t.return,s)}}}function Rm(t,n,a){a.props=rr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){De(t,n,s)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){De(t,n,c)}}function Ti(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){De(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){De(t,n,c)}else a.current=null}function Cm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){De(t,t.return,c)}}function ju(t,n,a){try{var s=t.stateNode;gx(s,t.type,a,n),s[vn]=n}catch(c){De(t,t.return,c)}}function wm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ta(t.type)||t.tag===4}function Zu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||wm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ta(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ku(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ni));else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ku(t,n,a),t=t.sibling;t!==null;)Ku(t,n,a),t=t.sibling}function El(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ta(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function Dm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Mn(n,s,a),n[Ye]=t,n[vn]=a}catch(f){De(t,t.return,f)}}var Xi=!1,sn=!1,Qu=!1,Um=typeof WeakSet=="function"?WeakSet:Set,mn=null;function Zv(t,n){if(t=t.containerInfo,xf=kl,t=Xd(t),kc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,P=-1,$=0,ft=0,mt=t,tt=null;e:for(;;){for(var rt;mt!==a||c!==0&&mt.nodeType!==3||(E=g+c),mt!==f||s!==0&&mt.nodeType!==3||(P=g+s),mt.nodeType===3&&(g+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)tt=mt,mt=rt;for(;;){if(mt===t)break e;if(tt===a&&++$===c&&(E=g),tt===f&&++ft===s&&(P=g),(rt=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=rt}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sf={focusedElem:t,selectionRange:a},kl=!1,mn=n;mn!==null;)if(n=mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,mn=t;else for(;mn!==null;){switch(n=mn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var It=rr(a.type,c);t=s.getSnapshotBeforeUpdate(It,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){De(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ef(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ef(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,mn=t;break}mn=n.return}}function Lm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:qi(t,a),s&4&&so(5,a);break;case 1:if(qi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){De(a,a.return,g)}else{var c=rr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){De(a,a.return,g)}}s&64&&Am(a),s&512&&oo(a,a.return);break;case 3:if(qi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(t,n)}catch(g){De(a,a.return,g)}}break;case 27:n===null&&s&4&&Dm(a);case 26:case 5:qi(t,a),n===null&&s&4&&Cm(a),s&512&&oo(a,a.return);break;case 12:qi(t,a);break;case 31:qi(t,a),s&4&&Pm(t,a);break;case 13:qi(t,a),s&4&&zm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ax.bind(null,a),Tx(t,a))));break;case 22:if(s=a.memoizedState!==null||Xi,!s){n=n!==null&&n.memoizedState!==null||sn,c=Xi;var f=sn;Xi=s,(sn=n)&&!f?Wi(t,a,(a.subtreeFlags&8772)!==0):qi(t,a),Xi=c,sn=f}break;case 30:break;default:qi(t,a)}}function Nm(t){var n=t.alternate;n!==null&&(t.alternate=null,Nm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&b(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,Pn=!1;function ki(t,n,a){for(a=a.child;a!==null;)Om(t,n,a),a=a.sibling}function Om(t,n,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Yt,a)}catch{}switch(a.tag){case 26:sn||Ti(a,n),ki(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ti(a,n);var s=We,c=Pn;Ta(a.type)&&(We=a.stateNode,Pn=!1),ki(t,n,a),_o(a.stateNode),We=s,Pn=c;break;case 5:sn||Ti(a,n);case 6:if(s=We,c=Pn,We=null,ki(t,n,a),We=s,Pn=c,We!==null)if(Pn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){De(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){De(a,n,f)}break;case 18:We!==null&&(Pn?(t=We,Ag(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),is(t)):Ag(We,a.stateNode));break;case 4:s=We,c=Pn,We=a.stateNode.containerInfo,Pn=!0,ki(t,n,a),We=s,Pn=c;break;case 0:case 11:case 14:case 15:_a(2,a,n),sn||_a(4,a,n),ki(t,n,a);break;case 1:sn||(Ti(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Rm(a,n,s)),ki(t,n,a);break;case 21:ki(t,n,a);break;case 22:sn=(s=sn)||a.memoizedState!==null,ki(t,n,a),sn=s;break;default:ki(t,n,a)}}function Pm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{is(t)}catch(a){De(n,n.return,a)}}}function zm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{is(t)}catch(a){De(n,n.return,a)}}function Kv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Um),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Um),n;default:throw Error(r(435,t.tag))}}function Tl(t,n){var a=Kv(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=rx.bind(null,t,s);s.then(c,c)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Ta(E.type)){We=E.stateNode,Pn=!1;break t}break;case 5:We=E.stateNode,Pn=!1;break t;case 3:case 4:We=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(We===null)throw Error(r(160));Om(f,g,c),We=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bm(n,t),n=n.sibling}var hi=null;function Bm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),Bn(t),s&4&&(_a(3,t,t.return),so(3,t),_a(5,t,t.return));break;case 1:zn(n,t),Bn(t),s&512&&(sn||a===null||Ti(a,a.return)),s&64&&Xi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=hi;if(zn(n,t),Bn(t),s&512&&(sn||a===null||Ti(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ka]||f[Ye]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Mn(f,s,a),f[Ye]=t,xt(f),s=f;break t;case"link":var g=Bg("link","href",c).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=Bg("meta","content",c).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=c.createElement(s),Mn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Ye]=t,xt(f),s=f}t.stateNode=s}else Ig(c,t.type,t.stateNode);else t.stateNode=zg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ig(c,t.type,t.stateNode):zg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ju(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),Bn(t),s&512&&(sn||a===null||Ti(a,a.return)),a!==null&&s&4&&ju(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),Bn(t),s&512&&(sn||a===null||Ti(a,a.return)),t.flags&32){c=t.stateNode;try{Ar(c,"")}catch(It){De(t,t.return,It)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,ju(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Qu=!0);break;case 6:if(zn(n,t),Bn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(It){De(t,t.return,It)}}break;case 3:if(Hl=null,c=hi,hi=Il(n.containerInfo),zn(n,t),hi=c,Bn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{is(n.containerInfo)}catch(It){De(t,t.return,It)}Qu&&(Qu=!1,Im(t));break;case 4:s=hi,hi=Il(t.stateNode.containerInfo),zn(n,t),Bn(t),hi=s;break;case 12:zn(n,t),Bn(t);break;case 31:zn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 13:zn(n,t),Bn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=ht()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,$=Xi,ft=sn;if(Xi=$||c,sn=ft||P,zn(n,t),sn=ft,Xi=$,Bn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Xi||sn||sr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=P.stateNode;var mt=P.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(It){De(P,P.return,It)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(It){De(P,P.return,It)}}}else if(n.tag===18){if(a===null){P=n;try{var rt=P.stateNode;c?Rg(rt,!0):Rg(P.stateNode,!1)}catch(It){De(P,P.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Tl(t,a))));break;case 19:zn(n,t),Bn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 30:break;case 21:break;default:zn(n,t),Bn(t)}}function Bn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(wm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Zu(t);El(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Ar(g,""),a.flags&=-33);var E=Zu(t);El(t,E,g);break;case 3:case 4:var P=a.stateNode.containerInfo,$=Zu(t);Ku(t,$,P);break;default:throw Error(r(161))}}catch(ft){De(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Im(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Im(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function qi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lm(t,n.alternate,n),n=n.sibling}function sr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:_a(4,n,n.return),sr(n);break;case 1:Ti(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Rm(n,n.return,a),sr(n);break;case 27:_o(n.stateNode);case 26:case 5:Ti(n,n.return),sr(n);break;case 22:n.memoizedState===null&&sr(n);break;case 30:sr(n);break;default:sr(n)}t=t.sibling}}function Wi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Wi(c,f,a),so(4,f);break;case 1:if(Wi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch($){De(s,s.return,$)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)mp(P[c],E)}catch($){De(s,s.return,$)}}a&&g&64&&Am(f),oo(f,f.return);break;case 27:Dm(f);case 26:case 5:Wi(c,f,a),a&&s===null&&g&4&&Cm(f),oo(f,f.return);break;case 12:Wi(c,f,a);break;case 31:Wi(c,f,a),a&&g&4&&Pm(c,f);break;case 13:Wi(c,f,a),a&&g&4&&zm(c,f);break;case 22:f.memoizedState===null&&Wi(c,f,a),oo(f,f.return);break;case 30:break;default:Wi(c,f,a)}n=n.sibling}}function Ju(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ys(a))}function $u(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t))}function di(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fm(t,n,a,s),n=n.sibling}function Fm(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:di(t,n,a,s),c&2048&&so(9,n);break;case 1:di(t,n,a,s);break;case 3:di(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t)));break;case 12:if(c&2048){di(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){De(n,n.return,P)}}else di(t,n,a,s);break;case 31:di(t,n,a,s);break;case 13:di(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?di(t,n,a,s):lo(t,n):f._visibility&2?di(t,n,a,s):(f._visibility|=2,Wr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Ju(g,n);break;case 24:di(t,n,a,s),c&2048&&$u(n.alternate,n);break;default:di(t,n,a,s)}}function Wr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,P=s,$=g.flags;switch(g.tag){case 0:case 11:case 15:Wr(f,g,E,P,c),so(8,g);break;case 23:break;case 22:var ft=g.stateNode;g.memoizedState!==null?ft._visibility&2?Wr(f,g,E,P,c):lo(f,g):(ft._visibility|=2,Wr(f,g,E,P,c)),c&&$&2048&&Ju(g.alternate,g);break;case 24:Wr(f,g,E,P,c),c&&$&2048&&$u(g.alternate,g);break;default:Wr(f,g,E,P,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&Ju(s.alternate,s);break;case 24:lo(a,s),c&2048&&$u(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function Yr(t,n,a){if(t.subtreeFlags&co)for(t=t.child;t!==null;)Hm(t,n,a),t=t.sibling}function Hm(t,n,a){switch(t.tag){case 26:Yr(t,n,a),t.flags&co&&t.memoizedState!==null&&zx(a,hi,t.memoizedState,t.memoizedProps);break;case 5:Yr(t,n,a);break;case 3:case 4:var s=hi;hi=Il(t.stateNode.containerInfo),Yr(t,n,a),hi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=co,co=16777216,Yr(t,n,a),co=s):Yr(t,n,a));break;default:Yr(t,n,a)}}function Gm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Xm(s,t)}Gm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Vm(t),t=t.sibling}function Vm(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&_a(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bl(t)):uo(t);break;default:uo(t)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];mn=s,Xm(s,t)}Gm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:_a(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}t=t.sibling}}function Xm(t,n){for(;mn!==null;){var a=mn;switch(a.tag){case 0:case 11:case 15:_a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,mn=s;else t:for(a=t;mn!==null;){s=mn;var c=s.sibling,f=s.return;if(Nm(s),s===a){mn=null;break t}if(c!==null){c.return=f,mn=c;break t}mn=f}}}var Qv={getCacheForType:function(t){var n=Sn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(nn).controller.signal}},Jv=typeof WeakMap=="function"?WeakMap:Map,Re=0,Fe=null,he=null,_e=0,we=0,Wn=null,va=!1,jr=!1,tf=!1,Yi=0,Ze=0,xa=0,or=0,ef=0,Yn=0,Zr=0,fo=null,In=null,nf=!1,Al=0,km=0,Rl=1/0,Cl=null,Sa=null,fn=0,ya=null,Kr=null,ji=0,af=0,rf=null,qm=null,ho=0,sf=null;function jn(){return(Re&2)!==0&&_e!==0?_e&-_e:O.T!==null?hf():Os()}function Wm(){if(Yn===0)if((_e&536870912)===0||xe){var t=lt;lt<<=1,(lt&3932160)===0&&(lt=262144),Yn=t}else Yn=536870912;return t=kn.current,t!==null&&(t.flags|=32),Yn}function Fn(t,n,a){(t===Fe&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),Ma(t,_e,Yn,!1)),_n(t,a),((Re&2)===0||t!==Fe)&&(t===Fe&&((Re&2)===0&&(or|=a),Ze===4&&Ma(t,_e,Yn,!1)),bi(t))}function Ym(t,n,a){if((Re&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||$t(t,n),c=s?ex(t,n):lf(t,n,!0),f=s;do{if(c===0){jr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!$v(a)){c=lf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;c=fo;var P=E.current.memoizedState.isDehydrated;if(P&&(Qr(E,g).flags|=256),g=lf(E,g,!1),g!==2){if(tf&&!P){E.errorRecoveryDisabledLanes|=f,or|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Qr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,Yn,!va);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Al+300-ht(),10<c)){if(Ma(s,n,Yn,!va),Dt(s,0,!0)!==0)break t;ji=n,s.timeoutHandle=Tg(jm.bind(null,s,a,In,Cl,nf,n,Yn,or,Zr,va,f,"Throttled",-0,0),c);break t}jm(s,a,In,Cl,nf,n,Yn,or,Zr,va,f,null,-0,0)}}break}while(!0);bi(t)}function jm(t,n,a,s,c,f,g,E,P,$,ft,mt,tt,rt){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ni},Hm(n,f,mt);var It=(f&62914560)===f?Al-ht():(f&4194048)===f?km-ht():0;if(It=Bx(mt,It),It!==null){ji=f,t.cancelPendingCommit=It(ng.bind(null,t,n,f,a,s,c,g,E,P,ft,mt,null,tt,rt)),Ma(t,f,g,!$);return}}ng(t,n,f,a,s,c,g,E,P)}function $v(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~ef,n&=~or,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Jt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Ls(t,a,n)}function wl(){return(Re&6)===0?(po(0),!1):!0}function of(){if(he!==null){if(we===0)var t=he.return;else t=he,Bi=Ja=null,Mu(t),Gr=null,Zs=0,t=he;for(;t!==null;)bm(t.alternate,t),t=t.return;he=null}}function Qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,xx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ji=0,of(),Fe=t,he=a=Pi(t.current,null),_e=n,we=0,Wn=null,va=!1,jr=$t(t,n),tf=!1,Zr=Yn=ef=or=xa=Ze=0,In=fo=null,nf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Jt(s),f=1<<c;n|=t[c],s&=~f}return Yi=n,Ko(),a}function Zm(t,n){re=null,O.H=io,n===Hr||n===al?(n=fp(),we=3):n===uu?(n=fp(),we=4):we=n===Iu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,he===null&&(Ze=1,vl(t,ti(n,t.current)))}function Km(){var t=kn.current;return t===null?!0:(_e&4194048)===_e?ai===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ai:!1}function Qm(){var t=O.H;return O.H=io,t===null?io:t}function Jm(){var t=O.A;return O.A=Qv,t}function Dl(){Ze=4,va||(_e&4194048)!==_e&&kn.current!==null||(jr=!0),(xa&134217727)===0&&(or&134217727)===0||Fe===null||Ma(Fe,_e,Yn,!1)}function lf(t,n,a){var s=Re;Re|=2;var c=Qm(),f=Jm();(Fe!==t||_e!==n)&&(Cl=null,Qr(t,n)),n=!1;var g=Ze;t:do try{if(we!==0&&he!==null){var E=he,P=Wn;switch(we){case 8:of(),g=6;break t;case 3:case 2:case 9:case 6:kn.current===null&&(n=!0);var $=we;if(we=0,Wn=null,Jr(t,E,P,$),a&&jr){g=0;break t}break;default:$=we,we=0,Wn=null,Jr(t,E,P,$)}}tx(),g=Ze;break}catch(ft){Zm(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Bi=Ja=null,Re=s,O.H=c,O.A=f,he===null&&(Fe=null,_e=0,Ko()),g}function tx(){for(;he!==null;)$m(he)}function ex(t,n){var a=Re;Re|=2;var s=Qm(),c=Jm();Fe!==t||_e!==n?(Cl=null,Rl=ht()+500,Qr(t,n)):jr=$t(t,n);t:do try{if(we!==0&&he!==null){n=he;var f=Wn;e:switch(we){case 1:we=0,Wn=null,Jr(t,n,f,1);break;case 2:case 9:if(cp(f)){we=0,Wn=null,tg(n);break}n=function(){we!==2&&we!==9||Fe!==t||(we=7),bi(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:cp(f)?(we=0,Wn=null,tg(n)):(we=0,Wn=null,Jr(t,n,f,7));break;case 5:var g=null;switch(he.tag){case 26:g=he.memoizedState;case 5:case 27:var E=he;if(g?Fg(g):E.stateNode.complete){we=0,Wn=null;var P=E.sibling;if(P!==null)he=P;else{var $=E.return;$!==null?(he=$,Ul($)):he=null}break e}}we=0,Wn=null,Jr(t,n,f,5);break;case 6:we=0,Wn=null,Jr(t,n,f,6);break;case 8:of(),Ze=6;break t;default:throw Error(r(462))}}nx();break}catch(ft){Zm(t,ft)}while(!0);return Bi=Ja=null,O.H=s,O.A=c,Re=a,he!==null?0:(Fe=null,_e=0,Ko(),Ze)}function nx(){for(;he!==null&&!T();)$m(he)}function $m(t){var n=Em(t.alternate,t,Yi);t.memoizedProps=t.pendingProps,n===null?Ul(t):he=n}function tg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=_m(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=_m(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Mu(n);default:bm(a,n),n=he=Jd(n,Yi),n=Em(a,n,Yi)}t.memoizedProps=t.pendingProps,n===null?Ul(t):he=n}function Jr(t,n,a,s){Bi=Ja=null,Mu(n),Gr=null,Zs=0;var c=n.return;try{if(kv(t,c,n,a,_e)){Ze=1,vl(t,ti(a,t.current)),he=null;return}}catch(f){if(c!==null)throw he=c,f;Ze=1,vl(t,ti(a,t.current)),he=null;return}n.flags&32768?(xe||s===1?t=!0:jr||(_e&536870912)!==0?t=!1:(va=t=!0,(s===2||s===9||s===3||s===6)&&(s=kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),eg(n,t)):Ul(n)}function Ul(t){var n=t;do{if((n.flags&32768)!==0){eg(n,va);return}t=n.return;var a=Yv(n.alternate,n,Yi);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Ze===0&&(Ze=5)}function eg(t,n){do{var a=jv(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Ze=6,he=null}function ng(t,n,a,s,c,f,g,E,P){t.cancelPendingCommit=null;do Ll();while(fn!==0);if((Re&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Zc,ci(t,a,f,g,E,P),t===Fe&&(he=Fe=null,_e=0),Kr=n,ya=t,ji=a,af=f,rf=c,qm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sx(wt,function(){return og(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=Z.p,Z.p=2,g=Re,Re|=4;try{Zv(t,n,a)}finally{Re=g,Z.p=c,O.T=s}}fn=1,ig(),ag(),rg()}}function ig(){if(fn===1){fn=0;var t=ya,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=Z.p;Z.p=2;var c=Re;Re|=4;try{Bm(n,t);var f=Sf,g=Xd(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&Vd(E.ownerDocument.documentElement,E)){if(P!==null&&kc(E)){var $=P.start,ft=P.end;if(ft===void 0&&(ft=$),"selectionStart"in E)E.selectionStart=$,E.selectionEnd=Math.min(ft,E.value.length);else{var mt=E.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var rt=tt.getSelection(),It=E.textContent.length,Qt=Math.min(P.start,It),Pe=P.end===void 0?Qt:Math.min(P.end,It);!rt.extend&&Qt>Pe&&(g=Pe,Pe=Qt,Qt=g);var q=Gd(E,Qt),F=Gd(E,Pe);if(q&&F&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==F.node||rt.focusOffset!==F.offset)){var J=mt.createRange();J.setStart(q.node,q.offset),rt.removeAllRanges(),Qt>Pe?(rt.addRange(J),rt.extend(F.node,F.offset)):(J.setEnd(F.node,F.offset),rt.addRange(J))}}}}for(mt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var dt=mt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}kl=!!xf,Sf=xf=null}finally{Re=c,Z.p=s,O.T=a}}t.current=n,fn=2}}function ag(){if(fn===2){fn=0;var t=ya,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=Z.p;Z.p=2;var c=Re;Re|=4;try{Lm(t,n.alternate,n)}finally{Re=c,Z.p=s,O.T=a}}fn=3}}function rg(){if(fn===4||fn===3){fn=0,et();var t=ya,n=Kr,a=ji,s=qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,Kr=ya=null,sg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Sa=null),Tr(a),n=n.stateNode,kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=Z.p,Z.p=2,O.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{O.T=n,Z.p=c}}(ji&3)!==0&&Ll(),bi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===sf?ho++:(ho=0,sf=t):ho=0,po(0)}}function sg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ys(n)))}function Ll(){return ig(),ag(),rg(),og()}function og(){if(fn!==5)return!1;var t=ya,n=af;af=0;var a=Tr(ji),s=O.T,c=Z.p;try{Z.p=32>a?32:a,O.T=null,a=rf,rf=null;var f=ya,g=ji;if(fn=0,Kr=ya=null,ji=0,(Re&6)!==0)throw Error(r(331));var E=Re;if(Re|=4,Vm(f.current),Fm(f,f.current,g,a),Re=E,po(0,!1),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Yt,f)}catch{}return!0}finally{Z.p=c,O.T=s,sg(t,n)}}function lg(t,n,a){n=ti(a,n),n=Bu(t.stateNode,n,2),t=pa(t,n,2),t!==null&&(_n(t,2),bi(t))}function De(t,n,a){if(t.tag===3)lg(t,t,a);else for(;n!==null;){if(n.tag===3){lg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){t=ti(a,t),a=cm(2),s=pa(n,a,2),s!==null&&(um(a,s,n,t),_n(s,2),bi(s));break}}n=n.return}}function cf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Jv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(tf=!0,c.add(a),t=ix.bind(null,t,n,a),n.then(t,t))}function ix(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Fe===t&&(_e&a)===a&&(Ze===4||Ze===3&&(_e&62914560)===_e&&300>ht()-Al?(Re&2)===0&&Qr(t,0):ef|=a,Zr===_e&&(Zr=0)),bi(t)}function cg(t,n){n===0&&(n=cn()),t=Za(t,n),t!==null&&(_n(t,n),bi(t))}function ax(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),cg(t,a)}function rx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),cg(t,a)}function sx(t,n){return qt(t,n)}var Nl=null,$r=null,uf=!1,Ol=!1,ff=!1,Ea=0;function bi(t){t!==$r&&t.next===null&&($r===null?Nl=$r=t:$r=$r.next=t),Ol=!0,uf||(uf=!0,lx())}function po(t,n){if(!ff&&Ol){ff=!0;do for(var a=!1,s=Nl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Jt(42|t)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,dg(s,f))}else f=_e,f=Dt(s,s===Fe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||$t(s,f)||(a=!0,dg(s,f));s=s.next}while(a);ff=!1}}function ox(){ug()}function ug(){Ol=uf=!1;var t=0;Ea!==0&&vx()&&(t=Ea);for(var n=ht(),a=null,s=Nl;s!==null;){var c=s.next,f=fg(s,n);f===0?(s.next=null,a===null?Nl=c:a.next=c,c===null&&($r=a)):(a=s,(t!==0||(f&3)!==0)&&(Ol=!0)),s=c}fn!==0&&fn!==5||po(t),Ea!==0&&(Ea=0)}function fg(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Jt(f),E=1<<g,P=c[g];P===-1?((E&a)===0||(E&s)!==0)&&(c[g]=qe(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=Fe,a=_e,a=Dt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&D(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||$t(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&D(s),Tr(a)){case 2:case 8:a=Xt;break;case 32:a=wt;break;case 268435456:a=me;break;default:a=wt}return s=hg.bind(null,t),a=qt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&D(s),t.callbackPriority=2,t.callbackNode=null,2}function hg(t,n){if(fn!==0&&fn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var s=_e;return s=Dt(t,t===Fe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Ym(t,s,n),fg(t,ht()),t.callbackNode!=null&&t.callbackNode===a?hg.bind(null,t):null)}function dg(t,n){if(Ll())return null;Ym(t,n,!0)}function lx(){Sx(function(){(Re&6)!==0?qt(pt,ox):ug()})}function hf(){if(Ea===0){var t=Ir;t===0&&(t=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Ea=t}return Ea}function pg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vo(""+t)}function mg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function cx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=pg((c[vn]||null).action),g=s.submitter;g&&(n=(n=g[vn]||null)?pg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Wo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ea!==0){var P=g?mg(c,g):new FormData(c);Uu(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=g?mg(c,g):new FormData(c),Uu(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var df=0;df<jc.length;df++){var pf=jc[df],ux=pf.toLowerCase(),fx=pf[0].toUpperCase()+pf.slice(1);fi(ux,"on"+fx)}fi(Wd,"onAnimationEnd"),fi(Yd,"onAnimationIteration"),fi(jd,"onAnimationStart"),fi("dblclick","onDoubleClick"),fi("focusin","onFocus"),fi("focusout","onBlur"),fi(Rv,"onTransitionRun"),fi(Cv,"onTransitionStart"),fi(wv,"onTransitionCancel"),fi(Zd,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function gg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],P=E.instance,$=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ft){Zo(ft)}c.currentTarget=null,f=P}else for(g=0;g<s.length;g++){if(E=s[g],P=E.instance,$=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=$;try{f(c)}catch(ft){Zo(ft)}c.currentTarget=null,f=P}}}}function de(t,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var s=t+"__bubble";a.has(s)||(_g(n,t,2,!1),a.add(s))}function mf(t,n,a){var s=0;n&&(s|=4),_g(a,t,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function gf(t){if(!t[Pl]){t[Pl]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(hx.has(a)||mf(a,!1,t),mf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,mf("selectionchange",!1,n))}}function _g(t,n,a,s){switch(Wg(n)){case 2:var c=Hx;break;case 8:c=Gx;break;default:c=Uf}a=c.bind(null,n,a,t),c=void 0,!Pc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function _f(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=s.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=X(E),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){s=f=g;continue t}E=E.parentNode}}s=s.return}Md(function(){var $=f,ft=Nc(a),mt=[];t:{var tt=Kd.get(t);if(tt!==void 0){var rt=Wo,It=t;switch(t){case"keypress":if(ko(a)===0)break t;case"keydown":case"keyup":rt=rv;break;case"focusin":It="focus",rt=Fc;break;case"focusout":It="blur",rt=Fc;break;case"beforeblur":case"afterblur":rt=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Y0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=lv;break;case Wd:case Yd:case jd:rt=K0;break;case Zd:rt=uv;break;case"scroll":case"scrollend":rt=q0;break;case"wheel":rt=hv;break;case"copy":case"cut":case"paste":rt=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Rd;break;case"toggle":case"beforetoggle":rt=pv}var Qt=(n&4)!==0,Pe=!Qt&&(t==="scroll"||t==="scrollend"),q=Qt?tt!==null?tt+"Capture":null:tt;Qt=[];for(var F=$,J;F!==null;){var dt=F;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||q===null||(dt=zs(F,q),dt!=null&&Qt.push(go(F,dt,J))),Pe)break;F=F.return}0<Qt.length&&(tt=new rt(tt,It,null,a,ft),mt.push({event:tt,listeners:Qt}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",tt&&a!==Lc&&(It=a.relatedTarget||a.fromElement)&&(X(It)||It[Ui]))break t;if((rt||tt)&&(tt=ft.window===ft?ft:(tt=ft.ownerDocument)?tt.defaultView||tt.parentWindow:window,rt?(It=a.relatedTarget||a.toElement,rt=$,It=It?X(It):null,It!==null&&(Pe=u(It),Qt=It.tag,It!==Pe||Qt!==5&&Qt!==27&&Qt!==6)&&(It=null)):(rt=null,It=$),rt!==It)){if(Qt=bd,dt="onMouseLeave",q="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=Rd,dt="onPointerLeave",q="onPointerEnter",F="pointer"),Pe=rt==null?tt:at(rt),J=It==null?tt:at(It),tt=new Qt(dt,F+"leave",rt,a,ft),tt.target=Pe,tt.relatedTarget=J,dt=null,X(ft)===$&&(Qt=new Qt(q,F+"enter",It,a,ft),Qt.target=J,Qt.relatedTarget=Pe,dt=Qt),Pe=dt,rt&&It)e:{for(Qt=dx,q=rt,F=It,J=0,dt=q;dt;dt=Qt(dt))J++;dt=0;for(var Zt=F;Zt;Zt=Qt(Zt))dt++;for(;0<J-dt;)q=Qt(q),J--;for(;0<dt-J;)F=Qt(F),dt--;for(;J--;){if(q===F||F!==null&&q===F.alternate){Qt=q;break e}q=Qt(q),F=Qt(F)}Qt=null}else Qt=null;rt!==null&&vg(mt,tt,rt,Qt,!1),It!==null&&Pe!==null&&vg(mt,Pe,It,Qt,!0)}}t:{if(tt=$?at($):window,rt=tt.nodeName&&tt.nodeName.toLowerCase(),rt==="select"||rt==="input"&&tt.type==="file")var Te=Pd;else if(Nd(tt))if(zd)Te=Tv;else{Te=Mv;var Vt=yv}else rt=tt.nodeName,!rt||rt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?$&&Uc($.elementType)&&(Te=Pd):Te=Ev;if(Te&&(Te=Te(t,$))){Od(mt,Te,a,ft);break t}Vt&&Vt(t,tt,$),t==="focusout"&&$&&tt.type==="number"&&$.memoizedProps.value!=null&&un(tt,"number",tt.value)}switch(Vt=$?at($):window,t){case"focusin":(Nd(Vt)||Vt.contentEditable==="true")&&(Dr=Vt,qc=$,ks=null);break;case"focusout":ks=qc=Dr=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,kd(mt,a,ft);break;case"selectionchange":if(Av)break;case"keydown":case"keyup":kd(mt,a,ft)}var se;if(Gc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else wr?Ud(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Cd&&a.locale!=="ko"&&(wr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&wr&&(se=Ed()):(oa=ft,zc="value"in oa?oa.value:oa.textContent,wr=!0)),Vt=zl($,ve),0<Vt.length&&(ve=new Ad(ve,t,null,a,ft),mt.push({event:ve,listeners:Vt}),se?ve.data=se:(se=Ld(a),se!==null&&(ve.data=se)))),(se=gv?_v(t,a):vv(t,a))&&(ve=zl($,"onBeforeInput"),0<ve.length&&(Vt=new Ad("onBeforeInput","beforeinput",null,a,ft),mt.push({event:Vt,listeners:ve}),Vt.data=se)),cx(mt,t,$,a,ft)}gg(mt,n)})}function go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(go(t,c,f)),c=zs(t,n),c!=null&&s.push(go(t,c,f))),t.tag===3)return s;t=t.return}return[]}function dx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vg(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,P=E.alternate,$=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||$===null||(P=$,c?($=zs(a,f),$!=null&&g.unshift(go(a,$,P))):c||($=zs(a,f),$!=null&&g.push(go(a,$,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var px=/\r\n?/g,mx=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(px,`
`).replace(mx,"")}function Sg(t,n){return n=xg(n),xg(t)===n}function Oe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ar(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ar(t,""+s);break;case"className":Ie(t,"class",s);break;case"tabIndex":Ie(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,s);break;case"style":Sd(t,s,f);break;case"data":if(n!=="object"){Ie(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(t,n,"name",c.name,c,null),Oe(t,n,"formEncType",c.formEncType,c,null),Oe(t,n,"formMethod",c.formMethod,c,null),Oe(t,n,"formTarget",c.formTarget,c,null)):(Oe(t,n,"encType",c.encType,c,null),Oe(t,n,"method",c.method,c,null),Oe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ni);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Vo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":de("beforetoggle",t),de("toggle",t),Ge(t,"popover",s);break;case"xlinkActuate":ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ae(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ae(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ae(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ae(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ge(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=X0.get(a)||a,Ge(t,a,s))}}function vf(t,n,a,s,c,f){switch(a){case"style":Sd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ar(t,s):(typeof s=="number"||typeof s=="bigint")&&Ar(t,""+s);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[vn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ge(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,f,g,a,null)}}c&&Oe(t,n,"srcSet",a.srcSet,a,null),s&&Oe(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var E=f=g=c=null,P=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":c=ft;break;case"type":g=ft;break;case"checked":P=ft;break;case"defaultChecked":$=ft;break;case"value":f=ft;break;case"defaultValue":E=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Oe(t,n,s,ft,a,null)}}wn(t,f,E,P,$,g,c,!1);return;case"select":de("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Oe(t,n,c,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Qe(t,!!s,n,!1):a!=null&&Qe(t,!!s,a,!0);return;case"textarea":de("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Oe(t,n,g,E,a,null)}yi(t,s,c,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(t,n,P,s,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(s=0;s<mo.length;s++)de(mo[s],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,$,s,a,null)}return;default:if(Uc(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&vf(t,n,ft,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Oe(t,n,E,s,a,null))}function gx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,P=null,$=null,ft=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":P=mt;default:s.hasOwnProperty(rt)||Oe(t,n,rt,null,s,mt)}}for(var tt in s){var rt=s[tt];if(mt=a[tt],s.hasOwnProperty(tt)&&(rt!=null||mt!=null))switch(tt){case"type":f=rt;break;case"name":c=rt;break;case"checked":$=rt;break;case"defaultChecked":ft=rt;break;case"value":g=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==mt&&Oe(t,n,tt,rt,s,mt)}}Tn(t,g,E,P,$,ft,f,c);return;case"select":rt=g=E=tt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":rt=P;default:s.hasOwnProperty(f)||Oe(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==P&&Oe(t,n,c,f,s,P)}n=E,a=g,s=rt,tt!=null?Qe(t,!!a,tt,!1):!!s!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":rt=tt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Oe(t,n,E,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":tt=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(t,n,g,c,s,f)}br(t,tt,rt);return;case"option":for(var It in a)if(tt=a[It],a.hasOwnProperty(It)&&tt!=null&&!s.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:Oe(t,n,It,null,s,tt)}for(P in s)if(tt=s[P],rt=a[P],s.hasOwnProperty(P)&&tt!==rt&&(tt!=null||rt!=null))switch(P){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Oe(t,n,P,tt,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)tt=a[Qt],a.hasOwnProperty(Qt)&&tt!=null&&!s.hasOwnProperty(Qt)&&Oe(t,n,Qt,null,s,tt);for($ in s)if(tt=s[$],rt=a[$],s.hasOwnProperty($)&&tt!==rt&&(tt!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Oe(t,n,$,tt,s,rt)}return;default:if(Uc(n)){for(var Pe in a)tt=a[Pe],a.hasOwnProperty(Pe)&&tt!==void 0&&!s.hasOwnProperty(Pe)&&vf(t,n,Pe,void 0,s,tt);for(ft in s)tt=s[ft],rt=a[ft],!s.hasOwnProperty(ft)||tt===rt||tt===void 0&&rt===void 0||vf(t,n,ft,tt,s,rt);return}}for(var q in a)tt=a[q],a.hasOwnProperty(q)&&tt!=null&&!s.hasOwnProperty(q)&&Oe(t,n,q,null,s,tt);for(mt in s)tt=s[mt],rt=a[mt],!s.hasOwnProperty(mt)||tt===rt||tt==null&&rt==null||Oe(t,n,mt,tt,s,rt)}function yg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _x(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&yg(g)){for(g=0,E=c.responseEnd,s+=1;s<a.length;s++){var P=a[s],$=P.startTime;if($>E)break;var ft=P.transferSize,mt=P.initiatorType;ft&&yg(mt)&&(P=P.responseEnd,g+=ft*(P<E?1:(E-$)/(P-$)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xf=null,Sf=null;function Bl(t){return t.nodeType===9?t:t.ownerDocument}function Mg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function vx(){var t=window.event;return t&&t.type==="popstate"?t===Mf?!1:(Mf=t,!0):(Mf=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,Sx=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(yx)}:Tg;function yx(t){setTimeout(function(){throw t})}function Ta(t){return t==="head"}function Ag(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),is(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")_o(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[ka]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&_o(t.ownerDocument.body);a=c}while(a);is(n)}function Rg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Ef(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ef(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Mx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ka])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ri(t.nextSibling),t===null)break}return null}function Ex(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ri(t.nextSibling),t===null))return null;return t}function Cg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ri(t.nextSibling),t===null))return null;return t}function Tf(t){return t.data==="$?"||t.data==="$~"}function bf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Tx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ri(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Af=null;function wg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ri(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Dg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Ug(t,n,a){switch(n=Bl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function _o(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);b(t)}var si=new Map,Lg=new Set;function Il(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Zi=Z.d;Z.d={f:bx,r:Ax,D:Rx,C:Cx,L:wx,m:Dx,X:Lx,S:Ux,M:Nx};function bx(){var t=Zi.f(),n=wl();return t||n}function Ax(t){var n=it(t);n!==null&&n.tag===5&&n.type==="form"?Zp(n):Zi.r(t)}var ts=typeof document>"u"?null:document;function Ng(t,n,a){var s=ts;if(s&&typeof n=="string"&&n){var c=fe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Lg.has(c)||(Lg.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Mn(n,"link",t),xt(n),s.head.appendChild(n)))}}function Rx(t){Zi.D(t),Ng("dns-prefetch",t,null)}function Cx(t,n){Zi.C(t,n),Ng("preconnect",t,n)}function wx(t,n,a){Zi.L(t,n,a);var s=ts;if(s&&t&&n){var c='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+fe(a.imageSizes)+'"]')):c+='[href="'+fe(t)+'"]';var f=c;switch(n){case"style":f=es(t);break;case"script":f=ns(t)}si.has(f)||(t=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),si.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(vo(f))||n==="script"&&s.querySelector(xo(f))||(n=s.createElement("link"),Mn(n,"link",t),xt(n),s.head.appendChild(n)))}}function Dx(t,n){Zi.m(t,n);var a=ts;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+fe(s)+'"][href="'+fe(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ns(t)}if(!si.has(f)&&(t=x({rel:"modulepreload",href:t},n),si.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(xo(f)))return}s=a.createElement("link"),Mn(s,"link",t),xt(s),a.head.appendChild(s)}}}function Ux(t,n,a){Zi.S(t,n,a);var s=ts;if(s&&t){var c=k(s).hoistableStyles,f=es(t);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(vo(f)))E.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":n},a),(a=si.get(f))&&Rf(t,a);var P=g=s.createElement("link");xt(P),Mn(P,"link",t),P._p=new Promise(function($,ft){P.onload=$,P.onerror=ft}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Fl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function Lx(t,n){Zi.X(t,n);var a=ts;if(a&&t){var s=k(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=x({src:t,async:!0},n),(n=si.get(c))&&Cf(t,n),f=a.createElement("script"),xt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Nx(t,n){Zi.M(t,n);var a=ts;if(a&&t){var s=k(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(xo(c)),f||(t=x({src:t,async:!0,type:"module"},n),(n=si.get(c))&&Cf(t,n),f=a.createElement("script"),xt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Og(t,n,a,s){var c=(c=Tt.current)?Il(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=es(a.href),a=k(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=es(a.href);var f=k(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(vo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),si.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},si.set(t,a),f||Ox(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=k(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function es(t){return'href="'+fe(t)+'"'}function vo(t){return'link[rel="stylesheet"]['+t+"]"}function Pg(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function Ox(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),xt(n),t.head.appendChild(n))}function ns(t){return'[src="'+fe(t)+'"]'}function xo(t){return"script[async]"+t}function zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+fe(a.href)+'"]');if(s)return n.instance=s,xt(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),xt(s),Mn(s,"style",c),Fl(s,a.precedence,t),n.instance=s;case"stylesheet":c=es(a.href);var f=t.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,xt(f),f;s=Pg(a),(c=si.get(c))&&Rf(s,c),f=(t.ownerDocument||t).createElement("link"),xt(f);var g=f;return g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),Mn(f,"link",s),n.state.loading|=4,Fl(f,a.precedence,t),n.instance=f;case"script":return f=ns(a.src),(c=t.querySelector(xo(f)))?(n.instance=c,xt(c),c):(s=a,(c=si.get(f))&&(s=x({},a),Cf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),xt(c),Mn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Fl(s,a.precedence,t));return n.instance}function Fl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Rf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Cf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hl=null;function Bg(t,n,a){if(Hl===null){var s=new Map,c=Hl=new Map;c.set(a,s)}else c=Hl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ka]||f[Ye]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Ig(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Px(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Fg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function zx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=es(s.href),f=n.querySelector(vo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,xt(f);return}f=n.ownerDocument||n,s=Pg(s),(c=si.get(c))&&Rf(s,c),f=f.createElement("link"),xt(f);var g=f;g._p=new Promise(function(E,P){g.onload=E,g.onerror=P}),Mn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Gl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var wf=0;function Bx(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&wf===0&&(wf=62500*_x());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>wf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vl=new Map,n.forEach(Ix,t),Vl=null,Gl.call(t))}function Ix(t,n){if(!(n.state.loading&4)){var a=Vl.get(t);if(a)var s=a.get(null);else{a=new Map,Vl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Gl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var So={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Fx(t,n,a,s,c,f,g,E,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ye(0),this.hiddenUpdates=ye(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Hg(t,n,a,s,c,f,g,E,P,$,ft,mt){return t=new Fx(t,n,a,g,P,$,ft,mt,E),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},fu(f),t}function Gg(t){return t?(t=Nr,t):Nr}function Vg(t,n,a,s,c,f){c=Gg(c),s.context===null?s.context=c:s.pendingContext=c,s=da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=pa(t,s,n),a!==null&&(Fn(a,t,n),Qs(a,t,n))}function Xg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Df(t,n){Xg(t,n),(t=t.alternate)&&Xg(t,n)}function kg(t){if(t.tag===13||t.tag===31){var n=Za(t,67108864);n!==null&&Fn(n,t,67108864),Df(t,67108864)}}function qg(t){if(t.tag===13||t.tag===31){var n=jn();n=Va(n);var a=Za(t,n);a!==null&&Fn(a,t,n),Df(t,n)}}var kl=!0;function Hx(t,n,a,s){var c=O.T;O.T=null;var f=Z.p;try{Z.p=2,Uf(t,n,a,s)}finally{Z.p=f,O.T=c}}function Gx(t,n,a,s){var c=O.T;O.T=null;var f=Z.p;try{Z.p=8,Uf(t,n,a,s)}finally{Z.p=f,O.T=c}}function Uf(t,n,a,s){if(kl){var c=Lf(s);if(c===null)_f(t,n,s,ql,a),Yg(t,s);else if(Xx(c,t,n,a,s))s.stopPropagation();else if(Yg(t,s),n&4&&-1<Vx.indexOf(t)){for(;c!==null;){var f=it(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Ct(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var P=1<<31-Jt(g);E.entanglements[1]|=P,g&=~P}bi(f),(Re&6)===0&&(Rl=ht()+500,po(0))}}break;case 31:case 13:E=Za(f,2),E!==null&&Fn(E,f,2),wl(),Df(f,2)}if(f=Lf(s),f===null&&_f(t,n,s,ql,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else _f(t,n,s,null,a)}}function Lf(t){return t=Nc(t),Nf(t)}var ql=null;function Nf(t){if(ql=null,t=X(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function Wg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case pt:return 2;case Xt:return 8;case wt:case zt:return 32;case me:return 268435456;default:return 32}default:return 32}}var Of=!1,ba=null,Aa=null,Ra=null,yo=new Map,Mo=new Map,Ca=[],Vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":Ra=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=it(n),n!==null&&kg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Xx(t,n,a,s,c){switch(n){case"focusin":return ba=Eo(ba,t,n,a,s,c),!0;case"dragenter":return Aa=Eo(Aa,t,n,a,s,c),!0;case"mouseover":return Ra=Eo(Ra,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,Eo(yo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,t,n,a,s,c)),!0}return!1}function jg(t){var n=X(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Xa(t.priority,function(){qg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Xa(t.priority,function(){qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lc=s,a.target.dispatchEvent(s),Lc=null}else return n=it(a),n!==null&&kg(n),t.blockedOn=a,!1;n.shift()}return!0}function Zg(t,n,a){Wl(t)&&a.delete(n)}function kx(){Of=!1,ba!==null&&Wl(ba)&&(ba=null),Aa!==null&&Wl(Aa)&&(Aa=null),Ra!==null&&Wl(Ra)&&(Ra=null),yo.forEach(Zg),Mo.forEach(Zg)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,Of||(Of=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,kx)))}var jl=null;function Kg(t){jl!==t&&(jl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===t&&(jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Nf(s||a)===null)continue;break}var f=it(a);f!==null&&(t.splice(n,3),n-=3,Uu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function is(t){function n(P){return Yl(P,t)}ba!==null&&Yl(ba,t),Aa!==null&&Yl(Aa,t),Ra!==null&&Yl(Ra,t),yo.forEach(n),Mo.forEach(n);for(var a=0;a<Ca.length;a++){var s=Ca[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ca.length&&(a=Ca[0],a.blockedOn===null);)jg(a),a.blockedOn===null&&Ca.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[vn]||null;if(typeof f=="function")g||Kg(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[vn]||null)E=g.formAction;else if(Nf(c)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Kg(a)}}}function Qg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Pf(t){this._internalRoot=t}Zl.prototype.render=Pf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=jn();Vg(a,s,t,n,null,null)},Zl.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Vg(t.current,2,null,t,null,null),wl(),n[Ui]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Os();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ca.length&&n!==0&&n<Ca[a].priority;a++);Ca.splice(a,0,t),a===0&&jg(t)}};var Jg=e.version;if(Jg!=="19.2.7")throw Error(r(527,Jg,"19.2.7"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var qx={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{Yt=Kl.inject(qx),kt=Kl}catch{}}return bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=rm,f=sm,g=om;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Hg(t,1,!1,null,null,a,s,null,c,f,g,Qg),t[Ui]=n.current,gf(t),new Pf(n)},bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=rm,g=sm,E=om,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Hg(t,1,!0,n,a??null,s,c,P,f,g,E,Qg),n.context=Gg(null),a=n.current,s=jn(),s=Va(s),c=da(s),c.callback=null,pa(a,c,s),a=s,n.current.lanes=a,_n(n,a),bi(n),t[Ui]=n.current,gf(t),new Zl(n)},bo.version="19.2.7",bo}var l_;function eS(){if(l_)return If.exports;l_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=tS(),If.exports}var nS=eS();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const od="171",iS=0,c_=1,aS=2,r0=1,rS=2,ea=3,Fa=0,Gn=1,Ri=2,Ba=0,Ss=1,u_=2,f_=3,h_=4,sS=5,gr=100,oS=101,lS=102,cS=103,uS=104,fS=200,hS=201,dS=202,pS=203,xh=204,Sh=205,mS=206,gS=207,_S=208,vS=209,xS=210,SS=211,yS=212,MS=213,ES=214,yh=0,Mh=1,Eh=2,Es=3,Th=4,bh=5,Ah=6,Rh=7,s0=0,TS=1,bS=2,Ia=0,AS=1,RS=2,CS=3,wS=4,DS=5,US=6,LS=7,o0=300,Ts=301,bs=302,Ch=303,wh=304,Ac=306,Dh=1e3,vr=1001,Uh=1002,xi=1003,NS=1004,Ql=1005,Ci=1006,Vf=1007,xr=1008,ra=1009,l0=1010,c0=1011,No=1012,ld=1013,yr=1014,na=1015,Po=1016,cd=1017,ud=1018,As=1020,u0=35902,f0=1021,h0=1022,vi=1023,d0=1024,p0=1025,ys=1026,Rs=1027,m0=1028,fd=1029,g0=1030,hd=1031,dd=1033,vc=33776,xc=33777,Sc=33778,yc=33779,Lh=35840,Nh=35841,Oh=35842,Ph=35843,zh=36196,Bh=37492,Ih=37496,Fh=37808,Hh=37809,Gh=37810,Vh=37811,Xh=37812,kh=37813,qh=37814,Wh=37815,Yh=37816,jh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,Mc=36492,$h=36494,td=36495,_0=36283,ed=36284,nd=36285,id=36286,OS=3200,PS=3201,zS=0,BS=1,za="",Qn="srgb",Cs="srgb-linear",Tc="linear",ze="srgb",as=7680,d_=519,IS=512,FS=513,HS=514,v0=515,GS=516,VS=517,XS=518,kS=519,p_=35044,m_="300 es",ia=2e3,bc=2001;class Ds{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xf=Math.PI/180,ad=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function Se(o,e,i){return Math.max(e,Math.min(i,o))}function qS(o,e){return(o%e+e)%e}function kf(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,i=0){He.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*r-h*l+e.x,this.y=u*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(e,i,r,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p)}set(e,i,r,l,u,h,d,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],v=r[4],x=r[7],S=r[2],M=r[5],A=r[8],R=l[0],y=l[3],_=l[6],B=l[1],N=l[4],U=l[7],Q=l[2],G=l[5],z=l[8];return u[0]=h*R+d*B+m*Q,u[3]=h*y+d*N+m*G,u[6]=h*_+d*U+m*z,u[1]=p*R+v*B+x*Q,u[4]=p*y+v*N+x*G,u[7]=p*_+v*U+x*z,u[2]=S*R+M*B+A*Q,u[5]=S*y+M*N+A*G,u[8]=S*_+M*U+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return i*h*v-i*d*p-r*u*v+r*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*h-d*p,S=d*m-v*u,M=p*u-h*m,A=i*x+r*S+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=x*R,e[1]=(l*p-v*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(v*i-l*m)*R,e[5]=(l*u-d*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(qf.makeScale(e,i)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new oe;function x0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Oo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function WS(){const o=Oo("canvas");return o.style.display="block",o}const g_={};function vs(o){o in g_||(g_[o]=!0,console.warn(o))}function YS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function jS(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ZS(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const __=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),v_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KS(){const o={enabled:!0,workingColorSpace:Cs,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===ze&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ze&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?Tc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Cs]:{primaries:e,whitePoint:r,transfer:Tc,toXYZ:__,fromXYZ:v_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:ze,toXYZ:__,fromXYZ:v_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),o}const Ae=KS();function aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class QS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=Oo("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Oo("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=aa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JS=0;class S0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Wf(l[h].image)):u.push(Wf(l[h]))}else u=Wf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Wf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?QS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;class Nn extends Ds{constructor(e=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,r=vr,l=vr,u=Ci,h=xr,d=vi,m=ra,p=Nn.DEFAULT_ANISOTROPY,v=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=zo(),this.name="",this.source=new S0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==o0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=o0;Nn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],x=m[8],S=m[1],M=m[5],A=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(x-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(x+R)<.1&&Math.abs(A+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(M+1)/2,Q=(_+1)/2,G=(v+S)/4,z=(x+R)/4,K=(A+y)/4;return N>U&&N>Q?N<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(N),l=G/r,u=z/r):U>Q?U<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),r=G/l,u=K/l):Q<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(Q),r=z/u,l=K/u),this.set(r,l,u,i),this}let B=Math.sqrt((y-A)*(y-A)+(x-R)*(x-R)+(S-v)*(S-v));return Math.abs(B)<.001&&(B=1),this.x=(y-A)/B,this.y=(x-R)/B,this.z=(S-v)/B,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this.w=Se(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this.w=Se(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ty extends Ds{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Nn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new S0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mr extends ty{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class y0 extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ey extends Nn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],v=r[l+2],x=r[l+3];const S=u[h+0],M=u[h+1],A=u[h+2],R=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x;return}if(d===1){e[i+0]=S,e[i+1]=M,e[i+2]=A,e[i+3]=R;return}if(x!==R||m!==S||p!==M||v!==A){let y=1-d;const _=m*S+p*M+v*A+x*R,B=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const Q=Math.sqrt(N),G=Math.atan2(Q,_*B);y=Math.sin(y*G)/Q,d=Math.sin(d*G)/Q}const U=d*B;if(m=m*y+S*U,p=p*y+M*U,v=v*y+A*U,x=x*y+R*U,y===1-d){const Q=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=Q,p*=Q,v*=Q,x*=Q}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],v=r[l+3],x=u[h],S=u[h+1],M=u[h+2],A=u[h+3];return e[i]=d*A+v*x+m*M-p*S,e[i+1]=m*A+v*S+p*x-d*M,e[i+2]=p*A+v*M+d*S-m*x,e[i+3]=v*A-d*x-m*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),v=d(l/2),x=d(u/2),S=m(r/2),M=m(l/2),A=m(u/2);switch(h){case"XYZ":this._x=S*v*x+p*M*A,this._y=p*M*x-S*v*A,this._z=p*v*A+S*M*x,this._w=p*v*x-S*M*A;break;case"YXZ":this._x=S*v*x+p*M*A,this._y=p*M*x-S*v*A,this._z=p*v*A-S*M*x,this._w=p*v*x+S*M*A;break;case"ZXY":this._x=S*v*x-p*M*A,this._y=p*M*x+S*v*A,this._z=p*v*A+S*M*x,this._w=p*v*x-S*M*A;break;case"ZYX":this._x=S*v*x-p*M*A,this._y=p*M*x+S*v*A,this._z=p*v*A-S*M*x,this._w=p*v*x+S*M*A;break;case"YZX":this._x=S*v*x+p*M*A,this._y=p*M*x+S*v*A,this._z=p*v*A-S*M*x,this._w=p*v*x-S*M*A;break;case"XZY":this._x=S*v*x-p*M*A,this._y=p*M*x-S*v*A,this._z=p*v*A+S*M*x,this._w=p*v*x+S*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],x=i[10],S=r+d+x;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Se(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+h*d+l*p-u*m,this._y=l*v+h*m+u*d-r*p,this._z=u*v+h*p+r*m-l*d,this._w=h*v-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,d),x=Math.sin((1-i)*v)/p,S=Math.sin(i*v)/p;return this._w=h*x+this._w*S,this._x=r*x+this._x*S,this._y=l*x+this._y*S,this._z=u*x+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(e=0,i=0,r=0){ot.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(x_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(x_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),v=2*(d*i-u*l),x=2*(u*r-h*i);return this.x=i+m*p+h*x-d*v,this.y=r+m*v+d*p-u*x,this.z=l+m*x+u*v-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Se(this.x,e.x,i.x),this.y=Se(this.y,e.y,i.y),this.z=Se(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Se(this.x,e,i),this.y=Se(this.y,e,i),this.z=Se(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yf.copy(this).projectOnVector(e),this.sub(Yf)}reflect(e){return this.sub(Yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Se(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new ot,x_=new Bo;class Io{constructor(e=new ot(1/0,1/0,1/0),i=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(pi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jl.copy(r.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),$l.subVectors(this.max,Ro),ss.subVectors(e.a,Ro),os.subVectors(e.b,Ro),ls.subVectors(e.c,Ro),Da.subVectors(os,ss),Ua.subVectors(ls,os),lr.subVectors(ss,ls);let i=[0,-Da.z,Da.y,0,-Ua.z,Ua.y,0,-lr.z,lr.y,Da.z,0,-Da.x,Ua.z,0,-Ua.x,lr.z,0,-lr.x,-Da.y,Da.x,0,-Ua.y,Ua.x,0,-lr.y,lr.x,0];return!jf(i,ss,os,ls,$l)||(i=[1,0,0,0,1,0,0,0,1],!jf(i,ss,os,ls,$l))?!1:(tc.crossVectors(Da,Ua),i=[tc.x,tc.y,tc.z],jf(i,ss,os,ls,$l))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ki=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],pi=new ot,Jl=new Io,ss=new ot,os=new ot,ls=new ot,Da=new ot,Ua=new ot,lr=new ot,Ro=new ot,$l=new ot,tc=new ot,cr=new ot;function jf(o,e,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){cr.fromArray(o,u);const d=l.x*Math.abs(cr.x)+l.y*Math.abs(cr.y)+l.z*Math.abs(cr.z),m=e.dot(cr),p=i.dot(cr),v=r.dot(cr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const ny=new Io,Co=new ot,Zf=new ot;class pd{constructor(e=new ot,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ny.setFromPoints(e).getCenter(r);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Zf)),this.expandByPoint(Co.copy(e.center).sub(Zf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new ot,Kf=new ot,ec=new ot,La=new ot,Qf=new ot,nc=new ot,Jf=new ot;class iy{constructor(e=new ot,i=new ot(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Qi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Kf.copy(e).add(i).multiplyScalar(.5),ec.copy(i).sub(e).normalize(),La.copy(this.origin).sub(Kf);const u=e.distanceTo(i)*.5,h=-this.direction.dot(ec),d=La.dot(this.direction),m=-La.dot(ec),p=La.lengthSq(),v=Math.abs(1-h*h);let x,S,M,A;if(v>0)if(x=h*m-d,S=h*d-m,A=u*v,x>=0)if(S>=-A)if(S<=A){const R=1/v;x*=R,S*=R,M=x*(x+h*S+2*d)+S*(h*x+S+2*m)+p}else S=u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S=-u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;else S<=-A?(x=Math.max(0,-(-h*u+d)),S=x>0?-u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p):S<=A?(x=0,S=Math.min(Math.max(-u,-m),u),M=S*(S+2*m)+p):(x=Math.max(0,-(h*u+d)),S=x>0?u:Math.min(Math.max(-u,-m),u),M=-x*x+S*(S+2*m)+p);else S=h>0?-u:u,x=Math.max(0,-(h*S+d)),M=-x*x+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Kf).addScaledVector(ec,S),M}intersectSphere(e,i){Qi.subVectors(e.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,h=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,h=(e.min.y-S.y)*v),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),x>=0?(d=(e.min.z-S.z)*x,m=(e.max.z-S.z)*x):(d=(e.max.z-S.z)*x,m=(e.min.z-S.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,i,r,l,u){Qf.subVectors(i,e),nc.subVectors(r,e),Jf.crossVectors(Qf,nc);let h=this.direction.dot(Jf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;La.subVectors(this.origin,e);const m=d*this.direction.dot(nc.crossVectors(La,nc));if(m<0)return null;const p=d*this.direction.dot(Qf.cross(La));if(p<0||m+p>h)return null;const v=-d*La.dot(Jf);return v<0?null:this.at(v/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,i,r,l,u,h,d,m,p,v,x,S,M,A,R,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,h,d,m,p,v,x,S,M,A,R,y)}set(e,i,r,l,u,h,d,m,p,v,x,S,M,A,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=x,_[14]=S,_[3]=M,_[7]=A,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/cs.setFromMatrixColumn(e,0).length(),u=1/cs.setFromMatrixColumn(e,1).length(),h=1/cs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const S=h*v,M=h*x,A=d*v,R=d*x;i[0]=m*v,i[4]=-m*x,i[8]=p,i[1]=M+A*p,i[5]=S-R*p,i[9]=-d*m,i[2]=R-S*p,i[6]=A+M*p,i[10]=h*m}else if(e.order==="YXZ"){const S=m*v,M=m*x,A=p*v,R=p*x;i[0]=S+R*d,i[4]=A*d-M,i[8]=h*p,i[1]=h*x,i[5]=h*v,i[9]=-d,i[2]=M*d-A,i[6]=R+S*d,i[10]=h*m}else if(e.order==="ZXY"){const S=m*v,M=m*x,A=p*v,R=p*x;i[0]=S-R*d,i[4]=-h*x,i[8]=A+M*d,i[1]=M+A*d,i[5]=h*v,i[9]=R-S*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const S=h*v,M=h*x,A=d*v,R=d*x;i[0]=m*v,i[4]=A*p-M,i[8]=S*p+R,i[1]=m*x,i[5]=R*p+S,i[9]=M*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const S=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*v,i[4]=R-S*x,i[8]=A*x+M,i[1]=x,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*x+A,i[10]=S-R*x}else if(e.order==="XZY"){const S=h*m,M=h*p,A=d*m,R=d*p;i[0]=m*v,i[4]=-x,i[8]=p*v,i[1]=S*x+R,i[5]=h*v,i[9]=M*x-A,i[2]=A*x-M,i[6]=d*v,i[10]=R*x+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ay,e,ry)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Na.crossVectors(r,Zn),Na.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Na.crossVectors(r,Zn)),Na.normalize(),ic.crossVectors(Zn,Na),l[0]=Na.x,l[4]=ic.x,l[8]=Zn.x,l[1]=Na.y,l[5]=ic.y,l[9]=Zn.y,l[2]=Na.z,l[6]=ic.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],v=r[1],x=r[5],S=r[9],M=r[13],A=r[2],R=r[6],y=r[10],_=r[14],B=r[3],N=r[7],U=r[11],Q=r[15],G=l[0],z=l[4],K=l[8],w=l[12],C=l[1],H=l[5],ct=l[9],st=l[13],gt=l[2],_t=l[6],O=l[10],Z=l[14],j=l[3],Mt=l[7],bt=l[11],L=l[15];return u[0]=h*G+d*C+m*gt+p*j,u[4]=h*z+d*H+m*_t+p*Mt,u[8]=h*K+d*ct+m*O+p*bt,u[12]=h*w+d*st+m*Z+p*L,u[1]=v*G+x*C+S*gt+M*j,u[5]=v*z+x*H+S*_t+M*Mt,u[9]=v*K+x*ct+S*O+M*bt,u[13]=v*w+x*st+S*Z+M*L,u[2]=A*G+R*C+y*gt+_*j,u[6]=A*z+R*H+y*_t+_*Mt,u[10]=A*K+R*ct+y*O+_*bt,u[14]=A*w+R*st+y*Z+_*L,u[3]=B*G+N*C+U*gt+Q*j,u[7]=B*z+N*H+U*_t+Q*Mt,u[11]=B*K+N*ct+U*O+Q*bt,u[15]=B*w+N*st+U*Z+Q*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],S=e[10],M=e[14],A=e[3],R=e[7],y=e[11],_=e[15];return A*(+u*m*x-l*p*x-u*d*S+r*p*S+l*d*M-r*m*M)+R*(+i*m*M-i*p*S+u*h*S-l*h*M+l*p*v-u*m*v)+y*(+i*p*x-i*d*M-u*h*x+r*h*M+u*d*v-r*p*v)+_*(-l*d*v-i*m*x+i*d*S+l*h*x-r*h*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],S=e[10],M=e[11],A=e[12],R=e[13],y=e[14],_=e[15],B=x*y*p-R*S*p+R*m*M-d*y*M-x*m*_+d*S*_,N=A*S*p-v*y*p-A*m*M+h*y*M+v*m*_-h*S*_,U=v*R*p-A*x*p+A*d*M-h*R*M-v*d*_+h*x*_,Q=A*x*m-v*R*m-A*d*S+h*R*S+v*d*y-h*x*y,G=i*B+r*N+l*U+u*Q;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/G;return e[0]=B*z,e[1]=(R*S*u-x*y*u-R*l*M+r*y*M+x*l*_-r*S*_)*z,e[2]=(d*y*u-R*m*u+R*l*p-r*y*p-d*l*_+r*m*_)*z,e[3]=(x*m*u-d*S*u-x*l*p+r*S*p+d*l*M-r*m*M)*z,e[4]=N*z,e[5]=(v*y*u-A*S*u+A*l*M-i*y*M-v*l*_+i*S*_)*z,e[6]=(A*m*u-h*y*u-A*l*p+i*y*p+h*l*_-i*m*_)*z,e[7]=(h*S*u-v*m*u+v*l*p-i*S*p-h*l*M+i*m*M)*z,e[8]=U*z,e[9]=(A*x*u-v*R*u-A*r*M+i*R*M+v*r*_-i*x*_)*z,e[10]=(h*R*u-A*d*u+A*r*p-i*R*p-h*r*_+i*d*_)*z,e[11]=(v*d*u-h*x*u-v*r*p+i*x*p+h*r*M-i*d*M)*z,e[12]=Q*z,e[13]=(v*R*l-A*x*l+A*r*S-i*R*S-v*r*y+i*x*y)*z,e[14]=(A*d*l-h*R*l-A*r*m+i*R*m+h*r*y-i*d*y)*z,e[15]=(h*x*l-v*d*l+v*r*m-i*x*m-h*r*S+i*d*S)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=e.x,d=e.y,m=e.z,p=u*h,v=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+r,v*m-l*h,0,p*m-l*d,v*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,h){return this.set(1,r,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,v=h+h,x=d+d,S=u*p,M=u*v,A=u*x,R=h*v,y=h*x,_=d*x,B=m*p,N=m*v,U=m*x,Q=r.x,G=r.y,z=r.z;return l[0]=(1-(R+_))*Q,l[1]=(M+U)*Q,l[2]=(A-N)*Q,l[3]=0,l[4]=(M-U)*G,l[5]=(1-(S+_))*G,l[6]=(y+B)*G,l[7]=0,l[8]=(A+N)*z,l[9]=(y-B)*z,l[10]=(1-(S+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const h=cs.set(l[4],l[5],l[6]).length(),d=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],mi.copy(this);const p=1/u,v=1/h,x=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=v,mi.elements[5]*=v,mi.elements[6]*=v,mi.elements[8]*=x,mi.elements[9]*=x,mi.elements[10]*=x,i.setFromRotationMatrix(mi),r.x=u,r.y=h,r.z=d,this}makePerspective(e,i,r,l,u,h,d=ia){const m=this.elements,p=2*u/(i-e),v=2*u/(r-l),x=(i+e)/(i-e),S=(r+l)/(r-l);let M,A;if(d===ia)M=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===bc)M=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,h,d=ia){const m=this.elements,p=1/(i-e),v=1/(r-l),x=1/(h-u),S=(i+e)*p,M=(r+l)*v;let A,R;if(d===ia)A=(h+u)*x,R=-2*x;else if(d===bc)A=u*x,R=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-S,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=R,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const cs=new ot,mi=new ln,ay=new ot(0,0,0),ry=new ot(1,1,1),Na=new ot,ic=new ot,Zn=new ot,S_=new ln,y_=new Bo;class sa{constructor(e=0,i=0,r=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],x=l[2],S=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return S_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(S_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return y_.setFromEuler(this),this.setFromQuaternion(y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class M0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sy=0;const M_=new ot,us=new Bo,Ji=new ln,ac=new ot,wo=new ot,oy=new ot,ly=new Bo,E_=new ot(1,0,0),T_=new ot(0,1,0),b_=new ot(0,0,1),A_={type:"added"},cy={type:"removed"},fs={type:"childadded",child:null},$f={type:"childremoved",child:null};class Jn extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new ot,i=new sa,r=new Bo,l=new ot(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ln},normalMatrix:{value:new oe}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new M0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(E_,e)}rotateY(e){return this.rotateOnAxis(T_,e)}rotateZ(e){return this.rotateOnAxis(b_,e)}translateOnAxis(e,i){return M_.copy(e).applyQuaternion(this.quaternion),this.position.add(M_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(E_,e)}translateY(e){return this.translateOnAxis(T_,e)}translateZ(e){return this.translateOnAxis(b_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ac.copy(e):ac.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(wo,ac,this.up):Ji.lookAt(ac,wo,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),us.setFromRotationMatrix(Ji),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(A_),fs.child=e,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(cy),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(A_),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,oy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,ly,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),v=h(e.images),x=h(e.shapes),S=h(e.skeletons),M=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Jn.DEFAULT_UP=new ot(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new ot,$i=new ot,th=new ot,ta=new ot,hs=new ot,ds=new ot,R_=new ot,eh=new ot,nh=new ot,ih=new ot,ah=new tn,rh=new tn,sh=new tn;class _i{constructor(e=new ot,i=new ot,r=new ot){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),gi.subVectors(e,i),l.cross(gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){gi.subVectors(l,i),$i.subVectors(r,i),th.subVectors(e,i);const h=gi.dot(gi),d=gi.dot($i),m=gi.dot(th),p=$i.dot($i),v=$i.dot(th),x=h*p-d*d;if(x===0)return u.set(0,0,0),null;const S=1/x,M=(p*m-d*v)*S,A=(h*v-d*m)*S;return u.set(1-M-A,A,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(e,i,r,l,u,h,d,m){return this.getBarycoord(e,i,r,l,ta)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ta.x),m.addScaledVector(h,ta.y),m.addScaledVector(d,ta.z),m)}static getInterpolatedAttribute(e,i,r,l,u,h){return ah.setScalar(0),rh.setScalar(0),sh.setScalar(0),ah.fromBufferAttribute(e,i),rh.fromBufferAttribute(e,r),sh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ah,u.x),h.addScaledVector(rh,u.y),h.addScaledVector(sh,u.z),h}static isFrontFacing(e,i,r,l){return gi.subVectors(r,i),$i.subVectors(e,i),gi.cross($i).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),gi.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return _i.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let h,d;hs.subVectors(l,r),ds.subVectors(u,r),eh.subVectors(e,r);const m=hs.dot(eh),p=ds.dot(eh);if(m<=0&&p<=0)return i.copy(r);nh.subVectors(e,l);const v=hs.dot(nh),x=ds.dot(nh);if(v>=0&&x<=v)return i.copy(l);const S=m*x-v*p;if(S<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(r).addScaledVector(hs,h);ih.subVectors(e,u);const M=hs.dot(ih),A=ds.dot(ih);if(A>=0&&M<=A)return i.copy(u);const R=M*p-m*A;if(R<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(ds,d);const y=v*A-M*x;if(y<=0&&x-v>=0&&M-A>=0)return R_.subVectors(u,l),d=(x-v)/(x-v+(M-A)),i.copy(l).addScaledVector(R_,d);const _=1/(y+R+S);return h=R*_,d=S*_,i.copy(r).addScaledVector(hs,h).addScaledVector(ds,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oa={h:0,s:0,l:0},rc={h:0,s:0,l:0};function oh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Be{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ae.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ae.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ae.workingColorSpace){if(e=qS(e,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=oh(h,u,e+1/3),this.g=oh(h,u,e),this.b=oh(h,u,e-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(e,i=Qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Qn){const r=E0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Ae.fromWorkingColorSpace(Rn.copy(this),e),Math.round(Se(Rn.r*255,0,255))*65536+Math.round(Se(Rn.g*255,0,255))*256+Math.round(Se(Rn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(Rn.copy(this),i);const r=Rn.r,l=Rn.g,u=Rn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=v<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(Rn.copy(this),i),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=Qn){Ae.fromWorkingColorSpace(Rn.copy(this),e);const i=Rn.r,r=Rn.g,l=Rn.b;return e!==Qn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Oa),this.setHSL(Oa.h+e,Oa.s+i,Oa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Oa),e.getHSL(rc);const r=kf(Oa.h,rc.h,i),l=kf(Oa.s,rc.s,i),u=kf(Oa.l,rc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Be;Be.NAMES=E0;let uy=0;class Rc extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=Ss,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=d_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Fa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Sh&&(r.blendDst=this.blendDst),this.blendEquation!==gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==d_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class md extends Rc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=s0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new ot,sc=new He;class Di{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=p_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(e),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==p_&&(e.usage=this.usage),e}}class T0 extends Di{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class b0 extends Di{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Sr extends Di{constructor(e,i,r){super(new Float32Array(e),i,r)}}let fy=0;const oi=new ln,lh=new Jn,ps=new ot,Kn=new Io,Do=new Io,gn=new ot;class Er extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x0(e)?b0:T0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new oe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,i,r){return oi.makeTranslation(e,i,r),this.applyMatrix4(oi),this}scale(e,i,r){return oi.makeScale(e,i,r),this.applyMatrix4(oi),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Sr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(Kn.min,Do.min),Kn.expandByPoint(gn),gn.addVectors(Kn.max,Do.max),Kn.expandByPoint(gn)):(Kn.expandByPoint(Do.min),Kn.expandByPoint(Do.max))}Kn.getCenter(r);let l=0;for(let u=0,h=e.count;u<h;u++)gn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(gn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)gn.fromBufferAttribute(d,p),m&&(ps.fromBufferAttribute(e,p),gn.add(ps)),l=Math.max(l,r.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new ot,m[K]=new ot;const p=new ot,v=new ot,x=new ot,S=new He,M=new He,A=new He,R=new ot,y=new ot;function _(K,w,C){p.fromBufferAttribute(r,K),v.fromBufferAttribute(r,w),x.fromBufferAttribute(r,C),S.fromBufferAttribute(u,K),M.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),v.sub(p),x.sub(p),M.sub(S),A.sub(S);const H=1/(M.x*A.y-A.x*M.y);isFinite(H)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(x,-M.y).multiplyScalar(H),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-A.x).multiplyScalar(H),d[K].add(R),d[w].add(R),d[C].add(R),m[K].add(y),m[w].add(y),m[C].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let K=0,w=B.length;K<w;++K){const C=B[K],H=C.start,ct=C.count;for(let st=H,gt=H+ct;st<gt;st+=3)_(e.getX(st+0),e.getX(st+1),e.getX(st+2))}const N=new ot,U=new ot,Q=new ot,G=new ot;function z(K){Q.fromBufferAttribute(l,K),G.copy(Q);const w=d[K];N.copy(w),N.sub(Q.multiplyScalar(Q.dot(w))).normalize(),U.crossVectors(G,w);const H=U.dot(m[K])<0?-1:1;h.setXYZW(K,N.x,N.y,N.z,H)}for(let K=0,w=B.length;K<w;++K){const C=B[K],H=C.start,ct=C.count;for(let st=H,gt=H+ct;st<gt;st+=3)z(e.getX(st+0)),z(e.getX(st+1)),z(e.getX(st+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const l=new ot,u=new ot,h=new ot,d=new ot,m=new ot,p=new ot,v=new ot,x=new ot;if(e)for(let S=0,M=e.count;S<M;S+=3){const A=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),v.subVectors(h,u),x.subVectors(l,u),v.cross(x),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),d.add(v),m.add(v),p.add(v),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,M=i.count;S<M;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),v.subVectors(h,u),x.subVectors(l,u),v.cross(x),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)gn.fromBufferAttribute(e,i),gn.normalize(),e.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,S=new p.constructor(m.length*v);let M=0,A=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*v;for(let _=0;_<v;_++)S[A++]=p[M++]}return new Di(S,v,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Er,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,x=p.length;v<x;v++){const S=p[v],M=e(S,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,S=p.length;x<S;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],x=u[p];for(let S=0,M=x.length;S<M;S++)v.push(x[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,v=h.length;p<v;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const C_=new ln,ur=new iy,oc=new pd,w_=new ot,lc=new ot,cc=new ot,uc=new ot,ch=new ot,fc=new ot,D_=new ot,hc=new ot;class wi extends Jn{constructor(e=new Er,i=new md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){fc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],x=u[m];v!==0&&(ch.fromBufferAttribute(x,e),h?fc.addScaledVector(ch,v):fc.addScaledVector(ch.sub(i),v))}i.add(fc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),oc.copy(r.boundingSphere),oc.applyMatrix4(u),ur.copy(e.ray).recast(e.near),!(oc.containsPoint(ur.origin)===!1&&(ur.intersectSphere(oc,w_)===null||ur.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(C_.copy(u).invert(),ur.copy(e.ray).applyMatrix4(C_),!(r.boundingBox!==null&&ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ur)))}_computeIntersections(e,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,x=u.attributes.normal,S=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const y=S[A],_=h[y.materialIndex],B=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=B,Q=N;U<Q;U+=3){const G=d.getX(U),z=d.getX(U+1),K=d.getX(U+2);l=dc(this,_,e,r,p,v,x,G,z,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=A,_=R;y<_;y+=3){const B=d.getX(y),N=d.getX(y+1),U=d.getX(y+2);l=dc(this,h,e,r,p,v,x,B,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,R=S.length;A<R;A++){const y=S[A],_=h[y.materialIndex],B=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=B,Q=N;U<Q;U+=3){const G=U,z=U+1,K=U+2;l=dc(this,_,e,r,p,v,x,G,z,K),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=A,_=R;y<_;y+=3){const B=y,N=y+1,U=y+2;l=dc(this,h,e,r,p,v,x,B,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function hy(o,e,i,r,l,u,h,d){let m;if(e.side===Gn?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,e.side===Fa,d),m===null)return null;hc.copy(d),hc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:o}}function dc(o,e,i,r,l,u,h,d,m,p){o.getVertexPosition(d,lc),o.getVertexPosition(m,cc),o.getVertexPosition(p,uc);const v=hy(o,e,i,r,lc,cc,uc,D_);if(v){const x=new ot;_i.getBarycoord(D_,lc,cc,uc,x),l&&(v.uv=_i.getInterpolatedAttribute(l,d,m,p,x,new He)),u&&(v.uv1=_i.getInterpolatedAttribute(u,d,m,p,x,new He)),h&&(v.normal=_i.getInterpolatedAttribute(h,d,m,p,x,new ot),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:m,c:p,normal:new ot,materialIndex:0};_i.getNormal(lc,cc,uc,S.normal),v.face=S,v.barycoord=x}return v}class Fo extends Er{constructor(e=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],v=[],x=[];let S=0,M=0;A("z","y","x",-1,-1,r,i,e,h,u,0),A("z","y","x",1,-1,r,i,-e,h,u,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Sr(p,3)),this.setAttribute("normal",new Sr(v,3)),this.setAttribute("uv",new Sr(x,2));function A(R,y,_,B,N,U,Q,G,z,K,w){const C=U/z,H=Q/K,ct=U/2,st=Q/2,gt=G/2,_t=z+1,O=K+1;let Z=0,j=0;const Mt=new ot;for(let bt=0;bt<O;bt++){const L=bt*H-st;for(let nt=0;nt<_t;nt++){const yt=nt*C-ct;Mt[R]=yt*B,Mt[y]=L*N,Mt[_]=gt,p.push(Mt.x,Mt.y,Mt.z),Mt[R]=0,Mt[y]=0,Mt[_]=G>0?1:-1,v.push(Mt.x,Mt.y,Mt.z),x.push(nt/z),x.push(1-bt/K),Z+=1}}for(let bt=0;bt<K;bt++)for(let L=0;L<z;L++){const nt=S+L+_t*bt,yt=S+L+_t*(bt+1),Y=S+(L+1)+_t*(bt+1),ut=S+(L+1)+_t*bt;m.push(nt,yt,ut),m.push(yt,Y,ut),j+=6}d.addGroup(M,j,w),M+=j,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ws(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=ws(o[i]);for(const l in r)e[l]=r[l]}return e}function dy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function A0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ae.workingColorSpace}const py={clone:ws,merge:Un};var my=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ha extends Rc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=my,this.fragmentShader=gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class R0 extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pa=new ot,U_=new He,L_=new He;class li extends R0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Xf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z),Pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pa.x,Pa.y).multiplyScalar(-e/Pa.z)}getViewSize(e,i){return this.getViewBounds(e,U_,L_),i.subVectors(L_,U_)}setViewOffset(e,i,r,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Xf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,gs=1;class _y extends Jn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(ms,gs,e,i);l.layers=this.layers,this.add(l);const u=new li(ms,gs,e,i);u.layers=this.layers,this.add(u);const h=new li(ms,gs,e,i);h.layers=this.layers,this.add(h);const d=new li(ms,gs,e,i);d.layers=this.layers,this.add(d);const m=new li(ms,gs,e,i);m.layers=this.layers,this.add(m);const p=new li(ms,gs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,v]=this.children,x=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(x,S,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class C0 extends Nn{constructor(e,i,r,l,u,h,d,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:Ts,super(e,i,r,l,u,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vy extends Mr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new C0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ci}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Fo(5,5,5),u=new Ha({name:"CubemapFromEquirect",uniforms:ws(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Ba});u.uniforms.tEquirect.value=i;const h=new wi(l,u),d=i.minFilter;return i.minFilter===xr&&(i.minFilter=Ci),new _y(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(u)}}class xy extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const uh=new ot,Sy=new ot,yy=new oe;class pr{constructor(e=new ot(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=uh.subVectors(r,i).cross(Sy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||yy.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new pd,pc=new ot;class w0{constructor(e=new pr,i=new pr,r=new pr,l=new pr,u=new pr,h=new pr){this.planes=[e,i,r,l,u,h]}set(e,i,r,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ia){const r=this.planes,l=e.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],v=l[5],x=l[6],S=l[7],M=l[8],A=l[9],R=l[10],y=l[11],_=l[12],B=l[13],N=l[14],U=l[15];if(r[0].setComponents(m-u,S-p,y-M,U-_).normalize(),r[1].setComponents(m+u,S+p,y+M,U+_).normalize(),r[2].setComponents(m+h,S+v,y+A,U+B).normalize(),r[3].setComponents(m-h,S-v,y-A,U-B).normalize(),r[4].setComponents(m-d,S-x,y-R,U-N).normalize(),i===ia)r[5].setComponents(m+d,S+x,y+R,U+N).normalize();else if(i===bc)r[5].setComponents(d,x,R,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(pc.x=l.normal.x>0?e.max.x:e.min.x,pc.y=l.normal.y>0?e.max.y:e.min.y,pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uo extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class D0 extends Nn{constructor(e,i,r,l,u,h,d,m,p,v=ys){if(v!==ys&&v!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===ys&&(r=yr),r===void 0&&v===Rs&&(r=As),super(null,l,u,h,d,m,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=d!==void 0?d:xi,this.minFilter=m!==void 0?m:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ho extends Er{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,v=m+1,x=e/d,S=i/m,M=[],A=[],R=[],y=[];for(let _=0;_<v;_++){const B=_*S-h;for(let N=0;N<p;N++){const U=N*x-u;A.push(U,-B,0),R.push(0,0,1),y.push(N/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<d;B++){const N=B+p*_,U=B+p*(_+1),Q=B+1+p*(_+1),G=B+1+p*_;M.push(N,U,G),M.push(U,Q,G)}this.setIndex(M),this.setAttribute("position",new Sr(A,3)),this.setAttribute("normal",new Sr(R,3)),this.setAttribute("uv",new Sr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.widthSegments,e.heightSegments)}}class My extends Rc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ey extends Rc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const N_={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Ty{constructor(e,i,r){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this.itemStart=function(v){d++,u===!1&&l.onStart!==void 0&&l.onStart(v,h,d),u=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return p.push(v,x),this},this.removeHandler=function(v){const x=p.indexOf(v);return x!==-1&&p.splice(x,2),this},this.getHandler=function(v){for(let x=0,S=p.length;x<S;x+=2){const M=p[x],A=p[x+1];if(M.global&&(M.lastIndex=0),M.test(v))return A}return null}}}const by=new Ty;class gd{constructor(e){this.manager=e!==void 0?e:by,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,u){r.load(e,l,i,u)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gd.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ay extends gd{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const u=this,h=N_.get(e);if(h!==void 0)return u.manager.itemStart(e),setTimeout(function(){i&&i(h),u.manager.itemEnd(e)},0),h;const d=Oo("img");function m(){v(),N_.add(e,this),i&&i(this),u.manager.itemEnd(e)}function p(x){v(),l&&l(x),u.manager.itemError(e),u.manager.itemEnd(e)}function v(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),u.manager.itemStart(e),d.src=e,d}}class Ry extends gd{constructor(e){super(e)}load(e,i,r,l){const u=new Nn,h=new Ay(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){u.image=d,u.needsUpdate=!0,i!==void 0&&i(u)},r,l),u}}class Cy extends R0{constructor(e=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wy extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function O_(o,e,i,r){const l=Dy(r);switch(i){case f0:return o*e;case d0:return o*e;case p0:return o*e*2;case m0:return o*e/l.components*l.byteLength;case fd:return o*e/l.components*l.byteLength;case g0:return o*e*2/l.components*l.byteLength;case hd:return o*e*2/l.components*l.byteLength;case h0:return o*e*3/l.components*l.byteLength;case vi:return o*e*4/l.components*l.byteLength;case dd:return o*e*4/l.components*l.byteLength;case vc:case xc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nh:case Ph:return Math.max(o,16)*Math.max(e,8)/4;case Lh:case Oh:return Math.max(o,8)*Math.max(e,8)/2;case zh:case Bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ih:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case qh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case jh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Mc:case $h:case td:return Math.ceil(o/4)*Math.ceil(e/4)*16;case _0:case ed:return Math.ceil(o/4)*Math.ceil(e/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Dy(o){switch(o){case ra:case l0:return{byteLength:1,components:1};case No:case c0:case Po:return{byteLength:2,components:1};case cd:case ud:return{byteLength:2,components:4};case yr:case ld:case na:return{byteLength:4,components:1};case u0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=od);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U0(){let o=null,e=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Uy(o){const e=new WeakMap;function i(d,m){const p=d.array,v=d.usage,x=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const v=m.array,x=m.updateRanges;if(o.bindBuffer(p,d),x.length===0)o.bufferSubData(p,0,v);else{x.sort((M,A)=>M.start-A.start);let S=0;for(let M=1;M<x.length;M++){const A=x[S],R=x[M];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++S,x[S]=R)}x.length=S+1;for(let M=0,A=x.length;M<A;M++){const R=x[M];o.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ny=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,By=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Iy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,iM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lM="gl_FragColor = linearToOutputTexel( gl_FragColor );",cM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$M=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ME=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,KE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:Ly,alphahash_pars_fragment:Ny,alphamap_fragment:Oy,alphamap_pars_fragment:Py,alphatest_fragment:zy,alphatest_pars_fragment:By,aomap_fragment:Iy,aomap_pars_fragment:Fy,batching_pars_vertex:Hy,batching_vertex:Gy,begin_vertex:Vy,beginnormal_vertex:Xy,bsdfs:ky,iridescence_fragment:qy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Zy,clipping_planes_vertex:Ky,color_fragment:Qy,color_pars_fragment:Jy,color_pars_vertex:$y,color_vertex:tM,common:eM,cube_uv_reflection_fragment:nM,defaultnormal_vertex:iM,displacementmap_pars_vertex:aM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:oM,colorspace_fragment:lM,colorspace_pars_fragment:cM,envmap_fragment:uM,envmap_common_pars_fragment:fM,envmap_pars_fragment:hM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:TM,envmap_vertex:pM,fog_vertex:mM,fog_pars_vertex:gM,fog_fragment:_M,fog_pars_fragment:vM,gradientmap_pars_fragment:xM,lightmap_pars_fragment:SM,lights_lambert_fragment:yM,lights_lambert_pars_fragment:MM,lights_pars_begin:EM,lights_toon_fragment:bM,lights_toon_pars_fragment:AM,lights_phong_fragment:RM,lights_phong_pars_fragment:CM,lights_physical_fragment:wM,lights_physical_pars_fragment:DM,lights_fragment_begin:UM,lights_fragment_maps:LM,lights_fragment_end:NM,logdepthbuf_fragment:OM,logdepthbuf_pars_fragment:PM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:BM,map_fragment:IM,map_pars_fragment:FM,map_particle_fragment:HM,map_particle_pars_fragment:GM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:XM,morphinstance_vertex:kM,morphcolor_vertex:qM,morphnormal_vertex:WM,morphtarget_pars_vertex:YM,morphtarget_vertex:jM,normal_fragment_begin:ZM,normal_fragment_maps:KM,normal_pars_fragment:QM,normal_pars_vertex:JM,normal_vertex:$M,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:nE,clearcoat_pars_fragment:iE,iridescence_pars_fragment:aE,opaque_fragment:rE,packing:sE,premultiplied_alpha_fragment:oE,project_vertex:lE,dithering_fragment:cE,dithering_pars_fragment:uE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:hE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:pE,shadowmap_vertex:mE,shadowmask_pars_fragment:gE,skinbase_vertex:_E,skinning_pars_vertex:vE,skinning_vertex:xE,skinnormal_vertex:SE,specularmap_fragment:yE,specularmap_pars_fragment:ME,tonemapping_fragment:EE,tonemapping_pars_fragment:TE,transmission_fragment:bE,transmission_pars_fragment:AE,uv_pars_fragment:RE,uv_pars_vertex:CE,uv_vertex:wE,worldpos_vertex:DE,background_vert:UE,background_frag:LE,backgroundCube_vert:NE,backgroundCube_frag:OE,cube_vert:PE,cube_frag:zE,depth_vert:BE,depth_frag:IE,distanceRGBA_vert:FE,distanceRGBA_frag:HE,equirect_vert:GE,equirect_frag:VE,linedashed_vert:XE,linedashed_frag:kE,meshbasic_vert:qE,meshbasic_frag:WE,meshlambert_vert:YE,meshlambert_frag:jE,meshmatcap_vert:ZE,meshmatcap_frag:KE,meshnormal_vert:QE,meshnormal_frag:JE,meshphong_vert:$E,meshphong_frag:tT,meshphysical_vert:eT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:aT,points_vert:rT,points_frag:sT,shadow_vert:oT,shadow_frag:lT,sprite_vert:cT,sprite_frag:uT},Lt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ai={basic:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Lt.common,Lt.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Lt.lights,Lt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ai.physical={uniforms:Un([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const mc={r:0,b:0,g:0},hr=new sa,fT=new ln;function hT(o,e,i,r,l,u,h){const d=new Be(0);let m=u===!0?0:1,p,v,x=null,S=0,M=null;function A(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:e).get(U)),U}function R(N){let U=!1;const Q=A(N);Q===null?_(d,m):Q&&Q.isColor&&(_(Q,1),U=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(N,U){const Q=A(U);Q&&(Q.isCubeTexture||Q.mapping===Ac)?(v===void 0&&(v=new wi(new Fo(1,1,1),new Ha({name:"BackgroundCubeMaterial",uniforms:ws(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(G,z,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),hr.copy(U.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,Q.isCubeTexture&&Q.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),v.material.uniforms.envMap.value=Q,v.material.uniforms.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(fT.makeRotationFromEuler(hr)),v.material.toneMapped=Ae.getTransfer(Q.colorSpace)!==ze,(x!==Q||S!==Q.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,x=Q,S=Q.version,M=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):Q&&Q.isTexture&&(p===void 0&&(p=new wi(new Ho(2,2),new Ha({name:"BackgroundMaterial",uniforms:ws(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=Q,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(Q.colorSpace)!==ze,Q.matrixAutoUpdate===!0&&Q.updateMatrix(),p.material.uniforms.uvTransform.value.copy(Q.matrix),(x!==Q||S!==Q.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,x=Q,S=Q.version,M=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,U){N.getRGB(mc,A0(o)),r.buffers.color.setClear(mc.r,mc.g,mc.b,U,h)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(d,m)},render:R,addToRenderList:y,dispose:B}}function dT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,h=!1;function d(C,H,ct,st,gt){let _t=!1;const O=x(st,ct,H);u!==O&&(u=O,p(u.object)),_t=M(C,st,ct,gt),_t&&A(C,st,ct,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(_t||h)&&(h=!1,U(C,H,ct,st),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function x(C,H,ct){const st=ct.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let _t=gt[H.id];_t===void 0&&(_t={},gt[H.id]=_t);let O=_t[st];return O===void 0&&(O=S(m()),_t[st]=O),O}function S(C){const H=[],ct=[],st=[];for(let gt=0;gt<i;gt++)H[gt]=0,ct[gt]=0,st[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ct,attributeDivisors:st,object:C,attributes:{},index:null}}function M(C,H,ct,st){const gt=u.attributes,_t=H.attributes;let O=0;const Z=ct.getAttributes();for(const j in Z)if(Z[j].location>=0){const bt=gt[j];let L=_t[j];if(L===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),bt===void 0||bt.attribute!==L||L&&bt.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==st}function A(C,H,ct,st){const gt={},_t=H.attributes;let O=0;const Z=ct.getAttributes();for(const j in Z)if(Z[j].location>=0){let bt=_t[j];bt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor));const L={};L.attribute=bt,bt&&bt.data&&(L.data=bt.data),gt[j]=L,O++}u.attributes=gt,u.attributesNum=O,u.index=st}function R(){const C=u.newAttributes;for(let H=0,ct=C.length;H<ct;H++)C[H]=0}function y(C){_(C,0)}function _(C,H){const ct=u.newAttributes,st=u.enabledAttributes,gt=u.attributeDivisors;ct[C]=1,st[C]===0&&(o.enableVertexAttribArray(C),st[C]=1),gt[C]!==H&&(o.vertexAttribDivisor(C,H),gt[C]=H)}function B(){const C=u.newAttributes,H=u.enabledAttributes;for(let ct=0,st=H.length;ct<st;ct++)H[ct]!==C[ct]&&(o.disableVertexAttribArray(ct),H[ct]=0)}function N(C,H,ct,st,gt,_t,O){O===!0?o.vertexAttribIPointer(C,H,ct,gt,_t):o.vertexAttribPointer(C,H,ct,st,gt,_t)}function U(C,H,ct,st){R();const gt=st.attributes,_t=ct.getAttributes(),O=H.defaultAttributeValues;for(const Z in _t){const j=_t[Z];if(j.location>=0){let Mt=gt[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const bt=Mt.normalized,L=Mt.itemSize,nt=e.get(Mt);if(nt===void 0)continue;const yt=nt.buffer,Y=nt.type,ut=nt.bytesPerElement,Tt=Y===o.INT||Y===o.UNSIGNED_INT||Mt.gpuType===ld;if(Mt.isInterleavedBufferAttribute){const St=Mt.data,Gt=St.stride,Ft=Mt.offset;if(St.isInstancedInterleavedBuffer){for(let ne=0;ne<j.locationSize;ne++)_(j.location+ne,St.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ne=0;ne<j.locationSize;ne++)y(j.location+ne);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ne=0;ne<j.locationSize;ne++)N(j.location+ne,L/j.locationSize,Y,bt,Gt*ut,(Ft+L/j.locationSize*ne)*ut,Tt)}else{if(Mt.isInstancedBufferAttribute){for(let St=0;St<j.locationSize;St++)_(j.location+St,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let St=0;St<j.locationSize;St++)y(j.location+St);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let St=0;St<j.locationSize;St++)N(j.location+St,L/j.locationSize,Y,bt,L*ut,L/j.locationSize*St*ut,Tt)}}else if(O!==void 0){const bt=O[Z];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(j.location,bt);break;case 3:o.vertexAttrib3fv(j.location,bt);break;case 4:o.vertexAttrib4fv(j.location,bt);break;default:o.vertexAttrib1fv(j.location,bt)}}}}B()}function Q(){K();for(const C in r){const H=r[C];for(const ct in H){const st=H[ct];for(const gt in st)v(st[gt].object),delete st[gt];delete H[ct]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const ct in H){const st=H[ct];for(const gt in st)v(st[gt].object),delete st[gt];delete H[ct]}delete r[C.id]}function z(C){for(const H in r){const ct=r[H];if(ct[C.id]===void 0)continue;const st=ct[C.id];for(const gt in st)v(st[gt].object),delete st[gt];delete ct[C.id]}}function K(){w(),h=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:w,dispose:Q,releaseStatesOfGeometry:G,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:B}}function pT(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function h(p,v,x){x!==0&&(o.drawArraysInstanced(r,p,v,x),i.update(v,r,x))}function d(p,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,x);let M=0;for(let A=0;A<x;A++)M+=v[A];i.update(M,r,1)}function m(p,v,x,S){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<p.length;A++)h(p[A],v[A],S[A]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,x);let A=0;for(let R=0;R<x;R++)A+=v[R]*S[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function mT(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==vi&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const K=z===Po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ra&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==na&&!K)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=i.logarithmicDepthBuffer===!0,S=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),Q=A>0,G=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:N,maxFragmentUniforms:U,vertexTextures:Q,maxSamples:G}}function gT(o){const e=this;let i=null,r=0,l=!1,u=!1;const h=new pr,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,S){const M=x.length!==0||S||r!==0||l;return l=S,r=x.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,S){i=v(x,S,0)},this.setState=function(x,S,M){const A=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,_=o.get(x);if(!l||A===null||A.length===0||u&&!y)u?v(null):p();else{const B=u?0:r,N=B*4;let U=_.clippingState||null;m.value=U,U=v(A,S,N,M);for(let Q=0;Q!==N;++Q)U[Q]=i[Q];_.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,S,M,A){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=m.value,A!==!0||y===null){const _=M+R*4,B=S.matrixWorldInverse;d.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,U=M;N!==R;++N,U+=4)h.copy(x[N]).applyMatrix4(B,d),h.normal.toArray(y,U),y[U+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function _T(o){let e=new WeakMap;function i(h,d){return d===Ch?h.mapping=Ts:d===wh&&(h.mapping=bs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new vy(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const xs=4,P_=[.125,.215,.35,.446,.526,.582],_r=20,fh=new Cy,z_=new Be;let hh=null,dh=0,ph=0,mh=!1;const mr=(1+Math.sqrt(5))/2,_s=1/mr,B_=[new ot(-mr,_s,0),new ot(mr,_s,0),new ot(-_s,0,mr),new ot(_s,0,mr),new ot(0,mr,-_s),new ot(0,mr,_s),new ot(-1,1,-1),new ot(1,1,-1),new ot(-1,1,1),new ot(1,1,1)];class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,dh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ts||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:Po,format:vi,colorSpace:Cs,depthBuffer:!1},l=F_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vT(u)),this._blurMaterial=xT(u,e,i)}return l}_compileMaterial(e){const i=new wi(this._lodPlanes[0],e);this._renderer.compile(i,fh)}_sceneToCubeUV(e,i,r,l){const d=new li(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,S=v.toneMapping;v.getClearColor(z_),v.toneMapping=Ia,v.autoClear=!1;const M=new md({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),A=new wi(new Fo,M);let R=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,R=!0):(M.color.copy(z_),R=!0);for(let _=0;_<6;_++){const B=_%3;B===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):B===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const N=this._cubeSize;gc(l,B*N,_>2?N:0,N,N),v.setRenderTarget(l),R&&v.render(A,d),v.render(e,d)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=S,v.autoClear=x,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ts||e.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new wi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;gc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,fh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=B_[(l-u-1)%B_.length];this._blur(e,u-1,u,h,d)}i.autoClear=r}_blur(e,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",u),this._halfBlur(h,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,x=new wi(this._lodPlanes[l],p),S=p.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*_r-1),R=u/A,y=isFinite(u)?1+Math.floor(v*R):_r;y>_r&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_r}`);const _=[];let B=0;for(let z=0;z<_r;++z){const K=z/R,w=Math.exp(-K*K/2);_.push(w),z===0?B+=w:z<y&&(B+=2*w)}for(let z=0;z<_.length;z++)_[z]=_[z]/B;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:N}=this;S.dTheta.value=A,S.mipInt.value=N-r;const U=this._sizeLods[l],Q=3*U*(l>N-xs?l-N+xs:0),G=4*(this._cubeSize-U);gc(i,Q,G,3*U,2*U),m.setRenderTarget(i),m.render(x,fh)}}function vT(o){const e=[],i=[],r=[];let l=o;const u=o-xs+1+P_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-xs?m=P_[h-o+xs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),v=-p,x=1+p,S=[v,v,x,v,x,x,v,v,x,x,v,x],M=6,A=6,R=3,y=2,_=1,B=new Float32Array(R*A*M),N=new Float32Array(y*A*M),U=new Float32Array(_*A*M);for(let G=0;G<M;G++){const z=G%3*2/3-1,K=G>2?0:-1,w=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];B.set(w,R*A*G),N.set(S,y*A*G);const C=[G,G,G,G,G,G];U.set(C,_*A*G)}const Q=new Er;Q.setAttribute("position",new Di(B,R)),Q.setAttribute("uv",new Di(N,y)),Q.setAttribute("faceIndex",new Di(U,_)),e.push(Q),l>xs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function F_(o,e,i){const r=new Mr(o,e,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function xT(o,e,i){const r=new Float32Array(_r),l=new ot(0,1,0);return new Ha({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function H_(){return new Ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function G_(){return new Ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function _d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ST(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ch||m===wh,v=m===Ts||m===bs;if(p||v){let x=e.get(d);const S=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new I_(o)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new I_(o)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",u),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&vs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function MT(o,e,i,r){const l={},u=new WeakMap;function h(x){const S=x.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",h),delete l[S.id];const M=u.get(S);M&&(e.remove(M),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(x,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function m(x){const S=x.attributes;for(const M in S)e.update(S[M],o.ARRAY_BUFFER)}function p(x){const S=[],M=x.index,A=x.attributes.position;let R=0;if(M!==null){const B=M.array;R=M.version;for(let N=0,U=B.length;N<U;N+=3){const Q=B[N+0],G=B[N+1],z=B[N+2];S.push(Q,G,G,z,z,Q)}}else if(A!==void 0){const B=A.array;R=A.version;for(let N=0,U=B.length/3-1;N<U;N+=3){const Q=N+0,G=N+1,z=N+2;S.push(Q,G,G,z,z,Q)}}else return;const y=new(x0(S)?b0:T0)(S,1);y.version=R;const _=u.get(x);_&&e.remove(_),u.set(x,y)}function v(x){const S=u.get(x);if(S){const M=x.index;M!==null&&S.version<M.version&&p(x)}else p(x);return u.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function ET(o,e,i){let r;function l(S){r=S}let u,h;function d(S){u=S.type,h=S.bytesPerElement}function m(S,M){o.drawElements(r,M,u,S*h),i.update(M,r,1)}function p(S,M,A){A!==0&&(o.drawElementsInstanced(r,M,u,S*h,A),i.update(M,r,A))}function v(S,M,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,S,0,A);let y=0;for(let _=0;_<A;_++)y+=M[_];i.update(y,r,1)}function x(S,M,A,R){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,S,0,R,0,A);let _=0;for(let B=0;B<A;B++)_+=M[B]*R[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function TT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function bT(o,e,i){const r=new WeakMap,l=new tn;function u(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let S=r.get(d);if(S===void 0||S.count!==x){let C=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const A=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;A===!0&&(U=1),R===!0&&(U=2),y===!0&&(U=3);let Q=d.attributes.position.count*U,G=1;Q>e.maxTextureSize&&(G=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const z=new Float32Array(Q*G*4*x),K=new y0(z,Q,G,x);K.type=na,K.needsUpdate=!0;const w=U*4;for(let H=0;H<x;H++){const ct=_[H],st=B[H],gt=N[H],_t=Q*G*4*H;for(let O=0;O<ct.count;O++){const Z=O*w;A===!0&&(l.fromBufferAttribute(ct,O),z[_t+Z+0]=l.x,z[_t+Z+1]=l.y,z[_t+Z+2]=l.z,z[_t+Z+3]=0),R===!0&&(l.fromBufferAttribute(st,O),z[_t+Z+4]=l.x,z[_t+Z+5]=l.y,z[_t+Z+6]=l.z,z[_t+Z+7]=0),y===!0&&(l.fromBufferAttribute(gt,O),z[_t+Z+8]=l.x,z[_t+Z+9]=l.y,z[_t+Z+10]=l.z,z[_t+Z+11]=gt.itemSize===4?l.w:1)}}S={count:x,texture:K,size:new He(Q,G)},r.set(d,S),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const R=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function AT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,x=e.get(m,v);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const L0=new Nn,V_=new D0(1,1),N0=new y0,O0=new ey,P0=new C0,X_=[],k_=[],q_=new Float32Array(16),W_=new Float32Array(9),Y_=new Float32Array(4);function Us(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=X_[l];if(u===void 0&&(u=new Float32Array(l),X_[l]=u),e!==0){r.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(u,d)}return u}function hn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function dn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Cc(o,e){let i=k_[e];i===void 0&&(i=new Int32Array(e),k_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function RT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2fv(this.addr,e),dn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(hn(i,e))return;o.uniform3fv(this.addr,e),dn(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4fv(this.addr,e),dn(i,e)}}function UT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;Y_.set(r),o.uniformMatrix2fv(this.addr,!1,Y_),dn(i,r)}}function LT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;W_.set(r),o.uniformMatrix3fv(this.addr,!1,W_),dn(i,r)}}function NT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(hn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),dn(i,e)}else{if(hn(i,r))return;q_.set(r),o.uniformMatrix4fv(this.addr,!1,q_),dn(i,r)}}function OT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2iv(this.addr,e),dn(i,e)}}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3iv(this.addr,e),dn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4iv(this.addr,e),dn(i,e)}}function IT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(hn(i,e))return;o.uniform2uiv(this.addr,e),dn(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(hn(i,e))return;o.uniform3uiv(this.addr,e),dn(i,e)}}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(hn(i,e))return;o.uniform4uiv(this.addr,e),dn(i,e)}}function VT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(V_.compareFunction=v0,u=V_):u=L0,i.setTexture2D(e||u,l)}function XT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||O0,l)}function kT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||P0,l)}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||N0,l)}function WT(o){switch(o){case 5126:return RT;case 35664:return CT;case 35665:return wT;case 35666:return DT;case 35674:return UT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return OT;case 35667:case 35671:return PT;case 35668:case 35672:return zT;case 35669:case 35673:return BT;case 5125:return IT;case 36294:return FT;case 36295:return HT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return qT}}function YT(o,e){o.uniform1fv(this.addr,e)}function jT(o,e){const i=Us(e,this.size,2);o.uniform2fv(this.addr,i)}function ZT(o,e){const i=Us(e,this.size,3);o.uniform3fv(this.addr,i)}function KT(o,e){const i=Us(e,this.size,4);o.uniform4fv(this.addr,i)}function QT(o,e){const i=Us(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function JT(o,e){const i=Us(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $T(o,e){const i=Us(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function t1(o,e){o.uniform1iv(this.addr,e)}function e1(o,e){o.uniform2iv(this.addr,e)}function n1(o,e){o.uniform3iv(this.addr,e)}function i1(o,e){o.uniform4iv(this.addr,e)}function a1(o,e){o.uniform1uiv(this.addr,e)}function r1(o,e){o.uniform2uiv(this.addr,e)}function s1(o,e){o.uniform3uiv(this.addr,e)}function o1(o,e){o.uniform4uiv(this.addr,e)}function l1(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||L0,u[h])}function c1(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||O0,u[h])}function u1(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||P0,u[h])}function f1(o,e,i){const r=this.cache,l=e.length,u=Cc(i,l);hn(r,u)||(o.uniform1iv(this.addr,u),dn(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||N0,u[h])}function h1(o){switch(o){case 5126:return YT;case 35664:return jT;case 35665:return ZT;case 35666:return KT;case 35674:return QT;case 35675:return JT;case 35676:return $T;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return a1;case 36294:return r1;case 36295:return s1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}class d1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=WT(i.type)}}class p1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=h1(i.type)}}class m1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function j_(o,e){o.seq.push(e),o.map[e.id]=e}function g1(o,e,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const u=gh.exec(r),h=gh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){j_(i,p===void 0?new d1(d,o,e):new p1(d,o,e));break}else{let x=i.map[d];x===void 0&&(x=new m1(d),j_(i,x)),i=x}}}class Ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);g1(u,h,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Z_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const _1=37297;let v1=0;function x1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const K_=new oe;function S1(o){Ae._getMatrix(K_,Ae.workingColorSpace,o);const e=`mat3( ${K_.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Tc:return[e,"LinearTransferOETF"];case ze:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Q_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+x1(o.getShaderSource(e),h)}else return l}function y1(o,e){const i=S1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function M1(o,e){let i;switch(e){case AS:i="Linear";break;case RS:i="Reinhard";break;case CS:i="Cineon";break;case wS:i="ACESFilmic";break;case US:i="AgX";break;case LS:i="Neutral";break;case DS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new ot;function E1(){Ae.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),e=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function b1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function A1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Lo(o){return o!==""}function J_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function rd(o){return o.replace(R1,w1)}const C1=new Map;function w1(o,e){let i=le[e];if(i===void 0){const r=C1.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rd(i)}const D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(o){return o.replace(D1,U1)}function U1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function e0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===r0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===rS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ea&&(e="SHADOWMAP_TYPE_VSM"),e}function N1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ts:case bs:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function P1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case s0:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case bS:e="ENVMAP_BLENDING_ADD";break}return e}function z1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function B1(o,e,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=L1(i),p=N1(i),v=O1(i),x=P1(i),S=z1(i),M=T1(i),A=b1(u),R=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(y=[e0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[e0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+x:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ia?"#define TONE_MAPPING":"",i.toneMapping!==Ia?le.tonemapping_pars_fragment:"",i.toneMapping!==Ia?M1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,y1("linearToOutputTexel",i.outputColorSpace),E1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),h=rd(h),h=J_(h,i),h=$_(h,i),d=rd(d),d=J_(d,i),d=$_(d,i),h=t0(h),d=t0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===m_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===m_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=B+y+h,U=B+_+d,Q=Z_(l,l.VERTEX_SHADER,N),G=Z_(l,l.FRAGMENT_SHADER,U);l.attachShader(R,Q),l.attachShader(R,G),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(H){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(R).trim(),st=l.getShaderInfoLog(Q).trim(),gt=l.getShaderInfoLog(G).trim();let _t=!0,O=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(_t=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,Q,G);else{const Z=Q_(l,Q,"vertex"),j=Q_(l,G,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ct+`
`+Z+`
`+j)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(st===""||gt==="")&&(O=!1);O&&(H.diagnostics={runnable:_t,programLog:ct,vertexShader:{log:st,prefix:y},fragmentShader:{log:gt,prefix:_}})}l.deleteShader(Q),l.deleteShader(G),K=new Ec(l,R),w=A1(l,R)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,_1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=v1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Q,this.fragmentShader=G,this}let I1=0;class F1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new H1(e),i.set(e,r)),r}}class H1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function G1(o,e,i,r,l,u,h){const d=new M0,m=new F1,p=new Set,v=[],x=l.logarithmicDepthBuffer,S=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,H,ct,st){const gt=ct.fog,_t=st.geometry,O=w.isMeshStandardMaterial?ct.environment:null,Z=(w.isMeshStandardMaterial?i:e).get(w.envMap||O),j=Z&&Z.mapping===Ac?Z.image.height:null,Mt=A[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const bt=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,L=bt!==void 0?bt.length:0;let nt=0;_t.morphAttributes.position!==void 0&&(nt=1),_t.morphAttributes.normal!==void 0&&(nt=2),_t.morphAttributes.color!==void 0&&(nt=3);let yt,Y,ut,Tt;if(Mt){const ye=Ai[Mt];yt=ye.vertexShader,Y=ye.fragmentShader}else yt=w.vertexShader,Y=w.fragmentShader,m.update(w),ut=m.getVertexShaderID(w),Tt=m.getFragmentShaderID(w);const St=o.getRenderTarget(),Gt=o.state.buffers.depth.getReversed(),Ft=st.isInstancedMesh===!0,ne=st.isBatchedMesh===!0,Ue=!!w.map,ue=!!w.matcap,ke=!!Z,I=!!w.aoMap,En=!!w.lightMap,ce=!!w.bumpMap,pe=!!w.normalMap,Wt=!!w.displacementMap,Ce=!!w.emissiveMap,qt=!!w.metalnessMap,D=!!w.roughnessMap,T=w.anisotropy>0,et=w.clearcoat>0,ht=w.dispersion>0,Et=w.iridescence>0,pt=w.sheen>0,Xt=w.transmission>0,wt=T&&!!w.anisotropyMap,zt=et&&!!w.clearcoatMap,me=et&&!!w.clearcoatNormalMap,At=et&&!!w.clearcoatRoughnessMap,Bt=Et&&!!w.iridescenceMap,Yt=Et&&!!w.iridescenceThicknessMap,kt=pt&&!!w.sheenColorMap,Nt=pt&&!!w.sheenRoughnessMap,Jt=!!w.specularMap,ie=!!w.specularColorMap,Le=!!w.specularIntensityMap,V=Xt&&!!w.transmissionMap,Rt=Xt&&!!w.thicknessMap,lt=!!w.gradientMap,vt=!!w.alphaMap,Ct=w.alphaTest>0,Dt=!!w.alphaHash,$t=!!w.extensions;let qe=Ia;w.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(qe=o.toneMapping);const cn={shaderID:Mt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Y,defines:w.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:ne,batchingColor:ne&&st._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&st.instanceColor!==null,instancingMorph:Ft&&st.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:St===null?o.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Cs,alphaToCoverage:!!w.alphaToCoverage,map:Ue,matcap:ue,envMap:ke,envMapMode:ke&&Z.mapping,envMapCubeUVHeight:j,aoMap:I,lightMap:En,bumpMap:ce,normalMap:pe,displacementMap:S&&Wt,emissiveMap:Ce,normalMapObjectSpace:pe&&w.normalMapType===BS,normalMapTangentSpace:pe&&w.normalMapType===zS,metalnessMap:qt,roughnessMap:D,anisotropy:T,anisotropyMap:wt,clearcoat:et,clearcoatMap:zt,clearcoatNormalMap:me,clearcoatRoughnessMap:At,dispersion:ht,iridescence:Et,iridescenceMap:Bt,iridescenceThicknessMap:Yt,sheen:pt,sheenColorMap:kt,sheenRoughnessMap:Nt,specularMap:Jt,specularColorMap:ie,specularIntensityMap:Le,transmission:Xt,transmissionMap:V,thicknessMap:Rt,gradientMap:lt,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:vt,alphaTest:Ct,alphaHash:Dt,combine:w.combine,mapUv:Ue&&R(w.map.channel),aoMapUv:I&&R(w.aoMap.channel),lightMapUv:En&&R(w.lightMap.channel),bumpMapUv:ce&&R(w.bumpMap.channel),normalMapUv:pe&&R(w.normalMap.channel),displacementMapUv:Wt&&R(w.displacementMap.channel),emissiveMapUv:Ce&&R(w.emissiveMap.channel),metalnessMapUv:qt&&R(w.metalnessMap.channel),roughnessMapUv:D&&R(w.roughnessMap.channel),anisotropyMapUv:wt&&R(w.anisotropyMap.channel),clearcoatMapUv:zt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:me&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&R(w.sheenRoughnessMap.channel),specularMapUv:Jt&&R(w.specularMap.channel),specularColorMapUv:ie&&R(w.specularColorMap.channel),specularIntensityMapUv:Le&&R(w.specularIntensityMap.channel),transmissionMapUv:V&&R(w.transmissionMap.channel),thicknessMapUv:Rt&&R(w.thicknessMap.channel),alphaMapUv:vt&&R(w.alphaMap.channel),vertexTangents:!!_t.attributes.tangent&&(pe||T),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!_t.attributes.uv&&(Ue||vt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Gt,skinning:st.isSkinnedMesh===!0,morphTargets:_t.morphAttributes.position!==void 0,morphNormals:_t.morphAttributes.normal!==void 0,morphColors:_t.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ue&&w.map.isVideoTexture===!0&&Ae.getTransfer(w.map.colorSpace)===ze,decodeVideoTextureEmissive:Ce&&w.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(w.emissiveMap.colorSpace)===ze,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ri,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$t&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&w.extensions.multiDraw===!0||ne)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return cn.vertexUv1s=p.has(1),cn.vertexUv2s=p.has(2),cn.vertexUv3s=p.has(3),p.clear(),cn}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(B(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function B(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function U(w){const C=A[w.type];let H;if(C){const ct=Ai[C];H=py.clone(ct.uniforms)}else H=w.uniforms;return H}function Q(w,C){let H;for(let ct=0,st=v.length;ct<st;ct++){const gt=v[ct];if(gt.cacheKey===C){H=gt,++H.usedTimes;break}}return H===void 0&&(H=new B1(o,C,w,u),v.push(H)),H}function G(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function z(w){m.remove(w)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:Q,releaseProgram:G,releaseShaderCache:z,programs:v,dispose:K}}function V1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function X1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function n0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function i0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function h(x,S,M,A,R,y){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:S,material:M,groupOrder:A,renderOrder:x.renderOrder,z:R,group:y},o[e]=_):(_.id=x.id,_.object=x,_.geometry=S,_.material=M,_.groupOrder=A,_.renderOrder=x.renderOrder,_.z=R,_.group=y),e++,_}function d(x,S,M,A,R,y){const _=h(x,S,M,A,R,y);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(x,S,M,A,R,y){const _=h(x,S,M,A,R,y);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,S){i.length>1&&i.sort(x||X1),r.length>1&&r.sort(S||n0),l.length>1&&l.sort(S||n0)}function v(){for(let x=e,S=o.length;x<S;x++){const M=o[x];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function k1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let h;return u===void 0?(h=new i0,o.set(r,[h])):l>=u.length?(h=new i0,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function q1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ot,color:new Be};break;case"SpotLight":i={position:new ot,direction:new ot,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ot,color:new Be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ot,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":i={color:new Be,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return o[e.id]=i,i}}}function W1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Y1=0;function j1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Z1(o){const e=new q1,i=W1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ot);const l=new ot,u=new ln,h=new ln;function d(p){let v=0,x=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,A=0,R=0,y=0,_=0,B=0,N=0,U=0,Q=0,G=0,z=0;p.sort(j1);for(let w=0,C=p.length;w<C;w++){const H=p[w],ct=H.color,st=H.intensity,gt=H.distance,_t=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=ct.r*st,x+=ct.g*st,S+=ct.b*st;else if(H.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(H.sh.coefficients[O],st);z++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.directionalShadow[M]=j,r.directionalShadowMap[M]=_t,r.directionalShadowMatrix[M]=H.shadow.matrix,B++}r.directional[M]=O,M++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(ct).multiplyScalar(st),O.distance=gt,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,r.spot[R]=O;const Z=H.shadow;if(H.map&&(r.spotLightMap[Q]=H.map,Q++,Z.updateMatrices(H),H.castShadow&&G++),r.spotLightMatrix[R]=Z.matrix,H.castShadow){const j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=_t,U++}R++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(ct).multiplyScalar(st),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=O,y++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const Z=H.shadow,j=i.get(H);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,r.pointShadow[A]=j,r.pointShadowMap[A]=_t,r.pointShadowMatrix[A]=H.shadow.matrix,N++}r.point[A]=O,A++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(st),O.groundColor.copy(H.groundColor).multiplyScalar(st),r.hemi[_]=O,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==M||K.pointLength!==A||K.spotLength!==R||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==B||K.numPointShadows!==N||K.numSpotShadows!==U||K.numSpotMaps!==Q||K.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=U+Q-G,r.spotLightMap.length=Q,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=z,K.directionalLength=M,K.pointLength=A,K.spotLength=R,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=B,K.numPointShadows=N,K.numSpotShadows=U,K.numSpotMaps=Q,K.numLightProbes=z,r.version=Y1++)}function m(p,v){let x=0,S=0,M=0,A=0,R=0;const y=v.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const N=p[_];if(N.isDirectionalLight){const U=r.directional[x];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),x++}else if(N.isSpotLight){const U=r.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const U=r.rectArea[A];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),h.identity(),u.copy(N.matrixWorld),u.premultiply(y),h.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),A++}else if(N.isPointLight){const U=r.point[S];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const U=r.hemi[R];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:r}}function a0(o){const e=new Z1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function h(v){r.push(v)}function d(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function K1(o){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new a0(o),e.set(l,[d])):u>=h.length?(d=new a0(o),h.push(d)):d=h[u],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $1(o,e,i){let r=new w0;const l=new He,u=new He,h=new tn,d=new My({depthPacking:PS}),m=new Ey,p={},v=i.maxTextureSize,x={[Fa]:Gn,[Gn]:Fa,[Ri]:Ri},S=new Ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Q1,fragmentShader:J1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const A=new Er;A.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new wi(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=r0;let _=this.type;this.render=function(G,z,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||G.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(Ba),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const st=_!==ea&&this.type===ea,gt=_===ea&&this.type!==ea;for(let _t=0,O=G.length;_t<O;_t++){const Z=G[_t],j=Z.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Mt=j.getFrameExtents();if(l.multiply(Mt),u.copy(j.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/Mt.x),l.x=u.x*Mt.x,j.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/Mt.y),l.y=u.y*Mt.y,j.mapSize.y=u.y)),j.map===null||st===!0||gt===!0){const L=this.type!==ea?{minFilter:xi,magFilter:xi}:{};j.map!==null&&j.map.dispose(),j.map=new Mr(l.x,l.y,L),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const bt=j.getViewportCount();for(let L=0;L<bt;L++){const nt=j.getViewport(L);h.set(u.x*nt.x,u.y*nt.y,u.x*nt.z,u.y*nt.w),ct.viewport(h),j.updateMatrices(Z,L),r=j.getFrustum(),U(z,K,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===ea&&B(j,K),j.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,H)};function B(G,z){const K=e.update(R);S.defines.VSM_SAMPLES!==G.blurSamples&&(S.defines.VSM_SAMPLES=G.blurSamples,M.defines.VSM_SAMPLES=G.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Mr(l.x,l.y)),S.uniforms.shadow_pass.value=G.map.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(z,null,K,S,R,null),M.uniforms.shadow_pass.value=G.mapPass.texture,M.uniforms.resolution.value=G.mapSize,M.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(z,null,K,M,R,null)}function N(G,z,K,w){let C=null;const H=K.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(H!==void 0)C=H;else if(C=K.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ct=C.uuid,st=z.uuid;let gt=p[ct];gt===void 0&&(gt={},p[ct]=gt);let _t=gt[st];_t===void 0&&(_t=C.clone(),gt[st]=_t,z.addEventListener("dispose",Q)),C=_t}if(C.visible=z.visible,C.wireframe=z.wireframe,w===ea?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:x[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ct=o.properties.get(C);ct.light=K}return C}function U(G,z,K,w,C){if(G.visible===!1)return;if(G.layers.test(z.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===ea)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,G.matrixWorld);const st=e.update(G),gt=G.material;if(Array.isArray(gt)){const _t=st.groups;for(let O=0,Z=_t.length;O<Z;O++){const j=_t[O],Mt=gt[j.materialIndex];if(Mt&&Mt.visible){const bt=N(G,Mt,w,C);G.onBeforeShadow(o,G,z,K,st,bt,j),o.renderBufferDirect(K,null,st,bt,G,j),G.onAfterShadow(o,G,z,K,st,bt,j)}}}else if(gt.visible){const _t=N(G,gt,w,C);G.onBeforeShadow(o,G,z,K,st,_t,null),o.renderBufferDirect(K,null,st,_t,G,null),G.onAfterShadow(o,G,z,K,st,_t,null)}}const ct=G.children;for(let st=0,gt=ct.length;st<gt;st++)U(ct[st],z,K,w,C)}function Q(G){G.target.removeEventListener("dispose",Q);for(const K in p){const w=p[K],C=G.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const tb={[yh]:Mh,[Eh]:Ah,[Th]:Rh,[Es]:bh,[Mh]:yh,[Ah]:Eh,[Rh]:Th,[bh]:Es};function eb(o,e){function i(){let V=!1;const Rt=new tn;let lt=null;const vt=new tn(0,0,0,0);return{setMask:function(Ct){lt!==Ct&&!V&&(o.colorMask(Ct,Ct,Ct,Ct),lt=Ct)},setLocked:function(Ct){V=Ct},setClear:function(Ct,Dt,$t,qe,cn){cn===!0&&(Ct*=qe,Dt*=qe,$t*=qe),Rt.set(Ct,Dt,$t,qe),vt.equals(Rt)===!1&&(o.clearColor(Ct,Dt,$t,qe),vt.copy(Rt))},reset:function(){V=!1,lt=null,vt.set(-1,0,0,0)}}}function r(){let V=!1,Rt=!1,lt=null,vt=null,Ct=null;return{setReversed:function(Dt){if(Rt!==Dt){const $t=e.get("EXT_clip_control");Rt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const qe=Ct;Ct=null,this.setClear(qe)}Rt=Dt},getReversed:function(){return Rt},setTest:function(Dt){Dt?St(o.DEPTH_TEST):Gt(o.DEPTH_TEST)},setMask:function(Dt){lt!==Dt&&!V&&(o.depthMask(Dt),lt=Dt)},setFunc:function(Dt){if(Rt&&(Dt=tb[Dt]),vt!==Dt){switch(Dt){case yh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case Eh:o.depthFunc(o.LESS);break;case Es:o.depthFunc(o.LEQUAL);break;case Th:o.depthFunc(o.EQUAL);break;case bh:o.depthFunc(o.GEQUAL);break;case Ah:o.depthFunc(o.GREATER);break;case Rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}vt=Dt}},setLocked:function(Dt){V=Dt},setClear:function(Dt){Ct!==Dt&&(Rt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){V=!1,lt=null,vt=null,Ct=null,Rt=!1}}}function l(){let V=!1,Rt=null,lt=null,vt=null,Ct=null,Dt=null,$t=null,qe=null,cn=null;return{setTest:function(ye){V||(ye?St(o.STENCIL_TEST):Gt(o.STENCIL_TEST))},setMask:function(ye){Rt!==ye&&!V&&(o.stencilMask(ye),Rt=ye)},setFunc:function(ye,_n,ci){(lt!==ye||vt!==_n||Ct!==ci)&&(o.stencilFunc(ye,_n,ci),lt=ye,vt=_n,Ct=ci)},setOp:function(ye,_n,ci){(Dt!==ye||$t!==_n||qe!==ci)&&(o.stencilOp(ye,_n,ci),Dt=ye,$t=_n,qe=ci)},setLocked:function(ye){V=ye},setClear:function(ye){cn!==ye&&(o.clearStencil(ye),cn=ye)},reset:function(){V=!1,Rt=null,lt=null,vt=null,Ct=null,Dt=null,$t=null,qe=null,cn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let v={},x={},S=new WeakMap,M=[],A=null,R=!1,y=null,_=null,B=null,N=null,U=null,Q=null,G=null,z=new Be(0,0,0),K=0,w=!1,C=null,H=null,ct=null,st=null,gt=null;const _t=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),O=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),O=Z>=2);let Mt=null,bt={};const L=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),yt=new tn().fromArray(L),Y=new tn().fromArray(nt);function ut(V,Rt,lt,vt){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(V,Dt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<lt;$t++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,vt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const Tt={};Tt[o.TEXTURE_2D]=ut(o.TEXTURE_2D,o.TEXTURE_2D,1),Tt[o.TEXTURE_CUBE_MAP]=ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[o.TEXTURE_2D_ARRAY]=ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Tt[o.TEXTURE_3D]=ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),St(o.DEPTH_TEST),h.setFunc(Es),ce(!1),pe(c_),St(o.CULL_FACE),I(Ba);function St(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function Gt(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function Ft(V,Rt){return x[V]!==Rt?(o.bindFramebuffer(V,Rt),x[V]=Rt,V===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Rt),V===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ne(V,Rt){let lt=M,vt=!1;if(V){lt=S.get(Rt),lt===void 0&&(lt=[],S.set(Rt,lt));const Ct=V.textures;if(lt.length!==Ct.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)lt[Dt]=o.COLOR_ATTACHMENT0+Dt;lt.length=Ct.length,vt=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,vt=!0);vt&&o.drawBuffers(lt)}function Ue(V){return A!==V?(o.useProgram(V),A=V,!0):!1}const ue={[gr]:o.FUNC_ADD,[oS]:o.FUNC_SUBTRACT,[lS]:o.FUNC_REVERSE_SUBTRACT};ue[cS]=o.MIN,ue[uS]=o.MAX;const ke={[fS]:o.ZERO,[hS]:o.ONE,[dS]:o.SRC_COLOR,[xh]:o.SRC_ALPHA,[xS]:o.SRC_ALPHA_SATURATE,[_S]:o.DST_COLOR,[mS]:o.DST_ALPHA,[pS]:o.ONE_MINUS_SRC_COLOR,[Sh]:o.ONE_MINUS_SRC_ALPHA,[vS]:o.ONE_MINUS_DST_COLOR,[gS]:o.ONE_MINUS_DST_ALPHA,[SS]:o.CONSTANT_COLOR,[yS]:o.ONE_MINUS_CONSTANT_COLOR,[MS]:o.CONSTANT_ALPHA,[ES]:o.ONE_MINUS_CONSTANT_ALPHA};function I(V,Rt,lt,vt,Ct,Dt,$t,qe,cn,ye){if(V===Ba){R===!0&&(Gt(o.BLEND),R=!1);return}if(R===!1&&(St(o.BLEND),R=!0),V!==sS){if(V!==y||ye!==w){if((_!==gr||U!==gr)&&(o.blendEquation(o.FUNC_ADD),_=gr,U=gr),ye)switch(V){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case u_:o.blendFunc(o.ONE,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case u_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case f_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case h_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}B=null,N=null,Q=null,G=null,z.set(0,0,0),K=0,y=V,w=ye}return}Ct=Ct||Rt,Dt=Dt||lt,$t=$t||vt,(Rt!==_||Ct!==U)&&(o.blendEquationSeparate(ue[Rt],ue[Ct]),_=Rt,U=Ct),(lt!==B||vt!==N||Dt!==Q||$t!==G)&&(o.blendFuncSeparate(ke[lt],ke[vt],ke[Dt],ke[$t]),B=lt,N=vt,Q=Dt,G=$t),(qe.equals(z)===!1||cn!==K)&&(o.blendColor(qe.r,qe.g,qe.b,cn),z.copy(qe),K=cn),y=V,w=!1}function En(V,Rt){V.side===Ri?Gt(o.CULL_FACE):St(o.CULL_FACE);let lt=V.side===Gn;Rt&&(lt=!lt),ce(lt),V.blending===Ss&&V.transparent===!1?I(Ba):I(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const vt=V.stencilWrite;d.setTest(vt),vt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ce(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?St(o.SAMPLE_ALPHA_TO_COVERAGE):Gt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function pe(V){V!==iS?(St(o.CULL_FACE),V!==H&&(V===c_?o.cullFace(o.BACK):V===aS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Gt(o.CULL_FACE),H=V}function Wt(V){V!==ct&&(O&&o.lineWidth(V),ct=V)}function Ce(V,Rt,lt){V?(St(o.POLYGON_OFFSET_FILL),(st!==Rt||gt!==lt)&&(o.polygonOffset(Rt,lt),st=Rt,gt=lt)):Gt(o.POLYGON_OFFSET_FILL)}function qt(V){V?St(o.SCISSOR_TEST):Gt(o.SCISSOR_TEST)}function D(V){V===void 0&&(V=o.TEXTURE0+_t-1),Mt!==V&&(o.activeTexture(V),Mt=V)}function T(V,Rt,lt){lt===void 0&&(Mt===null?lt=o.TEXTURE0+_t-1:lt=Mt);let vt=bt[lt];vt===void 0&&(vt={type:void 0,texture:void 0},bt[lt]=vt),(vt.type!==V||vt.texture!==Rt)&&(Mt!==lt&&(o.activeTexture(lt),Mt=lt),o.bindTexture(V,Rt||Tt[V]),vt.type=V,vt.texture=Rt)}function et(){const V=bt[Mt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ht(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(V){yt.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),yt.copy(V))}function Nt(V){Y.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Y.copy(V))}function Jt(V,Rt){let lt=p.get(Rt);lt===void 0&&(lt=new WeakMap,p.set(Rt,lt));let vt=lt.get(V);vt===void 0&&(vt=o.getUniformBlockIndex(Rt,V.name),lt.set(V,vt))}function ie(V,Rt){const vt=p.get(Rt).get(V);m.get(Rt)!==vt&&(o.uniformBlockBinding(Rt,vt,V.__bindingPointIndex),m.set(Rt,vt))}function Le(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},Mt=null,bt={},x={},S=new WeakMap,M=[],A=null,R=!1,y=null,_=null,B=null,N=null,U=null,Q=null,G=null,z=new Be(0,0,0),K=0,w=!1,C=null,H=null,ct=null,st=null,gt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:St,disable:Gt,bindFramebuffer:Ft,drawBuffers:ne,useProgram:Ue,setBlending:I,setMaterial:En,setFlipSided:ce,setCullFace:pe,setLineWidth:Wt,setPolygonOffset:Ce,setScissorTest:qt,activeTexture:D,bindTexture:T,unbindTexture:et,compressedTexImage2D:ht,compressedTexImage3D:Et,texImage2D:Bt,texImage3D:Yt,updateUBOMapping:Jt,uniformBlockBinding:ie,texStorage2D:me,texStorage3D:At,texSubImage2D:pt,texSubImage3D:Xt,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:kt,viewport:Nt,reset:Le}}function nb(o,e,i,r,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new He,v=new WeakMap;let x;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,T){return M?new OffscreenCanvas(D,T):Oo("canvas")}function R(D,T,et){let ht=1;const Et=qt(D);if((Et.width>et||Et.height>et)&&(ht=et/Math.max(Et.width,Et.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pt=Math.floor(ht*Et.width),Xt=Math.floor(ht*Et.height);x===void 0&&(x=A(pt,Xt));const wt=T?A(pt,Xt):x;return wt.width=pt,wt.height=Xt,wt.getContext("2d").drawImage(D,0,0,pt,Xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+pt+"x"+Xt+")."),wt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){o.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(D,T,et,ht,Et=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pt=T;if(T===o.RED&&(et===o.FLOAT&&(pt=o.R32F),et===o.HALF_FLOAT&&(pt=o.R16F),et===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.R8UI),et===o.UNSIGNED_SHORT&&(pt=o.R16UI),et===o.UNSIGNED_INT&&(pt=o.R32UI),et===o.BYTE&&(pt=o.R8I),et===o.SHORT&&(pt=o.R16I),et===o.INT&&(pt=o.R32I)),T===o.RG&&(et===o.FLOAT&&(pt=o.RG32F),et===o.HALF_FLOAT&&(pt=o.RG16F),et===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RG8UI),et===o.UNSIGNED_SHORT&&(pt=o.RG16UI),et===o.UNSIGNED_INT&&(pt=o.RG32UI),et===o.BYTE&&(pt=o.RG8I),et===o.SHORT&&(pt=o.RG16I),et===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),et===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),et===o.UNSIGNED_INT&&(pt=o.RGB32UI),et===o.BYTE&&(pt=o.RGB8I),et===o.SHORT&&(pt=o.RGB16I),et===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),et===o.UNSIGNED_INT&&(pt=o.RGBA32UI),et===o.BYTE&&(pt=o.RGBA8I),et===o.SHORT&&(pt=o.RGBA16I),et===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),T===o.RGBA){const Xt=Et?Tc:Ae.getTransfer(ht);et===o.FLOAT&&(pt=o.RGBA32F),et===o.HALF_FLOAT&&(pt=o.RGBA16F),et===o.UNSIGNED_BYTE&&(pt=Xt===ze?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function U(D,T){let et;return D?T===null||T===yr||T===As?et=o.DEPTH24_STENCIL8:T===na?et=o.DEPTH32F_STENCIL8:T===No&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===yr||T===As?et=o.DEPTH_COMPONENT24:T===na?et=o.DEPTH_COMPONENT32F:T===No&&(et=o.DEPTH_COMPONENT16),et}function Q(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==xi&&D.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function G(D){const T=D.target;T.removeEventListener("dispose",G),K(T),T.isVideoTexture&&v.delete(T)}function z(D){const T=D.target;T.removeEventListener("dispose",z),C(T)}function K(D){const T=r.get(D);if(T.__webglInit===void 0)return;const et=D.source,ht=S.get(et);if(ht){const Et=ht[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(D),Object.keys(ht).length===0&&S.delete(et)}r.remove(D)}function w(D){const T=r.get(D);o.deleteTexture(T.__webglTexture);const et=D.source,ht=S.get(et);delete ht[T.__cacheKey],h.memory.textures--}function C(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let Et=0;Et<T.__webglFramebuffer[ht].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[ht][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)o.deleteFramebuffer(T.__webglFramebuffer[ht]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const et=D.textures;for(let ht=0,Et=et.length;ht<Et;ht++){const pt=r.get(et[ht]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(et[ht])}r.remove(D)}let H=0;function ct(){H=0}function st(){const D=H;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),H+=1,D}function gt(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function _t(D,T){const et=r.get(D);if(D.isVideoTexture&&Wt(D),D.isRenderTargetTexture===!1&&D.version>0&&et.__version!==D.version){const ht=D.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(et,D,T);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+T)}function O(D,T){const et=r.get(D);if(D.version>0&&et.__version!==D.version){Y(et,D,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+T)}function Z(D,T){const et=r.get(D);if(D.version>0&&et.__version!==D.version){Y(et,D,T);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+T)}function j(D,T){const et=r.get(D);if(D.version>0&&et.__version!==D.version){ut(et,D,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+T)}const Mt={[Dh]:o.REPEAT,[vr]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},bt={[xi]:o.NEAREST,[NS]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[Vf]:o.LINEAR_MIPMAP_NEAREST,[xr]:o.LINEAR_MIPMAP_LINEAR},L={[IS]:o.NEVER,[kS]:o.ALWAYS,[FS]:o.LESS,[v0]:o.LEQUAL,[HS]:o.EQUAL,[XS]:o.GEQUAL,[GS]:o.GREATER,[VS]:o.NOTEQUAL};function nt(D,T){if(T.type===na&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===Vf||T.magFilter===Ql||T.magFilter===xr||T.minFilter===Ci||T.minFilter===Vf||T.minFilter===Ql||T.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Mt[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Mt[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Mt[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,bt[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,bt[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,L[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===xi||T.minFilter!==Ql&&T.minFilter!==xr||T.type===na&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const et=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function yt(D,T){let et=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",G));const ht=T.source;let Et=S.get(ht);Et===void 0&&(Et={},S.set(ht,Et));const pt=gt(T);if(pt!==D.__cacheKey){Et[pt]===void 0&&(Et[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Et[pt].usedTimes++;const Xt=Et[D.__cacheKey];Xt!==void 0&&(Et[D.__cacheKey].usedTimes--,Xt.usedTimes===0&&w(T)),D.__cacheKey=pt,D.__webglTexture=Et[pt].texture}return et}function Y(D,T,et){let ht=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=o.TEXTURE_3D);const Et=yt(D,T),pt=T.source;i.bindTexture(ht,D.__webglTexture,o.TEXTURE0+et);const Xt=r.get(pt);if(pt.version!==Xt.__version||Et===!0){i.activeTexture(o.TEXTURE0+et);const wt=Ae.getPrimaries(Ae.workingColorSpace),zt=T.colorSpace===za?null:Ae.getPrimaries(T.colorSpace),me=T.colorSpace===za||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let At=R(T.image,!1,l.maxTextureSize);At=Ce(T,At);const Bt=u.convert(T.format,T.colorSpace),Yt=u.convert(T.type);let kt=N(T.internalFormat,Bt,Yt,T.colorSpace,T.isVideoTexture);nt(ht,T);let Nt;const Jt=T.mipmaps,ie=T.isVideoTexture!==!0,Le=Xt.__version===void 0||Et===!0,V=pt.dataReady,Rt=Q(T,At);if(T.isDepthTexture)kt=U(T.format===Rs,T.type),Le&&(ie?i.texStorage2D(o.TEXTURE_2D,1,kt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,kt,At.width,At.height,0,Bt,Yt,null));else if(T.isDataTexture)if(Jt.length>0){ie&&Le&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Jt[0].width,Jt[0].height);for(let lt=0,vt=Jt.length;lt<vt;lt++)Nt=Jt[lt],ie?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Yt,Nt.data):i.texImage2D(o.TEXTURE_2D,lt,kt,Nt.width,Nt.height,0,Bt,Yt,Nt.data);T.generateMipmaps=!1}else ie?(Le&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,At.width,At.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Bt,Yt,At.data)):i.texImage2D(o.TEXTURE_2D,0,kt,At.width,At.height,0,Bt,Yt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ie&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,Jt[0].width,Jt[0].height,At.depth);for(let lt=0,vt=Jt.length;lt<vt;lt++)if(Nt=Jt[lt],T.format!==vi)if(Bt!==null)if(ie){if(V)if(T.layerUpdates.size>0){const Ct=O_(Nt.width,Nt.height,T.format,T.type);for(const Dt of T.layerUpdates){const $t=Nt.data.subarray(Dt*Ct/Nt.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Dt,Nt.width,Nt.height,1,Bt,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Nt.width,Nt.height,At.depth,Bt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,kt,Nt.width,Nt.height,At.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Nt.width,Nt.height,At.depth,Bt,Yt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,kt,Nt.width,Nt.height,At.depth,0,Bt,Yt,Nt.data)}else{ie&&Le&&i.texStorage2D(o.TEXTURE_2D,Rt,kt,Jt[0].width,Jt[0].height);for(let lt=0,vt=Jt.length;lt<vt;lt++)Nt=Jt[lt],T.format!==vi?Bt!==null?ie?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,kt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Nt.width,Nt.height,Bt,Yt,Nt.data):i.texImage2D(o.TEXTURE_2D,lt,kt,Nt.width,Nt.height,0,Bt,Yt,Nt.data)}else if(T.isDataArrayTexture)if(ie){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,kt,At.width,At.height,At.depth),V)if(T.layerUpdates.size>0){const lt=O_(At.width,At.height,T.format,T.type);for(const vt of T.layerUpdates){const Ct=At.data.subarray(vt*lt/At.data.BYTES_PER_ELEMENT,(vt+1)*lt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,At.width,At.height,1,Bt,Yt,Ct)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Bt,Yt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,kt,At.width,At.height,At.depth,0,Bt,Yt,At.data);else if(T.isData3DTexture)ie?(Le&&i.texStorage3D(o.TEXTURE_3D,Rt,kt,At.width,At.height,At.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Bt,Yt,At.data)):i.texImage3D(o.TEXTURE_3D,0,kt,At.width,At.height,At.depth,0,Bt,Yt,At.data);else if(T.isFramebufferTexture){if(Le)if(ie)i.texStorage2D(o.TEXTURE_2D,Rt,kt,At.width,At.height);else{let lt=At.width,vt=At.height;for(let Ct=0;Ct<Rt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,kt,lt,vt,0,Bt,Yt,null),lt>>=1,vt>>=1}}else if(Jt.length>0){if(ie&&Le){const lt=qt(Jt[0]);i.texStorage2D(o.TEXTURE_2D,Rt,kt,lt.width,lt.height)}for(let lt=0,vt=Jt.length;lt<vt;lt++)Nt=Jt[lt],ie?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Bt,Yt,Nt):i.texImage2D(o.TEXTURE_2D,lt,kt,Bt,Yt,Nt);T.generateMipmaps=!1}else if(ie){if(Le){const lt=qt(At);i.texStorage2D(o.TEXTURE_2D,Rt,kt,lt.width,lt.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,Yt,At)}else i.texImage2D(o.TEXTURE_2D,0,kt,Bt,Yt,At);y(T)&&_(ht),Xt.__version=pt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ut(D,T,et){if(T.image.length!==6)return;const ht=yt(D,T),Et=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+et);const pt=r.get(Et);if(Et.version!==pt.__version||ht===!0){i.activeTexture(o.TEXTURE0+et);const Xt=Ae.getPrimaries(Ae.workingColorSpace),wt=T.colorSpace===za?null:Ae.getPrimaries(T.colorSpace),zt=T.colorSpace===za||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let vt=0;vt<6;vt++)!me&&!At?Bt[vt]=R(T.image[vt],!0,l.maxCubemapSize):Bt[vt]=At?T.image[vt].image:T.image[vt],Bt[vt]=Ce(T,Bt[vt]);const Yt=Bt[0],kt=u.convert(T.format,T.colorSpace),Nt=u.convert(T.type),Jt=N(T.internalFormat,kt,Nt,T.colorSpace),ie=T.isVideoTexture!==!0,Le=pt.__version===void 0||ht===!0,V=Et.dataReady;let Rt=Q(T,Yt);nt(o.TEXTURE_CUBE_MAP,T);let lt;if(me){ie&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,Yt.width,Yt.height);for(let vt=0;vt<6;vt++){lt=Bt[vt].mipmaps;for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];T.format!==vi?kt!==null?ie?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Dt.width,Dt.height,kt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Jt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,0,0,Dt.width,Dt.height,kt,Nt,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct,Jt,Dt.width,Dt.height,0,kt,Nt,Dt.data)}}}else{if(lt=T.mipmaps,ie&&Le){lt.length>0&&Rt++;const vt=qt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,Jt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(At){ie?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Bt[vt].width,Bt[vt].height,kt,Nt,Bt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Jt,Bt[vt].width,Bt[vt].height,0,kt,Nt,Bt[vt].data);for(let Ct=0;Ct<lt.length;Ct++){const $t=lt[Ct].image[vt].image;ie?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,$t.width,$t.height,kt,Nt,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Jt,$t.width,$t.height,0,kt,Nt,$t.data)}}else{ie?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,kt,Nt,Bt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Jt,kt,Nt,Bt[vt]);for(let Ct=0;Ct<lt.length;Ct++){const Dt=lt[Ct];ie?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,0,0,kt,Nt,Dt.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Ct+1,Jt,kt,Nt,Dt.image[vt])}}}y(T)&&_(o.TEXTURE_CUBE_MAP),pt.__version=Et.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Tt(D,T,et,ht,Et,pt){const Xt=u.convert(et.format,et.colorSpace),wt=u.convert(et.type),zt=N(et.internalFormat,Xt,wt,et.colorSpace),me=r.get(T),At=r.get(et);if(At.__renderTarget=T,!me.__hasExternalTextures){const Bt=Math.max(1,T.width>>pt),Yt=Math.max(1,T.height>>pt);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,pt,zt,Bt,Yt,T.depth,0,Xt,wt,null):i.texImage2D(Et,pt,zt,Bt,Yt,0,Xt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),pe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,Et,At.__webglTexture,0,ce(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,Et,At.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function St(D,T,et){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer){const ht=T.depthTexture,Et=ht&&ht.isDepthTexture?ht.type:null,pt=U(T.stencilBuffer,Et),Xt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=ce(T);pe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,pt,T.width,T.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,D)}else{const ht=T.textures;for(let Et=0;Et<ht.length;Et++){const pt=ht[Et],Xt=u.convert(pt.format,pt.colorSpace),wt=u.convert(pt.type),zt=N(pt.internalFormat,Xt,wt,pt.colorSpace),me=ce(T);et&&pe(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,zt,T.width,T.height):pe(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,zt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,zt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Gt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),_t(T.depthTexture,0);const Et=ht.__webglTexture,pt=ce(T);if(T.depthTexture.format===ys)pe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Rs)pe(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function Ft(D){const T=r.get(D),et=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const ht=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",Et)};ht.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=ht}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Gt(T.__webglFramebuffer,D)}else if(et){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=o.createRenderbuffer(),St(T.__webglDepthbuffer[ht],D,!1);else{const Et=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),St(T.__webglDepthbuffer,D,!1);else{const ht=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Et=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Et),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,Et)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ne(D,T,et){const ht=r.get(D);T!==void 0&&Tt(ht.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Ft(D)}function Ue(D){const T=D.texture,et=r.get(D),ht=r.get(T);D.addEventListener("dispose",z);const Et=D.textures,pt=D.isWebGLCubeRenderTarget===!0,Xt=Et.length>1;if(Xt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=T.version,h.memory.textures++),pt){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let zt=0;zt<T.mipmaps.length;zt++)et.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else et.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)et.__webglFramebuffer[wt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let wt=0,zt=Et.length;wt<zt;wt++){const me=r.get(Et[wt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&pe(D)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<Et.length;wt++){const zt=Et[wt];et.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const me=u.convert(zt.format,zt.colorSpace),At=u.convert(zt.type),Bt=N(zt.internalFormat,me,At,zt.colorSpace,D.isXRRenderTarget===!0),Yt=ce(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Bt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),St(et.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)Tt(et.__webglFramebuffer[wt][zt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else Tt(et.__webglFramebuffer[wt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xt){for(let wt=0,zt=Et.length;wt<zt;wt++){const me=Et[wt],At=r.get(me);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),nt(o.TEXTURE_2D,me),Tt(et.__webglFramebuffer,D,me,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),y(me)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(wt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ht.__webglTexture),nt(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)Tt(et.__webglFramebuffer[zt],D,T,o.COLOR_ATTACHMENT0,wt,zt);else Tt(et.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,wt,0);y(T)&&_(wt),i.unbindTexture()}D.depthBuffer&&Ft(D)}function ue(D){const T=D.textures;for(let et=0,ht=T.length;et<ht;et++){const Et=T[et];if(y(Et)){const pt=B(D),Xt=r.get(Et).__webglTexture;i.bindTexture(pt,Xt),_(pt),i.unbindTexture()}}}const ke=[],I=[];function En(D){if(D.samples>0){if(pe(D)===!1){const T=D.textures,et=D.width,ht=D.height;let Et=o.COLOR_BUFFER_BIT;const pt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=r.get(D),wt=T.length>1;if(wt)for(let zt=0;zt<T.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[zt]);const me=r.get(T[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,et,ht,0,0,et,ht,Et,o.NEAREST),m===!0&&(ke.length=0,I.length=0,ke.push(o.COLOR_ATTACHMENT0+zt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ke.push(pt),I.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ke))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<T.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[zt]);const me=r.get(T[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const T=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ce(D){return Math.min(l.maxSamples,D.samples)}function pe(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(D){const T=h.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function Ce(D,T){const et=D.colorSpace,ht=D.format,Et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||et!==Cs&&et!==za&&(Ae.getTransfer(et)===ze?(ht!==vi||Et!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),T}function qt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=ct,this.setTexture2D=_t,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=ne,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=pe}function ib(o,e){function i(r,l=za){let u;const h=Ae.getTransfer(l);if(r===ra)return o.UNSIGNED_BYTE;if(r===cd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return o.UNSIGNED_SHORT_5_5_5_1;if(r===u0)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===l0)return o.BYTE;if(r===c0)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===ld)return o.INT;if(r===yr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===Po)return o.HALF_FLOAT;if(r===f0)return o.ALPHA;if(r===h0)return o.RGB;if(r===vi)return o.RGBA;if(r===d0)return o.LUMINANCE;if(r===p0)return o.LUMINANCE_ALPHA;if(r===ys)return o.DEPTH_COMPONENT;if(r===Rs)return o.DEPTH_STENCIL;if(r===m0)return o.RED;if(r===fd)return o.RED_INTEGER;if(r===g0)return o.RG;if(r===hd)return o.RG_INTEGER;if(r===dd)return o.RGBA_INTEGER;if(r===vc||r===xc||r===Sc||r===yc)if(h===ze)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lh||r===Nh||r===Oh||r===Ph)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Lh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh||r===Bh||r===Ih)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===zh||r===Bh)return h===ze?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Ih)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fh||r===Hh||r===Gh||r===Vh||r===Xh||r===kh||r===qh||r===Wh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Fh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Wh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return h===ze?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Mc||r===$h||r===td)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Mc)return h===ze?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===_0||r===ed||r===nd||r===id)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Mc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===As?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const ab={type:"move"};class _h{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],S=v.position.distanceTo(x.position),M=.02,A=.005;p.inputState.pinching&&S>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ab)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Uo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ob{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Nn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Ha({vertexShader:rb,fragmentShader:sb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new wi(new Ho(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lb extends Ds{constructor(e,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,v=null,x=null,S=null,M=null,A=null;const R=new ob,y=i.getContextAttributes();let _=null,B=null;const N=[],U=[],Q=new He;let G=null;const z=new li;z.viewport=new tn;const K=new li;K.viewport=new tn;const w=[z,K],C=new wy;let H=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ut=N[Y];return ut===void 0&&(ut=new _h,N[Y]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Y){let ut=N[Y];return ut===void 0&&(ut=new _h,N[Y]=ut),ut.getGripSpace()},this.getHand=function(Y){let ut=N[Y];return ut===void 0&&(ut=new _h,N[Y]=ut),ut.getHandSpace()};function st(Y){const ut=U.indexOf(Y.inputSource);if(ut===-1)return;const Tt=N[ut];Tt!==void 0&&(Tt.update(Y.inputSource,Y.frame,p||h),Tt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function gt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",gt),l.removeEventListener("inputsourceschange",_t);for(let Y=0;Y<N.length;Y++){const ut=U[Y];ut!==null&&(U[Y]=null,N[Y].disconnect(ut))}H=null,ct=null,R.reset(),e.setRenderTarget(_),M=null,S=null,x=null,l=null,B=null,yt.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(Q.width,Q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return x},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(_=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",gt),l.addEventListener("inputsourceschange",_t),y.xrCompatible!==!0&&await i.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(Q),l.renderState.layers===void 0){const ut={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),B=new Mr(M.framebufferWidth,M.framebufferHeight,{format:vi,type:ra,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ut=null,Tt=null,St=null;y.depth&&(St=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=y.stencil?Rs:ys,Tt=y.stencil?As:yr);const Gt={colorFormat:i.RGBA8,depthFormat:St,scaleFactor:u};x=new XRWebGLBinding(l,i),S=x.createProjectionLayer(Gt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),B=new Mr(S.textureWidth,S.textureHeight,{format:vi,type:ra,depthTexture:new D0(S.textureWidth,S.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function _t(Y){for(let ut=0;ut<Y.removed.length;ut++){const Tt=Y.removed[ut],St=U.indexOf(Tt);St>=0&&(U[St]=null,N[St].disconnect(Tt))}for(let ut=0;ut<Y.added.length;ut++){const Tt=Y.added[ut];let St=U.indexOf(Tt);if(St===-1){for(let Ft=0;Ft<N.length;Ft++)if(Ft>=U.length){U.push(Tt),St=Ft;break}else if(U[Ft]===null){U[Ft]=Tt,St=Ft;break}if(St===-1)break}const Gt=N[St];Gt&&Gt.connect(Tt)}}const O=new ot,Z=new ot;function j(Y,ut,Tt){O.setFromMatrixPosition(ut.matrixWorld),Z.setFromMatrixPosition(Tt.matrixWorld);const St=O.distanceTo(Z),Gt=ut.projectionMatrix.elements,Ft=Tt.projectionMatrix.elements,ne=Gt[14]/(Gt[10]-1),Ue=Gt[14]/(Gt[10]+1),ue=(Gt[9]+1)/Gt[5],ke=(Gt[9]-1)/Gt[5],I=(Gt[8]-1)/Gt[0],En=(Ft[8]+1)/Ft[0],ce=ne*I,pe=ne*En,Wt=St/(-I+En),Ce=Wt*-I;if(ut.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ce),Y.translateZ(Wt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Gt[10]===-1)Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=ne+Wt,D=Ue+Wt,T=ce-Ce,et=pe+(St-Ce),ht=ue*Ue/D*qt,Et=ke*Ue/D*qt;Y.projectionMatrix.makePerspective(T,et,ht,Et,qt,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Mt(Y,ut){ut===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ut.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let ut=Y.near,Tt=Y.far;R.texture!==null&&(R.depthNear>0&&(ut=R.depthNear),R.depthFar>0&&(Tt=R.depthFar)),C.near=K.near=z.near=ut,C.far=K.far=z.far=Tt,(H!==C.near||ct!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,ct=C.far),z.layers.mask=Y.layers.mask|2,K.layers.mask=Y.layers.mask|4,C.layers.mask=z.layers.mask|K.layers.mask;const St=Y.parent,Gt=C.cameras;Mt(C,St);for(let Ft=0;Ft<Gt.length;Ft++)Mt(Gt[Ft],St);Gt.length===2?j(C,z,K):C.projectionMatrix.copy(z.projectionMatrix),bt(Y,C,St)};function bt(Y,ut,Tt){Tt===null?Y.matrix.copy(ut.matrixWorld):(Y.matrix.copy(Tt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ut.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ut.projectionMatrix),Y.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ad*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return m},this.setFoveation=function(Y){m=Y,S!==null&&(S.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(C)};let L=null;function nt(Y,ut){if(v=ut.getViewerPose(p||h),A=ut,v!==null){const Tt=v.views;M!==null&&(e.setRenderTargetFramebuffer(B,M.framebuffer),e.setRenderTarget(B));let St=!1;Tt.length!==C.cameras.length&&(C.cameras.length=0,St=!0);for(let Ft=0;Ft<Tt.length;Ft++){const ne=Tt[Ft];let Ue=null;if(M!==null)Ue=M.getViewport(ne);else{const ke=x.getViewSubImage(S,ne);Ue=ke.viewport,Ft===0&&(e.setRenderTargetTextures(B,ke.colorTexture,S.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(B))}let ue=w[Ft];ue===void 0&&(ue=new li,ue.layers.enable(Ft),ue.viewport=new tn,w[Ft]=ue),ue.matrix.fromArray(ne.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ne.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Ft===0&&(C.matrix.copy(ue.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),St===!0&&C.cameras.push(ue)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Ft=x.getDepthInformation(Tt[0]);Ft&&Ft.isValid&&Ft.texture&&R.init(e,Ft,l.renderState)}}for(let Tt=0;Tt<N.length;Tt++){const St=U[Tt],Gt=N[Tt];St!==null&&Gt!==void 0&&Gt.update(St,ut,p||h)}L&&L(Y,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),A=null}const yt=new U0;yt.setAnimationLoop(nt),this.setAnimationLoop=function(Y){L=Y},this.dispose=function(){}}}const dr=new sa,cb=new ln;function ub(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,A0(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,N,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),x(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,U)):_.isMeshMatcapMaterial?(u(y,_),A(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,B,N):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Gn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Gn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=e.get(_),N=B.envMap,U=B.envMapRotation;N&&(y.envMap.value=N,dr.copy(U),dr.x*=-1,dr.y*=-1,dr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),y.envMapRotation.value.setFromMatrix4(cb.makeRotationFromEuler(dr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const B=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function fb(o,e,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,N){const U=N.program;r.uniformBlockBinding(B,U)}function p(B,N){let U=l[B.id];U===void 0&&(A(B),U=v(B),l[B.id]=U,B.addEventListener("dispose",y));const Q=N.program;r.updateUBOMapping(B,Q);const G=e.render.frame;u[B.id]!==G&&(S(B),u[B.id]=G)}function v(B){const N=x();B.__bindingPointIndex=N;const U=o.createBuffer(),Q=B.__size,G=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,Q,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function x(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const N=l[B.id],U=B.uniforms,Q=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let G=0,z=U.length;G<z;G++){const K=Array.isArray(U[G])?U[G]:[U[G]];for(let w=0,C=K.length;w<C;w++){const H=K[w];if(M(H,G,w,Q)===!0){const ct=H.__offset,st=Array.isArray(H.value)?H.value:[H.value];let gt=0;for(let _t=0;_t<st.length;_t++){const O=st[_t],Z=R(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ct+gt,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):(O.toArray(H.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(B,N,U,Q){const G=B.value,z=N+"_"+U;if(Q[z]===void 0)return typeof G=="number"||typeof G=="boolean"?Q[z]=G:Q[z]=G.clone(),!0;{const K=Q[z];if(typeof G=="number"||typeof G=="boolean"){if(K!==G)return Q[z]=G,!0}else if(K.equals(G)===!1)return K.copy(G),!0}return!1}function A(B){const N=B.uniforms;let U=0;const Q=16;for(let z=0,K=N.length;z<K;z++){const w=Array.isArray(N[z])?N[z]:[N[z]];for(let C=0,H=w.length;C<H;C++){const ct=w[C],st=Array.isArray(ct.value)?ct.value:[ct.value];for(let gt=0,_t=st.length;gt<_t;gt++){const O=st[gt],Z=R(O),j=U%Q,Mt=j%Z.boundary,bt=j+Mt;U+=Mt,bt!==0&&Q-bt<Z.storage&&(U+=Q-bt),ct.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=U,U+=Z.storage}}}const G=U%Q;return G>0&&(U+=Q-G),B.__size=U,B.__cache={},this}function R(B){const N={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(N.boundary=4,N.storage=4):B.isVector2?(N.boundary=8,N.storage=8):B.isVector3||B.isColor?(N.boundary=16,N.storage=12):B.isVector4?(N.boundary=16,N.storage=16):B.isMatrix3?(N.boundary=48,N.storage=48):B.isMatrix4?(N.boundary=64,N.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),N}function y(B){const N=B.target;N.removeEventListener("dispose",y);const U=h.indexOf(N.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class hb{constructor(e={}){const{canvas:i=WS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const A=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const B=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=Ia,this.toneMappingExposure=1;const U=this;let Q=!1,G=0,z=0,K=null,w=-1,C=null;const H=new tn,ct=new tn;let st=null;const gt=new Be(0);let _t=0,O=i.width,Z=i.height,j=1,Mt=null,bt=null;const L=new tn(0,0,O,Z),nt=new tn(0,0,O,Z);let yt=!1;const Y=new w0;let ut=!1,Tt=!1;const St=new ln,Gt=new ln,Ft=new ot,ne=new tn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function ke(){return K===null?j:1}let I=r;function En(b,X){return i.getContext(b,X)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${od}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),I===null){const X="webgl2";if(I=En(X,b),I===null)throw En(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ce,pe,Wt,Ce,qt,D,T,et,ht,Et,pt,Xt,wt,zt,me,At,Bt,Yt,kt,Nt,Jt,ie,Le,V;function Rt(){ce=new yT(I),ce.init(),ie=new ib(I,ce),pe=new mT(I,ce,e,ie),Wt=new eb(I,ce),pe.reverseDepthBuffer&&S&&Wt.buffers.depth.setReversed(!0),Ce=new TT(I),qt=new V1,D=new nb(I,ce,Wt,qt,pe,ie,Ce),T=new _T(U),et=new ST(U),ht=new Uy(I),Le=new dT(I,ht),Et=new MT(I,ht,Ce,Le),pt=new AT(I,Et,ht,Ce),kt=new bT(I,pe,D),At=new gT(qt),Xt=new G1(U,T,et,ce,pe,Le,At),wt=new ub(U,qt),zt=new k1,me=new K1(ce),Yt=new hT(U,T,et,Wt,pt,M,m),Bt=new $1(U,pt,pe),V=new fb(I,Ce,pe,Wt),Nt=new pT(I,ce,Ce),Jt=new ET(I,ce,Ce),Ce.programs=Xt.programs,U.capabilities=pe,U.extensions=ce,U.properties=qt,U.renderLists=zt,U.shadowMap=Bt,U.state=Wt,U.info=Ce}Rt();const lt=new lb(U,I);this.xr=lt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=ce.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ce.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(b){b!==void 0&&(j=b,this.setSize(O,Z,!1))},this.getSize=function(b){return b.set(O,Z)},this.setSize=function(b,X,it=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,Z=X,i.width=Math.floor(b*j),i.height=Math.floor(X*j),it===!0&&(i.style.width=b+"px",i.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(O*j,Z*j).floor()},this.setDrawingBufferSize=function(b,X,it){O=b,Z=X,j=it,i.width=Math.floor(b*it),i.height=Math.floor(X*it),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,X,it,at){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,X,it,at),Wt.viewport(H.copy(L).multiplyScalar(j).round())},this.getScissor=function(b){return b.copy(nt)},this.setScissor=function(b,X,it,at){b.isVector4?nt.set(b.x,b.y,b.z,b.w):nt.set(b,X,it,at),Wt.scissor(ct.copy(nt).multiplyScalar(j).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(b){Wt.setScissorTest(yt=b)},this.setOpaqueSort=function(b){Mt=b},this.setTransparentSort=function(b){bt=b},this.getClearColor=function(b){return b.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(b=!0,X=!0,it=!0){let at=0;if(b){let k=!1;if(K!==null){const xt=K.texture.format;k=xt===dd||xt===hd||xt===fd}if(k){const xt=K.texture.type,Ut=xt===ra||xt===yr||xt===No||xt===As||xt===cd||xt===ud,Pt=Yt.getClearColor(),Ot=Yt.getClearAlpha(),Kt=Pt.r,te=Pt.g,jt=Pt.b;Ut?(A[0]=Kt,A[1]=te,A[2]=jt,A[3]=Ot,I.clearBufferuiv(I.COLOR,0,A)):(R[0]=Kt,R[1]=te,R[2]=jt,R[3]=Ot,I.clearBufferiv(I.COLOR,0,R))}else at|=I.COLOR_BUFFER_BIT}X&&(at|=I.DEPTH_BUFFER_BIT),it&&(at|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),Yt.dispose(),zt.dispose(),me.dispose(),qt.dispose(),T.dispose(),et.dispose(),pt.dispose(),Le.dispose(),V.dispose(),Xt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Ls),lt.removeEventListener("sessionend",Ns),Si.stop()};function vt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Q=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),Q=!1;const b=Ce.autoReset,X=Bt.enabled,it=Bt.autoUpdate,at=Bt.needsUpdate,k=Bt.type;Rt(),Ce.autoReset=b,Bt.enabled=X,Bt.autoUpdate=it,Bt.needsUpdate=at,Bt.type=k}function Dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $t(b){const X=b.target;X.removeEventListener("dispose",$t),qe(X)}function qe(b){cn(b),qt.remove(b)}function cn(b){const X=qt.get(b).programs;X!==void 0&&(X.forEach(function(it){Xt.releaseProgram(it)}),b.isShaderMaterial&&Xt.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,it,at,k,xt){X===null&&(X=Ue);const Ut=k.isMesh&&k.matrixWorld.determinant()<0,Pt=Ps(b,X,it,at,k);Wt.setMaterial(at,Ut);let Ot=it.index,Kt=1;if(at.wireframe===!0){if(Ot=Et.getWireframeAttribute(it),Ot===void 0)return;Kt=2}const te=it.drawRange,jt=it.attributes.position;let ge=te.start*Kt,Me=(te.start+te.count)*Kt;xt!==null&&(ge=Math.max(ge,xt.start*Kt),Me=Math.min(Me,(xt.start+xt.count)*Kt)),Ot!==null?(ge=Math.max(ge,0),Me=Math.min(Me,Ot.count)):jt!=null&&(ge=Math.max(ge,0),Me=Math.min(Me,jt.count));const Ge=Me-ge;if(Ge<0||Ge===1/0)return;Le.setup(k,at,Pt,it,Ot);let Ie,ae=Nt;if(Ot!==null&&(Ie=ht.get(Ot),ae=Jt,ae.setIndex(Ie)),k.isMesh)at.wireframe===!0?(Wt.setLineWidth(at.wireframeLinewidth*ke()),ae.setMode(I.LINES)):ae.setMode(I.TRIANGLES);else if(k.isLine){let Ht=at.linewidth;Ht===void 0&&(Ht=1),Wt.setLineWidth(Ht*ke()),k.isLineSegments?ae.setMode(I.LINES):k.isLineLoop?ae.setMode(I.LINE_LOOP):ae.setMode(I.LINE_STRIP)}else k.isPoints?ae.setMode(I.POINTS):k.isSprite&&ae.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ae.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))ae.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ht=k._multiDrawStarts,en=k._multiDrawCounts,Ee=k._multiDrawCount,Cn=Ot?ht.get(Ot).bytesPerElement:1,Li=qt.get(at).currentProgram.getUniforms();for(let pn=0;pn<Ee;pn++)Li.setValue(I,"_gl_DrawID",pn),ae.render(Ht[pn]/Cn,en[pn])}else if(k.isInstancedMesh)ae.renderInstances(ge,Ge,k.count);else if(it.isInstancedBufferGeometry){const Ht=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,en=Math.min(it.instanceCount,Ht);ae.renderInstances(ge,Ge,en)}else ae.render(ge,Ge)};function ye(b,X,it){b.transparent===!0&&b.side===Ri&&b.forceSinglePass===!1?(b.side=Gn,b.needsUpdate=!0,Ye(b,X,it),b.side=Fa,b.needsUpdate=!0,Ye(b,X,it),b.side=Ri):Ye(b,X,it)}this.compile=function(b,X,it=null){it===null&&(it=b),_=me.get(it),_.init(X),N.push(_),it.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),b!==it&&b.traverseVisible(function(k){k.isLight&&k.layers.test(X.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights();const at=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const xt=k.material;if(xt)if(Array.isArray(xt))for(let Ut=0;Ut<xt.length;Ut++){const Pt=xt[Ut];ye(Pt,it,k),at.add(Pt)}else ye(xt,it,k),at.add(xt)}),N.pop(),_=null,at},this.compileAsync=function(b,X,it=null){const at=this.compile(b,X,it);return new Promise(k=>{function xt(){if(at.forEach(function(Ut){qt.get(Ut).currentProgram.isReady()&&at.delete(Ut)}),at.size===0){k(b);return}setTimeout(xt,10)}ce.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let _n=null;function ci(b){_n&&_n(b)}function Ls(){Si.stop()}function Ns(){Si.start()}const Si=new U0;Si.setAnimationLoop(ci),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){_n=b,lt.setAnimationLoop(b),b===null?Si.stop():Si.start()},lt.addEventListener("sessionstart",Ls),lt.addEventListener("sessionend",Ns),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(X),X=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,X,K),_=me.get(b,N.length),_.init(X),N.push(_),Gt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Y.setFromProjectionMatrix(Gt),Tt=this.localClippingEnabled,ut=At.init(this.clippingPlanes,Tt),y=zt.get(b,B.length),y.init(),B.push(y),lt.enabled===!0&&lt.isPresenting===!0){const xt=U.xr.getDepthSensingMesh();xt!==null&&Va(xt,X,-1/0,U.sortObjects)}Va(b,X,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(Mt,bt),ue=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,ue&&Yt.addToRenderList(y,b),this.info.render.frame++,ut===!0&&At.beginShadows();const it=_.state.shadowsArray;Bt.render(it,b,X),ut===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=y.opaque,k=y.transmissive;if(_.setupLights(),X.isArrayCamera){const xt=X.cameras;if(k.length>0)for(let Ut=0,Pt=xt.length;Ut<Pt;Ut++){const Ot=xt[Ut];Os(at,k,b,Ot)}ue&&Yt.render(b);for(let Ut=0,Pt=xt.length;Ut<Pt;Ut++){const Ot=xt[Ut];Tr(y,b,Ot,Ot.viewport)}}else k.length>0&&Os(at,k,b,X),ue&&Yt.render(b),Tr(y,b,X);K!==null&&(D.updateMultisampleRenderTarget(K),D.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(U,b,X),Le.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],ut===!0&&At.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,B.pop(),B.length>0?y=B[B.length-1]:y=null};function Va(b,X,it,at){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){at&&ne.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Gt);const Ut=pt.update(b),Pt=b.material;Pt.visible&&y.push(b,Ut,Pt,it,ne.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const Ut=pt.update(b),Pt=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ne.copy(b.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),ne.copy(Ut.boundingSphere.center)),ne.applyMatrix4(b.matrixWorld).applyMatrix4(Gt)),Array.isArray(Pt)){const Ot=Ut.groups;for(let Kt=0,te=Ot.length;Kt<te;Kt++){const jt=Ot[Kt],ge=Pt[jt.materialIndex];ge&&ge.visible&&y.push(b,Ut,ge,it,ne.z,jt)}}else Pt.visible&&y.push(b,Ut,Pt,it,ne.z,null)}}const xt=b.children;for(let Ut=0,Pt=xt.length;Ut<Pt;Ut++)Va(xt[Ut],X,it,at)}function Tr(b,X,it,at){const k=b.opaque,xt=b.transmissive,Ut=b.transparent;_.setupLightsView(it),ut===!0&&At.setGlobalState(U.clippingPlanes,it),at&&Wt.viewport(H.copy(at)),k.length>0&&Xa(k,X,it),xt.length>0&&Xa(xt,X,it),Ut.length>0&&Xa(Ut,X,it),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Os(b,X,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new Mr(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Po:ra,minFilter:xr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const xt=_.state.transmissionRenderTarget[at.id],Ut=at.viewport||H;xt.setSize(Ut.z,Ut.w);const Pt=U.getRenderTarget();U.setRenderTarget(xt),U.getClearColor(gt),_t=U.getClearAlpha(),_t<1&&U.setClearColor(16777215,.5),U.clear(),ue&&Yt.render(it);const Ot=U.toneMapping;U.toneMapping=Ia;const Kt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),ut===!0&&At.setGlobalState(U.clippingPlanes,at),Xa(b,it,at),D.updateMultisampleRenderTarget(xt),D.updateRenderTargetMipmap(xt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let jt=0,ge=X.length;jt<ge;jt++){const Me=X[jt],Ge=Me.object,Ie=Me.geometry,ae=Me.material,Ht=Me.group;if(ae.side===Ri&&Ge.layers.test(at.layers)){const en=ae.side;ae.side=Gn,ae.needsUpdate=!0,ui(Ge,it,at,Ie,ae,Ht),ae.side=en,ae.needsUpdate=!0,te=!0}}te===!0&&(D.updateMultisampleRenderTarget(xt),D.updateRenderTargetMipmap(xt))}U.setRenderTarget(Pt),U.setClearColor(gt,_t),Kt!==void 0&&(at.viewport=Kt),U.toneMapping=Ot}function Xa(b,X,it){const at=X.isScene===!0?X.overrideMaterial:null;for(let k=0,xt=b.length;k<xt;k++){const Ut=b[k],Pt=Ut.object,Ot=Ut.geometry,Kt=at===null?Ut.material:at,te=Ut.group;Pt.layers.test(it.layers)&&ui(Pt,X,it,Ot,Kt,te)}}function ui(b,X,it,at,k,xt){b.onBeforeRender(U,X,it,at,k,xt),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(U,X,it,at,b,xt),k.transparent===!0&&k.side===Ri&&k.forceSinglePass===!1?(k.side=Gn,k.needsUpdate=!0,U.renderBufferDirect(it,X,at,k,b,xt),k.side=Fa,k.needsUpdate=!0,U.renderBufferDirect(it,X,at,k,b,xt),k.side=Ri):U.renderBufferDirect(it,X,at,k,b,xt),b.onAfterRender(U,X,it,at,k,xt)}function Ye(b,X,it){X.isScene!==!0&&(X=Ue);const at=qt.get(b),k=_.state.lights,xt=_.state.shadowsArray,Ut=k.state.version,Pt=Xt.getParameters(b,k.state,xt,X,it),Ot=Xt.getProgramCacheKey(Pt);let Kt=at.programs;at.environment=b.isMeshStandardMaterial?X.environment:null,at.fog=X.fog,at.envMap=(b.isMeshStandardMaterial?et:T).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Kt===void 0&&(b.addEventListener("dispose",$t),Kt=new Map,at.programs=Kt);let te=Kt.get(Ot);if(te!==void 0){if(at.currentProgram===te&&at.lightsStateVersion===Ut)return Ui(b,Pt),te}else Pt.uniforms=Xt.getUniforms(b),b.onBeforeCompile(Pt,U),te=Xt.acquireProgram(Pt,Ot),Kt.set(Ot,te),at.uniforms=Pt.uniforms;const jt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(jt.clippingPlanes=At.uniform),Ui(b,Pt),at.needsLights=Dc(b),at.lightsStateVersion=Ut,at.needsLights&&(jt.ambientLightColor.value=k.state.ambient,jt.lightProbe.value=k.state.probe,jt.directionalLights.value=k.state.directional,jt.directionalLightShadows.value=k.state.directionalShadow,jt.spotLights.value=k.state.spot,jt.spotLightShadows.value=k.state.spotShadow,jt.rectAreaLights.value=k.state.rectArea,jt.ltc_1.value=k.state.rectAreaLTC1,jt.ltc_2.value=k.state.rectAreaLTC2,jt.pointLights.value=k.state.point,jt.pointLightShadows.value=k.state.pointShadow,jt.hemisphereLights.value=k.state.hemi,jt.directionalShadowMap.value=k.state.directionalShadowMap,jt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,jt.spotShadowMap.value=k.state.spotShadowMap,jt.spotLightMatrix.value=k.state.spotLightMatrix,jt.spotLightMap.value=k.state.spotLightMap,jt.pointShadowMap.value=k.state.pointShadowMap,jt.pointShadowMatrix.value=k.state.pointShadowMatrix),at.currentProgram=te,at.uniformsList=null,te}function vn(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Ec.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Ui(b,X){const it=qt.get(b);it.outputColorSpace=X.outputColorSpace,it.batching=X.batching,it.batchingColor=X.batchingColor,it.instancing=X.instancing,it.instancingColor=X.instancingColor,it.instancingMorph=X.instancingMorph,it.skinning=X.skinning,it.morphTargets=X.morphTargets,it.morphNormals=X.morphNormals,it.morphColors=X.morphColors,it.morphTargetsCount=X.morphTargetsCount,it.numClippingPlanes=X.numClippingPlanes,it.numIntersection=X.numClipIntersection,it.vertexAlphas=X.vertexAlphas,it.vertexTangents=X.vertexTangents,it.toneMapping=X.toneMapping}function Ps(b,X,it,at,k){X.isScene!==!0&&(X=Ue),D.resetTextureUnits();const xt=X.fog,Ut=at.isMeshStandardMaterial?X.environment:null,Pt=K===null?U.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Cs,Ot=(at.isMeshStandardMaterial?et:T).get(at.envMap||Ut),Kt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,te=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),jt=!!it.morphAttributes.position,ge=!!it.morphAttributes.normal,Me=!!it.morphAttributes.color;let Ge=Ia;at.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ge=U.toneMapping);const Ie=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ae=Ie!==void 0?Ie.length:0,Ht=qt.get(at),en=_.state.lights;if(ut===!0&&(Tt===!0||b!==C)){const un=b===C&&at.id===w;At.setState(at,b,un)}let Ee=!1;at.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==en.state.version||Ht.outputColorSpace!==Pt||k.isBatchedMesh&&Ht.batching===!1||!k.isBatchedMesh&&Ht.batching===!0||k.isBatchedMesh&&Ht.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ht.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ht.instancing===!1||!k.isInstancedMesh&&Ht.instancing===!0||k.isSkinnedMesh&&Ht.skinning===!1||!k.isSkinnedMesh&&Ht.skinning===!0||k.isInstancedMesh&&Ht.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ht.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ht.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ht.instancingMorph===!1&&k.morphTexture!==null||Ht.envMap!==Ot||at.fog===!0&&Ht.fog!==xt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==At.numPlanes||Ht.numIntersection!==At.numIntersection)||Ht.vertexAlphas!==Kt||Ht.vertexTangents!==te||Ht.morphTargets!==jt||Ht.morphNormals!==ge||Ht.morphColors!==Me||Ht.toneMapping!==Ge||Ht.morphTargetsCount!==ae)&&(Ee=!0):(Ee=!0,Ht.__version=at.version);let Cn=Ht.currentProgram;Ee===!0&&(Cn=Ye(at,X,k));let Li=!1,pn=!1,qa=!1;const fe=Cn.getUniforms(),Tn=Ht.uniforms;if(Wt.useProgram(Cn.program)&&(Li=!0,pn=!0,qa=!0),at.id!==w&&(w=at.id,pn=!0),Li||C!==b){Wt.buffers.depth.getReversed()?(St.copy(b.projectionMatrix),jS(St),ZS(St),fe.setValue(I,"projectionMatrix",St)):fe.setValue(I,"projectionMatrix",b.projectionMatrix),fe.setValue(I,"viewMatrix",b.matrixWorldInverse);const Qe=fe.map.cameraPosition;Qe!==void 0&&Qe.setValue(I,Ft.setFromMatrixPosition(b.matrixWorld)),pe.logarithmicDepthBuffer&&fe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&fe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,pn=!0,qa=!0)}if(k.isSkinnedMesh){fe.setOptional(I,k,"bindMatrix"),fe.setOptional(I,k,"bindMatrixInverse");const un=k.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),fe.setValue(I,"boneTexture",un.boneTexture,D))}k.isBatchedMesh&&(fe.setOptional(I,k,"batchingTexture"),fe.setValue(I,"batchingTexture",k._matricesTexture,D),fe.setOptional(I,k,"batchingIdTexture"),fe.setValue(I,"batchingIdTexture",k._indirectTexture,D),fe.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&fe.setValue(I,"batchingColorTexture",k._colorsTexture,D));const wn=it.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&kt.update(k,it,Cn),(pn||Ht.receiveShadow!==k.receiveShadow)&&(Ht.receiveShadow=k.receiveShadow,fe.setValue(I,"receiveShadow",k.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Tn.envMap.value=Ot,Tn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&X.environment!==null&&(Tn.envMapIntensity.value=X.environmentIntensity),pn&&(fe.setValue(I,"toneMappingExposure",U.toneMappingExposure),Ht.needsLights&&wc(Tn,qa),xt&&at.fog===!0&&wt.refreshFogUniforms(Tn,xt),wt.refreshMaterialUniforms(Tn,at,j,Z,_.state.transmissionRenderTarget[b.id]),Ec.upload(I,vn(Ht),Tn,D)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Ec.upload(I,vn(Ht),Tn,D),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&fe.setValue(I,"center",k.center),fe.setValue(I,"modelViewMatrix",k.modelViewMatrix),fe.setValue(I,"normalMatrix",k.normalMatrix),fe.setValue(I,"modelMatrix",k.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const un=at.uniformsGroups;for(let Qe=0,br=un.length;Qe<br;Qe++){const yi=un[Qe];V.update(yi,Cn),V.bind(yi,Cn)}}return Cn}function wc(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Dc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,X,it){qt.get(b.texture).__webglTexture=X,qt.get(b.depthTexture).__webglTexture=it;const at=qt.get(b);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=it===void 0,at.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const it=qt.get(b);it.__webglFramebuffer=X,it.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,it=0){K=b,G=X,z=it;let at=!0,k=null,xt=!1,Ut=!1;if(b){const Ot=qt.get(b);if(Ot.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(I.FRAMEBUFFER,null),at=!1;else if(Ot.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(Ot.__hasExternalTextures)D.rebindTextures(b,qt.get(b.texture).__webglTexture,qt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const jt=b.depthTexture;if(Ot.__boundDepthTexture!==jt){if(jt!==null&&qt.has(jt)&&(b.width!==jt.image.width||b.height!==jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const Kt=b.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const te=qt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(te[X])?k=te[X][it]:k=te[X],xt=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?k=qt.get(b).__webglMultisampledFramebuffer:Array.isArray(te)?k=te[it]:k=te,H.copy(b.viewport),ct.copy(b.scissor),st=b.scissorTest}else H.copy(L).multiplyScalar(j).floor(),ct.copy(nt).multiplyScalar(j).floor(),st=yt;if(Wt.bindFramebuffer(I.FRAMEBUFFER,k)&&at&&Wt.drawBuffers(b,k),Wt.viewport(H),Wt.scissor(ct),Wt.setScissorTest(st),xt){const Ot=qt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,it)}else if(Ut){const Ot=qt.get(b.texture),Kt=X||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ot.__webglTexture,it||0,Kt)}w=-1},this.readRenderTargetPixels=function(b,X,it,at,k,xt,Ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=qt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Pt=Pt[Ut]),Pt){Wt.bindFramebuffer(I.FRAMEBUFFER,Pt);try{const Ot=b.texture,Kt=Ot.format,te=Ot.type;if(!pe.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-at&&it>=0&&it<=b.height-k&&I.readPixels(X,it,at,k,ie.convert(Kt),ie.convert(te),xt)}finally{const Ot=K!==null?qt.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,X,it,at,k,xt,Ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=qt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ut!==void 0&&(Pt=Pt[Ut]),Pt){const Ot=b.texture,Kt=Ot.format,te=Ot.type;if(!pe.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-at&&it>=0&&it<=b.height-k){Wt.bindFramebuffer(I.FRAMEBUFFER,Pt);const jt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),I.readPixels(X,it,at,k,ie.convert(Kt),ie.convert(te),0);const ge=K!==null?qt.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(I.FRAMEBUFFER,ge);const Me=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await YS(I,Me,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,jt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.deleteBuffer(jt),I.deleteSync(Me),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,it=0){b.isTexture!==!0&&(vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const at=Math.pow(2,-it),k=Math.floor(b.image.width*at),xt=Math.floor(b.image.height*at),Ut=X!==null?X.x:0,Pt=X!==null?X.y:0;D.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,Ut,Pt,k,xt),Wt.unbindTexture()};const Go=I.createFramebuffer(),ka=I.createFramebuffer();this.copyTextureToTexture=function(b,X,it=null,at=null,k=0,xt=null){b.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,b=arguments[1],X=arguments[2],xt=arguments[3]||0,it=null),xt===null&&(k!==0?(vs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=k,k=0):xt=0);let Ut,Pt,Ot,Kt,te,jt,ge,Me,Ge;const Ie=b.isCompressedTexture?b.mipmaps[xt]:b.image;if(it!==null)Ut=it.max.x-it.min.x,Pt=it.max.y-it.min.y,Ot=it.isBox3?it.max.z-it.min.z:1,Kt=it.min.x,te=it.min.y,jt=it.isBox3?it.min.z:0;else{const wn=Math.pow(2,-k);Ut=Math.floor(Ie.width*wn),Pt=Math.floor(Ie.height*wn),b.isDataArrayTexture?Ot=Ie.depth:b.isData3DTexture?Ot=Math.floor(Ie.depth*wn):Ot=1,Kt=0,te=0,jt=0}at!==null?(ge=at.x,Me=at.y,Ge=at.z):(ge=0,Me=0,Ge=0);const ae=ie.convert(X.format),Ht=ie.convert(X.type);let en;X.isData3DTexture?(D.setTexture3D(X,0),en=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),en=I.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),en=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Ee=I.getParameter(I.UNPACK_ROW_LENGTH),Cn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Li=I.getParameter(I.UNPACK_SKIP_PIXELS),pn=I.getParameter(I.UNPACK_SKIP_ROWS),qa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,te),I.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);const fe=b.isDataArrayTexture||b.isData3DTexture,Tn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const wn=qt.get(b),un=qt.get(X),Qe=qt.get(wn.__renderTarget),br=qt.get(un.__renderTarget);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,br.__webglFramebuffer);for(let yi=0;yi<Ot;yi++)fe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.get(b).__webglTexture,k,jt+yi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.get(X).__webglTexture,xt,Ge+yi)),I.blitFramebuffer(Kt,te,Ut,Pt,ge,Me,Ut,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||qt.has(b)){const wn=qt.get(b),un=qt.get(X);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,Go),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ka);for(let Qe=0;Qe<Ot;Qe++)fe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,wn.__webglTexture,k,jt+Qe):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,wn.__webglTexture,k),Tn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,un.__webglTexture,xt,Ge+Qe):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,un.__webglTexture,xt),k!==0?I.blitFramebuffer(Kt,te,Ut,Pt,ge,Me,Ut,Pt,I.COLOR_BUFFER_BIT,I.NEAREST):Tn?I.copyTexSubImage3D(en,xt,ge,Me,Ge+Qe,Kt,te,Ut,Pt):I.copyTexSubImage2D(en,xt,ge,Me,Kt,te,Ut,Pt);Wt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Tn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(en,xt,ge,Me,Ge,Ut,Pt,Ot,ae,Ht,Ie.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(en,xt,ge,Me,Ge,Ut,Pt,Ot,ae,Ie.data):I.texSubImage3D(en,xt,ge,Me,Ge,Ut,Pt,Ot,ae,Ht,Ie):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xt,ge,Me,Ut,Pt,ae,Ht,Ie.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xt,ge,Me,Ie.width,Ie.height,ae,Ie.data):I.texSubImage2D(I.TEXTURE_2D,xt,ge,Me,Ut,Pt,ae,Ht,Ie);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Cn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Li),I.pixelStorei(I.UNPACK_SKIP_ROWS,pn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qa),xt===0&&X.generateMipmaps&&I.generateMipmap(en),Wt.unbindTexture()},this.copyTextureToTexture3D=function(b,X,it=null,at=null,k=0){return b.isTexture!==!0&&(vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),it=arguments[0]||null,at=arguments[1]||null,b=arguments[2],X=arguments[3],k=arguments[4]||0),vs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,it,at,k)},this.initRenderTarget=function(b){qt.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Wt.unbindTexture()},this.resetState=function(){G=0,z=0,K=null,Wt.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ae._getUnpackColorSpace()}}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z0=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=Ke.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:u,iconNode:h,...d},m)=>Ke.createElement("svg",{ref:m,...pb,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:z0("lucide",l),...d},[...h.map(([p,v])=>Ke.createElement(p,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=(o,e)=>{const i=Ke.forwardRef(({className:r,...l},u)=>Ke.createElement(mb,{ref:u,iconNode:e,className:z0(`lucide-${db(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=Ga("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=Ga("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=Ga("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=Ga("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=Ga("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=Ga("Images",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=Ga("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=Ga("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Mb={1:{sourceCount:12,qr:[],duplicates:[]},2:{sourceCount:8,qr:[8],duplicates:[7]},3:{sourceCount:15,qr:[15],duplicates:[]},4:{sourceCount:12,qr:[12],duplicates:[]},5:{sourceCount:14,qr:[14],duplicates:[]},6:{sourceCount:9,qr:[],duplicates:[]},7:{sourceCount:9,qr:[9],duplicates:[8]},8:{sourceCount:12,qr:[12],duplicates:[3,11]},9:{sourceCount:13,qr:[13],duplicates:[12]},10:{sourceCount:14,qr:[14],duplicates:[13]},11:{sourceCount:11,qr:[],duplicates:[]},12:{sourceCount:9,qr:[9],duplicates:[8]},13:{sourceCount:8,qr:[8],duplicates:[]},14:{sourceCount:9,qr:[9],duplicates:[8]},15:{sourceCount:13,qr:[13],duplicates:[12]},16:{sourceCount:19,qr:[19],duplicates:[6]},17:{sourceCount:14,qr:[14],duplicates:[]},18:{sourceCount:17,qr:[],duplicates:[17]},19:{sourceCount:12,qr:[12],duplicates:[]},20:{sourceCount:15,qr:[15],duplicates:[]},21:{sourceCount:6,qr:[],duplicates:[]}},Eb=Object.fromEntries(Object.entries(Mb).map(([o,e])=>{const i=new Set([...e.qr||[],...e.duplicates||[]]),r=Array.from({length:e.sourceCount},(l,u)=>u+1).filter(l=>!i.has(l));return[Number(o),r]})),Ln=o=>(Eb[o]||[]).map(e=>`./assets/img/journal-projects/article-${String(o).padStart(2,"0")}-${String(e).padStart(2,"0")}.webp`),vd=[{id:"changshen",type:"私宅住宅",title:"长申玉93栋东户",meta:"漯河 · 长申玉 / 270㎡ / 私人住宅",insight:"地上承接日常，地下留给会客与停留，院子把光、树影和空气带进室内。",expression:"让餐厨、客厅、收纳与院子彼此看得见，也保持各自安静。",delivery:"瑞意设计 / 全案托管 / 2026",articleUrl:"https://mp.weixin.qq.com/s/DBMxZXcWUVvEj2w7j3SPAw",cover:Ln(8)[0],images:Ln(8)},{id:"suhe",type:"私宅住宅",title:"苏荷揽月庭",meta:"漯河 · 揽月庭 / 室内330㎡ + 院子110㎡",insight:"一层向院子打开，地下也保留天光，让家里的日常重新回到院子周围。",expression:"用连续视线和自然光连接客餐厅、庭院与地下空间。",delivery:"瑞意设计 / 全案托管 / 2026",articleUrl:"https://mp.weixin.qq.com/s/2Cw4FpQA2LRJUnObbuS7fg",cover:Ln(10)[0],images:Ln(10)},{id:"qinna",type:"酒店空间",title:"仟那千寻酒店",meta:"漯河 / 1820㎡ / 酒店空间设计",insight:"把东方旅居的安静感做成客户一眼能判断的空间氛围。",expression:"以木色、石材、格栅和柔和灯光，统一大堂、餐厅、走廊与客房的气质。",delivery:"瑞意设计 / 全案托管 / 2024",articleUrl:"https://mp.weixin.qq.com/s/hMDQmtfpKf0V6o_X2P0Nhg",cover:Ln(17)[0],images:Ln(17)},{id:"xihua",type:"宴会酒店",title:"西华酌伴宴会酒店",meta:"周口 · 西华 / 2600㎡ / 宴会酒店",insight:"宴会空间先解决仪式感，再处理灯光、动线和主题记忆点。",expression:"从抵达、接待、宴席到拍照场景，建立清晰又有分量的待客体验。",delivery:"瑞意设计 / 全案托管 / 2026",articleUrl:"https://mp.weixin.qq.com/s/MQIsp4WiGe0mLw0l5Iuahw",cover:Ln(5)[0],images:Ln(5)}],F0=[{id:"works",label:"作品",sub:"WORKS"},{id:"journal",label:"设计志",sub:"JOURNAL"},{id:"studio",label:"工作室",sub:"STUDIO"},{id:"pricing",label:"合作",sub:"SERVICE"},{id:"contact",label:"联系",sub:"CONTACT"}],vh=["home",...F0.map(o=>o.id)],Tb={1:"漯河 · 红澄九璞 / 328㎡ / 私人住宅 / 2026",2:"河南 / 125㎡ / 住宅 / 2026",3:"漯河 · 总部港 / 770㎡ / 私人住宅 / 2026",4:"漯河 · 总部港 / 364㎡ / 私人住宅 / 2026",5:"周口 · 西华 / 2600㎡ / 宴会酒店 / 2026",6:"漯河 · 红橙九璞 / 180㎡ / 私人住宅 / 2026",7:"漯河 · 红橙九璞 / 140㎡ / 私人住宅 / 2026",8:"漯河 · 长申玉 / 270㎡ / 私人住宅 / 2026",9:"漯河 · 碧桂园云顶 / 210㎡ / 私人住宅 / 2024",10:"漯河 · 揽月庭 / 室内330㎡ + 院子110㎡ / 2026",11:"漯河 · 建业新城 / 145㎡ / 私人住宅 / 2026",12:"漯河 · 建业新城 / 145㎡ / 私人住宅 / 2026",13:"漯河 / 200㎡ / 服装店 / 2026",14:"新乡 · 云锦府 / 140㎡ / 私人住宅 / 2026",15:"漯河 · 总部港 / 445㎡ / 私人住宅 / 2026",16:"漯河 · 总部港 / 445㎡ / 私人住宅 / 2025",17:"漯河 / 1820㎡ / 酒店空间设计 / 2024",18:"漯河 / 2200㎡ / 酒店空间设计 / 2022",19:"漯河 / 1560㎡ / 办公室空间设计 / 2022",20:"漯河 / 1710㎡ / 办公室空间设计 / 2022",21:"漯河 · 澧水嘉园 / 168㎡ / 私人住宅 / 2026"},H0=[{number:21,title:"House 021 / 静序 | 168㎡现代东方居住空间",tag:"HOUSE 021",category:"住宅",cover:Ln(21)[0],summary:"以温润木色、浅色界面和清晰秩序，建立安静舒展的现代东方居住空间。",url:"https://mp.weixin.qq.com/s/GTr2_6TTQ8FQXnUgK7ccaw"},{number:20,title:"Project 020 / 颖淮建工办公空间 | 在秩序之中，构建生长型办公场域",tag:"PROJECT 020",category:"办公",cover:Ln(20)[0],summary:"漯河办公空间，1710㎡，以接待、办公、会议和展示关系建立清晰稳定的企业秩序。",url:"https://mp.weixin.qq.com/s/rwm8KJSNkqLAEoFGHqAWjA"},{number:19,title:"Project 019 / 豫中南数字产融平台 | 于秩序之中，构建城市产业窗口",tag:"PROJECT 019",category:"办公",cover:Ln(19)[0],summary:"整合接待、展示、办公、会议和会客功能，兼顾效率、秩序与形象表达。",url:"https://mp.weixin.qq.com/s/utsMTcmQauUYUJ1vKS5tSg"},{number:18,title:"Project 018 / 雲璟酒店 | 于城市之中，营造一处东方雅境",tag:"PROJECT 018",category:"酒店",cover:Ln(18)[0],summary:"以灰石、木色、暖光与东方景观元素，串联外立面、大堂和客房体验。",url:"https://mp.weixin.qq.com/s/Od_SFfLG-4P6_0eM1CCzAA"},{number:17,title:"Project 017 / 仟那千寻酒店 | 在木色与光影之间，重塑东方旅居体验",tag:"PROJECT 017",category:"酒店",cover:Ln(17)[0],summary:"用温润木色、沉稳石材、格栅秩序与柔和光影，建立统一的东方旅居气质。",url:"https://mp.weixin.qq.com/s/hMDQmtfpKf0V6o_X2P0Nhg"},...[["House 016 / 浮白｜445㎡独栋别墅，克制法式里的松弛生活","HOUSE 016","别墅","445㎡独栋尺度里，以白色、石材和法式线条建立舒展的长期居住秩序。","E5wGRevOSk9wyYZa0I22Ig",16],["House 015 / 栖庭——445㎡，把自然安放进家里","HOUSE 015","别墅","把挑空、楼梯、绿意、水景与木色组合成更松弛、更有生活感的别墅空间。","vOL6Cace-eIBehA7WxYfRA",15],["House 014 / 山色——140㎡，把日子放进山色里","HOUSE 014","住宅","用白色、木色和淡淡山水纹理，让空间保持安定、舒展和长期耐看。","FLmX0Fpr6w8Miad3Mqy89A",14],["Project 013 / 漫喜——一间有温度的服装店","PROJECT 013","商业","让颜色先吸引顾客靠近，再用陈列、灯光和动线建立停留与购买节奏。","36Cy2Mw8k_8I8Uup7YNu2w",13],["House 012 / 晴白——145㎡，把家里的光留出来","HOUSE 012","住宅","以大面积白色、浅木与柔和灯光，让住宅更轻、更明亮。","z7HHXvA7UchINZvpANKgug",12],["House 011 / 静界——145㎡，把生活收进秩序里","HOUSE 011","住宅","深木、灰色皮革、石材和少量酒红，共同建立安静而不冷的生活秩序。","eN4_lUiSMwhDIC3y1EjKMw",11],["House 010 / 和院——330㎡，把日子放回院子里","HOUSE 010","住宅","连接330㎡室内与110㎡院子，让地上日常、地下空间和自然光彼此连通。","2Cw4FpQA2LRJUnObbuS7fg",10],["House 009 / 午后——210㎡中古大平层，把日子放慢一点","HOUSE 009","住宅","用木色、圆角和低矮家具，让大平层有尺度，也有可以停下来的温度。","S3PT7B-1-uPNoSkZWzJo5A",9],["House 008 / 归庭——把日子慢慢收回家里","HOUSE 008","住宅","在一层日常、地下会客和院子之间，建立看得见又互不打扰的生活关系。","DBMxZXcWUVvEj2w7j3SPAw",8],["House 007 / 白屿——一座浮在光里的白色平层","HOUSE 007","住宅","褪去多余颜色，让墙面、光线和生活本身成为空间的主体。","2JxbhuqxOxFY8RgozHzsBw",7],["House 006 / 未满——180㎡平层，给日子留一点余地","HOUSE 006","住宅","不过度填满空间，让玄关、客餐厅和未来生活都保留继续生长的余地。","Wxt9ifyE5V9ODSOkqylAxA",6],["House 005 / 酌伴——人间有席","HOUSE 005","宴会酒店","围绕抵达、接待、宴席与仪式，构建一栋能把客人稳稳接住的宴会空间。","MQIsp4WiGe0mLw0l5Iuahw",5],["House 004 / 望夜","HOUSE 004","住宅","从夜间灯光、挑高尺度和观看关系出发，让房子在夜里真正活起来。","7PhvdLEPbSuBRIIWZtk2AA",4],["House 003 / 观自——一座立于己上的房子","HOUSE 003","别墅","从建筑立面、庭院、玄关到室内，建立自由而有计算的空间秩序。","_KdYONEIit8JhJwFbI2zgg",3],["House 002 / 听光——一座屋子里的一日","HOUSE 002","住宅","把清晨、黄昏、音乐、照片和日常停留，收进一套温柔的住宅叙事。","aNoDcjynGu-GAapCDnXhuA",2],["House 001 / 山隐——一座房子里的山水记","HOUSE 001","住宅","把石墙、天光、树与火带入住宅，让自然在室内成为可以停留的日常。","GsjRs7tCQvXG8P2cYB8d8w",1]].map(([o,e,i,r,l,u])=>({number:u,title:o,tag:e,category:i,summary:r,cover:Ln(u)[0],url:`https://mp.weixin.qq.com/s/${l}`}))],G0=H0.map(o=>({id:`journal-${o.number}`,type:o.category,title:o.title,meta:Tb[o.number],insight:o.summary,expression:"",delivery:"瑞意设计 / 全案托管",articleUrl:o.url,cover:o.cover,images:Ln(o.number)})),bb=[...vd,...G0];function Ab(){Ke.useEffect(()=>{let o=0;const e={x:0,y:0},i={x:0,y:0},r=()=>{i.x+=(e.x-i.x)*.08,i.y+=(e.y-i.y)*.08,document.documentElement.style.setProperty("--mx",i.x.toFixed(4)),document.documentElement.style.setProperty("--my",i.y.toFixed(4)),document.documentElement.style.setProperty("--mx-px",`${(i.x*28).toFixed(2)}px`),document.documentElement.style.setProperty("--my-px",`${(i.y*18).toFixed(2)}px`),o=requestAnimationFrame(r)},l=u=>{e.x=(u.clientX/Math.max(window.innerWidth,1)-.5)*2,e.y=(u.clientY/Math.max(window.innerHeight,1)-.5)*2};return window.addEventListener("pointermove",l),o=requestAnimationFrame(r),()=>{window.removeEventListener("pointermove",l),cancelAnimationFrame(o)}},[])}function Rb(){const o=Ke.useRef(null);return Ke.useEffect(()=>{const e=o.current;if(!e)return;const i=new hb({canvas:e,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),i.setClearColor(0,0);const r=new xy,l=new li(36,1,.1,100);l.position.set(0,.1,5.55);const u=new Uo;u.position.y=-.22,r.add(u);const d=new Ry().load("./assets/img/hero-terrain.png");d.colorSpace=Qn;const m=[];[{scale:[8.8,3.7,1],pos:[-.12,-.32,-.65],rot:[-.07,-.08,-.02],opacity:.72},{scale:[9.4,3.95,1],pos:[.1,-.12,.1],rot:[-.03,.04,.01],opacity:.82},{scale:[9.8,4.05,1],pos:[.04,.02,.58],rot:[.015,.08,-.018],opacity:.5}].forEach((S,M)=>{const A=new Ho(1,1,90,20),R=A.attributes.position;for(let _=0;_<R.count;_+=1){const B=R.getX(_),N=R.getY(_);R.setZ(_,Math.sin((B+M*.2)*8)*.018+Math.cos(N*6+M)*.012),R.setY(_,N+Math.sin((B+.4)*4+M)*.011)}R.needsUpdate=!0;const y=new wi(A,new md({map:d,color:12433066,transparent:!0,opacity:S.opacity,depthWrite:!1,side:Ri}));y.scale.set(...S.scale),y.position.set(...S.pos),y.rotation.set(...S.rot),y.userData.base=S,u.add(y),m.push(y)});const p=()=>{const S=e.clientWidth||window.innerWidth,M=e.clientHeight||window.innerHeight;i.setSize(S,M,!1),l.aspect=S/Math.max(M,1),l.fov=S<760?44:36,l.position.z=S<760?6.4:5.55,u.scale.setScalar(S<760?.84:1),l.updateProjectionMatrix()};let v=0;const x=S=>{const M=S*.001,A=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--mx"))||0,R=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--my"))||0;u.rotation.y=A*.13+Math.sin(M*.22)*.02,u.rotation.x=-.02+R*.055,u.position.x=-A*.18+Math.sin(M*.16)*.04,u.position.y=-.22-R*.05+Math.cos(M*.2)*.02,m.forEach((y,_)=>{const{pos:B,rot:N}=y.userData.base;y.position.x=B[0]+Math.sin(M*(.16+_*.03)+_)*.04,y.position.y=B[1]+Math.cos(M*(.18+_*.025))*.025,y.rotation.x=N[0]+R*(.018+_*.006),y.rotation.y=N[1]-A*(.028+_*.01)}),l.position.x=A*.14,l.position.y=.1-R*.06,l.lookAt(0,0,0),i.render(r,l),v=requestAnimationFrame(x)};return p(),window.addEventListener("resize",p),v=requestAnimationFrame(x),()=>{window.removeEventListener("resize",p),cancelAnimationFrame(v),i.dispose(),m.forEach(S=>S.geometry.dispose())}},[]),W.jsx("canvas",{ref:o,className:"terrain-canvas","data-webgl":!0,"aria-hidden":"true"})}function Cb({activeSection:o,onSection:e}){return W.jsxs("header",{className:"site-header",children:[W.jsxs("button",{className:"brand",type:"button",onClick:()=>e("home"),"aria-label":"返回首页",children:[W.jsx("img",{className:"brand-seal",src:"./assets/img/ruiyi-seal.png",alt:"","aria-hidden":"true"}),W.jsxs("span",{className:"brand-text",children:[W.jsx("strong",{children:"瑞意设计"}),W.jsx("small",{children:"Ruiyi Design"})]})]}),W.jsx("nav",{className:"pill-nav","aria-label":"主导航",children:F0.map(i=>W.jsxs("button",{type:"button",className:o===i.id?"is-active":"",onClick:()=>e(i.id),children:[W.jsx("span",{children:i.label}),W.jsx("small",{children:i.sub})]},i.id))})]})}function wb({onSection:o,onOpenProject:e}){return W.jsxs("section",{className:"hero-section",children:[W.jsxs("div",{className:"hero-copy",children:[W.jsx("p",{className:"eyebrow",children:"RUIYI DESIGN / INTERIOR & DELIVERY"}),W.jsx("p",{className:"hero-kicker",children:"瑞意设计"}),W.jsx("h1",{children:"Ruiyi Design"}),W.jsx("p",{className:"hero-subtitle",children:"先把空间想清楚，再开始做。"}),W.jsx("p",{className:"hero-note",children:"私宅住宅设计与装修落地 / 酒店、商业与办公空间设计"}),W.jsxs("button",{className:"scroll-cue",type:"button",onClick:()=>o("works"),children:[W.jsx(gb,{size:18}),W.jsx("span",{children:"进入作品"})]})]}),W.jsx("div",{className:"hero-project-rail","aria-label":"精选项目",children:vd.map((i,r)=>W.jsxs("button",{type:"button",style:{"--i":r},onClick:()=>e(i.id),children:[W.jsx("img",{src:i.cover,alt:""}),W.jsx("span",{children:String(r+1).padStart(2,"0")}),W.jsx("strong",{children:i.title})]},i.id))})]})}function Db({onOpenProject:o}){return W.jsxs("section",{className:"chapter chapter-works",children:[W.jsxs("div",{className:"chapter-heading",children:[W.jsx("p",{className:"eyebrow",children:"SELECTED WORKS"}),W.jsx("h2",{children:"精选空间"}),W.jsx("p",{children:"从私宅日常到酒店商业，每个项目先解决空间关系，再表达最终结果。"})]}),W.jsx("div",{className:"works-list",children:vd.map((e,i)=>W.jsxs("button",{className:"work-row",type:"button",style:{"--i":i},onClick:()=>o(e.id),children:[W.jsxs("span",{children:[String(i+1).padStart(2,"0")," / ",e.type.replace("空间","").toUpperCase()]}),W.jsx("strong",{children:e.title}),W.jsx("em",{children:e.meta}),W.jsx("small",{children:e.insight}),W.jsx("img",{src:e.cover,alt:""})]},e.id))})]})}function Ub({onOpenProject:o}){return W.jsx("section",{className:"chapter chapter-journal",children:W.jsxs("div",{className:"journal-shell",children:[W.jsxs("div",{className:"journal-heading",children:[W.jsx("p",{className:"eyebrow",children:"RUIYI JOURNAL"}),W.jsx("h2",{children:"设计志"}),W.jsx("p",{children:"点击项目直接在网站看完整图片；设计说明按需展开，不打断浏览。"})]}),W.jsx("div",{className:"journal-list",children:H0.map((e,i)=>W.jsxs("button",{className:"journal-item",type:"button",style:{"--i":i},onClick:()=>o(G0[i].id),children:[W.jsxs("div",{className:"journal-copy",children:[W.jsxs("span",{children:[String(i+1).padStart(2,"0")," / ",e.tag," / ",e.category]}),W.jsx("h3",{children:e.title}),W.jsx("p",{children:e.summary})]}),W.jsxs("div",{className:"journal-media",children:[W.jsx("img",{src:e.cover,alt:"",loading:"lazy"}),W.jsx(I0,{size:16,"aria-hidden":"true"})]})]},e.title))})]})})}function Lb(){return W.jsx("section",{className:"chapter chapter-studio",children:W.jsxs("div",{className:"studio-panel",children:[W.jsx("p",{className:"eyebrow",children:"STUDIO LOGIC"}),W.jsx("h2",{children:"先设计，后施工。"}),W.jsx("p",{children:"瑞意设计，是符程瑞在河南省漯河市长期经营的室内设计与装修落地品牌。 以私宅住宅为主要服务方向，也承接酒店、商业、办公与庭院空间。"}),W.jsx("p",{children:"设计不是把房子变漂亮这么简单。设计是帮助客户提前做判断、做选择、做取舍。 前期越清楚，后期越稳定。"}),W.jsxs("div",{className:"logic-lines",children:[W.jsx("span",{children:"生活方式"}),W.jsx("span",{children:"功能规划"}),W.jsx("span",{children:"预算边界"}),W.jsx("span",{children:"落地逻辑"})]}),W.jsxs("div",{className:"fit-list",children:[W.jsx("strong",{children:"适合项目"}),W.jsx("span",{children:"私宅住宅"}),W.jsx("span",{children:"改善型住宅"}),W.jsx("span",{children:"大平层"}),W.jsx("span",{children:"别墅大宅"}),W.jsx("span",{children:"酒店商业"}),W.jsx("span",{children:"办公庭院"})]})]})})}function Nb(){const o=[["01","现场量房与概念方案","梳理需求、功能与空间方向"],["02","主要空间效果图","提前看见材质、光线与空间关系"],["03","设计范围内施工图","把确认后的方案转成施工依据"],["04","关键节点交底","不少于5次：开工、水电、木作、瓦工与安装"],["05","选材与落地配合","服务期内跟进设计结果的实现"]],e=[["01","确认合作","支付1000元设计诚意金，可抵设计费"],["02","确定概念方向","支付设计费的50%"],["03","确认效果图","支付剩余50%，进入施工图与交底"]];return W.jsxs("section",{className:"chapter chapter-pricing",children:[W.jsxs("div",{className:"chapter-heading",children:[W.jsx("p",{className:"eyebrow",children:"SERVICE"}),W.jsxs("h2",{children:[W.jsx("span",{children:"住宅设计，"}),W.jsx("span",{children:"250元/㎡。"})]}),W.jsx("p",{children:"价格只是入口。交付什么、何时付款、服务到哪里，都在合作前讲清楚。"})]}),W.jsxs("div",{className:"pricing-system",children:[W.jsxs("div",{className:"pricing-primary",children:[W.jsxs("div",{className:"pricing-rate",children:[W.jsx("span",{children:"住宅设计基础收费"}),W.jsxs("div",{className:"pricing-value",children:[W.jsx("strong",{children:"250"}),W.jsx("em",{children:"元 / ㎡"})]}),W.jsxs("p",{children:["按双方确认的设计面积计费",W.jsx("br",{}),"设计服务周期 6 个月"]})]}),W.jsxs("div",{className:"pricing-includes",children:[W.jsx("p",{className:"pricing-label",children:"本费用包含"}),W.jsx("div",{className:"pricing-scope",children:o.map(([i,r,l],u)=>W.jsxs("div",{style:{"--i":u},children:[W.jsx("span",{children:i}),W.jsxs("p",{children:[W.jsx("strong",{children:r}),W.jsx("small",{children:l})]})]},r))})]})]}),W.jsx("div",{className:"pricing-process","aria-label":"设计费付款流程",children:e.map(([i,r,l],u)=>W.jsxs("div",{style:{"--i":u},children:[W.jsx("span",{children:i}),W.jsxs("p",{children:[W.jsx("strong",{children:r}),W.jsx("small",{children:l})]})]},r))}),W.jsxs("div",{className:"pricing-footer",children:[W.jsx("p",{children:"前期沟通免费。异地差旅、超过6个月的服务及设计范围外增项另行核算；酒店、商业、办公项目按业态与交付深度单独核定，最终以合同为准。"}),W.jsxs("a",{href:"tel:13137553377",children:[W.jsx("span",{children:"沟通项目报价"}),W.jsx(B0,{size:17})]})]})]})]})}function Ob(){return W.jsx("section",{className:"chapter chapter-contact",children:W.jsxs("div",{className:"contact-panel",children:[W.jsx("p",{className:"eyebrow",children:"CONTACT"}),W.jsx("h2",{children:"先把问题说清楚，再谈方案。"}),W.jsx("p",{children:"发现场照片、面积、预算边界、想解决的问题。我们先判断空间是否值得做，再进入设计沟通。"}),W.jsxs("div",{className:"contact-grid",children:[W.jsxs("div",{children:[W.jsx("span",{children:"PHONE"}),W.jsx("strong",{children:"131 3755 3377"})]}),W.jsxs("div",{children:[W.jsx("span",{children:"ADDRESS"}),W.jsx("strong",{children:"河南省漯河市源汇区盛鑫红场8号楼5层"})]}),W.jsxs("div",{className:"qr-box",children:[W.jsx("img",{src:"./assets/img/contact-qr.jpg",alt:"瑞意设计微信公众号二维码"}),W.jsx("span",{children:"瑞意设计RUIYI"})]})]}),W.jsxs("a",{className:"contact-button",href:"tel:13137553377",children:[W.jsx(Sb,{size:18}),W.jsx("span",{children:"开始沟通项目"})]})]})})}function Pb({project:o,onClose:e}){const[i,r]=Ke.useState(0),[l,u]=Ke.useState(!1),h=Ke.useRef(0),d=Ke.useRef(!1);if(Ke.useEffect(()=>{r(0),u(!1)},[o==null?void 0:o.id]),Ke.useEffect(()=>{if(!o)return;const R=document.body.style.overflow,y=document.documentElement.style.overflow;return document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",()=>{document.body.style.overflow=R,document.documentElement.style.overflow=y}},[o]),Ke.useEffect(()=>{if(!o)return;const R=y=>{y.key==="Escape"&&(l?u(!1):e()),(y.key==="ArrowRight"||y.key==="ArrowDown")&&r(_=>(_+1)%o.images.length),(y.key==="ArrowLeft"||y.key==="ArrowUp")&&r(_=>(_-1+o.images.length)%o.images.length)};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[e,o,l]),Ke.useEffect(()=>{var y;if(!((y=o==null?void 0:o.images)!=null&&y.length))return;[o.images[(i+1)%o.images.length],o.images[(i-1+o.images.length)%o.images.length]].forEach(_=>{const B=new Image;B.src=_})},[i,o]),!o)return null;const m=o.images[i],p=new URL(m,document.baseURI).href,v=()=>r(R=>(R-1+o.images.length)%o.images.length),x=()=>r(R=>(R+1)%o.images.length),S=R=>{l||d.current||Math.abs(R.deltaY)<80||(d.current=!0,R.deltaY>0?x():v(),window.setTimeout(()=>{d.current=!1},520))},M=R=>{var y;h.current=((y=R.changedTouches[0])==null?void 0:y.clientX)||0},A=R=>{var B;const _=(((B=R.changedTouches[0])==null?void 0:B.clientX)||0)-h.current;Math.abs(_)<45||(_<0?x():v())};return W.jsxs("div",{className:`project-viewer${l?" notes-open":""}`,style:{"--project-bg":`url("${p}")`},onWheel:S,children:[W.jsx("button",{className:"close-button",type:"button",onClick:e,"aria-label":"关闭项目",children:W.jsx(yb,{size:28})}),W.jsxs("div",{className:"project-meta",children:[W.jsx("p",{children:o.type}),W.jsx("h2",{children:o.title}),W.jsx("small",{children:o.meta})]}),W.jsxs("div",{className:"viewer-mode",role:"group","aria-label":"项目浏览模式",children:[W.jsxs("button",{type:"button",className:l?"":"is-active",onClick:()=>u(!1),children:[W.jsx(I0,{size:16}),W.jsx("span",{children:"图片"})]}),W.jsxs("button",{type:"button",className:l?"is-active":"",onClick:()=>u(!0),children:[W.jsx(xb,{size:16}),W.jsx("span",{children:"设计说明"})]})]}),l&&W.jsxs("aside",{className:"project-notes","aria-label":"项目设计说明",children:[W.jsx("p",{className:"eyebrow",children:"DESIGN NOTES"}),W.jsx("h3",{children:"设计说明"}),W.jsx("p",{children:o.insight}),o.expression&&W.jsx("p",{children:o.expression}),W.jsxs("dl",{children:[W.jsxs("div",{children:[W.jsx("dt",{children:"项目信息"}),W.jsx("dd",{children:o.meta})]}),W.jsxs("div",{children:[W.jsx("dt",{children:"合作方式"}),W.jsx("dd",{children:o.delivery})]})]}),o.articleUrl&&W.jsxs("a",{href:o.articleUrl,target:"_blank",rel:"noreferrer",children:["查看公众号原文 ",W.jsx(B0,{size:14})]})]}),W.jsx("button",{className:"gallery-arrow left",type:"button",onClick:v,"aria-label":"上一张",children:W.jsx(_b,{size:24})}),W.jsx("figure",{className:"project-frame",onTouchStart:M,onTouchEnd:A,children:W.jsx("img",{src:m,alt:`${o.title} ${i+1}`,decoding:"async"},m)}),W.jsx("button",{className:"gallery-arrow right",type:"button",onClick:x,"aria-label":"下一张",children:W.jsx(vb,{size:24})}),W.jsxs("div",{className:"gallery-counter",children:[String(i+1).padStart(2,"0")," / ",String(o.images.length).padStart(2,"0")]})]})}function zb(){const[o,e]=Ke.useState("home"),[i,r]=Ke.useState(null),l=Ke.useRef(!1);Ab();const u=Ke.useMemo(()=>bb.find(h=>h.id===i)||null,[i]);return Ke.useEffect(()=>{const h=d=>{if(i||l.current||Math.abs(d.deltaY)<80)return;const m=vh.indexOf(o),p=d.deltaY>0?Math.min(m+1,vh.length-1):Math.max(m-1,0);p!==m&&(l.current=!0,e(vh[p]),window.setTimeout(()=>{l.current=!1},900))};return window.addEventListener("wheel",h,{passive:!0}),()=>window.removeEventListener("wheel",h)},[i,o]),W.jsxs("div",{className:`app-shell section-${o}`,children:[W.jsx("div",{className:"space-bg","aria-hidden":"true",children:W.jsx("img",{src:"./assets/img/changshen-01.webp",alt:""})}),W.jsx(Rb,{}),W.jsx(Cb,{activeSection:o,onSection:e}),W.jsxs("main",{children:[o==="home"&&W.jsx(wb,{onSection:e,onOpenProject:r}),o==="works"&&W.jsx(Db,{onOpenProject:r}),o==="journal"&&W.jsx(Ub,{onOpenProject:r}),o==="studio"&&W.jsx(Lb,{}),o==="pricing"&&W.jsx(Nb,{}),o==="contact"&&W.jsx(Ob,{})]}),W.jsx(Pb,{project:u,onClose:()=>r(null)})]})}nS.createRoot(document.getElementById("root")).render(W.jsx(Ke.StrictMode,{children:W.jsx(zb,{})}));
