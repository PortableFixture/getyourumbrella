var qq=Object.defineProperty;var Hq=e=>{throw TypeError(e)};var rbe=(e,t,n)=>t in e?qq(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var a=(e,t)=>qq(e,"name",{value:t,configurable:!0});var oI=(e,t,n)=>rbe(e,typeof t!="symbol"?t+"":t,n),lI=(e,t,n)=>t.has(e)||Hq("Cannot "+n);var xe=(e,t,n)=>(lI(e,t,"read from private field"),n?n.call(e):t.get(e)),on=(e,t,n)=>t.has(e)?Hq("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Lt=(e,t,n,r)=>(lI(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Hn=(e,t,n)=>(lI(e,t,"access private method"),n);var GA=(e,t,n,r)=>({set _(i){Lt(e,t,i,n)},get _(){return xe(e,t,r)}});function abe(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:a(()=>r[i],"get")})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}a(abe,"_mergeNamespaces");a(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}a(n,"getFetchOpts");function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}a(r,"processPreload")},"polyfill")();var Dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Er(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}a(Er,"getDefaultExportFromCjs");function ibe(e){if(Object.prototype.hasOwnProperty.call(e,"__esModule"))return e;var t=e.default;if(typeof t=="function"){var n=a(function r(){var i=!1;try{i=this instanceof r}catch{}return i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)},"a");n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:a(function(){return e[r]},"get")})}),n}a(ibe,"getAugmentedNamespace");var cI={exports:{}},v1={};var Vq;function sbe(){if(Vq)return v1;Vq=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,i,s){var o=null;if(s!==void 0&&(o=""+s),i.key!==void 0&&(o=""+i.key),"key"in i){s={};for(var c in i)c!=="key"&&(s[c]=i[c])}else s=i;return i=s.ref,{$$typeof:e,type:r,key:o,ref:i!==void 0?i:null,props:s}}return a(n,"jsxProd"),v1.Fragment=t,v1.jsx=n,v1.jsxs=n,v1}a(sbe,"requireReactJsxRuntime_production");var Wq;function obe(){return Wq||(Wq=1,cI.exports=sbe()),cI.exports}a(obe,"requireJsxRuntime");var l=obe(),uI={exports:{}},Vn={};var Gq;function lbe(){if(Gq)return Vn;Gq=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),o=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.iterator;function g(G){return G===null||typeof G!="object"?null:(G=m&&G[m]||G["@@iterator"],typeof G=="function"?G:null)}a(g,"getIteratorFn");var b={isMounted:a(function(){return!1},"isMounted"),enqueueForceUpdate:a(function(){},"enqueueForceUpdate"),enqueueReplaceState:a(function(){},"enqueueReplaceState"),enqueueSetState:a(function(){},"enqueueSetState")},w=Object.assign,_={};function E(G,ee,Z){this.props=G,this.context=ee,this.refs=_,this.updater=Z||b}a(E,"Component"),E.prototype.isReactComponent={},E.prototype.setState=function(G,ee){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,ee,"setState")},E.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function R(){}a(R,"ComponentDummy"),R.prototype=E.prototype;function j(G,ee,Z){this.props=G,this.context=ee,this.refs=_,this.updater=Z||b}a(j,"PureComponent");var A=j.prototype=new R;A.constructor=j,w(A,E.prototype),A.isPureReactComponent=!0;var T=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function P(G,ee,Z,J,ie,oe){return Z=oe.ref,{$$typeof:e,type:G,key:ee,ref:Z!==void 0?Z:null,props:oe}}a(P,"ReactElement");function k(G,ee){return P(G.type,ee,void 0,void 0,void 0,G.props)}a(k,"cloneAndReplaceKey");function M(G){return typeof G=="object"&&G!==null&&G.$$typeof===e}a(M,"isValidElement");function $(G){var ee={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(Z){return ee[Z]})}a($,"escape");var F=/\/+/g;function U(G,ee){return typeof G=="object"&&G!==null&&G.key!=null?$(""+G.key):ee.toString(36)}a(U,"getElementKey");function z(){}a(z,"noop$1");function W(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(z,z):(G.status="pending",G.then(function(ee){G.status==="pending"&&(G.status="fulfilled",G.value=ee)},function(ee){G.status==="pending"&&(G.status="rejected",G.reason=ee)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}a(W,"resolveThenable");function q(G,ee,Z,J,ie){var oe=typeof G;(oe==="undefined"||oe==="boolean")&&(G=null);var de=!1;if(G===null)de=!0;else switch(oe){case"bigint":case"string":case"number":de=!0;break;case"object":switch(G.$$typeof){case e:case t:de=!0;break;case h:return de=G._init,q(de(G._payload),ee,Z,J,ie)}}if(de)return ie=ie(G),de=J===""?"."+U(G,0):J,T(ie)?(Z="",de!=null&&(Z=de.replace(F,"$&/")+"/"),q(ie,ee,Z,"",function(fe){return fe})):ie!=null&&(M(ie)&&(ie=k(ie,Z+(ie.key==null||G&&G.key===ie.key?"":(""+ie.key).replace(F,"$&/")+"/")+de)),ee.push(ie)),1;de=0;var ue=J===""?".":J+":";if(T(G))for(var we=0;we<G.length;we++)J=G[we],oe=ue+U(J,we),de+=q(J,ee,Z,oe,ie);else if(we=g(G),typeof we=="function")for(G=we.call(G),we=0;!(J=G.next()).done;)J=J.value,oe=ue+U(J,we++),de+=q(J,ee,Z,oe,ie);else if(oe==="object"){if(typeof G.then=="function")return q(W(G),ee,Z,J,ie);throw ee=String(G),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return de}a(q,"mapIntoArray");function V(G,ee,Z){if(G==null)return G;var J=[],ie=0;return q(G,J,"","",function(oe){return ee.call(Z,oe,ie++)}),J}a(V,"mapChildren");function H(G){if(G._status===-1){var ee=G._result;ee=ee(),ee.then(function(Z){(G._status===0||G._status===-1)&&(G._status=1,G._result=Z)},function(Z){(G._status===0||G._status===-1)&&(G._status=2,G._result=Z)}),G._status===-1&&(G._status=0,G._result=ee)}if(G._status===1)return G._result.default;throw G._result}a(H,"lazyInitializer");var Y=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)};function K(){}return a(K,"noop"),Vn.Children={map:V,forEach:a(function(G,ee,Z){V(G,function(){ee.apply(this,arguments)},Z)},"forEach"),count:a(function(G){var ee=0;return V(G,function(){ee++}),ee},"count"),toArray:a(function(G){return V(G,function(ee){return ee})||[]},"toArray"),only:a(function(G){if(!M(G))throw Error("React.Children.only expected to receive a single React element child.");return G},"only")},Vn.Component=E,Vn.Fragment=n,Vn.Profiler=i,Vn.PureComponent=j,Vn.StrictMode=r,Vn.Suspense=u,Vn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,Vn.__COMPILER_RUNTIME={__proto__:null,c:a(function(G){return D.H.useMemoCache(G)},"c")},Vn.cache=function(G){return function(){return G.apply(null,arguments)}},Vn.cloneElement=function(G,ee,Z){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var J=w({},G.props),ie=G.key,oe=void 0;if(ee!=null)for(de in ee.ref!==void 0&&(oe=void 0),ee.key!==void 0&&(ie=""+ee.key),ee)!O.call(ee,de)||de==="key"||de==="__self"||de==="__source"||de==="ref"&&ee.ref===void 0||(J[de]=ee[de]);var de=arguments.length-2;if(de===1)J.children=Z;else if(1<de){for(var ue=Array(de),we=0;we<de;we++)ue[we]=arguments[we+2];J.children=ue}return P(G.type,ie,void 0,void 0,oe,J)},Vn.createContext=function(G){return G={$$typeof:o,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:s,_context:G},G},Vn.createElement=function(G,ee,Z){var J,ie={},oe=null;if(ee!=null)for(J in ee.key!==void 0&&(oe=""+ee.key),ee)O.call(ee,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(ie[J]=ee[J]);var de=arguments.length-2;if(de===1)ie.children=Z;else if(1<de){for(var ue=Array(de),we=0;we<de;we++)ue[we]=arguments[we+2];ie.children=ue}if(G&&G.defaultProps)for(J in de=G.defaultProps,de)ie[J]===void 0&&(ie[J]=de[J]);return P(G,oe,void 0,void 0,null,ie)},Vn.createRef=function(){return{current:null}},Vn.forwardRef=function(G){return{$$typeof:c,render:G}},Vn.isValidElement=M,Vn.lazy=function(G){return{$$typeof:h,_payload:{_status:-1,_result:G},_init:H}},Vn.memo=function(G,ee){return{$$typeof:f,type:G,compare:ee===void 0?null:ee}},Vn.startTransition=function(G){var ee=D.T,Z={};D.T=Z;try{var J=G(),ie=D.S;ie!==null&&ie(Z,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(K,Y)}catch(oe){Y(oe)}finally{D.T=ee}},Vn.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},Vn.use=function(G){return D.H.use(G)},Vn.useActionState=function(G,ee,Z){return D.H.useActionState(G,ee,Z)},Vn.useCallback=function(G,ee){return D.H.useCallback(G,ee)},Vn.useContext=function(G){return D.H.useContext(G)},Vn.useDebugValue=function(){},Vn.useDeferredValue=function(G,ee){return D.H.useDeferredValue(G,ee)},Vn.useEffect=function(G,ee,Z){var J=D.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(G,ee)},Vn.useId=function(){return D.H.useId()},Vn.useImperativeHandle=function(G,ee,Z){return D.H.useImperativeHandle(G,ee,Z)},Vn.useInsertionEffect=function(G,ee){return D.H.useInsertionEffect(G,ee)},Vn.useLayoutEffect=function(G,ee){return D.H.useLayoutEffect(G,ee)},Vn.useMemo=function(G,ee){return D.H.useMemo(G,ee)},Vn.useOptimistic=function(G,ee){return D.H.useOptimistic(G,ee)},Vn.useReducer=function(G,ee,Z){return D.H.useReducer(G,ee,Z)},Vn.useRef=function(G){return D.H.useRef(G)},Vn.useState=function(G){return D.H.useState(G)},Vn.useSyncExternalStore=function(G,ee,Z){return D.H.useSyncExternalStore(G,ee,Z)},Vn.useTransition=function(){return D.H.useTransition()},Vn.version="19.1.1",Vn}a(lbe,"requireReact_production");var Yq;function $2(){return Yq||(Yq=1,uI.exports=lbe()),uI.exports}a($2,"requireReact");var x=$2();const me=Er(x),XS=abe({__proto__:null,default:me},[x]);var dI={exports:{}},y1={},fI={exports:{}},hI={};var Kq;function cbe(){return Kq||(Kq=1,(function(e){function t(V,H){var Y=V.length;V.push(H);e:for(;0<Y;){var K=Y-1>>>1,G=V[K];if(0<i(G,H))V[K]=H,V[Y]=G,Y=K;else break e}}a(t,"push");function n(V){return V.length===0?null:V[0]}a(n,"peek");function r(V){if(V.length===0)return null;var H=V[0],Y=V.pop();if(Y!==H){V[0]=Y;e:for(var K=0,G=V.length,ee=G>>>1;K<ee;){var Z=2*(K+1)-1,J=V[Z],ie=Z+1,oe=V[ie];if(0>i(J,Y))ie<G&&0>i(oe,J)?(V[K]=oe,V[ie]=Y,K=ie):(V[K]=J,V[Z]=Y,K=Z);else if(ie<G&&0>i(oe,Y))V[K]=oe,V[ie]=Y,K=ie;else break e}}return H}a(r,"pop");function i(V,H){var Y=V.sortIndex-H.sortIndex;return Y!==0?Y:V.id-H.id}if(a(i,"compare"),e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var u=[],f=[],h=1,m=null,g=3,b=!1,w=!1,_=!1,E=!1,R=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function T(V){for(var H=n(f);H!==null;){if(H.callback===null)r(f);else if(H.startTime<=V)r(f),H.sortIndex=H.expirationTime,t(u,H);else break;H=n(f)}}a(T,"advanceTimers");function D(V){if(_=!1,T(V),!w)if(n(u)!==null)w=!0,O||(O=!0,U());else{var H=n(f);H!==null&&q(D,H.startTime-V)}}a(D,"handleTimeout");var O=!1,P=-1,k=5,M=-1;function $(){return E?!0:!(e.unstable_now()-M<k)}a($,"shouldYieldToHost");function F(){if(E=!1,O){var V=e.unstable_now();M=V;var H=!0;try{e:{w=!1,_&&(_=!1,j(P),P=-1),b=!0;var Y=g;try{t:{for(T(V),m=n(u);m!==null&&!(m.expirationTime>V&&$());){var K=m.callback;if(typeof K=="function"){m.callback=null,g=m.priorityLevel;var G=K(m.expirationTime<=V);if(V=e.unstable_now(),typeof G=="function"){m.callback=G,T(V),H=!0;break t}m===n(u)&&r(u),T(V)}else r(u);m=n(u)}if(m!==null)H=!0;else{var ee=n(f);ee!==null&&q(D,ee.startTime-V),H=!1}}break e}finally{m=null,g=Y,b=!1}H=void 0}}finally{H?U():O=!1}}}a(F,"performWorkUntilDeadline");var U;if(typeof A=="function")U=a(function(){A(F)},"schedulePerformWorkUntilDeadline");else if(typeof MessageChannel<"u"){var z=new MessageChannel,W=z.port2;z.port1.onmessage=F,U=a(function(){W.postMessage(null)},"schedulePerformWorkUntilDeadline")}else U=a(function(){R(F,0)},"schedulePerformWorkUntilDeadline");function q(V,H){P=R(function(){V(e.unstable_now())},H)}a(q,"requestHostTimeout"),e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(V){V.callback=null},e.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<V?Math.floor(1e3/V):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_next=function(V){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var Y=g;g=H;try{return V()}finally{g=Y}},e.unstable_requestPaint=function(){E=!0},e.unstable_runWithPriority=function(V,H){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Y=g;g=V;try{return H()}finally{g=Y}},e.unstable_scheduleCallback=function(V,H,Y){var K=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?K+Y:K):Y=K,V){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=Y+G,V={id:h++,callback:H,priorityLevel:V,startTime:Y,expirationTime:G,sortIndex:-1},Y>K?(V.sortIndex=Y,t(f,V),n(u)===null&&V===n(f)&&(_?(j(P),P=-1):_=!0,q(D,Y-K))):(V.sortIndex=G,t(u,V),w||b||(w=!0,O||(O=!0,U()))),V},e.unstable_shouldYield=$,e.unstable_wrapCallback=function(V){var H=g;return function(){var Y=g;g=H;try{return V.apply(this,arguments)}finally{g=Y}}}})(hI)),hI}a(cbe,"requireScheduler_production");var Xq;function ube(){return Xq||(Xq=1,fI.exports=cbe()),fI.exports}a(ube,"requireScheduler");var pI={exports:{}},hs={};var Qq;function dbe(){if(Qq)return hs;Qq=1;var e=$2();function t(u){var f="https://react.dev/errors/"+u;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var h=2;h<arguments.length;h++)f+="&args[]="+encodeURIComponent(arguments[h])}return"Minified React error #"+u+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}a(t,"formatProdErrorMessage");function n(){}a(n,"noop");var r={d:{f:n,r:a(function(){throw Error(t(522))},"r"),D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},i=Symbol.for("react.portal");function s(u,f,h){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:m==null?null:""+m,children:u,containerInfo:f,implementation:h}}a(s,"createPortal$1");var o=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(u,f){if(u==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return a(c,"getCrossOriginStringAs"),hs.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,hs.createPortal=function(u,f){var h=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(t(299));return s(u,f,null,h)},hs.flushSync=function(u){var f=o.T,h=r.p;try{if(o.T=null,r.p=2,u)return u()}finally{o.T=f,r.p=h,r.d.f()}},hs.preconnect=function(u,f){typeof u=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,r.d.C(u,f))},hs.prefetchDNS=function(u){typeof u=="string"&&r.d.D(u)},hs.preinit=function(u,f){if(typeof u=="string"&&f&&typeof f.as=="string"){var h=f.as,m=c(h,f.crossOrigin),g=typeof f.integrity=="string"?f.integrity:void 0,b=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;h==="style"?r.d.S(u,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:m,integrity:g,fetchPriority:b}):h==="script"&&r.d.X(u,{crossOrigin:m,integrity:g,fetchPriority:b,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},hs.preinitModule=function(u,f){if(typeof u=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var h=c(f.as,f.crossOrigin);r.d.M(u,{crossOrigin:h,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&r.d.M(u)},hs.preload=function(u,f){if(typeof u=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var h=f.as,m=c(h,f.crossOrigin);r.d.L(u,h,{crossOrigin:m,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},hs.preloadModule=function(u,f){if(typeof u=="string")if(f){var h=c(f.as,f.crossOrigin);r.d.m(u,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:h,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else r.d.m(u)},hs.requestFormReset=function(u){r.d.r(u)},hs.unstable_batchedUpdates=function(u,f){return u(f)},hs.useFormState=function(u,f,h){return o.H.useFormState(u,f,h)},hs.useFormStatus=function(){return o.H.useHostTransitionStatus()},hs.version="19.1.1",hs}a(dbe,"requireReactDom_production");var Jq;function wne(){if(Jq)return pI.exports;Jq=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return a(e,"checkDCE"),e(),pI.exports=dbe(),pI.exports}a(wne,"requireReactDom");var Zq;function fbe(){if(Zq)return y1;Zq=1;var e=ube(),t=$2(),n=wne();function r(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}a(r,"formatProdErrorMessage");function i(d){return!(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)}a(i,"isValidContainer");function s(d){var p=d,v=d;if(d.alternate)for(;p.return;)p=p.return;else{d=p;do p=d,(p.flags&4098)!==0&&(v=p.return),d=p.return;while(d)}return p.tag===3?v:null}a(s,"getNearestMountedFiber");function o(d){if(d.tag===13){var p=d.memoizedState;if(p===null&&(d=d.alternate,d!==null&&(p=d.memoizedState)),p!==null)return p.dehydrated}return null}a(o,"getSuspenseInstanceFromFiber");function c(d){if(s(d)!==d)throw Error(r(188))}a(c,"assertIsMounted");function u(d){var p=d.alternate;if(!p){if(p=s(d),p===null)throw Error(r(188));return p!==d?null:d}for(var v=d,C=p;;){var N=v.return;if(N===null)break;var L=N.alternate;if(L===null){if(C=N.return,C!==null){v=C;continue}break}if(N.child===L.child){for(L=N.child;L;){if(L===v)return c(N),d;if(L===C)return c(N),p;L=L.sibling}throw Error(r(188))}if(v.return!==C.return)v=N,C=L;else{for(var X=!1,ne=N.child;ne;){if(ne===v){X=!0,v=N,C=L;break}if(ne===C){X=!0,C=N,v=L;break}ne=ne.sibling}if(!X){for(ne=L.child;ne;){if(ne===v){X=!0,v=L,C=N;break}if(ne===C){X=!0,C=L,v=N;break}ne=ne.sibling}if(!X)throw Error(r(189))}}if(v.alternate!==C)throw Error(r(190))}if(v.tag!==3)throw Error(r(188));return v.stateNode.current===v?d:p}a(u,"findCurrentFiberUsingSlowPath");function f(d){var p=d.tag;if(p===5||p===26||p===27||p===6)return d;for(d=d.child;d!==null;){if(p=f(d),p!==null)return p;d=d.sibling}return null}a(f,"findCurrentHostFiberImpl");var h=Object.assign,m=Symbol.for("react.element"),g=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),j=Symbol.for("react.consumer"),A=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),$=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function U(d){return d===null||typeof d!="object"?null:(d=F&&d[F]||d["@@iterator"],typeof d=="function"?d:null)}a(U,"getIteratorFn");var z=Symbol.for("react.client.reference");function W(d){if(d==null)return null;if(typeof d=="function")return d.$$typeof===z?null:d.displayName||d.name||null;if(typeof d=="string")return d;switch(d){case w:return"Fragment";case E:return"Profiler";case _:return"StrictMode";case D:return"Suspense";case O:return"SuspenseList";case M:return"Activity"}if(typeof d=="object")switch(d.$$typeof){case b:return"Portal";case A:return(d.displayName||"Context")+".Provider";case j:return(d._context.displayName||"Context")+".Consumer";case T:var p=d.render;return d=d.displayName,d||(d=p.displayName||p.name||"",d=d!==""?"ForwardRef("+d+")":"ForwardRef"),d;case P:return p=d.displayName||null,p!==null?p:W(d.type)||"Memo";case k:p=d._payload,d=d._init;try{return W(d(p))}catch{}}return null}a(W,"getComponentNameFromType");var q=Array.isArray,V=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},K=[],G=-1;function ee(d){return{current:d}}a(ee,"createCursor");function Z(d){0>G||(d.current=K[G],K[G]=null,G--)}a(Z,"pop");function J(d,p){G++,K[G]=d.current,d.current=p}a(J,"push");var ie=ee(null),oe=ee(null),de=ee(null),ue=ee(null);function we(d,p){switch(J(de,p),J(oe,d),J(ie,null),p.nodeType){case 9:case 11:d=(d=p.documentElement)&&(d=d.namespaceURI)?Vm(d):0;break;default:if(d=p.tagName,p=p.namespaceURI)p=Vm(p),d=na(p,d);else switch(d){case"svg":d=1;break;case"math":d=2;break;default:d=0}}Z(ie),J(ie,d)}a(we,"pushHostContainer");function fe(){Z(ie),Z(oe),Z(de)}a(fe,"popHostContainer");function pe(d){d.memoizedState!==null&&J(ue,d);var p=ie.current,v=na(p,d.type);p!==v&&(J(oe,d),J(ie,v))}a(pe,"pushHostContext");function Se(d){oe.current===d&&(Z(ie),Z(oe)),ue.current===d&&(Z(ue),Jm._currentValue=Y)}a(Se,"popHostContext");var ve=Object.prototype.hasOwnProperty,$e=e.unstable_scheduleCallback,De=e.unstable_cancelCallback,ke=e.unstable_shouldYield,Xe=e.unstable_requestPaint,We=e.unstable_now,et=e.unstable_getCurrentPriorityLevel,bt=e.unstable_ImmediatePriority,Dt=e.unstable_UserBlockingPriority,Rt=e.unstable_NormalPriority,xt=e.unstable_LowPriority,Pt=e.unstable_IdlePriority,Jt=e.log,Qe=e.unstable_setDisableYieldValue,Ke=null,re=null;function he(d){if(typeof Jt=="function"&&Qe(d),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(Ke,d)}catch{}}a(he,"setIsStrictModeForDevtools");var ge=Math.clz32?Math.clz32:Je,ze=Math.log,Ze=Math.LN2;function Je(d){return d>>>=0,d===0?32:31-(ze(d)/Ze|0)|0}a(Je,"clz32Fallback");var Ve=256,Ge=4194304;function st(d){var p=d&42;if(p!==0)return p;switch(d&-d){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return d&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return d&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return d}}a(st,"getHighestPriorityLanes");function _e(d,p,v){var C=d.pendingLanes;if(C===0)return 0;var N=0,L=d.suspendedLanes,X=d.pingedLanes;d=d.warmLanes;var ne=C&134217727;return ne!==0?(C=ne&~L,C!==0?N=st(C):(X&=ne,X!==0?N=st(X):v||(v=ne&~d,v!==0&&(N=st(v))))):(ne=C&~L,ne!==0?N=st(ne):X!==0?N=st(X):v||(v=C&~d,v!==0&&(N=st(v)))),N===0?0:p!==0&&p!==N&&(p&L)===0&&(L=N&-N,v=p&-p,L>=v||L===32&&(v&4194048)!==0)?p:N}a(_e,"getNextLanes");function je(d,p){return(d.pendingLanes&~(d.suspendedLanes&~d.pingedLanes)&p)===0}a(je,"checkIfRootIsPrerendering");function jt(d,p){switch(d){case 1:case 2:case 4:case 8:case 64:return p+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return p+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}a(jt,"computeExpirationTime");function rt(){var d=Ve;return Ve<<=1,(Ve&4194048)===0&&(Ve=256),d}a(rt,"claimNextTransitionLane");function St(){var d=Ge;return Ge<<=1,(Ge&62914560)===0&&(Ge=4194304),d}a(St,"claimNextRetryLane");function ht(d){for(var p=[],v=0;31>v;v++)p.push(d);return p}a(ht,"createLaneMap");function Tt(d,p){d.pendingLanes|=p,p!==268435456&&(d.suspendedLanes=0,d.pingedLanes=0,d.warmLanes=0)}a(Tt,"markRootUpdated$1");function Nt(d,p,v,C,N,L){var X=d.pendingLanes;d.pendingLanes=v,d.suspendedLanes=0,d.pingedLanes=0,d.warmLanes=0,d.expiredLanes&=v,d.entangledLanes&=v,d.errorRecoveryDisabledLanes&=v,d.shellSuspendCounter=0;var ne=d.entanglements,be=d.expirationTimes,Fe=d.hiddenUpdates;for(v=X&~v;0<v;){var nt=31-ge(v),ct=1<<nt;ne[nt]=0,be[nt]=-1;var Ue=Fe[nt];if(Ue!==null)for(Fe[nt]=null,nt=0;nt<Ue.length;nt++){var qe=Ue[nt];qe!==null&&(qe.lane&=-536870913)}v&=~ct}C!==0&&Ct(d,C,0),L!==0&&N===0&&d.tag!==0&&(d.suspendedLanes|=L&~(X&~p))}a(Nt,"markRootFinished");function Ct(d,p,v){d.pendingLanes|=p,d.suspendedLanes&=~p;var C=31-ge(p);d.entangledLanes|=p,d.entanglements[C]=d.entanglements[C]|1073741824|v&4194090}a(Ct,"markSpawnedDeferredLane");function Ht(d,p){var v=d.entangledLanes|=p;for(d=d.entanglements;v;){var C=31-ge(v),N=1<<C;N&p|d[C]&p&&(d[C]|=p),v&=~N}}a(Ht,"markRootEntangled");function Vt(d){switch(d){case 2:d=1;break;case 8:d=4;break;case 32:d=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:d=128;break;case 268435456:d=134217728;break;default:d=0}return d}a(Vt,"getBumpedLaneForHydrationByLane");function an(d){return d&=-d,2<d?8<d?(d&134217727)!==0?32:268435456:8:2}a(an,"lanesToEventPriority");function ln(){var d=H.p;return d!==0?d:(d=window.event,d===void 0?32:BA(d.type))}a(ln,"resolveUpdatePriority");function Qt(d,p){var v=H.p;try{return H.p=d,p()}finally{H.p=v}}a(Qt,"runWithPriority");var Wt=Math.random().toString(36).slice(2),nn="__reactFiber$"+Wt,en="__reactProps$"+Wt,ce="__reactContainer$"+Wt,Ee="__reactEvents$"+Wt,Oe="__reactListeners$"+Wt,se="__reactHandles$"+Wt,Pe="__reactResources$"+Wt,mt="__reactMarker$"+Wt;function pt(d){delete d[nn],delete d[en],delete d[Ee],delete d[Oe],delete d[se]}a(pt,"detachDeletedInstance");function wt(d){var p=d[nn];if(p)return p;for(var v=d.parentNode;v;){if(p=v[ce]||v[nn]){if(v=p.alternate,p.child!==null||v!==null&&v.child!==null)for(d=CA(d);d!==null;){if(v=d[nn])return v;d=CA(d)}return p}d=v,v=d.parentNode}return null}a(wt,"getClosestInstanceFromNode");function vt(d){if(d=d[nn]||d[ce]){var p=d.tag;if(p===5||p===6||p===13||p===26||p===27||p===3)return d}return null}a(vt,"getInstanceFromNode");function It(d){var p=d.tag;if(p===5||p===26||p===27||p===6)return d.stateNode;throw Error(r(33))}a(It,"getNodeFromInstance");function Ft(d){var p=d[Pe];return p||(p=d[Pe]={hoistableStyles:new Map,hoistableScripts:new Map}),p}a(Ft,"getResourcesFromRoot");function qt(d){d[mt]=!0}a(qt,"markNodeAsHoistable");var yt=new Set,at={};function le(d,p){Ye(d,p),Ye(d+"Capture",p)}a(le,"registerTwoPhaseEvent");function Ye(d,p){for(at[d]=p,d=0;d<p.length;d++)yt.add(p[d])}a(Ye,"registerDirectEvent");var dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gt={},Fn={};function On(d){return ve.call(Fn,d)?!0:ve.call(Gt,d)?!1:dt.test(d)?Fn[d]=!0:(Gt[d]=!0,!1)}a(On,"isAttributeNameSafe");function hr(d,p,v){if(On(p))if(v===null)d.removeAttribute(p);else{switch(typeof v){case"undefined":case"function":case"symbol":d.removeAttribute(p);return;case"boolean":var C=p.toLowerCase().slice(0,5);if(C!=="data-"&&C!=="aria-"){d.removeAttribute(p);return}}d.setAttribute(p,""+v)}}a(hr,"setValueForAttribute");function xr(d,p,v){if(v===null)d.removeAttribute(p);else{switch(typeof v){case"undefined":case"function":case"symbol":case"boolean":d.removeAttribute(p);return}d.setAttribute(p,""+v)}}a(xr,"setValueForKnownAttribute");function Sr(d,p,v,C){if(C===null)d.removeAttribute(v);else{switch(typeof C){case"undefined":case"function":case"symbol":case"boolean":d.removeAttribute(v);return}d.setAttributeNS(p,v,""+C)}}a(Sr,"setValueForNamespacedAttribute");var Va,Dn;function Ai(d){if(Va===void 0)try{throw Error()}catch(v){var p=v.stack.trim().match(/\n( *(at )?)/);Va=p&&p[1]||"",Dn=-1<v.stack.indexOf(`
    at`)?" (<anonymous>)":-1<v.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Va+d+Dn}a(Ai,"describeBuiltInComponentFrame");var zt=!1;function ts(d,p){if(!d||zt)return"";zt=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var C={DetermineComponentFrameRoot:a(function(){try{if(p){var ct=a(function(){throw Error()},"Fake");if(Object.defineProperty(ct.prototype,"props",{set:a(function(){throw Error()},"set")}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ct,[])}catch(qe){var Ue=qe}Reflect.construct(d,[],ct)}else{try{ct.call()}catch(qe){Ue=qe}d.call(ct.prototype)}}else{try{throw Error()}catch(qe){Ue=qe}(ct=d())&&typeof ct.catch=="function"&&ct.catch(function(){})}}catch(qe){if(qe&&Ue&&typeof qe.stack=="string")return[qe.stack,Ue.stack]}return[null,null]},"DetermineComponentFrameRoot")};C.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var N=Object.getOwnPropertyDescriptor(C.DetermineComponentFrameRoot,"name");N&&N.configurable&&Object.defineProperty(C.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var L=C.DetermineComponentFrameRoot(),X=L[0],ne=L[1];if(X&&ne){var be=X.split(`
`),Fe=ne.split(`
`);for(N=C=0;C<be.length&&!be[C].includes("DetermineComponentFrameRoot");)C++;for(;N<Fe.length&&!Fe[N].includes("DetermineComponentFrameRoot");)N++;if(C===be.length||N===Fe.length)for(C=be.length-1,N=Fe.length-1;1<=C&&0<=N&&be[C]!==Fe[N];)N--;for(;1<=C&&0<=N;C--,N--)if(be[C]!==Fe[N]){if(C!==1||N!==1)do if(C--,N--,0>N||be[C]!==Fe[N]){var nt=`
`+be[C].replace(" at new "," at ");return d.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",d.displayName)),nt}while(1<=C&&0<=N);break}}}finally{zt=!1,Error.prepareStackTrace=v}return(v=d?d.displayName||d.name:"")?Ai(v):""}a(ts,"describeNativeComponentFrame");function Ql(d){switch(d.tag){case 26:case 27:case 5:return Ai(d.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 15:return ts(d.type,!1);case 11:return ts(d.type.render,!1);case 1:return ts(d.type,!0);case 31:return Ai("Activity");default:return""}}a(Ql,"describeFiber");function md(d){try{var p="";do p+=Ql(d),d=d.return;while(d);return p}catch(v){return`
Error generating stack: `+v.message+`
`+v.stack}}a(md,"getStackByFiberInDevAndProd");function xn(d){switch(typeof d){case"bigint":case"boolean":case"number":case"string":case"undefined":return d;case"object":return d;default:return""}}a(xn,"getToStringValue");function ei(d){var p=d.type;return(d=d.nodeName)&&d.toLowerCase()==="input"&&(p==="checkbox"||p==="radio")}a(ei,"isCheckable");function ws(d){var p=ei(d)?"checked":"value",v=Object.getOwnPropertyDescriptor(d.constructor.prototype,p),C=""+d[p];if(!d.hasOwnProperty(p)&&typeof v<"u"&&typeof v.get=="function"&&typeof v.set=="function"){var N=v.get,L=v.set;return Object.defineProperty(d,p,{configurable:!0,get:a(function(){return N.call(this)},"get"),set:a(function(X){C=""+X,L.call(this,X)},"set")}),Object.defineProperty(d,p,{enumerable:v.enumerable}),{getValue:a(function(){return C},"getValue"),setValue:a(function(X){C=""+X},"setValue"),stopTracking:a(function(){d._valueTracker=null,delete d[p]},"stopTracking")}}}a(ws,"trackValueOnNode");function Ri(d){d._valueTracker||(d._valueTracker=ws(d))}a(Ri,"track");function Vp(d){if(!d)return!1;var p=d._valueTracker;if(!p)return!0;var v=p.getValue(),C="";return d&&(C=ei(d)?d.checked?"true":"false":d.value),d=C,d!==v?(p.setValue(d),!0):!1}a(Vp,"updateValueIfChanged");function Jl(d){if(d=d||(typeof document<"u"?document:void 0),typeof d>"u")return null;try{return d.activeElement||d.body}catch{return d.body}}a(Jl,"getActiveElement");var wr=/[\n"\\]/g;function Ca(d){return d.replace(wr,function(p){return"\\"+p.charCodeAt(0).toString(16)+" "})}a(Ca,"escapeSelectorAttributeValueInsideDoubleQuotes");function Uf(d,p,v,C,N,L,X,ne){d.name="",X!=null&&typeof X!="function"&&typeof X!="symbol"&&typeof X!="boolean"?d.type=X:d.removeAttribute("type"),p!=null?X==="number"?(p===0&&d.value===""||d.value!=p)&&(d.value=""+xn(p)):d.value!==""+xn(p)&&(d.value=""+xn(p)):X!=="submit"&&X!=="reset"||d.removeAttribute("value"),p!=null?Pv(d,X,xn(p)):v!=null?Pv(d,X,xn(v)):C!=null&&d.removeAttribute("value"),N==null&&L!=null&&(d.defaultChecked=!!L),N!=null&&(d.checked=N&&typeof N!="function"&&typeof N!="symbol"),ne!=null&&typeof ne!="function"&&typeof ne!="symbol"&&typeof ne!="boolean"?d.name=""+xn(ne):d.removeAttribute("name")}a(Uf,"updateInput");function Wp(d,p,v,C,N,L,X,ne){if(L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"&&(d.type=L),p!=null||v!=null){if(!(L!=="submit"&&L!=="reset"||p!=null))return;v=v!=null?""+xn(v):"",p=p!=null?""+xn(p):v,ne||p===d.value||(d.value=p),d.defaultValue=p}C=C??N,C=typeof C!="function"&&typeof C!="symbol"&&!!C,d.checked=ne?d.checked:!!C,d.defaultChecked=!!C,X!=null&&typeof X!="function"&&typeof X!="symbol"&&typeof X!="boolean"&&(d.name=X)}a(Wp,"initInput");function Pv(d,p,v){p==="number"&&Jl(d.ownerDocument)===d||d.defaultValue===""+v||(d.defaultValue=""+v)}a(Pv,"setDefaultValue");function eu(d,p,v,C){if(d=d.options,p){p={};for(var N=0;N<v.length;N++)p["$"+v[N]]=!0;for(v=0;v<d.length;v++)N=p.hasOwnProperty("$"+d[v].value),d[v].selected!==N&&(d[v].selected=N),N&&C&&(d[v].defaultSelected=!0)}else{for(v=""+xn(v),p=null,N=0;N<d.length;N++){if(d[N].value===v){d[N].selected=!0,C&&(d[N].defaultSelected=!0);return}p!==null||d[N].disabled||(p=d[N])}p!==null&&(p.selected=!0)}}a(eu,"updateOptions");function HC(d,p,v){if(p!=null&&(p=""+xn(p),p!==d.value&&(d.value=p),v==null)){d.defaultValue!==p&&(d.defaultValue=p);return}d.defaultValue=v!=null?""+xn(v):""}a(HC,"updateTextarea");function kw(d,p,v,C){if(p==null){if(C!=null){if(v!=null)throw Error(r(92));if(q(C)){if(1<C.length)throw Error(r(93));C=C[0]}v=C}v==null&&(v=""),p=v}v=xn(p),d.defaultValue=v,C=d.textContent,C===v&&C!==""&&C!==null&&(d.value=C)}a(kw,"initTextarea");function tu(d,p){if(p){var v=d.firstChild;if(v&&v===d.lastChild&&v.nodeType===3){v.nodeValue=p;return}}d.textContent=p}a(tu,"setTextContent");var Nw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gd(d,p,v){var C=p.indexOf("--")===0;v==null||typeof v=="boolean"||v===""?C?d.setProperty(p,""):p==="float"?d.cssFloat="":d[p]="":C?d.setProperty(p,v):typeof v!="number"||v===0||Nw.has(p)?p==="float"?d.cssFloat=v:d[p]=(""+v).trim():d[p]=v+"px"}a(gd,"setValueForStyle");function Ow(d,p,v){if(p!=null&&typeof p!="object")throw Error(r(62));if(d=d.style,v!=null){for(var C in v)!v.hasOwnProperty(C)||p!=null&&p.hasOwnProperty(C)||(C.indexOf("--")===0?d.setProperty(C,""):C==="float"?d.cssFloat="":d[C]="");for(var N in p)C=p[N],p.hasOwnProperty(N)&&v[N]!==C&&gd(d,N,C)}else for(var L in p)p.hasOwnProperty(L)&&gd(d,L,p[L])}a(Ow,"setValueForStyles");function Mv(d){if(d.indexOf("-")===-1)return!1;switch(d){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}a(Mv,"isCustomElement");var nD=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),VC=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gp(d){return VC.test(""+d)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":d}a(Gp,"sanitizeURL");var Lv=null;function Fv(d){return d=d.target||d.srcElement||window,d.correspondingUseElement&&(d=d.correspondingUseElement),d.nodeType===3?d.parentNode:d}a(Fv,"getEventTarget");var Bf=null,zf=null;function WC(d){var p=vt(d);if(p&&(d=p.stateNode)){var v=d[en]||null;e:switch(d=p.stateNode,p.type){case"input":if(Uf(d,v.value,v.defaultValue,v.defaultValue,v.checked,v.defaultChecked,v.type,v.name),p=v.name,v.type==="radio"&&p!=null){for(v=d;v.parentNode;)v=v.parentNode;for(v=v.querySelectorAll('input[name="'+Ca(""+p)+'"][type="radio"]'),p=0;p<v.length;p++){var C=v[p];if(C!==d&&C.form===d.form){var N=C[en]||null;if(!N)throw Error(r(90));Uf(C,N.value,N.defaultValue,N.defaultValue,N.checked,N.defaultChecked,N.type,N.name)}}for(p=0;p<v.length;p++)C=v[p],C.form===d.form&&Vp(C)}break e;case"textarea":HC(d,v.value,v.defaultValue);break e;case"select":p=v.value,p!=null&&eu(d,!!v.multiple,p,!1)}}}a(WC,"restoreStateOfTarget");var $v=!1;function GC(d,p,v){if($v)return d(p,v);$v=!0;try{var C=d(p);return C}finally{if($v=!1,(Bf!==null||zf!==null)&&(qy(),Bf&&(p=Bf,d=zf,zf=Bf=null,WC(p),d)))for(p=0;p<d.length;p++)WC(d[p])}}a(GC,"batchedUpdates$1");function Yp(d,p){var v=d.stateNode;if(v===null)return null;var C=v[en]||null;if(C===null)return null;v=C[p];e:switch(p){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(C=!C.disabled)||(d=d.type,C=!(d==="button"||d==="input"||d==="select"||d==="textarea")),d=!C;break e;default:d=!1}if(d)return null;if(v&&typeof v!="function")throw Error(r(231,p,typeof v));return v}a(Yp,"getListener");var Zl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dw=!1;if(Zl)try{var vd={};Object.defineProperty(vd,"passive",{get:a(function(){Dw=!0},"get")}),window.addEventListener("test",vd,vd),window.removeEventListener("test",vd,vd)}catch{Dw=!1}var nu=null,Iw=null,Uv=null;function YC(){if(Uv)return Uv;var d,p=Iw,v=p.length,C,N="value"in nu?nu.value:nu.textContent,L=N.length;for(d=0;d<v&&p[d]===N[d];d++);var X=v-d;for(C=1;C<=X&&p[v-C]===N[L-C];C++);return Uv=N.slice(d,1<C?1-C:void 0)}a(YC,"getData");function Bv(d){var p=d.keyCode;return"charCode"in d?(d=d.charCode,d===0&&p===13&&(d=13)):d=p,d===10&&(d=13),32<=d||d===13?d:0}a(Bv,"getEventCharCode");function Cr(){return!0}a(Cr,"functionThatReturnsTrue");function Dr(){return!1}a(Dr,"functionThatReturnsFalse");function ns(d){function p(v,C,N,L,X){this._reactName=v,this._targetInst=N,this.type=C,this.nativeEvent=L,this.target=X,this.currentTarget=null;for(var ne in d)d.hasOwnProperty(ne)&&(v=d[ne],this[ne]=v?v(L):L[ne]);return this.isDefaultPrevented=(L.defaultPrevented!=null?L.defaultPrevented:L.returnValue===!1)?Cr:Dr,this.isPropagationStopped=Dr,this}return a(p,"SyntheticBaseEvent"),h(p.prototype,{preventDefault:a(function(){this.defaultPrevented=!0;var v=this.nativeEvent;v&&(v.preventDefault?v.preventDefault():typeof v.returnValue!="unknown"&&(v.returnValue=!1),this.isDefaultPrevented=Cr)},"preventDefault"),stopPropagation:a(function(){var v=this.nativeEvent;v&&(v.stopPropagation?v.stopPropagation():typeof v.cancelBubble!="unknown"&&(v.cancelBubble=!0),this.isPropagationStopped=Cr)},"stopPropagation"),persist:a(function(){},"persist"),isPersistent:Cr}),p}a(ns,"createSyntheticEvent");var yd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:a(function(d){return d.timeStamp||Date.now()},"timeStamp"),defaultPrevented:0,isTrusted:0},zv=ns(yd),Kp=h({},yd,{view:0,detail:0}),rD=ns(Kp),Pw,qv,Xp,La=h({},Kp,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vv,button:0,buttons:0,relatedTarget:a(function(d){return d.relatedTarget===void 0?d.fromElement===d.srcElement?d.toElement:d.fromElement:d.relatedTarget},"relatedTarget"),movementX:a(function(d){return"movementX"in d?d.movementX:(d!==Xp&&(Xp&&d.type==="mousemove"?(Pw=d.screenX-Xp.screenX,qv=d.screenY-Xp.screenY):qv=Pw=0,Xp=d),Pw)},"movementX"),movementY:a(function(d){return"movementY"in d?d.movementY:qv},"movementY")}),Hv=ns(La),bd=h({},La,{dataTransfer:0}),KC=ns(bd),Mw=h({},Kp,{relatedTarget:0}),rs=ns(Mw),XC=h({},yd,{animationName:0,elapsedTime:0,pseudoElement:0}),QC=ns(XC),JC=h({},yd,{clipboardData:a(function(d){return"clipboardData"in d?d.clipboardData:window.clipboardData},"clipboardData")}),ZC=ns(JC),ej=h({},yd,{data:0}),Lw=ns(ej),_s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aD={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Es={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iD(d){var p=this.nativeEvent;return p.getModifierState?p.getModifierState(d):(d=Es[d])?!!p[d]:!1}a(iD,"modifierStateGetter");function Vv(){return iD}a(Vv,"getEventModifierState");var ru=h({},Kp,{key:a(function(d){if(d.key){var p=_s[d.key]||d.key;if(p!=="Unidentified")return p}return d.type==="keypress"?(d=Bv(d),d===13?"Enter":String.fromCharCode(d)):d.type==="keydown"||d.type==="keyup"?aD[d.keyCode]||"Unidentified":""},"key"),code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vv,charCode:a(function(d){return d.type==="keypress"?Bv(d):0},"charCode"),keyCode:a(function(d){return d.type==="keydown"||d.type==="keyup"?d.keyCode:0},"keyCode"),which:a(function(d){return d.type==="keypress"?Bv(d):d.type==="keydown"||d.type==="keyup"?d.keyCode:0},"which")}),Wv=ns(ru),Fw=h({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gr=ns(Fw),au=h({},Kp,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vv}),$w=ns(au),sD=h({},yd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uw=ns(sD),oD=h({},La,{deltaX:a(function(d){return"deltaX"in d?d.deltaX:"wheelDeltaX"in d?-d.wheelDeltaX:0},"deltaX"),deltaY:a(function(d){return"deltaY"in d?d.deltaY:"wheelDeltaY"in d?-d.wheelDeltaY:"wheelDelta"in d?-d.wheelDelta:0},"deltaY"),deltaZ:0,deltaMode:0}),lD=ns(oD),cD=h({},yd,{newState:0,oldState:0}),tj=ns(cD),Gv=[9,13,27,32],iu=Zl&&"CompositionEvent"in window,Qp=null;Zl&&"documentMode"in document&&(Qp=document.documentMode);var nj=Zl&&"TextEvent"in window&&!Qp,Bw=Zl&&(!iu||Qp&&8<Qp&&11>=Qp),Yv=" ",Kv=!1;function zw(d,p){switch(d){case"keyup":return Gv.indexOf(p.keyCode)!==-1;case"keydown":return p.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}a(zw,"isFallbackCompositionEnd");function rj(d){return d=d.detail,typeof d=="object"&&"data"in d?d.data:null}a(rj,"getDataFromCustomEvent");var su=!1;function qw(d,p){switch(d){case"compositionend":return rj(p);case"keypress":return p.which!==32?null:(Kv=!0,Yv);case"textInput":return d=p.data,d===Yv&&Kv?null:d;default:return null}}a(qw,"getNativeBeforeInputChars");function uD(d,p){if(su)return d==="compositionend"||!iu&&zw(d,p)?(d=YC(),Uv=Iw=nu=null,su=!1,d):null;switch(d){case"paste":return null;case"keypress":if(!(p.ctrlKey||p.altKey||p.metaKey)||p.ctrlKey&&p.altKey){if(p.char&&1<p.char.length)return p.char;if(p.which)return String.fromCharCode(p.which)}return null;case"compositionend":return Bw&&p.locale!=="ko"?null:p.data;default:return null}}a(uD,"getFallbackBeforeInputChars");var aj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function as(d){var p=d&&d.nodeName&&d.nodeName.toLowerCase();return p==="input"?!!aj[d.type]:p==="textarea"}a(as,"isTextInputElement");function Xv(d,p,v,C){Bf?zf?zf.push(C):zf=[C]:Bf=C,p=An(p,"onChange"),0<p.length&&(v=new zv("onChange","change",null,v,C),d.push({event:v,listeners:p}))}a(Xv,"createAndAccumulateChangeEvent");var ec=null,qf=null;function ij(d){bA(d,0)}a(ij,"runEventInBatch");function Qv(d){var p=It(d);if(Vp(p))return d}a(Qv,"getInstIfValueChanged");function sj(d,p){if(d==="change")return p}a(sj,"getTargetInstForChangeEvent");var oj=!1;if(Zl){var Hw;if(Zl){var Vw="oninput"in document;if(!Vw){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),Vw=typeof xd.oninput=="function"}Hw=Vw}else Hw=!1;oj=Hw&&(!document.documentMode||9<document.documentMode)}function lj(){ec&&(ec.detachEvent("onpropertychange",cj),qf=ec=null)}a(lj,"stopWatchingForValueChange");function cj(d){if(d.propertyName==="value"&&Qv(qf)){var p=[];Xv(p,qf,d,Fv(d)),GC(ij,p)}}a(cj,"handlePropertyChange");function Ww(d,p,v){d==="focusin"?(lj(),ec=p,qf=v,ec.attachEvent("onpropertychange",cj)):d==="focusout"&&lj()}a(Ww,"handleEventsForInputEventPolyfill");function uj(d){if(d==="selectionchange"||d==="keyup"||d==="keydown")return Qv(qf)}a(uj,"getTargetInstForInputEventPolyfill");function ou(d,p){if(d==="click")return Qv(p)}a(ou,"getTargetInstForClickEvent");function Jv(d,p){if(d==="input"||d==="change")return Qv(p)}a(Jv,"getTargetInstForInputOrChangeEvent");function dD(d,p){return d===p&&(d!==0||1/d===1/p)||d!==d&&p!==p}a(dD,"is");var Ss=typeof Object.is=="function"?Object.is:dD;function Jp(d,p){if(Ss(d,p))return!0;if(typeof d!="object"||d===null||typeof p!="object"||p===null)return!1;var v=Object.keys(d),C=Object.keys(p);if(v.length!==C.length)return!1;for(C=0;C<v.length;C++){var N=v[C];if(!ve.call(p,N)||!Ss(d[N],p[N]))return!1}return!0}a(Jp,"shallowEqual");function wd(d){for(;d&&d.firstChild;)d=d.firstChild;return d}a(wd,"getLeafNode");function no(d,p){var v=wd(d);d=0;for(var C;v;){if(v.nodeType===3){if(C=d+v.textContent.length,d<=p&&C>=p)return{node:v,offset:p-d};d=C}e:{for(;v;){if(v.nextSibling){v=v.nextSibling;break e}v=v.parentNode}v=void 0}v=wd(v)}}a(no,"getNodeForCharacterOffset");function Gw(d,p){return d&&p?d===p?!0:d&&d.nodeType===3?!1:p&&p.nodeType===3?Gw(d,p.parentNode):"contains"in d?d.contains(p):d.compareDocumentPosition?!!(d.compareDocumentPosition(p)&16):!1:!1}a(Gw,"containsNode");function dj(d){d=d!=null&&d.ownerDocument!=null&&d.ownerDocument.defaultView!=null?d.ownerDocument.defaultView:window;for(var p=Jl(d.document);p instanceof d.HTMLIFrameElement;){try{var v=typeof p.contentWindow.location.href=="string"}catch{v=!1}if(v)d=p.contentWindow;else break;p=Jl(d.document)}return p}a(dj,"getActiveElementDeep");function Yw(d){var p=d&&d.nodeName&&d.nodeName.toLowerCase();return p&&(p==="input"&&(d.type==="text"||d.type==="search"||d.type==="tel"||d.type==="url"||d.type==="password")||p==="textarea"||d.contentEditable==="true")}a(Yw,"hasSelectionCapabilities");var fD=Zl&&"documentMode"in document&&11>=document.documentMode,Hf=null,Kw=null,fl=null,Ne=!1;function tt(d,p,v){var C=v.window===v?v.document:v.nodeType===9?v:v.ownerDocument;Ne||Hf==null||Hf!==Jl(C)||(C=Hf,"selectionStart"in C&&Yw(C)?C={start:C.selectionStart,end:C.selectionEnd}:(C=(C.ownerDocument&&C.ownerDocument.defaultView||window).getSelection(),C={anchorNode:C.anchorNode,anchorOffset:C.anchorOffset,focusNode:C.focusNode,focusOffset:C.focusOffset}),fl&&Jp(fl,C)||(fl=C,C=An(Kw,"onSelect"),0<C.length&&(p=new zv("onSelect","select",null,p,v),d.push({event:p,listeners:C}),p.target=Hf)))}a(tt,"constructSelectEvent");function He(d,p){var v={};return v[d.toLowerCase()]=p.toLowerCase(),v["Webkit"+d]="webkit"+p,v["Moz"+d]="moz"+p,v}a(He,"makePrefixMap");var $t={animationend:He("Animation","AnimationEnd"),animationiteration:He("Animation","AnimationIteration"),animationstart:He("Animation","AnimationStart"),transitionrun:He("Transition","TransitionRun"),transitionstart:He("Transition","TransitionStart"),transitioncancel:He("Transition","TransitionCancel"),transitionend:He("Transition","TransitionEnd")},Cn={},ur={};Zl&&(ur=document.createElement("div").style,"AnimationEvent"in window||(delete $t.animationend.animation,delete $t.animationiteration.animation,delete $t.animationstart.animation),"TransitionEvent"in window||delete $t.transitionend.transition);function Yr(d){if(Cn[d])return Cn[d];if(!$t[d])return d;var p=$t[d],v;for(v in p)if(p.hasOwnProperty(v)&&v in ur)return Cn[d]=p[v];return d}a(Yr,"getVendorPrefixedEventName");var jr=Yr("animationend"),Zv=Yr("animationiteration"),fj=Yr("animationstart"),ro=Yr("transitionrun"),ey=Yr("transitionstart"),hD=Yr("transitioncancel"),_d=Yr("transitionend"),Zp=new Map,Vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vf.push("scrollEnd");function $n(d,p){Zp.set(d,p),le(p,[d])}a($n,"registerSimpleEvent");var hj=new WeakMap;function Cs(d,p){if(typeof d=="object"&&d!==null){var v=hj.get(d);return v!==void 0?v:(p={value:d,source:p,stack:md(p)},hj.set(d,p),p)}return{value:d,source:p,stack:md(p)}}a(Cs,"createCapturedValueAtFiber");var Ui=[],Wf=0,Xw=0;function ty(){for(var d=Wf,p=Xw=Wf=0;p<d;){var v=Ui[p];Ui[p++]=null;var C=Ui[p];Ui[p++]=null;var N=Ui[p];Ui[p++]=null;var L=Ui[p];if(Ui[p++]=null,C!==null&&N!==null){var X=C.pending;X===null?N.next=N:(N.next=X.next,X.next=N),C.pending=N}L!==0&&Qw(v,N,L)}}a(ty,"finishQueueingConcurrentUpdates");function Ed(d,p,v,C){Ui[Wf++]=d,Ui[Wf++]=p,Ui[Wf++]=v,Ui[Wf++]=C,Xw|=C,d.lanes|=C,d=d.alternate,d!==null&&(d.lanes|=C)}a(Ed,"enqueueUpdate$1");function hl(d,p,v,C){return Ed(d,p,v,C),Sd(d)}a(hl,"enqueueConcurrentHookUpdate");function tc(d,p){return Ed(d,null,null,p),Sd(d)}a(tc,"enqueueConcurrentRenderForLane");function Qw(d,p,v){d.lanes|=v;var C=d.alternate;C!==null&&(C.lanes|=v);for(var N=!1,L=d.return;L!==null;)L.childLanes|=v,C=L.alternate,C!==null&&(C.childLanes|=v),L.tag===22&&(d=L.stateNode,d===null||d._visibility&1||(N=!0)),d=L,L=L.return;return d.tag===3?(L=d.stateNode,N&&p!==null&&(N=31-ge(v),d=L.hiddenUpdates,C=d[N],C===null?d[N]=[p]:C.push(p),p.lane=v|536870912),L):null}a(Qw,"markUpdateLaneFromFiberToRoot");function Sd(d){if(50<Dm)throw Dm=0,zy=null,Error(r(185));for(var p=d.return;p!==null;)d=p,p=d.return;return d.tag===3?d.stateNode:null}a(Sd,"getRootForUpdatedFiber");var Cd={};function pj(d,p,v,C){this.tag=d,this.key=v,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=p,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=C,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}a(pj,"FiberNode");function Ti(d,p,v,C){return new pj(d,p,v,C)}a(Ti,"createFiberImplClass");function ny(d){return d=d.prototype,!(!d||!d.isReactComponent)}a(ny,"shouldConstruct");function js(d,p){var v=d.alternate;return v===null?(v=Ti(d.tag,p,d.key,d.mode),v.elementType=d.elementType,v.type=d.type,v.stateNode=d.stateNode,v.alternate=d,d.alternate=v):(v.pendingProps=p,v.type=d.type,v.flags=0,v.subtreeFlags=0,v.deletions=null),v.flags=d.flags&65011712,v.childLanes=d.childLanes,v.lanes=d.lanes,v.child=d.child,v.memoizedProps=d.memoizedProps,v.memoizedState=d.memoizedState,v.updateQueue=d.updateQueue,p=d.dependencies,v.dependencies=p===null?null:{lanes:p.lanes,firstContext:p.firstContext},v.sibling=d.sibling,v.index=d.index,v.ref=d.ref,v.refCleanup=d.refCleanup,v}a(js,"createWorkInProgress");function lu(d,p){d.flags&=65011714;var v=d.alternate;return v===null?(d.childLanes=0,d.lanes=p,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=v.childLanes,d.lanes=v.lanes,d.child=v.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=v.memoizedProps,d.memoizedState=v.memoizedState,d.updateQueue=v.updateQueue,d.type=v.type,p=v.dependencies,d.dependencies=p===null?null:{lanes:p.lanes,firstContext:p.firstContext}),d}a(lu,"resetWorkInProgress");function jd(d,p,v,C,N,L){var X=0;if(C=d,typeof d=="function")ny(d)&&(X=1);else if(typeof d=="string")X=YD(d,v,ie.current)?26:d==="html"||d==="head"||d==="body"?27:5;else e:switch(d){case M:return d=Ti(31,v,p,N),d.elementType=M,d.lanes=L,d;case w:return Ad(v.children,N,L,p);case _:X=8,N|=24;break;case E:return d=Ti(12,v,p,N|2),d.elementType=E,d.lanes=L,d;case D:return d=Ti(13,v,p,N),d.elementType=D,d.lanes=L,d;case O:return d=Ti(19,v,p,N),d.elementType=O,d.lanes=L,d;default:if(typeof d=="object"&&d!==null)switch(d.$$typeof){case R:case A:X=10;break e;case j:X=9;break e;case T:X=11;break e;case P:X=14;break e;case k:X=16,C=null;break e}X=29,v=Error(r(130,d===null?"null":typeof d,"")),C=null}return p=Ti(X,v,p,N),p.elementType=d,p.type=C,p.lanes=L,p}a(jd,"createFiberFromTypeAndProps");function Ad(d,p,v,C){return d=Ti(7,d,C,p),d.lanes=v,d}a(Ad,"createFiberFromFragment");function Jw(d,p,v){return d=Ti(6,d,null,p),d.lanes=v,d}a(Jw,"createFiberFromText");function Zw(d,p,v){return p=Ti(4,d.children!==null?d.children:[],d.key,p),p.lanes=v,p.stateNode={containerInfo:d.containerInfo,pendingChildren:null,implementation:d.implementation},p}a(Zw,"createFiberFromPortal");var nc=[],rc=0,Gf=null,ry=0,As=[],ao=0,Rd=null,Ir=1,ea="";function Td(d,p){nc[rc++]=ry,nc[rc++]=Gf,Gf=d,ry=p}a(Td,"pushTreeFork");function mj(d,p,v){As[ao++]=Ir,As[ao++]=ea,As[ao++]=Rd,Rd=d;var C=Ir;d=ea;var N=32-ge(C)-1;C&=~(1<<N),v+=1;var L=32-ge(p)+N;if(30<L){var X=N-N%5;L=(C&(1<<X)-1).toString(32),C>>=X,N-=X,Ir=1<<32-ge(p)+N|v<<N|C,ea=L+d}else Ir=1<<L|v<<N|C,ea=d}a(mj,"pushTreeId");function ay(d){d.return!==null&&(Td(d,1),mj(d,1,0))}a(ay,"pushMaterializedTreeId");function e_(d){for(;d===Gf;)Gf=nc[--rc],nc[rc]=null,ry=nc[--rc],nc[rc]=null;for(;d===Rd;)Rd=As[--ao],As[ao]=null,ea=As[--ao],As[ao]=null,Ir=As[--ao],As[ao]=null}a(e_,"popTreeContext");var fi=null,Ur=null,ir=!1,io=null,is=!1,kd=Error(r(519));function pl(d){var p=Error(r(418,""));throw nm(Cs(p,d)),kd}a(pl,"throwOnHydrationMismatch");function Nd(d){var p=d.stateNode,v=d.type,C=d.memoizedProps;switch(p[nn]=d,p[en]=C,v){case"dialog":Qn("cancel",p),Qn("close",p);break;case"iframe":case"object":case"embed":Qn("load",p);break;case"video":case"audio":for(v=0;v<qm.length;v++)Qn(qm[v],p);break;case"source":Qn("error",p);break;case"img":case"image":case"link":Qn("error",p),Qn("load",p);break;case"details":Qn("toggle",p);break;case"input":Qn("invalid",p),Wp(p,C.value,C.defaultValue,C.checked,C.defaultChecked,C.type,C.name,!0),Ri(p);break;case"select":Qn("invalid",p);break;case"textarea":Qn("invalid",p),kw(p,C.value,C.defaultValue,C.children),Ri(p)}v=C.children,typeof v!="string"&&typeof v!="number"&&typeof v!="bigint"||p.textContent===""+v||C.suppressHydrationWarning===!0||wA(p.textContent,v)?(C.popover!=null&&(Qn("beforetoggle",p),Qn("toggle",p)),C.onScroll!=null&&Qn("scroll",p),C.onScrollEnd!=null&&Qn("scrollend",p),C.onClick!=null&&(p.onclick=Ky),p=!0):p=!1,p||pl(d)}a(Nd,"prepareToHydrateHostInstance");function gj(d){for(fi=d.return;fi;)switch(fi.tag){case 5:case 13:is=!1;return;case 27:case 3:is=!0;return;default:fi=fi.return}}a(gj,"popToNextHostParent");function em(d){if(d!==fi)return!1;if(!ir)return gj(d),ir=!0,!1;var p=d.tag,v;if((v=p!==3&&p!==27)&&((v=p===5)&&(v=d.type,v=!(v!=="form"&&v!=="button")||ra(d.type,d.memoizedProps)),v=!v),v&&Ur&&pl(d),gj(d),p===13){if(d=d.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(r(317));e:{for(d=d.nextSibling,p=0;d;){if(d.nodeType===8)if(v=d.data,v==="/$"){if(p===0){Ur=Oi(d.nextSibling);break e}p--}else v!=="$"&&v!=="$!"&&v!=="$?"||p++;d=d.nextSibling}Ur=null}}else p===27?(p=Ur,mc(d.type)?(d=o1,o1=null,Ur=d):Ur=p):Ur=fi?Oi(d.stateNode.nextSibling):null;return!0}a(em,"popHydrationState");function tm(){Ur=fi=null,ir=!1}a(tm,"resetHydrationState");function vj(){var d=io;return d!==null&&(ds===null?ds=d:ds.push.apply(ds,d),io=null),d}a(vj,"upgradeHydrationErrorsToRecoverable");function nm(d){io===null?io=[d]:io.push(d)}a(nm,"queueHydrationError");var Yf=ee(null),To=null,ml=null;function te(d,p,v){J(Yf,p._currentValue),p._currentValue=v}a(te,"pushProvider");function ss(d){d._currentValue=Yf.current,Z(Yf)}a(ss,"popProvider");function Kf(d,p,v){for(;d!==null;){var C=d.alternate;if((d.childLanes&p)!==p?(d.childLanes|=p,C!==null&&(C.childLanes|=p)):C!==null&&(C.childLanes&p)!==p&&(C.childLanes|=p),d===v)break;d=d.return}}a(Kf,"scheduleContextWorkOnParentPath");function os(d,p,v,C){var N=d.child;for(N!==null&&(N.return=d);N!==null;){var L=N.dependencies;if(L!==null){var X=N.child;L=L.firstContext;e:for(;L!==null;){var ne=L;L=N;for(var be=0;be<p.length;be++)if(ne.context===p[be]){L.lanes|=v,ne=L.alternate,ne!==null&&(ne.lanes|=v),Kf(L.return,v,d),C||(X=null);break e}L=ne.next}}else if(N.tag===18){if(X=N.return,X===null)throw Error(r(341));X.lanes|=v,L=X.alternate,L!==null&&(L.lanes|=v),Kf(X,v,d),X=null}else X=N.child;if(X!==null)X.return=N;else for(X=N;X!==null;){if(X===d){X=null;break}if(N=X.sibling,N!==null){N.return=X.return,X=N;break}X=X.return}N=X}}a(os,"propagateContextChanges");function Un(d,p,v,C){d=null;for(var N=p,L=!1;N!==null;){if(!L){if((N.flags&524288)!==0)L=!0;else if((N.flags&262144)!==0)break}if(N.tag===10){var X=N.alternate;if(X===null)throw Error(r(387));if(X=X.memoizedProps,X!==null){var ne=N.type;Ss(N.pendingProps.value,X.value)||(d!==null?d.push(ne):d=[ne])}}else if(N===ue.current){if(X=N.alternate,X===null)throw Error(r(387));X.memoizedState.memoizedState!==N.memoizedState.memoizedState&&(d!==null?d.push(Jm):d=[Jm])}N=N.return}d!==null&&os(p,d,v,C),p.flags|=262144}a(Un,"propagateParentContextChanges");function iy(d){for(d=d.firstContext;d!==null;){if(!Ss(d.context._currentValue,d.memoizedValue))return!0;d=d.next}return!1}a(iy,"checkIfContextChanged");function Od(d){To=d,ml=null,d=d.dependencies,d!==null&&(d.firstContext=null)}a(Od,"prepareToReadContext");function ki(d){return yj(To,d)}a(ki,"readContext");function gl(d,p){return To===null&&Od(d),yj(d,p)}a(gl,"readContextDuringReconciliation");function yj(d,p){var v=p._currentValue;if(p={context:p,memoizedValue:v,next:null},ml===null){if(d===null)throw Error(r(308));ml=p,d.dependencies={lanes:0,firstContext:p},d.flags|=524288}else ml=ml.next=p;return v}a(yj,"readContextForConsumer");var pD=typeof AbortController<"u"?AbortController:function(){var d=[],p=this.signal={aborted:!1,addEventListener:a(function(v,C){d.push(C)},"addEventListener")};this.abort=function(){p.aborted=!0,d.forEach(function(v){return v()})}},mD=e.unstable_scheduleCallback,gD=e.unstable_NormalPriority,Wa={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ko(){return{controller:new pD,data:new Map,refCount:0}}a(ko,"createCache");function rm(d){d.refCount--,d.refCount===0&&mD(gD,function(){d.controller.abort()})}a(rm,"releaseCache");var am=null,t_=0,Xf=0,Qf=null;function ac(d,p){if(am===null){var v=am=[];t_=0,Xf=zm(),Qf={status:"pending",value:void 0,then:a(function(C){v.push(C)},"then")}}return t_++,p.then(bj,bj),p}a(ac,"entangleAsyncAction");function bj(){if(--t_===0&&am!==null){Qf!==null&&(Qf.status="fulfilled");var d=am;am=null,Xf=0,Qf=null;for(var p=0;p<d.length;p++)(0,d[p])()}}a(bj,"pingEngtangledActionScope");function vD(d,p){var v=[],C={status:"pending",value:null,reason:null,then:a(function(N){v.push(N)},"then")};return d.then(function(){C.status="fulfilled",C.value=p;for(var N=0;N<v.length;N++)(0,v[N])(p)},function(N){for(C.status="rejected",C.reason=N,N=0;N<v.length;N++)(0,v[N])(void 0)}),C}a(vD,"chainThenableValue");var xj=V.S;V.S=function(d,p){typeof p=="object"&&p!==null&&typeof p.then=="function"&&ac(d,p),xj!==null&&xj(d,p)};var Dd=ee(null);function n_(){var d=Dd.current;return d!==null?d:Br.pooledCache}a(n_,"peekCacheFromPool");function vl(d,p){p===null?J(Dd,Dd.current):J(Dd,p.pool)}a(vl,"pushTransition");function wj(){var d=n_();return d===null?null:{parent:Wa._currentValue,pool:d}}a(wj,"getSuspendedCache");var im=Error(r(460)),so=Error(r(474)),sy=Error(r(542)),r_={then:a(function(){},"then")};function _j(d){return d=d.status,d==="fulfilled"||d==="rejected"}a(_j,"isThenableResolved");function oy(){}a(oy,"noop$3");function Ej(d,p,v){switch(v=d[v],v===void 0?d.push(p):v!==p&&(p.then(oy,oy),p=v),p.status){case"fulfilled":return p.value;case"rejected":throw d=p.reason,Sj(d),d;default:if(typeof p.status=="string")p.then(oy,oy);else{if(d=Br,d!==null&&100<d.shellSuspendCounter)throw Error(r(482));d=p,d.status="pending",d.then(function(C){if(p.status==="pending"){var N=p;N.status="fulfilled",N.value=C}},function(C){if(p.status==="pending"){var N=p;N.status="rejected",N.reason=C}})}switch(p.status){case"fulfilled":return p.value;case"rejected":throw d=p.reason,Sj(d),d}throw Jf=p,im}}a(Ej,"trackUsedThenable");var Jf=null;function a_(){if(Jf===null)throw Error(r(459));var d=Jf;return Jf=null,d}a(a_,"getSuspendedThenable");function Sj(d){if(d===im||d===sy)throw Error(r(483))}a(Sj,"checkIfUseWrappedInAsyncCatch");var cu=!1;function sm(d){d.updateQueue={baseState:d.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}a(sm,"initializeUpdateQueue");function Id(d,p){d=d.updateQueue,p.updateQueue===d&&(p.updateQueue={baseState:d.baseState,firstBaseUpdate:d.firstBaseUpdate,lastBaseUpdate:d.lastBaseUpdate,shared:d.shared,callbacks:null})}a(Id,"cloneUpdateQueue");function No(d){return{lane:d,tag:0,payload:null,callback:null,next:null}}a(No,"createUpdate");function uu(d,p,v){var C=d.updateQueue;if(C===null)return null;if(C=C.shared,(pr&2)!==0){var N=C.pending;return N===null?p.next=p:(p.next=N.next,N.next=p),C.pending=p,p=Sd(d),Qw(d,null,v),p}return Ed(d,C,p,v),Sd(d)}a(uu,"enqueueUpdate");function Zf(d,p,v){if(p=p.updateQueue,p!==null&&(p=p.shared,(v&4194048)!==0)){var C=p.lanes;C&=d.pendingLanes,v|=C,p.lanes=v,Ht(d,v)}}a(Zf,"entangleTransitions");function i_(d,p){var v=d.updateQueue,C=d.alternate;if(C!==null&&(C=C.updateQueue,v===C)){var N=null,L=null;if(v=v.firstBaseUpdate,v!==null){do{var X={lane:v.lane,tag:v.tag,payload:v.payload,callback:null,next:null};L===null?N=L=X:L=L.next=X,v=v.next}while(v!==null);L===null?N=L=p:L=L.next=p}else N=L=p;v={baseState:C.baseState,firstBaseUpdate:N,lastBaseUpdate:L,shared:C.shared,callbacks:C.callbacks},d.updateQueue=v;return}d=v.lastBaseUpdate,d===null?v.firstBaseUpdate=p:d.next=p,v.lastBaseUpdate=p}a(i_,"enqueueCapturedUpdate");var oo=!1;function Pd(){if(oo){var d=Qf;if(d!==null)throw d}}a(Pd,"suspendIfUpdateReadFromEntangledAsyncAction");function Oo(d,p,v,C){oo=!1;var N=d.updateQueue;cu=!1;var L=N.firstBaseUpdate,X=N.lastBaseUpdate,ne=N.shared.pending;if(ne!==null){N.shared.pending=null;var be=ne,Fe=be.next;be.next=null,X===null?L=Fe:X.next=Fe,X=be;var nt=d.alternate;nt!==null&&(nt=nt.updateQueue,ne=nt.lastBaseUpdate,ne!==X&&(ne===null?nt.firstBaseUpdate=Fe:ne.next=Fe,nt.lastBaseUpdate=be))}if(L!==null){var ct=N.baseState;X=0,nt=Fe=be=null,ne=L;do{var Ue=ne.lane&-536870913,qe=Ue!==ne.lane;if(qe?(nr&Ue)===Ue:(C&Ue)===Ue){Ue!==0&&Ue===Xf&&(oo=!0),nt!==null&&(nt=nt.next={lane:0,tag:ne.tag,payload:ne.payload,callback:null,next:null});e:{var Zt=d,fn=ne;Ue=p;var Tr=v;switch(fn.tag){case 1:if(Zt=fn.payload,typeof Zt=="function"){ct=Zt.call(Tr,ct,Ue);break e}ct=Zt;break e;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=fn.payload,Ue=typeof Zt=="function"?Zt.call(Tr,ct,Ue):Zt,Ue==null)break e;ct=h({},ct,Ue);break e;case 2:cu=!0}}Ue=ne.callback,Ue!==null&&(d.flags|=64,qe&&(d.flags|=8192),qe=N.callbacks,qe===null?N.callbacks=[Ue]:qe.push(Ue))}else qe={lane:Ue,tag:ne.tag,payload:ne.payload,callback:ne.callback,next:null},nt===null?(Fe=nt=qe,be=ct):nt=nt.next=qe,X|=Ue;if(ne=ne.next,ne===null){if(ne=N.shared.pending,ne===null)break;qe=ne,ne=qe.next,qe.next=null,N.lastBaseUpdate=qe,N.shared.pending=null}}while(!0);nt===null&&(be=ct),N.baseState=be,N.firstBaseUpdate=Fe,N.lastBaseUpdate=nt,L===null&&(N.shared.lanes=0),Eu|=X,d.lanes=X,d.memoizedState=ct}}a(Oo,"processUpdateQueue");function Rs(d,p){if(typeof d!="function")throw Error(r(191,d));d.call(p)}a(Rs,"callCallback");function Cj(d,p){var v=d.callbacks;if(v!==null)for(d.callbacks=null,d=0;d<v.length;d++)Rs(v[d],p)}a(Cj,"commitCallbacks");var Md=ee(null),om=ee(0);function eh(d,p){d=fc,J(om,d),J(Md,p),fc=d|p.baseLanes}a(eh,"pushHiddenContext");function yl(){J(om,fc),J(Md,Md.current)}a(yl,"reuseHiddenContextOnStack");function ly(){fc=om.current,Z(Md),Z(om)}a(ly,"popHiddenContext");var du=0,In=null,Ar=null,ja=null,Fa=!1,fu=!1,hu=!1,Ts=0,Ld=0,ic=null,Fd=0;function ha(){throw Error(r(321))}a(ha,"throwInvalidHookError");function hi(d,p){if(p===null)return!1;for(var v=0;v<p.length&&v<d.length;v++)if(!Ss(d[v],p[v]))return!1;return!0}a(hi,"areHookInputsEqual");function lm(d,p,v,C,N,L){return du=L,In=p,p.memoizedState=null,p.updateQueue=null,p.lanes=0,V.H=d===null||d.memoizedState===null?E_:Fj,hu=!1,L=v(C,N),hu=!1,fu&&(L=Aj(p,v,C,N)),jj(d),L}a(lm,"renderWithHooks");function jj(d){V.H=pm;var p=Ar!==null&&Ar.next!==null;if(du=0,ja=Ar=In=null,Fa=!1,Ld=0,ic=null,p)throw Error(r(300));d===null||ni||(d=d.dependencies,d!==null&&iy(d)&&(ni=!0))}a(jj,"finishRenderingHooks");function Aj(d,p,v,C){In=d;var N=0;do{if(fu&&(ic=null),Ld=0,fu=!1,25<=N)throw Error(r(301));if(N+=1,ja=Ar=null,d.updateQueue!=null){var L=d.updateQueue;L.lastEffect=null,L.events=null,L.stores=null,L.memoCache!=null&&(L.memoCache.index=0)}V.H=$j,L=p(v,C)}while(fu);return L}a(Aj,"renderWithHooksAgain");function yD(){var d=V.H,p=d.useState()[0];return p=typeof p.then=="function"?sc(p):p,d=d.useState()[0],(Ar!==null?Ar.memoizedState:null)!==d&&(In.flags|=1024),p}a(yD,"TransitionAwareHostComponent");function cm(){var d=Ts!==0;return Ts=0,d}a(cm,"checkDidRenderIdHook");function s_(d,p,v){p.updateQueue=d.updateQueue,p.flags&=-2053,d.lanes&=~v}a(s_,"bailoutHooks");function $d(d){if(Fa){for(d=d.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}Fa=!1}du=0,ja=Ar=In=null,fu=!1,Ld=Ts=0,ic=null}a($d,"resetHooksOnUnwind");function Bi(){var d={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ja===null?In.memoizedState=ja=d:ja=ja.next=d,ja}a(Bi,"mountWorkInProgressHook");function $a(){if(Ar===null){var d=In.alternate;d=d!==null?d.memoizedState:null}else d=Ar.next;var p=ja===null?In.memoizedState:ja.next;if(p!==null)ja=p,Ar=d;else{if(d===null)throw In.alternate===null?Error(r(467)):Error(r(310));Ar=d,d={memoizedState:Ar.memoizedState,baseState:Ar.baseState,baseQueue:Ar.baseQueue,queue:Ar.queue,next:null},ja===null?In.memoizedState=ja=d:ja=ja.next=d}return ja}a($a,"updateWorkInProgressHook");function o_(){return{lastEffect:null,events:null,stores:null,memoCache:null}}a(o_,"createFunctionComponentUpdateQueue");function sc(d){var p=Ld;return Ld+=1,ic===null&&(ic=[]),d=Ej(ic,d,p),p=In,(ja===null?p.memoizedState:ja.next)===null&&(p=p.alternate,V.H=p===null||p.memoizedState===null?E_:Fj),d}a(sc,"useThenable");function cy(d){if(d!==null&&typeof d=="object"){if(typeof d.then=="function")return sc(d);if(d.$$typeof===A)return ki(d)}throw Error(r(438,String(d)))}a(cy,"use");function l_(d){var p=null,v=In.updateQueue;if(v!==null&&(p=v.memoCache),p==null){var C=In.alternate;C!==null&&(C=C.updateQueue,C!==null&&(C=C.memoCache,C!=null&&(p={data:C.data.map(function(N){return N.slice()}),index:0})))}if(p==null&&(p={data:[],index:0}),v===null&&(v=o_(),In.updateQueue=v),v.memoCache=p,v=p.data[p.index],v===void 0)for(v=p.data[p.index]=Array(d),C=0;C<d;C++)v[C]=$;return p.index++,v}a(l_,"useMemoCache");function Do(d,p){return typeof p=="function"?p(d):p}a(Do,"basicStateReducer");function um(d){var p=$a();return c_(p,Ar,d)}a(um,"updateReducer");function c_(d,p,v){var C=d.queue;if(C===null)throw Error(r(311));C.lastRenderedReducer=v;var N=d.baseQueue,L=C.pending;if(L!==null){if(N!==null){var X=N.next;N.next=L.next,L.next=X}p.baseQueue=N=L,C.pending=null}if(L=d.baseState,N===null)d.memoizedState=L;else{p=N.next;var ne=X=null,be=null,Fe=p,nt=!1;do{var ct=Fe.lane&-536870913;if(ct!==Fe.lane?(nr&ct)===ct:(du&ct)===ct){var Ue=Fe.revertLane;if(Ue===0)be!==null&&(be=be.next={lane:0,revertLane:0,action:Fe.action,hasEagerState:Fe.hasEagerState,eagerState:Fe.eagerState,next:null}),ct===Xf&&(nt=!0);else if((du&Ue)===Ue){Fe=Fe.next,Ue===Xf&&(nt=!0);continue}else ct={lane:0,revertLane:Fe.revertLane,action:Fe.action,hasEagerState:Fe.hasEagerState,eagerState:Fe.eagerState,next:null},be===null?(ne=be=ct,X=L):be=be.next=ct,In.lanes|=Ue,Eu|=Ue;ct=Fe.action,hu&&v(L,ct),L=Fe.hasEagerState?Fe.eagerState:v(L,ct)}else Ue={lane:ct,revertLane:Fe.revertLane,action:Fe.action,hasEagerState:Fe.hasEagerState,eagerState:Fe.eagerState,next:null},be===null?(ne=be=Ue,X=L):be=be.next=Ue,In.lanes|=ct,Eu|=ct;Fe=Fe.next}while(Fe!==null&&Fe!==p);if(be===null?X=L:be.next=ne,!Ss(L,d.memoizedState)&&(ni=!0,nt&&(v=Qf,v!==null)))throw v;d.memoizedState=L,d.baseState=X,d.baseQueue=be,C.lastRenderedState=L}return N===null&&(C.lanes=0),[d.memoizedState,C.dispatch]}a(c_,"updateReducerImpl");function u_(d){var p=$a(),v=p.queue;if(v===null)throw Error(r(311));v.lastRenderedReducer=d;var C=v.dispatch,N=v.pending,L=p.memoizedState;if(N!==null){v.pending=null;var X=N=N.next;do L=d(L,X.action),X=X.next;while(X!==N);Ss(L,p.memoizedState)||(ni=!0),p.memoizedState=L,p.baseQueue===null&&(p.baseState=L),v.lastRenderedState=L}return[L,C]}a(u_,"rerenderReducer");function Rj(d,p,v){var C=In,N=$a(),L=ir;if(L){if(v===void 0)throw Error(r(407));v=v()}else v=p();var X=!Ss((Ar||N).memoizedState,v);X&&(N.memoizedState=v,ni=!0),N=N.queue;var ne=Tj.bind(null,C,N,d);if(th(2048,8,ne,[d]),N.getSnapshot!==p||X||ja!==null&&ja.memoizedState.tag&1){if(C.flags|=2048,Rn(9,vy(),uy.bind(null,C,N,v,p),null),Br===null)throw Error(r(349));L||(du&124)!==0||d_(C,p,v)}return v}a(Rj,"updateSyncExternalStore");function d_(d,p,v){d.flags|=16384,d={getSnapshot:p,value:v},p=In.updateQueue,p===null?(p=o_(),In.updateQueue=p,p.stores=[d]):(v=p.stores,v===null?p.stores=[d]:v.push(d))}a(d_,"pushStoreConsistencyCheck");function uy(d,p,v,C){p.value=v,p.getSnapshot=C,dy(p)&&f_(d)}a(uy,"updateStoreInstance");function Tj(d,p,v){return v(function(){dy(p)&&f_(d)})}a(Tj,"subscribeToStore");function dy(d){var p=d.getSnapshot;d=d.value;try{var v=p();return!Ss(d,v)}catch{return!0}}a(dy,"checkIfSnapshotChanged");function f_(d){var p=tc(d,2);p!==null&&Ls(p,d,2)}a(f_,"forceStoreRerender");function fy(d){var p=Bi();if(typeof d=="function"){var v=d;if(d=v(),hu){he(!0);try{v()}finally{he(!1)}}}return p.memoizedState=p.baseState=d,p.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:d},p}a(fy,"mountStateImpl");function h_(d,p,v,C){return d.baseState=v,c_(d,Ar,typeof C=="function"?C:Do)}a(h_,"updateOptimisticImpl");function hy(d,p,v,C,N){if(Cy(d))throw Error(r(485));if(d=p.action,d!==null){var L={payload:N,action:d,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:a(function(X){L.listeners.push(X)},"then")};V.T!==null?v(!0):L.isTransition=!1,C(L),v=p.pending,v===null?(L.next=p.pending=L,kj(p,L)):(L.next=v.next,p.pending=v.next=L)}}a(hy,"dispatchActionState");function kj(d,p){var v=p.action,C=p.payload,N=d.state;if(p.isTransition){var L=V.T,X={};V.T=X;try{var ne=v(N,C),be=V.S;be!==null&&be(X,ne),p_(d,p,ne)}catch(Fe){g_(d,p,Fe)}finally{V.T=L}}else try{L=v(N,C),p_(d,p,L)}catch(Fe){g_(d,p,Fe)}}a(kj,"runActionStateAction");function p_(d,p,v){v!==null&&typeof v=="object"&&typeof v.then=="function"?v.then(function(C){m_(d,p,C)},function(C){return g_(d,p,C)}):m_(d,p,v)}a(p_,"handleActionReturnValue");function m_(d,p,v){p.status="fulfilled",p.value=v,v_(p),d.state=v,p=d.pending,p!==null&&(v=p.next,v===p?d.pending=null:(v=v.next,p.next=v,kj(d,v)))}a(m_,"onActionSuccess");function g_(d,p,v){var C=d.pending;if(d.pending=null,C!==null){C=C.next;do p.status="rejected",p.reason=v,v_(p),p=p.next;while(p!==C)}d.action=null}a(g_,"onActionError");function v_(d){d=d.listeners;for(var p=0;p<d.length;p++)(0,d[p])()}a(v_,"notifyActionListeners");function Nj(d,p){return p}a(Nj,"actionStateReducer");function py(d,p){if(ir){var v=Br.formState;if(v!==null){e:{var C=In;if(ir){if(Ur){t:{for(var N=Ur,L=is;N.nodeType!==8;){if(!L){N=null;break t}if(N=Oi(N.nextSibling),N===null){N=null;break t}}L=N.data,N=L==="F!"||L==="F"?N:null}if(N){Ur=Oi(N.nextSibling),C=N.data==="F!";break e}}pl(C)}C=!1}C&&(p=v[0])}}return v=Bi(),v.memoizedState=v.baseState=p,C={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nj,lastRenderedState:p},v.queue=C,v=__.bind(null,In,C),C.dispatch=v,C=fy(!1),L=hm.bind(null,In,!1,C.queue),C=Bi(),N={state:p,dispatch:null,action:d,pending:null},C.queue=N,v=hy.bind(null,In,N,L,v),N.dispatch=v,C.memoizedState=d,[p,v,!1]}a(py,"mountActionState");function y_(d){var p=$a();return my(p,Ar,d)}a(y_,"updateActionState");function my(d,p,v){if(p=c_(d,p,Nj)[0],d=um(Do)[0],typeof p=="object"&&p!==null&&typeof p.then=="function")try{var C=sc(p)}catch(X){throw X===im?sy:X}else C=p;p=$a();var N=p.queue,L=N.dispatch;return v!==p.memoizedState&&(In.flags|=2048,Rn(9,vy(),bD.bind(null,N,v),null)),[C,L,d]}a(my,"updateActionStateImpl");function bD(d,p){d.action=p}a(bD,"actionStateActionEffect");function gy(d){var p=$a(),v=Ar;if(v!==null)return my(p,v,d);$a(),p=p.memoizedState,v=$a();var C=v.queue.dispatch;return v.memoizedState=d,[p,C,!1]}a(gy,"rerenderActionState");function Rn(d,p,v,C){return d={tag:d,create:v,deps:C,inst:p,next:null},p=In.updateQueue,p===null&&(p=o_(),In.updateQueue=p),v=p.lastEffect,v===null?p.lastEffect=d.next=d:(C=v.next,v.next=d,d.next=C,p.lastEffect=d),d}a(Rn,"pushSimpleEffect");function vy(){return{destroy:void 0,resource:void 0}}a(vy,"createEffectInstance");function Oj(){return $a().memoizedState}a(Oj,"updateRef");function pu(d,p,v,C){var N=Bi();C=C===void 0?null:C,In.flags|=d,N.memoizedState=Rn(1|p,vy(),v,C)}a(pu,"mountEffectImpl");function th(d,p,v,C){var N=$a();C=C===void 0?null:C;var L=N.memoizedState.inst;Ar!==null&&C!==null&&hi(C,Ar.memoizedState.deps)?N.memoizedState=Rn(p,L,v,C):(In.flags|=d,N.memoizedState=Rn(1|p,L,v,C))}a(th,"updateEffectImpl");function Dj(d,p){pu(8390656,8,d,p)}a(Dj,"mountEffect");function Ij(d,p){th(2048,8,d,p)}a(Ij,"updateEffect");function ks(d,p){return th(4,2,d,p)}a(ks,"updateInsertionEffect");function Pj(d,p){return th(4,4,d,p)}a(Pj,"updateLayoutEffect");function dm(d,p){if(typeof p=="function"){d=d();var v=p(d);return function(){typeof v=="function"?v():p(null)}}if(p!=null)return d=d(),p.current=d,function(){p.current=null}}a(dm,"imperativeHandleEffect");function yy(d,p,v){v=v!=null?v.concat([d]):null,th(4,4,dm.bind(null,p,d),v)}a(yy,"updateImperativeHandle");function by(){}a(by,"mountDebugValue");function b_(d,p){var v=$a();p=p===void 0?null:p;var C=v.memoizedState;return p!==null&&hi(p,C[1])?C[0]:(v.memoizedState=[d,p],d)}a(b_,"updateCallback");function ls(d,p){var v=$a();p=p===void 0?null:p;var C=v.memoizedState;if(p!==null&&hi(p,C[1]))return C[0];if(C=d(),hu){he(!0);try{d()}finally{he(!1)}}return v.memoizedState=[C,p],C}a(ls,"updateMemo");function bl(d,p,v){return v===void 0||(du&1073741824)!==0?d.memoizedState=p:(d.memoizedState=v,d=Im(),In.lanes|=d,Eu|=d,v)}a(bl,"mountDeferredValueImpl");function xy(d,p,v,C){return Ss(v,p)?v:Md.current!==null?(d=bl(d,v,C),Ss(d,p)||(ni=!0),d):(du&42)===0?(ni=!0,d.memoizedState=v):(d=Im(),In.lanes|=d,Eu|=d,p)}a(xy,"updateDeferredValueImpl");function x_(d,p,v,C,N){var L=H.p;H.p=L!==0&&8>L?L:8;var X=V.T,ne={};V.T=ne,hm(d,!1,p,v);try{var be=N(),Fe=V.S;if(Fe!==null&&Fe(ne,be),be!==null&&typeof be=="object"&&typeof be.then=="function"){var nt=vD(be,C);nh(d,p,nt,Ms(d))}else nh(d,p,C,Ms(d))}catch(ct){nh(d,p,{then:a(function(){},"then"),status:"rejected",reason:ct},Ms())}finally{H.p=L,V.T=X}}a(x_,"startTransition");function wy(){}a(wy,"noop$2");function _y(d,p,v,C){if(d.tag!==5)throw Error(r(476));var N=Ey(d).queue;x_(d,N,p,Y,v===null?wy:function(){return w_(d),v(C)})}a(_y,"startHostTransition");function Ey(d){var p=d.memoizedState;if(p!==null)return p;p={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:Y},next:null};var v={};return p.next={memoizedState:v,baseState:v,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:v},next:null},d.memoizedState=p,d=d.alternate,d!==null&&(d.memoizedState=p),p}a(Ey,"ensureFormComponentIsStateful");function w_(d){var p=Ey(d).next.queue;nh(d,p,{},Ms())}a(w_,"requestFormReset$1");function fm(){return ki(Jm)}a(fm,"useHostTransitionStatus");function Sy(){return $a().memoizedState}a(Sy,"updateId");function oc(){return $a().memoizedState}a(oc,"updateRefresh");function xD(d){for(var p=d.return;p!==null;){switch(p.tag){case 24:case 3:var v=Ms();d=No(v);var C=uu(p,d,v);C!==null&&(Ls(C,p,v),Zf(C,p,v)),p={cache:ko()},d.payload=p;return}p=p.return}}a(xD,"refreshCache");function mu(d,p,v){var C=Ms();v={lane:C,revertLane:0,action:v,hasEagerState:!1,eagerState:null,next:null},Cy(d)?Mj(p,v):(v=hl(d,p,v,C),v!==null&&(Ls(v,d,C),Lj(v,p,C)))}a(mu,"dispatchReducerAction");function __(d,p,v){var C=Ms();nh(d,p,v,C)}a(__,"dispatchSetState");function nh(d,p,v,C){var N={lane:C,revertLane:0,action:v,hasEagerState:!1,eagerState:null,next:null};if(Cy(d))Mj(p,N);else{var L=d.alternate;if(d.lanes===0&&(L===null||L.lanes===0)&&(L=p.lastRenderedReducer,L!==null))try{var X=p.lastRenderedState,ne=L(X,v);if(N.hasEagerState=!0,N.eagerState=ne,Ss(ne,X))return Ed(d,p,N,0),Br===null&&ty(),!1}catch{}if(v=hl(d,p,N,C),v!==null)return Ls(v,d,C),Lj(v,p,C),!0}return!1}a(nh,"dispatchSetStateInternal");function hm(d,p,v,C){if(C={lane:2,revertLane:zm(),action:C,hasEagerState:!1,eagerState:null,next:null},Cy(d)){if(p)throw Error(r(479))}else p=hl(d,v,C,2),p!==null&&Ls(p,d,2)}a(hm,"dispatchOptimisticSetState");function Cy(d){var p=d.alternate;return d===In||p!==null&&p===In}a(Cy,"isRenderPhaseUpdate");function Mj(d,p){fu=Fa=!0;var v=d.pending;v===null?p.next=p:(p.next=v.next,v.next=p),d.pending=p}a(Mj,"enqueueRenderPhaseUpdate");function Lj(d,p,v){if((v&4194048)!==0){var C=p.lanes;C&=d.pendingLanes,v|=C,p.lanes=v,Ht(d,v)}}a(Lj,"entangleTransitionUpdate");var pm={readContext:ki,use:cy,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useLayoutEffect:ha,useInsertionEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useSyncExternalStore:ha,useId:ha,useHostTransitionStatus:ha,useFormState:ha,useActionState:ha,useOptimistic:ha,useMemoCache:ha,useCacheRefresh:ha},E_={readContext:ki,use:cy,useCallback:a(function(d,p){return Bi().memoizedState=[d,p===void 0?null:p],d},"useCallback"),useContext:ki,useEffect:Dj,useImperativeHandle:a(function(d,p,v){v=v!=null?v.concat([d]):null,pu(4194308,4,dm.bind(null,p,d),v)},"useImperativeHandle"),useLayoutEffect:a(function(d,p){return pu(4194308,4,d,p)},"useLayoutEffect"),useInsertionEffect:a(function(d,p){pu(4,2,d,p)},"useInsertionEffect"),useMemo:a(function(d,p){var v=Bi();p=p===void 0?null:p;var C=d();if(hu){he(!0);try{d()}finally{he(!1)}}return v.memoizedState=[C,p],C},"useMemo"),useReducer:a(function(d,p,v){var C=Bi();if(v!==void 0){var N=v(p);if(hu){he(!0);try{v(p)}finally{he(!1)}}}else N=p;return C.memoizedState=C.baseState=N,d={pending:null,lanes:0,dispatch:null,lastRenderedReducer:d,lastRenderedState:N},C.queue=d,d=d.dispatch=mu.bind(null,In,d),[C.memoizedState,d]},"useReducer"),useRef:a(function(d){var p=Bi();return d={current:d},p.memoizedState=d},"useRef"),useState:a(function(d){d=fy(d);var p=d.queue,v=__.bind(null,In,p);return p.dispatch=v,[d.memoizedState,v]},"useState"),useDebugValue:by,useDeferredValue:a(function(d,p){var v=Bi();return bl(v,d,p)},"useDeferredValue"),useTransition:a(function(){var d=fy(!1);return d=x_.bind(null,In,d.queue,!0,!1),Bi().memoizedState=d,[!1,d]},"useTransition"),useSyncExternalStore:a(function(d,p,v){var C=In,N=Bi();if(ir){if(v===void 0)throw Error(r(407));v=v()}else{if(v=p(),Br===null)throw Error(r(349));(nr&124)!==0||d_(C,p,v)}N.memoizedState=v;var L={value:v,getSnapshot:p};return N.queue=L,Dj(Tj.bind(null,C,L,d),[d]),C.flags|=2048,Rn(9,vy(),uy.bind(null,C,L,v,p),null),v},"useSyncExternalStore"),useId:a(function(){var d=Bi(),p=Br.identifierPrefix;if(ir){var v=ea,C=Ir;v=(C&~(1<<32-ge(C)-1)).toString(32)+v,p="Â«"+p+"R"+v,v=Ts++,0<v&&(p+="H"+v.toString(32)),p+="Â»"}else v=Fd++,p="Â«"+p+"r"+v.toString(32)+"Â»";return d.memoizedState=p},"useId"),useHostTransitionStatus:fm,useFormState:py,useActionState:py,useOptimistic:a(function(d){var p=Bi();p.memoizedState=p.baseState=d;var v={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return p.queue=v,p=hm.bind(null,In,!0,v),v.dispatch=p,[d,p]},"useOptimistic"),useMemoCache:l_,useCacheRefresh:a(function(){return Bi().memoizedState=xD.bind(null,In)},"useCacheRefresh")},Fj={readContext:ki,use:cy,useCallback:b_,useContext:ki,useEffect:Ij,useImperativeHandle:yy,useInsertionEffect:ks,useLayoutEffect:Pj,useMemo:ls,useReducer:um,useRef:Oj,useState:a(function(){return um(Do)},"useState"),useDebugValue:by,useDeferredValue:a(function(d,p){var v=$a();return xy(v,Ar.memoizedState,d,p)},"useDeferredValue"),useTransition:a(function(){var d=um(Do)[0],p=$a().memoizedState;return[typeof d=="boolean"?d:sc(d),p]},"useTransition"),useSyncExternalStore:Rj,useId:Sy,useHostTransitionStatus:fm,useFormState:y_,useActionState:y_,useOptimistic:a(function(d,p){var v=$a();return h_(v,Ar,d,p)},"useOptimistic"),useMemoCache:l_,useCacheRefresh:oc},$j={readContext:ki,use:cy,useCallback:b_,useContext:ki,useEffect:Ij,useImperativeHandle:yy,useInsertionEffect:ks,useLayoutEffect:Pj,useMemo:ls,useReducer:u_,useRef:Oj,useState:a(function(){return u_(Do)},"useState"),useDebugValue:by,useDeferredValue:a(function(d,p){var v=$a();return Ar===null?bl(v,d,p):xy(v,Ar.memoizedState,d,p)},"useDeferredValue"),useTransition:a(function(){var d=u_(Do)[0],p=$a().memoizedState;return[typeof d=="boolean"?d:sc(d),p]},"useTransition"),useSyncExternalStore:Rj,useId:Sy,useHostTransitionStatus:fm,useFormState:gy,useActionState:gy,useOptimistic:a(function(d,p){var v=$a();return Ar!==null?h_(v,Ar,d,p):(v.baseState=d,[d,v.queue.dispatch])},"useOptimistic"),useMemoCache:l_,useCacheRefresh:oc},Ud=null,ti=0;function Ns(d){var p=ti;return ti+=1,Ud===null&&(Ud=[]),Ej(Ud,d,p)}a(Ns,"unwrapThenable");function mm(d,p){p=p.props.ref,d.ref=p!==void 0?p:null}a(mm,"coerceRef");function jy(d,p){throw p.$$typeof===m?Error(r(525)):(d=Object.prototype.toString.call(p),Error(r(31,d==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":d)))}a(jy,"throwOnInvalidObjectType");function gm(d){var p=d._init;return p(d._payload)}a(gm,"resolveLazy");function Bd(d){function p(Ie,Ae){if(d){var Le=Ie.deletions;Le===null?(Ie.deletions=[Ae],Ie.flags|=16):Le.push(Ae)}}a(p,"deleteChild");function v(Ie,Ae){if(!d)return null;for(;Ae!==null;)p(Ie,Ae),Ae=Ae.sibling;return null}a(v,"deleteRemainingChildren");function C(Ie){for(var Ae=new Map;Ie!==null;)Ie.key!==null?Ae.set(Ie.key,Ie):Ae.set(Ie.index,Ie),Ie=Ie.sibling;return Ae}a(C,"mapRemainingChildren");function N(Ie,Ae){return Ie=js(Ie,Ae),Ie.index=0,Ie.sibling=null,Ie}a(N,"useFiber");function L(Ie,Ae,Le){return Ie.index=Le,d?(Le=Ie.alternate,Le!==null?(Le=Le.index,Le<Ae?(Ie.flags|=67108866,Ae):Le):(Ie.flags|=67108866,Ae)):(Ie.flags|=1048576,Ae)}a(L,"placeChild");function X(Ie){return d&&Ie.alternate===null&&(Ie.flags|=67108866),Ie}a(X,"placeSingleChild");function ne(Ie,Ae,Le,it){return Ae===null||Ae.tag!==6?(Ae=Jw(Le,Ie.mode,it),Ae.return=Ie,Ae):(Ae=N(Ae,Le),Ae.return=Ie,Ae)}a(ne,"updateTextNode");function be(Ie,Ae,Le,it){var Kt=Le.type;return Kt===w?nt(Ie,Ae,Le.props.children,it,Le.key):Ae!==null&&(Ae.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&gm(Kt)===Ae.type)?(Ae=N(Ae,Le.props),mm(Ae,Le),Ae.return=Ie,Ae):(Ae=jd(Le.type,Le.key,Le.props,null,Ie.mode,it),mm(Ae,Le),Ae.return=Ie,Ae)}a(be,"updateElement");function Fe(Ie,Ae,Le,it){return Ae===null||Ae.tag!==4||Ae.stateNode.containerInfo!==Le.containerInfo||Ae.stateNode.implementation!==Le.implementation?(Ae=Zw(Le,Ie.mode,it),Ae.return=Ie,Ae):(Ae=N(Ae,Le.children||[]),Ae.return=Ie,Ae)}a(Fe,"updatePortal");function nt(Ie,Ae,Le,it,Kt){return Ae===null||Ae.tag!==7?(Ae=Ad(Le,Ie.mode,it,Kt),Ae.return=Ie,Ae):(Ae=N(Ae,Le),Ae.return=Ie,Ae)}a(nt,"updateFragment");function ct(Ie,Ae,Le){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return Ae=Jw(""+Ae,Ie.mode,Le),Ae.return=Ie,Ae;if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case g:return Le=jd(Ae.type,Ae.key,Ae.props,null,Ie.mode,Le),mm(Le,Ae),Le.return=Ie,Le;case b:return Ae=Zw(Ae,Ie.mode,Le),Ae.return=Ie,Ae;case k:var it=Ae._init;return Ae=it(Ae._payload),ct(Ie,Ae,Le)}if(q(Ae)||U(Ae))return Ae=Ad(Ae,Ie.mode,Le,null),Ae.return=Ie,Ae;if(typeof Ae.then=="function")return ct(Ie,Ns(Ae),Le);if(Ae.$$typeof===A)return ct(Ie,gl(Ie,Ae),Le);jy(Ie,Ae)}return null}a(ct,"createChild");function Ue(Ie,Ae,Le,it){var Kt=Ae!==null?Ae.key:null;if(typeof Le=="string"&&Le!==""||typeof Le=="number"||typeof Le=="bigint")return Kt!==null?null:ne(Ie,Ae,""+Le,it);if(typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case g:return Le.key===Kt?be(Ie,Ae,Le,it):null;case b:return Le.key===Kt?Fe(Ie,Ae,Le,it):null;case k:return Kt=Le._init,Le=Kt(Le._payload),Ue(Ie,Ae,Le,it)}if(q(Le)||U(Le))return Kt!==null?null:nt(Ie,Ae,Le,it,null);if(typeof Le.then=="function")return Ue(Ie,Ae,Ns(Le),it);if(Le.$$typeof===A)return Ue(Ie,Ae,gl(Ie,Le),it);jy(Ie,Le)}return null}a(Ue,"updateSlot");function qe(Ie,Ae,Le,it,Kt){if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Ie=Ie.get(Le)||null,ne(Ae,Ie,""+it,Kt);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case g:return Ie=Ie.get(it.key===null?Le:it.key)||null,be(Ae,Ie,it,Kt);case b:return Ie=Ie.get(it.key===null?Le:it.key)||null,Fe(Ae,Ie,it,Kt);case k:var Bn=it._init;return it=Bn(it._payload),qe(Ie,Ae,Le,it,Kt)}if(q(it)||U(it))return Ie=Ie.get(Le)||null,nt(Ae,Ie,it,Kt,null);if(typeof it.then=="function")return qe(Ie,Ae,Le,Ns(it),Kt);if(it.$$typeof===A)return qe(Ie,Ae,Le,gl(Ae,it),Kt);jy(Ae,it)}return null}a(qe,"updateFromMap");function Zt(Ie,Ae,Le,it){for(var Kt=null,Bn=null,sn=Ae,gn=Ae=0,ai=null;sn!==null&&gn<Le.length;gn++){sn.index>gn?(ai=sn,sn=null):ai=sn.sibling;var dr=Ue(Ie,sn,Le[gn],it);if(dr===null){sn===null&&(sn=ai);break}d&&sn&&dr.alternate===null&&p(Ie,sn),Ae=L(dr,Ae,gn),Bn===null?Kt=dr:Bn.sibling=dr,Bn=dr,sn=ai}if(gn===Le.length)return v(Ie,sn),ir&&Td(Ie,gn),Kt;if(sn===null){for(;gn<Le.length;gn++)sn=ct(Ie,Le[gn],it),sn!==null&&(Ae=L(sn,Ae,gn),Bn===null?Kt=sn:Bn.sibling=sn,Bn=sn);return ir&&Td(Ie,gn),Kt}for(sn=C(sn);gn<Le.length;gn++)ai=qe(sn,Ie,gn,Le[gn],it),ai!==null&&(d&&ai.alternate!==null&&sn.delete(ai.key===null?gn:ai.key),Ae=L(ai,Ae,gn),Bn===null?Kt=ai:Bn.sibling=ai,Bn=ai);return d&&sn.forEach(function(yc){return p(Ie,yc)}),ir&&Td(Ie,gn),Kt}a(Zt,"reconcileChildrenArray");function fn(Ie,Ae,Le,it){if(Le==null)throw Error(r(151));for(var Kt=null,Bn=null,sn=Ae,gn=Ae=0,ai=null,dr=Le.next();sn!==null&&!dr.done;gn++,dr=Le.next()){sn.index>gn?(ai=sn,sn=null):ai=sn.sibling;var yc=Ue(Ie,sn,dr.value,it);if(yc===null){sn===null&&(sn=ai);break}d&&sn&&yc.alternate===null&&p(Ie,sn),Ae=L(yc,Ae,gn),Bn===null?Kt=yc:Bn.sibling=yc,Bn=yc,sn=ai}if(dr.done)return v(Ie,sn),ir&&Td(Ie,gn),Kt;if(sn===null){for(;!dr.done;gn++,dr=Le.next())dr=ct(Ie,dr.value,it),dr!==null&&(Ae=L(dr,Ae,gn),Bn===null?Kt=dr:Bn.sibling=dr,Bn=dr);return ir&&Td(Ie,gn),Kt}for(sn=C(sn);!dr.done;gn++,dr=Le.next())dr=qe(sn,Ie,gn,dr.value,it),dr!==null&&(d&&dr.alternate!==null&&sn.delete(dr.key===null?gn:dr.key),Ae=L(dr,Ae,gn),Bn===null?Kt=dr:Bn.sibling=dr,Bn=dr);return d&&sn.forEach(function(aI){return p(Ie,aI)}),ir&&Td(Ie,gn),Kt}a(fn,"reconcileChildrenIterator");function Tr(Ie,Ae,Le,it){if(typeof Le=="object"&&Le!==null&&Le.type===w&&Le.key===null&&(Le=Le.props.children),typeof Le=="object"&&Le!==null){switch(Le.$$typeof){case g:e:{for(var Kt=Le.key;Ae!==null;){if(Ae.key===Kt){if(Kt=Le.type,Kt===w){if(Ae.tag===7){v(Ie,Ae.sibling),it=N(Ae,Le.props.children),it.return=Ie,Ie=it;break e}}else if(Ae.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===k&&gm(Kt)===Ae.type){v(Ie,Ae.sibling),it=N(Ae,Le.props),mm(it,Le),it.return=Ie,Ie=it;break e}v(Ie,Ae);break}else p(Ie,Ae);Ae=Ae.sibling}Le.type===w?(it=Ad(Le.props.children,Ie.mode,it,Le.key),it.return=Ie,Ie=it):(it=jd(Le.type,Le.key,Le.props,null,Ie.mode,it),mm(it,Le),it.return=Ie,Ie=it)}return X(Ie);case b:e:{for(Kt=Le.key;Ae!==null;){if(Ae.key===Kt)if(Ae.tag===4&&Ae.stateNode.containerInfo===Le.containerInfo&&Ae.stateNode.implementation===Le.implementation){v(Ie,Ae.sibling),it=N(Ae,Le.children||[]),it.return=Ie,Ie=it;break e}else{v(Ie,Ae);break}else p(Ie,Ae);Ae=Ae.sibling}it=Zw(Le,Ie.mode,it),it.return=Ie,Ie=it}return X(Ie);case k:return Kt=Le._init,Le=Kt(Le._payload),Tr(Ie,Ae,Le,it)}if(q(Le))return Zt(Ie,Ae,Le,it);if(U(Le)){if(Kt=U(Le),typeof Kt!="function")throw Error(r(150));return Le=Kt.call(Le),fn(Ie,Ae,Le,it)}if(typeof Le.then=="function")return Tr(Ie,Ae,Ns(Le),it);if(Le.$$typeof===A)return Tr(Ie,Ae,gl(Ie,Le),it);jy(Ie,Le)}return typeof Le=="string"&&Le!==""||typeof Le=="number"||typeof Le=="bigint"?(Le=""+Le,Ae!==null&&Ae.tag===6?(v(Ie,Ae.sibling),it=N(Ae,Le),it.return=Ie,Ie=it):(v(Ie,Ae),it=Jw(Le,Ie.mode,it),it.return=Ie,Ie=it),X(Ie)):v(Ie,Ae)}return a(Tr,"reconcileChildFibersImpl"),function(Ie,Ae,Le,it){try{ti=0;var Kt=Tr(Ie,Ae,Le,it);return Ud=null,Kt}catch(sn){if(sn===im||sn===sy)throw sn;var Bn=Ti(29,sn,null,Ie.mode);return Bn.lanes=it,Bn.return=Ie,Bn}}}a(Bd,"createChildReconciler");var zd=Bd(!0),S_=Bd(!1),lo=ee(null),Io=null;function Os(d){var p=d.alternate;J(Ua,Ua.current&1),J(lo,d),Io===null&&(p===null||Md.current!==null||p.memoizedState!==null)&&(Io=d)}a(Os,"pushPrimaryTreeSuspenseHandler");function rh(d){if(d.tag===22){if(J(Ua,Ua.current),J(lo,d),Io===null){var p=d.alternate;p!==null&&p.memoizedState!==null&&(Io=d)}}else gu()}a(rh,"pushOffscreenSuspenseHandler");function gu(){J(Ua,Ua.current),J(lo,lo.current)}a(gu,"reuseSuspenseHandlerOnStack");function xl(d){Z(lo),Io===d&&(Io=null),Z(Ua)}a(xl,"popSuspenseHandler");var Ua=ee(0);function qd(d){for(var p=d;p!==null;){if(p.tag===13){var v=p.memoizedState;if(v!==null&&(v=v.dehydrated,v===null||v.data==="$?"||vh(v)))return p}else if(p.tag===19&&p.memoizedProps.revealOrder!==void 0){if((p.flags&128)!==0)return p}else if(p.child!==null){p.child.return=p,p=p.child;continue}if(p===d)break;for(;p.sibling===null;){if(p.return===null||p.return===d)return null;p=p.return}p.sibling.return=p.return,p=p.sibling}return null}a(qd,"findFirstSuspended");function Ay(d,p,v,C){p=d.memoizedState,v=v(C,p),v=v==null?p:h({},p,v),d.memoizedState=v,d.lanes===0&&(d.updateQueue.baseState=v)}a(Ay,"applyDerivedStateFromProps");var ah={enqueueSetState:a(function(d,p,v){d=d._reactInternals;var C=Ms(),N=No(C);N.payload=p,v!=null&&(N.callback=v),p=uu(d,N,C),p!==null&&(Ls(p,d,C),Zf(p,d,C))},"enqueueSetState"),enqueueReplaceState:a(function(d,p,v){d=d._reactInternals;var C=Ms(),N=No(C);N.tag=1,N.payload=p,v!=null&&(N.callback=v),p=uu(d,N,C),p!==null&&(Ls(p,d,C),Zf(p,d,C))},"enqueueReplaceState"),enqueueForceUpdate:a(function(d,p){d=d._reactInternals;var v=Ms(),C=No(v);C.tag=2,p!=null&&(C.callback=p),p=uu(d,C,v),p!==null&&(Ls(p,d,v),Zf(p,d,v))},"enqueueForceUpdate")};function Ry(d,p,v,C,N,L,X){return d=d.stateNode,typeof d.shouldComponentUpdate=="function"?d.shouldComponentUpdate(C,L,X):p.prototype&&p.prototype.isPureReactComponent?!Jp(v,C)||!Jp(N,L):!0}a(Ry,"checkShouldComponentUpdate");function vm(d,p,v,C){d=p.state,typeof p.componentWillReceiveProps=="function"&&p.componentWillReceiveProps(v,C),typeof p.UNSAFE_componentWillReceiveProps=="function"&&p.UNSAFE_componentWillReceiveProps(v,C),p.state!==d&&ah.enqueueReplaceState(p,p.state,null)}a(vm,"callComponentWillReceiveProps");function Hd(d,p){var v=p;if("ref"in p){v={};for(var C in p)C!=="ref"&&(v[C]=p[C])}if(d=d.defaultProps){v===p&&(v=h({},v));for(var N in d)v[N]===void 0&&(v[N]=d[N])}return v}a(Hd,"resolveClassComponentProps");var ym=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var p=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(p))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)};function bm(d){ym(d)}a(bm,"defaultOnUncaughtError");function C_(d){console.error(d)}a(C_,"defaultOnCaughtError");function Ty(d){ym(d)}a(Ty,"defaultOnRecoverableError");function ky(d,p){try{var v=d.onUncaughtError;v(p.value,{componentStack:p.stack})}catch(C){setTimeout(function(){throw C})}}a(ky,"logUncaughtError");function j_(d,p,v){try{var C=d.onCaughtError;C(v.value,{componentStack:v.stack,errorBoundary:p.tag===1?p.stateNode:null})}catch(N){setTimeout(function(){throw N})}}a(j_,"logCaughtError");function Po(d,p,v){return v=No(v),v.tag=3,v.payload={element:null},v.callback=function(){ky(d,p)},v}a(Po,"createRootErrorUpdate");function A_(d){return d=No(d),d.tag=3,d}a(A_,"createClassErrorUpdate");function R_(d,p,v,C){var N=v.type.getDerivedStateFromError;if(typeof N=="function"){var L=C.value;d.payload=function(){return N(L)},d.callback=function(){j_(p,v,C)}}var X=v.stateNode;X!==null&&typeof X.componentDidCatch=="function"&&(d.callback=function(){j_(p,v,C),typeof N!="function"&&(hc===null?hc=new Set([this]):hc.add(this));var ne=C.stack;this.componentDidCatch(C.value,{componentStack:ne!==null?ne:""})})}a(R_,"initializeClassErrorUpdate");function wD(d,p,v,C,N){if(v.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){if(p=v.alternate,p!==null&&Un(p,v,N,!0),v=lo.current,v!==null){switch(v.tag){case 13:return Io===null?Y_():v.alternate===null&&ma===0&&(ma=3),v.flags&=-257,v.flags|=65536,v.lanes=N,C===r_?v.flags|=16384:(p=v.updateQueue,p===null?v.updateQueue=new Set([C]):p.add(C),J_(d,C,N)),!1;case 22:return v.flags|=65536,C===r_?v.flags|=16384:(p=v.updateQueue,p===null?(p={transitions:null,markerInstances:null,retryQueue:new Set([C])},v.updateQueue=p):(v=p.retryQueue,v===null?p.retryQueue=new Set([C]):v.add(C)),J_(d,C,N)),!1}throw Error(r(435,v.tag))}return J_(d,C,N),Y_(),!1}if(ir)return p=lo.current,p!==null?((p.flags&65536)===0&&(p.flags|=256),p.flags|=65536,p.lanes=N,C!==kd&&(d=Error(r(422),{cause:C}),nm(Cs(d,v)))):(C!==kd&&(p=Error(r(423),{cause:C}),nm(Cs(p,v))),d=d.current.alternate,d.flags|=65536,N&=-N,d.lanes|=N,C=Cs(C,v),N=Po(d.stateNode,C,N),i_(d,N),ma!==4&&(ma=2)),!1;var L=Error(r(520),{cause:C});if(L=Cs(L,v),Om===null?Om=[L]:Om.push(L),ma!==4&&(ma=2),p===null)return!0;C=Cs(C,v),v=p;do{switch(v.tag){case 3:return v.flags|=65536,d=N&-N,v.lanes|=d,d=Po(v.stateNode,C,d),i_(v,d),!1;case 1:if(p=v.type,L=v.stateNode,(v.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(hc===null||!hc.has(L))))return v.flags|=65536,N&=-N,v.lanes|=N,N=A_(N),R_(N,d,v,C),i_(v,N),!1}v=v.return}while(v!==null);return!1}a(wD,"throwException");var T_=Error(r(461)),ni=!1;function pi(d,p,v,C){p.child=d===null?S_(p,null,v,C):zd(p,d.child,v,C)}a(pi,"reconcileChildren");function wl(d,p,v,C,N){v=v.render;var L=p.ref;if("ref"in C){var X={};for(var ne in C)ne!=="ref"&&(X[ne]=C[ne])}else X=C;return Od(p),C=lm(d,p,v,X,L,N),ne=cm(),d!==null&&!ni?(s_(d,p,N),cc(d,p,N)):(ir&&ne&&ay(p),p.flags|=1,pi(d,p,C,N),p.child)}a(wl,"updateForwardRef");function Ny(d,p,v,C,N){if(d===null){var L=v.type;return typeof L=="function"&&!ny(L)&&L.defaultProps===void 0&&v.compare===null?(p.tag=15,p.type=L,Oy(d,p,L,C,N)):(d=jd(v.type,null,C,p,p.mode,N),d.ref=p.ref,d.return=p,p.child=d)}if(L=d.child,!O_(d,N)){var X=L.memoizedProps;if(v=v.compare,v=v!==null?v:Jp,v(X,C)&&d.ref===p.ref)return cc(d,p,N)}return p.flags|=1,d=js(L,C),d.ref=p.ref,d.return=p,p.child=d}a(Ny,"updateMemoComponent");function Oy(d,p,v,C,N){if(d!==null){var L=d.memoizedProps;if(Jp(L,C)&&d.ref===p.ref)if(ni=!1,p.pendingProps=C=L,O_(d,N))(d.flags&131072)!==0&&(ni=!0);else return p.lanes=d.lanes,cc(d,p,N)}return dn(d,p,v,C,N)}a(Oy,"updateSimpleMemoComponent");function Dy(d,p,v){var C=p.pendingProps,N=C.children,L=d!==null?d.memoizedState:null;if(C.mode==="hidden"){if((p.flags&128)!==0){if(C=L!==null?L.baseLanes|v:v,d!==null){for(N=p.child=d.child,L=0;N!==null;)L=L|N.lanes|N.childLanes,N=N.sibling;p.childLanes=L&~C}else p.childLanes=0,p.child=null;return xm(d,p,C,v)}if((v&536870912)!==0)p.memoizedState={baseLanes:0,cachePool:null},d!==null&&vl(p,L!==null?L.cachePool:null),L!==null?eh(p,L):yl(),rh(p);else return p.lanes=p.childLanes=536870912,xm(d,p,L!==null?L.baseLanes|v:v,v)}else L!==null?(vl(p,L.cachePool),eh(p,L),gu(),p.memoizedState=null):(d!==null&&vl(p,null),yl(),gu());return pi(d,p,N,v),p.child}a(Dy,"updateOffscreenComponent");function xm(d,p,v,C){var N=n_();return N=N===null?null:{parent:Wa._currentValue,pool:N},p.memoizedState={baseLanes:v,cachePool:N},d!==null&&vl(p,null),yl(),rh(p),d!==null&&Un(d,p,C,!0),null}a(xm,"deferHiddenOffscreenComponent");function lc(d,p){var v=p.ref;if(v===null)d!==null&&d.ref!==null&&(p.flags|=4194816);else{if(typeof v!="function"&&typeof v!="object")throw Error(r(284));(d===null||d.ref!==v)&&(p.flags|=4194816)}}a(lc,"markRef");function dn(d,p,v,C,N){return Od(p),v=lm(d,p,v,C,void 0,N),C=cm(),d!==null&&!ni?(s_(d,p,N),cc(d,p,N)):(ir&&C&&ay(p),p.flags|=1,pi(d,p,v,N),p.child)}a(dn,"updateFunctionComponent");function wm(d,p,v,C,N,L){return Od(p),p.updateQueue=null,v=Aj(p,C,v,N),jj(d),C=cm(),d!==null&&!ni?(s_(d,p,L),cc(d,p,L)):(ir&&C&&ay(p),p.flags|=1,pi(d,p,v,L),p.child)}a(wm,"replayFunctionComponent");function Iy(d,p,v,C,N){if(Od(p),p.stateNode===null){var L=Cd,X=v.contextType;typeof X=="object"&&X!==null&&(L=ki(X)),L=new v(C,L),p.memoizedState=L.state!==null&&L.state!==void 0?L.state:null,L.updater=ah,p.stateNode=L,L._reactInternals=p,L=p.stateNode,L.props=C,L.state=p.memoizedState,L.refs={},sm(p),X=v.contextType,L.context=typeof X=="object"&&X!==null?ki(X):Cd,L.state=p.memoizedState,X=v.getDerivedStateFromProps,typeof X=="function"&&(Ay(p,v,X,C),L.state=p.memoizedState),typeof v.getDerivedStateFromProps=="function"||typeof L.getSnapshotBeforeUpdate=="function"||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(X=L.state,typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount(),X!==L.state&&ah.enqueueReplaceState(L,L.state,null),Oo(p,C,L,N),Pd(),L.state=p.memoizedState),typeof L.componentDidMount=="function"&&(p.flags|=4194308),C=!0}else if(d===null){L=p.stateNode;var ne=p.memoizedProps,be=Hd(v,ne);L.props=be;var Fe=L.context,nt=v.contextType;X=Cd,typeof nt=="object"&&nt!==null&&(X=ki(nt));var ct=v.getDerivedStateFromProps;nt=typeof ct=="function"||typeof L.getSnapshotBeforeUpdate=="function",ne=p.pendingProps!==ne,nt||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(ne||Fe!==X)&&vm(p,L,C,X),cu=!1;var Ue=p.memoizedState;L.state=Ue,Oo(p,C,L,N),Pd(),Fe=p.memoizedState,ne||Ue!==Fe||cu?(typeof ct=="function"&&(Ay(p,v,ct,C),Fe=p.memoizedState),(be=cu||Ry(p,v,be,C,Ue,Fe,X))?(nt||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount()),typeof L.componentDidMount=="function"&&(p.flags|=4194308)):(typeof L.componentDidMount=="function"&&(p.flags|=4194308),p.memoizedProps=C,p.memoizedState=Fe),L.props=C,L.state=Fe,L.context=X,C=be):(typeof L.componentDidMount=="function"&&(p.flags|=4194308),C=!1)}else{L=p.stateNode,Id(d,p),X=p.memoizedProps,nt=Hd(v,X),L.props=nt,ct=p.pendingProps,Ue=L.context,Fe=v.contextType,be=Cd,typeof Fe=="object"&&Fe!==null&&(be=ki(Fe)),ne=v.getDerivedStateFromProps,(Fe=typeof ne=="function"||typeof L.getSnapshotBeforeUpdate=="function")||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(X!==ct||Ue!==be)&&vm(p,L,C,be),cu=!1,Ue=p.memoizedState,L.state=Ue,Oo(p,C,L,N),Pd();var qe=p.memoizedState;X!==ct||Ue!==qe||cu||d!==null&&d.dependencies!==null&&iy(d.dependencies)?(typeof ne=="function"&&(Ay(p,v,ne,C),qe=p.memoizedState),(nt=cu||Ry(p,v,nt,C,Ue,qe,be)||d!==null&&d.dependencies!==null&&iy(d.dependencies))?(Fe||typeof L.UNSAFE_componentWillUpdate!="function"&&typeof L.componentWillUpdate!="function"||(typeof L.componentWillUpdate=="function"&&L.componentWillUpdate(C,qe,be),typeof L.UNSAFE_componentWillUpdate=="function"&&L.UNSAFE_componentWillUpdate(C,qe,be)),typeof L.componentDidUpdate=="function"&&(p.flags|=4),typeof L.getSnapshotBeforeUpdate=="function"&&(p.flags|=1024)):(typeof L.componentDidUpdate!="function"||X===d.memoizedProps&&Ue===d.memoizedState||(p.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||X===d.memoizedProps&&Ue===d.memoizedState||(p.flags|=1024),p.memoizedProps=C,p.memoizedState=qe),L.props=C,L.state=qe,L.context=be,C=nt):(typeof L.componentDidUpdate!="function"||X===d.memoizedProps&&Ue===d.memoizedState||(p.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||X===d.memoizedProps&&Ue===d.memoizedState||(p.flags|=1024),C=!1)}return L=C,lc(d,p),C=(p.flags&128)!==0,L||C?(L=p.stateNode,v=C&&typeof v.getDerivedStateFromError!="function"?null:L.render(),p.flags|=1,d!==null&&C?(p.child=zd(p,d.child,null,N),p.child=zd(p,null,v,N)):pi(d,p,v,N),p.memoizedState=L.state,d=p.child):d=cc(d,p,N),d}a(Iy,"updateClassComponent");function vu(d,p,v,C){return tm(),p.flags|=256,pi(d,p,v,C),p.child}a(vu,"mountHostRootWithoutHydrating");var k_={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _m(d){return{baseLanes:d,cachePool:wj()}}a(_m,"mountSuspenseOffscreenState");function Py(d,p,v){return d=d!==null?d.childLanes&~v:0,p&&(d|=uo),d}a(Py,"getRemainingWorkInPrimaryTree");function mi(d,p,v){var C=p.pendingProps,N=!1,L=(p.flags&128)!==0,X;if((X=L)||(X=d!==null&&d.memoizedState===null?!1:(Ua.current&2)!==0),X&&(N=!0,p.flags&=-129),X=(p.flags&32)!==0,p.flags&=-33,d===null){if(ir){if(N?Os(p):gu(),ir){var ne=Ur,be;if(be=ne){e:{for(be=ne,ne=is;be.nodeType!==8;){if(!ne){ne=null;break e}if(be=Oi(be.nextSibling),be===null){ne=null;break e}}ne=be}ne!==null?(p.memoizedState={dehydrated:ne,treeContext:Rd!==null?{id:Ir,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},be=Ti(18,null,null,0),be.stateNode=ne,be.return=p,p.child=be,fi=p,Ur=null,be=!0):be=!1}be||pl(p)}if(ne=p.memoizedState,ne!==null&&(ne=ne.dehydrated,ne!==null))return vh(ne)?p.lanes=32:p.lanes=536870912,null;xl(p)}return ne=C.children,C=C.fallback,N?(gu(),N=p.mode,ne=My({mode:"hidden",children:ne},N),C=Ad(C,N,v,null),ne.return=p,C.return=p,ne.sibling=C,p.child=ne,N=p.child,N.memoizedState=_m(v),N.childLanes=Py(d,X,v),p.memoizedState=k_,C):(Os(p),N_(p,ne))}if(be=d.memoizedState,be!==null&&(ne=be.dehydrated,ne!==null)){if(L)p.flags&256?(Os(p),p.flags&=-257,p=Ly(d,p,v)):p.memoizedState!==null?(gu(),p.child=d.child,p.flags|=128,p=null):(gu(),N=C.fallback,ne=p.mode,C=My({mode:"visible",children:C.children},ne),N=Ad(N,ne,v,null),N.flags|=2,C.return=p,N.return=p,C.sibling=N,p.child=C,zd(p,d.child,null,v),C=p.child,C.memoizedState=_m(v),C.childLanes=Py(d,X,v),p.memoizedState=k_,p=N);else if(Os(p),vh(ne)){if(X=ne.nextSibling&&ne.nextSibling.dataset,X)var Fe=X.dgst;X=Fe,C=Error(r(419)),C.stack="",C.digest=X,nm({value:C,source:null,stack:null}),p=Ly(d,p,v)}else if(ni||Un(d,p,v,!1),X=(v&d.childLanes)!==0,ni||X){if(X=Br,X!==null&&(C=v&-v,C=(C&42)!==0?1:Vt(C),C=(C&(X.suspendedLanes|v))!==0?0:C,C!==0&&C!==be.retryLane))throw be.retryLane=C,tc(d,C),Ls(X,d,C),T_;ne.data==="$?"||Y_(),p=Ly(d,p,v)}else ne.data==="$?"?(p.flags|=192,p.child=d.child,p=null):(d=be.treeContext,Ur=Oi(ne.nextSibling),fi=p,ir=!0,io=null,is=!1,d!==null&&(As[ao++]=Ir,As[ao++]=ea,As[ao++]=Rd,Ir=d.id,ea=d.overflow,Rd=p),p=N_(p,C.children),p.flags|=4096);return p}return N?(gu(),N=C.fallback,ne=p.mode,be=d.child,Fe=be.sibling,C=js(be,{mode:"hidden",children:C.children}),C.subtreeFlags=be.subtreeFlags&65011712,Fe!==null?N=js(Fe,N):(N=Ad(N,ne,v,null),N.flags|=2),N.return=p,C.return=p,C.sibling=N,p.child=C,C=N,N=p.child,ne=d.child.memoizedState,ne===null?ne=_m(v):(be=ne.cachePool,be!==null?(Fe=Wa._currentValue,be=be.parent!==Fe?{parent:Fe,pool:Fe}:be):be=wj(),ne={baseLanes:ne.baseLanes|v,cachePool:be}),N.memoizedState=ne,N.childLanes=Py(d,X,v),p.memoizedState=k_,C):(Os(p),v=d.child,d=v.sibling,v=js(v,{mode:"visible",children:C.children}),v.return=p,v.sibling=null,d!==null&&(X=p.deletions,X===null?(p.deletions=[d],p.flags|=16):X.push(d)),p.child=v,p.memoizedState=null,v)}a(mi,"updateSuspenseComponent");function N_(d,p){return p=My({mode:"visible",children:p},d.mode),p.return=d,d.child=p}a(N_,"mountSuspensePrimaryChildren");function My(d,p){return d=Ti(22,d,null,p),d.lanes=0,d.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},d}a(My,"mountWorkInProgressOffscreenFiber");function Ly(d,p,v){return zd(p,d.child,null,v),d=N_(p,p.pendingProps.children),d.flags|=2,p.memoizedState=null,d}a(Ly,"retrySuspenseComponentWithoutHydrating");function Uj(d,p,v){d.lanes|=p;var C=d.alternate;C!==null&&(C.lanes|=p),Kf(d.return,p,v)}a(Uj,"scheduleSuspenseWorkOnFiber");function Fy(d,p,v,C,N){var L=d.memoizedState;L===null?d.memoizedState={isBackwards:p,rendering:null,renderingStartTime:0,last:C,tail:v,tailMode:N}:(L.isBackwards=p,L.rendering=null,L.renderingStartTime=0,L.last=C,L.tail=v,L.tailMode=N)}a(Fy,"initSuspenseListRenderState");function Bj(d,p,v){var C=p.pendingProps,N=C.revealOrder,L=C.tail;if(pi(d,p,C.children,v),C=Ua.current,(C&2)!==0)C=C&1|2,p.flags|=128;else{if(d!==null&&(d.flags&128)!==0)e:for(d=p.child;d!==null;){if(d.tag===13)d.memoizedState!==null&&Uj(d,v,p);else if(d.tag===19)Uj(d,v,p);else if(d.child!==null){d.child.return=d,d=d.child;continue}if(d===p)break e;for(;d.sibling===null;){if(d.return===null||d.return===p)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}C&=1}switch(J(Ua,C),N){case"forwards":for(v=p.child,N=null;v!==null;)d=v.alternate,d!==null&&qd(d)===null&&(N=v),v=v.sibling;v=N,v===null?(N=p.child,p.child=null):(N=v.sibling,v.sibling=null),Fy(p,!1,N,v,L);break;case"backwards":for(v=null,N=p.child,p.child=null;N!==null;){if(d=N.alternate,d!==null&&qd(d)===null){p.child=N;break}d=N.sibling,N.sibling=v,v=N,N=d}Fy(p,!0,v,null,L);break;case"together":Fy(p,!1,null,null,void 0);break;default:p.memoizedState=null}return p.child}a(Bj,"updateSuspenseListComponent");function cc(d,p,v){if(d!==null&&(p.dependencies=d.dependencies),Eu|=p.lanes,(v&p.childLanes)===0)if(d!==null){if(Un(d,p,v,!1),(v&p.childLanes)===0)return null}else return null;if(d!==null&&p.child!==d.child)throw Error(r(153));if(p.child!==null){for(d=p.child,v=js(d,d.pendingProps),p.child=v,v.return=p;d.sibling!==null;)d=d.sibling,v=v.sibling=js(d,d.pendingProps),v.return=p;v.sibling=null}return p.child}a(cc,"bailoutOnAlreadyFinishedWork");function O_(d,p){return(d.lanes&p)!==0?!0:(d=d.dependencies,!!(d!==null&&iy(d)))}a(O_,"checkScheduledUpdateOrContext");function uc(d,p,v){switch(p.tag){case 3:we(p,p.stateNode.containerInfo),te(p,Wa,d.memoizedState.cache),tm();break;case 27:case 5:pe(p);break;case 4:we(p,p.stateNode.containerInfo);break;case 10:te(p,p.type,p.memoizedProps.value);break;case 13:var C=p.memoizedState;if(C!==null)return C.dehydrated!==null?(Os(p),p.flags|=128,null):(v&p.child.childLanes)!==0?mi(d,p,v):(Os(p),d=cc(d,p,v),d!==null?d.sibling:null);Os(p);break;case 19:var N=(d.flags&128)!==0;if(C=(v&p.childLanes)!==0,C||(Un(d,p,v,!1),C=(v&p.childLanes)!==0),N){if(C)return Bj(d,p,v);p.flags|=128}if(N=p.memoizedState,N!==null&&(N.rendering=null,N.tail=null,N.lastEffect=null),J(Ua,Ua.current),C)break;return null;case 22:case 23:return p.lanes=0,Dy(d,p,v);case 24:te(p,Wa,d.memoizedState.cache)}return cc(d,p,v)}a(uc,"attemptEarlyBailoutIfNoScheduledUpdate");function Ni(d,p,v){if(d!==null)if(d.memoizedProps!==p.pendingProps)ni=!0;else{if(!O_(d,v)&&(p.flags&128)===0)return ni=!1,uc(d,p,v);ni=(d.flags&131072)!==0}else ni=!1,ir&&(p.flags&1048576)!==0&&mj(p,ry,p.index);switch(p.lanes=0,p.tag){case 16:e:{d=p.pendingProps;var C=p.elementType,N=C._init;if(C=N(C._payload),p.type=C,typeof C=="function")ny(C)?(d=Hd(C,d),p.tag=1,p=Iy(null,p,C,d,v)):(p.tag=0,p=dn(null,p,C,d,v));else{if(C!=null){if(N=C.$$typeof,N===T){p.tag=11,p=wl(null,p,C,d,v);break e}else if(N===P){p.tag=14,p=Ny(null,p,C,d,v);break e}}throw p=W(C)||C,Error(r(306,p,""))}}return p;case 0:return dn(d,p,p.type,p.pendingProps,v);case 1:return C=p.type,N=Hd(C,p.pendingProps),Iy(d,p,C,N,v);case 3:e:{if(we(p,p.stateNode.containerInfo),d===null)throw Error(r(387));C=p.pendingProps;var L=p.memoizedState;N=L.element,Id(d,p),Oo(p,C,null,v);var X=p.memoizedState;if(C=X.cache,te(p,Wa,C),C!==L.cache&&os(p,[Wa],v,!0),Pd(),C=X.element,L.isDehydrated)if(L={element:C,isDehydrated:!1,cache:X.cache},p.updateQueue.baseState=L,p.memoizedState=L,p.flags&256){p=vu(d,p,C,v);break e}else if(C!==N){N=Cs(Error(r(424)),p),nm(N),p=vu(d,p,C,v);break e}else for(d=p.stateNode.containerInfo,d.nodeType===9?d=d.body:d=d.nodeName==="HTML"?d.ownerDocument.body:d,Ur=Oi(d.firstChild),fi=p,ir=!0,io=null,is=!0,v=S_(p,null,C,v),p.child=v;v;)v.flags=v.flags&-3|4096,v=v.sibling;else{if(tm(),C===N){p=cc(d,p,v);break e}pi(d,p,C,v)}p=p.child}return p;case 26:return lc(d,p),d===null?(v=NA(p.type,null,p.pendingProps,null))?p.memoizedState=v:ir||(v=p.type,d=p.pendingProps,C=Hm(de.current).createElement(v),C[nn]=p,C[en]=d,yi(C,v,d),qt(C),p.stateNode=C):p.memoizedState=NA(p.type,d.memoizedProps,p.pendingProps,d.memoizedState),null;case 27:return pe(p),d===null&&ir&&(C=p.stateNode=jA(p.type,p.pendingProps,de.current),fi=p,is=!0,N=Ur,mc(p.type)?(o1=N,Ur=Oi(C.firstChild)):Ur=N),pi(d,p,p.pendingProps.children,v),lc(d,p),d===null&&(p.flags|=4194304),p.child;case 5:return d===null&&ir&&((N=C=Ur)&&(C=qD(C,p.type,p.pendingProps,is),C!==null?(p.stateNode=C,fi=p,Ur=Oi(C.firstChild),is=!1,N=!0):N=!1),N||pl(p)),pe(p),N=p.type,L=p.pendingProps,X=d!==null?d.memoizedProps:null,C=L.children,ra(N,L)?C=null:X!==null&&ra(N,X)&&(p.flags|=32),p.memoizedState!==null&&(N=lm(d,p,yD,null,null,v),Jm._currentValue=N),lc(d,p),pi(d,p,C,v),p.child;case 6:return d===null&&ir&&((d=v=Ur)&&(v=SA(v,p.pendingProps,is),v!==null?(p.stateNode=v,fi=p,Ur=null,d=!0):d=!1),d||pl(p)),null;case 13:return mi(d,p,v);case 4:return we(p,p.stateNode.containerInfo),C=p.pendingProps,d===null?p.child=zd(p,null,C,v):pi(d,p,C,v),p.child;case 11:return wl(d,p,p.type,p.pendingProps,v);case 7:return pi(d,p,p.pendingProps,v),p.child;case 8:return pi(d,p,p.pendingProps.children,v),p.child;case 12:return pi(d,p,p.pendingProps.children,v),p.child;case 10:return C=p.pendingProps,te(p,p.type,C.value),pi(d,p,C.children,v),p.child;case 9:return N=p.type._context,C=p.pendingProps.children,Od(p),N=ki(N),C=C(N),p.flags|=1,pi(d,p,C,v),p.child;case 14:return Ny(d,p,p.type,p.pendingProps,v);case 15:return Oy(d,p,p.type,p.pendingProps,v);case 19:return Bj(d,p,v);case 31:return C=p.pendingProps,v=p.mode,C={mode:C.mode,children:C.children},d===null?(v=My(C,v),v.ref=p.ref,p.child=v,v.return=p,p=v):(v=js(d.child,C),v.ref=p.ref,p.child=v,v.return=p,p=v),p;case 22:return Dy(d,p,v);case 24:return Od(p),C=ki(Wa),d===null?(N=n_(),N===null&&(N=Br,L=ko(),N.pooledCache=L,L.refCount++,L!==null&&(N.pooledCacheLanes|=v),N=L),p.memoizedState={parent:C,cache:N},sm(p),te(p,Wa,N)):((d.lanes&v)!==0&&(Id(d,p),Oo(p,null,null,v),Pd()),N=d.memoizedState,L=p.memoizedState,N.parent!==C?(N={parent:C,cache:C},p.memoizedState=N,p.lanes===0&&(p.memoizedState=p.updateQueue.baseState=N),te(p,Wa,C)):(C=L.cache,te(p,Wa,C),C!==N.cache&&os(p,[Wa],v,!0))),pi(d,p,p.pendingProps.children,v),p.child;case 29:throw p.pendingProps}throw Error(r(156,p.tag))}a(Ni,"beginWork");function Mo(d){d.flags|=4}a(Mo,"markUpdate");function zj(d,p){if(p.type!=="stylesheet"||(p.state.loading&4)!==0)d.flags&=-16777217;else if(d.flags|=16777216,!PA(p)){if(p=lo.current,p!==null&&((nr&4194048)===nr?Io!==null:(nr&62914560)!==nr&&(nr&536870912)===0||p!==Io))throw Jf=r_,so;d.flags|=8192}}a(zj,"preloadResourceAndSuspendIfNeeded");function ih(d,p){p!==null&&(d.flags|=4),d.flags&16384&&(p=d.tag!==22?St():536870912,d.lanes|=p,ch|=p)}a(ih,"scheduleRetryEffect");function Em(d,p){if(!ir)switch(d.tailMode){case"hidden":p=d.tail;for(var v=null;p!==null;)p.alternate!==null&&(v=p),p=p.sibling;v===null?d.tail=null:v.sibling=null;break;case"collapsed":v=d.tail;for(var C=null;v!==null;)v.alternate!==null&&(C=v),v=v.sibling;C===null?p||d.tail===null?d.tail=null:d.tail.sibling=null:C.sibling=null}}a(Em,"cutOffTailIfNeeded");function ca(d){var p=d.alternate!==null&&d.alternate.child===d.child,v=0,C=0;if(p)for(var N=d.child;N!==null;)v|=N.lanes|N.childLanes,C|=N.subtreeFlags&65011712,C|=N.flags&65011712,N.return=d,N=N.sibling;else for(N=d.child;N!==null;)v|=N.lanes|N.childLanes,C|=N.subtreeFlags,C|=N.flags,N.return=d,N=N.sibling;return d.subtreeFlags|=C,d.childLanes=v,p}a(ca,"bubbleProperties");function Sm(d,p,v){var C=p.pendingProps;switch(e_(p),p.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ca(p),null;case 1:return ca(p),null;case 3:return v=p.stateNode,C=null,d!==null&&(C=d.memoizedState.cache),p.memoizedState.cache!==C&&(p.flags|=2048),ss(Wa),fe(),v.pendingContext&&(v.context=v.pendingContext,v.pendingContext=null),(d===null||d.child===null)&&(em(p)?Mo(p):d===null||d.memoizedState.isDehydrated&&(p.flags&256)===0||(p.flags|=1024,vj())),ca(p),null;case 26:return v=p.memoizedState,d===null?(Mo(p),v!==null?(ca(p),zj(p,v)):(ca(p),p.flags&=-16777217)):v?v!==d.memoizedState?(Mo(p),ca(p),zj(p,v)):(ca(p),p.flags&=-16777217):(d.memoizedProps!==C&&Mo(p),ca(p),p.flags&=-16777217),null;case 27:Se(p),v=de.current;var N=p.type;if(d!==null&&p.stateNode!=null)d.memoizedProps!==C&&Mo(p);else{if(!C){if(p.stateNode===null)throw Error(r(166));return ca(p),null}d=ie.current,em(p)?Nd(p):(d=jA(N,C,v),p.stateNode=d,Mo(p))}return ca(p),null;case 5:if(Se(p),v=p.type,d!==null&&p.stateNode!=null)d.memoizedProps!==C&&Mo(p);else{if(!C){if(p.stateNode===null)throw Error(r(166));return ca(p),null}if(d=ie.current,em(p))Nd(p);else{switch(N=Hm(de.current),d){case 1:d=N.createElementNS("http://www.w3.org/2000/svg",v);break;case 2:d=N.createElementNS("http://www.w3.org/1998/Math/MathML",v);break;default:switch(v){case"svg":d=N.createElementNS("http://www.w3.org/2000/svg",v);break;case"math":d=N.createElementNS("http://www.w3.org/1998/Math/MathML",v);break;case"script":d=N.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof C.is=="string"?N.createElement("select",{is:C.is}):N.createElement("select"),C.multiple?d.multiple=!0:C.size&&(d.size=C.size);break;default:d=typeof C.is=="string"?N.createElement(v,{is:C.is}):N.createElement(v)}}d[nn]=p,d[en]=C;e:for(N=p.child;N!==null;){if(N.tag===5||N.tag===6)d.appendChild(N.stateNode);else if(N.tag!==4&&N.tag!==27&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===p)break e;for(;N.sibling===null;){if(N.return===null||N.return===p)break e;N=N.return}N.sibling.return=N.return,N=N.sibling}p.stateNode=d;e:switch(yi(d,v,C),v){case"button":case"input":case"select":case"textarea":d=!!C.autoFocus;break e;case"img":d=!0;break e;default:d=!1}d&&Mo(p)}}return ca(p),p.flags&=-16777217,null;case 6:if(d&&p.stateNode!=null)d.memoizedProps!==C&&Mo(p);else{if(typeof C!="string"&&p.stateNode===null)throw Error(r(166));if(d=de.current,em(p)){if(d=p.stateNode,v=p.memoizedProps,C=null,N=fi,N!==null)switch(N.tag){case 27:case 5:C=N.memoizedProps}d[nn]=p,d=!!(d.nodeValue===v||C!==null&&C.suppressHydrationWarning===!0||wA(d.nodeValue,v)),d||pl(p)}else d=Hm(d).createTextNode(C),d[nn]=p,p.stateNode=d}return ca(p),null;case 13:if(C=p.memoizedState,d===null||d.memoizedState!==null&&d.memoizedState.dehydrated!==null){if(N=em(p),C!==null&&C.dehydrated!==null){if(d===null){if(!N)throw Error(r(318));if(N=p.memoizedState,N=N!==null?N.dehydrated:null,!N)throw Error(r(317));N[nn]=p}else tm(),(p.flags&128)===0&&(p.memoizedState=null),p.flags|=4;ca(p),N=!1}else N=vj(),d!==null&&d.memoizedState!==null&&(d.memoizedState.hydrationErrors=N),N=!0;if(!N)return p.flags&256?(xl(p),p):(xl(p),null)}if(xl(p),(p.flags&128)!==0)return p.lanes=v,p;if(v=C!==null,d=d!==null&&d.memoizedState!==null,v){C=p.child,N=null,C.alternate!==null&&C.alternate.memoizedState!==null&&C.alternate.memoizedState.cachePool!==null&&(N=C.alternate.memoizedState.cachePool.pool);var L=null;C.memoizedState!==null&&C.memoizedState.cachePool!==null&&(L=C.memoizedState.cachePool.pool),L!==N&&(C.flags|=2048)}return v!==d&&v&&(p.child.flags|=8192),ih(p,p.updateQueue),ca(p),null;case 4:return fe(),d===null&&Fs(p.stateNode.containerInfo),ca(p),null;case 10:return ss(p.type),ca(p),null;case 19:if(Z(Ua),N=p.memoizedState,N===null)return ca(p),null;if(C=(p.flags&128)!==0,L=N.rendering,L===null)if(C)Em(N,!1);else{if(ma!==0||d!==null&&(d.flags&128)!==0)for(d=p.child;d!==null;){if(L=qd(d),L!==null){for(p.flags|=128,Em(N,!1),d=L.updateQueue,p.updateQueue=d,ih(p,d),p.subtreeFlags=0,d=v,v=p.child;v!==null;)lu(v,d),v=v.sibling;return J(Ua,Ua.current&1|2),p.child}d=d.sibling}N.tail!==null&&We()>By&&(p.flags|=128,C=!0,Em(N,!1),p.lanes=4194304)}else{if(!C)if(d=qd(L),d!==null){if(p.flags|=128,C=!0,d=d.updateQueue,p.updateQueue=d,ih(p,d),Em(N,!0),N.tail===null&&N.tailMode==="hidden"&&!L.alternate&&!ir)return ca(p),null}else 2*We()-N.renderingStartTime>By&&v!==536870912&&(p.flags|=128,C=!0,Em(N,!1),p.lanes=4194304);N.isBackwards?(L.sibling=p.child,p.child=L):(d=N.last,d!==null?d.sibling=L:p.child=L,N.last=L)}return N.tail!==null?(p=N.tail,N.rendering=p,N.tail=p.sibling,N.renderingStartTime=We(),p.sibling=null,d=Ua.current,J(Ua,C?d&1|2:d&1),p):(ca(p),null);case 22:case 23:return xl(p),ly(),C=p.memoizedState!==null,d!==null?d.memoizedState!==null!==C&&(p.flags|=8192):C&&(p.flags|=8192),C?(v&536870912)!==0&&(p.flags&128)===0&&(ca(p),p.subtreeFlags&6&&(p.flags|=8192)):ca(p),v=p.updateQueue,v!==null&&ih(p,v.retryQueue),v=null,d!==null&&d.memoizedState!==null&&d.memoizedState.cachePool!==null&&(v=d.memoizedState.cachePool.pool),C=null,p.memoizedState!==null&&p.memoizedState.cachePool!==null&&(C=p.memoizedState.cachePool.pool),C!==v&&(p.flags|=2048),d!==null&&Z(Dd),null;case 24:return v=null,d!==null&&(v=d.memoizedState.cache),p.memoizedState.cache!==v&&(p.flags|=2048),ss(Wa),ca(p),null;case 25:return null;case 30:return null}throw Error(r(156,p.tag))}a(Sm,"completeWork");function qj(d,p){switch(e_(p),p.tag){case 1:return d=p.flags,d&65536?(p.flags=d&-65537|128,p):null;case 3:return ss(Wa),fe(),d=p.flags,(d&65536)!==0&&(d&128)===0?(p.flags=d&-65537|128,p):null;case 26:case 27:case 5:return Se(p),null;case 13:if(xl(p),d=p.memoizedState,d!==null&&d.dehydrated!==null){if(p.alternate===null)throw Error(r(340));tm()}return d=p.flags,d&65536?(p.flags=d&-65537|128,p):null;case 19:return Z(Ua),null;case 4:return fe(),null;case 10:return ss(p.type),null;case 22:case 23:return xl(p),ly(),d!==null&&Z(Dd),d=p.flags,d&65536?(p.flags=d&-65537|128,p):null;case 24:return ss(Wa),null;case 25:return null;default:return null}}a(qj,"unwindWork");function D_(d,p){switch(e_(p),p.tag){case 3:ss(Wa),fe();break;case 26:case 27:case 5:Se(p);break;case 4:fe();break;case 13:xl(p);break;case 19:Z(Ua);break;case 10:ss(p.type);break;case 22:case 23:xl(p),ly(),d!==null&&Z(Dd);break;case 24:ss(Wa)}}a(D_,"unwindInterruptedWork");function Cm(d,p){try{var v=p.updateQueue,C=v!==null?v.lastEffect:null;if(C!==null){var N=C.next;v=N;do{if((v.tag&d)===d){C=void 0;var L=v.create,X=v.inst;C=L(),X.destroy=C}v=v.next}while(v!==N)}}catch(ne){Pr(p,p.return,ne)}}a(Cm,"commitHookEffectListMount");function yu(d,p,v){try{var C=p.updateQueue,N=C!==null?C.lastEffect:null;if(N!==null){var L=N.next;C=L;do{if((C.tag&d)===d){var X=C.inst,ne=X.destroy;if(ne!==void 0){X.destroy=void 0,N=p;var be=v,Fe=ne;try{Fe()}catch(nt){Pr(N,be,nt)}}}C=C.next}while(C!==L)}}catch(nt){Pr(p,p.return,nt)}}a(yu,"commitHookEffectListUnmount");function Hj(d){var p=d.updateQueue;if(p!==null){var v=d.stateNode;try{Cj(p,v)}catch(C){Pr(d,d.return,C)}}}a(Hj,"commitClassCallbacks");function Vj(d,p,v){v.props=Hd(d.type,d.memoizedProps),v.state=d.memoizedState;try{v.componentWillUnmount()}catch(C){Pr(d,p,C)}}a(Vj,"safelyCallComponentWillUnmount");function sh(d,p){try{var v=d.ref;if(v!==null){switch(d.tag){case 26:case 27:case 5:var C=d.stateNode;break;case 30:C=d.stateNode;break;default:C=d.stateNode}typeof v=="function"?d.refCleanup=v(C):v.current=C}}catch(N){Pr(d,p,N)}}a(sh,"safelyAttachRef");function Lo(d,p){var v=d.ref,C=d.refCleanup;if(v!==null)if(typeof C=="function")try{C()}catch(N){Pr(d,p,N)}finally{d.refCleanup=null,d=d.alternate,d!=null&&(d.refCleanup=null)}else if(typeof v=="function")try{v(null)}catch(N){Pr(d,p,N)}else v.current=null}a(Lo,"safelyDetachRef");function Wj(d){var p=d.type,v=d.memoizedProps,C=d.stateNode;try{e:switch(p){case"button":case"input":case"select":case"textarea":v.autoFocus&&C.focus();break e;case"img":v.src?C.src=v.src:v.srcSet&&(C.srcset=v.srcSet)}}catch(N){Pr(d,d.return,N)}}a(Wj,"commitHostMount");function jm(d,p,v){try{var C=d.stateNode;i1(C,d.type,v,p),C[en]=p}catch(N){Pr(d,d.return,N)}}a(jm,"commitHostUpdate");function I_(d){return d.tag===5||d.tag===3||d.tag===26||d.tag===27&&mc(d.type)||d.tag===4}a(I_,"isHostParent");function Vd(d){e:for(;;){for(;d.sibling===null;){if(d.return===null||I_(d.return))return null;d=d.return}for(d.sibling.return=d.return,d=d.sibling;d.tag!==5&&d.tag!==6&&d.tag!==18;){if(d.tag===27&&mc(d.type)||d.flags&2||d.child===null||d.tag===4)continue e;d.child.return=d,d=d.child}if(!(d.flags&2))return d.stateNode}}a(Vd,"getHostSibling");function Am(d,p,v){var C=d.tag;if(C===5||C===6)d=d.stateNode,p?(v.nodeType===9?v.body:v.nodeName==="HTML"?v.ownerDocument.body:v).insertBefore(d,p):(p=v.nodeType===9?v.body:v.nodeName==="HTML"?v.ownerDocument.body:v,p.appendChild(d),v=v._reactRootContainer,v!=null||p.onclick!==null||(p.onclick=Ky));else if(C!==4&&(C===27&&mc(d.type)&&(v=d.stateNode,p=null),d=d.child,d!==null))for(Am(d,p,v),d=d.sibling;d!==null;)Am(d,p,v),d=d.sibling}a(Am,"insertOrAppendPlacementNodeIntoContainer");function Rm(d,p,v){var C=d.tag;if(C===5||C===6)d=d.stateNode,p?v.insertBefore(d,p):v.appendChild(d);else if(C!==4&&(C===27&&mc(d.type)&&(v=d.stateNode),d=d.child,d!==null))for(Rm(d,p,v),d=d.sibling;d!==null;)Rm(d,p,v),d=d.sibling}a(Rm,"insertOrAppendPlacementNode");function P_(d){var p=d.stateNode,v=d.memoizedProps;try{for(var C=d.type,N=p.attributes;N.length;)p.removeAttributeNode(N[0]);yi(p,C,v),p[nn]=d,p[en]=v}catch(L){Pr(d,d.return,L)}}a(P_,"commitHostSingletonAcquisition");var co=!1,pa=!1,Ds=!1,bu=typeof WeakSet=="function"?WeakSet:Set,ri=null;function Gj(d,p){if(d=d.containerInfo,s1=nb,d=dj(d),Yw(d)){if("selectionStart"in d)var v={start:d.selectionStart,end:d.selectionEnd};else e:{v=(v=d.ownerDocument)&&v.defaultView||window;var C=v.getSelection&&v.getSelection();if(C&&C.rangeCount!==0){v=C.anchorNode;var N=C.anchorOffset,L=C.focusNode;C=C.focusOffset;try{v.nodeType,L.nodeType}catch{v=null;break e}var X=0,ne=-1,be=-1,Fe=0,nt=0,ct=d,Ue=null;t:for(;;){for(var qe;ct!==v||N!==0&&ct.nodeType!==3||(ne=X+N),ct!==L||C!==0&&ct.nodeType!==3||(be=X+C),ct.nodeType===3&&(X+=ct.nodeValue.length),(qe=ct.firstChild)!==null;)Ue=ct,ct=qe;for(;;){if(ct===d)break t;if(Ue===v&&++Fe===N&&(ne=X),Ue===L&&++nt===C&&(be=X),(qe=ct.nextSibling)!==null)break;ct=Ue,Ue=ct.parentNode}ct=qe}v=ne===-1||be===-1?null:{start:ne,end:be}}else v=null}v=v||{start:0,end:0}}else v=null;for(Bo={focusedElem:d,selectionRange:v},nb=!1,ri=p;ri!==null;)if(p=ri,d=p.child,(p.subtreeFlags&1024)!==0&&d!==null)d.return=p,ri=d;else for(;ri!==null;){switch(p=ri,L=p.alternate,d=p.flags,p.tag){case 0:break;case 11:case 15:break;case 1:if((d&1024)!==0&&L!==null){d=void 0,v=p,N=L.memoizedProps,L=L.memoizedState,C=v.stateNode;try{var Zt=Hd(v.type,N,v.elementType===v.type);d=C.getSnapshotBeforeUpdate(Zt,L),C.__reactInternalSnapshotBeforeUpdate=d}catch(fn){Pr(v,v.return,fn)}}break;case 3:if((d&1024)!==0){if(d=p.stateNode.containerInfo,v=d.nodeType,v===9)Wm(d);else if(v===1)switch(d.nodeName){case"HEAD":case"HTML":case"BODY":Wm(d);break;default:d.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((d&1024)!==0)throw Error(r(163))}if(d=p.sibling,d!==null){d.return=p.return,ri=d;break}ri=p.return}}a(Gj,"commitBeforeMutationEffects");function Yj(d,p,v){var C=v.flags;switch(v.tag){case 0:case 11:case 15:xu(d,v),C&4&&Cm(5,v);break;case 1:if(xu(d,v),C&4)if(d=v.stateNode,p===null)try{d.componentDidMount()}catch(X){Pr(v,v.return,X)}else{var N=Hd(v.type,p.memoizedProps);p=p.memoizedState;try{d.componentDidUpdate(N,p,d.__reactInternalSnapshotBeforeUpdate)}catch(X){Pr(v,v.return,X)}}C&64&&Hj(v),C&512&&sh(v,v.return);break;case 3:if(xu(d,v),C&64&&(d=v.updateQueue,d!==null)){if(p=null,v.child!==null)switch(v.child.tag){case 27:case 5:p=v.child.stateNode;break;case 1:p=v.child.stateNode}try{Cj(d,p)}catch(X){Pr(v,v.return,X)}}break;case 27:p===null&&C&4&&P_(v);case 26:case 5:xu(d,v),p===null&&C&4&&Wj(v),C&512&&sh(v,v.return);break;case 12:xu(d,v);break;case 13:xu(d,v),C&4&&Qj(d,v),C&64&&(d=v.memoizedState,d!==null&&(d=d.dehydrated,d!==null&&(v=kD.bind(null,v),$s(d,v))));break;case 22:if(C=v.memoizedState!==null||co,!C){p=p!==null&&p.memoizedState!==null||pa,N=co;var L=pa;co=C,(pa=p)&&!L?wu(d,v,(v.subtreeFlags&8772)!==0):xu(d,v),co=N,pa=L}break;case 30:break;default:xu(d,v)}}a(Yj,"commitLayoutEffectOnFiber");function Kj(d){var p=d.alternate;p!==null&&(d.alternate=null,Kj(p)),d.child=null,d.deletions=null,d.sibling=null,d.tag===5&&(p=d.stateNode,p!==null&&pt(p)),d.stateNode=null,d.return=null,d.dependencies=null,d.memoizedProps=null,d.memoizedState=null,d.pendingProps=null,d.stateNode=null,d.updateQueue=null}a(Kj,"detachFiberAfterEffects");var ta=null,cs=!1;function dc(d,p,v){for(v=v.child;v!==null;)Xj(d,p,v),v=v.sibling}a(dc,"recursivelyTraverseDeletionEffects");function Xj(d,p,v){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(Ke,v)}catch{}switch(v.tag){case 26:pa||Lo(v,p),dc(d,p,v),v.memoizedState?v.memoizedState.count--:v.stateNode&&(v=v.stateNode,v.parentNode.removeChild(v));break;case 27:pa||Lo(v,p);var C=ta,N=cs;mc(v.type)&&(ta=v.stateNode,cs=!1),dc(d,p,v),Gm(v.stateNode),ta=C,cs=N;break;case 5:pa||Lo(v,p);case 6:if(C=ta,N=cs,ta=null,dc(d,p,v),ta=C,cs=N,ta!==null)if(cs)try{(ta.nodeType===9?ta.body:ta.nodeName==="HTML"?ta.ownerDocument.body:ta).removeChild(v.stateNode)}catch(L){Pr(v,p,L)}else try{ta.removeChild(v.stateNode)}catch(L){Pr(v,p,L)}break;case 18:ta!==null&&(cs?(d=ta,gh(d.nodeType===9?d.body:d.nodeName==="HTML"?d.ownerDocument.body:d,v.stateNode),ng(d)):gh(ta,v.stateNode));break;case 4:C=ta,N=cs,ta=v.stateNode.containerInfo,cs=!0,dc(d,p,v),ta=C,cs=N;break;case 0:case 11:case 14:case 15:pa||yu(2,v,p),pa||yu(4,v,p),dc(d,p,v);break;case 1:pa||(Lo(v,p),C=v.stateNode,typeof C.componentWillUnmount=="function"&&Vj(v,p,C)),dc(d,p,v);break;case 21:dc(d,p,v);break;case 22:pa=(C=pa)||v.memoizedState!==null,dc(d,p,v),pa=C;break;default:dc(d,p,v)}}a(Xj,"commitDeletionEffectsOnFiber");function Qj(d,p){if(p.memoizedState===null&&(d=p.alternate,d!==null&&(d=d.memoizedState,d!==null&&(d=d.dehydrated,d!==null))))try{ng(d)}catch(v){Pr(p,p.return,v)}}a(Qj,"commitSuspenseHydrationCallbacks");function _D(d){switch(d.tag){case 13:case 19:var p=d.stateNode;return p===null&&(p=d.stateNode=new bu),p;case 22:return d=d.stateNode,p=d._retryCache,p===null&&(p=d._retryCache=new bu),p;default:throw Error(r(435,d.tag))}}a(_D,"getRetryCache");function M_(d,p){var v=_D(d);p.forEach(function(C){var N=Wy.bind(null,d,C);v.has(C)||(v.add(C),C.then(N,N))})}a(M_,"attachSuspenseRetryListeners");function Is(d,p){var v=p.deletions;if(v!==null)for(var C=0;C<v.length;C++){var N=v[C],L=d,X=p,ne=X;e:for(;ne!==null;){switch(ne.tag){case 27:if(mc(ne.type)){ta=ne.stateNode,cs=!1;break e}break;case 5:ta=ne.stateNode,cs=!1;break e;case 3:case 4:ta=ne.stateNode.containerInfo,cs=!0;break e}ne=ne.return}if(ta===null)throw Error(r(160));Xj(L,X,N),ta=null,cs=!1,L=N.alternate,L!==null&&(L.return=null),N.return=null}if(p.subtreeFlags&13878)for(p=p.child;p!==null;)L_(p,d),p=p.sibling}a(Is,"recursivelyTraverseMutationEffects");var Fo=null;function L_(d,p){var v=d.alternate,C=d.flags;switch(d.tag){case 0:case 11:case 14:case 15:Is(p,d),us(d),C&4&&(yu(3,d,d.return),Cm(3,d),yu(5,d,d.return));break;case 1:Is(p,d),us(d),C&512&&(pa||v===null||Lo(v,v.return)),C&64&&co&&(d=d.updateQueue,d!==null&&(C=d.callbacks,C!==null&&(v=d.shared.hiddenCallbacks,d.shared.hiddenCallbacks=v===null?C:v.concat(C))));break;case 26:var N=Fo;if(Is(p,d),us(d),C&512&&(pa||v===null||Lo(v,v.return)),C&4){var L=v!==null?v.memoizedState:null;if(C=d.memoizedState,v===null)if(C===null)if(d.stateNode===null){e:{C=d.type,v=d.memoizedProps,N=N.ownerDocument||N;t:switch(C){case"title":L=N.getElementsByTagName("title")[0],(!L||L[mt]||L[nn]||L.namespaceURI==="http://www.w3.org/2000/svg"||L.hasAttribute("itemprop"))&&(L=N.createElement(C),N.head.insertBefore(L,N.querySelector("head > title"))),yi(L,C,v),L[nn]=d,qt(L),C=L;break e;case"link":var X=Zy("link","href",N).get(C+(v.href||""));if(X){for(var ne=0;ne<X.length;ne++)if(L=X[ne],L.getAttribute("href")===(v.href==null||v.href===""?null:v.href)&&L.getAttribute("rel")===(v.rel==null?null:v.rel)&&L.getAttribute("title")===(v.title==null?null:v.title)&&L.getAttribute("crossorigin")===(v.crossOrigin==null?null:v.crossOrigin)){X.splice(ne,1);break t}}L=N.createElement(C),yi(L,C,v),N.head.appendChild(L);break;case"meta":if(X=Zy("meta","content",N).get(C+(v.content||""))){for(ne=0;ne<X.length;ne++)if(L=X[ne],L.getAttribute("content")===(v.content==null?null:""+v.content)&&L.getAttribute("name")===(v.name==null?null:v.name)&&L.getAttribute("property")===(v.property==null?null:v.property)&&L.getAttribute("http-equiv")===(v.httpEquiv==null?null:v.httpEquiv)&&L.getAttribute("charset")===(v.charSet==null?null:v.charSet)){X.splice(ne,1);break t}}L=N.createElement(C),yi(L,C,v),N.head.appendChild(L);break;default:throw Error(r(468,C))}L[nn]=d,qt(L),C=L}d.stateNode=C}else IA(N,d.type,d.stateNode);else d.stateNode=DA(N,C,d.memoizedProps);else L!==C?(L===null?v.stateNode!==null&&(v=v.stateNode,v.parentNode.removeChild(v)):L.count--,C===null?IA(N,d.type,d.stateNode):DA(N,C,d.memoizedProps)):C===null&&d.stateNode!==null&&jm(d,d.memoizedProps,v.memoizedProps)}break;case 27:Is(p,d),us(d),C&512&&(pa||v===null||Lo(v,v.return)),v!==null&&C&4&&jm(d,d.memoizedProps,v.memoizedProps);break;case 5:if(Is(p,d),us(d),C&512&&(pa||v===null||Lo(v,v.return)),d.flags&32){N=d.stateNode;try{tu(N,"")}catch(qe){Pr(d,d.return,qe)}}C&4&&d.stateNode!=null&&(N=d.memoizedProps,jm(d,N,v!==null?v.memoizedProps:N)),C&1024&&(Ds=!0);break;case 6:if(Is(p,d),us(d),C&4){if(d.stateNode===null)throw Error(r(162));C=d.memoizedProps,v=d.stateNode;try{v.nodeValue=C}catch(qe){Pr(d,d.return,qe)}}break;case 3:if(Jy=null,N=Fo,Fo=ho(p.containerInfo),Is(p,d),Fo=N,us(d),C&4&&v!==null&&v.memoizedState.isDehydrated)try{ng(p.containerInfo)}catch(qe){Pr(d,d.return,qe)}Ds&&(Ds=!1,F_(d));break;case 4:C=Fo,Fo=ho(d.stateNode.containerInfo),Is(p,d),us(d),Fo=C;break;case 12:Is(p,d),us(d);break;case 13:Is(p,d),us(d),d.child.flags&8192&&d.memoizedState!==null!=(v!==null&&v.memoizedState!==null)&&(H_=We()),C&4&&(C=d.updateQueue,C!==null&&(d.updateQueue=null,M_(d,C)));break;case 22:N=d.memoizedState!==null;var be=v!==null&&v.memoizedState!==null,Fe=co,nt=pa;if(co=Fe||N,pa=nt||be,Is(p,d),pa=nt,co=Fe,us(d),C&8192)e:for(p=d.stateNode,p._visibility=N?p._visibility&-2:p._visibility|1,N&&(v===null||be||co||pa||Wd(d)),v=null,p=d;;){if(p.tag===5||p.tag===26){if(v===null){be=v=p;try{if(L=be.stateNode,N)X=L.style,typeof X.setProperty=="function"?X.setProperty("display","none","important"):X.display="none";else{ne=be.stateNode;var ct=be.memoizedProps.style,Ue=ct!=null&&ct.hasOwnProperty("display")?ct.display:null;ne.style.display=Ue==null||typeof Ue=="boolean"?"":(""+Ue).trim()}}catch(qe){Pr(be,be.return,qe)}}}else if(p.tag===6){if(v===null){be=p;try{be.stateNode.nodeValue=N?"":be.memoizedProps}catch(qe){Pr(be,be.return,qe)}}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===d)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===d)break e;for(;p.sibling===null;){if(p.return===null||p.return===d)break e;v===p&&(v=null),p=p.return}v===p&&(v=null),p.sibling.return=p.return,p=p.sibling}C&4&&(C=d.updateQueue,C!==null&&(v=C.retryQueue,v!==null&&(C.retryQueue=null,M_(d,v))));break;case 19:Is(p,d),us(d),C&4&&(C=d.updateQueue,C!==null&&(d.updateQueue=null,M_(d,C)));break;case 30:break;case 21:break;default:Is(p,d),us(d)}}a(L_,"commitMutationEffectsOnFiber");function us(d){var p=d.flags;if(p&2){try{for(var v,C=d.return;C!==null;){if(I_(C)){v=C;break}C=C.return}if(v==null)throw Error(r(160));switch(v.tag){case 27:var N=v.stateNode,L=Vd(d);Rm(d,L,N);break;case 5:var X=v.stateNode;v.flags&32&&(tu(X,""),v.flags&=-33);var ne=Vd(d);Rm(d,ne,X);break;case 3:case 4:var be=v.stateNode.containerInfo,Fe=Vd(d);Am(d,Fe,be);break;default:throw Error(r(161))}}catch(nt){Pr(d,d.return,nt)}d.flags&=-3}p&4096&&(d.flags&=-4097)}a(us,"commitReconciliationEffects");function F_(d){if(d.subtreeFlags&1024)for(d=d.child;d!==null;){var p=d;F_(p),p.tag===5&&p.flags&1024&&p.stateNode.reset(),d=d.sibling}}a(F_,"recursivelyResetForms");function xu(d,p){if(p.subtreeFlags&8772)for(p=p.child;p!==null;)Yj(d,p.alternate,p),p=p.sibling}a(xu,"recursivelyTraverseLayoutEffects");function Wd(d){for(d=d.child;d!==null;){var p=d;switch(p.tag){case 0:case 11:case 14:case 15:yu(4,p,p.return),Wd(p);break;case 1:Lo(p,p.return);var v=p.stateNode;typeof v.componentWillUnmount=="function"&&Vj(p,p.return,v),Wd(p);break;case 27:Gm(p.stateNode);case 26:case 5:Lo(p,p.return),Wd(p);break;case 22:p.memoizedState===null&&Wd(p);break;case 30:Wd(p);break;default:Wd(p)}d=d.sibling}}a(Wd,"recursivelyTraverseDisappearLayoutEffects");function wu(d,p,v){for(v=v&&(p.subtreeFlags&8772)!==0,p=p.child;p!==null;){var C=p.alternate,N=d,L=p,X=L.flags;switch(L.tag){case 0:case 11:case 15:wu(N,L,v),Cm(4,L);break;case 1:if(wu(N,L,v),C=L,N=C.stateNode,typeof N.componentDidMount=="function")try{N.componentDidMount()}catch(Fe){Pr(C,C.return,Fe)}if(C=L,N=C.updateQueue,N!==null){var ne=C.stateNode;try{var be=N.shared.hiddenCallbacks;if(be!==null)for(N.shared.hiddenCallbacks=null,N=0;N<be.length;N++)Rs(be[N],ne)}catch(Fe){Pr(C,C.return,Fe)}}v&&X&64&&Hj(L),sh(L,L.return);break;case 27:P_(L);case 26:case 5:wu(N,L,v),v&&C===null&&X&4&&Wj(L),sh(L,L.return);break;case 12:wu(N,L,v);break;case 13:wu(N,L,v),v&&X&4&&Qj(N,L);break;case 22:L.memoizedState===null&&wu(N,L,v),sh(L,L.return);break;case 30:break;default:wu(N,L,v)}p=p.sibling}}a(wu,"recursivelyTraverseReappearLayoutEffects");function $y(d,p){var v=null;d!==null&&d.memoizedState!==null&&d.memoizedState.cachePool!==null&&(v=d.memoizedState.cachePool.pool),d=null,p.memoizedState!==null&&p.memoizedState.cachePool!==null&&(d=p.memoizedState.cachePool.pool),d!==v&&(d!=null&&d.refCount++,v!=null&&rm(v))}a($y,"commitOffscreenPassiveMountEffects");function $_(d,p){d=null,p.alternate!==null&&(d=p.alternate.memoizedState.cache),p=p.memoizedState.cache,p!==d&&(p.refCount++,d!=null&&rm(d))}a($_,"commitCachePassiveMountEffect");function _l(d,p,v,C){if(p.subtreeFlags&10256)for(p=p.child;p!==null;)Jj(d,p,v,C),p=p.sibling}a(_l,"recursivelyTraversePassiveMountEffects");function Jj(d,p,v,C){var N=p.flags;switch(p.tag){case 0:case 11:case 15:_l(d,p,v,C),N&2048&&Cm(9,p);break;case 1:_l(d,p,v,C);break;case 3:_l(d,p,v,C),N&2048&&(d=null,p.alternate!==null&&(d=p.alternate.memoizedState.cache),p=p.memoizedState.cache,p!==d&&(p.refCount++,d!=null&&rm(d)));break;case 12:if(N&2048){_l(d,p,v,C),d=p.stateNode;try{var L=p.memoizedProps,X=L.id,ne=L.onPostCommit;typeof ne=="function"&&ne(X,p.alternate===null?"mount":"update",d.passiveEffectDuration,-0)}catch(be){Pr(p,p.return,be)}}else _l(d,p,v,C);break;case 13:_l(d,p,v,C);break;case 23:break;case 22:L=p.stateNode,X=p.alternate,p.memoizedState!==null?L._visibility&2?_l(d,p,v,C):Tm(d,p):L._visibility&2?_l(d,p,v,C):(L._visibility|=2,oh(d,p,v,C,(p.subtreeFlags&10256)!==0)),N&2048&&$y(X,p);break;case 24:_l(d,p,v,C),N&2048&&$_(p.alternate,p);break;default:_l(d,p,v,C)}}a(Jj,"commitPassiveMountOnFiber");function oh(d,p,v,C,N){for(N=N&&(p.subtreeFlags&10256)!==0,p=p.child;p!==null;){var L=d,X=p,ne=v,be=C,Fe=X.flags;switch(X.tag){case 0:case 11:case 15:oh(L,X,ne,be,N),Cm(8,X);break;case 23:break;case 22:var nt=X.stateNode;X.memoizedState!==null?nt._visibility&2?oh(L,X,ne,be,N):Tm(L,X):(nt._visibility|=2,oh(L,X,ne,be,N)),N&&Fe&2048&&$y(X.alternate,X);break;case 24:oh(L,X,ne,be,N),N&&Fe&2048&&$_(X.alternate,X);break;default:oh(L,X,ne,be,N)}p=p.sibling}}a(oh,"recursivelyTraverseReconnectPassiveEffects");function Tm(d,p){if(p.subtreeFlags&10256)for(p=p.child;p!==null;){var v=d,C=p,N=C.flags;switch(C.tag){case 22:Tm(v,C),N&2048&&$y(C.alternate,C);break;case 24:Tm(v,C),N&2048&&$_(C.alternate,C);break;default:Tm(v,C)}p=p.sibling}}a(Tm,"recursivelyTraverseAtomicPassiveEffects");var km=8192;function gi(d){if(d.subtreeFlags&km)for(d=d.child;d!==null;)Zj(d),d=d.sibling}a(gi,"recursivelyAccumulateSuspenseyCommit");function Zj(d){switch(d.tag){case 26:gi(d),d.flags&km&&d.memoizedState!==null&&KD(Fo,d.memoizedState,d.memoizedProps);break;case 5:gi(d);break;case 3:case 4:var p=Fo;Fo=ho(d.stateNode.containerInfo),gi(d),Fo=p;break;case 22:d.memoizedState===null&&(p=d.alternate,p!==null&&p.memoizedState!==null?(p=km,km=16777216,gi(d),km=p):gi(d));break;default:gi(d)}}a(Zj,"accumulateSuspenseyCommitOnFiber");function eA(d){var p=d.alternate;if(p!==null&&(d=p.child,d!==null)){p.child=null;do p=d.sibling,d.sibling=null,d=p;while(d!==null)}}a(eA,"detachAlternateSiblings");function Nm(d){var p=d.deletions;if((d.flags&16)!==0){if(p!==null)for(var v=0;v<p.length;v++){var C=p[v];ri=C,tA(C,d)}eA(d)}if(d.subtreeFlags&10256)for(d=d.child;d!==null;)U_(d),d=d.sibling}a(Nm,"recursivelyTraversePassiveUnmountEffects");function U_(d){switch(d.tag){case 0:case 11:case 15:Nm(d),d.flags&2048&&yu(9,d,d.return);break;case 3:Nm(d);break;case 12:Nm(d);break;case 22:var p=d.stateNode;d.memoizedState!==null&&p._visibility&2&&(d.return===null||d.return.tag!==13)?(p._visibility&=-3,Uy(d)):Nm(d);break;default:Nm(d)}}a(U_,"commitPassiveUnmountOnFiber");function Uy(d){var p=d.deletions;if((d.flags&16)!==0){if(p!==null)for(var v=0;v<p.length;v++){var C=p[v];ri=C,tA(C,d)}eA(d)}for(d=d.child;d!==null;){switch(p=d,p.tag){case 0:case 11:case 15:yu(8,p,p.return),Uy(p);break;case 22:v=p.stateNode,v._visibility&2&&(v._visibility&=-3,Uy(p));break;default:Uy(p)}d=d.sibling}}a(Uy,"recursivelyTraverseDisconnectPassiveEffects");function tA(d,p){for(;ri!==null;){var v=ri;switch(v.tag){case 0:case 11:case 15:yu(8,v,p);break;case 23:case 22:if(v.memoizedState!==null&&v.memoizedState.cachePool!==null){var C=v.memoizedState.cachePool.pool;C!=null&&C.refCount++}break;case 24:rm(v.memoizedState.cache)}if(C=v.child,C!==null)C.return=v,ri=C;else e:for(v=d;ri!==null;){C=ri;var N=C.sibling,L=C.return;if(Kj(C),C===v){ri=null;break e}if(N!==null){N.return=L,ri=N;break e}ri=L}}}a(tA,"commitPassiveUnmountEffectsInsideOfDeletedTree_begin");var ED={getCacheForType:a(function(d){var p=ki(Wa),v=p.data.get(d);return v===void 0&&(v=d(),p.data.set(d,v)),v},"getCacheForType")},SD=typeof WeakMap=="function"?WeakMap:Map,pr=0,Br=null,Xn=null,nr=0,_r=0,Ps=null,_u=!1,lh=!1,B_=!1,fc=0,ma=0,Eu=0,Gd=0,z_=0,uo=0,ch=0,Om=null,ds=null,q_=!1,H_=0,By=1/0,uh=null,hc=null,vi=0,Su=null,dh=null,fh=0,V_=0,W_=null,nA=null,Dm=0,zy=null;function Ms(){if((pr&2)!==0&&nr!==0)return nr&-nr;if(V.T!==null){var d=Xf;return d!==0?d:zm()}return ln()}a(Ms,"requestUpdateLane");function Im(){uo===0&&(uo=(nr&536870912)===0||ir?rt():536870912);var d=lo.current;return d!==null&&(d.flags|=32),uo}a(Im,"requestDeferredLane");function Ls(d,p,v){(d===Br&&(_r===2||_r===9)||d.cancelPendingCommit!==null)&&(hh(d,0),Cu(d,nr,uo,!1)),Tt(d,v),((pr&2)===0||d!==Br)&&(d===Br&&((pr&2)===0&&(Gd|=v),ma===4&&Cu(d,nr,uo,!1)),$o(d))}a(Ls,"scheduleUpdateOnFiber");function rA(d,p,v){if((pr&6)!==0)throw Error(r(327));var C=!v&&(p&124)===0&&(p&d.expiredLanes)===0||je(d,p),N=C?AD(d,p):K_(d,p,!0),L=C;do{if(N===0){lh&&!C&&Cu(d,p,0,!1);break}else{if(v=d.current.alternate,L&&!CD(v)){N=K_(d,p,!1),L=!1;continue}if(N===2){if(L=p,d.errorRecoveryDisabledLanes&L)var X=0;else X=d.pendingLanes&-536870913,X=X!==0?X:X&536870912?536870912:0;if(X!==0){p=X;e:{var ne=d;N=Om;var be=ne.current.memoizedState.isDehydrated;if(be&&(hh(ne,X).flags|=256),X=K_(ne,X,!1),X!==2){if(B_&&!be){ne.errorRecoveryDisabledLanes|=L,Gd|=L,N=4;break e}L=ds,ds=N,L!==null&&(ds===null?ds=L:ds.push.apply(ds,L))}N=X}if(L=!1,N!==2)continue}}if(N===1){hh(d,0),Cu(d,p,0,!0);break}e:{switch(C=d,L=N,L){case 0:case 1:throw Error(r(345));case 4:if((p&4194048)!==p)break;case 6:Cu(C,p,uo,!_u);break e;case 2:ds=null;break;case 3:case 5:break;default:throw Error(r(329))}if((p&62914560)===p&&(N=H_+300-We(),10<N)){if(Cu(C,p,uo,!_u),_e(C,0,!0)!==0)break e;C.timeoutHandle=_A(aA.bind(null,C,v,ds,uh,q_,p,uo,Gd,ch,_u,L,2,-0,0),N);break e}aA(C,v,ds,uh,q_,p,uo,Gd,ch,_u,L,0,-0,0)}}break}while(!0);$o(d)}a(rA,"performWorkOnRoot");function aA(d,p,v,C,N,L,X,ne,be,Fe,nt,ct,Ue,qe){if(d.timeoutHandle=-1,ct=p.subtreeFlags,(ct&8192||(ct&16785408)===16785408)&&(ga={stylesheets:null,count:0,unsuspend:fs},Zj(p),ct=XD(),ct!==null)){d.cancelPendingCommit=ct(cA.bind(null,d,p,L,v,C,N,X,ne,be,nt,1,Ue,qe)),Cu(d,L,X,!Fe);return}cA(d,p,L,v,C,N,X,ne,be)}a(aA,"commitRootWhenReady");function CD(d){for(var p=d;;){var v=p.tag;if((v===0||v===11||v===15)&&p.flags&16384&&(v=p.updateQueue,v!==null&&(v=v.stores,v!==null)))for(var C=0;C<v.length;C++){var N=v[C],L=N.getSnapshot;N=N.value;try{if(!Ss(L(),N))return!1}catch{return!1}}if(v=p.child,p.subtreeFlags&16384&&v!==null)v.return=p,p=v;else{if(p===d)break;for(;p.sibling===null;){if(p.return===null||p.return===d)return!0;p=p.return}p.sibling.return=p.return,p=p.sibling}}return!0}a(CD,"isRenderConsistentWithExternalStores");function Cu(d,p,v,C){p&=~z_,p&=~Gd,d.suspendedLanes|=p,d.pingedLanes&=~p,C&&(d.warmLanes|=p),C=d.expirationTimes;for(var N=p;0<N;){var L=31-ge(N),X=1<<L;C[L]=-1,N&=~X}v!==0&&Ct(d,v,p)}a(Cu,"markRootSuspended");function qy(){return(pr&6)===0?($m(0),!1):!0}a(qy,"flushSyncWork$1");function G_(){if(Xn!==null){if(_r===0)var d=Xn.return;else d=Xn,ml=To=null,$d(d),Ud=null,ti=0,d=Xn;for(;d!==null;)D_(d.alternate,d),d=d.return;Xn=null}}a(G_,"resetWorkInProgressStack");function hh(d,p){var v=d.timeoutHandle;v!==-1&&(d.timeoutHandle=-1,UD(v)),v=d.cancelPendingCommit,v!==null&&(d.cancelPendingCommit=null,v()),G_(),Br=d,Xn=v=js(d.current,null),nr=p,_r=0,Ps=null,_u=!1,lh=je(d,p),B_=!1,ch=uo=z_=Gd=Eu=ma=0,ds=Om=null,q_=!1,(p&8)!==0&&(p|=p&32);var C=d.entangledLanes;if(C!==0)for(d=d.entanglements,C&=p;0<C;){var N=31-ge(C),L=1<<N;p|=d[N],C&=~L}return fc=p,ty(),v}a(hh,"prepareFreshStack");function iA(d,p){In=null,V.H=pm,p===im||p===sy?(p=a_(),_r=3):p===so?(p=a_(),_r=4):_r=p===T_?8:p!==null&&typeof p=="object"&&typeof p.then=="function"?6:1,Ps=p,Xn===null&&(ma=1,ky(d,Cs(p,d.current)))}a(iA,"handleThrow");function sA(){var d=V.H;return V.H=pm,d===null?pm:d}a(sA,"pushDispatcher");function oA(){var d=V.A;return V.A=ED,d}a(oA,"pushAsyncDispatcher");function Y_(){ma=4,_u||(nr&4194048)!==nr&&lo.current!==null||(lh=!0),(Eu&134217727)===0&&(Gd&134217727)===0||Br===null||Cu(Br,nr,uo,!1)}a(Y_,"renderDidSuspendDelayIfPossible");function K_(d,p,v){var C=pr;pr|=2;var N=sA(),L=oA();(Br!==d||nr!==p)&&(uh=null,hh(d,p)),p=!1;var X=ma;e:do try{if(_r!==0&&Xn!==null){var ne=Xn,be=Ps;switch(_r){case 8:G_(),X=6;break e;case 3:case 2:case 9:case 6:lo.current===null&&(p=!0);var Fe=_r;if(_r=0,Ps=null,ph(d,ne,be,Fe),v&&lh){X=0;break e}break;default:Fe=_r,_r=0,Ps=null,ph(d,ne,be,Fe)}}jD(),X=ma;break}catch(nt){iA(d,nt)}while(!0);return p&&d.shellSuspendCounter++,ml=To=null,pr=C,V.H=N,V.A=L,Xn===null&&(Br=null,nr=0,ty()),X}a(K_,"renderRootSync");function jD(){for(;Xn!==null;)X_(Xn)}a(jD,"workLoopSync");function AD(d,p){var v=pr;pr|=2;var C=sA(),N=oA();Br!==d||nr!==p?(uh=null,By=We()+500,hh(d,p)):lh=je(d,p);e:do try{if(_r!==0&&Xn!==null){p=Xn;var L=Ps;t:switch(_r){case 1:_r=0,Ps=null,ph(d,p,L,1);break;case 2:case 9:if(_j(L)){_r=0,Ps=null,Q_(p);break}p=a(function(){_r!==2&&_r!==9||Br!==d||(_r=7),$o(d)},"lanes"),L.then(p,p);break e;case 3:_r=7;break e;case 4:_r=5;break e;case 7:_j(L)?(_r=0,Ps=null,Q_(p)):(_r=0,Ps=null,ph(d,p,L,7));break;case 5:var X=null;switch(Xn.tag){case 26:X=Xn.memoizedState;case 5:case 27:var ne=Xn;if(!X||PA(X)){_r=0,Ps=null;var be=ne.sibling;if(be!==null)Xn=be;else{var Fe=ne.return;Fe!==null?(Xn=Fe,Hy(Fe)):Xn=null}break t}}_r=0,Ps=null,ph(d,p,L,5);break;case 6:_r=0,Ps=null,ph(d,p,L,6);break;case 8:G_(),ma=6;break e;default:throw Error(r(462))}}RD();break}catch(nt){iA(d,nt)}while(!0);return ml=To=null,V.H=C,V.A=N,pr=v,Xn!==null?0:(Br=null,nr=0,ty(),ma)}a(AD,"renderRootConcurrent");function RD(){for(;Xn!==null&&!ke();)X_(Xn)}a(RD,"workLoopConcurrentByScheduler");function X_(d){var p=Ni(d.alternate,d,fc);d.memoizedProps=d.pendingProps,p===null?Hy(d):Xn=p}a(X_,"performUnitOfWork");function Q_(d){var p=d,v=p.alternate;switch(p.tag){case 15:case 0:p=wm(v,p,p.pendingProps,p.type,void 0,nr);break;case 11:p=wm(v,p,p.pendingProps,p.type.render,p.ref,nr);break;case 5:$d(p);default:D_(v,p),p=Xn=lu(p,fc),p=Ni(v,p,fc)}d.memoizedProps=d.pendingProps,p===null?Hy(d):Xn=p}a(Q_,"replaySuspendedUnitOfWork");function ph(d,p,v,C){ml=To=null,$d(p),Ud=null,ti=0;var N=p.return;try{if(wD(d,N,p,v,nr)){ma=1,ky(d,Cs(v,d.current)),Xn=null;return}}catch(L){if(N!==null)throw Xn=N,L;ma=1,ky(d,Cs(v,d.current)),Xn=null;return}p.flags&32768?(ir||C===1?d=!0:lh||(nr&536870912)!==0?d=!1:(_u=d=!0,(C===2||C===9||C===3||C===6)&&(C=lo.current,C!==null&&C.tag===13&&(C.flags|=16384))),lA(p,d)):Hy(p)}a(ph,"throwAndUnwindWorkLoop");function Hy(d){var p=d;do{if((p.flags&32768)!==0){lA(p,_u);return}d=p.return;var v=Sm(p.alternate,p,fc);if(v!==null){Xn=v;return}if(p=p.sibling,p!==null){Xn=p;return}Xn=p=d}while(p!==null);ma===0&&(ma=5)}a(Hy,"completeUnitOfWork");function lA(d,p){do{var v=qj(d.alternate,d);if(v!==null){v.flags&=32767,Xn=v;return}if(v=d.return,v!==null&&(v.flags|=32768,v.subtreeFlags=0,v.deletions=null),!p&&(d=d.sibling,d!==null)){Xn=d;return}Xn=d=v}while(d!==null);ma=6,Xn=null}a(lA,"unwindUnitOfWork");function cA(d,p,v,C,N,L,X,ne,be){d.cancelPendingCommit=null;do Vy();while(vi!==0);if((pr&6)!==0)throw Error(r(327));if(p!==null){if(p===d.current)throw Error(r(177));if(L=p.lanes|p.childLanes,L|=Xw,Nt(d,v,L,X,ne,be),d===Br&&(Xn=Br=null,nr=0),dh=p,Su=d,fh=v,V_=L,W_=N,nA=C,(p.subtreeFlags&10256)!==0||(p.flags&10256)!==0?(d.callbackNode=null,d.callbackPriority=0,ND(Rt,function(){return hA(),null})):(d.callbackNode=null,d.callbackPriority=0),C=(p.flags&13878)!==0,(p.subtreeFlags&13878)!==0||C){C=V.T,V.T=null,N=H.p,H.p=2,X=pr,pr|=4;try{Gj(d,p,v)}finally{pr=X,H.p=N,V.T=C}}vi=1,Pm(),uA(),dA()}}a(cA,"commitRoot");function Pm(){if(vi===1){vi=0;var d=Su,p=dh,v=(p.flags&13878)!==0;if((p.subtreeFlags&13878)!==0||v){v=V.T,V.T=null;var C=H.p;H.p=2;var N=pr;pr|=4;try{L_(p,d);var L=Bo,X=dj(d.containerInfo),ne=L.focusedElem,be=L.selectionRange;if(X!==ne&&ne&&ne.ownerDocument&&Gw(ne.ownerDocument.documentElement,ne)){if(be!==null&&Yw(ne)){var Fe=be.start,nt=be.end;if(nt===void 0&&(nt=Fe),"selectionStart"in ne)ne.selectionStart=Fe,ne.selectionEnd=Math.min(nt,ne.value.length);else{var ct=ne.ownerDocument||document,Ue=ct&&ct.defaultView||window;if(Ue.getSelection){var qe=Ue.getSelection(),Zt=ne.textContent.length,fn=Math.min(be.start,Zt),Tr=be.end===void 0?fn:Math.min(be.end,Zt);!qe.extend&&fn>Tr&&(X=Tr,Tr=fn,fn=X);var Ie=no(ne,fn),Ae=no(ne,Tr);if(Ie&&Ae&&(qe.rangeCount!==1||qe.anchorNode!==Ie.node||qe.anchorOffset!==Ie.offset||qe.focusNode!==Ae.node||qe.focusOffset!==Ae.offset)){var Le=ct.createRange();Le.setStart(Ie.node,Ie.offset),qe.removeAllRanges(),fn>Tr?(qe.addRange(Le),qe.extend(Ae.node,Ae.offset)):(Le.setEnd(Ae.node,Ae.offset),qe.addRange(Le))}}}}for(ct=[],qe=ne;qe=qe.parentNode;)qe.nodeType===1&&ct.push({element:qe,left:qe.scrollLeft,top:qe.scrollTop});for(typeof ne.focus=="function"&&ne.focus(),ne=0;ne<ct.length;ne++){var it=ct[ne];it.element.scrollLeft=it.left,it.element.scrollTop=it.top}}nb=!!s1,Bo=s1=null}finally{pr=N,H.p=C,V.T=v}}d.current=p,vi=2}}a(Pm,"flushMutationEffects");function uA(){if(vi===2){vi=0;var d=Su,p=dh,v=(p.flags&8772)!==0;if((p.subtreeFlags&8772)!==0||v){v=V.T,V.T=null;var C=H.p;H.p=2;var N=pr;pr|=4;try{Yj(d,p.alternate,p)}finally{pr=N,H.p=C,V.T=v}}vi=3}}a(uA,"flushLayoutEffects");function dA(){if(vi===4||vi===3){vi=0,Xe();var d=Su,p=dh,v=fh,C=nA;(p.subtreeFlags&10256)!==0||(p.flags&10256)!==0?vi=5:(vi=0,dh=Su=null,fA(d,d.pendingLanes));var N=d.pendingLanes;if(N===0&&(hc=null),an(v),p=p.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(Ke,p,void 0,(p.current.flags&128)===128)}catch{}if(C!==null){p=V.T,N=H.p,H.p=2,V.T=null;try{for(var L=d.onRecoverableError,X=0;X<C.length;X++){var ne=C[X];L(ne.value,{componentStack:ne.stack})}}finally{V.T=p,H.p=N}}(fh&3)!==0&&Vy(),$o(d),N=d.pendingLanes,(v&4194090)!==0&&(N&42)!==0?d===zy?Dm++:(Dm=0,zy=d):Dm=0,$m(0)}}a(dA,"flushSpawnedWork");function fA(d,p){(d.pooledCacheLanes&=p)===0&&(p=d.pooledCache,p!=null&&(d.pooledCache=null,rm(p)))}a(fA,"releaseRootPooledCache");function Vy(d){return Pm(),uA(),dA(),hA()}a(Vy,"flushPendingEffects");function hA(){if(vi!==5)return!1;var d=Su,p=V_;V_=0;var v=an(fh),C=V.T,N=H.p;try{H.p=32>v?32:v,V.T=null,v=W_,W_=null;var L=Su,X=fh;if(vi=0,dh=Su=null,fh=0,(pr&6)!==0)throw Error(r(331));var ne=pr;if(pr|=4,U_(L.current),Jj(L,L.current,X,v),pr=ne,$m(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(Ke,L)}catch{}return!0}finally{H.p=N,V.T=C,fA(d,p)}}a(hA,"flushPassiveEffects");function pA(d,p,v){p=Cs(v,p),p=Po(d.stateNode,p,2),d=uu(d,p,2),d!==null&&(Tt(d,2),$o(d))}a(pA,"captureCommitPhaseErrorOnRoot");function Pr(d,p,v){if(d.tag===3)pA(d,d,v);else for(;p!==null;){if(p.tag===3){pA(p,d,v);break}else if(p.tag===1){var C=p.stateNode;if(typeof p.type.getDerivedStateFromError=="function"||typeof C.componentDidCatch=="function"&&(hc===null||!hc.has(C))){d=Cs(v,d),v=A_(2),C=uu(p,v,2),C!==null&&(R_(v,C,p,d),Tt(C,2),$o(C));break}}p=p.return}}a(Pr,"captureCommitPhaseError");function J_(d,p,v){var C=d.pingCache;if(C===null){C=d.pingCache=new SD;var N=new Set;C.set(p,N)}else N=C.get(p),N===void 0&&(N=new Set,C.set(p,N));N.has(v)||(B_=!0,N.add(v),d=TD.bind(null,d,p,v),p.then(d,d))}a(J_,"attachPingListener");function TD(d,p,v){var C=d.pingCache;C!==null&&C.delete(p),d.pingedLanes|=d.suspendedLanes&v,d.warmLanes&=~v,Br===d&&(nr&v)===v&&(ma===4||ma===3&&(nr&62914560)===nr&&300>We()-H_?(pr&2)===0&&hh(d,0):z_|=v,ch===nr&&(ch=0)),$o(d)}a(TD,"pingSuspendedRoot");function mA(d,p){p===0&&(p=St()),d=tc(d,p),d!==null&&(Tt(d,p),$o(d))}a(mA,"retryTimedOutBoundary");function kD(d){var p=d.memoizedState,v=0;p!==null&&(v=p.retryLane),mA(d,v)}a(kD,"retryDehydratedSuspenseBoundary");function Wy(d,p){var v=0;switch(d.tag){case 13:var C=d.stateNode,N=d.memoizedState;N!==null&&(v=N.retryLane);break;case 19:C=d.stateNode;break;case 22:C=d.stateNode._retryCache;break;default:throw Error(r(314))}C!==null&&C.delete(p),mA(d,v)}a(Wy,"resolveRetryWakeable");function ND(d,p){return $e(d,p)}a(ND,"scheduleCallback$1");var Mm=null,Yd=null,Lm=!1,Fm=!1,Gy=!1,ju=0;function $o(d){d!==Yd&&d.next===null&&(Yd===null?Mm=Yd=d:Yd=Yd.next=d),Fm=!0,Lm||(Lm=!0,DD())}a($o,"ensureRootIsScheduled");function $m(d,p){if(!Gy&&Fm){Gy=!0;do for(var v=!1,C=Mm;C!==null;){if(d!==0){var N=C.pendingLanes;if(N===0)var L=0;else{var X=C.suspendedLanes,ne=C.pingedLanes;L=(1<<31-ge(42|d)+1)-1,L&=N&~(X&~ne),L=L&201326741?L&201326741|1:L?L|2:0}L!==0&&(v=!0,vA(C,L))}else L=nr,L=_e(C,C===Br?L:0,C.cancelPendingCommit!==null||C.timeoutHandle!==-1),(L&3)===0||je(C,L)||(v=!0,vA(C,L));C=C.next}while(v);Gy=!1}}a($m,"flushSyncWorkAcrossRoots_impl");function OD(){gA()}a(OD,"processRootScheduleInImmediateTask");function gA(){Fm=Lm=!1;var d=0;ju!==0&&($D()&&(d=ju),ju=0);for(var p=We(),v=null,C=Mm;C!==null;){var N=C.next,L=Um(C,p);L===0?(C.next=null,v===null?Mm=N:v.next=N,N===null&&(Yd=v)):(v=C,(d!==0||(L&3)!==0)&&(Fm=!0)),C=N}$m(d)}a(gA,"processRootScheduleInMicrotask");function Um(d,p){for(var v=d.suspendedLanes,C=d.pingedLanes,N=d.expirationTimes,L=d.pendingLanes&-62914561;0<L;){var X=31-ge(L),ne=1<<X,be=N[X];be===-1?((ne&v)===0||(ne&C)!==0)&&(N[X]=jt(ne,p)):be<=p&&(d.expiredLanes|=ne),L&=~ne}if(p=Br,v=nr,v=_e(d,d===p?v:0,d.cancelPendingCommit!==null||d.timeoutHandle!==-1),C=d.callbackNode,v===0||d===p&&(_r===2||_r===9)||d.cancelPendingCommit!==null)return C!==null&&C!==null&&De(C),d.callbackNode=null,d.callbackPriority=0;if((v&3)===0||je(d,v)){if(p=v&-v,p===d.callbackPriority)return p;switch(C!==null&&De(C),an(v)){case 2:case 8:v=Dt;break;case 32:v=Rt;break;case 268435456:v=Pt;break;default:v=Rt}return C=Bm.bind(null,d),v=$e(v,C),d.callbackPriority=p,d.callbackNode=v,p}return C!==null&&C!==null&&De(C),d.callbackPriority=2,d.callbackNode=null,2}a(Um,"scheduleTaskForRootDuringMicrotask");function Bm(d,p){if(vi!==0&&vi!==5)return d.callbackNode=null,d.callbackPriority=0,null;var v=d.callbackNode;if(Vy()&&d.callbackNode!==v)return null;var C=nr;return C=_e(d,d===Br?C:0,d.cancelPendingCommit!==null||d.timeoutHandle!==-1),C===0?null:(rA(d,C,p),Um(d,We()),d.callbackNode!=null&&d.callbackNode===v?Bm.bind(null,d):null)}a(Bm,"performWorkOnRootViaSchedulerTask");function vA(d,p){if(Vy())return null;rA(d,p,!0)}a(vA,"performSyncWorkOnRoot");function DD(){BD(function(){(pr&6)!==0?$e(bt,OD):gA()})}a(DD,"scheduleImmediateRootScheduleTask");function zm(){return ju===0&&(ju=rt()),ju}a(zm,"requestTransitionLane");function Z_(d){return d==null||typeof d=="symbol"||typeof d=="boolean"?null:typeof d=="function"?d:Gp(""+d)}a(Z_,"coerceFormActionProp");function yA(d,p){var v=p.ownerDocument.createElement("input");return v.name=p.name,v.value=p.value,d.id&&v.setAttribute("form",d.id),p.parentNode.insertBefore(v,p),d=new FormData(d),v.parentNode.removeChild(v),d}a(yA,"createFormDataWithSubmitter");function ID(d,p,v,C,N){if(p==="submit"&&v&&v.stateNode===N){var L=Z_((N[en]||null).action),X=C.submitter;X&&(p=(p=X[en]||null)?Z_(p.formAction):X.getAttribute("formAction"),p!==null&&(L=p,X=null));var ne=new zv("action","action",null,C,N);d.push({event:ne,listeners:[{instance:null,listener:a(function(){if(C.defaultPrevented){if(ju!==0){var be=X?yA(N,X):new FormData(N);_y(v,{pending:!0,data:be,method:N.method,action:L},null,be)}}else typeof L=="function"&&(ne.preventDefault(),be=X?yA(N,X):new FormData(N),_y(v,{pending:!0,data:be,method:N.method,action:L},L,be))},"listener"),currentTarget:N}]})}}a(ID,"extractEvents$1");for(var e1=0;e1<Vf.length;e1++){var t1=Vf[e1],PD=t1.toLowerCase(),MD=t1[0].toUpperCase()+t1.slice(1);$n(PD,"on"+MD)}$n(jr,"onAnimationEnd"),$n(Zv,"onAnimationIteration"),$n(fj,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(ro,"onTransitionRun"),$n(ey,"onTransitionStart"),$n(hD,"onTransitionCancel"),$n(_d,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),le("onBeforeInput",["compositionend","keypress","textInput","paste"]),le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qm="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LD=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qm));function bA(d,p){p=(p&4)!==0;for(var v=0;v<d.length;v++){var C=d[v],N=C.event;C=C.listeners;e:{var L=void 0;if(p)for(var X=C.length-1;0<=X;X--){var ne=C[X],be=ne.instance,Fe=ne.currentTarget;if(ne=ne.listener,be!==L&&N.isPropagationStopped())break e;L=ne,N.currentTarget=Fe;try{L(N)}catch(nt){ym(nt)}N.currentTarget=null,L=be}else for(X=0;X<C.length;X++){if(ne=C[X],be=ne.instance,Fe=ne.currentTarget,ne=ne.listener,be!==L&&N.isPropagationStopped())break e;L=ne,N.currentTarget=Fe;try{L(N)}catch(nt){ym(nt)}N.currentTarget=null,L=be}}}}a(bA,"processDispatchQueue");function Qn(d,p){var v=p[Ee];v===void 0&&(v=p[Ee]=new Set);var C=d+"__bubble";v.has(C)||(xA(p,d,2,!1),v.add(C))}a(Qn,"listenToNonDelegatedEvent");function n1(d,p,v){var C=0;p&&(C|=4),xA(v,d,C,p)}a(n1,"listenToNativeEvent");var Yy="_reactListening"+Math.random().toString(36).slice(2);function Fs(d){if(!d[Yy]){d[Yy]=!0,yt.forEach(function(v){v!=="selectionchange"&&(LD.has(v)||n1(v,!1,d),n1(v,!0,d))});var p=d.nodeType===9?d:d.ownerDocument;p===null||p[Yy]||(p[Yy]=!0,n1("selectionchange",!1,p))}}a(Fs,"listenToAllSupportedEvents");function xA(d,p,v,C){switch(BA(p)){case 2:var N=JD;break;case 8:N=ZD;break;default:N=Au}v=N.bind(null,p,v,d),N=void 0,!Dw||p!=="touchstart"&&p!=="touchmove"&&p!=="wheel"||(N=!0),C?N!==void 0?d.addEventListener(p,v,{capture:!0,passive:N}):d.addEventListener(p,v,!0):N!==void 0?d.addEventListener(p,v,{passive:N}):d.addEventListener(p,v,!1)}a(xA,"addTrappedEventListener");function r1(d,p,v,C,N){var L=C;if((p&1)===0&&(p&2)===0&&C!==null)e:for(;;){if(C===null)return;var X=C.tag;if(X===3||X===4){var ne=C.stateNode.containerInfo;if(ne===N)break;if(X===4)for(X=C.return;X!==null;){var be=X.tag;if((be===3||be===4)&&X.stateNode.containerInfo===N)return;X=X.return}for(;ne!==null;){if(X=wt(ne),X===null)return;if(be=X.tag,be===5||be===6||be===26||be===27){C=L=X;continue e}ne=ne.parentNode}}C=C.return}GC(function(){var Fe=L,nt=Fv(v),ct=[];e:{var Ue=Zp.get(d);if(Ue!==void 0){var qe=zv,Zt=d;switch(d){case"keypress":if(Bv(v)===0)break e;case"keydown":case"keyup":qe=Wv;break;case"focusin":Zt="focus",qe=rs;break;case"focusout":Zt="blur",qe=rs;break;case"beforeblur":case"afterblur":qe=rs;break;case"click":if(v.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=Hv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=KC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=$w;break;case jr:case Zv:case fj:qe=QC;break;case _d:qe=Uw;break;case"scroll":case"scrollend":qe=rD;break;case"wheel":qe=lD;break;case"copy":case"cut":case"paste":qe=ZC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=Gr;break;case"toggle":case"beforetoggle":qe=tj}var fn=(p&4)!==0,Tr=!fn&&(d==="scroll"||d==="scrollend"),Ie=fn?Ue!==null?Ue+"Capture":null:Ue;fn=[];for(var Ae=Fe,Le;Ae!==null;){var it=Ae;if(Le=it.stateNode,it=it.tag,it!==5&&it!==26&&it!==27||Le===null||Ie===null||(it=Yp(Ae,Ie),it!=null&&fn.push(Uo(Ae,it,Le))),Tr)break;Ae=Ae.return}0<fn.length&&(Ue=new qe(Ue,Zt,null,v,nt),ct.push({event:Ue,listeners:fn}))}}if((p&7)===0){e:{if(Ue=d==="mouseover"||d==="pointerover",qe=d==="mouseout"||d==="pointerout",Ue&&v!==Lv&&(Zt=v.relatedTarget||v.fromElement)&&(wt(Zt)||Zt[ce]))break e;if((qe||Ue)&&(Ue=nt.window===nt?nt:(Ue=nt.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,qe?(Zt=v.relatedTarget||v.toElement,qe=Fe,Zt=Zt?wt(Zt):null,Zt!==null&&(Tr=s(Zt),fn=Zt.tag,Zt!==Tr||fn!==5&&fn!==27&&fn!==6)&&(Zt=null)):(qe=null,Zt=Fe),qe!==Zt)){if(fn=Hv,it="onMouseLeave",Ie="onMouseEnter",Ae="mouse",(d==="pointerout"||d==="pointerover")&&(fn=Gr,it="onPointerLeave",Ie="onPointerEnter",Ae="pointer"),Tr=qe==null?Ue:It(qe),Le=Zt==null?Ue:It(Zt),Ue=new fn(it,Ae+"leave",qe,v,nt),Ue.target=Tr,Ue.relatedTarget=Le,it=null,wt(nt)===Fe&&(fn=new fn(Ie,Ae+"enter",Zt,v,nt),fn.target=Le,fn.relatedTarget=Tr,it=fn),Tr=it,qe&&Zt)t:{for(fn=qe,Ie=Zt,Ae=0,Le=fn;Le;Le=mh(Le))Ae++;for(Le=0,it=Ie;it;it=mh(it))Le++;for(;0<Ae-Le;)fn=mh(fn),Ae--;for(;0<Le-Ae;)Ie=mh(Ie),Le--;for(;Ae--;){if(fn===Ie||Ie!==null&&fn===Ie.alternate)break t;fn=mh(fn),Ie=mh(Ie)}fn=null}else fn=null;qe!==null&&zi(ct,Ue,qe,fn,!1),Zt!==null&&Tr!==null&&zi(ct,Tr,Zt,fn,!0)}}e:{if(Ue=Fe?It(Fe):window,qe=Ue.nodeName&&Ue.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Ue.type==="file")var Kt=sj;else if(as(Ue))if(oj)Kt=Jv;else{Kt=uj;var Bn=Ww}else qe=Ue.nodeName,!qe||qe.toLowerCase()!=="input"||Ue.type!=="checkbox"&&Ue.type!=="radio"?Fe&&Mv(Fe.elementType)&&(Kt=sj):Kt=ou;if(Kt&&(Kt=Kt(d,Fe))){Xv(ct,Kt,v,nt);break e}Bn&&Bn(d,Ue,Fe),d==="focusout"&&Fe&&Ue.type==="number"&&Fe.memoizedProps.value!=null&&Pv(Ue,"number",Ue.value)}switch(Bn=Fe?It(Fe):window,d){case"focusin":(as(Bn)||Bn.contentEditable==="true")&&(Hf=Bn,Kw=Fe,fl=null);break;case"focusout":fl=Kw=Hf=null;break;case"mousedown":Ne=!0;break;case"contextmenu":case"mouseup":case"dragend":Ne=!1,tt(ct,v,nt);break;case"selectionchange":if(fD)break;case"keydown":case"keyup":tt(ct,v,nt)}var sn;if(iu)e:{switch(d){case"compositionstart":var gn="onCompositionStart";break e;case"compositionend":gn="onCompositionEnd";break e;case"compositionupdate":gn="onCompositionUpdate";break e}gn=void 0}else su?zw(d,v)&&(gn="onCompositionEnd"):d==="keydown"&&v.keyCode===229&&(gn="onCompositionStart");gn&&(Bw&&v.locale!=="ko"&&(su||gn!=="onCompositionStart"?gn==="onCompositionEnd"&&su&&(sn=YC()):(nu=nt,Iw="value"in nu?nu.value:nu.textContent,su=!0)),Bn=An(Fe,gn),0<Bn.length&&(gn=new Lw(gn,d,null,v,nt),ct.push({event:gn,listeners:Bn}),sn?gn.data=sn:(sn=rj(v),sn!==null&&(gn.data=sn)))),(sn=nj?qw(d,v):uD(d,v))&&(gn=An(Fe,"onBeforeInput"),0<gn.length&&(Bn=new Lw("onBeforeInput","beforeinput",null,v,nt),ct.push({event:Bn,listeners:gn}),Bn.data=sn)),ID(ct,d,Fe,v,nt)}bA(ct,p)})}a(r1,"dispatchEventForPluginEventSystem");function Uo(d,p,v){return{instance:d,listener:p,currentTarget:v}}a(Uo,"createDispatchListener");function An(d,p){for(var v=p+"Capture",C=[];d!==null;){var N=d,L=N.stateNode;if(N=N.tag,N!==5&&N!==26&&N!==27||L===null||(N=Yp(d,v),N!=null&&C.unshift(Uo(d,N,L)),N=Yp(d,p),N!=null&&C.push(Uo(d,N,L))),d.tag===3)return C;d=d.return}return[]}a(An,"accumulateTwoPhaseListeners");function mh(d){if(d===null)return null;do d=d.return;while(d&&d.tag!==5&&d.tag!==27);return d||null}a(mh,"getParent");function zi(d,p,v,C,N){for(var L=p._reactName,X=[];v!==null&&v!==C;){var ne=v,be=ne.alternate,Fe=ne.stateNode;if(ne=ne.tag,be!==null&&be===C)break;ne!==5&&ne!==26&&ne!==27||Fe===null||(be=Fe,N?(Fe=Yp(v,L),Fe!=null&&X.unshift(Uo(v,Fe,be))):N||(Fe=Yp(v,L),Fe!=null&&X.push(Uo(v,Fe,be)))),v=v.return}X.length!==0&&d.push({event:p,listeners:X})}a(zi,"accumulateEnterLeaveListenersForEvent");var Aa=/\r\n?/g,FD=/\u0000|\uFFFD/g;function pc(d){return(typeof d=="string"?d:""+d).replace(Aa,`
`).replace(FD,"")}a(pc,"normalizeMarkupForTextOrAttribute");function wA(d,p){return p=pc(p),pc(d)===p}a(wA,"checkForUnmatchedText");function Ky(){}a(Ky,"noop$1");function Rr(d,p,v,C,N,L){switch(v){case"children":typeof C=="string"?p==="body"||p==="textarea"&&C===""||tu(d,C):(typeof C=="number"||typeof C=="bigint")&&p!=="body"&&tu(d,""+C);break;case"className":xr(d,"class",C);break;case"tabIndex":xr(d,"tabindex",C);break;case"dir":case"role":case"viewBox":case"width":case"height":xr(d,v,C);break;case"style":Ow(d,C,L);break;case"data":if(p!=="object"){xr(d,"data",C);break}case"src":case"href":if(C===""&&(p!=="a"||v!=="href")){d.removeAttribute(v);break}if(C==null||typeof C=="function"||typeof C=="symbol"||typeof C=="boolean"){d.removeAttribute(v);break}C=Gp(""+C),d.setAttribute(v,C);break;case"action":case"formAction":if(typeof C=="function"){d.setAttribute(v,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof L=="function"&&(v==="formAction"?(p!=="input"&&Rr(d,p,"name",N.name,N,null),Rr(d,p,"formEncType",N.formEncType,N,null),Rr(d,p,"formMethod",N.formMethod,N,null),Rr(d,p,"formTarget",N.formTarget,N,null)):(Rr(d,p,"encType",N.encType,N,null),Rr(d,p,"method",N.method,N,null),Rr(d,p,"target",N.target,N,null)));if(C==null||typeof C=="symbol"||typeof C=="boolean"){d.removeAttribute(v);break}C=Gp(""+C),d.setAttribute(v,C);break;case"onClick":C!=null&&(d.onclick=Ky);break;case"onScroll":C!=null&&Qn("scroll",d);break;case"onScrollEnd":C!=null&&Qn("scrollend",d);break;case"dangerouslySetInnerHTML":if(C!=null){if(typeof C!="object"||!("__html"in C))throw Error(r(61));if(v=C.__html,v!=null){if(N.children!=null)throw Error(r(60));d.innerHTML=v}}break;case"multiple":d.multiple=C&&typeof C!="function"&&typeof C!="symbol";break;case"muted":d.muted=C&&typeof C!="function"&&typeof C!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(C==null||typeof C=="function"||typeof C=="boolean"||typeof C=="symbol"){d.removeAttribute("xlink:href");break}v=Gp(""+C),d.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",v);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":C!=null&&typeof C!="function"&&typeof C!="symbol"?d.setAttribute(v,""+C):d.removeAttribute(v);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":C&&typeof C!="function"&&typeof C!="symbol"?d.setAttribute(v,""):d.removeAttribute(v);break;case"capture":case"download":C===!0?d.setAttribute(v,""):C!==!1&&C!=null&&typeof C!="function"&&typeof C!="symbol"?d.setAttribute(v,C):d.removeAttribute(v);break;case"cols":case"rows":case"size":case"span":C!=null&&typeof C!="function"&&typeof C!="symbol"&&!isNaN(C)&&1<=C?d.setAttribute(v,C):d.removeAttribute(v);break;case"rowSpan":case"start":C==null||typeof C=="function"||typeof C=="symbol"||isNaN(C)?d.removeAttribute(v):d.setAttribute(v,C);break;case"popover":Qn("beforetoggle",d),Qn("toggle",d),hr(d,"popover",C);break;case"xlinkActuate":Sr(d,"http://www.w3.org/1999/xlink","xlink:actuate",C);break;case"xlinkArcrole":Sr(d,"http://www.w3.org/1999/xlink","xlink:arcrole",C);break;case"xlinkRole":Sr(d,"http://www.w3.org/1999/xlink","xlink:role",C);break;case"xlinkShow":Sr(d,"http://www.w3.org/1999/xlink","xlink:show",C);break;case"xlinkTitle":Sr(d,"http://www.w3.org/1999/xlink","xlink:title",C);break;case"xlinkType":Sr(d,"http://www.w3.org/1999/xlink","xlink:type",C);break;case"xmlBase":Sr(d,"http://www.w3.org/XML/1998/namespace","xml:base",C);break;case"xmlLang":Sr(d,"http://www.w3.org/XML/1998/namespace","xml:lang",C);break;case"xmlSpace":Sr(d,"http://www.w3.org/XML/1998/namespace","xml:space",C);break;case"is":hr(d,"is",C);break;case"innerText":case"textContent":break;default:(!(2<v.length)||v[0]!=="o"&&v[0]!=="O"||v[1]!=="n"&&v[1]!=="N")&&(v=nD.get(v)||v,hr(d,v,C))}}a(Rr,"setProp");function a1(d,p,v,C,N,L){switch(v){case"style":Ow(d,C,L);break;case"dangerouslySetInnerHTML":if(C!=null){if(typeof C!="object"||!("__html"in C))throw Error(r(61));if(v=C.__html,v!=null){if(N.children!=null)throw Error(r(60));d.innerHTML=v}}break;case"children":typeof C=="string"?tu(d,C):(typeof C=="number"||typeof C=="bigint")&&tu(d,""+C);break;case"onScroll":C!=null&&Qn("scroll",d);break;case"onScrollEnd":C!=null&&Qn("scrollend",d);break;case"onClick":C!=null&&(d.onclick=Ky);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(v))e:{if(v[0]==="o"&&v[1]==="n"&&(N=v.endsWith("Capture"),p=v.slice(2,N?v.length-7:void 0),L=d[en]||null,L=L!=null?L[v]:null,typeof L=="function"&&d.removeEventListener(p,L,N),typeof C=="function")){typeof L!="function"&&L!==null&&(v in d?d[v]=null:d.hasAttribute(v)&&d.removeAttribute(v)),d.addEventListener(p,C,N);break e}v in d?d[v]=C:C===!0?d.setAttribute(v,""):hr(d,v,C)}}}a(a1,"setPropOnCustomElement");function yi(d,p,v){switch(p){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qn("error",d),Qn("load",d);var C=!1,N=!1,L;for(L in v)if(v.hasOwnProperty(L)){var X=v[L];if(X!=null)switch(L){case"src":C=!0;break;case"srcSet":N=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,p));default:Rr(d,p,L,X,v,null)}}N&&Rr(d,p,"srcSet",v.srcSet,v,null),C&&Rr(d,p,"src",v.src,v,null);return;case"input":Qn("invalid",d);var ne=L=X=N=null,be=null,Fe=null;for(C in v)if(v.hasOwnProperty(C)){var nt=v[C];if(nt!=null)switch(C){case"name":N=nt;break;case"type":X=nt;break;case"checked":be=nt;break;case"defaultChecked":Fe=nt;break;case"value":L=nt;break;case"defaultValue":ne=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,p));break;default:Rr(d,p,C,nt,v,null)}}Wp(d,L,ne,be,Fe,X,N,!1),Ri(d);return;case"select":Qn("invalid",d),C=X=L=null;for(N in v)if(v.hasOwnProperty(N)&&(ne=v[N],ne!=null))switch(N){case"value":L=ne;break;case"defaultValue":X=ne;break;case"multiple":C=ne;default:Rr(d,p,N,ne,v,null)}p=L,v=X,d.multiple=!!C,p!=null?eu(d,!!C,p,!1):v!=null&&eu(d,!!C,v,!0);return;case"textarea":Qn("invalid",d),L=N=C=null;for(X in v)if(v.hasOwnProperty(X)&&(ne=v[X],ne!=null))switch(X){case"value":C=ne;break;case"defaultValue":N=ne;break;case"children":L=ne;break;case"dangerouslySetInnerHTML":if(ne!=null)throw Error(r(91));break;default:Rr(d,p,X,ne,v,null)}kw(d,C,N,L),Ri(d);return;case"option":for(be in v)v.hasOwnProperty(be)&&(C=v[be],C!=null)&&(be==="selected"?d.selected=C&&typeof C!="function"&&typeof C!="symbol":Rr(d,p,be,C,v,null));return;case"dialog":Qn("beforetoggle",d),Qn("toggle",d),Qn("cancel",d),Qn("close",d);break;case"iframe":case"object":Qn("load",d);break;case"video":case"audio":for(C=0;C<qm.length;C++)Qn(qm[C],d);break;case"image":Qn("error",d),Qn("load",d);break;case"details":Qn("toggle",d);break;case"embed":case"source":case"link":Qn("error",d),Qn("load",d);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Fe in v)if(v.hasOwnProperty(Fe)&&(C=v[Fe],C!=null))switch(Fe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,p));default:Rr(d,p,Fe,C,v,null)}return;default:if(Mv(p)){for(nt in v)v.hasOwnProperty(nt)&&(C=v[nt],C!==void 0&&a1(d,p,nt,C,v,void 0));return}}for(ne in v)v.hasOwnProperty(ne)&&(C=v[ne],C!=null&&Rr(d,p,ne,C,v,null))}a(yi,"setInitialProperties");function i1(d,p,v,C){switch(p){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var N=null,L=null,X=null,ne=null,be=null,Fe=null,nt=null;for(qe in v){var ct=v[qe];if(v.hasOwnProperty(qe)&&ct!=null)switch(qe){case"checked":break;case"value":break;case"defaultValue":be=ct;default:C.hasOwnProperty(qe)||Rr(d,p,qe,null,C,ct)}}for(var Ue in C){var qe=C[Ue];if(ct=v[Ue],C.hasOwnProperty(Ue)&&(qe!=null||ct!=null))switch(Ue){case"type":L=qe;break;case"name":N=qe;break;case"checked":Fe=qe;break;case"defaultChecked":nt=qe;break;case"value":X=qe;break;case"defaultValue":ne=qe;break;case"children":case"dangerouslySetInnerHTML":if(qe!=null)throw Error(r(137,p));break;default:qe!==ct&&Rr(d,p,Ue,qe,C,ct)}}Uf(d,X,ne,be,Fe,nt,L,N);return;case"select":qe=X=ne=Ue=null;for(L in v)if(be=v[L],v.hasOwnProperty(L)&&be!=null)switch(L){case"value":break;case"multiple":qe=be;default:C.hasOwnProperty(L)||Rr(d,p,L,null,C,be)}for(N in C)if(L=C[N],be=v[N],C.hasOwnProperty(N)&&(L!=null||be!=null))switch(N){case"value":Ue=L;break;case"defaultValue":ne=L;break;case"multiple":X=L;default:L!==be&&Rr(d,p,N,L,C,be)}p=ne,v=X,C=qe,Ue!=null?eu(d,!!v,Ue,!1):!!C!=!!v&&(p!=null?eu(d,!!v,p,!0):eu(d,!!v,v?[]:"",!1));return;case"textarea":qe=Ue=null;for(ne in v)if(N=v[ne],v.hasOwnProperty(ne)&&N!=null&&!C.hasOwnProperty(ne))switch(ne){case"value":break;case"children":break;default:Rr(d,p,ne,null,C,N)}for(X in C)if(N=C[X],L=v[X],C.hasOwnProperty(X)&&(N!=null||L!=null))switch(X){case"value":Ue=N;break;case"defaultValue":qe=N;break;case"children":break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(r(91));break;default:N!==L&&Rr(d,p,X,N,C,L)}HC(d,Ue,qe);return;case"option":for(var Zt in v)Ue=v[Zt],v.hasOwnProperty(Zt)&&Ue!=null&&!C.hasOwnProperty(Zt)&&(Zt==="selected"?d.selected=!1:Rr(d,p,Zt,null,C,Ue));for(be in C)Ue=C[be],qe=v[be],C.hasOwnProperty(be)&&Ue!==qe&&(Ue!=null||qe!=null)&&(be==="selected"?d.selected=Ue&&typeof Ue!="function"&&typeof Ue!="symbol":Rr(d,p,be,Ue,C,qe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fn in v)Ue=v[fn],v.hasOwnProperty(fn)&&Ue!=null&&!C.hasOwnProperty(fn)&&Rr(d,p,fn,null,C,Ue);for(Fe in C)if(Ue=C[Fe],qe=v[Fe],C.hasOwnProperty(Fe)&&Ue!==qe&&(Ue!=null||qe!=null))switch(Fe){case"children":case"dangerouslySetInnerHTML":if(Ue!=null)throw Error(r(137,p));break;default:Rr(d,p,Fe,Ue,C,qe)}return;default:if(Mv(p)){for(var Tr in v)Ue=v[Tr],v.hasOwnProperty(Tr)&&Ue!==void 0&&!C.hasOwnProperty(Tr)&&a1(d,p,Tr,void 0,C,Ue);for(nt in C)Ue=C[nt],qe=v[nt],!C.hasOwnProperty(nt)||Ue===qe||Ue===void 0&&qe===void 0||a1(d,p,nt,Ue,C,qe);return}}for(var Ie in v)Ue=v[Ie],v.hasOwnProperty(Ie)&&Ue!=null&&!C.hasOwnProperty(Ie)&&Rr(d,p,Ie,null,C,Ue);for(ct in C)Ue=C[ct],qe=v[ct],!C.hasOwnProperty(ct)||Ue===qe||Ue==null&&qe==null||Rr(d,p,ct,Ue,C,qe)}a(i1,"updateProperties");var s1=null,Bo=null;function Hm(d){return d.nodeType===9?d:d.ownerDocument}a(Hm,"getOwnerDocumentFromRootContainer");function Vm(d){switch(d){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}a(Vm,"getOwnHostContext");function na(d,p){if(d===0)switch(p){case"svg":return 1;case"math":return 2;default:return 0}return d===1&&p==="foreignObject"?0:d}a(na,"getChildHostContextProd");function ra(d,p){return d==="textarea"||d==="noscript"||typeof p.children=="string"||typeof p.children=="number"||typeof p.children=="bigint"||typeof p.dangerouslySetInnerHTML=="object"&&p.dangerouslySetInnerHTML!==null&&p.dangerouslySetInnerHTML.__html!=null}a(ra,"shouldSetTextContent");var Xy=null;function $D(){var d=window.event;return d&&d.type==="popstate"?d===Xy?!1:(Xy=d,!0):(Xy=null,!1)}a($D,"shouldAttemptEagerTransition");var _A=typeof setTimeout=="function"?setTimeout:void 0,UD=typeof clearTimeout=="function"?clearTimeout:void 0,EA=typeof Promise=="function"?Promise:void 0,BD=typeof queueMicrotask=="function"?queueMicrotask:typeof EA<"u"?function(d){return EA.resolve(null).then(d).catch(zD)}:_A;function zD(d){setTimeout(function(){throw d})}a(zD,"handleErrorInNextTick");function mc(d){return d==="head"}a(mc,"isSingletonScope");function gh(d,p){var v=p,C=0,N=0;do{var L=v.nextSibling;if(d.removeChild(v),L&&L.nodeType===8)if(v=L.data,v==="/$"){if(0<C&&8>C){v=C;var X=d.ownerDocument;if(v&1&&Gm(X.documentElement),v&2&&Gm(X.body),v&4)for(v=X.head,Gm(v),X=v.firstChild;X;){var ne=X.nextSibling,be=X.nodeName;X[mt]||be==="SCRIPT"||be==="STYLE"||be==="LINK"&&X.rel.toLowerCase()==="stylesheet"||v.removeChild(X),X=ne}}if(N===0){d.removeChild(L),ng(p);return}N--}else v==="$"||v==="$?"||v==="$!"?N++:C=v.charCodeAt(0)-48;else C=0;v=L}while(v);ng(p)}a(gh,"clearSuspenseBoundary");function Wm(d){var p=d.firstChild;for(p&&p.nodeType===10&&(p=p.nextSibling);p;){var v=p;switch(p=p.nextSibling,v.nodeName){case"HTML":case"HEAD":case"BODY":Wm(v),pt(v);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(v.rel.toLowerCase()==="stylesheet")continue}d.removeChild(v)}}a(Wm,"clearContainerSparingly");function qD(d,p,v,C){for(;d.nodeType===1;){var N=v;if(d.nodeName.toLowerCase()!==p.toLowerCase()){if(!C&&(d.nodeName!=="INPUT"||d.type!=="hidden"))break}else if(C){if(!d[mt])switch(p){case"meta":if(!d.hasAttribute("itemprop"))break;return d;case"link":if(L=d.getAttribute("rel"),L==="stylesheet"&&d.hasAttribute("data-precedence"))break;if(L!==N.rel||d.getAttribute("href")!==(N.href==null||N.href===""?null:N.href)||d.getAttribute("crossorigin")!==(N.crossOrigin==null?null:N.crossOrigin)||d.getAttribute("title")!==(N.title==null?null:N.title))break;return d;case"style":if(d.hasAttribute("data-precedence"))break;return d;case"script":if(L=d.getAttribute("src"),(L!==(N.src==null?null:N.src)||d.getAttribute("type")!==(N.type==null?null:N.type)||d.getAttribute("crossorigin")!==(N.crossOrigin==null?null:N.crossOrigin))&&L&&d.hasAttribute("async")&&!d.hasAttribute("itemprop"))break;return d;default:return d}}else if(p==="input"&&d.type==="hidden"){var L=N.name==null?null:""+N.name;if(N.type==="hidden"&&d.getAttribute("name")===L)return d}else return d;if(d=Oi(d.nextSibling),d===null)break}return null}a(qD,"canHydrateInstance");function SA(d,p,v){if(p==="")return null;for(;d.nodeType!==3;)if((d.nodeType!==1||d.nodeName!=="INPUT"||d.type!=="hidden")&&!v||(d=Oi(d.nextSibling),d===null))return null;return d}a(SA,"canHydrateTextInstance");function vh(d){return d.data==="$!"||d.data==="$?"&&d.ownerDocument.readyState==="complete"}a(vh,"isSuspenseInstanceFallback");function $s(d,p){var v=d.ownerDocument;if(d.data!=="$?"||v.readyState==="complete")p();else{var C=a(function(){p(),v.removeEventListener("DOMContentLoaded",C)},"listener");v.addEventListener("DOMContentLoaded",C),d._reactRetry=C}}a($s,"registerSuspenseInstanceRetry");function Oi(d){for(;d!=null;d=d.nextSibling){var p=d.nodeType;if(p===1||p===3)break;if(p===8){if(p=d.data,p==="$"||p==="$!"||p==="$?"||p==="F!"||p==="F")break;if(p==="/$")return null}}return d}a(Oi,"getNextHydratable");var o1=null;function CA(d){d=d.previousSibling;for(var p=0;d;){if(d.nodeType===8){var v=d.data;if(v==="$"||v==="$!"||v==="$?"){if(p===0)return d;p--}else v==="/$"&&p++}d=d.previousSibling}return null}a(CA,"getParentSuspenseInstance");function jA(d,p,v){switch(p=Hm(v),d){case"html":if(d=p.documentElement,!d)throw Error(r(452));return d;case"head":if(d=p.head,!d)throw Error(r(453));return d;case"body":if(d=p.body,!d)throw Error(r(454));return d;default:throw Error(r(451))}}a(jA,"resolveSingletonInstance");function Gm(d){for(var p=d.attributes;p.length;)d.removeAttributeNode(p[0]);pt(d)}a(Gm,"releaseSingletonInstance");var fo=new Map,l1=new Set;function ho(d){return typeof d.getRootNode=="function"?d.getRootNode():d.nodeType===9?d:d.ownerDocument}a(ho,"getHoistableRoot");var bn=H.d;H.d={f:AA,r:po,D:mr,C:HD,L:TA,m:kA,X:VD,S:c1,M:WD};function AA(){var d=bn.f(),p=qy();return d||p}a(AA,"flushSyncWork");function po(d){var p=vt(d);p!==null&&p.tag===5&&p.type==="form"?w_(p):bn.r(d)}a(po,"requestFormReset");var Kd=typeof document>"u"?null:document;function RA(d,p,v){var C=Kd;if(C&&typeof p=="string"&&p){var N=Ca(p);N='link[rel="'+d+'"][href="'+N+'"]',typeof v=="string"&&(N+='[crossorigin="'+v+'"]'),l1.has(N)||(l1.add(N),d={rel:d,crossOrigin:v,href:p},C.querySelector(N)===null&&(p=C.createElement("link"),yi(p,"link",d),qt(p),C.head.appendChild(p)))}}a(RA,"preconnectAs");function mr(d){bn.D(d),RA("dns-prefetch",d,null)}a(mr,"prefetchDNS");function HD(d,p){bn.C(d,p),RA("preconnect",d,p)}a(HD,"preconnect");function TA(d,p,v){bn.L(d,p,v);var C=Kd;if(C&&d&&p){var N='link[rel="preload"][as="'+Ca(p)+'"]';p==="image"&&v&&v.imageSrcSet?(N+='[imagesrcset="'+Ca(v.imageSrcSet)+'"]',typeof v.imageSizes=="string"&&(N+='[imagesizes="'+Ca(v.imageSizes)+'"]')):N+='[href="'+Ca(d)+'"]';var L=N;switch(p){case"style":L=yh(d);break;case"script":L=bh(d)}fo.has(L)||(d=h({rel:"preload",href:p==="image"&&v&&v.imageSrcSet?void 0:d,as:p},v),fo.set(L,d),C.querySelector(N)!==null||p==="style"&&C.querySelector(Ym(L))||p==="script"&&C.querySelector(Km(L))||(p=C.createElement("link"),yi(p,"link",d),qt(p),C.head.appendChild(p)))}}a(TA,"preload");function kA(d,p){bn.m(d,p);var v=Kd;if(v&&d){var C=p&&typeof p.as=="string"?p.as:"script",N='link[rel="modulepreload"][as="'+Ca(C)+'"][href="'+Ca(d)+'"]',L=N;switch(C){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":L=bh(d)}if(!fo.has(L)&&(d=h({rel:"modulepreload",href:d},p),fo.set(L,d),v.querySelector(N)===null)){switch(C){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(v.querySelector(Km(L)))return}C=v.createElement("link"),yi(C,"link",d),qt(C),v.head.appendChild(C)}}}a(kA,"preloadModule");function c1(d,p,v){bn.S(d,p,v);var C=Kd;if(C&&d){var N=Ft(C).hoistableStyles,L=yh(d);p=p||"default";var X=N.get(L);if(!X){var ne={loading:0,preload:null};if(X=C.querySelector(Ym(L)))ne.loading=5;else{d=h({rel:"stylesheet",href:d,"data-precedence":p},v),(v=fo.get(L))&&u1(d,v);var be=X=C.createElement("link");qt(be),yi(be,"link",d),be._p=new Promise(function(Fe,nt){be.onload=Fe,be.onerror=nt}),be.addEventListener("load",function(){ne.loading|=1}),be.addEventListener("error",function(){ne.loading|=2}),ne.loading|=4,Qy(X,p,C)}X={type:"stylesheet",instance:X,count:1,state:ne},N.set(L,X)}}}a(c1,"preinitStyle");function VD(d,p){bn.X(d,p);var v=Kd;if(v&&d){var C=Ft(v).hoistableScripts,N=bh(d),L=C.get(N);L||(L=v.querySelector(Km(N)),L||(d=h({src:d,async:!0},p),(p=fo.get(N))&&Xm(d,p),L=v.createElement("script"),qt(L),yi(L,"link",d),v.head.appendChild(L)),L={type:"script",instance:L,count:1,state:null},C.set(N,L))}}a(VD,"preinitScript");function WD(d,p){bn.M(d,p);var v=Kd;if(v&&d){var C=Ft(v).hoistableScripts,N=bh(d),L=C.get(N);L||(L=v.querySelector(Km(N)),L||(d=h({src:d,async:!0,type:"module"},p),(p=fo.get(N))&&Xm(d,p),L=v.createElement("script"),qt(L),yi(L,"link",d),v.head.appendChild(L)),L={type:"script",instance:L,count:1,state:null},C.set(N,L))}}a(WD,"preinitModuleScript");function NA(d,p,v,C){var N=(N=de.current)?ho(N):null;if(!N)throw Error(r(446));switch(d){case"meta":case"title":return null;case"style":return typeof v.precedence=="string"&&typeof v.href=="string"?(p=yh(v.href),v=Ft(N).hoistableStyles,C=v.get(p),C||(C={type:"style",instance:null,count:0,state:null},v.set(p,C)),C):{type:"void",instance:null,count:0,state:null};case"link":if(v.rel==="stylesheet"&&typeof v.href=="string"&&typeof v.precedence=="string"){d=yh(v.href);var L=Ft(N).hoistableStyles,X=L.get(d);if(X||(N=N.ownerDocument||N,X={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},L.set(d,X),(L=N.querySelector(Ym(d)))&&!L._p&&(X.instance=L,X.state.loading=5),fo.has(d)||(v={rel:"preload",as:"style",href:v.href,crossOrigin:v.crossOrigin,integrity:v.integrity,media:v.media,hrefLang:v.hrefLang,referrerPolicy:v.referrerPolicy},fo.set(d,v),L||GD(N,d,v,X.state))),p&&C===null)throw Error(r(528,""));return X}if(p&&C!==null)throw Error(r(529,""));return null;case"script":return p=v.async,v=v.src,typeof v=="string"&&p&&typeof p!="function"&&typeof p!="symbol"?(p=bh(v),v=Ft(N).hoistableScripts,C=v.get(p),C||(C={type:"script",instance:null,count:0,state:null},v.set(p,C)),C):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,d))}}a(NA,"getResource");function yh(d){return'href="'+Ca(d)+'"'}a(yh,"getStyleKey");function Ym(d){return'link[rel="stylesheet"]['+d+"]"}a(Ym,"getStylesheetSelectorFromKey");function OA(d){return h({},d,{"data-precedence":d.precedence,precedence:null})}a(OA,"stylesheetPropsFromRawProps");function GD(d,p,v,C){d.querySelector('link[rel="preload"][as="style"]['+p+"]")?C.loading=1:(p=d.createElement("link"),C.preload=p,p.addEventListener("load",function(){return C.loading|=1}),p.addEventListener("error",function(){return C.loading|=2}),yi(p,"link",v),qt(p),d.head.appendChild(p))}a(GD,"preloadStylesheet");function bh(d){return'[src="'+Ca(d)+'"]'}a(bh,"getScriptKey");function Km(d){return"script[async]"+d}a(Km,"getScriptSelectorFromKey");function DA(d,p,v){if(p.count++,p.instance===null)switch(p.type){case"style":var C=d.querySelector('style[data-href~="'+Ca(v.href)+'"]');if(C)return p.instance=C,qt(C),C;var N=h({},v,{"data-href":v.href,"data-precedence":v.precedence,href:null,precedence:null});return C=(d.ownerDocument||d).createElement("style"),qt(C),yi(C,"style",N),Qy(C,v.precedence,d),p.instance=C;case"stylesheet":N=yh(v.href);var L=d.querySelector(Ym(N));if(L)return p.state.loading|=4,p.instance=L,qt(L),L;C=OA(v),(N=fo.get(N))&&u1(C,N),L=(d.ownerDocument||d).createElement("link"),qt(L);var X=L;return X._p=new Promise(function(ne,be){X.onload=ne,X.onerror=be}),yi(L,"link",C),p.state.loading|=4,Qy(L,v.precedence,d),p.instance=L;case"script":return L=bh(v.src),(N=d.querySelector(Km(L)))?(p.instance=N,qt(N),N):(C=v,(N=fo.get(L))&&(C=h({},v),Xm(C,N)),d=d.ownerDocument||d,N=d.createElement("script"),qt(N),yi(N,"link",C),d.head.appendChild(N),p.instance=N);case"void":return null;default:throw Error(r(443,p.type))}else p.type==="stylesheet"&&(p.state.loading&4)===0&&(C=p.instance,p.state.loading|=4,Qy(C,v.precedence,d));return p.instance}a(DA,"acquireResource");function Qy(d,p,v){for(var C=v.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),N=C.length?C[C.length-1]:null,L=N,X=0;X<C.length;X++){var ne=C[X];if(ne.dataset.precedence===p)L=ne;else if(L!==N)break}L?L.parentNode.insertBefore(d,L.nextSibling):(p=v.nodeType===9?v.head:v,p.insertBefore(d,p.firstChild))}a(Qy,"insertStylesheet");function u1(d,p){d.crossOrigin==null&&(d.crossOrigin=p.crossOrigin),d.referrerPolicy==null&&(d.referrerPolicy=p.referrerPolicy),d.title==null&&(d.title=p.title)}a(u1,"adoptPreloadPropsForStylesheet");function Xm(d,p){d.crossOrigin==null&&(d.crossOrigin=p.crossOrigin),d.referrerPolicy==null&&(d.referrerPolicy=p.referrerPolicy),d.integrity==null&&(d.integrity=p.integrity)}a(Xm,"adoptPreloadPropsForScript");var Jy=null;function Zy(d,p,v){if(Jy===null){var C=new Map,N=Jy=new Map;N.set(v,C)}else N=Jy,C=N.get(v),C||(C=new Map,N.set(v,C));if(C.has(d))return C;for(C.set(d,null),v=v.getElementsByTagName(d),N=0;N<v.length;N++){var L=v[N];if(!(L[mt]||L[nn]||d==="link"&&L.getAttribute("rel")==="stylesheet")&&L.namespaceURI!=="http://www.w3.org/2000/svg"){var X=L.getAttribute(p)||"";X=d+X;var ne=C.get(X);ne?ne.push(L):C.set(X,[L])}}return C}a(Zy,"getHydratableHoistableCache");function IA(d,p,v){d=d.ownerDocument||d,d.head.insertBefore(v,p==="title"?d.querySelector("head > title"):null)}a(IA,"mountHoistable");function YD(d,p,v){if(v===1||p.itemProp!=null)return!1;switch(d){case"meta":case"title":return!0;case"style":if(typeof p.precedence!="string"||typeof p.href!="string"||p.href==="")break;return!0;case"link":if(typeof p.rel!="string"||typeof p.href!="string"||p.href===""||p.onLoad||p.onError)break;return p.rel==="stylesheet"?(d=p.disabled,typeof p.precedence=="string"&&d==null):!0;case"script":if(p.async&&typeof p.async!="function"&&typeof p.async!="symbol"&&!p.onLoad&&!p.onError&&p.src&&typeof p.src=="string")return!0}return!1}a(YD,"isHostHoistableType");function PA(d){return!(d.type==="stylesheet"&&(d.state.loading&3)===0)}a(PA,"preloadResource");var ga=null;function fs(){}a(fs,"noop");function KD(d,p,v){if(ga===null)throw Error(r(475));var C=ga;if(p.type==="stylesheet"&&(typeof v.media!="string"||matchMedia(v.media).matches!==!1)&&(p.state.loading&4)===0){if(p.instance===null){var N=yh(v.href),L=d.querySelector(Ym(N));if(L){d=L._p,d!==null&&typeof d=="object"&&typeof d.then=="function"&&(C.count++,C=eb.bind(C),d.then(C,C)),p.state.loading|=4,p.instance=L,qt(L);return}L=d.ownerDocument||d,v=OA(v),(N=fo.get(N))&&u1(v,N),L=L.createElement("link"),qt(L);var X=L;X._p=new Promise(function(ne,be){X.onload=ne,X.onerror=be}),yi(L,"link",v),p.instance=L}C.stylesheets===null&&(C.stylesheets=new Map),C.stylesheets.set(p,d),(d=p.state.preload)&&(p.state.loading&3)===0&&(C.count++,p=eb.bind(C),d.addEventListener("load",p),d.addEventListener("error",p))}}a(KD,"suspendResource");function XD(){if(ga===null)throw Error(r(475));var d=ga;return d.stylesheets&&d.count===0&&d1(d,d.stylesheets),0<d.count?function(p){var v=setTimeout(function(){if(d.stylesheets&&d1(d,d.stylesheets),d.unsuspend){var C=d.unsuspend;d.unsuspend=null,C()}},6e4);return d.unsuspend=p,function(){d.unsuspend=null,clearTimeout(v)}}:null}a(XD,"waitForCommitToBeReady");function eb(){if(this.count--,this.count===0){if(this.stylesheets)d1(this,this.stylesheets);else if(this.unsuspend){var d=this.unsuspend;this.unsuspend=null,d()}}}a(eb,"onUnsuspend");var Qm=null;function d1(d,p){d.stylesheets=null,d.unsuspend!==null&&(d.count++,Qm=new Map,p.forEach(QD,d),Qm=null,eb.call(d))}a(d1,"insertSuspendedStylesheets");function QD(d,p){if(!(p.state.loading&4)){var v=Qm.get(d);if(v)var C=v.get(null);else{v=new Map,Qm.set(d,v);for(var N=d.querySelectorAll("link[data-precedence],style[data-precedence]"),L=0;L<N.length;L++){var X=N[L];(X.nodeName==="LINK"||X.getAttribute("media")!=="not all")&&(v.set(X.dataset.precedence,X),C=X)}C&&v.set(null,C)}N=p.instance,X=N.getAttribute("data-precedence"),L=v.get(X)||C,L===C&&v.set(null,N),v.set(X,N),this.count++,C=eb.bind(this),N.addEventListener("load",C),N.addEventListener("error",C),L?L.parentNode.insertBefore(N,L.nextSibling):(d=d.nodeType===9?d.head:d,d.insertBefore(N,d.firstChild)),p.state.loading|=4}}a(QD,"insertStylesheetIntoRoot");var Jm={$$typeof:A,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function MA(d,p,v,C,N,L,X,ne){this.tag=1,this.containerInfo=d,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=C,this.onUncaughtError=N,this.onCaughtError=L,this.onRecoverableError=X,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=ne,this.incompleteTransitions=new Map}a(MA,"FiberRootNode");function LA(d,p,v,C,N,L,X,ne,be,Fe,nt,ct){return d=new MA(d,p,v,X,ne,be,Fe,ct),p=1,L===!0&&(p|=24),L=Ti(3,null,null,p),d.current=L,L.stateNode=d,p=ko(),p.refCount++,d.pooledCache=p,p.refCount++,L.memoizedState={element:C,isDehydrated:v,cache:p},sm(L),d}a(LA,"createFiberRoot");function FA(d){return d?(d=Cd,d):Cd}a(FA,"getContextForSubtree");function $A(d,p,v,C,N,L){N=FA(N),C.context===null?C.context=N:C.pendingContext=N,C=No(p),C.payload={element:v},L=L===void 0?null:L,L!==null&&(C.callback=L),v=uu(d,C,p),v!==null&&(Ls(v,d,p),Zf(v,d,p))}a($A,"updateContainerImpl");function f1(d,p){if(d=d.memoizedState,d!==null&&d.dehydrated!==null){var v=d.retryLane;d.retryLane=v!==0&&v<p?v:p}}a(f1,"markRetryLaneImpl");function tb(d,p){f1(d,p),(d=d.alternate)&&f1(d,p)}a(tb,"markRetryLaneIfNotHydrated");function UA(d){if(d.tag===13){var p=tc(d,67108864);p!==null&&Ls(p,d,67108864),tb(d,67108864)}}a(UA,"attemptContinuousHydration");var nb=!0;function JD(d,p,v,C){var N=V.T;V.T=null;var L=H.p;try{H.p=2,Au(d,p,v,C)}finally{H.p=L,V.T=N}}a(JD,"dispatchDiscreteEvent");function ZD(d,p,v,C){var N=V.T;V.T=null;var L=H.p;try{H.p=8,Au(d,p,v,C)}finally{H.p=L,V.T=N}}a(ZD,"dispatchContinuousEvent");function Au(d,p,v,C){if(nb){var N=h1(C);if(N===null)r1(d,p,C,rb,v),zA(d,C);else if(tI(N,d,p,v,C))C.stopPropagation();else if(zA(d,C),p&4&&-1<eI.indexOf(d)){for(;N!==null;){var L=vt(N);if(L!==null)switch(L.tag){case 3:if(L=L.stateNode,L.current.memoizedState.isDehydrated){var X=st(L.pendingLanes);if(X!==0){var ne=L;for(ne.pendingLanes|=2,ne.entangledLanes|=2;X;){var be=1<<31-ge(X);ne.entanglements[1]|=be,X&=~be}$o(L),(pr&6)===0&&(By=We()+500,$m(0))}}break;case 13:ne=tc(L,2),ne!==null&&Ls(ne,L,2),qy(),tb(L,2)}if(L=h1(C),L===null&&r1(d,p,C,rb,v),L===N)break;N=L}N!==null&&C.stopPropagation()}else r1(d,p,C,null,v)}}a(Au,"dispatchEvent");function h1(d){return d=Fv(d),p1(d)}a(h1,"findInstanceBlockingEvent");var rb=null;function p1(d){if(rb=null,d=wt(d),d!==null){var p=s(d);if(p===null)d=null;else{var v=p.tag;if(v===13){if(d=o(p),d!==null)return d;d=null}else if(v===3){if(p.stateNode.current.memoizedState.isDehydrated)return p.tag===3?p.stateNode.containerInfo:null;d=null}else p!==d&&(d=null)}}return rb=d,null}a(p1,"findInstanceBlockingTarget");function BA(d){switch(d){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case bt:return 2;case Dt:return 8;case Rt:case xt:return 32;case Pt:return 268435456;default:return 32}default:return 32}}a(BA,"getEventPriority");var m1=!1,gc=null,vc=null,Ru=null,Zm=new Map,eg=new Map,Tu=[],eI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zA(d,p){switch(d){case"focusin":case"focusout":gc=null;break;case"dragenter":case"dragleave":vc=null;break;case"mouseover":case"mouseout":Ru=null;break;case"pointerover":case"pointerout":Zm.delete(p.pointerId);break;case"gotpointercapture":case"lostpointercapture":eg.delete(p.pointerId)}}a(zA,"clearIfContinuousEvent");function tg(d,p,v,C,N,L){return d===null||d.nativeEvent!==L?(d={blockedOn:p,domEventName:v,eventSystemFlags:C,nativeEvent:L,targetContainers:[N]},p!==null&&(p=vt(p),p!==null&&UA(p)),d):(d.eventSystemFlags|=C,p=d.targetContainers,N!==null&&p.indexOf(N)===-1&&p.push(N),d)}a(tg,"accumulateOrCreateContinuousQueuedReplayableEvent");function tI(d,p,v,C,N){switch(p){case"focusin":return gc=tg(gc,d,p,v,C,N),!0;case"dragenter":return vc=tg(vc,d,p,v,C,N),!0;case"mouseover":return Ru=tg(Ru,d,p,v,C,N),!0;case"pointerover":var L=N.pointerId;return Zm.set(L,tg(Zm.get(L)||null,d,p,v,C,N)),!0;case"gotpointercapture":return L=N.pointerId,eg.set(L,tg(eg.get(L)||null,d,p,v,C,N)),!0}return!1}a(tI,"queueIfContinuousEvent");function qA(d){var p=wt(d.target);if(p!==null){var v=s(p);if(v!==null){if(p=v.tag,p===13){if(p=o(v),p!==null){d.blockedOn=p,Qt(d.priority,function(){if(v.tag===13){var C=Ms();C=Vt(C);var N=tc(v,C);N!==null&&Ls(N,v,C),tb(v,C)}});return}}else if(p===3&&v.stateNode.current.memoizedState.isDehydrated){d.blockedOn=v.tag===3?v.stateNode.containerInfo:null;return}}}d.blockedOn=null}a(qA,"attemptExplicitHydrationTarget");function ab(d){if(d.blockedOn!==null)return!1;for(var p=d.targetContainers;0<p.length;){var v=h1(d.nativeEvent);if(v===null){v=d.nativeEvent;var C=new v.constructor(v.type,v);Lv=C,v.target.dispatchEvent(C),Lv=null}else return p=vt(v),p!==null&&UA(p),d.blockedOn=v,!1;p.shift()}return!0}a(ab,"attemptReplayContinuousQueuedEvent");function HA(d,p,v){ab(d)&&v.delete(p)}a(HA,"attemptReplayContinuousQueuedEventInMap");function nI(){m1=!1,gc!==null&&ab(gc)&&(gc=null),vc!==null&&ab(vc)&&(vc=null),Ru!==null&&ab(Ru)&&(Ru=null),Zm.forEach(HA),eg.forEach(HA)}a(nI,"replayUnblockedEvents");function ib(d,p){d.blockedOn===p&&(d.blockedOn=null,m1||(m1=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,nI)))}a(ib,"scheduleCallbackIfUnblocked");var sb=null;function VA(d){sb!==d&&(sb=d,e.unstable_scheduleCallback(e.unstable_NormalPriority,function(){sb===d&&(sb=null);for(var p=0;p<d.length;p+=3){var v=d[p],C=d[p+1],N=d[p+2];if(typeof C!="function"){if(p1(C||v)===null)continue;break}var L=vt(v);L!==null&&(d.splice(p,3),p-=3,_y(L,{pending:!0,data:N,method:v.method,action:C},C,N))}}))}a(VA,"scheduleReplayQueueIfNeeded");function ng(d){function p(be){return ib(be,d)}a(p,"unblock"),gc!==null&&ib(gc,d),vc!==null&&ib(vc,d),Ru!==null&&ib(Ru,d),Zm.forEach(p),eg.forEach(p);for(var v=0;v<Tu.length;v++){var C=Tu[v];C.blockedOn===d&&(C.blockedOn=null)}for(;0<Tu.length&&(v=Tu[0],v.blockedOn===null);)qA(v),v.blockedOn===null&&Tu.shift();if(v=(d.ownerDocument||d).$$reactFormReplay,v!=null)for(C=0;C<v.length;C+=3){var N=v[C],L=v[C+1],X=N[en]||null;if(typeof L=="function")X||VA(v);else if(X){var ne=null;if(L&&L.hasAttribute("formAction")){if(N=L,X=L[en]||null)ne=X.formAction;else if(p1(N)!==null)continue}else ne=X.action;typeof ne=="function"?v[C+1]=ne:(v.splice(C,3),C-=3),VA(v)}}}a(ng,"retryIfBlockedOn");function g1(d){this._internalRoot=d}a(g1,"ReactDOMRoot"),ob.prototype.render=g1.prototype.render=function(d){var p=this._internalRoot;if(p===null)throw Error(r(409));var v=p.current,C=Ms();$A(v,C,d,p,null,null)},ob.prototype.unmount=g1.prototype.unmount=function(){var d=this._internalRoot;if(d!==null){this._internalRoot=null;var p=d.containerInfo;$A(d.current,2,null,d,null,null),qy(),p[ce]=null}};function ob(d){this._internalRoot=d}a(ob,"ReactDOMHydrationRoot"),ob.prototype.unstable_scheduleHydration=function(d){if(d){var p=ln();d={blockedOn:null,target:d,priority:p};for(var v=0;v<Tu.length&&p!==0&&p<Tu[v].priority;v++);Tu.splice(v,0,d),v===0&&qA(d)}};var WA=t.version;if(WA!=="19.1.1")throw Error(r(527,WA,"19.1.1"));H.findDOMNode=function(d){var p=d._reactInternals;if(p===void 0)throw typeof d.render=="function"?Error(r(188)):(d=Object.keys(d).join(","),Error(r(268,d)));return d=u(p),d=d!==null?f(d):null,d=d===null?null:d.stateNode,d};var rI={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lb=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lb.isDisabled&&lb.supportsFiber)try{Ke=lb.inject(rI),re=lb}catch{}}return y1.createRoot=function(d,p){if(!i(d))throw Error(r(299));var v=!1,C="",N=bm,L=C_,X=Ty,ne=null;return p!=null&&(p.unstable_strictMode===!0&&(v=!0),p.identifierPrefix!==void 0&&(C=p.identifierPrefix),p.onUncaughtError!==void 0&&(N=p.onUncaughtError),p.onCaughtError!==void 0&&(L=p.onCaughtError),p.onRecoverableError!==void 0&&(X=p.onRecoverableError),p.unstable_transitionCallbacks!==void 0&&(ne=p.unstable_transitionCallbacks)),p=LA(d,1,!1,null,null,v,C,N,L,X,ne,null),d[ce]=p.current,Fs(d),new g1(p)},y1.hydrateRoot=function(d,p,v){if(!i(d))throw Error(r(299));var C=!1,N="",L=bm,X=C_,ne=Ty,be=null,Fe=null;return v!=null&&(v.unstable_strictMode===!0&&(C=!0),v.identifierPrefix!==void 0&&(N=v.identifierPrefix),v.onUncaughtError!==void 0&&(L=v.onUncaughtError),v.onCaughtError!==void 0&&(X=v.onCaughtError),v.onRecoverableError!==void 0&&(ne=v.onRecoverableError),v.unstable_transitionCallbacks!==void 0&&(be=v.unstable_transitionCallbacks),v.formState!==void 0&&(Fe=v.formState)),p=LA(d,1,!0,p,v??null,C,N,L,X,ne,be,Fe),p.context=FA(null),v=p.current,C=Ms(),C=Vt(C),N=No(C),N.callback=null,uu(v,N,C),v=C,p.current.lanes=v,Tt(p,v),$o(p),d[ce]=p.current,Fs(d),new ob(p)},y1.version="19.1.1",y1}a(fbe,"requireReactDomClient_production");var eH;function hbe(){if(eH)return dI.exports;eH=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return a(e,"checkDCE"),e(),dI.exports=fbe(),dI.exports}a(hbe,"requireClient");var pbe=hbe();const mbe=x.createContext(null),mI={didCatch:!1,error:null};var lx;let U2=(lx=class extends x.Component{constructor(t){super(t),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=mI}static getDerivedStateFromError(t){return{didCatch:!0,error:t}}resetErrorBoundary(...t){const{error:n}=this.state;n!==null&&(this.props.onReset?.({args:t,reason:"imperative-api"}),this.setState(mI))}componentDidCatch(t,n){this.props.onError?.(t,n)}componentDidUpdate(t,n){const{didCatch:r}=this.state,{resetKeys:i}=this.props;r&&n.error!==null&&gbe(t.resetKeys,i)&&(this.props.onReset?.({next:i,prev:t.resetKeys,reason:"keys"}),this.setState(mI))}render(){const{children:t,fallbackRender:n,FallbackComponent:r,fallback:i}=this.props,{didCatch:s,error:o}=this.state;let c=t;if(s){const u={error:o,resetErrorBoundary:this.resetErrorBoundary};if(typeof n=="function")c=n(u);else if(r)c=x.createElement(r,u);else if(i!==void 0)c=i;else throw o}return x.createElement(mbe.Provider,{value:{didCatch:s,error:o,resetErrorBoundary:this.resetErrorBoundary}},c)}},a(lx,"m"),lx);function gbe(e=[],t=[]){return e.length!==t.length||e.some((n,r)=>!Object.is(n,t[r]))}a(gbe,"C$7");const rU=x.createContext(void 0);rU.displayName="AuthContext";const aU={loginUrl:"/login",afterLoginUrl:"/"},xs=a(()=>x.useContext(rU),"useAuthProvider");var cx,Q0=(cx=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},a(cx,"Subscribable"),cx),$g,Lh,ux,dx,vbe=(dx=class extends Q0{constructor(){super();on(this,$g);on(this,Lh);on(this,ux);Lt(this,ux,n=>{if(typeof window<"u"&&window.addEventListener){const r=a(()=>n(),"listener");return window.addEventListener("visibilitychange",r,!1),()=>{window.removeEventListener("visibilitychange",r)}}})}onSubscribe(){xe(this,Lh)||this.setEventListener(xe(this,ux))}onUnsubscribe(){var n;this.hasListeners()||((n=xe(this,Lh))==null||n.call(this),Lt(this,Lh,void 0))}setEventListener(n){var r;Lt(this,ux,n),(r=xe(this,Lh))==null||r.call(this),Lt(this,Lh,n(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(n){xe(this,$g)!==n&&(Lt(this,$g,n),this.onFocus())}onFocus(){const n=this.isFocused();this.listeners.forEach(r=>{r(n)})}isFocused(){return typeof xe(this,$g)=="boolean"?xe(this,$g):globalThis.document?.visibilityState!=="hidden"}},$g=new WeakMap,Lh=new WeakMap,ux=new WeakMap,a(dx,"FocusManager"),dx),iU=new vbe,ybe={setTimeout:a((e,t)=>setTimeout(e,t),"setTimeout"),clearTimeout:a(e=>clearTimeout(e),"clearTimeout"),setInterval:a((e,t)=>setInterval(e,t),"setInterval"),clearInterval:a(e=>clearInterval(e),"clearInterval")},Fh,tU,fx,bbe=(fx=class{constructor(){on(this,Fh,ybe);on(this,tU,!1)}setTimeoutProvider(t){Lt(this,Fh,t)}setTimeout(t,n){return xe(this,Fh).setTimeout(t,n)}clearTimeout(t){xe(this,Fh).clearTimeout(t)}setInterval(t,n){return xe(this,Fh).setInterval(t,n)}clearInterval(t){xe(this,Fh).clearInterval(t)}},Fh=new WeakMap,tU=new WeakMap,a(fx,"TimeoutManager"),fx),Tg=new bbe;function xbe(e){setTimeout(e,0)}a(xbe,"systemSetTimeoutZero");var wbe=typeof window>"u"||"Deno"in globalThis;function Gs(){}a(Gs,"noop$n");function _be(e,t){return typeof e=="function"?e(t):e}a(_be,"functionalUpdate");function t$(e){return typeof e=="number"&&e>=0&&e!==1/0}a(t$,"isValidTimeout");function _ne(e,t){return Math.max(e+(t||0)-Date.now(),0)}a(_ne,"timeUntilStale");function np(e,t){return typeof e=="function"?e(t):e}a(np,"resolveStaleTime");function Vo(e,t){return typeof e=="function"?e(t):e}a(Vo,"resolveQueryBoolean");function tH(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:s,queryKey:o,stale:c}=e;if(o){if(r){if(t.queryHash!==sU(o,t.options))return!1}else if(!PE(t.queryKey,o))return!1}if(n!=="all"){const u=t.isActive();if(n==="active"&&!u||n==="inactive"&&u)return!1}return!(typeof c=="boolean"&&t.isStale()!==c||i&&i!==t.state.fetchStatus||s&&!s(t))}a(tH,"matchQuery");function nH(e,t){const{exact:n,status:r,predicate:i,mutationKey:s}=e;if(s){if(!t.options.mutationKey)return!1;if(n){if(ev(t.options.mutationKey)!==ev(s))return!1}else if(!PE(t.options.mutationKey,s))return!1}return!(r&&t.state.status!==r||i&&!i(t))}a(nH,"matchMutation");function sU(e,t){return(t?.queryKeyHashFn||ev)(e)}a(sU,"hashQueryKeyByOptions");function ev(e){return JSON.stringify(e,(t,n)=>n$(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}a(ev,"hashKey");function PE(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>PE(e[n],t[n])):!1}a(PE,"partialMatchKey");var Ebe=Object.prototype.hasOwnProperty;function Ene(e,t,n=0){if(e===t)return e;if(n>500)return t;const r=rH(e)&&rH(t);if(!r&&!(n$(e)&&n$(t)))return t;const s=(r?e:Object.keys(e)).length,o=r?t:Object.keys(t),c=o.length,u=r?new Array(c):{};let f=0;for(let h=0;h<c;h++){const m=r?h:o[h],g=e[m],b=t[m];if(g===b){u[m]=g,(r?h<s:Ebe.call(e,m))&&f++;continue}if(g===null||b===null||typeof g!="object"||typeof b!="object"){u[m]=b;continue}const w=Ene(g,b,n+1);u[m]=w,w===g&&f++}return s===c&&f===s?e:u}a(Ene,"replaceEqualDeep");function nT(e,t){if(!t||Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}a(nT,"shallowEqualObjects");function rH(e){return Array.isArray(e)&&e.length===Object.keys(e).length}a(rH,"isPlainArray");function n$(e){if(!aH(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!aH(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}a(n$,"isPlainObject$5");function aH(e){return Object.prototype.toString.call(e)==="[object Object]"}a(aH,"hasObjectPrototype");function Sbe(e){return new Promise(t=>{Tg.setTimeout(t,e)})}a(Sbe,"sleep$1");function r$(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Ene(e,t):t}a(r$,"replaceData");function Cbe(e){return e}a(Cbe,"keepPreviousData");function jbe(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}a(jbe,"addToEnd");function Abe(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}a(Abe,"addToStart");var oU=Symbol();function Sne(e,t){return!e.queryFn&&t?.initialPromise?()=>t.initialPromise:!e.queryFn||e.queryFn===oU?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}a(Sne,"ensureQueryFn");function lU(e,t){return typeof e=="function"?e(...t):!!e}a(lU,"shouldThrowError");function Rbe(e,t,n){let r=!1,i;return Object.defineProperty(e,"signal",{enumerable:!0,get:a(()=>(i??=t(),r||(r=!0,i.aborted?n():i.addEventListener("abort",n,{once:!0})),i),"get")}),e}a(Rbe,"addConsumeAwareSignal");var ME=(()=>{let e=a(()=>wbe,"isServerFn");return{isServer(){return e()},setIsServer(t){e=t}}})();function a$(){let e,t;const n=new Promise((i,s)=>{e=i,t=s});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return a(r,"finalize"),n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}a(a$,"pendingThenable");var Tbe=xbe;function kbe(){let e=[],t=0,n=a(c=>{c()},"notifyFn"),r=a(c=>{c()},"batchNotifyFn"),i=Tbe;const s=a(c=>{t?e.push(c):i(()=>{n(c)})},"schedule"),o=a(()=>{const c=e;e=[],c.length&&i(()=>{r(()=>{c.forEach(u=>{n(u)})})})},"flush");return{batch:a(c=>{let u;t++;try{u=c()}finally{t--,t||o()}return u},"batch"),batchCalls:a(c=>(...u)=>{s(()=>{c(...u)})},"batchCalls"),schedule:s,setNotifyFunction:a(c=>{n=c},"setNotifyFunction"),setBatchNotifyFunction:a(c=>{r=c},"setBatchNotifyFunction"),setScheduler:a(c=>{i=c},"setScheduler")}}a(kbe,"createNotifyManager");var Xa=kbe(),hx,$h,px,mx,Nbe=(mx=class extends Q0{constructor(){super();on(this,hx,!0);on(this,$h);on(this,px);Lt(this,px,n=>{if(typeof window<"u"&&window.addEventListener){const r=a(()=>n(!0),"onlineListener"),i=a(()=>n(!1),"offlineListener");return window.addEventListener("online",r,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",i)}}})}onSubscribe(){xe(this,$h)||this.setEventListener(xe(this,px))}onUnsubscribe(){var n;this.hasListeners()||((n=xe(this,$h))==null||n.call(this),Lt(this,$h,void 0))}setEventListener(n){var r;Lt(this,px,n),(r=xe(this,$h))==null||r.call(this),Lt(this,$h,n(this.setOnline.bind(this)))}setOnline(n){xe(this,hx)!==n&&(Lt(this,hx,n),this.listeners.forEach(i=>{i(n)}))}isOnline(){return xe(this,hx)}},hx=new WeakMap,$h=new WeakMap,px=new WeakMap,a(mx,"OnlineManager"),mx),rT=new Nbe;function Obe(e){return Math.min(1e3*2**e,3e4)}a(Obe,"defaultRetryDelay");function Cne(e){return(e??"online")==="online"?rT.isOnline():!0}a(Cne,"canFetch");var gx,i$=(gx=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}},a(gx,"CancelledError"),gx);function jne(e){let t=!1,n=0,r;const i=a$(),s=a(()=>i.status!=="pending","isResolved"),o=a(_=>{if(!s()){const E=new i$(_);g(E),e.onCancel?.(E)}},"cancel"),c=a(()=>{t=!0},"cancelRetry"),u=a(()=>{t=!1},"continueRetry"),f=a(()=>iU.isFocused()&&(e.networkMode==="always"||rT.isOnline())&&e.canRun(),"canContinue"),h=a(()=>Cne(e.networkMode)&&e.canRun(),"canStart"),m=a(_=>{s()||(r?.(),i.resolve(_))},"resolve"),g=a(_=>{s()||(r?.(),i.reject(_))},"reject"),b=a(()=>new Promise(_=>{r=a(E=>{(s()||f())&&_(E)},"continueFn"),e.onPause?.()}).then(()=>{r=void 0,s()||e.onContinue?.()}),"pause"),w=a(()=>{if(s())return;let _;const E=n===0?e.initialPromise:void 0;try{_=E??e.fn()}catch(R){_=Promise.reject(R)}Promise.resolve(_).then(m).catch(R=>{if(s())return;const j=e.retry??(ME.isServer()?0:3),A=e.retryDelay??Obe,T=typeof A=="function"?A(n,R):A,D=j===!0||typeof j=="number"&&n<j||typeof j=="function"&&j(n,R);if(t||!D){g(R);return}n++,e.onFail?.(n,R),Sbe(T).then(()=>f()?void 0:b()).then(()=>{t?g(R):w()})})},"run");return{promise:i,status:a(()=>i.status,"status"),cancel:o,continue:a(()=>(r?.(),i),"continue"),cancelRetry:c,continueRetry:u,canStart:h,start:a(()=>(h()?w():b().then(w),i),"start")}}a(jne,"createRetryer");var Ug,vx,Ane=(vx=class{constructor(){on(this,Ug)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),t$(this.gcTime)&&Lt(this,Ug,Tg.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(ME.isServer()?1/0:300*1e3))}clearGcTimeout(){xe(this,Ug)!==void 0&&(Tg.clearTimeout(xe(this,Ug)),Lt(this,Ug,void 0))}},Ug=new WeakMap,a(vx,"Removable"),vx);function Dbe(e){return{onFetch:a((t,n)=>{const r=t.options,i=t.fetchOptions?.meta?.fetchMore?.direction,s=t.state.data?.pages||[],o=t.state.data?.pageParams||[];let c={pages:[],pageParams:[]},u=0;const f=a(async()=>{let h=!1;const m=a(w=>{Rbe(w,()=>t.signal,()=>h=!0)},"addSignalProperty"),g=Sne(t.options,t.fetchOptions),b=a(async(w,_,E)=>{if(h)return Promise.reject(t.signal.reason);if(_==null&&w.pages.length)return Promise.resolve(w);const j=a(()=>{const O={client:t.client,queryKey:t.queryKey,pageParam:_,direction:E?"backward":"forward",meta:t.options.meta};return m(O),O},"createQueryFnContext")(),A=await g(j),{maxPages:T}=t.options,D=E?Abe:jbe;return{pages:D(w.pages,A,T),pageParams:D(w.pageParams,_,T)}},"fetchPage");if(i&&s.length){const w=i==="backward",_=w?Rne:s$,E={pages:s,pageParams:o},R=_(r,E);c=await b(E,R,w)}else{const w=e??s.length;do{const _=u===0?o[0]??r.initialPageParam:s$(r,c);if(u>0&&_==null)break;c=await b(c,_),u++}while(u<w)}return c},"fetchFn");t.options.persister?t.fetchFn=()=>t.options.persister?.(f,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n):t.fetchFn=f},"onFetch")}}a(Dbe,"infiniteQueryBehavior");function s$(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}a(s$,"getNextPageParam");function Rne(e,{pages:t,pageParams:n}){return t.length>0?e.getPreviousPageParam?.(t[0],t,n[0],n):void 0}a(Rne,"getPreviousPageParam");function Ibe(e,t){return t?s$(e,t)!=null:!1}a(Ibe,"hasNextPage");function Pbe(e,t){return!t||!e.getPreviousPageParam?!1:Rne(e,t)!=null}a(Pbe,"hasPreviousPage");var yx,Bg,bx,Rl,zg,Ii,VS,qg,Ho,Tne,of,xx,Mbe=(xx=class extends Ane{constructor(n){super();on(this,Ho);on(this,yx);on(this,Bg);on(this,bx);on(this,Rl);on(this,zg);on(this,Ii);on(this,VS);on(this,qg);Lt(this,qg,!1),Lt(this,VS,n.defaultOptions),this.setOptions(n.options),this.observers=[],Lt(this,zg,n.client),Lt(this,Rl,xe(this,zg).getQueryCache()),this.queryKey=n.queryKey,this.queryHash=n.queryHash,Lt(this,Bg,sH(this.options)),this.state=n.state??xe(this,Bg),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return xe(this,yx)}get promise(){return xe(this,Ii)?.promise}setOptions(n){if(this.options={...xe(this,VS),...n},n?._type&&Lt(this,yx,n._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const r=sH(this.options);r.data!==void 0&&(this.setState(iH(r.data,r.dataUpdatedAt)),Lt(this,Bg,r))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&xe(this,Rl).remove(this)}setData(n,r){const i=r$(this.state.data,n,this.options);return Hn(this,Ho,of).call(this,{data:i,type:"success",dataUpdatedAt:r?.updatedAt,manual:r?.manual}),i}setState(n){Hn(this,Ho,of).call(this,{type:"setState",state:n})}cancel(n){const r=xe(this,Ii)?.promise;return xe(this,Ii)?.cancel(n),r?r.then(Gs).catch(Gs):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return xe(this,Bg)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(n=>Vo(n.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===oU||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(n=>np(n.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(n=>n.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(n=0){return this.state.data===void 0?!0:n==="static"?!1:this.state.isInvalidated?!0:!_ne(this.state.dataUpdatedAt,n)}onFocus(){this.observers.find(r=>r.shouldFetchOnWindowFocus())?.refetch({cancelRefetch:!1}),xe(this,Ii)?.continue()}onOnline(){this.observers.find(r=>r.shouldFetchOnReconnect())?.refetch({cancelRefetch:!1}),xe(this,Ii)?.continue()}addObserver(n){this.observers.includes(n)||(this.observers.push(n),this.clearGcTimeout(),xe(this,Rl).notify({type:"observerAdded",query:this,observer:n}))}removeObserver(n){this.observers.includes(n)&&(this.observers=this.observers.filter(r=>r!==n),this.observers.length||(xe(this,Ii)&&(xe(this,qg)||Hn(this,Ho,Tne).call(this)?xe(this,Ii).cancel({revert:!0}):xe(this,Ii).cancelRetry()),this.scheduleGc()),xe(this,Rl).notify({type:"observerRemoved",query:this,observer:n}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Hn(this,Ho,of).call(this,{type:"invalidate"})}async fetch(n,r){if(this.state.fetchStatus!=="idle"&&xe(this,Ii)?.status()!=="rejected"){if(this.state.data!==void 0&&r?.cancelRefetch)this.cancel({silent:!0});else if(xe(this,Ii))return xe(this,Ii).continueRetry(),xe(this,Ii).promise}if(n&&this.setOptions(n),!this.options.queryFn){const h=this.observers.find(m=>m.options.queryFn);h&&this.setOptions(h.options)}const i=new AbortController,s=a(h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:a(()=>(Lt(this,qg,!0),i.signal),"get")})},"addSignalProperty"),o=a(()=>{const h=Sne(this.options,r),g=a(()=>{const b={client:xe(this,zg),queryKey:this.queryKey,meta:this.meta};return s(b),b},"createQueryFnContext")();return Lt(this,qg,!1),this.options.persister?this.options.persister(h,g,this):h(g)},"fetchFn"),u=a(()=>{const h={fetchOptions:r,options:this.options,queryKey:this.queryKey,client:xe(this,zg),state:this.state,fetchFn:o};return s(h),h},"createFetchContext")();(xe(this,yx)==="infinite"?Dbe(this.options.pages):this.options.behavior)?.onFetch(u,this),Lt(this,bx,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==u.fetchOptions?.meta)&&Hn(this,Ho,of).call(this,{type:"fetch",meta:u.fetchOptions?.meta}),Lt(this,Ii,jne({initialPromise:r?.initialPromise,fn:u.fetchFn,onCancel:a(h=>{h instanceof i$&&h.revert&&this.setState({...xe(this,bx),fetchStatus:"idle"}),i.abort()},"onCancel"),onFail:a((h,m)=>{Hn(this,Ho,of).call(this,{type:"failed",failureCount:h,error:m})},"onFail"),onPause:a(()=>{Hn(this,Ho,of).call(this,{type:"pause"})},"onPause"),onContinue:a(()=>{Hn(this,Ho,of).call(this,{type:"continue"})},"onContinue"),retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode,canRun:a(()=>!0,"canRun")}));try{const h=await xe(this,Ii).start();if(h===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(h),xe(this,Rl).config.onSuccess?.(h,this),xe(this,Rl).config.onSettled?.(h,this.state.error,this),h}catch(h){if(h instanceof i$){if(h.silent)return xe(this,Ii).promise;if(h.revert){if(this.state.data===void 0)throw h;return this.state.data}}throw Hn(this,Ho,of).call(this,{type:"error",error:h}),xe(this,Rl).config.onError?.(h,this),xe(this,Rl).config.onSettled?.(this.state.data,h,this),h}finally{this.scheduleGc()}}},yx=new WeakMap,Bg=new WeakMap,bx=new WeakMap,Rl=new WeakMap,zg=new WeakMap,Ii=new WeakMap,VS=new WeakMap,qg=new WeakMap,Ho=new WeakSet,Tne=a(function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},"#isInitialPausedFetch"),of=a(function(n){const r=a(i=>{switch(n.type){case"failed":return{...i,fetchFailureCount:n.failureCount,fetchFailureReason:n.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...kne(i.data,this.options),fetchMeta:n.meta??null};case"success":const s={...i,...iH(n.data,n.dataUpdatedAt),dataUpdateCount:i.dataUpdateCount+1,...!n.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return Lt(this,bx,n.manual?s:void 0),s;case"error":const o=n.error;return{...i,error:o,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:o,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...n.state}}},"reducer");this.state=r(this.state),Xa.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),xe(this,Rl).notify({query:this,type:"updated",action:n})})},"#dispatch"),a(xx,"Query"),xx);function kne(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Cne(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}a(kne,"fetchState");function iH(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}a(iH,"successState");function sH(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}a(sH,"getDefaultState$1");var mo,or,WS,Ws,Hg,wx,ff,Uh,GS,_x,Ex,Vg,Wg,Bh,Sx,Or,tE,o$,l$,c$,u$,d$,f$,h$,One,Cx,Nne=(Cx=class extends Q0{constructor(n,r){super();on(this,Or);on(this,mo);on(this,or);on(this,WS);on(this,Ws);on(this,Hg);on(this,wx);on(this,ff);on(this,Uh);on(this,GS);on(this,_x);on(this,Ex);on(this,Vg);on(this,Wg);on(this,Bh);on(this,Sx,new Set);this.options=r,Lt(this,mo,n),Lt(this,Uh,null),Lt(this,ff,a$()),this.bindMethods(),this.setOptions(r)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(xe(this,or).addObserver(this),oH(xe(this,or),this.options)?Hn(this,Or,tE).call(this):this.updateResult(),Hn(this,Or,u$).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return p$(xe(this,or),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return p$(xe(this,or),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,Hn(this,Or,d$).call(this),Hn(this,Or,f$).call(this),xe(this,or).removeObserver(this)}setOptions(n){const r=this.options,i=xe(this,or);if(this.options=xe(this,mo).defaultQueryOptions(n),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof Vo(this.options.enabled,xe(this,or))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");Hn(this,Or,h$).call(this),xe(this,or).setOptions(this.options),r._defaulted&&!nT(this.options,r)&&xe(this,mo).getQueryCache().notify({type:"observerOptionsUpdated",query:xe(this,or),observer:this});const s=this.hasListeners();s&&lH(xe(this,or),i,this.options,r)&&Hn(this,Or,tE).call(this),this.updateResult(),s&&(xe(this,or)!==i||Vo(this.options.enabled,xe(this,or))!==Vo(r.enabled,xe(this,or))||np(this.options.staleTime,xe(this,or))!==np(r.staleTime,xe(this,or)))&&Hn(this,Or,o$).call(this);const o=Hn(this,Or,l$).call(this);s&&(xe(this,or)!==i||Vo(this.options.enabled,xe(this,or))!==Vo(r.enabled,xe(this,or))||o!==xe(this,Bh))&&Hn(this,Or,c$).call(this,o)}getOptimisticResult(n){const r=xe(this,mo).getQueryCache().build(xe(this,mo),n),i=this.createResult(r,n);return Fbe(this,i)&&(Lt(this,Ws,i),Lt(this,wx,this.options),Lt(this,Hg,xe(this,or).state)),i}getCurrentResult(){return xe(this,Ws)}trackResult(n,r){return new Proxy(n,{get:a((i,s)=>(this.trackProp(s),r?.(s),s==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&xe(this,ff).status==="pending"&&xe(this,ff).reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(i,s)),"get")})}trackProp(n){xe(this,Sx).add(n)}getCurrentQuery(){return xe(this,or)}refetch({...n}={}){return this.fetch({...n})}fetchOptimistic(n){const r=xe(this,mo).defaultQueryOptions(n),i=xe(this,mo).getQueryCache().build(xe(this,mo),r);return i.fetch().then(()=>this.createResult(i,r))}fetch(n){return Hn(this,Or,tE).call(this,{...n,cancelRefetch:n.cancelRefetch??!0}).then(()=>(this.updateResult(),xe(this,Ws)))}createResult(n,r){const i=xe(this,or),s=this.options,o=xe(this,Ws),c=xe(this,Hg),u=xe(this,wx),h=n!==i?n.state:xe(this,WS),{state:m}=n;let g={...m},b=!1,w;if(r._optimisticResults){const $=this.hasListeners(),F=!$&&oH(n,r),U=$&&lH(n,i,r,s);(F||U)&&(g={...g,...kne(m.data,n.options)}),r._optimisticResults==="isRestoring"&&(g.fetchStatus="idle")}let{error:_,errorUpdatedAt:E,status:R}=g;w=g.data;let j=!1;if(r.placeholderData!==void 0&&w===void 0&&R==="pending"){let $;o?.isPlaceholderData&&r.placeholderData===u?.placeholderData?($=o.data,j=!0):$=typeof r.placeholderData=="function"?r.placeholderData(xe(this,Ex)?.state.data,xe(this,Ex)):r.placeholderData,$!==void 0&&(R="success",w=r$(o?.data,$,r),b=!0)}if(r.select&&w!==void 0&&!j)if(o&&w===c?.data&&r.select===xe(this,GS))w=xe(this,_x);else try{Lt(this,GS,r.select),w=r.select(w),w=r$(o?.data,w,r),Lt(this,_x,w),Lt(this,Uh,null)}catch($){Lt(this,Uh,$)}xe(this,Uh)&&(_=xe(this,Uh),w=xe(this,_x),E=Date.now(),R="error");const A=g.fetchStatus==="fetching",T=R==="pending",D=R==="error",O=T&&A,P=w!==void 0,M={status:R,fetchStatus:g.fetchStatus,isPending:T,isSuccess:R==="success",isError:D,isInitialLoading:O,isLoading:O,data:w,dataUpdatedAt:g.dataUpdatedAt,error:_,errorUpdatedAt:E,failureCount:g.fetchFailureCount,failureReason:g.fetchFailureReason,errorUpdateCount:g.errorUpdateCount,isFetched:n.isFetched(),isFetchedAfterMount:g.dataUpdateCount>h.dataUpdateCount||g.errorUpdateCount>h.errorUpdateCount,isFetching:A,isRefetching:A&&!T,isLoadingError:D&&!P,isPaused:g.fetchStatus==="paused",isPlaceholderData:b,isRefetchError:D&&P,isStale:cU(n,r),refetch:this.refetch,promise:xe(this,ff),isEnabled:Vo(r.enabled,n)!==!1};if(this.options.experimental_prefetchInRender){const $=M.data!==void 0,F=M.status==="error"&&!$,U=a(q=>{F?q.reject(M.error):$&&q.resolve(M.data)},"finalizeThenableIfPossible"),z=a(()=>{const q=Lt(this,ff,M.promise=a$());U(q)},"recreateThenable"),W=xe(this,ff);switch(W.status){case"pending":n.queryHash===i.queryHash&&U(W);break;case"fulfilled":(F||M.data!==W.value)&&z();break;case"rejected":(!F||M.error!==W.reason)&&z();break}}return M}updateResult(){const n=xe(this,Ws),r=this.createResult(xe(this,or),this.options);if(Lt(this,Hg,xe(this,or).state),Lt(this,wx,this.options),xe(this,Hg).data!==void 0&&Lt(this,Ex,xe(this,or)),nT(r,n))return;Lt(this,Ws,r);const i=a(()=>{if(!n)return!0;const{notifyOnChangeProps:s}=this.options,o=typeof s=="function"?s():s;if(o==="all"||!o&&!xe(this,Sx).size)return!0;const c=new Set(o??xe(this,Sx));return this.options.throwOnError&&c.add("error"),Object.keys(xe(this,Ws)).some(u=>{const f=u;return xe(this,Ws)[f]!==n[f]&&c.has(f)})},"shouldNotifyListeners");Hn(this,Or,One).call(this,{listeners:i()})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&Hn(this,Or,u$).call(this)}},mo=new WeakMap,or=new WeakMap,WS=new WeakMap,Ws=new WeakMap,Hg=new WeakMap,wx=new WeakMap,ff=new WeakMap,Uh=new WeakMap,GS=new WeakMap,_x=new WeakMap,Ex=new WeakMap,Vg=new WeakMap,Wg=new WeakMap,Bh=new WeakMap,Sx=new WeakMap,Or=new WeakSet,tE=a(function(n){Hn(this,Or,h$).call(this);let r=xe(this,or).fetch(this.options,n);return n?.throwOnError||(r=r.catch(Gs)),r},"#executeFetch"),o$=a(function(){Hn(this,Or,d$).call(this);const n=np(this.options.staleTime,xe(this,or));if(ME.isServer()||xe(this,Ws).isStale||!t$(n))return;const i=_ne(xe(this,Ws).dataUpdatedAt,n)+1;Lt(this,Vg,Tg.setTimeout(()=>{xe(this,Ws).isStale||this.updateResult()},i))},"#updateStaleTimeout"),l$=a(function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(xe(this,or)):this.options.refetchInterval)??!1},"#computeRefetchInterval"),c$=a(function(n){Hn(this,Or,f$).call(this),Lt(this,Bh,n),!(ME.isServer()||Vo(this.options.enabled,xe(this,or))===!1||!t$(xe(this,Bh))||xe(this,Bh)===0)&&Lt(this,Wg,Tg.setInterval(()=>{(this.options.refetchIntervalInBackground||iU.isFocused())&&Hn(this,Or,tE).call(this)},xe(this,Bh)))},"#updateRefetchInterval"),u$=a(function(){Hn(this,Or,o$).call(this),Hn(this,Or,c$).call(this,Hn(this,Or,l$).call(this))},"#updateTimers"),d$=a(function(){xe(this,Vg)!==void 0&&(Tg.clearTimeout(xe(this,Vg)),Lt(this,Vg,void 0))},"#clearStaleTimeout"),f$=a(function(){xe(this,Wg)!==void 0&&(Tg.clearInterval(xe(this,Wg)),Lt(this,Wg,void 0))},"#clearRefetchInterval"),h$=a(function(){const n=xe(this,mo).getQueryCache().build(xe(this,mo),this.options);if(n===xe(this,or))return;const r=xe(this,or);Lt(this,or,n),Lt(this,WS,n.state),this.hasListeners()&&(r?.removeObserver(this),n.addObserver(this))},"#updateQuery"),One=a(function(n){Xa.batch(()=>{n.listeners&&this.listeners.forEach(r=>{r(xe(this,Ws))}),xe(this,mo).getQueryCache().notify({query:xe(this,or),type:"observerResultsUpdated"})})},"#notify"),a(Cx,"QueryObserver"),Cx);function Lbe(e,t){return Vo(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&Vo(t.retryOnMount,e)===!1)}a(Lbe,"shouldLoadOnMount");function oH(e,t){return Lbe(e,t)||e.state.data!==void 0&&p$(e,t,t.refetchOnMount)}a(oH,"shouldFetchOnMount");function p$(e,t,n){if(Vo(t.enabled,e)!==!1&&np(t.staleTime,e)!=="static"){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&cU(e,t)}return!1}a(p$,"shouldFetchOn");function lH(e,t,n,r){return(e!==t||Vo(r.enabled,e)===!1)&&(!n.suspense||e.state.status!=="error")&&cU(e,n)}a(lH,"shouldFetchOptionally");function cU(e,t){return Vo(t.enabled,e)!==!1&&e.isStaleByTime(np(t.staleTime,e))}a(cU,"isStale");function Fbe(e,t){return!nT(e.getCurrentResult(),t)}a(Fbe,"shouldAssignObserverCurrentProperties");var jx,$be=(jx=class extends Nne{constructor(t,n){super(t,n)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t){t._type="infinite",super.setOptions(t)}getOptimisticResult(t){return t._type="infinite",super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,n){const{state:r}=t,i=super.createResult(t,n),{isFetching:s,isRefetching:o,isError:c,isRefetchError:u}=i,f=r.fetchMeta?.fetchMore?.direction,h=c&&f==="forward",m=s&&f==="forward",g=c&&f==="backward",b=s&&f==="backward";return{...i,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:Ibe(n,r.data),hasPreviousPage:Pbe(n,r.data),isFetchNextPageError:h,isFetchingNextPage:m,isFetchPreviousPageError:g,isFetchingPreviousPage:b,isRefetchError:u&&!h&&!g,isRefetching:o&&!m&&!b}}},a(jx,"InfiniteQueryObserver"),jx),YS,$u,ps,Gg,Uu,Ch,Ax,Ube=(Ax=class extends Ane{constructor(n){super();on(this,Uu);on(this,YS);on(this,$u);on(this,ps);on(this,Gg);Lt(this,YS,n.client),this.mutationId=n.mutationId,Lt(this,ps,n.mutationCache),Lt(this,$u,[]),this.state=n.state||Dne(),this.setOptions(n.options),this.scheduleGc()}setOptions(n){this.options=n,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(n){xe(this,$u).includes(n)||(xe(this,$u).push(n),this.clearGcTimeout(),xe(this,ps).notify({type:"observerAdded",mutation:this,observer:n}))}removeObserver(n){Lt(this,$u,xe(this,$u).filter(r=>r!==n)),this.scheduleGc(),xe(this,ps).notify({type:"observerRemoved",mutation:this,observer:n})}optionalRemove(){xe(this,$u).length||(this.state.status==="pending"?this.scheduleGc():xe(this,ps).remove(this))}continue(){return xe(this,Gg)?.continue()??this.execute(this.state.variables)}async execute(n){const r=a(()=>{Hn(this,Uu,Ch).call(this,{type:"continue"})},"onContinue"),i={client:xe(this,YS),meta:this.options.meta,mutationKey:this.options.mutationKey};Lt(this,Gg,jne({fn:a(()=>this.options.mutationFn?this.options.mutationFn(n,i):Promise.reject(new Error("No mutationFn found")),"fn"),onFail:a((c,u)=>{Hn(this,Uu,Ch).call(this,{type:"failed",failureCount:c,error:u})},"onFail"),onPause:a(()=>{Hn(this,Uu,Ch).call(this,{type:"pause"})},"onPause"),onContinue:r,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:a(()=>xe(this,ps).canRun(this),"canRun")}));const s=this.state.status==="pending",o=!xe(this,Gg).canStart();try{if(s)r();else{Hn(this,Uu,Ch).call(this,{type:"pending",variables:n,isPaused:o}),xe(this,ps).config.onMutate&&await xe(this,ps).config.onMutate(n,this,i);const u=await this.options.onMutate?.(n,i);u!==this.state.context&&Hn(this,Uu,Ch).call(this,{type:"pending",context:u,variables:n,isPaused:o})}const c=await xe(this,Gg).start();return await xe(this,ps).config.onSuccess?.(c,n,this.state.context,this,i),await this.options.onSuccess?.(c,n,this.state.context,i),await xe(this,ps).config.onSettled?.(c,null,this.state.variables,this.state.context,this,i),await this.options.onSettled?.(c,null,n,this.state.context,i),Hn(this,Uu,Ch).call(this,{type:"success",data:c}),c}catch(c){try{await xe(this,ps).config.onError?.(c,n,this.state.context,this,i)}catch(u){Promise.reject(u)}try{await this.options.onError?.(c,n,this.state.context,i)}catch(u){Promise.reject(u)}try{await xe(this,ps).config.onSettled?.(void 0,c,this.state.variables,this.state.context,this,i)}catch(u){Promise.reject(u)}try{await this.options.onSettled?.(void 0,c,n,this.state.context,i)}catch(u){Promise.reject(u)}throw Hn(this,Uu,Ch).call(this,{type:"error",error:c}),c}finally{xe(this,ps).runNext(this)}}},YS=new WeakMap,$u=new WeakMap,ps=new WeakMap,Gg=new WeakMap,Uu=new WeakSet,Ch=a(function(n){const r=a(i=>{switch(n.type){case"failed":return{...i,failureCount:n.failureCount,failureReason:n.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:n.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:n.isPaused,status:"pending",variables:n.variables,submittedAt:Date.now()};case"success":return{...i,data:n.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:n.error,failureCount:i.failureCount+1,failureReason:n.error,isPaused:!1,status:"error"}}},"reducer");this.state=r(this.state),Xa.batch(()=>{xe(this,$u).forEach(i=>{i.onMutationUpdate(n)}),xe(this,ps).notify({mutation:this,type:"updated",action:n})})},"#dispatch"),a(Ax,"Mutation"),Ax);function Dne(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}a(Dne,"getDefaultState");var hf,Ac,KS,Rx,Bbe=(Rx=class extends Q0{constructor(n={}){super();on(this,hf);on(this,Ac);on(this,KS);this.config=n,Lt(this,hf,new Set),Lt(this,Ac,new Map),Lt(this,KS,0)}build(n,r,i){const s=new Ube({client:n,mutationCache:this,mutationId:++GA(this,KS)._,options:n.defaultMutationOptions(r),state:i});return this.add(s),s}add(n){xe(this,hf).add(n);const r=YA(n);if(typeof r=="string"){const i=xe(this,Ac).get(r);i?i.push(n):xe(this,Ac).set(r,[n])}this.notify({type:"added",mutation:n})}remove(n){if(xe(this,hf).delete(n)){const r=YA(n);if(typeof r=="string"){const i=xe(this,Ac).get(r);if(i)if(i.length>1){const s=i.indexOf(n);s!==-1&&i.splice(s,1)}else i[0]===n&&xe(this,Ac).delete(r)}}this.notify({type:"removed",mutation:n})}canRun(n){const r=YA(n);if(typeof r=="string"){const s=xe(this,Ac).get(r)?.find(o=>o.state.status==="pending");return!s||s===n}else return!0}runNext(n){const r=YA(n);return typeof r=="string"?xe(this,Ac).get(r)?.find(s=>s!==n&&s.state.isPaused)?.continue()??Promise.resolve():Promise.resolve()}clear(){Xa.batch(()=>{xe(this,hf).forEach(n=>{this.notify({type:"removed",mutation:n})}),xe(this,hf).clear(),xe(this,Ac).clear()})}getAll(){return Array.from(xe(this,hf))}find(n){const r={exact:!0,...n};return this.getAll().find(i=>nH(r,i))}findAll(n={}){return this.getAll().filter(r=>nH(n,r))}notify(n){Xa.batch(()=>{this.listeners.forEach(r=>{r(n)})})}resumePausedMutations(){const n=this.getAll().filter(r=>r.state.isPaused);return Xa.batch(()=>Promise.all(n.map(r=>r.continue().catch(Gs))))}},hf=new WeakMap,Ac=new WeakMap,KS=new WeakMap,a(Rx,"MutationCache"),Rx);function YA(e){return e.options.scope?.id}a(YA,"scopeFor");var pf,zh,go,mf,Sf,LR,m$,Tx,zbe=(Tx=class extends Q0{constructor(n,r){super();on(this,Sf);on(this,pf);on(this,zh);on(this,go);on(this,mf);Lt(this,pf,n),this.setOptions(r),this.bindMethods(),Hn(this,Sf,LR).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){const r=this.options;this.options=xe(this,pf).defaultMutationOptions(n),nT(this.options,r)||xe(this,pf).getMutationCache().notify({type:"observerOptionsUpdated",mutation:xe(this,go),observer:this}),r?.mutationKey&&this.options.mutationKey&&ev(r.mutationKey)!==ev(this.options.mutationKey)?this.reset():xe(this,go)?.state.status==="pending"&&xe(this,go).setOptions(this.options)}onUnsubscribe(){this.hasListeners()||xe(this,go)?.removeObserver(this)}onMutationUpdate(n){Hn(this,Sf,LR).call(this),Hn(this,Sf,m$).call(this,n)}getCurrentResult(){return xe(this,zh)}reset(){xe(this,go)?.removeObserver(this),Lt(this,go,void 0),Hn(this,Sf,LR).call(this),Hn(this,Sf,m$).call(this)}mutate(n,r){return Lt(this,mf,r),xe(this,go)?.removeObserver(this),Lt(this,go,xe(this,pf).getMutationCache().build(xe(this,pf),this.options)),xe(this,go).addObserver(this),xe(this,go).execute(n)}},pf=new WeakMap,zh=new WeakMap,go=new WeakMap,mf=new WeakMap,Sf=new WeakSet,LR=a(function(){const n=xe(this,go)?.state??Dne();Lt(this,zh,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},"#updateResult"),m$=a(function(n){Xa.batch(()=>{if(xe(this,mf)&&this.hasListeners()){const r=xe(this,zh).variables,i=xe(this,zh).context,s={client:xe(this,pf),meta:this.options.meta,mutationKey:this.options.mutationKey};if(n?.type==="success"){try{xe(this,mf).onSuccess?.(n.data,r,i,s)}catch(o){Promise.reject(o)}try{xe(this,mf).onSettled?.(n.data,null,r,i,s)}catch(o){Promise.reject(o)}}else if(n?.type==="error"){try{xe(this,mf).onError?.(n.error,r,i,s)}catch(o){Promise.reject(o)}try{xe(this,mf).onSettled?.(void 0,n.error,r,i,s)}catch(o){Promise.reject(o)}}}this.listeners.forEach(r=>{r(xe(this,zh))})})},"#notify"),a(Tx,"MutationObserver"),Tx),Bu,kx,qbe=(kx=class extends Q0{constructor(n={}){super();on(this,Bu);this.config=n,Lt(this,Bu,new Map)}build(n,r,i){const s=r.queryKey,o=r.queryHash??sU(s,r);let c=this.get(o);return c||(c=new Mbe({client:n,queryKey:s,queryHash:o,options:n.defaultQueryOptions(r),state:i,defaultOptions:n.getQueryDefaults(s)}),this.add(c)),c}add(n){xe(this,Bu).has(n.queryHash)||(xe(this,Bu).set(n.queryHash,n),this.notify({type:"added",query:n}))}remove(n){const r=xe(this,Bu).get(n.queryHash);r&&(n.destroy(),r===n&&xe(this,Bu).delete(n.queryHash),this.notify({type:"removed",query:n}))}clear(){Xa.batch(()=>{this.getAll().forEach(n=>{this.remove(n)})})}get(n){return xe(this,Bu).get(n)}getAll(){return[...xe(this,Bu).values()]}find(n){const r={exact:!0,...n};return this.getAll().find(i=>tH(r,i))}findAll(n={}){const r=this.getAll();return Object.keys(n).length>0?r.filter(i=>tH(n,i)):r}notify(n){Xa.batch(()=>{this.listeners.forEach(r=>{r(n)})})}onFocus(){Xa.batch(()=>{this.getAll().forEach(n=>{n.onFocus()})})}onOnline(){Xa.batch(()=>{this.getAll().forEach(n=>{n.onOnline()})})}},Bu=new WeakMap,a(kx,"QueryCache"),kx),Ba,qh,Hh,Nx,Ox,Vh,Dx,Ix,Px,Ine=(Px=class{constructor(t={}){on(this,Ba);on(this,qh);on(this,Hh);on(this,Nx);on(this,Ox);on(this,Vh);on(this,Dx);on(this,Ix);Lt(this,Ba,t.queryCache||new qbe),Lt(this,qh,t.mutationCache||new Bbe),Lt(this,Hh,t.defaultOptions||{}),Lt(this,Nx,new Map),Lt(this,Ox,new Map),Lt(this,Vh,0)}mount(){GA(this,Vh)._++,xe(this,Vh)===1&&(Lt(this,Dx,iU.subscribe(async t=>{t&&(await this.resumePausedMutations(),xe(this,Ba).onFocus())})),Lt(this,Ix,rT.subscribe(async t=>{t&&(await this.resumePausedMutations(),xe(this,Ba).onOnline())})))}unmount(){var t,n;GA(this,Vh)._--,xe(this,Vh)===0&&((t=xe(this,Dx))==null||t.call(this),Lt(this,Dx,void 0),(n=xe(this,Ix))==null||n.call(this),Lt(this,Ix,void 0))}isFetching(t){return xe(this,Ba).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return xe(this,qh).findAll({...t,status:"pending"}).length}getQueryData(t){const n=this.defaultQueryOptions({queryKey:t});return xe(this,Ba).get(n.queryHash)?.state.data}ensureQueryData(t){const n=this.defaultQueryOptions(t),r=xe(this,Ba).build(this,n),i=r.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&r.isStaleByTime(np(n.staleTime,r))&&this.prefetchQuery(n),Promise.resolve(i))}getQueriesData(t){return xe(this,Ba).findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.defaultQueryOptions({queryKey:t}),o=xe(this,Ba).get(i.queryHash)?.state.data,c=_be(n,o);if(c!==void 0)return xe(this,Ba).build(this,i).setData(c,{...r,manual:!0})}setQueriesData(t,n,r){return Xa.batch(()=>xe(this,Ba).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t){const n=this.defaultQueryOptions({queryKey:t});return xe(this,Ba).get(n.queryHash)?.state}removeQueries(t){const n=xe(this,Ba);Xa.batch(()=>{n.findAll(t).forEach(r=>{n.remove(r)})})}resetQueries(t,n){const r=xe(this,Ba);return Xa.batch(()=>(r.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},n)))}cancelQueries(t,n={}){const r={revert:!0,...n},i=Xa.batch(()=>xe(this,Ba).findAll(t).map(s=>s.cancel(r)));return Promise.all(i).then(Gs).catch(Gs)}invalidateQueries(t,n={}){return Xa.batch(()=>(xe(this,Ba).findAll(t).forEach(r=>{r.invalidate()}),t?.refetchType==="none"?Promise.resolve():this.refetchQueries({...t,type:t?.refetchType??t?.type??"active"},n)))}refetchQueries(t,n={}){const r={...n,cancelRefetch:n.cancelRefetch??!0},i=Xa.batch(()=>xe(this,Ba).findAll(t).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let o=s.fetch(void 0,r);return r.throwOnError||(o=o.catch(Gs)),s.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(i).then(Gs)}fetchQuery(t){const n=this.defaultQueryOptions(t);n.retry===void 0&&(n.retry=!1);const r=xe(this,Ba).build(this,n);return r.isStaleByTime(np(n.staleTime,r))?r.fetch(n):Promise.resolve(r.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Gs).catch(Gs)}fetchInfiniteQuery(t){return t._type="infinite",this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Gs).catch(Gs)}ensureInfiniteQueryData(t){return t._type="infinite",this.ensureQueryData(t)}resumePausedMutations(){return rT.isOnline()?xe(this,qh).resumePausedMutations():Promise.resolve()}getQueryCache(){return xe(this,Ba)}getMutationCache(){return xe(this,qh)}getDefaultOptions(){return xe(this,Hh)}setDefaultOptions(t){Lt(this,Hh,t)}setQueryDefaults(t,n){xe(this,Nx).set(ev(t),{queryKey:t,defaultOptions:n})}getQueryDefaults(t){const n=[...xe(this,Nx).values()],r={};return n.forEach(i=>{PE(t,i.queryKey)&&Object.assign(r,i.defaultOptions)}),r}setMutationDefaults(t,n){xe(this,Ox).set(ev(t),{mutationKey:t,defaultOptions:n})}getMutationDefaults(t){const n=[...xe(this,Ox).values()],r={};return n.forEach(i=>{PE(t,i.mutationKey)&&Object.assign(r,i.defaultOptions)}),r}defaultQueryOptions(t){if(t._defaulted)return t;const n={...xe(this,Hh).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return n.queryHash||(n.queryHash=sU(n.queryKey,n)),n.refetchOnReconnect===void 0&&(n.refetchOnReconnect=n.networkMode!=="always"),n.throwOnError===void 0&&(n.throwOnError=!!n.suspense),!n.networkMode&&n.persister&&(n.networkMode="offlineFirst"),n.queryFn===oU&&(n.enabled=!1),n}defaultMutationOptions(t){return t?._defaulted?t:{...xe(this,Hh).mutations,...t?.mutationKey&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){xe(this,Ba).clear(),xe(this,qh).clear()}},Ba=new WeakMap,qh=new WeakMap,Hh=new WeakMap,Nx=new WeakMap,Ox=new WeakMap,Vh=new WeakMap,Dx=new WeakMap,Ix=new WeakMap,a(Px,"QueryClient"),Px),Pne=x.createContext(void 0),da=a(e=>{const t=x.useContext(Pne);if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},"useQueryClient"),Mne=a(({client:e,children:t})=>(x.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),l.jsx(Pne.Provider,{value:e,children:t})),"QueryClientProvider"),Lne=x.createContext(!1),Hbe=a(()=>x.useContext(Lne),"useIsRestoring"),Vbe=Lne.Provider;function Wbe(){let e=!1;return{clearReset:a(()=>{e=!1},"clearReset"),reset:a(()=>{e=!0},"reset"),isReset:a(()=>e,"isReset")}}a(Wbe,"createValue");var Gbe=x.createContext(Wbe()),Ybe=a(()=>x.useContext(Gbe),"useQueryErrorResetBoundary"),Kbe=a((e,t,n)=>{const r=n?.state.error&&typeof e.throwOnError=="function"?lU(e.throwOnError,[n.state.error,n]):e.throwOnError;(e.suspense||e.experimental_prefetchInRender||r)&&(t.isReset()||(e.retryOnMount=!1))},"ensurePreventErrorBoundaryRetry"),Xbe=a(e=>{x.useEffect(()=>{e.clearReset()},[e])},"useClearResetErrorBoundary"),Qbe=a(({result:e,errorResetBoundary:t,throwOnError:n,query:r,suspense:i})=>e.isError&&!t.isReset()&&!e.isFetching&&r&&(i&&e.data===void 0||lU(n,[e.error,r])),"getHasError"),Jbe=a(e=>{if(e.suspense){const n=a(i=>i==="static"?i:Math.max(i??1e3,1e3),"clamp"),r=e.staleTime;e.staleTime=typeof r=="function"?(...i)=>n(r(...i)):n(r),typeof e.gcTime=="number"&&(e.gcTime=Math.max(e.gcTime,1e3))}},"ensureSuspenseTimers"),Zbe=a((e,t)=>e.isLoading&&e.isFetching&&!t,"willFetch"),exe=a((e,t)=>e?.suspense&&t.isPending,"shouldSuspend"),cH=a((e,t,n)=>t.fetchOptimistic(e).catch(()=>{n.clearReset()}),"fetchOptimistic");function Fne(e,t,n){const r=Hbe(),i=Ybe(),s=da(),o=s.defaultQueryOptions(e);s.getDefaultOptions().queries?._experimental_beforeQuery?.(o);const c=s.getQueryCache().get(o.queryHash),u=e.subscribed!==!1;o._optimisticResults=r?"isRestoring":u?"optimistic":void 0,Jbe(o),Kbe(o,i,c),Xbe(i);const f=!s.getQueryCache().get(o.queryHash),[h]=x.useState(()=>new t(s,o)),m=h.getOptimisticResult(o),g=!r&&u;if(x.useSyncExternalStore(x.useCallback(b=>{const w=g?h.subscribe(Xa.batchCalls(b)):Gs;return h.updateResult(),w},[h,g]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),x.useEffect(()=>{h.setOptions(o)},[o,h]),exe(o,m))throw cH(o,h,i);if(Qbe({result:m,errorResetBoundary:i,throwOnError:o.throwOnError,query:c,suspense:o.suspense}))throw m.error;return s.getDefaultOptions().queries?._experimental_afterQuery?.(o,m),o.experimental_prefetchInRender&&!ME.isServer()&&Zbe(m,r)&&(f?cH(o,h,i):c?.promise)?.catch(Gs).finally(()=>{h.updateResult()}),o.notifyOnChangeProps?m:h.trackResult(m)}a(Fne,"useBaseQuery");function Co(e,t){return Fne(e,Nne)}a(Co,"useQuery");function al(e,t){const n=da(),[r]=x.useState(()=>new zbe(n,e));x.useEffect(()=>{r.setOptions(e)},[r,e]);const i=x.useSyncExternalStore(x.useCallback(o=>r.subscribe(Xa.batchCalls(o)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),s=x.useCallback((o,c)=>{r.mutate(o,c).catch(Gs)},[r]);if(i.error&&lU(r.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:s,mutateAsync:i.mutate}}a(al,"useMutation");function txe(e,t){return Fne(e,$be)}a(txe,"useInfiniteQuery");const nxe="RaStore",rxe=a(()=>{if(typeof window>"u"||window.localStorage==null)return!1;try{return window.localStorage.setItem("test","test"),window.localStorage.removeItem("test"),!0}catch{return!1}},"testLocalStorage"),g$=rxe(),$ne=a((e="1",t="")=>{const n=`${nxe}${t}`,r=n.length,i={},s=a((c,u)=>{Object.keys(i).forEach(f=>{i[f]&&i[f].key===c&&i[f].callback(u)})},"publish"),o=a(c=>{if(c.key?.substring(0,r)!==n)return;const u=c.key.substring(r+1),f=c.newValue?gI(c.newValue):void 0;Object.keys(i).forEach(h=>{i[h]&&i[h].key===u&&(f===null?i[h].callback(void 0):i[h].callback(f??void 0))})},"onLocalStorageChange");return{setup:a(()=>{if(g$){const c=ku().getItem(`${n}.version`);if(c&&c!==e){const u=ku();Object.keys(u).forEach(f=>{f.startsWith(n)&&u.removeItem(f)})}ku().setItem(`${n}.version`,e),window.addEventListener("storage",o)}},"setup"),teardown:a(()=>{g$&&window.removeEventListener("storage",o)},"teardown"),getItem(c,u){const f=ku().getItem(`${n}.${c}`);return f==null?u:gI(f)},setItem(c,u){u===void 0?ku().removeItem(`${n}.${c}`):ku().setItem(`${n}.${c}`,JSON.stringify(u)),s(c,u)},removeItem(c){ku().removeItem(`${n}.${c}`),s(c,void 0)},removeItems(c){const u=ku();Object.keys(u).forEach(f=>{if(f.startsWith(`${n}.${c}`)){u.removeItem(f);const h=f.substring(r+1);s(h,void 0)}})},reset(){const c=ku();Object.keys(c).forEach(u=>{if(u.startsWith(n)){c.removeItem(u);const f=u.substring(r+1);s(f,void 0)}})},subscribe:a((c,u)=>{const f=Math.random().toString();return i[f]={key:c,callback:u},()=>{delete i[f]}},"subscribe"),listItems:a(c=>{const u=ku(),f=`${n}.${c??""}`;return Object.entries(u).reduce((h,[m,g])=>(m!==`${n}.version`&&m.startsWith(f)&&(h[m.substring(n.length+1)]=gI(g)),h),{})},"listItems")}},"localStorageStore"),gI=a(e=>{try{return JSON.parse(e)}catch{return e}},"tryParse"),Gz=class Gz{constructor(){this.valuesMap=new Map}getItem(t){return this.valuesMap.has(t)?String(this.valuesMap.get(t)):null}setItem(t,n){this.valuesMap.set(t,n)}removeItem(t){this.valuesMap.delete(t)}removeItems(t){this.valuesMap.forEach((n,r)=>{r.startsWith(t)&&this.valuesMap.delete(r)})}clear(){this.valuesMap.clear()}key(t){if(arguments.length===0)throw new TypeError("Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.");return Array.from(this.valuesMap.keys())[t]}get length(){return this.valuesMap.size}};a(Gz,"LocalStorageShim");let v$=Gz;const axe=new v$,ku=a(()=>g$?window.localStorage:axe,"getStorage"),Une=a((e={})=>{let t=new Map(Object.entries(e??{}));const n={};let r=!1,i={};const s=a((o,c)=>{Object.keys(n).forEach(u=>{n[u]&&n[u].key===o&&n[u].callback(c)})},"publish");return{setup:a(()=>{if(t=new Map(Object.entries(e)),Object.keys(i).length>0){const o=Object.entries(i);for(const[c,u]of o)t.set(c,u),s(c,u);i={}}r=!0},"setup"),teardown:a(()=>{t.clear()},"teardown"),getItem(o,c){return t.has(o)?t.get(o):c},setItem(o,c){if(!r){i[o]=c;return}t.set(o,c),s(o,c)},removeItem(o){t.delete(o),s(o,void 0)},removeItems(o){const c=[];t.forEach((u,f)=>{f.startsWith(o)&&c.push(f)}),c.forEach(u=>{t.delete(u),s(u,void 0)})},reset(){const o=[];t.forEach((c,u)=>{o.push(u)}),t.clear(),o.forEach(c=>{s(c,void 0)})},subscribe:a((o,c)=>{const u=Math.random().toString();return n[u]={key:o,callback:c},()=>{delete n[u]}},"subscribe"),listItems:a(o=>Array.from(t.entries()).reduce((c,[u,f])=>(o!=null&&!u.startsWith(o)||(c[u]=f),c),{}),"listItems")}},"memoryStore"),ixe=Une(),Bne=x.createContext(ixe),sxe=a(({value:e,children:t})=>(x.useEffect(()=>(e.setup(),()=>{e.teardown()}),[e]),x.createElement(Bne.Provider,{value:e},t)),"StoreContextProvider"),uU=a(()=>x.useContext(Bne),"useStoreContext");var vI,uH;function oxe(){if(uH)return vI;uH=1;function e(){this.__data__=[],this.size=0}return a(e,"listCacheClear"),vI=e,vI}a(oxe,"require_listCacheClear");var yI,dH;function J0(){if(dH)return yI;dH=1;function e(t,n){return t===n||t!==t&&n!==n}return a(e,"eq"),yI=e,yI}a(J0,"requireEq");var bI,fH;function B2(){if(fH)return bI;fH=1;var e=J0();function t(n,r){for(var i=n.length;i--;)if(e(n[i][0],r))return i;return-1}return a(t,"assocIndexOf"),bI=t,bI}a(B2,"require_assocIndexOf");var xI,hH;function lxe(){if(hH)return xI;hH=1;var e=B2(),t=Array.prototype,n=t.splice;function r(i){var s=this.__data__,o=e(s,i);if(o<0)return!1;var c=s.length-1;return o==c?s.pop():n.call(s,o,1),--this.size,!0}return a(r,"listCacheDelete"),xI=r,xI}a(lxe,"require_listCacheDelete");var wI,pH;function cxe(){if(pH)return wI;pH=1;var e=B2();function t(n){var r=this.__data__,i=e(r,n);return i<0?void 0:r[i][1]}return a(t,"listCacheGet"),wI=t,wI}a(cxe,"require_listCacheGet");var _I,mH;function uxe(){if(mH)return _I;mH=1;var e=B2();function t(n){return e(this.__data__,n)>-1}return a(t,"listCacheHas"),_I=t,_I}a(uxe,"require_listCacheHas");var EI,gH;function dxe(){if(gH)return EI;gH=1;var e=B2();function t(n,r){var i=this.__data__,s=e(i,n);return s<0?(++this.size,i.push([n,r])):i[s][1]=r,this}return a(t,"listCacheSet"),EI=t,EI}a(dxe,"require_listCacheSet");var SI,vH;function z2(){if(vH)return SI;vH=1;var e=oxe(),t=lxe(),n=cxe(),r=uxe(),i=dxe();function s(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var f=o[c];this.set(f[0],f[1])}}return a(s,"ListCache"),s.prototype.clear=e,s.prototype.delete=t,s.prototype.get=n,s.prototype.has=r,s.prototype.set=i,SI=s,SI}a(z2,"require_ListCache");var CI,yH;function fxe(){if(yH)return CI;yH=1;var e=z2();function t(){this.__data__=new e,this.size=0}return a(t,"stackClear"),CI=t,CI}a(fxe,"require_stackClear");var jI,bH;function hxe(){if(bH)return jI;bH=1;function e(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r}return a(e,"stackDelete"),jI=e,jI}a(hxe,"require_stackDelete");var AI,xH;function pxe(){if(xH)return AI;xH=1;function e(t){return this.__data__.get(t)}return a(e,"stackGet"),AI=e,AI}a(pxe,"require_stackGet");var RI,wH;function mxe(){if(wH)return RI;wH=1;function e(t){return this.__data__.has(t)}return a(e,"stackHas"),RI=e,RI}a(mxe,"require_stackHas");var TI,_H;function zne(){if(_H)return TI;_H=1;var e=typeof Dc=="object"&&Dc&&Dc.Object===Object&&Dc;return TI=e,TI}a(zne,"require_freeGlobal");var kI,EH;function Gc(){if(EH)return kI;EH=1;var e=zne(),t=typeof self=="object"&&self&&self.Object===Object&&self,n=e||t||Function("return this")();return kI=n,kI}a(Gc,"require_root");var NI,SH;function Z0(){if(SH)return NI;SH=1;var e=Gc(),t=e.Symbol;return NI=t,NI}a(Z0,"require_Symbol");var OI,CH;function gxe(){if(CH)return OI;CH=1;var e=Z0(),t=Object.prototype,n=t.hasOwnProperty,r=t.toString,i=e?e.toStringTag:void 0;function s(o){var c=n.call(o,i),u=o[i];try{o[i]=void 0;var f=!0}catch{}var h=r.call(o);return f&&(c?o[i]=u:delete o[i]),h}return a(s,"getRawTag"),OI=s,OI}a(gxe,"require_getRawTag");var DI,jH;function vxe(){if(jH)return DI;jH=1;var e=Object.prototype,t=e.toString;function n(r){return t.call(r)}return a(n,"objectToString"),DI=n,DI}a(vxe,"require_objectToString");var II,AH;function Nf(){if(AH)return II;AH=1;var e=Z0(),t=gxe(),n=vxe(),r="[object Null]",i="[object Undefined]",s=e?e.toStringTag:void 0;function o(c){return c==null?c===void 0?i:r:s&&s in Object(c)?t(c):n(c)}return a(o,"baseGetTag"),II=o,II}a(Nf,"require_baseGetTag");var PI,RH;function ql(){if(RH)return PI;RH=1;function e(t){var n=typeof t;return t!=null&&(n=="object"||n=="function")}return a(e,"isObject"),PI=e,PI}a(ql,"requireIsObject");var MI,TH;function q2(){if(TH)return MI;TH=1;var e=Nf(),t=ql(),n="[object AsyncFunction]",r="[object Function]",i="[object GeneratorFunction]",s="[object Proxy]";function o(c){if(!t(c))return!1;var u=e(c);return u==r||u==i||u==n||u==s}return a(o,"isFunction"),MI=o,MI}a(q2,"requireIsFunction");var LI,kH;function yxe(){if(kH)return LI;kH=1;var e=Gc(),t=e["__core-js_shared__"];return LI=t,LI}a(yxe,"require_coreJsData");var FI,NH;function bxe(){if(NH)return FI;NH=1;var e=yxe(),t=(function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""})();function n(r){return!!t&&t in r}return a(n,"isMasked"),FI=n,FI}a(bxe,"require_isMasked");var $I,OH;function qne(){if(OH)return $I;OH=1;var e=Function.prototype,t=e.toString;function n(r){if(r!=null){try{return t.call(r)}catch{}try{return r+""}catch{}}return""}return a(n,"toSource"),$I=n,$I}a(qne,"require_toSource");var UI,DH;function xxe(){if(DH)return UI;DH=1;var e=q2(),t=bxe(),n=ql(),r=qne(),i=/[\\^$.*+?()[\]{}|]/g,s=/^\[object .+?Constructor\]$/,o=Function.prototype,c=Object.prototype,u=o.toString,f=c.hasOwnProperty,h=RegExp("^"+u.call(f).replace(i,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function m(g){if(!n(g)||t(g))return!1;var b=e(g)?h:s;return b.test(r(g))}return a(m,"baseIsNative"),UI=m,UI}a(xxe,"require_baseIsNative");var BI,IH;function wxe(){if(IH)return BI;IH=1;function e(t,n){return t?.[n]}return a(e,"getValue"),BI=e,BI}a(wxe,"require_getValue");var zI,PH;function vv(){if(PH)return zI;PH=1;var e=xxe(),t=wxe();function n(r,i){var s=t(r,i);return e(s)?s:void 0}return a(n,"getNative"),zI=n,zI}a(vv,"require_getNative");var qI,MH;function dU(){if(MH)return qI;MH=1;var e=vv(),t=Gc(),n=e(t,"Map");return qI=n,qI}a(dU,"require_Map");var HI,LH;function H2(){if(LH)return HI;LH=1;var e=vv(),t=e(Object,"create");return HI=t,HI}a(H2,"require_nativeCreate");var VI,FH;function _xe(){if(FH)return VI;FH=1;var e=H2();function t(){this.__data__=e?e(null):{},this.size=0}return a(t,"hashClear"),VI=t,VI}a(_xe,"require_hashClear");var WI,$H;function Exe(){if($H)return WI;$H=1;function e(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}return a(e,"hashDelete"),WI=e,WI}a(Exe,"require_hashDelete");var GI,UH;function Sxe(){if(UH)return GI;UH=1;var e=H2(),t="__lodash_hash_undefined__",n=Object.prototype,r=n.hasOwnProperty;function i(s){var o=this.__data__;if(e){var c=o[s];return c===t?void 0:c}return r.call(o,s)?o[s]:void 0}return a(i,"hashGet"),GI=i,GI}a(Sxe,"require_hashGet");var YI,BH;function Cxe(){if(BH)return YI;BH=1;var e=H2(),t=Object.prototype,n=t.hasOwnProperty;function r(i){var s=this.__data__;return e?s[i]!==void 0:n.call(s,i)}return a(r,"hashHas"),YI=r,YI}a(Cxe,"require_hashHas");var KI,zH;function jxe(){if(zH)return KI;zH=1;var e=H2(),t="__lodash_hash_undefined__";function n(r,i){var s=this.__data__;return this.size+=this.has(r)?0:1,s[r]=e&&i===void 0?t:i,this}return a(n,"hashSet"),KI=n,KI}a(jxe,"require_hashSet");var XI,qH;function Axe(){if(qH)return XI;qH=1;var e=_xe(),t=Exe(),n=Sxe(),r=Cxe(),i=jxe();function s(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var f=o[c];this.set(f[0],f[1])}}return a(s,"Hash"),s.prototype.clear=e,s.prototype.delete=t,s.prototype.get=n,s.prototype.has=r,s.prototype.set=i,XI=s,XI}a(Axe,"require_Hash");var QI,HH;function Rxe(){if(HH)return QI;HH=1;var e=Axe(),t=z2(),n=dU();function r(){this.size=0,this.__data__={hash:new e,map:new(n||t),string:new e}}return a(r,"mapCacheClear"),QI=r,QI}a(Rxe,"require_mapCacheClear");var JI,VH;function Txe(){if(VH)return JI;VH=1;function e(t){var n=typeof t;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?t!=="__proto__":t===null}return a(e,"isKeyable"),JI=e,JI}a(Txe,"require_isKeyable");var ZI,WH;function V2(){if(WH)return ZI;WH=1;var e=Txe();function t(n,r){var i=n.__data__;return e(r)?i[typeof r=="string"?"string":"hash"]:i.map}return a(t,"getMapData"),ZI=t,ZI}a(V2,"require_getMapData");var eP,GH;function kxe(){if(GH)return eP;GH=1;var e=V2();function t(n){var r=e(this,n).delete(n);return this.size-=r?1:0,r}return a(t,"mapCacheDelete"),eP=t,eP}a(kxe,"require_mapCacheDelete");var tP,YH;function Nxe(){if(YH)return tP;YH=1;var e=V2();function t(n){return e(this,n).get(n)}return a(t,"mapCacheGet"),tP=t,tP}a(Nxe,"require_mapCacheGet");var nP,KH;function Oxe(){if(KH)return nP;KH=1;var e=V2();function t(n){return e(this,n).has(n)}return a(t,"mapCacheHas"),nP=t,nP}a(Oxe,"require_mapCacheHas");var rP,XH;function Dxe(){if(XH)return rP;XH=1;var e=V2();function t(n,r){var i=e(this,n),s=i.size;return i.set(n,r),this.size+=i.size==s?0:1,this}return a(t,"mapCacheSet"),rP=t,rP}a(Dxe,"require_mapCacheSet");var aP,QH;function fU(){if(QH)return aP;QH=1;var e=Rxe(),t=kxe(),n=Nxe(),r=Oxe(),i=Dxe();function s(o){var c=-1,u=o==null?0:o.length;for(this.clear();++c<u;){var f=o[c];this.set(f[0],f[1])}}return a(s,"MapCache"),s.prototype.clear=e,s.prototype.delete=t,s.prototype.get=n,s.prototype.has=r,s.prototype.set=i,aP=s,aP}a(fU,"require_MapCache");var iP,JH;function Ixe(){if(JH)return iP;JH=1;var e=z2(),t=dU(),n=fU(),r=200;function i(s,o){var c=this.__data__;if(c instanceof e){var u=c.__data__;if(!t||u.length<r-1)return u.push([s,o]),this.size=++c.size,this;c=this.__data__=new n(u)}return c.set(s,o),this.size=c.size,this}return a(i,"stackSet"),iP=i,iP}a(Ixe,"require_stackSet");var sP,ZH;function W2(){if(ZH)return sP;ZH=1;var e=z2(),t=fxe(),n=hxe(),r=pxe(),i=mxe(),s=Ixe();function o(c){var u=this.__data__=new e(c);this.size=u.size}return a(o,"Stack"),o.prototype.clear=t,o.prototype.delete=n,o.prototype.get=r,o.prototype.has=i,o.prototype.set=s,sP=o,sP}a(W2,"require_Stack");var oP,eV;function Pxe(){if(eV)return oP;eV=1;var e="__lodash_hash_undefined__";function t(n){return this.__data__.set(n,e),this}return a(t,"setCacheAdd"),oP=t,oP}a(Pxe,"require_setCacheAdd");var lP,tV;function Mxe(){if(tV)return lP;tV=1;function e(t){return this.__data__.has(t)}return a(e,"setCacheHas"),lP=e,lP}a(Mxe,"require_setCacheHas");var cP,nV;function hU(){if(nV)return cP;nV=1;var e=fU(),t=Pxe(),n=Mxe();function r(i){var s=-1,o=i==null?0:i.length;for(this.__data__=new e;++s<o;)this.add(i[s])}return a(r,"SetCache"),r.prototype.add=r.prototype.push=t,r.prototype.has=n,cP=r,cP}a(hU,"require_SetCache");var uP,rV;function Lxe(){if(rV)return uP;rV=1;function e(t,n){for(var r=-1,i=t==null?0:t.length;++r<i;)if(n(t[r],r,t))return!0;return!1}return a(e,"arraySome"),uP=e,uP}a(Lxe,"require_arraySome");var dP,aV;function pU(){if(aV)return dP;aV=1;function e(t,n){return t.has(n)}return a(e,"cacheHas"),dP=e,dP}a(pU,"require_cacheHas");var fP,iV;function Hne(){if(iV)return fP;iV=1;var e=hU(),t=Lxe(),n=pU(),r=1,i=2;function s(o,c,u,f,h,m){var g=u&r,b=o.length,w=c.length;if(b!=w&&!(g&&w>b))return!1;var _=m.get(o),E=m.get(c);if(_&&E)return _==c&&E==o;var R=-1,j=!0,A=u&i?new e:void 0;for(m.set(o,c),m.set(c,o);++R<b;){var T=o[R],D=c[R];if(f)var O=g?f(D,T,R,c,o,m):f(T,D,R,o,c,m);if(O!==void 0){if(O)continue;j=!1;break}if(A){if(!t(c,function(P,k){if(!n(A,k)&&(T===P||h(T,P,u,f,m)))return A.push(k)})){j=!1;break}}else if(!(T===D||h(T,D,u,f,m))){j=!1;break}}return m.delete(o),m.delete(c),j}return a(s,"equalArrays"),fP=s,fP}a(Hne,"require_equalArrays");var hP,sV;function Vne(){if(sV)return hP;sV=1;var e=Gc(),t=e.Uint8Array;return hP=t,hP}a(Vne,"require_Uint8Array");var pP,oV;function Fxe(){if(oV)return pP;oV=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(i,s){r[++n]=[s,i]}),r}return a(e,"mapToArray"),pP=e,pP}a(Fxe,"require_mapToArray");var mP,lV;function mU(){if(lV)return mP;lV=1;function e(t){var n=-1,r=Array(t.size);return t.forEach(function(i){r[++n]=i}),r}return a(e,"setToArray"),mP=e,mP}a(mU,"require_setToArray");var gP,cV;function $xe(){if(cV)return gP;cV=1;var e=Z0(),t=Vne(),n=J0(),r=Hne(),i=Fxe(),s=mU(),o=1,c=2,u="[object Boolean]",f="[object Date]",h="[object Error]",m="[object Map]",g="[object Number]",b="[object RegExp]",w="[object Set]",_="[object String]",E="[object Symbol]",R="[object ArrayBuffer]",j="[object DataView]",A=e?e.prototype:void 0,T=A?A.valueOf:void 0;function D(O,P,k,M,$,F,U){switch(k){case j:if(O.byteLength!=P.byteLength||O.byteOffset!=P.byteOffset)return!1;O=O.buffer,P=P.buffer;case R:return!(O.byteLength!=P.byteLength||!F(new t(O),new t(P)));case u:case f:case g:return n(+O,+P);case h:return O.name==P.name&&O.message==P.message;case b:case _:return O==P+"";case m:var z=i;case w:var W=M&o;if(z||(z=s),O.size!=P.size&&!W)return!1;var q=U.get(O);if(q)return q==P;M|=c,U.set(O,P);var V=r(z(O),z(P),M,$,F,U);return U.delete(O),V;case E:if(T)return T.call(O)==T.call(P)}return!1}return a(D,"equalByTag"),gP=D,gP}a($xe,"require_equalByTag");var vP,uV;function gU(){if(uV)return vP;uV=1;function e(t,n){for(var r=-1,i=n.length,s=t.length;++r<i;)t[s+r]=n[r];return t}return a(e,"arrayPush"),vP=e,vP}a(gU,"require_arrayPush");var yP,dV;function Zs(){if(dV)return yP;dV=1;var e=Array.isArray;return yP=e,yP}a(Zs,"requireIsArray");var bP,fV;function Wne(){if(fV)return bP;fV=1;var e=gU(),t=Zs();function n(r,i,s){var o=i(r);return t(r)?o:e(o,s(r))}return a(n,"baseGetAllKeys"),bP=n,bP}a(Wne,"require_baseGetAllKeys");var xP,hV;function Gne(){if(hV)return xP;hV=1;function e(t,n){for(var r=-1,i=t==null?0:t.length,s=0,o=[];++r<i;){var c=t[r];n(c,r,t)&&(o[s++]=c)}return o}return a(e,"arrayFilter"),xP=e,xP}a(Gne,"require_arrayFilter");var wP,pV;function Yne(){if(pV)return wP;pV=1;function e(){return[]}return a(e,"stubArray"),wP=e,wP}a(Yne,"requireStubArray");var _P,mV;function vU(){if(mV)return _P;mV=1;var e=Gne(),t=Yne(),n=Object.prototype,r=n.propertyIsEnumerable,i=Object.getOwnPropertySymbols,s=i?function(o){return o==null?[]:(o=Object(o),e(i(o),function(c){return r.call(o,c)}))}:t;return _P=s,_P}a(vU,"require_getSymbols");var EP,gV;function Uxe(){if(gV)return EP;gV=1;function e(t,n){for(var r=-1,i=Array(t);++r<t;)i[r]=n(r);return i}return a(e,"baseTimes"),EP=e,EP}a(Uxe,"require_baseTimes");var SP,vV;function Hl(){if(vV)return SP;vV=1;function e(t){return t!=null&&typeof t=="object"}return a(e,"isObjectLike"),SP=e,SP}a(Hl,"requireIsObjectLike");var CP,yV;function Bxe(){if(yV)return CP;yV=1;var e=Nf(),t=Hl(),n="[object Arguments]";function r(i){return t(i)&&e(i)==n}return a(r,"baseIsArguments"),CP=r,CP}a(Bxe,"require_baseIsArguments");var jP,bV;function G2(){if(bV)return jP;bV=1;var e=Bxe(),t=Hl(),n=Object.prototype,r=n.hasOwnProperty,i=n.propertyIsEnumerable,s=e((function(){return arguments})())?e:function(o){return t(o)&&r.call(o,"callee")&&!i.call(o,"callee")};return jP=s,jP}a(G2,"requireIsArguments$1");var nE={exports:{}},AP,xV;function zxe(){if(xV)return AP;xV=1;function e(){return!1}return a(e,"stubFalse"),AP=e,AP}a(zxe,"requireStubFalse");nE.exports;var wV;function Y2(){return wV||(wV=1,(function(e,t){var n=Gc(),r=zxe(),i=t&&!t.nodeType&&t,s=i&&!0&&e&&!e.nodeType&&e,o=s&&s.exports===i,c=o?n.Buffer:void 0,u=c?c.isBuffer:void 0,f=u||r;e.exports=f})(nE,nE.exports)),nE.exports}a(Y2,"requireIsBuffer");var RP,_V;function K2(){if(_V)return RP;_V=1;var e=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function n(r,i){var s=typeof r;return i=i??e,!!i&&(s=="number"||s!="symbol"&&t.test(r))&&r>-1&&r%1==0&&r<i}return a(n,"isIndex"),RP=n,RP}a(K2,"require_isIndex");var TP,EV;function yU(){if(EV)return TP;EV=1;var e=9007199254740991;function t(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=e}return a(t,"isLength"),TP=t,TP}a(yU,"requireIsLength");var kP,SV;function qxe(){if(SV)return kP;SV=1;var e=Nf(),t=yU(),n=Hl(),r="[object Arguments]",i="[object Array]",s="[object Boolean]",o="[object Date]",c="[object Error]",u="[object Function]",f="[object Map]",h="[object Number]",m="[object Object]",g="[object RegExp]",b="[object Set]",w="[object String]",_="[object WeakMap]",E="[object ArrayBuffer]",R="[object DataView]",j="[object Float32Array]",A="[object Float64Array]",T="[object Int8Array]",D="[object Int16Array]",O="[object Int32Array]",P="[object Uint8Array]",k="[object Uint8ClampedArray]",M="[object Uint16Array]",$="[object Uint32Array]",F={};F[j]=F[A]=F[T]=F[D]=F[O]=F[P]=F[k]=F[M]=F[$]=!0,F[r]=F[i]=F[E]=F[s]=F[R]=F[o]=F[c]=F[u]=F[f]=F[h]=F[m]=F[g]=F[b]=F[w]=F[_]=!1;function U(z){return n(z)&&t(z.length)&&!!F[e(z)]}return a(U,"baseIsTypedArray"),kP=U,kP}a(qxe,"require_baseIsTypedArray");var NP,CV;function ew(){if(CV)return NP;CV=1;function e(t){return function(n){return t(n)}}return a(e,"baseUnary"),NP=e,NP}a(ew,"require_baseUnary");var rE={exports:{}};rE.exports;var jV;function X2(){return jV||(jV=1,(function(e,t){var n=zne(),r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===r,o=s&&n.process,c=(function(){try{var u=i&&i.require&&i.require("util").types;return u||o&&o.binding&&o.binding("util")}catch{}})();e.exports=c})(rE,rE.exports)),rE.exports}a(X2,"require_nodeUtil");var OP,AV;function bU(){if(AV)return OP;AV=1;var e=qxe(),t=ew(),n=X2(),r=n&&n.isTypedArray,i=r?t(r):e;return OP=i,OP}a(bU,"requireIsTypedArray");var DP,RV;function Kne(){if(RV)return DP;RV=1;var e=Uxe(),t=G2(),n=Zs(),r=Y2(),i=K2(),s=bU(),o=Object.prototype,c=o.hasOwnProperty;function u(f,h){var m=n(f),g=!m&&t(f),b=!m&&!g&&r(f),w=!m&&!g&&!b&&s(f),_=m||g||b||w,E=_?e(f.length,String):[],R=E.length;for(var j in f)(h||c.call(f,j))&&!(_&&(j=="length"||b&&(j=="offset"||j=="parent")||w&&(j=="buffer"||j=="byteLength"||j=="byteOffset")||i(j,R)))&&E.push(j);return E}return a(u,"arrayLikeKeys"),DP=u,DP}a(Kne,"require_arrayLikeKeys");var IP,TV;function xU(){if(TV)return IP;TV=1;var e=Object.prototype;function t(n){var r=n&&n.constructor,i=typeof r=="function"&&r.prototype||e;return n===i}return a(t,"isPrototype"),IP=t,IP}a(xU,"require_isPrototype");var PP,kV;function Xne(){if(kV)return PP;kV=1;function e(t,n){return function(r){return t(n(r))}}return a(e,"overArg"),PP=e,PP}a(Xne,"require_overArg");var MP,NV;function Hxe(){if(NV)return MP;NV=1;var e=Xne(),t=e(Object.keys,Object);return MP=t,MP}a(Hxe,"require_nativeKeys");var LP,OV;function Vxe(){if(OV)return LP;OV=1;var e=xU(),t=Hxe(),n=Object.prototype,r=n.hasOwnProperty;function i(s){if(!e(s))return t(s);var o=[];for(var c in Object(s))r.call(s,c)&&c!="constructor"&&o.push(c);return o}return a(i,"baseKeys"),LP=i,LP}a(Vxe,"require_baseKeys");var FP,DV;function tw(){if(DV)return FP;DV=1;var e=q2(),t=yU();function n(r){return r!=null&&t(r.length)&&!e(r)}return a(n,"isArrayLike"),FP=n,FP}a(tw,"requireIsArrayLike");var $P,IV;function QS(){if(IV)return $P;IV=1;var e=Kne(),t=Vxe(),n=tw();function r(i){return n(i)?e(i):t(i)}return a(r,"keys"),$P=r,$P}a(QS,"requireKeys");var UP,PV;function Qne(){if(PV)return UP;PV=1;var e=Wne(),t=vU(),n=QS();function r(i){return e(i,n,t)}return a(r,"getAllKeys"),UP=r,UP}a(Qne,"require_getAllKeys");var BP,MV;function Wxe(){if(MV)return BP;MV=1;var e=Qne(),t=1,n=Object.prototype,r=n.hasOwnProperty;function i(s,o,c,u,f,h){var m=c&t,g=e(s),b=g.length,w=e(o),_=w.length;if(b!=_&&!m)return!1;for(var E=b;E--;){var R=g[E];if(!(m?R in o:r.call(o,R)))return!1}var j=h.get(s),A=h.get(o);if(j&&A)return j==o&&A==s;var T=!0;h.set(s,o),h.set(o,s);for(var D=m;++E<b;){R=g[E];var O=s[R],P=o[R];if(u)var k=m?u(P,O,R,o,s,h):u(O,P,R,s,o,h);if(!(k===void 0?O===P||f(O,P,c,u,h):k)){T=!1;break}D||(D=R=="constructor")}if(T&&!D){var M=s.constructor,$=o.constructor;M!=$&&"constructor"in s&&"constructor"in o&&!(typeof M=="function"&&M instanceof M&&typeof $=="function"&&$ instanceof $)&&(T=!1)}return h.delete(s),h.delete(o),T}return a(i,"equalObjects"),BP=i,BP}a(Wxe,"require_equalObjects");var zP,LV;function Gxe(){if(LV)return zP;LV=1;var e=vv(),t=Gc(),n=e(t,"DataView");return zP=n,zP}a(Gxe,"require_DataView");var qP,FV;function Yxe(){if(FV)return qP;FV=1;var e=vv(),t=Gc(),n=e(t,"Promise");return qP=n,qP}a(Yxe,"require_Promise");var HP,$V;function Jne(){if($V)return HP;$V=1;var e=vv(),t=Gc(),n=e(t,"Set");return HP=n,HP}a(Jne,"require_Set");var VP,UV;function Kxe(){if(UV)return VP;UV=1;var e=vv(),t=Gc(),n=e(t,"WeakMap");return VP=n,VP}a(Kxe,"require_WeakMap");var WP,BV;function Q2(){if(BV)return WP;BV=1;var e=Gxe(),t=dU(),n=Yxe(),r=Jne(),i=Kxe(),s=Nf(),o=qne(),c="[object Map]",u="[object Object]",f="[object Promise]",h="[object Set]",m="[object WeakMap]",g="[object DataView]",b=o(e),w=o(t),_=o(n),E=o(r),R=o(i),j=s;return(e&&j(new e(new ArrayBuffer(1)))!=g||t&&j(new t)!=c||n&&j(n.resolve())!=f||r&&j(new r)!=h||i&&j(new i)!=m)&&(j=a(function(A){var T=s(A),D=T==u?A.constructor:void 0,O=D?o(D):"";if(O)switch(O){case b:return g;case w:return c;case _:return f;case E:return h;case R:return m}return T},"getTag")),WP=j,WP}a(Q2,"require_getTag");var GP,zV;function Xxe(){if(zV)return GP;zV=1;var e=W2(),t=Hne(),n=$xe(),r=Wxe(),i=Q2(),s=Zs(),o=Y2(),c=bU(),u=1,f="[object Arguments]",h="[object Array]",m="[object Object]",g=Object.prototype,b=g.hasOwnProperty;function w(_,E,R,j,A,T){var D=s(_),O=s(E),P=D?h:i(_),k=O?h:i(E);P=P==f?m:P,k=k==f?m:k;var M=P==m,$=k==m,F=P==k;if(F&&o(_)){if(!o(E))return!1;D=!0,M=!1}if(F&&!M)return T||(T=new e),D||c(_)?t(_,E,R,j,A,T):n(_,E,P,R,j,A,T);if(!(R&u)){var U=M&&b.call(_,"__wrapped__"),z=$&&b.call(E,"__wrapped__");if(U||z){var W=U?_.value():_,q=z?E.value():E;return T||(T=new e),A(W,q,R,j,T)}}return F?(T||(T=new e),r(_,E,R,j,A,T)):!1}return a(w,"baseIsEqualDeep"),GP=w,GP}a(Xxe,"require_baseIsEqualDeep");var YP,qV;function wU(){if(qV)return YP;qV=1;var e=Xxe(),t=Hl();function n(r,i,s,o,c){return r===i?!0:r==null||i==null||!t(r)&&!t(i)?r!==r&&i!==i:e(r,i,s,o,n,c)}return a(n,"baseIsEqual"),YP=n,YP}a(wU,"require_baseIsEqual");var KP,HV;function Qxe(){if(HV)return KP;HV=1;var e=wU();function t(n,r){return e(n,r)}return a(t,"isEqual"),KP=t,KP}a(Qxe,"requireIsEqual");var Jxe=Qxe();const Ml=Er(Jxe),VV=a((e,t)=>e&&t?String.prototype.replace.call(e,Zxe,function(n,r){return!t.hasOwnProperty(r)||t[r]==null?n:t[r]}):e,"substituteTokens"),Zxe=/%\{(.*?)\}/g;var XP,WV;function JS(){if(WV)return XP;WV=1;var e=Nf(),t=Hl(),n="[object Symbol]";function r(i){return typeof i=="symbol"||t(i)&&e(i)==n}return a(r,"isSymbol"),XP=r,XP}a(JS,"requireIsSymbol");var QP,GV;function _U(){if(GV)return QP;GV=1;var e=Zs(),t=JS(),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,r=/^\w*$/;function i(s,o){if(e(s))return!1;var c=typeof s;return c=="number"||c=="symbol"||c=="boolean"||s==null||t(s)?!0:r.test(s)||!n.test(s)||o!=null&&s in Object(o)}return a(i,"isKey"),QP=i,QP}a(_U,"require_isKey");var JP,YV;function Zne(){if(YV)return JP;YV=1;var e=fU(),t="Expected a function";function n(r,i){if(typeof r!="function"||i!=null&&typeof i!="function")throw new TypeError(t);var s=a(function(){var o=arguments,c=i?i.apply(this,o):o[0],u=s.cache;if(u.has(c))return u.get(c);var f=r.apply(this,o);return s.cache=u.set(c,f)||u,f},"memoized");return s.cache=new(n.Cache||e),s}return a(n,"memoize"),n.Cache=e,JP=n,JP}a(Zne,"requireMemoize");var ZP,KV;function e0e(){if(KV)return ZP;KV=1;var e=Zne(),t=500;function n(r){var i=e(r,function(o){return s.size===t&&s.clear(),o}),s=i.cache;return i}return a(n,"memoizeCapped"),ZP=n,ZP}a(e0e,"require_memoizeCapped");var eM,XV;function t0e(){if(XV)return eM;XV=1;var e=e0e(),t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g,r=e(function(i){var s=[];return i.charCodeAt(0)===46&&s.push(""),i.replace(t,function(o,c,u,f){s.push(u?f.replace(n,"$1"):c||o)}),s});return eM=r,eM}a(t0e,"require_stringToPath");var tM,QV;function ZS(){if(QV)return tM;QV=1;function e(t,n){for(var r=-1,i=t==null?0:t.length,s=Array(i);++r<i;)s[r]=n(t[r],r,t);return s}return a(e,"arrayMap"),tM=e,tM}a(ZS,"require_arrayMap");var nM,JV;function n0e(){if(JV)return nM;JV=1;var e=Z0(),t=ZS(),n=Zs(),r=JS(),i=e?e.prototype:void 0,s=i?i.toString:void 0;function o(c){if(typeof c=="string")return c;if(n(c))return t(c,o)+"";if(r(c))return s?s.call(c):"";var u=c+"";return u=="0"&&1/c==-1/0?"-0":u}return a(o,"baseToString"),nM=o,nM}a(n0e,"require_baseToString");var rM,ZV;function r0e(){if(ZV)return rM;ZV=1;var e=n0e();function t(n){return n==null?"":e(n)}return a(t,"toString"),rM=t,rM}a(r0e,"requireToString");var aM,eW;function nw(){if(eW)return aM;eW=1;var e=Zs(),t=_U(),n=t0e(),r=r0e();function i(s,o){return e(s)?s:t(s,o)?[s]:n(r(s))}return a(i,"castPath"),aM=i,aM}a(nw,"require_castPath");var iM,tW;function rw(){if(tW)return iM;tW=1;var e=JS();function t(n){if(typeof n=="string"||e(n))return n;var r=n+"";return r=="0"&&1/n==-1/0?"-0":r}return a(t,"toKey"),iM=t,iM}a(rw,"require_toKey");var sM,nW;function eC(){if(nW)return sM;nW=1;var e=nw(),t=rw();function n(r,i){i=e(i,r);for(var s=0,o=i.length;r!=null&&s<o;)r=r[t(i[s++])];return s&&s==o?r:void 0}return a(n,"baseGet"),sM=n,sM}a(eC,"require_baseGet");var oM,rW;function ere(){if(rW)return oM;rW=1;var e=eC();function t(n,r,i){var s=n==null?void 0:e(n,r);return s===void 0?i:s}return a(t,"get"),oM=t,oM}a(ere,"requireGet$1");var a0e=ere();const Wn=Er(a0e),i0e={translate:a((e,t)=>t?._?VV(t._,t):VV(e,t),"translate"),changeLocale:a(()=>Promise.resolve(),"changeLocale"),getLocale:a(()=>"en","getLocale")},EU=x.createContext(i0e);EU.displayName="I18nContext";const tre=x.createContext(()=>{}),s0e=x.createContext(null),nre=x.createContext({notifications:[],addNotification:a(()=>{},"addNotification"),takeNotification:a(()=>{},"takeNotification"),resetNotifications:a(()=>{},"resetNotifications"),setNotifications:a(()=>{},"setNotifications")}),o0e=a(({children:e})=>{const[t,n]=x.useState([]),r=x.useCallback(c=>{n(u=>[...u,c])},[]),i=x.useCallback(()=>{if(t.length===0)return;const[c,...u]=t;return n(u),c},[t]),s=x.useCallback(()=>{n([])},[]),o=x.useMemo(()=>({notifications:t,addNotification:r,takeNotification:i,resetNotifications:s,setNotifications:n}),[t]);return x.createElement(nre.Provider,{value:o},x.createElement(tre.Provider,{value:r},e))},"NotificationContextProvider"),l0e=a(()=>x.useContext(tre),"useAddNotificationContext"),rre=a(()=>x.useContext(nre),"useNotificationContext"),pn=a(()=>{const e=l0e();return x.useCallback((t,n={})=>{const{type:r="info",...i}=n;e({message:t,type:r,notificationOptions:i})},[e])},"useNotify"),c0e=a(({value:e=u0e,children:t})=>{const[n]=Xi("locale"),r=pn(),[i,s]=x.useState(0),[o,c]=x.useState(n===e.getLocale());return x.useEffect(()=>{n&&e.getLocale()!==n?new Promise(u=>{u(e.changeLocale(n))}).then(()=>{s(u=>u+1),c(!0)}).catch(u=>{c(!0),r("ra.notification.i18n_error",{type:"error"}),console.error(u)}):c(!0)},[e,n,r]),o?x.createElement(EU.Provider,{value:e,key:i},t):null},"I18nContextProvider"),u0e={translate:a(e=>e,"translate"),changeLocale:a(()=>Promise.resolve(),"changeLocale"),getLocale:a(()=>"en","getLocale")},SU=a(()=>x.useContext(EU),"useI18nProvider"),Re=a(()=>{const e=SU(),t=x.useCallback((n,r)=>e.translate(n,r),[e]);return e?t:d0e},"useTranslate"),d0e=a(e=>e,"identity$2"),Sa=a(({i18nKey:e,options:t,children:n})=>{const i=Re()(e,typeof n=="string"?{_:n,...t}:t);return i?me.createElement(me.Fragment,null,i):n},"Translate");var lM,aW;function are(){if(aW)return lM;aW=1;var e=vv(),t=(function(){try{var n=e(Object,"defineProperty");return n({},"",{}),n}catch{}})();return lM=t,lM}a(are,"require_defineProperty");var cM,iW;function CU(){if(iW)return cM;iW=1;var e=are();function t(n,r,i){r=="__proto__"&&e?e(n,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):n[r]=i}return a(t,"baseAssignValue"),cM=t,cM}a(CU,"require_baseAssignValue");var uM,sW;function ire(){if(sW)return uM;sW=1;var e=CU(),t=J0();function n(r,i,s){(s!==void 0&&!t(r[i],s)||s===void 0&&!(i in r))&&e(r,i,s)}return a(n,"assignMergeValue"),uM=n,uM}a(ire,"require_assignMergeValue");var dM,oW;function f0e(){if(oW)return dM;oW=1;function e(t){return function(n,r,i){for(var s=-1,o=Object(n),c=i(n),u=c.length;u--;){var f=c[t?u:++s];if(r(o[f],f,o)===!1)break}return n}}return a(e,"createBaseFor"),dM=e,dM}a(f0e,"require_createBaseFor");var fM,lW;function sre(){if(lW)return fM;lW=1;var e=f0e(),t=e();return fM=t,fM}a(sre,"require_baseFor");var aE={exports:{}};aE.exports;var cW;function ore(){return cW||(cW=1,(function(e,t){var n=Gc(),r=t&&!t.nodeType&&t,i=r&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===r,o=s?n.Buffer:void 0,c=o?o.allocUnsafe:void 0;function u(f,h){if(h)return f.slice();var m=f.length,g=c?c(m):new f.constructor(m);return f.copy(g),g}a(u,"cloneBuffer"),e.exports=u})(aE,aE.exports)),aE.exports}a(ore,"require_cloneBuffer");var hM,uW;function jU(){if(uW)return hM;uW=1;var e=Vne();function t(n){var r=new n.constructor(n.byteLength);return new e(r).set(new e(n)),r}return a(t,"cloneArrayBuffer"),hM=t,hM}a(jU,"require_cloneArrayBuffer");var pM,dW;function lre(){if(dW)return pM;dW=1;var e=jU();function t(n,r){var i=r?e(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.length)}return a(t,"cloneTypedArray"),pM=t,pM}a(lre,"require_cloneTypedArray");var mM,fW;function cre(){if(fW)return mM;fW=1;function e(t,n){var r=-1,i=t.length;for(n||(n=Array(i));++r<i;)n[r]=t[r];return n}return a(e,"copyArray"),mM=e,mM}a(cre,"require_copyArray");var gM,hW;function h0e(){if(hW)return gM;hW=1;var e=ql(),t=Object.create,n=(function(){function r(){}return a(r,"object"),function(i){if(!e(i))return{};if(t)return t(i);r.prototype=i;var s=new r;return r.prototype=void 0,s}})();return gM=n,gM}a(h0e,"require_baseCreate");var vM,pW;function AU(){if(pW)return vM;pW=1;var e=Xne(),t=e(Object.getPrototypeOf,Object);return vM=t,vM}a(AU,"require_getPrototype");var yM,mW;function ure(){if(mW)return yM;mW=1;var e=h0e(),t=AU(),n=xU();function r(i){return typeof i.constructor=="function"&&!n(i)?e(t(i)):{}}return a(r,"initCloneObject"),yM=r,yM}a(ure,"require_initCloneObject");var bM,gW;function J2(){if(gW)return bM;gW=1;var e=tw(),t=Hl();function n(r){return t(r)&&e(r)}return a(n,"isArrayLikeObject"),bM=n,bM}a(J2,"requireIsArrayLikeObject");var xM,vW;function RU(){if(vW)return xM;vW=1;var e=Nf(),t=AU(),n=Hl(),r="[object Object]",i=Function.prototype,s=Object.prototype,o=i.toString,c=s.hasOwnProperty,u=o.call(Object);function f(h){if(!n(h)||e(h)!=r)return!1;var m=t(h);if(m===null)return!0;var g=c.call(m,"constructor")&&m.constructor;return typeof g=="function"&&g instanceof g&&o.call(g)==u}return a(f,"isPlainObject"),xM=f,xM}a(RU,"requireIsPlainObject");var wM,yW;function dre(){if(yW)return wM;yW=1;function e(t,n){if(!(n==="constructor"&&typeof t[n]=="function")&&n!="__proto__")return t[n]}return a(e,"safeGet"),wM=e,wM}a(dre,"require_safeGet");var _M,bW;function TU(){if(bW)return _M;bW=1;var e=CU(),t=J0(),n=Object.prototype,r=n.hasOwnProperty;function i(s,o,c){var u=s[o];(!(r.call(s,o)&&t(u,c))||c===void 0&&!(o in s))&&e(s,o,c)}return a(i,"assignValue"),_M=i,_M}a(TU,"require_assignValue");var EM,xW;function aw(){if(xW)return EM;xW=1;var e=TU(),t=CU();function n(r,i,s,o){var c=!s;s||(s={});for(var u=-1,f=i.length;++u<f;){var h=i[u],m=o?o(s[h],r[h],h,s,r):void 0;m===void 0&&(m=r[h]),c?t(s,h,m):e(s,h,m)}return s}return a(n,"copyObject"),EM=n,EM}a(aw,"require_copyObject");var SM,wW;function p0e(){if(wW)return SM;wW=1;function e(t){var n=[];if(t!=null)for(var r in Object(t))n.push(r);return n}return a(e,"nativeKeysIn"),SM=e,SM}a(p0e,"require_nativeKeysIn");var CM,_W;function m0e(){if(_W)return CM;_W=1;var e=ql(),t=xU(),n=p0e(),r=Object.prototype,i=r.hasOwnProperty;function s(o){if(!e(o))return n(o);var c=t(o),u=[];for(var f in o)f=="constructor"&&(c||!i.call(o,f))||u.push(f);return u}return a(s,"baseKeysIn"),CM=s,CM}a(m0e,"require_baseKeysIn");var jM,EW;function iw(){if(EW)return jM;EW=1;var e=Kne(),t=m0e(),n=tw();function r(i){return n(i)?e(i,!0):t(i)}return a(r,"keysIn"),jM=r,jM}a(iw,"requireKeysIn");var AM,SW;function g0e(){if(SW)return AM;SW=1;var e=aw(),t=iw();function n(r){return e(r,t(r))}return a(n,"toPlainObject"),AM=n,AM}a(g0e,"requireToPlainObject");var RM,CW;function v0e(){if(CW)return RM;CW=1;var e=ire(),t=ore(),n=lre(),r=cre(),i=ure(),s=G2(),o=Zs(),c=J2(),u=Y2(),f=q2(),h=ql(),m=RU(),g=bU(),b=dre(),w=g0e();function _(E,R,j,A,T,D,O){var P=b(E,j),k=b(R,j),M=O.get(k);if(M){e(E,j,M);return}var $=D?D(P,k,j+"",E,R,O):void 0,F=$===void 0;if(F){var U=o(k),z=!U&&u(k),W=!U&&!z&&g(k);$=k,U||z||W?o(P)?$=P:c(P)?$=r(P):z?(F=!1,$=t(k,!0)):W?(F=!1,$=n(k,!0)):$=[]:m(k)||s(k)?($=P,s(P)?$=w(P):(!h(P)||f(P))&&($=i(k))):F=!1}F&&(O.set(k,$),T($,k,A,D,O),O.delete(k)),e(E,j,$)}return a(_,"baseMergeDeep"),RM=_,RM}a(v0e,"require_baseMergeDeep");var TM,jW;function fre(){if(jW)return TM;jW=1;var e=W2(),t=ire(),n=sre(),r=v0e(),i=ql(),s=iw(),o=dre();function c(u,f,h,m,g){u!==f&&n(f,function(b,w){if(g||(g=new e),i(b))r(u,f,w,h,c,m,g);else{var _=m?m(o(u,w),b,w+"",u,f,g):void 0;_===void 0&&(_=b),t(u,w,_)}},s)}return a(c,"baseMerge"),TM=c,TM}a(fre,"require_baseMerge");var kM,AW;function Z2(){if(AW)return kM;AW=1;function e(t){return t}return a(e,"identity"),kM=e,kM}a(Z2,"requireIdentity");var NM,RW;function y0e(){if(RW)return NM;RW=1;function e(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}return a(e,"apply"),NM=e,NM}a(y0e,"require_apply");var OM,TW;function hre(){if(TW)return OM;TW=1;var e=y0e(),t=Math.max;function n(r,i,s){return i=t(i===void 0?r.length-1:i,0),function(){for(var o=arguments,c=-1,u=t(o.length-i,0),f=Array(u);++c<u;)f[c]=o[i+c];c=-1;for(var h=Array(i+1);++c<i;)h[c]=o[c];return h[i]=s(f),e(r,this,h)}}return a(n,"overRest"),OM=n,OM}a(hre,"require_overRest");var DM,kW;function b0e(){if(kW)return DM;kW=1;function e(t){return function(){return t}}return a(e,"constant"),DM=e,DM}a(b0e,"requireConstant");var IM,NW;function x0e(){if(NW)return IM;NW=1;var e=b0e(),t=are(),n=Z2(),r=t?function(i,s){return t(i,"toString",{configurable:!0,enumerable:!1,value:e(s),writable:!0})}:n;return IM=r,IM}a(x0e,"require_baseSetToString");var PM,OW;function w0e(){if(OW)return PM;OW=1;var e=800,t=16,n=Date.now;function r(i){var s=0,o=0;return function(){var c=n(),u=t-(c-o);if(o=c,u>0){if(++s>=e)return arguments[0]}else s=0;return i.apply(void 0,arguments)}}return a(r,"shortOut"),PM=r,PM}a(w0e,"require_shortOut");var MM,DW;function pre(){if(DW)return MM;DW=1;var e=x0e(),t=w0e(),n=t(e);return MM=n,MM}a(pre,"require_setToString");var LM,IW;function sw(){if(IW)return LM;IW=1;var e=Z2(),t=hre(),n=pre();function r(i,s){return n(t(i,s,e),i+"")}return a(r,"baseRest"),LM=r,LM}a(sw,"require_baseRest");var FM,PW;function kU(){if(PW)return FM;PW=1;var e=J0(),t=tw(),n=K2(),r=ql();function i(s,o,c){if(!r(c))return!1;var u=typeof o;return(u=="number"?t(c)&&n(o,c.length):u=="string"&&o in c)?e(c[o],s):!1}return a(i,"isIterateeCall"),FM=i,FM}a(kU,"require_isIterateeCall");var $M,MW;function mre(){if(MW)return $M;MW=1;var e=sw(),t=kU();function n(r){return e(function(i,s){var o=-1,c=s.length,u=c>1?s[c-1]:void 0,f=c>2?s[2]:void 0;for(u=r.length>3&&typeof u=="function"?(c--,u):void 0,f&&t(s[0],s[1],f)&&(u=c<3?void 0:u,c=1),i=Object(i);++o<c;){var h=s[o];h&&r(i,h,o,u)}return i})}return a(n,"createAssigner"),$M=n,$M}a(mre,"require_createAssigner");var UM,LW;function _0e(){if(LW)return UM;LW=1;var e=fre(),t=mre(),n=t(function(r,i,s){e(r,i,s)});return UM=n,UM}a(_0e,"requireMerge");var E0e=_0e();const tC=Er(E0e),gre=a((...e)=>tC({},...e),"mergeTranslations"),sd=a(()=>{const e=SU(),t=x.useMemo(()=>e.getLocale(),[e]);return Xi("locale",t)},"useLocaleState"),NU=a(e=>{const t=SU();return x.useMemo(()=>t?.getLocales?t?.getLocales():[],[t])},"useLocales"),yv=a(e=>{const{resourceI18nKey:t,baseI18nKey:n,userText:r,options:i}=e,s=Re();return r!==void 0?typeof r!="string"?r:s(r,{_:r,...i}):t?s(t,{...i,_:s(n,i)}):s(n,i)},"useResourceTranslation");var BM,FW;function vre(){if(FW)return BM;FW=1;var e=TU(),t=nw(),n=K2(),r=ql(),i=rw();function s(o,c,u,f){if(!r(o))return o;c=t(c,o);for(var h=-1,m=c.length,g=m-1,b=o;b!=null&&++h<m;){var w=i(c[h]),_=u;if(w==="__proto__"||w==="constructor"||w==="prototype")return o;if(h!=g){var E=b[w];_=f?f(E,w,b):void 0,_===void 0&&(_=r(E)?E:n(c[h+1])?[]:{})}e(b,w,_),b=b[w]}return o}return a(s,"baseSet"),BM=s,BM}a(vre,"require_baseSet");var zM,$W;function S0e(){if($W)return zM;$W=1;var e=vre();function t(n,r,i){return n==null?n:e(n,r,i)}return a(t,"set"),zM=t,zM}a(S0e,"requireSet");var C0e=S0e();const bf=Er(C0e);var qM,UW;function j0e(){if(UW)return qM;UW=1;function e(t,n){for(var r=-1,i=t==null?0:t.length;++r<i&&n(t[r],r,t)!==!1;);return t}return a(e,"arrayEach"),qM=e,qM}a(j0e,"require_arrayEach");var HM,BW;function A0e(){if(BW)return HM;BW=1;var e=aw(),t=QS();function n(r,i){return r&&e(i,t(i),r)}return a(n,"baseAssign"),HM=n,HM}a(A0e,"require_baseAssign");var VM,zW;function R0e(){if(zW)return VM;zW=1;var e=aw(),t=iw();function n(r,i){return r&&e(i,t(i),r)}return a(n,"baseAssignIn"),VM=n,VM}a(R0e,"require_baseAssignIn");var WM,qW;function T0e(){if(qW)return WM;qW=1;var e=aw(),t=vU();function n(r,i){return e(r,t(r),i)}return a(n,"copySymbols"),WM=n,WM}a(T0e,"require_copySymbols");var GM,HW;function yre(){if(HW)return GM;HW=1;var e=gU(),t=AU(),n=vU(),r=Yne(),i=Object.getOwnPropertySymbols,s=i?function(o){for(var c=[];o;)e(c,n(o)),o=t(o);return c}:r;return GM=s,GM}a(yre,"require_getSymbolsIn");var YM,VW;function k0e(){if(VW)return YM;VW=1;var e=aw(),t=yre();function n(r,i){return e(r,t(r),i)}return a(n,"copySymbolsIn"),YM=n,YM}a(k0e,"require_copySymbolsIn");var KM,WW;function OU(){if(WW)return KM;WW=1;var e=Wne(),t=yre(),n=iw();function r(i){return e(i,n,t)}return a(r,"getAllKeysIn"),KM=r,KM}a(OU,"require_getAllKeysIn");var XM,GW;function N0e(){if(GW)return XM;GW=1;var e=Object.prototype,t=e.hasOwnProperty;function n(r){var i=r.length,s=new r.constructor(i);return i&&typeof r[0]=="string"&&t.call(r,"index")&&(s.index=r.index,s.input=r.input),s}return a(n,"initCloneArray"),XM=n,XM}a(N0e,"require_initCloneArray");var QM,YW;function O0e(){if(YW)return QM;YW=1;var e=jU();function t(n,r){var i=r?e(n.buffer):n.buffer;return new n.constructor(i,n.byteOffset,n.byteLength)}return a(t,"cloneDataView"),QM=t,QM}a(O0e,"require_cloneDataView");var JM,KW;function D0e(){if(KW)return JM;KW=1;var e=/\w*$/;function t(n){var r=new n.constructor(n.source,e.exec(n));return r.lastIndex=n.lastIndex,r}return a(t,"cloneRegExp"),JM=t,JM}a(D0e,"require_cloneRegExp");var ZM,XW;function I0e(){if(XW)return ZM;XW=1;var e=Z0(),t=e?e.prototype:void 0,n=t?t.valueOf:void 0;function r(i){return n?Object(n.call(i)):{}}return a(r,"cloneSymbol"),ZM=r,ZM}a(I0e,"require_cloneSymbol");var eL,QW;function P0e(){if(QW)return eL;QW=1;var e=jU(),t=O0e(),n=D0e(),r=I0e(),i=lre(),s="[object Boolean]",o="[object Date]",c="[object Map]",u="[object Number]",f="[object RegExp]",h="[object Set]",m="[object String]",g="[object Symbol]",b="[object ArrayBuffer]",w="[object DataView]",_="[object Float32Array]",E="[object Float64Array]",R="[object Int8Array]",j="[object Int16Array]",A="[object Int32Array]",T="[object Uint8Array]",D="[object Uint8ClampedArray]",O="[object Uint16Array]",P="[object Uint32Array]";function k(M,$,F){var U=M.constructor;switch($){case b:return e(M);case s:case o:return new U(+M);case w:return t(M,F);case _:case E:case R:case j:case A:case T:case D:case O:case P:return i(M,F);case c:return new U;case u:case m:return new U(M);case f:return n(M);case h:return new U;case g:return r(M)}}return a(k,"initCloneByTag"),eL=k,eL}a(P0e,"require_initCloneByTag");var tL,JW;function M0e(){if(JW)return tL;JW=1;var e=Q2(),t=Hl(),n="[object Map]";function r(i){return t(i)&&e(i)==n}return a(r,"baseIsMap"),tL=r,tL}a(M0e,"require_baseIsMap");var nL,ZW;function L0e(){if(ZW)return nL;ZW=1;var e=M0e(),t=ew(),n=X2(),r=n&&n.isMap,i=r?t(r):e;return nL=i,nL}a(L0e,"requireIsMap");var rL,eG;function F0e(){if(eG)return rL;eG=1;var e=Q2(),t=Hl(),n="[object Set]";function r(i){return t(i)&&e(i)==n}return a(r,"baseIsSet"),rL=r,rL}a(F0e,"require_baseIsSet");var aL,tG;function $0e(){if(tG)return aL;tG=1;var e=F0e(),t=ew(),n=X2(),r=n&&n.isSet,i=r?t(r):e;return aL=i,aL}a($0e,"requireIsSet");var iL,nG;function DU(){if(nG)return iL;nG=1;var e=W2(),t=j0e(),n=TU(),r=A0e(),i=R0e(),s=ore(),o=cre(),c=T0e(),u=k0e(),f=Qne(),h=OU(),m=Q2(),g=N0e(),b=P0e(),w=ure(),_=Zs(),E=Y2(),R=L0e(),j=ql(),A=$0e(),T=QS(),D=iw(),O=1,P=2,k=4,M="[object Arguments]",$="[object Array]",F="[object Boolean]",U="[object Date]",z="[object Error]",W="[object Function]",q="[object GeneratorFunction]",V="[object Map]",H="[object Number]",Y="[object Object]",K="[object RegExp]",G="[object Set]",ee="[object String]",Z="[object Symbol]",J="[object WeakMap]",ie="[object ArrayBuffer]",oe="[object DataView]",de="[object Float32Array]",ue="[object Float64Array]",we="[object Int8Array]",fe="[object Int16Array]",pe="[object Int32Array]",Se="[object Uint8Array]",ve="[object Uint8ClampedArray]",$e="[object Uint16Array]",De="[object Uint32Array]",ke={};ke[M]=ke[$]=ke[ie]=ke[oe]=ke[F]=ke[U]=ke[de]=ke[ue]=ke[we]=ke[fe]=ke[pe]=ke[V]=ke[H]=ke[Y]=ke[K]=ke[G]=ke[ee]=ke[Z]=ke[Se]=ke[ve]=ke[$e]=ke[De]=!0,ke[z]=ke[W]=ke[J]=!1;function Xe(We,et,bt,Dt,Rt,xt){var Pt,Jt=et&O,Qe=et&P,Ke=et&k;if(bt&&(Pt=Rt?bt(We,Dt,Rt,xt):bt(We)),Pt!==void 0)return Pt;if(!j(We))return We;var re=_(We);if(re){if(Pt=g(We),!Jt)return o(We,Pt)}else{var he=m(We),ge=he==W||he==q;if(E(We))return s(We,Jt);if(he==Y||he==M||ge&&!Rt){if(Pt=Qe||ge?{}:w(We),!Jt)return Qe?u(We,i(Pt,We)):c(We,r(Pt,We))}else{if(!ke[he])return Rt?We:{};Pt=b(We,he,Jt)}}xt||(xt=new e);var ze=xt.get(We);if(ze)return ze;xt.set(We,Pt),A(We)?We.forEach(function(Ve){Pt.add(Xe(Ve,et,bt,Ve,We,xt))}):R(We)&&We.forEach(function(Ve,Ge){Pt.set(Ge,Xe(Ve,et,bt,Ge,We,xt))});var Ze=Ke?Qe?h:f:Qe?D:T,Je=re?void 0:Ze(We);return t(Je||We,function(Ve,Ge){Je&&(Ge=Ve,Ve=We[Ge]),n(Pt,Ge,Xe(Ve,et,bt,Ge,We,xt))}),Pt}return a(Xe,"baseClone"),iL=Xe,iL}a(DU,"require_baseClone");var sL,rG;function U0e(){if(rG)return sL;rG=1;var e=DU(),t=1,n=4;function r(i){return e(i,t|n)}return a(r,"cloneDeep"),sL=r,sL}a(U0e,"requireCloneDeep");var B0e=U0e();const bre=Er(B0e),xre=x.createContext(""),z0e=a(({children:e,basename:t})=>x.createElement(xre.Provider,{value:t},e),"BasenameContextProvider");var wre=a(e=>{throw TypeError(e)},"__typeError"),_re=a((e,t,n)=>t.has(e)||wre("Cannot "+n),"__accessCheck"),jl=a((e,t,n)=>(_re(e,t,"read from private field"),n?n.call(e):t.get(e)),"__privateGet"),iE=a((e,t,n)=>t.has(e)?wre("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),"__privateAdd"),Nu=a((e,t,n,r)=>(_re(e,t,"write to private field"),t.set(e,n),n),"__privateSet"),aG="popstate";function iG(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}a(iG,"isLocation");function q0e(e={}){function t(i,s){let{pathname:o="/",search:c="",hash:u=""}=Vl(i.location.hash.substring(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),LE("",{pathname:o,search:c,hash:u},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}a(t,"createHashLocation");function n(i,s){let o=i.document.querySelector("base"),c="";if(o&&o.getAttribute("href")){let u=i.location.href,f=u.indexOf("#");c=f===-1?u:u.slice(0,f)}return c+"#"+(typeof s=="string"?s:Ju(s))}a(n,"createHashHref");function r(i,s){Pa(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return a(r,"validateHashLocation"),V0e(t,n,r,e)}a(q0e,"createHashHistory");function Nn(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}a(Nn,"invariant$2");function Pa(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}a(Pa,"warning$1");function H0e(){return Math.random().toString(36).substring(2,10)}a(H0e,"createKey");function sG(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}a(sG,"getHistoryState");function LE(e,t,n=null,r,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Vl(t):t,state:n,key:t&&t.key||r||H0e(),mask:i}}a(LE,"createLocation");function Ju({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}a(Ju,"createPath");function Vl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}a(Vl,"parsePath");function V0e(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,c="POP",u=null,f=h();f==null&&(f=0,o.replaceState({...o.state,idx:f},""));function h(){return(o.state||{idx:null}).idx}a(h,"getIndex");function m(){c="POP";let E=h(),R=E==null?null:E-f;f=E,u&&u({action:c,location:_.location,delta:R})}a(m,"handlePop");function g(E,R){c="PUSH";let j=iG(E)?E:LE(_.location,E,R);n&&n(j,E),f=h()+1;let A=sG(j,f),T=_.createHref(j.mask||j);try{o.pushState(A,"",T)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;i.location.assign(T)}s&&u&&u({action:c,location:_.location,delta:1})}a(g,"push");function b(E,R){c="REPLACE";let j=iG(E)?E:LE(_.location,E,R);n&&n(j,E),f=h();let A=sG(j,f),T=_.createHref(j.mask||j);o.replaceState(A,"",T),s&&u&&u({action:c,location:_.location,delta:0})}a(b,"replace2");function w(E){return Ere(i,E)}a(w,"createURL");let _={get action(){return c},get location(){return e(i,o)},listen(E){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(aG,m),u=E,()=>{i.removeEventListener(aG,m),u=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let R=w(E);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:g,replace:b,go(E){return o.go(E)}};return _}a(V0e,"getUrlBasedHistory");function Ere(e,t,n=!1){let r="http://localhost";e&&(r=e.location.origin!=="null"?e.location.origin:e.location.href),Nn(r,"No window.location.(origin|href) available to create URL");let i=typeof t=="string"?t:Ju(t);return i=i.replace(/ $/,"%20"),!n&&i.startsWith("//")&&(i=r+i),new URL(i,r)}a(Ere,"createBrowserURLImpl");var sE,Mx,oG=(Mx=class{constructor(t){if(iE(this,sE,new Map),t)for(let[n,r]of t)this.set(n,r)}get(t){if(jl(this,sE).has(t))return jl(this,sE).get(t);if(t.defaultValue!==void 0)return t.defaultValue;throw new Error("No value found for context")}set(t,n){jl(this,sE).set(t,n)}},a(Mx,"RouterContextProvider"),Mx);sE=new WeakMap;var W0e=new Set(["lazy","caseSensitive","path","id","index","children"]);function G0e(e){return W0e.has(e)}a(G0e,"isUnsupportedLazyRouteObjectKey");var Y0e=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function K0e(e){return Y0e.has(e)}a(K0e,"isUnsupportedLazyRouteFunctionKey");function X0e(e){return e.index===!0}a(X0e,"isIndexRoute");function FE(e,t,n=[],r={},i=!1){return e.map((s,o)=>{let c=[...n,String(o)],u=typeof s.id=="string"?s.id:c.join("-");if(Nn(s.index!==!0||!s.children,"Cannot specify children on an index route"),Nn(i||!r[u],`Found a route id collision on id "${u}".  Route id's must be globally unique within Data Router usages`),X0e(s)){let f={...s,id:u};return r[u]=lG(f,t(f)),f}else{let f={...s,id:u,children:void 0};return r[u]=lG(f,t(f)),s.children&&(f.children=FE(s.children,t,c,r,i)),f}})}a(FE,"convertRoutesToDataRoutes");function lG(e,t){return Object.assign(e,{...t,...typeof t.lazy=="object"&&t.lazy!=null?{lazy:{...e.lazy,...t.lazy}}:{}})}a(lG,"mergeRouteUpdates");function Sre(e,t,n="/"){return _c(e,t,n,!1)}a(Sre,"matchRoutes");function _c(e,t,n,r,i){let s=typeof t=="string"?Vl(t):t,o=Eo(s.pathname||"/",n);if(o==null)return null;let c=i??FR(e),u=null,f=Are(o);for(let h=0;u==null&&h<c.length;++h)u=owe(c[h],f,r);return u}a(_c,"matchRoutesImpl");function Q0e(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}a(Q0e,"convertRouteMatchToUiMatch");function FR(e){let t=Cre(e);return J0e(t),t}a(FR,"flattenAndRankRoutes");function Cre(e,t=[],n=[],r="",i=!1){let s=a((o,c,u=i,f)=>{let h={relativePath:f===void 0?o.path||"":f,caseSensitive:o.caseSensitive===!0,childrenIndex:c,route:o};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&u)return;Nn(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let m=Ll([r,h.relativePath]),g=n.concat(h);o.children&&o.children.length>0&&(Nn(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Cre(o.children,t,g,m,u)),!(o.path==null&&!o.index)&&t.push({path:m,score:iwe(m,o.index),routesMeta:g})},"flattenRoute");return e.forEach((o,c)=>{if(o.path===""||!o.path?.includes("?"))s(o,c);else for(let u of jre(o.path))s(o,c,!0,u)}),t}a(Cre,"flattenRoutes");function jre(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jre(r.join("/")),c=[];return c.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&c.push(...o),c.map(u=>e.startsWith("/")&&u===""?"/":u)}a(jre,"explodeOptionalSegments");function J0e(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:swe(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}a(J0e,"rankRouteBranches");var Z0e=/^:[\w-]+$/,ewe=3,twe=2,nwe=1,rwe=10,awe=-2,cG=a(e=>e==="*","isSplat");function iwe(e,t){let n=e.split("/"),r=n.length;return n.some(cG)&&(r+=awe),t&&(r+=twe),n.filter(i=>!cG(i)).reduce((i,s)=>i+(Z0e.test(s)?ewe:s===""?nwe:rwe),r)}a(iwe,"computeScore");function swe(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}a(swe,"compareIndexes");function owe(e,t,n=!1){let{routesMeta:r}=e,i={},s="/",o=[];for(let c=0;c<r.length;++c){let u=r[c],f=c===r.length-1,h=s==="/"?t:t.slice(s.length)||"/",m=bs({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},h),g=u.route;if(!m&&f&&n&&!r[r.length-1].route.index&&(m=bs({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},h)),!m)return null;Object.assign(i,m.params),o.push({params:i,pathname:Ll([s,m.pathname]),pathnameBase:dwe(Ll([s,m.pathnameBase])),route:g}),m.pathnameBase!=="/"&&(s=Ll([s,m.pathnameBase]))}return o}a(owe,"matchRouteBranch");function bs(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=lwe(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((f,{paramName:h,isOptional:m},g)=>{if(h==="*"){let w=c[g]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const b=c[g];return m&&!b?f[h]=void 0:f[h]=(b||"").replace(/%2F/g,"/"),f},{}),pathname:s,pathnameBase:o,pattern:e}}a(bs,"matchPath");function lwe(e,t=!1,n=!0){Pa(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,u,f,h)=>{if(r.push({paramName:c,isOptional:u!=null}),u){let m=h.charAt(f+o.length);return m&&m!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}a(lwe,"compilePath");function Are(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pa(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}a(Are,"decodePath");function Eo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}a(Eo,"stripBasename");function cwe({basename:e,pathname:t}){return t==="/"?e:Ll([e,t])}a(cwe,"prependBasename");var Rre=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,IU=a(e=>Rre.test(e),"isAbsoluteUrl");function uwe(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Vl(e):e,s;return n?(n=PU(n),n.startsWith("/")?s=uG(n.substring(1),"/"):s=uG(n,t)):s=t,{pathname:s,search:fwe(r),hash:hwe(i)}}a(uwe,"resolvePath");function uG(e,t){let n=aT(t).split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}a(uG,"resolvePathname");function oL(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}a(oL,"getInvalidPathError");function Tre(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}a(Tre,"getPathContributingMatches");function ek(e){let t=Tre(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}a(ek,"getResolveToMatches");function nC(e,t,n,r=!1){let i;typeof e=="string"?i=Vl(e):(i={...e},Nn(!i.pathname||!i.pathname.includes("?"),oL("?","pathname","search",i)),Nn(!i.pathname||!i.pathname.includes("#"),oL("#","pathname","hash",i)),Nn(!i.search||!i.search.includes("#"),oL("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,c;if(o==null)c=n;else{let m=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),m-=1;i.pathname=g.join("/")}c=m>=0?t[m]:"/"}let u=uwe(i,c),f=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(f||h)&&(u.pathname+="/"),u}a(nC,"resolveTo");var PU=a(e=>e.replace(/\/\/+/g,"/"),"removeDoubleSlashes$1"),Ll=a(e=>PU(e.join("/")),"joinPaths"),aT=a(e=>e.replace(/\/+$/,""),"removeTrailingSlash"),dwe=a(e=>aT(e).replace(/^\/*/,"/"),"normalizePathname"),fwe=a(e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,"normalizeSearch"),hwe=a(e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,"normalizeHash"),Lx,rC=(Lx=class{constructor(t,n,r,i=!1){this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}},a(Lx,"ErrorResponseImpl"),Lx);function $E(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}a($E,"isRouteErrorResponse");function aC(e){let t=e.map(n=>n.route.path).filter(Boolean);return Ll(t)||"/"}a(aC,"getRoutePattern");var kre=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Nre(e,t){let n=e;if(typeof n!="string"||!Rre.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(kre)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),c=Eo(o.pathname,t);o.origin===s.origin&&c!=null?n=c+o.search+o.hash:i=!0}catch{Pa(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}a(Nre,"parseToInfo");var Yh=Symbol("Uninstrumented");function pwe(e,t){let n={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(i=>i({id:t.id,index:t.index,path:t.path,instrument(s){let o=Object.keys(n);for(let c of o)s[c]&&n[c].push(s[c])}}));let r={};if(typeof t.lazy=="function"&&n.lazy.length>0){let i=Ub(n.lazy,t.lazy,()=>{});i&&(r.lazy=i)}if(typeof t.lazy=="object"){let i=t.lazy;["middleware","loader","action"].forEach(s=>{let o=i[s],c=n[`lazy.${s}`];if(typeof o=="function"&&c.length>0){let u=Ub(c,o,()=>{});u&&(r.lazy=Object.assign(r.lazy||{},{[s]:u}))}})}return["loader","action"].forEach(i=>{let s=t[i];if(typeof s=="function"&&n[i].length>0){let o=s[Yh]??s,c=Ub(n[i],o,(...u)=>dG(u[0]));c&&(i==="loader"&&o.hydrate===!0&&(c.hydrate=!0),c[Yh]=o,r[i]=c)}}),t.middleware&&t.middleware.length>0&&n.middleware.length>0&&(r.middleware=t.middleware.map(i=>{let s=i[Yh]??i,o=Ub(n.middleware,s,(...c)=>dG(c[0]));return o?(o[Yh]=s,o):i})),r}a(pwe,"getRouteInstrumentationUpdates");function mwe(e,t){let n={navigate:[],fetch:[]};if(t.forEach(r=>r({instrument(i){let s=Object.keys(i);for(let o of s)i[o]&&n[o].push(i[o])}})),n.navigate.length>0){let r=e.navigate[Yh]??e.navigate,i=Ub(n.navigate,r,(...s)=>{let[o,c]=s;return{to:typeof o=="number"||typeof o=="string"?o:o?Ju(o):".",...fG(e,c??{})}});i&&(i[Yh]=r,e.navigate=i)}if(n.fetch.length>0){let r=e.fetch[Yh]??e.fetch,i=Ub(n.fetch,r,(...s)=>{let[o,,c,u]=s;return{href:c??".",fetcherKey:o,...fG(e,u??{})}});i&&(i[Yh]=r,e.fetch=i)}return e}a(mwe,"instrumentClientSideRouter");function Ub(e,t,n){return e.length===0?null:async(...r)=>{let i=await Ore(e,n(...r),()=>t(...r),e.length-1);if(i.type==="error")throw i.value;return i.value}}a(Ub,"wrapImpl");async function Ore(e,t,n,r){let i=e[r],s;if(i){let o,c=a(async()=>(o?console.error("You cannot call instrumented handlers more than once"):o=Ore(e,t,n,r-1),s=await o,Nn(s,"Expected a result"),s.type==="error"&&s.value instanceof Error?{status:"error",error:s.value}:{status:"success",error:void 0}),"callHandler");try{await i(c,t)}catch(u){console.error("An instrumentation function threw an error:",u)}o||await c(),await o}else try{s={type:"success",value:await n()}}catch(o){s={type:"error",value:o}}return s||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}a(Ore,"recurseRight");function dG(e){let{request:t,context:n,params:r,pattern:i}=e;return{request:gwe(t),params:{...r},pattern:i,context:vwe(n)}}a(dG,"getHandlerInfo");function fG(e,t){return{currentUrl:Ju(e.state.location),..."formMethod"in t?{formMethod:t.formMethod}:{},..."formEncType"in t?{formEncType:t.formEncType}:{},..."formData"in t?{formData:t.formData}:{},..."body"in t?{body:t.body}:{}}}a(fG,"getRouterInfo");function gwe(e){return{method:e.method,url:e.url,headers:{get:a((...t)=>e.headers.get(...t),"get")}}}a(gwe,"getReadonlyRequest");function vwe(e){if(bwe(e)){let t={...e};return Object.freeze(t),t}else return{get:a(t=>e.get(t),"get")}}a(vwe,"getReadonlyContext");var ywe=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function bwe(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||t===null||Object.getOwnPropertyNames(t).sort().join("\0")===ywe}a(bwe,"isPlainObject$4");var Dre=["POST","PUT","PATCH","DELETE"],xwe=new Set(Dre),wwe=["GET",...Dre],_we=new Set(wwe),Ire=new Set([301,302,303,307,308]),Ewe=new Set([307,308]),lL={state:"idle",location:void 0,matches:void 0,historyAction:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Swe={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Tb={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Cwe=a(e=>({hasErrorBoundary:!!e.hasErrorBoundary}),"defaultMapRouteProperties"),Pre="remix-router-transitions",Mre=Symbol("ResetLoaderData"),yg,kb,jh,Nb,Fx,jwe=(Fx=class{constructor(t){iE(this,yg),iE(this,kb),iE(this,jh),iE(this,Nb),Nu(this,yg,t),Nu(this,kb,FR(t))}get stableRoutes(){return jl(this,yg)}get activeRoutes(){return jl(this,jh)??jl(this,yg)}get branches(){return jl(this,Nb)??jl(this,kb)}get hasHMRRoutes(){return jl(this,jh)!=null}setRoutes(t){Nu(this,yg,t),Nu(this,kb,FR(t))}setHmrRoutes(t){Nu(this,jh,t),Nu(this,Nb,FR(t))}commitHmrRoutes(){jl(this,jh)&&(Nu(this,yg,jl(this,jh)),Nu(this,kb,jl(this,Nb)),Nu(this,jh,void 0),Nu(this,Nb,void 0))}},a(Fx,"DataRoutes"),Fx);yg=new WeakMap;kb=new WeakMap;jh=new WeakMap;Nb=new WeakMap;function Awe(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";Nn(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let r=e.hydrationRouteProperties||[],i=e.mapRouteProperties||Cwe,s=i;if(e.instrumentations){let ce=e.instrumentations;s=a(Ee=>({...i(Ee),...pwe(ce.map(Oe=>Oe.route).filter(Boolean),Ee)}),"mapRouteProperties2")}let o={},c=new jwe(FE(e.routes,s,void 0,o)),u=e.basename||"/";u.startsWith("/")||(u=`/${u}`);let f=e.dataStrategy||Owe,h={...e.future},m=null,g=new Set,b=null,w=null,_=null,E=null,R=e.hydrationData!=null,j=_c(c.activeRoutes,e.history.location,u,!1,c.branches),A=!1,T=null,D,O;if(j==null&&!e.patchRoutesOnNavigation){let ce=Tl(404,{pathname:e.history.location.pathname}),{matches:Ee,route:Oe}=KA(c.activeRoutes);D=!0,O=!D,j=Ee,T={[Oe.id]:ce}}else if(j&&!e.hydrationData&&ln(j,c.activeRoutes,e.history.location.pathname).active&&(j=null),j)if(j.some(ce=>ce.route.lazy))D=!1,O=!D;else if(!j.some(ce=>MU(ce.route)))D=!0,O=!D;else{let ce=e.hydrationData?e.hydrationData.loaderData:null,Ee=e.hydrationData?e.hydrationData.errors:null,Oe=j;if(Ee){let se=j.findIndex(Pe=>Ee[Pe.route.id]!==void 0);Oe=Oe.slice(0,se+1)}O=!1,D=!0,Oe.forEach(se=>{let Pe=Lre(se.route,ce,Ee);O=O||Pe.renderFallback,D=D&&!Pe.shouldLoad})}else{D=!1,O=!D,j=[];let ce=ln(null,c.activeRoutes,e.history.location.pathname);ce.active&&ce.matches&&(A=!0,j=ce.matches)}let P,k={historyAction:e.history.action,location:e.history.location,matches:j,initialized:D,renderFallback:O,navigation:lL,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||T,fetchers:new Map,blockers:new Map},M="POP",$=null,F=!1,U,z=!1,W=new Map,q=null,V=!1,H=!1,Y=new Set,K=new Map,G=0,ee=-1,Z=new Map,J=new Set,ie=new Map,oe=new Map,de=new Set,ue=new Map,we,fe=null;function pe(){if(m=e.history.listen(({action:ce,location:Ee,delta:Oe})=>{if(we){we(),we=void 0;return}Pa(ue.size===0||Oe!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let se=Tt({currentLocation:k.location,nextLocation:Ee,historyAction:ce});if(se&&Oe!=null){let Pe=new Promise(mt=>{we=mt});e.history.go(Oe*-1),ht(se,{state:"blocked",location:Ee,proceed(){ht(se,{state:"proceeding",proceed:void 0,reset:void 0,location:Ee}),Pe.then(()=>e.history.go(Oe))},reset(){let mt=new Map(k.blockers);mt.set(se,Tb),$e({blockers:mt})}}),$?.resolve(),$=null;return}return We(ce,Ee)}),n){Xwe(t,W);let ce=a(()=>Qwe(t,W),"_saveAppliedTransitions");t.addEventListener("pagehide",ce),q=a(()=>t.removeEventListener("pagehide",ce),"removePageHideEventListener")}return k.initialized||We("POP",k.location,{initialHydration:!0}),P}a(pe,"initialize");function Se(){m&&m(),q&&q(),g.clear(),U&&U.abort(),k.fetchers.forEach((ce,Ee)=>Ve(k.fetchers,Ee)),k.blockers.forEach((ce,Ee)=>St(Ee))}a(Se,"dispose");function ve(ce){if(g.add(ce),b){let{newErrors:Ee}=b;b=null,ce(k,{deletedFetchers:[],newErrors:Ee,viewTransitionOpts:void 0,flushSync:!1})}return()=>g.delete(ce)}a(ve,"subscribe");function $e(ce,Ee={}){ce.matches&&(ce.matches=ce.matches.map(Pe=>{let mt=o[Pe.route.id],pt=Pe.route;return pt.element!==mt.element||pt.errorElement!==mt.errorElement||pt.hydrateFallbackElement!==mt.hydrateFallbackElement?{...Pe,route:mt}:Pe})),k={...k,...ce};let Oe=[],se=[];k.fetchers.forEach((Pe,mt)=>{Pe.state==="idle"&&(de.has(mt)?Oe.push(mt):se.push(mt))}),de.forEach(Pe=>{!k.fetchers.has(Pe)&&!K.has(Pe)&&Oe.push(Pe)}),g.size===0&&(b={newErrors:ce.errors??null}),[...g].forEach(Pe=>Pe(k,{deletedFetchers:Oe,newErrors:ce.errors??null,viewTransitionOpts:Ee.viewTransitionOpts,flushSync:Ee.flushSync===!0})),Oe.forEach(Pe=>Ve(k.fetchers,Pe)),se.forEach(Pe=>k.fetchers.delete(Pe))}a($e,"updateState");function De(ce,Ee,{flushSync:Oe}={}){let se=k.actionData!=null&&k.navigation.formMethod!=null&&ms(k.navigation.formMethod)&&k.navigation.state==="loading"&&ce.state?._isRedirect!==!0,Pe;Ee.actionData?Object.keys(Ee.actionData).length>0?Pe=Ee.actionData:Pe=null:se?Pe=k.actionData:Pe=null;let mt=Ee.loaderData?EG(k.loaderData,Ee.loaderData,Ee.matches||[],Ee.errors):k.loaderData,pt=k.blockers;pt.size>0&&(pt=new Map(pt),pt.forEach((Ft,qt)=>pt.set(qt,Tb)));let wt=V?!1:an(ce,Ee.matches||k.matches),vt=F===!0||k.navigation.formMethod!=null&&ms(k.navigation.formMethod)&&ce.state?._isRedirect!==!0;c.commitHmrRoutes(),V||M==="POP"||(M==="PUSH"?e.history.push(ce,ce.state):M==="REPLACE"&&e.history.replace(ce,ce.state));let It;if(M==="POP"){let Ft=W.get(k.location.pathname);Ft&&Ft.has(ce.pathname)?It={currentLocation:k.location,nextLocation:ce}:W.has(ce.pathname)&&(It={currentLocation:ce,nextLocation:k.location})}else if(z){let Ft=W.get(k.location.pathname);Ft?Ft.add(ce.pathname):(Ft=new Set([ce.pathname]),W.set(k.location.pathname,Ft)),It={currentLocation:k.location,nextLocation:ce}}$e({...Ee,actionData:Pe,loaderData:mt,historyAction:M,location:ce,initialized:!0,renderFallback:!1,navigation:lL,revalidation:"idle",restoreScrollPosition:wt,preventScrollReset:vt,blockers:pt},{viewTransitionOpts:It,flushSync:Oe===!0}),M="POP",F=!1,z=!1,V=!1,H=!1,$?.resolve(),$=null,fe?.resolve(),fe=null}a(De,"completeNavigation");async function ke(ce,Ee){if($?.resolve(),$=null,typeof ce=="number"){$||($=AG());let le=$.promise;return e.history.go(ce),le}let Oe=y$(k.location,k.matches,u,ce,Ee?.fromRouteId,Ee?.relative),{path:se,submission:Pe,error:mt}=hG(!1,Oe,Ee),pt;Ee?.mask&&(pt={pathname:"",search:"",hash:"",...typeof Ee.mask=="string"?Vl(Ee.mask):{...k.location.mask,...Ee.mask}});let wt=k.location,vt=LE(wt,se,Ee&&Ee.state,void 0,pt);vt={...vt,...e.history.encodeLocation(vt)};let It=Ee&&Ee.replace!=null?Ee.replace:void 0,Ft="PUSH";It===!0?Ft="REPLACE":It===!1||Pe!=null&&ms(Pe.formMethod)&&Pe.formAction===k.location.pathname+k.location.search&&(Ft="REPLACE");let qt=Ee&&"preventScrollReset"in Ee?Ee.preventScrollReset===!0:void 0,yt=(Ee&&Ee.flushSync)===!0,at=Tt({currentLocation:wt,nextLocation:vt,historyAction:Ft});if(at){ht(at,{state:"blocked",location:vt,proceed(){ht(at,{state:"proceeding",proceed:void 0,reset:void 0,location:vt}),ke(ce,Ee)},reset(){let le=new Map(k.blockers);le.set(at,Tb),$e({blockers:le})}});return}await We(Ft,vt,{submission:Pe,pendingError:mt,preventScrollReset:qt,replace:Ee&&Ee.replace,enableViewTransition:Ee&&Ee.viewTransition,flushSync:yt,callSiteDefaultShouldRevalidate:Ee&&Ee.defaultShouldRevalidate})}a(ke,"navigate");function Xe(){fe||(fe=AG()),he(),$e({revalidation:"loading"});let ce=fe.promise;return k.navigation.state==="submitting"?ce:k.navigation.state==="idle"?(We(k.historyAction,k.location,{startUninterruptedRevalidation:!0}),ce):(We(M||k.historyAction,k.navigation.location,{overrideNavigation:k.navigation,enableViewTransition:z===!0}),ce)}a(Xe,"revalidate");async function We(ce,Ee,Oe){U&&U.abort(),U=null,M=ce,V=(Oe&&Oe.startUninterruptedRevalidation)===!0,Vt(k.location,k.matches),F=(Oe&&Oe.preventScrollReset)===!0,z=(Oe&&Oe.enableViewTransition)===!0;let se=c.activeRoutes,Pe=Oe?.initialHydration&&k.matches&&k.matches.length>0&&!A?k.matches:_c(se,Ee,u,!1,c.branches),mt=(Oe&&Oe.flushSync)===!0;if(Pe&&k.initialized&&!H&&Uwe(k.location,Ee)&&!(Oe&&Oe.submission&&ms(Oe.submission.formMethod))){De(Ee,{matches:Pe},{flushSync:mt});return}let pt=ln(Pe,se,Ee.pathname);if(pt.active&&pt.matches&&(Pe=pt.matches),!Pe){let{error:dt,notFoundMatches:Gt,route:Fn}=Nt(Ee.pathname);De(Ee,{matches:Gt,loaderData:{},errors:{[Fn.id]:dt}},{flushSync:mt});return}let wt=Oe&&Oe.overrideNavigation?{...Oe.overrideNavigation,matches:Pe,historyAction:ce}:void 0;U=new AbortController;let vt=Ob(e.history,Ee,U.signal,Oe&&Oe.submission),It=e.getContext?await e.getContext():new oG,Ft;if(Oe&&Oe.pendingError)Ft=[Nh(Pe).route.id,{type:"error",error:Oe.pendingError}];else if(Oe&&Oe.submission&&ms(Oe.submission.formMethod)){let dt=await et(vt,Ee,Oe.submission,Pe,ce,It,pt.active,Oe&&Oe.initialHydration===!0,{replace:Oe.replace,flushSync:mt});if(dt.shortCircuited)return;if(dt.pendingActionResult){let[Gt,Fn]=dt.pendingActionResult;if(Wo(Fn)&&$E(Fn.error)&&Fn.error.status===404){U=null,De(Ee,{matches:dt.matches,loaderData:{},errors:{[Gt]:Fn.error}});return}}Pe=dt.matches||Pe,Ft=dt.pendingActionResult,wt=cL(Ee,Pe,ce,Oe.submission),mt=!1,pt.active=!1,vt=Ob(e.history,vt.url,vt.signal)}let{shortCircuited:qt,matches:yt,loaderData:at,errors:le,workingFetchers:Ye}=await bt(vt,Ee,Pe,ce,It,pt.active,wt,Oe&&Oe.submission,Oe&&Oe.fetcherSubmission,Oe&&Oe.replace,Oe&&Oe.initialHydration===!0,mt,Ft,Oe&&Oe.callSiteDefaultShouldRevalidate);qt||(U=null,De(Ee,{matches:yt||Pe,...SG(Ft),loaderData:at,errors:le,...Ye?{fetchers:Ye}:{}}))}a(We,"startNavigation");async function et(ce,Ee,Oe,se,Pe,mt,pt,wt,vt={}){he();let It=Ywe(Ee,se,Pe,Oe);if($e({navigation:It},{flushSync:vt.flushSync===!0}),pt){let yt=await Qt(se,Ee.pathname,ce.signal);if(yt.type==="aborted")return{shortCircuited:!0};if(yt.type==="error"){if(yt.partialMatches.length===0){let{matches:le,route:Ye}=KA(c.activeRoutes);return{matches:le,pendingActionResult:[Ye.id,{type:"error",error:yt.error}]}}let at=Nh(yt.partialMatches).route.id;return{matches:yt.partialMatches,pendingActionResult:[at,{type:"error",error:yt.error}]}}else if(yt.matches)se=yt.matches;else{let{notFoundMatches:at,error:le,route:Ye}=Nt(Ee.pathname);return{matches:at,pendingActionResult:[Ye.id,{type:"error",error:le}]}}}let Ft,qt=$R(se,Ee);if(!qt.route.action&&!qt.route.lazy)Ft={type:"error",error:Tl(405,{method:ce.method,pathname:Ee.pathname,routeId:qt.route.id})};else{let yt=Kb(s,o,ce,Ee,se,qt,wt?[]:r,mt),at=await Ke(ce,Ee,yt,mt,null);if(Ft=at[qt.route.id],!Ft){for(let le of se)if(at[le.route.id]){Ft=at[le.route.id];break}}if(ce.signal.aborted)return{shortCircuited:!0}}if(kg(Ft)){let yt;return vt&&vt.replace!=null?yt=vt.replace:yt=xG(Ft.response.headers.get("Location"),new URL(ce.url),u,e.history)===k.location.pathname+k.location.search,await Qe(ce,Ft,!0,{submission:Oe,replace:yt}),{shortCircuited:!0}}if(Wo(Ft)){let yt=Nh(se,qt.route.id);return(vt&&vt.replace)!==!0&&(M="PUSH"),{matches:se,pendingActionResult:[yt.route.id,Ft,qt.route.id]}}return{matches:se,pendingActionResult:[qt.route.id,Ft]}}a(et,"handleAction");async function bt(ce,Ee,Oe,se,Pe,mt,pt,wt,vt,It,Ft,qt,yt,at){let le=pt||cL(Ee,Oe,se,wt),Ye=wt||vt||jG(le),dt=!V&&!Ft;if(mt){if(dt){let ei=Dt(yt);$e({navigation:le,...ei!==void 0?{actionData:ei}:{}},{flushSync:qt})}let xn=await Qt(Oe,Ee.pathname,ce.signal);if(xn.type==="aborted")return{shortCircuited:!0};if(xn.type==="error"){if(xn.partialMatches.length===0){let{matches:ws,route:Ri}=KA(c.activeRoutes);return{matches:ws,loaderData:{},errors:{[Ri.id]:xn.error}}}let ei=Nh(xn.partialMatches).route.id;return{matches:xn.partialMatches,loaderData:{},errors:{[ei]:xn.error}}}else if(xn.matches)Oe=xn.matches;else{let{error:ei,notFoundMatches:ws,route:Ri}=Nt(Ee.pathname);return{matches:ws,loaderData:{},errors:{[Ri.id]:ei}}}}let Gt=c.activeRoutes,{dsMatches:Fn,revalidatingFetchers:On}=pG(ce,Pe,s,o,e.history,k,Oe,Ye,Ee,Ft?[]:r,Ft===!0,H,Y,de,ie,J,Gt,u,e.patchRoutesOnNavigation!=null,c.branches,yt,at);if(ee=++G,!e.dataStrategy&&!Fn.some(xn=>xn.shouldLoad)&&!Fn.some(xn=>xn.route.middleware&&xn.route.middleware.length>0)&&On.length===0){let xn=new Map(k.fetchers),ei=je(xn);return De(Ee,{matches:Oe,loaderData:{},errors:yt&&Wo(yt[1])?{[yt[0]]:yt[1].error}:null,...SG(yt),...ei?{fetchers:xn}:{}},{flushSync:qt}),{shortCircuited:!0}}if(dt){let xn={};if(!mt){xn.navigation=le;let ei=Dt(yt);ei!==void 0&&(xn.actionData=ei)}On.length>0&&(xn.fetchers=Rt(On)),$e(xn,{flushSync:qt})}On.forEach(xn=>{st(xn.key),xn.controller&&K.set(xn.key,xn.controller)});let hr=a(()=>On.forEach(xn=>st(xn.key)),"abortPendingFetchRevalidations");U&&U.signal.addEventListener("abort",hr);let{loaderResults:xr,fetcherResults:Sr}=await re(Fn,On,ce,Ee,Pe);if(ce.signal.aborted)return{shortCircuited:!0};U&&U.signal.removeEventListener("abort",hr),On.forEach(xn=>K.delete(xn.key));let Va=XA(xr);if(Va)return await Qe(ce,Va.result,!0,{replace:It}),{shortCircuited:!0};if(Va=XA(Sr),Va)return J.add(Va.key),await Qe(ce,Va.result,!0,{replace:It}),{shortCircuited:!0};let Dn=new Map(k.fetchers),{loaderData:Ai,errors:zt}=_G(k,Oe,xr,yt,On,Sr,Dn);Ft&&k.errors&&(zt={...k.errors,...zt});let ts=je(Dn),Ql=jt(ee,Dn),md=ts||Ql||On.length>0;return{matches:Oe,loaderData:Ai,errors:zt,...md?{workingFetchers:Dn}:{}}}a(bt,"handleLoaders");function Dt(ce){if(ce&&!Wo(ce[1]))return{[ce[0]]:ce[1].data};if(k.actionData)return Object.keys(k.actionData).length===0?null:k.actionData}a(Dt,"getUpdatedActionData");function Rt(ce){let Ee=new Map(k.fetchers);return ce.forEach(Oe=>{let se=Ee.get(Oe.key),Pe=b1(void 0,se?se.data:void 0);Ee.set(Oe.key,Pe)}),Ee}a(Rt,"getUpdatedRevalidatingFetchers");async function xt(ce,Ee,Oe,se){st(ce);let Pe=(se&&se.flushSync)===!0,mt=c.activeRoutes,pt=y$(k.location,k.matches,u,Oe,Ee,se?.relative),wt=_c(mt,pt,u,!1,c.branches),vt=ln(wt,mt,pt);if(vt.active&&vt.matches&&(wt=vt.matches),!wt){ze(ce,Ee,Tl(404,{pathname:pt}),{flushSync:Pe});return}let{path:It,submission:Ft,error:qt}=hG(!0,pt,se);if(qt){ze(ce,Ee,qt,{flushSync:Pe});return}let yt=e.getContext?await e.getContext():new oG,at=(se&&se.preventScrollReset)===!0;if(Ft&&ms(Ft.formMethod)){await Pt(ce,Ee,It,wt,yt,vt.active,Pe,at,Ft,se&&se.defaultShouldRevalidate);return}ie.set(ce,{routeId:Ee,path:It}),await Jt(ce,Ee,It,wt,yt,vt.active,Pe,at,Ft)}a(xt,"fetch2");async function Pt(ce,Ee,Oe,se,Pe,mt,pt,wt,vt,It){he(),ie.delete(ce);let Ft=k.fetchers.get(ce);ge(ce,Kwe(vt,Ft),{flushSync:pt});let qt=new AbortController,yt=Ob(e.history,Oe,qt.signal,vt);if(mt){let wr=await Qt(se,new URL(yt.url).pathname,yt.signal,ce);if(wr.type==="aborted")return;if(wr.type==="error"){ze(ce,Ee,wr.error,{flushSync:pt});return}else if(wr.matches)se=wr.matches;else{ze(ce,Ee,Tl(404,{pathname:Oe}),{flushSync:pt});return}}let at=$R(se,Oe);if(!at.route.action&&!at.route.lazy){let wr=Tl(405,{method:vt.formMethod,pathname:Oe,routeId:Ee});ze(ce,Ee,wr,{flushSync:pt});return}K.set(ce,qt);let le=G,Ye=Kb(s,o,yt,Oe,se,at,r,Pe),dt=await Ke(yt,Oe,Ye,Pe,ce),Gt=dt[at.route.id];if(!Gt){for(let wr of Ye)if(dt[wr.route.id]){Gt=dt[wr.route.id];break}}if(yt.signal.aborted){K.get(ce)===qt&&K.delete(ce);return}if(de.has(ce)){if(kg(Gt)||Wo(Gt)){ge(ce,Pu(void 0));return}}else{if(kg(Gt))if(K.delete(ce),ee>le){ge(ce,Pu(void 0));return}else return J.add(ce),ge(ce,b1(vt)),Qe(yt,Gt,!1,{fetcherSubmission:vt,preventScrollReset:wt});if(Wo(Gt)){ze(ce,Ee,Gt.error);return}}let Fn=k.navigation.location||k.location,On=Ob(e.history,Fn,qt.signal),hr=c.activeRoutes,xr=k.navigation.state!=="idle"?_c(hr,k.navigation.location,u,!1,c.branches):k.matches;Nn(xr,"Didn't find any matches after fetcher action");let Sr=++G;Z.set(ce,Sr);let{dsMatches:Va,revalidatingFetchers:Dn}=pG(On,Pe,s,o,e.history,k,xr,vt,Fn,r,!1,H,Y,de,ie,J,hr,u,e.patchRoutesOnNavigation!=null,c.branches,[at.route.id,Gt],It),Ai=b1(vt,Gt.data),zt=new Map(k.fetchers);zt.set(ce,Ai),Dn.filter(wr=>wr.key!==ce).forEach(wr=>{let Ca=wr.key,Uf=zt.get(Ca),Wp=b1(void 0,Uf?Uf.data:void 0);zt.set(Ca,Wp),st(Ca),wr.controller&&K.set(Ca,wr.controller)}),$e({fetchers:zt});let ts=a(()=>Dn.forEach(wr=>st(wr.key)),"abortPendingFetchRevalidations");qt.signal.addEventListener("abort",ts);let{loaderResults:Ql,fetcherResults:md}=await re(Va,Dn,On,Fn,Pe);if(qt.signal.aborted)return;qt.signal.removeEventListener("abort",ts),Z.delete(ce),K.delete(ce),Dn.forEach(wr=>K.delete(wr.key));let xn=k.fetchers.has(ce),ei=a(wr=>{if(!xn)return wr;let Ca=new Map(wr.fetchers);return Ca.set(ce,Pu(Gt.data)),{...wr,fetchers:Ca}},"getRedirectStateWithDoneFetcher"),ws=XA(Ql);if(ws)return k=ei(k),Qe(On,ws.result,!1,{preventScrollReset:wt});if(ws=XA(md),ws)return J.add(ws.key),k=ei(k),Qe(On,ws.result,!1,{preventScrollReset:wt});let Ri=new Map(k.fetchers);xn&&Ri.set(ce,Pu(Gt.data));let{loaderData:Vp,errors:Jl}=_G(k,xr,Ql,void 0,Dn,md,Ri);jt(Sr,Ri),k.navigation.state==="loading"&&Sr>ee?(Nn(M,"Expected pending action"),U&&U.abort(),De(k.navigation.location,{matches:xr,loaderData:Vp,errors:Jl,fetchers:Ri})):($e({errors:Jl,loaderData:EG(k.loaderData,Vp,xr,Jl),fetchers:Ri}),H=!1)}a(Pt,"handleFetcherAction");async function Jt(ce,Ee,Oe,se,Pe,mt,pt,wt,vt){let It=k.fetchers.get(ce);ge(ce,b1(vt,It?It.data:void 0),{flushSync:pt});let Ft=new AbortController,qt=Ob(e.history,Oe,Ft.signal);if(mt){let Gt=await Qt(se,new URL(qt.url).pathname,qt.signal,ce);if(Gt.type==="aborted")return;if(Gt.type==="error"){ze(ce,Ee,Gt.error,{flushSync:pt});return}else if(Gt.matches)se=Gt.matches;else{ze(ce,Ee,Tl(404,{pathname:Oe}),{flushSync:pt});return}}let yt=$R(se,Oe);K.set(ce,Ft);let at=G,le=Kb(s,o,qt,Oe,se,yt,r,Pe),Ye=await Ke(qt,Oe,le,Pe,ce),dt=Ye[yt.route.id];if(!dt){for(let Gt of se)if(Ye[Gt.route.id]){dt=Ye[Gt.route.id];break}}if(K.get(ce)===Ft&&K.delete(ce),!qt.signal.aborted){if(de.has(ce)){ge(ce,Pu(void 0));return}if(kg(dt))if(ee>at){ge(ce,Pu(void 0));return}else{J.add(ce),await Qe(qt,dt,!1,{preventScrollReset:wt});return}if(Wo(dt)){ze(ce,Ee,dt.error);return}ge(ce,Pu(dt.data))}}a(Jt,"handleFetcherLoader");async function Qe(ce,Ee,Oe,{submission:se,fetcherSubmission:Pe,preventScrollReset:mt,replace:pt}={}){Oe||($?.resolve(),$=null),Ee.response.headers.has("X-Remix-Revalidate")&&(H=!0);let wt=Ee.response.headers.get("Location");Nn(wt,"Expected a Location header on the redirect Response"),wt=xG(wt,new URL(ce.url),u,e.history);let vt=LE(k.location,wt,{_isRedirect:!0});if(n){let le=!1;if(Ee.response.headers.has("X-Remix-Reload-Document"))le=!0;else if(IU(wt)){const Ye=Ere(t,wt,!0);le=Ye.origin!==t.location.origin||Eo(Ye.pathname,u)==null}if(le){pt?t.location.replace(wt):t.location.assign(wt);return}}U=null;let It=pt===!0||Ee.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Ft,formAction:qt,formEncType:yt}=k.navigation;!se&&!Pe&&Ft&&qt&&yt&&(se=jG(k.navigation));let at=se||Pe;if(Ewe.has(Ee.response.status)&&at&&ms(at.formMethod))await We(It,vt,{submission:{...at,formAction:wt},preventScrollReset:mt||F,enableViewTransition:Oe?z:void 0});else{let le=cL(vt,[],It,se);await We(It,vt,{overrideNavigation:le,fetcherSubmission:Pe,preventScrollReset:mt||F,enableViewTransition:Oe?z:void 0})}}a(Qe,"startRedirectNavigation");async function Ke(ce,Ee,Oe,se,Pe){let mt,pt={};try{mt=await Iwe(f,ce,Ee,Oe,Pe,se,!1)}catch(wt){return Oe.filter(vt=>vt.shouldLoad).forEach(vt=>{pt[vt.route.id]={type:"error",error:wt}}),pt}if(ce.signal.aborted)return pt;if(!ms(ce.method))for(let wt of Oe){if(mt[wt.route.id]?.type==="error")break;!mt.hasOwnProperty(wt.route.id)&&!k.loaderData.hasOwnProperty(wt.route.id)&&(!k.errors||!k.errors.hasOwnProperty(wt.route.id))&&wt.shouldCallHandler()&&(mt[wt.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${wt.route.id}`)})}for(let[wt,vt]of Object.entries(mt))if(Hwe(vt)){let It=vt.result;pt[wt]={type:"redirect",response:Fwe(It,ce,wt,Oe,u)}}else pt[wt]=await Lwe(vt);return pt}a(Ke,"callDataStrategy");async function re(ce,Ee,Oe,se,Pe){let mt=Ke(Oe,se,ce,Pe,null),pt=Promise.all(Ee.map(async It=>{if(It.matches&&It.match&&It.request&&It.controller){let qt=(await Ke(It.request,It.path,It.matches,Pe,It.key))[It.match.route.id];return{[It.key]:qt}}else return Promise.resolve({[It.key]:{type:"error",error:Tl(404,{pathname:It.path})}})})),wt=await mt,vt=(await pt).reduce((It,Ft)=>Object.assign(It,Ft),{});return{loaderResults:wt,fetcherResults:vt}}a(re,"callLoadersAndMaybeResolveData");function he(){H=!0,ie.forEach((ce,Ee)=>{K.has(Ee)&&Y.add(Ee),st(Ee)})}a(he,"interruptActiveLoads");function ge(ce,Ee,Oe={}){let se=new Map(k.fetchers);se.set(ce,Ee),$e({fetchers:se},{flushSync:(Oe&&Oe.flushSync)===!0})}a(ge,"updateFetcherState");function ze(ce,Ee,Oe,se={}){let Pe=Nh(k.matches,Ee),mt=new Map(k.fetchers);Ve(mt,ce),$e({errors:{[Pe.route.id]:Oe},fetchers:mt},{flushSync:(se&&se.flushSync)===!0})}a(ze,"setFetcherError");function Ze(ce){return oe.set(ce,(oe.get(ce)||0)+1),de.has(ce)&&de.delete(ce),k.fetchers.get(ce)||Swe}a(Ze,"getFetcher");function Je(ce,Ee){st(ce,Ee?.reason),ge(ce,Pu(null))}a(Je,"resetFetcher");function Ve(ce,Ee){let Oe=k.fetchers.get(Ee);K.has(Ee)&&!(Oe&&Oe.state==="loading"&&Z.has(Ee))&&st(Ee),ie.delete(Ee),Z.delete(Ee),J.delete(Ee),de.delete(Ee),Y.delete(Ee),ce.delete(Ee)}a(Ve,"deleteFetcher");function Ge(ce){let Ee=(oe.get(ce)||0)-1;Ee<=0?(oe.delete(ce),de.add(ce)):oe.set(ce,Ee),$e({fetchers:new Map(k.fetchers)})}a(Ge,"queueFetcherForDeletion");function st(ce,Ee){let Oe=K.get(ce);Oe&&(Oe.abort(Ee),K.delete(ce))}a(st,"abortFetcher");function _e(ce,Ee){for(let Oe of ce){let se=Ee.get(Oe);Nn(se,`Expected fetcher: ${Oe}`);let Pe=Pu(se.data);Ee.set(Oe,Pe)}}a(_e,"markFetchersDone");function je(ce){let Ee=[],Oe=!1;for(let se of J){let Pe=ce.get(se);Nn(Pe,`Expected fetcher: ${se}`),Pe.state==="loading"&&(J.delete(se),Ee.push(se),Oe=!0)}return _e(Ee,ce),Oe}a(je,"markFetchRedirectsDone");function jt(ce,Ee){let Oe=[];for(let[se,Pe]of Z)if(Pe<ce){let mt=Ee.get(se);Nn(mt,`Expected fetcher: ${se}`),mt.state==="loading"&&(st(se),Z.delete(se),Oe.push(se))}return _e(Oe,Ee),Oe.length>0}a(jt,"abortStaleFetchLoads");function rt(ce,Ee){let Oe=k.blockers.get(ce)||Tb;return ue.get(ce)!==Ee&&ue.set(ce,Ee),Oe}a(rt,"getBlocker");function St(ce){k.blockers.delete(ce),ue.delete(ce)}a(St,"deleteBlocker");function ht(ce,Ee){let Oe=k.blockers.get(ce)||Tb;Nn(Oe.state==="unblocked"&&Ee.state==="blocked"||Oe.state==="blocked"&&Ee.state==="blocked"||Oe.state==="blocked"&&Ee.state==="proceeding"||Oe.state==="blocked"&&Ee.state==="unblocked"||Oe.state==="proceeding"&&Ee.state==="unblocked",`Invalid blocker state transition: ${Oe.state} -> ${Ee.state}`);let se=new Map(k.blockers);se.set(ce,Ee),$e({blockers:se})}a(ht,"updateBlocker");function Tt({currentLocation:ce,nextLocation:Ee,historyAction:Oe}){if(ue.size===0)return;ue.size>1&&Pa(!1,"A router only supports one blocker at a time");let se=Array.from(ue.entries()),[Pe,mt]=se[se.length-1],pt=k.blockers.get(Pe);if(!(pt&&pt.state==="proceeding")&&mt({currentLocation:ce,nextLocation:Ee,historyAction:Oe}))return Pe}a(Tt,"shouldBlockNavigation");function Nt(ce){let Ee=Tl(404,{pathname:ce}),Oe=c.activeRoutes,{matches:se,route:Pe}=KA(Oe);return{notFoundMatches:se,route:Pe,error:Ee}}a(Nt,"handleNavigational404");function Ct(ce,Ee,Oe){if(w=ce,E=Ee,_=Oe||null,!R&&k.navigation===lL){R=!0;let se=an(k.location,k.matches);se!=null&&$e({restoreScrollPosition:se})}return()=>{w=null,E=null,_=null}}a(Ct,"enableScrollRestoration");function Ht(ce,Ee){return _&&_(ce,Ee.map(se=>Q0e(se,k.loaderData)))||ce.key}a(Ht,"getScrollKey");function Vt(ce,Ee){if(w&&E){let Oe=Ht(ce,Ee);w[Oe]=E()}}a(Vt,"saveScrollPosition");function an(ce,Ee){if(w){let Oe=Ht(ce,Ee),se=w[Oe];if(typeof se=="number")return se}return null}a(an,"getSavedScrollPosition");function ln(ce,Ee,Oe){if(e.patchRoutesOnNavigation){let se=c.branches;if(ce){if(Object.keys(ce[0].params).length>0)return{active:!0,matches:_c(Ee,Oe,u,!0,se)}}else return{active:!0,matches:_c(Ee,Oe,u,!0,se)||[]}}return{active:!1,matches:null}}a(ln,"checkFogOfWar");async function Qt(ce,Ee,Oe,se){if(!e.patchRoutesOnNavigation)return{type:"success",matches:ce};let Pe=ce;for(;;){let mt=o;try{await e.patchRoutesOnNavigation({signal:Oe,path:Ee,matches:Pe,fetcherKey:se,patch:a((It,Ft)=>{Oe.aborted||mG(It,Ft,c,mt,s,!1)},"patch")})}catch(It){return{type:"error",error:It,partialMatches:Pe}}if(Oe.aborted)return{type:"aborted"};let pt=c.branches,wt=_c(c.activeRoutes,Ee,u,!1,pt),vt=null;if(wt){if(Object.keys(wt[0].params).length===0)return{type:"success",matches:wt};if(vt=_c(c.activeRoutes,Ee,u,!0,pt),!(vt&&Pe.length<vt.length&&Wt(Pe,vt.slice(0,Pe.length))))return{type:"success",matches:wt}}if(vt||(vt=_c(c.activeRoutes,Ee,u,!0,pt)),!vt||Wt(Pe,vt))return{type:"success",matches:null};Pe=vt}}a(Qt,"discoverRoutes");function Wt(ce,Ee){return ce.length===Ee.length&&ce.every((Oe,se)=>Oe.route.id===Ee[se].route.id)}a(Wt,"compareMatches");function nn(ce){o={},c.setHmrRoutes(FE(ce,s,void 0,o))}a(nn,"_internalSetRoutes");function en(ce,Ee,Oe=!1){mG(ce,Ee,c,o,s,Oe),c.hasHMRRoutes||$e({})}return a(en,"patchRoutes"),P={get basename(){return u},get future(){return h},get state(){return k},get routes(){return c.stableRoutes},get branches(){return c.branches},get manifest(){return o},get window(){return t},initialize:pe,subscribe:ve,enableScrollRestoration:Ct,navigate:ke,fetch:xt,revalidate:Xe,createHref:a(ce=>e.history.createHref(ce),"createHref"),encodeLocation:a(ce=>e.history.encodeLocation(ce),"encodeLocation"),getFetcher:Ze,resetFetcher:Je,deleteFetcher:Ge,dispose:Se,getBlocker:rt,deleteBlocker:St,patchRoutes:en,_internalFetchControllers:K,_internalSetRoutes:nn,_internalSetStateDoNotUseOrYouWillBreakYourApp(ce){$e(ce)}},e.instrumentations&&(P=mwe(P,e.instrumentations.map(ce=>ce.router).filter(Boolean))),P}a(Awe,"createRouter");function Rwe(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}a(Rwe,"isSubmissionNavigation");function y$(e,t,n,r,i,s){let o,c;if(i){o=[];for(let f of t)if(o.push(f),f.route.id===i){c=f;break}}else o=t,c=t[t.length-1];let u=nC(r||".",ek(o),Eo(e.pathname,n)||e.pathname,s==="path");if(r==null&&(u.search=e.search,u.hash=e.hash),(r==null||r===""||r===".")&&c){let f=FU(u.search);if(c.route.index&&!f)u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let h=new URLSearchParams(u.search),m=h.getAll("index");h.delete("index"),m.filter(b=>b).forEach(b=>h.append("index",b));let g=h.toString();u.search=g?`?${g}`:""}}return n!=="/"&&(u.pathname=cwe({basename:n,pathname:u.pathname})),Ju(u)}a(y$,"normalizeTo");function hG(e,t,n){if(!n||!Rwe(n))return{path:t};if(n.formMethod&&!Gwe(n.formMethod))return{path:t,error:Tl(405,{method:n.formMethod})};let r=a(()=>({path:t,error:Tl(400,{type:"invalid-body"})}),"getInvalidBodyError"),s=(n.formMethod||"get").toUpperCase(),o=Hre(t);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!ms(s))return r();let m=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((g,[b,w])=>`${g}${b}=${w}
`,""):String(n.body);return{path:t,submission:{formMethod:s,formAction:o,formEncType:n.formEncType,formData:void 0,json:void 0,text:m}}}else if(n.formEncType==="application/json"){if(!ms(s))return r();try{let m=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:t,submission:{formMethod:s,formAction:o,formEncType:n.formEncType,formData:void 0,json:m,text:void 0}}}catch{return r()}}}Nn(typeof FormData=="function","FormData is not available in this environment");let c,u;if(n.formData)c=x$(n.formData),u=n.formData;else if(n.body instanceof FormData)c=x$(n.body),u=n.body;else if(n.body instanceof URLSearchParams)c=n.body,u=wG(c);else if(n.body==null)c=new URLSearchParams,u=new FormData;else try{c=new URLSearchParams(n.body),u=wG(c)}catch{return r()}let f={formMethod:s,formAction:o,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(ms(f.formMethod))return{path:t,submission:f};let h=Vl(t);return e&&h.search&&FU(h.search)&&c.append("index",""),h.search=`?${c}`,{path:Ju(h),submission:f}}a(hG,"normalizeNavigateOptions");function pG(e,t,n,r,i,s,o,c,u,f,h,m,g,b,w,_,E,R,j,A,T,D){let O=T?Wo(T[1])?T[1].error:T[1].data:void 0,P=i.createURL(s.location),k=i.createURL(u),M;if(h&&s.errors){let V=Object.keys(s.errors)[0];M=o.findIndex(H=>H.route.id===V)}else if(T&&Wo(T[1])){let V=T[0];M=o.findIndex(H=>H.route.id===V)-1}let $=T?T[1].statusCode:void 0,F=$&&$>=400,U={currentUrl:P,currentParams:s.matches[0]?.params||{},nextUrl:k,nextParams:o[0].params,...c,actionResult:O,actionStatus:$},z=aC(o),W=o.map((V,H)=>{let{route:Y}=V,K=null;if(M!=null&&H>M)K=!1;else if(Y.lazy)K=!0;else if(!MU(Y))K=!1;else if(h){let{shouldLoad:J}=Lre(Y,s.loaderData,s.errors);K=J}else Twe(s.loaderData,s.matches[H],V)&&(K=!0);if(K!==null)return b$(n,r,e,u,z,V,f,t,K);let G=!1;typeof D=="boolean"?G=D:F?G=!1:(m||P.pathname+P.search===k.pathname+k.search||P.search!==k.search||kwe(s.matches[H],V))&&(G=!0);let ee={...U,defaultShouldRevalidate:G},Z=gE(V,ee);return b$(n,r,e,u,z,V,f,t,Z,ee,D)}),q=[];return w.forEach((V,H)=>{if(h||!o.some(oe=>oe.route.id===V.routeId)||b.has(H))return;let Y=s.fetchers.get(H),K=Y&&Y.state!=="idle"&&Y.data===void 0,G=_c(E,V.path,R??"/",!1,A);if(!G){if(j&&K)return;q.push({key:H,routeId:V.routeId,path:V.path,matches:null,match:null,request:null,controller:null});return}if(_.has(H))return;let ee=$R(G,V.path),Z=new AbortController,J=Ob(i,V.path,Z.signal),ie=null;if(g.has(H))g.delete(H),ie=Kb(n,r,J,V.path,G,ee,f,t);else if(K)m&&(ie=Kb(n,r,J,V.path,G,ee,f,t));else{let oe;typeof D=="boolean"?oe=D:F?oe=!1:oe=m;let de={...U,defaultShouldRevalidate:oe};gE(ee,de)&&(ie=Kb(n,r,J,V.path,G,ee,f,t,de))}ie&&q.push({key:H,routeId:V.routeId,path:V.path,matches:ie,match:ee,request:J,controller:Z})}),{dsMatches:W,revalidatingFetchers:q}}a(pG,"getMatchesToLoad");function MU(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}a(MU,"routeHasLoaderOrMiddleware");function Lre(e,t,n){if(e.lazy)return{shouldLoad:!0,renderFallback:!0};if(!MU(e))return{shouldLoad:!1,renderFallback:!1};let r=t!=null&&e.id in t,i=n!=null&&n[e.id]!==void 0;if(!r&&i)return{shouldLoad:!1,renderFallback:!1};if(typeof e.loader=="function"&&e.loader.hydrate===!0)return{shouldLoad:!0,renderFallback:!r};let s=!r&&!i;return{shouldLoad:s,renderFallback:s}}a(Lre,"getRouteHydrationStatus");function Twe(e,t,n){let r=!t||n.route.id!==t.route.id,i=!e.hasOwnProperty(n.route.id);return r||i}a(Twe,"isNewLoader");function kwe(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}a(kwe,"isNewRouteInstance");function gE(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}a(gE,"shouldRevalidateLoader");function mG(e,t,n,r,i,s){let o;if(e){let f=r[e];Nn(f,`No route found to patch children into: routeId = ${e}`),f.children||(f.children=[]),o=f.children}else o=n.activeRoutes;let c=[],u=[];if(t.forEach(f=>{let h=o.find(m=>Fre(f,m));h?u.push({existingRoute:h,newRoute:f}):c.push(f)}),c.length>0){let f=FE(c,i,[e||"_","patch",String(o?.length||"0")],r);o.push(...f)}if(s&&u.length>0)for(let f=0;f<u.length;f++){let{existingRoute:h,newRoute:m}=u[f],g=h,[b]=FE([m],i,[],{},!0);Object.assign(g,{element:b.element?b.element:g.element,errorElement:b.errorElement?b.errorElement:g.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:g.hydrateFallbackElement})}n.hasHMRRoutes||n.setRoutes([...n.activeRoutes])}a(mG,"patchRoutesImpl");function Fre(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children?.every((n,r)=>t.children?.some(i=>Fre(n,i)))??!1:!1}a(Fre,"isSameRoute");var gG=new WeakMap,$re=a(({key:e,route:t,manifest:n,mapRouteProperties:r})=>{let i=n[t.id];if(Nn(i,"No route found in manifest"),!i.lazy||typeof i.lazy!="object")return;let s=i.lazy[e];if(!s)return;let o=gG.get(i);o||(o={},gG.set(i,o));let c=o[e];if(c)return c;let u=(async()=>{let f=G0e(e),m=i[e]!==void 0&&e!=="hasErrorBoundary";if(f)Pa(!f,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),o[e]=Promise.resolve();else if(m)Pa(!1,`Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let g=await s();g!=null&&(Object.assign(i,{[e]:g}),Object.assign(i,r(i)))}typeof i.lazy=="object"&&(i.lazy[e]=void 0,Object.values(i.lazy).every(g=>g===void 0)&&(i.lazy=void 0))})();return o[e]=u,u},"loadLazyRouteProperty"),vG=new WeakMap;function Nwe(e,t,n,r,i){let s=n[e.id];if(Nn(s,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let h=vG.get(s);if(h)return{lazyRoutePromise:h,lazyHandlerPromise:h};let m=(async()=>{Nn(typeof e.lazy=="function","No lazy route function found");let g=await e.lazy(),b={};for(let w in g){let _=g[w];if(_===void 0)continue;let E=K0e(w),j=s[w]!==void 0&&w!=="hasErrorBoundary";E?Pa(!E,"Route property "+w+" is not a supported property to be returned from a lazy route function. This property will be ignored."):j?Pa(!j,`Route "${s.id}" has a static property "${w}" defined but its lazy function is also returning a value for this property. The lazy route property "${w}" will be ignored.`):b[w]=_}Object.assign(s,b),Object.assign(s,{...r(s),lazy:void 0})})();return vG.set(s,m),m.catch(()=>{}),{lazyRoutePromise:m,lazyHandlerPromise:m}}let o=Object.keys(e.lazy),c=[],u;for(let h of o){if(i&&i.includes(h))continue;let m=$re({key:h,route:e,manifest:n,mapRouteProperties:r});m&&(c.push(m),h===t&&(u=m))}let f=c.length>0?Promise.all(c).then(()=>{}):void 0;return f?.catch(()=>{}),u?.catch(()=>{}),{lazyRoutePromise:f,lazyHandlerPromise:u}}a(Nwe,"loadLazyRoute");async function yG(e){let t=e.matches.filter(i=>i.shouldLoad),n={};return(await Promise.all(t.map(i=>i.resolve()))).forEach((i,s)=>{n[t[s].route.id]=i}),n}a(yG,"defaultDataStrategy");async function Owe(e){return e.matches.some(t=>t.route.middleware)?Ure(e,()=>yG(e)):yG(e)}a(Owe,"defaultDataStrategyWithMiddleware");function Ure(e,t){return Dwe(e,t,r=>{if(Wwe(r))throw r;return r},zwe,n);function n(r,i,s){if(s)return Promise.resolve(Object.assign(s.value,{[i]:{type:"error",result:r}}));{let{matches:o}=e,c=Math.min(Math.max(o.findIndex(f=>f.route.id===i),0),Math.max(o.findIndex(f=>f.shouldCallHandler()),0)),u=Nh(o,o[c].route.id).route.id;return Promise.resolve({[u]:{type:"error",result:r}})}}}a(Ure,"runClientMiddlewarePipeline");async function Dwe(e,t,n,r,i){let{matches:s,...o}=e,c=s.flatMap(f=>f.route.middleware?f.route.middleware.map(h=>[f.route.id,h]):[]);return await Bre(o,c,t,n,r,i)}a(Dwe,"runMiddlewarePipeline");async function Bre(e,t,n,r,i,s,o=0){let{request:c}=e;if(c.signal.aborted)throw c.signal.reason??new Error(`Request aborted: ${c.method} ${c.url}`);let u=t[o];if(!u)return await n();let[f,h]=u,m,g=a(async()=>{if(m)throw new Error("You may only call `next()` once per middleware");try{return m={value:await Bre(e,t,n,r,i,s,o+1)},m.value}catch(b){return m={value:await s(b,f,m)},m.value}},"next");try{let b=await h(e,g),w=b!=null?r(b):void 0;return i(w)?w:m?w??m.value:(m={value:await g()},m.value)}catch(b){return await s(b,f,m)}}a(Bre,"callRouteMiddleware");function zre(e,t,n,r,i){let s=$re({key:"middleware",route:r.route,manifest:t,mapRouteProperties:e}),o=Nwe(r.route,ms(n.method)?"action":"loader",t,e,i);return{middleware:s,route:o.lazyRoutePromise,handler:o.lazyHandlerPromise}}a(zre,"getDataStrategyMatchLazyPromises");function b$(e,t,n,r,i,s,o,c,u,f=null,h){let m=!1,g=zre(e,t,n,s,o);return{...s,_lazyPromises:g,shouldLoad:u,shouldRevalidateArgs:f,shouldCallHandler(b){return m=!0,f?typeof h=="boolean"?gE(s,{...f,defaultShouldRevalidate:h}):typeof b=="boolean"?gE(s,{...f,defaultShouldRevalidate:b}):gE(s,f):u},resolve(b){let{lazy:w,loader:_,middleware:E}=s.route,R=m||u||b&&!ms(n.method)&&(w||_),j=E&&E.length>0&&!_&&!w;return R&&(ms(n.method)||!j)?Pwe({request:n,path:r,pattern:i,match:s,lazyHandlerPromise:g?.handler,lazyRoutePromise:g?.route,handlerOverride:b,scopedContext:c}):Promise.resolve({type:"data",result:void 0})}}}a(b$,"getDataStrategyMatch");function Kb(e,t,n,r,i,s,o,c,u=null){return i.map(f=>f.route.id!==s.route.id?{...f,shouldLoad:!1,shouldRevalidateArgs:u,shouldCallHandler:a(()=>!1,"shouldCallHandler"),_lazyPromises:zre(e,t,n,f,o),resolve:a(()=>Promise.resolve({type:"data",result:void 0}),"resolve")}:b$(e,t,n,r,aC(i),f,o,c,!0,u))}a(Kb,"getTargetedDataStrategyMatches");async function Iwe(e,t,n,r,i,s,o){r.some(h=>h._lazyPromises?.middleware)&&await Promise.all(r.map(h=>h._lazyPromises?.middleware));let c={request:t,url:qre(t,n),pattern:aC(r),params:r[0].params,context:s,matches:r},f=await e({...c,fetcherKey:i,runClientMiddleware:a(h=>{let m=c;return Ure(m,()=>h({...m,fetcherKey:i,runClientMiddleware:a(()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")},"runClientMiddleware")}))},"runClientMiddleware")});try{await Promise.all(r.flatMap(h=>[h._lazyPromises?.handler,h._lazyPromises?.route]))}catch{}return f}a(Iwe,"callDataStrategyImpl");async function Pwe({request:e,path:t,pattern:n,match:r,lazyHandlerPromise:i,lazyRoutePromise:s,handlerOverride:o,scopedContext:c}){let u,f,h=ms(e.method),m=h?"action":"loader",g=a(b=>{let w,_=new Promise((j,A)=>w=A);f=a(()=>w(),"onReject"),e.signal.addEventListener("abort",f);let E=a(j=>typeof b!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${m}" [routeId: ${r.route.id}]`)):b({request:e,url:qre(e,t),pattern:n,params:r.params,context:c},...j!==void 0?[j]:[]),"actualHandler"),R=(async()=>{try{return{type:"data",result:await(o?o(A=>E(A)):E())}}catch(j){return{type:"error",result:j}}})();return Promise.race([R,_])},"runHandler");try{let b=h?r.route.action:r.route.loader;if(i||s)if(b){let w,[_]=await Promise.all([g(b).catch(E=>{w=E}),i,s]);if(w!==void 0)throw w;u=_}else{await i;let w=h?r.route.action:r.route.loader;if(w)[u]=await Promise.all([g(w),s]);else if(m==="action"){let _=new URL(e.url),E=_.pathname+_.search;throw Tl(405,{method:e.method,pathname:E,routeId:r.route.id})}else return{type:"data",result:void 0}}else if(b)u=await g(b);else{let w=new URL(e.url),_=w.pathname+w.search;throw Tl(404,{pathname:_})}}catch(b){return{type:"error",result:b}}finally{f&&e.signal.removeEventListener("abort",f)}return u}a(Pwe,"callLoaderOrAction");async function Mwe(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.body==null?null:e.json():e.text()}a(Mwe,"parseResponseBody");async function Lwe(e){let{result:t,type:n}=e;if(LU(t)){let r;try{r=await Mwe(t)}catch(i){return{type:"error",error:i}}return n==="error"?{type:"error",error:new rC(t.status,t.statusText,r),statusCode:t.status,headers:t.headers}:{type:"data",data:r,statusCode:t.status,headers:t.headers}}return n==="error"?CG(t)?t.data instanceof Error?{type:"error",error:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:Bwe(t),statusCode:$E(t)?t.status:void 0,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"error",error:t,statusCode:$E(t)?t.status:void 0}:CG(t)?{type:"data",data:t.data,statusCode:t.init?.status,headers:t.init?.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}a(Lwe,"convertDataStrategyResultToDataResult");function Fwe(e,t,n,r,i){let s=e.headers.get("Location");if(Nn(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!IU(s)){let o=r.slice(0,r.findIndex(c=>c.route.id===n)+1);s=y$(new URL(t.url),o,i,s),e.headers.set("Location",s)}return e}a(Fwe,"normalizeRelativeRoutingRedirectResponse");var bG=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function xG(e,t,n,r){if(IU(e)){let i=e,s=i.startsWith("//")?new URL(t.protocol+i):new URL(i);if(bG.includes(s.protocol))throw new Error("Invalid redirect location");let o=Eo(s.pathname,n)!=null;if(s.origin===t.origin&&o)return PU(s.pathname)+s.search+s.hash}try{let i=r.createURL(e);if(bG.includes(i.protocol))throw new Error("Invalid redirect location")}catch{}return e}a(xG,"normalizeRedirectLocation");function Ob(e,t,n,r){let i=e.createURL(Hre(t)).toString(),s={signal:n};if(r&&ms(r.formMethod)){let{formMethod:o,formEncType:c}=r;s.method=o.toUpperCase(),c==="application/json"?(s.headers=new Headers({"Content-Type":c}),s.body=JSON.stringify(r.json)):c==="text/plain"?s.body=r.text:c==="application/x-www-form-urlencoded"&&r.formData?s.body=x$(r.formData):s.body=r.formData}return new Request(i,s)}a(Ob,"createClientSideRequest");function qre(e,t){let n=new URL(e.url),r=typeof t=="string"?Vl(t):t;if(n.pathname=r.pathname||"/",r.search){let i=new URLSearchParams(r.search),s=i.getAll("index");i.delete("index");for(let o of s.filter(Boolean))i.append("index",o);n.search=i.size?`?${i.toString()}`:""}else n.search="";return n.hash=r.hash||"",n}a(qre,"createDataFunctionUrl");function x$(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}a(x$,"convertFormDataToSearchParams");function wG(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}a(wG,"convertSearchParamsToFormData");function $we(e,t,n,r=!1,i=!1){let s={},o=null,c,u=!1,f={},h=n&&Wo(n[1])?n[1].error:void 0;return e.forEach(m=>{if(!(m.route.id in t))return;let g=m.route.id,b=t[g];if(Nn(!kg(b),"Cannot handle redirect results in processLoaderData"),Wo(b)){let w=b.error;if(h!==void 0&&(w=h,h=void 0),o=o||{},i)o[g]=w;else{let _=Nh(e,g);o[_.route.id]==null&&(o[_.route.id]=w)}r||(s[g]=Mre),u||(u=!0,c=$E(b.error)?b.error.status:500),b.headers&&(f[g]=b.headers)}else s[g]=b.data,b.statusCode&&b.statusCode!==200&&!u&&(c=b.statusCode),b.headers&&(f[g]=b.headers)}),h!==void 0&&n&&(o={[n[0]]:h},n[2]&&(s[n[2]]=void 0)),{loaderData:s,errors:o,statusCode:c||200,loaderHeaders:f}}a($we,"processRouteLoaderData");function _G(e,t,n,r,i,s,o){let{loaderData:c,errors:u}=$we(t,n,r);return i.filter(f=>!f.matches||f.matches.some(h=>h.shouldLoad)).forEach(f=>{let{key:h,match:m,controller:g}=f;if(g&&g.signal.aborted)return;let b=s[h];if(Nn(b,"Did not find corresponding fetcher result"),Wo(b)){let w=Nh(e.matches,m?.route.id);u&&u[w.route.id]||(u={...u,[w.route.id]:b.error}),o.delete(h)}else if(kg(b))Nn(!1,"Unhandled fetcher revalidation redirect");else{let w=Pu(b.data);o.set(h,w)}}),{loaderData:c,errors:u}}a(_G,"processLoaderData");function EG(e,t,n,r){let i=Object.entries(t).filter(([,s])=>s!==Mre).reduce((s,[o,c])=>(s[o]=c,s),{});for(let s of n){let o=s.route.id;if(!t.hasOwnProperty(o)&&e.hasOwnProperty(o)&&s.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}a(EG,"mergeLoaderData");function SG(e){return e?Wo(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}a(SG,"getActionDataForCommit");function Nh(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}a(Nh,"findNearestBoundary");function KA(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}a(KA,"getShortCircuitMatches");function Tl(e,{pathname:t,routeId:n,method:r,type:i,message:s}={}){let o="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(o="Bad Request",r&&t&&n?c=`You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.`:i==="invalid-body"&&(c="Unable to encode submission body")):e===403?(o="Forbidden",c=`Route "${n}" does not match URL "${t}"`):e===404?(o="Not Found",c=`No route matches URL "${t}"`):e===405&&(o="Method Not Allowed",r&&t&&n?c=`You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.`:r&&(c=`Invalid request method "${r.toUpperCase()}"`)),new rC(e||500,o,new Error(c),!0)}a(Tl,"getInternalRouterError");function XA(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,i]=t[n];if(kg(i))return{key:r,result:i}}}a(XA,"findRedirect");function Hre(e){let t=typeof e=="string"?Vl(e):e;return Ju({...t,hash:""})}a(Hre,"stripHashFromPath");function Uwe(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}a(Uwe,"isHashChangeOnly");function Bwe(e){return new rC(e.init?.status??500,e.init?.statusText??"Internal Server Error",e.data)}a(Bwe,"dataWithResponseInitToErrorResponse");function zwe(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([t,n])=>typeof t=="string"&&qwe(n))}a(zwe,"isDataStrategyResults");function qwe(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}a(qwe,"isDataStrategyResult");function Hwe(e){return LU(e.result)&&Ire.has(e.result.status)}a(Hwe,"isRedirectDataStrategyResult");function Wo(e){return e.type==="error"}a(Wo,"isErrorResult");function kg(e){return(e&&e.type)==="redirect"}a(kg,"isRedirectResult");function CG(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}a(CG,"isDataWithResponseInit");function LU(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}a(LU,"isResponse");function Vwe(e){return Ire.has(e)}a(Vwe,"isRedirectStatusCode");function Wwe(e){return LU(e)&&Vwe(e.status)&&e.headers.has("Location")}a(Wwe,"isRedirectResponse");function Gwe(e){return _we.has(e.toUpperCase())}a(Gwe,"isValidMethod");function ms(e){return xwe.has(e.toUpperCase())}a(ms,"isMutationMethod");function FU(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}a(FU,"hasNakedIndexQuery");function $R(e,t){let n=typeof t=="string"?Vl(t).search:t.search;if(e[e.length-1].route.index&&FU(n||""))return e[e.length-1];let r=Tre(e);return r[r.length-1]}a($R,"getTargetMatch");function jG(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:s,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:t,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}a(jG,"getSubmissionFromNavigation");function cL(e,t,n,r){return r?{state:"loading",location:e,matches:t,historyAction:n,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}:{state:"loading",location:e,matches:t,historyAction:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}a(cL,"getLoadingNavigation");function Ywe(e,t,n,r){return{state:"submitting",location:e,matches:t,historyAction:n,formMethod:r.formMethod,formAction:r.formAction,formEncType:r.formEncType,formData:r.formData,json:r.json,text:r.text}}a(Ywe,"getSubmittingNavigation");function b1(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}a(b1,"getLoadingFetcher");function Kwe(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}a(Kwe,"getSubmittingFetcher");function Pu(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}a(Pu,"getDoneFetcher");function Xwe(e,t){try{let n=e.sessionStorage.getItem(Pre);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&t.set(i,new Set(s||[]))}}catch{}}a(Xwe,"restoreAppliedTransitions");function Qwe(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(Pre,JSON.stringify(n))}catch(r){Pa(!1,`Failed to save applied view transitions in sessionStorage (${r}).`)}}}a(Qwe,"persistAppliedTransitions");function AG(){let e,t,n=new Promise((r,i)=>{e=a(async s=>{r(s);try{await n}catch{}},"resolve"),t=a(async s=>{i(s);try{await n}catch{}},"reject")});return{promise:n,resolve:e,reject:t}}a(AG,"createDeferred");var Ep=x.createContext(null);Ep.displayName="DataRouter";var ow=x.createContext(null);ow.displayName="DataRouterState";var Vre=x.createContext(!1);function Wre(){return x.useContext(Vre)}a(Wre,"useIsRSCRouterContext");var $U=x.createContext({isTransitioning:!1});$U.displayName="ViewTransition";var Gre=x.createContext(new Map);Gre.displayName="Fetchers";var Jwe=x.createContext(null);Jwe.displayName="Await";var ul=x.createContext(null);ul.displayName="Navigation";var iC=x.createContext(null);iC.displayName="Location";var Wl=x.createContext({outlet:null,matches:[],isDataRoute:!1});Wl.displayName="Route";var UU=x.createContext(null);UU.displayName="RouteError";var Yre="REACT_ROUTER_ERROR",Zwe="REDIRECT",e_e="ROUTE_ERROR_RESPONSE";function t_e(e){if(e.startsWith(`${Yre}:${Zwe}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}a(t_e,"decodeRedirectErrorDigest");function n_e(e){if(e.startsWith(`${Yre}:${e_e}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new rC(t.status,t.statusText,t.data)}catch{}}a(n_e,"decodeRouteErrorResponseDigest");function r_e(e,{relative:t}={}){Nn(Of(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext(ul),{hash:i,pathname:s,search:o}=sC(e,{relative:t}),c=s;return n!=="/"&&(c=s==="/"?n:Ll([n,s])),r.createHref({pathname:c,search:o,hash:i})}a(r_e,"useHref");function Of(){return x.useContext(iC)!=null}a(Of,"useInRouterContext");function Ei(){return Nn(Of(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(iC).location}a(Ei,"useLocation$1");function tk(e){Nn(Of(),"useMatch() may be used only in the context of a <Router> component.");let{pathname:t}=Ei();return x.useMemo(()=>bs(e,Are(t)),[t,e])}a(tk,"useMatch");var Kre="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xre(e){x.useContext(ul).static||x.useLayoutEffect(e)}a(Xre,"useIsomorphicLayoutEffect$6");function dl(){let{isDataRoute:e}=x.useContext(Wl);return e?y_e():a_e()}a(dl,"useNavigate$2");function a_e(){Nn(Of(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(Ep),{basename:t,navigator:n}=x.useContext(ul),{matches:r}=x.useContext(Wl),{pathname:i}=Ei(),s=JSON.stringify(ek(r)),o=x.useRef(!1);return Xre(()=>{o.current=!0}),x.useCallback((u,f={})=>{if(Pa(o.current,Kre),!o.current)return;if(typeof u=="number"){n.go(u);return}let h=nC(u,JSON.parse(s),i,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ll([t,h.pathname])),(f.replace?n.replace:n.push)(h,f.state,f)},[t,n,s,i,e])}a(a_e,"useNavigateUnstable");var i_e=x.createContext(null);function s_e(e){let t=x.useContext(Wl).outlet;return x.useMemo(()=>t&&x.createElement(i_e.Provider,{value:e},t),[t,e])}a(s_e,"useOutlet");function BU(){let{matches:e}=x.useContext(Wl);return e[e.length-1]?.params??{}}a(BU,"useParams$1");function sC(e,{relative:t}={}){let{matches:n}=x.useContext(Wl),{pathname:r}=Ei(),i=JSON.stringify(ek(n));return x.useMemo(()=>nC(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}a(sC,"useResolvedPath");function o_e(e,t){return Qre(e,t)}a(o_e,"useRoutes");function Qre(e,t,n){Nn(Of(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=x.useContext(ul),{matches:i}=x.useContext(Wl),s=i[i.length-1],o=s?s.params:{},c=s?s.pathname:"/",u=s?s.pathnameBase:"/",f=s&&s.route;{let E=f&&f.path||"";tae(c,!f||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let h=Ei(),m;if(t){let E=typeof t=="string"?Vl(t):t;Nn(u==="/"||E.pathname?.startsWith(u),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${E.pathname}" was given in the \`location\` prop.`),m=E}else m=h;let g=m.pathname||"/",b=g;if(u!=="/"){let E=u.replace(/^\//,"").split("/");b="/"+g.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=n&&n.state.matches.length?n.state.matches.map(E=>Object.assign(E,{route:n.manifest[E.route.id]||E.route})):Sre(e,{pathname:b});Pa(f||w!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),Pa(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=f_e(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:Ll([u,r.encodeLocation?r.encodeLocation(E.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?u:Ll([u,r.encodeLocation?r.encodeLocation(E.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:E.pathnameBase])})),i,n);return t&&_?x.createElement(iC.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...m},navigationType:"POP"}},_):_}a(Qre,"useRoutesImpl");function l_e(){let e=m_e(),t=$E(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=x.createElement(x.Fragment,null,x.createElement("p",null,"ðŸ’¿ Hey developer ðŸ‘‹"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:s},"ErrorBoundary")," or"," ",x.createElement("code",{style:s},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:i},n):null,o)}a(l_e,"DefaultErrorComponent");var c_e=x.createElement(l_e,null),$x,Jre=($x=class extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){this.props.onError?this.props.onError(t,n):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const r=n_e(t.digest);r&&(t=r)}let n=t!==void 0?x.createElement(Wl.Provider,{value:this.props.routeContext},x.createElement(UU.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?x.createElement(u_e,{error:t},n):n}},a($x,"RenderErrorBoundary"),$x);Jre.contextType=Vre;var uL=new WeakMap;function u_e({children:e,error:t}){let{basename:n}=x.useContext(ul);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=t_e(t.digest);if(r){let i=uL.get(t);if(i)throw i;let s=Nre(r.location,n);if(kre&&!uL.get(t))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw uL.set(t,o),o}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return e}a(u_e,"RSCErrorHandler");function d_e({routeContext:e,match:t,children:n}){let r=x.useContext(Ep);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Wl.Provider,{value:e},n)}a(d_e,"RenderedRoute");function f_e(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=r?.errors;if(s!=null){let h=i.findIndex(m=>m.route.id&&s?.[m.route.id]!==void 0);Nn(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let o=!1,c=-1;if(n&&r){o=r.renderFallback;for(let h=0;h<i.length;h++){let m=i[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:g,errors:b}=r,w=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!b||b[m.route.id]===void 0);if(m.route.lazy||w){n.isStatic&&(o=!0),c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}}let u=n?.onError,f=r&&u?(h,m)=>{u(h,{location:r.location,params:r.matches?.[0]?.params??{},pattern:aC(r.matches),errorInfo:m})}:void 0;return i.reduceRight((h,m,g)=>{let b,w=!1,_=null,E=null;r&&(b=s&&m.route.id?s[m.route.id]:void 0,_=m.route.errorElement||c_e,o&&(c<0&&g===0?(tae("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,E=null):c===g&&(w=!0,E=m.route.hydrateFallbackElement||null)));let R=t.concat(i.slice(0,g+1)),j=a(()=>{let A;return b?A=_:w?A=E:m.route.Component?A=x.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=h,x.createElement(d_e,{match:m,routeContext:{outlet:h,matches:R,isDataRoute:r!=null},children:A})},"getChildren");return r&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?x.createElement(Jre,{location:r.location,revalidation:r.revalidation,component:_,error:b,children:j(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:f}):j()},null)}a(f_e,"_renderMatches");function zU(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}a(zU,"getDataRouterConsoleError");function Zre(e){let t=x.useContext(Ep);return Nn(t,zU(e)),t}a(Zre,"useDataRouterContext");function eae(e){let t=x.useContext(ow);return Nn(t,zU(e)),t}a(eae,"useDataRouterState");function h_e(e){let t=x.useContext(Wl);return Nn(t,zU(e)),t}a(h_e,"useRouteContext");function qU(e){let t=h_e(e),n=t.matches[t.matches.length-1];return Nn(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}a(qU,"useCurrentRouteId");function p_e(){return qU("useRouteId")}a(p_e,"useRouteId");function m_e(){let e=x.useContext(UU),t=eae("useRouteError"),n=qU("useRouteError");return e!==void 0?e:t.errors?.[n]}a(m_e,"useRouteError");var g_e=0;function v_e(e){let{router:t,basename:n}=Zre("useBlocker"),r=eae("useBlocker"),[i,s]=x.useState(""),o=x.useCallback(c=>{if(typeof e!="function")return!!e;if(n==="/")return e(c);let{currentLocation:u,nextLocation:f,historyAction:h}=c;return e({currentLocation:{...u,pathname:Eo(u.pathname,n)||u.pathname},nextLocation:{...f,pathname:Eo(f.pathname,n)||f.pathname},historyAction:h})},[n,e]);return x.useEffect(()=>{let c=String(++g_e);return s(c),()=>t.deleteBlocker(c)},[t]),x.useEffect(()=>{i!==""&&t.getBlocker(i,o)},[t,i,o]),i&&r.blockers.has(i)?r.blockers.get(i):Tb}a(v_e,"useBlocker$1");function y_e(){let{router:e}=Zre("useNavigate"),t=qU("useNavigate"),n=x.useRef(!1);return Xre(()=>{n.current=!0}),x.useCallback(async(i,s={})=>{Pa(n.current,Kre),n.current&&(typeof i=="number"?await e.navigate(i):await e.navigate(i,{fromRouteId:t,...s}))},[e,t])}a(y_e,"useNavigateStable");var RG={};function tae(e,t,n){!t&&!RG[e]&&(RG[e]=!0,Pa(!1,n))}a(tae,"warningOnce");var TG={};function kG(e,t){!e&&!TG[t]&&(TG[t]=!0,console.warn(t))}a(kG,"warnOnce");var b_e="useOptimistic",NG=XS[b_e],x_e=a(()=>{},"stableUseOptimisticSetter");function w_e(e){return NG?NG(e):[e,x_e]}a(w_e,"useOptimisticSafe");function __e(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Pa(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:x.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Pa(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:x.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Pa(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:x.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}a(__e,"mapRouteProperties");var E_e=["HydrateFallback","hydrateFallbackElement"],Ux,S_e=(Ux=class{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}},a(Ux,"Deferred"),Ux);function C_e({router:e,flushSync:t,onError:n,useTransitions:r}){r=Wre()||r;let[s,o]=x.useState(e.state),[c,u]=w_e(s),[f,h]=x.useState(),[m,g]=x.useState({isTransitioning:!1}),[b,w]=x.useState(),[_,E]=x.useState(),[R,j]=x.useState(),A=x.useRef(new Map),T=x.useCallback((k,{deletedFetchers:M,newErrors:$,flushSync:F,viewTransitionOpts:U})=>{$&&n&&Object.values($).forEach(W=>n(W,{location:k.location,params:k.matches[0]?.params??{},pattern:aC(k.matches)})),k.fetchers.forEach((W,q)=>{W.data!==void 0&&A.current.set(q,W.data)}),M.forEach(W=>A.current.delete(W)),kG(F===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let z=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(kG(U==null||z,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!U||!z){t&&F?t(()=>o(k)):r===!1?o(k):x.startTransition(()=>{r===!0&&u(W=>OG(W,k)),o(k)});return}if(t&&F){t(()=>{_&&(b?.resolve(),_.skipTransition()),g({isTransitioning:!0,flushSync:!0,currentLocation:U.currentLocation,nextLocation:U.nextLocation})});let W=e.window.document.startViewTransition(()=>{t(()=>o(k))});W.finished.finally(()=>{t(()=>{w(void 0),E(void 0),h(void 0),g({isTransitioning:!1})})}),t(()=>E(W));return}_?(b?.resolve(),_.skipTransition(),j({state:k,currentLocation:U.currentLocation,nextLocation:U.nextLocation})):(h(k),g({isTransitioning:!0,flushSync:!1,currentLocation:U.currentLocation,nextLocation:U.nextLocation}))},[e.window,t,_,b,r,u,n]);x.useLayoutEffect(()=>e.subscribe(T),[e,T]),x.useEffect(()=>{m.isTransitioning&&!m.flushSync&&w(new S_e)},[m]),x.useEffect(()=>{if(b&&f&&e.window){let k=f,M=b.promise,$=e.window.document.startViewTransition(async()=>{r===!1?o(k):x.startTransition(()=>{r===!0&&u(F=>OG(F,k)),o(k)}),await M});$.finished.finally(()=>{w(void 0),E(void 0),h(void 0),g({isTransitioning:!1})}),E($)}},[f,b,e.window,r,u]),x.useEffect(()=>{b&&f&&c.location.key===f.location.key&&b.resolve()},[b,_,c.location,f]),x.useEffect(()=>{!m.isTransitioning&&R&&(h(R.state),g({isTransitioning:!0,flushSync:!1,currentLocation:R.currentLocation,nextLocation:R.nextLocation}),j(void 0))},[m.isTransitioning,R]);let D=x.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:a(k=>e.navigate(k),"go"),push:a((k,M,$)=>e.navigate(k,{state:M,preventScrollReset:$?.preventScrollReset}),"push"),replace:a((k,M,$)=>e.navigate(k,{replace:!0,state:M,preventScrollReset:$?.preventScrollReset}),"replace")}),[e]),O=e.basename||"/",P=x.useMemo(()=>({router:e,navigator:D,static:!1,basename:O,onError:n}),[e,D,O,n]);return x.createElement(x.Fragment,null,x.createElement(Ep.Provider,{value:P},x.createElement(ow.Provider,{value:c},x.createElement(Gre.Provider,{value:A.current},x.createElement($U.Provider,{value:m},x.createElement(T_e,{basename:O,location:c.location,navigationType:c.historyAction,navigator:D,useTransitions:r},x.createElement(j_e,{routes:e.routes,manifest:e.manifest,future:e.future,state:c,isStatic:!1,onError:n})))))),null)}a(C_e,"RouterProvider");function OG(e,t){return{...e,navigation:t.navigation.state!=="idle"?t.navigation:e.navigation,revalidation:t.revalidation!=="idle"?t.revalidation:e.revalidation,actionData:t.navigation.state!=="submitting"?t.actionData:e.actionData,fetchers:t.fetchers}}a(OG,"getOptimisticRouterState");var j_e=x.memo(A_e);function A_e({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:s}){return Qre(e,void 0,{manifest:t,state:r,isStatic:i,onError:s})}a(A_e,"DataRoutes2");function HU({to:e,replace:t,state:n,relative:r}){Nn(Of(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=x.useContext(ul);Pa(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=x.useContext(Wl),{pathname:o}=Ei(),c=dl(),u=nC(e,ek(s),o,r==="path"),f=JSON.stringify(u);return x.useEffect(()=>{c(JSON.parse(f),{replace:t,state:n,relative:r})},[c,f,r,t,n]),null}a(HU,"Navigate$1");function R_e(e){return s_e(e.context)}a(R_e,"Outlet");function Na(e){Nn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}a(Na,"Route");function T_e({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:o}){Nn(!Of(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:c,navigator:i,static:s,useTransitions:o,future:{}}),[c,i,s,o]);typeof n=="string"&&(n=Vl(n));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:b="default",mask:w}=n,_=x.useMemo(()=>{let E=Eo(f,c);return E==null?null:{location:{pathname:E,search:h,hash:m,state:g,key:b,mask:w},navigationType:r}},[c,f,h,m,g,b,r,w]);return Pa(_!=null,`<Router basename="${c}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:x.createElement(ul.Provider,{value:u},x.createElement(iC.Provider,{children:t,value:_}))}a(T_e,"Router");function k_e({children:e,location:t}){return o_e(w$(e),t)}a(k_e,"Routes");function w$(e,t=[]){let n=[];return x.Children.forEach(e,(r,i)=>{if(!x.isValidElement(r))return;let s=[...t,i];if(r.type===x.Fragment){n.push.apply(n,w$(r.props.children,s));return}Nn(r.type===Na,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Nn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=w$(r.props.children,s)),n.push(o)}),n}a(w$,"createRoutesFromChildren");var UR="get",BR="application/x-www-form-urlencoded";function nk(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}a(nk,"isHtmlElement$1");function N_e(e){return nk(e)&&e.tagName.toLowerCase()==="button"}a(N_e,"isButtonElement");function O_e(e){return nk(e)&&e.tagName.toLowerCase()==="form"}a(O_e,"isFormElement");function D_e(e){return nk(e)&&e.tagName.toLowerCase()==="input"}a(D_e,"isInputElement");function I_e(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}a(I_e,"isModifiedEvent");function P_e(e,t){return e.button===0&&(!t||t==="_self")&&!I_e(e)}a(P_e,"shouldProcessLinkClick");function _$(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}a(_$,"createSearchParams");function M_e(e,t){let n=_$(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}a(M_e,"getSearchParamsForLocation");var QA=null;function L_e(){if(QA===null)try{new FormData(document.createElement("form"),0),QA=!1}catch{QA=!0}return QA}a(L_e,"isFormDataSubmitterSupported");var F_e=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function dL(e){return e!=null&&!F_e.has(e)?(Pa(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${BR}"`),null):e}a(dL,"getFormEncType");function $_e(e,t){let n,r,i,s,o;if(O_e(e)){let c=e.getAttribute("action");r=c?Eo(c,t):null,n=e.getAttribute("method")||UR,i=dL(e.getAttribute("enctype"))||BR,s=new FormData(e)}else if(N_e(e)||D_e(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||c.getAttribute("action");if(r=u?Eo(u,t):null,n=e.getAttribute("formmethod")||c.getAttribute("method")||UR,i=dL(e.getAttribute("formenctype"))||dL(c.getAttribute("enctype"))||BR,s=new FormData(c,e),!L_e()){let{name:f,type:h,value:m}=e;if(h==="image"){let g=f?`${f}.`:"";s.append(`${g}x`,"0"),s.append(`${g}y`,"0")}else f&&s.append(f,m)}}else{if(nk(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=UR,r=null,i=BR,o=e}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}a($_e,"getFormSubmissionInfo");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function VU(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}a(VU,"invariant2");function nae(e,t,n,r){let i=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:t&&Eo(i.pathname,t)==="/"?i.pathname=`${aT(t)}/_root.${r}`:i.pathname=`${aT(i.pathname)}.${r}`,i}a(nae,"singleFetchUrl");async function U_e(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}a(U_e,"loadRouteModule");function B_e(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}a(B_e,"isHtmlLinkDescriptor");async function z_e(e,t,n){let r=await Promise.all(e.map(async i=>{let s=t.routes[i.route.id];if(s){let o=await U_e(s,n);return o.links?o.links():[]}return[]}));return W_e(r.flat(1).filter(B_e).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}a(z_e,"getKeyedPrefetchLinks");function DG(e,t,n,r,i,s){let o=a((u,f)=>n[f]?u.route.id!==n[f].route.id:!0,"isNew"),c=a((u,f)=>n[f].pathname!==u.pathname||n[f].route.path?.endsWith("*")&&n[f].params["*"]!==u.params["*"],"matchPathChanged");return s==="assets"?t.filter((u,f)=>o(u,f)||c(u,f)):s==="data"?t.filter((u,f)=>{let h=r.routes[u.route.id];if(!h||!h.hasLoader)return!1;if(o(u,f)||c(u,f))return!0;if(u.route.shouldRevalidate){let m=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}a(DG,"getNewMatchesForLinks");function q_e(e,t,{includeHydrateFallback:n}={}){return H_e(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}a(q_e,"getModuleLinkHrefs");function H_e(e){return[...new Set(e)]}a(H_e,"dedupeHrefs");function V_e(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}a(V_e,"sortKeys");function W_e(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let s=JSON.stringify(V_e(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}a(W_e,"dedupeLinkDescriptors");function WU(){let e=x.useContext(Ep);return VU(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}a(WU,"useDataRouterContext2");function G_e(){let e=x.useContext(ow);return VU(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}a(G_e,"useDataRouterStateContext");var GU=x.createContext(void 0);GU.displayName="FrameworkContext";function YU(){let e=x.useContext(GU);return VU(e,"You must render this element inside a <HydratedRouter> element"),e}a(YU,"useFrameworkContext");function Y_e(e,t){let n=x.useContext(GU),[r,i]=x.useState(!1),[s,o]=x.useState(!1),{onFocus:c,onBlur:u,onMouseEnter:f,onMouseLeave:h,onTouchStart:m}=t,g=x.useRef(null);x.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let _=a(R=>{R.forEach(j=>{o(j.isIntersecting)})},"callback"),E=new IntersectionObserver(_,{threshold:.5});return g.current&&E.observe(g.current),()=>{E.disconnect()}}},[e]),x.useEffect(()=>{if(r){let _=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(_)}}},[r]);let b=a(()=>{i(!0)},"setIntent"),w=a(()=>{i(!1),o(!1)},"cancelIntent");return n?e!=="intent"?[s,g,{}]:[s,g,{onFocus:x1(c,b),onBlur:x1(u,w),onMouseEnter:x1(f,b),onMouseLeave:x1(h,w),onTouchStart:x1(m,b)}]:[!1,g,{}]}a(Y_e,"usePrefetchBehavior");function x1(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}a(x1,"composeEventHandlers$2");function K_e({page:e,...t}){let n=Wre(),{router:r}=WU(),i=x.useMemo(()=>Sre(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?x.createElement(Q_e,{page:e,matches:i,...t}):x.createElement(J_e,{page:e,matches:i,...t}):null}a(K_e,"PrefetchPageLinks");function X_e(e){let{manifest:t,routeModules:n}=YU(),[r,i]=x.useState([]);return x.useEffect(()=>{let s=!1;return z_e(e,t,n).then(o=>{s||i(o)}),()=>{s=!0}},[e,t,n]),r}a(X_e,"useKeyedPrefetchLinks");function Q_e({page:e,matches:t,...n}){let r=Ei(),{future:i}=YU(),{basename:s}=WU(),o=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let c=nae(e,s,i.v8_trailingSlashAwareDataRequests,"rsc"),u=!1,f=[];for(let h of t)typeof h.route.shouldRevalidate=="function"?u=!0:f.push(h.route.id);return u&&f.length>0&&c.searchParams.set("_routes",f.join(",")),[c.pathname+c.search]},[s,i.v8_trailingSlashAwareDataRequests,e,r,t]);return x.createElement(x.Fragment,null,o.map(c=>x.createElement("link",{key:c,rel:"prefetch",as:"fetch",href:c,...n})))}a(Q_e,"RSCPrefetchPageLinksImpl");function J_e({page:e,matches:t,...n}){let r=Ei(),{future:i,manifest:s,routeModules:o}=YU(),{basename:c}=WU(),{loaderData:u,matches:f}=G_e(),h=x.useMemo(()=>DG(e,t,f,s,r,"data"),[e,t,f,s,r]),m=x.useMemo(()=>DG(e,t,f,s,r,"assets"),[e,t,f,s,r]),g=x.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let _=new Set,E=!1;if(t.forEach(j=>{let A=s.routes[j.route.id];!A||!A.hasLoader||(!h.some(T=>T.route.id===j.route.id)&&j.route.id in u&&o[j.route.id]?.shouldRevalidate||A.hasClientLoader?E=!0:_.add(j.route.id))}),_.size===0)return[];let R=nae(e,c,i.v8_trailingSlashAwareDataRequests,"data");return E&&_.size>0&&R.searchParams.set("_routes",t.filter(j=>_.has(j.route.id)).map(j=>j.route.id).join(",")),[R.pathname+R.search]},[c,i.v8_trailingSlashAwareDataRequests,u,r,s,h,t,e,o]),b=x.useMemo(()=>q_e(m,s),[m,s]),w=X_e(m);return x.createElement(x.Fragment,null,g.map(_=>x.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),b.map(_=>x.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),w.map(({key:_,link:E})=>x.createElement("link",{key:_,nonce:n.nonce,...E,crossOrigin:E.crossOrigin??n.crossOrigin})))}a(J_e,"PrefetchPageLinksImpl");function Z_e(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}a(Z_e,"mergeRefs");var e1e=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{e1e&&(window.__reactRouterVersion="7.17.0")}catch{}function t1e(e,t){return Awe({basename:t?.basename,getContext:t?.getContext,future:t?.future,history:q0e({window:t?.window}),hydrationData:t?.hydrationData||n1e(),routes:e,mapRouteProperties:__e,hydrationRouteProperties:E_e,dataStrategy:t?.dataStrategy,patchRoutesOnNavigation:t?.patchRoutesOnNavigation,window:t?.window,instrumentations:t?.instrumentations}).initialize()}a(t1e,"createHashRouter");function n1e(){let e=window?.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:r1e(e.errors)}),e}a(n1e,"parseHydrationData");function r1e(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new rC(i.status,i.statusText,i.dÛ]·ÛoÊ×¬¢h­µçPSÓUT—ÕÈ‹VÙK“US—ÔÓPSÓUT—ÖLLŒOH“US—ÔÓPSÓUT—Ö‹VÙK“US—ÔÓPSÓUT—ÖOLLŒWOH“US—ÔÓPSÓUT—ÖH‹VÙK“US—ÔÓPSÓUT—ÖLLŒ—OH“US—ÔÓPSÓUT—Öˆ‹VÙK“Q•ÐÕT“WÐ”PÒÑULLŒ×OH“Q•ÐÕT“WÐ”PÒÑU‹VÙK•‘T•PÐSÓS‘OLLOH•‘T•PÐSÓS‘H‹VÙK”’QÒÐÕT“WÐ”PÒÑULLWOH”’QÒÐÕT“WÐ”PÒÑU‹VÙK•SOLL—OH•SHŸJJ]
]^ßJJNØÛÛœÝ™]^ÖÑ]”USÕUSÓ—ÓPT’×N‘]”USÕUSÓ—ÓPT’ËÑ]”‘U‘T”ÑWÔÓÓQT×N‘]”‘U‘T”ÑWÔÓÓQTËÑ]”ÓÓQT×N‘]”ÓÓQTËÑ]“US—ÔÓPSÓUT—Ð—N‘]PÒÔÔPÑKÑ]“US—ÔÓPSÓUT—Ñ—N‘]‘“Ô“WÑ‘QQÑ]“US—ÔÓPSÓUT—Ó—N‘]“‘UÓS‘KÑ]“US—ÔÓPSÓUT—Ô—N‘]ÐT”’PQÑWÔ‘UT“‹Ñ]“US—ÔÓPSÓUT—ÕN‘]•PŸK\OXÛ\ÜÈ\^ØÛÛœÝXÝÜŠ
^Ý\Ë™XÛÙ\[™]È^XÛÙ\Š]‹NŠK\ËœÝš[™ÜÏV×K\Ë˜ž]S[™ÝLX\[™Ú\Š
^Ý\ËœÝš[™ÜËœ\Ú
Ýš[™Ë™œ›ÛPÚ\ÛÙJ
JK\Ë˜ž]S[™Ý
ÏL_X\[™YŠL]›[™Ý
^Ý\ËœÝš[™ÜËœ\Ú
\Ë™XÛÙ\‹™XÛÙJœÝX˜\œ˜^J‹ŠJJK\Ë˜ž]S[™Ý
Ï\‹[Ÿ\™\Ù]

^Ý\ËœÝš[™ÜÏV×K\Ë˜ž]S[™ÝL]ÔÝš[™Ê
^Ü™]\›ˆ\ËœÝš[™ÜËš›Ú[ŠˆŠ__NØJ\K“›ÛY™™\™YÝš[™ÈŠNÛ]LP\NØÛÛœÝœOXÛ\ÜÈœ^ØÛÛœÝXÝÜŠ
^Ý\Ë™XÛÙ\[™]È^XÛÙ\Š]‹NŠK\Ë˜Y™™\“Ù™œÙ]L\ËœÝš[™ÏHˆ‹\Ë˜ž]S[™ÝL\Ë˜Y™™\[™]ÈZ[\œ˜^J
_X\[™Ú\Š
^Ý\Ë˜Y™™\“Ù™œÙ]]\Ë˜Y™™\‹›[™Ý	‰\Ë™›\ÚÝš[™ÐY™™\Š
K\Ë˜Y™™\–Ý\Ë˜Y™™\“Ù™œÙ]
Ê×O]\Ë˜ž]S[™Ý
ÏL_X\[™YŠL]›[™Ý
^ØÛÛœÝO\‹[ŽÝ\Ë˜Y™™\“Ù™œÙ]
ÚO\Ë˜Y™™\‹›[™Ý	‰\Ë™›\ÚÝš[™ÐY™™\Š
K\Ë˜Y™™\‹œÙ]
œÝX˜\œ˜^J‹ŠK\Ë˜Y™™\“Ù™œÙ]
K\Ë˜Y™™\“Ù™œÙ]
ÏZK\Ë˜ž]S[™Ý
ÏZ_Y›\ÚÝš[™ÐY™™\Š
^Ý\ËœÝš[™ÊÏ]\Ë™XÛÙ\‹™XÛÙJ\Ë˜Y™™\‹œÝX˜\œ˜^J\Ë˜Y™™\“Ù™œÙ]
JK\Ë˜Y™™\“Ù™œÙ]L\™\Ù]

^Ý\ËœÝš[™ÏHˆ‹\Ë˜Y™™\“Ù™œÙ]L\Ë˜ž]S[™ÝL]ÔÝš[™Ê
^Ü™]\›ˆ\Ë™›\ÚÝš[™ÐY™™\Š
K\ËœÝš[™ß_NØJœKY™™\™YÝš[™ÈŠNÛ]ŒTœNÝ˜\ˆÊ[˜Ý[ÛŠJ^ÙVÙK“Q•Ð”PÑOLOH“Q•Ð”PÑH‹VÙK”’QÒÐ”PÑOLWOH”’QÒÐ”PÑH‹VÙK“Q•Ð”PÒÑUL—OH“Q•Ð”PÒÑU‹VÙK”’QÒÐ”PÒÑUL×OH”’QÒÐ”PÒÑU‹VÙKÓÓÓMOHÓÓÓˆ‹VÙKÓÓSPOMWOHÓÓSPH‹VÙK••QOM—OH••QH‹VÙK‘SÑOM×OH‘SÑH‹VÙK“•SNOH“•S‹VÙK”Õ’S‘ÏNWOH”Õ’S‘È‹VÙK“•SP‘TLLOH“•SP‘Tˆ‹VÙK”ÑTTUÔLLWOH”ÑTTUÔˆŸJJ
^ßJJNØÛÛœÝUÝ˜\ˆÊ[˜Ý[ÛŠJ^ÙVÙK”ÕT•LOH”ÕT•‹VÙK‘S‘QLWOH‘S‘Q‹VÙK‘T”“ÔL—OH‘T”“Ôˆ‹VÙK••QLOL×OH••QLH‹VÙK••QLMOH••QLˆ‹VÙK••QLÏMWOH••QLÈ‹VÙK‘SÑLOM—OH‘SÑLH‹VÙK‘SÑLM×OH‘SÑLˆ‹VÙK‘SÑLÏNOH‘SÑLÈ‹VÙK‘SÑMNWOH‘SÑM‹VÙK“•SOLLOH“•SH‹VÙK“•SLLWOH“•Sˆ‹VÙK“•SÏLL—OH“•SÈ‹VÙK”Õ’S‘×ÑQUSLL×OH”Õ’S‘×ÑQUS‹VÙK”Õ’S‘×ÐQ•T—ÐPÒÔÓTÒLMOH”Õ’S‘×ÐQ•T—ÐPÒÔÓTÒ‹VÙK”Õ’S‘×ÕS’PÓÑWÑQÒUÌOLMWOH”Õ’S‘×ÕS’PÓÑWÑQÒUÌH‹VÙK”Õ’S‘×ÕS’PÓÑWÑQÒUÌLM—OH”Õ’S‘×ÕS’PÓÑWÑQÒUÌˆ‹VÙK”Õ’S‘×ÕS’PÓÑWÑQÒUÌÏLM×OH”Õ’S‘×ÕS’PÓÑWÑQÒUÌÈ‹VÙK”Õ’S‘×ÕS’PÓÑWÑQÒUÍLNOH”Õ’S‘×ÕS’PÓÑWÑQÒUÍ‹VÙK”Õ’S‘×ÒSÓÓTUWÐÒTLNWOH”Õ’S‘×ÒSÓÓTUWÐÒTˆ‹VÙK“•SP‘T—ÐQ•T—ÒS’UPSÓRS•TÏLŒOH“•SP‘T—ÐQ•T—ÒS’UPSÓRS•TÈ‹VÙK“•SP‘T—ÐQ•T—ÒS’UPSÖ‘T“ÏLŒWOH“•SP‘T—ÐQ•T—ÒS’UPSÖ‘T“È‹VÙK“•SP‘T—ÐQ•T—ÒS’UPSÓ“Ó—Ö‘T“ÏLŒ—OH“•SP‘T—ÐQ•T—ÒS’UPSÓ“Ó—Ö‘T“È‹VÙK“•SP‘T—ÐQ•T—Ñ•SÔÕÔLŒ×OH“•SP‘T—ÐQ•T—Ñ•SÔÕÔ‹VÙK“•SP‘T—ÐQ•T—ÑPÒSPSLOH“•SP‘T—ÐQ•T—ÑPÒSPS‹VÙK“•SP‘T—ÐQ•T—ÑOLWOH“•SP‘T—ÐQ•T—ÑH‹VÙK“•SP‘T—ÐQ•T—ÑWÐS‘ÔÒQÓL—OH“•SP‘T—ÐQ•T—ÑWÐS‘ÔÒQÓˆ‹VÙK“•SP‘T—ÐQ•T—ÑWÐS‘ÑQÒUL×OH“•SP‘T—ÐQ•T—ÑWÐS‘ÑQÒU‹VÙK”ÑTTUÔLŽOH”ÑTTUÔˆ‹VÙK“ÓWÓÔ—ÔÕT•LŽWOH“ÓWÓÔ—ÔÕT•‹VÙK“ÓOLÌOH“ÓHŸJJ
^ßJJNÙ[˜Ý[ÛˆJJ^Ü™]\›–È”ÕT•‹‘S‘Q‹‘T”“Ôˆ‹••QLH‹••QLˆ‹••QLÈ‹‘SÑLH‹‘SÑLˆ‹‘SÑLÈ‹‘SÑM‹“•SH‹“•Sˆ‹“•SÈ‹”Õ’S‘×ÑQUS‹”Õ’S‘×ÐQ•T—ÐPÒÔÓTÒ‹”Õ’S‘×ÕS’PÓÑWÑQÒUÌH‹”Õ’S‘×ÕS’PÓÑWÑQÒUÌˆ‹”Õ’S‘×ÕS’PÓÑWÑQÒUÌÈ‹”Õ’S‘×ÕS’PÓÑWÑQÒUÍ‹”Õ’S‘×ÒSÓÓTUWÐÒTˆ‹“•SP‘T—ÐQ•T—ÒS’UPSÓRS•TÈ‹“•SP‘T—ÐQ•T—ÒS’UPSÖ‘T“È‹“•SP‘T—ÐQ•T—ÒS’UPSÓ“Ó—Ö‘T“È‹“•SP‘T—ÐQ•T—Ñ•SÔÕÔ‹“•SP‘T—ÐQ•T—ÑPÒSPS‹“•SP‘T—ÐQ•T—ÑH‹“•SP‘T—ÐQ•T—ÑWÐS‘ÔÒQÓˆ‹“•SP‘T—ÐQ•T—ÑWÐS‘ÑQÒU‹”ÑTTUÔˆ‹“ÓWÓÔ—ÔÕT•‹“ÓH—VÙW_XJK•ÚÙ[š^™\”Ý]UÔÝš[™ÈŠNØÛÛœÝY]^ÜÝš[™ÐY™™\”Ú^™NŒ[X™\Y™™\”Ú^™NŒÙ\\˜]ÜŽ›ÚY[Z]\X[ÚÙ[œÎˆL_KXÛ\ÜÈˆ^[™È\œ›ÜžØÛÛœÝXÝÜŠ
^ÜÝ\\Š
KØš™XÝœÙ]›ÝÝ\SÙŠ\Ë‹œ›ÝÝ\J__NØJ‹•ÚÙ[š^™\‘\œ›ÜˆŠNÛ]‘OSŽØÛÛœÝOXÛ\ÜÈ^ØÛÛœÝXÝÜŠ
^Ý\ËœÝ]OY“ÓWÓÔ—ÔÕT•\Ë˜›ÛR[™^L\ËœÙ\\˜]Ü’[™^L\Ë™\ØØ\YÚ\œÐž]S[™ÝL\Ë˜ž]\×Ü™[XZ[š[™ÏL\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙOL\Ë˜Ú\—ÜÜ]ØY™™\[™]ÈZ[\œ˜^J
K\Ë™[˜ÛÙ\[™]È^[˜ÛÙ\‹\Ë›Ù™œÙ]KLKSØš™XÝ˜\ÜÚYÛŠØš™XÝ˜\ÜÚYÛŠßKY]
K
K\Ë™[Z]\X[ÚÙ[œÏ]™[Z]\X[ÚÙ[œÏOOHL\Ë˜Y™™\™YÝš[™Ï]œÝš[™ÐY™™\”Ú^™I‰œÝš[™ÐY™™\”Ú^™OÛ™]ÈŒŠœÝš[™ÐY™™\”Ú^™JN›™]ÈL‹\Ë˜Y™™\™Y[X™\]›[X™\Y™™\”Ú^™I‰›[X™\Y™™\”Ú^™OŒÛ™]ÈŒŠ›[X™\Y™™\”Ú^™JN›™]ÈL‹\ËœÙ\\˜]Ü]œÙ\\˜]Ü‹\ËœÙ\\˜]Üž]\Ï]œÙ\\˜]ÜÝ\Ë™[˜ÛÙ\‹™[˜ÛÙJœÙ\\˜]ÜŠN›ÚYYÙ]\Ñ[™Y

^Ü™]\›ˆ\ËœÝ]OOOY‘S‘Q]Üš]J
^Ýž^Û]ŽÚYŠ[œÝ[˜Ù[ÙˆZ[\œ˜^J[]Ù[ÙHYŠ\[ÙˆOHœÝš[™ÈŠ[]\Ë™[˜ÛÙ\‹™[˜ÛÙJ
NÙ[ÙHYŠ\œ˜^Kš\Ð\œ˜^J
J[UZ[\œ˜^K™œ›ÛJ
NÙ[ÙHYŠ\œ˜^PY™™\‹š\ÕšY]Ê
J[[™]ÈZ[\œ˜^J˜Y™™\‹˜ž]SÙ™œÙ]˜ž]S[™Ý
NÙ[ÙH›ÝÈ™]È\Q\œ›ÜŠ•[™^XÝY\KˆHÜš]X[˜Ý[ÛˆÛ›HXØÙ\È\œ˜^\Ë\Y\œ˜^\È[™Ýš[™ÜËˆŠNÙ›ÜŠ]LÜ‹›[™ÝÜŠÏLJ^ØÛÛœÝO[–Ü—NÜÝÚ]Ú
\ËœÝ]J^ØØ\ÙH“ÓWÓÔ—ÔÕT•šYŠ[œÝ[˜Ù[ÙˆZ[\œ˜^I‰šOOOLŒÎJ^Ý\Ë˜›ÛOVÌŒÎKNËNLWK\Ë˜›ÛR[™^
ÏLK\ËœÝ]OY“ÓNØÛÛ[Y_ZYŠ[œÝ[˜Ù[ÙˆZ[M\œ˜^J^ÚYŠOOOLM
^Ý\Ë˜›ÛOVÌMMWK\Ë˜›ÛR[™^
ÏLK\ËœÝ]OY“ÓNØÛÛ[Y_ZYŠOOOLMJ^Ý\Ë˜›ÛOVÌMKMK\Ë˜›ÛR[™^
ÏLK\ËœÝ]OY“ÓNØÛÛ[Y__ZYŠ[œÝ[˜Ù[ÙˆZ[Ì\œ˜^J^ÚYŠOOOL
^Ý\Ë˜›ÛOVÌMMWK\Ë˜›ÛR[™^
ÏLK\ËœÝ]OY“ÓNØÛÛ[Y_ZYŠOOOLMJ^Ý\Ë˜›ÛOVÌMKMK\Ë˜›ÛR[™^
ÏLK\ËœÝ]OY“ÓNØÛÛ[Y__XØ\ÙH”ÕT•šYŠ\Ë›Ù™œÙ]
ÏLK\ËœÙ\\˜]Üž]\É‰šOOO]\ËœÙ\\˜]Üž]\ÖÌJ^ÚYŠ\ËœÙ\\˜]Üž]\Ë›[™ÝOOLJ^Ý\ËœÝ]OY”ÕT•\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹”ÑTTUÔ‹˜[YN\ËœÙ\\˜]Ü‹Ù™œÙ]\Ë›Ù™œÙ]
Ý\ËœÙ\\˜]Üž]\Ë›[™ÝL_JNØÛÛ[Y_]\ËœÝ]OY”ÑTTUÔŽØÛÛ[Y_ZYŠOOOQ]”ÔPÑ_OOOQ]“‘UÓS‘_OOOQ]ÐT”’PQÑWÔ‘UT“ŸOOOQ]•PŠXÛÛ[YNÚYŠOOOQ]“Q•ÐÕT“WÐ”PÒÑU
^Ý\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹“Q•Ð”PÑK˜[YNˆžÈ‹Ù™œÙ]\Ë›Ù™œÙ]JNØÛÛ[Y_ZYŠOOOQ]”’QÒÐÕT“WÐ”PÒÑU
^Ý\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹”’QÒÐ”PÑK˜[YNˆŸH‹Ù™œÙ]\Ë›Ù™œÙ]JNØÛÛ[Y_ZYŠOOOQ]“Q•ÔÔUPT‘WÐ”PÒÑU
^Ý\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹“Q•Ð”PÒÑU˜[YNˆ–È‹Ù™œÙ]\Ë›Ù™œÙ]JNØÛÛ[Y_ZYŠOOOQ]”’QÒÔÔUPT‘WÐ”PÒÑU
^Ý\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹”’QÒÐ”PÒÑU˜[YNˆ—H‹Ù™œÙ]\Ë›Ù™œÙ]JNØÛÛ[Y_ZYŠOOOQ]ÓÓÓŠ^Ý\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹ÓÓÓ‹˜[YNˆŽˆ‹Ù™œÙ]\Ë›Ù™œÙ]JNØÛÛ[Y_ZYŠOOOQ]ÓÓSPJ^Ý\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹ÓÓSPK˜[YNˆ‹‹Ù™œÙ]\Ë›Ù™œÙ]JNØÛÛ[Y_ZYŠOOOQ]“US—ÔÓPSÓUT—Õ
^Ý\ËœÝ]OY••QLNØÛÛ[Y_ZYŠOOOQ]“US—ÔÓPSÓUT—ÑŠ^Ý\ËœÝ]OY‘SÑLNØÛÛ[Y_ZYŠOOOQ]“US—ÔÓPSÓUT—ÓŠ^Ý\ËœÝ]OY“•SNØÛÛ[Y_ZYŠOOOQ]”USÕUSÓ—ÓPT’Ê^Ý\Ë˜Y™™\™YÝš[™Ëœ™\Ù]

K\Ë™\ØØ\YÚ\œÐž]S[™ÝL\ËœÝ]OY”Õ’S‘×ÑQUSØÛÛ[Y_ZYŠOQ]‘QÒUÓÓ‘I‰šOQ]‘QÒUÓ’S‘J^Ý\Ë˜Y™™\™Y[X™\‹œ™\Ù]

K\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÒS’UPSÓ“Ó—Ö‘T“ÎØÛÛ[Y_ZYŠOOOQ]‘QÒUÖ‘T“Ê^Ý\Ë˜Y™™\™Y[X™\‹œ™\Ù]

K\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÒS’UPSÖ‘T“ÎØÛÛ[Y_ZYŠOOOQ]’TS—ÓRS•TÊ^Ý\Ë˜Y™™\™Y[X™\‹œ™\Ù]

K\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÒS’UPSÓRS•TÎØÛÛ[Y_Xœ™XZÎØØ\ÙH”Õ’S‘×ÑQUSšYŠOOOQ]”USÕUSÓ—ÓPT’Ê^ØÛÛœÝÏ]\Ë˜Y™™\™YÝš[™ËÔÝš[™Ê
NÝ\ËœÝ]OY”ÕT•\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹”Õ’S‘Ë˜[YN›ËÙ™œÙ]\Ë›Ù™œÙ]JK\Ë›Ù™œÙ]
Ï]\Ë™\ØØ\YÚ\œÐž]S[™Ý
Ý\Ë˜Y™™\™YÝš[™Ë˜ž]S[™Ý
ÌNØÛÛ[Y_ZYŠOOOQ]”‘U‘T”ÑWÔÓÓQTÊ^Ý\ËœÝ]OY”Õ’S‘×ÐQ•T—ÐPÒÔÓTÒØÛÛ[Y_ZYŠOLLŽ
^ÚYŠOLNM	‰šOLŒŒÏÝ\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙOLŽšOLŒÎOÝ\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙOLÎ\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙOM\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙO[‹›[™Ý\Š^Ý\Ë˜Y™™\™YÝš[™Ë˜\[™YŠ‹‹ŠÝ\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙJKŠÏ]\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙKLNØÛÛ[Y_]\Ë˜ž]\×Ü™[XZ[š[™Ï\ŠÝ\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙK[‹›[™Ý\Ë˜Ú\—ÜÜ]ØY™™\‹œÙ]
‹œÝX˜\œ˜^JŠJK[‹›[™ÝLK\ËœÝ]OY”Õ’S‘×ÒSÓÓTUWÐÒTŽØÛÛ[Y_ZYŠOQ]”ÔPÑJ^Ý\Ë˜Y™™\™YÝš[™Ë˜\[™Ú\ŠJNØÛÛ[Y_Xœ™XZÎØØ\ÙH”Õ’S‘×ÒSÓÓTUWÐÒTŽ\Ë˜Ú\—ÜÜ]ØY™™\‹œÙ]
‹œÝX˜\œ˜^J‹ŠÝ\Ë˜ž]\×Ü™[XZ[š[™ÊK\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙK]\Ë˜ž]\×Ü™[XZ[š[™ÊK\Ë˜Y™™\™YÝš[™Ë˜\[™YŠ\Ë˜Ú\—ÜÜ]ØY™™\‹\Ë˜ž]\×Ú[—ÜÙ\]Y[˜ÙJK]\Ë˜ž]\×Ü™[XZ[š[™ËLK\ËœÝ]OY”Õ’S‘×ÑQUSØÛÛ[YNØØ\ÙH”Õ’S‘×ÐQ•T—ÐPÒÔÓTÒ˜ÛÛœÝÏZ™]ÚWNÚYŠÊ^Ý\Ë˜Y™™\™YÝš[™Ë˜\[™Ú\ŠÊK\Ë™\ØØ\YÚ\œÐž]S[™Ý
ÏLK\ËœÝ]OY”Õ’S‘×ÑQUSØÛÛ[Y_ZYŠOOOQ]“US—ÔÓPSÓUT—ÕJ^Ý\Ë[šXÛÙOHˆ‹\ËœÝ]OY”Õ’S‘×ÕS’PÓÑWÑQÒUÌNØÛÛ[Y_Xœ™XZÎØØ\ÙH”Õ’S‘×ÕS’PÓÑWÑQÒUÌN˜Ø\ÙH”Õ’S‘×ÕS’PÓÑWÑQÒUÌŽ˜Ø\ÙH”Õ’S‘×ÕS’PÓÑWÑQÒUÌÎšYŠOQ]‘QÒUÖ‘T“É‰šOQ]‘QÒUÓ’S‘_OQ]“US—ÐÐTUSÓUT—ÐI‰šOQ]“US—ÐÐTUSÓUT—ÑŸOQ]“US—ÔÓPSÓUT—ÐI‰šOQ]“US—ÔÓPSÓUT—ÑŠ^Ý\Ë[šXÛÙJÏTÝš[™Ë™œ›ÛPÚ\ÛÙJJK\ËœÝ]JÏLNØÛÛ[Y_Xœ™XZÎØØ\ÙH”Õ’S‘×ÕS’PÓÑWÑQÒUÍšYŠOQ]‘QÒUÖ‘T“É‰šOQ]‘QÒUÓ’S‘_OQ]“US—ÐÐTUSÓUT—ÐI‰šOQ]“US—ÐÐTUSÓUT—ÑŸOQ]“US—ÔÓPSÓUT—ÐI‰šOQ]“US—ÔÓPSÓUT—ÑŠ^ØÛÛœÝÏ\\œÙR[
\Ë[šXÛÙJÔÝš[™Ë™œ›ÛPÚ\ÛÙJJKMŠNÛ]ÎÚYŠ\ËšYÚÝ\œ›ÙØ]OOO]›ÚY
ZYŠÏMMLŽM‰‰›ÏMMŒÌNJ^Ý\ËšYÚÝ\œ›ÙØ]O[Ë\ËœÝ]OY”Õ’S‘×ÑQUSØÛÛ[Y_Y[ÙHÏTÝš[™Ë™œ›ÛPÚ\ÛÙJÊNÙ[ÙHÏMMŒÌŒ	‰›ÏMMÌÍÏØÏTÝš[™Ë™œ›ÛPÚ\ÛÙJ\ËšYÚÝ\œ›ÙØ]KÊN˜ÏTÝš[™Ë™œ›ÛPÚ\ÛÙJ\ËšYÚÝ\œ›ÙØ]JK\ËšYÚÝ\œ›ÙØ]O]›ÚYØÛÛœÝO]\Ë™[˜ÛÙ\‹™[˜ÛÙJÊNÝ\Ë˜Y™™\™YÝš[™Ë˜\[™YŠJK\Ë™\ØØ\YÚ\œÐž]S[™Ý
ÏM‹]K˜ž]S[™Ý\ËœÝ]OY”Õ’S‘×ÑQUSØÛÛ[Y_Xœ™XZÎØØ\ÙH“•SP‘T—ÐQ•T—ÒS’UPSÓRS•TÎšYŠOOOQ]‘QÒUÖ‘T“Ê^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÒS’UPSÖ‘T“ÎØÛÛ[Y_ZYŠOQ]‘QÒUÓÓ‘I‰šOQ]‘QÒUÓ’S‘J^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÒS’UPSÓ“Ó—Ö‘T“ÎØÛÛ[Y_Xœ™XZÎØØ\ÙH“•SP‘T—ÐQ•T—ÒS’UPSÖ‘T“ÎšYŠOOOQ]‘•SÔÕÔ
^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—Ñ•SÔÕÔØÛÛ[Y_ZYŠOOOQ]“US—ÔÓPSÓUT—Ñ_OOOQ]“US—ÐÐTUSÓUT—ÑJ^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÑNØÛÛ[Y_\‹OLK\ËœÝ]OY”ÕT•\Ë™[Z][X™\Š
NØÛÛ[YNØØ\ÙH“•SP‘T—ÐQ•T—ÒS’UPSÓ“Ó—Ö‘T“ÎšYŠOQ]‘QÒUÖ‘T“É‰šOQ]‘QÒUÓ’S‘J^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJNØÛÛ[Y_ZYŠOOOQ]‘•SÔÕÔ
^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—Ñ•SÔÕÔØÛÛ[Y_ZYŠOOOQ]“US—ÔÓPSÓUT—Ñ_OOOQ]“US—ÐÐTUSÓUT—ÑJ^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÑNØÛÛ[Y_\‹OLK\ËœÝ]OY”ÕT•\Ë™[Z][X™\Š
NØÛÛ[YNØØ\ÙH“•SP‘T—ÐQ•T—Ñ•SÔÕÔšYŠOQ]‘QÒUÖ‘T“É‰šOQ]‘QÒUÓ’S‘J^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÑPÒSPSØÛÛ[Y_Xœ™XZÎØØ\ÙH“•SP‘T—ÐQ•T—ÑPÒSPSšYŠOQ]‘QÒUÖ‘T“É‰šOQ]‘QÒUÓ’S‘J^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJNØÛÛ[Y_ZYŠOOOQ]“US—ÔÓPSÓUT—Ñ_OOOQ]“US—ÐÐTUSÓUT—ÑJ^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÑNØÛÛ[Y_\‹OLK\ËœÝ]OY”ÕT•\Ë™[Z][X™\Š
NØÛÛ[YNØØ\ÙH“•SP‘T—ÐQ•T—ÑNšYŠOOOQ]”T×ÔÒQÓŸOOOQ]’TS—ÓRS•TÊ^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÑWÐS‘ÔÒQÓŽØÛÛ[Y_XØ\ÙH“•SP‘T—ÐQ•T—ÑWÐS‘ÔÒQÓŽšYŠOQ]‘QÒUÖ‘T“É‰šOQ]‘QÒUÓ’S‘J^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJK\ËœÝ]OY“•SP‘T—ÐQ•T—ÑWÐS‘ÑQÒUØÛÛ[Y_Xœ™XZÎØØ\ÙH“•SP‘T—ÐQ•T—ÑWÐS‘ÑQÒUšYŠOQ]‘QÒUÖ‘T“É‰šOQ]‘QÒUÓ’S‘J^Ý\Ë˜Y™™\™Y[X™\‹˜\[™Ú\ŠJNØÛÛ[Y_\‹OLK\ËœÝ]OY”ÕT•\Ë™[Z][X™\Š
NØÛÛ[YNØØ\ÙH••QLNšYŠOOOQ]“US—ÔÓPSÓUT—ÔŠ^Ý\ËœÝ]OY••QLŽØÛÛ[Y_Xœ™XZÎØØ\ÙH••QLŽšYŠOOOQ]“US—ÔÓPSÓUT—ÕJ^Ý\ËœÝ]OY••QLÎØÛÛ[Y_Xœ™XZÎØØ\ÙH••QLÎšYŠOOOQ]“US—ÔÓPSÓUT—ÑJ^Ý\ËœÝ]OY”ÕT•\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹••QK˜[YNˆLÙ™œÙ]\Ë›Ù™œÙ]JK\Ë›Ù™œÙ]
ÏLÎØÛÛ[Y_Xœ™XZÎØØ\ÙH‘SÑLNšYŠOOOQ]“US—ÔÓPSÓUT—ÐJ^Ý\ËœÝ]OY‘SÑLŽØÛÛ[Y_Xœ™XZÎØØ\ÙH‘SÑLŽšYŠOOOQ]“US—ÔÓPSÓUT—Ó
^Ý\ËœÝ]OY‘SÑLÎØÛÛ[Y_Xœ™XZÎØØ\ÙH‘SÑLÎšYŠOOOQ]“US—ÔÓPSÓUT—ÔÊ^Ý\ËœÝ]OY‘SÑMØÛÛ[Y_Xœ™XZÎØØ\ÙH‘SÑMšYŠOOOQ]“US—ÔÓPSÓUT—ÑJ^Ý\ËœÝ]OY”ÕT•\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹‘SÑK˜[YNˆLKÙ™œÙ]\Ë›Ù™œÙ]JK\Ë›Ù™œÙ]
ÏMØÛÛ[Y_Xœ™XZÎØØ\ÙH“•SNšYŠOOOQ]“US—ÔÓPSÓUT—ÕJ^Ý\ËœÝ]OY“•SŽØÛÛ[Y_Xœ™XZÎØØ\ÙH“•SŽšYŠOOOQ]“US—ÔÓPSÓUT—Ó
^Ý\ËœÝ]OY“•SÎØÛÛ[Y_Xœ™XZÎØØ\ÙH“•SÎšYŠOOOQ]“US—ÔÓPSÓUT—Ó
^Ý\ËœÝ]OY”ÕT•\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹“•S˜[YN›[Ù™œÙ]\Ë›Ù™œÙ]JK\Ë›Ù™œÙ]
ÏLÎØÛÛ[Y_Xœ™XZÎØØ\ÙH”ÑTTUÔŽšYŠ\ËœÙ\\˜]Ü’[™^
ÏLK]\ËœÙ\\˜]Üž]\ßHOO]\ËœÙ\\˜]Üž]\ÖÝ\ËœÙ\\˜]Ü’[™^JXœ™XZÎÝ\ËœÙ\\˜]Ü’[™^OO]\ËœÙ\\˜]Üž]\Ë›[™ÝLI‰Š\ËœÝ]OY”ÕT•\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹”ÑTTUÔ‹˜[YN\ËœÙ\\˜]Ü‹Ù™œÙ]\Ë›Ù™œÙ]
Ý\ËœÙ\\˜]Ü’[™^JK\ËœÙ\\˜]Ü’[™^L
NØÛÛ[YNØØ\ÙH“ÓNšYŠOOO]\Ë˜›ÛVÝ\Ë˜›ÛR[™^J^ÚYŠ\Ë˜›ÛR[™^OO]\Ë˜›ÛK›[™ÝLJ^Ý\ËœÝ]OY”ÕT•\Ë˜›ÛO]›ÚY\Ë˜›ÛR[™^LØÛÛ[Y_]\Ë˜›ÛR[™^
ÏLNØÛÛ[Y_Xœ™XZÎØØ\ÙH‘S‘QšYŠOOOQ]”ÔPÑ_OOOQ]“‘UÓS‘_OOOQ]ÐT”’PQÑWÔ‘UT“ŸOOOQ]•PŠXÛÛ[Y_]›ÝÈ™]È‘J[™^XÝY‰ÔÝš[™Ë™œ›ÛPÚ\ÛÙJJ_Hˆ]ÜÚ][Ûˆ‰ÜŸHˆ[ˆÝ]H	ÜJ\ËœÝ]J_X
_ZYŠ\Ë™[Z]\X[ÚÙ[œÊ\ÝÚ]Ú
\ËœÝ]J^ØØ\ÙH••QLN˜Ø\ÙH••QLŽ˜Ø\ÙH••QLÎ\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹••QK˜[YNˆLÙ™œÙ]\Ë›Ù™œÙ]\X[ˆLJNØœ™XZÎØØ\ÙH‘SÑLN˜Ø\ÙH‘SÑLŽ˜Ø\ÙH‘SÑLÎ˜Ø\ÙH‘SÑM\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹‘SÑK˜[YNˆLKÙ™œÙ]\Ë›Ù™œÙ]\X[ˆLJNØœ™XZÎØØ\ÙH“•SN˜Ø\ÙH“•SŽ˜Ø\ÙH“•SÎ\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹“•S˜[YN›[Ù™œÙ]\Ë›Ù™œÙ]\X[ˆLJNØœ™XZÎØØ\ÙH”Õ’S‘×ÑQUSžØÛÛœÝ]\Ë˜Y™™\™YÝš[™ËÔÝš[™Ê
NÝ\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹”Õ’S‘Ë˜[YNœ‹Ù™œÙ]\Ë›Ù™œÙ]\X[ˆLJNØœ™XZßXØ\ÙH“•SP‘T—ÐQ•T—ÒS’UPSÖ‘T“Î˜Ø\ÙH“•SP‘T—ÐQ•T—ÒS’UPSÓ“Ó—Ö‘T“Î˜Ø\ÙH“•SP‘T—ÐQ•T—ÑPÒSPS˜Ø\ÙH“•SP‘T—ÐQ•T—ÑWÐS‘ÑQÒUž^Ý\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹“•SP‘T‹˜[YN\Ëœ\œÙS[X™\Š\Ë˜Y™™\™Y[X™\‹ÔÝš[™Ê
JKÙ™œÙ]\Ë›Ù™œÙ]\X[ˆLJ_XØ]Úß__XØ]Ú
Š^Ý\Ë™\œ›ÜŠŠ__Y[Z][X™\Š
^Ý\Ë›Û•ÚÙ[ŠÝÚÙ[Ž›‹“•SP‘T‹˜[YN\Ëœ\œÙS[X™\Š\Ë˜Y™™\™Y[X™\‹ÔÝš[™Ê
JKÙ™œÙ]\Ë›Ù™œÙ]JK\Ë›Ù™œÙ]
Ï]\Ë˜Y™™\™Y[X™\‹˜ž]S[™ÝL_\\œÙS[X™\Š
^Ü™]\›ˆ[X™\Š
_Y\œ›ÜŠ
^Ý\ËœÝ]HOOY‘S‘Q	‰Š\ËœÝ]OY‘T”“ÔŠK\Ë›Û‘\œ›ÜŠ
_Y[™

^ÜÝÚ]Ú
\ËœÝ]J^ØØ\ÙH“•SP‘T—ÐQ•T—ÒS’UPSÖ‘T“Î˜Ø\ÙH“•SP‘T—ÐQ•T—ÒS’UPSÓ“Ó—Ö‘T“Î˜Ø\ÙH“•SP‘T—ÐQ•T—ÑPÒSPS˜Ø\ÙH“•SP‘T—ÐQ•T—ÑWÐS‘ÑQÒU\ËœÝ]OY‘S‘Q\Ë™[Z][X™\Š
K\Ë›Û‘[™

NØœ™XZÎØØ\ÙH“ÓWÓÔ—ÔÕT•˜Ø\ÙH”ÕT•˜Ø\ÙH‘T”“ÔŽ˜Ø\ÙH”ÑTTUÔŽ\ËœÝ]OY‘S‘Q\Ë›Û‘[™

NØœ™XZÎÙY˜][\Ë™\œ›ÜŠ™]È‘JÚÙ[š^™\ˆ[™Y[ˆHZYHÙˆHÚÙ[ˆ
Ý]Nˆ	ÜJ\ËœÝ]J_JKˆZ]\ˆ›Ý[H]HØ\È™XÙZ]™YÜˆH]HØ\È[˜[Y˜
J__[Û•ÚÙ[Š
^Ý›ÝÈ™]È‘JØ[‰Ý[Z]ÚÙ[œÈ™Y›Ü™HH›Û•ÚÙ[ˆˆØ[˜XÚÈ\È™Y[ˆÙ]\˜
_[Û‘\œ›ÜŠ
^Ý›ÝÈ[Û‘[™

^ß_NØJK•ÚÙ[š^™\ˆŠNÛ]UNÝ˜\ˆ\ÎÊ[˜Ý[ÛŠJ^ÙVÙK“Ð’‘PÕLOH“Ð’‘PÕ‹VÙKT”VOLWOHT”VHŸJJ\ß
\Ï^ßJJNÝ˜\ˆŽÊ[˜Ý[ÛŠJ^ÙVÙK•SQOLOH•SQH‹VÙK’ÑVOLWOH’ÑVH‹VÙKÓÓÓL—OHÓÓÓˆ‹VÙKÓÓSPOL×OHÓÓSPH‹VÙK‘S‘QMOH‘S‘Q‹VÙK‘T”“ÔMWOH‘T”“Ôˆ‹VÙK”ÑTTUÔM—OH”ÑTTUÔˆŸJJŸ
^ßJJNÙ[˜Ý[Ûˆ]JJ^Ü™]\›–È•SQH‹’ÑVH‹ÓÓÓˆ‹ÓÓSPH‹‘S‘Q‹‘T”“Ôˆ‹”ÑTTUÔˆ—VÙW_XJ]K•ÚÙ[”\œÙ\”Ý]UÔÝš[™ÈŠNØÛÛœÝ™]^Ü]Î›ÚYÙY\ÝXÚÎˆLÙ\\˜]ÜŽ›ÚY[Z]\X[˜[Y\ÎˆL_KŒXÛ\ÜÈŒˆ^[™È\œ›ÜžØÛÛœÝXÝÜŠ
^ÜÝ\\Š
KØš™XÝœÙ]›ÝÝ\SÙŠ\ËŒ‹œ›ÝÝ\J__NØJŒ‹•ÚÙ[”\œÙ\‘\œ›ÜˆŠNÛ]ØQŒŽØÛÛœÝÜOXÛ\ÜÈÜ^ØÛÛœÝXÝÜŠ
^Ý\ËœÝ]OR‹•SQK\Ë›[ÙO]›ÚY\ËšÙ^O]›ÚY\Ë˜[YO]›ÚY\ËœÝXÚÏV×KSØš™XÝ˜\ÜÚYÛŠØš™XÝ˜\ÜÚYÛŠßK™]
K
Kœ]É‰Š\Ëœ]Ï]œ]Ë›X\
OžÚYŠOO]›ÚYOOH‰
ˆŠ\™]\›ŽÚYŠ[‹œÝ\ÕÚ]
‰ŠJ]›ÝÈ™]ÈØŠ[˜[YÙ[XÝÜˆ‰ÛŸH‹ˆÚÝ[Ý\Ú]‰‹˜
NØÛÛœÝ[‹œÜ]
‹ˆŠKœÛXÙJJNÚYŠ‹š[˜ÛY\ÊˆŠJ]›ÝÈ™]ÈØŠ[˜[YÙ[XÝÜˆ‰ÛŸH‹ˆ‹‹ˆˆÞ[^›ÝÝ\ÜY˜
NÜ™]\›ˆŸJJK\ËšÙY\ÝXÚÏ]šÙY\ÝXÚßLK\ËœÙ\\˜]Ü]œÙ\\˜]Ü‹™[Z]\X[˜[Y\ß
\Ë™[Z]\X[J
OOžßJ_\ÚÝ[[Z]

^Ü™]\›ˆ\Ëœ]ÏÝ\Ëœ]ËœÛÛYJOžÝ˜\ˆŽÚYŠOO]›ÚY
\™]\›ˆLÚYŠ›[™ÝOO]\ËœÝXÚË›[™Ý
\™]\›ˆLNÙ›ÜŠ]OLÚO›[™ÝLNÚJÊÊ^ØÛÛœÝÏ]ÚWKÏ]\ËœÝXÚÖÚJÌWKšÙ^NÚYŠÈOOHŠˆ‰‰œÈOO[ÏËÔÝš[™Ê
J\™]\›ˆL_XÛÛœÝ]Ý›[™ÝLWNÜ™]\›ˆOOHŠˆÈLœOOJ
]\ËšÙ^JOOO[[OO]›ÚYÝ›ÚY›‹ÔÝš[™Ê
J_JNˆL\\Ú

^Ý\ËœÝXÚËœ\Ú
ÚÙ^N\ËšÙ^K˜[YN\Ë˜[YK[ÙN\Ë›[ÙK[Z]\ËœÚÝ[[Z]

_J_\Ü

^ØÛÛœÝ]\Ë˜[YNÛ]ŽÊÚÙ^N\ËšÙ^K˜[YN\Ë˜[YK[ÙN\Ë›[ÙK[Z]›ŸO]\ËœÝXÚËœÜ

JK\ËœÝ]O]\Ë›[ÙHOO]›ÚYÒ‹ÓÓSPN’‹•SQK\Ë™[Z]
Š_Y[Z]
Š^È]\ËšÙY\ÝXÚÉ‰\Ë˜[YI‰\ËœÝXÚË™]™\žJOˆ\‹™[Z]
I‰™[]H\Ë˜[YVÝ\ËšÙ^WK‰‰\Ë›Û•˜[YJÝ˜[YNÙ^N\ËšÙ^K\™[\Ë˜[YKÝXÚÎ\ËœÝXÚßJK\ËœÝXÚË›[™ÝOOL	‰Š\ËœÙ\\˜]ÜÝ\ËœÝ]OR‹”ÑTTUÔŽ\ËœÙ\\˜]ÜOO]›ÚY	‰\Ë™[™

J_Y[Z]\X[

^ÚYŠ\ËœÚÝ[[Z]

J^ÚYŠ\ËœÝ]OOOR‹’ÑVJ^Ý\Ë›Û•˜[YJÝ˜[YN›ÚYÙ^N\™[\Ë˜[YKÝXÚÎ\ËœÝXÚË\X[ˆLJNÜ™]\›Ÿ]\Ë›Û•˜[YJÝ˜[YNÙ^N\ËšÙ^K\™[\Ë˜[YKÝXÚÎ\ËœÝXÚË\X[ˆLJ__YÙ]\Ñ[™Y

^Ü™]\›ˆ\ËœÝ]OOOR‹‘S‘Q]Üš]JÝÚÙ[Ž˜[YN›‹\X[œŸJ^Ýž^ÚYŠŠ^Ý\Ë™[Z]\X[
ŠNÜ™]\›ŸZYŠ\ËœÝ]OOOR‹•SQJ^ÚYŠOO[‹”Õ’S‘ßOO[‹“•SP‘TŸOO[‹••Q_OO[‹‘SÑ_OO[‹“•S
^Ý\Ë›[ÙOOO\\Ë“Ð’‘PÕÊ\Ë˜[YVÝ\ËšÙ^WO[‹\ËœÝ]OR‹ÓÓSPJN\Ë›[ÙOOO\\ËT”VI‰Š\Ë˜[YKœ\Ú
ŠK\ËœÝ]OR‹ÓÓSPJK\Ë™[Z]
‹\ËœÚÝ[[Z]

JNÜ™]\›ŸZYŠOO[‹“Q•Ð”PÑJ^ÚYŠ\Ëœ\Ú

K\Ë›[ÙOOO\\Ë“Ð’‘PÕ
]\Ë˜[YO]\Ë˜[YVÝ\ËšÙ^WO^ßNÙ[ÙHYŠ\Ë›[ÙOOO\\ËT”VJ^ØÛÛœÝO^ßNÝ\Ë˜[YKœ\Ú
JK\Ë˜[YOZ_Y[ÙH\Ë˜[YO^ßNÝ\Ë›[ÙO\\Ë“Ð’‘PÕ\ËœÝ]OR‹’ÑVK\ËšÙ^O]›ÚY\Ë™[Z]\X[

NÜ™]\›ŸZYŠOO[‹“Q•Ð”PÒÑU
^ÚYŠ\Ëœ\Ú

K\Ë›[ÙOOO\\Ë“Ð’‘PÕ
]\Ë˜[YO]\Ë˜[YVÝ\ËšÙ^WOV×NÙ[ÙHYŠ\Ë›[ÙOOO\\ËT”VJ^ØÛÛœÝOV×NÝ\Ë˜[YKœ\Ú
JK\Ë˜[YOZ_Y[ÙH\Ë˜[YOV×NÝ\Ë›[ÙO\\ËT”VK\ËœÝ]OR‹•SQK\ËšÙ^OL\Ë™[Z]\X[

NÜ™]\›ŸZYŠ\Ë›[ÙOOO\\ËT”VI‰OO[‹”’QÒÐ”PÒÑU	‰\Ë˜[YK›[™ÝOOL
^Ý\ËœÜ

NÜ™]\›Ÿ_ZYŠ\ËœÝ]OOOR‹’ÑVJ^ÚYŠOO[‹”Õ’S‘Ê^Ý\ËšÙ^O[‹\ËœÝ]OR‹ÓÓÓ‹\Ë™[Z]\X[

NÜ™]\›ŸZYŠOO[‹”’QÒÐ”PÑI‰“Øš™XÝšÙ^\Ê\Ë˜[YJK›[™ÝOOL
^Ý\ËœÜ

NÜ™]\›Ÿ_ZYŠ\ËœÝ]OOOR‹ÓÓÓ‰‰OO[‹ÓÓÓŠ^Ý\ËœÝ]OR‹•SQNÜ™]\›ŸZYŠ\ËœÝ]OOOR‹ÓÓSPJ^ÚYŠOO[‹ÓÓSPJ^ÚYŠ\Ë›[ÙOOO\\ËT”VJ^Ý\ËœÝ]OR‹•SQK\ËšÙ^JÏLNÜ™]\›ŸZYŠ\Ë›[ÙOOO\\Ë“Ð’‘PÕ
^Ý\ËœÝ]OR‹’ÑVNÜ™]\›Ÿ_ZYŠOO[‹”’QÒÐ”PÑI‰\Ë›[ÙOOO\\Ë“Ð’‘PÕOO[‹”’QÒÐ”PÒÑU	‰\Ë›[ÙOOO\\ËT”VJ^Ý\ËœÜ

NÜ™]\›Ÿ_ZYŠ\ËœÝ]OOOR‹”ÑTTUÔ‰‰OO[‹”ÑTTUÔ‰‰›OO]\ËœÙ\\˜]ÜŠ^Ý\ËœÝ]OR‹•SQNÜ™]\›ŸZYŠOO[‹”ÑTTUÔ‰‰\ËœÝ]HOOR‹”ÑTTUÔ‰‰\œ˜^K™œ›ÛJŠK›X\
OOšK˜Ú\ÛÙP]

JK™]™\žJOOšOOOQ]”ÔPÑ_OOOQ]“‘UÓS‘_OOOQ]ÐT”’PQÑWÔ‘UT“ŸOOOQ]•PŠJ\™]\›ŽÝ›ÝÈ™]ÈØŠ[™^XÝY	Û–Ý_H
	Ò”ÓÓ‹œÝš[™ÚYžJŠ_JH[ˆÝ]H	Û]J\ËœÝ]J_X
_XØ]Ú
J^Ý\Ë™\œ›ÜŠJ__Y\œ›ÜŠ
^Ý\ËœÝ]HOOR‹‘S‘Q	‰Š\ËœÝ]OR‹‘T”“ÔŠK\Ë›Û‘\œ›ÜŠ
_Y[™

^Ý\ËœÝ]HOOR‹•SQI‰\ËœÝ]HOOR‹”ÑTTUÔŸ\ËœÝXÚË›[™ÝŒÝ\Ë™\œ›ÜŠ™]È\œ›ÜŠ\œÙ\ˆ[™Y[ˆZY\\œÚ[™È
Ý]Nˆ	Û]J\ËœÝ]J_JKˆZ]\ˆ›Ý[H]HØ\È™XÙZ]™YÜˆH]HØ\È[˜[Y˜
JNŠ\ËœÝ]OR‹‘S‘Q\Ë›Û‘[™

J_[Û•˜[YJ
^Ý›ÝÈ™]ÈØŠØ[‰Ý[Z]]H™Y›Ü™HH›Û•˜[YHˆØ[˜XÚÈ\È™Y[ˆÙ]\˜
_[Û‘\œ›ÜŠ
^Ý›ÝÈ[Û‘[™

^ß_NØJÜK•ÚÙ[”\œÙ\ˆŠNÛ]ÌZÜNØÛÛœÝœOXÛ\ÜÈœ^ØÛÛœÝXÝÜŠ^ßJ^Ý\ËÚÙ[š^™\[™]ÈŠ
K\ËÚÙ[”\œÙ\[™]ÈÌŠ
K\ËÚÙ[š^™\‹›Û•ÚÙ[]\ËÚÙ[”\œÙ\‹Üš]K˜š[™
\ËÚÙ[”\œÙ\ŠK\ËÚÙ[š^™\‹›Û‘[™J
OOžÝ\ËÚÙ[”\œÙ\‹š\Ñ[™Y\ËÚÙ[”\œÙ\‹™[™

_K\ËÚÙ[”\œÙ\‹›Û‘\œ›Ü]\ËÚÙ[š^™\‹™\œ›Ü‹˜š[™
\ËÚÙ[š^™\ŠK\ËÚÙ[”\œÙ\‹›Û‘[™J
OOžÝ\ËÚÙ[š^™\‹š\Ñ[™Y\ËÚÙ[š^™\‹™[™

__YÙ]\Ñ[™Y

^Ü™]\›ˆ\ËÚÙ[š^™\‹š\Ñ[™Y	‰\ËÚÙ[”\œÙ\‹š\Ñ[™Y]Üš]J
^Ý\ËÚÙ[š^™\‹Üš]J
_Y[™

^Ý\ËÚÙ[š^™\‹™[™

_\Ù]Û•ÚÙ[Š
^Ý\ËÚÙ[š^™\‹›Û•ÚÙ[[OžÝ
ŠK\ËÚÙ[”\œÙ\‹Üš]JŠ__\Ù]Û•˜[YJ
^Ý\ËÚÙ[”\œÙ\‹›Û•˜[YO]\Ù]Û‘\œ›ÜŠ
^Ý\ËÚÙ[š^™\‹›Û‘\œ›Ü]\Ù]Û‘[™

^Ý\ËÚÙ[”\œÙ\‹›Û‘[™J
OOžÝ\ËÚÙ[š^™\‹š\Ñ[™Y\ËÚÙ[š^™\‹™[™

K˜Ø[
\ËÚÙ[”\œÙ\Š___NØJœK’”ÓÓ”\œÙ\ˆŠNÛ]ÎSœNÙ[˜Ý[ÛˆÙÙJJ^ØÛÛœÝÝ˜[YNÙ^N›‹\™[œ‹ÝXÚÎšK\X[œßOYNÜ™]\›žÝ˜[YNÙ^N›‹\™[™ÝJŠKÝXÚÎ™ÝJJK\X[œß_XJÙÙK˜ÛÛ™T\œÙY[[Y[[™›ÈŠNÙ[˜Ý[ÛˆÝJJ^Ü™]\›ˆ\[ÙˆHOH›Øš™XÝŸ\œ˜^Kš\Ð\œ˜^JJI‰™K™š[\ŠO
K›[™ÝOOLÙN’”ÓÓ‹œ\œÙJ”ÓÓ‹œÝš[™ÚYžJJJ_XJÝK˜ÛÛ™HŠNØÛÛœÝÜOXÛ\ÜÈÜH^[™ÈÎØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë›Û•˜[YO[O\Ë˜ÛÛ›Û\‹™[œ]Y]YJÙÙJŠJK\Ë›Û‘\œ›Ü[O\Ë˜ÛÛ›Û\‹™\œ›ÜŠŠK\Ë›Û‘[™J
OO\Ë˜ÛÛ›Û\‹\›Z[˜]J
_\Ý\

^Ý\Ë˜ÛÛ›Û\]]˜[œÙ›Ü›J
^Ý\ËÜš]J
_Y›\Ú

^Ý\Ë™[™

__NØJÜK’”ÓÓ”\œÙ\•˜[œÙ›Ü›Y\ˆŠNÛ]ŽSÜNØÛÛœÝOXÛ\ÜÈH^[™È˜[œÙ›Ü›TÝ™X[^ØÛÛœÝXÝÜŠ‹Š^ØÛÛœÝO[™]ÈŽ

NÜÝ\\ŠK‹Š__NØJK’”ÓÓ”\œÙ\•˜[œÙ›Ü›TÝ™X[HŠNÛ]ÎQNØÛÛœÝ\OXÛ\ÜÈ\H^[™ÈžØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë›Û•ÚÙ[[O\Ë˜ÛÛ›Û\‹™[œ]Y]YJŠK\Ë›Û‘\œ›Ü[O\Ë˜ÛÛ›Û\‹™\œ›ÜŠŠK\Ë›Û‘[™J
OO\Ë˜ÛÛ›Û\‹\›Z[˜]J
_\Ý\

^Ý\Ë˜ÛÛ›Û\]]˜[œÙ›Ü›J
^Ý\ËÜš]J
_Y›\Ú

^Ý\Ë™[™

__NØJ\K•ÚÙ[š^™\•˜[œÙ›Ü›Y\ˆŠNÛ]R\NØÛÛœÝOXÛ\ÜÈH^[™È˜[œÙ›Ü›TÝ™X[^ØÛÛœÝXÝÜŠ‹Š^ØÛÛœÝO[™]È

NÜÝ\\ŠK‹Š__NØJK•ÚÙ[š^™\•˜[œÙ›Ü›TÝ™X[HŠNÛ]OTNØÛÛœÝ\OXÛ\ÜÈ\H^[™ÈÌžØÛÛœÝXÝÜŠ
^ÜÝ\\Š
K\Ë›Û•˜[YO[O\Ë˜ÛÛ›Û\‹™[œ]Y]YJÙÙJŠJK\Ë›Û‘\œ›Ü[O\Ë˜ÛÛ›Û\‹™\œ›ÜŠŠK\Ë›Û‘[™J
OO\Ë˜ÛÛ›Û\‹\›Z[˜]J
_\Ý\

^Ý\Ë˜ÛÛ›Û\]]˜[œÙ›Ü›J
^Ý\ËÜš]J
_Y›\Ú

^Ý\Ë™[™

__NØJ\K•ÚÙ[”\œÙ\•˜[œÙ›Ü›Y\ˆŠNÛ]NS\NØÛÛœÝOXÛ\ÜÈH^[™È˜[œÙ›Ü›TÝ™X[^ØÛÛœÝXÝÜŠ‹Š^ØÛÛœÝO[™]ÈN

NÜÝ\\ŠK‹Š__NØJK•ÚÙ[”\œÙ\•˜[œÙ›Ü›TÝ™X[HŠNÛ]]OSNØÛÛœÝYÙO^È˜\XØ][Û‹Ø[™™]ËZ[œÙ]Ž–È™^ˆ—K˜\XØ][Û‹Ø\[œÝ[\ˆŽ–È˜\[œÝ[\ˆ—K˜\XØ][Û‹Ø\^Ø\™HŽ–È˜]È—K˜\XØ][Û‹Ø\Ž–È˜\—K˜\XØ][Û‹Ø\[™HŽ–È˜\[™H—K˜\XØ][Û‹Ø]ÛJÞ[Ž–È˜]ÛH—K˜\XØ][Û‹Ø]ÛXØ]
Þ[Ž–È˜]ÛXØ]—K˜\XØ][Û‹Ø]ÛY[]Y
Þ[Ž–È˜]ÛY[]Y—K˜\XØ][Û‹Ø]Û\Ý˜ÊÞ[Ž–È˜]Û\Ý˜È—K˜\XØ][Û‹Ø]ØËYÙ
Þ[Ž–È™Ù—K˜\XØ][Û‹Ø]ØËZ[
Þ[Ž–Èš[—K˜\XØ][Û‹Ø]ØË\œØ]
Þ[Ž–ÈœœØ]—K˜\XØ][Û‹Ø]]ÛX][Û›[X[[
Þ[Ž–È˜[[—K˜\XØ][Û‹Ø]]ÛX][Û›[X[[
Þš\Ž–È˜[[—K˜\XØ][Û‹Ø™ØÈŽ–È˜™ØÈ—K˜\XØ][Û‹ØØ[[™\ŠÞ[Ž–ÈžÜÈ—K˜\XØ][Û‹ØØÞ[
Þ[Ž–È˜ØÞ[—K˜\XØ][Û‹ØÙž
Þ[Ž–È˜Ùž—K˜\XØ][Û‹ØÙZKXØ\Xš[]HŽ–È˜ÙZXH—K˜\XØ][Û‹ØÙZKXÛÛZ[™\ˆŽ–È˜ÙZXÈ—K˜\XØ][Û‹ØÙZKYÛXZ[ˆŽ–È˜ÙZY—K˜\XØ][Û‹ØÙZK[Øš™XÝŽ–È˜ÙZ[È—K˜\XØ][Û‹ØÙZK\]Y]YHŽ–È˜ÙZ\H—K˜\XØ][Û‹ØÜ
Þ[Ž–È˜Ü—K˜\XØ][Û‹ØÝK\ÙY[YHŽ–È˜ÝH—K˜\XØ][Û‹ØÝÛŽ–È˜ÝÛ—K˜\XØ][Û‹Ù\Ú
Þ[Ž–È›\—K˜\XØ][Û‹Ù\Ú\]Ú
Þ[Ž–È›\—K˜\XØ][Û‹Ù]›[Ý[
Þ[Ž–È™]›[Ý[—K˜\XØ][Û‹ÙXÛÛHŽ–È™ÛH—K˜\XØ][Û‹ÙØØ›ÛÚÊÞ[Ž–È™šÈ—K˜\XØ][Û‹ÙÜØÊÙ\ˆŽ–È™ÜØÈ—K˜\XØ][Û‹ÙÜØÊÞ[Ž–ÈžÜØÈ—K˜\XØ][Û‹ÙXÛX\ØÜš\Ž–È™XÛXH—K˜\XØ][Û‹Ù[[XJÞ[Ž–È™[[XH—K˜\XØ][Û‹Ù[[Ý[Û›[
Þ[Ž–È™[[Ý[Û›[—K˜\XØ][Û‹Ù\XŠÞš\Ž–È™\Xˆ—K˜\XØ][Û‹Ù^HŽ–È™^H—K˜\XØ][Û‹Ù^™\ÜÈŽ–È™^—K˜\XØ][Û‹Ù™ˆŽ–È™™ˆ—K˜\XØ][Û‹Ù™
Þ[Ž–È™™—K˜\XØ][Û‹Ù›Û]œˆŽ–Èœœˆ—K˜\XØ][Û‹ÙÙ[ÊÚœÛÛˆŽ–È™Ù[ÚœÛÛˆ—K˜\XØ][Û‹ÙÛ[
Þ[Ž–È™Û[—K˜\XØ][Û‹ÙÜ
Þ[Ž–È™Ü—K˜\XØ][Û‹ÙÞˆŽ–È™Þˆ—K˜\XØ][Û‹ÙÞš\Ž–È™Þˆ—K˜\XØ][Û‹ÚœÛÛˆŽ–ÈšœÛÛˆ—K˜\XØ][Û‹Ú\\œÝY[ÈŽ–ÈœÝÈ—K˜\XØ][Û‹Ú[šÛ[
Þ[Ž–Èš[šÈ‹š[šÛ[—K˜\XØ][Û‹Ú\š^Ž–Èš\š^—K˜\XØ][Û‹Ú]ÊÞ[Ž–Èš]È—K˜\XØ][Û‹Ú˜]˜KX\˜Ú]™HŽ–Èš˜\ˆ‹Ø\ˆ‹™X\ˆ—K˜\XØ][Û‹Ú˜]˜K\Ù\šX[^™Y[Øš™XÝŽ–ÈœÙ\ˆ—K˜\XØ][Û‹Ú˜]˜K]›HŽ–È˜Û\ÜÈ—K˜\XØ][Û‹Ú˜]˜\ØÜš\Ž–ÈŠšœÈ—K˜\XØ][Û‹ÚœÛÛˆŽ–ÈšœÛÛˆ‹›X\—K˜\XØ][Û‹ÚœÛÛHŽ–ÈšœÛÛH—K˜\XØ][Û‹ÚœÛÛ›[
ÚœÛÛˆŽ–ÈšœÛÛ›[—K˜\XØ][Û‹Û
ÚœÛÛˆŽ–ÈšœÛÛ›—K˜\XØ][Û‹ÛÜŠÞ[Ž–È›Üˆ—K˜\XØ][Û‹ÛÜÝ
Þ[Ž–È›ÜÝ[—K˜\XØ][Û‹ÛXXËXš[š^Ž–Èš^—K˜\XØ][Û‹ÛXXËXÛÛ\XÝ›ÈŽ–È˜Ü—K˜\XØ][Û‹ÛXYÊÞ[Ž–È›XYÈ—K˜\XØ][Û‹ÛX[šY™\Ý
ÚœÛÛˆŽ–ÈÙX›X[šY™\Ý—K˜\XØ][Û‹ÛX\˜ÈŽ–È›\˜È—K˜\XØ][Û‹ÛX\˜Þ[
Þ[Ž–È›\˜Þ—K˜\XØ][Û‹ÛX][X]XØHŽ–È›XH‹›˜ˆ‹›Xˆ—K˜\XØ][Û‹ÛX][
Þ[Ž–È›X][—K˜\XØ][Û‹ÛX›ÞŽ–È›X›Þ—K˜\XØ][Û‹ÛYYXK\ÛXÞKY]\Ù]
Þ[Ž–È›\ˆ—K˜\XØ][Û‹ÛYYX\Ù\™\˜ÛÛ›Û
Þ[Ž–È›\ØÛ[—K˜\XØ][Û‹ÛY][[šÊÞ[Ž–È›Y][[šÈ—K˜\XØ][Û‹ÛY][[šÍ
Þ[Ž–È›Y]M—K˜\XØ][Û‹ÛY]ÊÞ[Ž–È›Y]È—K˜\XØ][Û‹Û[]XYZJÞ[Ž–È›XYZH—K˜\XØ][Û‹Û[]]\Ù
Þ[Ž–È›]\Ù—K˜\XØ][Û‹Û[ÙÊÞ[Ž–È›[ÙÈ—K˜\XØ][Û‹Û\ŒHŽ–È›LŒH‹›\ŒH—K˜\XØ][Û‹Û\Ž–ÈŠ›\‹Š›\Í‹›\È‹›M—K˜\XØ][Û‹Û\Ú^Ž–È›\Ú^—K˜\XØ][Û‹Û\Ú^[™HŽ–È›\Ú^[™H—K˜\XØ][Û‹Û\ÝÛÜ™Ž–È™ØÈ‹™Ý—K˜\XØ][Û‹Û^ˆŽ–È›^ˆ—K˜\XØ][Û‹Û‹\]XYÈŽ–È›œH—K˜\XØ][Û‹Û‹]š\\ÈŽ–È›—K˜\XØ][Û‹Û›ÙHŽ–È˜ÚœÈ—K˜\XØ][Û‹ÛØÝ]\Ý™X[HŽ–È˜š[ˆ‹™\È‹›™ˆ‹›X\ˆ‹œÛÈ‹™\Ý‹™\Ýˆ‹œÙÈ‹˜œÈ‹™[\‹™[È‹™\ÞH‹™^H‹™‹™Xˆ‹™YÈ‹š\ÛÈ‹š[YÈ‹›\ÚH‹›\Ü‹›\ÛH‹˜Y™™\ˆ—K˜\XØ][Û‹ÛÙHŽ–È›ÙH—K˜\XØ][Û‹ÛÙXœË\XÚØYÙJÞ[Ž–È›Üˆ—K˜\XØ][Û‹ÛÙÙÈŽ–È›ÙÞ—K˜\XØ][Û‹ÛÛYØÊÞ[Ž–È›ÛYØÈ—K˜\XØ][Û‹ÛÛ™[›ÝHŽ–È›Û™]ØÈ‹›Û™]ØÌˆ‹›Û™]\‹›Û™\ÙÈ‹›Û™H‹›Û™XH—K˜\XØ][Û‹ÛÞÈŽ–È›ÞÈ—K˜\XØ][Û‹Üœ[Ý™\›^JÞ[Ž–Èœ™[È—K˜\XØ][Û‹Ü]Ú[ÜËY\œ›ÜŠÞ[Ž–Èž\ˆ—K˜\XØ][Û‹ÜˆŽ–Èœˆ—K˜\XØ][Û‹ÜÜY[˜Üž\YŽ–ÈœÜ—K˜\XØ][Û‹ÜÜZÙ^\ÈŽ–È˜\ØÈ—K˜\XØ][Û‹ÜÜ\ÚYÛ˜]\™HŽ–ÈœÚYÈ‹Š˜\ØÈ—K˜\XØ][Û‹ÜXÜË\[\ÈŽ–Èœ™ˆ—K˜\XØ][Û‹ÜØÜÌLŽ–ÈœL—K˜\XØ][Û‹ÜØÜÍË[Z[YHŽ–ÈœÛH‹œØÈ—K˜\XØ][Û‹ÜØÜÍË\ÚYÛ˜]\™HŽ–ÈœÜÈ—K˜\XØ][Û‹ÜØÜÎŽ–Èœ—K˜\XØ][Û‹ÜÚ^X]‹XÙ\Ž–È˜XÈ—K˜\XØ][Û‹ÜÚ^XÙ\Ž–È˜Ù\ˆ—K˜\XØ][Û‹ÜÚ^XÜ›Ž–È˜Ü›—K˜\XØ][Û‹ÜÚ^\Ú\]Ž–ÈœÚ\]—K˜\XØ][Û‹ÜÚ^Û\Ž–ÈœÚH—K˜\XØ][Û‹ÜÊÞ[Ž–ÈœÈ—K˜\XØ][Û‹ÜÜÝØÜš\Ž–È˜ZH‹™\È‹œÈ—K˜\XØ][Û‹Ü›Ý™[˜[˜ÙJÞ[Ž–Èœ›Ýž—K˜\XØ][Û‹ÜÚØÊÞ[Ž–ÈœÚØÞ[—K˜\XØ][Û‹Ü˜[[
ÞX[[Ž–Èœ˜[[—K˜\XØ][Û‹Ü™ŠÞ[Ž–Èœ™ˆ‹›ÝÛ—K˜\XØ][Û‹Ü™YÚ[™›ÊÞ[Ž–ÈœšYˆ—K˜\XØ][Û‹Ü™[^[™ËXÛÛ\XÝ\Þ[^Ž–Èœ›˜È—K˜\XØ][Û‹Ü™\ÛÝ\˜ÙK[\ÝÊÞ[Ž–Èœ›—K˜\XØ][Û‹Ü™\ÛÝ\˜ÙK[\ÝËYY™ŠÞ[Ž–Èœ›—K˜\XØ][Û‹Ü›Ë\Ù\šXÙ\ÊÞ[Ž–ÈœœÈ—K˜\XØ][Û‹Ü›Ý]KX\
Þ[Ž–Èœ˜\—K˜\XØ][Û‹Ü›Ý]K\Ë]ÚY
Þ[Ž–ÈœÛÈ—K˜\XØ][Û‹Ü›Ý]K]\Ù
Þ[Ž–Èœ\Ù—K˜\XØ][Û‹ÜœÚKYÚÜÝ\Ý\œÈŽ–È™Øœˆ—K˜\XØ][Û‹ÜœÚK[X[šY™\ÝŽ–È›Y—K˜\XØ][Û‹ÜœÚK\›ØHŽ–Èœ›ØH—K˜\XØ][Û‹ÜœÙ
Þ[Ž–ÈœœÙ—K˜\XØ][Û‹ÜœÜÊÞ[Ž–ÈœœÜÈ—K˜\XØ][Û‹ÜˆŽ–Èœˆ—K˜\XØ][Û‹ÜØ›[
Þ[Ž–ÈœØ›[—K˜\XØ][Û‹ÜØÝœXÝ‹\™\]Y\ÝŽ–ÈœØÜH—K˜\XØ][Û‹ÜØÝœXÝ‹\™\ÜÛœÙHŽ–ÈœØÜÈ—K˜\XØ][Û‹ÜØÝœ]œ\™\]Y\ÝŽ–ÈœÜH—K˜\XØ][Û‹ÜØÝœ]œ\™\ÜÛœÙHŽ–ÈœÜ—K˜\XØ][Û‹ÜÙŽ–ÈœÙ—K˜\XØ][Û‹ÜÙ[›[
Þ[Ž–ÈœÙ[›[—K˜\XØ][Û‹ÜÙ[œÛ[
Þ[Ž–ÈœÙ[œÛ[—K˜\XØ][Û‹ÜÙ]\^[Y[Z[š]X][ÛˆŽ–ÈœÙ]^H—K˜\XØ][Û‹ÜÙ]\™YÚ\Ý˜][Û‹Z[š]X][ÛˆŽ–ÈœÙ]™YÈ—K˜\XØ][Û‹ÜÚŠÞ[Ž–ÈœÚˆ—K˜\XØ][Û‹ÜÚY]™HŽ–ÈœÚ]ˆ‹œÚY]™H—K˜\XØ][Û‹ÜÛZ[
Þ[Ž–ÈœÛZH‹œÛZ[—K˜\XØ][Û‹ÜÜ\œ[\]Y\žHŽ–ÈœœH—K˜\XØ][Û‹ÜÜ\œ[\™\Ý[ÊÞ[Ž–ÈœÜž—K˜\XØ][Û‹ÜÜ[Ž–ÈœÜ[—K˜\XØ][Û‹ÜÜ™ÜÈŽ–È™Ü˜[H—K˜\XØ][Û‹ÜÜ™ÜÊÞ[Ž–È™Üž[—K˜\XØ][Û‹ÜÜJÞ[Ž–ÈœÜH—K˜\XØ][Û‹ÜÜÙ
Þ[Ž–ÈœÜÙ—K˜\XØ][Û‹ÜÜÛ[
Þ[Ž–ÈœÜÛ[—K˜\XØ][Û‹ÜÝÚY
Þ[Ž–ÈœÝÚYYÈ—K˜\XØ][Û‹ÝZJÞ[Ž–ÈZH‹ZXÛÜœ\È—K˜\XØ][Û‹Ý˜]Y
Þ[Ž–ÈšH—K˜\XØ][Û‹Ý[Y\Ý[\YY]HŽ–ÈÙ—K˜\XØ][Û‹ÝÛ[Ž–ÈÛ[—K˜\XØ][Û‹ÝšYÈŽ–ÈšYÈ—K˜\XØ][Û‹Ý[
Þ[Ž–È[—K˜\XØ][Û‹ÝXšœÛÛˆŽ–ÈXšˆ—K˜\XØ][Û‹Ý\˜Ë\™\ÜÚY]
Þ[Ž–ÈœœÚY]—K˜\XØ][Û‹Ý\˜Ë]\™Ù]\ØÊÞ[Ž–È—K˜\XØ][Û‹Ý›ÚXÙ^[
Þ[Ž–Èž[—K˜\XØ][Û‹ÝØ\ÛHŽ–ÈØ\ÛH—K˜\XØ][Û‹ÝØ]Ú\š[™›ÊÞ[Ž–ÈÚYˆ—K˜\XØ][Û‹ÝÚYÙ]Ž–ÈÙÝ—K˜\XØ][Û‹ÝÚ[šŽ–Èš—K˜\XØ][Û‹ÝÜÙ
Þ[Ž–ÈÜÙ—K˜\XØ][Û‹ÝÜÜÛXÞJÞ[Ž–ÈÜÜÛXÞH—K˜\XØ][Û‹Þ[[
Þ[Ž–Èž[[—K˜\XØ][Û‹ÞØ\X]
Þ[Ž–Èž]ˆ—K˜\XØ][Û‹ÞØ\XØ\ÊÞ[Ž–ÈžØH—K˜\XØ][Û‹ÞØ\YY™ŠÞ[Ž–Èžˆ—K˜\XØ][Û‹ÞØ\Y[
Þ[Ž–Èž[—K˜\XØ][Û‹ÞØ\[œÊÞ[Ž–ÈžœÈ—K˜\XØ][Û‹Þ[˜ÊÞ[Ž–Èž[˜È—K˜\XØ][Û‹Þ™ˆŽ–Èž™ˆ—K˜\XØ][Û‹Þ[
Þ[Ž–Èž[‹ž—K˜\XØ][Û‹ÞY™ŠÞ[Ž–Èžˆ—K˜\XØ][Û‹Þ[Ž–Èž[‹žÛ‹žÙ‹œ›™È—K˜\XØ][Û‹Þ[YŽ–È™—K˜\XØ][Û‹ÞÜ
Þ[Ž–ÈžÜ—K˜\XØ][Û‹Þ›ØÊÞ[Ž–Èž—K˜\XØ][Û‹ÞÛ
Þ[Ž–ÈŠžÛ‹žÛ—K˜\XØ][Û‹ÞÜŠÞ[Ž–ÈžÜˆ—K˜\XØ][Û‹ÞŠÞ[Ž–È›^[‹ž›[‹ž›[‹ž›H—K˜\XØ][Û‹ÞX[™ÈŽ–ÈžX[™È—K˜\XØ][Û‹ÞZ[ŠÞ[Ž–ÈžZ[ˆ—K˜\XØ][Û‹Þš\Ž–Èžš\—K˜\XØ][Û‹Þš\
ÙÝÝYHŽ–È›ÝYH—K˜]Y[ËÌÙÜŽ–ÈŠŒÙÜ—K˜]Y[ËØXXÈŽ–È˜YÈ‹˜XXÈ—K˜]Y[ËØYÛHŽ–È˜Y—K˜]Y[ËØ[\ˆŽ–È˜[\ˆ—K˜]Y[ËØ˜\ÚXÈŽ–È˜]H‹œÛ™—K˜]Y[ËÛZYHŽ–È›ZY‹›ZYH‹šØ\ˆ‹œ›ZH—K˜]Y[ËÛ[Øš[K^YˆŽ–È›^Yˆ—K˜]Y[ËÛ\ÈŽ–ÈŠ›\È—K˜]Y[ËÛ\Ž–È›MH‹›\H‹›Mˆ—K˜]Y[ËÛ\YÈŽ–È›\ØH‹›\ˆ‹›\˜H‹›\È‹›L˜H‹›LØH—K˜]Y[ËÛÙÙÈŽ–È›ÙØH‹›ÙÙÈ‹œÜ‹›Ü\È—K˜]Y[ËÜÌÛHŽ–ÈœÌÛH—K˜]Y[ËÜÚ[ÈŽ–ÈœÚ[—K˜]Y[ËÝØ]ˆŽ–ÈØ]ˆ—K˜]Y[ËÝØ]™HŽ–ÈŠØ]ˆ—K˜]Y[ËÝÙX›HŽ–ÈÙX˜H—K˜]Y[ËÞHŽ–ÈžH—K™›ÛØÛÛXÝ[ÛˆŽ–ÈÈ—K™›ÛÛÝˆŽ–È›Ýˆ—K™›ÛÝˆŽ–Èˆ—K™›ÛÝÛÙ™ˆŽ–ÈÛÙ™ˆ—K™›ÛÝÛÙ™ŒˆŽ–ÈÛÙ™Œˆ—Kš[XYÙKØXÙ\ÈŽ–È™^ˆ—Kš[XYÙKØ\™ÈŽ–È˜\™È—Kš[XYÙKØ]˜ÚHŽ–È˜]˜ÚH—Kš[XYÙKØ]˜ÜÈŽ–È˜]˜ÜÈ—Kš[XYÙKØ]šYˆŽ–È˜]šYˆ—Kš[XYÙKØ›\Ž–È˜›\‹™Xˆ—Kš[XYÙKØÙÛHŽ–È˜ÙÛH—Kš[XYÙKÙXÛÛK\›HŽ–È™›H—Kš[XYÙKÙŽ–È™—Kš[XYÙKÙ[YˆŽ–È™[Yˆ—Kš[XYÙKÙš]ÈŽ–È™š]È—Kš[XYÙKÙÌÙ˜^Ž–È™ÌÈ—Kš[XYÙKÙÚYˆŽ–È™ÚYˆ—Kš[XYÙKÚZXÈŽ–ÈšZXÈ—Kš[XYÙKÚZXË\Ù\]Y[˜ÙHŽ–ÈšZXÜÈ—Kš[XYÙKÚZYˆŽ–ÈšZYˆ—Kš[XYÙKÚZY‹\Ù\]Y[˜ÙHŽ–ÈšZYœÈ—Kš[XYÙKÚZŒšÈŽ–ÈšZŒˆ—Kš[XYÙKÚYYˆŽ–ÈšYYˆ—Kš[XYÙKÚ˜ZZHŽ–Èš˜ZZH—Kš[XYÙKÚ˜Z\ÈŽ–Èš˜Z\È—Kš[XYÙKÚ›ÈŽ–Èš›È—Kš[XYÙKÚœˆŽ–Èšœˆ‹šœÌˆ—Kš[XYÙKÚœYÈŽ–ÈšœÈ‹šœYÈ‹šœH—Kš[XYÙKÚœŽ–Èšœ—Kš[XYÙKÚœÈŽ–ÈššÈ—Kš[XYÙKÚœHŽ–ÈšœH‹šœÛH—Kš[XYÙKÚœŽ–Èšœ‹šœˆ—Kš[XYÙKÚžŽ–Èšž—Kš[XYÙKÚžˆŽ–Èšžˆ—Kš[XYÙKÚž˜HŽ–Èšž˜H—Kš[XYÙKÚžœÈŽ–ÈšžœÈ—Kš[XYÙKÚžÈŽ–ÈšžÈ—Kš[XYÙKÚžØÈŽ–ÈšžØÈ—Kš[XYÙKÚžÚHŽ–ÈšžÚH—Kš[XYÙKÚžÜÈŽ–ÈšžÜÈ—Kš[XYÙKÚÝŽ–ÈšÝ—Kš[XYÙKÚÝˆŽ–ÈšÝˆ—Kš[XYÙKÜœYÈŽ–Èš™šYˆ—Kš[XYÙKÜ™ÈŽ–Èœ™È—Kš[XYÙKÜÙÚHŽ–ÈœÙÚH—Kš[XYÙKÜÝ™ÊÞ[Ž–ÈœÝ™È‹œÝ™Þˆ—Kš[XYÙKÝÎŽ–ÈÎ—Kš[XYÙKÝY™ˆŽ–ÈYˆ‹Y™ˆ—Kš[XYÙKÝY™‹YžŽ–Èž—Kš[XYÙKÝÙXœŽ–ÈÙXœ—Kš[XYÙKÝÛYˆŽ–ÈÛYˆ—K›Y\ÜØYÙKÙ\ÜÜÚ][Û‹[›ÝYšXØ][ÛˆŽ–È™\ÜÜÚ][Û‹[›ÝYšXØ][Ûˆ—K›Y\ÜØYÙKÙÛØ˜[Ž–ÈN\ÙÈ—K›Y\ÜØYÙKÙÛØ˜[Y[]™\žK\Ý]\ÈŽ–ÈNÛˆ—K›Y\ÜØYÙKÙÛØ˜[Y\ÜÜÚ][Û‹[›ÝYšXØ][ÛˆŽ–ÈNYˆ—K›Y\ÜØYÙKÙÛØ˜[ZXY\œÈŽ–ÈNˆ—K›Y\ÜØYÙKÜ™˜ÎŒˆŽ–È™[[‹›Z[YH‹›Z‹›Z[—K›[Ù[ÌÛYˆŽ–ÈŒÛYˆ—K›[Ù[ÙÛŠÚœÛÛˆŽ–È™Ûˆ—K›[Ù[ÙÛ‹Xš[˜\žHŽ–È™Ûˆ—K›[Ù[ÚYÙ\ÈŽ–ÈšYÜÈ‹šYÙ\È—K›[Ù[ÚŽ–Èš—K›[Ù[ÛY\ÚŽ–È›\Ú‹›Y\Ú‹œÚ[È—K›[Ù[Û]Ž–È›]—K›[Ù[ÛØšˆŽ–È›Øšˆ—K›[Ù[Ü˜ÈŽ–Èœ˜È—K›[Ù[ÜÝ\Ž–ÈœÝ\‹œÝ‹œÝ˜È‹œŒH‹ŒŒL—K›[Ù[ÜÝ\
Þ[Ž–ÈœÝ—K›[Ù[ÜÝ\
Þš\Ž–ÈœÝˆ—K›[Ù[ÜÝ\^[
Þš\Ž–ÈœÝˆ—K›[Ù[ÜÝŽ–ÈœÝ—K›[Ù[ÝLÙŽ–ÈLÙ—K›[Ù[Ýœ›[Ž–ÈÜ›‹œ›[—K›[Ù[ÞÙ
Øš[˜\žHŽ–ÈŠžÙˆ‹žÙžˆ—K›[Ù[ÞÙ
Ù˜\Ý[™›ÜÙ]Ž–ÈžÙˆ—K›[Ù[ÞÙ
Ýœ›[Ž–ÈŠžÙˆ‹žÙžˆ—K›[Ù[ÞÙ
Þ[Ž–ÈžÙ‹žÙˆ—K›[Ù[ÞÙ]œ›[Ž–ÈžÙˆ—K^ØØXÚK[X[šY™\ÝŽ–È˜\ØXÚH‹›X[šY™\Ý—K^ØØ[[™\ˆŽ–ÈšXÜÈ‹šY˜ˆ—K^ØÛÙ™™Y\ØÜš\Ž–È˜ÛÙ™™YH‹›]ÛÙ™™YH—K^ØÜÜÈŽ–È˜ÜÜÈ—K^ØÜÝˆŽ–È˜ÜÝˆ—K^Ú[Ž–Èš[‹šH‹œÚ[—K^Ú˜YHŽ–Èš˜YH—K^Ú˜]˜\ØÜš\Ž–ÈšœÈ‹›ZœÈ—K^ÚœÞŽ–ÈšœÞ—K^Û\ÜÈŽ–È›\ÜÈ—K^ÛX\šÙÝÛˆŽ–È›Y‹›X\šÙÝÛˆ—K^ÛX][Ž–È›[[—K^ÛYŽ–È›Y—K^ÛŒÈŽ–È›ŒÈ—K^ÜZ[ˆŽ–È‹^‹˜ÛÛ™ˆ‹™Yˆ‹›\Ý‹›ÙÈ‹š[ˆ‹š[šH—K^ÜšXÚ^Ž–Èœ—K^ÜˆŽ–ÈŠœˆ—K^ÜÙÛ[Ž–ÈœÙÛ[‹œÙÛH—K^ÜÚ^Ž–ÈœÚ^—K^ÜÛ[HŽ–ÈœÛ[H‹œÛH—K^ÜÜŽ–ÈœÜ—K^ÜÝ[\ÈŽ–ÈœÝ[\È‹œÝ[—K^ÝX‹\Ù\\˜]Y]˜[Y\ÈŽ–ÈÝˆ—K^Ý›Ù™ˆŽ–È‹ˆ‹œ›Ù™ˆ‹›X[ˆ‹›YH‹›\È—K^Ý\HŽ–È—K^Ý\šK[\ÝŽ–È\šH‹\š\È‹\›È—K^Ý˜Ø\™Ž–È˜Ø\™—K^ÝŽ–È—K^ÝÙÜÛŽ–ÈÙÜÛ—K^Þ[Ž–ÈŠž[—K^ÞX[[Ž–ÈžX[[‹ž[[—KšY[ËÌÙÜŽ–ÈŒÙÜ‹ŒÙÜ—KšY[ËÌÙÜˆŽ–ÈŒÙÌˆ—KšY[ËÚŒHŽ–ÈšŒH—KšY[ËÚŒÈŽ–ÈšŒÈ—KšY[ËÚŽ–Èš—KšY[ËÚ\ÛËœÙYÛY[Ž–È›MÈ—KšY[ËÚœYÈŽ–ÈšœÝˆ—KšY[ËÚœHŽ–ÈŠšœH‹ŠšœÛH—KšY[ËÛZŒˆŽ–È›ZŒˆ‹›Zœˆ—KšY[ËÛ\Ž–ÈÈ‹›L‹›LÈ‹›]È—KšY[ËÛ\Ž–È›\‹›\ˆ‹›\Í—KšY[ËÛ\YÈŽ–È›\YÈ‹›\È‹›\H‹›L]ˆ‹›Lˆ—KšY[ËÛÙÙÈŽ–È›ÙÝˆ—KšY[ËÜ]ZXÚÝ[YHŽ–Èœ]‹›[Ýˆ—KšY[ËÝÙX›HŽ–ÈÙX›H—_NÓØš™XÝ™œ™Y^™JYÙJNÝ˜\ˆ[Y[˜Ý[ÛŠK‹Š^ÚYŠOOH˜H‰‰ˆ\Š]›ÝÈ™]È\Q\œ›ÜŠ”š]˜]HXØÙ\ÜÛÜˆØ\ÈYš[™YÚ]Ý]HÙ]\ˆŠNÚYŠ\[ÙˆOH™[˜Ý[ÛˆÙHOO]\Žˆ]š\ÊJJ]›ÝÈ™]È\Q\œ›ÜŠØ[››Ý™XYš]˜]HY[X™\ˆœ›ÛH[ˆØš™XÝÚÜÙHÛ\ÜÈY›ÝXÛ\™H]ŠNÜ™]\›ˆOOH›HÜŽ›OOH˜HÜ‹˜Ø[
JNœÜ‹˜[YN™Ù]
J_K˜‹QKÙÎØÛÛœÝœOXÛ\ÜÈœ^ØÛÛœÝXÝÜŠ‹‹
^Ñ˜‹œÙ]
\Ë™]ÈX\
KQKœÙ]
\Ë™]ÈX\
KÙËœÙ]
\Ë™]ÈX\
NÙ›ÜŠÛÛœÝˆÙˆ
]\Ë™Yš[™JŠ_YYš[™JHLJ^Ù›ÜŠ]Ü‹W[ÙˆØš™XÝ™[šY\Ê
J^Ü\‹ÓÝÙ\Ø\ÙJ
KOZK›X\
ÏO˜ËÓÝÙ\Ø\ÙJ
JK[
\ËÙË™ˆŠKš\ÊŠ_[
\ËÙË™ˆŠKœÙ]
‹™]ÈÙ]
NØÛÛœÝÏQ[
\ËÙË™ˆŠK™Ù]
ŠNÛ]ÏHLÙ›ÜŠ]ÈÙˆJ^ØÛÛœÝOXËœÝ\ÕÚ]
ŠˆŠNÚYŠÏ]OØËœÛXÙJJN˜ËÏË˜Y
ÊKÉ‰‘[
\ËQK™ˆŠKœÙ]
‹ÊKÏHLKJXÛÛ[YNØÛÛœÝQ[
\Ë˜‹™ˆŠK™Ù]
ÊNÚYŠ‰‰™ˆO\‰‰ˆ[Š]›ÝÈ™]È\œ›ÜŠ‰ÜŸHOˆ	ØßHˆÛÛ™›XÝÈÚ]‰ÙŸHOˆ	ØßH‹ˆ\ÜÈ›Ü˜ÙO]YWÈÝ™\œšYH\ÈYš[š][Û‹˜
NÑ[
\Ë˜‹™ˆŠKœÙ]
ËŠ__\™]\›ˆ\ßYÙ]\J
^ÚYŠ\[ÙˆOHœÝš[™ÈŠ\™]\›ˆ[ØÛÛœÝ]œ™\XÙJ×‹Š–Ë×KÜËˆŠKÓÝÙ\Ø\ÙJ
K[‹œ™\XÙJ×‹Š—‹ÜËˆŠKÓÝÙ\Ø\ÙJ
KO[‹›[™Ý›[™ÝÜ™]\›ˆJ‹›[™Ý‹›[™ÝLJI‰šOÛ[‘[
\Ë˜‹™ˆŠK™Ù]
ŠOÏÛ[YÙ]^[œÚ[ÛŠ
^Ü™]\›ˆ\[ÙˆOHœÝš[™ÈÛ[Š]ËœÜ]ËŠŽÈŠVÌK
	‰‘[
\ËQK™ˆŠK™Ù]
š[J
KÓÝÙ\Ø\ÙJ
JJOÏÛ[
_YÙ][^[œÚ[ÛœÊ
^Ü™]\›ˆ\[ÙˆOHœÝš[™ÈÛ[‘[
\ËÙË™ˆŠK™Ù]
ÓÝÙ\Ø\ÙJ
JOÏÛ[WÙœ™Y^™J
^Ý\Ë™Yš[™OJ
OOžÝ›ÝÈ™]È\œ›ÜŠ™Yš[™J
H›Ý[ÝÙY›ÜˆZ[Z[ˆZ[YHØš™XÝËˆÙYHÎ‹ËÙÚ]X‹˜ÛÛKØœ›ÛÙ˜KÛZ[YKØ›Ø‹ÛXZ[‹Ô‘PQQK›YØÝ\ÝÛK[Z[YKZ[œÝ[˜Ù\ÈŠ_KØš™XÝ™œ™Y^™J\ÊNÙ›ÜŠÛÛœÝÙˆ[
\ËÙË™ˆŠK˜[Y\Ê
JSØš™XÝ™œ™Y^™J
NÜ™]\›ˆ\ßWÙÙ]\ÝÝ]J
^Ü™]\›žÝ\\Î‘[
\Ë˜‹™ˆŠK^[œÚ[ÛœÎ‘[
\ËQK™ˆŠ___NØJœK“Z[YHŠNÛ]QœNÑ˜[™]ÈÙXZÓX\QO[™]ÈÙXZÓX\ÙÏ[™]ÈÙXZÓX\ØÛÛœÝ][™]È
YÙJK—Ùœ™Y^™J
NÛ]O[[ØÛÛœÝœXJ

OOŠ_
OZYJšÎ‹ËÛZÜœœ[^›ÙYœØ›YZ]™‹œÝ\X˜\ÙK˜ÛÈ‹œØ—ÜX›\ÚX›WÔL‘ÓX”ÎRV‘L™RÒ•šÝ×ÝLRÐÑLRPÈŠJKJK™Ù]Ý\X˜\ÙPÛY[ŠKO^ÜØ[\Î–×KÛÛ\[šY\Î–×KÛÛXÝÎ–×KX[Î–×K›Ý\Î–×K\ÚÜÎ–×_KYÏ^ÜØ[\ÎŒÛÛ\[šY\ÎŒÛÛXÝÎŒX[ÎŒ›Ý\ÎŒ\ÚÜÎŒKÙ]XJ

OOžØÛÛœÝÙ]N™_OSŠ
K\[Š
KZ›Ê
KØÛÛ\[žTÙXÝÜœÎœŸOUÜŠ
KÚK×O^\ÙTÝ]JÜÝ]\ÎˆšYH‹\œ›ÜŽ›[Ý]Î›YË˜Z[Y[\ÜÎ•_JKÏU]


OOžÜÊÜÝ]\ÎˆšYH‹\œ›ÜŽ›[Ý]Î›YË˜Z[Y[\ÜÎ•_J_JKÏU]
\Þ[˜ÈOOžÚYŠOO[[
]›ÝÈ™]È\œ›ÜŠ’[\Ü[™È]H™\]Z\™\ÈÈ™H]][XØ]YŠNØÛÛœÝ[™]È]NÜÊÜÝ]\Îˆš[\Ü[™È‹Ý]Î›YË˜Z[Y[\ÜÎ•K\œ›ÜŽ›[JNØÛÛœÝ^ÜØ[\ÎžßKÛÛ\[šY\ÎžßKÛÛXÝÎžßKX[ÎžßKYÜÎžß_KOXJ\Þ[˜ÈOOžÝž^ÚYŠQ]
JJ]›ÝÈ™]È\œ›ÜŠ‘\œ›ÜˆÚ[H[\Ü[™ÈØ[Nˆ[˜[Y]HŠNØÛÛœÝ	X]ØZ]™Ù]\Ý
œØ[\È‹Ùš[\ŽžÙ[XZ[“K™[XZ[š[J
_KYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒ_KÛÜžÙšY[ˆšY‹Ü™\ŽˆTÐÈŸ_JNÚYŠ	Ý[OOLJ\™]\›ˆœØ[\ÖÓKšYOI™]VÌKšY	™]VÌKšYØÛÛœÝX]ØZ]œØ[\ÐÜ™X]JÙ[XZ[“K™[XZ[š[J
Kš\œÝÛ˜[YN“K™š\œÝÛ˜[YKš[J
K\ÝÛ˜[YN“K›\ÝÛ˜[YKš[J
KYZ[š\Ý˜]ÜŽˆLK\ØX›YˆL_JNÜ™]\›ˆœØ[\ÖÓKšYOQ‹šYÊOO•KœÝ]\ÏOOH™\œ›ÜˆÞË‹‹•KÝ]ÎžË‹‹•KœÝ]ÏÏÛYËØ[\ÎŠKœÝ]ÏÏÛYÊKœØ[\ÊÌ__NžË‹‹•KÝ]\Îˆš[\Ü[™È‹Ý]ÎžË‹‹•KœÝ]ÏÏÛYËØ[\ÎŠKœÝ]ÏÏÛYÊKœØ[\ÊÌ_K\œ›ÜŽ›[JKŸXØ]Ú
	
^ØÛÛœÝ[™]È]J
K˜[YSÙŠ
KY‹˜[YSÙŠ
NÜÊOOŠË‹‹•KÝ]\Îˆ™\œ›Üˆ‹\œ›ÜŽ›™]È\œ›ÜŠ\œ›ÜˆÚ[H[\Ü[™ÈØ[Nˆ	É›Y\ÜØYÙ_X
K˜Z[Y[\ÜÎžË‹‹•K™˜Z[Y[\ÜËØ[\Î–Ë‹‹•K™˜Z[Y[\ÜËœØ[\ËË‹‹“K\œ›ÜŽ‰›Y\ÜØYÙ_W_K\˜][ÛŽ‘ŸJJ__Kš[\ÜØ[HŠKÏXJ\Þ[˜ÈOOžÚYŠRY]
JJ^ÜÊ	OŠË‹‹‰Ý]\Îˆš[\Ü[™È‹\œ›ÜŽ›[˜Z[Y[\ÜÎžË‹‹‰™˜Z[Y[\ÜËÛÛ\[šY\Î–Ë‹‹‰™˜Z[Y[\ÜË˜ÛÛ\[šY\ËË‹‹“K\œ›ÜŽˆ’[˜[Y›Ü›X]ŸW__JJNÜ™]\›Ÿ]ž^ØÛÛœÝ	SKœÙXÝÜËš[J
NÚYŠ		‰ˆ\‹œÛÛYJOO•K˜[YOOOI
J^ÜÊOOŠË‹‹•KÝ]\Îˆš[\Ü[™È‹\œ›ÜŽ›[˜Z[Y[\ÜÎžË‹‹•K™˜Z[Y[\ÜËÛÛ\[šY\Î–Ë‹‹•K™˜Z[Y[\ÜË˜ÛÛ\[šY\ËË‹‹“K\œ›ÜŽ˜[˜[YÙXÝÜˆ‰ÉH‹ˆ]\Ý™HÛ™HÙŽˆ	Ü‹›X\
Ož‹˜[YJKš›Ú[Š‹Š_XW__JJNÜ™]\›ŸZYŠK˜Y™\ÜÏËš[J
J^ØÛÛœÝOX]ØZ]™Ù]\Ý
˜ÛÛ\[šY\È‹Ùš[\ŽžÈ˜Y™\ÜÐ\HŽ“K˜Y™\ÜËš[J
K‹‹“Kžš\ÛÙOËš[J
OÞÈžš\ÛÙP\HŽ“Kžš\ÛÙKš[J
_Nžß_KYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒ_KÛÜžÙšY[ˆšY‹Ü™\ŽˆTÐÈŸ_JNÚYŠK™]VÌJ\™]\›ˆ˜ÛÛ\[šY\ÖÓKšYOUK™]VÌKšYÊOŠË‹‹ž‹Ý]ÎžË‹‹ž‹œÝ]ËÛÛ\[šY\Îž‹œÝ]Ë˜ÛÛ\[šY\ÊÌ__JJKK™]VÌ_XÛÛœÝÙ]N‘ŸOX]ØZ]˜Ü™X]J˜ÛÛ\[šY\È‹Ù]NžÛ˜[YN“K›˜[YKš[J
K\ØÜš\[ÛŽ“K™\ØÜš\[ÛËš[J
KÚ]N“K˜Ú]OËš[J
KÛÝ[žN“K˜ÛÝ[žOËš[J
KY™\ÜÎ“K˜Y™\ÜÏËš[J
Kš\ÛÙN“Kžš\ÛÙOËš[J
KÝ]WØX˜œŽ“KœÝ]WØX˜œËš[J
KÙXÝÜŽ‰›ÚYÚ^™N“KœÚ^™OÉ]
KœÚ^™JN›ÚY[šÙY[—Ý\›“K›[šÙY[—Ý\›Ëš[J
KÙXœÚ]N“KÙXœÚ]OËš[J
KÛ™WÛ[X™\Ž“KœÛ™WÛ[X™\Ëš[J
K™]™[YN“Kœ™]™[YOËš[J
K^ÚY[YšY\Ž“K^ÚY[YšY\Ëš[J
KÛÛ^Û[šÜÎ\œ˜^Kš\Ð\œ˜^JK˜ÛÛ^Û[šÜÊOÓK˜ÛÛ^Û[šÜÎ›ÚYØ[\×ÚY“KœØ[\×ÚYÚœØ[\ÖÓKœØ[\×ÚYN™KšYÜ™X]YØ]“K˜Ü™X]YØ]_JNÜ™]\›ˆ˜ÛÛ\[šY\ÖÓKšYOQ‹šYÊOOŠË‹‹•KÝ]\Îˆš[\Ü[™È‹Ý]ÎžË‹‹•KœÝ]ËÛÛ\[šY\Î•KœÝ]Ë˜ÛÛ\[šY\ÊÌ_K\œ›ÜŽ›[JJKŸXØ]Ú
	
^ØÛÛœÛÛK™\œ›ÜŠ	
KÊOŠË‹‹‘‹Ý]\Îˆš[\Ü[™È‹\œ›ÜŽ›[˜Z[Y[\ÜÎžË‹‹‘‹™˜Z[Y[\ÜËÛÛ\[šY\Î–Ë‹‹‘‹™˜Z[Y[\ÜË˜ÛÛ\[šY\ËË‹‹“K\œ›ÜŽ‰›Y\ÜØYÙ_W__JJ__Kš[\ÜÛÛ\[žHŠKXJ\Þ[˜ÈOOžÚYŠT]
JJ^ÜÊ	OŠË‹‹‰Ý]\Îˆš[\Ü[™È‹\œ›ÜŽ›[˜Z[Y[\ÜÎžË‹‹‰™˜Z[Y[\ÜËÛÛXÝÎ–Ë‹‹‰™˜Z[Y[\ÜË˜ÛÛXÝËË‹‹“K\œ›ÜŽˆ’[˜[Y›Ü›X]ŸW__JJNÜ™]\›Ÿ]ž^ØÛÛœÝ	SK™Ù[™\Ëš[J
NÚYŠ		‰ˆZËœÛÛYJÏO•Ë˜[YOOOI
J^ÜÊÏOŠË‹‹•ËÝ]\Îˆš[\Ü[™È‹\œ›ÜŽ›[˜Z[Y[\ÜÎžË‹‹•Ë™˜Z[Y[\ÜËÛÛXÝÎ–Ë‹‹•Ë™˜Z[Y[\ÜË˜ÛÛXÝËË‹‹“K\œ›ÜŽ˜[˜[YÙ[™\ˆ‰ÉH‹ˆ]\Ý™HÛ™HÙŽˆ	ÚË›X\
OOœK˜[YJKš›Ú[Š‹Š_XW__JJNÜ™]\›ŸXÛÛœÝSK˜ÛÛ\[žWÚYÚ˜ÛÛ\[šY\ÖÓK˜ÛÛ\[žWÚYN›ÚYÚYŠK™š\œÝÛ˜[YOËš[J
_K›\ÝÛ˜[YOËš[J
J^ØÛÛœÝÏX]ØZ]™Ù]\Ý
˜ÛÛXÝÈ‹Ùš[\ŽžÈ™š\œÝÛ˜[YP\HŽ“K™š\œÝÛ˜[YOËš[J
OÏÈˆ‹›\ÝÛ˜[YP\HŽ“K›\ÝÛ˜[YOËš[J
OÏÈˆ‹‹‹‘ÞÈ˜ÛÛ\[žWÚY\HŽ‘ŸNžß_KYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒ_KÛÜžÙšY[ˆšY‹Ü™\ŽˆTÐÈŸ_JNÚYŠË™]VÌJ\™]\›ˆ˜ÛÛXÝÖÓKšYOUË™]VÌKšYÊOOŠË‹‹œKÝ]ÎžË‹‹œKœÝ]ËÛÛXÝÎœKœÝ]Ë˜ÛÛXÝÊÌ__JJKË™]VÌ_[]OV×NÓKYÜÉ‰\œ˜^Kš\Ð\œ˜^JKYÜÊI‰ŠOX]ØZ]›ÛZ\ÙK˜[
KYÜË›X\
\Þ[˜ÈÏOžÚYŠYÜÖÕ×J\™]\›ˆYÜÖÕ×NØÛÛœÝÙ]Nœ_OX]ØZ]˜Ü™X]JYÜÈ‹Ù]NžÛ˜[YN•ËÛÛÜŽÑVÓX]™›ÛÜŠX]œ˜[™ÛJ
JÑK›[™Ý
W__JNÜ™]\›ˆYÜÖÕ×O\KšYKšYJJJNØÛÛœÝÙ]NžŸOX]ØZ]˜Ü™X]J˜ÛÛXÝÈ‹Ù]NžÛ\ÝÛ˜[YN“K›\ÝÛ˜[YKš[J
Kš\œÝÛ˜[YN“K™š\œÝÛ˜[YKš[J
K]N“K]OËš[J
K˜XÚÙÜ›Ý[™“K˜˜XÚÙÜ›Ý[™Ëš[J
K[šÙY[—Ý\›“K›[šÙY[—Ý\›Ëš[J
KÙ[™\Ž‰›ÚY\×Û™]ÜÛ]\ŽˆHSKš\×Û™]ÜÛ]\‹ÛÛ\[žWÚY‘‹[XZ[ÚœÛÛ˜Ž\œ˜^Kš\Ð\œ˜^JK™[XZ[ÊOÓK™[XZ[Î›ÚYÛ™WÚœÛÛ˜Ž\œ˜^Kš\Ð\œ˜^JKœÛ™\ÊOÓKœÛ™\Î›ÚYØ[\×ÚY“KœØ[\×ÚYÚœØ[\ÖÓKœØ[\×ÚYN™KšYYÜÎ•Kš\œÝÜÙY[Ž“K˜Ü™X]YØ]\ÝÜÙY[Ž“K\]YØ]_JNÜ™]\›ˆ˜ÛÛXÝÖÓKšYO^‹šYÊÏOŠË‹‹•ËÝ]\Îˆš[\Ü[™È‹Ý]ÎžË‹‹•ËœÝ]ËÛÛXÝÎ•ËœÝ]Ë˜ÛÛXÝÊÌ_K\œ›ÜŽ›[JJKŸXØ]Ú
	
^ØÛÛœÛÛK™\œ›ÜŠ	
KÊOŠË‹‹‘‹Ý]\Îˆš[\Ü[™È‹\œ›ÜŽ›[˜Z[Y[\ÜÎžË‹‹‘‹™˜Z[Y[\ÜËÛÛXÝÎ–Ë‹‹‘‹™˜Z[Y[\ÜË˜ÛÛXÝËË‹‹“K\œ›ÜŽ‰›Y\ÜØYÙ_W__JJ__Kš[\ÜÛÛXÝŠKÏXJ\Þ[˜ÈOOžÚYŠSY]
JJ^ÜÊ	OŠË‹‹‰Ý]\Îˆš[\Ü[™È‹\œ›ÜŽ›[˜Z[Y[\ÜÎžË‹‹‰™˜Z[Y[\ÜËX[Î–Ë‹‹‰™˜Z[Y[\ÜË™X[ËË‹‹“K\œ›ÜŽˆ’[˜[Y›Ü›X]ŸW__JJNÜ™]\›Ÿ]ž^ØÛÛœÝ	Z˜ÛÛ\[šY\ÖÓK˜ÛÛ\[žWÚYKSK˜ÛÛXÝÚYË›X\
YOOš˜ÛÛXÝÖÙYWJK™š[\ŠYOO™YHO[[
NÚYŠ	O[[‹›[™ÝOOL
]›ÝÈ™]È\œ›ÜŠ•H[šÙY›Ü\HÜˆÝ\ÝÛY\ˆØ\È›Ý[\ÜYŠNØÛÛœÝOUœŠ
KÙ]Nž‹\œ›ÜŽ•ßOX]ØZ]K™œ›ÛJ™X[ÈŠKœÙ[XÝ
ŠˆŠK™\JœÛÝ\˜ÙWÜÞ\Ý[H‹KœÛÝ\˜ÙWÜÞ\Ý[JK™\JœÛÝ\˜ÙWÜ™XÛÜ™ÚY‹KœÛÝ\˜ÙWÜ™XÛÜ™ÚY
K›[Z]
JNÚYŠÊ]›ÝÈÎØÛÛœÝO^Ë–ÌNÚYŠJ\™]\›ˆ™X[ÖÓKœÛÝ\˜ÙWÜ™XÛÜ™ÚYO\KšYÊYOOŠË‹‹™YKÝ]ÎžË‹‹™YKœÝ]ËX[Î™YKœÝ]Ë™X[ÊÌ__JJKNØÛÛœÝÙ]N•‹\œ›ÜŽ’OX]ØZ]K™œ›ÛJ™X[ÈŠKœÙ[XÝ
ŠˆŠK™\J˜ÛÛ\[žWÚY‹	
Kš[ZÙJ›˜[YH‹K›˜[YKš[J
JK›[Z]
JNÚYŠ
]›ÝÈØÛÛœÝOUË–ÌNÚYŠJ^ØÛÛœÝÙ\œ›ÜŽ™Y_OX]ØZ]K™œ›ÛJ™X[ÈŠK\]JÜÛÝ\˜ÙWÜÞ\Ý[N“KœÛÝ\˜ÙWÜÞ\Ý[KÛÝ\˜ÙWÜ™XÛÜ™ÚY“KœÛÝ\˜ÙWÜ™XÛÜ™ÚYJK™\JšY‹KšY
NÚYŠYJ]›ÝÈYNÜ™]\›ˆ™X[ÖÓKœÛÝ\˜ÙWÜ™XÛÜ™ÚYOVKšYÊOŠË‹‹–‹Ý]ÎžË‹‹–‹œÝ]ËX[Î–‹œÝ]Ë™X[ÊÌ__JJK_XÛÛœÝÙ]N’Ë\œ›ÜŽ‘ßOX]ØZ]K™œ›ÛJ™X[ÈŠKš[œÙ\
Û˜[YN“K›˜[YKš[J
KÛÛ\[žWÚY‰ÛÛXÝÚYÎ‘‹Ø]YÛÜžN“K˜Ø]YÛÜžKÝYÙN“KœÝYÙK\ØÜš\[ÛŽ“K™\ØÜš\[ÛËš[J
OÏÈˆ‹[[Ý[“K˜[[Ý[ÏÌ›ÛZ\ÙYØ[[Ý[“Kœ›ÛZ\ÙYØ[[Ý[ÏÌØ[\×ÚY™KšY[™^“Kš[™^ÏÌ\Ý[X]WÙ\ÜÜÚ][ÛŽ“K™\Ý[X]WÙ\ÜÜÚ][ÛÏÈ˜ÛÜÙH‹ÛÜš×Ý˜Y\Î“KÛÜš×Ý˜Y\ÏÏÖ×KØ\œšY\Ž“K˜Ø\œšY\Ëš[J
_[ÛZ[WÛ[X™\Ž“K˜ÛZ[WÛ[X™\Ëš[J
_[]WÛÙ—ÛÜÜÎ“K™]WÛÙ—ÛÜÜß[ÛÝ\˜ÙWÜÞ\Ý[N“KœÛÝ\˜ÙWÜÞ\Ý[KÛÝ\˜ÙWÜ™XÛÜ™ÚY“KœÛÝ\˜ÙWÜ™XÛÜ™ÚYÛÜÙYØ]“K˜ÛÜÙYØ][[žWÝ\N“K™[žWÝ\OÏÈ™^\Ý[™ËZ›Øˆ‹Ø[\×ÛÝ]ÛÛYN“KœØ[\×ÛÝ]ÛÛYOÏÈÛÛˆ‹™XÙZ]˜X›WØ˜[[˜ÙN“Kœ™XÙZ]˜X›WØ˜[[˜ÙOÏÌJKœÙ[XÝ
ŠˆŠKœÚ[™ÛJ
NÚYŠÊ]›ÝÈÎÜ™]\›ˆ™X[ÖÓKœÛÝ\˜ÙWÜ™XÛÜ™ÚYORËšYÊYOOŠË‹‹™YKÝ]\Îˆš[\Ü[™È‹Ý]ÎžË‹‹™YKœÝ]ËX[Î™YKœÝ]Ë™X[ÊÌ_K\œ›ÜŽ›[JJKßXØ]Ú
	
^ØÛÛœÛÛK™\œ›ÜŠ	
KÊOŠË‹‹‘‹Ý]\Îˆš[\Ü[™È‹\œ›ÜŽ›[˜Z[Y[\ÜÎžË‹‹‘‹™˜Z[Y[\ÜËX[Î–Ë‹‹‘‹™˜Z[Y[\ÜË™X[ËË‹‹“K\œ›ÜŽ‰›Y\ÜØYÙ_W__JJ__Kš[\ÜX[ŠKÏXJ\Þ[˜ÈOOžÚYŠS]
JJ^ÜÊ	OŠË‹‹‰Ý]\Îˆš[\Ü[™È‹˜Z[Y[\ÜÎžË‹‹‰™˜Z[Y[\ÜË›Ý\Î–Ë‹‹‰™˜Z[Y[\ÜË››Ý\ËË‹‹“K\œ›ÜŽˆ’[˜[Y›Ü›X]ŸW_K\œ›ÜŽ›[JJNÜ™]\›Ÿ]ž^ÚYŠœØ[\ÖÓKœØ[\×ÚYOO[[	‰˜ÛÛœÛÛK™\œ›ÜŠ›ÝH	ÓK^H\È[ˆ[˜[YØ[\ÈQˆ	ÓKœØ[\×ÚYKˆ˜[˜XÚÈÈY˜][Ø[X
K˜ÛÛXÝÖÓK˜ÛÛXÝÚYOO[[
^ÜÊOŠË‹‹‘‹Ý]\Îˆš[\Ü[™È‹˜Z[Y[\ÜÎžË‹‹‘‹™˜Z[Y[\ÜË›Ý\Î–Ë‹‹‘‹™˜Z[Y[\ÜË››Ý\ËË‹‹“K\œ›ÜŽ˜[˜[YÛÛXÝÚY	ÓK˜ÛÛXÝÚYXW_K\œ›ÜŽ›[JJNÜ™]\›ŸXÛÛœÝ	V×NÚYŠ\œ˜^Kš\Ð\œ˜^JK˜]XÚY[ÊJY›ÜŠÛÛœÝˆÙˆK˜]XÚY[ÊIœ\Ú
ÜÜ˜Î‘‹\›]N‘‹›˜[YK˜]Ñš[NžÛ˜[YN‘‹›˜[YK\N•]™Ù]\J‹›˜[YKœÜ]
‹ˆŠKœÜ

J__JNØ]ØZ]˜Ü™X]J˜ÛÛXÝÛ›Ý\È‹Ù]NžØÛÛXÝÚYš˜ÛÛXÝÖÓK˜ÛÛXÝÚYKØ[\×ÚYšœØ[\ÖÓKœØ[\×ÚYOÏÙKšY^“K^]N“K™]K]XÚY[Î‰_JKÊOŠË‹‹‘‹Ý]\Îˆš[\Ü[™È‹Ý]ÎžË‹‹‘‹œÝ]Ë›Ý\Î‘‹œÝ]Ë››Ý\ÊÌ_K\œ›ÜŽ›[JJ_XØ]Ú
	
^ØÛÛœÛÛK™\œ›ÜŠ	
KÊOŠË‹‹‘‹Ý]\Îˆš[\Ü[™È‹˜Z[Y[\ÜÎžË‹‹‘‹™˜Z[Y[\ÜË›Ý\Î–Ë‹‹‘‹™˜Z[Y[\ÜË››Ý\ËË‹‹“K\œ›ÜŽ‰›Y\ÜØYÙ_W_K\œ›ÜŽ›[JJ__Kš[\Ü›ÝHŠKOXJ\Þ[˜ÈOOžÚYŠQ™]
JJ^ÜÊ	OŠË‹‹‰Ý]\Îˆš[\Ü[™È‹˜Z[Y[\ÜÎžË‹‹‰™˜Z[Y[\ÜË\ÚÜÎ–Ë‹‹‰™˜Z[Y[\ÜË\ÚÜËË‹‹“K\œ›ÜŽˆ’[˜[Y›Ü›X]ŸW_K\œ›ÜŽ›[JJNÜ™]\›Ÿ]ž^ÚYŠœØ[\ÖÓKœØ[\×ÚYOO[[	‰˜ÛÛœÛÛK™\œ›ÜŠ\ÚÈ	ÓK^H\È[ˆ[˜[YØ[\ÈQˆ	ÓKœØ[\×ÚYKˆ˜[˜XÚÈÈY˜][Ø[X
K˜ÛÛXÝÖÓK˜ÛÛXÝÚYOO[[
^ÜÊ	OŠË‹‹‰Ý]\Îˆš[\Ü[™È‹˜Z[Y[\ÜÎžË‹‹‰™˜Z[Y[\ÜË\ÚÜÎ–Ë‹‹‰™˜Z[Y[\ÜË\ÚÜËË‹‹“K\œ›ÜŽ˜[˜[YÛÛXÝÚY	ÓK˜ÛÛXÝÚYXW_K\œ›ÜŽ›[JJNÜ™]\›ŸX]ØZ]˜Ü™X]J\ÚÜÈ‹Ù]NžØÛÛXÝÚYš˜ÛÛXÝÖÓK˜ÛÛXÝÚYKØ[\×ÚYšœØ[\ÖÓKœØ[\×ÚYOÏÙKšY^“K^YWÙ]N“K™YWÙ]_›ÚYÛ™WÙ]N“K™Û™WÙ]_›ÚY_JKÊ	OŠË‹‹‰Ý]\Îˆš[\Ü[™È‹Ý]ÎžË‹‹‰œÝ]Ë\ÚÜÎ‰œÝ]Ë\ÚÜÊÌ_K\œ›ÜŽ›[JJ_XØ]Ú
	
^ØÛÛœÛÛK™\œ›ÜŠ	
KÊOŠË‹‹‘‹Ý]\Îˆš[\Ü[™È‹˜Z[Y[\ÜÎžË‹‹‘‹™˜Z[Y[\ÜË\ÚÜÎ–Ë‹‹‘‹™˜Z[Y[\ÜË\ÚÜËË‹‹“K\œ›ÜŽ‰›Y\ÜØYÙ_W_K\œ›ÜŽ›[JJ__Kš[\Ü\ÚÈŠNÛ][[V×NØÛÛœÝOML[™]ÈÎ
Ü]Î–È‰œØ[\ËŠˆ‹‰˜ÛÛ\[šY\ËŠˆ‹‰˜ÛÛXÝËŠˆ‹‰™X[ËŠˆ‹‰››Ý\ËŠˆ‹‰\ÚÜËŠˆ—KÙY\ÝXÚÎˆL_JKÏ]KœÝ™X[J
Kœ\U›ÝYÚ

K™Ù]™XY\Š
KXJ\Þ[˜ÊOHLJOOžÊ‹›[™ÝOOP_JI‰ŠT›ÛZ\ÙK˜[
ŠK]ØZ]‹V×K[[
_Kœ›ØØÙ\Ð˜]ÚY”ÜÜÚX›HŠNÛ]ÏHœØ[\ÈŽÙ›ÜŠÎÊ^ØÛÛœÝÙÛ™N“K˜[YN‰OX]ØZ]Ëœ™XY

NÚYŠJ^Ø]ØZ]
L
NØœ™XZßXÛÛœÝÝ˜[YN‘‹ÝXÚÎ•K\X[žŸOIÚYŠŠXÛÛ[YNØÛÛœÝÏUK›[™ÝŒOÓÙ]
VÌWKšÙ^OËÔÝš[™Ê
JN›ÚYÚYŠÈO[[
^ÜÝÚ]Ú
ÈOOZÉ‰Š]ØZ]
L
KÏUÊKÊ^ØØ\ÙHœØ[\ÈŽžÚ‹œ\Ú
JŠJNØœ™XZßXØ\ÙH˜ÛÛ\[šY\ÈŽžÚ‹œ\Ú
ÊŠJNØœ™XZßXØ\ÙH˜ÛÛXÝÈŽžÚ‹œ\Ú
ŠŠJNØœ™XZßXØ\ÙH™X[ÈŽžÚ‹œ\Ú
ÊŠJNØœ™XZßXØ\ÙH››Ý\ÈŽžÚ‹œ\Ú
ÊŠJNØœ™XZßXØ\ÙH\ÚÜÈŽžÚ‹œ\Ú
JŠJNØœ™XZß_]ž^Ø]ØZ]

_XØ]ÚØ]ØZ]Ë˜Ø[˜Ù[

___\ÊOOžÚYŠKœÝ]\ÏOOH™\œ›ÜˆŠ\™]\›ˆNØÛÛœÝ	[™]È]J
K˜[YSÙŠ
KY‹˜[YSÙŠ
NÜ™]\›žË‹‹“KÝ]\ÎˆœÝXØÙ\ÜÈ‹\˜][ÛŽ‰_JKŠ
_JNÜ™]\›–ÚKË×_K\ÙR[\Üœ›ÛRœÛÛˆŠK™]VÈœØ[\È‹˜ÛÛ\[šY\È‹˜ÛÛXÝÈ‹™X[È‹››Ý\È‹\ÚÜÈ—KÙ]XJOOžØÛÛœÝYNÚYŠ™]š[˜ÛY\Ê
J\™]\›ˆK™Ù]\HŠK]XJOO™HO[[	‰\[ÙˆOOH›Øš™XÝ‰‰ˆP\œ˜^Kš\Ð\œ˜^JJI‰™KšYO[[	‰™K™[XZ[O[[	‰™K™š\œÝÛ˜[YHOO[[	‰™K›\ÝÛ˜[YHO[[š\ÔØ[HŠKY]XJOO™HO[[	‰\[ÙˆOOH›Øš™XÝ‰‰ˆP\œ˜^Kš\Ð\œ˜^JJI‰™KšYO[[	‰™K›˜[YHO[[š\ÐÛÛ\[žHŠK]XJOO™HO[[	‰\[ÙˆOOH›Øš™XÝ‰‰ˆP\œ˜^Kš\Ð\œ˜^JJI‰™KšYO[[š\ÐÛÛXÝŠKY]XJOO™HO[[	‰\[ÙˆOOH›Øš™XÝ‰‰ˆP\œ˜^Kš\Ð\œ˜^JJI‰\[ÙˆK›˜[YOOHœÝš[™È‰‰™K˜ÛÛ\[žWÚYO[[	‰\œ˜^Kš\Ð\œ˜^JK˜ÛÛXÝÚYÊI‰™K˜ÛÛXÝÚYË›[™ÝŒ	‰\[ÙˆK˜Ø]YÛÜžOOHœÝš[™È‰‰\[ÙˆKœÝYÙOOHœÝš[™È‰‰\[ÙˆKœÛÝ\˜ÙWÜÞ\Ý[OOHœÝš[™È‰‰\[ÙˆKœÛÝ\˜ÙWÜ™XÛÜ™ÚYOHœÝš[™È‹š\ÑX[ŠK]XJOO™HO[[	‰\[ÙˆOOH›Øš™XÝ‰‰ˆP\œ˜^Kš\Ð\œ˜^JJI‰™KœØ[\×ÚYO[[	‰™K˜ÛÛXÝÚYO[[	‰™K^O[[	‰™K™]HO[[š\Ó›ÝHŠK™]XJOO™HO[[	‰\[ÙˆOOH›Øš™XÝ‰‰ˆP\œ˜^Kš\Ð\œ˜^JJI‰™KœØ[\×ÚYO[[	‰™K˜ÛÛXÝÚYO[[	‰™K^O[[š\Õ\ÚÈŠK	]XJOO™OOOLOÌN™OLÌL™OLÍL™OLÌLL›X\Ú^™UÐØ]YÛÜžHŠKY]H™]N˜\XØ][Û‹ÚœÛÛŽØ˜\ÙM]ÛÙÒPÒž–UÞÞRM’QœÒÒPÐYÒRÒÒPÐYÒPÐYÒ[[ÒZ›ÙÓU^“[ÙÒPÐYÒPÐZV›[XÌÔ™˜›Q”ÒM’PÒÖVV–ÚS[ÙÒPÐYÒPÐZX‘Ñž™Ž]VUÌ[Z›ÙÒZÓš‘Ú™ÍS[ÙÒPÐYÒPÐZV•ÌZUÝÚSÚPZV[QžX›USSš‘Ú™ÍPV[^L–šS˜”ÒRÒPÐYÒRÒPÐ™[ÙÒPÒš˜ŒŒ]ÖUÍ\–ZSÚP˜ÚPYÒPÐÐÚPYÒPÐYÒPÒœÒM’Q^“ÝÒÒPÐYÒPÐYÒ[MZ•ÕZSÚPZT[^LœÙÕÕž–TÐ”Ö–›Vš˜PÐ‘ÖUÓœ‘ÛTÒ\ÐÚPYÒPÐYÒPÒž–•ÓŒŒÒZSÚPZXUÍZÙŒÛ[’ZS[ÙÒPÐYÒPÐZXÌ›–”ÒM’QLSPÝÒÒPÐYÒPÐYÒ[™[“œÕZSÚPZXRŒÒM“NZX‘Ñš˜LŒ[Ì‘]VLŽ]Z]ÒÒPÐYÒPÐYÒ[^›]‘ÛVÕžXÒM’PÒ›ÙØÞ›Ý“ž›]‘ÛSS˜”ÎZ˜ŒŒ]ÖUÍMS’œÖUÓœ“Ì[Ì‘ZS[ÙÒPÐYÒPÐZXÑÚ˜›U™˜›•[UžRZ›ÙÒZ\Þ]Ó”ÌS•]Q]ÓTÒ\ÐÚPYÒPÐYÒPÒžV–››•›Z›ÙÒZTLSQ“’Z]ÒÒPÐYÒPÐYÒ[”šQŽ\‘ÕYÛXUÕžRZ›ÙÒZ‘^SL•LÓÑÚPÚPYÒPÐŽS[ÙÒPÐYÙ]ÛÙÒPÐYÒPÐZXUÔZSÚP^“‘\ÐÚPYÒPÐYÒPÒVUÌ[Z›ÙÒZÑÖ–Œ›Q“š˜UÕVL•ZS[ÙÒPÐYÒPÐZV‘Õž–LÒœÒœŒSÚPZUŒ•YÖ‘ÎÙšÐŒÖ”ÐŒQÒ›L‘ŒXÌ•YÙ•YÖL‘RZ]ÒÒPÐYÒPÐYÒ[SœÚSÚPZTLžUœÖUÍZÒZ]ÒÒPÐYÒPÐYÒ[S™ÍLÛšÚSÚPZU•“’Z]ÒÒPÐYÒPÐYÒ[QšÖ’›ÌÓZSÚPZT‘Õ›ÐÐŒX›T›ÛYXŒÕVÐ›VUÓœ‘ÛTÒ\ÐÚPYÒPÐYÒPÒ˜Vš˜Œ”›Z›ÙÒZšÍSÕÍRZ]ÒÒPÐYÒPÐYÒ[“ŒV›‘šV[’ZSÚPZUÚS[ÙÒPÐYÒPÐZXÌ•š™Î^RZ›ÙÒ[[V’ž™œUÞ’Z]ÒÒPÐYÒPÐYÒ[“œ[UZSÚPLSQ\ÐÚPYÒPÐYÒPÒœØUÍ\–•Ôœ›LXÛ]ÚSÚPZXRŒÒM“N\ØUÍ\–•ÔœšMZ˜ŒŒ–LŽ]ÑÑYTÎZÑÕžYžV”Ì^–L››S›Z]ÒÒPÐYÒPÐYÒ[™[“œÕZSÚPZXRŒÒM“NZÑÕžYžV–š˜UÕVL•]VLŽ]Z]ÒÒPÐYÒPÐYÒ[›ØŒ[LX•Ò›ÚRM’PÒ\“TÌSU]•LS^QZS[ÙÒPÐYÒPÐZXÛUŒ–•ÍLV”ÒM’PÒZÓZÒZS[ÙÒPÐYÒPÐZYÑ›Ö•ÍLUÖœ–ZSÚPZSÕÝž–LS‘^STÒ\ÐÚPYÒPÐYÒPÒš˜ŒL–ž›]’Z›ÙÕÝÛÙÒPÐYÒPÐYÒPÒ›ÙØÞ›Ý“‘Ö–Œ›Ì“œ•ÍZ–”ÍZ˜ŒŒ˜ÛUž–•ÑžVL™ÚS[ÙÒPÐYÒPÐYÒPÒ›ÙØÞ›Ý“‘Ö–Œ›Ì“œ•ÍZ–”ÍZ˜ŒŒ˜ÑÎ^YÑœÓ›LšXŒž–ŒÚÚPÚPYÒPÐYÒQŒÐÚPYÒPÐYÒPÒž–UÞÌN\ÒM’Q^S]ÛÙÒPÐYÙ”[ÙÒQŒÐÚPYÒ[S˜›”šLÔž’Z›ÙÕÝÛÙÒPÐYÙ]ÛÙÒPÐYÒPÐZXUÔZSÚPL•\ÐÚPYÒPÐYÒPÒ›XVž™Ž]VUÌ[Z›ÙÒZÙ˜ÛT˜šR\ÐÚPYÒPÐYÒPÒœÖVŒZ•ÕZSÚPZT›’›•ÌZšR\ÐÚPYÒPÐYÒPÒ›–•ÍZÖ–ZSÚPZX•ÑœÖ”Ò\ÐÚPYÒPÐYÒPÒ›ÖV™˜›UŒØÌž›ÚRM’QÖš’›ÚPYÒPÐŽS[ÙÒPÐYÙ]ÛÙÒPÐYÒPÐZXUÔZSÚPLSš˜ÜÐÚPYÒPÐYÒPÒ›XVž™Ž]VUÌ[Z›ÙÒZÓšUZS[ÙÒPÐYÒPÐZX‘Ñž™Ž]VUÌ[Z›ÙÒZÜ˜QÍ^˜ŒS[ÙÒPÐYÒPÐZYÛ‘ÕZSÚPZTL”PÖYÔ›NLX›T›ÚR\ÐÚPYÒPÐYÒPÒš˜ŒŒ]ÖUÍMV›ÒZ›ÙÓ^”LS[ÙÒPÐYÒPÐZV[Qš˜L™XŒÕVÒM’PÒ•ØVœŒZÛšÙÖ•ÍLÛUØÛUV–žSPÖ•Þ–›ÞPœšPŒQÕYØÑÎLÖ–YØŒ–YØÌ“œ•ÍZ–”ÍÕÑRQÎ^RQÌZTÐXŒÔYØQÑŒ–”ÐŒV•ÔYØQÛÌ•œÖšPœ›”’QÑYÖLŽ]ÒŒ–]RZ]ÒÒPÐYÒPÐYÒ[^›]‘ÛVÕžXÒM’PÒ›ÙØÞ›Ý“ž›]‘ÛSS˜”Î\šNZ–V›[N[Ø›“˜šR\ÐÚPYÒPÐYÒPÒ›–•ÍZÖ–ZSÚPZX•ÑœÖ”Ò\ÐÚPYÒPÐYÒPÒ›ÖV™˜›UŒØÌž›ÚRM’RžYÕ\ÐÚPYÒPÐYÒPÒž–UÞÌN\ÒM’Q^S^]ÒÒPÐYÒPÐYÒ[UUÛØÞRM’QœÒÒPÐYÒPÐYÒPÐÐÚPYÒPÐYÒPÐYÒPÐZV•ÌZUÝÚSÚPZVL‘Œ–”Í\XŒšXÌŽ]TQÑÖ–Œ›Ì“œ•ÍZ–”ÍZ˜ŒŒS[ÙÒPÐYÒPÐYÒPÐYÒ[”XÑÕZSÚPZUŒŽ^X^RRÒPÐYÒPÐYÒPÐŽPÚPYÒPÐYÒQŒÐÚPYÒPÐYÒPÒØQÎ]V–ZSÚP˜ÚPYÒPÐYÒPÐYÙ]ÛÙÒPÐYÒPÐYÒPÐYÒ[MLX•Ò›ÚRM’PÒ^•LSU^“‘L“žR\ÐÚPYÒPÐYÒPÐYÒPÐZYÖ”ÒM’PÒ–ŒÒœ’YÛÙÒPÐYÒPÐYÒRÒPÐYÒPÐYÖÝÒÒPÐYÒPÐYÒ[”šŒÓZSÚP˜’[’•PÒ\ÒPÒ•L››S›[ÒPÐYÒRÒPÐ™[ÙÒPÒšÖ•ÑœØÞRM’QœÒÒPÐYÒRÒÒPÐYÒPÐYÒ[MZ•ÕZSÚPZTV›Û”ŒXÛUYÕL“œ•ÍZ–”Ð]QVšL›ØVRQ’›ÑÑœÚR\ÐÚPYÒPÐYÒPÒš˜ŒŒ]ÖUÍMV›ÒZ›ÙÓ^”LS[ÙÒPÐYÒPÐZVLŽ]YÑš™Ž\’ZSÚP˜“•LÖÝÒÒPÐYÒPÐYÒ[SšÕ›˜ŒÒRZ›ÙÒ[S˜•Ì[ÛSœUÝÚS[ÙÒPÐYÒPÐZXÌÔšŒ•ZSÚPZXÑÑœÌ\šL[YÞÒZ]ÒÒPÐYÒPÐYÒ[T›Ì“žXVŒUÎ]RZ›ÙÒZÛÑÎ^YÕšÒQÓ˜–œÖ–›ÐØÛN\V•ÓŒZ]ÒÒPÐYÒPÐYÒ[QŒÕYÒM’Q\ÐÚPYÒPÐYÒPÒØÛN]V›‘ŽZ•ÎLX›”ZSÚP]Ó[ÙÒPÐYÒPÐZV–ŒUÌZÕ™–‘Û˜ÑÎ^˜VœŒSÚPZVLž˜Ì•ZS[ÙÒPÐYÒPÐZYŽ^XLNLÛQšÖ–ZSÚP˜’[NLQÕžR[ÐÚPYÒPÐYÒPÒž˜ŒÕžVL•™˜ÌÛ™ÕZ›ÙÒ[UUÌ]Ø‘Õ]UÌ]ØŒÒŒZ]ÒÒPÐYÒPÐYÒ[“™š–•Ž^V•Ó˜ÛT™˜UÔZSÚPZV––œÖ”Ì\XŒ’]TÒ\ÐÚPYÒPÐYÒPÒ››”žYUŽLV›Z›ÙÒ[UVŒUÍ[“Ü–ZR\ÐÚPYÒPÐYÒPÒž–UÞÌN]™š˜ŒŒ[Z›ÙÒ[™˜šR\ÐÚPYÒPÐYÒPÒžV•Ó›Vš[^’š‘ÑVL•ZSÚP]ÐÚPYÒPÐŽPÚPYÖÝÒÒPÐZX›NL–ZSÚP˜ÚPYÒPÐÐÚPYÒPÐYÒPÒš˜ŒLUÓŒ›ÒZ›ÙÓ‘L“[ÙÒPÐYÒPÐZXÌ‘œÖ–™˜UÔZSÚP^Z“\ÐÚPYÒPÐYÒPÒŒ–Z›ÙÒ[ŒUÞÒR››•ž––YÙÎØÌÐ›UÜÝRQS˜•ÌLX›[–VœŒÖLŽ]YÛYÕž’R’QÒ›QÓ›ÖUÞÖ•Í[˜UÍ[“R\ÐÚPYÒPÐYÒPÒšÖV›Z›ÙÒZ’]ÓZ•]U]U•SQÍ“UM“U˜RYÛÙÒPÐYÙ”ÝÒÒPÐYÒRÒÒPÐYÒPÐYÒ[S˜›”šLÔ™˜UÔZSÚPLSš˜ÜÐÚPYÒPÐYÒPÒž–UÞÌN\ÒM’Q^S^]ÒÒPÐYÒPÐYÒ[”›RZSÚPZT‘Û–LÕž˜Ì•šÒQÍ[PŒ–ŒUÍ[’QÛXVœVœUYØUÍL˜Œž˜UÍ[’R˜Û”š’]VÍXØšÓšUYØ•ÕYÛ˜›UšÒR˜•ÕŒQÛVžPš[NLYÐš˜ŒŒZYŒUÒœÖ”ÐœÖ•Ì]˜›“]RQM[•ÔYÙÎÖ›N\Ø‘ÎLÒRÒQÎ]RQ’[TÐšYÔ›––]RZ]ÒÒPÐYÒPÐYÒ[TšÕZSÚPZSZ^S”ÌÓZL‘”]ÓÕÞSQÞSU›ÚS[ÙÒPÐYÒPÐZVVŒUÓ›Ø•ÕYZSÚP˜ÚPYÒPÐYÒPÐYÙ]ÛÙÒPÐYÒPÐYÒPÐYÒ[•žXÒM’PÒ›ÙØÞ›Ý“‘Ö–Œ›Ì“œ•ÍZ–”ÍZ˜ŒŒ–›[Ö–]–LŽ][•ž™ÛX‘Õ]‘ÕŒ^“žXŒÐ˜Ì‘œÓšÖšR\ÐÚPYÒPÐYÒPÐYÒPÐZX›Q”ÒM’PÒš˜ŒŒZYŒUÒœÖ”Ì\Ö•Ì]˜›“]Ò˜ÑÎ^–UÝÝXÑÔ›RYÛÙÒPÐYÒPÐYÒRÒPÐYÒPÐYÖ[ÙÒPÐYÙ”[ÙÒQŒÐÚPYÒ[”šÌ’Z›ÙÕÝÛÙÒPÐYÙ]ÛÙÒPÐYÒPÐZVLŽ]YÑš™Ž\ÒM’QLSš]ÒÒPÐYÒPÐYÒ[“š‘Õž–›ÒZ›ÙÓU^“[ÙÒPÐYÒPÐZYÕÒM’PÒ••ÍZÒQÓžXŒÙVVYØ•Ñœ›”››QVL•YØL›YÛÙÒPÐYÙ”ÝÒÒPÐYÒRÒÒPÐYÒPÐYÒ[S˜›”šLÔ™˜UÔZSÚPLSš˜ÜÐÚPYÒPÐYÒPÒž–UÞÌN\ÒM’Q^S^]ÒÒPÐYÒPÐYÒ[”›RZSÚPZUL“›Ö•ÔŒX‘ÕYØ•Î]˜šPžXŒ“œ’QÓ˜›–›Û“œŒÖ‘ÕžR\ÐÚPYÒPÐYÒPÒšÙÕ™–‘ÑŒ”ÒM’PÒ^SQLS^“L•‘L“Ú‘LSÚ]ÕÚR\ÐÚPYÒPÐYÒPÒšØŒ[”šÕZSÚPZSZ^S”ÌÓÌÓU”]ÓÕÝÓQÝÓPÒRÒPÐYÒRÒPÐ™ÛŒÈ‹ÌXJ

OOžØÛÛœÝOT™J
KÝ‹—OZÙ]

NÜ™]\›ˆšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]ËLž^X]]È]N‹Ú[™[Ž›šœÞÊÛ‹ØÚ[™[Ž–ÛšœÞ
ØKØÚ[™[Ž›šœÞ
ØKØÚ[™[Ž™J˜Ü›Kš[\Ü]HŠ_J_JKšœÞ
‹ØÚ[™[ŽœÝ]\ÏOOHšYHÛšœÞ
™]Ú[\Üš[N›‹˜[œÛ]N™_JNœÝ]\ÏOOH™\œ›ÜˆÛšœÞ
™]Ú[\ÜÝ]N[\Üš[N›‹˜[œÛ]N™_JNœÝ]\ÏOOHš[\Ü[™ÈÛšœÞ
Y]Ú[\ÜÝ]N˜[œÛ]N™_JN›šœÞ
]Ú[\ÜÝ]N™\Ù]œ‹˜[œÛ]N™_J_JW_J_J_K’[\ÜYÙHŠN×Ì‹œ]H‹Ú[\ÜŽØÛÛœÝ™]XJ
Ú[\Üš[N™K˜[œÛ]NJOO›šœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹M‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH‹Ú[™[Ž
˜Ü›Kš[\ÜšYK™\ØÜš\[Û—ÌH‹×Îˆ–[ÝHØ[ˆ[\ÜØ[\Ë›Ü\Y\ËÝ\ÝÛY\œË›ØœË›Ý\Ë[™\ÚÜËˆŸJ_JKšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH‹Ú[™[Ž–Ý
˜Ü›Kš[\ÜšYK™\ØÜš\[Û—Ìˆ‹×Îˆ‘]H]\Ý™H[ˆH”ÓÓˆš[HX]Ú[™ÈH›ÛÝÚ[™ÈØ[\NˆŸJKˆ‹šœÞ
˜H‹ØÛ\ÜÓ˜[YNˆ[™\›[™H‹ÝÛ›ØYˆš[\Ü\Ø[\KšœÛÛˆ‹™YŽ•Y]Ú[™[ŽˆœØ[\KšœÛÛˆŸJW_JW_JKšœÞ
ÙÙKÚ[\Üš[N™K˜[œÛ]NJW_JK’[\Üœ›ÛRœÛÛ’YHŠK™]XJ
Ú[\ÜÝ]N™K[\Üš[N˜[œÛ]N›ŸJOO›šœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞÊZÝ˜\šX[ˆ™\ÝXÝ]™H‹Û\ÜÓ˜[YNˆ›X‹M‹Ú[™[Ž–ÛšœÞ
ÐËßJKšœÞ
ÎKØÚ[™[Ž›Š˜Ü›Kš[\Ü™\œ›Ü‹[˜X›H‹×Îˆ•[˜X›HÈ[\Ü\Èš[KˆŸJ_JKšœÞ
šØÚ[™[Ž›šœÞ
œ‹ØÚ[™[Ž™K™\œ›Ü‹›Y\ÜØYÙ_J_JW_JKšœÞ
ÙÙKÚ[\Üš[N˜[œÛ]N›ŸJW_JK’[\Üœ›ÛRœÛÛ‘\œ›ÜˆŠKÙÙOXJ
Ú[\Üš[N™K˜[œÛ]NJOO›šœÞÊXKÛÛ”ÝX›Z]˜JOžÙJ‹™š[Kœ˜]Ñš[J_K›Û”ÝX›Z]ŠKÚ[™[Ž–ÛšœÞ
NKØÛ\ÜÓ˜[YNˆ›]M‹ÛÝ\˜ÙNˆ™š[H‹˜[Y]N›J
KÚ[™[Ž›šœÞ
ÚKÜÛÝ\˜ÙNˆœÜ˜È‹]Nˆ]HŸJ_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^\ÝYžKY[™]M‹Ú[™[Ž›šœÞ
™KÝ\NˆœÝX›Z]‹Ú[™[Ž
˜Ü›Kš[\Ü˜XÝ[Û‹š[\ÜŠ_J_JW_JK’[\Üœ›ÛRœÛÛ‘›Ü›HŠKY]XJ
Ú[\ÜÝ]N™K˜[œÛ]NJOO›šœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
Ù]ßJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›^KM^\ÛH^XÙ[\ˆ^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž
˜Ü›Kš[\ÜœÝ]\Ëš[—Ü›ÙÜ™\ÜÈ‹×Îˆ’[\Ü[ˆ›ÙÜ™\ÜËX\ÙHÛ‰Ý˜]šYØ]H]Ø^Hœ›ÛH\ÈYÙKˆŸJ_JKšœÞ
ÙKÚ[\ÜÝ]N™K˜[œÛ]NJW_JK’[\Üœ›ÛRœÛÛ”Ý]\ÈŠK]XJ
Ú[\ÜÝ]N™K™\Ù]˜[œÛ]N›ŸJOO›šœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ›X‹M^\ÛH‹Ú[™[Ž–ÛŠ˜Ü›Kš[\ÜœÝ]\Ë˜ÛÛ\]HŠKˆ‹™]
K™˜Z[Y[\ÜÊOÛšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^Y\ÝXÝ]™H‹Ú[™[Ž–ÛŠ˜Ü›Kš[\ÜœÝ]\ËœÛÛYWÙ˜Z[Y‹×Îˆ”ÛÛYH™XÛÜ™ÈÙ\™H›Ý[\ÜYˆŸJKˆ—_JKšœÞ
Ù]Ù˜Z[Y[\ÜÎ™K™˜Z[Y[\ÜË˜[œÛ]N›ŸJW_JN›šœÞ
œÜ[ˆ‹ØÚ[™[Ž›Š˜Ü›Kš[\ÜœÝ]\Ë˜[ÜÝXØÙ\ÜÈ‹×Îˆ[™XÛÜ™ÈÙ\™H[\ÜYÝXØÙ\ÜÙ[KˆŸJ_JW_JKK™˜Z[Y[\ÜË™X[Ë›[™ÝÛšœÞÊZÝ˜\šX[ˆ™\ÝXÝ]™H‹Û\ÜÓ˜[YNˆ›X‹M‹Ú[™[Ž–ÛšœÞ
ÐËßJKšœÞ
ÎKØÚ[™[Žˆ’›Øˆ[\Ü\œ›ÜˆŸJKšœÞ
šØÚ[™[Ž™K™˜Z[Y[\ÜË™X[ÖÌOË™\œ›ÜÏÈ•H]X˜\ÙH™Z™XÝYH›Øˆ™XÛÜ™ˆŸJW_JN›[šœÞ
ÙKÚ[\ÜÝ]N™K˜[œÛ]N›ŸJKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^\ÝYžKY[™]M‹Ú[™[Ž›šœÞ
™KÝ˜\šX[ˆ›Ý][™H‹ÛÛXÚÎÚ[™[Ž›Š˜Ü›Kš[\Ü˜XÝ[Û‹š[\ÜØ[›Ý\ˆ‹×Îˆ’[\Ü[›Ý\ˆš[HŸJ_J_JW_JK’[\Üœ›ÛRœÛÛ”ÝXØÙ\ÜÈŠK™]XJOO™KœØ[\Ë›[™ÝŒK˜ÛÛ\[šY\Ë›[™ÝŒK˜ÛÛXÝË›[™ÝŒK™X[Ë›[™ÝŒK››Ý\Ë›[™ÝŒK\ÚÜË›[™ÝŒš\Ñ˜Z[Y[\ÜÈŠKÙ]XJ
Ù˜Z[Y[\ÜÎ™K˜[œÛ]NJOO›šœÞ
˜H‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹ÛÛXÚÎ˜J\Þ[˜ÈOžØÛÛœÝR”ÓÓ‹œÝš[™ÚYžJJKO[™]È›ØŠÜ—KÝ\Nˆ›ØÝ]ÜÝ™X[HŸJKÏ]Ú[™ÝË•T“˜Ü™X]SØš™XÝT“
JNÛ‹˜Ý\œ™[\™Ù]š™Y\ßK›ÛÛXÚÈŠKÝÛ›ØYˆ˜]ÛZXËXÜ›KZ[\Ü\™\ÜšœÛÛˆ‹Ú[™[Ž
˜Ü›Kš[\Ü˜XÝ[Û‹™ÝÛ›ØYÙ\œ›Ü—Ü™\Ü‹×Îˆ‘ÝÛ›ØYH\œ›Üˆ™\ÜŸJ_JK‘ÝÛ›ØY\œ›Ü‘š[P]ÛˆŠKÙOXJ
Ú[\ÜÝ]NžÜÝ]Î™K˜Z[Y[\ÜÎK˜[œÛ]N›ŸJOOžØÛÛœÝVÞÙ[]NˆœØ[\È‹[\ÜY™KœØ[\Ë˜Z[YœØ[\Ë›[™ÝKÙ[]Nˆ˜ÛÛ\[šY\È‹[\ÜY™K˜ÛÛ\[šY\Ë˜Z[Y˜ÛÛ\[šY\Ë›[™ÝKÙ[]Nˆ˜ÛÛXÝÈ‹[\ÜY™K˜ÛÛXÝË˜Z[Y˜ÛÛXÝË›[™ÝKÙ[]Nˆš›ØœÈ‹[\ÜY™K™X[Ë˜Z[Y™X[Ë›[™ÝKÙ[]Nˆ››Ý\È‹[\ÜY™K››Ý\Ë˜Z[Y››Ý\Ë›[™ÝKÙ[]Nˆ\ÚÜÈ‹[\ÜY™K\ÚÜË˜Z[Y\ÚÜË›[™ÝWNÜ™]\›ˆšœÞÊZKØÚ[™[Ž–ÛšœÞ
^™KØÛ\ÜÓ˜[YNˆœÜ‹[Û›H‹Ú[™[Ž›Š˜Ü›Kš[\ÜœÝ]\ËX›WØØ\[ÛˆŠ_JKšœÞ
KØÚ[™[Ž›šœÞÊUØÚ[™[Ž–ÛšœÞ
ÑKØÛ\ÜÓ˜[YNˆËLHŸJKšœÞ
ÑKØÛ\ÜÓ˜[YNˆ^\šYÚ‹Ú[™[Ž›Š˜Ü›Kš[\ÜœÝ]\Ëš[\ÜYŠ_JKšœÞ
ÑKØÛ\ÜÓ˜[YNˆ^\šYÚ‹Ú[™[Ž›Š˜Ü›Kš[\ÜœÝ]\Ë™˜Z[YŠ_JW_J_JKšœÞ
šKØÚ[™[Žœ‹›X\
OO›šœÞÊUØÚ[™[Ž–ÛšœÞ
QKØÛ\ÜÓ˜[YNˆ™›Û[YY][H‹Ú[™[ŽšK™[]_JKšœÞ
QKØÛ\ÜÓ˜[YNˆ^\šYÚ^\ÝXØÙ\ÜÈ‹Ú[™[ŽšKš[\ÜYJKšœÞ
QKØÛ\ÜÓ˜[YN•J^\šYÚ‹K™˜Z[YŒ	‰ˆ^Y\ÝXÝ]™HŠKÚ[™[ŽšK™˜Z[YJW_KK™[]JJ_JW_J_K’[\ÜÝ]ÈŠKOXÈÈŒKKŒHŒ‹LËLL‚”™XYX›Ý]H\]\ÈÛ›[™NˆÐ]ÛZXÈÔ“HX\˜ÚŒˆ\]\×JÎ‹ËÛX\›Y[X‹˜ÛÛKØ›ÙËÌŒ‹ÌËÌLËØ]ÛZXËXÜ›K[X\˜Ú]\]\Ëš[
W‚—‚ˆÈÈœ™XZÚ[™ÈÚ[™ÙW‚—‚ŠˆX›HÛÛXÝ›Ý\×\È™Y[ˆ™[˜[YYÛÛXÝÛ›Ý\×‚ŠˆX›HX[›Ý\×\È™Y[ˆ™[˜[YYX[Û›Ý\×‚ŠˆÛÛ[[ˆÝ]PX˜œ—[ˆX›HÛÛ\[šY\×\È™Y[ˆ™[˜[YYÝ]WØX˜œ—‚—‚–[ÝH]\Ý[ˆHZYÜ˜][ÛˆÈ\]H[Ý\ˆ]X˜\ÙHØÚ[XN—‚—‚—‚›XZÙHÝ\X˜\ÙK[ZYÜ˜]KY]X˜\ÙW‚—‚—‚ˆÈÈÚ]	ÜÈÚ[™ÙY‚—‚Šˆ™\XÙH™XXÝYZ[ˆÚ]ÚYÛˆYZ[ˆÚ]žHXY[ÜœÚÈ[ˆÌL‚ŠˆYÔÓÈÝ\Ü[™ØÝ[Y[][ÛˆžHšH[ˆÌMNKÌMŒW‚ŠˆYÙ][™ÜÈYÙHžHž˜[š[›ÝÈ[ˆÌMŒ—‚ŠˆYXZ[›ÜØ\™[™ÈžHY\žSZXÚ[[ˆÌNW‚ŠˆYXš[]HÈ[\Ü]Hœ›ÛH[›Ý\ˆÔ“HžHšH[ˆÌLÌ×‚ŠˆYÝ\Ü›Üˆ]XÚY[È[ˆ[˜›Ý[™[XZ[ÈžHÛ^MÈ[ˆÌMN‚ŠˆY[Øš[H\žHÛ^MÈ[ˆÌLÍ‚ŠˆYÝ\Ü›Üˆ][\H[XZ[È[™Û™H[X™\œÈ\ˆÛÛXÝžHÛ^MÈ[ˆÎ‚ŠˆY™]ÈšY[ÈÈ”ÓÓˆ[\ÜžHÛ^MÈ[ˆÌMÎW‚ŠˆYXš[]HÈØYÛ\ˆ›Ý\ÈÛˆ[X[™žHY\žSZXÚ[[ˆÌMÍ×‚ŠˆYÝ\ÝÛH[[Y]žHžHšH[ˆÍÎW‚ŠˆYHÛÛ™š\›X][ÛˆYÙHÚ[ˆHš\œÝ\Ù\ˆ™YYÈÈÛÛ™š\›HZ\ˆ[XZ[žHXY[ÜœÚÈ[ˆÌMMW‚ŠˆYXØÙ\ÜÈÛÛ›ÛžHšH[ˆÍÌ‚Šˆš^ÛÛœÚ\Ý[˜ÞH[ˆX›H[™šY[˜[Y\ÈžHšH[ˆÌLÍ—‚Šˆš^]\ÈÛÛY][Y\È\X\š[™ÈÚYYžHH^HžHY\žSZXÚ[[ˆÌNL‚Šˆš^\œ›ÜˆY\ÜØYÙHÚ[ˆ\Ù\ˆÜ™X][Ûˆ˜Z[ÈžHXY[ÜœÚÈ[ˆÌMLW‚Šˆš^›ÝH\Ý\™›Ü›X[˜ÙHÛˆ[Øš[HžHž˜[š[›ÝÈ[ˆÌMŒ‚Šˆš^]XÚY[™]šY]ÜÈžHšH[ˆÌMM‚Šˆš^“ÈÛXÚY\ÈÛˆHØ[\ÈX›HžHšH[ˆÍÍ‚Šˆš^Û‹]KY›HÛÛ\[žHÜ™X][ÛˆžHž˜[š[›ÝÈ[ˆÌLŒ‚Šˆš^X[\Ý\œ›ÜˆžHšH[ˆÌLŒ—‚Šˆš^™]È\ÚÈX[ÙÈÛÜÚ[™È]™[ˆYˆ\ÚÈ\È[˜[YžHž˜[š[›ÝÈ[ˆÎW‚Šˆš^ÚYÛ\\œ›Üˆ›ÝYšXØ][Ûˆ›Ý™Z[™È\Ü^YYžHÚVÓ[ˆÌLÌ—‚Šˆš^\ÜÝÛÜ™™XÛÝ™\žH[XZ[Ù[›ÝYšXØ][Ûˆ›ÝÚÝÚ[™ÈžHÚVÓ[ˆÌMW‚Šˆš^Ý\X˜\ÙH]][XØ][ÛˆÞ\Ý[H›ÜˆYÙH[˜Ý[ÛœÈžHXY[ÜœÚÈ[ˆÌML—‚Šˆš^•ÕØØ[HžHXY[ÜœÚÈ[ˆÌML×‚Šˆš^[Øš[HÚY]ÈZYÚÛˆÛÛÙÛH^[]šXÙ\ÈžHÛ^MÈ[ˆÌMÌ—‚Šˆš^[Øš[H›ÝKÝ\ÚËØÛÛXÝXY\œÈÈ\ÙH[\Ú\ÈžHÚVÓ[ˆÌMÍ—‚Šˆš^ÛÛXÝY]ÚY]XY\ˆ[˜Ø][ÛˆÛˆ[Øš[HžHÚVÓ[ˆÌMÎ‚Šˆš^]R[œ][™]U[YR[œ]Ûˆ[Øš[HØY˜\šHžHÛ^MÈ[ˆÌN‚Šˆš^ÛÛXÝ[œ]Ü[ÛœÈØ[››Ý™HØÜ›ÛYÛˆ[Øš[HžHÛ^MÈ[ˆÌNW‚Šˆš^›ÝH]XÚY[[][ÛˆÛˆ›ÝH™[[Ý™HžHÚVÓ[ˆÌMÌW‚Šˆš^™[[ÝH[š]ØÜš\žH\ÚÚ[™È›ÜˆÜ™È[™™YÚ[ÛˆžHY\žSZXÚ[[ˆÌNLW‚Šˆš^Ý\X˜\ÙK\™[[ÝKZ[š][™›Ù\Ý\ØÜš\ÈžHÛ^MÈ[ˆÌM×‚Šˆš^]ÛZXÈ™YÚ\ÝžHÛÛ\Û™[È[\ÜÈžHšH[ˆÌLN‚Šˆš^™YÚ\ÝžKšœÛÛˆZ\ÜÚ[™Èš[\È[™\[™[˜ÚY\ÈžHÛ^MÈ[ˆÌNM×‚Šˆš^RHÛÛXÝÛÛ\Û™[ÙX\˜Ú[œ][™XÛÛˆÛÛXÝš[\ˆžH\Ø[[™ÙÙÈ[ˆÌL×‚Šˆš^\ÜÈ[™™[[Ý™H[\ÙY[\ÜÈžHZ]H[ˆÍŽW‚Šˆ[\˜\š[Ý\È\[™[˜ÚY\È
›Û\š]\ÝÛ›ËÙ\ÚÛ\\šYžK\Ë]˜[YKÝÜžX›ÛÚËZ[š[X]Ú[Ù[ÛÛ^›ÝØÛÛÜÙÊHžH\[™X›ÝØ›ÝH[ˆÍËÎËÌLÌÌLÍKÌLÍËÌLÎÌM‹ÌMÌMKÌMMËÌM‹ÌMÌËÌMÍÌN‹ÌNËÌNÌNKÌNMÌNM—‚ŠˆÑØ×H[\›Ý™HØÝ[Y[][ÛˆX›Ý][š]X[›ÙXÝ[ÛˆÙ]\žHšH[ˆÍÍ×‚ŠˆÑØ×HØÝ[Y[[XZ[Ù]\žHšH[ˆÍÌW‚ŠˆÑØ×HYÝ\›YÚØÝ[Y[][ÛˆžH›Û˜][˜\›˜][[ˆÌLL‚ŠˆÑØ×Hš^ØÝ[Y[][Ûˆ[šÜÈžHXZ[‹]ZÈ[ˆÌLM‹šH[ˆÌL×‚ŠˆÑØ×HYÙ][™ÈÝ\Y[šÈÈY[H[™š^ÙÛÈÚ^™HžH›Û˜][˜\›˜][[ˆÌLLW‚ŠˆÐÚÜ™WH™Y˜XÝÜˆ™[[ÝH[š]ØÜš\žHšH[ˆÍÍ—‚ŠˆÐÚÜ™WHY™YÚ\ÝžHš[H›Üˆ]ÛZXÈÔ“HžH›Û˜][˜\›˜][[ˆÌLMW‚ŠˆÐÚÜ™WHYHZ[[XˆÛÛ[X[™ÈX›\Ú[ˆ]ÛZXËXÜ›H›ÙH[Ù[HžHY\žSZXÚ[[ˆÍ—‚ŠˆÐÚÜ™WH[ÝÈÈÛÝ\˜Ù[X\È[ˆ›ÙXÝ[ÛˆžHšH[ˆÎ‚ŠˆÐÚÜ™WH[\›Ý™HÚ]XˆÛÛ[][š]HÝ[™\™ÈžH\š[Y][ˆÍÌ×‚—‚ˆÈÈ™]ÈÛÛšX]Üœ×‚Šˆ\[™X›ÝØ›ÝHXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í×‚ŠˆZ]HXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍŽW‚ŠˆšHXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍÌ‚ŠˆÞTÚQÕÈXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍÎ‚Šˆž˜[š[›ÝÈXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÎW‚Šˆ[ÛžXÛXZ[ˆXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Î—‚Šˆ›Ý\ÈXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÎL×‚Šˆ\Ø[“X\›Y[XˆXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÎM—‚ŠˆXY[ÜœÚÈXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌL‚Šˆ\Ø[[™ÙÙÈXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌL×‚ŠˆXZ[‹]ZÈXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌLM—‚ŠˆÓZZÜØÚHXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌLŒ×‚ŠˆÚVÓXYHZ\ˆš\œÝÛÛšX][Ûˆ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌLÌ—‚—‚ŠŠ‘[Ú[™Ù[ÙÊŠŽˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KØÛÛ\\™KÝŒKŒŒ‹‹ŒKKŒ‚ˆÈÈŒKŒŒHŒ‹LËLL‚ˆÈÈÚ]	ÜÈÚ[™ÙY‚Šˆš^
ÜÊNˆ\Ü˜YHXÚØYÙ\ÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌW‚Šˆ™X]
ÚYÛ\
NˆY\Ù\ˆÚYÛ\Ý\ÜžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Ì×‚Šˆ™X]
\ØY
NˆÙ[™š[\ÈÈÝÜ˜YÙHÝ\X˜\ÙHžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í‚Šˆš^
ŠNˆYZ\ÜÚ[™È›ÝÈÛXÚY\ÈÈ]X˜\ÙHžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍW‚Šˆ™X]
Ü›JNˆ˜XÚÜÜ[[È™X]\™\ÈÈ]ÛZXËXÜ›HžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í×‚Šˆ™X]
]X˜\ÙJNˆ\]HÛÛ[[œÈÈX]ÚHÔ“H[[È\\ÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Ì—‚Šˆ™X]
Ý\X˜\ÙJNˆ\]H[š]›Ú™XÝØÜš\žH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í—‚Šˆ™X]
]ÛZXÊNˆÜ™X]HšY]È›ÜˆÛÛ\[šY\È[™ÛÛXÝ
È˜[ˆ\Ù\œÈžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌL‚Šˆ™X]
Ü›JNˆYÝ\X˜\ÙH\ÞHØÜš\ÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÎW‚Šˆ™X]
ÜÊNˆY\ÞHØÜš\žH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Î‚Šˆ™X]
ÜÊNˆYÒKÐÑ\[[™HžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌLW‚Šˆš^
[š]
Nˆ™[[Ý™HÙÚ[ˆ™\]Z\™Y›ÝYšXØ][ÛˆYˆÜ›H\È›Ý[š]X[^™YžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌL×‚Šˆ™X]
Ü›JNˆÙ]\Ò[XYÙH[È]T›ÝšY\ˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌL—‚Šˆš^
Ü›JNˆ[™HYÜÈ›ÜˆÛÛXÝ^ÜžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌMW‚Šˆš^
Ü›JNˆÙ]Û™H[X™\ˆ[ÈÜ]šY[È
È\]HÙ]ÛÛ\[žP]˜]\ˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌM‚Šˆš^
ÛÛXÝÊNˆ™]\›ˆ[Ø[\È[ˆØ[\ÈÙ[XÝÜˆžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌM—‚Šˆš^
Ü›JNˆ]H˜[Y][Ûˆ
È™Y˜XÝÜˆ\ØYÐXÚÙ]žH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌNW‚Šˆš^
ÛÛXÝ
Nˆ\Ü^H[šÙY[ˆ›Ùš[H\ÈT“X™[[ˆÛÛXÝ\ÚYHžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌN‚Šˆš^
ÜÊNˆÚ]XˆYÙ\ÈÙ\™H›Ý\ÚY\È^XÝYžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌŒ—‚Šˆš^
Ü›JNˆ\HÝYÙÙ\Ý[ÛœÈœ›ÛH™]šY]ÜÈžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌŒW‚Šˆš^
ÜÊNˆÚ]XˆYÙ\ÈÙ\™H›Ý\ÚY\È^XÝYžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Ì‚Šˆš^
Ù][™ÊNˆ\]HÝ\œ™[\Ù\ˆ[™›Ü›X][Ûˆ[ˆÝ\X˜\ÙHžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌŒ×‚Šˆ™X]
]]
NˆY™\Ù]\\ÜÝÛÜ™›ÜˆØ[\ÈžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Ì—‚Šˆš^
Ü›JNˆ[™H\ÞH›Üˆœ›ÝÜÙ\ˆ›Ý]\ˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÌ‚Šˆš^
šY]ÜÊNˆYÙXÝ\š]H[›ÚÙ\œÈÈšY]ÜÈÈ]›ÚY]HXZÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌŽW‚Šˆš^
\ÞJHžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÌW‚Šˆš^
\ÞJNˆYÝ\X˜\ÙH›Ú™XÝ\›[™[›ÛˆÙ^HÈÒKÐÑžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÌ—‚Šˆš^
ÙÚ[ŠNˆš^YZ[ˆ˜\ÙH˜[YHžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÌ×‚Šˆš^ˆÙX\˜ÚÛÛXÝ
È[\›Ý™H[\ÜÛÛXÝˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌŽ‚Šˆ™X]
\ÚÊNˆ\ÜÛØÚX]H\ÚÈÈ[ˆØ[\×ÚY
È[\›Ý™HØÝ[Y[][ÛˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌW‚Šˆš^
ZYÜ˜][ÛœÊNˆ™XÜ™X]HÛÛXÝÜÝ[[X\žHšY]È[ˆ™[[Ý™HXÜ]Z\Ú][ÛˆZYÜ˜][ÛˆžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÍW‚Šˆ™X]
Ü›JNˆ™\XÙHœ›ÝÜÙ\”›Ý]\ˆÚ]\Ú›Ý]\ˆ[™[™H™\Ù]Ø[8 )ˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÍ—‚Šˆ™X]
]]
Nˆ\]HÝ\X˜\ÙH\ÜÝÛÜ™šXHÔ“HRHžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÍ‚Šˆ™X]
]T›ÝšY\ŠNˆYÝ\X˜\ÙHÈ˜ZÙ\™\Ýš[\ˆY\\ˆžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌŒ‚Šˆš^
X[ÊNˆÛÛ\[žH˜[YHØ\È›Ý\Ü^YY[ˆX[ÚÝÈ[Ù[žH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÎ‚Šˆš^
XXÓÔÊNˆ\]HXÚØYÙHØÚÈÈ[˜ÛYH›Û\˜]]™Hš[˜\šY\ÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍW‚ŠˆY˜ZÙH™\Ý›ÝšY\ˆžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Ì×‚Šˆ™X]
ÜÊNˆYÜ[ÛˆÈ\ÞHÈ[›Ý\ˆ™\ÜÚ]ÜžHžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÍ×‚Šˆ™X]
RJNˆ[\›Ý™H\Ú›Ø\™[™\Ü^H[\HYÙ\ÈÛ›HYˆ›Èš[\œÈ\™H™\Ù[žH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í‚Šˆ™X]
ØÊNˆY[šÙYÝ\X˜\ÙHÛÛ™šYÝ\˜][ÛˆÝZYHžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌÎW‚Šˆš^
^
Nˆ™YXÙH[š]X[ØY[™È[YHžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í—‚Šˆ™X]
XZ[
NˆYÛÛXÝ›ÝHšXH[XZ[žHÛ^MÈ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÌM×‚Šˆš^
\™ŠNˆÙÛÝ]\Ù\ˆYˆˆ\È™Y[ˆ™\Ù][™[\›Ý™HÙÚ[ˆYÙHØY\™›Ü›X[˜ÙHžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍW‚ŠˆÙXÊ[š]ÜÝ]JNˆ[š]ÜÝ]HšY]È\È›ÈÛ™Ù\ˆXZÚ[™ÈØ[\ÈÛÝ[žH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í—‚Šˆš^
Ü›JNˆš^ÚYÛ\YÙHÙÛÈÛÛÜˆžHÛ^MÈ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í‚Šˆš^
]˜]\ŠNˆ]˜]\ˆ\ØYÙ\È›Ý˜Z[[ž[[Ü™HYˆ›ÈÚ[™ÙH[ˆš[x )ˆžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í‚Šˆ™X]
]]
Nˆ[™H™\Ù]\ÜÝÛÜ™[™[š]H\Ù\ˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í×‚Šˆ™X]
]]
Nˆ›Üˆ™\Ù][™È\Ù\ˆ\ÜÝÛÜ™Ù[™™\Ù][XZ[žH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í×‚Šˆš^
ÜÊNˆ\]HÜ›ÜÜÈ\ÞHØÝ[Y[][ÛˆžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍL‚Šˆš^
[\Ü
NˆYÜÈ[™ÛÛ\[šY\È\™H›ÈÙÙ\ˆ\XØ]Y\š[™È[\ÜÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍL×‚Šˆš^
XZ[
NˆÝ\Ü™XÚ\Y[Ú][\H˜[YHžHÛ^MÈ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍL—‚Šˆ™X]
Ü›JNˆ\]HXZ[[\]\ÈžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍLW‚Šˆš^
ÙÚ[ŠNˆš^\Ù\ˆ\È›Ý]]ÛX]XØ[HÙÙÙY[ˆY\ˆÚYÛ\žHÛ^MÈ[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍW‚Šˆš^
›ÝJNˆ[\›Ý™H›ÝHÜXÚ[™ÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍMW‚Šˆš^
XZ[
NˆYXYÈÙÈÚ[ˆÜ™X][™ÈH\Ù\ˆ[™YØÝ[Y[][ÛˆX›Ý][XZ[˜]H[Z]žH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍM—‚Šˆ™X]
\ÚÊNˆ\Ü^H\ÚÜÈ›ÜˆÝ\™[Ø[[™\ˆÙYZÈ[™›Ý›ÜˆÙ]™[ˆ8 )ˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍM‚Šˆ™X]
Ù][™ÊNˆ\Ü^H[˜›ÝY[XZ[›Üˆ\Ù\ˆžH\š[Y][ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍNW‚Šˆš^
]˜]\ŠNˆ]˜]\ˆ[][Ûˆ\È›ÝÈ\œÚ\ÝY\È^XÝYžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍM×‚Šˆš^
ÛÛXÝ
Nˆ\]H\ÝÜÙY[ˆÚ[ˆH›ÝH\ÈYYÈHÛÛXÝžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍN‚Šˆ™X]
XZ[[™ÊNˆYÝ\Ü›Üˆ][\H™XÚ\Y[È[™š^ÛÛYH\ÜÈ[ˆXZ[ÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍŒ‚Šˆ™X]
\ÚÜÊNˆ\]HÛÛXÝ\ÝÙY[ˆÚ[ˆÜ™X][™ÈH\ÚÈžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍŒW‚Šˆ™X]
\ÚÊNˆY\ÚÈY]Ý\ÜžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍŒ×‚Šˆ™X]
ØÊNˆ[\›Ý™HØÝ[Y[][ÛˆžH›Û˜][˜\›˜][[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[Í‚ŠˆÚÚ\ÚXÝ[Ûˆ\ÚÈÚ[ˆ™YYYÙXÜ™]È\™HZ\ÜÚ[™ÈžHY\žSZXÚ[[ˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KÜ[ÍW‚—‚—‚ŠŠ‘[Ú[™Ù[ÙÊŠŽˆÎ‹ËÙÚ]X‹˜ÛÛKÛX\›Y[X‹Ø]ÛZXËXÜ›KØÛÛ[Z]ËÝŒKŒŒ‚˜]XJ

OOžØÛÛœÝOT™J
NÜ™]\›ˆ˜J
OÛšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞÊœØÚ[™[Ž–ÛšœÞ
“‹ÝÎˆ‹ÜÙ][™ÜÈŸJKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^LHZ[‹]ËL‹Ú[™[Ž›šœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û‹Ú[™[Ž™J˜Ü›K˜Ú[™Ù[ÙË]HŠ_J_JW_JKšœÞ
œØÚ[™[Ž›šœÞ
•ØÚ[™[Ž˜_J_JW_JN›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]ËLÞ^X]]È^KN‹Ú[™[Ž›šœÞÊÛ‹ØÚ[™[Ž–ÛšœÞ
ØKØÚ[™[Ž›šœÞ
ØKØÚ[™[Ž™J˜Ü›K˜Ú[™Ù[ÙË]HŠ_J_JKšœÞ
‹ØÚ[™[Ž›šœÞ
•ØÚ[™[Ž˜_J_JW_J_J_KÚ[™Ù[ÙÔYÙHŠNÛ]‹œ]H‹ØÚ[™Ù[ÙÈŽØÛÛœÝÙ]XJ

OOžØÛÛœÝÙ\šÓ[ÙSÙÛÎ™KYÚ[ÙSÙÛÎ]N›ŸOUÜŠ
KQZJ
KOT™J
NÛ]ÏH‹ÈŽÜ™]\›ˆœÊ‹È‹‹œ]˜[YJOÜÏH‹ÈŽ˜œÊ‹Û™]ËZ›Øˆ‹‹œ]˜[YJOÜÏH‹Û™]ËZ›ØˆŽ˜œÊ‹ÙX[ËÊˆ‹‹œ]˜[YJOÜÏH‹ÙX[ÈŽœÏHLKšœÞ
‘œ˜YÛY[ØÚ[™[Ž›šœÞ
›˜]ˆ‹ØÛ\ÜÓ˜[YNˆ™Ü›ÝÈ‹Ú[™[Ž›šœÞ
šXY\ˆ‹ØÛ\ÜÓ˜[YNˆ˜™Ë\ÙXÛÛ™\žH‹Ú[™[Ž›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœM‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^\ÝYžKX™]ÙY[ˆ][\ËXÙ[\ˆ›^LH‹Ú[™[Ž–ÛšœÞÊ‹ÝÎˆ‹È‹Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ^\ÙXÛÛ™\žKY›Ü™YÜ›Ý[™›Ë][™\›[™H‹Ú[™[Ž–ÛšœÞ
š[YÈ‹ØÛ\ÜÓ˜[YNˆ–Ë›YÚÉ—NšY[ˆMˆ‹Ü˜Î™K[›ŸJKšœÞ
š[YÈ‹ØÛ\ÜÓ˜[YNˆ–Ë™\š×É—NšY[ˆMˆ‹Ü˜Î[›ŸJKšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û‹Ú[™[Ž›ŸJW_JKšœÞ
™]ˆ‹ØÚ[™[Ž›šœÞÊ›˜]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^‹Ú[™[Ž–ÛšœÞ
ÍKÛX™[šJœ˜KœYÙK™\Ú›Ø\™ŠKÎˆ‹È‹\ÐXÝ]™NœÏOOH‹ÈŸJKšœÞ
ÍKÛX™[ˆ’›ØœÈ‹Îˆ‹ÙX[È‹\ÐXÝ]™NœÏOOH‹ÙX[ÈŸJKšœÞ
ÍKÛX™[ˆ“™]È›Øˆ‹Îˆ‹Û™]ËZ›Øˆ‹\ÐXÝ]™NœÏOOH‹Û™]ËZ›ØˆŸJW_J_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ‹Ú[™[Ž–ÛšœÞ
˜ÙKßJKšœÞ
ÙKßJKšœÞÊXÙKØÚ[™[Ž–ÛšœÞ
Ù]ßJKšœÞ
\Ü™\ÛÝ\˜ÙNˆœØ[\È‹XÝ[ÛŽˆ›\Ý‹Ú[™[Ž›šœÞ
Y]ßJ_JKšœÞ
\Ü™\ÛÝ\˜ÙNˆ˜ÛÛ™šYÝ\˜][Ûˆ‹XÝ[ÛŽˆ™Y]‹Ú[™[Ž›šœÞ
]ßJ_JKšœÞ
Y]ßJKšœÞ
™]ßJW_JW_JW_J_J_J_J_J_K’XY\ˆŠKÍOXJ
ÛX™[™KÎ\ÐXÝ]™N›ŸJOO›šœÞ
‹ÝÎÛ\ÜÓ˜[YN˜MˆKLÈ^\ÛH›Û[YY][H˜[œÚ][Û‹XÛÛÜœÈ›Ü™\‹X‹Lˆ	ÛÈ^\ÙXÛÛ™\žKY›Ü™YÜ›Ý[™›Ü™\‹\ÙXÛÛ™\žKY›Ü™YÜ›Ý[™Žˆ^\ÙXÛÛ™\žKY›Ü™YÜ›Ý[™ÍÌ›Ü™\‹]˜[œÜ\™[Ý™\Ž^\ÙXÛÛ™\žKY›Ü™YÜ›Ý[™ÎŸXÚ[™[Ž™_JK“˜]šYØ][Û•XˆŠKY]XJ

OOžØÛÛœÝOT™J
KYÐÊ
NÚYŠ]
]›ÝÈ™]È\œ›ÜŠ\Ù\œÓY[Oˆ]\Ý™H\ÙY[œÚYH\Ù\“Y[OÈŠNÜ™]\›ˆšœÞ
XKØ\ÐÚ[ˆLÛÛXÚÎ›ÛÛÜÙKÚ[™[Ž›šœÞÊ‹ÝÎˆ‹ÜØ[\È‹Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÚËßJKJœ™\ÛÝ\˜Ù\ËœØ[\Ë›˜[YH‹ÜÛX\ØÛÝ[ŒŸJW_J_J_K•\Ù\œÓY[HŠKÙ]XJ

OOžØÛÛœÝOT™J
KYÐÊ
NÚYŠ]
]›ÝÈ™]È\œ›ÜŠ›Ùš[SY[Oˆ]\Ý™H\ÙY[œÚYH\Ù\“Y[OÈŠNÜ™]\›ˆšœÞ
XKØ\ÐÚ[ˆLÛÛXÚÎ›ÛÛÜÙKÚ[™[Ž›šœÞÊ‹ÝÎˆ‹Ü›Ùš[H‹Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÓÙKßJKJ˜Ü›Kœ›Ùš[K]HŠW_J_J_K”›Ùš[SY[HŠK]XJ

OOžØÛÛœÝOT™J
KYÐÊ
NÚYŠ]
]›ÝÈ™]È\œ›ÜŠÙ][™ÜÓY[Oˆ]\Ý™H\ÙY[œÚYH\Ù\“Y[OˆŠNÜ™]\›ˆšœÞ
XKØ\ÐÚ[ˆLÛÛXÚÎ›ÛÛÜÙKÚ[™[Ž›šœÞÊ‹ÝÎˆ‹ÜÙ][™ÜÈ‹Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
“ÙKßJKJ˜Ü›KœÙ][™ÜË]HŠW_J_J_K”Ù][™ÜÓY[HŠKY]XJ

OOžØÛÛœÝOT™J
KYÐÊ
NÚYŠ]
]›ÝÈ™]È\œ›ÜŠ[\Üœ›ÛRœÛÛ“Y[R][Oˆ]\Ý™H\ÙY[œÚYH\Ù\“Y[OˆŠNÜ™]\›ˆšœÞ
XKØ\ÐÚ[ˆLÛÛXÚÎ›ÛÛÜÙKÚ[™[Ž›šœÞÊ‹ÝÎ—Ì‹œ]Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
™KßJKJ˜Ü›KšXY\‹š[\ÜÙ]HŠW_J_J_K’[\Üœ›ÛRœÛÛ“Y[R][HŠK™]XJ

OOžØÛÛœÝOT™J
KYÐÊ
NÚYŠ]
]›ÝÈ™]È\œ›ÜŠÚ[™Ù[ÙÓY[R][Oˆ]\Ý™H\ÙY[œÚYH\Ù\“Y[OˆŠNÜ™]\›ˆšœÞ
XKØ\ÐÚ[ˆLÛÛXÚÎ›ÛÛÜÙKÚ[™[Ž›šœÞÊ‹ÝÎ›]‹œ]Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
MËßJKJ˜Ü›K˜Ú[™Ù[ÙË]HŠW_J_J_KÚ[™Ù[ÙÓY[R][HŠK™]XJ
ØÚ[™[Ž™_JOOŠÙÙJ
KšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
Ù]ßJKšœÞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë\ØÜ™Y[‹^^X]]ÈMM‹Yˆ›XZ[‹XÛÛ[‹Ú[™[Ž›šœÞ
L‹Ñ˜[˜XÚÐÛÛ\Û™[”‹Ú[™[Ž›šœÞ
”Ý\Ü[œÙKÙ˜[˜XÚÎ›šœÞ
\‹ØÛ\ÜÓ˜[YNˆšLLˆËLLˆ›Ý[™YY[ŸJKÚ[™[Ž™_J_J_JKšœÞ
\ßJW_JJK“^[Ý]ŠK]XJ

OOžØÛÛœÝOQZJ
KT™J
KXœÊ‹ÙX[ËÊˆ‹Kœ]˜[YJOÈ‹ÙX[ÈŽ˜œÊ‹Ý\ÚÜËÊˆ‹Kœ]˜[YJOÈ‹Ý\ÚÜÈŽ˜œÊ‹Û™]ËZ›Øˆ‹Kœ]˜[YJOÈ‹Û™]ËZ›ØˆŽˆ‹È‹]Ú[™ÝË›X]ÚYYXJŠ\Ü^K[[ÙNˆÝ[™[Û™JHŠK›X]Ú\ËOKÚTYTÙTÛ™KË\Ý
Ú[™ÝË›˜]šYØ]Ü‹\Ù\YÙ[
NÜ™]\›ˆšœÞ
›˜]ˆ‹È˜\šXK[X™[Ž
˜Ü›K›˜]šYØ][Û‹›X™[ŠKÛ\ÜÓ˜[YNˆ™š^Y[œÙ]^L›ÝÛKL‹MLZ[‹ZLM›Ü™\‹]™Ë\ÙXÛÛ™\žH‹VÙ[ŠØY™KX\™XKZ[œÙ]X›ÝÛJWHÚYÝËVÌËMÌNÜ™Ø˜JMKŒË‹Œ
WH‹Ý[NžÜY[™Ð›ÝÛNœ‰‰šOÈ›X^
M\[ŠØY™KX\™XKZ[œÙ]X›ÝÛJJHŽ›ÚYKÚ[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]È›^X^]Ë[Y\ÝYžKX\›Ý[™Lˆ‹Ú[™[Ž–ÛšœÞ
KÚ™YŽˆ‹È‹XÛÛŽ•ËX™[ˆ’ÛYH‹\ÐXÝ]™N›OOH‹ÈŸJKšœÞ
KÚ™YŽˆ‹ÙX[È‹XÛÛŽ”šËX™[ˆ’›ØœÈ‹\ÐXÝ]™N›OOH‹ÙX[ÈŸJKšœÞ
™KØ\ÐÚ[ˆL˜\šX[ˆ™Y˜][‹Ú^™NˆšXÛÛˆ‹Û\ÜÓ˜[YNˆ‹[]LÈLMˆËLMˆ›Ý[™YY[‹Ú[™[Ž›šœÞ
‹ÝÎˆ‹Û™]ËZ›Øˆ‹˜\šXK[X™[ŽˆÜ™X]HH™]È›Øˆ‹Ú[™[Ž›šœÞ
›ØÛ\ÜÓ˜[YNˆœÚ^™KNHŸJ_J_JKšœÞ
KÚ™YŽˆ‹Ý\ÚÜÈ‹XÛÛŽ˜“™KX™[ˆ•\ÚÜÈ‹\ÐXÝ]™N›OOH‹Ý\ÚÜÈŸJW_J_J_K“[Øš[S˜]šYØ][ÛˆŠKOXJ
Ú™YŽ™KXÛÛŽX™[›‹\ÐXÝ]™NœŸJOO›šœÞ
™KØ\ÐÚ[ˆL˜\šX[ˆ™ÚÜÝ‹Û\ÜÓ˜[YN•JšLMZ[‹]ËLMˆ›^XÛÛØ\LH›Ý[™Y[YLHKLKH‹Û[ˆ^[]]YY›Ü™YÜ›Ý[™ŠKÚ[™[Ž›šœÞÊ‹ÝÎ™KÚ[™[Ž–ÛšœÞ
ØÛ\ÜÓ˜[YNˆœÚ^™KMˆŸJKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H‹Ú[™[Ž›ŸJW_J_JK“˜]šYØ][Û]ÛˆŠKXJ
ØÚ[™[Ž™_JOOŠÙÙJ
KšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
L‹Ñ˜[˜XÚÐÛÛ\Û™[”‹Ú[™[Ž›šœÞ
”Ý\Ü[œÙKÙ˜[˜XÚÎ›šœÞ
\‹ØÛ\ÜÓ˜[YNˆšLLˆËLLˆ›Ý[™YY[ŸJKÚ[™[Ž™_J_JKšœÞ
]ßJKšœÞ
\Û[Øš[SÙ™œÙ]žØ›ÝÛNˆ˜Ø[Ê\™[H
È[ŠØY™KX\™XKZ[œÙ]X›ÝÛJJHŸ_JW_JJK“[Øš[S^[Ý]ŠKYÙOXJ

OO›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë\ØÜ™Y[‹^^X]]È\ØÜ™Y[ˆN‹Ú[™[Ž›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšY[‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë\ÛH^X]]ÈY[›^›^XÛÛ\ÝYžKXÙ[\ˆØ\N‹Ú[™[Ž–ÛšœÞ
\‹ØÛ\ÜÓ˜[YNˆËY[VÌLHŸJKšœÞ
\‹ØÛ\ÜÓ˜[YNˆËMÍHVÍLHŸJKšœÞ
\‹ØÛ\ÜÓ˜[YNˆËY[NHŸJKšœÞ
\‹ØÛ\ÜÓ˜[YNˆËY[NHŸJKšœÞ
\‹ØÛ\ÜÓ˜[YNˆËY[NHŸJKšœÞ
\‹ØÛ\ÜÓ˜[YNˆËL‹ÍHNHŸJW_J_J_JK“ÙÚ[”ÚÙ[]ÛˆŠKÌXJ

OOžØÛÛœÝOT™J
KÙ\šÓ[ÙSÙÛÎ]N›ŸOUÜŠ
NÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆš\ØÜ™Y[ˆN‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\M‹Ú[™[Ž–ÛšœÞ
š[YÈ‹ÜÜ˜Î[›‹ÚYŒÛ\ÜÓ˜[YNˆ™š[\ˆœšYÚ™\ÜËL\šÎš[™\ŸJKšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û‹Ú[™[Ž›ŸJW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšY[^XÙ[\ˆ‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë\ÛH^X]]ÈY[›^›^XÛÛ\ÝYžKXÙ[\ˆØ\M‹Ú[™[Ž–ÛšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^Lž›ÛX›ÛX‹M‹Ú[™[Ž™J˜Ü›K˜]]Ù[ÛÛYWÝ]H‹×Îˆ•Ù[ÛÛYHÈ[Xœ™[HÔ“HŸJ_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^X˜\ÙHX‹M‹Ú[™[Ž™J˜Ü›K˜]]˜ÛÛ™š\›X][Û—Ü™\]Z\™Y‹×Îˆ”X\ÙH›ÛÝÈH[šÈÙH\ÝÙ[[ÝHžH[XZ[ÈÛÛ™š\›H[Ý\ˆXØÛÝ[ˆŸJ_JW_J_JKšœÞ
\ßJW_J_KÛÛ™š\›X][Û”™\]Z\™YŠNÕÌœ]H‹ÜÚYÛ‹]\ØÛÛ™š\›HŽØÛÛœÝÏXJ

OOžØÛÛœÝOYJ
K\[Š
KÙ\šÓ[ÙSÙÛÎ›‹]NœŸOUÜŠ
KOY

KÏT™J
KÙ]N›Ë\Ô[™[™Î˜ßOPÛÊÜ]Y\žRÙ^N–Èš[š]—K]Y\žQ›Ž˜J\Þ[˜Ê
OOš\Ò[š]X[^™Y

Kœ]Y\žQ›ˆŠ_JKÚ\Ô[™[™ÎK]]]N™ŸOX[
Û]]][Û’Ù^N–ÈœÚYÛ\—K]]][Û‘›Ž˜J\Þ[˜ÈOOœÚYÛ•\
JK›]]][Û‘›ˆŠKÛ”ÝXØÙ\ÜÎ˜JOOžÚ
Ù[XZ[‘K™[XZ[\ÜÝÛÜ™‘Kœ\ÜÝÛÜ™™Y\™XÝÎˆ‹ØÛÛXÝÈŸJK[Š

OOžÛJ˜Ü›K˜]]œÚYÛ\š[š]X[Ý\Ù\—ØÜ™X]Y‹ÛY\ÜØYÙP\™ÜÎž×Îˆ’[š]X[\Ù\ˆÝXØÙ\ÜÙ[HÜ™X]YŸ_JKKš[˜[Y]T]Y\šY\ÊÜ]Y\žRÙ^N–È˜]]‹˜Ø[XØÙ\ÜÈ—_J_JK˜Ø]Ú
OžÔ‹˜ÛÙOOOH™[XZ[Û›ÝØÛÛ™š\›YYÚJÌœ]
NŠJ˜Ü›K˜]]œÚYÛ—Ú[—Ù˜Z[Y‹Ý\Nˆ™\œ›Üˆ‹Y\ÜØYÙP\™ÜÎž×Îˆ‘˜Z[YÈÙÈ[‹ˆŸ_JKJ‹ÛÙÚ[ˆŠJ_J_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜JOOžÛJK›Y\ÜØYÙJ_K›Û‘\œ›ÜˆŠ_JKTÍÊ
KO\Š
KÜ™YÚ\Ý\Ž™Ë[™TÝX›Z]˜‹›Ü›TÝ]NžÚ\Õ˜[Yß_O^ÊÛ[ÙNˆ›ÛÚ[™ÙHŸJNÚYŠÊ\™]\›ˆšœÞ
YÙKßJNÚYŠÊ\™]\›ˆšœÞ
KÝÎˆ‹ÛÙÚ[ˆŸJNØÛÛœÝÏXJ\Þ[˜ÈOOžÙŠJ_K›Û”ÝX›Z]ŠNÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆš\ØÜ™Y[ˆN‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\M‹Ú[™[Ž–ÛšœÞ
š[YÈ‹ÜÜ˜Î›‹[œ‹ÚYŒÛ\ÜÓ˜[YNˆ™š[\ˆœšYÚ™\ÜËL\šÎš[™\ŸJKšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û‹Ú[™[ŽœŸJW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšY[‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë\ÛH^X]]ÈY[›^›^XÛÛ\ÝYžKXÙ[\ˆØ\M‹Ú[™[Ž–ÛšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^Lž›ÛX›ÛX‹M‹Ú[™[ŽœÊ˜Ü›K˜]]Ù[ÛÛYWÝ]H‹×Îˆ•Ù[ÛÛYHÈ[Xœ™[HÔ“HŸJ_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^X˜\ÙHX‹M‹Ú[™[ŽœÊ˜Ü›K˜]]œÚYÛ\˜Ü™X]WÙš\œÝÝ\Ù\ˆ‹×ÎˆÜ™X]HHš\œÝ\Ù\ˆXØÛÝ[ÈÛÛ\]HHÙ]\ˆŸJ_JKšœÞÊ™›Ü›H‹ÛÛ”ÝX›Z]˜ŠÊKÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽˆ™š\œÝÛ˜[YH‹Ú[™[ŽœÊ˜Ü›K˜]]™š\œÝÛ˜[YHŠ_JKšœÞ
‹Ë‹‹™Ê™š\œÝÛ˜[YH‹Ü™\]Z\™YˆLJKYˆ™š\œÝÛ˜[YH‹\Nˆ^‹™\]Z\™YˆLJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽˆ›\ÝÛ˜[YH‹Ú[™[ŽœÊ˜Ü›K˜]]›\ÝÛ˜[YHŠ_JKšœÞ
‹Ë‹‹™Ê›\ÝÛ˜[YH‹Ü™\]Z\™YˆLJKYˆ›\ÝÛ˜[YH‹\Nˆ^‹™\]Z\™YˆLJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽˆ™[XZ[‹Ú[™[ŽœÊœ˜K˜]]™[XZ[Š_JKšœÞ
‹Ë‹‹™Ê™[XZ[‹Ü™\]Z\™YˆLJKYˆ™[XZ[‹\Nˆ™[XZ[‹™\]Z\™YˆLJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽˆœ\ÜÝÛÜ™‹Ú[™[ŽœÊœ˜K˜]]œ\ÜÝÛÜ™Š_JKšœÞ
‹Ë‹‹™Êœ\ÜÝÛÜ™‹Ü™\]Z\™YˆLJKYˆœ\ÜÝÛÜ™‹\Nˆœ\ÜÝÛÜ™‹™\]Z\™YˆLJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\M\ÝYžKX™]ÙY[ˆ][\ËXÙ[\ˆ]N‹Ú[™[Ž–ÛšœÞ
™KÝ\NˆœÝX›Z]‹\ØX›Yˆ]ßKÛ\ÜÓ˜[YNˆËY[‹Ú[™[ŽOÛšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
XKØÛ\ÜÓ˜[YNˆËMM[š[X]K\Ü[ˆ\‹LˆŸJKÊ˜Ü›K˜]]œÚYÛ\˜Ü™X][™È‹×ÎˆÜ™X][™Ë‹‹ˆŸJW_JNœÊ˜Ü›K˜]]œÚYÛ\˜Ü™X]WØXØÛÝ[‹×ÎˆÜ™X]HXØÛÝ[ŸJ_JK[_JW_JW_J_JKšœÞ
\ßJW_J_K”ÚYÛ\YÙHŠNÔËœ]H‹ÜÚYÛ‹]\ŽØÛÛœÝXJ
K
OO™OOOH˜YZ[ˆÈLˆJÈ™X[Û›Ý\È‹˜ÛÛXÝÛ›Ý\È—Kš[˜ÛY\Êœ™\ÛÝ\˜ÙJI‰˜XÝ[ÛOOH™[]HŸÈœØ[\È‹˜ÛÛ™šYÝ\˜][Ûˆ‹š›Ø—ÛYÙ\ˆ‹š[›ÚXÙ\È‹œ^[Y[È‹š›Ø—ØÛÜÝÈ—Kš[˜ÛY\Êœ™\ÛÝ\˜ÙJJK˜Ø[XØÙ\ÜÈŠKXJ

OO™ÙJœŠ
KÙÙ]Y[]N˜J\Þ[˜Ê
OOžØÛÛœÝOX]ØZ]™ÙJ
NÚYŠOO[[
]›ÝÈ™]È\œ›ÜŽÜ™]\›žÚY™KšY[˜[YN˜	ÙK™š\œÝÛ˜[Y_H	ÙK›\ÝÛ˜[Y_X]˜]\Ž™K˜]˜]\ËœÜ˜ß_K™Ù]Y[]HŠ_JK™Ù]˜\ÙP]]›ÝšY\ˆŠKNH”˜TÝÜ™K˜]]š\×Ú[š]X[^™Y‹H”˜TÝÜ™K˜]]˜Ý\œ™[ÜØ[HŽÙ[˜Ý[ÛˆŠ
^Ü™]\›ˆ\[ÙˆÚ[™ÝÏH‰‰Ú[™ÝË›ØØ[ÝÜ˜YÙOÝÚ[™ÝË›ØØ[ÝÜ˜YÙN›[XJ‹™Ù]ØØ[ÝÜ˜YÙHŠNØ\Þ[˜È[˜Ý[ÛˆLŠ
^ØÛÛœÝO^Š
KYOË™Ù]][JN
NÚYŠO[[
\™]\›ˆOOHYHŽØÛÛœÝÙ]N›ŸOX]ØZ]œŠ
K™œ›ÛJš[š]ÜÝ]HŠKœÙ[XÝ
š\×Ú[š]X[^™YŠK[Ë˜]

OËš\×Ú[š]X[^™YŒÜ™]\›ˆ‰‰™OËœÙ]][JNYHŠKŸXJL‹™Ù]\Ò[š]X[^™YŠNØÛÛœÝ™ÙOXJ\Þ[˜Ê
OOžØÛÛœÝO^Š
KYOË™Ù]][J
NÚYŠO[[
\™]\›ˆ”ÓÓ‹œ\œÙJ
NØÛÛœÝÙ]N›‹\œ›ÜŽœŸOX]ØZ]œŠ
K˜]]™Ù]Ù\ÜÚ[ÛŠ
NÚYŠËœÙ\ÜÚ[ÛË\Ù\O[[Š\™]\›ŽØÛÛœÝÙ]NšK\œ›ÜŽœßOX]ØZ]œŠ
K™œ›ÛJœØ[\ÈŠKœÙ[XÝ
šYš\œÝÛ˜[YK\ÝÛ˜[YK]˜]\‹YZ[š\Ý˜]ÜˆŠK›X]Ú
Ý\Ù\—ÚY›ËœÙ\ÜÚ[ÛË\Ù\‹šYJKœÚ[™ÛJ
NÚYŠJOO[[ÊJ\™]\›ˆOËœÙ]][J”ÓÓ‹œÝš[™ÚYžJJJK_K™Ù]Ø[HŠNÙ[˜Ý[Ûˆ]

^ØÛÛœÝO^Š
NÙOËœ™[[Ý™R][JN
KOËœ™[[Ý™R][J
_XJ]˜ÛX\ØXÚHŠNØÛÛœÝ]XJ

OOžØÛÛœÝO\

NÜ™]\›žË‹‹™KÙÚ[Ž˜J\Þ[˜ÈOžÚYŠœÜÛÑÛXZ[Š^ØÛÛœÝÙ\œ›ÜŽ›ŸOX]ØZ]œŠ
K˜]]œÚYÛ’[•Ú]ÔÓÊÙÛXZ[ŽœÜÛÑÛXZ[ŸJNÚYŠŠ]›ÝÈŽÜ™]\›Ÿ\™]\›ˆK›ÙÚ[Š
_K›ÙÚ[ˆŠKÙÛÝ]˜J\Þ[˜ÈOŠ]

KK›ÙÛÝ]

JK›ÙÛÝ]ŠKÚXÚÐ]]˜J\Þ[˜ÈOžÚYŠÚ[™ÝË›ØØ][Û‹œ]˜[YOOOH‹ÜÙ]\\ÜÝÛÜ™ŸÚ[™ÝË›ØØ][Û‹š\Úš[˜ÛY\ÊˆËÜÙ]\\ÜÝÛÜ™Š_Ú[™ÝË›ØØ][Û‹œ]˜[YOOOH‹Ù›Ü™ÛÝ\\ÜÝÛÜ™ŸÚ[™ÝË›ØØ][Û‹š\Úš[˜ÛY\ÊˆËÙ›Ü™ÛÝ\\ÜÝÛÜ™Š_Ú[™ÝË›ØØ][Û‹œ]˜[YOOOH‹ÜÚYÛ‹]\ŸÚ[™ÝË›ØØ][Û‹š\Úš[˜ÛY\ÊˆËÜÚYÛ‹]\ŠJ\™]\›ŽÚYŠX]ØZ]LŠ
J]›ÝÈ]ØZ]œŠ
K˜]]œÚYÛ“Ý]

KÜ™Y\™XÝÎˆ‹ÜÚYÛ‹]\‹Y\ÜØYÙNˆL_NÜ™]\›ˆK˜ÚXÚÐ]]

_K˜ÚXÚÐ]]ŠKØ[XØÙ\ÜÎ˜J\Þ[˜ÈOžÚYŠX]ØZ]LŠ
J\™]\›ˆLNØÛÛœÝX]ØZ]™ÙJ
NÚYŠO[[
\™]\›ˆLNØÛÛœÝO\‹˜YZ[š\Ý˜]ÜÈ˜YZ[ˆŽˆ\Ù\ˆŽÜ™]\›ˆ
K
_K˜Ø[XØÙ\ÜÈŠKÙ]]]Üš^˜][Û‘]Z[Ê
^Ü™]\›ˆœŠ
K˜]]›Ø]]™Ù]]]Üš^˜][Û‘]Z[Ê
_K\›Ý™P]]Üš^˜][ÛŠ
^Ü™]\›ˆœŠ
K˜]]›Ø]]˜\›Ý™P]]Üš^˜][ÛŠ
_K[žP]]Üš^˜][ÛŠ
^Ü™]\›ˆœŠ
K˜]]›Ø]]™[žP]]Üš^˜][ÛŠ
___K™Ù]]]›ÝšY\ˆŠK™ÙOH˜]XÚY[È‹ÞLL
ŒLÝLL
Þ‹ÝNKJÞ‹LÙLËÝ[™]ÈÙ]
Èš[XYÙKÚœYÈ‹š[XYÙKÜ™È‹š[XYÙKÝÙXœ—JK]XJ\Þ[˜ÈOOžÚYŠXÝš\ÊK\JJ\™]\›ˆJJKNØÛÛœÝX]ØZ]Ü™X]R[XYÙPš]X\
KÚ[XYÙSÜšY[][ÛŽˆ™œ›ÛKZ[XYÙHŸJNÝž^ØÛÛœÝSX]›Z[ŠKÓX]›X^
ÚYšZYÚ
JKYØÝ[Y[˜Ü™X]Q[[Y[
˜Ø[˜\ÈŠNÜ‹ÚYSX]›X^
KX]œ›Ý[™
ÚY
›ŠJK‹šZYÚSX]›X^
KX]œ›Ý[™
šZYÚ
›ŠJNØÛÛœÝO\‹™Ù]ÛÛ^
Œ™‹Ø[NˆL_JNÚYŠZJ]›ÝÈ™]È\œ›ÜŠ•\Èœ›ÝÜÙ\ˆØ[››Ý™\\™HHÝÙÜ˜\ˆŠNÚK™˜]Ò[XYÙJ‹ÚY‹šZYÚ
NÛ]Ï[[Ù›ÜŠÛÛœÝÈÙ–ËŽÍ‹Ž—JZYŠÏX]ØZ]
‹š[XYÙKÚœYÈ‹ÊKËœÚ^™O[Ý
Xœ™XZÎÚYŠ\Ê]›ÝÈ™]È\œ›ÜŠÛÝ[›ÝÛÛ\™\ÜÈ	ÙK›˜[Y_K˜
NØÛÛœÝÏ[™]Èš[JÜ×K
K›˜[YJKÝ\Nˆš[XYÙKÚœYÈ‹\Ý[ÙYšYY™K›\Ý[ÙYšYYJNÜ™]\›ˆJÊKßYš[˜[^Ý˜ÛÜÙJ
__Kœ™\\™U™[Ñš[HŠKOXJOOžÚYŠJKœÚ^™O\Ý
J]›ÝÈ™]È\œ›ÜŠ	ÙK›˜[Y_H\È	ÊKœÚ^™KÝÞŠKÑš^Y
J_HP‹ˆ™[ÉÜÈœ™YK\[ˆ[Z]\ÈLPˆ\ˆš[K˜
_K˜\ÜÙ\š]Õ™[ÈŠKXJ
KŠOO›™]È›ÛZ\ÙJ
‹JOO™KÐ›ØŠÏOœÏÜŠÊNšJ™]È\œ›ÜŠ’[XYÙHÛÛ\™\ÜÚ[Ûˆ˜Z[YˆŠJKŠJK˜Ø[˜\ÕÐ›ØˆŠKXJOO˜	ÙKœ™\XÙJ×–×‹—JÉËˆŠ_š›Ø‹\ÝÈŸKšœØÒœYÓ˜[YHŠKÞH˜Ü›K\X›XËX\ÜÙ]È‹]™OLÍŒXJ\Þ[˜ÈOOžÚYŠOËœÝÜ˜YÙWÜ›ÝšY\OOH™[ÈŸOËœÜ˜ÏËš[˜ÛY\Ê‹ÜÝÜ˜YÙKÝŒKÛØš™XÝÜX›XËÈŠ_YOËœ]
\™]\›ˆNØÛÛœÝÙ]N\œ›ÜŽ›ŸOX]ØZ]œŠ
KœÝÜ˜YÙK™œ›ÛJ™ÙJK˜Ü™X]TÚYÛ™Y\›
Kœ]]™JNÜ™]\›ˆŸ]ËœÚYÛ™Y\›ÙNžË‹‹™KÜ˜ÎœÚYÛ™Y\›_KœÚYÛ]XÚY[ŠKÌXJ\Þ[˜ÊK
OO	‰ŠÈ˜ÛÛXÝÛ›Ý\È‹™X[Û›Ý\È—Kš[˜ÛY\ÊJOÞË‹‹]XÚY[Î\œ˜^Kš\Ð\œ˜^J˜]XÚY[ÊOØ]ØZ]›ÛZ\ÙK˜[
˜]XÚY[Ë›X\

JN˜]XÚY[ßN™OOOH˜XÝ]š]WÛÙÈÞË‹‹ÛÛXÝ›ÝN˜ÛÛXÝ›ÝOØ]ØZ]ÌŠ˜ÛÛXÝÛ›Ý\È‹˜ÛÛXÝ›ÝJN˜ÛÛXÝ›ÝKX[›ÝN™X[›ÝOØ]ØZ]ÌŠ™X[Û›Ý\È‹™X[›ÝJN™X[›Ý_N
KœÚYÛ”™XÛÜ™š[\ÈŠKXJ

OO‘ÍYJÚ[œÝ[˜ÙU\›ˆšÎ‹ËÛZÜœœ[^›ÙYœØ›YZ]™‹œÝ\X˜\ÙK˜ÛÈ‹\RÙ^NˆœØ—ÜX›\ÚX›WÔL‘ÓX”ÎRV‘L™RÒ•šÝ×ÝLRÐÑLRPÈ‹Ý\X˜\ÙPÛY[•œŠ
KÛÜÜ™\Žˆ˜\ØË\ØË›[Û\ÝŸJK™Ù]˜\ÙQ]T›ÝšY\ˆŠKÝOXJ\Þ[˜ÈOOžØÛÛœÝYK™]K›ÙÛÎÜ™]\›ˆËœ˜]Ñš[H[œÝ[˜Ù[Ùˆš[I‰˜]ØZ]ÌŠ˜ÛÛ\[šY\È‹Þ‹L
KË‹‹™K]NžË‹‹™K™]KÙÛÎ__Kœ›ØÙ\ÜÐÛÛ\[žSÙÛÈŠK]XJ

OOžØÛÛœÝO\

NÜ™]\›žË‹‹™K\Þ[˜ÈÙ]\Ý
Š^Û]ŽÚYŠOOH˜ÛÛ\[šY\ÈŠ\X]ØZ]K™Ù]\Ý
˜ÛÛ\[šY\×ÜÝ[[X\žH‹ŠNÙ[ÙHYŠOOH˜ÛÛXÝÈŠ\X]ØZ]K™Ù]\Ý
˜ÛÛXÝ×ÜÝ[[X\žH‹ŠNÙ[ÙHYŠOOH˜XÝ]š]WÛÙÈŠ^ØÛÛœÝÙ]NšKÝ[œßOX]ØZ]K™Ù]\Ý
˜XÝ]š]WÛÙÈ‹ŠNÜ^Ù]NšK›X\
ÏOŠË‹‹›ËÛÛXÝ›ÝN›Ë˜ÛÛXÝÛ›ÝOÏÝ›ÚYX[›ÝN›Ë™X[Û›ÝOÏÝ›ÚYÛÛXÝÛ›ÝN›ÚYX[Û›ÝN›ÚYJJKÝ[œß_Y[ÙHX]ØZ]K™Ù]\Ý
ŠNÜ™]\›žË‹‹œ‹]N˜]ØZ]›ÛZ\ÙK˜[
‹™]K›X\
OO”ÌŠJJJ__K\Þ[˜ÈÙ]Û™JŠ^Û]ŽÜ™]\›ˆOOH˜ÛÛ\[šY\ÈÜX]ØZ]K™Ù]Û™J˜ÛÛ\[šY\×ÜÝ[[X\žH‹ŠNOOH˜ÛÛXÝÈÜX]ØZ]K™Ù]Û™J˜ÛÛXÝ×ÜÝ[[X\žH‹ŠNœX]ØZ]K™Ù]Û™JŠKË‹‹œ‹]N˜]ØZ]ÌŠ‹™]J__K\Þ[˜ÈÚYÛ•\
Ù[XZ[\ÜÝÛÜ™›‹š\œÝÛ˜[YNœ‹\ÝÛ˜[YNš_J^ØÛÛœÝÏX]ØZ]œŠ
K˜]]œÚYÛ•\
Ù[XZ[\ÜÝÛÜ™›‹Ü[ÛœÎžÙ]NžÙš\œÝÛ˜[YNœ‹\ÝÛ˜[YNš___JNÚYŠ\Ë™]OË\Ù\ŸË™\œ›ÜŠ]›ÝÈÛÛœÛÛK™\œ›ÜŠœÚYÛ•\™\œ›Üˆ‹Ë™\œ›ÜŠK™]È\œ›ÜŠÏË™\œ›ÜË›Y\ÜØYÙ_‘˜Z[YÈÜ™X]HXØÛÝ[ŠNÜ™]\›ˆL‹—Ú\×Ú[š]X[^™YØØXÚOHLÚYœË™]K\Ù\‹šY[XZ[\ÜÝÛÜ™›Ÿ_K\Þ[˜ÈØ[\ÐÜ™X]J
^ØÛÛœÝÙ]N›‹\œ›ÜŽœŸOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ\Ù\œÈ‹ÛY]Ùˆ”ÔÕ‹›ÙNJNÚYŠ[ŸŠ^ØÛÛœÛÛK™\œ›ÜŠœØ[\ÐÜ™X]K™\œ›Üˆ‹ŠNØÛÛœÝOX]ØZ]
\Þ[˜Ê
OOžÝž^Ü™]\›ˆ]ØZ]Ë˜ÛÛ^ËšœÛÛŠ
OÏÞß_XØ]ÚÜ™]\›žß__JJ
NÝ›ÝÈ™]È\œ›ÜŠOË›Y\ÜØYÙ_‘˜Z[YÈÜ™X]HH\Ù\ˆŠ_\™]\›ˆ‹™]_K\Þ[˜ÈØ[\Õ\]JŠ^ØÛÛœÝÙ[XZ[œ‹š\œÝÛ˜[YNšK\ÝÛ˜[YNœËYZ[š\Ý˜]ÜŽ›Ë]˜]\Ž˜Ë\ØX›Y_O[‹Ù]N™‹\œ›ÜŽšOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ\Ù\œÈ‹ÛY]Ùˆ”UÒ‹›ÙNžÜØ[\×ÚY[XZ[œ‹š\œÝÛ˜[YNšK\ÝÛ˜[YNœËYZ[š\Ý˜]ÜŽ›Ë\ØX›YK]˜]\Ž˜ß_JNÚYŠYŸ
]›ÝÈÛÛœÛÛK™\œ›ÜŠœØ[\ÐÜ™X]K™\œ›Üˆ‹
K™]È\œ›ÜŠ‘˜Z[YÈ\]HXØÛÝ[X[˜YÙ\ˆŠNÜ™]\›ˆ‹™]_K\Þ[˜È\]T\ÜÝÛÜ™

^ØÛÛœÝÙ]N›‹\œ›ÜŽœŸOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ\]WÜ\ÜÝÛÜ™‹ÛY]Ùˆ”UÒ‹›ÙNžÜØ[\×ÚY_JNÚYŠ[ŸŠ]›ÝÈÛÛœÛÛK™\œ›ÜŠ\]WÜ\ÜÝÛÜ™™\œ›Üˆ‹ŠK™]È\œ›ÜŠ‘˜Z[YÈ\]H\ÜÝÛÜ™ŠNÜ™]\›ˆŸK\Þ[˜È[˜\˜Ú]™QX[

^ØÛÛœÝÙ]N›ŸOX]ØZ]K™Ù]\Ý
™X[È‹Ùš[\ŽžÜÝYÙNœÝYÙ_KYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒYLßKÛÜžÙšY[ˆš[™^‹Ü™\ŽˆTÐÈŸ_JK[‹›X\

KÊOOŠË‹‹šK[™^šKšYOO]šYÌœÊÌK\˜Ú]™YØ]šKšYOO]šYÛ[šK˜\˜Ú]™YØ]JJNÜ™]\›ˆ]ØZ]›ÛZ\ÙK˜[
‹›X\
OO™K\]J™X[È‹ÚYšKšY]NšK™]š[Ý\Ñ]N›‹™š[™
ÏOœËšYOOZKšY
_JJJ_K\Þ[˜È\Ò[š]X[^™Y

^Ü™]\›ˆLŠ
_K\Þ[˜ÈY\™ÙPÛÛXÝÊŠ^ØÛÛœÝÙ]Nœ‹\œ›ÜŽš_OX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ›Y\™ÙWØÛÛXÝÈ‹ÛY]Ùˆ”ÔÕ‹›ÙNžÛÜÙ\’YÚ[›™\’Y›Ÿ_JNÚYŠJ]›ÝÈÛÛœÛÛK™\œ›ÜŠ›Y\™ÙWØÛÛXÝË™\œ›Üˆ‹JK™]È\œ›ÜŠ‘˜Z[YÈY\™ÙHÛÛXÝÈŠNÜ™]\›ˆŸK\Þ[˜ÈÙ]ÛÛ™šYÝ\˜][ÛŠ
^ØÛÛœÝÙ]NOX]ØZ]K™Ù]Û™J˜ÛÛ™šYÝ\˜][Ûˆ‹ÚYŒ_JNÜ™]\›ˆË˜ÛÛ™šYÏÏÞß_K\Þ[˜È\]PÛÛ™šYÝ\˜][ÛŠ
^ØÛÛœÝÙ]N›ŸOX]ØZ]K\]J˜ÛÛ™šYÝ\˜][Ûˆ‹ÚYŒK]NžØÛÛ™šYÎK™]š[Ý\Ñ]NžÚYŒ__JNÜ™]\›ˆ‹˜ÛÛ™šYßK\Þ[˜È[œÝ\™U™[ÐØ\™

^ØÛÛœÝÙ]N›‹\œ›ÜŽœŸOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ™[×ÛYYXH‹ÛY]Ùˆ”ÔÕ‹›ÙNžØXÝ[ÛŽˆ™[œÝ\™WØØ\™‹›Ø—ÚY“[X™\Š
__JNÚYŠŸ[Ë˜Ø\™
]›ÝÈ™]È\œ›ÜŠ]ØZ]	Š‹•™[ÈØ\™Ü™X][Ûˆ˜Z[YˆŠJNÜ™]\›ˆ‹˜Ø\™K\Þ[˜ÈÞ[˜Õ™[ÓYYXJ
^ØÛÛœÝÙ]N›‹\œ›ÜŽœŸOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ™[×ÛYYXH‹ÛY]Ùˆ”ÔÕ‹›ÙNžØXÝ[ÛŽˆœÞ[˜È‹›Ø—ÚY“[X™\Š
__JNÚYŠŸ[Š]›ÝÈ™]È\œ›ÜŠ]ØZ]	Š‹•™[ÈYYXHÞ[˜È˜Z[YˆŠJNÜ™]\›ˆŸK\Þ[˜ÈÙ]Ø[[™\ÛÛ›™XÝ[ÛŠ
^ØÛÛœÝÙ]N\œ›ÜŽ›ŸOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ™ÛÛÙÛWØØ[[™\ˆ‹ÛY]Ùˆ”ÔÕ‹›ÙNžØXÝ[ÛŽˆœÝ]\ÈŸ_JNÚYŠŸ]
]›ÝÈ™]È\œ›ÜŠ]ØZ]	Š‹Ø[[™\ˆÝ]\È[˜]˜Z[X›KˆŠJNÜ™]\›ˆK\Þ[˜ÈÛÛ›™XÝÛÛÙÛPØ[[™\Š
^ØÛÛœÝÙ]N›‹\œ›ÜŽœŸOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ™ÛÛÙÛWØØ[[™\ˆ‹ÛY]Ùˆ”ÔÕ‹›ÙNžØXÝ[ÛŽˆ˜ÛÛ›™XÝ‹›Ø—ÚY“[X™\Š
__JNÚYŠŸ[Ë\›
]›ÝÈ™]È\œ›ÜŠ]ØZ]	Š‹Ø[[™\ˆÛÛ›™XÝ[Ûˆ˜Z[YˆŠJNÜ™]\›ˆ‹\›K\Þ[˜ÈÞ[˜ÑÛÛÙÛPØ[[™\Š
^ØÛÛœÝÙ]N›‹\œ›ÜŽœŸOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ™ÛÛÙÛWØØ[[™\ˆ‹ÛY]Ùˆ”ÔÕ‹›ÙNžØXÝ[ÛŽˆœÞ[˜È‹›Ø—ÚY“[X™\Š
__JNÚYŠŸ[Š]›ÝÈ™]È\œ›ÜŠ]ØZ]	Š‹Ø[[™\ˆÞ[˜È˜Z[YˆŠJNÜ™]\›ˆŸ__K™Ù]]T›ÝšY\•Ú]Ý\ÝÛSY]ÙÈŠKÝOXJ\Þ[˜ÈOO\[ÙˆOOHœÝš[™ÈÙN™OËœ˜]Ñš[H[œÝ[˜Ù[Ùˆš[OÊ]ØZ]ÌŠK˜ÛÛ™šYÝ\˜][Ûˆ‹Þ‹L
KKœÜ˜ÊN™OËœÜ˜ÏÏÈˆ‹œ›ØÙ\ÜÐÛÛ™šYÓÙÛÈŠKÝVÞÜ™\ÛÝ\˜ÙNˆ˜ÛÛ™šYÝ\˜][Ûˆ‹™Y›Ü™U\]N˜J\Þ[˜ÈOOžØÛÛœÝYK™]K˜ÛÛ™šYÎÜ™]\›ˆ	‰Š›YÚ[ÙSÙÛÏX]ØZ]ÝJ›YÚ[ÙSÙÛÊK™\šÓ[ÙSÙÛÏX]ØZ]ÝJ™\šÓ[ÙSÙÛÊJK_K˜™Y›Ü™U\]HŠ_KÜ™\ÛÝ\˜ÙNˆ˜ÛÛXÝÛ›Ý\È‹™Y›Ü™TØ]™N˜J\Þ[˜ÊKŠOOŠK˜]XÚY[É‰ŠK˜]XÚY[ÏX]ØZ]›ÛZ\ÙK˜[
K˜]XÚY[Ë›X\
OÌŠ‹ÛÛXÝËÉÙK˜ÛÛXÝÚYX
JJJKJK˜™Y›Ü™TØ]™HŠ_KÜ™\ÛÝ\˜ÙNˆ™X[Û›Ý\È‹™Y›Ü™TØ]™N˜J\Þ[˜ÊKŠOOŠK˜]XÚY[É‰ŠK˜]XÚY[ÏX]ØZ]›ÛZ\ÙK˜[
K˜]XÚY[Ë›X\
Ož]
‹K™X[ÚYK\JJJJKJK˜™Y›Ü™TØ]™HŠ_KÜ™\ÛÝ\˜ÙNˆœØ[\È‹™Y›Ü™TØ]™N˜J\Þ[˜ÊKŠOOžÚYŠK˜]˜]\Ëœ˜]Ñš[H[œÝ[˜Ù[Ùˆš[J^ØÛÛœÝÙ]NœŸOX]ØZ]œŠ
K˜]]™Ù]\Ù\Š
NØ]ØZ]ÌŠK˜]˜]\‹\Ù\œËÉÜ‹\Ù\ËšYÏÈ[šÛ›ÝÛˆŸXÞ‹L
_\™]\›ˆ_K˜™Y›Ü™TØ]™HŠ_KÜ™\ÛÝ\˜ÙNˆ˜ÛÛXÝÈ‹™Y›Ü™QÙ]\Ý˜J\Þ[˜ÈOO“”ŠÈ™š\œÝÛ˜[YH‹›\ÝÛ˜[YH‹]H‹™[XZ[‹œÛ™H‹˜˜XÚÙÜ›Ý[™—JJJK˜™Y›Ü™QÙ]\ÝŠ_KÜ™\ÛÝ\˜ÙNˆ˜ÛÛ\[šY\È‹™Y›Ü™QÙ]\Ý˜J\Þ[˜ÈOO“”ŠÈ›˜[YH‹œÛ™WÛ[X™\ˆ‹ÙXœÚ]H‹žš\ÛÙH‹˜Ú]H‹œÝ]WØX˜œˆ—JJJK˜™Y›Ü™QÙ]\ÝŠK™Y›Ü™PÜ™X]N˜J\Þ[˜ÈOOžØÛÛœÝX]ØZ]ÝJJNÜ™]\›žË‹‹]NžØÜ™X]YØ]›™]È]J
KÒTÓÔÝš[™Ê
K‹‹™]___K˜™Y›Ü™PÜ™X]HŠK™Y›Ü™U\]N˜J\Þ[˜ÈOO˜]ØZ]ÝJJK˜™Y›Ü™U\]HŠ_KÜ™\ÛÝ\˜ÙNˆ˜ÛÛXÝ×ÜÝ[[X\žH‹™Y›Ü™QÙ]\Ý˜J\Þ[˜ÈOO“”ŠÈ™š\œÝÛ˜[YH‹›\ÝÛ˜[YH—JJJK˜™Y›Ü™QÙ]\ÝŠ_KÜ™\ÛÝ\˜ÙNˆ™X[È‹™Y›Ü™QÙ]\Ý˜J\Þ[˜ÈOO“”ŠÈ›˜[YH‹˜Ø]YÛÜžH‹™\ØÜš\[Ûˆ—JJJK˜™Y›Ü™QÙ]\ÝŠ_WKXJ

OO›‘YJ]

KÝ
K™Ù]]T›ÝšY\ˆŠK”XJOOOžÚYŠ]™š[\ËœJ\™]\›ˆØÛÛœÝÜN›‹‹‹œŸO]™š[\ŽÜ™]\›žË‹‹š[\ŽžË‹‹œ‹ÜˆŽ™Kœ™YXÙJ
KÊOOœÏOOH™[XZ[ÞË‹‹šK™[XZ[ÙÐ[ZÙHŽ›ŸNœÏOOHœÛ™HÞË‹‹šKœÛ™WÙÐ[ZÙHŽ›ŸNžË‹‹šKØ	ÜßP[ZÙXN›ŸKßJ___K˜\Q[^ÙX\˜ÚŠK]XJ\Þ[˜ÊKŠOOžÚYŠJKœ˜]Ñš[H[œÝ[˜Ù[Ùˆš[JJ\™]\›ˆNØÛÛœÝX]ØZ]]
Kœ˜]Ñš[JKO[™]È›Ü›Q]NÚKœÙ]
š›Ø—ÚY‹Ýš[™Ê
JKKœÙ]
™š[H‹‹‹›˜[YJKKœÙ]
›Y]Y]H‹”ÓÓ‹œÝš[™ÚYžJÛYYXWÚÚ[™˜
‹‹\JKÚXÚÛ\ÝÚÙ^N™K˜ÚXÚÛ\ÝÚÙ^KØØ][Û—ÛX™[™K˜ÚXÚÛ\ÝÚ][KØ\\™WÜ\ÙN›‹Ø\\™YØ]›™]È]JKœ˜]Ñš[K›\Ý[ÙYšYY
KÒTÓÔÝš[™Ê
KØ\\™WÜÛÝ\˜ÙN™K˜Ø\\™WÜÛÝ\˜ÙKÜšYÚ[˜[Û˜[YN™Kœ˜]Ñš[K›˜[YKÜšYÚ[˜[Øž]WÜÚ^™N™Kœ˜]Ñš[KœÚ^™KÛÛ\™\ÜÙYØž]WÜÚ^™Nœ‹œÚ^™_JJNØÛÛœÝÙ]NœË\œ›ÜŽ›ßOX]ØZ]œŠ
K™[˜Ý[ÛœËš[›ÚÙJ™[×ÛYYXH‹ÛY]Ùˆ”ÔÕ‹›ÙNš_JNÚYŠß\ÏË˜]XÚY[\Ëš[™^Y
]›ÝÈ™]È\œ›ÜŠ]ØZ]	ŠËÛÝ[›ÝÝÜ™H	ÙK]_H[ˆ™[Ë˜
JNÜ™]\›žË‹‹™K˜]Ñš[Nœ‹Ü˜ÎœËš[™^Yœ™]šY]×Ý\›Ë˜]XÚY[\›]NœË˜]XÚY[›˜[YK\NœË˜]XÚY[›Z[YU\_‹\K]œËš[™^YœÝÜ˜YÙWÜ]ÝÜ˜YÙWÜ›ÝšY\Žˆ™[È‹^\›˜[ÚYœË˜]XÚY[šY^\›˜[Ý\›œË˜]XÚY[\›™]šY]×Ý\›œËš[™^Yœ™]šY]×Ý\››ÚYÛÝ\˜ÙWØØ\™ÚYœËš[™^YœÛÝ\˜ÙWØØ\™ÚY_K\ØYÕ™[ÈŠKXJ
K
OO™OOOH™šY[Z[œÜXÝ[ÛˆÈš[œÜXÝ[Û‹\ÝÈŽ™OOOH˜]Ø\™\™]šY]Ë\XÚØYÙH‰‰ËœÝ\ÕÚ]
š[XYÙKÈŠOÈÛÜšË\XÚØYÙK\ÝÈŽ™OËš[˜ÛY\Êœ™XÙZ\ŠOÈœ™XÙZ\ŽËœÝ\ÕÚ]
š[XYÙKÈŠOÈ›Ý\ˆŽˆœÚYÛ™YYØÝ[Y[‹™Ù]YYXRÚ[™ŠK	XJ\Þ[˜ÊK
OOžÝž^Ü™]\›Š]ØZ]OË˜ÛÛ^ËšœÛÛŠ
JOË›Y\ÜØYÙ_XØ]ÚÜ™]\›ˆOË›Y\ÜØYÙ__K™Ù][˜Ý[Û‘\œ›ÜˆŠKÌXJ\Þ[˜ÊKV™ÙKHLJOOžÚYŠYKœÜ˜ËœÝ\ÕÚ]
˜›ØŽˆŠI‰ˆYKœÜ˜ËœÝ\ÕÚ]
™]NˆŠI‰™Kœ]
^ØÛÛœÝÙ\œ›ÜŽ™ßOX]ØZ]œŠ
KœÝÜ˜YÙK™œ›ÛJŠK˜Ü™X]TÚYÛ™Y\›
Kœ]Œ
NÚYŠYÊ\™]\›ˆ_XÛÛœÝOYKœÜ˜ÏØ]ØZ]™]Ú
KœÜ˜ÊK[ŠÏO™ËœÝ]\ÈOOLŒÛ[™Ë˜›ØŠ
JK˜Ø]Ú


OO›[
N™Kœ˜]Ñš[NÚYŠOO[[
\™]\›ˆNØÛÛœÝÏYKœ˜]Ñš[KÏ\Ë›˜[YKœÜ]
‹ˆŠK›[™ÝŒOØ‰ÜË›˜[YKœÜ]
‹ˆŠKœÜ

_Xˆˆ‹OX	ØÜž\Ëœ˜[™ÛUURQ

_IØßXX	Ýœ™\XÙJ×—ÊßÊÉÙËˆŠ_KÉÝ_XÙ\œ›ÜŽšOX]ØZ]œŠ
KœÝÜ˜YÙK™œ›ÛJŠK\ØY
‹JNÚYŠ
]›ÝÈÛÛœÛÛK™\œ›ÜŠ\ØY\œ›Üˆ‹
K™]È\œ›ÜŠ‘˜Z[YÈ\ØY]XÚY[ŠNÚYŠKœ]Y‹Š^ØÛÛœÝÙ]N™ßOUœŠ
KœÝÜ˜YÙK™œ›ÛJŠK™Ù]X›XÕ\›
ŠNÙKœÜ˜ÏYËœX›XÕ\›Y[Ù^ØÛÛœÝÙ]N™Ë\œ›ÜŽ˜ŸOX]ØZ]œŠ
KœÝÜ˜YÙK™œ›ÛJŠK˜Ü™X]TÚYÛ™Y\›
‹]™JNÚYŠŸYÏËœÚYÛ™Y\›
]›ÝÈ™]È\œ›ÜŠ‘˜Z[YÈÙXÝ\™H]XÚY[[šÈŠNÙKœÜ˜ÏYËœÚYÛ™Y\›XÛÛœÝO\Ë\NÜ™]\›ˆK\O[K_K\ØYÐXÚÙ]ŠNÙ[˜Ý[Ûˆ™J
^ØÛÛœÝÚY[]N™_OSŠ
K[[Š
NÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KMËY[‹Ú[™[Ž–ÛšœÞ
›‹ÜÛÝ\˜ÙNˆ™š\œÝÛ˜[YH‹˜[Y]N›J
K[\•^ˆL_JKšœÞ
›‹ÜÛÝ\˜ÙNˆ›\ÝÛ˜[YH‹˜[Y]N›J
K[\•^ˆL_JKšœÞ
›‹ÜÛÝ\˜ÙNˆ™[XZ[‹˜[Y]N–ÛJ
KZYJ
WK[\•^ˆL_JKšœÞ
Í‹ÜÛÝ\˜ÙNˆ˜YZ[š\Ý˜]Üˆ‹™XYÛ›NËšYOOYOËšY[\•^ˆL_JKšœÞ
Í‹ÜÛÝ\˜ÙNˆ™\ØX›Y‹™XYÛ›NËšYOOYOËšY[\•^ˆL_JW_J_XJ™K”Ø[\Ò[œ]ÈŠNÙ[˜Ý[Ûˆ

^ØÛÛœÝO\[Š
K\Š
KT™J
KV˜J
KÛ]]]Nš_OX[
Û]]][Û’Ù^N–ÈœÚYÛ\—K]]][Û‘›Ž˜J\Þ[˜ÈÏO™KœØ[\ÐÜ™X]JÊK›]]][Û‘›ˆŠKÛ”ÝXØÙ\ÜÎ˜J

OOžÝ
œ™\ÛÝ\˜Ù\ËœØ[\Ë˜Ü™X]KœÝXØÙ\ÜÈ‹ÛY\ÜØYÙP\™ÜÎž×Îˆ•\Ù\ˆÜ™X]Yˆ^HÚ[ÛÛÛˆ™XÙZ]™H[ˆ[XZ[ÈÙ]Z\ˆ\ÜÝÛÜ™ˆŸ_JKŠ‹ÜØ[\ÈŠ_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜JÏOžÝ
Ë›Y\ÜØYÙ_Šœ™\ÛÝ\˜Ù\ËœØ[\Ë˜Ü™X]K™\œ›Üˆ‹×Îˆ[ˆ\œ›ÜˆØØÝ\œ™YÚ[HÜ™X][™ÈH\Ù\‹ˆŸJKÝ\Nˆ™\œ›ÜˆŸJ_K›Û‘\œ›ÜˆŠ_JKÏXJ\Þ[˜ÈÏOžÚJÊ_K›Û”ÝX›Z]ŠNÜ™]\›ˆšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë[ÈËY[^X]]È]N‹Ú[™[Ž›šœÞÊÛ‹ØÚ[™[Ž–ÛšœÞ
ØKØÚ[™[Ž›šœÞ
ØKØÚ[™[Ž›Šœ™\ÛÝ\˜Ù\ËœØ[\Ë˜Ü™X]K]H‹×ÎˆÜ™X]HH™]È\Ù\ˆŸJ_J_JKšœÞ
‹ØÚ[™[Ž›šœÞ
ZKÛÛ”ÝX›Z]œËÚ[™[Ž›šœÞ
™KßJ_J_JW_J_J_XJ”Ø[\ÐÜ™X]HŠNÙ[˜Ý[ÛˆÝ

^Ü™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^\ÝYžKY[™Ø\M‹Ú[™[Ž–ÛšœÞ
Ó‹ßJKšœÞ
ßJW_J_XJÝ‘Y]ÛÛ˜\ˆŠNÙ[˜Ý[ÛˆÝ

^ØÛÛœÝÜ™XÛÜ™™_OTYJ
K\[Š
K\Š
KV˜J
KOT™J
KÛ]]]NœßOX[
Û]]][Û’Ù^N–ÈœÚYÛ\—K]]][Û‘›Ž˜J\Þ[˜ÈÏOžÚYŠYJ]›ÝÈ™]È\œ›ÜŠJœ™\ÛÝ\˜Ù\ËœØ[\Ë™Y]œ™XÛÜ™Û›ÝÙ›Ý[™‹×Îˆ”™XÛÜ™›Ý›Ý[™ŸJJNÜ™]\›ˆœØ[\Õ\]JKšYÊ_K›]]][Û‘›ˆŠKÛ”ÝXØÙ\ÜÎ˜J

OOžÜŠ‹ÜØ[\ÈŠKŠœ™\ÛÝ\˜Ù\ËœØ[\Ë™Y]œÝXØÙ\ÜÈ‹ÛY\ÜØYÙP\™ÜÎž×Îˆ•\Ù\ˆ\]YÝXØÙ\ÜÙ[HŸ_J_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜J

OOžÛŠœ™\ÛÝ\˜Ù\ËœØ[\Ë™Y]™\œ›Üˆ‹Ý\Nˆ™\œ›Üˆ‹Y\ÜØYÙP\™ÜÎž×Îˆ[ˆ\œ›ÜˆØØÝ\œ™YˆX\ÙHžHYØZ[‹ˆŸ_J_K›Û‘\œ›ÜˆŠ_JKÏXJ\Þ[˜ÈÏOžÜÊÊ_K›Û”ÝX›Z]ŠNÜ™]\›ˆšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë[ÈËY[^X]]È]N‹Ú[™[Ž›šœÞ
Û‹ØÚ[™[Ž›šœÞ
‹ØÚ[™[Ž›šœÞÊZKÝÛÛ˜\Ž›šœÞ
ÝßJKÛ”ÝX›Z]›Ë™XÛÜ™™KÚ[™[Ž–ÛšœÞ
]ßJKšœÞ
™KßJW_J_J_J_J_XJÝ”Ø[\ÑY]ŠNØÛÛœÝ]XJ

OOžØÛÛœÝO[[Š
KT™J
NÜ™]\›ˆOÛšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^[È›Û\Ù[ZX›ÛX‹M‹Ú[™[Ž
œ™\ÛÝ\˜Ù\ËœØ[\Ë™Y]]H‹Û˜[YN˜	ÙK™š\œÝÛ˜[Y_H	ÙK›\ÝÛ˜[Y_XJ_JN›[K”Ø[QY]]HŠKÝXJ

OO›šœÞÊÓ‹ØÚ[™[Ž–ÛšœÞ
ÐËßJKšœÞ
ÛX™[ˆœ™\ÛÝ\˜Ù\ËœØ[\Ë˜XÝ[Û‹›™]ÈŸJW_JK”Ø[\Ó\ÝXÝ[ÛœÈŠKÝVÛšœÞ
ÔËÜÛÝ\˜ÙNˆœH‹[Ø^\ÓÛŽˆLJWKXJOOžØÛÛœÝ[[Š
KT™J
NÜ™]\›ˆÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^\›ÝÈØ\LH‹Ú[™[Ž–Ý˜YZ[š\Ý˜]Ü‰‰›šœÞ
Ü‹Ý˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆ˜›Ü™\‹X›YKLÌ\šÎ˜›Ü™\‹X›YKMÌ‹Ú[™[Ž›Šœ™\ÛÝ\˜Ù\ËœØ[\Ë™šY[Ë˜YZ[š\Ý˜]ÜˆŠ_JK™\ØX›Y	‰›šœÞ
Ü‹Ý˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆ˜›Ü™\‹[Ü˜[™ÙKLÌ\šÎ˜›Ü™\‹[Ü˜[™ÙKMÌ‹Ú[™[Ž›Šœ™\ÛÝ\˜Ù\ËœØ[\Ë™šY[Ë™\ØX›YŠ_JW_JN›[K“Ü[ÛœÑšY[ŠNÙ[˜Ý[Ûˆ]

^Ü™]\›ˆšœÞ
Ó‹Ùš[\œÎÝXÝ[ÛœÎ›šœÞ
ÝßJKÛÜžÙšY[ˆ™š\œÝÛ˜[YH‹Ü™\ŽˆTÐÈŸKÚ[™[Ž›šœÞÊZØÚ[™[Ž–ÛšœÞ
ZÛÛÜÛÝ\˜ÙNˆ™š\œÝÛ˜[YHŸJKšœÞ
ZÛÛÜÛÝ\˜ÙNˆ›\ÝÛ˜[YHŸJKšœÞ
ZÛÛÜÛÝ\˜ÙNˆ™[XZ[ŸJKšœÞ
ZÛÛÛX™[ˆLKÚ[™[Ž›šœÞ
ßJ_JW_J_J_XJ]”Ø[\Ó\ÝŠNØÛÛœÝ^Û\Ý]Ü™X]NžY]—Ý™XÛÜ™™\™\Ù[][ÛŽ˜JOO˜	ÙK™š\œÝÛ˜[Y_H	ÙK›\ÝÛ˜[Y_Xœ™XÛÜ™™\™\Ù[][ÛˆŠ_NÝ˜\ˆ™OH•ÙÙÛH‹™O^™›ÜØ\™™YŠ
K
OOžØÛÛœÝÜ™\ÜÙY›‹Y˜][™\ÜÙYœ‹Û”™\ÜÙYÚ[™ÙNšK‹‹œßOYKÛË×OTZJÜ›Ü›‹ÛÚ[™ÙNšKY˜][›ÜœÏÈLKØ[\Ž›™_JNÜ™]\›ˆšœÞ
˜]Û‹Ý\Nˆ˜]Ûˆ‹˜\šXK\™\ÜÙYŽ›Ë™]K\Ý]HŽ›ÏÈ›ÛˆŽˆ›Ù™ˆ‹™]KY\ØX›YŽ™K™\ØX›YÈˆŽ›ÚY‹‹œË™YŽÛÛXÚÎ“Ý
K›ÛÛXÚË

OOžÙK™\ØX›YÊ[Ê_J_J_JNÜ™K™\Ü^S˜[YO[™NÝ˜\ˆH•ÙÙÛQÜ›Ý\‹Ø]™WOTÚJÑJK]™OQ

K^^™›ÜØ\™™YŠ
K
OOžØÛÛœÝÝ\N›‹‹‹œŸOYNÚYŠOOHœÚ[™ÛHŠ^ØÛÛœÝO\ŽÜ™]\›ˆšœÞ
Ë‹‹šK™YŽJ_ZYŠOOH›][\HŠ^ØÛÛœÝO\ŽÜ™]\›ˆšœÞ
ÝË‹‹šK™YŽJ_]›ÝÈ™]È\œ›ÜŠZ\ÜÚ[™È›Ü\W^XÝYÛˆ	ÒW
_JNÑ^‹™\Ü^S˜[YORÝ˜\–ÜÝ™KÝ™WOX]™J
K^™›ÜØ\™™YŠ
K
OOžØÛÛœÝÝ˜[YN›‹Y˜][˜[YNœ‹Û•˜[YPÚ[™ÙNšOXJ

OOžßK›Û•˜[YPÚ[™ÙHŠK‹‹œßOYKÛË×OTZJÜ›Ü›‹Y˜][›ÜœÏÈˆ‹ÛÚ[™ÙNšKØ[\Ž’JNÜ™]\›ˆšœÞ
Ý™KÜØÛÜN™K—×ÜØÛÜUÙÙÛQÜ›Ý\\NˆœÚ[™ÛH‹˜[YNž\ÙSY[[Ê

OO›ÏÖÛ×N–×KÛ×JKÛ’][PXÝ]˜]N˜ËÛ’][QXXÝ]˜]Nž\ÙPØ[˜XÚÊ

OO˜ÊˆŠKØ×JKÚ[™[Ž›šœÞ
™KË‹‹œË™YŽJ_J_JKÝ^™›ÜØ\™™YŠ
K
OOžØÛÛœÝÝ˜[YN›‹Y˜][˜[YNœ‹Û•˜[YPÚ[™ÙNšOXJ

OOžßK›Û•˜[YPÚ[™ÙHŠK‹‹œßOYKÛË×OTZJÜ›Ü›‹Y˜][›ÜœÏÖ×KÛÚ[™ÙNšKØ[\Ž’JKO^\ÙPØ[˜XÚÊO˜Ê
OV×JOO–Ë‹‹›KJKØ×JK^\ÙPØ[˜XÚÊO˜Ê
OV×JOO›K™š[\ŠÏO™ÈOOZ
JKØ×JNÜ™]\›ˆšœÞ
Ý™KÜØÛÜN™K—×ÜØÛÜUÙÙÛQÜ›Ý\\Nˆ›][\H‹˜[YN›ËÛ’][PXÝ]˜]NKÛ’][QXXÝ]˜]N™‹Ú[™[Ž›šœÞ
™KË‹‹œË™YŽJ_J_JNÑ^‹™\Ü^S˜[YORÝ˜\–ÓÝOX]™J
K™O^™›ÜØ\™™YŠ
K
OOžØÛÛœÝ××ÜØÛÜUÙÙÛQÜ›Ý\›‹\ØX›YœHLK›Ýš[™Ñ›ØÝ\ÎšOHLÜšY[][ÛŽœË\Ž›ËÛÜ˜ÏHL‹‹_OYKZ]™JŠKQ]ŠÊKO^Ü›ÛNˆ™Ü›Ý\‹\Žš‹‹_NÜ™]\›ˆšœÞ
ÜØÛÜN›‹›Ýš[™Ñ›ØÝ\ÎšK\ØX›Yœ‹Ú[™[ŽšOÛšœÞ
S‹Ø\ÐÚ[ˆL‹‹™‹ÜšY[][ÛŽœË\ŽšÛÜ˜ËÚ[™[Ž›šœÞ
™]‹Ë‹‹›K™YŽJ_JN›šœÞ
™]‹Ë‹‹›K™YŽJ_J_JKŒH•ÙÙÛQÜ›Ý\][H‹Ý™O^™›ÜØ\™™YŠ
K
OOžØÛÛœÝ[Ý™JŒ‹K—×ÜØÛÜUÙÙÛQÜ›Ý\
KSÝ
Œ‹K—×ÜØÛÜUÙÙÛQÜ›Ý\
KOZ]™JK—×ÜØÛÜUÙÙÛQÜ›Ý\
KÏ[‹˜[YKš[˜ÛY\ÊK˜[YJKÏ\‹™\ØX›YK™\ØX›YÏ^Ë‹‹™K™\ÜÙYœË\ØX›Y›ßKO^\ÙT™YŠ[
NÜ™]\›ˆ‹œ›Ýš[™Ñ›ØÝ\ÏÛšœÞ
S‹Ø\ÐÚ[ˆL‹‹šK›ØÝ\ØX›Nˆ[ËXÝ]™NœË™YŽKÚ[™[Ž›šœÞ
]KË‹‹˜Ë™YŽJ_JN›šœÞ
]KË‹‹˜Ë™YŽJ_JNØÝ™K™\Ü^S˜[YOZŒŽÝ˜\ˆ]O^™›ÜØ\™™YŠ
K
OOžØÛÛœÝ××ÜØÛÜUÙÙÛQÜ›Ý\›‹˜[YNœ‹‹‹š_OYKÏ[Ý™JŒ‹ŠKÏ^Ü›ÛNˆœ˜Y[È‹˜\šXKXÚXÚÙYŽ™Kœ™\ÜÙY˜\šXK\™\ÜÙYŽ›ÚYKÏ\Ë\OOOHœÚ[™ÛHÛÎ›ÚYÜ™]\›ˆšœÞ
™KË‹‹˜Ë‹‹šK™YŽÛ”™\ÜÙYÚ[™ÙN˜JOOžÝOÜË›Û’][PXÝ]˜]JŠNœË›Û’][QXXÝ]˜]JŠ_K›Û”™\ÜÙYÚ[™ÙHŠ_J_JKQ^‹]XÝ™NØÛÛœÝRØÊš[›[™KY›^][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆØ\Lˆ›Ý[™Y[Y^\ÛH›Û[YY][HÝ™\Ž˜™Ë[]]YÝ™\Ž^[]]YY›Ü™YÜ›Ý[™\ØX›YœÚ[\‹Y]™[Ë[›Û™H\ØX›Y›ÜXÚ]KML]KVÜÝ]O[Û—N˜™ËXXØÙ[]KVÜÝ]O[Û—N^XXØÙ[Y›Ü™YÜ›Ý[™É—ÜÝ™×NœÚ[\‹Y]™[Ë[›Û™HÉ—ÜÝ™Î››Ý
ØÛ\ÜÊIÜÚ^™KI×JWNœÚ^™KMÉ—ÜÝ™×NœÚš[šËL›ØÝ\Ë]š\ÚX›N˜›Ü™\‹\š[™È›ØÝ\Ë]š\ÚX›Nœš[™Ë\š[™ËÍL›ØÝ\Ë]š\ÚX›Nœš[™ËVÌÜHÝ][™K[›Û™H˜[œÚ][Û‹VØÛÛÜ‹›Þ\ÚYÝ×H\šXKZ[˜[Yœš[™ËY\ÝXÝ]™KÌŒ\šÎ˜\šXKZ[˜[Yœš[™ËY\ÝXÝ]™KÍ\šXKZ[˜[Y˜›Ü™\‹Y\ÝXÝ]™HÚ]\ÜXÙK[›ÝÜ˜\‹Ý˜\šX[ÎžÝ˜\šX[žÙY˜][ˆ˜™Ë]˜[œÜ\™[‹Ý][™Nˆ˜›Ü™\ˆ›Ü™\‹Z[œ]™Ë]˜[œÜ\™[ÚYÝË^ÈÝ™\Ž˜™ËXXØÙ[Ý™\Ž^XXØÙ[Y›Ü™YÜ›Ý[™ŸKÚ^™NžÙY˜][ˆšNHLˆZ[‹]ËNH‹ÛNˆšNLKHZ[‹]ËN‹ÎˆšLLL‹HZ[‹]ËLLŸ_KY˜][˜\šX[ÎžÝ˜\šX[ˆ™Y˜][‹Ú^™Nˆ™Y˜][Ÿ_JK]™O^˜Ü™X]PÛÛ^
ÜÚ^™Nˆ™Y˜][‹˜\šX[ˆ™Y˜][‹ÜXÚ[™ÎŒJNÙ[˜Ý[Ûˆ]
ØÛ\ÜÓ˜[YN™K˜\šX[Ú^™N›‹ÜXÚ[™ÎœLÚ[™[ŽšK‹‹œßJ^Ü™]\›ˆšœÞ
È™]K\ÛÝŽˆÙÙÛKYÜ›Ý\‹™]K]˜\šX[Ž™]K\Ú^™HŽ›‹™]K\ÜXÚ[™ÈŽœ‹Ý[NžÈ‹KYØ\ŽœŸKÛ\ÜÓ˜[YN•J™Ü›Ý\ÝÙÙÛKYÜ›Ý\›^ËYš]][\ËXÙ[\ˆØ\VËK\ÜXÚ[™Ê˜\ŠKYØ\
JWH›Ý[™Y[Y]KVÜÜXÚ[™ÏYY˜][N™]KVÝ˜\šX[[Ý][™WNœÚYÝË^È‹JK‹‹œËÚ[™[Ž›šœÞ
]™K”›ÝšY\‹Ý˜[YNžÝ˜\šX[Ú^™N›‹ÜXÚ[™ÎœŸKÚ[™[Žš_J_J_XJ]•ÙÙÛQÜ›Ý\ŠNÙ[˜Ý[ÛˆÍJØÛ\ÜÓ˜[YN™KÚ[™[Ž˜\šX[›‹Ú^™Nœ‹‹‹š_J^ØÛÛœÝÏ^\ÙPÛÛ^
]™JNÜ™]\›ˆšœÞ
]È™]K\ÛÝŽˆÙÙÛKYÜ›Ý\Z][H‹™]K]˜\šX[ŽœË˜\šX[‹™]K\Ú^™HŽœËœÚ^™_‹™]K\ÜXÚ[™ÈŽœËœÜXÚ[™ËÛ\ÜÓ˜[YN•J
Ý˜\šX[œË˜\šX[‹Ú^™NœËœÚ^™_ŸJKËX]]ÈZ[‹]ËLÚš[šËLLÈ›ØÝ\Îž‹LL›ØÝ\Ë]š\ÚX›Nž‹LL‹™]KVÜÜXÚ[™ÏLNœ›Ý[™Y[›Û™H]KVÜÜXÚ[™ÏLNœÚYÝË[›Û™H]KVÜÜXÚ[™ÏLN™š\œÝœ›Ý[™Y[[Y]KVÜÜXÚ[™ÏLN›\Ýœ›Ý[™Y\‹[Y]KVÜÜXÚ[™ÏLN™]KVÝ˜\šX[[Ý][™WN˜›Ü™\‹[L]KVÜÜXÚ[™ÏLN™]KVÝ˜\šX[[Ý][™WN™š\œÝ˜›Ü™\‹[‹JK‹‹šKÚ[™[ŽJ_XJÍK•ÙÙÛQÜ›Ý\][HŠNØÛÛœÝXJ

OOžØÛÛœÝOT™J
K\Š
KÚY[]N›ŸOSŠ
K\[Š
KÛ]]]Nš_OX[
Û]]][Û’Ù^N–È\]T\ÜÝÛÜ™—K]]][Û‘›Ž˜J\Þ[˜Ê
OOžÚYŠ[Š]›ÝÈ™]È\œ›ÜŠJ˜Ü›Kœ›Ùš[Kœ™XÛÜ™Û›ÝÙ›Ý[™‹×Îˆ”™XÛÜ™›Ý›Ý[™ŸJJNÜ™]\›ˆ‹\]T\ÜÝÛÜ™
‹šY
_K›]]][Û‘›ˆŠKÛ”ÝXØÙ\ÜÎ˜J

OOžÝ
˜Ü›Kœ›Ùš[Kœ\ÜÝÛÜ™Ü™\Ù]ÜÙ[‹ÛY\ÜØYÙP\™ÜÎž×ÎˆH™\Ù]\ÜÝÛÜ™[XZ[\È™Y[ˆÙ[È[Ý\ˆ[XZ[Y™\ÜÈŸ_J_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜JÏOžÝ
	ÜßXÝ\Nˆ™\œ›ÜˆŸJ_K›Û‘\œ›ÜˆŠ_JNÜ™]\›ˆšœÞÊ™KÝ˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆËY[^X˜\ÙHX]]È‹ÛÛXÚÎ˜J

OOšJ
K›ÛÛXÚÈŠKÚ[™[Ž–ÛšœÞ
S™KØÛ\ÜÓ˜[YNˆœÚ^™KMH\‹LÈŸJKJ˜Ü›Kœ›Ùš[Kœ\ÜÝÛÜ™˜Ú[™ÙHŠW_J_KÚ[™ÙT\ÜÝÛÜ™]ÛˆŠKŽXJ

OOžØÛÛœÝOT™J
K^Ê
K[]Ê
NÜ™]\›ˆÛšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
œØÚ[™[Ž›šœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË]HŠ_J_JKšœÞ
œØÚ[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛZ[‹ZVØØ[ÊLšLË\™[KM\™[JWH‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KMˆ‹Ú[™[Ž–ÛšœÞ
ßJKšœÞ
	ßJKšœÞ
ßJKšœÞ
]ßJKšœÞ
ßJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]X]]ÈMˆÜXÙK^KLÈX‹M‹Ú[™[Ž–ÛšœÞ
ßJKšœÞÊ™KÝ˜\šX[ˆ™\ÝXÝ]™H‹Û\ÜÓ˜[YNˆËY[^X˜\ÙHX]]È‹ÛÛXÚÎ˜J

OO›Š
K›ÛÛXÚÈŠKÚ[™[Ž–ÛšœÞ
›ÙKØÛ\ÜÓ˜[YNˆœÚ^™KMH\‹LÈŸJKšœÞ
ØKÚLN’Ù^Nˆœ˜K˜]]›ÙÛÝ]‹Ú[™[Žˆ“ÙÈÝ]ŸJW_JW_JW_J_JW_JN›[K”Ù][™ÜÔYÙS[Øš[HŠNÑŽœ]H‹ÜÙ][™ÜÈŽØÛÛœÝÓÏXJ
ØÚ[™[Ž™_JOO›šœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™\\˜Ø\ÙH˜XÚÚ[™Ë]ÚYHLHX‹LKH‹Ú[™[Ž™_JK”ÙXÝ[Û“X™[ŠKXJ

OOžØÛÛœÝÚY[]N™K™Y™]ÚOSŠ
KÙ]N›‹™Y™]ÚœŸO[
œØ[\È‹ÚY™OËšYJKOT™J
KÏ\Š
KÏ\[Š
KÏYJ
KO^\ÙPØ[˜XÚÊ\Þ[˜ÊJOOžÚYŠY_[Š\™]\›ŽØÛÛœÝÏ[–ÚNÚYŠOOOYÊ\™]\›ŽØÛÛœÝVÈœØ[\È‹™Ù]Û™H‹ÚY”Ýš[™ÊKšY
KY]N›ÚYWKÏXË™Ù]]Y\žQ]JŠNØËœÙ]]Y\žQ]J‹ÏO—É‰žË‹‹—ËÚN›_JNÝž^Ø]ØZ]ËœØ[\Õ\]JKšYË‹‹›‹ÚN›_JK

KŠ
KÊ˜Ü›Kœ›Ùš[K\]Y‹ÛY\ÜØYÙP\™ÜÎž×Îˆ–[Ý\ˆ›Ùš[H\È™Y[ˆ\]YŸ_J_XØ]ÚØËœÙ]]Y\žQ]J‹ÊKÊ˜Ü›Kœ›Ùš[K\]WÙ\œ›Üˆ‹Ý\Nˆ™\œ›Üˆ‹Y\ÜØYÙP\™ÜÎž×Îˆ[ˆ\œ›ÜˆØØÝ\œ™YˆX\ÙHžHYØZ[ˆŸ_J__KÙK‹Ë‹Ë×JK^\ÙPØ[˜XÚÊ\Þ[˜ÈOžÚYŠŠ]ž^Ø]ØZ]ËœØ[\Õ\]J‹šY
K

KŠ
KÊ˜Ü›Kœ›Ùš[K\]Y‹ÛY\ÜØYÙP\™ÜÎž×Îˆ–[Ý\ˆ›Ùš[H\È™Y[ˆ\]YŸ_J_XØ]ÚÜÊ˜Ü›Kœ›Ùš[K\]WÙ\œ›Üˆ‹Ý\Nˆ™\œ›Üˆ‹Y\ÜØYÙP\™ÜÎž×Îˆ[ˆ\œ›ÜˆØØÝ\œ™YˆX\ÙHžHYØZ[‹ˆŸ_J__KÛ‹Ë‹×JNÜ™]\›ˆY_[Û[›šœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÓËØÚ[™[ŽšJ˜Ü›Kœ›Ùš[K]H‹×Îˆ”›Ùš[HŸJ_JKšœÞÊS‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆÝ™\™›ÝËZY[ˆ‹Ú[™[Ž–ÛšœÞ
XKÜ™XÛÜ™›‹Ú[™[Ž›šœÞ
‹ÜÚ^™NˆœÛH‹Ú[™[Ž›šœÞ
œØÚ[™[Ž›šœÞ
TËÜÛÝ\˜ÙNˆ˜]˜]\ˆ‹\Nˆ˜]˜]\ˆ‹Û”Ø]™N™‹[šÔÜÚ][ÛŽˆœšYÚŸJ_J_J_JKšœÞ
Ô‹ßJKšœÞ
KÛX™[šJœ™\ÛÝ\˜Ù\ËœØ[\Ë™šY[Ë™š\œÝÛ˜[YHŠK˜[YN›‹™š\œÝÛ˜[YOÏÈˆ‹Û”Ø]™N˜JOJ™š\œÝÛ˜[YH‹
K›Û”Ø]™HŠ_JKšœÞ
Ô‹ßJKšœÞ
KÛX™[šJœ™\ÛÝ\˜Ù\ËœØ[\Ë™šY[Ë›\ÝÛ˜[YHŠK˜[YN›‹›\ÝÛ˜[YOÏÈˆ‹Û”Ø]™N˜JOJ›\ÝÛ˜[YH‹
K›Û”Ø]™HŠ_JKšœÞ
Ô‹ßJKšœÞ
KÛX™[šJœ™\ÛÝ\˜Ù\ËœØ[\Ë™šY[Ë™[XZ[ŠK˜[YN›‹™[XZ[ÏÈˆ‹Û”Ø]™N˜JOJ™[XZ[‹
K›Û”Ø]™HŠ_JW_JW_J_K”›Ùš[TÙXÝ[ÛˆŠKOXJ
ÛX™[™K˜[YNÛ”Ø]™N›ŸJOOžØÛÛœÝÜ‹WO^\ÙTÝ]JLJKÜË×O^\ÙTÝ]J
KÏ^\ÙT™YŠ[
NÞ\ÙQY™™XÝ


OOžÛÊ
_KÝJK\ÙQY™™XÝ


OOžÜ‰‰ŠË˜Ý\œ™[Ë™›ØÝ\Ê
KË˜Ý\œ™[ËœÙ[XÝ

J_KÜ—JNØÛÛœÝO^\ÙPØ[˜XÚÊ

OOžÚJLJNØÛÛœÝO\Ëš[J
NÛHOO]	‰›ŠJ_KÜË—JK^\ÙPØ[˜XÚÊ

OOžÛÊ
KJLJ_KÝJK^\ÙPØ[˜XÚÊOOžÛKšÙ^OOOH‘[\ˆÊKœ™]™[Y˜][

KË˜Ý\œ™[Ë˜›\Š
JN›KšÙ^OOOH‘\ØØ\H‰‰ŠKœ™]™[Y˜][

KŠ
J_KÙ—JNÜ™]\›ˆÛšœÞÊ‹ÜÚ^™NˆœÛH‹Ú[™[Ž–ÛšœÞ
œØÚ[™[Ž›šœÞ
\ØÛ\ÜÓ˜[YNˆ™›Û[›Ü›X[^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™_J_JKšœÞ
ËØÚ[™[Ž›šœÞ
š[œ]‹Ü™YŽ˜Ë˜[YNœËÛÚ[™ÙN˜JOO›ÊK\™Ù]˜[YJK›ÛÚ[™ÙHŠKÛ›\ŽKÛ’Ù^QÝÛŽšÛ\ÜÓ˜[YNˆ˜™Ë]˜[œÜ\™[^\šYÚ]^X˜\ÙHÝ][™K[›Û™HËMŸJ_JW_JN›šœÞÊ‹ÜÚ^™NˆœÛH‹Û\ÜÓ˜[YNˆ˜Ý\œÛÜ‹\Ú[\ˆ‹ÛÛXÚÎ˜J

OOšJL
K›ÛÛXÚÈŠKÚ[™[Ž–ÛšœÞ
œØÚ[™[Ž›šœÞ
\ØÛ\ÜÓ˜[YNˆ™›Û[›Ü›X[^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™_J_JKšœÞ
ËØÚ[™[Ž›šœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^X˜\ÙH‹Ú[™[ŽJ_JW_J_K’[›[™QY]›ÝÈŠK	XJ

OOžØÛÛœÝOT™J
NÜ™]\›ˆšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÓËØÚ[™[Ž™J˜Ü›KœÙ][™ÜËœ™Y™\™[˜Ù\È‹×Îˆ”™Y™\™[˜Ù\ÈŸJ_JKšœÞÊS‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆÝ™\™›ÝËZY[ˆ‹Ú[™[Ž–ÛšœÞ
]ßJKšœÞ
Ô‹ßJKšœÞ
ßJW_JW_J_K”™Y™\™[˜Ù\ÔÙXÝ[ÛˆŠK]XJ

OOžØÛÛœÝOT™J
KS•J
KÛ‹—O\Ù

NÜ™]\›ˆ›[™ÝLOÛ[›šœÞÊ‹ÜÚ^™NˆœÛH‹Ú[™[Ž–ÛšœÞ
œØÚ[™[Ž›šœÞ
\ØÛ\ÜÓ˜[YNˆ™›Û[›Ü›X[^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›K›[™ÝXYÙHŠ_J_JKšœÞ
ËØÚ[™[Ž›šœÞÊ˜KÝ˜[YN›‹Û•˜[YPÚ[™ÙNœ‹Ú[™[Ž–ÛšœÞ
ØKÜÚ^™NˆœÛH‹Û\ÜÓ˜[YNˆËX]]ÈZX]]ÈKL›Ü™\‹[›Û™HÚYÝË[›Û™H‹Ú[™[Ž›šœÞ
KßJ_JKšœÞ
ØKØÚ[™[Ž›X\
OO›šœÞ
›‹Ý˜[YNšK›ØØ[KÚ[™[ŽšK›˜[Y_KK›ØØ[JJ_JW_J_JW_J_K“[™ÝXYÙT›ÝÈŠKXJ

OOžØÛÛœÝOT™J
KÝ[YNÙ][YN›ŸO]ÐŠ
NÜ™]\›ˆšœÞÊ‹ÜÚ^™NˆœÛH‹Û\ÜÓ˜[YNˆ™›^XÛÛ][\Ë\Ý™]ÚØ\Lˆ‹Ú[™[Ž–ÛšœÞ
\ØÛ\ÜÓ˜[YNˆ™›Û[›Ü›X[^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›K[YK›X™[‹×Îˆ•[YHŸJ_JKšœÞÊ]Ý\NˆœÚ[™ÛH‹˜[YNÛ•˜[YPÚ[™ÙN˜JOœ‰‰›ŠŠK›Û•˜[YPÚ[™ÙHŠKÚ^™Nˆ›È‹˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž–ÛšœÞÊÍKÝ˜[YNˆœÞ\Ý[H‹˜\šXK[X™[Ž™J˜Ü›K[YKœÞ\Ý[HŠKÛ\ÜÓ˜[YNˆ™›^LHØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÓÙKØÛ\ÜÓ˜[YNˆœÚ^™KMŸJKJ˜Ü›K[YKœÞ\Ý[HŠW_JKšœÞÊÍKÝ˜[YNˆ›YÚ‹˜\šXK[X™[Ž™J˜Ü›K[YK›YÚŠKÛ\ÜÓ˜[YNˆ™›^LHØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÛÙKØÛ\ÜÓ˜[YNˆœÚ^™KMŸJKJ˜Ü›K[YK›YÚŠW_JKšœÞÊÍKÝ˜[YNˆ™\šÈ‹˜\šXK[X™[Ž™J˜Ü›K[YK™\šÈŠKÛ\ÜÓ˜[YNˆ™›^LHØ\Lˆ‹Ú[™[Ž–ÛšœÞ
[ÙKØÛ\ÜÓ˜[YNˆœÚ^™KMŸJKJ˜Ü›K[YK™\šÈŠW_JW_JW_J_K•[YT›ÝÈŠKXJ

OOŠ™J
K[
K’[˜›Ý[™[XZ[ÙXÝ[ÛˆŠK]XJ

OOžØÛÛœÝOT™J
NÜ™]\›ˆšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÓËØÚ[™[Ž™J˜Ü›Kœ›Ùš[K›XÜ]H‹×Îˆ“PÔÙ\™\ˆŸJ_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™X‹LˆLH‹Ú[™[Ž™J˜Ü›Kœ›Ùš[K›XÜ™\ØÜš\[Ûˆ‹×Îˆ•\ÙH\ÈT“ÈÛÛ›™XÝ[Ý\ˆRH\ÜÚ\Ý[È[Ý\ˆÔ“H]HšXHH[Ù[ÛÛ^›ÝØÛÛ
PÔ
KˆŸJ_JKšœÞ
S‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆÝ™\™›ÝËZY[ˆ‹Ú[™[Ž›šœÞ
Ý˜[YNˆšÎ‹ËÛZÜœœ[^›ÙYœØ›YZ]™‹œÝ\X˜\ÙK˜ÛËÙ[˜Ý[ÛœËÝŒKÛXÜŸJ_JW_J_K“XÜÙ\™\”ÙXÝ[ÛˆŠKXJ

OOžØÛÛœÝOT™J
NÜ™]\›ˆšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÓËØÚ[™[Ž™J˜Ü›KœÙ][™ÜË˜X›Ý]Š_JKšœÞ
S‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆÝ™\™›ÝËZY[ˆ‹Ú[™[Ž›šœÞ
‹Ø\ÐÚ[ˆLÚ^™NˆœÛH‹Û\ÜÓ˜[YNˆ˜Ý\œÛÜ‹\Ú[\ˆ‹Ú[™[Ž›šœÞÊ‹ÝÎ›]‹œ]Ú[™[Ž–ÛšœÞ
œØÚ[™[Ž›šœÞ
\ØÛ\ÜÓ˜[YNˆ™›Û[›Ü›X[‹Ú[™[Ž™J˜Ü›K˜Ú[™Ù[ÙË]HŠ_J_JKšœÞ
ËØÚ[™[Ž›šœÞ
•ØÛ\ÜÓ˜[YNˆœÚ^™KM^[]]YY›Ü™YÜ›Ý[™ŸJ_JW_J_J_JW_J_KX›Ý]ÙXÝ[ÛˆŠKXJ
Ý˜[YN™_JOOžØÛÛœÝT™J
KÛ‹—O^\ÙTÝ]JLJKOXJ

OOžÜŠL
K˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
JKÙ][Y[Ý]


OOžÜŠLJ_KML
_Kš[™PÛÜHŠNÜ™]\›ˆšœÞ
ÛËØÚ[™[Ž›šœÞÊ[ØÚ[™[Ž–ÛšœÞ
ÛØ\ÐÚ[ˆLÚ[™[Ž›šœÞÊ‹ÜÚ^™NˆœÛH‹Û\ÜÓ˜[YNˆ˜Ý\œÛÜ‹\Ú[\ˆ›^[›ÝÜ˜\‹ÛÛXÚÎšKÚ[™[Ž–ÛšœÞ
œØÛ\ÜÓ˜[YNˆ›Ý™\™›ÝËZY[ˆ‹Ú[™[Ž›šœÞ
\ØÛ\ÜÓ˜[YNˆ™›Û[›Ü›X[[˜Ø]H‹Ú[™[Ž™_J_JKšœÞ
ËØÛ\ÜÓ˜[YNˆœÚš[šËL‹Ú[™[Ž›ÛšœÞ
[ØÛ\ÜÓ˜[YNˆœÚ^™KM^[]]YY›Ü™YÜ›Ý[™ŸJN›šœÞ
ÙKØÛ\ÜÓ˜[YNˆœÚ^™KM^[]]YY›Ü™YÜ›Ý[™ŸJ_JW_J_JKšœÞ
ÛØÚ[™[Ž›šœÞ
œ‹ØÚ[™[Ž
È˜Ü›K˜ÛÛ[[Û‹˜ÛÜYYŽˆ˜Ü›K˜ÛÛ[[Û‹˜ÛÜHŠ_J_JW_J_J_KÛÜT\ÝT›ÝÈŠK	XJ

OOžØÛÛœÝÙKO^\ÙTÝ]JLJKÚY[]N›‹™Y™]ÚœŸOSŠ
KÙ]NšK™Y™]ÚœßO[
œØ[\È‹ÚY›ËšYJKÏT™J
KÏ\Š
KO\[Š
KÛ]]]N™ŸOX[
Û]]][Û’Ù^N–ÈœÚYÛ\—K]]][Û‘›Ž˜J\Þ[˜ÈOOžÚYŠ[Š]›ÝÈ™]È\œ›ÜŠÊ˜Ü›Kœ›Ùš[Kœ™XÛÜ™Û›ÝÙ›Ý[™‹×Îˆ”™XÛÜ™›Ý›Ý[™ŸJJNÜ™]\›ˆKœØ[\Õ\]J‹šYJ_K›]]][Û‘›ˆŠKÛ”ÝXØÙ\ÜÎ˜J

OOžÜŠ
KÊ
K
LJKÊ˜Ü›Kœ›Ùš[K\]Y‹ÛY\ÜØYÙP\™ÜÎž×Îˆ–[Ý\ˆ›Ùš[H\È™Y[ˆ\]YŸ_J_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜JOOžØÊ˜Ü›Kœ›Ùš[K\]WÙ\œ›Üˆ‹Ý\Nˆ™\œ›Üˆ‹Y\ÜØYÙP\™ÜÎž×Îˆ[ˆ\œ›ÜˆØØÝ\œ™YˆX\ÙHžHYØZ[ˆŸ_J_K›Û‘\œ›ÜˆŠ_JNÚYŠ[Š\™]\›ˆ[ØÛÛœÝXJ\Þ[˜ÈOOžÙŠJ_Kš[™SÛ”ÝX›Z]ŠNÜ™]\›ˆšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë[È^X]]È]N‹Ú[™[Ž›šœÞ
XKÛÛ”ÝX›Z]š™XÛÜ™šKÚ[™[Ž›šœÞ
ÝÚ\ÑY][ÙN™KÙ]Y][ÙNJ_J_J_K”›Ùš[TYÙHŠKÝXJ
Ú\ÑY][ÙN™KÙ]Y][ÙNJOOžØÛÛœÝ\Š
KT™J
KO[[Š
KÚY[]NœË™Y™]Ú›ßOSŠ
KÚ\Ñ\N˜ßO\Ê
KO\[Š
KÛ]]]N™ŸOX[
Û]]][Û’Ù^N–È\]T\ÜÝÛÜ™—K]]][Û‘›Ž˜J\Þ[˜Ê
OOžÚYŠ\Ê]›ÝÈ™]È\œ›ÜŠŠ˜Ü›Kœ›Ùš[Kœ™XÛÜ™Û›ÝÙ›Ý[™‹×Îˆ”™XÛÜ™›Ý›Ý[™ŸJJNÜ™]\›ˆK\]T\ÜÝÛÜ™
ËšY
_K›]]][Û‘›ˆŠKÛ”ÝXØÙ\ÜÎ˜J

OOžÛŠ˜Ü›Kœ›Ùš[Kœ\ÜÝÛÜ™Ü™\Ù]ÜÙ[‹ÛY\ÜØYÙP\™ÜÎž×ÎˆH™\Ù]\ÜÝÛÜ™[XZ[\È™Y[ˆÙ[È[Ý\ˆ[XZ[Y™\ÜÈŸ_J_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜JOžÛŠ	ØŸXÝ\Nˆ™\œ›ÜˆŸJ_K›Û‘\œ›ÜˆŠ_JKÛ]]]NšOX[
Û]]][Û’Ù^N–ÈœÚYÛ\—K]]][Û‘›Ž˜J\Þ[˜ÈOžÚYŠZJ]›ÝÈ™]È\œ›ÜŠŠ˜Ü›Kœ›Ùš[Kœ™XÛÜ™Û›ÝÙ›Ý[™‹×Îˆ”™XÛÜ™›Ý›Ý[™ŸJJNÜ™]\›ˆKœØ[\Õ\]JKšYŠ_K›]]][Û‘›ˆŠKÛ”ÝXØÙ\ÜÎ˜J

OOžÛÊ
KŠ˜Ü›Kœ›Ùš[K\]Y‹ÛY\ÜØYÙP\™ÜÎž×Îˆ–[Ý\ˆ›Ùš[H\È™Y[ˆ\]YŸ_J_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜J

OOžÛŠ˜Ü›Kœ›Ùš[K\]WÙ\œ›Üˆ‹Ý\Nˆ™\œ›Üˆ‹Y\ÜØYÙP\™ÜÎž×Îˆ[ˆ\œ›ÜˆØØÝ\œ™YˆX\ÙHžHYØZ[‹ˆŸ_J_K›Û‘\œ›ÜˆŠ_JNÚYŠ\Ê\™]\›ˆ[ØÛÛœÝOXJ

OOžÙŠ
_Kš[™PÛXÚÓÜ[”\ÜÝÛÜ™Ú[™ÙHŠKÏXJ\Þ[˜ÈOžÚ
Š_Kš[™P]˜]\•\]HŠNÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞ
Û‹ØÚ[™[Ž›šœÞÊ‹ØÚ[™[Ž–ÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹M›^›^\›ÝÈ\ÝYžKX™]ÙY[ˆ‹Ú[™[Ž›šœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽœŠ˜Ü›Kœ›Ùš[K]HŠ_J_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KMX‹M‹Ú[™[Ž–ÛšœÞ
TËÜÛÝ\˜ÙNˆ˜]˜]\ˆ‹\Nˆ˜]˜]\ˆ‹Û”Ø]™N™Ë[šÔÜÚ][ÛŽˆœšYÚŸJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLHÛN™ÜšYXÛÛËLˆØ\M‹Ú[™[Ž–ÛšœÞ
MKÜÛÝ\˜ÙNˆ™š\œÝÛ˜[YH‹\ÑY][ÙN™_JKšœÞ
MKÜÛÝ\˜ÙNˆ›\ÝÛ˜[YH‹\ÑY][ÙN™_JW_JKšœÞ
MKÜÛÝ\˜ÙNˆ™[XZ[‹\ÑY][ÙN™_JKšœÞ
ÝßJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^\›ÝÈ\ÝYžKY[™Ø\Lˆ‹Ú[™[Ž–ÈYI‰›šœÞ
‘œ˜YÛY[ØÚ[™[Ž›šœÞ
™KÝ˜\šX[ˆ›Ý][™H‹\Nˆ˜]Ûˆ‹ÛÛXÚÎ›KÚ[™[ŽœŠ˜Ü›Kœ›Ùš[Kœ\ÜÝÛÜ™˜Ú[™ÙHŠ_J_JKšœÞÊ™KÝ\Nˆ˜]Ûˆ‹˜\šX[™OÈ™ÚÜÝŽˆ›Ý][™H‹ÛÛXÚÎ˜J

OO
YJK›ÛÛXÚÈŠKÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ‹Ú[™[Ž–ÙOÛšœÞ
ÙßJN›šœÞ
ÚËßJKŠOÈœ˜K˜XÝ[Û‹˜Ø[˜Ù[Žˆœ˜K˜XÝ[Û‹™Y]ŠW_JKI‰›šœÞÊ™KÝ\NˆœÝX›Z]‹\ØX›YˆXË˜\šX[ˆ›Ý][™H‹Ú[™[Ž–ÛšœÞ
ÛËßJKŠœ˜K˜XÝ[Û‹œØ]™HŠW_JW_JW_J_JK›ÚYšœÞ
Û‹ØÚ[™[Ž›šœÞ
‹ØÚ[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM\ÝYžKX™]ÙY[ˆ‹Ú[™[Ž–ÛšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽœŠ˜Ü›Kœ›Ùš[K›XÜ]H‹×Îˆ“PÔÙ\™\ˆŸJ_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽœŠ˜Ü›Kœ›Ùš[K›XÜ™\ØÜš\[Ûˆ‹×Îˆ•\ÙH\ÈT“ÈÛÛ›™XÝ[Ý\ˆRH\ÜÚ\Ý[È[Ý\ˆÔ“H]HšXHH[Ù[ÛÛ^›ÝØÛÛ
PÔ
KˆŸJ_JKšœÞ
]Ý˜[YNˆšÎ‹ËÛZÜœœ[^›ÙYœØ›YZ]™‹œÝ\X˜\ÙK˜ÛËÙ[˜Ý[ÛœËÝŒKÛXÜŸJW_J_J_JW_J_K”›Ùš[Q›Ü›HŠKÝXJ

OOžØÛÛœÝOT™J
KS•J
KÛ‹—O\Ù

NÜ™]\›ˆ›[™ÝLOÛ[›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›K›[™ÝXYÙHŠ_JKšœÞÊ˜KÝ˜[YN›‹Û•˜[YPÚ[™ÙNœ‹Ú[™[Ž–ÛšœÞ
ØKØÛ\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞ
ØKØÚ[™[Ž›X\
OO›šœÞ
›‹Ý˜[YNšK›ØØ[KÚ[™[ŽšK›˜[Y_KK›ØØ[JJ_JW_JW_J_K“[™ÝXYÙTÙ[XÝÜˆŠKMOXJ
ÜÛÝ\˜ÙN™K\ÑY][ÙNÛ\ÜÓ˜[YN›ŸJOOžØÛÛœÝX™\ÛÝ\˜Ù\ËœØ[\Ë™šY[Ë‰Ù_XÜ™]\›ˆÛšœÞ
›‹ÜÛÝ\˜ÙN™KX™[œ‹[\•^ˆLKÛ\ÜÓ˜[YN›ŸJN›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YN›‹Ú[™[Ž›šœÞ
™KÜÛÝ\˜ÙN™KX™[œŸJ_J_K•^™[™\ˆŠK]XJ
Ý˜[YN™_JOOžØÛÛœÝT™J
KÛ‹—O^\ÙTÝ]JLJKOXJ

OOžÜŠL
K˜]šYØ]Ü‹˜Û\›Ø\™Üš]U^
JKÙ][Y[Ý]


OOžÜŠLJ_KML
_Kš[™PÛÜHŠNÜ™]\›ˆšœÞ
ÛËØÚ[™[Ž›šœÞÊ[ØÚ[™[Ž–ÛšœÞ
ÛØ\ÐÚ[ˆLÚ[™[Ž›šœÞÊ™KÝ\Nˆ˜]Ûˆ‹ÛÛXÚÎšK˜\šX[ˆ™ÚÜÝ‹Û\ÜÓ˜[YNˆ››Ü›X[XØ\ÙH\ÝYžKX™]ÙY[ˆËY[‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Ý™\™›ÝËZY[ˆ^Y[\Ú\È‹Ú[™[Ž™_JKÛšœÞ
[ØÛ\ÜÓ˜[YNˆšMËM[LˆŸJN›šœÞ
ÙKØÛ\ÜÓ˜[YNˆšMËM[LˆŸJW_J_JKšœÞ
ÛØÚ[™[Ž›šœÞ
œ‹ØÚ[™[Ž
È˜Ü›K˜ÛÛ[[Û‹˜ÛÜYYŽˆ˜Ü›K˜ÛÛ[[Û‹˜ÛÜHŠ_J_JW_J_J_KÛÜT\ÝHŠNÉœ]H‹Ü›Ùš[HŽØÛÛœÝ™OXJOO™KÓÝÙ\Ø\ÙJ
Kœ™\XÙJÖ×˜K^ŒNWJËÙË‹HŠKœ™\XÙJ×‹_IÙËˆŠKÔÛYÈŠKÝVÞÚYˆ˜œ˜[™[™È‹X™[ˆ˜Ü›KœÙ][™ÜËœÙXÝ[ÛœË˜œ˜[™[™È‹˜[˜XÚÎˆœ˜[™[™ÈŸKÚYˆ˜ÛÛ\[šY\È‹X™[ˆœ™\ÛÝ\˜Ù\Ë˜ÛÛ\[šY\Ë›˜[YH‹˜[˜XÚÎˆ”›Ü\Y\ÈŸKÚYˆ™X[È‹X™[ˆœ™\ÛÝ\˜Ù\Ë™X[Ë›˜[YH‹˜[˜XÚÎˆ’›ØœÈŸKÚYˆ››Ý\È‹X™[ˆœ™\ÛÝ\˜Ù\Ë››Ý\Ë›˜[YH‹˜[˜XÚÎˆ“›Ý\ÈŸKÚYˆ\ÚÜÈ‹X™[ˆœ™\ÛÝ\˜Ù\Ë\ÚÜË›˜[YH‹˜[˜XÚÎˆ•\ÚÜÈŸWKLOXJOO™OË›X\
OŠË‹‹˜[YN˜[Y_™J›X™[
_JJK™[œÝ\™U˜[Y\ÈŠKÝOXJ
K‹‹JOOžÚYŠYJ\™]\›ŽØÛÛœÝÏYK›X\
Oš˜[Y_™J›X™[
JKÏ[™]ÈÙ]Ï[™]ÈÙ]Ù›ÜŠÛÛœÝÙˆÊ[Ëš\Ê
I‰˜Ë˜Y

KË˜Y

NÚYŠËœÚ^™OŒ
^ØÛÛœÝVË‹‹˜×NÜ™]\›ˆOË™\XØ]OËŠ‹
OÏØ\XØ]H	ÜŸNˆ	Úš›Ú[Š‹Š_XZYŠ]
\™]\›ˆOË˜[Y][™ÏÏÈ•˜[Y][™ø )ˆŽØÛÛœÝO[™]ÈÙ]
ÊKVË‹‹›™]ÈÙ]
™š[\ŠOšÛ—I‰ˆ]Kš\ÊÛ—JJK›X\
OšÛ—JJWNÚYŠ‹›[™ÝŒ
\™]\›ˆOËš[•\ÙOËŠ‹ŠOÏØØ[››Ý™[[Ý™H	ÜŸH]\™HÝ[\ÙYžHX[Îˆ	Ù‹š›Ú[Š‹Š_XK˜[Y]R][\Ò[•\ÙHŠKXJ

OOžØÛÛœÝO[™]È[‘\Ü^S˜[Y\Ê\[Ùˆ˜]šYØ]ÜHÛ˜]šYØ]Ü‹›[™ÝXYÙ\Î–È™[ˆ—KÝ\Nˆ˜Ý\œ™[˜ÞHŸJNÜ™]\›ˆ[œÝ\ÜY˜[Y\ÓÙŠ˜Ý\œ™[˜ÞHŠK›X\
OŠÚY˜[YN˜	ÝH8 $È	ÙK›ÙŠ
_XJJ_K™Ù]Ý\œ™[˜ÞPÚÚXÙ\ÈŠK]XJOOŠØÛÛ™šYÎžÝ]N™K]KYÚ[ÙSÙÛÎ™K›YÚ[ÙSÙÛË\šÓ[ÙSÙÛÎ™K™\šÓ[ÙSÙÛËÝ\œ™[˜ÞN™K˜Ý\œ™[˜ÞKÛÛ\[žTÙXÝÜœÎ–LJK˜ÛÛ\[žTÙXÝÜœÊKX[Ø]YÛÜšY\Î–LJK™X[Ø]YÛÜšY\ÊK\ÚÕ\\Î–LJK\ÚÕ\\ÊKX[ÝYÙ\Î–LJK™X[ÝYÙ\ÊKX[\[[™TÝ]\Ù\Î™K™X[\[[™TÝ]\Ù\Ë›ÝTÝ]\Ù\Î–LJK››ÝTÝ]\Ù\Ê__JK˜[œÙ›Ü›Q›Ü›U˜[Y\ÈŠKNXJ

OOžØÛÛœÝO\XÙJ
K\Š
NÜ™]\›ˆšœÞ
ËÜ™\ÛÝ\˜ÙNˆ˜ÛÛ™šYÝ\˜][Ûˆ‹YŒK]]][Û“[ÙNˆœ\ÜÚ[Z\ÝXÈ‹™Y\™XÝˆLK˜[œÙ›Ü›N”]]]][Û“Ü[ÛœÎžÛÛ”ÝXØÙ\ÜÎ˜JOžÙJ‹˜ÛÛ™šYÊK
˜Ü›KœÙ][™ÜËœØ]™YŠ_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜J

OOžÝ
˜Ü›KœÙ][™ÜËœØ]™WÙ\œ›Üˆ‹Ý\Nˆ™\œ›ÜˆŸJ_K›Û‘\œ›ÜˆŠ_KÚ[™[Ž›šœÞ
ßJ_J_K”Ù][™ÜÔYÙHŠNÕNœ]H‹ÜÙ][™ÜÈŽØÛÛœÝXJ

OOžØÛÛœÝOUÜŠ
K^\ÙSY[[Ê

OOŠÝ]N™K]KYÚ[ÙSÙÛÎžÜÜ˜Î™K›YÚ[ÙSÙÛßK\šÓ[ÙSÙÛÎžÜÜ˜Î™K™\šÓ[ÙSÙÛßKÝ\œ™[˜ÞN™K˜Ý\œ™[˜ÞKÛÛ\[žTÙXÝÜœÎ™K˜ÛÛ\[žTÙXÝÜœËX[Ø]YÛÜšY\Î™K™X[Ø]YÛÜšY\Ë\ÚÕ\\Î™K\ÚÕ\\ËX[ÝYÙ\Î™K™X[ÝYÙ\ËX[\[[™TÝ]\Ù\Î™K™X[\[[™TÝ]\Ù\Ë›ÝTÝ]\Ù\Î™K››ÝTÝ]\Ù\ßJKÙWJNÜ™]\›ˆšœÞ
XKÙY˜][˜[Y\ÎÚ[™[Ž›šœÞ
ßJ_J_K”Ù][™ÜÑ›Ü›HŠKXJ

OOžØÛÛœÝOT™J
K^\ÙSY[[Ê

OO–

K×JKÝØ]Ú›‹Ù]˜[YNœ‹™\Ù]šK›Ü›TÝ]NžÚ\ÔÝX›Z][™Îœß_OVšJ
KÏ[Š™X[ÝYÙ\ÈŠKÏ[Š™X[\[[™TÝ]\Ù\ÈŠOÏÖ×KOYJ˜Ü›KœÙ][™ÜË˜[Y][Û‹™[]Y\ËœÝYÙ\ÈŠKYJ˜Ü›KœÙ][™ÜË˜[Y][Û‹™[]Y\Ë˜Ø]YÛÜšY\ÈŠKÙ]NšO]œŠ™X[È‹ÜYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒYLß_JKO^\ÙPØ[˜XÚÊO”ÝJ‹œÝYÙH‹KÙ\XØ]N˜J
ËÊOO™J˜Ü›KœÙ][™ÜË˜[Y][Û‹™\XØ]H‹Ù\Ü^WÛ˜[YNË][\Î—Ëš›Ú[Š‹Š_JK™\XØ]HŠK[•\ÙN˜J
ËÊOO™J˜Ü›KœÙ][™ÜË˜[Y][Û‹š[—Ý\ÙH‹Ù\Ü^WÛ˜[YNË][\Î—Ëš›Ú[Š‹Š_JKš[•\ÙHŠK˜[Y][™Î™J˜Ü›KœÙ][™ÜË˜[Y][Û‹˜[Y][™ÈŠ_JKÚKWJKÏ^\ÙPØ[˜XÚÊO”ÝJ‹˜Ø]YÛÜžH‹‹Ù\XØ]N˜J
ËÊOO™J˜Ü›KœÙ][™ÜË˜[Y][Û‹™\XØ]H‹Ù\Ü^WÛ˜[YNË][\Î—Ëš›Ú[Š‹Š_JK™\XØ]HŠK[•\ÙN˜J
ËÊOO™J˜Ü›KœÙ][™ÜË˜[Y][Û‹š[—Ý\ÙH‹Ù\Ü^WÛ˜[YNË][\Î—Ëš›Ú[Š‹Š_JKš[•\ÙHŠK˜[Y][™Î™J˜Ü›KœÙ][™ÜË˜[Y][Û‹˜[Y][™ÈŠ_JKÙ‹WJNÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\N]M‹LŒ‹Ú[™[Ž–ÛšœÞ
›˜]ˆ‹ØÛ\ÜÓ˜[YNˆšY[ˆY˜›ØÚÈËMÚš[šËL‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÝXÚÞHÜMÜXÙK^KLH‹Ú[™[Ž–ÛšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^Lž›Û\Ù[ZX›ÛLÈX‹Lˆ‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË]HŠ_JKÝ›X\
O›šœÞ
˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹ÛÛXÚÎ˜J

OOžÙØÝ[Y[™Ù][[Y[žRY
‹šY
OËœØÜ›Û[ÕšY]ÊØ™Z]š[ÜŽˆœÛ[ÛÝŸJ_K›ÛÛXÚÈŠKÛ\ÜÓ˜[YNˆ˜›ØÚÈËY[^[YLÈKLH^\ÛH›Ý[™Y[YÝ™\Ž^Y›Ü™YÜ›Ý[™Ý™\Ž˜™Ë[]]Y˜[œÚ][Û‹XÛÛÜœÈ‹Ú[™[Ž™J‹›X™[ÜÛX\ØÛÝ[ŒŸJ_K‹šY
JW_J_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LHZ[‹]ËLX^]ËLžÜXÙK^KMˆ‹Ú[™[Ž–ÛšœÞ
Û‹ÚYˆ˜œ˜[™[™È‹Ú[™[Ž›šœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜËœÙXÝ[ÛœË˜œ˜[™[™ÈŠ_JKšœÞ
›‹ÜÛÝ\˜ÙNˆ]H‹X™[ˆ˜Ü›KœÙ][™ÜË˜\Ý]HŸJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\N‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆØ\LH‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË›YÚÛ[ÙWÛÙÛÈŠ_JKšœÞ
TËÜÛÝ\˜ÙNˆ›YÚ[ÙSÙÛÈ‹ÚYŒLZYÚŒL[šÔÜÚ][ÛŽˆ˜›ÝÛH‹˜XÚÙÜ›Ý[™[XYÙPÛÛÜŽˆˆÙYYHŸJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆØ\LH‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË™\š×Û[ÙWÛÙÛÈŠ_JKšœÞ
TËÜÛÝ\˜ÙNˆ™\šÓ[ÙSÙÛÈ‹ÚYŒLZYÚŒL[šÔÜÚ][ÛŽˆ˜›ÝÛH‹˜XÚÙÜ›Ý[™[XYÙPÛÛÜŽˆˆÌXLXLXHŸJW_JW_JW_J_JKšœÞ
Û‹ÚYˆ˜ÛÛ\[šY\È‹Ú[™[Ž›šœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë˜ÛÛ\[šY\Ë›˜[YH‹ÜÛX\ØÛÝ[ŒŸJ_JKšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË˜ÛÛ\[šY\ËœÙXÝÜœÈŠ_JKšœÞ
ZÜÛÝ\˜ÙNˆ˜ÛÛ\[žTÙXÝÜœÈ‹X™[ˆLK[\•^ˆLKÚ[™[Ž›šœÞ
Ù\ØX›T™[Ü™\š[™ÎˆL\ØX›PÛX\ŽˆLÚ[™[Ž›šœÞ
›‹ÜÛÝ\˜ÙNˆ›X™[‹X™[ˆL_J_J_JW_J_JKšœÞ
Û‹ÚYˆ™X[È‹Ú[™[Ž›šœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë›˜[YH‹ÜÛX\ØÛÝ[ŒŸJ_JKšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË™X[Ë˜Ý\œ™[˜ÞHŠ_JKšœÞ
\ÜÛÝ\˜ÙNˆ˜Ý\œ™[˜ÞH‹X™[ˆLKÚÚXÙ\Î[œ]^˜JO˜ËšYš[œ]^ŠK[Ù[ˆLJKšœÞ
ÚKßJKšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË™X[ËœÝYÙ\ÈŠ_JKšœÞ
ZÜÛÝ\˜ÙNˆ™X[ÝYÙ\È‹X™[ˆLK[\•^ˆLK˜[Y]N›KÚ[™[Ž›šœÞ
Ù\ØX›PÛX\ŽˆLÚ[™[Ž›šœÞ
›‹ÜÛÝ\˜ÙNˆ›X™[‹X™[ˆL_J_J_JKšœÞ
ÚKßJKšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË™X[Ëœ\[[™WÜÝ]\Ù\ÈŠ_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË™X[Ëœ\[[™WÚ[Š_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\Ø\Lˆ‹Ú[™[Ž›ÏË›X\

‹ÊOOžØÛÛœÝÏXËš[˜ÛY\Ê‹˜[YJNÜ™]\›ˆšœÞ
™KÝ\Nˆ˜]Ûˆ‹˜\šX[—ÏÈ™Y˜][Žˆ›Ý][™H‹Ú^™NˆœÛH‹ÛÛXÚÎ˜J

OOž×ÏÜŠ™X[\[[™TÝ]\Ù\È‹Ë™š[\ŠOO‘HOOX‹˜[YJJNœŠ™X[\[[™TÝ]\Ù\È‹Ë‹‹˜Ë‹˜[YWJ_K›ÛÛXÚÈŠKÚ[™[Ž˜‹›X™[‹˜[Y_KÊ_J_JKšœÞ
ÚKßJKšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË™X[Ë˜Ø]YÛÜšY\ÈŠ_JKšœÞ
ZÜÛÝ\˜ÙNˆ™X[Ø]YÛÜšY\È‹X™[ˆLK[\•^ˆLK˜[Y]N™ËÚ[™[Ž›šœÞ
Ù\ØX›T™[Ü™\š[™ÎˆL\ØX›PÛX\ŽˆLÚ[™[Ž›šœÞ
›‹ÜÛÝ\˜ÙNˆ›X™[‹X™[ˆL_J_J_JW_J_JKšœÞ
Û‹ÚYˆ››Ý\È‹Ú[™[Ž›šœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë››Ý\Ë›˜[YH‹ÜÛX\ØÛÝ[ŒŸJ_JKšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË››Ý\ËœÝ]\Ù\ÈŠ_JKšœÞ
ZÜÛÝ\˜ÙNˆ››ÝTÝ]\Ù\È‹X™[ˆLK[\•^ˆLKÚ[™[Ž›šœÞÊÚ[›[™NˆL\ØX›T™[Ü™\š[™ÎˆL\ØX›PÛX\ŽˆLÚ[™[Ž–ÛšœÞ
›‹ÜÛÝ\˜ÙNˆ›X™[‹X™[ˆLKÛ\ÜÓ˜[YNˆ™›^LHŸJKšœÞ
[ÜÛÝ\˜ÙNˆ˜ÛÛÜˆŸJW_J_JW_J_JKšœÞ
Û‹ÚYˆ\ÚÜÈ‹Ú[™[Ž›šœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë\ÚÜË›˜[YH‹ÜÛX\ØÛÝ[ŒŸJ_JKšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™J˜Ü›KœÙ][™ÜË\ÚÜË\\ÈŠ_JKšœÞ
ZÜÛÝ\˜ÙNˆ\ÚÕ\\È‹X™[ˆLK[\•^ˆLKÚ[™[Ž›šœÞ
Ù\ØX›T™[Ü™\š[™ÎˆL\ØX›PÛX\ŽˆLÚ[™[Ž›šœÞ
›‹ÜÛÝ\˜ÙNˆ›X™[‹X™[ˆL_J_J_JW_J_JW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™š^Y›ÝÛKLYLšYÚL›Ü™\‹]™ËX˜XÚÙÜ›Ý[™M‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë\ØÜ™Y[‹^^X]]È›^Ø\NM‹Ú[™[Ž–ÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšY[ˆY˜›ØÚÈËMÚš[šËLŸJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LHZ[‹]ËLX^]ËLž›^\ÝYžKX™]ÙY[ˆ‹Ú[™[Ž–ÛšœÞÊ™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ™ÚÜÝ‹ÛÛXÚÎ˜J

OOšJË‹‹‘KYÚ[ÙSÙÛÎžÜÜ˜Î‘K›YÚ[ÙSÙÛßK\šÓ[ÙSÙÛÎžÜÜ˜Î‘K™\šÓ[ÙSÙÛß_JK›ÛÛXÚÈŠKÚ[™[Ž–ÛšœÞ
šËØÛ\ÜÓ˜[YNˆšMËM\‹LHŸJKJ˜Ü›KœÙ][™ÜËœ™\Ù]ÙY˜][ÈŠW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[Ž–ÛšœÞ
™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ›Ý][™H‹ÛÛXÚÎ˜J

OOÚ[™ÝËš\ÝÜžK˜˜XÚÊ
K›ÛÛXÚÈŠKÚ[™[Ž™Jœ˜K˜XÝ[Û‹˜Ø[˜Ù[Š_JKšœÞÊ™KÝ\NˆœÝX›Z]‹\ØX›YœËÚ[™[Ž–ÛšœÞ
ÛËØÛ\ÜÓ˜[YNˆšMËM\‹LHŸJKJÏÈ˜Ü›KœÙ][™ÜËœØ]š[™ÈŽˆœ˜K˜XÝ[Û‹œØ]™HŠW_JW_JW_JW_J_JW_J_K”Ù][™ÜÑ›Ü›QšY[ÈŠK[XJ
ÜÛÝ\˜ÙN™_JOOžØÛÛœÝÙšY[OVXÊÜÛÝ\˜ÙN™_JNÜ™]\›ˆšœÞ
š[œ]‹Ý\Nˆ˜ÛÛÜˆ‹‹‹˜[YN˜[Y_ˆÌ‹Û\ÜÓ˜[YNˆËNHNHÚš[šËLÝ\œÛÜ‹\Ú[\ˆ\X\˜[˜ÙK[›Û™H›Ý[™Y›Ü™\ˆ™Ë]˜[œÜ\™[LHÉŽŽ‹]ÙXšÚ]XÛÛÜ‹\ÝØ]Ú]Ü˜\\—N˜Ý\œÛÜ‹\Ú[\ˆÉŽŽ‹]ÙXšÚ]XÛÛÜ‹\ÝØ]Ú]Ü˜\\—NœLÉŽŽ‹]ÙXšÚ]XÛÛÜ‹\ÝØ]ÚN˜Ý\œÛÜ‹\Ú[\ˆÉŽŽ‹]ÙXšÚ]XÛÛÜ‹\ÝØ]ÚNœ›Ý[™Y\ÛHÉŽŽ‹]ÙXšÚ]XÛÛÜ‹\ÝØ]ÚN˜›Ü™\‹[›Û™HÉŽŽ‹[[Þ‹XÛÛÜ‹\ÝØ]ÚN˜Ý\œÛÜ‹\Ú[\ˆÉŽŽ‹[[Þ‹XÛÛÜ‹\ÝØ]ÚNœ›Ý[™Y\ÛHÉŽŽ‹[[Þ‹XÛÛÜ‹\ÝØ]ÚN˜›Ü™\‹[›Û™HŸJ_KÛÛÜ’[œ]ŠK^Ü˜NžØXÝ[ÛŽžØYÙš[\ŽˆZ›Ý]\ˆ[ˆš[™H‹YˆZ›Ý]\ˆ‹˜XÚÎˆ”™]Ý\ˆ‹[×ØXÝ[ÛœÎˆ‰^ÜÛX\ØÛÝ[Hðê[XÝ[Û›°êH	^ÜÛX\ØÛÝ[Hðê[XÝ[Û›°ê\È‹Ø[˜Ù[ˆ[›[\ˆ‹ÛX\—Ø\œ˜^WÚ[œ]ˆ•šY\ˆH\ÝH‹ÛX\—Ú[œ]Ý˜[YNˆ•šY\ˆHÚ[\‹ÛÛ™Nˆ‘\\]Y\ˆ‹ÛÛ™š\›NˆÛÛ™š\›Y\ˆ‹Ü™X]NˆÜ°êY\ˆ‹Ü™X]WÚ][NˆÜ°êY\ˆ	^Ú][_H‹[]Nˆ”Ý\š[Y\ˆ‹Y]ˆ°âY]\ˆ‹^Üˆ‘^Ü\ˆ‹\Ýˆ“\ÝH‹™Yœ™\ÚˆXÝX[\Ù\ˆ‹™[[Ý™WÙš[\Žˆ”Ý\š[Y\ˆÙHš[™H‹™[[Ý™WØ[Ùš[\œÎˆ”Ý\š[Y\ˆÝ\È\Èš[™\È‹™[[Ý™Nˆ”Ý\š[Y\ˆ‹™\Ù]ˆ”°êZ[š]X[\Ù\ˆ‹Ø]™Nˆ‘[œ™YÚ\Ý™\ˆ‹Ù[XÝØ[ˆ•Ý]ðê[XÝ[Û›™\ˆ‹Ù[XÝØ[Ø]ÛŽˆ•Ý]ðê[XÝ[Û›™\ˆ‹Ù[XÝÜ›ÝÎˆ”ðê[XÝ[Û›™\ˆÙ]HYÛ™H‹ÙX\˜Úˆ”™XÚ\˜Ú\ˆ‹ÙX\˜ÚØÛÛ[[œÎˆ‘š[™\ˆ\ÈÛÛÛ›™\È‹ÚÝÎˆY™šXÚ\ˆ‹ÛÜˆ•šY\ˆ‹[™Îˆ[›[\ˆ‹[œÙ[XÝˆ‘0ê\ðê[XÝ[Û›™\ˆ‹^[™ˆ°â][™™H‹ÛÜÙNˆ‘™\›Y\ˆ‹Ü[—ÛY[Nˆ“Ý]œš\ˆHY[H‹ÛÜÙWÛY[Nˆ‘™\›Y\ˆHY[H‹\]Nˆ“[ÙYšY\ˆ‹[Ý™WÝ\ˆ‘0ê\XÙ\ˆ™\œÈH]]‹[Ý™WÙÝÛŽˆ‘0ê\XÙ\ˆ™\œÈH˜\È‹Ü[Žˆ“Ý]œš\ˆ‹ÙÙÛWÝ[YNˆ•0êYHÛZ\‹ÜÛÛXœ™H‹Ù[XÝØÛÛ[[œÎˆÛÛÛ›™\È‹\]WØ\XØ][ÛŽˆ”™XÚ\™Ù\ˆ	Ø\XØ][ÛˆŸK›ÛÛX[ŽžÝYNˆ“ÝZH‹˜[ÙNˆ“›Ûˆ‹[ˆ¸  ÈŸKYÙNžØÜ™X]NˆÜ°êY\ˆ	^Û˜[Y_H‹\Ú›Ø\™ˆ•X›X]HH›Ü™‹Y]ˆ‰^Û˜[Y_H	^Ü™XÛÜ™™\™\Ù[][ÛŸH‹\œ›ÜŽˆ•[ˆ›Ø›0êYH\ÝÝ\™[H‹\Ýˆ‰^Û˜[Y_H‹ØY[™ÎˆÚ\™Ù[Y[‹›ÝÙ›Ý[™ˆ”YÙHX[œ]X[H‹ÚÝÎˆ‰^Û˜[Y_H	^Ü™XÛÜ™™\™\Ù[][ÛŸH‹[\Nˆ”\È[˜ÛÜ™HH	^Û˜[Y_Kˆ‹[š]Nˆ•›Ý[^‹]›Ý\È[ˆÜ°êY\ˆ[ˆÈ‹XØÙ\Ü×Ù[šYYˆ“›Ûˆ]]Üš\ðêH‹]][XØ][Û—Ù\œ›ÜŽˆ‘\œ™]\ˆ	Ø]][YšXØ][ÛˆŸK[œ]žÙš[NžÝ\ØYÜÙ]™\˜[ˆ‘0ê\ÜÙ^ˆ\ÈšXÚY\œÈ0è\ØY\‹ÝHÛ\]Y^ˆÝ\ˆ[ˆðê[XÝ[Û›™\‹ˆ‹\ØYÜÚ[™ÛNˆ‘0ê\ÜÙ^ˆHšXÚY\ˆ0è\ØY\‹ÝHÛ\]Y^ˆÝ\ˆHðê[XÝ[Û›™\‹ˆŸK[XYÙNžÝ\ØYÜÙ]™\˜[ˆ‘0ê\ÜÙ^ˆ\È[XYÙ\È0è\ØY\‹ÝHÛ\]Y^ˆÝ\ˆ[ˆðê[XÝ[Û›™\‹ˆ‹\ØYÜÚ[™ÛNˆ‘0ê\ÜÙ^ˆ	Ú[XYÙH0è\ØY\‹ÝHÛ\]Y^ˆÝ\ˆHðê[XÝ[Û›™\‹ˆŸK™Y™\™[˜Ù\ÎžØ[ÛZ\ÜÚ[™Îˆ’[\ÜÜÚX›HH›Ý]™\ˆ\ÈÛ›°êY\ÈH°êY°ê\™[˜Ù\Ëˆ‹X[žWÛZ\ÜÚ[™Îˆ]H[Ú[œÈ[™H\È°êY°ê\™[˜Ù\È\ÜÛØÚpêY\ÈÙ[X›H™H\È0ê™H\ÜÛšX›Kˆ‹Ú[™ÛWÛZ\ÜÚ[™Îˆ“H°êY°ê\™[˜ÙH\ÜÛØÚpêYH™HÙ[X›H\È\ÜÛšX›KˆŸK\ÜÝÛÜ™žÝÙÙÛWÝš\ÚX›NˆØXÚ\ˆH[ÝH\ÜÙH‹ÙÙÛWÚY[Žˆ“[Û™\ˆH[ÝH\ÜÙHŸ_KY\ÜØYÙNžØX›Ý]ˆ]HÝZ™]H‹XØÙ\Ü×Ù[šYYˆ•›Ý\È‰Ø]™^ˆ\È\È›Ú]È	ØXØðêÈ0èÙ]HYÙH‹\™WÞ[ÝWÜÝ\™Nˆ°â\Ë]›Ý\ÈðîÜˆÈ‹]][XØ][Û—Ù\œ›ÜŽˆ“HÙ\™]\ˆ	Ø]][YšXØ][ÛˆH™]Ý\›°êH[™H\œ™]\ˆ]›ÜÈ]]Üš\Ø][ÛœÈ‰ÛÛ\ÈH0ê™H°ê\šYšpêY\Ëˆ‹]]Ù\œ›ÜŽˆ•[™H\œ™]\ˆ\ÝÝ\™[YHÜœÈHH˜[Y][ÛˆH›Ý™H™]Ûˆ	Ø]][YšXØ][Û‹ˆ‹[×Ù[]WØÛÛ[ˆ°â\Ë]›Ý\ÈðîÜŠJHH›Ý[Ú\ˆÝ\š[Y\ˆÙ]0ê[0ê[Y[È0â\Ë]›Ý\ÈðîÜŠJHH›Ý[Ú\ˆÝ\š[Y\ˆÙ\È	^ÜÛX\ØÛÝ[H0ê[0ê[Y[ÈÈ‹[×Ù[]WÝ]Nˆ”Ý\š[Y\ˆ	^Û˜[Y_HÝ\š[Y\ˆ	^ÜÛX\ØÛÝ[H	^Û˜[Y_H‹[×Ý\]WØÛÛ[ˆ°â\Ë]›Ý\ÈðîÜŠJHH›Ý[Ú\ˆ[ÙYšY\ˆÙ]0ê[0ê[Y[È0â\Ë]›Ý\ÈðîÜŠJHH›Ý[Ú\ˆ[ÙYšY\ˆÙ\È	^ÜÛX\ØÛÝ[H0ê[0ê[Y[ÈÈ‹[×Ý\]WÝ]Nˆ“[ÙYšY\ˆ	^Û˜[Y_H	^Ü™XÛÜ™™\™\Ù[][ÛŸH[ÙYšY\ˆ	^ÜÛX\ØÛÝ[H	^Û˜[Y_H‹ÛX\—Ø\œ˜^WÚ[œ]ˆ°â\Ë]›Ý\ÈðîÜŠJHH›Ý[Ú\ˆÝ\š[Y\ˆÝ\È\È0ê[0ê[Y[ÈHH\ÝHÈ‹[]WØÛÛ[ˆ°â\Ë]›Ý\ÈðîÜŠJHH›Ý[Ú\ˆÝ\š[Y\ˆÙ]0ê[0ê[Y[È‹[]WÝ]Nˆ”Ý\š[Y\ˆ	^Û˜[Y_H	^Ü™XÛÜ™™\™\Ù[][ÛŸH‹]Z[Îˆ‘0ê]Z[È‹\œ›ÜŽˆ‘[ˆ˜Z\ÛÛˆ	Ý[™H\œ™]\ˆðí0êH˜]šYØ]]\‹›Ý™H™\]pêH‰ØH\ÈHX›Ý]\‹ˆ‹[˜[YÙ›Ü›Nˆ“H›Ü›][Z\™H‰Ù\Ý\È˜[YKˆ‹ØY[™Îˆ“HYÙH\Ý[ˆÛÝ\œÈHÚ\™Ù[Y[Y\˜ÚHHšY[ˆ›Ý[Ú\ˆ]Y[\‹ˆ‹›Îˆ“›Ûˆ‹›ÝÙ›Ý[™ˆ“	ÕT“ØZ\ÚYH\Ý[˜ÛÜœ™XÝKÝH›Ý\È]™^ˆÝZ]šH[ˆX]]˜Z\ÈY[‹ˆ‹Ù[XÝØ[Û[Z]Ü™XXÚYˆ’[HH›Ü	ðê[0ê[Y[ÈÝ\ˆÝ\È\Èðê[XÝ[Û›™\‹ˆÙ][È\È	^ÛX^H™[ZY\œÈ0ê[0ê[Y[ÈÛ0ê]0êHðê[XÝ[Û›°ê\Ëˆ‹[œØ]™YØÚ[™Ù\ÎˆÙ\Z[œÈÚ[™Ù[Y[È‰ÛÛ\È0ê]0êH[œ™YÚ\Ý°ê\Ëˆ0â\Ë]›Ý\ÈðîÜŠJHH›Ý[Ú\ˆ]Z]\ˆÙ]HYÙHÈ‹Y\Îˆ“ÝZH‹XÙZÛ\—Ù]WÝØ\›š[™Îˆ”›Ø›0êYH°ê\ÙX]Hˆ[\ÜÜÚX›HHÚ\™Ù\ˆ\ÈÛ›°êY\ËˆŸK˜]šYØ][ÛŽžØÛX\—Ùš[\œÎˆ‘Y™˜XÙ\ˆ\Èš[™\È‹›×Ùš[\™YÜ™\Ý[Îˆ]XÝ[ˆ°ê\Ý[]›Ý]°êH]™XÈ\Èš[™\ÈXÝY[Ëˆ‹›×Ü™\Ý[Îˆ]XÝ[ˆ°ê\Ý[]‹›×Û[Ü™WÜ™\Ý[Îˆ“HYÙH[pê\›È	^ÜYÙ_H\Ý[ˆZÜœÈ\È[Z]\Ëˆ\ÜØ^Y^ˆHYÙH°êXðêY[Kˆ‹YÙWÛÝ]ÛÙ—Ø›Ý[™\šY\Îˆ“HYÙH	^ÜYÙ_H\Ý[ˆZÜœÈ\È[Z]\È‹YÙWÛÝ]Ùœ›ÛWÙ[™ˆ‘š[ˆHHYÚ[˜][Ûˆ‹YÙWÛÝ]Ùœ›ÛWØ™YÚ[Žˆ“HYÙHÚ]0ê™HÝ\0ê\šY]\™H0èH‹YÙWÜ˜[™ÙWÚ[™›Îˆ‰^ÛÙ™œÙ]™YÚ[ŸKI^ÛÙ™œÙ][™HÝ\ˆ	^ÝÝ[H‹\X[ÜYÙWÜ˜[™ÙWÚ[™›Îˆ‰^ÛÙ™œÙ]™YÚ[ŸKI^ÛÙ™œÙ][™HÝ\ˆ\ÈH	^ÛÙ™œÙ][™H‹YÙWÜ›ÝÜ×Ü\—ÜYÙNˆ“YÛ™\È\ˆYÙHˆ‹Ý\œ™[ÜYÙNˆ”YÙH	^ÜYÙ_H‹YÙNˆ[\ˆ0èHYÙH	^ÜYÙ_H‹š\œÝˆ[\ˆ0èH™[Zpê™HYÙH‹\Ýˆ[\ˆ0èH\›špê™HYÙH‹™^ˆ[\ˆ0èH›ØÚZ[™HYÙH‹™]š[Ý\Îˆ[\ˆ0èHYÙH°êXðêY[H‹ÚÚ\Û˜]Žˆ[\ˆ]HÛÛ[HŸKÛÜžÜÛÜØžNˆ•šY\ˆ\ˆ	^ÙšY[ÛÝÙ\—Ùš\œÝH	^ÛÜ™\ŸH‹TÐÎˆ˜Ü›Ú\ÜØ[‹TÐÎˆ™0êXÜ›Ú\ÜØ[ŸK]]žØ]]ØÚXÚ×Ù\œ›ÜŽˆ“Y\˜ÚHH›Ý\ÈÛÛ›™XÝ\ˆÝ\ˆÛÛ[Y\ˆ‹\Ù\—ÛY[Nˆ”›Ùš[‹\Ù\›˜[YNˆ’Y[YšX[‹\ÜÝÛÜ™ˆ“[ÝH\ÜÙH‹[XZ[ˆ‘[XZ[‹ÚYÛ—Ú[ŽˆÛÛ›™^[Ûˆ‹ÚYÛ—Ú[—Ù\œ›ÜŽˆ°âXÚXÈH	Ø]][YšXØ][Û‹Y\˜ÚHH°êY\ÜØ^Y\ˆ‹ÙÛÝ]ˆ‘0êXÛÛ›™^[ÛˆŸK›ÝYšXØ][ÛŽžÝ\]Yˆ°â[0ê[Y[Z\È0è›Ý\ˆ	^ÜÛX\ØÛÝ[H0ê[0ê[Y[ÈZ\È0è›Ý\ˆ‹Ü™X]Yˆ°â[0ê[Y[Ü°êpêH‹[]Yˆ°â[0ê[Y[Ý\š[pêH	^ÜÛX\ØÛÝ[H0ê[0ê[Y[ÈÝ\š[pê\È‹˜YÚ][Nˆ°â[0ê[Y[[˜ÛÛ›H‹][WÙÙ\ÛÙ^\Ýˆ“	ðê[0ê[Y[‰Ù^\ÝH\È‹Ù\œ›ÜŽˆ‘\œ™]\ˆHÛÛ[][šXØ][Ûˆ]™XÈHÙ\™]\ˆ‹]WÜ›ÝšY\—Ù\œ›ÜŽˆ‘\œ™]\ˆ[œÈH]T›ÝšY\‹ˆ\ÈH0ê]Z[È[œÈHÛÛœÛÛKˆ‹LN—Ù\œ›ÜŽˆ‘\œ™]\ˆHÚ\™Ù[Y[\È˜YXÝ[ÛœÈÝ\ˆH[™ÝYHðê[XÝ[Û›°êYH‹Ø[˜Ù[YˆXÝ[Ûˆ[›[0êYH‹ÙÙÙYÛÝ]ˆ•›Ý™HÙ\ÜÚ[ÛˆHš\Èš[‹™]Z[^ˆ›Ý\È™XÛÛ›™XÝ\‹ˆ‹›ÝØ]]Üš^™Yˆ•›Ý\È‰ðê\È\È]]Üš\ðêJJH0èXØðêY\ˆ0èÙ]H™\ÜÛÝ\˜ÙKˆ‹\XØ][Û—Ý\]WØ]˜Z[X›Nˆ•[™HZ\ÙH0è›Ý\ˆ\Ý\ÜÛšX›Kˆ‹Ù™›[™Nˆ”\ÈHÛÛ›™^[Û‹ˆ[\ÜÜÚX›HHÚ\™Ù\ˆ\ÈÛ›°êY\ËˆŸK˜[Y][ÛŽžÜ™\]Z\™YˆÙHÚ[\\Ý™\]Z\È‹Z[“[™Ýˆ“Z[š[][H	^ÛZ[ŸHØ\˜XÝ0ê™\È‹X^[™Ýˆ“X^[][H	^ÛX^HØ\˜XÝ0ê™\È‹Z[•˜[YNˆ“Z[š[][H	^ÛZ[ŸH‹X^˜[YNˆ“X^[][H	^ÛX^H‹[X™\Žˆ‘Ú]0ê™H[ˆ›ÛXœ™H‹[XZ[ˆ‘Ú]0ê™H[ˆ[XZ[‹Û™SÙŽˆ‘Ú]0ê™H]HÚÚ^ˆ	^ÛÜ[ÛœßH‹™YÙ^ˆ‘Ú]™\ÜXÝ\ˆ[ˆ›Ü›X]Ü0êXÚYš\]YH
™YÙ^
Nˆ	^Ü]\›ŸH‹[š\]YNˆ‘Ú]0ê™H[š\]YHŸKØ]™YÜ]Y\šY\ÎžÛX™[ˆ“Y\È™\]pê\È‹]Y\žWÛ˜[YNˆ“›ÛHHH™\]pêH‹™]×ÛX™[ˆZ›Ý]\ˆ0èY\È™\]pê\Ë‹‹ˆ‹™]×ÙX[Ù×Ý]NˆZ›Ý]\ˆH™\]pêH[ˆÛÝ\œÈ0èY\È™\]pê\È‹™[[Ý™WÛX™[ˆ”™]\™\ˆHY\È™\]pê\È‹™[[Ý™WÛX™[ÝÚ]Û˜[YN‰Ô™]\™\ˆ‰^Û˜[Y_Hˆ\ÈY\È™\]pê\ÉË™[[Ý™WÙX[Ù×Ý]Nˆ‘Y™˜XÙ\ˆHY\È™\]pê\ÈÈ‹™[[Ý™WÛY\ÜØYÙNˆ‘]\Ë]›Ý\ÈðîÜŠJHH›Ý[Ú\ˆÝ\š[Y\ˆÙ]H™\]pêHH›Ý™H\ÝHH™\]pê\ÈÈ‹[ˆ‘š[™^ˆH\ÝH]Z›Ý]^ˆÙ]H™\]pêH0è›Ý™H\ÝHŸKÛÛ™šYÝ\˜X›NžØÝ\ÝÛZ^™Nˆ”\œÛÛ›˜[\Ù\ˆ‹ÛÛ™šYÝ\™S[ÙNˆÛÛ™šYÝ\™\ˆÙ]HYÙH‹[œÜXÝÜŽžÝ]Nˆ’[œÜXÝ]\ˆ‹ÛÛ[ˆ”ðê[XÝ[Û›™\ˆ[ˆÛÛ\ÜØ[Ý\ˆHÛÛ™šYÝ\™\ˆ‹™\Ù]ˆ”°êZ[š]X[\Ù\ˆ‹YP[ˆ“X\Ü]Y\ˆÝ]‹ÚÝÐ[ˆY™šXÚ\ˆÝ]ŸK]YÜšYžÝ]Nˆ•X›X]H‹[›X™[YˆÛÛÛ›™HÉ^ØÛÛ[[ŸHŸKÚ[\Q›Ü›NžÝ]Nˆ‘›Ü›][Z\™H‹[›X™[YˆÚ[\É^Ú[œ]HŸKÚ[\S\ÝžÝ]Nˆ“\ÝH‹š[X\žU^ˆ•^Hš[˜Ú\[‹ÙXÛÛ™\žU^ˆ•^HÙXÛÛ™Z\™H‹\X\žU^ˆ•^H[›™^HŸ___NÝ˜\ˆ›^Èœ˜K\Ý\X˜\ÙHŽžØ]]žÙ[XZ[ˆ‘[XZ[‹ÛÛ™š\›WÜ\ÜÝÛÜ™ˆÛÛ™š\›H\ÜÝÛÜ™‹ÚYÛ—Ú[—ÝÚ]ˆ”ÚYÛˆ[ˆÚ]	^Ü›ÝšY\ŸH‹›Ü™ÛÝÜ\ÜÝÛÜ™ˆ‘›Ü™ÛÝ\ÜÝÛÜ™È‹™\Ù]Ü\ÜÝÛÜ™ˆ”™\Ù]\ÜÝÛÜ™‹\ÜÝÛÜ™Ü™\Ù]ˆ–[Ý\ˆ\ÜÝÛÜ™\È™Y[ˆ™\Ù]ˆ[ÝHÚ[™XÙZ]™H[ˆ[XZ[ÛÛZ[š[™ÈH[šÈÈÙÈ[‹ˆ‹Z\ÜÚ[™×ÝÚÙ[œÎˆXØÙ\ÜÈ[™™Yœ™\ÚÚÙ[œÈ\™HZ\ÜÚ[™È‹˜XÚ×Ý×ÛÙÚ[Žˆ˜XÚÈÈÙÚ[ˆŸK™\Ù]Ü\ÜÝÛÜ™žÙ›Ü™ÛÝÜ\ÜÝÛÜ™ˆ‘›Ü™ÛÝ\ÜÝÛÜ™È‹›Ü™ÛÝÜ\ÜÝÛÜ™Ù]Z[Îˆ‘[\ˆ[Ý\ˆ[XZ[›Üˆ[œÝXÝ[ÛœËˆŸKÙ]Ü\ÜÝÛÜ™žÛ™]×Ü\ÜÝÛÜ™ˆÚÛÜÙH[Ý\ˆ\ÜÝÛÜ™ŸK˜[Y][ÛŽžÜ\ÜÝÛÜ™ÛZ\ÛX]Úˆ”\ÜÝÛÜ™ÈÈ›ÝX]ÚŸ__K›^Èœ˜K\Ý\X˜\ÙHŽžØ]]žÙ[XZ[ˆ‘[XZ[‹ÛÛ™š\›WÜ\ÜÝÛÜ™ˆÛÛ™š\›X][ÛˆH[ÝH\ÜÙH‹ÚYÛ—Ú[—ÝÚ]ˆ”ÙHÛÛ›™XÝ\ˆ]™XÈ	^Ü›ÝšY\ŸH‹›Ü™ÛÝÜ\ÜÝÛÜ™ˆ“[ÝH\ÜÙHÝX›pêHÈ‹™\Ù]Ü\ÜÝÛÜ™ˆ”°êZ[š]X[\Ù\ˆH[ÝH\ÜÙH‹\ÜÝÛÜ™Ü™\Ù]ˆ•›Ý™H[ÝH\ÜÙHH0ê]0êH°êZ[š]X[\ðêKˆ›Ý\È™XÙ]œ™^ˆ[ˆ[XZ[ÛÛ[˜[[ˆY[ˆÝ\ˆ›Ý\ÈÛÛ›™XÝ\‹ˆ‹Z\ÜÚ[™×ÝÚÙ[œÎˆ“\È™]ÛœÈ	ØXØðêÈ]H˜Yœ˜pë˜Ú\ÜÙ[Y[ÛÛX[œ]X[È‹˜XÚ×Ý×ÛÙÚ[Žˆ”™]Ý\ˆ0èHYÙHHÛÛ›™^[ÛˆŸK™\Ù]Ü\ÜÝÛÜ™žÙ›Ü™ÛÝÜ\ÜÝÛÜ™ˆ“[ÝH\ÜÙHÝX›pêHÈ‹›Ü™ÛÝÜ\ÜÝÛÜ™Ù]Z[Îˆ“Ø[™^ˆ\È[œÝXÝ[ÛœÈ\ˆ[XZ[ˆŸKÙ]Ü\ÜÝÛÜ™žÛ™]×Ü\ÜÝÛÜ™ˆ“›Ý]™X]H[ÝH\ÜÙHŸK˜[Y][ÛŽžÜ\ÜÝÛÜ™ÛZ\ÛX]Úˆ“\È[ÝÈH\ÜÙH™HÛÜœ™\ÜÛ™[\ÈŸ__NØÛÛœÝ[^Ü™\ÛÝ\˜Ù\ÎžØÛÛ\[šY\ÎžÛ˜[YNˆ”›Ü\H›Ü\Y\È‹›Ü˜ÙYØ\ÙS˜[YNˆ”›Ü\H‹šY[ÎžÛ˜[YNˆ”›Ü\H˜[YH‹ÙXœÚ]Nˆ•ÙXœÚ]H‹[šÙY[—Ý\›ˆ“[šÙY[ˆT“‹Û™WÛ[X™\Žˆ”Û™H[X™\ˆ‹Ü™X]YØ]ˆÜ™X]Y]‹˜—ØÛÛXÝÎˆ“[X™\ˆÙˆÝ\ÝÛY\œÈ‹™]™[YNˆ”™]™[YH‹ÙXÝÜŽˆ”›Ü\H\H‹Ú^™Nˆ”Ú^™H‹^ÚY[YšY\Žˆ•^Y[YšY\ˆ‹Y™\ÜÎˆY™\ÜÈ‹Ú]NˆÚ]H‹š\ÛÙNˆ–š\ÛÙH‹Ý]WØX˜œŽˆ”Ý]H‹ÛÝ[žNˆÛÝ[žH‹\ØÜš\[ÛŽˆ‘\ØÜš\[Ûˆ‹ÛÛ^Û[šÜÎˆÛÛ^[šÜÈ‹Ø[\×ÚYˆ\ÜÚYÛ™YÈŸK[\NžÙ\ØÜš\[ÛŽˆ“›È›Ü\Y\È]™H™Y[ˆYYˆ‹]Nˆ“›È›Ü\Y\È›Ý[™ŸKšY[ØØ]YÛÜšY\ÎžØÛÛXÝˆÝ\ÝÛY\ˆ‹Y][Û˜[Ú[™›ÎˆY][Û˜[[™›Ü›X][Ûˆ‹Y™\ÜÎˆY™\ÜÈ‹ÛÛ^ˆÛÛ^ŸKXÝ[ÛŽžØÜ™X]NˆÜ™X]H›Ü\H‹Y]ˆ‘Y]›Ü\H‹™]Îˆ“™]È›Ü\H‹ÚÝÎˆ”ÚÝÈ›Ü\HŸKYYÛÛŽˆYYÛˆ	^Ù]_H‹›ÛÝÙYØžNˆ‘›ÛÝÙYžH	^Û˜[Y_H‹›ÛÝÙYØžWÞ[ÝNˆ‘›ÛÝÙYžH[ÝH‹›×ØÛÛXÝÎˆ“›ÈÝ\ÝÛY\ˆ‹˜—ØÛÛXÝÎˆ‰^ÜÛX\ØÛÝ[HÝ\ÝÛY\ˆ	^ÜÛX\ØÛÝ[HÝ\ÝÛY\œÈ‹˜—ÙX[Îˆ‰^ÜÛX\ØÛÝ[H›Øˆ	^ÜÛX\ØÛÝ[H›ØœÈ‹Ú^™\ÎžÛÛ™WÙ[\ÞYYNˆŒH[\ÞYYH‹Û×Ý×Ûš[™WÙ[\ÞYY\ÎˆŒ‹NH[\ÞYY\È‹[—Ý×Ù›ÜWÛš[™WÙ[\ÞYY\ÎˆŒLMH[\ÞYY\È‹šYWÝ×ÝÛ×Ú[™™YÙ›ÜWÛš[™WÙ[\ÞYY\ÎˆLLH[\ÞYY\È‹Û×Ú[™™YÙšYWÛÜ—Û[Ü™WÙ[\ÞYY\ÎˆŒLÜˆ[Ü™H[\ÞYY\ÈŸK]]ØÛÛ\]NžØÜ™X]WÙ\œ›ÜŽˆ[ˆ\œ›ÜˆØØÝ\œ™YÚ[HÜ™X][™ÈH›Ü\H‹Ü™X]WÚ][NˆÜ™X]H	^Ú][_H‹Ü™X]WÛX™[ˆ”Ý\\[™ÈÈÜ™X]HH™]È›Ü\HŸKš[\œÎžÛÛ›WÛZ[™Nˆ“Û›H›Ü\Y\È\ÜÚYÛ™YÈYHŸ_KÛÛXÝÎžÛ˜[YNˆÝ\ÝÛY\ˆÝ\ÝÛY\œÈ‹›Ü˜ÙYØ\ÙS˜[YNˆÝ\ÝÛY\ˆ‹šY[ØØ]YÛÜšY\ÎžØ˜XÚÙÜ›Ý[™Ú[™›Îˆ˜XÚÙÜ›Ý[™[™›È‹Y[]Nˆ’Y[]H‹Z\ØÎˆ“Z\ØÈ‹\œÛÛ˜[Ú[™›Îˆ”\œÛÛ˜[[™›È‹ÜÚ][ÛŽˆ”ÜÚ][ÛˆŸKšY[ÎžÙš\œÝÛ˜[YNˆ‘š\œÝ˜[YH‹\ÝÛ˜[YNˆ“\Ý˜[YH‹\ÝÜÙY[Žˆ“\ÝÙY[ˆ‹]Nˆ•]H‹ÛÛ\[žWÚYˆ”›Ü\H‹[XZ[ÚœÛÛ˜Žˆ‘[XZ[Y™\ÜÙ\È‹[XZ[ˆ‘[XZ[‹Û™WÚœÛÛ˜Žˆ”Û™H[X™\œÈ‹Û™WÛ[X™\Žˆ”Û™H[X™\ˆ‹[šÙY[—Ý\›ˆ“[šÙY[ˆT“‹˜XÚÙÜ›Ý[™ˆÝ\ÝÛY\ˆ[™›ØˆÛÛ^‹\×Û™]ÜÛ]\Žˆ’\È™]ÜÛ]\ˆ‹Ø[\×ÚYˆ\ÜÚYÛ™YÈŸKXÝ[ÛŽžØYˆYÝ\ÝÛY\ˆ‹YÙš\œÝˆY[Ý\ˆš\œÝÝ\ÝÛY\ˆ‹Ü™X]NˆÜ™X]HÝ\ÝÛY\ˆ‹Y]ˆ‘Y]Ý\ÝÛY\ˆ‹^ÜÝ˜Ø\™ˆ‘^ÜÈØ\™‹™]Îˆ“™]ÈÝ\ÝÛY\ˆ‹ÚÝÎˆ”ÚÝÈÝ\ÝÛY\ˆŸK˜XÚÙÜ›Ý[™žÛ\ÝØXÝ]š]WÛÛŽˆ“\ÝXÝ]š]HÛˆ	^Ù]_H‹YYÛÛŽˆYYÛˆ	^Ù]_H‹›ÛÝÙYØžNˆ‘›ÛÝÙYžH	^Û˜[Y_H‹›ÛÝÙYØžWÞ[ÝNˆ‘›ÛÝÙYžH[ÝH‹Ý]\×Û›Û™Nˆ“›Û™HŸKÜÚ][Û—Ø]ˆ‰^Ý]_H]‹ÜÚ][Û—Ø]ØÛÛ\[žNˆ‰^Ý]_H]	^ØÛÛ\[ž_H‹[\NžÙ\ØÜš\[ÛŽˆ“›ÈÝ\ÝÛY\œÈ]™H™Y[ˆYYˆ‹]Nˆ“›ÈÝ\ÝÛY\œÈ›Ý[™ŸK[\ÜžÝ]Nˆ’[\ÜÝ\ÝÛY\œÈ‹]ÛŽˆ’[\ÜÔÕˆ‹ÛÛ\]NˆÝ\ÝÛY\ˆ[\ÜÛÛ\]Kˆ[\ÜY	^Ú[\ÜÛÝ[HÝ\ÝÛY\œËÚ]	^Ù\œ›ÜÛÝ[H\œ›ÜœÈ‹›ÙÜ™\ÜÎˆ’[\ÜY	^Ú[\ÜÛÝ[HÈ	^Ü›ÝÐÛÝ[HÝ\ÝÛY\œËÚ]	^Ù\œ›ÜÛÝ[H\œ›ÜœËˆ‹\œ›ÜŽˆ‘˜Z[YÈ[\Ü\Èš[KX\ÙHXZÙHÝ\™H[Ý\ˆ›ÝšYYH˜[YÔÕˆš[Kˆ‹[\ÜYˆ’[\ÜY‹™[XZ[š[™×Ý[YNˆ‘\Ý[X]Y™[XZ[š[™È[YNˆ‹[›š[™Îˆ•H[\Ü\È[›š[™ËX\ÙHÈ›ÝÛÜÙH\ÈX‹ˆ‹Ø[\WÙÝÛ›ØYˆ‘ÝÛ›ØYÔÕˆØ[\H‹Ø[\WÚ[ˆ’\™H\ÈHØ[\HÔÕˆš[H[ÝHØ[ˆ\ÙH\ÈH[\]H‹ÝÜˆ”ÝÜ[\Ü‹ÜÝ—Ùš[NˆÔÕˆš[H‹ÛÛXÝ×ÛX™[ˆ˜Ý\ÝÛY\ˆÝ\ÝÛY\œÈŸK[œ]ÎžÙÙ[™\œÎžÛX[Nˆ’KÒ[H‹™[X[Nˆ”ÚKÒ\ˆ‹›Û˜š[˜\žNˆ•^KÕ[HŸK\œÛÛ˜[Ú[™›×Ý\\ÎžÝÛÜšÎˆ•ÛÜšÈ‹ÛYNˆ’ÛYH‹Ý\Žˆ“Ý\ˆŸ_K\ÝžÙ\œ›Ü—ÛØY[™Îˆ‘\œ›ÜˆØY[™ÈÝ\ÝÛY\œÈŸK[×ÝYÎžØXÝ[ÛŽˆ•YÈ‹˜XÚÎˆ˜XÚÈÈYÜÈ‹Ü™X]WÙ\ØÜš\[ÛŽˆÜ™X]HH™]ÈYÈ[™\H]ÈHÙ[XÝYÝ\ÝÛY\œËˆ‹\ØÜš\[ÛŽˆÚÛÜÙH[ˆ^\Ý[™ÈYÈÜˆÜ™X]HH™]ÈÛ™H›ÜˆHÙ[XÝYÝ\ÝÛY\œËˆ‹[\Nˆ“›ÈYÜÈY]ˆÜ™X]HÛ™HÈYÈHÙ[XÝYÝ\ÝÛY\œËˆ‹\œ›ÜŽˆ‘˜Z[YÈYYÈÈÝ\ÝÛY\œÈ‹›ÛÜˆ”Ù[XÝYÝ\ÝÛY\œÈ[™XYH]™H\ÈYÈ‹ÝXØÙ\ÜÎˆ•YÈYYÈ	^ÜÛX\ØÛÝ[HÝ\ÝÛY\ˆYÈYYÈ	^ÜÛX\ØÛÝ[HÝ\ÝÛY\œÈ‹]NˆYYÈÈÝ\ÝÛY\œÈŸKY\™ÙNžØXÝ[ÛŽˆ“Y\™ÙHÚ][›Ý\ˆÝ\ÝÛY\ˆ‹ÛÛ™š\›Nˆ“Y\™ÙHÝ\ÝÛY\œÈ‹Ý\œ™[ØÛÛXÝˆÝ\œ™[Ý\ÝÛY\ˆ
Ú[™H[]Y
H‹\ØÜš\[ÛŽˆ“Y\™ÙH\ÈÝ\ÝÛY\ˆÚ][›Ý\ˆÛ™Kˆ‹\œ›ÜŽˆ‘˜Z[YÈY\™ÙHÝ\ÝÛY\œÈ‹Y\™Ú[™Îˆ“Y\™Ú[™Ë‹‹ˆ‹›×ØY][Û˜[Ù]Nˆ“›ÈY][Û˜[]HÈY\™ÙH‹Ù[XÝÝ\™Ù]ˆ”X\ÙHÙ[XÝHÝ\ÝÛY\ˆÈY\™ÙHÚ]‹ÝXØÙ\ÜÎˆÝ\ÝÛY\œÈY\™ÙYÝXØÙ\ÜÙ[H‹\™Ù]ØÛÛXÝˆ•\™Ù]Ý\ÝÛY\ˆ
Ú[™HÙ\
H‹]Nˆ“Y\™ÙHÝ\ÝÛY\ˆ‹Ø\›š[™×Ù\ØÜš\[ÛŽˆ[]HÚ[™H˜[œÙ™\œ™YÈHÙXÛÛ™Ý\ÝÛY\‹ˆ\ÈXÝ[ÛˆØ[››Ý™H[™Û™Kˆ‹Ø\›š[™×Ý]Nˆ•Ø\›š[™Îˆ\ÝXÝ]™HÜ\˜][Ûˆ‹Ú]ÝÚ[Ø™WÛY\™ÙYˆ•Ú]Ú[™HY\™ÙYˆŸKš[\œÎžØ™Y›Ü™WÛ\ÝÛ[Ûˆ™Y›Ü™H\Ý[Û‹™Y›Ü™WÝ\×Û[Ûˆ™Y›Ü™H\È[Û‹™Y›Ü™WÝ\×ÝÙYZÎˆ™Y›Ü™H\ÈÙYZÈ‹X[˜YÙYØžWÛYNˆ“X[˜YÙYžHYH‹ÙX\˜Úˆ”ÙX\˜Ú˜[YK›Ü\K‹‹ˆ‹\×ÝÙYZÎˆ•\ÈÙYZÈ‹Ù^Nˆ•Ù^H‹YÜÎˆ•YÜÈ‹\ÚÜÎˆ•\ÚÜÈŸKÝžÙ[\WØÚ[™ÙWÜÝ]\Î‰ÐÚ[™ÙHHÝ]\ÈÙˆHÝ\ÝÛY\ˆžHY[™ÈH›ÝHÈ]Ý\ÝÛY\ˆ[™ÛXÚÚ[™ÈÛˆœÚÝÈÜ[ÛœÈ‹‰Ë[\WÚ[‰ÐÝ\ÝÛY\œÈÚ]HšÝˆÝ]\ÈÚ[\X\ˆ\™K‰Ë]Nˆ’ÝÝ\ÝÛY\œÈŸ_KX[ÎžÛ˜[YNˆ’›Øˆ›ØœÈ‹šY[ÎžÛ˜[YNˆ“˜[YH‹\ØÜš\[ÛŽˆ‘\ØÜš\[Ûˆ‹ÛÛ\[žWÚYˆ”›Ü\H‹ÛÛXÝÚYÎˆÝ\ÝÛY\œÈ‹Ø]YÛÜžNˆ’›Øˆ\H‹[[Ý[ˆ‘\Ý[X]HÈÛÛ˜XÝ˜[YH‹^XÝYØÛÜÚ[™×Ù]Nˆ•\™Ù]ÛÛ\][Ûˆ]H‹ÝYÙNˆ’›ØˆÝYÙHŸKXÝ[ÛŽžØ˜XÚ×Ý×ÙX[ˆ˜XÚÈÈ›Øˆ‹Ü™X]NˆÜ™X]H›Øˆ‹™]Îˆ“™]È›ØˆŸKšY[ØØ]YÛÜšY\ÎžÛZ\ØÎˆ“Z\ØÈŸK\˜Ú]™YžØXÝ[ÛŽˆ\˜Ú]™H‹\œ›ÜŽˆ‘\œ›ÜŽˆ›Øˆ›Ý\˜Ú]™Y‹\ÝÝ]Nˆ\˜Ú]™Y›ØœÈ‹ÝXØÙ\ÜÎˆ’›Øˆ\˜Ú]™Y‹]Nˆ\˜Ú]™Y›Øˆ‹šY]Îˆ•šY]È\˜Ú]™Y›ØœÈŸK[œ]ÎžÛ[šÙYÝÎˆ“[šÙYÈŸK[˜\˜Ú]™YžØXÝ[ÛŽˆ”Ù[™˜XÚÈÈH›Ø\™‹\œ›ÜŽˆ‘\œ›ÜŽˆ›Øˆ›Ý™\ÝÜ™Y‹ÝXØÙ\ÜÎˆ’›Øˆ™\ÝÜ™YŸK\]Yˆ’›Øˆ\]Y‹[\NžØ™Y›Ü™WØÜ™X]Nˆ˜™Y›Ü™HÜ™X][™ÈH›Ø‹ˆ‹\ØÜš\[ÛŽˆ“›È›ØœÈ]™H™Y[ˆYYˆ‹]Nˆ“›È›ØœÈ›Ý[™ŸK[˜[YÙ]Nˆ’[˜[Y]HŸK›Ý\ÎžÛ˜[YNˆ“›ÝH›Ý\È‹›Ü˜ÙYØ\ÙS˜[YNˆ“›ÝH‹šY[ÎžÜÝ]\Îˆ”Ý]\È‹]Nˆ‘]H‹]XÚY[Îˆ]XÚY[È‹ÛÛXÝÚYˆÝ\ÝÛY\ˆ‹X[ÚYˆ’›ØˆŸKXÝ[ÛŽžØYˆY›ÝH‹YÙš\œÝˆY[Ý\ˆš\œÝ›ÝH‹[]Nˆ‘[]H›ÝH‹Y]ˆ‘Y]›ÝH‹\]Nˆ•\]H›ÝH‹YÝ\ÎˆY\È›ÝHŸKÚY]žØÜ™X]NˆÜ™X]H›ÝH‹Ü™X]WÙ›ÜŽˆÜ™X]H›ÝH›Üˆ	^Û˜[Y_H‹Y]ˆ‘Y]›ÝH‹Y]Ù›ÜŽˆ‘Y]›ÝH›Üˆ	^Û˜[Y_HŸK[]Yˆ“›ÝH[]Y‹[\Nˆ“›È›Ý\ÈY]‹]]Ü—ØYYˆ‰^Û˜[Y_HYYH›ÝH‹[ÝWØYYˆ–[ÝHYYH›ÝH‹YNˆ“YH‹\ÝžÙ\œ›Ü—ÛØY[™Îˆ‘\œ›ÜˆØY[™È›Ý\ÈŸK›ÝWÙ›Ü—ØÛÛXÝˆ“›ÝH›Üˆ	^Û˜[Y_H‹Ý\\ŽžÚ[ˆ‘ÛÈÈHÝ\ÝÛY\ˆYÙH[™YH›ÝHŸKYYˆ“›ÝHYY‹[œ]ÎžØYÛ›ÝNˆYH›ÝH‹Ü[Ûœ×Ú[ˆŠ]XÚš[\ËÜˆÚ[™ÙH]Z[ÊH‹ÚÝ×ÛÜ[ÛœÎˆ”ÚÝÈÜ[ÛœÈŸKXÝ[ÛœÎžØ]XÚÙØÝ[Y[ˆ]XÚØÝ[Y[ŸK˜[Y][ÛŽžÛ›ÝWÛÜ—Ø]XÚY[Ü™\]Z\™YˆH›ÝHÜˆ[ˆ]XÚY[\È™\]Z\™YŸ_KØ[\ÎžÛ˜[YNˆ•\Ù\ˆ\Ù\œÈ‹šY[ÎžÙš\œÝÛ˜[YNˆ‘š\œÝ˜[YH‹\ÝÛ˜[YNˆ“\Ý˜[YH‹[XZ[ˆ‘[XZ[‹YZ[š\Ý˜]ÜŽˆYZ[ˆ‹\ØX›Yˆ‘\ØX›YŸKÜ™X]NžÙ\œ›ÜŽˆ[ˆ\œ›ÜˆØØÝ\œ™YÚ[HÜ™X][™ÈH\Ù\‹ˆ‹ÝXØÙ\ÜÎˆ•\Ù\ˆÜ™X]Yˆ^HÚ[ÛÛÛˆ™XÙZ]™H[ˆ[XZ[ÈÙ]Z\ˆ\ÜÝÛÜ™ˆ‹]NˆÜ™X]HH™]È\Ù\ˆŸKY]žÙ\œ›ÜŽˆ[ˆ\œ›ÜˆØØÝ\œ™YˆX\ÙHžHYØZ[‹ˆ‹™XÛÜ™Û›ÝÙ›Ý[™ˆ”™XÛÜ™›Ý›Ý[™‹ÝXØÙ\ÜÎˆ•\Ù\ˆ\]YÝXØÙ\ÜÙ[H‹]Nˆ‘Y]	^Û˜[Y_HŸKXÝ[ÛŽžÛ™]Îˆ“™]È\Ù\ˆŸ_K\ÚÜÎžÛ˜[YNˆ•\ÚÈ\ÚÜÈ‹›Ü˜ÙYØ\ÙS˜[YNˆ•\ÚÈ‹šY[ÎžÝ^ˆ‘\ØÜš\[Ûˆ‹YWÙ]Nˆ‘YH]H‹\Nˆ•\H‹ÛÛXÝÚYˆÝ\ÝÛY\ˆ‹YWÜÚÜˆ™YHŸKXÝ[ÛŽžØYˆY\ÚÈ‹Ü™X]NˆÜ™X]H\ÚÈ‹Y]ˆ‘Y]\ÚÈŸKXÝ[ÛœÎžÜÜÝÛ™WÛ™^ÝÙYZÎˆ”ÜÝÛ™HÈ™^ÙYZÈ‹ÜÝÛ™WÝÛ[Üœ›ÝÎˆ”ÜÝÛ™HÈÛ[Üœ›ÝÈ‹]Nˆ\ÚÈXÝ[ÛœÈŸKYYˆ•\ÚÈYY‹[]Yˆ•\ÚÈ[]YÝXØÙ\ÜÙ[H‹X[ÙÎžØÜ™X]NˆÜ™X]H\ÚÈ‹Ü™X]WÙ›ÜŽˆÜ™X]H\ÚÈ›Üˆ	^Û˜[Y_HŸKÚY]žÙY]ˆ‘Y]\ÚÈ‹Y]Ù›ÜŽˆ‘Y]\ÚÈ›Üˆ	^Û˜[Y_HŸK[\Nˆ“›È\ÚÜÈY]‹[\WÛ\ÝÚ[ˆ•\ÚÜÈYYÈ[Ý\ˆÝ\ÝÛY\œÈÚ[\X\ˆ\™Kˆ‹š[\œÎžÛ]\Žˆ“]\ˆ‹Ý™\™YNˆ“Ý™\™YH‹\×ÝÙYZÎˆ•\ÈÙYZÈ‹Ù^Nˆ•Ù^H‹Û[Üœ›ÝÎˆ•Û[Üœ›ÝÈ‹Ú]Ü[™[™Îˆ•Ú][™[™È\ÚÜÈŸK™YØ\™[™×ØÛÛXÝˆŠ™Nˆ	^Û˜[Y_JH‹\]Yˆ•\ÚÈ\]YŸKYÜÎžÛ˜[YNˆ•YÈYÜÈ‹XÝ[ÛŽžØYˆYYÈ‹Ü™X]NˆÜ™X]H™]ÈYÈŸKX[ÙÎžØÛÛÜŽˆÛÛÜˆ‹Ü™X]WÝ]NˆÜ™X]HH™]ÈYÈ‹Y]Ý]Nˆ‘Y]YÈ‹˜[YWÛX™[ˆ•YÈ˜[YH‹˜[YWÜXÙZÛ\Žˆ‘[\ˆYÈ˜[YHŸ__KÜ›NžØXÝ[ÛŽžÜ™\Ù]Ü\ÜÝÛÜ™ˆ”™\Ù]\ÜÝÛÜ™ŸK]]žÙš\œÝÛ˜[YNˆ‘š\œÝ˜[YH‹\ÝÛ˜[YNˆ“\Ý˜[YH‹ÛÛ™š\›WÜ\ÜÝÛÜ™ˆÛÛ™š\›H\ÜÝÛÜ™‹ÛÛ™š\›X][Û—Ü™\]Z\™Yˆ”X\ÙH›ÛÝÈH[šÈÙH\ÝÙ[[ÝHžH[XZ[ÈÛÛ™š\›H[Ý\ˆXØÛÝ[ˆ‹™XÛÝ™\žWÙ[XZ[ÜÙ[ˆ’Yˆ[ÝIÜ™HH™YÚ\Ý\™Y\Ù\‹[ÝHÚÝ[™XÙZ]™HH\ÜÝÛÜ™™XÛÝ™\žH[XZ[ÚÜKˆ‹ÚYÛ—Ú[—Ù˜Z[Yˆ‘˜Z[YÈÙÈ[‹ˆ‹ÚYÛ—Ú[—ÙÛÛÙÛWÝÛÜšÜÜXÙNˆ”ÚYÛˆ[ˆÚ]ÛÛÙÛHÛÜšÜXÙH‹ÚYÛ\žØÜ™X]WØXØÛÝ[ˆÜ™X]HXØÛÝ[‹Ü™X]WÙš\œÝÝ\Ù\ŽˆÜ™X]HHš\œÝ\Ù\ˆXØÛÝ[ÈÛÛ\]HHÙ]\ˆ‹Ü™X][™ÎˆÜ™X][™Ë‹‹ˆ‹[š]X[Ý\Ù\—ØÜ™X]Yˆ’[š]X[\Ù\ˆÝXØÙ\ÜÙ[HÜ™X]YŸKÙ[ÛÛYWÝ]Nˆ•Ù[ÛÛYHÈ[Xœ™[HÔ“HŸKÛÛ[[ÛŽžØXÝ]š]NˆXÝ]š]H‹YYˆ˜YY‹]Z[Îˆ‘]Z[È‹\ÝØXÝ]š]WÝÚ]Ù]Nˆ›\ÝXÝ]š]H	^Ù]_H‹ØYÛ[Ü™Nˆ“ØY[Ü™H‹Z\ØÎˆ“Z\ØÈ‹\Ýˆ”\Ý‹™XYÛ[Ü™Nˆ”™XY[Ü™H‹™]žNˆ”™]žH‹ÚÝ×Û\ÜÎˆ”ÚÝÈ\ÜÈ‹ÛÜYYˆÛÜYYH‹ÛÜNˆÛÜH‹ØY[™Îˆ“ØY[™Ë‹‹ˆ‹YNˆ“YH‹\Ú×ØÛÝ[ˆ‰^ÜÛX\ØÛÝ[H\ÚÈ	^ÜÛX\ØÛÝ[H\ÚÜÈŸKÚ[™Ù[ÙÎžÝ]NˆÚ[™Ù[ÙÈŸKXÝ]š]NžØYYØÛÛ\[žNˆ‰^Û˜[Y_HYY›Ü\H‹[ÝWØYYØÛÛ\[žNˆ–[ÝHYY›Ü\H‹YYØÛÛXÝˆ‰^Û˜[Y_HYY‹[ÝWØYYØÛÛXÝˆ–[ÝHYY‹YYÛ›ÝNˆ‰^Û˜[Y_HYYH›ÝHX›Ý]‹[ÝWØYYÛ›ÝNˆ–[ÝHYYH›ÝHX›Ý]‹YYÛ›ÝWØX›Ý]ÙX[ˆ‰^Û˜[Y_HYYH›ÝHX›Ý]H›Øˆ‹[ÝWØYYÛ›ÝWØX›Ý]ÙX[ˆ–[ÝHYYH›ÝHX›Ý]H›Øˆ‹YYÙX[ˆ‰^Û˜[Y_HYYH›Øˆ‹[ÝWØYYÙX[ˆ–[ÝHYYH›Øˆ‹]ØÛÛ\[žNˆ˜]‹ÎˆÈ‹ØYÛ[Ü™Nˆ“ØY[Ü™HXÝ]š]HŸK\Ú›Ø\™žÙX[×ØÚ\ˆ•\ÛÛZ[™È›Øˆ™]™[YH‹X[×Ü\[[™Nˆ’›Øˆ\[[™H‹]\ÝØXÝ]š]Nˆ“]\ÝXÝ]š]H‹]\ÝØXÝ]š]WÙ\œ›ÜŽˆ‘\œ›ÜˆØY[™È]\ÝXÝ]š]H‹]\ÝÛ›Ý\Îˆ“^H]\Ý›Ý\È‹]\ÝÛ›Ý\×ØYYØYÛÎˆ˜YY	^Ý[YPYÛßH‹Ý\\ŽžÚ[œÝ[ˆ’[œÝ[[Xœ™[HÔ“H‹›ÙÜ™\ÜÎˆ‰^ÜÝ\KÌÈÛ™H‹Ú]×Û™^ˆ•Ú]	ÜÈ™^ÈŸK\ÛÛZ[™×Ý\ÚÜÎˆ•\ÛÛZ[™È\ÚÜÈŸKXY\ŽžÚ[\ÜÙ]Nˆ’[\Ü]HŸK[XYÙWÙY]ÜŽžØÚ[™ÙNˆÚ[™ÙH‹›ÜÚ[ˆ‘›ÜHš[HÈ\ØYÜˆÛXÚÈÈÙ[XÝ]ˆ‹Y]X›WØÛÛ[ˆ‘Y]X›HÛÛ[‹]Nˆ•\ØY[™™\Ú^™H[XYÙH‹\]WÚ[XYÙNˆ•\]H[XYÙHŸK[\ÜžØXÝ[ÛŽžÙÝÛ›ØYÙ\œ›Ü—Ü™\Üˆ‘ÝÛ›ØYH\œ›Üˆ™\Ü‹[\Üˆ’[\Ü‹[\ÜØ[›Ý\Žˆ’[\Ü[›Ý\ˆš[HŸK\œ›ÜŽžÝ[˜X›Nˆ•[˜X›HÈ[\Ü\Èš[KˆŸKYNžÙ\ØÜš\[Û—ÌNˆ–[ÝHØ[ˆ[\ÜX[HY[X™\œË›Ü\Y\ËÝ\ÝÛY\œË›ØœË›Ý\Ë[™\ÚÜËˆ‹\ØÜš\[Û—ÌŽˆ‘]H]\Ý™H[ˆH”ÓÓˆš[HX]Ú[™ÈH›ÛÝÚ[™ÈØ[\NˆŸKÝ]\ÎžØ[ÜÝXØÙ\ÜÎˆ[™XÛÜ™ÈÙ\™H[\ÜYÝXØÙ\ÜÙ[Kˆ‹ÛÛ\]Nˆ’[\ÜÛÛ\]Kˆ‹˜Z[Yˆ‘˜Z[Y‹[\ÜYˆ’[\ÜY‹[—Ü›ÙÜ™\ÜÎˆ’[\Ü[ˆ›ÙÜ™\ÜËX\ÙHÛ‰Ý˜]šYØ]H]Ø^Hœ›ÛH\ÈYÙKˆ‹ÛÛYWÙ˜Z[Yˆ”ÛÛYH™XÛÜ™ÈÙ\™H›Ý[\ÜYˆ‹X›WØØ\[ÛŽˆ’[\ÜÝ]\ÈŸK]Nˆ’[\Ü]HŸKÙ][™ÜÎžØX›Ý]ˆX›Ý]‹ÛÛ\[šY\ÎžÜÙXÝÜœÎˆ”ÙXÝÜœÈŸK\š×Û[ÙWÛÙÛÎˆ‘\šÈ[ÙHÙÛÈ‹X[ÎžØØ]YÛÜšY\ÎˆØ]YÛÜšY\È‹Ý\œ™[˜ÞNˆÝ\œ™[˜ÞH‹\[[™WÚ[ˆ”Ù[XÝÚXÚ›ØˆÝYÙ\ÈÚÝ[ÛÝ[\ÈXÝ]™H\[[™H›ØœËˆ‹\[[™WÜÝ]\Ù\Îˆ”\[[™HÝ]\Ù\È‹ÝYÙ\Îˆ”ÝYÙ\ÈŸKYÚÛ[ÙWÛÙÛÎˆ“YÚ[ÙHÙÛÈ‹›Ý\ÎžÜÝ]\Ù\Îˆ”Ý]\Ù\ÈŸK™\Ù]ÙY˜][Îˆ”™\Ù]ÈY˜][È‹Ø]™WÙ\œ›ÜŽˆ‘˜Z[YÈØ]™HÛÛ™šYÝ\˜][Ûˆ‹Ø]™YˆÛÛ™šYÝ\˜][ÛˆØ]™YÝXØÙ\ÜÙ[H‹Ø]š[™Îˆ”Ø]š[™Ë‹‹ˆ‹\ÚÜÎžÝ\\Îˆ•\\ÈŸK™Y™\™[˜Ù\Îˆ”™Y™\™[˜Ù\È‹]Nˆ”Ù][™ÜÈ‹\Ý]Nˆ\]H‹ÙXÝ[ÛœÎžØœ˜[™[™Îˆœ˜[™[™ÈŸK˜[Y][ÛŽžÙ\XØ]Nˆ‘\XØ]H	^Ù\Ü^WÛ˜[Y_Nˆ	^Ú][\ßH‹[—Ý\ÙNˆØ[››Ý™[[Ý™H	^Ù\Ü^WÛ˜[Y_H]\™HÝ[\ÙYžH›ØœÎˆ	^Ú][\ßH‹˜[Y][™Îˆ•˜[Y][™ø )ˆ‹[]Y\ÎžØØ]YÛÜšY\Îˆ˜Ø]YÛÜšY\È‹ÝYÙ\ÎˆœÝYÙ\ÈŸ__K[YNžÙ\šÎˆ‘\šÈ‹X™[ˆ•[YH‹YÚˆ“YÚ‹Þ\Ý[Nˆ”Þ\Ý[HŸK[™ÝXYÙNˆ“[™ÝXYÙH‹˜]šYØ][ÛŽžÛX™[ˆÔ“H˜]šYØ][ÛˆŸK›Ùš[NžÚ[˜›Ý[™žÙ\ØÜš\[ÛŽˆ–[ÝHØ[ˆÙ[™[XZ[ÈÈHÔ“IÜÈ[˜›Ý[™Y™\ÜË›Üˆ^[\HžHY[™È]ÈH	^ÙšY[HšY[ˆ[Xœ™[HÔ“HÚ[]XÚÜÙH[XZ[ÈÈHÛÜœ™\ÜÛ™[™ÈÝ\ÝÛY\œËˆ‹]Nˆ’[˜›Ý[™[XZ[ŸKXÜžÝ]Nˆ“PÔÙ\™\ˆ‹\ØÜš\[ÛŽˆ•\ÙH\ÈT“ÈÛÛ›™XÝ[Ý\ˆRH\ÜÚ\Ý[È[Ý\ˆÔ“H]HšXHH[Ù[ÛÛ^›ÝØÛÛ
PÔ
KˆŸK\ÜÝÛÜ™žØÚ[™ÙNˆÚ[™ÙH\ÜÝÛÜ™ŸK\ÜÝÛÜ™Ü™\Ù]ÜÙ[ˆH™\Ù]\ÜÝÛÜ™[XZ[\È™Y[ˆÙ[È[Ý\ˆ[XZ[Y™\ÜÈ‹™XÛÜ™Û›ÝÙ›Ý[™ˆ”™XÛÜ™›Ý›Ý[™‹]Nˆ”›Ùš[H‹\]Yˆ–[Ý\ˆ›Ùš[H\È™Y[ˆ\]Y‹\]WÙ\œ›ÜŽˆ[ˆ\œ›ÜˆØØÝ\œ™YˆX\ÙHžHYØZ[ˆŸK˜[Y][ÛŽžÚ[˜[YÝ\›ˆ“]\Ý™HH˜[YT“‹[˜[YÛ[šÙY[—Ý\›ˆ•T“]\Ý™Hœ›ÛH[šÙY[‹˜ÛÛHŸ__K[^Ü™\ÛÝ\˜Ù\ÎžØÛÛ\[šY\ÎžÛ˜[YNˆ‘[™\š\ÙH[™\š\Ù\È‹›Ü˜ÙYØ\ÙS˜[YNˆ‘[™\š\ÙH‹šY[ÎžÛ˜[YNˆ“›ÛHH	Ù[™\š\ÙH‹ÙXœÚ]Nˆ”Ú]HÙXˆ‹[šÙY[—Ý\›ˆ“[šÙY[ˆ‹Û™WÛ[X™\Žˆ“[pê\›ÈH0ê[0ê\Û™H‹Ü™X]YØ]ˆ‘]HHÜ°êX][Ûˆ‹˜—ØÛÛXÝÎˆ“›ÛXœ™HHÛÛXÝÈ‹™]™[YNˆÚY™œ™H	ØY™˜Z\™\È‹ÙXÝÜŽˆ”ÙXÝ]\ˆ‹Ú^™Nˆ•Z[H‹^ÚY[YšY\Žˆ’Y[YšX[š\ØØ[‹Y™\ÜÎˆY™\ÜÙH‹Ú]Nˆ•š[H‹š\ÛÙNˆÛÙHÜÝ[‹Ý]WØX˜œŽˆ°â]]‹ÛÝ[žNˆ”^\È‹\ØÜš\[ÛŽˆ‘\ØÜš\[Ûˆ‹ÛÛ^Û[šÜÎˆ•T“ÈHÛÛ^H‹Ø[\×ÚYˆ”™\ÜÛœØX›HHÛÛ\HŸK[\NžÙ\ØÜš\[ÛŽˆ’[Ù[X›H]YHH\ÝHH›ÜÈ[™\š\Ù\ÈÛÚ]šYKˆ‹]Nˆ]XÝ[™H[™\š\ÙH›Ý]°êYHŸKšY[ØØ]YÛÜšY\ÎžØÛÛXÝˆÛÛXÝ‹Y][Û˜[Ú[™›Îˆ’[™›Ü›X][ÛœÈÝ\0ê[Y[Z\™\È‹Y™\ÜÎˆY™\ÜÙH‹ÛÛ^ˆÛÛ^HŸKXÝ[ÛŽžØÜ™X]NˆÜ°êY\ˆ[™H[™\š\ÙH‹Y]ˆ“[ÙYšY\ˆ	Ù[™\š\ÙH‹™]Îˆ“›Ý]™[H[™\š\ÙH‹ÚÝÎˆY™šXÚ\ˆ	Ù[™\š\ÙHŸKYYÛÛŽˆZ›Ý]0êYHH	^Ù]_H‹›ÛÝÙYØžNˆ”ÝZ]šYH\ˆ	^Û˜[Y_H‹›ÛÝÙYØžWÞ[ÝNˆ”ÝZ]šYH\ˆ›Ý\È‹›×ØÛÛXÝÎˆ]XÝ[ˆÛÛXÝ‹˜—ØÛÛXÝÎˆ‰^ÜÛX\ØÛÝ[HÛÛXÝ	^ÜÛX\ØÛÝ[HÛÛXÝÈ‹˜—ÙX[Îˆ‰^ÜÛX\ØÛÝ[HY™˜Z\™H	^ÜÛX\ØÛÝ[HY™˜Z\™\È‹Ú^™\ÎžÛÛ™WÙ[\ÞYYNˆŒH[\ÞpêH‹Û×Ý×Ûš[™WÙ[\ÞYY\ÎˆŒ‹NH[\Þpê\È‹[—Ý×Ù›ÜWÛš[™WÙ[\ÞYY\ÎˆŒLMH[\Þpê\È‹šYWÝ×ÝÛ×Ú[™™YÙ›ÜWÛš[™WÙ[\ÞYY\ÎˆLLH[\Þpê\È‹Û×Ú[™™YÙšYWÛÜ—Û[Ü™WÙ[\ÞYY\ÎˆŒL[\Þpê\ÈÝH\ÈŸK]]ØÛÛ\]NžØÜ™X]WÙ\œ›ÜŽˆ•[™H\œ™]\ˆÉÙ\Ý›ÙZ]HÜœÈHHÜ°êX][ÛˆH	Ù[™\š\ÙH‹Ü™X]WÚ][NˆÜ°êY\ˆ	^Ú][_H‹Ü™X]WÛX™[ˆÛÛ[Y[˜Ù^ˆ0è\\ˆÝ\ˆÜ°êY\ˆ[™H›Ý]™[H[™\š\ÙHŸKš[\œÎžÛÛ›WÛZ[™Nˆ”Ù][[Y[\È[™\š\Ù\È]YH™Hðê™HŸ_KÛÛXÝÎžÛ˜[YNˆÛÛXÝÛÛXÝÈ‹›Ü˜ÙYØ\ÙS˜[YNˆÛÛXÝ‹šY[ØØ]YÛÜšY\ÎžØ˜XÚÙÜ›Ý[™Ú[™›Îˆ’[™›Ü›X][ÛœÈÛÛ\0ê[Y[Z\™\È‹Y[]Nˆ’Y[]0êH‹Z\ØÎˆ‘]™\œÈ‹\œÛÛ˜[Ú[™›Îˆ’[™›Ü›X][ÛœÈ\œÛÛ›™[\È‹ÜÚ][ÛŽˆ”ÜÝHŸKšY[ÎžÙš\œÝÛ˜[YNˆ”°ê[›ÛH‹\ÝÛ˜[YNˆ“›ÛH‹\ÝÜÙY[Žˆ‘\›špê™HXÝ]š]0êH‹]Nˆ•]™H‹ÛÛ\[žWÚYˆ‘[™\š\ÙH‹[XZ[ÚœÛÛ˜ŽˆY™\ÜÙ\ÈK[XZ[‹[XZ[ˆ‘K[XZ[‹Û™WÚœÛÛ˜Žˆ“[pê\›ÜÈH0ê[0ê\Û™H‹Û™WÛ[X™\Žˆ“[pê\›ÈH0ê[0ê\Û™H‹[šÙY[—Ý\›ˆ•T“[šÙY[ˆ‹˜XÚÙÜ›Ý[™ˆ’[™›Ü›X][ÛœÈHÛÛ^H‹\×Û™]ÜÛ]\ŽˆX›Û›°êH0èH™]ÜÛ]\ˆ‹Ø[\×ÚYˆ”™\ÜÛœØX›HHÛÛ\HŸKXÝ[ÛŽžØYˆZ›Ý]\ˆ[ˆÛÛXÝ‹YÙš\œÝˆZ›Ý]^ˆ›Ý™H™[ZY\ˆÛÛXÝ‹Ü™X]NˆÜ°êY\ˆ[ˆÛÛXÝ‹Y]ˆ“[ÙYšY\ˆHÛÛXÝ‹^ÜÝ˜Ø\™ˆ‘^Ü\ˆ[ˆØ\™‹™]Îˆ“›Ý]™X]HÛÛXÝ‹ÚÝÎˆY™šXÚ\ˆHÛÛXÝŸK˜XÚÙÜ›Ý[™žÛ\ÝØXÝ]š]WÛÛŽˆ‘\›špê™HXÝ]š]0êHH	^Ù]_H‹YYÛÛŽˆZ›Ý]0êHH	^Ù]_H‹›ÛÝÙYØžNˆ”ÝZ]šH\ˆ	^Û˜[Y_H‹›ÛÝÙYØžWÞ[ÝNˆ”ÝZ]šH\ˆ›Ý\È‹Ý]\×Û›Û™Nˆ]XÝ[ˆŸKÜÚ][Û—Ø]ˆ‰^Ý]_HÚ^ˆ‹ÜÚ][Û—Ø]ØÛÛ\[žNˆ‰^Ý]_HÚ^ˆ	^ØÛÛ\[ž_H‹[\NžÙ\ØÜš\[ÛŽˆ’[Ù[X›H]YH›Ý™H\ÝHHÛÛXÝÈÛÚ]šYKˆ‹]Nˆ]XÝ[ˆÛÛXÝ›Ý]°êHŸK[\ÜžÝ]Nˆ’[\Ü\ˆ\ÈÛÛXÝÈ‹]ÛŽˆ’[\Ü\ˆ[ˆšXÚY\ˆÔÕˆ‹ÛÛ\]Nˆ’[\Ü\ÈÛÛXÝÈ\›Z[°êKˆ	^Ú[\ÜÛÝ[HÛÛXÝÈ[\Ü0ê\Ë	^Ù\œ›ÜÛÝ[H\œ™]\œÈ‹›ÙÜ™\ÜÎˆ‰^Ú[\ÜÛÝ[HÈ	^Ü›ÝÐÛÝ[HÛÛXÝÈ[\Ü0ê\Ë]™XÈ	^Ù\œ›ÜÛÝ[H\œ™]\œËˆ‹\œ›ÜŽˆ°âXÚXÈH	Ú[\Ü][ÛˆHÙHšXÚY\‹ˆ™]Z[^ˆ›Ý\È\ÜÝ\™\ˆ]YH›Ý\È]™^ˆ›Ý\›šH[ˆšXÚY\ˆÔÕˆ˜[YKˆ‹[\ÜYˆ’[\Ü0êH‹™[XZ[š[™×Ý[YNˆ•[\È™\Ý[\Ý[pêHˆ‹[›š[™Îˆ“	Ú[\Ü\Ý[ˆÛÝ\œËY\˜ÚHH™H\È™\›Y\ˆÙ]Û™Û]ˆ‹Ø[\WÙÝÛ›ØYˆ•0ê[0êXÚ\™Ù\ˆ[ˆ^[\HÔÕˆ‹Ø[\WÚ[ˆ•›ÚXÚH[ˆ^[\HHšXÚY\ˆÔÕˆ]YH›Ý\ÈÝ]™^ˆ][\Ù\ˆÛÛ[YH[Ù0êH‹ÝÜˆ\œ°ê\ˆ	Ú[\Ü][Ûˆ‹ÜÝ—Ùš[Nˆ‘šXÚY\ˆÔÕˆ‹ÛÛXÝ×ÛX™[ˆ˜ÛÛXÝÛÛXÝÈŸK[œ]ÎžÙÙ[™\œÎžÛX[Nˆ“[ÛœÚY]\ˆ‹™[X[Nˆ“XY[YH‹›Û˜š[˜\žNˆ’[™0ê]\›Z[°êHŸK\œÛÛ˜[Ú[™›×Ý\\ÎžÝÛÜšÎˆ”›È‹ÛYNˆ”\œÛÈ‹Ý\Žˆ]]™HŸ_K\ÝžÙ\œ›Ü—ÛØY[™Îˆ‘\œ™]\ˆÜœÈHÚ\™Ù[Y[\ÈÛÛXÝÈŸK[×ÝYÎžØXÝ[ÛŽˆ°â]\]Y]\ˆ‹˜XÚÎˆ”™]Ý\ˆ]^0ê]\]Y]\È‹Ü™X]WÙ\ØÜš\[ÛŽˆÜ°êY^ˆ[™H›Ý]™[H0ê]\]Y]H]\\]Y^‹[H]^ÛÛXÝÈðê[XÝ[Û›°ê\Ëˆ‹\ØÜš\[ÛŽˆÚÚ\Ú\ÜÙ^ˆ[™H0ê]\]Y]H^\Ý[HÝHÜ°êY^‹Y[ˆ[™HÝ\ˆ\ÈÛÛXÝÈðê[XÝ[Û›°ê\Ëˆ‹[\Nˆ]XÝ[™H0ê]\]Y]HÝ\ˆH[ÛY[ˆÜ°êY^‹Y[ˆ[™HÝ\ˆ0ê]\]Y]\ˆ\ÈÛÛXÝÈðê[XÝ[Û›°ê\Ëˆ‹\œ›ÜŽˆ’[\ÜÜÚX›H	ØZ›Ý]\ˆ	ðê]\]Y]H]^ÛÛXÝÈ‹›ÛÜˆ“\ÈÛÛXÝÈðê[XÝ[Û›°ê\ÈÛ0êZ°èÙ]H0ê]\]Y]H‹ÝXØÙ\ÜÎˆ°â]\]Y]HZ›Ý]0êYH0è	^ÜÛX\ØÛÝ[HÛÛXÝ0â]\]Y]HZ›Ý]0êYH0è	^ÜÛX\ØÛÝ[HÛÛXÝÈ‹]NˆZ›Ý]\ˆ[™H0ê]\]Y]H]^ÛÛXÝÈŸKY\™ÙNžØXÝ[ÛŽˆ‘\Ú[Û›™\ˆ]™XÈ[ˆ]]™HÛÛXÝ‹ÛÛ™š\›Nˆ‘\Ú[Û›™\ˆ\ÈÛÛXÝÈ‹Ý\œ™[ØÛÛXÝˆÛÛXÝXÝY[
Ù\˜HÝ\š[pêJH‹\ØÜš\[ÛŽˆ‘\Ú[Û›™^ˆÙHÛÛXÝ]™XÈ[ˆ]]™Kˆ‹\œ›ÜŽˆ°âXÚXÈHH\Ú[Ûˆ\ÈÛÛXÝÈ‹Y\™Ú[™Îˆ‘\Ú[Û‹‹‹ˆ‹›×ØY][Û˜[Ù]Nˆ]XÝ[™HÛ›°êYHÝ\0ê[Y[Z\™H0è\Ú[Û›™\ˆ‹Ù[XÝÝ\™Ù]ˆ•™]Z[^ˆðê[XÝ[Û›™\ˆ[ˆÛÛXÝ]™XÈ\]Y[\Ú[Û›™\ˆ‹ÝXØÙ\ÜÎˆÛÛXÝÈ\Ú[Û›°ê\È]™XÈÝXØðêÈ‹\™Ù]ØÛÛXÝˆÛÛXÝÚX›H
Ù\˜HÛÛœÙ\°êJH‹]Nˆ‘\Ú[Û›™\ˆ\ÈÛÛXÝÈ‹Ø\›š[™×Ù\ØÜš\[ÛŽˆ•Ý]\È\ÈÛ›°êY\ÈÙ\›Û˜[œÙ°ê\°êY\È]H]^pêYHÛÛXÝˆÙ]HXÝ[Ûˆ™H]]\È0ê™H[›[0êYKˆ‹Ø\›š[™×Ý]Nˆ]™\\ÜÙ[Y[ˆÜ0ê\˜][Ûˆ\ÝXÝšXÙH‹Ú]ÝÚ[Ø™WÛY\™ÙYˆÙH]ZHÙ\˜H\Ú[Û›°êHˆŸKš[\œÎžØ™Y›Ü™WÛ\ÝÛ[Ûˆ]˜[H[Ú\È\›šY\ˆ‹™Y›Ü™WÝ\×Û[Ûˆ]˜[ÙH[Ú\ËXÚH‹™Y›Ü™WÝ\×ÝÙYZÎˆ]˜[Ù]HÙ[XZ[™H‹X[˜YÙYØžWÛYNˆ‘ðê\°êH\ˆ[ÚH‹ÙX\˜Úˆ”™XÚ\˜Ú\ˆ›ÛK[™\š\ÙK‹‹ˆ‹\×ÝÙYZÎˆÙ]HÙ[XZ[™H‹Ù^Nˆ]Z›Ý\™	ÚZH‹YÜÎˆ°â]\]Y]\È‹\ÚÜÎˆ•0è˜Ú\ÈŸKÝžÙ[\WØÚ[™ÙWÜÝ]\Î˜Ú[™Ù^ˆHÝ]]	Ý[ˆÛÛXÝ[ˆZ›Ý][[™H›ÝH0èÙHÛÛXÝ][ˆÛ\]X[Ý\ˆ˜Y™šXÚ\ˆ\ÈÜ[ÛœÈ‹˜[\WÚ[‰Ó\ÈÛÛXÝÈ]™XÈ[ˆÝ]]˜Ú]Yˆ\\˜pë›ÛXÚK‰Ë]NˆÛÛXÝÈÚ]YÈŸ_KX[ÎžÛ˜[YNˆY™˜Z\™HY™˜Z\™\È‹šY[ÎžÛ˜[YNˆ“›ÛH‹\ØÜš\[ÛŽˆ‘\ØÜš\[Ûˆ‹ÛÛ\[žWÚYˆ‘[™\š\ÙH‹ÛÛXÝÚYÎˆÛÛXÝÈ‹Ø]YÛÜžNˆØ]0êYÛÜšYH‹[[Ý[ˆYÙ]‹^XÝYØÛÜÚ[™×Ù]Nˆ‘]HHÛ0í\™H°ê]YH‹ÝYÙNˆ°â]\HŸKXÝ[ÛŽžØ˜XÚ×Ý×ÙX[ˆ”™]Ý\ˆ0è	ØY™˜Z\™H‹Ü™X]NˆÜ°êY\ˆ[™HY™˜Z\™H‹™]Îˆ“›Ý]™[HY™˜Z\™HŸKšY[ØØ]YÛÜšY\ÎžÛZ\ØÎˆ‘]™\œÈŸK\˜Ú]™YžØXÝ[ÛŽˆ\˜Ú]™\ˆ‹\œ›ÜŽˆ‘\œ™]\ˆˆY™˜Z\™H›Ûˆ\˜Ú]°êYH‹\ÝÝ]NˆY™˜Z\™\È\˜Ú]°êY\È‹ÝXØÙ\ÜÎˆY™˜Z\™H\˜Ú]°êYH‹]NˆY™˜Z\™H\˜Ú]°êYH‹šY]ÎˆY™šXÚ\ˆ\ÈY™˜Z\™\È\˜Ú]°êY\ÈŸK[œ]ÎžÛ[šÙYÝÎˆ“pêH0èŸK[˜\˜Ú]™YžØXÝ[ÛŽˆ”™[›ÞY\ˆ]HX›X]H‹\œ›ÜŽˆ‘\œ™]\ˆˆY™˜Z\™H›Ûˆ0ê\Ø\˜Ú]°êYH‹ÝXØÙ\ÜÎˆY™˜Z\™H0ê\Ø\˜Ú]°êYHŸK\]YˆY™˜Z\™HZ\ÙH0è›Ý\ˆ‹[\NžØ™Y›Ü™WØÜ™X]Nˆ˜]˜[HÜ°êY\ˆ[™HY™˜Z\™Kˆ‹\ØÜš\[ÛŽˆ’[Ù[X›H]YH›Ý™H\ÝH	ØY™˜Z\™\ÈÛÚ]šYKˆ‹]Nˆ]XÝ[™HY™˜Z\™H›Ý]°êYHŸK[˜[YÙ]Nˆ‘]H[˜[YHŸK›Ý\ÎžÛ˜[YNˆ“›ÝH›Ý\È‹›Ü˜ÙYØ\ÙS˜[YNˆ“›ÝH‹šY[ÎžÜÝ]\Îˆ”Ý]]‹]Nˆ‘]H‹]XÚY[Îˆ”pêÙ\È›Ú[\È‹ÛÛXÝÚYˆÛÛXÝ‹X[ÚYˆY™˜Z\™HŸKXÝ[ÛŽžØYˆZ›Ý]\ˆ[™H›ÝH‹YÙš\œÝˆZ›Ý]^ˆ›Ý™H™[Zpê™H›ÝH‹[]Nˆ”Ý\š[Y\ˆH›ÝH‹Y]ˆ“[ÙYšY\ˆH›ÝH‹\]Nˆ“Y]™H0è›Ý\ˆH›ÝH‹YÝ\ÎˆZ›Ý]\ˆÙ]H›ÝHŸKÚY]žØÜ™X]NˆÜ°êY\ˆ[™H›ÝH‹Ü™X]WÙ›ÜŽˆÜ°êY\ˆ[™H›ÝHÝ\ˆ	^Û˜[Y_H‹Y]ˆ“[ÙYšY\ˆH›ÝH‹Y]Ù›ÜŽˆ“[ÙYšY\ˆH›ÝHÝ\ˆ	^Û˜[Y_HŸK[]Yˆ“›ÝHÝ\š[pêYH‹[\Nˆ]XÝ[™H›ÝHÝ\ˆ	Ú[œÝ[‹]]Ü—ØYYˆ‰^Û˜[Y_HHZ›Ý]0êH[™H›ÝH‹[ÝWØYYˆ•›Ý\È]™^ˆZ›Ý]0êH[™H›ÝH‹YNˆ“[ÚH‹\ÝžÙ\œ›Ü—ÛØY[™Îˆ‘\œ™]\ˆÜœÈHÚ\™Ù[Y[\È›Ý\ÈŸK›ÝWÙ›Ü—ØÛÛXÝˆ“›ÝHÝ\ˆ	^Û˜[Y_H‹Ý\\ŽžÚ[ˆXØðêY^ˆ0è[™HYÙHHÛÛXÝ]Z›Ý]^ˆ[™H›ÝHŸKYYˆ“›ÝHZ›Ý]0êYH‹[œ]ÎžØYÛ›ÝNˆZ›Ý]\ˆ[™H›ÝH‹Ü[Ûœ×Ú[ˆŠ›Ú[™™H\ÈšXÚY\œÈÝH[ÙYšY\ˆ\È0ê]Z[ÊH‹ÚÝ×ÛÜ[ÛœÎˆY™šXÚ\ˆ\ÈÜ[ÛœÈŸKXÝ[ÛœÎžØ]XÚÙØÝ[Y[ˆ’›Ú[™™H[ˆØÝ[Y[ŸK˜[Y][ÛŽžÛ›ÝWÛÜ—Ø]XÚY[Ü™\]Z\™Yˆ•[™H›ÝHÝH[™HpêÙH›Ú[H\Ý™\]Z\ÙHŸ_KØ[\ÎžÛ˜[YNˆ•][\Ø]]\ˆ][\Ø]]\œÈ‹šY[ÎžÙš\œÝÛ˜[YNˆ”°ê[›ÛH‹\ÝÛ˜[YNˆ“›ÛH‹[XZ[ˆ‘K[XZ[‹YZ[š\Ý˜]ÜŽˆYZ[ˆ‹\ØX›Yˆ‘0ê\ØXÝ]°êHŸKÜ™X]NžÙ\œ›ÜŽˆ•[™H\œ™]\ˆÉÙ\Ý›ÙZ]HÜœÈHHÜ°êX][ÛˆH	Ý][\Ø]]\‹ˆ‹ÝXØÙ\ÜÎˆ•][\Ø]]\ˆÜ°êpêKˆ[È™XÙ]œ›Û›ØÚZ[™[Y[[ˆ[XZ[Ý\ˆ0êYš[š\ˆ]\ˆ[ÝH\ÜÙKˆ‹]NˆÜ°êY\ˆ[ˆ›Ý]™[][\Ø]]\ˆŸKY]žÙ\œ›ÜŽˆ•[™H\œ™]\ˆÉÙ\Ý›ÙZ]Kˆ™]Z[^ˆ°êY\ÜØ^Y\‹ˆ‹™XÛÜ™Û›ÝÙ›Ý[™ˆ‘[œ™YÚ\Ý™[Y[[›Ý]˜X›H‹ÝXØÙ\ÜÎˆ•][\Ø]]\ˆZ\È0è›Ý\ˆ]™XÈÝXØðêÈ‹]Nˆ“[ÙYšY\ˆ	^Û˜[Y_HŸKXÝ[ÛŽžÛ™]Îˆ“›Ý]™[][\Ø]]\ˆŸ_K\ÚÜÎžÛ˜[YNˆ•0è˜ÚH0è˜Ú\È‹›Ü˜ÙYØ\ÙS˜[YNˆ•0è˜ÚH‹šY[ÎžÝ^ˆ‘\ØÜš\[Ûˆ‹YWÙ]Nˆ‘]H	ðêXÚ0êX[˜ÙH‹\Nˆ•\H‹ÛÛXÝÚYˆÛÛXÝ‹YWÜÚÜˆ°êXÚ0êX[˜ÙHŸKXÝ[ÛŽžØYˆZ›Ý]\ˆ[™H0è˜ÚH‹Ü™X]NˆÜ°êY\ˆ[™H0è˜ÚH‹Y]ˆ“[ÙYšY\ˆH0è˜ÚHŸKXÝ[ÛœÎžÜÜÝÛ™WÛ™^ÝÙYZÎˆ”™\Ü0êH0èHÙ[XZ[™H›ØÚZ[™H‹ÜÝÛ™WÝÛ[Üœ›ÝÎˆ”™\Ü\ˆ0è[XZ[ˆ‹]NˆXÝ[ÛœÈH0è˜ÚHŸKYYˆ•0è˜ÚHZ›Ý]0êYH‹[]Yˆ•0è˜ÚHÝ\š[pêYH]™XÈÝXØðêÈ‹X[ÙÎžØÜ™X]NˆÜ°êY\ˆ[™H0è˜ÚH‹Ü™X]WÙ›ÜŽˆÜ°êY\ˆ[™H0è˜ÚHÝ\ˆ	^Û˜[Y_HŸKÚY]žÙY]ˆ“[ÙYšY\ˆH0è˜ÚH‹Y]Ù›ÜŽˆ“[ÙYšY\ˆH0è˜ÚHÝ\ˆ	^Û˜[Y_HŸK[\Nˆ]XÝ[™H0è˜ÚHÝ\ˆ	Ú[œÝ[‹[\WÛ\ÝÚ[ˆ“\È0è˜Ú\ÈZ›Ý]0êY\È0è›ÜÈÛÛXÝÈ\\˜pë›ÛXÚKˆ‹š[\œÎžÛ]\Žˆ”\È\™‹Ý™\™YNˆ‘[ˆ™]\™‹\×ÝÙYZÎˆÙ]HÙ[XZ[™H‹Ù^Nˆ]Z›Ý\™	ÚZH‹Û[Üœ›ÝÎˆ‘[XZ[ˆ‹Ú]Ü[™[™Îˆ]™XÈ\È0è˜Ú\È[ˆ][HŸK™YØ\™[™×ØÛÛXÝˆŠÛÛ˜Ù\›˜[ˆ	^Û˜[Y_JH‹\]Yˆ•0è˜ÚHZ\ÙH0è›Ý\ˆŸKYÜÎžÛ˜[YNˆ°â]\]Y]H0â]\]Y]\È‹XÝ[ÛŽžØYˆZ›Ý]\ˆ[™H0ê]\]Y]H‹Ü™X]NˆÜ°êY\ˆ[™H›Ý]™[H0ê]\]Y]HŸKX[ÙÎžØÛÛÜŽˆÛÝ[]\ˆ‹Ü™X]WÝ]NˆÜ°êY\ˆ[™H›Ý]™[H0ê]\]Y]H‹Y]Ý]Nˆ“[ÙYšY\ˆ	ðê]\]Y]H‹˜[YWÛX™[ˆ“›ÛHH	ðê]\]Y]H‹˜[YWÜXÙZÛ\Žˆ”ØZ\Ú\ˆH›ÛHH	ðê]\]Y]HŸ__KÜ›NžØXÝ[ÛŽžÜ™\Ù]Ü\ÜÝÛÜ™ˆ”°êZ[š]X[\Ù\ˆH[ÝH\ÜÙHŸK]]žÙš\œÝÛ˜[YNˆ”°ê[›ÛH‹\ÝÛ˜[YNˆ“›ÛH‹ÛÛ™š\›WÜ\ÜÝÛÜ™ˆÛÛ™š\›Y\ˆH[ÝH\ÜÙH‹ÛÛ™š\›X][Û—Ü™\]Z\™Yˆ•™]Z[^ˆÝZ]œ™HHY[ˆ]YH›Ý\È™[›ÛœÈH›Ý\È[›ÞY\ˆ\ˆ[XZ[Ý\ˆÛÛ™š\›Y\ˆ›Ý™HÛÛ\Kˆ‹™XÛÝ™\žWÙ[XZ[ÜÙ[ˆ”ÚH›Ý\È0ê\È[ˆ][\Ø]]\ˆ[œ™YÚ\Ý°êK›Ý\È]œšY^ˆ™XÙ]›Ú\ˆ›ØÚZ[™[Y[[ˆK[XZ[H°êXÝ\0ê\˜][ÛˆH[ÝH\ÜÙKˆ‹ÚYÛ—Ú[—Ù˜Z[Yˆ°âXÚXÈHHÛÛ›™^[Û‹ˆ‹ÚYÛ—Ú[—ÙÛÛÙÛWÝÛÜšÜÜXÙNˆÛÛ›™XÝ^‹]›Ý\È]™XÈÛÛÙÛHÛÜšÜXÙH‹ÚYÛ\žØÜ™X]WØXØÛÝ[ˆÜ°êY\ˆ[ˆÛÛ\H‹Ü™X]WÙš\œÝÝ\Ù\ŽˆÜ°êY^ˆH™[ZY\ˆÛÛ\H][\Ø]]\ˆÝ\ˆ\›Z[™\ˆHÛÛ™šYÝ\˜][Û‹ˆ‹Ü™X][™ÎˆÜ°êX][Û‹‹‹ˆ‹[š]X[Ý\Ù\—ØÜ™X]Yˆ•][\Ø]]\ˆ[š]X[Ü°êpêH]™XÈÝXØðêÈŸKÙ[ÛÛYWÝ]NˆšY[™[YHÝ\ˆ]ÛZXÈÔ“HŸKÛÛ[[ÛŽžØXÝ]š]NˆXÝ]š]0êH‹YYˆ˜Z›Ý]0êYH‹]Z[Îˆ‘0ê]Z[È‹\ÝØXÝ]š]WÝÚ]Ù]Nˆ™\›špê™HXÝ]š]0êH	^Ù]_H‹ØYÛ[Ü™NˆÚ\™Ù\ˆ\È‹Z\ØÎˆ‘]™\œÈ‹\Ýˆ”\ÜðêH‹™XYÛ[Ü™Nˆ‘[ˆØ]›Ú\ˆ\È‹™]žNˆ”°êY\ÜØ^Y\ˆ‹ÚÝ×Û\ÜÎˆY™šXÚ\ˆ[Ú[œÈ‹\Ú×ØÛÝ[ˆ‰^ÜÛX\ØÛÝ[H0è˜ÚH	^ÜÛX\ØÛÝ[H0è˜Ú\È‹ÛÜYYˆÛÜpêHH‹ÛÜNˆÛÜY\ˆ‹ØY[™ÎˆÚ\™Ù[Y[‹‹ˆ‹YNˆ“[ÚHŸKÚ[™Ù[ÙÎžÝ]Nˆ“›Ý\ÈH™\œÚ[ÛˆŸKXÝ]š]NžØYYØÛÛ\[žNˆ‰^Û˜[Y_HHZ›Ý]0êH	Ù[™\š\ÙH‹[ÝWØYYØÛÛ\[žNˆ•›Ý\È]™^ˆZ›Ý]0êH	Ù[™\š\ÙH‹YYØÛÛXÝˆ‰^Û˜[Y_HHZ›Ý]0êHHÛÛXÝ‹[ÝWØYYØÛÛXÝˆ•›Ý\È]™^ˆZ›Ý]0êHHÛÛXÝ‹YYÛ›ÝNˆ‰^Û˜[Y_HHZ›Ý]0êH[™H›ÝHÝ\ˆ‹[ÝWØYYÛ›ÝNˆ•›Ý\È]™^ˆZ›Ý]0êH[™H›ÝHÝ\ˆ‹YYÛ›ÝWØX›Ý]ÙX[ˆ‰^Û˜[Y_HHZ›Ý]0êH[™H›ÝHÝ\ˆ	ØY™˜Z\™H‹[ÝWØYYÛ›ÝWØX›Ý]ÙX[ˆ•›Ý\È]™^ˆZ›Ý]0êH[™H›ÝHÝ\ˆ	ØY™˜Z\™H‹YYÙX[ˆ‰^Û˜[Y_HHZ›Ý]0êH	ØY™˜Z\™H‹[ÝWØYYÙX[ˆ•›Ý\È]™^ˆZ›Ý]0êH	ØY™˜Z\™H‹]ØÛÛ\[žNˆ˜Ú^ˆ‹Îˆ°è‹ØYÛ[Ü™NˆÚ\™Ù\ˆ\È	ØXÝ]š]0êHŸK\Ú›Ø\™žÙX[×ØÚ\ˆ”™]™[\È\ÈY™˜Z\™\È0è™[š\ˆ‹X[×Ü\[[™Nˆ”\[[™H\ÈY™˜Z\™\È‹]\ÝØXÝ]š]Nˆ‘\›špê™HXÝ]š]0êH‹]\ÝØXÝ]š]WÙ\œ›ÜŽˆ‘\œ™]\ˆÜœÈHÚ\™Ù[Y[HH\›špê™HXÝ]š]0êH‹]\ÝÛ›Ý\Îˆ“Y\È\›špê™\È›Ý\È‹]\ÝÛ›Ý\×ØYYØYÛÎˆ˜Z›Ý]0êH	^Ý[YPYÛßH‹Ý\\ŽžÚ[œÝ[ˆ’[œÝ[\ˆ]ÛZXÈÔ“H‹›ÙÜ™\ÜÎˆ‰^ÜÝ\KÌÈ\›Z[°êH‹Ú]×Û™^ˆ‘][œÝZ]HÈŸK\ÛÛZ[™×Ý\ÚÜÎˆ•0è˜Ú\È0è™[š\ˆŸKXY\ŽžÚ[\ÜÙ]Nˆ’[\Ü\ˆ\ÈÛ›°êY\ÈŸK[XYÙWÙY]ÜŽžØÚ[™ÙNˆÚ[™Ù\ˆ‹›ÜÚ[ˆ‘0ê\ÜÙ^ˆ[ˆšXÚY\ˆ0è0ê[0êXÚ\™Ù\ˆÝHÛ\]Y^ˆÝ\ˆHðê[XÝ[Û›™\‹ˆ‹Y]X›WØÛÛ[ˆÛÛ[H[ÙYšXX›H‹]Nˆ•0ê[0êXÚ\™Ù\ˆ]™Y[Y[œÚ[Û›™\ˆ	Ú[XYÙH‹\]WÚ[XYÙNˆ“Y]™H0è›Ý\ˆ	Ú[XYÙHŸK[\ÜžØXÝ[ÛŽžÙÝÛ›ØYÙ\œ›Ü—Ü™\Üˆ•0ê[0êXÚ\™Ù^ˆH˜\Ü	Ù\œ™]\ˆ‹[\Üˆ’[\Ü\ˆ‹[\ÜØ[›Ý\Žˆ’[\Ü\ˆ[ˆ]]™HšXÚY\ˆŸK\œ›ÜŽžÝ[˜X›Nˆ’[\ÜÜÚX›H	Ú[\Ü\ˆÙHšXÚY\‹ˆŸKYNžÙ\ØÜš\[Û—ÌNˆ•›Ý\ÈÝ]™^ˆ[\Ü\ˆ\È™[\Ë\È[™\š\Ù\Ë\ÈÛÛXÝË\È[™\š\Ù\Ë\È›Ý\È]\È0è˜Ú\Ëˆ‹\ØÜš\[Û—ÌŽˆ“\ÈÛ›°êY\ÈÚ]™[ÙH›Ý]™\ˆ[œÈ[ˆšXÚY\ˆ”ÓÓˆÛÜœ™\ÜÛ™[0è	Ù^[\HÝZ]˜[ˆŸKÝ]\ÎžØ[ÜÝXØÙ\ÜÎˆ•Ý\È\È[œ™YÚ\Ý™[Y[ÈÛ0ê]0êH[\Ü0ê\È]™XÈÝXØðêËˆ‹ÛÛ\]Nˆ’[\Ü][Ûˆ\›Z[°êYKˆ‹˜Z[Yˆ°âXÚÝpêH‹[\ÜYˆ’[\Ü0êH‹[—Ü›ÙÜ™\ÜÎˆ’[\Ü[ˆÛÝ\œË™]Z[^ˆ™H\È]Z]\ˆÙ]HYÙKˆ‹ÛÛYWÙ˜Z[YˆÙ\Z[œÈ[œ™YÚ\Ý™[Y[È‰ÛÛ\È0ê]0êH[\Ü0ê\Ëˆ‹X›WØØ\[ÛŽˆ”Ý]]	Ú[\Ü][ÛˆŸK]Nˆ’[\Ü\ˆ\ÈÛ›°êY\ÈŸKÙ][™ÜÎžØX›Ý]ˆ°à›ÜÜÈ‹ÛÛ\[šY\ÎžÜÙXÝÜœÎˆ”ÙXÝ]\œÈŸK\š×Û[ÙWÛÙÛÎˆ“ÙÛÈH[ÙHÛÛXœ™H‹X[ÎžØØ]YÛÜšY\ÎˆØ]0êYÛÜšY\È‹Ý\œ™[˜ÞNˆ‘]š\ÙH‹\[[™WÚ[ˆ”ðê[XÝ[Û›™^ˆ\È0ê]\\È	ØY™˜Z\™H0èÛÛœÚY0ê\™\ˆÛÛ[YH\ÈY™˜Z\™\È[œÈH\[[™Kˆ‹\[[™WÜÝ]\Ù\Îˆ”Ý]]È\È\[[™\È‹ÝYÙ\Îˆ°â]\\ÈŸKYÚÛ[ÙWÛÙÛÎˆ“ÙÛÈH[ÙHÛZ\ˆ‹›Ý\ÎžÜÝ]\Ù\Îˆ”Ý]]ÈŸK™\Ù]ÙY˜][Îˆ”°êZ[š]X[\Ù\ˆ]^˜[]\œÈ\ˆ0êY˜]]‹Ø]™WÙ\œ›ÜŽˆ°âXÚXÈH	Ù[œ™YÚ\Ý™[Y[HHÛÛ™šYÝ\˜][Ûˆ‹Ø]™YˆÛÛ™šYÝ\˜][Ûˆ[œ™YÚ\Ý°êYH]™XÈÝXØðêÈ‹Ø]š[™Îˆ‘[œ™YÚ\Ý™[Y[‹‹ˆ‹\ÚÜÎžÝ\\Îˆ•\\ÈŸK™Y™\™[˜Ù\Îˆ”°êY°ê\™[˜Ù\È‹]Nˆ”\˜[pê™\È‹\Ý]Nˆ•]™HH	Ø\XØ][Ûˆ‹ÙXÝ[ÛœÎžØœ˜[™[™Îˆ’[XYÙHHX\œ]YHŸK˜[Y][ÛŽžÙ\XØ]Nˆ‰^Ù\Ü^WÛ˜[Y_H[ˆÝX›Hˆ	^Ú][\ßH‹[—Ý\ÙNˆ’[\ÜÜÚX›HHÝ\š[Y\ˆ	^Ù\Ü^WÛ˜[Y_H[˜ÛÜ™H][\ðê\È\ˆ\ÈY™˜Z\™\Èˆ	^Ú][\ßH‹˜[Y][™Îˆ•˜[Y][Û¸ )ˆ‹[]Y\ÎžØØ]YÛÜšY\Îˆ˜Ø]0êYÛÜšY\È‹ÝYÙ\Îˆ°ê]\\ÈŸ__K[YNžÙ\šÎˆ”ÛÛXœ™H‹X™[ˆ•0êYH‹YÚˆÛZ\ˆ‹Þ\Ý[Nˆ”Þ\Ý0êYHŸK[™ÝXYÙNˆ“[™ÝYH‹˜]šYØ][ÛŽžÛX™[ˆ“˜]šYØ][ÛˆÔ“HŸK›Ùš[NžÚ[˜›Ý[™žÙ\ØÜš\[ÛŽˆ•›Ý\ÈÝ]™^ˆÛÛ[Y[˜Ù\ˆ0è[›ÞY\ˆ\ÈK[XZ[È™\œÈ	ØY™\ÜÙHH°êXÙ\[ÛˆH›Ý™HÙ\™]\‹\ˆ^[\H[ˆ	ØZ›Ý][]HÚ[\	^ÙšY[Kˆ]ÛZXÈÔ“H˜Z]\˜H\ÈK[XZ[È]Z›Ý]\˜H\È›Ý\È]^ÛÛXÝÈÛÜœ™\ÜÛ™[Ëˆ‹]Nˆ‘K[XZ[[˜[ŸKXÜžÝ]Nˆ”Ù\™]\ˆPÔ‹\ØÜš\[ÛŽˆ•][\Ù^ˆÙ]HT“Ý\ˆÛÛ›™XÝ\ˆ›Ý™H\ÜÚ\Ý[PH]^Û›°êY\ÈH›Ý™HÔ“HšXHH[Ù[ÛÛ^›ÝØÛÛ
PÔ
KˆŸK\ÜÝÛÜ™žØÚ[™ÙNˆÚ[™Ù\ˆH[ÝH\ÜÙHŸK\ÜÝÛÜ™Ü™\Ù]ÜÙ[ˆ•[ˆK[XZ[H°êZ[š]X[\Ø][ÛˆH[ÝH\ÜÙHH0ê]0êH[›ÞpêH0è›Ý™HY™\ÜÙHK[XZ[‹™XÛÜ™Û›ÝÙ›Ý[™ˆ‘[œ™YÚ\Ý™[Y[[›Ý]˜X›H‹]Nˆ”›Ùš[‹\]Yˆ•›Ý™H›Ùš[H0ê]0êHZ\È0è›Ý\ˆ‹\]WÙ\œ›ÜŽˆ•[™H\œ™]\ˆÉÙ\Ý›ÙZ]Kˆ™]Z[^ˆ°êY\ÜØ^Y\ˆŸK˜[Y][ÛŽžÚ[˜[YÝ\›ˆ‘Ú]0ê™H[™HT“˜[YH‹[˜[YÛ[šÙY[—Ý\›ˆ“	ÕT“Ú]›Ý™[š\ˆH[šÙY[‹˜ÛÛHŸ__KÛ^Èœ˜K\Ý\X˜\ÙHŽžØ]]žÜ\ÜÝÛÜ™Ü™\Ù]ˆÚXÚÈ[Ý\ˆ[XZ[È›ÜˆH™\Ù]\ÜÝÛÜ™Y\ÜØYÙKˆŸ__KÛ^Èœ˜K\Ý\X˜\ÙHŽžØ]]žÜ\ÜÝÛÜ™Ü™\Ù]ˆÛÛœÝ[^ˆ›ÜÈ[XZ[ÈÝ\ˆ›Ý]™\ˆHY\ÜØYÙHH™Z[š]X[\Ø][ÛˆH[ÝH\ÜÙKˆŸ__KÞYÜ™J\ÙK›Û[
KYÜ™JÞ‹›Û[
KÛXJ

OO\[Ùˆ˜]šYØ]ÜˆHÈ™[ˆŽŠ˜]šYØ]Ü‹›[™ÝXYÙ\ÏË–ÌOÏÛ˜]šYØ]Ü‹›[™ÝXYÙJOËÓÝÙ\Ø\ÙJ
KœÝ\ÕÚ]
™œˆŠOÈ™œˆŽˆ™[ˆ‹™Ù][š]X[ØØ[HŠK[QÊOO™OOOH™œˆÛ”Þ‹Û

KÞÛØØ[Nˆ™[ˆ‹˜[YNˆ‘[™Û\ÚŸKÛØØ[Nˆ™œˆ‹˜[YNˆ‘œ˜[°éØZ\ÈŸWKØ[ÝÓZ\ÜÚ[™ÎˆLJNÑÊ

OO”Þ‹™[ˆ‹ÞÛØØ[Nˆ™[ˆ‹˜[YNˆ‘[™Û\ÚŸWKØ[ÝÓZ\ÜÚ[™ÎˆLJNØÛÛœÝÝOXJOOžØÛÛœÝÙ\šÓ[ÙSÙÛÎ]N›ŸOUÜŠ
KÜ™Y\™XÝÎœŸOYKÚK×O^\ÙTÝ]JLJKÏ^\ÙT™YŠLJKÏQZJ
KOY

KTÍÊ
K\Š
KOT™J
NÞ\ÙQY™™XÝ


OOžØÛÛœÝ[™]ÈT“ÙX\˜Ú\˜[\ÊËœÙX\˜Ú
NÚYŠJ‹™Ù]
œ\ÜÝÛÜ™™XÛÝ™\žQ[XZ[Ù[ŠOOOHŒHŠ_Ë˜Ý\œ™[
\™]\›ŽÛË˜Ý\œ™[HL
˜Ü›K˜]]œ™XÛÝ™\žWÙ[XZ[ÜÙ[‹Ý\NˆœÝXØÙ\ÜÈ‹Y\ÜØYÙP\™ÜÎž×Îˆ’Yˆ[ÝIÜ™HH™YÚ\Ý\™Y\Ù\‹[ÝHÚÝ[™XÙZ]™HH\ÜÝÛÜ™™XÛÝ™\žH[XZ[ÚÜKˆŸ_JK‹™[]Jœ\ÜÝÛÜ™™XÛÝ™\žQ[XZ[Ù[ŠNØÛÛœÝÏX‹ÔÝš[™Ê
NÝJÜ]˜[YN˜Ëœ]˜[YKÙX\˜Ú—ÏØÉ×ßXˆˆŸKÜ™\XÙNˆLJ_KØËœ]˜[YKËœÙX\˜ÚKJNØÛÛœÝÏXJOžÜÊL
KŠ‹ŠK[Š

OOžÜÊLJ_JK˜Ø]Ú
ÏOžÜÊLJK
\[ÙˆÏOHœÝš[™ÈÝÎ\[ÙˆÏˆHŸ]Ë›Y\ÜØYÙOÈœ˜K˜]]œÚYÛ—Ú[—Ù\œ›ÜˆŽË›Y\ÜØYÙKÝ\Nˆ™\œ›Üˆ‹Y\ÜØYÙP\™ÜÎž×Î\[ÙˆÏOHœÝš[™ÈÝÎÉ‰Ë›Y\ÜØYÙOÝË›Y\ÜØYÙN›ÚY_J_J_Kš[™TÝX›Z]ŠNÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹Z\ØÜ™Y[ˆ›^‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™HÜšYËY[Î™ÜšYXÛÛËLˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™HY[ˆY[›^XÛÛ™Ë[]]YLL^]Ú]H\šÎ˜›Ü™\‹\ˆÎ™›^‹Ú[™[Ž–ÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜XœÛÛ]H[œÙ]L™Ë^š[˜ËNLŸJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ™[]]™H‹LŒ›^][\ËXÙ[\ˆ^[È›Û[YY][H‹Ú[™[Ž–ÛšœÞ
š[YÈ‹ØÛ\ÜÓ˜[YNˆšMˆ\‹Lˆ‹Ü˜Î[›ŸJK—_JW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ\ÝYžKXÙ[\ˆËY[MÎœN‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[ÜXÙK^KMˆÎ›^X]]ÈÎËVÌÍLH‹Ú[™[Ž–ÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ^XÙ[\ˆ‹Ú[™[Ž›šœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^Lž›Û\Ù[ZX›Û˜XÚÚ[™Ë]YÚ‹Ú[™[Ž›Jœ˜K˜]]œÚYÛ—Ú[ˆŠ_J_JKšœÞÊXKØÛ\ÜÓ˜[YNˆœÜXÙK^KN‹Û”ÝX›Z]™ËÚ[™[Ž–ÛšœÞ
›‹ÛX™[ˆœ˜K˜]]™[XZ[‹ÛÝ\˜ÙNˆ™[XZ[‹\Nˆ™[XZ[‹˜[Y]N›J
_JKšœÞ
›‹ÛX™[ˆœ˜K˜]]œ\ÜÝÛÜ™‹ÛÝ\˜ÙNˆœ\ÜÝÛÜ™‹\Nˆœ\ÜÝÛÜ™‹˜[Y]N›J
_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\M‹Ú[™[Ž›šœÞ
™KÝ\NˆœÝX›Z]‹Û\ÜÓ˜[YNˆ˜Ý\œÛÜ‹\Ú[\ˆ‹\ØX›YšKÚ[™[Ž›Jœ˜K˜]]œÚYÛ—Ú[ˆŠ_J_JW_JK[šœÞ
‹ÝÎˆ‹Ù›Ü™ÛÝ\\ÜÝÛÜ™‹Û\ÜÓ˜[YNˆ˜›ØÚÈ^\ÛH^XÙ[\ˆÝ™\Ž[™\›[™H‹Ú[™[Ž›Jœ˜K\Ý\X˜\ÙK˜]]™›Ü™ÛÝÜ\ÜÝÛÜ™‹×Îˆ‘›Ü™ÛÝ\ÜÝÛÜ™ÈŸJ_JW_J_JW_JKšœÞ
\ßJW_J_K“ÙÚ[”YÙHŠKXJ

OOžØÛÛœÝO\[Š
KÙ]N\œ›ÜŽ›‹\Ô[™[™ÎœŸOPÛÊÜ]Y\žRÙ^N–Èš[š]—K]Y\žQ›Ž˜J\Þ[˜Ê
OO™Kš\Ò[š]X[^™Y

Kœ]Y\žQ›ˆŠ_JNÜ™]\›ˆÛšœÞ
YÙKßJN›ÛšœÞ
ÝKßJNÛšœÞ
ÝKßJN›šœÞ
KÝÎˆ‹ÜÚYÛ‹]\ŸJ_K”Ý\YÙHŠK›XJ

OOžØÛÛœÝOT™J
NÜ™]\›ˆšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
œØÚ[™[Ž›šœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë\ÚÜË›˜[YH‹ÜÛX\ØÛÝ[ŒŸJ_J_JKšœÞ
œØÚ[™[Ž›šœÞ
ÙKßJ_JW_J_K“[Øš[U\ÚÜÓ\ÝŠKXJ
ÛÜ[Ž™KÛ“Ü[Ú[™ÙN›ÝRY›ŸJOOžØÛÛœÝV[

KOT™J
KÏXJÏOœŠÜ™\ÛÝ\˜ÙNˆ˜ÛÛXÝÈ‹\NˆœÚÝÈ‹Y˜ÏØÖÑY‹˜ÛÛXÝ×N›ÚYJK™Ù]™Y\™XÝÈŠKÏQšJ˜ÛÛXÝÈŠNÜ™]\›ˆšœÞ
KÜ™\ÛÝ\˜ÙNˆ˜ÛÛXÝÛ›Ý\È‹Y›‹]N›šœÞ
KÜÛÝ\˜ÙN‘Y‹˜ÛÛXÝË™Y™\™[˜ÙNˆ˜ÛÛXÝÈ‹™[™\Ž˜J
Ü™Y™\™[˜ÙT™XÛÜ™˜ßJOO›šœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^›Û\Ù[ZX›Û[˜Ø]H‹Ú[™[Ž˜ÏÚJœ™\ÛÝ\˜Ù\Ë››Ý\ËœÚY]™Y]Ù›Üˆ‹Û˜[YN›ÊÊ_JNšJœ™\ÛÝ\˜Ù\Ë››Ý\ËœÚY]™Y]Š_JKœ™[™\ˆŠ_JK™Y\™XÝ˜J
ËKŠOOœÊŠKœ™Y\™XÝŠKÜ[Ž™KÛ“Ü[Ú[™ÙNXY\XÝ[ÛœÎ›šœÞ
ÛÛ“Ü[Ú[™ÙNÙ]™Y\™XÝÎœßJKÚ[™[Ž›šœÞ
œKßJ_J_K“›ÝQY]ÚY]ŠKXJ
ÛÛ“Ü[Ú[™ÙN™KÙ]™Y\™XÝÎJOOžØÛÛœÝT™J
K[[Š
KØØ[XØÙ\ÜÎš_OSXÊÜ™\ÛÝ\˜ÙNˆ˜ÛÛXÝÛ›Ý\È‹XÝ[ÛŽˆ™[]H‹™XÛÜ™œŸJKÚ[™Q[]NœßOZMÊÜ™XÛÜ™œ‹™\ÛÝ\˜ÙNˆ˜ÛÛXÝÛ›Ý\È‹™Y\™XÝ
ŠK]]][Û“[ÙNˆ[™ØX›HŸJKÏXJ

OOžÙJLJKÊ
_K›Û‘[]HŠNÜ™]\›ˆOÛšœÞÊ‹ØÚ[™[Ž–ÛšœÞ
YØ\ÐÚ[ˆLÚ[™[Ž›šœÞÊ˜]Ûˆ‹Ý\Nˆ˜]Ûˆ‹Û\ÜÓ˜[YNˆ›ÜXÚ]KMÌ˜[œÚ][Û‹[ÜXÚ]HÝ™\Ž›ÜXÚ]KLL›Ý[™Y^È‹Ú[™[Ž–ÛšœÞ
	ËØÛ\ÜÓ˜[YNˆœÚ^™KMˆŸJKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ‹[Û›H‹Ú[™[Ž›Šœ˜K˜XÝ[Û‹›Ü[—ÛY[H‹×Îˆ“[Ü™HŸJ_JW_J_JKšœÞ
Y‹Ø[YÛŽˆ™[™‹Ú[™[Ž›šœÞÊXKÝ˜\šX[ˆ™\ÝXÝ]™H‹Û\ÜÓ˜[YNˆšLLˆYšNMYœLˆ^X˜\ÙHY^\ÛH‹Û”Ù[XÝ›ËÚ[™[Ž–ÛšœÞ
ËßJKŠœ˜K˜XÝ[Û‹™[]HŠW_J_JW_JN›[K“›ÝQY]Y[P]ÛˆŠK[XJ

OOžØÛÛœÝOT™J
KÚY›ÝRY›ŸOP•J
KÜ‹WO^\ÙTÝ]JLJKÏQšJ˜ÛÛXÝÈŠKÙ]N›Ë\Ô[™[™Î˜ßO[
˜ÛÛXÝÛ›Ý\È‹ÚY›ŸJKÚY[]N_OSŠ
K[ÏËœØ[\×ÚYOO]OËšY\
ÏËœØ[\×ÚYÙ[˜X›Y›É‰ˆYŸJNÜ™]\›ˆß[ÏÛ[›šœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
ÛÜ[Žœ‹Û“Ü[Ú[™ÙNšK›ÝRY›ËšYJKšœÞÊœØÚ[™[Ž–ÛšœÞ
“‹ÝÎ˜ØÛÛXÝËÉÝKÜÚÝØJKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^LHZ[‹]ËL‹Ú[™[Ž›šœÞ
‹ÝÎ˜ØÛÛXÝËÉÝKÜÚÝØÛ\ÜÓ˜[YNˆ™›^LHZ[‹]ËL‹Ú[™[Ž›šœÞ
šH‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^^›Û\Ù[ZX›Û‹Ú[™[Ž›šœÞ
KÜ™XÛÜ™›Ë™\ÛÝ\˜ÙNˆ˜ÛÛXÝÛ›Ý\È‹ÛÝ\˜ÙNˆ˜ÛÛXÝÚY‹™Y™\™[˜ÙNˆ˜ÛÛXÝÈ‹[šÎˆLK™[™\Ž˜J
Ü™Y™\™[˜ÙT™XÛÜ™›_JOO›OÙJœ™\ÛÝ\˜Ù\Ë››Ý\Ë››ÝWÙ›Ü—ØÛÛXÝ‹Û˜[YNœÊJ_JN›[œ™[™\ˆŠKÚ[™[Ž›šœÞ
ÐËÜ™\ÛÝ\˜ÙNˆ˜ÛÛXÝÈŸJ_J_J_J_JKšœÞÊ™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ™ÚÜÝ‹Ú^™NˆšXÛÛˆ‹Û\ÜÓ˜[YNˆœ›Ý[™YY[‹ÛÛXÚÎ˜J

OOšJL
K›ÛÛXÚÈŠKÚ[™[Ž–ÛšœÞ
ÚËØÛ\ÜÓ˜[YNˆœÚ^™KMHŸJKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆœÜ‹[Û›H‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë››Ý\Ë˜XÝ[Û‹™Y]Š_JW_JW_JKšœÞÊœØÚ[™[Ž–ÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹M‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆÜXÙK^LˆËY[^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–ÛšœÞÊœÜ[ˆ‹ØÚ[™[Ž–ÙÙJœ™\ÛÝ\˜Ù\Ë››Ý\Ë›YHŠNšˆ—_JKËœÝ]\É‰›šœÞ
™‹ÜÝ]\Î›ËœÝ]\ßJKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LHŸJKšœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\šYÚ‹Ú[™[Ž–ÛšœÞ
[YH‹Ù]U[YN›Ë™]KÚ[™[ŽœÎJË™]J_JKˆ‹°­È‹šœÞ
ÛÙ]N›Ë™]_JW_JW_J_JKË^	‰›šœÞ
•ØÛ\ÜÓ˜[YNˆ^\ÛH‹Ú[™[Ž›Ë^JKË˜]XÚY[É‰›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]M‹Ú[™[Ž›šœÞ
ZKÛ›ÝN›ßJ_JW_JW_J_K“›ÝTÚÝÔYÙHŠKTÏVÞÝ˜[YNˆ››Û™H‹X™[ˆ“›È\Ú[Y[‹\˜][ÛŽŒKÝ˜[YNˆš[œÜXÝ[Ûˆ‹X™[ˆ’[œÜXÝ[Ûˆ‹\˜][ÛŽŽLKÝ˜[YNˆ™\Ý[X]K]š\Ú]‹X™[ˆ‘\Ý[X]HÈ][ÝHš\Ú]‹\˜][ÛŽŒKÝ˜[YNˆ˜ÛÛ˜XÝ[YY][™È‹X™[ˆÛÛ˜XÝÈÚYÛš[™È‹\˜][ÛŽŒÌKÝ˜[YNˆœ›ÙXÝ[Û‹]ÛÜšÈ‹X™[ˆ”›ÙXÝ[ÛˆÈ™\Z\ˆ‹\˜][ÛŽŒKÝ˜[YNˆ™›ÛÝË]\‹X™[ˆ‘›ÛÝË]\‹\˜][ÛŽŒÌWKÛXJ
O[™]È]JOOžØÛÛœÝ[™]È[‘]U[YQ›Ü›X]
™[‹PÐH‹Ý[YV›Û™Nˆ[Y\šXØKÐÚXØYÛÈ‹YX\Žˆ›[Y\šXÈ‹[ÛˆŒ‹YYÚ]‹^NˆŒ‹YYÚ]ŸJK™›Ü›X]Ô\ÊJKXJO™š[™
OOšK\OOO\ŠOË˜[YOÏÈˆ‹™Ù]ŠNÜ™]\›˜	ÛŠžYX\ˆŠ_KIÛŠ›[ÛŠ_KIÛŠ™^HŠ_XK˜Ù[˜[]RÙ^HŠK›XJOOžØÛÛœÝYÛ

K[™]È]J	ÝULŽŒŒ˜
K[™]È[‘]U[YQ›Ü›X]
™[‹UTÈ‹Ý[YV›Û™Nˆ•UÈ‹ÙYZÙ^NˆœÚÜ‹[ÛˆœÚÜ‹^Nˆ›[Y\šXÈ‹YX\Žˆ›[Y\šXÈŸJKOP\œ˜^K™œ›ÛJÛ[™ÝŽL_K
ËÊOOžØÛÛœÝÏ[™]È]JŠNÜ™]\›ˆËœÙ]UÑ]JË™Ù]UÑ]J
JÛÊKÝ˜[YN˜ËÒTÓÔÝš[™Ê
KœÛXÙJL
KX™[œ‹™›Ü›X]
Ê__JNÚYŠI‰ˆZKœÛÛYJÏOœË˜[YOOOYJJ^ØÛÛœÝÏ[™]È]J	Ù_ULŽŒŒ˜
NÓ[X™\‹š\Ó˜SŠË™Ù][YJ
J_K[œÚY
Ý˜[YN™KX™[œ‹™›Ü›X]
Ê_J_\™]\›ˆ_K˜\Ú[Y[]PÚÚXÙ\ÈŠK[P\œ˜^K™œ›ÛJÛ[™ÝŒŒßK
K
OOžØÛÛœÝMŒ
Ý
ŒÌSX]™›ÛÜŠ‹ÍŒ
KO[‰MŒÏX	ÔÝš[™ÊŠKœYÝ\
‹ŒŠ_N‰ÔÝš[™ÊJKœYÝ\
‹ŒŠ_XÏ[™]È[‘]U[YQ›Ü›X]
™[‹UTÈ‹ÚÝ\Žˆ›[Y\šXÈ‹Z[]NˆŒ‹YYÚ]‹[YV›Û™Nˆ•UÈŸJK™›Ü›X]
™]È]J]K•UÊŒ‹K‹JJJNÜ™]\›žÝ˜[YNœËX™[›ß_JK™OXJOO“TË™š[™
O˜[YOOOYJOË›X™[ÏÈ\Ú[Y[‹˜\Ú[Y[X™[ŠK™OXJOO›™]È[‘]U[YQ›Ü›X]
™[‹UTÈ‹Ý[YV›Û™Nˆ[Y\šXØKÐÚXØYÛÈ‹[ÛˆœÚÜ‹^Nˆ›[Y\šXÈ‹YX\Žˆ›[Y\šXÈ‹Ý\Žˆ›[Y\šXÈ‹Z[]NˆŒ‹YYÚ]‹[YV›Û™S˜[YNˆœÚÜŸJK™›Ü›X]
™]È]JJJK™›Ü›X]\Ú[Y[ŠK›XJOOžÚYŠYJ\™]\›ˆˆŽØÛÛœÝ[™]È]JJK[™]È[‘]U[YQ›Ü›X]
™[‹PÐH‹Ý[YV›Û™Nˆ[Y\šXØKÐÚXØYÛÈ‹YX\Žˆ›[Y\šXÈ‹[ÛˆŒ‹YYÚ]‹^NˆŒ‹YYÚ]‹Ý\ŽˆŒ‹YYÚ]‹Z[]NˆŒ‹YYÚ]‹Ý\ÞXÛNˆšŒÈŸJK™›Ü›X]Ô\Ê
KXJOO›‹™š[™
ÏOœË\OOOZJOË˜[YOÏÈˆ‹™Ù]ŠNÜ™]\›˜	ÜŠžYX\ˆŠ_KIÜŠ›[ÛŠ_KIÜŠ™^HŠ_U	ÜŠšÝ\ˆŠ_N‰ÜŠ›Z[]HŠ_XKÑ]U[YSØØ[ŠK™OXJOOžÚYŠYJ\™]\›ˆˆŽØÛÛœÝÝ—OYKœÜ]
•ŠKÜ‹K×O]œÜ]
‹HŠK›X\
[X™\ŠKÛË×O[‹œÜ]
ŽˆŠK›X\
[X™\ŠKO[™]È]J]K•UÊ‹KLKËËÊJK[™]È[‘]U[YQ›Ü›X]
™[‹UTÈ‹Ý[YV›Û™Nˆ[Y\šXØKÐÚXØYÛÈ‹YX\Žˆ›[Y\šXÈ‹[ÛˆŒ‹YYÚ]‹^NˆŒ‹YYÚ]‹Ý\ŽˆŒ‹YYÚ]‹Z[]NˆŒ‹YYÚ]‹Ý\ÞXÛNˆšŒÈŸJK™›Ü›X]Ô\ÊJKXJO“[X™\Š‹™š[™
ÏOË\OOOXŠOË˜[YOÏÌ
K™Ù]ŠKÏQ]K•UÊ
žYX\ˆŠK
›[ÛŠKLK
™^HŠK
šÝ\ˆŠK
›Z[]HŠJK]K™Ù][YJ
NÜ™]\›ˆ™]È]JK™Ù][YJ
KYÊKÒTÓÔÝš[™Ê
_K˜Ù[˜[]U[YUÒ\ÛÈŠK]™OXJ
ÚY™Yš^™K˜[YNÛÚ[™ÙN›‹\ØX›YœHL_JOOžØÛÛœÝÚOHˆ‹ÏHˆ—O]œÜ]
•ŠKÏ^\ÙSY[[Ê

OO›
JKÚWJKÏXJO›Š	ÙŸU	ÜßŒNŒŸX
KœÙ]]HŠKOXJO›Š	Ú_U	ÙŸX
KœÙ][YHŠNÜ™]\›ˆšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽ˜	Ù_KY]XÚ[™[Žˆ‘]HŸJKšœÞÊ˜KÝ˜[YNš_›ÚYÛ•˜[YPÚ[™ÙN˜Ë\ØX›Yœ‹Ú[™[Ž–ÛšœÞ
ØKÚY˜	Ù_KY]XÛ\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KÜXÙZÛ\ŽˆÚÛÜÙH]HŸJ_JKšœÞ
ØKØÚ[™[Ž›Ë›X\
O›šœÞ
›‹Ý˜[YN™‹˜[YKÚ[™[Ž™‹›X™[K‹˜[YJJ_JW_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽ˜	Ù_K][YXÚ[™[Žˆ•[YHŸJKšœÞÊ˜KÝ˜[YNœß›ÚYÛ•˜[YPÚ[™ÙNK\ØX›YœŸZKÚ[™[Ž–ÛšœÞ
ØKÚY˜	Ù_K][YXÛ\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KÜXÙZÛ\ŽˆÚÛÜÙH[YHŸJ_JKšœÞ
ØKØÚ[™[Žž[›X\
O›šœÞ
›‹Ý˜[YN™‹˜[YKÚ[™[Ž™‹›X™[K‹˜[YJJ_JW_JW_JW_J_K\Ú[Y[]U[YTÙ[XÝŠKVÈ‹œˆ‹‹™ØÈ‹‹™ØÞ‹‹žÈ‹‹žÞ‹‹˜ÜÝˆ‹‹‹˜\XØ][Û‹Üˆ‹˜\XØ][Û‹Û\ÝÛÜ™‹˜\XØ][Û‹Ý›™›Ü[ž[›Ü›X]Ë[Ù™šXÙYØÝ[Y[ÛÜ™›ØÙ\ÜÚ[™Û[™ØÝ[Y[‹˜\XØ][Û‹Ý›™›\ËY^Ù[‹˜\XØ][Û‹Ý›™›Ü[ž[›Ü›X]Ë[Ù™šXÙYØÝ[Y[œÜ™XYÚY][œÚY]‹^ØÜÝˆ‹^ÜZ[ˆ‹š[XYÙKÊˆ—Kš›Ú[Š‹ŠKÏXJOO™OÐ\œ˜^K™œ›ÛJJK›X\
OŠÜ˜]Ñš[NÜ˜Î•T“˜Ü™X]SØš™XÝT“

K]N›˜[YK\N\_JJN–×K™š[\ÕÐ]XÚY[ÈŠKSÏXJ
ÚY™Kš[\ÎÛ‘š[\Î›‹Û”™[[Ý™Nœ‹ÛÛ\XÝšOHLKX™[œÏH•\ØYØÝ[Y[ÈŸJOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[Ž–ÛšœÞ
š[œ]‹ÚY™K\Nˆ™š[H‹XØÙ\ž][\NˆLÛ\ÜÓ˜[YNˆœÜ‹[Û›H‹ÛÚ[™ÙN˜JÏOžÛŠË\™Ù]™š[\ÊKË\™Ù]˜[YOHˆŸK›ÛÚ[™ÙHŠ_JKšœÞ
™KØ\ÐÚ[ˆL˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNšOÈˆŽˆËY[ÛNËX]]È‹Ú[™[Ž›šœÞÊ›X™[‹Ú[›ÜŽ™KÛ\ÜÓ˜[YNˆ˜Ý\œÛÜ‹\Ú[\ˆ‹Ú[™[Ž–ÛšœÞ
ÍËßJKˆ‹×_J_JK›[™ÝÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\Lˆ‹Ú[™[Ž›X\

ËÊOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ›Ý[™Y[Y›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™LÈ‹Ú[™[Ž–ÛšœÞ
MËØÛ\ÜÓ˜[YNˆœÚ^™KMHÚš[šËL^\š[X\žHŸJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û[YY][H‹Ú[™[Ž›Ë]_JKšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–ÛË\_‘ØÝ[Y[‹Ëœ˜]Ñš[OËœÚ^™OØ0­È	ÝÛ
Ëœ˜]Ñš[KœÚ^™J_Xˆˆ—_JW_JKšœÞ
Ü‹Ý˜\šX[ˆ›Ý][™H‹Ú[™[Žˆ”™XYHŸJKšœÞ
™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ™ÚÜÝ‹Ú^™NˆšXÛÛˆ‹˜\šXK[X™[Ž˜™[[Ý™H	ÛË]_XÛÛXÚÎ˜J

OOœŠÊK›ÛÛXÚÈŠKÚ[™[Ž›šœÞ
YßJ_JW_K	ÛË]_KIØßX
J_JN›[_JK‘ØÝ[Y[\ØYŠKÛXJOO™OLØ	Ù_H˜™OL
ŒLØ	ÓX]œ›Ý[™
KÌL
_HÐ˜˜	ÊKÊL
ŒL
JKÑš^Y
J_HP˜™›Ü›X]š[TÚ^™HŠKŽVÞÚÙ^Nˆœ›ÛÙš[™È‹X™[ˆ”›ÛÙš[™È‹\ØÜš\[ÛŽˆ‘^\š[Üˆ›ÛÙˆ[œÜXÝ[Ûˆ[™›ÛÙˆÛÜšÈ‹XÛÛŽ•ßKÚÙ^NˆœÚY[™ËY^\š[Üˆ‹X™[ˆ”ÚY[™ÈÈ^\š[Üˆ‹\ØÜš\[ÛŽˆ”ÚY[™Ëš[KÝ]\œËÜ[š[™ÜË[™^\š[Üˆ[™[ÜH‹XÛÛŽ—ÖKÚÙ^Nˆ™^\š[Ü‹XØ\œ[žH‹X™[ˆ‘^\š[ÜˆØ\œ[žH‹\ØÜš\[ÛŽˆ”˜Y\ˆZ[ËXÚÚ[™Ë˜\ØÚXKÛÙ™š][™ÝXÝ\˜[™\Z\œÈ‹XÛÛŽ˜S™_KÚÙ^Nˆš[\š[Üˆ‹X™[ˆ’[\š[Üˆ‹\ØÜš\[ÛŽˆ‘ž]Ø[ÙZ[[™ÜËZ[š[K[™š[š\Ú\È‹XÛÛŽ–L™_KÚÙ^Nˆ™[XÝšXØ[‹X™[ˆ‘[XÝšXØ[‹\ØÜš\[ÛŽˆ‘]šXÙ\Ëš^\™\ËÚ\š[™Ë[™[Ë[™Ù\šXÙHÛÜšÈ‹XÛÛŽ‰™_KÚÙ^Nˆœ[Xš[™È‹X™[ˆ”[Xš[™È‹\ØÜš\[ÛŽˆ•˜[™\ËÛ›ØœËš^\™\ËÝ\KØ\ÝK[™™\Z\œÈ‹XÛÛŽ“Ù_KÚÙ^Nˆ[H‹X™[ˆ•[H‹\ØÜš\[ÛŽˆ”ÝXœÝ˜]K^[Ý][KÜ›Ý]Ø]\œ›ÛÙš[™Ë[™š[š\Ú‹XÛÛŽ™S™_KÚÙ^Nˆ›Ý\ˆ‹X™[ˆ“Ý\ˆ‹\ØÜš\[ÛŽˆ•ÛÜšÈ]Ù\È›Ýš][›Ý\ˆ˜YH‹XÛÛŽ—ÖWKOVÞÚÙ^Nˆœ›ÛÙ‹\›Ü\H‹]Nˆ”›Ü\HY[YšXØ][Ûˆ‹\ØÜš\[ÛŽˆ‘\ÝX›\ÚH›Ü\H[™]™\žH^\š[Üˆ[]˜][Û‹ˆ‹][\Î–È‘œ›ÛÙˆ›Ü\HÚ]HY™\ÜÈš\ÚX›HÚ[ˆÜÜÚX›H‹‘œ›Û™X\‹Y[™šYÚ[]˜][ÛœÈ‹‘Ü›Ý[™[]™[Ý™\šY]ÈÚÝÚ[™È›ÛÙˆÚ\H[™XØÙ\ÜÈ—_KÚÙ^Nˆœ›ÛÙ‹\Þ\Ý[H‹]Nˆ”›ÛÙˆÞ\Ý[H[™YX\Ý\™[Y[È‹\ØÜš\[ÛŽˆ”ÚÝÈH›ÛÙˆÛÛœÝXÝ[Ûˆ[™H˜XÝÈ]Yš[™HHØÛÜKˆ‹][\Î–È“Ý™\šY]ÈÙˆ]™\žH›ÛÙˆÛÜH‹”]ÚØ]YÙH™XY[™È[™ÝÜžHZYÚ‹”›ÛÙˆX]\šX[^ÜÝ\™K[™š\ÚX›H^Y\ˆÛÝ[‹“YX\Ý\™[Y[ËÚÙ]ÚÜˆ]X[]H]šY[˜ÙHÚ]™XYÝ]š\ÚX›H—_KÚÙ^Nˆœ›ÛÙ‹Y[XYÙH‹]Nˆ‘[XYÙHžHÛÜH‹\ØÜš\[ÛŽˆ”›Ý™HØØ][Ûˆ[™Ù]™\š]HÚ]ÚYKZYK[™ÛÜÙHšY]ÜËˆ‹][\Î–È•\ÝÜ]X\™HÜˆ[XYÙHÛÝ[ÛˆXXÚY™™XÝYÛÜH‹’Z[[\XÝÈX\šÙY[™ÝÙÜ˜\YÚ]ØØ[H‹•Ú[™Ü™X\Ù\ËYYXœËÙX[œ™XZÜËÜˆZ\ÜÚ[™ÈX]\šX[‹”šYÙK\YÙK[™˜ZÙHÛÛ™][ÛœÈ—_KÚÙ^Nˆœ›ÛÙ‹XÛÛ\Û™[È‹]NˆÛÛ\Û™[È[™ÛÛ]\˜[‹\ØÜš\[ÛŽˆ‘ØÝ[Y[][\È]Y™™XÝ™\Z\ˆØÛÜHÜˆÝ\ÜH[XYÙH™XÛÜ™ˆ‹][\Î–È‘Ý]\œËÝÛœÜÝ]ËØÜ™Y[œË[™ÛÙY][È‹‘š\YÙKX]™\Ë˜ZÙ\Ë˜[^\Ë[™›\Ú[™È‹Ú[[™^\Ë\H›ÛÝË™[ËÚÞ[YÚË[™[™]˜][ÛœÈ‹XØÙ\ÜÈ™\ÝšXÝ[ÛœË]XÚX[™\™\Ù]][\Ë[™[\ÝX[ÛÛ™][ÛœÈ—_WK]OVÞÚÙ^NˆÛÜšË[Ý™\šY]È‹]Nˆ”›Ü\H[™ÛÜšÈ\™XH‹\ØÜš\[ÛŽˆ”ÚÝÈH›Ü\K›ÛÛK[]˜][Û‹Üˆ[ÛÜšÈ\™XH[ˆÛÛ^ˆ‹][\Î–È•ÚYHÝ™\šY]È‹•ÛÜšËX\™XHØØ][Ûˆ‹Y˜XÙ[›ÝXÝY\™X\È—_KÚÙ^NˆÛÜšËY[XYÙH‹]Nˆ‘[XYÙH[™^\Ý[™ÈÛÛ™][ÛœÈ‹\ØÜš\[ÛŽˆ•\ÙHÚYKZYK[™ÛÜÙHšY]ÜÈ›Üˆ]™\žHÛÛ™][Û‹ˆ‹][\Î–È‘[XYÙHØØ][Ûˆ‹ÛÜÙH]Z[‹”™[]YÝ\œ›Ý[™[™ÈÛÛ™][Ûˆ—_KÚÙ^NˆÛÜšË[YX\Ý\™[Y[È‹]Nˆ“YX\Ý\™[Y[È[™]X[]Y\È‹\ØÜš\[ÛŽˆ’ÙY\H\K[\‹Ø]YÙKX™[Üˆ™XYÝ]š\ÚX›Kˆ‹][\Î–È“Ý™\˜[[Y[œÚ[Ûˆ‹”™\Z\‹X\™XH[Y[œÚ[Ûˆ‹”]X[]HÜˆÛÝ[—_KÚÙ^NˆÛÜšËXÛÛ\Û™[È‹]NˆÛÛ\Û™[È[™Y[YšXØ][Ûˆ‹\ØÜš\[ÛŽˆØ\\™HH^XÝ\È™YYYÈY[YžH[™™\Z\ˆH][Kˆ‹][\Î–È•˜[™\ËÛ›ØœËš^\™\ËÜˆÛÛ›™XÝ[ÛœÈ‹“X]\šX[[Ù[X™[Üˆ›Ùš[H‹XØÙ\ÜÈ[™]XÚY[Ú[È—_WKÛXJOOžØÛÛœÝ[™]È]NÜ™]\›ˆœÙ]]J™Ù]]J
JÙJKÒTÓÔÝš[™Ê
KœÜ]
•ŠVÌ_KÙ^T\Ñ^\ÈŠK[^ØÝ\ÝÛY\“˜[YNˆˆ‹Û™Nˆˆ‹[XZ[ˆˆ‹XYÛÝ\˜ÙNˆˆ‹Ý™Y]ˆˆ‹Ú]Nˆˆ‹Ý]Nˆ•ˆ‹š\ÛÙNˆˆ‹›Ü\U\Nˆœ™\ÚY[X[‹Ø]YÛÜžNˆœ™]Z[‹ÝYÙNˆ›XY‹\ØÜš\[ÛŽˆˆ‹\™Ù]]N—Û
Ì
KØ\œšY\Žˆˆ‹ÛZ[S[X™\Žˆˆ‹]SÙ“ÜÜÎˆˆ‹[žU\Nˆ›™]Ë[XY‹›ÛZ\ÙY[[Ý[ˆˆ‹›Ø•˜[YNˆˆ‹\Ú[Y[\Nˆ››Û™H‹\Ú[Y[Ý\ˆˆ‹\Ú[Y[\˜][ÛŽˆŽLŸKÝ™OXJ

OOžØÛÛœÝO\[Š
KÚY[]NOSŠ
K\Š
KV˜J
KOZ›Ê
KØØ[XØÙ\ÜÎœßOSXÊÜ™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\ÝŸJKÛË×O^\ÙTÝ]J[
KÝK—O^\ÙTÝ]J›™]ÈŠKÚWO^\ÙTÝ]JˆŠKÙË—O^\ÙTÝ]JˆŠKÝË×O^\ÙTÝ]J×JKÑK—O^\ÙTÝ]J×JKÚ‹WO^\ÙTÝ]JLJKÙ]N•V×_O]œŠ˜ÛÛXÝÈ‹Ùš[\ŽžßKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒYLßKÛÜžÙšY[ˆ›\ÝÛ˜[YH‹Ü™\ŽˆTÐÈŸ_JKÙ]N‘V×_O]œŠ˜ÛÛ\[šY\È‹Ùš[\ŽžßKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒYLßKÛÜžÙšY[ˆ›˜[YH‹Ü™\ŽˆTÐÈŸ_JKÏU™š[™
O”Ýš[™ÊšY
OOOZ
KQ™š[™
O”Ýš[™ÊšY
OOOYÊKÏXJ
JOO˜ÊÏOŠË‹‹’ËÒN–_JJK\]HŠKO^\ÙSY[[Ê

OOžØÛÛœÝ]OOOH™^\Ý[™È‰‰“ÏØ	ÓË™š\œÝÛ˜[Y_H	ÓË›\ÝÛ˜[Y_Xš[J
N›Ë˜Ý\ÝÛY\“˜[YKš[J
_“™]ÈÝ\ÝÛY\ˆ‹O]OOOH™^\Ý[™È‰‰”Ô˜Y™\Üß›˜[YN›ËœÝ™Y]š[J
_“™]È›Ü\HŽÜ™]\›˜	ÒHH	Ö_XKÝKË˜Ý\ÝÛY\“˜[YKËœÝ™Y]ËJK	XJOžÛJ
NØÛÛœÝOU™š[™
ÏO”Ýš[™ÊËšY
OOOR
NØŠOË˜ÛÛ\[žWÚYO[[ÈˆŽ”Ýš[™ÊK˜ÛÛ\[žWÚY
J_KœÙ[XÝ^\Ý[™ÐÝ\ÝÛY\ˆŠKXJO—ÊOO–Kš[˜ÛY\Ê
OÖK™š[\ŠÏO’ÈOOR
N–Ë‹‹–KJKÙÙÛU˜YHŠKOXJOžØÛÛœÝOROOH™\Ý[X]K\™\]Y\ÝÈœ›ÜÜXÝXšY[™ÈŽ’OOH˜YÜ™YYXØ\ÚZ›ØˆÈ˜]Ø\™Ž’OOH™^\Ý[™ËZ›ØˆÈ˜Z[[™Ë[ZY\›ÙXÝ[ÛˆŽˆ›XYŽØÊÏOŠË‹‹’Ë[žU\N’ÝYÙN–_JJ_K˜Ú[™ÙQ[žU\HŠKXJOžØÛÛœÝOSTË™š[™
ÏO’Ë˜[YOOOR
NØÊÏOŠË‹‹’Ë\Ú[Y[\N’\Ú[Y[\˜][ÛŽ–OË™\˜][ÛÔÝš[™ÊK™\˜][ÛŠN’Ë˜\Ú[Y[\˜][ÛŸJJ_K˜Ú[™ÙP\Ú[Y[\HŠKÏXJO”ŠOO–Ë‹‹–K‹‹“Ê
WJK˜YØÝ[Y[ÈŠKOXJO”ŠOOžØÛÛœÝÏVVÒNÜ™]\›ˆÉ‰•T“œ™]›ÚÙSØš™XÝT“
ËœÜ˜ÊKK™š[\Š
ËYJOO™YHOOR
_JKœ™[[Ý™QØÝ[Y[ŠKXJ\Þ[˜ÈOžÒœ™]™[Y˜][

NØÛÛœÝÙš\œÝ˜[YN–K\Ý˜[YN’ßOTÛ
Ë˜Ý\ÝÛY\“˜[YJNÚYŠOOOH›™]È‰‰ŠV_Rß[ËœÝ™Y]š[J
_[Ë˜Ú]Kš[J
JJ^ÛŠ‘[\ˆHÝ\ÝÛY\¸ &\È[˜[YKÝ™Y]Y™\ÜË[™Ú]Kˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸZYŠOOOH™^\Ý[™È‰‰ŠSßT
J^ÛŠÚÛÜÙHH^\Ý[™ÈÝ\ÝÛY\ˆ[™H›Ü\H›Üˆ\È›Ø‹ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸZYŠË˜\Ú[Y[\HOOH››Û™H‰‰ˆ[Ë˜\Ú[Y[Ý\
^ÛŠÚÛÜÙHH\Ú[Y[]H[™[YKÜˆÙ[XÝ›È\Ú[Y[ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÛÛœÝÏS[X™\ŠË˜\Ú[Y[\˜][ÛŠNÚYŠË˜\Ú[Y[\HOOH››Û™H‰‰ŠS[X™\‹š\Ñš[š]JÊ_ÏL
J^ÛŠ‘[\ˆH\Ú[Y[\˜][Û‹ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÛÛœÝYOS[X™\ŠËš›Ø•˜[YJNÚYŠÈ˜YÜ™YYXØ\ÚZ›Øˆ‹™^\Ý[™ËZ›Øˆ—Kš[˜ÛY\ÊË™[žU\JI‰ŠS[X™\‹š\Ñš[š]JYJ_YOL
J^ÛŠ‘[\ˆHYÜ™YYÜˆ^\Ý[™È›Øˆ˜[YHÛÈ™]™[YH\È˜XÚÙYˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÛÛœÝ[Ëœ›ÛZ\ÙY[[Ý[š[J
OÓ[X™\ŠËœ›ÛZ\ÙY[[Ý[
NŒÚYŠS[X™\‹š\Ñš[š]JŠ_
^ÛŠ‘[\ˆH˜[Y›ÛZ\ÙY[[Ý[ÜˆX]™H]›[šËˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸPJL
NÝž^ØÛÛœÝ[™]È]J
KÒTÓÔÝš[™Ê
KYOVÈ˜YÜ™YYXØ\ÚZ›Øˆ‹™^\Ý[™ËZ›Øˆ—Kš[˜ÛY\ÊË™[žU\JOÈÛÛˆŽˆ›Ü[ˆ‹ÙO[Ë˜\Ú[Y[\OOOHš[œÜXÝ[Ûˆ‰‰–È›XY‹œ›ÜÜXÝXšY[™È—Kš[˜ÛY\ÊËœÝYÙJOÈš[œÜXÝ[Û‹\ØÚY[YŽ›ËœÝYÙNÛ]OTËšYYOSÏËšYÚYŠOOOH›™]È‰‰ŠOJ]ØZ]K˜Ü™X]J˜ÛÛ\[šY\È‹Ù]NžÛ˜[YN›ËœÝ™Y]š[J
KÙXÝÜŽ›Ëœ›Ü\U\KÚ^™NŒKY™\ÜÎ›ËœÝ™Y]š[J
KÚ]N›Ë˜Ú]Kš[J
KÝ]WØX˜œŽ›ËœÝ]Kš[J
KÕ\\Ø\ÙJ
Kš\ÛÙN›Ëžš\ÛÙKš[J
KÛÝ[žNˆ•TÐH‹Û™WÛ[X™\Žˆˆ‹ÙXœÚ]Nˆˆ‹[šÙY[—Ý\›ˆˆ‹\ØÜš\[ÛŽ˜	ÛË˜Ý\ÝÛY\“˜[YKš[J
_H›Ü\X™]™[YNˆˆ‹^ÚY[YšY\Žˆˆ‹ÛÛ^Û[šÜÎ–×KØ[\×ÚYËšY_JJK™]KšYYOJ]ØZ]K˜Ü™X]J˜ÛÛXÝÈ‹Ù]NžÙš\œÝÛ˜[YN–K\ÝÛ˜[YN’ËÛÛ\[žWÚY™KÛ™WÚœÛÛ˜Ž›ËœÛ™Kš[J
OÖÞÛ[X™\Ž›ËœÛ™Kš[J
K\Nˆ’ÛYHŸWN–×K[XZ[ÚœÛÛ˜Ž›Ë™[XZ[š[J
OÖÞÙ[XZ[›Ë™[XZ[š[J
K\Nˆ’ÛYHŸWN–×Kš\œÝÜÙY[Ž’‹\ÝÜÙY[Ž’‹]Nˆˆ‹Ù[™\Žˆˆ‹Ý]\Îˆ˜XÝ]™H‹˜XÚÙÜ›Ý[™›Ë›XYÛÝ\˜ÙKš[J
OØXYÛÝ\˜ÙNˆ	ÛË›XYÛÝ\˜ÙKš[J
_Xˆˆ‹]˜]\ŽžßK\×Û™]ÜÛ]\ŽˆLKYÜÎ–×K[šÙY[—Ý\››[Ø[\×ÚYËšY_JJK™]KšY
KOO[[YOO[[
]›ÝÈ™]È\œ›ÜŠ•HÝ\ÝÛY\ˆ[™›Ü\HÛÝ[›Ý™HÛÛ›™XÝYˆŠNØÛÛœÝÙOX]ØZ]K˜Ü™X]J™X[È‹Ù]NžÛ˜[YN“KÛÛ\[žWÚY™KÛÛXÝÚYÎ–ÝYWKØ]YÛÜžN›Ë˜Ø]YÛÜžKÝYÙN›ÙK\ØÜš\[ÛŽ›Ë™\ØÜš\[Û‹š[J
K[[Ý[šYOOOHÛÛˆÙYNŒ›ÛZ\ÙYØ[[Ý[–‹^XÝYØÛÜÚ[™×Ù]N›Ë\™Ù]]KØ[\×ÚYËšY[™^Œ\Ý[X]WÙ\ÜÜÚ][ÛŽˆ[™XÚYY‹ÛÜš×Ý˜Y\ÎËØ\œšY\Ž›Ë˜Ø]YÛÜžOOOHš[œÝ\˜[˜ÙHÛË˜Ø\œšY\‹š[J
N›[ÛZ[WÛ[X™\Ž›Ë˜Ø]YÛÜžOOOHš[œÝ\˜[˜ÙHÛË˜ÛZ[S[X™\‹š[J
N›[]WÛÙ—ÛÜÜÎ›Ë˜Ø]YÛÜžOOOHš[œÝ\˜[˜ÙH‰‰›Ë™]SÙ“ÜÜÏÛË™]SÙ“ÜÜÎ›[[žWÝ\N›Ë™[žU\KØ[\×ÛÝ]ÛÛYNšYK\Ú[Y[Ý\N›Ë˜\Ú[Y[\OOOH››Û™HÛ[›Ë˜\Ú[Y[\K\Ú[Y[ÜÝ\›Ë˜\Ú[Y[\OOOH››Û™HÛ[œ™JË˜\Ú[Y[Ý\
K\Ú[Y[Ù\˜][Û—ÛZ[]\Î›Ë˜\Ú[Y[\OOOH››Û™HÛ[‘Ë\Ú[Y[ÛÝ]ÛÛYN›Ë˜\Ú[Y[\OOOH››Û™HÛ[ˆœØÚY[Y‹\Ú[Y[Ý[Y^›Û™N›Ë˜\Ú[Y[\OOOH››Û™HÛ[ˆ[Y\šXØKÐÚXØYÛÈŸ_JNÚYŠË˜\Ú[Y[\HOOH››Û™HŠ]ž^Ø]ØZ]KœÞ[˜ÑÛÛÙÛPØ[[™\ŠÙK™]KšY
_XØ]Ú
J^ÛŠ\Ú[Y[Ø]™Y[ˆHÔ“H]›Ý[ˆÛÛÙÛHØ[[™\‹ˆ	ÜH[œÝ[˜Ù[Ùˆ\œ›ÜÜK›Y\ÜØYÙNˆÛÛ›™XÝHØ[[™\ˆœ›ÛH\È›Ø‹ˆŸXÝ\NˆØ\›š[™ÈŸJ_[]™OHLÝž^Ø]ØZ]K™[œÝ\™U™[ÐØ\™
ÙK™]KšY
_XØ]Ú
J^Ù™OHLKŠH›ØˆØ\ÈØ]™Y]]È™[Èš[H\ÈÝ[[™[™Ë‰ÑK›[™ÝÈˆØÝ[Y[ÈÙ\™H›Ý\ØYYˆŽˆˆŸH	ÜH[œÝ[˜Ù[Ùˆ\œ›ÜÜK›Y\ÜØYÙNˆˆŸXš[J
KÝ\NˆØ\›š[™ÈŸJ_QK›[™Ý	‰™™I‰˜]ØZ]K˜Ü™X]J™X[Û›Ý\È‹Ù]NžÙX[ÚYÙK™]KšY\Nˆš[ZÙKYØÝ[Y[È‹^˜“ÐˆS•RÑHÐÕSQS•Â‰ÑK›X\
OOœK]JKš›Ú[Š˜
_X]N’‹Ø[\×ÚYËšY]XÚY[Î‘__JKK™›Ü‘XXÚ
OO•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜ÊJKŠOOOH™^\Ý[™ÈÈ“™]È›ØˆYYÈH^\Ý[™ÈÝ\ÝÛY\ˆš[KˆŽˆÝ\ÝÛY\‹›Ü\K[™›ØˆÜ™X]YÙÙ]\‹ˆ‹Ý\NˆœÝXØÙ\ÜÈŸJKJ
KŠÙX[ËÉÝÙK™]KšYKÜÚÝØ
_XØ]Ú
Š^ÛŠˆ[œÝ[˜Ù[Ùˆ\œ›ÜÒ‹›Y\ÜØYÙNˆ•H›ØˆÛÝ[›Ý™HÜ™X]Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ_Yš[˜[^ÐJLJ__Kš[™TÝX›Z]ŠNÜ™]\›ˆšœÞ
›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈËY[X^]ËVÌLŒHLˆ‹LLLˆ‹Ú[™[Ž›šœÞÊ™›Ü›H‹ÛÛ”ÝX›Z]•‹Û\ÜÓ˜[YNˆœÜXÙK^KMH‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\LÈ›Ý[™Y^›Ü™\ˆ™ËXØ\™MHÚYÝË\ÛHÛN™›^\›ÝÈÛNš][\ËXÙ[\ˆÛNš\ÝYžKX™]ÙY[ˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
Ü‹ØÚ[™[Žˆ“Û™K\Ý\[ZÙHŸJKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž“_JW_JKšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^Lž›ÛX›Û˜XÚÚ[™Ë]YÚ‹Ú[™[ŽˆÜ™X]HH™]È›ØˆŸJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ“Û™HØ]™HÜ™X]\È[™ÛÛ›™XÝÈHÝ\ÝÛY\‹›Ü\K[™›Ø‹ˆŸJW_JKšœÞ
™KØ\ÐÚ[ˆL\Nˆ˜]Ûˆ‹˜\šX[ˆ›Ý][™H‹Ú[™[Ž›šœÞ
‹ÝÎˆ‹È‹Ú[™[ŽˆØ[˜Ù[ŸJ_JW_JKšœÞÊÌKÚXÛÛŽ›šœÞ
ÙKßJK]NˆÝ\ÝÛY\ˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹MÜšYÜšYXÛÛËLˆØ\Lˆ›Ý[™Y[È™Ë[]]YLH‹Ú[™[Ž–ÛšœÞ
™KÝ\Nˆ˜]Ûˆ‹˜\šX[OOOH›™]ÈÈ™Y˜][Žˆ™ÚÜÝ‹ÛÛXÚÎ˜J

OO™Š›™]ÈŠK›ÛÛXÚÈŠKÚ[™[Žˆ“™]ÈÝ\ÝÛY\ˆŸJKšœÞ
™KÝ\Nˆ˜]Ûˆ‹˜\šX[OOOH™^\Ý[™ÈÈ™Y˜][Žˆ™ÚÜÝ‹ÛÛXÚÎ˜J

OO™Š™^\Ý[™ÈŠK›ÛÛXÚÈŠKÚ[™[Žˆ‘^\Ý[™ÈÝ\ÝÛY\ˆŸJW_JKOOOH™^\Ý[™ÈÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MÛN™ÜšYXÛÛËLˆ‹Ú[™[Ž–ÛšœÞ
˜KÛX™[ˆÝ\ÝÛY\ˆ‹[›ÜŽˆ™^\Ý[™ËXÝ\ÝÛY\ˆ‹™\]Z\™YˆLÚ[™[Ž›šœÞÊ˜KÝ˜[YNšÛ•˜[YPÚ[™ÙN‰Ú[™[Ž–ÛšœÞ
ØKÚYˆ™^\Ý[™ËXÝ\ÝÛY\ˆ‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KÜXÙZÛ\ŽˆÚÛÜÙHÝ\ÝÛY\ˆŸJ_JKšœÞ
ØKØÚ[™[Ž•›X\
O›šœÞÊ›‹Ý˜[YN”Ýš[™ÊšY
KÚ[™[Ž–Ò›\ÝÛ˜[YK‹‹™š\œÝÛ˜[YW_KšY
J_JW_J_JKšœÞ
˜KÛX™[ˆ”›Ü\H›Üˆ\È›Øˆ‹[›ÜŽˆ™^\Ý[™Ë\›Ü\H‹™\]Z\™YˆLÚ[™[Ž›šœÞÊ˜KÝ˜[YN™ËÛ•˜[YPÚ[™ÙN˜‹\ØX›YˆZÚ[™[Ž–ÛšœÞ
ØKÚYˆ™^\Ý[™Ë\›Ü\H‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KÜXÙZÛ\ŽˆÚÛÜÙH›Ü\HŸJ_JKšœÞ
ØKØÚ[™[Ž‘›X\
O›šœÞÊ›‹Ý˜[YN”Ýš[™ÊšY
KÚ[™[Ž–Ò˜Y™\Üß›˜[YK˜Ú]OØ	Ò˜Ú]_Xˆˆ—_KšY
J_JW_J_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆœÛN˜ÛÛ\Ü[‹Lˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ•\ÈÜ™X]\È[›Ý\ˆ\Ý[˜Ý›ØˆÚ]Ý]\XØ][™ÈHÝ\ÝÛY\‹ˆš[[™È[™ÛÜÝÈ™[XZ[ˆÙ\\˜]HžH›Ø‹ˆŸJW_JN›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MÛN™ÜšYXÛÛËLˆ‹Ú[™[Ž–ÛšœÞ
˜KÛX™[ˆÝ\ÝÛY\ˆ[˜[YH‹[›ÜŽˆ˜Ý\ÝÛY\‹[˜[YH‹™\]Z\™YˆLÚ[™[Ž›šœÞ
‹ÚYˆ˜Ý\ÝÛY\‹[˜[YH‹˜[YN›Ë˜Ý\ÝÛY\“˜[YKÛÚ[™ÙN˜JOšÊ˜Ý\ÝÛY\“˜[YH‹\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\Žˆ’›Úˆ\[ˆ‹]]ÐÛÛ\]Nˆ›˜[YHŸJ_JKšœÞ
˜KÛX™[ˆ“XYÛÝ\˜ÙH‹[›ÜŽˆ›XY\ÛÝ\˜ÙH‹Ú[™[Ž›šœÞ
‹ÚYˆ›XY\ÛÝ\˜ÙH‹˜[YN›Ë›XYÛÝ\˜ÙKÛÚ[™ÙN˜JOšÊ›XYÛÝ\˜ÙH‹\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\Žˆ”™Y™\œ˜[˜XÙX›ÛÚËØ[˜\ÜÚ[™Ë™\X]Ý\ÝÛY\ˆŸJ_JKšœÞ
˜KÛX™[ˆ”Û™H‹[›ÜŽˆ˜Ý\ÝÛY\‹\Û™H‹Ú[™[Ž›šœÞ
‹ÚYˆ˜Ý\ÝÛY\‹\Û™H‹\Nˆ[‹˜[YN›ËœÛ™KÛÚ[™ÙN˜JOšÊœÛ™H‹\™Ù]˜[YJK›ÛÚ[™ÙHŠK]]ÐÛÛ\]Nˆ[ŸJ_JKšœÞ
˜KÛX™[ˆ‘[XZ[‹[›ÜŽˆ˜Ý\ÝÛY\‹Y[XZ[‹Ú[™[Ž›šœÞ
‹ÚYˆ˜Ý\ÝÛY\‹Y[XZ[‹\Nˆ™[XZ[‹˜[YN›Ë™[XZ[ÛÚ[™ÙN˜JOšÊ™[XZ[‹\™Ù]˜[YJK›ÛÚ[™ÙHŠK]]ÐÛÛ\]Nˆ™[XZ[ŸJ_JW_JW_JKOOOH›™]ÈÛšœÞ
ÌKÚXÛÛŽ›šœÞ
ËßJK]Nˆ”›Ü\H‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MÛN™ÜšYXÛÛËLˆÎ™ÜšYXÛÛËMˆ‹Ú[™[Ž–ÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÛN˜ÛÛ\Ü[‹LˆÎ˜ÛÛ\Ü[‹LÈ‹Ú[™[Ž›šœÞ
˜KÛX™[ˆ”Ý™Y]Y™\ÜÈ‹[›ÜŽˆœ›Ü\K\Ý™Y]‹™\]Z\™YˆLÚ[™[Ž›šœÞ
‹ÚYˆœ›Ü\K\Ý™Y]‹˜[YN›ËœÝ™Y]ÛÚ[™ÙN˜JOšÊœÝ™Y]‹\™Ù]˜[YJK›ÛÚ[™ÙHŠK]]ÐÛÛ\]NˆœÝ™Y]XY™\ÜÈŸJ_J_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Î˜ÛÛ\Ü[‹Lˆ‹Ú[™[Ž›šœÞ
˜KÛX™[ˆÚ]H‹[›ÜŽˆœ›Ü\KXÚ]H‹™\]Z\™YˆLÚ[™[Ž›šœÞ
‹ÚYˆœ›Ü\KXÚ]H‹˜[YN›Ë˜Ú]KÛÚ[™ÙN˜JOšÊ˜Ú]H‹\™Ù]˜[YJK›ÛÚ[™ÙHŠK]]ÐÛÛ\]Nˆ˜Y™\ÜË[]™[ˆŸJ_J_JKšœÞ
˜KÛX™[ˆ”Ý]H‹[›ÜŽˆœ›Ü\K\Ý]H‹Ú[™[Ž›šœÞ
‹ÚYˆœ›Ü\K\Ý]H‹˜[YN›ËœÝ]KÛÚ[™ÙN˜JOšÊœÝ]H‹\™Ù]˜[YJK›ÛÚ[™ÙHŠK]]ÐÛÛ\]Nˆ˜Y™\ÜË[]™[HŸJ_JKšœÞ
˜KÛX™[ˆ–’TÛÙH‹[›ÜŽˆœ›Ü\K^š\‹Ú[™[Ž›šœÞ
‹ÚYˆœ›Ü\K^š\‹˜[YN›Ëžš\ÛÙKÛÚ[™ÙN˜JOšÊžš\ÛÙH‹\™Ù]˜[YJK›ÛÚ[™ÙHŠK]]ÐÛÛ\]NˆœÜÝ[XÛÙHŸJ_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Î˜ÛÛ\Ü[‹Lˆ‹Ú[™[Ž›šœÞ
˜KÛX™[ˆ”›Ü\H\H‹[›ÜŽˆœ›Ü\K]\H‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN›Ëœ›Ü\U\KÛ•˜[YPÚ[™ÙN˜JOšÊœ›Ü\U\H‹
K›Û•˜[YPÚ[™ÙHŠKÚ[™[Ž–ÛšœÞ
ØKÚYˆœ›Ü\K]\H‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆœ™\ÚY[X[‹Ú[™[Žˆ”™\ÚY[X[ŸJKšœÞ
›‹Ý˜[YNˆ˜ÛÛ[Y\˜ÚX[‹Ú[™[ŽˆÛÛ[Y\˜ÚX[ŸJW_JW_J_J_JW_J_JN›[šœÞÊÌKÚXÛÛŽ›šœÞ
šËßJK]Nˆ’›Øˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MÛN™ÜšYXÛÛËLˆÎ™ÜšYXÛÛËM‹Ú[™[Ž–ÛšœÞ
˜KÛX™[ˆ‘[\š[™È\È‹[›ÜŽˆ™[žK]\H‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN›Ë™[žU\KÛ•˜[YPÚ[™ÙN˜JO•J
K›Û•˜[YPÚ[™ÙHŠKÚ[™[Ž–ÛšœÞ
ØKÚYˆ™[žK]\H‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆ›™]Ë[XY‹Ú[™[Žˆ“™]ÈXYŸJKšœÞ
›‹Ý˜[YNˆ™\Ý[X]K\™\]Y\Ý‹Ú[™[Žˆ‘\Ý[X]H™\]Y\ÝYŸJKÏÛšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆ˜YÜ™YYXØ\ÚZ›Øˆ‹Ú[™[ŽˆYÜ™YYØ\Ú›ØˆŸJKšœÞ
›‹Ý˜[YNˆ™^\Ý[™ËZ›Øˆ‹Ú[™[Žˆ‘^\Ý[™ÈÈY\‹]KY˜XÝ›ØˆŸJW_JN›[_JW_J_JKšœÞ
˜KÛX™[ˆ’›Øˆ\H‹[›ÜŽˆš›Ø‹XØ]YÛÜžH‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN›Ë˜Ø]YÛÜžKÛ•˜[YPÚ[™ÙN˜JOšÊ˜Ø]YÛÜžH‹
K›Û•˜[YPÚ[™ÙHŠKÚ[™[Ž–ÛšœÞ
ØKÚYˆš›Ø‹XØ]YÛÜžH‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆœ™]Z[‹Ú[™[Žˆ”™]Z[ŸJKšœÞ
›‹Ý˜[YNˆš[œÝ\˜[˜ÙH‹Ú[™[Žˆ’[œÝ\˜[˜ÙHŸJKšœÞ
›‹Ý˜[YNˆ˜ÛÛ[Y\˜ÚX[‹Ú[™[ŽˆÛÛ[Y\˜ÚX[ŸJKšœÞ
›‹Ý˜[YNˆœ›Ü\K[XZ[[˜[˜ÙH‹Ú[™[Žˆ”›Ü\HXZ[[˜[˜ÙHŸJKšœÞ
›‹Ý˜[YNˆš[\›˜[X˜\\ˆ‹Ú[™[Žˆ’[\›˜[È˜\\ˆŸJKšœÞ
›‹Ý˜[YNˆ›Ý\ˆ‹Ú[™[Žˆ“Ý\ˆŸJW_JW_J_JKšœÞ
˜KÛX™[ˆ•\™Ù]]H‹[›ÜŽˆ\™Ù]Y]H‹Ú[™[Ž›šœÞ
‹ÚYˆ\™Ù]Y]H‹\Nˆ™]H‹˜[YN›Ë\™Ù]]KÛÚ[™ÙN˜JOšÊ\™Ù]]H‹\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKÈ˜YÜ™YYXØ\ÚZ›Øˆ‹™^\Ý[™ËZ›Øˆ—Kš[˜ÛY\ÊË™[žU\JOÛ[›šœÞÊ˜KÛX™[ˆ”›ÛZ\ÙY[[Ý[‹[›ÜŽˆœ›ÛZ\ÙYX[[Ý[‹Ú[™[Ž–ÛšœÞ
‹ÚYˆœ›ÛZ\ÙYX[[Ý[‹\Nˆ›[X™\ˆ‹Z[ŽˆŒ‹Ý\ˆŒŒH‹˜[YN›Ëœ›ÛZ\ÙY[[Ý[ÛÚ[™ÙN˜JOšÊœ›ÛZ\ÙY[[Ý[‹\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\ŽˆŒŒŸJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ”Ø[\È›Ü™XØ\ÝÛ›Kˆ\ÈÙ\È›ÝX\šÈH›ØˆÛÛˆÜˆÙ]HÚYÛ™YÛÛ˜XÝ˜[YKˆŸJW_JKÉ‰›Ë™[žU\OOOH™^\Ý[™ËZ›ØˆÛšœÞ
˜KÛX™[ˆÝ\œ™[ÝYÙH‹[›ÜŽˆš›Ø‹\ÝYÙH‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN›ËœÝYÙKÛ•˜[YPÚ[™ÙN˜JOšÊœÝYÙH‹
K›Û•˜[YPÚ[™ÙHŠKÚ[™[Ž–ÛšœÞ
ØKÚYˆš›Ø‹\ÝYÙH‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆ˜]Ø\™‹Ú[™[Žˆ•ÛÛˆÈ]Ø\™YŸJKšœÞ
›‹Ý˜[YNˆ˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹Ú[™[Žˆ”›ÙXÝ[ÛˆŸJKšœÞ
›‹Ý˜[YNˆš[›ÚXÙY‹Ú[™[Žˆ’[›ÚXÙYŸJKšœÞ
›‹Ý˜[YNˆœ^[Y[X\œ˜[™Ù[Y[‹Ú[™[Žˆ”^[Y[\œ˜[™Ù[Y[ŸJKšœÞ
›‹Ý˜[YNˆ˜˜[[˜ÙKYYH‹Ú[™[Žˆ˜[[˜ÙHYHŸJKšœÞ
›‹Ý˜[YNˆœZYZ[‹Y[‹Ú[™[Žˆ”ZY[ˆ[ŸJW_JW_J_JN›[É‰–È˜YÜ™YYXØ\ÚZ›Øˆ‹™^\Ý[™ËZ›Øˆ—Kš[˜ÛY\ÊË™[žU\JOÛšœÞ
˜KÛX™[ˆ’›Øˆ˜[YH‹[›ÜŽˆš›Ø‹]˜[YH‹Ú[™[Ž›šœÞ
‹ÚYˆš›Ø‹]˜[YH‹\Nˆ›[X™\ˆ‹Z[ŽˆŒ‹Ý\ˆŒŒH‹˜[YN›Ëš›Ø•˜[YKÛÚ[™ÙN˜JOšÊš›Ø•˜[YH‹\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\ŽˆŒŒŸJ_JN›[_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MH‹Ú[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ•ÛÜšÈXÚØYÙ\ÈŸJKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LˆÜšYØ\LˆÛN™ÜšYXÛÛËLˆÎ™ÜšYXÛÛËM‹Ú[™[ŽŽ›X\
O›šœÞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ™›^Ý\œÛÜ‹\Ú[\ˆ][\Ë\Ý\Ø\Lˆ›Ý[™Y[Y›Ü™\ˆLÈ^\ÛH‹Ú[™[Ž–ÛšœÞ
ÝËØÚXÚÙYËš[˜ÛY\ÊšÙ^JKÛÚXÚÙYÚ[™ÙN˜J

OO‘ŠšÙ^JK›ÛÚXÚÙYÚ[™ÙHŠ_JKšœÞÊœÜ[ˆ‹ØÚ[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈ›Û[YY][H‹Ú[™[Ž’›X™[JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž’™\ØÜš\[ÛŸJW_JW_KšÙ^JJ_JW_JKË˜Ø]YÛÜžOOOHš[œÝ\˜[˜ÙHÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MHÜšYØ\MÛN™ÜšYXÛÛËLÈ‹Ú[™[Ž–ÛšœÞ
˜KÛX™[ˆ’[œÝ\˜[˜ÙHØ\œšY\ˆ‹[›ÜŽˆ˜Ø\œšY\ˆ‹Ú[™[Ž›šœÞ
‹ÚYˆ˜Ø\œšY\ˆ‹˜[YN›Ë˜Ø\œšY\‹ÛÚ[™ÙN˜JOšÊ˜Ø\œšY\ˆ‹\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
˜KÛX™[ˆÛZ[H[X™\ˆ‹[›ÜŽˆ˜ÛZ[K[[X™\ˆ‹Ú[™[Ž›šœÞ
‹ÚYˆ˜ÛZ[K[[X™\ˆ‹˜[YN›Ë˜ÛZ[S[X™\‹ÛÚ[™ÙN˜JOšÊ˜ÛZ[S[X™\ˆ‹\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
˜KÛX™[ˆ‘]HÙˆÜÜÈ‹[›ÜŽˆ™]K[Ù‹[ÜÜÈ‹Ú[™[Ž›šœÞ
‹ÚYˆ™]K[Ù‹[ÜÜÈ‹\Nˆ™]H‹˜[YN›Ë™]SÙ“ÜÜËÛÚ[™ÙN˜JOšÊ™]SÙ“ÜÜÈ‹\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JW_JN›[šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]MH‹Ú[™[Ž›šœÞ
˜KÛX™[ˆ’[š]X[ØÛÜH[™›Ý\È‹[›ÜŽˆš›Ø‹Y\ØÜš\[Ûˆ‹Ú[™[Ž›šœÞ
Ó‹ÚYˆš›Ø‹Y\ØÜš\[Ûˆ‹˜[YN›Ë™\ØÜš\[Û‹ÛÚ[™ÙN˜JOšÊ™\ØÜš\[Ûˆ‹\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\Žˆ•Ú]\[™YÚ]Ø\ÈØœÙ\™Y\Ú[Y[]Z[Ë[™ÛÜšÈ™Z[™ÈÛÛœÚY\™Y‹Û\ÜÓ˜[YNˆ›Z[‹ZLŽ^X˜\ÙHŸJ_J_JW_JKšœÞÊÌKÚXÛÛŽ›šœÞ
ÕßJK]Nˆ\Ú[Y[‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹M^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ“X]™H\È[\HÚ[ˆ›Èš\Ú]\È™YYYˆ[œÜXÝ[ÛœÈY˜][ÈLZ[]\È[™\ÙHÙ[˜[[YKˆŸJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MÛN™ÜšYXÛÛËLˆÎ™ÜšYXÛÛËM‹Ú[™[Ž–ÛšœÞ
˜KÛX™[ˆ\Ú[Y[\H‹[›ÜŽˆ˜\Ú[Y[]\H‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN›Ë˜\Ú[Y[\KÛ•˜[YPÚ[™ÙNž‹Ú[™[Ž–ÛšœÞ
ØKÚYˆ˜\Ú[Y[]\H‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞ
ØKØÚ[™[Ž“TË›X\
O›šœÞ
›‹Ý˜[YN’˜[YKÚ[™[Ž’›X™[K˜[YJJ_JW_J_JKË˜\Ú[Y[\HOOH››Û™HÛšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
]™KÚY™Yš^ˆ˜\Ú[Y[\Ý\‹˜[YN›Ë˜\Ú[Y[Ý\ÛÚ[™ÙN˜JOšÊ˜\Ú[Y[Ý\‹
K›ÛÚ[™ÙHŠ_JKšœÞ
˜KÛX™[ˆ‘\˜][Ûˆ[ˆZ[]\È‹[›ÜŽˆ˜\Ú[Y[Y\˜][Ûˆ‹Ú[™[Ž›šœÞ
‹ÚYˆ˜\Ú[Y[Y\˜][Ûˆ‹\Nˆ›[X™\ˆ‹Z[ŽˆŒMH‹Ý\ˆŒMH‹˜[YN›Ë˜\Ú[Y[\˜][Û‹ÛÚ[™ÙN˜JOšÊ˜\Ú[Y[\˜][Ûˆ‹\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËY[™‹Lˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ\Ú[Y[ÈÞ[˜ÈÈÛÛÙÛHØ[[™\ˆÚ[ˆÛÛ›™XÝYˆŸJW_JN›[_JW_JKšœÞÊÌKÚXÛÛŽ›šœÞ
MËßJK]Nˆ’[š]X[ØÝ[Y[È‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽˆYØ\œšY\ˆØÛÜ\ËYX\Ý\™[Y[™\ÜË\Ý[X]\ËœËÛÜ™š[\ËÜ™XYÚY]ËÜˆÝ\Ü[™È[XYÙ\È›ÝËˆ^HÚ[™H]XÚYÈH™]È›Ø‹ˆŸJKšœÞ
SËÚYˆ›™]ËZ›Ø‹YØÝ[Y[È‹š[\Î‘KÛ‘š[\Î•ËÛ”™[[Ý™Nœ_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÝXÚÞH›ÝÛKL›^\ÝYžKY[™Ø\Lˆ›Ü™\‹]™ËX˜XÚÙÜ›Ý[™ÎMHKM˜XÚÙ›ÜX›\ˆ‹Ú[™[Ž–ÛšœÞ
™KØ\ÐÚ[ˆL\Nˆ˜]Ûˆ‹˜\šX[ˆ›Ý][™H‹Ú[™[Ž›šœÞ
‹ÝÎˆ‹È‹Ú[™[ŽˆØ[˜Ù[ŸJ_JKšœÞÊ™KÝ\NˆœÝX›Z]‹Ú^™Nˆ›È‹\ØX›Yš‹Ú[™[Ž–ÚÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJKÜ™X]HÝ\ÝÛY\‹›Ü\K[™›Øˆ—_JW_JW_J_J_K“™]Ò›Ø’[ZÙHŠKÌOXJ
ÚXÛÛŽ™K]NÚ[™[Ž›ŸJOO›šœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ™Ø\M‹Ú[™[Ž–ÛšœÞ
ØKØÛ\ÜÓ˜[YNˆœ‹L‹Ú[™[Ž›šœÞÊØKØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ^[È‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\š[X\žHÉœÝ™×NœÚ^™KMH‹Ú[™[Ž™_JK_J_JKšœÞ
‹ØÚ[™[Ž›ŸJW_JK’[ZÙPØ\™ŠK˜OXJ
ÛX™[™K[›ÜŽ™\]Z\™Y›HLKÚ[™[ŽœŸJOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞÊÚKÚ[›ÜŽÚ[™[Ž–ÙKÈˆ
ˆŽˆˆ—_JK—_JK‘›Ü›QšY[ŠKÛXJOOžØÛÛœÝYKš[J
KœÜ]
×ÊËÊK™š[\Š›ÛÛX[ŠNÜ™]\›ˆ›[™ÝÞÙš\œÝ˜[YNÌOÏÈˆ‹\Ý˜[YNˆˆŸNžÙš\œÝ˜[YNœÛXÙJLJKš›Ú[ŠˆŠK\Ý˜[YN˜]
LJOÏÈˆŸ_KœÜ]Ý\ÝÛY\“˜[YHŠKÔ[™]ÈÙ]
È˜]Ø\™‹˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹š[›ÚXÙY‹œ^[Y[X\œ˜[™Ù[Y[‹˜˜[[˜ÙKYYH‹œZYZ[‹Y[—JKOVÞÝ˜[YNˆš[›ÚXÙY‹X™[ˆ’[›ÚXÙYŸKÝ˜[YNˆœ^[Y[X\œ˜[™Ù[Y[‹X™[ˆ”^[Y[\œ˜[™Ù[Y[ŸKÝ˜[YNˆ˜˜[[˜ÙKYYH‹X™[ˆ˜[[˜ÙHYHŸWKÛVÞÝ˜[YNˆ[™XÚYY‹X™[ˆ•[™XÚYYŸKÝ˜[YNˆ˜Z[[›ÝÈ‹X™[ˆZ[\Ý[X]H›ÝÈŸKÝ˜[YNˆ˜Z[[]\ˆ‹X™[ˆZ[\Ý[X]H]\ˆŸKÝ˜[YNˆ™ØÝ[Y[][Û‹[Û›H‹X™[ˆ‘ØÝ[Y[][ÛˆÛ›HŸKÝ˜[YNˆ˜ÛZ[K]ÛÜšÙ›ÝÈ‹X™[ˆÛZ[HÛÜšÙ›ÝÈŸKÝ˜[YNˆšÛ‹X™[ˆ’ÛŸKÝ˜[YNˆ˜ÛÜÙH‹X™[ˆÛÜÙHÚ]Ý]\Ý[X]HŸWKOVÞÝ˜[YNˆ›X]\šX[‹X™[ˆ“X]\šX[ŸKÝ˜[YNˆ›X›Üˆ‹X™[ˆ“X›ÜˆŸKÝ˜[YNˆœÝX˜ÛÛ˜XÝÜˆ‹X™[ˆ”ÝX˜ÛÛ˜XÝÜˆŸKÝ˜[YNˆœ\›Z]‹X™[ˆ”\›Z]È™YHŸKÝ˜[YNˆ›Ý\ˆ‹X™[ˆ“Ý\ˆŸWKOXJ

OO›™]È]J
KÒTÓÔÝš[™Ê
KœÜ]
•ŠVÌKÙ^HŠKÝOXJOO™KÓØØ[TÝš[™Ê™[‹UTÈ‹ÜÝ[Nˆ˜Ý\œ™[˜ÞH‹Ý\œ™[˜ÞNˆ•TÑŸJK›[Û™^IˆŠKOXJ
K
OOžØÛÛœÝÛ‹‹WOYKœÜ]
‹HŠK›X\
[X™\ŠKÏ\‹LJÝÏ[ŠÓX]™›ÛÜŠËÌLŠKÏJÉLLŠÌLŠILL‹O[™]È]J]K•UÊËÊÌK
JK™Ù]UÑ]J
NÜ™]\›ˆ™]È]J]K•UÊËËX]›Z[ŠKJJJKÒTÓÔÝš[™Ê
KœÜ]
•ŠVÌ_K˜Y[ÛÈŠK™OXJ

OOžØÛÛœÝÚY™_OP•J
NÜ™]\›ˆOÛšœÞ
šËÜ™\ÛÝ\˜ÙNˆ™X[È‹Y™KÚ[™[Ž›šœÞ
›ßJ_JN›[K“ÝÛ™\’›Ø“YÙ\”YÙHŠK›XJ

OOžØÛÛœÝO[[Š
K\[Š
KÚY[]N›ŸOSŠ
K\Š
KOZ›Ê
KÜË×O^\ÙTÝ]JˆŠKØËWO^\ÙTÝ]JˆŠKÙ‹O^\ÙTÝ]J˜Ø\ÚMLMLŠKÛK×O^\ÙTÝ]JˆŠKØ‹×O^\ÙTÝ]JˆŠK×ËWO^\ÙTÝ]JJ
JKÔ‹—O^\ÙTÝ]JJ
JKÐKO^\ÙTÝ]JˆŠKÑ×O^\ÙTÝ]JLJKÔ×O^\ÙTÝ]J›[ÛHŠKÓK	O^\ÙTÝ]JˆŠKÑ‹WO^\ÙTÝ]JˆŠKÞ‹×O^\ÙTÝ]JˆŠKÜK—O^\ÙTÝ]JJ
JKÒWO^\ÙTÝ]JÝ\ÝÛY\ˆŠKÒË×O^\ÙTÝ]JˆŠKÙYK—O^\ÙTÝ]JˆŠKÒ‹YWO^\ÙTÝ]JˆŠKÛÙKWO^\ÙTÝ]JJ
JKÝYKÙWO^\ÙTÝ]J›X]\šX[ŠKÙ™KWO^\ÙTÝ]JˆŠKÔÙK™WO^\ÙTÝ]JˆŠKÉKWO^\ÙTÝ]J×JKÚÙKWO^\ÙTÝ]J[
KÙOYOÞÙš[\ŽžÚ›Ø—ÚY™KšYKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒLKÛÜžÙšY[ˆšY‹Ü™\Žˆ‘TÐÈŸ_N›ÚYÙ]N™]V×K\Ô[™[™Î˜O]œŠš[›ÚXÙ\È‹ÙJKÙ]N‘V×K\Ô[™[™Î”O]œŠœ^[Y[È‹ÙJKÙ]NžV×K\Ô[™[™Î”O]œŠš›Ø—ØÛÜÝÈ‹ÙJKÙ]N’V×K\Ô[™[™Î”Y_O]œŠ˜š[[™×ÜØÚY[\È‹Ùš[\ŽžÚ›Ø—ÚY™OËšYKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒLKÛÜžÙšY[ˆ›™^ÙYWÙ]H‹Ü™\ŽˆTÐÈŸ_JKÙ]N’ÙOV×K\Ô[™[™Îœ™_O]œŠœ^[Y[ÛZ[\ÝÛ™\È‹Ùš[\ŽžÚ›Ø—ÚY™OËšYKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒŒKÛÜžÙšY[ˆœÙ\]Y[˜ÙWÛ›È‹Ü™\ŽˆTÐÈŸ_JKÙ]NšOV×_O]œŠš[›ÚXÙ\È‹Ùš[\ŽžßKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNYLßKÛÜžÙšY[ˆš[›ÚXÙWÛ[X™\ˆ‹Ü™\Žˆ‘TÐÈŸ_JKÙO^\ÙSY[[Ê

OOžØÛÛœÝÙOZKœ™YXÙJ
K]
OOžØÛÛœÝS[X™\Š]š[›ÚXÙWÛ[X™\ŠNÜ™]\›ˆ[X™\‹š\Ò[YÙ\Š
I‰œLÌLÍŽOÓX]›X^
K
N”_KÌLÍŽ
NÜ™]\›ˆÝš[™ÊÙJÌJ_KÚWJNÚYŠYJ\™]\›ˆšœÞ
›ßJNØÛÛœÝ™O\ß
K˜[[Ý[ÔÝš[™ÊK˜[[Ý[
NˆˆŠK™OXßK™\Ý[X]WÙ\ÜÜÚ][ÛŸ[™XÚYY‹™OY]œ™YXÙJ
ÙKJOOœÙJÔK˜[[Ý[
K™OQœ™YXÙJ
ÙKJOOœÙJÔK˜[[Ý[
KÙO^œ™YXÙJ
ÙKJOOœÙJÔK˜[[Ý[
KÝU™KQÙKÙOSX]›X^
™KU™K
K™ORÙKœ™YXÙJ
ÙKJOO”KœÝ]\ÏOOH™YHÜÙJÓX]›X^
[X™\ŠK˜[[Ý[
KS[X™\ŠKœZYØ[[Ý[
K
NœÙK
KQ™š[\ŠÙOOˆ\ÙK›Z[\ÝÛ™WÚY
KRÙK™š[™
ÙOOœÙKœÝ]\ÏOOH™YH‰‰“[X™\ŠÙK˜[[Ý[
KS[X™\ŠÙKœZYØ[[Ý[
OŒ
KÝYY_
ÔÝš[™ÊšY
Nˆ[˜\ÜÚYÛ™YŠKS_
KœÛÛYJÙOOœÙK˜[YOOOYKœÝYÙJOÙKœÝYÙNˆ˜˜[[˜ÙKYYHŠKQŸKœ™XÙZ]˜X›WÙYWÙ]_J
KXJ\Þ[˜ÊÙKK]
OOžÖJÙJNÝž^Ø]ØZ]J
KŠ]Ý\NˆœÝXØÙ\ÜÈŸJKJ
_XØ]Ú

^ÜŠ[œÝ[˜Ù[Ùˆ\œ›ÜÜ›Y\ÜØYÙNˆ•HYÙ\ˆÛÝ[›Ý™H\]Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ_Yš[˜[^ÖJ[
__Kœ[ˆŠKÝXJ

OOžØÛÛœÝÙOS[X™\Š™JNÚYŠS[X™\‹š\Ñš[š]JÙJ_ÙOL
^ÜŠ‘[\ˆHÛÛ˜XÝ˜[YH™Y›Ü™HX\šÚ[™È\È›ØˆÛÛ‹ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸS
š›Øˆ‹\Þ[˜Ê
OOžØ]ØZ]\]J™X[È‹ÚY™KšY]NžØ[[Ý[œÙKÝYÙN“Ô‹š\ÊKœÝYÙJOÙKœÝYÙNˆ˜]Ø\™‹Ø[\×ÛÝ]ÛÛYNˆÛÛˆ‹]Ø\™Ü™]šY]×ÜÝ]\Îˆ˜\›Ý™Y‹]Ø\™Ü™]šY]ÙYØ]›™]È]J
KÒTÓÔÝš[™Ê
K]Ø\™Ü™]šY]ÙYØžN›ËšYÜÝÜ™X\ÛÛŽ›[ÛÜÙYØ]›™]È]J
KÒTÓÔÝš[™Ê
K\Ý[X]WÙ\ÜÜÚ][ÛŽ–™K\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_J_KÔ‹š\ÊKœÝYÙJOÈ’›Øˆ˜[YH[™\Ý[X]H[™[™È\]YˆŽˆ’›ØˆX\šÙYÛÛˆ[™˜[YH™XÛÜ™YˆŠ_KœØ]™SÝÛ™\ÛÛ›ÛÈŠKXJ

OOžÚYŠÙK›[™Ý
^ÜŠ•\È›Øˆ[™XYH\ÈH^[Y[[‹ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÛÛœÝÙOS[X™\ŠK˜[[Ý[
NÚYŠS[X™\‹š\Ñš[š]JÙJ_ÙOL
^ÜŠ”Ø]™HHÛÛ˜XÝ˜[YH™Y›Ü™HÜ™X][™ÈH^[Y[[‹ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÛÛœÝOSX]œ›Ý[™
ÙKÌŠŒL
KÌL]^È˜Ø\ÚMLMLŽ–ÞÛX™[ˆ‘\ÜÚ]‹Z[\ÝÛ™WÝ\Nˆ™\ÜÚ]‹šYÙÙ\—Ý\Nˆ˜ÛÛ˜XÝ\ÚYÛš[™È‹[[Ý[”KYWÙ]N“J
KÝ]\Îˆ™YHŸKÛX™[ˆ˜[[˜ÙH\ÛˆÛÛ\][Ûˆ‹Z[\ÝÛ™WÝ\Nˆ˜ÛÛ\][Ûˆ‹šYÙÙ\—Ý\Nˆ˜ÛÛ\][Ûˆ‹[[Ý[œÙKTKYWÙ]N›[Ý]\Îˆœ[›™YŸWK[œÝ\˜[˜ÙN\œ˜^K™œ›ÛJÛ[™ÝK
Ý
OOŠÛX™[˜^XÝY[œÝ\˜[˜ÙH^[Y[	ÝÝ
Ì_XZ[\ÝÛ™WÝ\Nˆš[œÝ\˜[˜ÙH‹šYÙÙ\—Ý\Nˆ›X[X[‹[[Ý[ŒYWÙ]N›[Ý]\Îˆœ[›™YŸJJKÝ\ÝÛN–ÞÛX™[ˆ‘^XÝY^[Y[H‹Z[\ÝÛ™WÝ\Nˆ˜Ý\ÝÛH‹šYÙÙ\—Ý\Nˆ›X[X[‹[[Ý[ŒYWÙ]N›[Ý]\Îˆœ[›™YŸW_NÓ
œ^[Y[\[ˆ‹\Þ[˜Ê
OOžÙ›ÜŠÛÛœÝÜÝ[Ùˆ]Ù—K™[šY\Ê
JX]ØZ]˜Ü™X]Jœ^[Y[ÛZ[\ÝÛ™\È‹Ù]NžË‹‹Ý›Ø—ÚY™KšYÙ\]Y[˜ÙWÛ›Îœ
ÌKZYØ[[Ý[Œ›Ý\Îˆˆ‹Ü™X]YØžN›ËšY_JNØ]ØZ]\]J™X[È‹ÚY™KšY]NžÜ^[Y[Ü[—Ý\N™‹™XÙZ]˜X›WØ˜[[˜ÙN™OOH˜Ø\ÚMLMLÔNŒ™XÙZ]˜X›WÙYWÙ]N™OOH˜Ø\ÚMLMLÓJ
N›[\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_J_KOOH˜Ø\ÚMLMLÈ‘\ÜÚ][™ÛÛ\][Ûˆ^[Y[[ˆÜ™X]YˆŽ™OOHš[œÝ\˜[˜ÙHÈ‘›Ý\‹\^[Y[[œÝ\˜[˜ÙH[ˆÜ™X]YˆŽˆÝ\ÝÛH^[Y[[ˆÝ\YˆŠ_K˜Ü™X]T^[Y[[ˆŠKXJ
ÙKK]
OO“
Z[\ÝÛ™KIÜÙKšYX\Þ[˜Ê
OOžØ]ØZ]\]Jœ^[Y[ÛZ[\ÝÛ™\È‹ÚYœÙKšY]NžË‹‹”K\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]NœÙ_J_K]
K\]SZ[\ÝÛ™HŠK[XJ

OOžÚYŠKœ^[Y[Ü[—Ý\OOOHš[œÝ\˜[˜ÙH‰‰’ÙK›[™ÝM
^ÜŠ’[œÝ\˜[˜ÙH›ØœÈØ[ˆØ\œžH\È›Ý\ˆ^XÝY^[Y[Ëˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸS
˜Y[Z[\ÝÛ™H‹\Þ[˜Ê
OOžØ]ØZ]˜Ü™X]Jœ^[Y[ÛZ[\ÝÛ™\È‹Ù]NžÚ›Ø—ÚY™KšYÙ\]Y[˜ÙWÛ›Î’ÙKœ™YXÙJ
ÙKJOO“X]›X^
ÙKKœÙ\]Y[˜ÙWÛ›ÊK
JÌKX™[˜^XÝY^[Y[	ÒÙK›[™Ý
Ì_XZ[\ÝÛ™WÝ\Nˆ˜Ý\ÝÛH‹šYÙÙ\—Ý\Nˆ›X[X[‹[[Ý[ŒZYØ[[Ý[ŒYWÙ]N›[Ý]\Îˆœ[›™Y‹›Ý\Îˆˆ‹Ü™X]YØžN›ËšY_J_K”^[Y[Z[\ÝÛ™HYYˆŠ_K˜Y^[Y[Z[\ÝÛ™HŠKXJ

OOžØÛÛœÝÙORÙK™š[\ŠOœÝ]\ÏOOH™YH‰‰“[X™\Š˜[[Ý[
KS[X™\ŠœZYØ[[Ý[
OŒ
KœÛÜ

]
OOœÙ\]Y[˜ÙWÛ›ËR]œÙ\]Y[˜ÙWÛ›ÊNÚYŠZ›[™Ý
\™]\›ŽÚYŠ\ÙK›[™Ý
^ÜŠ•\™H\È›È^[Y[Ý\œ™[HYKˆ›Ý[™ÈØ\È™X\ÜÚYÛ™Yˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÛÛœÝOVË‹‹šKœÛÜ

]
OOœZYØ]›ØØ[PÛÛ\\™J]œZYØ]
JK]V×NÛ]LÝS[X™\ŠÙVÌK˜[[Ý[
KS[X™\ŠÙVÌKœZYØ[[Ý[
NÙ›ÜŠÛÛœÝÙˆJ^Ù›ÜŠÝÝL	‰œÙK›[™ÝLNÊ\
ÏLKÝS[X™\ŠÙVÜK˜[[Ý[
KS[X™\ŠÙVÜKœZYØ[[Ý[
NÚYŠÝL
Xœ™XZÎÛ]œ\Ú
Ü^[Y[Z[\ÝÛ™NœÙVÜ_JKÝOS[X™\Š˜[[Ý[
_[]›[™Ý	‰“
œ™XÛÛ˜Ú[K\^[Y[È‹\Þ[˜Ê
OOžÙ›ÜŠÛÛœÝÜ^[Y[Z[\ÝÛ™N’][Ùˆ]
X]ØZ]\]Jœ^[Y[È‹ÚYšY]NžÛZ[\ÝÛ™WÚY’]šYK™]š[Ý\Ñ]NJ_K	Û]›[™ÝH^\Ý[™È^[Y[	Û]›[™ÝOOLOÈˆŽˆœÈŸH\YYÛ›HÈ[Û™^HÝ\œ™[HYK˜
_K˜\ÜÚYÛ•[˜[ØØ]Y^[Y[ÈŠK]XJ

OOžÚYŠ[Kš[J
J^ÜŠ‘[\ˆÚHHÜÜ[š]HØ\ÈÜÝˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸS
›ÜÝ‹\Þ[˜Ê
OOžØ]ØZ]\]J™X[È‹ÚY™KšY]NžÜÝYÙNˆ™XY‹Ø[\×ÛÝ]ÛÛYNˆ›ÜÝ‹ÜÝÜ™X\ÛÛŽ›Kš[J
KÛÜÙYØ]›™]È]J
KÒTÓÔÝš[™Ê
K\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_J_K’›ØˆX\šÙYÜÝ[™[˜ÛYY[ˆÛÜÙK\˜]H™\Ü[™ËˆŠ_K›X\šÓÜÝŠKÝXJ

OOžØÛÛœÝÙOS[X™\ŠŠNÚYŠS[X™\‹š\Ñš[š]JÙJ_ÙOL
^ÜŠ‘[\ˆ[ˆ[›ÚXÙH[[Ý[ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸZYŠK×Œ×Í_IË\Ý
ÙJJ^ÜŠ•H™^[›ÚXÙH[X™\ˆ\ÈÝ]ÚYHHÚ^YYÚ]Þ˜[™ÙKˆ‹Ý\Nˆ™\œ›ÜˆŸJNÜ™]\›ŸZYŠTŠ^ÜŠ‘[\ˆH^[Y[YH]Kˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸS
š[›ÚXÙH‹\Þ[˜Ê
OOžÚYŠ]ØZ]˜Ü™X]Jš[›ÚXÙ\È‹Ù]NžÚ›Ø—ÚY™KšY[›ÚXÙWÛ[X™\Ž™ÙK[[Ý[œÙK\ÜÝYYØ]—ËYWÙ]N”‹Ý]\ÎˆœÙ[‹›ÝNKš[J
__JK	‰˜]ØZ]˜Ü™X]J˜š[[™×ÜØÚY[\È‹Ù]NžÚ›Ø—ÚY™KšY˜[YNKš[J
_”™XÝ\œš[™ÈÚ\™ÙH‹[[Ý[œÙKœ™\]Y[˜ÞN”™^ÙYWÙ]N•J‹OOHœ]X\\›HÌÎŒJKXÝ]™NˆLÜ™X]YØžN›ËšY_JKRÙK›[™Ý
^ØÛÛœÝOSX]›X^
™JÜÙKU™K
NØ]ØZ]\]J™X[È‹ÚY™KšY]NžÜÝYÙN”OŒÈš[›ÚXÙYŽˆœZYZ[‹Y[‹Ø[\×ÛÝ]ÛÛYNˆÛÛˆ‹™XÙZ]˜X›WØ˜[[˜ÙN”K™XÙZ]˜X›WÙYWÙ]N”‹\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_J_]ÊˆŠK
ˆŠKÊLJ_K[›ÚXÙH	ÙÙ_HYYÈ\È›Ø‹˜
_K˜Y[›ÚXÙHŠK›XJ
ÙKJOO“
ØÚY[KIÜÙKšYX\Þ[˜Ê
OOžØ]ØZ]\]J˜š[[™×ÜØÚY[\È‹ÚYœÙKšY]NžË‹‹œÙK\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]NœÙ_J_KJK\]TØÚY[HŠK[XJÙOOžÜÙK˜XÝ]™I‰“
ØÚY[KIÜÙKšYX\Þ[˜Ê
OOžØ]ØZ]˜Ü™X]Jš[›ÚXÙ\È‹Ù]NžÚ›Ø—ÚY™KšY[›ÚXÙWÛ[X™\Ž™ÙK[[Ý[œÙK˜[[Ý[\ÜÝYYØ]“J
KYWÙ]NœÙK›™^ÙYWÙ]KÝ]\ÎˆœÙ[‹›ÝNœÙK›˜[Y__JNØÛÛœÝOUJÙK›™^ÙYWÙ]KÙK™œ™\]Y[˜ÞOOOHœ]X\\›HÌÎŒJNØ]ØZ]\]J˜š[[™×ÜØÚY[\È‹ÚYœÙKšY]NžË‹‹œÙK™^ÙYWÙ]N”K\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]NœÙ_JNØÛÛœÝ]SX]›X^
™JÜÙK˜[[Ý[U™K
NØ]ØZ]\]J™X[È‹ÚY™KšY]NžÜÝYÙNˆš[›ÚXÙY‹Ø[\×ÛÝ]ÛÛYNˆÛÛˆ‹™XÙZ]˜X›WØ˜[[˜ÙN›]™XÙZ]˜X›WÙYWÙ]NœÙK›™^ÙYWÙ]K\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_J_K	ÜÙK›˜[Y_HÜÝY\È[›ÚXÙH	ÙÙ_K˜
_KœÜÝ™XÝ\œš[™Ò[›ÚXÙHŠKÙOXJ

OOžØÛÛœÝÙOS[X™\ŠŠNÚYŠS[X™\‹š\Ñš[š]JÙJ_ÙOL
^ÜŠ‘[\ˆH^[Y[™XÙZ]™Yˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸS
œ^[Y[‹\Þ[˜Ê
OOžØ]ØZ]˜Ü™X]Jœ^[Y[È‹Ù]NžÚ›Ø—ÚY™KšYZ[\ÝÛ™WÚY”ÝOOH[˜\ÜÚYÛ™YÛ[“[X™\ŠÝ
K[[Ý[œÙKZYØ]œKÛÝ\˜ÙN’š[J
_Ý\ÝÛY\ˆ‹™Y™\™[˜ÙN’Ëš[J
__JNØÛÛœÝOU™JÜÙNÚYŠÙK›[™Ý
TOS[X™\ŠK˜[[Ý[
I‰˜]ØZ]\]J™X[È‹ÚY™KšY]NžÜÝYÙNˆœZYZ[‹Y[‹Ø[\×ÛÝ]ÛÛYNˆÛÛˆ‹™XÙZ]˜X›WØ˜[[˜ÙNŒ™XÙZ]˜X›WÙYWÙ]N›[\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_JNÙ[Ù^ØÛÛœÝ]SX]›X^
ÙK\ÙK
NØ]ØZ]\]J™X[È‹ÚY™KšY]NžÜÝYÙN›]OOLÈœZYZ[‹Y[Ž™KœÝYÙOOOHœ^[Y[X\œ˜[™Ù[Y[Èœ^[Y[X\œ˜[™Ù[Y[Žˆ˜˜[[˜ÙKYYH‹Ø[\×ÛÝ]ÛÛYNˆÛÛˆ‹™XÙZ]˜X›WØ˜[[˜ÙN›]\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_J_UÊˆŠKÊˆŠKŠˆŠ_K”^[Y[™XÛÜ™YˆŠ_K˜Y^[Y[ŠKYOXJ

OOžÚYŠÙOL
^ÜŠ•\™H\È›È[œZY[›ÚXÙH˜[[˜ÙHÛˆ\È›Ø‹ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸZYŠU
^ÜŠ‘[\ˆH]HHÝ]Ý[™[™È˜[[˜ÙH\ÈYKˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸS
œ™XÙZ]˜X›H‹\Þ[˜Ê
OOžØ]ØZ]\]J™X[È‹ÚY™KšY]NžÜÝYÙNšØ[\×ÛÝ]ÛÛYNˆÛÛˆ‹™XÙZ]˜X›WØ˜[[˜ÙN—ÙK™XÙZ]˜X›WÙYWÙ]N•\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_J_K”™XÙZ]˜X›HÝ]\È[™YH]H\]YˆŠ_KœØ]™T™XÙZ]˜X›PÛÛ›ÛÈŠKÙOXJ

OOžØÛÛœÝÙOS[X™\ŠŠNÚYŠS[X™\‹š\Ñš[š]JÙJ_ÙOL
^ÜŠ‘[\ˆHX]\šX[X›Ü‹ÜˆÝ\ˆ›ØˆÛÜÝˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸS
˜ÛÜÝ‹\Þ[˜Ê
OOžØ]ØZ]˜Ü™X]Jš›Ø—ØÛÜÝÈ‹Ù]NžÚ›Ø—ÚY™KšY[[Ý[œÙK[˜Ý\œ™YØ]›ÙKØ]YÛÜžNYK™[™ÜŽ™™Kš[J
K›ÝN”ÙKš[J
K™XÙZ\ØÛÝ[‰K›[™Ý_JK	K›[™Ý	‰˜]ØZ]˜Ü™X]J™X[Û›Ý\È‹Ù]NžÙX[ÚY™KšY\Nˆ˜ÛÜÝ\™XÙZ\‹^˜“ÐˆÓÔÕ‘PÑRT‰ÔK™š[™
OO”K˜[YOOO]YJOË›X™[ÏÝY_Nˆ	ÕÝJÙJ_B•™[™ÜˆÈ^YYNˆ	Ù™Kš[J
_“›Ý[\™YŸB‰ÔÙKš[J
_X]N›™]È]J
KÒTÓÔÝš[™Ê
KØ[\×ÚY›ËšY]XÚY[Î‰__JK	K™›Ü‘XXÚ
OO•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜ÊJKJ×JKYJˆŠKJˆŠK™JˆŠ_K’›ØˆÛÜÝ[™™XÙZ\™XÛÜ™YˆŠ_K˜YÛÜÝŠNÜ™]\›ˆšœÞÊ›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈËY[X^]ËVÌLŒHÜXÙK^KMHLˆ‹LLLˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\LÈ›Ý[™Y^›Ü™\ˆ™ËXØ\™MHÚYÝË\ÛHÛN™›^\›ÝÈÛNš][\ËXÙ[\ˆÛNš\ÝYžKX™]ÙY[ˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
Ü‹Ý˜\šX[ˆœÙXÛÛ™\žH‹Ú[™[Žˆ“ÝÛ™\ˆYÙ\ˆŸJKšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^Lž›ÛX›Û˜XÚÚ[™Ë]YÚ‹Ú[™[Ž™K›˜[Y_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽˆÛÛ˜XÝ˜[YKš[[™Ë^[Y[ËX]\šX[™XÙZ\ËX›Ü‹[™›Ùš]ˆŸJW_JKšœÞ
™KØ\ÐÚ[ˆL˜\šX[ˆ›Ý][™H‹Ú[™[Ž›šœÞÊ‹ÝÎ˜ÙX[ËÉÙKšYKÜÚÝØÚ[™[Ž–ÛšœÞ
Œ™KßJKˆ˜XÚÈÈ›Øˆ—_J_JW_JKšœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈÎ™ÜšYXÛÛËMH‹Ú[™[Ž–ÛšœÞ
KÛX™[ˆ’›Øˆ˜[YH‹˜[YN™K˜[[Ý[XÛÛŽ’˜ŸJKšœÞ
KÛX™[ˆ’[›ÚXÙY‹˜[YN’™KXÛÛŽ˜TŸJKšœÞ
KÛX™[ˆÛÛXÝY‹˜[YN•™KXÛÛŽ›UJKšœÞ
KÛX™[ˆ’›ØˆÛÜÝÈ‹˜[YN‘ÙKXÛÛŽžUJKšœÞ
KÛX™[ˆØ\Ú›Ùš]‹˜[YNœÝXÛÛŽ“ßJW_JKK˜]Ø\™Ü™]šY]×ÜÝ]\ÏOOHœ™XYKY›Ü‹\™]šY]ÈÛšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹X[X™\‹ML™ËX[X™\‹MLÎ\šÎ˜™ËX[X™\‹NMLÌŒ‹Ú[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ”Ø[\ÈÝX›Z]YÜ™Y[X[ÈŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ^[È‹Ú[™[Ž–ÛšœÞ
˜‹ØÛ\ÜÓ˜[YNˆœÚ^™KMH^X[X™\‹MÌ\šÎ^X[X™\‹MŸJK”™XYH›Üˆ]Ø\™™]šY]È—_JW_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLÈØ\Lˆ‹Ú[™[Ž–ÛšœÞ
MKÛX™[ˆÛÛ˜XÝ‹˜[YN™K˜]Ø\™Ü™]šY]×ØÛÛ˜XÝØÛÝ[ÏÌJKšœÞ
MKÛX™[ˆ‘\ÜÚ]›ÛÙˆ‹˜[YN™K˜]Ø\™Ü™]šY]×Ù\ÜÚ]ØÛÝ[ÏÌJKšœÞ
MKÛX™[ˆ”ÝÙÜ˜\È‹˜[YN™K˜]Ø\™Ü™]šY]×ÜÝ×ØÛÝ[ÏÌJW_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ”™]šY]ÈHÝX›Z]Yš[\È[ˆHÝ\ÝÛY\ˆ[\˜XÝ[Ûˆ›Ý\›˜[ÛÛ™š\›HHÛÛ˜XÝ˜[YH™[ÝË[ˆX\šÈH›ØˆÛÛ‹ˆŸJW_JW_JN›[šœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹\š[X\žKÌÌ‹Ú[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ”Ø[\ÈÛÛ›ÛŸJKšœÞ
ØKØÚ[™[Ž™KœØ[\×ÛÝ]ÛÛYOOOH›ÜÝŸKœÝYÙOOOH™XYÈ“ÜÝÜÜ[š]HŽ“Ô‹š\ÊKœÝYÙJOÈ•ÛÛˆ›ØˆŽˆ“Ü[ˆÜÜ[š]HŸJW_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MY™ÜšYXÛÛËVÌYœ—ÌYœ—Ø]]×HYš][\ËY[™‹Ú[™[Ž–ÛšœÞ
XKÛX™[ˆÛÛ˜XÝ˜[YH‹[›ÜŽˆš›Ø‹]˜[YH‹Ú[™[Ž›šœÞ
‹ÚYˆš›Ø‹]˜[YH‹\Nˆ›[X™\ˆ‹Z[ŽˆŒ‹Ý\ˆŒŒH‹˜[YNž™KÛÚ[™ÙN˜JÙOO›ÊÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\ŽˆŒŒŸJ_JKšœÞ
XKÛX™[ˆ‘\Ý[X]H[™[™È‹[›ÜŽˆ™\Ý[X]KZ[™[™È‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN–™KÛ•˜[YPÚ[™ÙNKÚ[™[Ž–ÛšœÞ
ØKÚYˆ™\Ý[X]KZ[™[™È‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞ
ØKØÚ[™[ŽÛ›X\
ÙOO›šœÞ
›‹Ý˜[YNœÙK˜[YKÚ[™[ŽœÙK›X™[KÙK˜[YJJ_JW_J_JKšœÞÊ™KÛÛÛXÚÎÝ\ØX›YšÙHOO[[Ú[™[Ž–ÚÙOOOHš›ØˆÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
˜‹ßJKÔ‹š\ÊKœÝYÙJI‰™KœØ[\×ÛÝ]ÛÛYHOOH›ÜÝÈ”Ø]™HÛÛ›ÛÈŽˆ“X\šÈÛÛˆ—_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\LÈ›Ü™\‹]MY™ÜšYXÛÛËVÌYœ—Ø]]×HYš][\ËY[™‹Ú[™[Ž–ÛšœÞ
XKÛX™[ˆ“ÜÝ™X\ÛÛˆ‹[›ÜŽˆ›ÜÝ\™X\ÛÛˆ‹Ú[™[Ž›šœÞ
‹ÚYˆ›ÜÝ\™X\ÛÛˆ‹˜[YN›KÛÚ[™ÙN˜JÙOO™ÊÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\Ž™K›ÜÝÜ™X\ÛÛŸ”šXÙK[Z[™ËÛÛ\]]Ü‹›ÈXÚ\Ú[ÛˆŸJ_JKšœÞÊ™KÝ˜\šX[ˆ›Ý][™H‹ÛÛXÚÎ”]\ØX›YšÙHOO[[Ú[™[Ž–ÚÙOOOH›ÜÝÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÙßJK“X\šÈÜÝ—_JW_JW_JW_JKšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹\š[X\žKÌÌ‹Ú[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ“ÝÛ™\‹XÛÛ›ÛY^[Y[[Z[™ÈŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÖØÛ\ÜÓ˜[YNˆœÚ^™KMH^\š[X\žHŸJKˆ^[Y[[ˆ—_JW_JKšœÞ
‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Žœ™OÛšœÞ
\‹ØÛ\ÜÓ˜[YNˆšLÌˆËY[ŸJN’ÙK›[™ÝOOLÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MY™ÜšYXÛÛËVÌYœ—Ø]]×HYš][\ËY[™‹Ú[™[Ž–ÛšœÞ
XKÛX™[ˆ”^[Y[ÝXÝ\™H‹[›ÜŽˆœ^[Y[\[‹]\H‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN™‹Û•˜[YPÚ[™ÙN˜JÙOOš
ÙJK›Û•˜[YPÚ[™ÙHŠKÚ[™[Ž–ÛšœÞ
ØKÚYˆœ^[Y[\[‹]\H‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆ˜Ø\ÚMLML‹Ú[™[ŽˆØ\Ú›Øˆ8 %L	H\ÜÚ]ÈL	HÛÛ\][ÛˆŸJKšœÞ
›‹Ý˜[YNˆš[œÝ\˜[˜ÙH‹Ú[™[Žˆ’[œÝ\˜[˜ÙH8 %\È›Ý\ˆ^[Y[ÈŸJKšœÞ
›‹Ý˜[YNˆ˜Ý\ÝÛH‹Ú[™[ŽˆÝ\ÝÛHZ[\ÝÛ™\ÈŸJW_JW_J_JKšœÞÊ™KÛÛÛXÚÎ’\ØX›YšÙHOO[[Ú[™[Ž–ÚÙOOOHœ^[Y[\[ˆÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÖßJKÜ™X]H^[Y[[ˆ—_JW_JN›šœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈÎ™ÜšYXÛÛËM‹Ú[™[Ž–ÛšœÞ
‹ÛX™[ˆÛÛ˜XÝ˜[YH‹˜[YN“[X™\ŠK˜[[Ý[
_JKšœÞ
‹ÛX™[ˆ‘YH›ÝÈ‹˜[YNš™K[\\Ú^™YˆLJKšœÞ
‹ÛX™[ˆÛÛXÝY‹˜[YN•™_JKšœÞ
‹ÛX™[ˆ“›ÝY]YH‹˜[YN’ÙKœ™YXÙJ
ÙKJOO”KœÝ]\ÏOOHœ[›™YÜÙJÓX]›X^
[X™\ŠK˜[[Ý[
KS[X™\ŠKœZYØ[[Ý[
K
NœÙK
_JW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\LÈÎ™ÜšYXÛÛËLˆ‹Ú[™[Ž’ÙK›X\
ÙOO›šœÞ
[ÛZ[\ÝÛ™NœÙK\ÞNšÙOOOXZ[\ÝÛ™KIÜÙKšYXÛ”Ø]™N˜JOOžÕ
ÙKK”^[Y[Z[\ÝÛ™H\]YˆŠ_K›Û”Ø]™HŠ_KÙKšY
J_JK›[™ÝÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\LÈ›Ý[™Y[È›Ü™\ˆ›Ü™\‹X[X™\‹M™ËX[X™\‹MLMÛN™›^\›ÝÈÛNš][\ËXÙ[\ˆÛNš\ÝYžKX™]ÙY[ˆ\šÎ˜™ËX[X™\‹NMLÌŒ‹Ú[™[Ž–ÛšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH‹Ú[™[Ž–ÛšœÞ
œÝ›Û™È‹ØÚ[™[Žš›[™ÝJKˆ^\Ý[™È^[Y[‹›[™ÝOOLOÈˆ\ÈŽˆœÈ\™H‹ˆ›ÝYYÈHZ[\ÝÛ™KˆÛ›HZ[\ÝÛ™\ÈÝ\œ™[HYHÚ[™Hš[YÈ]\™H^[Y[È™[XZ[ˆ[ÝXÚYˆ—_JKšœÞ
™KÜÚ^™NˆœÛH‹˜\šX[ˆ›Ý][™H‹ÛÛXÚÎ›‹\ØX›YšÙHOO[[Ú[™[Žˆ\HÈ[[Ý[YHŸJW_JN›[šœÞÊ™KÝ˜\šX[ˆ›Ý][™H‹ÛÛXÚÎ˜[‹\ØX›YšÙHOO[[Ú[™[Ž–ÛšœÞ
T‹ßJKˆY^[Y[Z[\ÝÛ™H—_JW_J_JW_JK™OŒ	‰’ÙK›[™ÝOOLÛšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹X[X™\‹MLÍŒ‹Ú[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ“ÝÛ™\‹XÛÛ›ÛYÛÛXÝ[ÛˆÝ]\ÈŸJKšœÞ
ØKØÚ[™[ŽˆXØÛÝ[È™XÙZ]˜X›HŸJW_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MY™ÜšYXÛÛËVÌYœ—ÌYœ—ÌYœ—Ø]]×HYš][\ËY[™‹Ú[™[Ž–ÛšœÞ
XKÛX™[ˆ“Ý]Ý[™[™È˜[[˜ÙH‹[›ÜŽˆ›Ý]Ý[™[™ËX˜[[˜ÙH‹Ú[™[Ž›šœÞ
‹ÚYˆ›Ý]Ý[™[™ËX˜[[˜ÙH‹˜[YN•ÝJÙJK™XYÛ›NˆLJ_JKšœÞ
XKÛX™[ˆ”™XÙZ]˜X›HÝ]\È‹[›ÜŽˆœ™XÙZ]˜X›K\ÝYÙH‹Ú[™[Ž›šœÞÊ˜KÝ˜[YNšÛ•˜[YPÚ[™ÙN‰Ú[™[Ž–ÛšœÞ
ØKÚYˆœ™XÙZ]˜X›K\ÝYÙH‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞ
ØKØÚ[™[Ž”K›X\
ÙOO›šœÞ
›‹Ý˜[YNœÙK˜[YKÚ[™[ŽœÙK›X™[KÙK˜[YJJ_JW_J_JKšœÞ
XKÛX™[ˆ˜[[˜ÙHYH‹[›ÜŽˆœ™XÙZ]˜X›KYYKY]H‹Ú[™[Ž›šœÞ
‹ÚYˆœ™XÙZ]˜X›KYYKY]H‹\Nˆ™]H‹˜[YN•ÛÚ[™ÙN˜JÙOO•JÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞÊ™KÛÛÛXÚÎ‘YK\ØX›YšÙHOO[[Ú[™[Ž–ÚÙOOOHœ™XÙZ]˜X›HÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJK”Ø]™HÝ]\È—_JW_JW_JN›[šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MH™ÜšYXÛÛËLÈ‹Ú[™[Ž–ÛšœÞÊKÝ]NˆY[›ÚXÙH‹\ØÜš\[ÛŽ˜™^[X™\Žˆ	ÙÙ_XXÛÛŽ›šœÞ
T‹ßJKÚ[™[Ž–ÛšœÞ
XKÛX™[ˆ’[›ÚXÙH[[Ý[‹[›ÜŽˆš[›ÚXÙKX[[Ý[‹Ú[™[Ž›šœÞ
‹ÚYˆš[›ÚXÙKX[[Ý[‹\Nˆ›[X™\ˆ‹Z[ŽˆŒ‹Ý\ˆŒŒH‹˜[YN˜‹ÛÚ[™ÙN˜JÙOOÊÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
XKÛX™[ˆ’[›ÚXÙH]H‹[›ÜŽˆš[›ÚXÙKY]H‹Ú[™[Ž›šœÞ
‹ÚYˆš[›ÚXÙKY]H‹\Nˆ™]H‹˜[YN—ËÛÚ[™ÙN˜JÙOO‘JÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
XKÛX™[ˆ”^[Y[YH‹[›ÜŽˆš[›ÚXÙKYYKY]H‹Ú[™[Ž›šœÞ
‹ÚYˆš[›ÚXÙKYYKY]H‹\Nˆ™]H‹˜[YN”‹ÛÚ[™ÙN˜JÙOOšŠÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
XKÛX™[ˆ“›ÝH‹[›ÜŽˆš[›ÚXÙK[›ÝH‹Ú[™[Ž›šœÞ
‹ÚYˆš[›ÚXÙK[›ÝH‹˜[YNKÛÚ[™ÙN˜JÙOO•
ÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\Žˆ‘\ÜÚ]›ÙÜ™\ÜÈ^[Y[š[˜[ŸJ_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ›Ý[™Y[È›Ü™\ˆ™Ë[]]YÍLÈ‹Ú[™[Ž–ÛšœÞÊ›X™[‹ØÛ\ÜÓ˜[YNˆ™›^Ý\œÛÜ‹\Ú[\ˆ][\ËXÙ[\ˆØ\Lˆ^\ÛH›Û[YY][H‹Ú[™[Ž–ÛšœÞ
ÝËØÚXÚÙY‘ÛÚXÚÙYÚ[™ÙN˜JÙOO“ÊÙOOOHL
K›ÛÚXÚÙYÚ[™ÙHŠ_JK”™\X]\ÈÚ\™ÙH—_JKÛšœÞ
XKÛX™[ˆ‘œ™\]Y[˜ÞH‹[›ÜŽˆš[›ÚXÙKYœ™\]Y[˜ÞH‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN”Û•˜[YPÚ[™ÙN˜JÙOOšÊÙJK›Û•˜[YPÚ[™ÙHŠKÚ[™[Ž–ÛšœÞ
ØKÚYˆš[›ÚXÙKYœ™\]Y[˜ÞH‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆ›[ÛH‹Ú[™[Žˆ“[ÛHŸJKšœÞ
›‹Ý˜[YNˆœ]X\\›H‹Ú[™[Žˆ”]X\\›HŸJW_JW_J_JN›[šœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ•H™^YH]HY˜[˜Ù\È]]ÛX]XØ[HY\ˆXXÚ™XÝ\œš[™È[›ÚXÙH\ÈÜÝYˆ]\ÙH]][žH[YKˆŸJW_JKšœÞÊ™KÛÛÛXÚÎ•Ý\ØX›YšÙHOO[[Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž–ÚÙOOOHš[›ÚXÙHÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJKˆ‹Y[›ÚXÙH—_JW_JKšœÞÊKÝ]NˆXÚÛ›ÝÛYÙH^[Y[‹\ØÜš\[ÛŽ˜Ý]Ý[™[™È[›ÚXÙ\Îˆ	ÕÝJÙJ_XXÛÛŽ›šœÞ
UßJKÚ[™[Ž–ÛšœÞ
XKÛX™[ˆ”^[Y[™XÙZ]™Y‹[›ÜŽˆœ^[Y[X[[Ý[‹Ú[™[Ž›šœÞ
‹ÚYˆœ^[Y[X[[Ý[‹\Nˆ›[X™\ˆ‹Z[ŽˆŒ‹Ý\ˆŒŒH‹˜[YNž‹ÛÚ[™ÙN˜JÙOO•ÊÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
XKÛX™[ˆ”^[Y[]H‹[›ÜŽˆœ^[Y[Y]H‹Ú[™[Ž›šœÞ
‹ÚYˆœ^[Y[Y]H‹\Nˆ™]H‹˜[YNœKÛÚ[™ÙN˜JÙOO•ŠÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKÙK›[™ÝÛšœÞ
XKÛX™[ˆ\HÈ‹[›ÜŽˆœ^[Y[[Z[\ÝÛ™H‹Ú[™[Ž›šœÞÊ˜KÝ˜[YN”ÝÛ•˜[YPÚ[™ÙN–‹Ú[™[Ž–ÛšœÞ
ØKÚYˆœ^[Y[[Z[\ÝÛ™H‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆ[˜\ÜÚYÛ™Y‹Ú[™[Žˆ•[˜\ÜÚYÛ™Y^[Y[ŸJKÙK™š[\ŠÙOOœÙKœÝ]\ÈOOHØZ]™YŠK›X\
ÙOO›šœÞÊ›‹Ý˜[YN”Ýš[™ÊÙKšY
KÚ[™[Ž–ÜÙK›X™[ˆ8 %‹ÝJ[X™\ŠÙK˜[[Ý[
JW_KÙKšY
JW_JW_J_JN›[šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈ‹Ú[™[Ž–ÛšœÞ
XKÛX™[ˆ”ZYžH‹[›ÜŽˆœ^[Y[\ÛÝ\˜ÙH‹Ú[™[Ž›šœÞ
‹ÚYˆœ^[Y[\ÛÝ\˜ÙH‹˜[YN’ÛÚ[™ÙN˜JÙOO–JÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
XKÛX™[ˆ”™Y™\™[˜ÙH‹[›ÜŽˆœ^[Y[\™Y™\™[˜ÙH‹Ú[™[Ž›šœÞ
‹ÚYˆœ^[Y[\™Y™\™[˜ÙH‹˜[YN’ËÛÚ[™ÙN˜JÙOO‘ÊÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\ŽˆÚXÚÈÜˆ˜[œÙ™\ˆŸJ_JW_JKšœÞÊ™KÛÛÛXÚÎ˜ÙK\ØX›YšÙHOO[[Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž–ÚÙOOOHœ^[Y[ÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJKˆ‹”™XÛÜ™^[Y[—_JW_JKšœÞÊKÝ]NˆY›ØˆÛÜÝ‹\ØÜš\[ÛŽˆ“X]\šX[X›Ü‹ÝX˜ÛÛ˜XÝÜ‹™YKÜˆÝ\ˆ‹XÛÛŽ›šœÞ
UßJKÚ[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈ‹Ú[™[Ž–ÛšœÞ
XKÛX™[ˆÛÜÝ\H‹[›ÜŽˆ˜ÛÜÝXØ]YÛÜžH‹Ú[™[Ž›šœÞÊ˜KÝ˜[YNYKÛ•˜[YPÚ[™ÙN˜JÙOOÙJÙJK›Û•˜[YPÚ[™ÙHŠKÚ[™[Ž–ÛšœÞ
ØKÚYˆ˜ÛÜÝXØ]YÛÜžH‹Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞ
ØKØÚ[™[Ž”K›X\
ÙOO›šœÞ
›‹Ý˜[YNœÙK˜[YKÚ[™[ŽœÙK›X™[KÙK˜[YJJ_JW_J_JKšœÞ
XKÛX™[ˆ[[Ý[‹[›ÜŽˆ˜ÛÜÝX[[Ý[‹Ú[™[Ž›šœÞ
‹ÚYˆ˜ÛÜÝX[[Ý[‹\Nˆ›[X™\ˆ‹Z[ŽˆŒ‹Ý\ˆŒŒH‹˜[YN’‹ÛÚ[™ÙN˜JÙOOšYJÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈ‹Ú[™[Ž–ÛšœÞ
XKÛX™[ˆ‘]H‹[›ÜŽˆ˜ÛÜÝY]H‹Ú[™[Ž›šœÞ
‹ÚYˆ˜ÛÜÝY]H‹\Nˆ™]H‹˜[YN›ÙKÛÚ[™ÙN˜JÙOO™JÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
XKÛX™[ˆ•™[™ÜˆÈ^YYH‹[›ÜŽˆ˜ÛÜÝ]™[™Üˆ‹Ú[™[Ž›šœÞ
‹ÚYˆ˜ÛÜÝ]™[™Üˆ‹˜[YN™™KÛÚ[™ÙN˜JÙOOœJÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JW_JKšœÞ
XKÛX™[ˆ“›ÝH‹[›ÜŽˆ˜ÛÜÝ[›ÝH‹Ú[™[Ž›šœÞ
Ó‹ÚYˆ˜ÛÜÝ[›ÝH‹˜[YN”ÙKÛÚ[™ÙN˜JÙOO™JÙK\™Ù]˜[YJK›ÛÚ[™ÙHŠKÛ\ÜÓ˜[YNˆ›Z[‹ZLŒŸJ_JKšœÞ
SËÚY˜ÛÜÝ\™XÙZ\IÙKšYXš[\Î‰KÛ‘š[\Î˜JÙOO‘JOO–Ë‹‹”K‹‹“ÊÙJWJK›Û‘š[\ÈŠKÛ”™[[Ý™N˜JÙOO‘JOOžØÛÛœÝ]TVÜÙWNÜ™]\›ˆ]	‰•T“œ™]›ÚÙSØš™XÝT“
]œÜ˜ÊKK™š[\Š
Ý
OOÝOO\ÙJ_JK›Û”™[[Ý™HŠKÛÛ\XÝˆLJKšœÞÊ™KÛÛÛXÚÎ“ÙK\ØX›YšÙHOO[[Û\ÜÓ˜[YNˆËY[‹Ú[™[Ž–ÚÙOOOH˜ÛÜÝÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJKˆ‹”™XÛÜ™ÛÜÝ—_JW_JW_JKšœÞÊÛ‹ØÚ[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ]XÚYÛ›HÈ\È›ØˆŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
Œ™KØÛ\ÜÓ˜[YNˆœÚ^™KMH^\š[X\žHŸJKˆ™XÝ\œš[™Èš[[™È—_JW_JKšœÞ
‹ØÚ[™[Ž”YOÛšœÞ
\‹ØÛ\ÜÓ˜[YNˆšLËY[ŸJN’›[™ÝOOLÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆ›Ü™\‹Y\ÚYMH^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ“›È™XÝ\œš[™ÈÚ\™Ù\ÈY]ˆY[ˆ[›ÚXÙHX›Ý™H[™Ù[XÝ8 '™\X]\ÈÚ\™ÙK¸ 'HŸJN›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\LÈY™ÜšYXÛÛËLˆ‹Ú[™[Ž’›X\
ÙOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆM‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[ŽœÙK›˜[Y_JKšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–ÕÝJÙK˜[[Ý[
Kˆ0­È‹ÙK™œ™\]Y[˜ÞW_JW_JKšœÞ
Ü‹Ý˜\šX[œÙK˜XÝ]™OÈ™Y˜][ŽˆœÙXÛÛ™\žH‹Ú[™[ŽœÙK˜XÝ]™OÈXÝ]™HŽˆ”]\ÙYŸJW_JKšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LÈ^\ÛH‹Ú[™[Ž–È“™^YNˆ‹šœÞ
œÝ›Û™È‹ØÚ[™[ŽœÙK›™^ÙYWÙ]_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]M›^›^]Ü˜\Ø\Lˆ‹Ú[™[Ž–ÜÙK˜XÝ]™OÛšœÞÊ™KÜÚ^™NˆœÛH‹ÛÛXÚÎ˜J

OO™[ŠÙJK›ÛÛXÚÈŠK\ØX›YšÙHOO[[Ú[™[Ž–ÚÙOOOXØÚY[KIÜÙKšYXÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
T‹ßJK”ÜÝ™^[›ÚXÙH—_JN›[šœÞ
™KÜÚ^™NˆœÛH‹˜\šX[ˆ›Ý][™H‹ÛÛXÚÎ˜J

OOžÛ›ŠË‹‹œÙKXÝ]™Nˆ\ÙK˜XÝ]™_KÙK˜XÝ]™OÈ”™XÝ\œš[™ÈÚ\™ÙH]\ÙYˆŽˆ”™XÝ\œš[™ÈÚ\™ÙH™\Ý[YYˆŠ_K›ÛÛXÚÈŠK\ØX›YšÙHOO[[Ú[™[ŽœÙK˜XÝ]™OÈ”]\ÙHŽˆ”™\Ý[YHŸJW_JW_KÙKšY
J_J_JW_JKšœÞÊÛ‹ØÚ[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ‘[šY\ÈÛˆ\È›ØˆŸJKšœÞ
ØKØÚ[™[Žˆ’›ØˆYÙ\ˆŸJW_JKšœÞ
‹ØÚ[™[Ž˜ÛšœÞ
\‹ØÛ\ÜÓ˜[YNˆšLÍˆËY[ŸJNˆY]›[™Ý	‰ˆQ›[™Ý	‰ˆ^›[™ÝÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆ›Ü™\‹Y\ÚYMˆ^XÙ[\ˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ“›È[›ÚXÙ\Ë^[Y[ËÜˆ›ØˆÛÜÝÈ]™H™Y[ˆ[\™YY]ˆŸJN›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MHÎ™ÜšYXÛÛËLÈ‹Ú[™[Ž–ÛšœÞ
KÝ]Nˆ’[›ÚXÙ\È‹][\Î™]›X\
ÙOOŠÚÙ^NœÙKšY]N˜ÉÜÙKš[›ÚXÙWÛ[X™\ŸX]Z[œÙK™YWÙ]OØ	ÜÙKš\ÜÝYYØ]H0­ÈYH	ÜÙK™YWÙ]_XœÙKš\ÜÝYYØ][[Ý[œÙK˜[[Ý[JJ_JKšœÞ
KÝ]Nˆ”^[Y[È‹][\Î‘›X\
ÙOOŠÚÙ^NœÙKšY]NœÙKœÛÝ\˜ÙK]Z[˜	ÜÙKœZYØ]H0­È	ÒÙK™š[™
OO”KšYOO\ÙK›Z[\ÝÛ™WÚY
OË›X™[ÏÈ•[˜\ÜÚYÛ™YŸX[[Ý[œÙK˜[[Ý[JJ_JKšœÞ
KÝ]NˆÛÜÝÈ‹][\Îž›X\
ÙOOŠÚÙ^NœÙKšY]N”K™š[™
OO”K˜[YOOO\ÙK˜Ø]YÛÜžJOË›X™[ÏÜÙK˜Ø]YÛÜžK]Z[˜	ÜÙK™[™ÜŸ“›È™[™ÜˆŸH0­È	ÜÙKš[˜Ý\œ™YØ]X[[Ý[‹\ÙK˜[[Ý[JJ_JW_J_JW_JW_J_K“ÝÛ™\’›Ø“YÙ\ˆŠKOXJ
ÛX™[™K˜[YNXÛÛŽ›ŸJOO›šœÞ
Û‹ØÛ\ÜÓ˜[YNˆ™Ø\LˆKM‹Ú[™[Ž›šœÞÊ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\Ý\\ÝYžKX™]ÙY[ˆM‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^›ÛX›ÛX[\‹[[\È‹Ú[™[Ž•ÝJ
_JW_JKšœÞ
‹ØÛ\ÜÓ˜[YNˆœÚ^™KMH^\š[X\žHŸJW_J_JK“YÙ\“Y]šXÈŠKMOXJ
ÛX™[™K˜[YNJOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[Y›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™LÈ^XÙ[\ˆ‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^›ÛX›ÛX[\‹[[\È‹Ú[™[ŽJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™_JW_JK”™]šY]ÐÜ™Y[X[ŠKXJ
ÛX™[™K˜[YN[\\Ú^™Y›HL_JOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YN˜›Ý[™Y[Y›Ü™\ˆLÈ	ÛÈ˜›Ü™\‹\š[X\žH™Ë\š[X\žKÍHŽˆ˜™ËX˜XÚÙÜ›Ý[™ŸXÚ[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^›ÛX›ÛX[\‹[[\È‹Ú[™[Ž•ÝJ
_JW_JK”[“Y]šXÈŠK[XJ
ÛZ[\ÝÛ™N™K\ÞNÛ”Ø]™N›ŸJOOžØÛÛœÝÜ‹WO^\ÙTÝ]JK›X™[
KÜË×O^\ÙTÝ]JÝš[™ÊK˜[[Ý[
JKØËWO^\ÙTÝ]JK™YWÙ]OÏÈˆŠKÙ‹O^\ÙTÝ]JKšYÙÙ\—Ý\JKOSX]›X^
[X™\ŠK˜[[Ý[
KS[X™\ŠKœZYØ[[Ý[
K
KÏXJ

OOžØÛÛœÝS[X™\ŠÊNÈS[X™\‹š\Ñš[š]JŠ_ŠÛX™[œ‹š[J
_K›X™[[[Ý[˜‹šYÙÙ\—Ý\N™‹YWÙ]N™KœÝ]\ÏOOHœ[›™YÛ[˜ßJ
_J_KœØ]™HŠNÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y^›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™M‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹M›^][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ^^È›Û[YY][H\\˜Ø\ÙH˜XÚÚ[™Ë]ÚYH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–È”^[Y[‹KœÙ\]Y[˜ÙWÛ›×_JKšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ›]LH^[È›ÛX›ÛX[\‹[[\È‹Ú[™[Ž–ÕÝJJKˆ™[XZ[š[™È—_JW_JKšœÞ
Ü‹Ý˜\šX[™KœÝ]\ÏOOHœZYÈ™Y˜][Ž™KœÝ]\ÏOOH™YHÈ™\ÝXÝ]™HŽˆœÙXÛÛ™\žH‹Ú[™[Ž™KœÝ]\ÏOOHœ[›™YÈ“›ÝYHŽ™KœÝ]\ËÕ\\Ø\ÙJ
_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\LÈÛN™ÜšYXÛÛËLˆ‹Ú[™[Ž–ÛšœÞ
XKÛX™[ˆ“X™[‹[›ÜŽ˜Z[\ÝÛ™K[X™[IÙKšYXÚ[™[Ž›šœÞ
‹ÚY˜Z[\ÝÛ™K[X™[IÙKšYX˜[YNœ‹ÛÚ[™ÙN˜JOšJ‹\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
XKÛX™[ˆ‘^XÝY[[Ý[‹[›ÜŽ˜Z[\ÝÛ™KX[[Ý[IÙKšYXÚ[™[Ž›šœÞ
‹ÚY˜Z[\ÝÛ™KX[[Ý[IÙKšYX\Nˆ›[X™\ˆ‹Z[ŽˆŒ‹Ý\ˆŒŒH‹˜[YNœËÛÚ[™ÙN˜JO›Ê‹\™Ù]˜[YJK›ÛÚ[™ÙHŠ_J_JKšœÞ
XKÛX™[ˆ™XÛÛY\ÈYH‹[›ÜŽ˜Z[\ÝÛ™K]šYÙÙ\‹IÙKšYXÚ[™[Ž›šœÞÊ˜KÝ˜[YN™‹Û•˜[YPÚ[™ÙN˜JOš
ŠK›Û•˜[YPÚ[™ÙHŠKÚ[™[Ž–ÛšœÞ
ØKÚY˜Z[\ÝÛ™K]šYÙÙ\‹IÙKšYXÛ\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆ˜ÛÛ˜XÝ\ÚYÛš[™È‹Ú[™[ŽˆÛÛ˜XÝÚYÛš[™ÈŸJKšœÞ
›‹Ý˜[YNˆ˜ÛÛ\][Ûˆ‹Ú[™[Žˆ•ÛÜšÈÛÛ\][ÛˆŸJKšœÞ
›‹Ý˜[YNˆ›X[X[‹Ú[™[Žˆ“ÝÛ™\ˆX\šÜÈYHŸJKšœÞ
›‹Ý˜[YNˆ™]H‹Ú[™[Žˆ”ÜXÚYšXÈ]HŸJW_JW_J_JKšœÞ
XKÛX™[ˆ‘YH]H‹[›ÜŽ˜Z[\ÝÛ™KYYKIÙKšYXÚ[™[Ž›šœÞ
‹ÚY˜Z[\ÝÛ™KYYKIÙKšYX\Nˆ™]H‹˜[YN˜ËÛÚ[™ÙN˜JOJ‹\™Ù]˜[YJK›ÛÚ[™ÙHŠK\ØX›Y™KœÝ]\ÏOOHœ[›™YŸJ_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]M›^›^]Ü˜\Ø\Lˆ›Ü™\‹]M‹Ú[™[Ž–ÛšœÞÊ™KÜÚ^™NˆœÛH‹˜\šX[ˆ›Ý][™H‹ÛÛXÚÎ™Ë\ØX›YÚ[™[Ž–ÝÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJKˆØ]™H—_JKKœÝ]\ÏOOHœ[›™YÛšœÞÊ™KÜÚ^™NˆœÛH‹ÛÛXÚÎ˜J

OO›ŠÜÝ]\Îˆ™YH‹YWÙ]N˜ßJ
_JK›ÛÛXÚÈŠK\ØX›Y[X™\ŠÊOLÚ[™[Ž–ÛšœÞ
ÙKßJKˆ‹OOH˜ÛÛ\][ÛˆÈ•ÛÜšÈÛÛ\]H8 %XZÙHYHŽˆ“XZÙHYH—_JN™KœÝ]\ÏOOH™YHÛšœÞ
™KÜÚ^™NˆœÛH‹˜\šX[ˆ›Ý][™H‹ÛÛXÚÎ˜J

OO›ŠÜÝ]\Îˆœ[›™Y‹YWÙ]N›[JK›ÛÛXÚÈŠK\ØX›Y[X™\ŠKœZYØ[[Ý[
OŒÚ[™[Žˆ“›ÝYHY]ŸJN›[KœÝ]\ÏOOHœZYÛšœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LH^\ÛH›Û[YY][H^Y[Y\˜[MÌ\šÎ^Y[Y\˜[M‹Ú[™[Ž–ÛšœÞ
ÜÙKØÛ\ÜÓ˜[YNˆœÚ^™KMŸJKˆZY‹ˆ‹ÝJ[X™\ŠKœZYØ[[Ý[
JW_JN›[_JW_J_K”^[Y[Z[\ÝÛ™PØ\™ŠKOXJ
Ý]N™K\ØÜš\[ÛŽXÛÛŽ›‹Ú[™[ŽœŸJOO›šœÞÊÛ‹ØÛ\ÜÓ˜[YNˆšYš]‹Ú[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞÊØKØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ^[È‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\š[X\žHÉœÝ™×NœÚ^™KMH‹Ú[™[Ž›ŸJKW_JKšœÞ
ÚKØÚ[™[ŽJW_JKšœÞ
‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[ŽœŸJW_JK“YÙ\‘[žPØ\™ŠKXOXJ
ÛX™[™K[›ÜŽÚ[™[Ž›ŸJOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽÚ[™[Ž™_JK—_JK‘šY[	HŠKOXJ
Ý]N™K][\ÎJOO›šœÞÊœÙXÝ[Ûˆ‹ØÚ[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ›X‹Lˆ›Û\Ù[ZX›Û‹Ú[™[Ž™_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž›[™ÝÝ›X\
O›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ›Ý[™Y[È›Ü™\ˆLÈ^\ÛH‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ™›Û[YY][H‹Ú[™[Ž›‹]_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž›‹™]Z[JW_JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN˜›Û\Ù[ZX›ÛX[\‹[[\È	Û‹˜[[Ý[È^\™YMÌ\šÎ^\™YMŽˆˆŸXÚ[™[Ž•ÝJ‹˜[[Ý[
_JW_K‹šÙ^JJN›šœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ“›Û™HŸJ_JW_JK“YÙ\“\ÝŠK›XJ

OO›šœÞÊ›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈËY[X^]ËVÌLŒHÜXÙK^KMLˆKLˆ‹Ú[™[Ž–ÛšœÞ
\‹ØÛ\ÜÓ˜[YNˆšLŽËY[ŸJKšœÞ
\‹ØÛ\ÜÓ˜[YNˆšLËY[ŸJKšœÞ
\‹ØÛ\ÜÓ˜[YNˆšNMˆËY[ŸJW_JK“YÙ\“ØY[™ÈŠKI™J›ÚYÔ“HŠKÛXJ
ØÛÛ\[žTÙXÝÜœÎ™OSÙKÝ\œ™[˜ÞNTÙKX[Ø]YÛÜšY\Î›UXÙKX[\[[™TÝ]\Ù\ÎœIÙKX[ÝYÙ\ÎšOQ˜ÙK\šÓ[ÙSÙÛÎœÏQÙKYÚ[ÙSÙÛÎ›ÏRXÙK›ÝTÝ]\Ù\Î˜ÏP˜ÙK\ÚÕ\\ÎO^˜ÙK]N™SXÙK]T›ÝšY\Žš]

K]]›ÝšY\Ž›OZ]

KLN”›ÝšY\Ž™Ï][ÝÜ™N˜U\ØX›U[[Y]žNË‹‹—ßJOOžÞ\ÙQY™™XÝ


OOžÚYŠß\[ÙˆÚ[™ÝÏˆHŸ\[ÙˆÚ[™ÝË›ØØ][ÛˆHŸ\[Ùˆ[XYÙOˆHŠ\™]\›ŽØÛÛœÝO[™]È[XYÙNÐKœÜ˜ÏXÎ‹ËØ]ÛZXËXÜ›K][[Y]žK›X\›Y[X‹˜ÛÛKØ]ÛZXËXÜ›K][[Y]žOÙÛXZ[IÝÚ[™ÝË›ØØ][Û‹šÜÝ˜[Y_XKÝ×JK\ÙQY™™XÝ


OOžØ‹™Ù]][JÙÊ_‹œÙ]][JÙËØÛÛ\[žTÙXÝÜœÎ™KÝ\œ™[˜ÞNX[Ø]YÛÜšY\Î›‹X[\[[™TÝ]\Ù\Îœ‹X[ÝYÙ\ÎšK›ÝTÝ]\Ù\Î˜Ë\ÚÕ\\ÎK]N™‹\šÓ[ÙSÙÛÎœËYÚ[ÙSÙÛÎ›ßJ_KØ—JNØÛÛœÝOY˜J
K^\ÙSY[[Ê

OOŠË‹‹›KÙÚ[Ž˜J\Þ[˜ÈOOžØÛÛœÝX]ØZ]K›ÙÚ[ŠJNÝž^ØÛÛœÝX]ØZ]™Ù]ÛÛ™šYÝ\˜][ÛŠ
NÓØš™XÝšÙ^\Ê
K›[™ÝŒ	‰˜‹œÙ]][JÙË
_XØ]Úß\™]\›ˆK›ÙÚ[ˆŠK[™PØ[˜XÚÎ˜J\Þ[˜ÈOOžÚYŠ[Kš[™PØ[˜XÚÊ]›ÝÈ™]È\œ›ÜŠš[™PØ[˜XÚÈ\È›Ý[\[Y[Y[ˆH]]›ÝšY\ˆŠNØÛÛœÝX]ØZ]Kš[™PØ[˜XÚÊJNÝž^ØÛÛœÝX]ØZ]™Ù]ÛÛ™šYÝ\˜][ÛŠ
NÓØš™XÝšÙ^\Ê
K›[™ÝŒ	‰˜‹œÙ]][JÙË
_XØ]Úß\™]\›ˆKš[™PØ[˜XÚÈŠKÙÛÝ]˜J\Þ[˜ÈOOžÝž^Ø‹œ™[[Ý™R][JÙÊ_XØ]Úß\™]\›ˆK›ÙÛÝ]
J_K›ÙÛÝ]Š_JKÛK—JKQOÓÛ“›Ü™]\›ˆšœÞ
‹Ù]T›ÝšY\Žš]]›ÝšY\Ž”‹LN”›ÝšY\Ž™ËÝÜ™N˜‹ÙÚ[”YÙN™™\]Z\™P]]ˆL\ØX›U[[Y]žNˆL‹‹—ßJ_KÔ“HŠK›XJOO›šœÞÊØÙKÛ^[Ý]™K›^[Ý]ÏÖ™]\Ú›Ø\™™K™\Ú›Ø\™ÏÛY]‹‹™KÚ[™[Ž–ÛšœÞÊ‘KÛ›Ó^[Ý]ˆLÚ[™[Ž–ÛšœÞ
˜KÜ]”Ëœ][[Y[›šœÞ
ËßJ_JKšœÞ
˜KÜ]•Ìœ][[Y[›šœÞ
ÌßJ_JKšœÞ
˜KÜ]›”Ëœ][[Y[›šœÞ
”ËßJ_JKšœÞ
˜KÜ]Ëœ][[Y[›šœÞ
ËßJ_JKšœÞ
˜KÜ]œ”Ëœ][[Y[›šœÞ
”ËßJ_JW_JKšœÞÊ‘KØÚ[™[Ž–ÛšœÞ
˜KÜ]ˆ‹Û™]ËZ›Øˆ‹[[Y[›šœÞ
Ý™KßJ_JKšœÞ
˜KÜ]ˆ‹ÙX[ËÎšYÛYÙ\ˆ‹[[Y[›šœÞ
\Ü™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\Ý‹Ú[™[Ž›šœÞ
™KßJ_J_JKšœÞ
˜KÜ]‰œ][[Y[›šœÞ
	ßJ_JKšœÞ
˜KÜ]•Nœ][[Y[›šœÞ
NßJ_JKšœÞ
˜KÜ]—Ì‹œ][[Y[›šœÞ
Ì‹ßJ_JKšœÞ
˜KÜ]›]‹œ][[Y[›šœÞ
]‹ßJ_JW_JKšœÞ
ØKÛ˜[YNˆ™X[È‹‹‹•™Ù_JKšœÞ
ØKÛ˜[YNˆ˜ÛÛXÝÈ‹‹‹œ_JKšœÞ
ØKÛ˜[YNˆ˜ÛÛ\[šY\È‹‹‹•Y_JKšœÞ
ØKÛ˜[YNˆ˜ÛÛXÝÛ›Ý\ÈŸJKšœÞ
ØKÛ˜[YNˆ™X[Û›Ý\ÈŸJKšœÞ
ØKÛ˜[YNˆš[›ÚXÙ\ÈŸJKšœÞ
ØKÛ˜[YNˆœ^[Y[ÈŸJKšœÞ
ØKÛ˜[YNˆš›Ø—ØÛÜÝÈŸJKšœÞ
ØKÛ˜[YNˆ\ÚÜÈŸJKšœÞ
ØKÛ˜[YNˆœØ[\È‹‹‹”JKšœÞ
ØKÛ˜[YNˆYÜÈŸJW_JK‘\ÚÝÜYZ[ˆŠKÛXJOOžØÛÛœÝ[™]È[™JÙY˜][Ü[ÛœÎžÜ]Y\šY\ÎžÙØÕ[YNŽMK™]ÛÜšÓ[ÙNˆ›Ù™›[™Qš\œÝŸK]]][ÛœÎžÛ™]ÛÜšÓ[ÙNˆ›Ù™›[™Qš\œÝŸ__JKQ”™JÜÝÜ˜YÙN›ØØ[ÝÜ˜YÙ_JNÜ™]\›ˆšœÞ
T™KØÛY[\œÚ\ÝÜ[ÛœÎžÜ\œÚ\Ý\Ž›ŸKÚ[™[Ž›šœÞÊØÙKÜ]Y\žPÛY[^[Ý]™K›^[Ý]ÏÝ\Ú›Ø\™™K™\Ú›Ø\™ÏÝ™]‹‹™KÚ[™[Ž–ÛšœÞÊ‘KÛ›Ó^[Ý]ˆLÚ[™[Ž–ÛšœÞ
˜KÜ]”Ëœ][[Y[›šœÞ
ËßJ_JKšœÞ
˜KÜ]•Ìœ][[Y[›šœÞ
ÌßJ_JKšœÞ
˜KÜ]›”Ëœ][[Y[›šœÞ
”ËßJ_JKšœÞ
˜KÜ]Ëœ][[Y[›šœÞ
ËßJ_JKšœÞ
˜KÜ]œ”Ëœ][[Y[›šœÞ
”ËßJ_JW_JKšœÞÊ‘KØÚ[™[Ž–ÛšœÞ
˜KÜ]ˆ‹Û™]ËZ›Øˆ‹[[Y[›šœÞ
Ý™KßJ_JKšœÞ
˜KÜ]ˆ‹ÙX[ËÎšYÛYÙ\ˆ‹[[Y[›šœÞ
\Ü™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\Ý‹Ú[™[Ž›šœÞ
™KßJ_J_JKšœÞ
˜KÜ]‘Žœ][[Y[›šœÞ
ŽßJ_JKšœÞ
˜KÜ]›]‹œ][[Y[›šœÞ
]‹ßJ_JW_JKšœÞ
ØKÛ˜[YNˆ™X[È‹‹‹•™Ù_JKšœÞ
ØKÛ˜[YNˆ˜ÛÛXÝÈ‹\Ý›Õ™KÚÝÎ›\K™XÛÜ™™\™\Ù[][ÛŽœKœ™XÛÜ™™\™\Ù[][Û‹Ú[™[Ž›šœÞ
˜KÜ]ˆŽšYÛ›Ý\ËÎ››ÝRY‹[[Y[›šœÞ
[ßJ_J_JKšœÞ
ØKÛ˜[YNˆ˜ÛÛ\[šY\È‹ÚÝÎ“™™_JKšœÞ
ØKÛ˜[YNˆ\ÚÜÈ‹\Ý™›JKšœÞ
ØKÛ˜[YNˆ™X[Û›Ý\ÈŸJKšœÞ
ØKÛ˜[YNˆš[›ÚXÙ\ÈŸJKšœÞ
ØKÛ˜[YNˆœ^[Y[ÈŸJKšœÞ
ØKÛ˜[YNˆš›Ø—ØÛÜÝÈŸJW_J_J_K“[Øš[PYZ[ˆŠK^ÚÙ^Nˆ›™]]˜[‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹X›Ü™\ˆ™ËXØ\™^XØ\™Y›Ü™YÜ›Ý[™‹Y]Y]PÛ\ÜÓ˜[YNˆ^[]]YY›Ü™YÜ›Ý[™ŸK[^ÛXYžÚÙ^Nˆ›XY‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹X›YKML™ËX›YKLL^X›YKNML\šÎ˜›Ü™\‹X›YKMÍÌ\šÎ˜™ËX›YKNMLÍMH\šÎ^X›YKML‹Y]Y]PÛ\ÜÓ˜[YNˆ^X›YKN\šÎ^X›YKLŒŸKš[œÜXÝ[Û‹\ØÚY[YŽžÚÙ^Nˆ›XY‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹X›YKML™ËX›YKLL^X›YKNML\šÎ˜›Ü™\‹X›YKMÍÌ\šÎ˜™ËX›YKNMLÍMH\šÎ^X›YKML‹Y]Y]PÛ\ÜÓ˜[YNˆ^X›YKN\šÎ^X›YKLŒŸKœ›ÜÜXÝXšY[™ÈŽžÚÙ^Nˆ™\Ý[X][™È‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹\›ÜÙKML™Ë\›ÜÙKLL^\›ÜÙKNML\šÎ˜›Ü™\‹\›ÜÙKMÍÌ\šÎ˜™Ë\›ÜÙKNMLÍMH\šÎ^\›ÜÙKML‹Y]Y]PÛ\ÜÓ˜[YNˆ^\›ÜÙKN\šÎ^\›ÜÙKLŒŸK˜ÛZ[KY\Ý[X]K\ÝX›Z]YŽžÚÙ^Nˆ™\Ý[X][™È‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹\›ÜÙKML™Ë\›ÜÙKLL^\›ÜÙKNML\šÎ˜›Ü™\‹\›ÜÙKMÍÌ\šÎ˜™Ë\›ÜÙKNMLÍMH\šÎ^\›ÜÙKML‹Y]Y]PÛ\ÜÓ˜[YNˆ^\›ÜÙKN\šÎ^\›ÜÙKLŒŸKœXË\Ý\[Y[][ÛˆŽžÚÙ^Nˆ™\Ý[X][™È‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹\›ÜÙKML™Ë\›ÜÙKLL^\›ÜÙKNML\šÎ˜›Ü™\‹\›ÜÙKMÍÌ\šÎ˜™Ë\›ÜÙKNMLÍMH\šÎ^\›ÜÙKML‹Y]Y]PÛ\ÜÓ˜[YNˆ^\›ÜÙKN\šÎ^\›ÜÙKLŒŸK]Ø\™žÚÙ^Nˆ˜]Ø\™‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹Y[Y\˜[MŒ™ËY[Y\˜[LL^Y[Y\˜[NML\šÎ˜›Ü™\‹Y[Y\˜[MÍÌ\šÎ˜™ËY[Y\˜[NMLÍMH\šÎ^Y[Y\˜[ML‹Y]Y]PÛ\ÜÓ˜[YNˆ^Y[Y\˜[N\šÎ^Y[Y\˜[LŒŸK˜Z[[™Ë[ZY\›ÙXÝ[ÛˆŽžÚÙ^Nˆœ›ÙXÝ[Ûˆ‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹\Û]KLÌ™ËXØ\™^XØ\™Y›Ü™YÜ›Ý[™\šÎ˜›Ü™\‹\Û]KMÌ‹Y]Y]PÛ\ÜÓ˜[YNˆ^[]]YY›Ü™YÜ›Ý[™ŸK[›ÚXÙYžÚÙ^Nˆš[›ÚXÙY‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹\™YMŒ™Ë\™YLL^\™YNML\šÎ˜›Ü™\‹\™YMÍÌ\šÎ˜™Ë\™YNMLÍMH\šÎ^\™YML‹Y]Y]PÛ\ÜÓ˜[YNˆ^\™YN\šÎ^\™YLŒŸKœ^[Y[X\œ˜[™Ù[Y[ŽžÚÙ^Nˆœ™XÙZ]˜X›H‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹X[X™\‹ML™ËX[X™\‹LL^X[X™\‹NML\šÎ˜›Ü™\‹X[X™\‹MÍÌ\šÎ˜™ËX[X™\‹NMLÍMH\šÎ^X[X™\‹ML‹Y]Y]PÛ\ÜÓ˜[YNˆ^X[X™\‹N\šÎ^X[X™\‹LŒŸK˜˜[[˜ÙKYYHŽžÚÙ^Nˆœ™XÙZ]˜X›H‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹X[X™\‹ML™ËX[X™\‹LL^X[X™\‹NML\šÎ˜›Ü™\‹X[X™\‹MÍÌ\šÎ˜™ËX[X™\‹NMLÍMH\šÎ^X[X™\‹ML‹Y]Y]PÛ\ÜÓ˜[YNˆ^X[X™\‹N\šÎ^X[X™\‹LŒŸKœZYZ[‹Y[ŽžÚÙ^NˆœZY‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹Y[Y\˜[MŒ™ËY[Y\˜[LL^Y[Y\˜[NML\šÎ˜›Ü™\‹Y[Y\˜[MÍÌ\šÎ˜™ËY[Y\˜[NMLÍMH\šÎ^Y[Y\˜[ML‹Y]Y]PÛ\ÜÓ˜[YNˆ^Y[Y\˜[N\šÎ^Y[Y\˜[LŒŸ_K^ÚÙ^Nˆœ™]šY]È‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹X[X™\‹ML™ËX[X™\‹LL^X[X™\‹NMLš[™ËLHš[™ËX[X™\‹MÍL\šÎ˜›Ü™\‹X[X™\‹MÍÌ\šÎ˜™ËX[X™\‹NMLÍMH\šÎ^X[X™\‹ML‹Y]Y]PÛ\ÜÓ˜[YNˆ^X[X™\‹N\šÎ^X[X™\‹LŒŸK[^ÚÙ^Nˆ›Ý™\™YH‹Ø\™Û\ÜÓ˜[YNˆ˜›Ü™\‹X›XÚÈ™ËX›XÚÈ^]Ú]Hš[™ËLHš[™ËX›XÚËÍÌ\šÎ˜›Ü™\‹^š[˜ËML\šÎ˜™ËX›XÚÈ\šÎ^]Ú]H‹Y]Y]PÛ\ÜÓ˜[YNˆ^^š[˜ËLÌŸK]™OXJ
K[™]È]JOOžÚYŠYKœ™XÙZ]˜X›WÙYWÙ]_
Kœ™XÙZ]˜X›WØ˜[[˜ÙOÏÌ
OL
\™]\›ˆLNØÛÛœÝK×ŠÍJKJÌŸJKJÌŸJIË™^XÊKœ™XÙZ]˜X›WÙYWÙ]JK[Û™]È]J[X™\Š–ÌWJK[X™\Š–Ì—JKLK[X™\Š–Ì×JJN›™]È]JKœ™XÙZ]˜X›WÙYWÙ]JNÜ™]\›ˆ‹œÙ]Ý\œÊŒËNKNKNNJK[X™\‹š\Ñš[š]J‹™Ù][YJ
JI‰œ‹™Ù][YJ
O™Ù][YJ
_Kš\Ò›Ø“Ý™\™YHŠK™OXJOO’[ÙWOÏÑ™Ù]›Ø”ÝYÙU[YHŠKŽXJ
K[™]È]JOOž]™JK
OÓ[™K˜]Ø\™Ü™]šY]×ÜÝ]\ÏOOHœ™XYKY›Ü‹\™]šY]ÈÔ˜™JKœÝYÙJK™Ù]›ØØ\™[YHŠKÝOVÞÝ˜[YNˆ›XY‹X™[ˆ“XYÈŸKÝ˜[YNˆœ›ÜÜXÝXšY[™È‹X™[ˆ”›ÜÜXÝÈšY[™ÈŸKÝ˜[YNˆš[œÜXÝ[Û‹\ØÚY[Y‹X™[ˆ’[œÜXÝ[ÛˆØÚY[YŸKÝ˜[YNˆ˜ÛZ[KY\Ý[X]K\ÝX›Z]Y‹X™[ˆ‘\Ý[X]HÝX›Z]YŸKÝ˜[YNˆœXË\Ý\[Y[][Ûˆ‹X™[ˆ”PÈÈÝ\[Y[][ÛˆŸKÝ˜[YNˆ˜]Ø\™‹X™[ˆ•ÛÛˆŸKÝ˜[YNˆ˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹X™[ˆ”›ÙXÝ[ÛˆŸKÝ˜[YNˆš[›ÚXÙY‹X™[ˆ’[›ÚXÙYŸKÝ˜[YNˆœ^[Y[X\œ˜[™Ù[Y[‹X™[ˆ”^[Y[\œ˜[™Ù[Y[ŸKÝ˜[YNˆ˜˜[[˜ÙKYYH‹X™[ˆ˜[[˜ÙHYHŸKÝ˜[YNˆœZYZ[‹Y[‹X™[ˆ”ZY[ˆ[ŸWK[™]ÈÙ]
È˜]Ø\™‹˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹š[›ÚXÙY‹œ^[Y[X\œ˜[™Ù[Y[‹˜˜[[˜ÙKYYH‹œZYZ[‹Y[—JKNXJOO™KœØ[\×ÛÝ]ÛÛYOOOH›ÜÝŸKœÝYÙOOOH™XY‹š\ÓÜÝ›ØˆŠKXJOOˆ\N
JI‰ŠKœØ[\×ÛÝ]ÛÛYOOOHÛÛˆŸš\ÊKœÝYÙJJKš\ÕÛÛ’›ØˆŠK™OXJOO™KÓØØ[TÝš[™Ê™[‹UTÈ‹Û›Ý][ÛŽˆ˜ÛÛ\XÝ‹Ý[Nˆ˜Ý\œ™[˜ÞH‹Ý\œ™[˜ÞNˆ•TÑŸJK›[Û™^IHŠK›XJ

OOžØÛÛœÝÙ]N™OV×K\Ô[™[™ÎO]œŠ™X[È‹ÜYÚ[˜][ÛŽžÜYÙNŒK\”YÙNYLßKÛÜžÙšY[ˆ\]YØ]‹Ü™\Žˆ‘TÐÈŸ_JNÚYŠ
\™]\›ˆšœÞ
[ßJNØÛÛœÝYKœ™YXÙJ
KÊOOŠVÙËœÝYÙWOJVÙËœÝYÙWOÏÌ
JÌKJKßJKYK™š[\Š
KOYK™š[\ŠN
KÏYK™š[\ŠOOˆR
JI‰ˆ\N
JJKÏ\Ëœ™YXÙJ
KÊOO›JÊ[X™\ŠËœ›ÛZ\ÙYØ[[Ý[
_
K
KÏ\‹›[™Ý
ÚK›[™ÝOXÏØ	ÓX]œ›Ý[™
‹›[™ÝØÊŒL
_IXˆ¸ %‹YK™š[\ŠOO›K˜\Ú[Y[ÜÝ\	‰›K˜\Ú[Y[ÛÝ]ÛÛYOOOHœØÚY[Y‰‰›™]È]JK˜\Ú[Y[ÜÝ\
K™Ù][YJ
OQ]K››ÝÊ
JKœÛÜ

KÊOO›™]È]JK˜\Ú[Y[ÜÝ\
K™Ù][YJ
K[™]È]JË˜\Ú[Y[ÜÝ\
K™Ù][YJ
JKYK™š[\ŠOO›K˜]Ø\™Ü™]šY]×ÜÝ]\ÏOOHœ™XYKY›Ü‹\™]šY]ÈŠNÜ™]\›ˆšœÞÊ›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈËY[X^]ËVÌMLHÜXÙK^KMˆLH‹NLHYœLˆ‹Ú[™[Ž–ÛšœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\M›Ý[™Y^›Ü™\ˆ™ËXØ\™MHÚYÝË\ÛHY™›^\›ÝÈYš][\ËXÙ[\ˆYš\ÝYžKX™]ÙY[ˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^Lž›ÛX›Û˜XÚÚ[™Ë]YÚY^LÞ‹Ú[™[Žˆ’›ØœÈŸJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^\ÛH^[]]YY›Ü™YÜ›Ý[™Y^X˜\ÙH‹Ú[™[Žˆ“XYË\Ú[Y[Ë]Ø\™Ë™]™[YK[™›ÙXÝ[Ûˆ]HÛ[˜ÙKˆŸJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\Ø\Lˆ‹Ú[™[Ž–ÛšœÞ
™KØ\ÐÚ[ˆLÚ[™[Ž›šœÞ
‹ÝÎˆ‹Û™]ËZ›Øˆ‹Ú[™[Žˆ“™]È›ØˆŸJ_JKšœÞ
™KØ\ÐÚ[ˆL˜\šX[ˆ›Ý][™H‹Ú[™[Ž›šœÞÊ‹ÝÎˆ‹ÙX[È‹Ú[™[Ž–È“Ü[ˆ›Øˆ›Ø\™‹šœÞ
ŒËßJW_J_JW_JW_JKšœÞ
ž‹ßJKšœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈY™ÜšYXÛÛËM™ÜšYXÛÛËMÈ‹Ú[™[Ž–ÛšœÞ
ÙËÛX™[ˆ•Ý[›ØœÈ‹˜[YN™K›[™ÝXÛÛŽ”šßJKšœÞ
ÙËÛX™[ˆ“Ü[ˆXYÈ‹˜[YNœË›[™ÝXÛÛŽZÙ_JKšœÞ
ÙËÛX™[ˆ‘^XÝYØ[\È‹˜[YNž™JÊKXÛÛŽ›UJKšœÞ
ÙËÛX™[ˆ]Ø\™Y‹˜[YNœ‹›[™ÝXÛÛŽ’˜ŸJKšœÞ
ÙËÛX™[ˆ“ÜÝ‹˜[YNšK›[™ÝXÛÛŽ˜ÙJKšœÞ
ÙËÛX™[ˆ•Ú[ˆ˜]H‹˜[YNKXÛÛŽ“™_JKšœÞ
ÙËÛX™[ˆ\Ú[Y[È‹˜[YN™‹›[™ÝXÛÛŽ™ÕJW_JK›[™ÝÛšœÞ
\Ü™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\Ý‹Ú[™[Ž›šœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹X[X™\‹ML™ËX[X™\‹MLÎ\šÎ˜™ËX[X™\‹NMLÌŒ‹Ú[™[Ž–ÛšœÞ
ØKØÚ[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ“ÝÛ™\ˆXÝ[Ûˆ™\]Z\™YŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ›]LH›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
ÓÙKØÛ\ÜÓ˜[YNˆœÚ^™KMH^X[X™\‹MÌ\šÎ^X[X™\‹MŸJK›[™Ýˆ›Øˆ‹›[™ÝOOLOÈˆŽˆœÈ‹ˆ™XYH›Üˆ]Ø\™™]šY]È—_JW_JKšœÞ
Ü‹ØÛ\ÜÓ˜[YNˆ˜™ËX[X™\‹ML^X›XÚÈÝ™\Ž˜™ËX[X™\‹ML‹Ú[™[Žˆ”‘U’QUÈÔ‘QS•PSÈŸJW_J_JKšœÞ
‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\LˆY™ÜšYXÛÛËLˆ™ÜšYXÛÛËLÈ‹Ú[™[Žš›X\
OO›šœÞÊ‹ÝÎ˜ÙX[ËÉÛKšYKÜÚÝØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆØ\LÈ›Ý[™Y[È›Ü™\ˆ›Ü™\‹X[X™\‹MÍÌ™ËX˜XÚÙÜ›Ý[™LÈ˜[œÚ][Û‹XÛÛÜœÈÝ™\Ž˜™ËX[X™\‹LLÍÌ\šÎšÝ™\Ž˜™ËX[X™\‹NMLÍ‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^\ÛH›Û\Ù[ZX›Û‹Ú[™[Ž›K›˜[Y_JKšœÞ
ŒËØÛ\ÜÓ˜[YNˆœÚ^™KMÚš[šËLŸJW_KKšY
J_JW_J_JN›[šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\Mˆ™ÜšYXÛÛËVÛZ[›X^
KŒ™œŠWÛZ[›X^
ÍŽœŠWH‹Ú[™[Ž–ÛšœÞÊÛ‹ØÚ[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ”Ø[\È[™›ÙXÝ[ÛˆŸJKšœÞ
ØKØÚ[™[Žˆ’›Øˆ\[[™HŸJW_JKšœÞ
‹ØÚ[™[Ž›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\LˆÛN™ÜšYXÛÛËLˆÎ™ÜšYXÛÛËLÈ‹Ú[™[ŽšÝK›X\
OOžØÛÛœÝÏX™JK˜[YJNÜ™]\›ˆšœÞÊ‹ÝÎˆ‹ÙX[È‹™]KZ›Ø‹][YHŽ™ËšÙ^KÛ\ÜÓ˜[YN•J™›^Z[‹ZLŒ][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆ›Ý[™Y[È›Ü™\ˆMKLÈ˜[œÚ][Û‹\ÚYÝÈÝ™\ŽœÚYÝË[Y‹Ë˜Ø\™Û\ÜÓ˜[YJKÚ[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][HXY[™Ë]YÚ‹Ú[™[Ž›K›X™[JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›[LÈ^Lž›ÛX›ÛX[\‹[[\È‹Ú[™[Ž›–ÛK˜[YWOÏÌJW_KK˜[YJ_J_J_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KMˆ‹Ú[™[Ž–ÛšœÞÊÛ‹ØÚ[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ”ØÚY[Yš\Ú]È[™ÛÜšÈŸJKšœÞ
ØKØÚ[™[Žˆ•\ÛÛZ[™È\Ú[Y[ÈŸJW_JKšœÞ
‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž™‹›[™ÝÙ‹œÛXÙJJK›X\
OOžØÛÛœÝÏ^Ž
JNÜ™]\›ˆšœÞÊ‹ÝÎ˜ÙX[ËÉÛKšYKÜÚÝØ™]KZ›Ø‹][YHŽ™ËšÙ^KÛ\ÜÓ˜[YN•J™›^][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆØ\LÈ›Ý[™Y[È›Ü™\ˆLÈ˜[œÚ][Û‹\ÚYÝÈÝ™\ŽœÚYÝË[Y‹Ë˜Ø\™Û\ÜÓ˜[YJKÚ[™[Ž–ÛšœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈ[˜Ø]H^\ÛH›Û\Ù[ZX›Û‹Ú[™[Ž›K›˜[Y_JKšœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YN•J›]LH›ØÚÈ^^È‹Ë›Y]Y]PÛ\ÜÓ˜[YJKÚ[™[Ž–Ù™JK˜\Ú[Y[Ý\JKˆ0­È‹ˆ‹™JK˜\Ú[Y[ÜÝ\
W_JW_JKšœÞ
ÕØÛ\ÜÓ˜[YNˆœÚ^™KMÚš[šËLŸJW_KKšY
_JN›šœÞ
œ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆ›Ü™\‹Y\ÚYMH^XÙ[\ˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ“›È\ÛÛZ[™È\Ú[Y[Ëˆ›ØœÈØ[ˆ™H[\™YÚ]Ý]Û™KˆŸJ_JW_JKšœÞÊÛ‹ØÚ[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ“[ÜÝ™XÙ[H\]YŸJKšœÞ
ØKØÚ[™[ŽˆÝ\œ™[›ØœÈŸJW_JKšœÞ
‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž™KœÛXÙJJK›X\
OOžØÛÛœÝÏ^Ž
JNÜ™]\›ˆšœÞÊ‹ÝÎ˜ÙX[ËÉÛKšYKÜÚÝØ™]KZ›Ø‹][YHŽ™ËšÙ^KÛ\ÜÓ˜[YN•J™›^][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆØ\LÈ›Ý[™Y[È›Ü™\ˆLÈ˜[œÚ][Û‹\ÚYÝÈÝ™\ŽœÚYÝË[Y‹Ë˜Ø\™Û\ÜÓ˜[YJKÚ[™[Ž–ÛšœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈ[˜Ø]H^\ÛH›Û\Ù[ZX›Û‹Ú[™[Ž›K›˜[Y_JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN•J›]LH›ØÚÈ^^È‹Ë›Y]Y]PÛ\ÜÓ˜[YJKÚ[™[Ž™ËšÙ^OOOH›Ý™\™YHÈ“Ý™\™YH˜[[˜ÙHŽšÝK™š[™
O˜‹˜[YOOO[KœÝYÙJOË›X™[ÏÛKœÝYÙ_JW_JKšœÞ
ŒËØÛ\ÜÓ˜[YNˆœÚ^™KMÚš[šËLŸJW_KKšY
_J_JW_JW_JW_JKšœÞ
\Ü™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\Ý‹Ú[™[Ž›šœÞ
	Ú›ØœÎ™_J_JW_J_K•[Xœ™[Q\Ú›Ø\™ŠK	XJ
Ú›ØœÎ™_JOOžØÛÛœÝ^Ùš[\ŽžßKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNYLßKÛÜžÙšY[ˆšY‹Ü™\Žˆ‘TÐÈŸ_KÙ]N›V×_O]œŠš[›ÚXÙ\È‹
KÙ]NœV×_O]œŠœ^[Y[È‹
KÙ]NšOV×_O]œŠš›Ø—ØÛÜÝÈ‹
KÏYK™š[\Š
Kœ™YXÙJ
JOOš
ÛK˜[[Ý[
KÏ[‹œ™YXÙJ
JOOš
ÛK˜[[Ý[
KÏ\‹œ™YXÙJ
JOOš
ÛK˜[[Ý[
KOZKœ™YXÙJ
JOOš
ÛK˜[[Ý[
K[‹œ™YXÙJ
JOO“X]›X^
[X™\ŠKš[›ÚXÙWÛ[X™\Š_
KÌLÍŽ
NÜ™]\›ˆšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹\š[X\žKÌÌ‹Ú[™[Ž–ÛšœÞ
ØKØÚ[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ“ÝÛ™\ˆÛ›HŸJKšœÞ
ØKØÚ[™[Žˆ’›ØˆYÙ\ˆŸJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹Ú[™[Ž–ÛšœÞÊÜ‹Ý˜\šX[ˆ›Ý][™H‹Ú[™[Ž–È“™^[›ÚXÙH‹ŠÌW_JKšœÞ
Ü‹Ý˜\šX[ˆ›Ý][™H‹Ú[™[Žˆ“™^\Ý[X]HLNŸJW_JW_J_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈÎ™ÜšYXÛÛËMH‹Ú[™[Ž–ÛšœÞ
LKÛX™[ˆ]Ø\™Y™]™[YH‹˜[YNœßJKšœÞ
LKÛX™[ˆ’[›ÚXÙY‹˜[YN›ßJKšœÞ
LKÛX™[ˆÛÛXÝY‹˜[YN˜ßJKšœÞ
LKÛX™[ˆ’›ØˆÛÜÝÈ‹˜[YN_JKšœÞ
LKÛX™[ˆØ\Ú›Ùš]‹˜[YN˜Ë]_JW_JW_J_K“ÝÛ™\“YÙ\”Ý[[X\žHŠKÙÏXJ
ÛX™[™K˜[YNXÛÛŽ›ŸJOO›šœÞ
Û‹ØÛ\ÜÓ˜[YNˆ™Ø\LÈKM‹Ú[™[Ž›šœÞÊ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\Ý\\ÝYžKX™]ÙY[ˆMYœMH‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û\Ù[ZX›Û^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^Lž›ÛX›ÛX[\‹[[\ÈY^LÞ‹Ú[™[ŽJW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È™Ë\š[X\žKÌLLˆ^\š[X\žH‹Ú[™[Ž›šœÞ
‹ØÛ\ÜÓ˜[YNˆœÚ^™KMHŸJ_JW_J_JK“Y]šXÈŠKLOXJ
ÛX™[™K˜[YNJOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™M‹Ú[™[Ž–ÛšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–ÙOOOHÛÛXÝYÛšœÞ
UØÛ\ÜÓ˜[YNˆœÚ^™KMŸJN›šœÞ
UØÛ\ÜÓ˜[YNˆœÚ^™KMŸJKW_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^^›ÛX›ÛX[\‹[[\È‹Ú[™[Žž™J
_JW_JK“ÝÛ™\“Y]šXÈŠK[XJ

OO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]ÈËY[X^]ËVÌMLHÜXÙK^KMLˆKLˆ‹Ú[™[Ž–ÛšœÞ
\‹ØÛ\ÜÓ˜[YNˆšLŽËY[›Ý[™Y^ŸJKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLˆØ\LÈY™ÜšYXÛÛËM™ÜšYXÛÛËMÈ‹Ú[™[Ž\œ˜^K™œ›ÛJÛ[™ÝßJK›X\

K
OO›šœÞ
\‹ØÛ\ÜÓ˜[YNˆšL›Ý[™Y^ŸK
J_JKšœÞ
\‹ØÛ\ÜÓ˜[YNˆšNËY[›Ý[™Y^ŸJW_JK‘\Ú›Ø\™ØY[™ÈŠK›XJ

OO›šœÞ
ÛÙ\Ú›Ø\™‘›\ØX›U[[Y]žNˆL]Nˆ•[Xœ™[HÔ“HŸJK\	HŠNÈœÙ\šXÙUÛÜšÙ\ˆš[ˆ˜]šYØ]Ü‰‰Ú[™ÝË˜Y]™[\Ý[™\Š›ØY‹

OOžÛ˜]šYØ]Ü‹œÙ\šXÙUÛÜšÙ\‹œ™YÚ\Ý\Š‹‹ÜÝËšœÈ‹ÜØÛÜNˆ‹‹ÈŸJ_JNÝÚ[™ÝË˜Y]™[\Ý[™\Šš]Nœ™[ØY\œ›Üˆ‹

OOžØÛÛœÝOH˜Ú[šË\™[ØYŽÜÙ\ÜÚ[Û”ÝÜ˜YÙK™Ù]][JJ_
Ù\ÜÚ[Û”ÝÜ˜YÙKœÙ]][JKŒHŠKÚ[™ÝË›ØØ][Û‹œ™[ØY

J_JNÜ™K˜Ü™X]T›ÛÝ
ØÝ[Y[™Ù][[Y[žRY
œ›ÛÝŠJKœ™[™\ŠšœÞ
”ÝšXÝ[ÙKØÚ[™[Ž›šœÞ
L‹Ù˜[˜XÚÔ™[™\Ž˜J
Ù\œ›ÜŽ™_JOO›šœÞÊ›XZ[ˆ‹ØÛ\ÜÓ˜[YNˆ›^X]]È›^Z[‹Z\ØÜ™Y[ˆX^]ËLž›^XÛÛ\ÝYžKXÙ[\ˆØ\MN^\Û]KNML‹Ú[™[Ž–ÛšœÞ
šH‹ØÛ\ÜÓ˜[YNˆ^Lž›ÛX›Û‹Ú[™[Žˆ•[Xœ™[HÔ“HÛÝ[›ÝÝ\ŸJKšœÞ
œ‹ØÚ[™[Žˆ•H\XØ][Ûˆ]HÝ\\\œ›Ü‹ˆ™[ØYÛ˜ÙKˆYˆ\ÈØÜ™Y[ˆ™[XZ[œËÙ[™H\œ›Üˆ™[ÝÈÈHÝÛ™\‹ˆŸJKšœÞ
œ™H‹ØÛ\ÜÓ˜[YNˆ›Ý™\™›ÝËX]]È›Ý[™Y[È›Ü™\ˆ›Ü™\‹\™YLÌ™Ë\™YMLM^\ÛH^\™YNML‹Ú[™[Ž™H[œÝ[˜Ù[Ùˆ\œ›ÜÙK›Y\ÜØYÙN”Ýš[™ÊJ_JW_JK™˜[˜XÚÔ™[™\ˆŠKÚ[™[Ž›šœÞ
›ßJ_J_JJNÙ[˜Ý[ÛˆÊJ^Ü™]\›˜Z[šYšYY™Y^\œ›ÜˆÉÙ_NÈš\Ú]Î‹ËÜ™Y^šœË›Ü™ËÑ\œ›ÜœÏØÛÙOIÙ_H›ÜˆH[Y\ÜØYÙHÜˆ\ÙHH›Û‹[Z[šYšYY]ˆ[š\›Û›Y[›Üˆ[\œ›ÜœËˆXJË™›Ü›X]›Ù\œ›Ü“Y\ÜØYÙHŠNÝ˜\ˆ›]\[ÙˆÞ[X›ÛOH™[˜Ý[Ûˆ‰‰”Þ[X›Û›ØœÙ\˜X›_ØœÙ\˜X›H‹O^›ÝOXJ

OO“X]œ˜[™ÛJ
KÔÝš[™ÊÍŠKœÝXœÝš[™ÊÊKœÜ]
ˆŠKš›Ú[Š‹ˆŠKœ˜[™ÛTÝš[™ÈŠK[^ÒS’U˜™Y^ÒS’U	ÓÝJ
_X‘TPÑN˜™Y^Ô‘TPÑIÓÝJ
_XKO\[Ù[˜Ý[Ûˆ
J^ÚYŠ\[ÙˆHOH›Øš™XÝŸOOO[[
\™]\›ˆLNÛ]YNÙ›ÜŠÓØš™XÝ™Ù]›ÝÝ\SÙŠ
HOO[[Ê]SØš™XÝ™Ù]›ÝÝ\SÙŠ
NÜ™]\›ˆØš™XÝ™Ù]›ÝÝ\SÙŠJOOO]Øš™XÝ™Ù]›ÝÝ\SÙŠJOOO[[XJš\ÔZ[“Øš™XÝŠNÙ[˜Ý[ÛˆÝ™JKŠ^ÚYŠ\[ÙˆHOH™[˜Ý[ÛˆŠ]›ÝÈ™]È\œ›ÜŠÊŠJNÚYŠ\[ÙˆOH™[˜Ý[Ûˆ‰‰\[ÙˆOH™[˜Ý[ÛˆŸ\[ÙˆOH™[˜Ý[Ûˆ‰‰\[Ùˆ\™Ý[Y[ÖÌ×OOH™[˜Ý[ÛˆŠ]›ÝÈ™]È\œ›ÜŠÊ
JNÚYŠ\[ÙˆOH™[˜Ý[Ûˆ‰‰\[ÙˆˆH‰‰Š]]›ÚY
K\[ÙˆHŠ^ÚYŠ\[ÙˆˆOH™[˜Ý[ÛˆŠ]›ÝÈ™]È\œ›ÜŠÊJJNÜ™]\›ˆŠÝ™JJK
_[]YKO]Ï[™]ÈX\Ï\ËÏLOHLNÙ[˜Ý[ÛˆŠ
^ÛÏOO\É‰ŠÏ[™]ÈX\Ë™›Ü‘XXÚ

KŠOOžÛËœÙ]
‹J_JJ_XJ‹™[œÝ\™PØ[“]]]S™^\Ý[™\œÈŠNÙ[˜Ý[Ûˆ

^ÚYŠJ]›ÝÈ™]È\œ›ÜŠÊÊJNÜ™]\›ˆ_XJ™Ù]Ý]HŠNÙ[˜Ý[ÛˆJJ^ÚYŠ\[ÙˆHOH™[˜Ý[ÛˆŠ]›ÝÈ™]È\œ›ÜŠÊ
JNÚYŠJ]›ÝÈ™]È\œ›ÜŠÊJJNÛ]HLÙŠ
NØÛÛœÝXÊÊÎÜ™]\›ˆËœÙ]
‹JKJ[˜Ý[ÛŠ
^ÚYŠŠ^ÚYŠJ]›ÝÈ™]È\œ›ÜŠÊŠJNÔHLKŠ
KË™[]JŠKÏ[[_K[œÝXœØÜšX™HŠ_XJKœÝXœØÜšX™HŠNÙ[˜Ý[ÛˆÊJ^ÚYŠR
JJ]›ÝÈ™]È\œ›ÜŠÊÊJNÚYŠ\[ÙˆK\OˆHŠ]›ÝÈ™]È\œ›ÜŠÊ
JNÚYŠ\[ÙˆK\HOHœÝš[™ÈŠ]›ÝÈ™]È\œ›ÜŠÊMÊJNÚYŠJ]›ÝÈ™]È\œ›ÜŠÊJJNÝž^ÝOHLO\ŠKJ_Yš[˜[^ÝOHL_\™]\›ŠÏ[ÊK™›Ü‘XXÚ
OžÚŠ
_JK_XJË™\Ü]ÚŠNÙ[˜Ý[ÛˆŠJ^ÚYŠ\[ÙˆHOH™[˜Ý[ÛˆŠ]›ÝÈ™]È\œ›ÜŠÊL
JNÜQKÊÝ\N‘K”‘TPÑ_J_XJ‹œ™\XÙT™YXÙ\ˆŠNÙ[˜Ý[ÛˆÊ
^ØÛÛœÝO[NÜ™]\›žÜÝXœØÜšX™JŠ^ÚYŠ\[ÙˆˆOH›Øš™XÝŸOO[[
]›ÝÈ™]È\œ›ÜŠÊLJJNÙ[˜Ý[ÛˆŠ
^ØÛÛœÝTŽÕ›™^	‰•›™^


J_\™]\›ˆJ‹›ØœÙ\™TÝ]HŠKŠ
KÝ[œÝXœØÜšX™N‘JŠ__KÓWJ
^Ü™]\›ˆ\ß__\™]\›ˆJË›ØœÙ\˜X›HŠKÊÝ\N‘K’S’UJKÙ\Ü]Ú™ËÝXœØÜšX™N›KÙ]Ý]Nš™\XÙT™YXÙ\Ž˜‹ÓWNß_XJÝ™K˜Ü™X]TÝÜ™IHŠNÙ[˜Ý[Ûˆ]JK
^Ü™]\›ˆ[˜Ý[ÛŠ‹‹›Š^Ü™]\›ˆ
K˜\J\ËŠJ__XJ]K˜š[™XÝ[ÛÜ™X]ÜˆŠNÙ[˜Ý[ÛˆJK
^ÚYŠ\[ÙˆOOH™[˜Ý[ÛˆŠ\™]\›ˆ]JK
NÚYŠ\[ÙˆHOH›Øš™XÝŸOOO[[
]›ÝÈ™]È\œ›ÜŠÊMŠJNØÛÛœÝ^ßNÙ›ÜŠÛÛœÝˆ[ˆJ^ØÛÛœÝOYVÜ—NÝ\[ÙˆOOH™[˜Ý[Ûˆ‰‰Š–Ü—OR]JK
J_\™]\›ˆŸXJK˜š[™XÝ[ÛÜ™X]ÜœÉHŠNÙ[˜Ý[ÛˆÝ™J‹‹™J^Ü™]\›ˆK›[™ÝOOLÝO™K›[™ÝOOLOÙVÌN™Kœ™YXÙJ
ŠOOŠ‹‹œŠOO
Š‹‹œŠJJ_XJÝ™K˜ÛÛ\ÜÙHŠNÙ[˜Ý[Ûˆ›
‹‹™J^Ü™]\›ˆOŠ‹ŠOOžØÛÛœÝO]
‹ŠNÛ]ÏXJ

OOžÝ›ÝÈ™]È\œ›ÜŠÊMJJ_K™\Ü]ÚŠNØÛÛœÝÏ^ÙÙ]Ý]NšK™Ù]Ý]K\Ü]Ú˜J
K‹‹™ŠOOœÊK‹‹™ŠK™\Ü]ÚŠ_KÏYK›X\
OOJÊJNÜ™]\›ˆÏWÝ™J‹‹˜ÊJK™\Ü]Ú
KË‹‹šK\Ü]Úœß__XJ›˜\SZY]Ø\™HŠNÝ˜\ˆ	O^Ù^ÜÎžß_KMO^ßNÝ˜\ˆ]NÙ[˜Ý[ÛˆÛ

^ÚYŠ]J\™]\›ˆMNÓ]OLNÝ˜\ˆOIŠ
NÙ[˜Ý[Ûˆ
KŠ^Ü™]\›ˆOOOY‰‰ŠHOOLKÝOOOLKÙŠ_HOO]I‰™ˆOOYŸXJš\ÈŠNÝ˜\ˆ]\[ÙˆØš™XÝš\ÏOH™[˜Ý[ÛˆÓØš™XÝš\ÎYK\ÙTÞ[˜Ñ^\›˜[ÝÜ™KOYK\ÙT™Y‹ÏYK\ÙQY™™XÝÏYK\ÙSY[[ËÏYK\ÙQXYÕ˜[YNÜ™]\›ˆMK\ÙTÞ[˜Ñ^\›˜[ÝÜ™UÚ]Ù[XÝÜY[˜Ý[ÛŠK‹KÊ^Ý˜\ˆZJ[
NÚYŠ‹˜Ý\œ™[OO[[
^Ý˜\ˆÏ^Ú\Õ˜[YNˆLK˜[YN›[NØ‹˜Ý\œ™[]ßY[ÙHÏX‹˜Ý\œ™[Ø[Ê[˜Ý[ÛŠ
^Ù[˜Ý[ÛˆJ
^ÚYŠTŠ^ÚYŠHLQ[J
KÈOO]›ÚY	‰Ëš\Õ˜[YJ^Ý˜\ˆÏ]Ë˜[YNÚYŠÊË
J\™]\›ˆOSß\™]\›ˆOQZYŠÏPKŠ‹
J\™]\›ˆÎÝ˜\ˆ[J
NÜ™]\›ˆÈOO]›ÚY	‰™ÊË
OÊQÊNŠQOT
_XJK›Y[[Ú^™YÙ[XÝÜˆŠNÝ˜\ˆHLK‹KZOO]›ÚYÛ[šÜ™]\›–Ù[˜Ý[ÛŠ
^Ü™]\›ˆJŠ
J_KOO[[Ý›ÚY™[˜Ý[ÛŠ
^Ü™]\›ˆJ

J_W_KÙ‹K×JNÝ˜\ˆÏ\ŠK–ÌK–ÌWJNÜ™]\›ˆÊ[˜Ý[ÛŠ
^ÝËš\Õ˜[YOHLË˜[YOWßK××JKÊÊKßKM_XJÛœ™\]Z\™U\ÙTÞ[˜Ñ^\›˜[ÝÜ™UÚ]Ù[XÝÜ—Ü›ÙXÝ[ÛˆŠNÝ˜\ˆNÙ[˜Ý[ÛˆÛ

^Ü™]\›ˆ_
OLK	K™^ÜÏUÛ

JK	K™^ÜßXJÛœ™\]Z\™UÚ]Ù[XÝÜˆŠNÑÛ

NÝ˜\ˆ[^™\œÚ[Û‹œÝ\ÕÚ]
ŒNHŠKÛTÞ[X›Û™›ÜŠ[Èœ™XXÝ˜[œÚ][Û˜[™[[Y[Žˆœ™XXÝ™[[Y[ŠKTÞ[X›Û™›ÜŠœ™XXÝœÜ[ŠK[TÞ[X›Û™›ÜŠœ™XXÝ™œ˜YÛY[ŠK›TÞ[X›Û™›ÜŠœ™XXÝœÝšXÝÛ[ÙHŠK›TÞ[X›Û™›ÜŠœ™XXÝœ›Ùš[\ˆŠK\TÞ[X›Û™›ÜŠœ™XXÝ˜ÛÛœÝ[Y\ˆŠKTÞ[X›Û™›ÜŠœ™XXÝ˜ÛÛ^ŠK]™OTÞ[X›Û™›ÜŠœ™XXÝ™›ÜØ\™Ü™YˆŠKœTÞ[X›Û™›ÜŠœ™XXÝœÝ\Ü[œÙHŠKœTÞ[X›Û™›ÜŠœ™XXÝœÝ\Ü[œÙWÛ\ÝŠKÞTÞ[X›Û™›ÜŠœ™XXÝ›Y[[ÈŠK\TÞ[X›Û™›ÜŠœ™XXÝ›^žHŠK\Q]™KÜPÞŽÙ[˜Ý[ÛˆÜ
J^ÚYŠ\[ÙˆOOH›Øš™XÝ‰‰™HOO[[
^ØÛÛœÝÉ	\[ÙŽOYNÜÝÚ]Ú

^ØØ\ÙHÛœÝÚ]Ú
OYK\KJ^ØØ\ÙH[˜Ø\ÙH›˜Ø\ÙH›˜Ø\ÙHœ˜Ø\ÙHœœ™]\›ˆNÙY˜][œÝÚ]Ú
OYI‰™K‰	\[Ù‹J^ØØ\ÙH˜Ø\ÙH]™N˜Ø\ÙH\˜Ø\ÙHÞŽœ™]\›ˆNØØ\ÙH\œ™]\›ˆNÙY˜][œ™]\›ˆ_XØ\ÙHœ™]\›ˆ__XJÜ\SÙˆŠNÙ[˜Ý[Ûˆ
J^Ü™]\›ˆÜ
JOOOPÞŸXJš\ÓY[[ÈŠNÙ[˜Ý[ÛˆÜ
K‹‹Ø\™TÝ]\Ñ\]X[šK\™SÝÛ”›ÜÑ\]X[œË\™TÝ]T›ÜÑ\]X[›ßJ^Û]ÏHLKK‹KÎÙ[˜Ý[ÛˆŠ‹J^Ü™]\›ˆOZ‹PKYJKŠKO]
‹ŠKÏ[ŠKŠKÏHLßXJ‹š[™Qš\œÝØ[ŠNÙ[˜Ý[ÛˆÊ
^Ü™]\›ˆYJKŠK™\[™ÓÛ“ÝÛ”›ÜÉ‰ŠO]
‹ŠJKÏ[ŠKŠKßXJËš[™S™]Ô›ÜÐ[™™]ÔÝ]HŠNÙ[˜Ý[ÛˆÊ
^Ü™]\›ˆK™\[™ÓÛ“ÝÛ”›ÜÉ‰ŠYJKŠJK™\[™ÓÛ“ÝÛ”›ÜÉ‰ŠO]
‹ŠJKÏ[ŠKŠKßXJËš[™S™]Ô›ÜÈŠNÙ[˜Ý[ÛˆJ
^ØÛÛœÝYJKŠKOH[Ê‹
NÜ™]\›ˆZ‹I‰ŠÏ[ŠKŠJKßXJKš[™S™]ÔÝ]HŠNÙ[˜Ý[ÛˆŠ‹J^ØÛÛœÝH\ÊKŠKHZJ‹KKŠNÜ™]\›ˆOZ‹PK	‰‘ÝÊ
N•×Ê
N‘ÑJ
N™ß\™]\›ˆJ‹š[™TÝXœÙ\]Y[Ø[ÈŠKJ[˜Ý[ÛŠK
^Ü™]\›ˆÏÔŠK
N˜ŠK
_Kœ\™Qš[˜[›ÜÔÙ[XÝÜˆŠ_XJÜœ\™Qš[˜[›ÜÔÙ[XÝÜ‘˜XÝÜžHŠNÙ[˜Ý[Ûˆ\
KÚ[š]X\Ý]UÔ›ÜÎ[š]X\\Ü]ÚÔ›ÜÎ›‹[š]Y\™ÙT›ÜÎœ‹‹‹š_J^ØÛÛœÝÏ]
KJKÏ[ŠKJKÏ\ŠKJNÜ™]\›ˆÜ
ËËËKJ_XJ\™š[˜[›ÜÔÙ[XÝÜ‘˜XÝÜžHŠNÙ[˜Ý[Ûˆ
K
^ØÛÛœÝ^ßNÙ›ÜŠÛÛœÝˆ[ˆJ^ØÛÛœÝOYVÜ—NÝ\[ÙˆOOH™[˜Ý[Ûˆ‰‰Š–Ü—OJ‹‹œÊOO
J‹‹œÊJJ_\™]\›ˆŸXJ˜š[™XÝ[ÛÜ™X]ÜœÈŠNÙ[˜Ý[ÛˆŽ
J^Ü™]\›ˆJ[˜Ý[ÛŠŠ^ØÛÛœÝYJŠNÙ[˜Ý[ÛˆJ
^Ü™]\›ˆŸ\™]\›ˆJK˜ÛÛœÝ[Ù[XÝÜˆŠKK™\[™ÓÛ“ÝÛ”›ÜÏHLK_Kš[š]ÛÛœÝ[Ù[XÝÜˆŠ_XJŽÜ˜\X\Ô›ÜÐÛÛœÝ[ŠNÙ[˜Ý[ÛˆJJ^Ü™]\›ˆK™\[™ÓÛ“ÝÛ”›ÜÏÈHYK™\[™ÓÛ“ÝÛ”›ÜÎ™K›[™ÝOOL_XJK™Ù]\[™ÓÛ“ÝÛ”›ÜÈŠNÙ[˜Ý[ÛˆÝ™JK
^Ü™]\›ˆJ[˜Ý[ÛŠ‹Ù\Ü^S˜[YNš_J^ØÛÛœÝÏXJ[˜Ý[ÛŠËJ^Ü™]\›ˆË™\[™ÓÛ“ÝÛ”›ÜÏÜË›X\Ô›ÜÊËJNœË›X\Ô›ÜÊË›ÚY
_K›X\Ô›ÜÔ›ÞHŠNÜ™]\›ˆË™\[™ÓÛ“ÝÛ”›ÜÏHLË›X\Ô›ÜÏXJ[˜Ý[ÛŠËJ^ÜË›X\Ô›ÜÏYKË™\[™ÓÛ“ÝÛ”›ÜÏQJJNÛ]\ÊËJNÜ™]\›ˆ\[ÙˆOH™[˜Ý[Ûˆ‰‰ŠË›X\Ô›ÜÏY‹Ë™\[™ÓÛ“ÝÛ”›ÜÏQJŠK\ÊËJJKŸK™]XÝ˜XÝÜžP[™™\šYžHŠKßKš[š]›ÞTÙ[XÝÜˆŠ_XJÝ™KÜ˜\X\Ô›ÜÑ[˜ÈŠNÙ[˜Ý[ÛˆžŠK
^Ü™]\›Š‹ŠOOžÝ›ÝÈ™]È\œ›ÜŠ[˜[Y˜[YHÙˆ\H	Ý\[Ùˆ_H›Üˆ	ÝH\™Ý[Y[Ú[ˆÛÛ›™XÝ[™ÈÛÛ\Û™[	Ü‹Ü˜\YÛÛ\Û™[˜[Y_K˜
__XJž‹˜Ü™X]R[˜[Y\™Ñ˜XÝÜžHŠNÙ[˜Ý[Ûˆœ
J^Ü™]\›ˆI‰\[ÙˆOOH›Øš™XÝÕŽ
O™
K
JN™OÝ\[ÙˆOOH™[˜Ý[ÛˆÔÝ™JJNšžŠK›X\\Ü]ÚÔ›ÜÈŠN•Ž
OŠÙ\Ü]ÚJJ_XJœ›X\\Ü]ÚÔ›ÜÑ˜XÝÜžHŠNÙ[˜Ý[Ûˆ
J^Ü™]\›ˆOÝ\[ÙˆOOH™[˜Ý[ÛˆÔÝ™JJNšžŠK›X\Ý]UÔ›ÜÈŠN•Ž


OOŠßJJ_XJ›X\Ý]UÔ›ÜÑ˜XÝÜžHŠNÙ[˜Ý[Ûˆ
KŠ^Ü™]\›žË‹‹›‹‹‹™K‹‹_XJ™Y˜][Y\™ÙT›ÜÈŠNÙ[˜Ý[Ûˆ\
J^Ü™]\›ˆJ[˜Ý[ÛŠ‹Ù\Ü^S˜[YNœ‹\™SY\™ÙY›ÜÑ\]X[š_J^Û]ÏHLKÎÜ™]\›ˆJ[˜Ý[ÛŠK‹
^ØÛÛœÝOYJK‹
NÜ™]\›ˆÏÚJKÊ_
Ï[JNŠÏHLÏ[JKßK›Y\™ÙT›ÜÔ›ÞHŠ_Kš[š]Y\™ÙT›ÜÔ›ÞHŠ_XJ\Ü˜\Y\™ÙT›ÜÑ[˜ÈŠNÙ[˜Ý[ÛˆÜ
J^Ü™]\›ˆOÝ\[ÙˆOOH™[˜Ý[ÛˆÛ\
JNšžŠK›Y\™ÙT›ÜÈŠNŠ
OOœXJÜ›Y\™ÙT›ÜÑ˜XÝÜžHŠNÙ[˜Ý[Ûˆœ
J^ÙJ
_XJœ™Y˜][›ÛÜ˜]ÚŠNÙ[˜Ý[Ûˆ\

^Û]O[[[[Ü™]\›žØÛX\Š
^ÙO[[[[K›ÝYžJ
^Ýœ


OOžÛ]YNÙ›ÜŠÛŽÊ[‹˜Ø[˜XÚÊ
K[‹›™^J_KÙ]

^ØÛÛœÝV×NÛ]YNÙ›ÜŠÜŽÊ[‹œ\Ú
ŠK\‹›™^Ü™]\›ˆŸKÝXœØÜšX™JŠ^Û]HLØÛÛœÝO]^ØØ[˜XÚÎ›‹™^›[™]ŽNÜ™]\›ˆKœ™]ÚKœ™]‹›™^ZN™OZKJ[˜Ý[ÛŠ
^È\ŸOOO[[
HLKK›™^ÚK›™^œ™]ZKœ™]ŽZKœ™]‹Kœ™]ÚKœ™]‹›™^ZK›™^™OZK›™^
_K[œÝXœØÜšX™HŠ___XJ\˜Ü™X]S\Ý[™\ÛÛXÝ[ÛˆŠNÝ˜\ˆ	O^Û›ÝYžJ
^ßKÙ]˜J

OO–×K™Ù]Š_NÙ[˜Ý[ÛˆÝ™JK
^Û]‹IKOLÏHLNÙ[˜Ý[ÛˆÊÊ^Ú

NØÛÛœÝO\‹œÝXœØÜšX™JÊNÛ]HLNÜ™]\›Š
OOžÔŸ
HLJ
KJ
J__XJË˜Y™\ÝYÝXˆŠNÙ[˜Ý[ÛˆÊ
^Ü‹››ÝYžJ
_XJË››ÝYžS™\ÝYÝXœÈŠNÙ[˜Ý[ÛˆJ
^ÝË›Û”Ý]PÚ[™ÙI‰Ë›Û”Ý]PÚ[™ÙJ
_XJKš[™PÚ[™ÙUÜ˜\\ˆŠNÙ[˜Ý[ÛˆŠ
^Ü™]\›ˆßXJ‹š\ÔÝXœØÜšX™YŠNÙ[˜Ý[Ûˆ

^ÚJÊËŸ
]Ý˜Y™\ÝYÝXŠJN™KœÝXœØÜšX™JJK^\

J_XJžTÝXœØÜšX™HŠNÙ[˜Ý[ÛˆJ
^ÚKKK‰‰šOOOL	‰ŠŠ
K]›ÚY‹˜ÛX\Š
KIJ_XJKžU[œÝXœØÜšX™HŠNÙ[˜Ý[ÛˆÊ
^Üß
ÏHL

J_XJËžTÝXœØÜšX™TÙ[ˆŠNÙ[˜Ý[ÛˆŠ
^ÜÉ‰ŠÏHLKJ
J_XJ‹žU[œÝXœØÜšX™TÙ[ˆŠNØÛÛœÝÏ^ØY™\ÝYÝXŽ›Ë›ÝYžS™\ÝYÝXœÎ˜Ë[™PÚ[™ÙUÜ˜\\ŽK\ÔÝXœØÜšX™Y™‹žTÝXœØÜšX™N™ËžU[œÝXœØÜšX™N˜‹Ù]\Ý[™\œÎ˜J

OOœ‹™Ù]\Ý[™\œÈŠ_NÜ™]\›ˆßXJÝ™K˜Ü™X]TÝXœØÜš\[ÛˆŠNÝ˜\ˆœXJ

OO\[ÙˆÚ[™ÝÏH‰‰\[ÙˆÚ[™ÝË™ØÝ[Y[H‰‰\[ÙˆÚ[™ÝË™ØÝ[Y[˜Ü™X]Q[[Y[H‹˜Ø[•\ÙQÓHŠKXœ

KÜXJ

OO\[Ùˆ˜]šYØ]ÜH‰‰›˜]šYØ]Ü‹œ›ÙXÝOOH”™XXÝ˜]]™H‹š\Ô[›š[™Ò[”™XXÝ˜]]™HŠKÜ]Ü

K\XJ

OOžÜÞ\ÙS^[Ý]Y™™XÝž\ÙQY™™XÝ™Ù]\ÙR\ÛÛ[ÜœXÓ^[Ý]Y™™XÝŠKLQ\

NÙ[˜Ý[Ûˆ]JK
^Ü™]\›ˆOOO]ÙHOOLOOLKÙOOOLKÝ™HOOYI‰OO]XJ]Kš\ÈŠNÙ[˜Ý[ÛˆJK
^ÚYŠ]JK
J\™]\›ˆLÚYŠ\[ÙˆHOH›Øš™XÝŸOOO[[\[ÙˆOH›Øš™XÝŸOO[[
\™]\›ˆLNØÛÛœÝSØš™XÝšÙ^\ÊJKSØš™XÝšÙ^\Ê
NÚYŠ‹›[™ÝOO\‹›[™Ý
\™]\›ˆLNÙ›ÜŠ]OLÚO‹›[™ÝÚJÊÊZYŠSØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
–ÚWJ_U]JVÛ–ÚWWKÛ–ÚWWJJ\™]\›ˆLNÜ™]\›ˆLXJKœÚ[ÝÑ\]X[ŠNÝ˜\ˆÜ^ØÚ[ÛÛ^\\ÎˆLÛÛ^\NˆLÛÛ^\\ÎˆLY˜][›ÜÎˆL\Ü^S˜[YNˆLÙ]Y˜][›ÜÎˆLÙ]\š]™YÝ]Qœ›ÛQ\œ›ÜŽˆLÙ]\š]™YÝ]Qœ›ÛT›ÜÎˆLZ^[œÎˆL›Ü\\ÎˆL\NˆLKÜ^Û˜[YNˆL[™ÝˆL›ÝÝ\NˆLØ[\ŽˆLØ[YNˆL\™Ý[Y[ÎˆL\š]NˆLKœ^É	\[ÙŽˆL™[™\ŽˆLY˜][›ÜÎˆL\Ü^S˜[YNˆL›Ü\\ÎˆLK™O^É	\[ÙŽˆLÛÛ\\™NˆLY˜][›ÜÎˆL\Ü^S˜[YNˆL›Ü\\ÎˆL\NˆLK\^ÖÚ\NšœÜÜNš™_NÙ[˜Ý[ÛˆJJ^Ü™]\›ˆ
JOÚ™N\ÙK‰	\[Ù—_ÜXJK™Ù]Ý]XÜÈŠNÝ˜\ˆœSØš™XÝ™Yš[™T›Ü\KSØš™XÝ™Ù]ÝÛ”›Ü\S˜[Y\ËOSØš™XÝ™Ù]ÝÛ”›Ü\TÞ[X›ÛËÜSØš™XÝ™Ù]ÝÛ”›Ü\Q\ØÜš\Ü‹œSØš™XÝ™Ù]›ÝÝ\SÙ‹]OSØš™XÝœ›ÝÝ\NÙ[˜Ý[ÛˆÎ
K
^ÚYŠ\[ÙˆOHœÝš[™ÈŠ^ÚYŠ]J^ØÛÛœÝÏSœ

NÜÉ‰œÈOO\]I‰•Î
KÊ_[]U

NÞI‰Š[‹˜ÛÛ˜Ø]
J
JJNØÛÛœÝPJJKOPJ
NÙ›ÜŠ]ÏLÜÏ‹›[™ÝÊÊÜÊ^ØÛÛœÝÏ[–Ü×NÚYŠPÜÛ×I‰ˆJI‰šVÛ×JI‰ˆJ‰‰œ–Û×JJ^ØÛÛœÝÏZÜ
ÊNÝž^Ôœ
KËÊ_XØ]Úß___\™]\›ˆ_XJÎšÚ\Ý›Û”™XXÝÝ]XÜÈŠNÝ˜\ˆÜTÞ[X›Û™›ÜŠœ™XXÝ\™Y^XÛÛ^ŠK]\[ÙˆÛØ˜[\ÏHÙÛØ˜[\ÎžßNÙ[˜Ý[Ûˆ\

^ÚYŠ^˜Ü™X]PÛÛ^
\™]\›žßNØÛÛœÝOQÓÜOÏÏ[™]ÈX\Û]YK™Ù]
˜Ü™X]PÛÛ^
NÜ™]\›ˆ
^˜Ü™X]PÛÛ^
[
KKœÙ]
˜Ü™X]PÛÛ^
JKXJ\™Ù]ÛÛ^ŠNÝ˜\ˆ]™OR\

KVÛ[[NÙ[˜Ý[Ûˆ\
KŠ^ÐLŠ

OO™J‹‹
KŠ_XJ\\ÙR\ÛÛ[ÜœXÓ^[Ý]Y™™XÝÚ]\™ÜÈŠNÙ[˜Ý[Ûˆ
K‹‹KÊ^ÙK˜Ý\œ™[\‹‹˜Ý\œ™[HLKK˜Ý\œ™[	‰ŠK˜Ý\œ™[[[Ê
J_XJ˜Ø\\™UÜ˜\\”›ÜÈŠNÙ[˜Ý[Ûˆœ
K‹‹KËËËK‹
^ÚYŠYJ\™]\›Š
OOžßNÛ]OHLKÏ[[ØÛÛœÝXJ

OOžÚYŠ_XË˜Ý\œ™[
\™]\›ŽØÛÛœÝÏ]™Ù]Ý]J
NÛ]KŽÝž^ÑO\ŠËK˜Ý\œ™[
_XØ]Ú
Š^ÔZ‹ÏZŸTŸ
Ï[[
KOOO\Ë˜Ý\œ™[ÛË˜Ý\œ™[Š
NŠË˜Ý\œ™[QKK˜Ý\œ™[QKË˜Ý\œ™[HL

J_K˜ÚXÚÑ›Ü•\]\ÈŠNÜ™]\›ˆ‹›Û”Ý]PÚ[™ÙOX‹‹žTÝXœØÜšX™J
KŠ
KJ

OOžÚYŠOHL‹žU[œÝXœØÜšX™J
K‹›Û”Ý]PÚ[™ÙO[[Ê]›ÝÈßK[œÝXœØÜšX™UÜ˜\\ˆŠ_XJœœÝXœØÜšX™U\]\ÈŠNÙ[˜Ý[Ûˆ	
K
^Ü™]\›ˆOOO]XJ	œÝšXÝ\]X[ŠNÙ[˜Ý[Ûˆ\
K‹Ü\™Nœ‹\™TÝ]\Ñ\]X[šOI\™SÝÛ”›ÜÑ\]X[œÏPK\™TÝ]T›ÜÑ\]X[›ÏPK\™SY\™ÙY›ÜÑ\]X[˜ÏPK›ÜØ\™™YŽOHLKÛÛ^™P]™_O^ßJ^ØÛÛœÝY‹OZ
JKÏYœ

KYÜ
ŠKÏHHYNÜ™]\›ˆJOOžØÛÛœÝQK™\Ü^S˜[Y_K›˜[Y_ÛÛ\Û™[‹XÛÛ›™XÝ
	ÔŸJXO^ÜÚÝ[[™TÝ]PÚ[™Ù\ÎË\Ü^S˜[YNš‹Ü˜\YÛÛ\Û™[˜[YN”‹Ü˜\YÛÛ\Û™[‘K[š]X\Ý]UÔ›ÜÎ›K[š]X\\Ü]ÚÔ›ÜÎ™Ë[š]Y\™ÙT›ÜÎ˜‹\™TÝ]\Ñ\]X[šK\™TÝ]T›ÜÑ\]X[›Ë\™SÝÛ”›ÜÑ\]X[œË\™SY\™ÙY›ÜÑ\]X[˜ßNÙ[˜Ý[Ûˆ

^ØÛÛœÝÚËK	O^\ÙSY[[Ê

OOžØÛÛœÝÜ™XXÝ™Y^›ÜØ\™Y™YŽ™K‹‹‰_OTÜ™]\›–Ô˜ÛÛ^™K	W_KÔJK^\ÙSY[[Ê

OOžÛ]™OZÜ™]\›ˆÏËÛÛœÝ[Y\‹™_KÚËJKO^\ÙPÛÛ^
ŠKHHTœÝÜ™I‰ˆHTœÝÜ™K™Ù]Ý]I‰ˆHTœÝÜ™K™\Ü]ÚÏHHUI‰ˆHUKœÝÜ™KO^ÔœÝÜ™N•KœÝÜ™KUÏÕK™Ù]Ù\™\”Ý]NœK™Ù]Ý]K^\ÙSY[[Ê

OO\
K™\Ü]ÚJKÜWJKÖK×O^\ÙSY[[Ê

OOžÚYŠ]Ê\™]\›ˆØÛÛœÝ™OPÝ™JKÝ›ÚY•KœÝXœØÜš\[ÛŠK	O]™K››ÝYžS™\ÝYÝXœË˜š[™
™JNÜ™]\›–Ý™K	W_KÜK‹WJKÏ^\ÙSY[[Ê

OOžÕNžË‹‹•KÝXœØÜš\[ÛŽ–_KÞ‹KWJKYO^\ÙT™YŠ›ÚY
K^\ÙT™YŠ	
K^\ÙT™YŠ›ÚY
KYO^\ÙT™YŠLJKÙO^\ÙT™YŠLJKO^\ÙT™YŠ›ÚY
NÐLŠ

OOŠÙK˜Ý\œ™[HL

OOžÛÙK˜Ý\œ™[HL_JK×JNØÛÛœÝYO^\ÙSY[[Ê

OO˜J

OO’‹˜Ý\œ™[	‰‰OOV‹˜Ý\œ™[Ò‹˜Ý\œ™[’
K™Ù]Ý]J
K	
KœÙ[XÝÜˆŠKÜK	JKÙO^\ÙSY[[Ê

OO˜J	OO–OÑœ
ËKK‹YKYKÙK‹Ë	JNŠ
OOžßKœÝXœØÜšX™HŠKÖWJNÓ\
Ö‹YKYK	‹×JNÛ]™NÝž^Ù™O^\ÙTÞ[˜Ñ^\›˜[ÝÜ™JÙKYKÊ
OO’
Š
K	
NYJ_XØ]Ú
™J^Ý›ÝÈK˜Ý\œ™[	‰Š™K›Y\ÜØYÙJÏX•H\œ›ÜˆX^H™HÛÜœ™[]YÚ]\È™]š[Ý\È\œ›ÜŽ‚‰ÙK˜Ý\œ™[œÝXÚßB‚˜
K™_PLŠ

OOžÙK˜Ý\œ™[]›ÚY‹˜Ý\œ™[]›ÚYYK˜Ý\œ™[Y™_JNØÛÛœÝO^\ÙSY[[Ê

OOž˜Ü™X]Q[[Y[
KË‹‹™™K™YŽ“_JKÓKK™WJNÜ™]\›ˆ\ÙSY[[Ê

OOÏÞ˜Ü™X]Q[[Y[
‹”›ÝšY\‹Ý˜[YN‘ßKJNœKÑ‹K×J_XJÛÛ›™XÝ[˜Ý[ÛˆŠNØÛÛœÝÏ^›Y[[Ê
NÚYŠË•Ü˜\YÛÛ\Û™[QKË™\Ü^S˜[YOU™\Ü^S˜[YOZ‹J^ØÛÛœÝÏ^™›ÜØ\™™YŠJ[˜Ý[ÛŠ	Š^Ü™]\›ˆ˜Ü™X]Q[[Y[
ËË‹‹‰™XXÝ™Y^›ÜØ\™Y™YŽ‘ŸJ_K™›ÜØ\™ÛÛ›™XÝ™YˆŠJNÜ™]\›ˆË™\Ü^S˜[YOZ‹Ë•Ü˜\YÛÛ\Û™[QKÎ
ËJ_\™]\›ˆÎ
ËJ_KÜ˜\Ú]ÛÛ›™XÝŠ_XJ\˜ÛÛ›™XÝŠNÝ˜\ˆ™OU\Ù[˜Ý[Ûˆœ
J^ØÛÛœÝØÚ[™[ŽÛÛ^›‹Ù\™\”Ý]Nœ‹ÝÜ™Nš_OYKÏ^\ÙSY[[Ê

OOžØÛÛœÝOPÝ™JJNÜ™]\›žÜÝÜ™NšKÝXœØÜš\[ÛŽKÙ]Ù\™\”Ý]NœÊ
OOœŽ›ÚY_KÚK—JKÏ^\ÙSY[[Ê

OOšK™Ù]Ý]J
KÚWJNÐLŠ

OOžØÛÛœÝÜÝXœØÜš\[ÛŽ_O\ÎÜ™]\›ˆK›Û”Ý]PÚ[™ÙO]K››ÝYžS™\ÝYÝXœËKžTÝXœØÜšX™J
KÈOOZK™Ù]Ý]J
I‰K››ÝYžS™\ÝYÝXœÊ
K

OOžÝKžU[œÝXœØÜšX™J
KK›Û”Ý]PÚ[™ÙO]›ÚY_KÜË×JNØÛÛœÝÏ[Ÿ]™NÜ™]\›ˆ˜Ü™X]Q[[Y[
Ë”›ÝšY\‹Ý˜[YNœßK
_XJœ”›ÝšY\ˆŠNÝ˜\ˆœPœ\H’[˜\šX[˜Z[YŽÙ[˜Ý[Ûˆ
K
^Ý›ÝÈ™]È\œ›ÜŠ\
_XJš[˜\šX[	HŠNÝ˜\ˆÏXJ[˜Ý[ÛŠ
^Ý˜\ˆ]Ü]œšYÚO]˜›ÝÛKÏ]›YÏ\‹\ËÏZK[‹O^ÝÜ›‹šYÚœ‹›ÝÛNšKYœËÚY›ËZYÚ˜ËœËN›‹Ù[\ŽžÞŠŠÜÊKÌ‹NŠJÛŠKÌŸ_NÜ™]\›ˆ_K™Ù]™XÝˆŠK^XJ[˜Ý[ÛŠŠ^Ü™]\›žÝÜÜ[‹ÜY›Y[‹›Y›ÝÛN˜›ÝÛJÛ‹˜›ÝÛKšYÚœšYÚ
Û‹œšYÚ_K™^[™ˆŠKOXJ[˜Ý[ÛŠŠ^Ü™]\›žÝÜÜ
Û‹ÜY›Y
Û‹›Y›ÝÛN˜›ÝÛK[‹˜›ÝÛKšYÚœšYÚ[‹œšYÚ_KœÚš[šÌˆŠKœXJ[˜Ý[ÛŠŠ^Ü™]\›žÝÜÜ
Û‹žKY›Y
Û‹ž›ÝÛN˜›ÝÛJÛ‹žKšYÚœšYÚ
Û‹ž_KœÚYˆŠKO^ÝÜŒšYÚŒ›ÝÛNŒYŒKžXJ[˜Ý[ÛŠ
^Ý˜\ˆ]˜›Ü™\›Þ]›X\™Ú[‹O\OO]›ÚYÞNœ‹Ï]˜›Ü™\‹Ï\ÏOO]›ÚYÞNœËÏ]œY[™ËOXÏOO]›ÚYÞN˜ËTÊ^Š‹JJKTÊJ‹ÊJKOTÊJJJNÜ™]\›žÛX\™Ú[›Þ™‹›Ü™\›Þ”ÊŠKY[™Ð›ÞšÛÛ[›Þ›KX\™Ú[ŽšK›Ü™\Ž›ËY[™Î__K˜Ü™X]P›ÞˆŠKÛXJ[˜Ý[ÛŠ
^Ý˜\ˆ]œÛXÙJLŠK]œÛXÙJLŠNÚYŠˆOOHœŠ\™]\›ˆÝ˜\ˆOS[X™\ŠŠNÜ™]\›ˆ\Ó˜SŠJI‰’

K_Kœ\œÙLˆŠKÜXJ[˜Ý[ÛŠ
^Ü™]\›žÞÚ[™ÝËœYÙVÙ™œÙ]NÚ[™ÝËœYÙVSÙ™œÙ]_K™Ù]Ú[™ÝÔØÜ›ÛˆŠKŒXJ[˜Ý[ÛŠŠ^Ý˜\ˆ]˜›Ü™\›ÞO]˜›Ü™\‹Ï]›X\™Ú[‹Ï]œY[™ËÏUœ
‹ŠNÜ™]\›ˆžŠØ›Ü™\›Þ˜Ë›Ü™\ŽšKX\™Ú[ŽœËY[™Î›ßJ_K›Ù™œÙ]ˆŠKXJ[˜Ý[ÛŠŠ^Ü™]\›ˆOO]›ÚY	‰ŠUÜ

JKŒŠŠ_KÚ]ØÜ›ÛˆŠK™OXJ[˜Ý[ÛŠŠ^Ý˜\ˆ^ÝÜ”Û
‹›X\™Ú[•Ü
KšYÚ”Û
‹›X\™Ú[”šYÚ
K›ÝÛN”Û
‹›X\™Ú[›ÝÛJKY”Û
‹›X\™Ú[“Y
_KO^ÝÜ”Û
‹œY[™ÕÜ
KšYÚ”Û
‹œY[™ÔšYÚ
K›ÝÛN”Û
‹œY[™Ð›ÝÛJKY”Û
‹œY[™ÓY
_KÏ^ÝÜ”Û
‹˜›Ü™\•ÜÚY
KšYÚ”Û
‹˜›Ü™\”šYÚÚY
K›ÝÛN”Û
‹˜›Ü™\›ÝÛUÚY
KY”Û
‹˜›Ü™\“YÚY
_NÜ™]\›ˆžŠØ›Ü™\›ÞX\™Ú[Žœ‹Y[™ÎšK›Ü™\ŽœßJ_K˜Ø[Ý[]P›ÞˆŠKÝ™OXJ[˜Ý[ÛŠ
^Ý˜\ˆ]™Ù]›Ý[™[™ÐÛY[™XÝ

K]Ú[™ÝË™Ù]ÛÛ\]YÝ[J
NÜ™]\›ˆ™J‹Š_K™Ù]›ÞˆŠK”ÏXJ[˜Ý[ÛŠ
^Ý˜\ˆV×K[[OXJ[˜Ý[ÛŠ
^Ù›ÜŠ˜\ˆÏX\™Ý[Y[Ë›[™ÝÏ[™]È\œ˜^JÊKOLÝOÎÝJÊÊXÖÝWOX\™Ý[Y[ÖÝWNÛXË\‰‰Š\™\]Y\Ý[š[X][Û‘œ˜[YJ[˜Ý[ÛŠ
^Ü[[˜\J›ÚYŠ_JJ_KÜ˜\\‘›ˆŠNÜ™]\›ˆK˜Ø[˜Ù[Y[˜Ý[ÛŠ
^Ü‰‰ŠØ[˜Ù[[š[X][Û‘œ˜[YJŠK[[
_K_Kœ˜Y”ØÚŠNÙ[˜Ý[ÛˆÌŠ
^Ü™]\›ˆÌSØš™XÝ˜\ÜÚYÛÓØš™XÝ˜\ÜÚYÛ‹˜š[™

N™[˜Ý[ÛŠJ^Ù›ÜŠ˜\ˆLNÝ\™Ý[Y[Ë›[™ÝÝ
ÊÊ^Ý˜\ˆX\™Ý[Y[ÖÝNÙ›ÜŠ˜\ˆˆ[ˆŠJßJKš\ÓÝÛ”›Ü\K˜Ø[
‹ŠI‰ŠVÜ—O[–Ü—J_\™]\›ˆ_KÌ‹˜\J[\™Ý[Y[Ê_XJÌ‹—Ù^[™ÈŠNÙ[˜Ý[Ûˆ™JK
^ßXJ™K›ÙÈŠNÓ™K˜š[™
[Ø\›ˆŠNÓ™K˜š[™
[™\œ›ÜˆŠNÙ[˜Ý[ÛˆÜ

^ßXJÜ››ÛÜ	ˆŠNÙ[˜Ý[ÛˆÜ
K
^Ü™]\›žË‹‹™K‹‹_XJÜ™Ù]Ü[ÛœÈŠNÙ[˜Ý[Ûˆ
KŠ^ØÛÛœÝ]›X\
OOžØÛÛœÝÏQÜ
‹K›Ü[ÛœÊNÜ™]\›ˆK˜Y]™[\Ý[™\ŠK™]™[˜[YKK™›‹ÊKJ[˜Ý[ÛŠ
^ÙKœ™[[Ý™Q]™[\Ý[™\ŠK™]™[˜[YKK™›‹Ê_K[˜š[™Š_JNÜ™]\›ˆJ[˜Ý[ÛŠ
^Ü‹™›Ü‘XXÚ
ÏOžÜÊ
_J_K[˜š[™[Š_XJ˜š[™]™[ÈŠNØÛÛœÝ\H’[˜\šX[˜Z[Y‹	OXÛ\ÜÈ	H^[™È\œ›ÜžßNØJ	K”˜™[˜\šX[ŠNÛ]ÌINÑÌœ›ÝÝ\KÔÝš[™ÏXJ[˜Ý[ÛŠ
^Ü™]\›ˆ\Ë›Y\ÜØYÙ_KÔÝš[™ÈŠNÙ[˜Ý[ÛˆÝ
K
^Ý›ÝÈ™]ÈÌ
\
_XJÝš[˜\šX[ŠNØÛÛœÝ\OXÛ\ÜÈ\H^[™ÈYKÛÛ\Û™[ØÛÛœÝXÝÜŠ‹‹
^ÜÝ\\Š‹‹
K\Ë˜Ø[˜XÚÜÏ[[\Ë[˜š[™\Ü\Ë›Û•Ú[™ÝÑ\œ›Ü[OžØÛÛœÝ]\Ë™Ù]Ø[˜XÚÜÊ
NÜ‹š\Ñ˜YÙÚ[™Ê
I‰œ‹žPX›Ü

K‹™\œ›Üˆ[œÝ[˜Ù[ÙˆÌ	‰›‹œ™]™[Y˜][

_K\Ë™Ù]Ø[˜XÚÜÏJ
OOžÚYŠ]\Ë˜Ø[˜XÚÜÊ]›ÝÈ™]È\œ›ÜŠ•[˜X›HÈš[™\Ø[˜XÚÜÈ[ˆ\œ›Ü›Ý[™\žKÏˆŠNÜ™]\›ˆ\Ë˜Ø[˜XÚÜßK\ËœÙ]Ø[˜XÚÜÏ[OžÝ\Ë˜Ø[˜XÚÜÏ[Ÿ_XÛÛ\Û™[Y[Ý[

^Ý\Ë[˜š[™T
Ú[™ÝËÞÙ]™[˜[YNˆ™\œ›Üˆ‹›Ž\Ë›Û•Ú[™ÝÑ\œ›ÜŸWJ_XÛÛ\Û™[YØ]Ú

^ÚYŠ[œÝ[˜Ù[ÙˆÌ
^Ý\ËœÙ]Ý]JßJNÜ™]\›Ÿ]›ÝÈXÛÛ\Û™[Ú[[›[Ý[

^Ý\Ë[˜š[™

_\™[™\Š
^Ü™]\›ˆ\Ëœ›ÜË˜Ú[™[Š\ËœÙ]Ø[˜XÚÜÊ__NØJ\K‘\œ›Ü›Ý[™\žHŠNÛ]ÎU\NØÛÛœÝÜXˆ™\ÜÈÜXÙH˜\ˆÈÝ\H˜YË‚ˆÚ[ˆ˜YÙÚ[™È[ÝHØ[ˆ\ÙHH\œ›ÝÈÙ^\ÈÈ[Ý™HH][H\›Ý[™[™\ØØ\HÈØ[˜Ù[‚ˆÛÛYHØÜ™Y[ˆ™XY\œÈX^H™\]Z\™H[ÝHÈ™H[ˆ›ØÝ\È[ÙHÜˆÈ\ÙH[Ý\ˆ\ÜÈ›ÝYÚÙ^B˜ŒXJOO™JÌKœÜÚ][ÛˆŠKXJOO˜ˆ[ÝH]™HYY[ˆ][H[ˆÜÚ][Ûˆ	ÓŒŠKœÛÝ\˜ÙKš[™^
_B˜›Û‘˜YÔÝ\ŠKÝ™OXJ
K
OOžØÛÛœÝYK™›ÜX›RYOO]™›ÜX›RYSŒŠKš[™^
KOSŒŠš[™^
NÜ™]\›ˆØˆ[ÝH]™H[Ý™YH][Hœ›ÛHÜÚ][Ûˆ	ÜŸBˆÈÜÚ][Ûˆ	Ú_Bˆ˜ˆ[ÝH]™H[Ý™YH][Hœ›ÛHÜÚ][Ûˆ	ÜŸBˆ[ˆ\Ý	ÙK™›ÜX›RYBˆÈ\Ý	Ý™›ÜX›RYBˆ[ˆÜÚ][Ûˆ	Ú_BˆKÚ]ØØ][ÛˆŠK™OXJ
KŠOO™›ÜX›RYOO[‹™›ÜX›RYØˆH][H	Ù_Bˆ\È™Y[ˆÛÛXš[™YÚ]	Û‹™˜YÙØX›RYX˜ˆH][H	Ù_Bˆ[ˆ\Ý	Ý™›ÜX›RYBˆ\È™Y[ˆÛÛXš[™YÚ]	Û‹™˜YÙØX›RYBˆ[ˆ\Ý	Û‹™›ÜX›RYBˆÚ]ÛÛXš[™HŠK\XJOOžØÛÛœÝYK™\Ý[˜][ÛŽÚYŠ
\™]\›ˆÝ™JKœÛÝ\˜ÙK
NØÛÛœÝYK˜ÛÛXš[™NÜ™]\›ˆÑ™JK™˜YÙØX›RYKœÛÝ\˜ÙKŠNˆ–[ÝH\™HÝ™\ˆ[ˆ\™XH]Ø[››Ý™H›ÜYÛˆŸK›Û‘˜YÕ\]HŠKOXJOO˜ˆH][H\È™]\›™YÈ]ÈÝ\[™ÈÜÚ][Û‚ˆÙˆ	ÓŒŠKš[™^
_B˜œ™]\›™YÔÝ\ŠKœXJOOžÚYŠKœ™X\ÛÛOOHÐSÑSŠ\™]\›˜ˆ[Ý™[Y[Ø[˜Ù[Y‚ˆ	ÕJKœÛÝ\˜ÙJ_BˆØÛÛœÝYK™\Ý[˜][Û‹YK˜ÛÛXš[™NÜ™]\›ˆØˆ[ÝH]™H›ÜYH][K‚ˆ	ÓÝ™JKœÛÝ\˜ÙK
_Bˆ›Øˆ[ÝH]™H›ÜYH][K‚ˆ	Ñ™JK™˜YÙØX›RYKœÛÝ\˜ÙKŠ_Bˆ˜ˆH][H\È™Y[ˆ›ÜYÚ[H›ÝÝ™\ˆH›Ü\™XK‚ˆ	ÕJKœÛÝ\˜ÙJ_BˆK›Û‘˜YÑ[™ŠK^Ù˜YÒ[™U\ØYÙR[œÝXÝ[ÛœÎ’ÜÛ‘˜YÔÝ\–Û‘˜YÕ\]N”\Û‘˜YÑ[™’œNÙ[˜Ý[Ûˆœ
K
^Ü™]\›ˆHJOOO][X™\‹š\Ó˜SŠJI‰“[X™\‹š\Ó˜SŠ
J_XJœš\Ñ\]X[	ˆŠNÙ[˜Ý[Ûˆ]™JK
^ÚYŠK›[™ÝOO]›[™Ý
\™]\›ˆLNÙ›ÜŠ]LÛK›[™ÝÛŠÊÊZYŠVœ
VÛ—KÛ—JJ\™]\›ˆLNÜ™]\›ˆLXJ]™K˜\™R[œ]Ñ\]X[ŠNÙ[˜Ý[ÛˆœŠK
^ØÛÛœÝ^\ÙTÝ]J

OOŠÚ[œ]Î™\Ý[™J
_JJVÌK^\ÙT™YŠL
KO^\ÙT™YŠŠKÏ\‹˜Ý\œ™[HJ	‰šK˜Ý\œ™[š[œ]É‰’]™JK˜Ý\œ™[š[œ]ÊJOÚK˜Ý\œ™[žÚ[œ]Î™\Ý[™J
_NÜ™]\›ˆ\ÙQY™™XÝ


OOžÜ‹˜Ý\œ™[HLKK˜Ý\œ™[[ßKÛ×JKËœ™\Ý[XJœ‹\ÙSY[[ÈŠNÙ[˜Ý[Ûˆ[ŠK
^Ü™]\›ˆœŠ

OO™K
_XJ[‹\ÙPØ[˜XÚÈŠNØÛÛœÝO^ÞŒNŒKZOXJ
K
OOŠÞ™Kž
ÝžN™KžJÝž_JK˜YŠK›ÏXJ
K
OOŠÞ™Kž]žN™KžK]ž_JKœÝX˜XÝŠKÜXJ
K
OO™KžOO]ž	‰™KžOOO]žKš\Ñ\]X[	HŠK]ÏXJOOŠÞ™KžOOLËYKžŒN™KžHOOLËYKžNŒJK›™YØ]HŠKÝXJ
KL
OO™OOOHžÞÞN›ŸNžÞ›‹NKœ]ÚŠK	ÏXJ
K
OO“X]œÜ\

žYKž
JŠŒŠÊžKYKžJJŠŒŠK™\Ý[˜ÙHŠKÝOXJ
K
OO“X]›Z[Š‹‹›X\
O‰ÊKŠJJK˜ÛÜÙ\Ý	HŠK™OXJOOOŠÞ™Jž
KN™JžJ_JK˜\HŠNÝ˜\ˆX]XJ
K
OOžØÛÛœÝTÊÝÜ“X]›X^
ÜKÜ
KšYÚ“X]›Z[ŠœšYÚKœšYÚ
K›ÝÛN“X]›Z[Š˜›ÝÛKK˜›ÝÛJKY“X]›X^
›YK›Y
_JNÜ™]\›ˆ‹ÚYL‹šZYÚLÛ[›ŸK™^XÝ]PÛ\ŠNØÛÛœÝÏXJ
K
OOŠÝÜ™KÜ
ÝžKY™K›Y
Ýž›ÝÛN™K˜›ÝÛJÝžKšYÚ™KœšYÚ
ÝžJK›Ù™œÙ]žTÜÚ][ÛˆŠKÝOXJOO–ÞÞ™K›YN™KÜKÞ™KœšYÚN™KÜKÞ™K›YN™K˜›ÝÛ_KÞ™KœšYÚN™K˜›ÝÛ_WK™Ù]ÛÜ›™\œÈŠK]^ÝÜŒšYÚŒ›ÝÛNŒYŒK˜]XJ
K
OOÞÊKœØÜ›Û™Y™‹™\ÜXÙ[Y[
N™KœØÜ›Û	HŠK˜]XJ
KŠOO›‰‰›‹š[˜Ü™X\ÙYžOÞË‹‹™KÝ™[™N™VÝ™[™JÛ‹š[˜Ü™X\ÙYžVÝ›[™W_N™Kš[˜Ü™X\ÙHŠKX]XJ
K
OO	‰œÚÝ[Û\ÝXš™XÝÙX]
œYÙSX\™Ú[›ÞJN”ÊJK˜Û\ŠNÝ˜\ˆLXJ
ÜYÙN™KÚ]XÙZÛ\Ž^\Î›‹œ˜[YNœŸJOOžØÛÛœÝO[˜]
K›X\™Ú[›ÞŠKÏ\˜]
K‹
KÏXX]
ËŠNÜ™]\›žÜYÙN™KÚ]XÙZÛ\ŽXÝ]™N›ß_K™Ù]ÝXš™XÝŠKXJ
K
OOžÙK™œ˜[Y_Ý

NØÛÛœÝYK™œ˜[YKV›Ê‹œØÜ›Ûš[š]X[
KOP]ÊŠKÏ^Ë‹‹›‹ØÜ›ÛžÚ[š]X[›‹œØÜ›Ûš[š]X[Ý\œ™[Y™ŽžÝ˜[YNœ‹\ÜXÙ[Y[š_KX^›‹œØÜ›Û›X^_KÏVL
ÜYÙN™KœÝXš™XÝœYÙKÚ]XÙZÛ\Ž™KœÝXš™XÝÚ]XÙZÛ\‹^\Î™K˜^\Ëœ˜[YNœßJNÜ™]\›žË‹‹™Kœ˜[YNœËÝXš™XÝ›ß_KœØÜ›Û›ÜX›HŠNÙ[˜Ý[ÛˆZJKR]™J^Û][[Ù[˜Ý[ÛˆŠ‹‹šJ^ÚYŠ‰‰›‹›\Ý\ÏOO]\É‰
K‹›\Ý\™ÜÊJ\™]\›ˆ‹›\Ý™\Ý[ØÛÛœÝÏYK˜\J\ËJNÜ™]\›ˆ^Û\Ý™\Ý[œË\Ý\™ÜÎšK\Ý\Î\ßKß\™]\›ˆJ‹›Y[[Ú^™YŠK‹˜ÛX\XJ[˜Ý[ÛŠ
^Û[[K˜ÛX\ˆŠKŸXJZK›Y[[Ú^™SÛ™HŠNØÛÛœÝ]™OSZJOO™Kœ™YXÙJ
ŠOOŠÛ‹™\ØÜš\Ü‹šYO[‹
KßJJK™OSZJOO™Kœ™YXÙJ
ŠOOŠÛ‹™\ØÜš\Ü‹šYO[‹
KßJJKÓÏSZJOO“Øš™XÝ˜[Y\ÊJJKX]SZJOO“Øš™XÝ˜[Y\ÊJJNÝ˜\ˆÏSZJ
K
OOšX]

K™š[\ŠO™OOO\‹™\ØÜš\Ü‹™›ÜX›RY
KœÛÜ

‹JOOœ‹™\ØÜš\Ü‹š[™^ZK™\ØÜš\Ü‹š[™^
JNÙ[˜Ý[ÛˆÞŠJ^Ü™]\›ˆK˜]	‰™K˜]\OOOH”‘SÔ‘TˆÙK˜]™\Ý[˜][ÛŽ›[XJÞ‹žQÙ]\Ý[˜][ÛˆŠNÙ[˜Ý[ÛˆÊJ^Ü™]\›ˆK˜]	‰™K˜]\OOOHÓÓP’S‘HÙK˜]˜ÛÛXš[™N›[XJËžQÙ]ÛÛXš[™HŠNÝ˜\ˆSÏSZJ
K
OO™š[\ŠO›‹™\ØÜš\Ü‹šYOOYK™\ØÜš\Ü‹šY
JKØ]XJ
Ú\Ó[Ýš[™Ñ›ÜØ\™™K˜YÙØX›N\Ý[˜][ÛŽ›‹[œÚYQ\Ý[˜][ÛŽœ‹™]š[Ý\Ò[\XÝš_JOOžÚYŠ[‹š\ÐÛÛXš[™Q[˜X›YZÞŠJJ\™]\›ˆ[Ù[˜Ý[ÛˆÊŠ^ØÛÛœÝÏ^Ý\NˆÓÓP’S‘H‹ÛÛXš[™NžÙ˜YÙØX›RY˜‹›ÜX›RY›‹™\ØÜš\Ü‹šY_NÜ™]\›žË‹‹šK]ß_XJË™Ù][\XÝŠNØÛÛœÝÏZK™\ÜXÙY˜[OXË›[™ÝØÖÌN›[ÚYŠJ\™]\›ˆOÛÊJN›[ØÛÛœÝTSÊŠNÚYŠ]J^ÚYŠY‹›[™Ý
\™]\›ˆ[ØÛÛœÝY–Ù‹›[™ÝLWNÜ™]\›ˆÊ‹™\ØÜš\Ü‹šY
_XÛÛœÝY‹™š[™[™^
O˜‹™\ØÜš\Ü‹šYOO]JNÚOOKLI‰šÝ

NØÛÛœÝOZLNÚYŠO
\™]\›ˆ[ØÛÛœÝÏY–ÛWNÜ™]\›ˆÊË™\ØÜš\Ü‹šY
_K›[Ý™UÓ™^ÛÛXš[™HŠKÏXJ
K
OO™K™\ØÜš\Ü‹™›ÜX›RYOO]™\ØÜš\Ü‹šYš\ÒÛYSÙˆŠNØÛÛœÝ™O^ÜÚ[“K˜[YNŒKTÏ^Ú[š\ÚX›NžßKš\ÚX›NžßK[–×_KØ]^Ù\ÜXÙY•TË\ÜXÙYžN‘™K]›[NÝ˜\ˆ[XJ
K
OO›O™O[‰‰›]š\ÕÚ][ˆŠK	™OXJOOžØÛÛœÝU[
KÜK˜›ÝÛJKU[
K›YKœšYÚ
NÜ™]\›ˆOžÚYŠ
‹Ü
I‰
‹˜›ÝÛJI‰›Š‹›Y
I‰›Š‹œšYÚ
J\™]\›ˆLØÛÛœÝÏ]
‹Ü
_
‹˜›ÝÛJKÏ[Š‹›Y
_Š‹œšYÚ
NÚYŠÉ‰›Ê\™]\›ˆLØÛÛœÝO\‹ÜKÜ	‰œ‹˜›ÝÛO™K˜›ÝÛK\‹›YK›Y	‰œ‹œšYÚ™KœšYÚÜ™]\›ˆI‰™ÈLI‰›ß‰‰œß_Kš\Ô\X[Uš\ÚX›U›ÝYÚœ˜[YHŠK]XJOOžØÛÛœÝU[
KÜK˜›ÝÛJKU[
K›YKœšYÚ
NÜ™]\›ˆO
‹Ü
I‰
‹˜›ÝÛJI‰›Š‹›Y
I‰›Š‹œšYÚ
_Kš\ÕÝ[Uš\ÚX›U›ÝYÚœ˜[YHŠNØÛÛœÝž^Ù\™XÝ[ÛŽˆ™\XØ[‹[™NˆžH‹Ü›ÜÜÐ^\Ó[™Nˆž‹Ý\ˆÜ‹[™ˆ˜›ÝÛH‹Ú^™NˆšZYÚ‹Ü›ÜÜÐ^\ÔÝ\ˆ›Y‹Ü›ÜÜÐ^\Ñ[™ˆœšYÚ‹Ü›ÜÜÐ^\ÔÚ^™NˆÚYŸK]™O^Ù\™XÝ[ÛŽˆšÜš^›Û[‹[™Nˆž‹Ü›ÜÜÐ^\Ó[™NˆžH‹Ý\ˆ›Y‹[™ˆœšYÚ‹Ú^™NˆÚY‹Ü›ÜÜÐ^\ÔÝ\ˆÜ‹Ü›ÜÜÐ^\Ñ[™ˆ˜›ÝÛH‹Ü›ÜÜÐ^\ÔÚ^™NˆšZYÚŸNÝ˜\ˆØ]XJOOOžØÛÛœÝU[
Ü˜›ÝÛJKU[
›YœšYÚ
NÜ™]\›ˆOO™OOOSžÛŠKÜ
I‰›ŠK˜›ÝÛJNœŠK›Y
I‰œŠKœšYÚ
_Kš\ÕÝ[Uš\ÚX›U›ÝYÚœ˜[YSÛ^\ÈŠNØÛÛœÝX]XJ
K
OOžØÛÛœÝ]™œ˜[YOÝ™œ˜[YKœØÜ›Û™Y™‹™\ÜXÙ[Y[“NÜ™]\›ˆÊKŠ_K™Ù]›ÜX›Q\ÜXÙYŠK]XJ
KŠOOœÝXš™XÝ˜XÝ]™OÛŠœÝXš™XÝ˜XÝ]™JJJNˆLKš\Õš\ÚX›R[‘›ÜX›HŠK˜]XJ
KŠOO›Š
JJKš\Õš\ÚX›R[•šY]ÜÜŠKÞXJ
Ý\™Ù]™K\Ý[˜][ÛŽšY]ÜÜ›‹Ú]›ÜX›Q\ÜXÙ[Y[œ‹\Õš\ÚX›U›ÝYÚœ˜[YQ›Žš_JOOžØÛÛœÝÏ\ÝX]
K
N™NÜ™]\›ˆ]
ËJI‰™˜]
Ë‹J_Kš\Õš\ÚX›IHŠK]XJOO“ÞŠË‹‹™K\Õš\ÚX›U›ÝYÚœ˜[YQ›Ž‰™_JKš\Ô\X[Uš\ÚX›HŠK™OXJOO“ÞŠË‹‹™K\Õš\ÚX›U›ÝYÚœ˜[YQ›Ž›]JKš\ÕÝ[Uš\ÚX›HŠK]XJOO“ÞŠË‹‹™K\Õš\ÚX›U›ÝYÚœ˜[YQ›Ž˜Ø]
K™\Ý[˜][Û‹˜^\Ê_JKš\ÕÝ[Uš\ÚX›SÛ^\ÈŠKX]XJ
KŠOOžÚYŠ\[ÙˆOH˜›ÛÛX[ˆŠ\™]\›ˆŽÚYŠ]
\™]\›ˆLØÛÛœÝÚ[š\ÚX›Nœ‹š\ÚX›Nš_O]ÚYŠ–ÙWJ\™]\›ˆLNØÛÛœÝÏZVÙWNÜ™]\›ˆÏÜËœÚÝ[[š[X]NˆLK™Ù]ÚÝ[[š[X]HŠNÙ[˜Ý[ÛˆØ]
K
^ØÛÛœÝYKœYÙK›X\™Ú[›Þ^ÝÜœÚ[žKšYÚŒ›ÝÛNŒYœÚ[žNÜ™]\›ˆÊ^Š‹ŠJ_XJØ]™Ù]\™Ù]ŠNÙ[˜Ý[Ûˆ”ÊØY\‘˜YÙÚ[™Î™K\Ý[˜][ÛŽ\ÜXÙYžN›‹šY]ÜÜœ‹›Ü˜ÙTÚÝ[[š[X]NšK\ÝœßJ^Ü™]\›ˆKœ™YXÙJJ[˜Ý[ÛŠËJ^ØÛÛœÝYØ]
KŠK]K™\ØÜš\Ü‹šYÚYŠË˜[œ\Ú

KZ]
Ý\™Ù]™‹\Ý[˜][ÛŽšY]ÜÜœ‹Ú]›ÜX›Q\ÜXÙ[Y[ˆLJJ\™]\›ˆËš[š\ÚX›VÝK™\ØÜš\Ü‹šYOHLÎØÛÛœÝÏ[X]
ËJK^Ù˜YÙØX›RYšÚÝ[[š[X]N™ßNÜ™]\›ˆËš\ÚX›VÚOX‹ßKœ›ØÙ\ÜÌˆŠKØ[–×Kš\ÚX›NžßK[š\ÚX›Nžß_J_XJ”Ë™Ù]\ÜXÙ[Y[Ü›Ý\ÈŠNÙ[˜Ý[Ûˆ˜]
K
^ÚYŠYK›[™Ý
\™]\›ˆØÛÛœÝYVÙK›[™ÝLWK™\ØÜš\Ü‹š[™^Ü™]\›ˆš[’ÛYS\ÝÛŽ›ŠÌ_XJ˜]™Ù][™^Ù“\Ý][HŠNÙ[˜Ý[Ûˆ]JÚ[œÚYQ\Ý[˜][ÛŽ™K[’ÛYS\Ý\ÜXÙYžN›‹\Ý[˜][ÛŽœŸJ^ØÛÛœÝO]˜]
KÚ[’ÛYS\ÝJNÜ™]\›žÙ\ÜXÙY•TË\ÜXÙYžN›‹]žÝ\Nˆ”‘SÔ‘Tˆ‹\Ý[˜][ÛŽžÙ›ÜX›RYœ‹™\ØÜš\Ü‹šY[™^š____XJ]K™ÛÐ][™ŠNÙ[˜Ý[ÛˆÌŠÙ˜YÙØX›N™K[œÚYQ\Ý[˜][ÛŽ\Ý[˜][ÛŽ›‹šY]ÜÜœ‹\ÜXÙYžNšK\ÝœË[™^›Ë›Ü˜ÙTÚÝ[[š[X]N˜ßJ^ØÛÛœÝOUÊKŠNÚYŠÏO[[
\™]\›ˆ]JÚ[œÚYQ\Ý[˜][ÛŽ[’ÛYS\ÝK\ÜXÙYžNšK\Ý[˜][ÛŽ›ŸJNØÛÛœÝ]™š[™
ÏOË™\ØÜš\Ü‹š[™^OO[ÊNÚYŠYŠ\™]\›ˆ]JÚ[œÚYQ\Ý[˜][ÛŽ[’ÛYS\ÝK\ÜXÙYžNšK\Ý[˜][ÛŽ›ŸJNØÛÛœÝTSÊK
KO]š[™^ÙŠŠKÏZœÛXÙJJNÜ™]\›žÙ\ÜXÙY”ÊØY\‘˜YÙÚ[™Î™Ë\Ý[˜][ÛŽ›‹\ÜXÙYžNšK\ÝœËšY]ÜÜœ‹™œ˜[YK›Ü˜ÙTÚÝ[[š[X]N˜ßJK\ÜXÙYžNšK]žÝ\Nˆ”‘SÔ‘Tˆ‹\Ý[˜][ÛŽžÙ›ÜX›RY›‹™\ØÜš\Ü‹šY[™^›ß___XJÌ‹˜Ø[Ý[]T™[Ü™\’[\XÝŠNÙ[˜Ý[ÛˆÜ
K
^Ü™]\›ˆH]™Y™™XÝYÙW_XJÜ™YÝ\Y\Üš]XØ[ŠNÝ˜\ˆX]XJ
Ú\Ó[Ýš[™Ñ›ÜØ\™™K\Ý[˜][ÛŽ˜YÙØX›\Î›‹ÛÛXš[™Nœ‹Y\Üš]XØ[š_JOOžÚYŠ]š\ÐÛÛXš[™Q[˜X›Y
\™]\›ˆ[ØÛÛœÝÏ\‹™˜YÙØX›RYÏ[–Ü×K™\ØÜš\Ü‹š[™^Ü™]\›ˆÜ
ËJOÙOØÎ˜ËLN™OØÊÌN˜ßK™œ›ÛPÛÛXš[™HŠK˜]XJ
Ú\Ó[Ýš[™Ñ›ÜØ\™™K\Ò[’ÛYS\Ý[œÚYQ\Ý[˜][ÛŽ›‹ØØ][ÛŽœŸJOOžÚYŠ[‹›[™Ý
\™]\›ˆ[ØÛÛœÝO\‹š[™^ÏYOÚJÌNšKLKÏ[–ÌK™\ØÜš\Ü‹š[™^Ï[–Û‹›[™ÝLWK™\ØÜš\Ü‹š[™^O]ØÎ˜ÊÌNÜ™]\›ˆÏßÏOÛ[œßK™œ›ÛT™[Ü™\ˆŠK]XJ
Ú\Ó[Ýš[™Ñ›ÜØ\™™K\Ò[’ÛYS\Ý˜YÙØX›N›‹˜YÙØX›\Îœ‹\Ý[˜][ÛŽšK[œÚYQ\Ý[˜][ÛŽœË™]š[Ý\Ò[\XÝ›ËšY]ÜÜ˜ËY\Üš]XØ[_JOOžØÛÛœÝ[Ë˜]ÚYŠŸÝ

K‹\OOOH”‘SÔ‘TˆŠ^ØÛÛœÝOX˜]
Ú\Ó[Ýš[™Ñ›ÜØ\™™K\Ò[’ÛYS\ÝØØ][ÛŽ™‹™\Ý[˜][Û‹[œÚYQ\Ý[˜][ÛŽœßJNÜ™]\›ˆOO[[Û[“ÌŠÙ˜YÙØX›N›‹[œÚYQ\Ý[˜][ÛŽœË\Ý[˜][ÛŽšKšY]ÜÜ˜Ë\Ý›Ë™\ÜXÙY\ÜXÙYžN›Ë™\ÜXÙYžK[™^›_J_XÛÛœÝ^X]
Ú\Ó[Ýš[™Ñ›ÜØ\™™K\Ý[˜][ÛŽšK\ÜXÙY›Ë™\ÜXÙY˜YÙØX›\Îœ‹ÛÛXš[™N™‹˜ÛÛXš[™KY\Üš]XØ[_JNÜ™]\›ˆO[[Û[“ÌŠÙ˜YÙØX›N›‹[œÚYQ\Ý[˜][ÛŽœË\Ý[˜][ÛŽšKšY]ÜÜ˜Ë\Ý›Ë™\ÜXÙY\ÜXÙYžN›Ë™\ÜXÙYžK[™^šJ_K›[Ý™UÓ™^[™^ŠKØ]XJ
Ù\ÜXÙY™KY\Üš]XØ[ÛÛXš[™UÚ]›‹\ÜXÙYžNœŸJOOžØÛÛœÝOHHJKš\ÚX›VÛ—_Kš[š\ÚX›VÛ—JNÜ™]\›ˆÜ
‹
OÚOÓN]Ê‹œÚ[
NšOÜ‹œÚ[“_K™Ù]ÛÛXš[™Y][Q\ÜXÙ[Y[ŠKØ]XJ
ØY\Üš]XØ[™K[\XÝ˜YÙØX›\Î›ŸJOOžØÛÛœÝVÊ
NÜŸÝ

NØÛÛœÝO\‹™˜YÙØX›RYÏ[–ÚWKœYÙK˜›Ü™\›Þ˜Ù[\‹Ï]Ø]
Ù\ÜXÙY™\ÜXÙYY\Üš]XØ[™KÛÛXš[™UÚ]šK\ÜXÙYžN™\ÜXÙYž_JNÜ™]\›ˆZJËÊ_KÚ[ÛÛXš[š[™ÈŠNØÛÛœÝ™OXJ
K
OO›X\™Ú[–ÙKœÝ\JÝ˜›Ü™\›ÞÙKœÚ^™WKÌ‹™\Ý[˜ÙQœ›ÛTÝ\Ð›Ü™\›ÞÙ[\ˆŠKX]XJ
K
OO›X\™Ú[–ÙK™[™JÝ˜›Ü™\›ÞÙKœÚ^™WKÌ‹™\Ý[˜ÙQœ›ÛQ[™Ð›Ü™\›ÞÙ[\ˆŠKXJ
KŠOOÙK˜Ü›ÜÜÐ^\ÔÝ\JÛ‹›X\™Ú[–ÙK˜Ü›ÜÜÐ^\ÔÝ\JÛ‹˜›Ü™\›ÞÙK˜Ü›ÜÜÐ^\ÔÚ^™WKÌ‹™Ù]Ü›ÜÜÐ^\Ð›Ü™\›ÞÙ[\ˆŠKÝOXJ
Ø^\Î™K[Ý™T™[]]™UÎ\Ó[Ýš[™Î›ŸJOO™ÝŠK›[™K›X\™Ú[›ÞÙK™[™JÞ™JKŠKŠK›X\™Ú[›ÞŠJK™ÛÐY\ˆŠKOXJ
Ø^\Î™K[Ý™T™[]]™UÎ\Ó[Ýš[™Î›ŸJOO™ÝŠK›[™K›X\™Ú[›ÞÙKœÝ\KQX]
KŠKŠK›X\™Ú[›ÞŠJK™ÛÐ™Y›Ü™HŠKØ]XJ
Ø^\Î™K[Ý™R[Î\Ó[Ýš[™Î›ŸJOO™ÝŠK›[™K˜ÛÛ[›ÞÙKœÝ\JÞ™JKŠKŠK˜ÛÛ[›ÞŠJK™ÛÒ[ÔÝ\ŠNÝ˜\ˆØ]XJ
Ú[\XÝ™K˜YÙØX›N˜YÙØX›\Î›‹›ÜX›Nœ‹Y\Üš]XØ[š_JOOžØÛÛœÝÏTÊ‹™\ØÜš\Ü‹šYŠKÏ]œYÙKÏ\‹˜^\ÎÚYŠ\Ë›[™Ý
\™]\›ˆØ]
Ø^\Î˜Ë[Ý™R[Îœ‹œYÙK\Ó[Ýš[™Î›ßJNØÛÛœÝÙ\ÜXÙYK\ÜXÙYžN™ŸOYK]K˜[ÌNÚYŠ
^ØÛÛœÝÏ[–ÚNÚYŠÜ
JJ\™]\›ˆJØ^\Î˜Ë[Ý™T™[]]™UÎ™ËœYÙK\Ó[Ýš[™Î›ßJNØÛÛœÝTŒŠËœYÙK‹œÚ[
NÜ™]\›ˆJØ^\Î˜Ë[Ý™T™[]]™UÎ˜‹\Ó[Ýš[™Î›ßJ_XÛÛœÝO\ÖÜË›[™ÝLWNÚYŠK™\ØÜš\Ü‹šYOO]™\ØÜš\Ü‹šY
\™]\›ˆË˜›Ü™\›Þ˜Ù[\ŽÚYŠÜ
K™\ØÜš\Ü‹šYJJ^ØÛÛœÝÏTŒŠKœYÙK]ÊK™\ÜXÙYžKœÚ[
JNÜ™]\›ˆÝJØ^\Î˜Ë[Ý™T™[]]™UÎ™Ë\Ó[Ýš[™Î›ßJ_\™]\›ˆÝJØ^\Î˜Ë[Ý™T™[]]™UÎ›KœYÙK\Ó[Ýš[™Î›ßJ_KÚ[”™[Ü™\š[™ÈŠKNXJ
K
OOžØÛÛœÝYK™œ˜[YNÜ™]\›ˆÖZJ‹œØÜ›Û™Y™‹™\ÜXÙ[Y[
NKÚ]›ÜX›Q\ÜXÙ[Y[ŠNØÛÛœÝ˜]XJ
Ú[\XÝ™K˜YÙØX›N›ÜX›N›‹˜YÙØX›\Îœ‹Y\Üš]XØ[š_JOOžØÛÛœÝÏ]œYÙK˜›Ü™\›Þ˜Ù[\‹ÏYK˜]Ü™]\›ˆ[Ÿ[ÏÜÎ›Ë\OOOH”‘SÔ‘TˆÐØ]
Ú[\XÝ™K˜YÙØX›N˜YÙØX›\Îœ‹›ÜX›N›‹Y\Üš]XØ[š_JN—Ø]
Ú[\XÝ™K˜YÙØX›\Îœ‹Y\Üš]XØ[š_J_K™Ù]™\Ý[Ú]Ý]›ÜX›Q\ÜXÙ[Y[ŠNÝ˜\ˆ“ÏXJOOžØÛÛœÝZ˜]
JKYK™›ÜX›NÜ™]\›ˆÖN
‹
NK™Ù]YÙP›Ü™\›ÞÙ[\‘œ›ÛR[\XÝŠK]™OXJ
K
OOžØÛÛœÝV›ÊKœØÜ›Ûš[š]X[
KP]ÊŠNÜ™]\›žÙœ˜[YN”ÊÝÜžK›ÝÛNžJÙK™œ˜[YKšZYÚYžšYÚž
ÙK™œ˜[YKÚYJKØÜ›ÛžÚ[š]X[™KœØÜ›Ûš[š]X[X^™KœØÜ›Û›X^Ý\œ™[Y™ŽžÝ˜[YN›‹\ÜXÙ[Y[œŸ___KœØÜ›ÛšY]ÜÜŠNÙ[˜Ý[Ûˆ]JK
^Ü™]\›ˆK›X\
OÛ—J_XJ]K™Ù]˜YÙØX›\ÉHŠNÙ[˜Ý[ÛˆX]
K
^Ù›ÜŠ]LÛ›[™ÝÛŠÊÊ^ØÛÛœÝ]Û—Kš\ÚX›VÙWNÚYŠŠ\™]\›ˆŸ\™]\›ˆ[XJX]žQÙ]š\ÚX›HŠNÝ˜\ˆ˜]XJ
Ú[\XÝ™KšY]ÜÜ\Ý[˜][ÛŽ›‹˜YÙØX›\Îœ‹X^ØÜ›ÛÚ[™ÙNš_JOOžØÛÛœÝÏ\]™JZJœØÜ›Û˜Ý\œ™[JJKÏ[‹™œ˜[YOÕŠ‹ZJ‹™œ˜[YKœØÜ›Û˜Ý\œ™[JJN›‹ÏYK™\ÜXÙYOP”ÊØY\‘˜YÙÚ[™Î”]JË˜[ŠK\Ý[˜][ÛŽ›‹\ÜXÙYžN™K™\ÜXÙYžKšY]ÜÜœË™œ˜[YK\Ý˜Ë›Ü˜ÙTÚÝ[[š[X]NˆL_JKP”ÊØY\‘˜YÙÚ[™Î”]JË˜[ŠK\Ý[˜][ÛŽ›Ë\ÜXÙYžN™K™\ÜXÙYžKšY]ÜÜ™œ˜[YK\Ý˜Ë›Ü˜ÙTÚÝ[[š[X]NˆL_JK^ßKO^ßKÏVØËK—NÜ™]\›ˆË˜[™›Ü‘XXÚ
ÏOžØÛÛœÝÏPX]
ËÊNÚYŠÊ^ÛVÝ×OWÎÜ™]\›ŸZÝ×OHLJKË‹‹™K\ÜXÙYžØ[˜Ë˜[[š\ÚX›Nšš\ÚX›N›___KœÜXÝ[]]™[R[˜Ü™X\ÙHŠK]XJ
K
OO–ZJKœØÜ›Û™Y™‹™\ÜXÙ[Y[
KÚ]šY]ÜÜ\ÜXÙ[Y[ŠK^XJ
ÜYÙP›Ü™\›ÞÙ[\Ž™K˜YÙØX›NšY]ÜÜ›ŸJOOžØÛÛœÝU]
‹JKOV›Ê‹œYÙK˜›Ü™\›Þ˜Ù[\ŠNÜ™]\›ˆZJ˜ÛY[˜›Ü™\›Þ˜Ù[\‹J_K™Ù]ÛY[œ›ÛTYÙP›Ü™\›ÞÙ[\ˆŠK™OXJ
Ù˜YÙØX›N™K\Ý[˜][ÛŽ™]ÔYÙP›Ü™\›ÞÙ[\Ž›‹šY]ÜÜœ‹Ú]›ÜX›Q\ÜXÙ[Y[šKÛ›SÛ“XZ[^\ÎœÏHL_JOOžØÛÛœÝÏV›Ê‹KœYÙK˜›Ü™\›Þ˜Ù[\ŠKO^Ý\™Ù]žÊKœYÙK˜›Ü™\›ÞÊK\Ý[˜][ÛŽÚ]›ÜX›Q\ÜXÙ[Y[šKšY]ÜÜœŸNÜ™]\›ˆÏÜ]
JN™JJ_Kš\ÕÝ[Uš\ÚX›R[“™]ÓØØ][ÛˆŠKØ]XJ
Ú\Ó[Ýš[™Ñ›ÜØ\™™K˜YÙØX›N\Ý[˜][ÛŽ›‹˜YÙØX›\Îœ‹™]š[Ý\Ò[\XÝšKšY]ÜÜœË™]š[Ý\ÔYÙP›Ü™\›ÞÙ[\Ž›Ë™]š[Ý\ÐÛY[Ù[XÝ[ÛŽ˜ËY\Üš]XØ[_JOOžÚYŠ[‹š\Ñ[˜X›Y
\™]\›ˆ[ØÛÛœÝTÊ‹™\ØÜš\Ü‹šYŠKUÊŠKO\Ø]
Ú\Ó[Ýš[™Ñ›ÜØ\™™K˜YÙØX›N\Ý[˜][ÛŽ›‹[œÚYQ\Ý[˜][ÛŽ™‹™]š[Ý\Ò[\XÝš_J_]
Ú\Ó[Ýš[™Ñ›ÜØ\™™K\Ò[’ÛYS\Ýš˜YÙØX›N˜YÙØX›\Îœ‹\Ý[˜][ÛŽ›‹[œÚYQ\Ý[˜][ÛŽ™‹™]š[Ý\Ò[\XÝšKšY]ÜÜœËY\Üš]XØ[_JNÚYŠ[J\™]\›ˆ[ØÛÛœÝÏR“ÊÚ[\XÝ›K˜YÙØX›N›ÜX›N›‹˜YÙØX›\Îœ‹Y\Üš]XØ[_JNÚYŠ™JÙ˜YÙØX›N\Ý[˜][ÛŽ›‹™]ÔYÙP›Ü™\›ÞÙ[\Ž™ËšY]ÜÜœË™œ˜[YKÚ]›ÜX›Q\ÜXÙ[Y[ˆLKÛ›SÛ“XZ[^\ÎˆLJJ\™]\›žØÛY[Ù[XÝ[ÛŽ’^ŠÜYÙP›Ü™\›ÞÙ[\Ž™Ë˜YÙØX›NšY]ÜÜœßJK[\XÝ›KØÜ›Û[\™\]Y\Ý›[NØÛÛœÝÏV›ÊËÊKÏT˜]
Ú[\XÝ›KšY]ÜÜœË\Ý[˜][ÛŽ›‹˜YÙØX›\Îœ‹X^ØÜ›ÛÚ[™ÙNßJNÜ™]\›žØÛY[Ù[XÝ[ÛŽ˜Ë[\XÝ—ËØÜ›Û[\™\]Y\Ýß_K›[Ý™UÓ™^XÙHŠNØÛÛœÝœÏXJOOžØÛÛœÝYKœÝXš™XÝ˜XÝ]™NÜ™]\›ˆÝ

KK™Ù]Û›ÝÛXÝ]™HŠNÝ˜\ˆ˜]XJ
Ú\Ó[Ýš[™Ñ›ÜØ\™™KYÙP›Ü™\›ÞÙ[\ŽÛÝ\˜ÙN›‹›ÜX›\Îœ‹šY]ÜÜš_JOOžØÛÛœÝÏ[‹œÝXš™XÝ˜XÝ]™NÚYŠ\Ê\™]\›ˆ[ØÛÛœÝÏ[‹˜^\ËÏU[
ÖÛËœÝ\KÖÛË™[™JKORÓÊŠK™š[\ŠOšOO[ŠK™š[\ŠOšš\Ñ[˜X›Y
K™š[\ŠOˆHZœÝXš™XÝ˜XÝ]™JK™š[\ŠO‰™JK™œ˜[YJJœÊ
JJK™š[\ŠOžØÛÛœÝO^œÊ
NÜ™]\›ˆOÜÖÛË˜Ü›ÜÜÐ^\Ñ[™OVÛË˜Ü›ÜÜÐ^\Ñ[™N›VÛË˜Ü›ÜÜÐ^\ÔÝ\OÖÛË˜Ü›ÜÜÐ^\ÔÝ\_JK™š[\ŠOžØÛÛœÝO^œÊ
KÏU[
VÛËœÝ\KVÛË™[™JNÜ™]\›ˆÊVÛËœÝ\J_ÊVÛË™[™J_ÊÖÛËœÝ\J_ÊÖÛË™[™J_JKœÛÜ

JOOžØÛÛœÝÏ^œÊ
VÛË˜Ü›ÜÜÐ^\ÔÝ\K^œÊJVÛË˜Ü›ÜÜÐ^\ÔÝ\NÜ™]\›ˆOÙËXŽ˜‹YßJK™š[\Š
KÊOOžœÊ
VÛË˜Ü›ÜÜÐ^\ÔÝ\OOO^œÊÖÌJVÛË˜Ü›ÜÜÐ^\ÔÝ\JNÚYŠ]K›[™Ý
\™]\›ˆ[ÚYŠK›[™ÝOOLJ\™]\›ˆVÌNØÛÛœÝ]K™š[\ŠO•[
œÊ
VÛËœÝ\KœÊ
VÛË™[™JJÛË›[™WJJNÜ™]\›ˆ‹›[™ÝOOLOÙ–ÌN™‹›[™ÝŒOÙ‹œÛÜ

JOOžœÊ
VÛËœÝ\K^œÊJVÛËœÝ\JVÌNKœÛÜ

JOOžØÛÛœÝÏUÝJÝJœÊ
JJKUÝJÝJœÊJJJNÜ™]\›ˆÈOOXÙËXŽžœÊ
VÛËœÝ\K^œÊJVÛËœÝ\_JVÌ_K™Ù]™\ÝÜ›ÜÜÐ^\Ñ›ÜX›HŠNØÛÛœÝOXJ
K
OOžØÛÛœÝYKœYÙK˜›Ü™\›Þ˜Ù[\ŽÜ™]\›ˆÜ
K™\ØÜš\Ü‹šY
OÖ›Ê‹™\ÜXÙYžKœÚ[
N›ŸK™Ù]Ý\œ™[YÙP›Ü™\›ÞÙ[\ˆŠKØ]XJ
K
OOžØÛÛœÝYKœYÙK˜›Ü™\›ÞÜ™]\›ˆÜ
K™\ØÜš\Ü‹šY
OÞÊ‹]Ê™\ÜXÙYžKœÚ[
JN›ŸK™Ù]Ý\œ™[YÙP›Ü™\›ÞŠNÝ˜\ˆ]XJ
ÜYÙP›Ü™\›ÞÙ[\Ž™KšY]ÜÜ\Ý[˜][ÛŽ›‹[œÚYQ\Ý[˜][ÛŽœ‹Y\Üš]XØ[š_JOOœ‹™š[\ŠÏO™JÝ\™Ù]“Ø]
ËJK\Ý[˜][ÛŽ›‹šY]ÜÜ™œ˜[YKÚ]›ÜX›Q\ÜXÙ[Y[ˆLJJKœÛÜ

ËÊOOžØÛÛœÝOIÊKN
‹JËJJJKIÊKN
‹JËJJJNÜ™]\›ˆOËLN™OÌN›Ë™\ØÜš\Ü‹š[™^XË™\ØÜš\Ü‹š[™^JVÌ_[™Ù]ÛÜÙ\Ý˜YÙØX›HŠKPÏSZJJ[˜Ý[ÛŠŠ^ØÛÛœÝ[–Ý›[™WNÜ™]\›žÝ˜[YNœ‹Ú[™ÝŠ›[™KŠ__K™Ù]\ÜXÙYžLˆŠJNØÛÛœÝX]XJ
KŠOOžØÛÛœÝYK˜^\ÎÚYŠK™\ØÜš\Ü‹›[ÙOOOHš\X[Š\™]\›ˆÝŠ‹›[™KÜ‹›[™WJNØÛÛœÝOYKœÝXš™XÝœYÙK˜ÛÛ[›ÞÜ‹œÚ^™WKOTÊK™\ØÜš\Ü‹šYŠKœ™YXÙJ
‹
OO™ŠÚ˜ÛY[›X\™Ú[›ÞÜ‹œÚ^™WK
JÝÜ‹›[™WKZNÜ™]\›ˆOLÛ[™ÝŠ‹›[™KJ_K™Ù]™\]Z\™YÜ›ÝÝ›Ü”XÙZÛ\ˆŠK™OXJ
K
OOŠË‹‹™KØÜ›ÛžË‹‹™KœØÜ›ÛX^_JKÚ]X^ØÜ›ÛŠKÝ™OXJ
KŠOOžØÛÛœÝYK™œ˜[YNÕÊJI‰šÝ

KKœÝXš™XÝÚ]XÙZÛ\‰‰šÝ

NØÛÛœÝO\PÊK˜^\Ë™\ÜXÙPžJKœÚ[ÏRX]
KKŠKÏ^ÜXÙZÛ\”Ú^™NšK[˜Ü™X\ÙYžNœËÛœ˜[YSX^ØÜ›Û™K™œ˜[YOÙK™œ˜[YKœØÜ›Û›X^›[NÚYŠ\Š^ØÛÛœÝVL
ÜYÙN™KœÝXš™XÝœYÙKÚ]XÙZÛ\Ž›Ë^\Î™K˜^\Ëœ˜[YN™K™œ˜[Y_JNÜ™]\›žË‹‹™KÝXš™XÝš_XÛÛœÝÏ\ÏÖZJ‹œØÜ›Û›X^ÊNœ‹œØÜ›Û›X^OU™J‹ÊKVL
ÜYÙN™KœÝXš™XÝœYÙKÚ]XÙZÛ\Ž›Ë^\Î™K˜^\Ëœ˜[YN_JNÜ™]\›žË‹‹™KÝXš™XÝ™‹œ˜[YN__K˜YXÙZÛ\ˆŠK]XJOOžØÛÛœÝYKœÝXš™XÝÚ]XÙZÛ\ŽÝÝ

NØÛÛœÝYK™œ˜[YNÚYŠ[Š^ØÛÛœÝÏVL
ÜYÙN™KœÝXš™XÝœYÙK^\Î™K˜^\Ëœ˜[YN›[Ú]XÙZÛ\Ž›[JNÜ™]\›žË‹‹™KÝXš™XÝ›ß_XÛÛœÝ]›Ûœ˜[YSX^ØÜ›ÛÜŸÝ

NØÛÛœÝOU™J‹ŠKÏVL
ÜYÙN™KœÝXš™XÝœYÙK^\Î™K˜^\Ëœ˜[YNšKÚ]XÙZÛ\Ž›[JNÜ™]\›žË‹‹™KÝXš™XÝœËœ˜[YNš__Kœ™[[Ý™TXÙZÛ\ˆŠNÝ˜\ˆX]XJ
Ü™]š[Ý\ÔYÙP›Ü™\›ÞÙ[\Ž™K[Ý™T™[]]™UÎ[œÚYQ\Ý[˜][ÛŽ›‹˜YÙØX›Nœ‹˜YÙØX›\ÎšK\Ý[˜][ÛŽœËšY]ÜÜ›ËY\Üš]XØ[˜ßJOOžÚYŠ]
^ÚYŠ‹›[™Ý
\™]\›ˆ[ØÛÛœÝO^Ù\ÜXÙY•TË\ÜXÙYžN‘™K]žÝ\Nˆ”‘SÔ‘Tˆ‹\Ý[˜][ÛŽžÙ›ÜX›RYœË™\ØÜš\Ü‹šY[™^Œ__KÏR“ÊÚ[\XÝ›K˜YÙØX›Nœ‹›ÜX›NœË˜YÙØX›\ÎšKY\Üš]XØ[˜ßJKUÊ‹ÊOÜÎ•Ý™JË‹JNÜ™]\›ˆ™JÙ˜YÙØX›Nœ‹\Ý[˜][ÛŽ˜‹™]ÔYÙP›Ü™\›ÞÙ[\Ž™ËšY]ÜÜ›Ë™œ˜[YKÚ]›ÜX›Q\ÜXÙ[Y[ˆLKÛ›SÛ“XZ[^\ÎˆLJOÛN›[XÛÛœÝOYVÜË˜^\Ë›[™WO]œYÙK˜›Ü™\›Þ˜Ù[\–ÜË˜^\Ë›[™WKJ

OOžØÛÛœÝO]™\ØÜš\Ü‹š[™^Ü™]\›ˆ™\ØÜš\Ü‹šYOO\‹™\ØÜš\Ü‹šYOÛN›JÌ_JJ
K\PÊË˜^\Ë‹™\ÜXÙPžJNÜ™]\›ˆÌŠÙ˜YÙØX›Nœ‹[œÚYQ\Ý[˜][ÛŽ›‹\Ý[˜][ÛŽœËšY]ÜÜ›Ë\ÜXÙYžNš\Ý•TË[™^™ŸJ_K›[Ý™UÓ™]Ñ›ÜX›HŠK]XJ
Ú\Ó[Ýš[™Ñ›ÜØ\™™K™]š[Ý\ÔYÙP›Ü™\›ÞÙ[\Ž˜YÙØX›N›‹\ÓÝ™\Žœ‹˜YÙØX›\ÎšK›ÜX›\ÎœËšY]ÜÜ›ËY\Üš]XØ[˜ßJOOžØÛÛœÝOS˜]
Ú\Ó[Ýš[™Ñ›ÜØ\™™KYÙP›Ü™\›ÞÙ[\ŽÛÝ\˜ÙNœ‹›ÜX›\ÎœËšY]ÜÜ›ßJNÚYŠ]J\™]\›ˆ[ØÛÛœÝTÊK™\ØÜš\Ü‹šYJKQ]
ÜYÙP›Ü™\›ÞÙ[\ŽšY]ÜÜ›Ë\Ý[˜][ÛŽK[œÚYQ\Ý[˜][ÛŽ™‹Y\Üš]XØ[˜ßJKOSX]
Ü™]š[Ý\ÔYÙP›Ü™\›ÞÙ[\Ž\Ý[˜][ÛŽK˜YÙØX›N›‹˜YÙØX›\ÎšK[Ý™T™[]]™UÎš[œÚYQ\Ý[˜][ÛŽ™‹šY]ÜÜ›ËY\Üš]XØ[˜ßJNÚYŠ[J\™]\›ˆ[ØÛÛœÝÏR“ÊÚ[\XÝ›K˜YÙØX›N›‹›ÜX›NK˜YÙØX›\ÎšKY\Üš]XØ[˜ßJNÜ™]\›žØÛY[Ù[XÝ[ÛŽ’^ŠÜYÙP›Ü™\›ÞÙ[\Ž™Ë˜YÙØX›N›‹šY]ÜÜ›ßJK[\XÝ›KØÜ›Û[\™\]Y\Ý›[_K›[Ý™PÜ›ÜÜÐ^\ÈŠK›XJOOžØÛÛœÝYK˜]Ü™]\›ˆÝ\OOOH”‘SÔ‘TˆÝ™\Ý[˜][Û‹™›ÜX›RY˜ÛÛXš[™K™›ÜX›RY›[KÚ]\Ñ˜YÙÙYÝ™\ˆŠNØÛÛœÝ˜]XJ
K
OOžØÛÛœÝ[›
JNÜ™]\›ˆÝÛ—N›[K™Ù]›ÜX›SÝ™\‰HŠNÝ˜\ˆ	]XJ
ÜÝ]N™K\NJOOžØÛÛœÝQ˜]
Kš[\XÝK™[Y[œÚ[ÛœË™›ÜX›\ÊKHH[‹OYK™[Y[œÚ[ÛœË™›ÜX›\ÖÙK˜Üš]XØ[™›ÜX›KšYKÏ[ŸKÏ\Ë˜^\Ë™\™XÝ[Û‹Ï[ÏOOH™\XØ[‰‰ŠOOH“SÕ‘WÕTŸOOH“SÕ‘WÑÕÓˆŠ_ÏOOHšÜš^›Û[‰‰ŠOOH“SÕ‘WÓQ•ŸOOH“SÕ‘WÔ’QÒŠNÚYŠÉ‰ˆ\Š\™]\›ˆ[ØÛÛœÝO]OOH“SÕ‘WÑÕÓˆŸOOH“SÕ‘WÔ’QÒ‹YK™[Y[œÚ[ÛœË™˜YÙØX›\ÖÙK˜Üš]XØ[™˜YÙØX›KšYKYK˜Ý\œ™[œYÙK˜›Ü™\›ÞÙ[\‹Ù˜YÙØX›\Î›K›ÜX›\Î™ßOYK™[Y[œÚ[ÛœÎÜ™]\›ˆÏÚØ]
Ú\Ó[Ýš[™Ñ›ÜØ\™K™]š[Ý\ÔYÙP›Ü™\›ÞÙ[\Žš˜YÙØX›N™‹\Ý[˜][ÛŽœË˜YÙØX›\Î›KšY]ÜÜ™KšY]ÜÜ™]š[Ý\ÐÛY[Ù[XÝ[ÛŽ™K˜Ý\œ™[˜ÛY[œÙ[XÝ[Û‹™]š[Ý\Ò[\XÝ™Kš[\XÝY\Üš]XØ[™K˜Y\Üš]XØ[JN“]
Ú\Ó[Ýš[™Ñ›ÜØ\™K™]š[Ý\ÔYÙP›Ü™\›ÞÙ[\Žš˜YÙØX›N™‹\ÓÝ™\ŽœË˜YÙØX›\Î›K›ÜX›\Î™ËšY]ÜÜ™KšY]ÜÜY\Üš]XØ[™K˜Y\Üš]XØ[J_K›[Ý™R[‘\™XÝ[ÛˆŠNÙ[˜Ý[ÛˆYÊJ^Ü™]\›ˆKœ\ÙOOOH‘QÑÒS‘ÈŸKœ\ÙOOOHÓÓPÕS‘ÈŸXJYËš\Ó[Ý™[Y[[ÝÙYŠNÙ[˜Ý[ÛˆÝ™JJ^ØÛÛœÝU[
KÜK˜›ÝÛJKU[
K›YKœšYÚ
NÜ™]\›ˆJ[˜Ý[ÛŠJ^Ü™]\›ˆ
KžJI‰›ŠKž
_Kœ[ˆŠ_XJÝ™Kš\ÔÜÚ][Û’[‘œ˜[YHŠNÙ[˜Ý[ÛˆX]
K
^Ü™]\›ˆK›YœšYÚ	‰™KœšYÚ›Y	‰™KÜ˜›ÝÛI‰™K˜›ÝÛOÜXJX]™Ù]\ÓÝ™\›\ŠNÙ[˜Ý[Ûˆ˜]
ÜYÙP›Ü™\›Þ™K˜YÙØX›NØ[™Y]\Î›ŸJ^ØÛÛœÝ]œYÙK˜›Ü™\›Þ˜Ù[\‹O[‹›X\
ÏOžØÛÛœÝÏ\Ë˜^\ËÏYÝŠË˜^\Ë›[™KK˜Ù[\–ÛË›[™WKËœYÙK˜›Ü™\›Þ˜Ù[\–ÛË˜Ü›ÜÜÐ^\Ó[™WJNÜ™]\›žÚYœË™\ØÜš\Ü‹šY\Ý[˜ÙN‰Ê‹Ê__JKœÛÜ

ËÊOO›Ë™\Ý[˜ÙK\Ë™\Ý[˜ÙJNÜ™]\›ˆVÌOÚVÌKšY›[XJ˜]™Ù]\\Ý]Ø^HŠNÙ[˜Ý[Ûˆ˜]
ÜYÙP›Ü™\›Þ™K˜YÙØX›N›ÜX›\Î›ŸJ^ØÛÛœÝRÓÊŠK™š[\ŠOOžÚYŠZKš\Ñ[˜X›Y
\™]\›ˆLNØÛÛœÝÏZKœÝXš™XÝ˜XÝ]™NÚYŠ\ßUX]
KÊJ\™]\›ˆLNÚYŠÝ™JÊJK˜Ù[\ŠJ\™]\›ˆLØÛÛœÝÏZK˜^\ËÏ\Ë˜Ù[\–ÛË˜Ü›ÜÜÐ^\Ó[™WKOYVÛË˜Ü›ÜÜÐ^\ÔÝ\KYVÛË˜Ü›ÜÜÐ^\Ñ[™KU[
ÖÛË˜Ü›ÜÜÐ^\ÔÝ\KÖÛË˜Ü›ÜÜÐ^\Ñ[™JKOZ
JKÏZ
ŠNÜ™]\›ˆ[I‰ˆYÏÈL›OÝOÎ™˜ßJNÜ™]\›ˆ‹›[™ÝÜ‹›[™ÝOOLOÜ–ÌK™\ØÜš\Ü‹šY˜]
ÜYÙP›Ü™\›Þ™K˜YÙØX›NØ[™Y]\ÎœŸJN›[XJ˜]™Ù]›ÜX›SÝ™\ˆŠNØÛÛœÝ]™OXJ
K
OO”ÊÊK
JK›Ù™œÙ]™XÝžTÜÚ][ÛˆŠNÝ˜\ˆX]XJ
K
OOžØÛÛœÝYK™œ˜[YNÜ™]\›ˆÖ]™J‹œØÜ›Û™Y™‹˜[YJNKÚ]›ÜX›TØÜ›ÛŠNÙ[˜Ý[ÛˆÝ™JÙ\ÜXÙY™KYJ^Ü™]\›ˆHJKš\ÚX›VÝ_Kš[š\ÚX›VÝJ_XJÝ™K™Ù]\Ñ\ÜXÙYŠNÙ[˜Ý[Ûˆ]
Ù˜YÙØX›N™KÛÜÙ\Ý[’ÛYS\Ý›ŸJ^Ü™]\›ˆÛ‰‰™\ØÜš\Ü‹š[™^™K™\ØÜš\Ü‹š[™^Ý™\ØÜš\Ü‹š[™^LN™\ØÜš\Ü‹š[™^›[XJ]˜][™^ŠNÝ˜\ˆ˜]XJ
ÜYÙP›Ü™\›ÞÚ]›ÜX›TØÜ›Û™K˜YÙØX›N\Ý[˜][ÛŽ›‹[œÚYQ\Ý[˜][ÛŽœ‹\ÝšKšY]ÜÜœËY\Üš]XØ[›ßJOOžØÛÛœÝÏ[‹˜^\ËO\PÊ‹˜^\Ë™\ÜXÙPžJK]K˜[YKYVØËœÝ\KOYVØË™[™KTSÊŠK™š[™
ÏOžØÛÛœÝOWË™\ØÜš\Ü‹šYWËœYÙK˜›Ü™\›Þ˜Ù[\–ØË›[™WKWÜ
KÊKORÝ™JÙ\ÜXÙYšKY‘_JNÜ™]\›ˆÐOÛOTŽš‹YŽOÛOTŠÙŽšŸJ_[ÏR]
Ù˜YÙØX›NÛÜÙ\Ý˜‹[’ÛYS\Ý•ÊŠ_JNÜ™]\›ˆÌŠÙ˜YÙØX›N[œÚYQ\Ý[˜][ÛŽœ‹\Ý[˜][ÛŽ›‹šY]ÜÜœË\ÝšK\ÜXÙYžNK[™^ßJ_K™Ù]™[Ü™\’[\XÝŠNØÛÛœÝØ]MÝ˜\ˆØ]XJ
Ù˜YÙØX›N™KYÙP›Ü™\›ÞÚ]›ÜX›TØÜ›Û™]š[Ý\Ò[\XÝ›‹\Ý[˜][ÛŽœ‹[œÚYQ\Ý[˜][ÛŽšKY\Üš]XØ[œßJOOžÚYŠ\‹š\ÐÛÛXš[™Q[˜X›Y
\™]\›ˆ[ØÛÛœÝÏ\‹˜^\ËÏ\PÊ‹˜^\ËK™\ÜXÙPžJKOXË˜[YK]ÛËœÝ\K]ÛË™[™KÏTSÊKJK™š[™
ÏOžØÛÛœÝÏ]Ë™\ØÜš\Ü‹šYO]ËœYÙK˜›Ü™\›ÞQVÛËœÚ^™WKÕØ]OWÜ
ËÊKRÝ™JÙ\ÜXÙY›‹™\ÜXÙYY—ßJNÜ™]\›ˆOÕÚ‘VÛËœÝ\JÚ‰‰šVÛË™[™KZŽ™‘VÛËœÝ\K]JÚ‰‰™VÛË™[™K]KZŽ•Ú‘VÛËœÝ\JÝJÚ‰‰šVÛË™[™JÝKZŽ™‘VÛËœÝ\JÚ‰‰™VÛË™[™KZŸJNÜ™]\›ˆÏÞÙ\ÜXÙYžN˜Ë\ÜXÙY›‹™\ÜXÙY]žÝ\NˆÓÓP’S‘H‹ÛÛXš[™NžÙ˜YÙØX›RY™Ë™\ØÜš\Ü‹šY›ÜX›RYœ‹™\ØÜš\Ü‹šY__N›[K™Ù]ÛÛXš[™R[\XÝŠK™OXJ
ÜYÙSÙ™œÙ]™K˜YÙØX›N˜YÙØX›\Î›‹›ÜX›\Îœ‹™]š[Ý\Ò[\XÝšKšY]ÜÜœËY\Üš]XØ[›ßJOOžØÛÛœÝÏV]™JœYÙK˜›Ü™\›ÞJKO^˜]
ÜYÙP›Ü™\›Þ˜Ë˜YÙØX›N›ÜX›\ÎœŸJNÚYŠ]J\™]\›ˆØ]ØÛÛœÝ\–ÝWKTÊ‹™\ØÜš\Ü‹šYŠKO\X]
‹ÊNÜ™]\›ˆØ]
ÜYÙP›Ü™\›ÞÚ]›ÜX›TØÜ›Û›K˜YÙØX›N™]š[Ý\Ò[\XÝšK\Ý[˜][ÛŽ™‹[œÚYQ\Ý[˜][ÛŽšY\Üš]XØ[›ßJ_˜]
ÜYÙP›Ü™\›ÞÚ]›ÜX›TØÜ›Û›K˜YÙØX›N\Ý[˜][ÛŽ™‹[œÚYQ\Ý[˜][ÛŽš\ÝšK™\ÜXÙYšY]ÜÜœËY\Üš]XØ[›ßJ_K™Ù]˜YÒ[\XÝŠKXJ
K
OOŠË‹‹™KÝ™\ØÜš\Ü‹šYNJKœ]Ú›ÜX›SX\ŠNØÛÛœÝX]XJ
Ü™]š[Ý\Ò[\XÝ™K[\XÝ›ÜX›\Î›ŸJOOžØÛÛœÝ[›
JKO[›

NÚYŠ\ŸOOZJ\™]\›ˆŽØÛÛœÝÏ[–Ü—NÚYŠ\ËœÝXš™XÝÚ]XÙZÛ\Š\™]\›ˆŽØÛÛœÝÏT]
ÊNÜ™]\›ˆŠ‹Ê_K˜ÛX\•[\ÙYXÙZÛ\ˆŠNÝ˜\ˆØ]XJ
Ù˜YÙØX›N™K˜YÙØX›\Î›ÜX›\Î›‹™]š[Ý\Ò[\XÝœ‹[\XÝš_JOOžØÛÛœÝÏVX]
Ü™]š[Ý\Ò[\XÝœ‹[\XÝšK›ÜX›\Î›ŸJKÏ[›
JNÚYŠ[Ê\™]\›ˆÎØÛÛœÝÏ[–Û×NÚYŠÊKÊ_ËœÝXš™XÝÚ]XÙZÛ\Š\™]\›ˆÎØÛÛœÝOUÝ™JËK
NÜ™]\›ˆŠËJ_Kœ™XÛÛ\]TXÙZÛ\œÈŠKÑOXJ
ÜÝ]N™KÛY[Ù[XÝ[ÛŽ[Y[œÚ[ÛœÎ›‹šY]ÜÜœ‹[\XÝšKØÜ›Û[\™\]Y\ÝœßJOOžØÛÛœÝÏ\ŸKšY]ÜÜÏ[ŸK™[Y[œÚ[ÛœËO]K˜Ý\œ™[˜ÛY[œÙ[XÝ[Û‹V›ÊKKš[š]X[˜ÛY[œÙ[XÝ[ÛŠK^ÛÙ™œÙ]™‹Ù[XÝ[ÛŽK›Ü™\›ÞÙ[\Ž–ZJKš[š]X[˜ÛY[˜›Ü™\›ÞÙ[\‹Š_KO^ÜÙ[XÝ[ÛŽ–ZJœÙ[XÝ[Û‹ËœØÜ›Û˜Ý\œ™[
K›Ü™\›ÞÙ[\Ž–ZJ˜›Ü™\›ÞÙ[\‹ËœØÜ›Û˜Ý\œ™[
KÙ™œÙ]–ZJ›Ù™œÙ]ËœØÜ›Û™Y™‹˜[YJ_KÏ^ØÛY[šYÙN›_NÚYŠKœ\ÙOOOHÓÓPÕS‘ÈŠ\™]\›žË‹‹™K[Y[œÚ[ÛœÎ˜ËšY]ÜÜ›ËÝ\œ™[™ßNØÛÛœÝXË™˜YÙØX›\ÖÙK˜Üš]XØ[™˜YÙØX›KšYKÏZ_™JÜYÙSÙ™œÙ]›K›Ù™œÙ]˜YÙØX›N˜‹˜YÙØX›\Î˜Ë™˜YÙØX›\Ë›ÜX›\Î˜Ë™›ÜX›\Ë™]š[Ý\Ò[\XÝ™Kš[\XÝšY]ÜÜ›ËY\Üš]XØ[™K˜Y\Üš]XØ[JKÏRØ]
Ù˜YÙØX›N˜‹[\XÝË™]š[Ý\Ò[\XÝ™Kš[\XÝ˜YÙØX›\Î˜Ë™˜YÙØX›\Ë›ÜX›\Î˜Ë™›ÜX›\ßJNÜ™]\›žË‹‹™KÝ\œ™[™Ë[Y[œÚ[ÛœÎžÙ˜YÙØX›\Î˜Ë™˜YÙØX›\Ë›ÜX›\Î—ßK[\XÝËšY]ÜÜ›ËØÜ›Û[\™\]Y\Ýœß[›Ü˜ÙTÚÝ[[š[X]NœÏÈLN›[_K\]HŠNÙ[˜Ý[Ûˆ]
K
^Ü™]\›ˆK›X\
OÛ—J_XJ]™Ù]˜YÙØX›\ÈŠNÝ˜\ˆ]™OXJ
Ú[\XÝ™KšY]ÜÜ˜YÙØX›\Î›‹\Ý[˜][ÛŽœ‹›Ü˜ÙTÚÝ[[š[X]Nš_JOOžØÛÛœÝÏYK™\ÜXÙYÏV]
Ë˜[ŠKÏP”ÊØY\‘˜YÙÚ[™Î›Ë\Ý[˜][ÛŽœ‹\ÜXÙYžN™K™\ÜXÙYžKšY]ÜÜ™œ˜[YK›Ü˜ÙTÚÝ[[š[X]NšK\ÝœßJNÜ™]\›žË‹‹™K\ÜXÙY˜ß_Kœ™XÛÛ\]HŠK™OXJ
Ú[\XÝ™K˜YÙØX›N›ÜX›N›‹˜YÙØX›\Îœ‹šY]ÜÜšKY\Üš]XØ[œßJOOžØÛÛœÝÏR“ÊÚ[\XÝ™K˜YÙØX›N˜YÙØX›\Îœ‹›ÜX›N›‹Y\Üš]XØ[œßJNÜ™]\›ˆ^ŠÜYÙP›Ü™\›ÞÙ[\Ž›Ë˜YÙØX›NšY]ÜÜš_J_K™Ù]ÛY[›Ü™\›ÞÙ[\ˆŠK™OXJ
ÜÝ]N™K[Y[œÚ[ÛœÎšY]ÜÜ›ŸJOOžÙK›[Ý™[Y[[ÙHOOH”ÓT‰‰šÝ

NØÛÛœÝYKš[\XÝO[ŸKšY]ÜÜÏ]K™[Y[œÚ[ÛœËÙ˜YÙØX›\Î›Ë›ÜX›\Î˜ßO\ËO[ÖÙK˜Üš]XØ[™˜YÙØX›KšYK[›
ŠNÙŸÝ

NØÛÛœÝXÖÙ—KOT]™JÚ[\XÝœ‹šY]ÜÜšK\Ý[˜][ÛŽš˜YÙØX›\Î›ßJKÏR™JÚ[\XÝ›K˜YÙØX›NK›ÜX›Nš˜YÙØX›\Î›ËšY]ÜÜšKY\Üš]XØ[™K˜Y\Üš]XØ[JNÜ™]\›ˆÑJÚ[\XÝ›KÛY[Ù[XÝ[ÛŽ™ËÝ]N™K[Y[œÚ[ÛœÎœËšY]ÜÜš_J_Kœ™Yœ™\ÚÛ˜\ŠKX]XJOOŠÚ[™^™Kš[™^›ÜX›RY™K™›ÜX›RYJK™Ù]ÛYSØØ][ÛˆŠK^YOXJ
Ù˜YÙØX›N™KÛYN˜YÙØX›\Î›‹šY]ÜÜœŸJOOžØÛÛœÝO\PÊ˜^\ËK™\ÜXÙPžJKÏTÊ™\ØÜš\Ü‹šYŠKÏ\Ëš[™^ÙŠJNÛÏOOKLI‰šÝ

NØÛÛœÝÏ\ËœÛXÙJÊÌJKOXËœ™YXÙJ
ËŠOOŠÖØ‹™\ØÜš\Ü‹šYOHLÊKßJK^Ú[•š\X[\Ý™\ØÜš\Ü‹›[ÙOOOHš\X[‹\ÜXÙYžNšKY™™XÝY_NÜ™]\›žÚ[\XÝžÙ\ÜXÙY”ÊØY\‘˜YÙÚ[™Î˜Ë\Ý[˜][ÛŽ\ÜXÙYžNšK\Ý›[šY]ÜÜœ‹™œ˜[YK›Ü˜ÙTÚÝ[[š[X]NˆL_JK\ÜXÙYžNšK]žÝ\Nˆ”‘SÔ‘Tˆ‹\Ý[˜][ÛŽ”X]
K™\ØÜš\ÜŠ__KY\Üš]XØ[™Ÿ_K™Ù]YY™™XÝŠK˜]XJ
K
OOŠÙ˜YÙØX›\Î™K™˜YÙØX›\Ë›ÜX›\Î”ŠK™›ÜX›\Ë
_JKœ]Ú[Y[œÚ[Û“X\ŠK˜]XJ
Ù˜YÙØX›N™KÙ™œÙ][š]X[Ú[™ÝÔØÜ›Û›ŸJOOžØÛÛœÝTŒŠK˜ÛY[
KOUŠ‹ŠNÜ™]\›žË‹‹™KXÙZÛ\ŽžË‹‹™KœXÙZÛ\‹ÛY[œŸKÛY[œ‹YÙNš__K›Ù™œÙ]˜YÙØX›HŠKZ]XJOOžØÛÛœÝYK™œ˜[YNÜ™]\›ˆÝ

KK™Ù]œ˜[YHŠK]XJ
ØY][ÛœÎ™K\]Y›ÜX›\ÎšY]ÜÜ›ŸJOOžØÛÛœÝ[‹œØÜ›Û™Y™‹˜[YNÜ™]\›ˆK›X\
OOžØÛÛœÝÏZK™\ØÜš\Ü‹™›ÜX›RYÏ]Ü×KOYZ]
ÊKœØÜ›Û™Y™‹˜[YKVZJ‹JNÜ™]\›ˆ˜]
Ù˜YÙØX›NšKÙ™œÙ]™‹[š]X[Ú[™ÝÔØÜ›Û›‹œØÜ›Ûš[š]X[J_J_K˜Y\ÝY][ÛœÑ›Ü”ØÜ›ÛÚ[™Ù\ÈŠKš]XJ
ÜÝ]N™KX›\ÚYJOOžØÛÛœÝ]›[ÙYšYY›X\
OžØÛÛœÝYK™[Y[œÚ[ÛœË™›ÜX›\ÖÔ‹™›ÜX›RYNÜ™]\›ˆŠ‹‹œØÜ›Û
_JK^Ë‹‹™K™[Y[œÚ[ÛœË™›ÜX›\Ë‹‹“]™JŠ_KOS™J]
ØY][ÛœÎ˜Y][ÛœË\]Y›ÜX›\Îœ‹šY]ÜÜ™KšY]ÜÜJJKÏ^Ë‹‹™K™[Y[œÚ[ÛœË™˜YÙØX›\Ë‹‹š_NÝœ™[[Ý˜[Ë™›Ü‘XXÚ
OžÙ[]HÖÔ—_JNØÛÛœÝÏ^Ù›ÜX›\Îœ‹˜YÙØX›\ÎœßKÏ[›
Kš[\XÝ
KOXÏÛË™›ÜX›\ÖØ×N›[[Ë™˜YÙØX›\ÖÙK˜Üš]XØ[™˜YÙØX›KšYK[Ë™›ÜX›\ÖÙK˜Üš]XØ[™›ÜX›KšYKÚ[\XÝ›KY\Üš]XØ[™ßOY^YJÙ˜YÙØX›N™‹ÛYNš˜YÙØX›\ÎœËšY]ÜÜ™KšY]ÜÜJK]I‰Kš\ÐÛÛXš[™Q[˜X›YÙKš[\XÝ›KÏV™JÜYÙSÙ™œÙ]™K˜Ý\œ™[œYÙK›Ù™œÙ]˜YÙØX›N›Ë™˜YÙØX›\ÖÙK˜Üš]XØ[™˜YÙØX›KšYK˜YÙØX›\Î›Ë™˜YÙØX›\Ë›ÜX›\Î›Ë™›ÜX›\Ë™]š[Ý\Ò[\XÝ˜‹šY]ÜÜ™KšY]ÜÜY\Üš]XØ[™ßJKÏ^Ë‹‹™K\ÙNˆ‘QÑÒS‘È‹[\XÝËÛ“Y[\XÝ›K[Y[œÚ[ÛœÎ›ËY\Üš]XØ[™Ë›Ü˜ÙTÚÝ[[š[X]NˆL_NÜ™]\›ˆKœ\ÙOOOHÓÓPÕS‘È×ÎžË‹‹—Ë\ÙNˆ‘“ÔÔS‘S‘È‹™X\ÛÛŽ™Kœ™X\ÛÛ‹\ÕØZ][™ÎˆL__KœX›\ÚÚ[Q˜YÙÚ[™Ò[•š\X[ŠNØÛÛœÝÎXJOO™K›[Ý™[Y[[ÙOOOH”ÓT‹š\ÔÛ˜\[™ÈŠKMOXJ
KŠOOžØÛÛœÝR˜]
K™[Y[œÚ[ÛœË
NÜ™]\›ˆRÎ
J_ÓÑJÜÝ]N™K[Y[œÚ[ÛœÎœŸJN–™JÜÝ]N™K[Y[œÚ[ÛœÎœŸJ_KœÜÝ›ÜX›PÚ[™ÙHŠNÙ[˜Ý[ÛˆJJ^Ü™]\›ˆKš\Ñ˜YÙÚ[™É‰™K›[Ý™[Y[[ÙOOOH”ÓTÞË‹‹™KØÜ›Û[\™\]Y\Ý›[N™_XJKœ™[[Ý™TØÜ›Û[\™\]Y\ÝŠNØÛÛœÝO^Ü\ÙNˆ’QH‹ÛÛ\]Y›[ÚÝ[›\ÚˆL_NÝ˜\ˆš]XJ
OVK
OOžÚYŠ\OOOH‘“TÒŠ\™]\›žË‹‹–KÚÝ[›\ÚˆLNÚYŠ\OOOH’S’UPSÔP“TÒŠ^ÙKœ\ÙHOOH’QH‰‰šÝ

NØÛÛœÝØÜš]XØ[›‹ÛY[Ù[XÝ[ÛŽœ‹šY]ÜÜšK[Y[œÚ[ÛœÎœË[Ý™[Y[[ÙN›ßO]œ^[ØYÏ\Ë™˜YÙØX›\ÖÛ‹™˜YÙØX›KšYKO\Ë™›ÜX›\ÖÛ‹™›ÜX›KšYK^ÜÙ[XÝ[ÛŽœ‹›Ü™\›ÞÙ[\Ž˜Ë˜ÛY[˜›Ü™\›Þ˜Ù[\‹Ù™œÙ]“_K^ØÛY[™‹YÙNžÜÙ[XÝ[ÛŽ–ZJ‹œÙ[XÝ[Û‹KœØÜ›Ûš[š]X[
K›Ü™\›ÞÙ[\Ž–ZJ‹œÙ[XÝ[Û‹KœØÜ›Ûš[š]X[
KÙ™œÙ]–ZJ‹œÙ[XÝ[Û‹KœØÜ›Û™Y™‹˜[YJ__KORÓÊË™›ÜX›\ÊK™]™\žJÏOˆWËš\Ñš^YÛ”YÙJKÚ[\XÝ™ËY\Üš]XØ[˜ŸOY^YJÙ˜YÙØX›N˜ËÛYNK˜YÙØX›\ÎœË™˜YÙØX›\ËšY]ÜÜš_JNÜ™]\›žÜ\ÙNˆ‘QÑÒS‘È‹\Ñ˜YÙÚ[™ÎˆLÜš]XØ[›‹[Ý™[Y[[ÙN›Ë[Y[œÚ[ÛœÎœË[š]X[šÝ\œ™[š\ÕÚ[™ÝÔØÜ›Û[ÝÙY›K[\XÝ™ËY\Üš]XØ[˜‹Û“Y[\XÝ™ËšY]ÜÜšKØÜ›Û[\™\]Y\Ý›[›Ü˜ÙTÚÝ[[š[X]N›[_ZYŠ\OOOHÓÓPÕSÓ—ÔÕT•S‘ÈŠ\™]\›ˆKœ\ÙOOOHÓÓPÕS‘ÈŸKœ\ÙOOOH‘“ÔÔS‘S‘ÈÙNŠKœ\ÙHOOH‘QÑÒS‘È‰‰šÝ

KË‹‹™K\ÙNˆÓÓPÕS‘ÈŸJNÚYŠ\OOOH”P“TÒÕÒSWÑQÑÒS‘ÈŠ\™]\›ˆKœ\ÙOOOHÓÓPÕS‘ÈŸKœ\ÙOOOH‘“ÔÔS‘S‘ÈŸÝ

Kš]
ÜÝ]N™KX›\ÚYœ^[ØYJNÚYŠ\OOOH“SÕ‘HŠ^ÚYŠKœ\ÙOOOH‘“ÔÔS‘S‘ÈŠ\™]\›ˆNÑYÊJ_Ý

NØÛÛœÝØÛY[›ŸO]œ^[ØYÜ™]\›ˆÜ
‹K˜Ý\œ™[˜ÛY[œÙ[XÝ[ÛŠOÙN“ÑJÜÝ]N™KÛY[Ù[XÝ[ÛŽ›‹[\XÝ’Î
JOÙKš[\XÝ›[J_ZYŠ\OOOH•TUWÑ“ÔP“WÔÐÔ“ÓŠ^ÚYŠKœ\ÙOOOH‘“ÔÔS‘S‘ÈŸKœ\ÙOOOHÓÓPÕS‘ÈŠ\™]\›ˆJJNÑYÊJ_Ý

NØÛÛœÝÚY›‹™]ÔØÜ›ÛœŸO]œ^[ØYOYK™[Y[œÚ[ÛœË™›ÜX›\ÖÛ—NÚYŠZJ\™]\›ˆNØÛÛœÝÏUŠKŠNÜ™]\›ˆMJKËLJ_ZYŠ\OOOH•TUWÑ“ÔP“WÒT×ÑSP“QŠ^ÚYŠKœ\ÙOOOH‘“ÔÔS‘S‘ÈŠ\™]\›ˆNÑYÊJ_Ý

NØÛÛœÝÚY›‹\Ñ[˜X›YœŸO]œ^[ØYOYK™[Y[œÚ[ÛœË™›ÜX›\ÖÛ—NÚ_Ý

KKš\Ñ[˜X›YOO\‰‰šÝ

NØÛÛœÝÏ^Ë‹‹šK\Ñ[˜X›YœŸNÜ™]\›ˆMJKËL
_ZYŠ\OOOH•TUWÑ“ÔP“WÒT×ÐÓÓP’S‘WÑSP“QŠ^ÚYŠKœ\ÙOOOH‘“ÔÔS‘S‘ÈŠ\™]\›ˆNÑYÊJ_Ý

NØÛÛœÝÚY›‹\ÐÛÛXš[™Q[˜X›YœŸO]œ^[ØYOYK™[Y[œÚ[ÛœË™›ÜX›\ÖÛ—NÚ_Ý

KKš\ÐÛÛXš[™Q[˜X›YOO\‰‰šÝ

NØÛÛœÝÏ^Ë‹‹šK\ÐÛÛXš[™Q[˜X›YœŸNÜ™]\›ˆMJKËL
_ZYŠ\OOOH“SÕ‘WÐ–WÕÒS‘Õ×ÔÐÔ“ÓŠ^ÚYŠKœ\ÙOOOH‘“ÔÔS‘S‘ÈŸKœ\ÙOOOH‘“ÔÐS’SPUS‘ÈŠ\™]\›ˆNÑYÊJ_Ý

KKš\ÕÚ[™ÝÔØÜ›Û[ÝÙYÝ

NØÛÛœÝ]œ^[ØY›™]ÔØÜ›ÛÚYŠÜ
KšY]ÜÜœØÜ›Û˜Ý\œ™[ŠJ\™]\›ˆJJNØÛÛœÝ\]™JKšY]ÜÜŠNÜ™]\›ˆÎ
JOÖ™JÜÝ]N™KšY]ÜÜœŸJN“ÑJÜÝ]N™KšY]ÜÜœŸJ_ZYŠ\OOOH•TUWÕ’QUÔÔ•ÓPVÔÐÔ“ÓŠ^ÚYŠQYÊJJ\™]\›ˆNØÛÛœÝ]œ^[ØY›X^ØÜ›ÛÚYŠÜ
‹KšY]ÜÜœØÜ›Û›X^
J\™]\›ˆNØÛÛœÝ^Ë‹‹™KšY]ÜÜØÜ›ÛžË‹‹™KšY]ÜÜœØÜ›ÛX^›Ÿ_NÜ™]\›žË‹‹™KšY]ÜÜœŸ_ZYŠ\OOOH“SÕ‘WÕTŸ\OOOH“SÕ‘WÑÕÓˆŸ\OOOH“SÕ‘WÓQ•Ÿ\OOOH“SÕ‘WÔ’QÒŠ^ÚYŠKœ\ÙOOOHÓÓPÕS‘ÈŸKœ\ÙOOOH‘“ÔÔS‘S‘ÈŠ\™]\›ˆNÙKœ\ÙHOOH‘QÑÒS‘È‰‰šÝ

NØÛÛœÝI]
ÜÝ]N™K\N\_JNÜ™]\›ˆÓÑJÜÝ]N™K[\XÝ›‹š[\XÝÛY[Ù[XÝ[ÛŽ›‹˜ÛY[Ù[XÝ[Û‹ØÜ›Û[\™\]Y\Ý›‹œØÜ›Û[\™\]Y\ÝJN™_ZYŠ\OOOH‘“ÔÔS‘S‘ÈŠ^ØÛÛœÝ]œ^[ØYœ™X\ÛÛŽÜ™]\›ˆKœ\ÙHOOHÓÓPÕS‘È‰‰šÝ

KË‹‹™K\ÙNˆ‘“ÔÔS‘S‘È‹\ÕØZ][™ÎˆL™X\ÛÛŽ›Ÿ_ZYŠ\OOOH‘“ÔÐS’SPUHŠ^ØÛÛœÝØÛÛ\]Y›‹›Ü\˜][ÛŽœ‹™]ÒÛYPÛY[Ù™œÙ]š_O]œ^[ØYÜ™]\›ˆKœ\ÙOOOH‘QÑÒS‘ÈŸKœ\ÙOOOH‘“ÔÔS‘S‘ÈŸÝ

KÜ\ÙNˆ‘“ÔÐS’SPUS‘È‹ÛÛ\]Y›‹›Ü\˜][ÛŽœ‹™]ÒÛYPÛY[Ù™œÙ]šK[Y[œÚ[ÛœÎ™K™[Y[œÚ[Ûœß_ZYŠ\OOOH‘“ÔÐÓÓTUHŠ^ØÛÛœÝØÛÛ\]Y›ŸO]œ^[ØYÜ™]\›žÜ\ÙNˆ’QH‹ÛÛ\]Y›‹ÚÝ[›\ÚˆL__\™]\›ˆ_Kœ™YXÙ\ˆŠNÙ[˜Ý[ÛˆœŠK
^Ü™]\›ˆH[œÝ[˜Ù[ÙˆØš™XÝ	‰ˆ\Hš[ˆI‰™K\OOO]XJœ‹™ÝX\™ŠNØÛÛœÝZ]XJOOŠÝ\Nˆ‘Q“Ô‘WÒS’UPSÐÐTT‘H‹^[ØY™_JK˜™Y›Ü™R[š]X[Ø\\™HŠKZ]XJOOŠÝ\Nˆ“Q•‹^[ØY™_JK›Y	HŠKÚ]XJOOŠÝ\Nˆ’S’UPSÔP“TÒ‹^[ØY™_JKš[š]X[X›\ÚŠKÚ]XJOOŠÝ\Nˆ”P“TÒÕÒSWÑQÑÒS‘È‹^[ØY™_JKœX›\ÚÚ[Q˜YÙÚ[™ÈŠK]XJ

OOŠÝ\NˆÓÓPÕSÓ—ÔÕT•S‘È‹^[ØY›[JK˜ÛÛXÝ[Û”Ý\[™ÈŠKÚ]XJOOŠÝ\Nˆ•TUWÑ“ÔP“WÔÐÔ“Ó‹^[ØY™_JK\]Q›ÜX›TØÜ›ÛŠKZ]XJOOŠÝ\Nˆ•TUWÑ“ÔP“WÒT×ÑSP“Q‹^[ØY™_JK\]Q›ÜX›R\Ñ[˜X›YŠK]XJOOŠÝ\Nˆ•TUWÑ“ÔP“WÒT×ÐÓÓP’S‘WÑSP“Q‹^[ØY™_JK\]Q›ÜX›R\ÐÛÛXš[™Q[˜X›YŠKYOXJOOŠÝ\Nˆ“SÕ‘H‹^[ØY™_JK›[Ý™HŠKš]XJOOŠÝ\Nˆ“SÕ‘WÐ–WÕÒS‘Õ×ÔÐÔ“Ó‹^[ØY™_JK›[Ý™PžUÚ[™ÝÔØÜ›ÛŠK]XJOOŠÝ\Nˆ•TUWÕ’QUÔÔ•ÓPVÔÐÔ“Ó‹^[ØY™_JK\]UšY]ÜÜX^ØÜ›ÛŠK]XJ

OOŠÝ\Nˆ“SÕ‘WÕT‹^[ØY›[JK›[Ý™U\ŠKZ]XJ

OOŠÝ\Nˆ“SÕ‘WÑÕÓˆ‹^[ØY›[JK›[Ý™QÝÛˆŠKÚ]XJ

OOŠÝ\Nˆ“SÕ‘WÔ’QÒ‹^[ØY›[JK›[Ý™TšYÚŠKš]XJ

OOŠÝ\Nˆ“SÕ‘WÓQ•‹^[ØY›[JK›[Ý™SYŠK^XJ

OOŠÝ\Nˆ‘“TÒ‹^[ØY›[JK™›\ÚŠKZ]XJOOŠÝ\Nˆ‘“ÔÐS’SPUH‹^[ØY™_JK˜[š[X]Q›ÜŠKXJOOŠÝ\Nˆ‘“ÔÐÓÓTUH‹^[ØY™_JK˜ÛÛ\]Q›ÜŠKžYOXJOOŠÝ\Nˆ‘“Ô‹^[ØY™_JK™›ÜŠKš]XJOOŠÝ\Nˆ‘“ÔÔS‘S‘È‹^[ØY™_JK™›Ü[™[™ÈŠKžYOXJ

OOŠÝ\Nˆ‘“ÔÐS’SPUSÓ—Ñ’S’TÒQ‹^[ØY›[JK™›Ü[š[X][Û‘š[š\ÚYŠNÝ˜\ˆ]XJOOŠÙÙ]Ý]N\Ü]Ú›ŸJOOœOšOOžÚYŠSœŠK“Q•ŠJ^ÜŠJNÜ™]\›ŸXÛÛœÝÚYœËÛY[Ù[XÝ[ÛŽ›Ë[Ý™[Y[[ÙN˜ßOZKœ^[ØYO]

NÝKœ\ÙOOOH‘“ÔÐS’SPUS‘È‰‰›ŠŠØÛÛ\]YK˜ÛÛ\]YJJK

Kœ\ÙHOOH’QH‰‰šÝ

KŠ^Š
JKŠZ]
Ù˜YÙØX›RYœË[Ý™[Y[[ÙN˜ßJJNØÛÛœÝ^Ù˜YÙØX›RYœËØÜ›ÛÜ[ÛœÎžÜÚÝ[X›\Ú[[YYX][N˜ÏOOH”ÓTŸ_KØÜš]XØ[›K[Y[œÚ[ÛœÎ™ËšY]ÜÜ˜ŸOYKœÝ\X›\Ú[™Ê
NÛŠÚ]
ØÜš]XØ[›K[Y[œÚ[ÛœÎ™ËÛY[Ù[XÝ[ÛŽ›Ë[Ý™[Y[[ÙN˜ËšY]ÜÜ˜ŸJJ_K›YŠKÚ]XJOOŠ
OOO›OžÓœŠ‹’S’UPSÔP“TÒŠI‰™K™˜YÙÚ[™Ê
KœŠ‹‘“ÔÐS’SPUHŠI‰™K™›Ü[™Ê‹œ^[ØY˜ÛÛ\]Yœ™\Ý[œ™X\ÛÛŠK
œŠ‹‘“TÒŠ_œŠ‹‘“ÔÐÓÓTUHŠJI‰™Kœ™\Ý[™Ê
K
Š_KœÝ[HŠNØÛÛœÝž^ÛÝ]Ù•UØ^Nˆ˜ÝXšXËX™^šY\ŠŒ‹JH‹›Üˆ˜ÝXšXËX™^šY\ŠŒ‹KŒKJHŸK”Ï^ÛÜXÚ]NžÙ›ÜŒÛÛXš[š[™Î‹ßKØØ[NžÙ›Ü‹Í__K^YO^ÛÝ]Ù•UØ^N‹Œ‹Z[‘›Ü[YN‹ŒÌËX^›Ü[YN‹M_K™ÏX	Ø^YK›Ý]Ù•UØ^_\È	Ñž‹›Ý]Ù•UØ^_XO^Ù›ZY˜ÜXÚ]H	Ý™ßXÛ˜\˜˜[œÙ›Ü›H	Ý™ßKÜXÚ]H	Ý™ßX›Ü˜JOOžØÛÛœÝX	Ù_\È	Ñž‹™›ÜXÜ™]\›˜˜[œÙ›Ü›H	ÝKÜXÚ]H	ÝXK™›ÜŠKÝ]Ù•UØ^N˜˜[œÙ›Ü›H	Ý™ßXXÙZÛ\Ž˜ZYÚ	Ý™ßKÚY	Ý™ßKX\™Ú[ˆ	Ý™ßXK[™OXJOO›Ü
KJOÝ›ÚY˜˜[œÛ]J	ÙKž\	ÙKž_\
X›[Ý™UÈŠK^Û[Ý™UÎ™[™K›Ü˜J
K
OOžØÛÛœÝY[™JJNÚYŠŠ\™]\›ˆØ	ÛŸHØØ[J	Þ”ËœØØ[K™›ÜJX›ŸK™›ÜŠ_KÛZ[‘›Ü[YN”NX^›Ü[YNš^Y_OX^YKÚ]Z^YKTN™OLMLZ]KŽÝ˜\ˆÚ]XJ
ØÝ\œ™[™K\Ý[˜][ÛŽ™X\ÛÛŽ›ŸJOOžØÛÛœÝIÊK
NÚYŠL
\™]\›ˆNÚYŠ]™J\™]\›ˆ^YNØÛÛœÝO\‹Ý™KÏTN
×Ú]
šKÏ[OOHÐSÑSÜÊ‘Z]œÎÜ™]\›ˆ[X™\ŠËÑš^Y
ŠJ_K™Ù]›Ü\˜][ÛˆŠKÚ]XJ
Ú[\XÝ™K˜YÙØX›N[Y[œÚ[ÛœÎ›‹šY]ÜÜœ‹Y\Üš]XØ[š_JOOžØÛÛœÝÙ˜YÙØX›\ÎœË›ÜX›\Î›ßO[‹Ï[›
JKOXÏÛÖØ×N›[[ÖÝ™\ØÜš\Ü‹™›ÜX›RYKR™JÚ[\XÝ™K˜YÙØX›N˜YÙØX›\ÎœËY\Üš]XØ[šK›ÜX›N_‹šY]ÜÜœŸJNÜ™]\›ˆ›Ê˜ÛY[˜›Ü™\›Þ˜Ù[\Š_K™Ù]™]ÒÛYPÛY[Ù™œÙ]ŠKš]XJ
Ù˜YÙØX›\Î™K™X\ÛÛŽ\Ý[\XÝ›‹ÛYNœ‹šY]ÜÜšKÛ“Y[\XÝœßJOOˆ[‹˜]OOH‘“ÔÞÚ[\XÝ”]™JÙ˜YÙØX›\Î™K[\XÝœË\Ý[˜][ÛŽœ‹šY]ÜÜšK›Ü˜ÙTÚÝ[[š[X]NˆLJKY›Ü[œÚYQ›ÜX›NˆL_N›‹˜]\OOOH”‘SÔ‘TˆÞÚ[\XÝ›‹Y›Ü[œÚYQ›ÜX›NˆLNžÚ[\XÝžË‹‹›‹\ÜXÙY•TßKY›Ü[œÚYQ›ÜX›NˆLK™Ù]›Ü[\XÝŠNØÛÛœÝZ]XJ
ÙÙ]Ý]N™K\Ü]ÚJOO›OœOžÚYŠSœŠ‹‘“ÔŠJ^ÛŠŠNÜ™]\›ŸXÛÛœÝOYJ
KÏ\‹œ^[ØYœ™X\ÛÛŽÚYŠKœ\ÙOOOHÓÓPÕS‘ÈŠ^Ý
š]
Ü™X\ÛÛŽœßJJNÜ™]\›ŸZYŠKœ\ÙOOOH’QHŠ\™]\›ŽÚKœ\ÙOOOH‘“ÔÔS‘S‘È‰‰šKš\ÕØZ][™É‰šÝ

KKœ\ÙOOOH‘QÑÒS‘ÈŸKœ\ÙOOOH‘“ÔÔS‘S‘ÈŸÝ

NØÛÛœÝÏZK˜Üš]XØ[OZK™[Y[œÚ[ÛœË]K™˜YÙØX›\ÖÚK˜Üš]XØ[™˜YÙØX›KšYKÚ[\XÝšY›Ü[œÚYQ›ÜX›N›_OZš]
Ü™X\ÛÛŽœË\Ý[\XÝšKš[\XÝY\Üš]XØ[šK˜Y\Üš]XØ[Û“Y[\XÝšK›Û“Y[\XÝÛYNšK™[Y[œÚ[ÛœË™›ÜX›\ÖÚK˜Üš]XØ[™›ÜX›KšYKšY]ÜÜšKšY]ÜÜ˜YÙØX›\ÎšK™[Y[œÚ[ÛœË™˜YÙØX›\ßJKÏ[OÚÞŠ
N›[[OÖÊ
N›[Ï^Ú[™^˜Ë™˜YÙØX›Kš[™^›ÜX›RY˜Ë™›ÜX›KšYKÏ^Ù˜YÙØX›RY™‹™\ØÜš\Ü‹šY\N™‹™\ØÜš\Ü‹\KÛÝ\˜ÙNË™X\ÛÛŽœË[ÙNšK›[Ý™[Y[[ÙK\Ý[˜][ÛŽ™ËÛÛXš[™N˜ŸKOPÚ]
Ú[\XÝš˜YÙØX›N™‹[Y[œÚ[ÛœÎKšY]ÜÜšKšY]ÜÜY\Üš]XØ[šK˜Y\Üš]XØ[JK^ØÜš]XØ[šK˜Üš]XØ[Y\Üš]XØ[šK˜Y\Üš]XØ[™\Ý[—Ë[\XÝšNÚYŠJ[Ü
K˜Ý\œ™[˜ÛY[›Ù™œÙ]J_HWË˜ÛÛXš[™JJ^Ý
ŠØÛÛ\]Y”ŸJJNÜ™]\›ŸXÛÛœÝOTÚ]
ØÝ\œ™[šK˜Ý\œ™[˜ÛY[›Ù™œÙ]\Ý[˜][ÛŽ‘K™X\ÛÛŽœßJNÝ
Z]
Û™]ÒÛYPÛY[Ù™œÙ]‘K›Ü\˜][ÛŽKÛÛ\]Y”ŸJJ_K™›ÜZY]Ø\™HŠNÝ˜\ˆÞYOXJ

OOŠÞÚ[™ÝËœYÙVÙ™œÙ]NÚ[™ÝËœYÙVSÙ™œÙ]JK™Ù]Ú[™ÝÔØÜ›ÛŠNÙ[˜Ý[Ûˆš]
J^Ü™]\›žÙ]™[˜[YNˆœØÜ›Û‹Ü[ÛœÎžÜ\ÜÚ]™NˆLØ\\™NˆL_K›Ž˜JOžÝ\™Ù]OO]Ú[™ÝÉ‰\™Ù]OO]Ú[™ÝË™ØÝ[Y[J
_K™›ˆŠ__XJš]™Ù]Ú[™ÝÔØÜ›Ûš[™[™ÈŠNÙ[˜Ý[Ûˆ]
ÛÛ•Ú[™ÝÔØÜ›Û™_J^Ù[˜Ý[Ûˆ

^ÙJÞYJ
J_XJ\]TØÜ›ÛŠNØÛÛœÝQ”Ê
KTš]
ŠNÛ]O\ÜÙ[˜Ý[ÛˆÊ
^Ü™]\›ˆHOO\ÜXJËš\ÐXÝ]™LˆŠNÙ[˜Ý[ÛˆÊ
^ÜÊ
I‰šÝ

KOT
Ú[™ÝËÜ—J_XJËœÝ\ˆŠNÙ[˜Ý[ÛˆÊ
^ÜÊ
_Ý

K‹˜Ø[˜Ù[

KJ
KO\Ü\™]\›ˆJËœÝÜŠKÜÝ\›ËÝÜ˜Ë\ÐXÝ]™Nœß_XJ]™Ù]ØÜ›Û\Ý[™\ˆŠNØÛÛœÝÚ]XJOO“œŠK‘“ÔÐÓÓTUHŠ_œŠK‘“ÔÐS’SPUHŠ_œŠK‘“TÒŠKœÚÝ[ÝÜ	HŠKš]XJOOžØÛÛœÝU]
ÛÛ•Ú[™ÝÔØÜ›Û˜JOžÙK™\Ü]Ú
š]
Û™]ÔØÜ›Û›ŸJJ_K›Û•Ú[™ÝÔØÜ›ÛŠ_JNÜ™]\›ˆOœOžÈ]š\ÐXÝ]™J
I‰“œŠ‹’S’UPSÔP“TÒŠI‰œÝ\

Kš\ÐXÝ]™J
I‰šÚ]
ŠI‰œÝÜ

KŠŠ__KœØÜ›Û\Ý[™\ˆŠNÝ˜\ˆÚ]XJOOžÛ]HLKHLNØÛÛœÝ\Ù][Y[Ý]


OOžÛHLJKOXJÏOžÝŸ
HLJÊKÛX\•[Y[Ý]
ŠJ_Kœ™\Ý[ŠNÜ™]\›ˆKØ\ÐØ[YJ
OO_K™Ù]^\š[™Ð[››Ý[˜ÙHŠK]XJ

OOžØÛÛœÝOV×KXJOOžØÛÛœÝÏYK™š[™[™^
ÏO˜Ë[Y\’YOOZJNÜÏOOKLI‰šÝ

NØÛÛœÝÛ×OYKœÜXÙJËJNÛË˜Ø[˜XÚÊ
_K™^XÝ]LˆŠNÜ™]\›žØY˜JOOžØÛÛœÝÏ\Ù][Y[Ý]


OO
ÊJKÏ^Ý[Y\’YœËØ[˜XÚÎš_NÙKœ\Ú
Ê_K˜YˆŠK›\Ú˜J

OOžÚYŠYK›[™Ý
\™]\›ŽØÛÛœÝOVË‹‹™WNÙK›[™ÝLK™›Ü‘XXÚ
ÏOžØÛX\•[Y[Ý]
Ë[Y\’Y
KË˜Ø[˜XÚÊ
_J_K™›\ÚˆŠ__K™Ù]\Þ[˜ÓX\œÚ[ŠNØÛÛœÝZ]XJ
K
OO™OO[[	‰O[[ÈL™OO[[O[[ÈLN™K™›ÜX›RYOO]™›ÜX›RY	‰™Kš[™^OO]š[™^˜\™SØØ][ÛœÑ\]X[ŠK]XJ
K
OO™OO[[	‰O[[ÈL™OO[[O[[ÈLN™K™˜YÙØX›RYOO]™˜YÙØX›RY	‰™K™›ÜX›RYOO]™›ÜX›RYš\ÐÛÛXš[™Q\]X[ŠKZ]XJ
K
OOžÚYŠOOO]
\™]\›ˆLØÛÛœÝYK™˜YÙØX›KšYOO]™˜YÙØX›KšY	‰™K™˜YÙØX›K™›ÜX›RYOO]™˜YÙØX›K™›ÜX›RY	‰™K™˜YÙØX›K\OOO]™˜YÙØX›K\I‰™K™˜YÙØX›Kš[™^OO]™˜YÙØX›Kš[™^YK™›ÜX›KšYOO]™›ÜX›KšY	‰™K™›ÜX›K\OOO]™›ÜX›K\NÜ™]\›ˆ‰‰œŸKš\ÐÜš]XØ[\]X[ŠKŒOXJ
K
OOžÝ

_KÚ][Z[™ÜÈŠKTXJ
K
OOŠÙ˜YÙØX›RY™K™˜YÙØX›KšY\N™K™›ÜX›K\KÛÝ\˜ÙNžÙ›ÜX›RY™K™›ÜX›KšY[™^™K™˜YÙØX›Kš[™^K[ÙNJK™Ù]˜YÔÝ\ŠNÙ[˜Ý[ÛˆJK‹Š^ÚYŠYJ^ÛŠŠ
JNÜ™]\›ŸXÛÛœÝOSÚ]
ŠNÙJØ[››Ý[˜ÙNš_JKKØ\ÐØ[Y

_ŠŠ
J_XJK™^XÝ]HŠNÝ˜\ˆ]XJ
K
OOžØÛÛœÝQ]

NÛ][[ØÛÛœÝOXJ
KÊOOžÜ‰‰šÝ

KŒJ›Û™Y›Ü™PØ\\™H‹

OOžØÛÛœÝYJ
K›Û™Y›Ü™PØ\\™NØ‰‰˜ŠÙ˜YÙØX›RY›K[ÙN™ßJ_J_K˜™Y›Ü™PØ\\™HŠKÏXJ
KÊOOžÜ‰‰šÝ

KŒJ›Û™Y›Ü™Q˜YÔÝ\‹

OOžØÛÛœÝYJ
K›Û™Y›Ü™Q˜YÔÝ\Ø‰‰˜ŠTŠKÊJ_J_K˜™Y›Ü™TÝ\ŠKÏXJ
KÊOOžÜ‰‰šÝ

NØÛÛœÝRTŠKÊNÜ^Û[ÙN™Ë\ÝÜš]XØ[›K\ÝØØ][ÛŽ˜‹œÛÝ\˜ÙK\ÝÛÛXš[™N›[K‹˜Y


OOžÒŒJ›Û‘˜YÔÝ\‹

OO•JJ
K›Û‘˜YÔÝ\‹›Û‘˜YÔÝ\
J_J_KœÝ\ˆŠKÏXJ
KÊOOžØÛÛœÝZÞŠÊKÏVÊÊNÜŸÝ

NØÛÛœÝÏHSZ]
K‹›\ÝÜš]XØ[
N×É‰Š‹›\ÝÜš]XØ[[JNØÛÛœÝOHRZ]
‹›\ÝØØ][Û‹ŠNÑI‰Š‹›\ÝØØ][ÛXŠNØÛÛœÝHT]
‹›\ÝÛÛXš[™KÊNÚYŠ‰‰Š‹›\ÝÛÛXš[™O]ÊKWÉ‰ˆQI‰ˆTŠ\™]\›ŽØÛÛœÝ^Ë‹‹’TŠK‹›[ÙJKÛÛXš[™NË\Ý[˜][ÛŽ˜ŸNÛ‹˜Y


OOžÒŒJ›Û‘˜YÕ\]H‹

OO•JJ
K›Û‘˜YÕ\]K‹›Û‘˜YÕ\]JJ_J_K\]LˆŠKOXJ

OOžÜŸÝ

K‹™›\Ú

_K™›\ÚˆŠKXJOOžÜŸÝ

K[[ŒJ›Û‘˜YÑ[™‹

OO•JJ
K›Û‘˜YÑ[™K›Û‘˜YÑ[™
J_K™›ÜˆŠNÜ™]\›žØ™Y›Ü™PØ\\™NšK™Y›Ü™TÝ\œËÝ\›Ë\]N˜Ë›\ÚK›Ü™‹X›Ü˜J

OOžÚYŠ\Š\™]\›ŽØÛÛœÝO^Ë‹‹’TŠ‹›\ÝÜš]XØ[‹›[ÙJKÛÛXš[™N›[\Ý[˜][ÛŽ›[™X\ÛÛŽˆÐSÑSŸNÙŠJ_K˜X›ÜŠ__K™Ù]X›\Ú\ˆŠKš]XJ
K
OOžØÛÛœÝS]
K
NÜ™]\›ˆOšOOœÏOžÚYŠœŠË‘Q“Ô‘WÒS’UPSÐÐTT‘HŠJ^Û‹˜™Y›Ü™PØ\\™JËœ^[ØY™˜YÙØX›RYËœ^[ØY›[Ý™[Y[[ÙJNÜ™]\›ŸZYŠœŠË’S’UPSÔP“TÒŠJ^ØÛÛœÝÏ\Ëœ^[ØY˜Üš]XØ[Û‹˜™Y›Ü™TÝ\
ËËœ^[ØY›[Ý™[Y[[ÙJKJÊK‹œÝ\
ËËœ^[ØY›[Ý™[Y[[ÙJNÜ™]\›ŸZYŠœŠË‘“ÔÐÓÓTUHŠJ^ØÛÛœÝÏ\Ëœ^[ØY˜ÛÛ\]Yœ™\Ý[Û‹™›\Ú

KJÊK‹™›Ü
ÊNÜ™]\›ŸZYŠJÊKœŠË‘“TÒŠJ^Û‹˜X›Ü

NÜ™]\›ŸXÛÛœÝÏ\‹™Ù]Ý]J
NÛËœ\ÙOOOH‘QÑÒS‘È‰‰›‹\]JË˜Üš]XØ[Ëš[\XÝ
__Kœ™\ÜÛ™\œÈŠNØÛÛœÝ	]XJOOO›OžÚYŠSœŠ‹‘“ÔÐS’SPUSÓ—Ñ’S’TÒQŠJ^Ý
ŠNÜ™]\›ŸXÛÛœÝYK™Ù]Ý]J
NÜ‹œ\ÙHOOH‘“ÔÐS’SPUS‘È‰‰šÝ

KK™\Ü]Ú
ŠØÛÛ\]Yœ‹˜ÛÛ\]YJJ_K™›Ü[š[X][Û‘š[š\ÚZY]Ø\™HŠKZ]XJOOžÛ][[[[Ù[˜Ý[ÛˆŠ
^Û‰‰ŠØ[˜Ù[[š[X][Û‘œ˜[YJŠK[[
K	‰Š

K[[
_\™]\›ˆJ‹˜ÛX\ˆŠKOOœÏOžÚYŠ
œŠË‘“TÒŠ_œŠË‘“ÔÐÓÓTUHŠ_œŠË‘“ÔÐS’SPUSÓ—Ñ’S’TÒQŠJI‰œŠ
KJÊKSœŠË‘“ÔÐS’SPUHŠJ\™]\›ŽØÛÛœÝÏ^Ù]™[˜[YNˆœØÜ›Û‹Ü[ÛœÎžØØ\\™NˆL\ÜÚ]™NˆLKÛ˜ÙNˆLK›Ž˜J[˜Ý[ÛŠ
^ÙK™Ù]Ý]J
Kœ\ÙOOOH‘“ÔÐS’SPUS‘È‰‰™K™\Ü]Ú
žYJ
J_K™›\Ú›Ü[š[X][ÛˆŠ_NÛ\™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÛ[[T
Ú[™ÝËÛ×J_J__K™›Ü[š[X][Û‘›\ÚÛ”ØÜ›ÛZY]Ø\™HŠNÝ˜\ˆš]XJOOŠ
OOO›OžÊœŠ‹‘“ÔÐÓÓTUHŠ_œŠ‹‘“TÒŠ_œŠ‹‘“ÔÐS’SPUHŠJI‰™KœÝÜX›\Ú[™Ê
K
Š_K™[Y[œÚ[Û“X\œÚ[ÝÜ\ˆŠKš]XJOOžÛ]HLNÜ™]\›Š
OO›OœOžÚYŠœŠ‹’S’UPSÔP“TÒŠJ^ÝHLKžT™XÛÜ™›ØÝ\Ê‹œ^[ØY˜Üš]XØ[™˜YÙØX›KšY
KŠŠKKžT™\ÝÜ™Q›ØÝ\Ô™XÛÜ™Y

NÜ™]\›ŸZYŠŠŠKH]
^ÚYŠœŠ‹‘“TÒŠJ^ÝHLKKžT™\ÝÜ™Q›ØÝ\Ô™XÛÜ™Y

NÜ™]\›ŸZYŠœŠ‹‘“ÔÐÓÓTUHŠJ^ÝHLNØÛÛœÝO\‹œ^[ØY˜ÛÛ\]Yœ™\Ý[ÚK˜ÛÛXš[™I‰™KžTÚY™XÛÜ™
K™˜YÙØX›RYK˜ÛÛXš[™K™˜YÙØX›RY
KKžT™\ÝÜ™Q›ØÝ\Ô™XÛÜ™Y

____K™›ØÝ\ÈŠNØÛÛœÝZ]XJOO“œŠK‘“ÔÐÓÓTUHŠ_œŠK‘“ÔÐS’SPUHŠ_œŠK‘“TÒŠKœÚÝ[ÝÜŠNÝ˜\ˆ]XJOOO›OœOžÚYŠZ]
ŠJ^ÙKœÝÜ

KŠŠNÜ™]\›ŸZYŠœŠ‹’S’UPSÔP“TÒŠJ^ÛŠŠNØÛÛœÝO]™Ù]Ý]J
NÚKœ\ÙHOOH‘QÑÒS‘È‰‰šÝ

KKœÝ\
JNÜ™]\›Ÿ[ŠŠKKœØÜ›Û
™Ù]Ý]J
J_K˜]]ÔØÜ›ÛŠNØÛÛœÝš]XJOOO›OžÚYŠ
ŠKSœŠ‹”P“TÒÕÒSWÑQÑÒS‘ÈŠJ\™]\›ŽØÛÛœÝYK™Ù]Ý]J
NÜ‹œ\ÙOOOH‘“ÔÔS‘S‘È‰‰Š‹š\ÕØZ][™ßK™\Ü]Ú
žYJÜ™X\ÛÛŽœ‹œ™X\ÛÛŸJJJ_Kœ[™[™Ñ›ÜŠKÚ]WÝ™NÝ˜\ˆÚ]XJ
Ù[Y[œÚ[Û“X\œÚ[™K›ØÝ\ÓX\œÚ[Ý[SX\œÚ[›‹Ù]™\ÜÛ™\œÎœ‹[››Ý[˜ÙNšK]]ÔØÜ›Û\ŽœßJOOÝ™Jš]Ú]
›
Ú]
ŠKš]
JK]
JKZ]	]Z]š]]
ÊKš]š]

Kš]
‹JJJJK˜Ü™X]TÝÜ™HŠNØÛÛœÝÍOXJ

OOŠØY][ÛœÎžßK™[[Ý˜[ÎžßK[ÙYšYYžß_JK˜ÛX[‰HŠNÙ[˜Ý[ÛˆZ]
Ü™YÚ\ÝžN™KØ[˜XÚÜÎJ^Û]UÍJ
K[[ØÛÛœÝOXJ

OOžÜŸ
˜ÛÛXÝ[Û”Ý\[™Ê
K\™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÜ[[ØÛÛœÝØY][ÛœÎK™[[Ý˜[Î™‹[ÙYšYYšO[‹OSØš™XÝšÙ^\ÊJK›X\
ÏO™K™˜YÙØX›K™Ù]žRY
ÊK™Ù][Y[œÚ[ÛŠJJKœÛÜ

ËÊOOË™\ØÜš\Ü‹š[™^WË™\ØÜš\Ü‹š[™^
KÏSØš™XÝšÙ^\Ê
K›X\
ÏOžØÛÛœÝOYK™›ÜX›K™Ù]žRY
ÊK˜Ø[˜XÚÜË™Ù]ØÜ›ÛÚ[Q˜YÙÚ[™Ê
NÜ™]\›žÙ›ÜX›RYËØÜ›Û‘__JK^ØY][ÛœÎ›K™[[Ý˜[Î“Øš™XÝšÙ^\ÊŠK[ÙYšYY™ßNÛUÍJ
KœX›\Ú
Š_JJ_K˜ÛÛXÝŠNÜ™]\›žØY˜JOOžØÛÛœÝ]K™\ØÜš\Ü‹šYÛ‹˜Y][ÛœÖÙ—O]K‹›[ÙYšYYÝK™\ØÜš\Ü‹™›ÜX›RYOHL‹œ™[[Ý˜[ÖÙ—I‰™[]H‹œ™[[Ý˜[ÖÙ—KJ
_K˜YˆŠK™[[Ý™N˜JOOžØÛÛœÝ]K™\ØÜš\ÜŽÛ‹œ™[[Ý˜[ÖÙ‹šYOHL‹›[ÙYšYYÙ‹™›ÜX›RYOHL‹˜Y][ÛœÖÙ‹šYI‰™[]H‹˜Y][ÛœÖÙ‹šYKJ
_Kœ™[[Ý™HŠKÝÜ˜J

OOžÜ‰‰ŠØ[˜Ù[[š[X][Û‘œ˜[YJŠK[[UÍJ
J_KœÝÜŠ__XJZ]˜Ü™X]TX›\Ú\ˆŠNÝ˜\ˆÞYOXJ
ÜØÜ›ÛZYÚ™KØÜ›ÛÚYZYÚ›‹ÚYœŸJOOžØÛÛœÝOV›ÊÞN™_KÞœ‹N›ŸJNÜ™]\›žÞ“X]›X^
Kž
KN“X]›X^
KžJ__K™Ù]X^ØÜ›ÛŠKYOXJ

OOžØÛÛœÝOYØÝ[Y[™ØÝ[Y[[[Y[Ü™]\›ˆ_Ý

K_K™Ù]ØÝ[Y[[[Y[ŠKÞYOXJ

OOžØÛÛœÝO[YJ
NÜ™]\›ˆÞYJÜØÜ›ÛZYÚ™KœØÜ›ÛZYÚØÜ›ÛÚY™KœØÜ›ÛÚYÚY™K˜ÛY[ÚYZYÚ™K˜ÛY[ZYÚJ_K™Ù]X^Ú[™ÝÔØÜ›ÛŠKÚ]XJ

OOžØÛÛœÝO\ÞYJ
KXÞYJ
KYKžKYKžO[YJ
KÏZK˜ÛY[ÚYÏZK˜ÛY[ZYÚÏ\ŠÜËO[ŠÛÎÜ™]\›žÙœ˜[YN”ÊÝÜ›‹Yœ‹šYÚ˜Ë›ÝÛN_JKØÜ›ÛžÚ[š]X[™KÝ\œ™[™KX^Y™ŽžÝ˜[YN“K\ÜXÙ[Y[“____K™Ù]šY]ÜÜŠK]XJ
ØÜš]XØ[™KØÜ›ÛÜ[ÛœÎ™YÚ\ÝžN›ŸJOOžØÛÛœÝRÚ]

KO\‹œØÜ›Û˜Ý\œ™[ÏYK™›ÜX›KÏ[‹™›ÜX›K™Ù][žU\JË\JK›X\
Oš˜Ø[˜XÚÜË™Ù][Y[œÚ[Û[™Ø]ÚØÜ›Û
K
JKÏ[‹™˜YÙØX›K™Ù][žU\JK™˜YÙØX›K\JK›X\
Oš™Ù][Y[œÚ[ÛŠJJNÜ™]\›žÙ[Y[œÚ[ÛœÎžÙ˜YÙØX›\Î“™JÊK›ÜX›\Î“]™JÊ_KÜš]XØ[™KšY]ÜÜœŸ_K™Ù][š]X[X›\ÚŠNÙ[˜Ý[Ûˆ›™JKŠ^Ü™]\›ˆJ‹™\ØÜš\Ü‹šYOO]šY‹™\ØÜš\Ü‹\HOO]\_K™›ÜX›K™Ù]žRY
‹™\ØÜš\Ü‹™›ÜX›RY
K™\ØÜš\Ü‹›[ÙHOOHš\X[Š_XJ›™KœÚÝ[X›\Ú\]HŠNÝ˜\ˆZ]XJ
K
OOžÛ][[ØÛÛœÝVZ]
ØØ[˜XÚÜÎžÜX›\ÚœX›\ÚÚ[Q˜YÙÚ[™ËÛÛXÝ[Û”Ý\[™Î˜ÛÛXÝ[Û”Ý\[™ßK™YÚ\ÝžN™_JKOXJ
ËŠOOžÙK™›ÜX›K™^\ÝÊÊ_Ý

K‰‰\]Q›ÜX›R\Ñ[˜X›Y
ÚY™Ë\Ñ[˜X›Y˜ŸJ_K\]Q›ÜX›R\Ñ[˜X›YˆŠKÏXJ
ËŠOOžÛ‰‰ŠK™›ÜX›K™^\ÝÊÊ_Ý

K\]Q›ÜX›R\ÐÛÛXš[™Q[˜X›Y
ÚY™Ë\ÐÛÛXš[™Q[˜X›Y˜ŸJJ_K\]Q›ÜX›R\ÐÛÛXš[™Q[˜X›YˆŠKÏXJ
ËŠOOžÛ‰‰ŠK™›ÜX›K™^\ÝÊÊ_Ý

K\]Q›ÜX›TØÜ›Û
ÚY™Ë™]ÔØÜ›Û˜ŸJJ_K\]Q›ÜX›TØÜ›ÛˆŠKÏXJ
ËŠOOžÛ‰‰™K™›ÜX›K™Ù]žRY
ÊK˜Ø[˜XÚÜËœØÜ›Û
Š_KœØÜ›Û›ÜX›LˆŠKOXJ

OOžÚYŠ[Š\™]\›ŽÜ‹œÝÜ

NØÛÛœÝÏ[‹˜Üš]XØ[™›ÜX›NÙK™›ÜX›K™Ù][žU\JË\JK™›Ü‘XXÚ
O˜‹˜Ø[˜XÚÜË™˜YÔÝÜY

JK‹[œÝXœØÜšX™J
K[[KœÝÜX›\Ú[™ÈŠKXJÏOžÛŸÝ

NØÛÛœÝ[‹˜Üš]XØ[™˜YÙØX›NÙË\OOOHQUSÓˆ‰‰››™JK‹Ë˜[YJI‰œ‹˜Y
Ë˜[YJKË\OOOH”‘SSÕS‰‰››™JK‹Ë˜[YJI‰œ‹œ™[[Ý™JË˜[YJ_KœÝXœØÜšX™\ˆŠNÜ™]\›žÝ\]Q›ÜX›R\Ñ[˜X›YšK\]Q›ÜX›R\ÐÛÛXš[™Q[˜X›YœËØÜ›Û›ÜX›N˜Ë\]Q›ÜX›TØÜ›Û›ËÝ\X›\Ú[™Î˜JÏOžÛ‰‰šÝ

NØÛÛœÝYK™˜YÙØX›K™Ù]žRY
Ë™˜YÙØX›RY
KÏYK™›ÜX›K™Ù]žRY
‹™\ØÜš\Ü‹™›ÜX›RY
KÏ^Ù˜YÙØX›N˜‹™\ØÜš\Ü‹›ÜX›NË™\ØÜš\ÜŸKOYKœÝXœØÜšX™JŠNÜ™]\›ˆ^ØÜš]XØ[—Ë[œÝXœØÜšX™N‘_K]
ØÜš]XØ[—Ë™YÚ\ÝžN™KØÜ›ÛÜ[ÛœÎ™ËœØÜ›ÛÜ[ÛœßJ_KœÝ\X›\Ú[™ÈŠKÝÜX›\Ú[™Î__K˜Ü™X]Q[Y[œÚ[Û“X\œÚ[ŠK^YOXJ
K
OO™Kœ\ÙOOOH’QHÈL™Kœ\ÙHOOH‘“ÔÐS’SPUS‘ÈŸK˜ÛÛ\]Yœ™\Ý[™˜YÙØX›RYOO]ÈLN™K˜ÛÛ\]Yœ™\Ý[œ™X\ÛÛOOH‘“Ô‹˜Ø[”Ý\˜YÈŠKš]XJOOžÝÚ[™ÝËœØÜ›ÛžJKžKžJ_KœØÜ›ÛÚ[™ÝÈŠNØÛÛœÝš]SZJOO’ÓÊJK™š[\ŠOˆJ]š\Ñ[˜X›Y]™œ˜[YJJJK\ÝXJ
K
OO–š]

K™š[™
OŠ‹™œ˜[Y_Ý

KÝ™J‹™œ˜[YKœYÙSX\™Ú[›Þ
JJJJ_[™Ù]ØÜ›ÛX›Q›ÜX›SÝ™\ˆŠNÝ˜\ˆÝXJ
ØÙ[\Ž™K\Ý[˜][ÛŽ›ÜX›\Î›ŸJOOžÚYŠ
^ØÛÛœÝO[–ÝNÜ™]\›ˆK™œ˜[YOÚN›[\™]\›ˆ\Ý
KŠ_K™Ù]™\ÝØÜ›ÛX›Q›ÜX›HŠNØÛÛœÝTÏ^ÜÝ\œ›ÛT\˜Ù[YÙN‹ŒKX^ØÜ›Û]\˜Ù[YÙN‹ŒKX^^[ØÜ›ÛŒŽX\ÙN˜JOO™JŠŒ‹™X\ÙHŠK\˜][Û‘[\[š[™ÎžÜÝÜ[\[š[™Ð]ŒLŒXØÙ[\˜]P]ŒÍŒK\ØX›YˆL_NÝ˜\ˆœÝXJ
KJ
OOœTÊOOžØÛÛœÝ[Š
KOYVÝœÚ^™WJœ‹œÝ\œ›ÛT\˜Ù[YÙKÏYVÝœÚ^™WJœ‹›X^ØÜ›Û]\˜Ù[YÙNÜ™]\›žÜÝ\ØÜ›Û[™Ñœ›ÛNšKX^ØÜ›Û˜[YP]œß_K™Ù]\Ý[˜ÙU™\ÚÛÈŠKYOXJ
ÜÝ\Ù”˜[™ÙN™K[™Ù”˜[™ÙNÝ\œ™[›ŸJOOžØÛÛœÝ]YNÜ™]\›ˆOOLÌŠ‹YJKÜŸK™Ù]\˜Ù[YÙHŠK	LKœÝXJ
KJ
OOœTÊOOžØÛÛœÝ[Š
NÚYŠOœÝ\ØÜ›Û[™Ñœ›ÛJ\™]\›ˆÚYŠO]›X^ØÜ›Û˜[YP]
\™]\›ˆ‹›X^^[ØÜ›ÛÚYŠOOO]œÝ\ØÜ›Û[™Ñœ›ÛJ\™]\›ˆ	ŽØÛÛœÝÏLKYYJÜÝ\Ù”˜[™ÙN›X^ØÜ›Û˜[YP][™Ù”˜[™ÙNœÝ\ØÜ›Û[™Ñœ›ÛKÝ\œ™[™_JKÏ\‹›X^^[ØÜ›Û
œ‹™X\ÙJÊNÜ™]\›ˆX]˜ÙZ[
Ê_K™Ù]˜[YQœ›ÛQ\Ý[˜ÙHŠK\ÝXJ
KŠOOžØÛÛœÝ[Š
KO\‹™\˜][Û‘[\[š[™Ë˜XØÙ[\˜]P]Ï\‹™\˜][Û‘[\[š[™ËœÝÜ[\[š[™Ð]Ï]Ï\ËQ]K››ÝÊ
K[ÎÚYŠ\Ê\™]\›ˆNÚYŠJ\™]\›ˆ	ŽØÛÛœÝYYJÜÝ\Ù”˜[™ÙNšK[™Ù”˜[™ÙN˜ËÝ\œ™[™ŸJKOYJœ‹™X\ÙJ
NÜ™]\›ˆX]˜ÙZ[
J_K™[\[•˜[YPžU[YHŠK›™OXJ
Ù\Ý[˜ÙUÑYÙN™K™\ÚÛÎ˜YÔÝ\[YN›‹ÚÝ[\ÙU[YQ[\[š[™Îœ‹Ù]]]ÔØÜ›Û\“Ü[ÛœÎš_JOOžØÛÛœÝÏ\œÝ
KJNÜ™]\›ˆÏOOLÌœÓX]›X^
\Ý
Ë‹JK	ŠNœßK™Ù]˜[YHŠK[™OXJ
ØÛÛZ[™\Ž™K\Ý[˜ÙUÑYÙ\Î˜YÔÝ\[YN›‹^\Îœ‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJOOžØÛÛœÝÏ[œÝ
K‹ÊNÜ™]\›ˆÜ‹™[™OÜ‹œÝ\OÜ›™JÙ\Ý[˜ÙUÑYÙNÜ‹™[™K™\ÚÛÎ›Ë˜YÔÝ\[YN›‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJN‹LJœ›™JÙ\Ý[˜ÙUÑYÙNÜ‹œÝ\K™\ÚÛÎ›Ë˜YÔÝ\[YN›‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJ_K™Ù]ØÜ›ÛÛ^\ÈŠK\ÝXJ
ØÛÛZ[™\Ž™KÝXš™XÝ›ÜÜÙYØÜ›Û›ŸJOOžØÛÛœÝ]šZYÚ™KšZYÚO]ÚY™KÚYÜ™]\›ˆZI‰ˆ\ÛŽšI‰œÛ[žÞšOÌ›‹žNœÌ›‹ž__K˜Y\Ý›Ü”Ú^™S[Z]ÈŠNØÛÛœÝÜÝT™JOO™OOOLÌ™JNÝ˜\ˆžYOXJ
Ù˜YÔÝ\[YN™KÛÛZ[™\ŽÝXš™XÝ›‹Ù[\Žœ‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJOOžØÛÛœÝÏ^ÝÜœ‹žK]ÜšYÚœšYÚ\‹ž›ÝÛN˜›ÝÛK\‹žKYœ‹ž]›YKÏX[™JØÛÛZ[™\Ž\Ý[˜ÙUÑYÙ\Î›Ë˜YÔÝ\[YN™K^\Î“ž‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJKOX[™JØÛÛZ[™\Ž\Ý[˜ÙUÑYÙ\Î›Ë˜YÔÝ\[YN™K^\Î•]™KÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJK\ÜÝ
ÞKN˜ßJNÚYŠÜ
‹JJ\™]\›ˆ[ØÛÛœÝZ\Ý
ØÛÛZ[™\ŽÝXš™XÝ›‹›ÜÜÙYØÜ›Û™ŸJNÜ™]\›ˆÛÜ
JOÛ[š›[K™Ù]ØÜ›Û	HŠNØÛÛœÝÜÝT™JOO™OOOLÌ™OŒÌN‹LJK^J

OOžØÛÛœÝOXJ
ŠOOÝ›Ý[ŽŒ™Ù]™[XZ[™\ˆŠNÜ™]\›ŠØÝ\œ™[X^›‹Ú[™ÙNœŸJOOžØÛÛœÝOVZJŠKÏ^Þ™JKž‹ž
KN™JKžK‹žJ_NÜ™]\›ˆÜ
ËJOÛ[œß_JJ
KYOXJ
ÛX^™KÝ\œ™[Ú[™ÙN›ŸJOOžØÛÛœÝ^Þ“X]›X^
žKž
KN“X]›X^
žKKžJ_KO[ÜÝ
ŠKÏU^ŠÛX^œ‹Ý\œ™[Ú[™ÙNš_JNÜ™]\›ˆ\ßKžOOL	‰œËžOOLKžHOOL	‰œËžOOOLK˜Ø[”\X[TØÜ›ÛŠKžXJ
K
OOšYJØÝ\œ™[™KœØÜ›Û˜Ý\œ™[X^™KœØÜ›Û›X^Ú[™ÙNJK˜Ø[”ØÜ›ÛÚ[™ÝÈŠKÝXJ
K
OOžÚYŠPžŠK
J\™]\›ˆ[ØÛÛœÝYKœØÜ›Û›X^YKœØÜ›Û˜Ý\œ™[Ü™]\›ˆ^ŠØÝ\œ™[œ‹X^›‹Ú[™ÙNJ_K™Ù]Ú[™ÝÓÝ™\›\ŠKžXJ
K
OOžØÛÛœÝYK™œ˜[YNÜ™]\›ˆÚYJØÝ\œ™[›‹œØÜ›Û˜Ý\œ™[X^›‹œØÜ›Û›X^Ú[™ÙNJNˆL_K˜Ø[”ØÜ›Û›ÜX›HŠKÜÝXJ
K
OOžØÛÛœÝYK™œ˜[YNÜ™]\›ˆ[Ÿ^žŠK
OÛ[•^ŠØÝ\œ™[›‹œØÜ›Û˜Ý\œ™[X^›‹œØÜ›Û›X^Ú[™ÙNJ_K™Ù]›ÜX›SÝ™\›\ŠNÝ˜\ˆ\ÝXJ
ÝšY]ÜÜ™KÝXš™XÝÙ[\Ž›‹˜YÔÝ\[YNœ‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJOOžØÛÛœÝÏYžYJÙ˜YÔÝ\[YNœ‹ÛÛZ[™\Ž™K™œ˜[YKÝXš™XÝÙ[\Ž›‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJNÜ™]\›ˆÉ‰žŠKÊOÛÎ›[K™Ù]Ú[™ÝÔØÜ›ÛÚ[™ÙHŠKÝXJ
Ù›ÜX›N™KÝXš™XÝÙ[\Ž›‹˜YÔÝ\[YNœ‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJOOžØÛÛœÝÏYK™œ˜[YNÚYŠ[Ê\™]\›ˆ[ØÛÛœÝÏYžYJÙ˜YÔÝ\[YNœ‹ÛÛZ[™\Ž›ËœYÙSX\™Ú[›ÞÝXš™XÝÙ[\Ž›‹ÚÝ[\ÙU[YQ[\[š[™ÎšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJNÜ™]\›ˆÉ‰žžŠKÊOØÎ›[K™Ù]›ÜX›TØÜ›ÛÚ[™ÙHŠK[™OXJ
ÜÝ]N™K˜YÔÝ\[YNÚÝ[\ÙU[YQ[\[š[™Î›‹ØÜ›ÛÚ[™ÝÎœ‹ØÜ›Û›ÜX›NšKÙ]]]ÔØÜ›Û\“Ü[ÛœÎœßJOOžØÛÛœÝÏYK˜Ý\œ™[œYÙK˜›Ü™\›ÞÙ[\‹OYK™[Y[œÚ[ÛœË™˜YÙØX›\ÖÙK˜Üš]XØ[™˜YÙØX›KšYKœYÙK›X\™Ú[›ÞÚYŠKš\ÕÚ[™ÝÔØÜ›Û[ÝÙY
^ØÛÛœÝOYKšY]ÜÜÏ]\Ý
Ù˜YÔÝ\[YNšY]ÜÜ›KÝXš™XÝKÙ[\Ž›ËÚÝ[\ÙU[YQ[\[š[™Î›‹Ù]]]ÔØÜ›Û\“Ü[ÛœÎœßJNÚYŠÊ^ÜŠÊNÜ™]\›Ÿ_XÛÛœÝ]Ý
ØÙ[\Ž›Ë\Ý[˜][ÛŽ››
Kš[\XÝ
K›ÜX›\Î™K™[Y[œÚ[ÛœË™›ÜX›\ßJNÚYŠYŠ\™]\›ŽØÛÛœÝYÝ
Ù˜YÔÝ\[YN›ÜX›N™‹ÝXš™XÝKÙ[\Ž›ËÚÝ[\ÙU[YQ[\[š[™Î›‹Ù]]]ÔØÜ›Û\“Ü[ÛœÎœßJNÚ	‰šJ‹™\ØÜš\Ü‹šY
_KœØÜ›ÛŠKœÝXJ
ÜØÜ›ÛÚ[™ÝÎ™KØÜ›Û›ÜX›NÙ]]]ÔØÜ›Û\“Ü[ÛœÎ›XJ

OOœTË™Ù]]]ÔØÜ›Û\“Ü[ÛœÈŠ_JOOžØÛÛœÝQ”ÊJKOQ”Ê
NÛ]Ï[[ØÛÛœÝÏXJOžÜßÝ

NØÛÛœÝÜÚÝ[\ÙU[YQ[\[š[™Îš˜YÔÝ\[YN›_O\ÎÚ[™JÜÝ]N™‹ØÜ›ÛÚ[™ÝÎœ‹ØÜ›Û›ÜX›NšK˜YÔÝ\[YN›KÚÝ[\ÙU[YQ[\[š[™ÎšÙ]]]ÔØÜ›Û\“Ü[ÛœÎ›ŸJ_KžTØÜ›ÛŠNÜ™]\›žÜÝ\˜JOžÜÉ‰šÝ

NØÛÛœÝQ]K››ÝÊ
NÛ]OHLNØÛÛœÝÏXJ

OOžÛOHLK™˜ZÙTØÜ›ÛØ[˜XÚÈŠNÚ[™JÜÝ]N™‹˜YÔÝ\[YNŒÚÝ[\ÙU[YQ[\[š[™ÎˆLKØÜ›ÛÚ[™ÝÎ™ËØÜ›Û›ÜX›N™ËÙ]]]ÔØÜ›Û\“Ü[ÛœÎ›ŸJKÏ^Ù˜YÔÝ\[YNšÚÝ[\ÙU[YQ[\[š[™Î›_KI‰›ÊŠ_KœÝ\	HŠKÝÜ˜J

OOžÜÉ‰Š‹˜Ø[˜Ù[

KK˜Ø[˜Ù[

KÏ[[
_KœÝÜŠKØÜ›Û›ß_K˜Ü™X]Q›ZYØÜ›Û\ˆŠKÝXJ
Û[Ý™N™KØÜ›Û›ÜX›NØÜ›ÛÚ[™ÝÎ›ŸJOOžØÛÛœÝXJ
ËJOOžØÛÛœÝVZJË˜Ý\œ™[˜ÛY[œÙ[XÝ[Û‹JNÙJØÛY[™ŸJ_K›[Ý™PžSÙ™œÙ]ŠKOXJ
ËJOOžÚYŠ^žŠËJJ\™]\›ˆNØÛÛœÝXÜÝ
ËJNÚYŠYŠ\™]\›ˆ
Ë™\ØÜš\Ü‹šYJK[ØÛÛœÝV›ÊKŠNÜ™]\›ˆ
Ë™\ØÜš\Ü‹šY
K›ÊK
_KœØÜ›Û›ÜX›P\Ó]XÚ\Ò]Ø[ˆŠKÏXJ
ËKŠOOžÚYŠXßPžŠKŠJ\™]\›ˆŽØÛÛœÝ[Ý
KŠNÚYŠZ
\™]\›ˆŠŠK[ØÛÛœÝOV›Ê‹
NÜ™]\›ˆŠJK›Ê‹J_KœØÜ›ÛÚ[™ÝÐ\Ó]XÚ\Ò]Ø[ˆŠNÜ™]\›ˆJÏOžØÛÛœÝOXËœØÜ›Û[\™\]Y\ÝÚYŠ]J\™]\›ŽØÛÛœÝ[›
Ëš[\XÝ
NÙŸÝ

NØÛÛœÝZJË™[Y[œÚ[ÛœË™›ÜX›\ÖÙ—KJNÚYŠZ
\™]\›ŽØÛÛœÝOXËšY]ÜÜÏ\ÊËš\ÕÚ[™ÝÔØÜ›Û[ÝÙYK
NÙÉ‰œŠËÊ_Kš[\ØÜ›Û\ˆŠ_K˜Ü™X]R[\ØÜ›Û\ˆŠKÝXJ
ÜØÜ›Û›ÜX›N™KØÜ›ÛÚ[™ÝÎ[Ý™N›‹Ù]]]ÔØÜ›Û\“Ü[ÛœÎœŸJOOžØÛÛœÝOYœÝ
ÜØÜ›ÛÚ[™ÝÎØÜ›Û›ÜX›N™KÙ]]]ÔØÜ›Û\“Ü[ÛœÎœŸJKÏZÝ
Û[Ý™N›‹ØÜ›ÛÚ[™ÝÎØÜ›Û›ÜX›N™_JNÜ™]\›žÜØÜ›Û˜JOOžÚYŠJŠ
K™\ØX›YKœ\ÙHOOH‘QÑÒS‘ÈŠJ^ÚYŠK›[Ý™[Y[[ÙOOOH‘“RQŠ^ÚKœØÜ›Û
JNÜ™]\›Ÿ]KœØÜ›Û[\™\]Y\Ý	‰œÊJ__KœØÜ›ÛˆŠKÝ\šKœÝ\ÝÜšKœÝÜ_K˜Ü™X]P]]ÔØÜ›Û\ˆŠNØÛÛœÝÌH™]K\™™‹J

OOžØÛÛœÝOX	ÒÌKY˜YËZ[™XÜ™]\›žØ˜\ÙN™K˜YÙØX›RY˜	Ù_KY˜YÙØX›KZYÛÛ^Y˜	Ù_KXÛÛ^ZY_JJ
KŽJ

OOžØÛÛœÝOX	ÒÌKY˜YÙØX›XÜ™]\›žØ˜\ÙN™KÛÛ^Y˜	Ù_KXÛÛ^ZYY˜	Ù_KZY_JJ
K\ÝJ

OOžØÛÛœÝOX	ÒÌKY›ÜX›XÜ™]\›žØ˜\ÙN™KÛÛ^Y˜	Ù_KXÛÛ^ZYY˜	Ù_KZY_JJ
KÛ™O^ØÛÛ^Y˜	ÒÌK\ØÜ›ÛXÛÛZ[™\‹XÛÛ^ZYKÜÝXJOOO˜ÉÝOH‰Ù_H—X›XZÙQÙ]Ù[XÝÜˆŠKŒOXJ
K
OO™K›X\
OžØÛÛœÝ[‹œÝ[\ÖÝNÜ™]\›ˆØ	Û‹œÙ[XÝÜŸHÈ	ÜŸHXˆˆŸJKš›Ú[ŠˆŠK™Ù]Ý[\ÈŠKœÝHœÚ[\‹Y]™[Îˆ›Û™NÈŽÝ˜\ˆ\ÝXJOOžØÛÛœÝYÜÝ
JKJ

OOžØÛÛœÝÏXˆÝ\œÛÜŽˆ]ÙXšÚ]YÜ˜XŽÂˆÝ\œÛÜŽˆÜ˜XŽÂˆÜ™]\›žÜÙ[XÝÜŽ
˜ÛÛ^Y
KÝ[\ÎžØ[Ø^\Î˜ˆ]ÙXšÚ]]ÝXÚXØ[Ý]ˆ›Û™NÂˆ]ÙXšÚ]]\ZYÚYÚXÛÛÜŽˆ™Ø˜J
NÂˆÝXÚXXÝ[ÛŽˆX[š\[][ÛŽÂˆ™\Ý[™Î˜Ë˜YÙÚ[™ÎœÝ›Ü[š[X][™Î˜ß__JJ
KJ

OOžØÛÛœÝÏXˆ˜[œÚ][ÛŽˆ	ÑK›Ý]Ù•UØ^_NÂˆÜ™]\›žÜÙ[XÝÜŽ
Ž˜ÛÛ^Y
KÝ[\ÎžÙ˜YÙÚ[™Î˜Ë›Ü[š[X][™Î˜Ë\Ù\Ø[˜Ù[˜ß__JJ
KO^ÜÙ[XÝÜŽ
\Ý˜ÛÛ^Y
KÝ[\ÎžØ[Ø^\Îˆ›Ý™\™›ÝËX[˜ÚÜŽˆ›Û™NÈŸ_KÏVÜ‹‹KÜÙ[XÝÜŽˆ˜›ÙH‹Ý[\ÎžÙ˜YÙÚ[™Î˜ˆÝ\œÛÜŽˆÜ˜X˜š[™ÎÂˆÝ\œÛÜŽˆ]ÙXšÚ]YÜ˜X˜š[™ÎÂˆ\Ù\‹\Ù[XÝˆ›Û™NÂˆ]ÙXšÚ]]\Ù\‹\Ù[XÝˆ›Û™NÂˆ[[Þ‹]\Ù\‹\Ù[XÝˆ›Û™NÂˆ[\Ë]\Ù\‹\Ù[XÝˆ›Û™NÂˆÝ™\™›ÝËX[˜ÚÜŽˆ›Û™NÂˆ_WNÜ™]\›žØ[Ø^\Î–ŒJË˜[Ø^\ÈŠK™\Ý[™Î–ŒJËœ™\Ý[™ÈŠK˜YÙÚ[™Î–ŒJË™˜YÙÚ[™ÈŠK›Ü[š[X][™Î–ŒJË™›Ü[š[X][™ÈŠK\Ù\Ø[˜Ù[–ŒJË\Ù\Ø[˜Ù[Š__K™Ù]Ý[\ÉHŠNØÛÛœÝ›]\[ÙˆÚ[™ÝÏH‰‰\[ÙˆÚ[™ÝË™ØÝ[Y[H‰‰\[ÙˆÚ[™ÝË™ØÝ[Y[˜Ü™X]Q[[Y[HÞ\ÙS^[Ý]Y™™XÝž\ÙQY™™XÝÍOXJ

OOžØÛÛœÝOYØÝ[Y[œ]Y\žTÙ[XÝÜŠšXYŠNÜ™]\›ˆ_Ý

K_K™Ù]XYŠKÛ™OXJOOžØÛÛœÝYØÝ[Y[˜Ü™X]Q[[Y[
œÝ[HŠNÜ™]\›ˆI‰œÙ]]šX]J››Û˜ÙH‹JK\OH^ØÜÜÈ‹K˜Ü™X]TÝ[Q[ŠNÙ[˜Ý[ÛˆœÝ
K
^ØÛÛœÝYœŠ

OOž\Ý
JKÙWJK^\ÙT™YŠ[
KO^\ÙT™YŠ[
KÏ][ŠZJOOžØÛÛœÝÏZK˜Ý\œ™[ÙßÝ

KË^ÛÛ[[_JK×JKÏ][ŠOOžØÛÛœÝÏ\‹˜Ý\œ™[ÙßÝ

KË^ÛÛ[[_K×JNÜ›


OOžÈ\‹˜Ý\œ™[	‰ˆZK˜Ý\œ™[Ý

NØÛÛœÝO[Û™J
KÏ[Û™J
NÜ™]\›ˆ‹˜Ý\œ™[[KK˜Ý\œ™[YËKœÙ]]šX]J	ÒÌKX[Ø^\ØJKËœÙ]]šX]J	ÒÌKY[˜[ZXØJKÍJ
K˜\[™Ú[
JKÍJ
K˜\[™Ú[
ÊKÊ‹˜[Ø^\ÊKÊ‹œ™\Ý[™ÊK

OOžØÛÛœÝXJÏOžØÛÛœÝÏ]Ë˜Ý\œ™[×ßÝ

KÍJ
Kœ™[[Ý™PÚ[
ÊKË˜Ý\œ™[[[Kœ™[[Ý™HŠNØŠŠKŠJ__KÝËË‹˜[Ø^\Ë‹œ™\Ý[™ËWJNØÛÛœÝÏ][Š

OOœÊ‹™˜YÙÚ[™ÊKÜË‹™˜YÙÚ[™×JKO][ŠOOžÚYŠOOOH‘“ÔŠ^ÜÊ‹™›Ü[š[X][™ÊNÜ™]\›Ÿ\Ê‹\Ù\Ø[˜Ù[
_KÜË‹™›Ü[š[X][™Ë‹\Ù\Ø[˜Ù[JK][Š

OOžÚK˜Ý\œ™[	‰œÊ‹œ™\Ý[™Ê_KÜË‹œ™\Ý[™×JNÜ™]\›ˆœŠ

OOŠÙ˜YÙÚ[™Î˜Ë›Ü[™ÎK™\Ý[™Î™ŸJKØËK—J_XJœÝ\ÙTÝ[SX\œÚ[ŠNÙ[˜Ý[ÛˆYJK
^Ü™]\›ˆ\œ˜^K™œ›ÛJKœ]Y\žTÙ[XÝÜ[

J_XJYKœ]Y\žTÙ[XÝÜ[ŠNÝ˜\ˆ^YOXJOO™I‰™K›ÝÛ™\‘ØÝ[Y[	‰™K›ÝÛ™\‘ØÝ[Y[™Y˜][šY]ÏÙK›ÝÛ™\‘ØÝ[Y[™Y˜][šY]ÎÚ[™ÝË™Ù]Ú[™ÝÑœ›ÛQ[ŠNÙ[˜Ý[Ûˆ“ÊJ^Ü™]\›ˆH[œÝ[˜Ù[Ùˆ^YJJK’S[[Y[XJ“Ëš\Ò[[[Y[ŠNÙ[˜Ý[ÛˆÝ
K
^ØÛÛœÝXÉÖ˜ÛÛ^YOH‰Ù_H—X\YJØÝ[Y[ŠNÚYŠ\‹›[™Ý
\™]\›ˆ[ØÛÛœÝO\‹™š[™
ÏOœË™Ù]]šX]J™˜YÙØX›RY
OOO]
NÜ™]\›ˆZ_V“ÊJOÛ[š_XJÝ™š[™˜YÒ[™HŠNÙ[˜Ý[ÛˆÜÝ
J^ØÛÛœÝ^\ÙT™YŠßJK^\ÙT™YŠ[
K^\ÙT™YŠ[
KO^\ÙT™YŠLJKÏ][ŠJ[˜Ý[ÛŠËŠ^ØÛÛœÝÏ^ÚY™Ë›ØÝ\Î˜ŸNÜ™]\›ˆ˜Ý\œ™[Ù×O]ËJ[˜Ý[ÛŠ
^ØÛÛœÝO]˜Ý\œ™[ÑVÙ×HOO]É‰™[]HVÙ×_K[œ™YÚ\Ý\ˆŠ_Kœ™YÚ\Ý\ŒˆŠK×JKÏ][ŠJ[˜Ý[ÛŠÊ^ØÛÛœÝ^Ý
KÊNØ‰‰˜ˆOOYØÝ[Y[˜XÝ]™Q[[Y[	‰˜‹™›ØÝ\Ê
_KžQÚ]™Q›ØÝ\ÌˆŠKÙWJKÏ][ŠJ[˜Ý[ÛŠËŠ^Û‹˜Ý\œ™[OOYÉ‰Š‹˜Ý\œ™[XŠ_KžTÚY™XÛÜ™ˆŠK×JKO][ŠJ[˜Ý[ÛŠ
^Ü‹˜Ý\œ™[K˜Ý\œ™[	‰Š‹˜Ý\œ™[\™\]Y\Ý[š[X][Û‘œ˜[YJ

OOžÜ‹˜Ý\œ™[[[ØÛÛœÝÏ[‹˜Ý\œ™[ÙÉ‰›ÊÊ_JJ_KžT™\ÝÜ™Q›ØÝ\Ô™XÛÜ™YˆŠKÛ×JK][ŠJ[˜Ý[ÛŠÊ^Û‹˜Ý\œ™[[[ØÛÛœÝYØÝ[Y[˜XÝ]™Q[[Y[Ø‰‰˜‹™Ù]]šX]J™˜YÙØX›RY
OOOYÉ‰Š‹˜Ý\œ™[YÊ_KžT™XÛÜ™›ØÝ\ÌˆŠK×JNÜ™]\›ˆ›


OOŠK˜Ý\œ™[HLJ[˜Ý[ÛŠ
^ÚK˜Ý\œ™[HLNØÛÛœÝÏ\‹˜Ý\œ™[ÙÉ‰˜Ø[˜Ù[[š[X][Û‘œ˜[YJÊ_K˜ÛX\‘œ˜[YSÛ•[›[Ý[ŠJK×JKœŠ

OOŠÜ™YÚ\Ý\ŽœËžT™XÛÜ™›ØÝ\Î™‹žT™\ÝÜ™Q›ØÝ\Ô™XÛÜ™YKžTÚY™XÛÜ™˜ßJKÜË‹K×J_XJÜÝ\ÙQ›ØÝ\ÓX\œÚ[ŠNÙ[˜Ý[ÛˆÜÝ

^ØÛÛœÝO^Ù˜YÙØX›\ÎžßK›ÜX›\Îžß_KV×NÙ[˜Ý[ÛˆŠJ^Ü™]\›ˆœ\Ú
JKJ[˜Ý[ÛŠ
^ØÛÛœÝ]š[™^ÙŠJNØˆOOKLI‰œÜXÙJ‹J_K[œÝXœØÜšX™HŠ_XJ‹œÝXœØÜšX™HŠNÙ[˜Ý[ÛˆŠJ^Ý›[™Ý	‰™›Ü‘XXÚ
ÏO™ÊJJ_XJ‹››ÝYžHŠNÙ[˜Ý[ÛˆJJ^Ü™]\›ˆK™˜YÙØX›\ÖÛW_[XJK™š[™˜YÙØX›PžRYŠNÙ[˜Ý[ÛˆÊJ^ØÛÛœÝÏZJJNÜ™]\›ˆßÝ

KßXJË™Ù]˜YÙØX›PžRYŠNØÛÛœÝÏ^Ü™YÚ\Ý\Ž˜JOOžÙK™˜YÙØX›\ÖÛK™\ØÜš\Ü‹šYO[KŠÝ\NˆQUSÓˆ‹˜[YN›_J_Kœ™YÚ\Ý\ˆŠK\]N˜J
KÊOOžØÛÛœÝYK™˜YÙØX›\ÖÙË™\ØÜš\Ü‹šYNØ‰‰˜‹[š\]YRYOO[K[š\]YRY	‰Š[]HK™˜YÙØX›\ÖÙË™\ØÜš\Ü‹šYKK™˜YÙØX›\ÖÛK™\ØÜš\Ü‹šYO[J_K\]HŠK[œ™YÚ\Ý\Ž˜JOOžØÛÛœÝÏ[K™\ØÜš\Ü‹šYZJÊNØ‰‰›K[š\]YRYOOX‹[š\]YRY	‰Š[]HK™˜YÙØX›\ÖÙ×KK™›ÜX›\ÖÛK™\ØÜš\Ü‹™›ÜX›RYI‰œŠÝ\Nˆ”‘SSÕS‹˜[YN›_JJ_K[œ™YÚ\Ý\ˆŠKÙ]žRYœËš[™žRYšK^\ÝÎ˜JOOˆHZJJK™^\ÝÈŠKÙ][žU\N˜JOO“Øš™XÝ˜[Y\ÊK™˜YÙØX›\ÊK™š[\ŠÏO™Ë™\ØÜš\Ü‹\OOO[JK™Ù][žU\HŠ_NÙ[˜Ý[ÛˆÊJ^Ü™]\›ˆK™›ÜX›\ÖÛW_[XJË™š[™›ÜX›PžRYŠNÙ[˜Ý[ÛˆJJ^ØÛÛœÝÏXÊJNÜ™]\›ˆßÝ

KßXJK™Ù]›ÜX›PžRYŠNØÛÛœÝ^Ü™YÚ\Ý\Ž˜JOOžÙK™›ÜX›\ÖÛK™\ØÜš\Ü‹šYO[_Kœ™YÚ\Ý\ˆŠK[œ™YÚ\Ý\Ž˜JOOžØÛÛœÝÏXÊK™\ØÜš\Ü‹šY
NÙÉ‰›K[š\]YRYOOYË[š\]YRY	‰™[]HK™›ÜX›\ÖÛK™\ØÜš\Ü‹šY_K[œ™YÚ\Ý\ˆŠKÙ]žRYKš[™žRY˜Ë^\ÝÎ˜JOOˆHXÊJK™^\ÝÈŠKÙ][žU\N˜JOO“Øš™XÝ˜[Y\ÊK™›ÜX›\ÊK™š[\ŠÏO™Ë™\ØÜš\Ü‹\OOO[JK™Ù][žU\HŠ_NÙ[˜Ý[Ûˆ

^ÙK™˜YÙØX›\Ï^ßKK™›ÜX›\Ï^ßK›[™ÝL\™]\›ˆJ˜ÛX[ŒˆŠKÙ˜YÙØX›N›Ë›ÜX›N™‹ÝXœØÜšX™N›‹ÛX[Žš_XJÜÝ˜Ü™X]T™YÚ\ÝžHŠNÙ[˜Ý[Ûˆ\Ý

^ØÛÛœÝOYœŠÜÝ×JNÜ™]\›ˆ\ÙQY™™XÝ


OO˜J[˜Ý[ÛŠ
^ÙK˜ÛX[Š
_K[›[Ý[ŠKÙWJK_XJ\Ý\ÙT™YÚ\ÝžHŠNÝ˜\ˆ^[YK˜Ü™X]PÛÛ^
[
KXJ

OOžØÛÛœÝOYØÝ[Y[˜›ÙNÜ™]\›ˆ_Ý

K_K™Ù]›ÙQ[[Y[ŠNØÛÛœÝÜÝ^ÜÜÚ][ÛŽˆ˜XœÛÛ]H‹ÚYˆŒ\‹ZYÚˆŒ\‹X\™Ú[Žˆ‹L\‹›Ü™\ŽˆŒ‹Y[™ÎˆŒ‹Ý™\™›ÝÎˆšY[ˆ‹Û\ˆœ™XÝ

H‹˜Û\\]Žˆš[œÙ]
L	JHŸKÜÝXJOO˜™™X[››Ý[˜Ù[Y[IÙ_X™Ù]YŠNÙ[˜Ý[ÛˆœÝ
J^ØÛÛœÝYœŠ

OOÜÝ
JKÙWJK^\ÙT™YŠ[
NÜ™]\›ˆ\ÙQY™™XÝ
J[˜Ý[ÛŠ
^ØÛÛœÝÏYØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÜ™]\›ˆ‹˜Ý\œ™[\ËËšY]ËœÙ]]šX]J˜\šXK[]™H‹˜\ÜÙ\]™HŠKËœÙ]]šX]J˜\šXKX]ÛZXÈ‹YHŠKÌŠËœÝ[KÜÝ
KŠ
K˜\[™Ú[
ÊKJ[˜Ý[ÛŠ
^ÜÙ][Y[Ý]
J[˜Ý[ÛŠ
^ØÛÛœÝOQŠ
NÝK˜ÛÛZ[œÊÊI‰Kœ™[[Ý™PÚ[
ÊKÏOO[‹˜Ý\œ™[	‰Š‹˜Ý\œ™[[[
_Kœ™[[Ý™HŠJ_K˜ÛX[\Š_KœÙ]\ŠKÝJK[ŠOOžØÛÛœÝÏ[‹˜Ý\œ™[ÚYŠÊ^ÜË^ÛÛ[ZNÜ™]\›Ÿ_K×J_XJœÝ\ÙP[››Ý[˜Ù\ˆŠNØÛÛœÝ\Ý^ÜÙ\\˜]ÜŽˆŽŽˆŸNÙ[˜Ý[ÛˆŠKP\Ý
^ØÛÛœÝ[YK\ÙRY

NÜ™]\›ˆœŠ

OO˜	Ù_IÝœÙ\\˜]ÜŸIÛŸXÝœÙ\\˜]Ü‹K—J_XJ‹\ÙU[š\]YRYŠNÙ[˜Ý[ÛˆœÝ
ØÛÛ^Y™K[š\]YRYJ^Ü™]\›˜™™ZY[‹]^IÙ_KIÝXXJœÝ™Ù][[Y[YŠNÙ[˜Ý[ÛˆÝ
ØÛÛ^Y™K^J^ØÛÛœÝRŠšY[‹]^‹ÜÙ\\˜]ÜŽˆ‹HŸJKYœŠ

OO”œÝ
ØÛÛ^Y™K[š\]YRY›ŸJKÛ‹WJNÜ™]\›ˆ\ÙQY™™XÝ
J[˜Ý[ÛŠ
^ØÛÛœÝÏYØÝ[Y[˜Ü™X]Q[[Y[
™]ˆŠNÜ™]\›ˆËšY\‹Ë^ÛÛ[]ËœÝ[K™\Ü^OH››Û™H‹Š
K˜\[™Ú[
ÊKJ[˜Ý[ÛŠ
^ØÛÛœÝÏQŠ
NØË˜ÛÛZ[œÊÊI‰˜Ëœ™[[Ý™PÚ[
Ê_K[›[Ý[Š_K›[Ý[ŠKÜ‹JKŸXJÝ\ÙRY[•^[[Y[ŠNÝ˜\ˆQ[YK˜Ü™X]PÛÛ^
[
NÙ[˜Ý[ÛˆÞYJJ^ØÛÛœÝ^\ÙT™YŠJNÜ™]\›ˆ\ÙQY™™XÝ


OOžÝ˜Ý\œ™[Y_JKXJÞYK\ÙT™]š[Ý\ÈŠNÙ[˜Ý[ÛˆÜÝ

^Û]O[[Ù[˜Ý[Ûˆ

^Ü™]\›ˆHY_XJš\ÐÛZ[YYŠNÙ[˜Ý[ÛˆŠÊ^Ü™]\›ˆÏOOY_XJ‹š\ÐXÝ]™LˆŠNÙ[˜Ý[ÛˆŠÊ^ÙI‰šÝ

NØÛÛœÝÏ^ØX˜[™ÛŽ›ßNÜ™]\›ˆOXËßXJ‹˜ÛZ[HŠNÙ[˜Ý[ÛˆJ
^Ù_Ý

KO[[XJKœ™[X\ÙHŠNÙ[˜Ý[ÛˆÊ
^ÙI‰ŠK˜X˜[™ÛŠ
KJ
J_\™]\›ˆJËžPX˜[™ÛˆŠKÚ\ÐÛZ[YY\ÐXÝ]™N›‹ÛZ[Nœ‹™[X\ÙNšKžPX˜[™ÛŽœß_XJÜÝ˜Ü™X]HŠNÙ[˜Ý[ÛˆÊJ^Ü™]\›ˆKœ\ÙOOOH’QHŸKœ\ÙOOOH‘“ÔÐS’SPUS‘ÈÈLN™Kš\Ñ˜YÙÚ[™ßXJËš\Ñ˜YÙÚ[™ÈŠNØÛÛœÝœÝNKÜÝLLËžLËžYOLÌ‹ÝLÌË\ÝLÍÝLÍK\ÝLÍ‹ÝLÍËœÝLÎ	ÝLÎK\ÝMœÝ^ÖÓÜÝNˆLÓœÝNˆLNÝ˜\ˆ^YOXJOOžÐœÝÙKšÙ^PÛÙWI‰™Kœ™]™[Y˜][

_Kœ™]™[Ý[™\™Ù^Q]™[ÈŠNØÛÛœÝJ

OOžØÛÛœÝOHš\ÚXš[]XÚ[™ÙHŽÜ™]\›ˆ\[ÙˆØÝ[Y[ˆHÙN–ÙK\ÉÙ_XÙXšÚ]	Ù_X[Þ‰Ù_XÉÙ_XK™š[™
O˜Û‰ÜŸX[ˆØÝ[Y[
__JJ
KžYOL™OMNÙ[˜Ý[ÛˆœÝ
K
^Ü™]\›ˆX]˜XœÊžYKž
O[™_X]˜XœÊžKYKžJO[™_XJœÝš\ÔÛÜPÛXÚÕ™\ÚÛ^ÙYYYŠNØÛÛœÝÛ™O^Ý\Nˆ’QHŸNÙ[˜Ý[Ûˆ\Ý
ØØ[˜Ù[™KÛÛ\]YÙ]\ÙN›‹Ù]\ÙNœŸJ^Ü™]\›–ÞÙ]™[˜[YNˆ›[Ý\Ù[[Ý™H‹›Ž˜JOOžØÛÛœÝØ]ÛŽœËÛY[›ËÛY[N˜ßOZNÚYŠÈOOXžYJ\™]\›ŽØÛÛœÝO^Þ›ËN˜ßK[Š
NÚYŠ‹\OOOH‘QÑÒS‘ÈŠ^ÚKœ™]™[Y˜][

K‹˜XÝ[ÛœË›[Ý™JJNÜ™]\›ŸY‹\HOOH”S‘S‘È‰‰šÝ

NØÛÛœÝY‹œÚ[ÚYŠ^œÝ
JJ\™]\›ŽÚKœ™]™[Y˜][

NØÛÛœÝOY‹˜XÝ[ÛœË™›ZYY
JNÜŠÝ\Nˆ‘QÑÒS‘È‹XÝ[ÛœÎ›_J_K™›ˆŠ_KÙ]™[˜[YNˆ›[Ý\Ù]\‹›Ž˜JOOžØÛÛœÝÏ[Š
NÚYŠË\HOOH‘QÑÒS‘ÈŠ^ÙJ
NÜ™]\›ŸZKœ™]™[Y˜][

KË˜XÝ[ÛœË™›Ü
ÜÚÝ[›ØÚÓ™^ÛXÚÎˆLJK

_K™›ˆŠ_KÙ]™[˜[YNˆ›[Ý\ÙYÝÛˆ‹›Ž˜JOOžÛŠ
K\OOOH‘QÑÒS‘È‰‰šKœ™]™[Y˜][

KJ
_K™›ˆŠ_KÙ]™[˜[YNˆšÙ^YÝÛˆ‹›Ž˜JOOžÚYŠŠ
K\OOOH”S‘S‘ÈŠ^ÙJ
NÜ™]\›ŸZYŠKšÙ^PÛÙOOOUžŠ^ÚKœ™]™[Y˜][

KJ
NÜ™]\›Ÿ^^YJJ_K™›ˆŠ_KÙ]™[˜[YNˆœ™\Ú^™H‹›Ž™_KÙ]™[˜[YNˆœØÜ›Û‹Ü[ÛœÎžÜ\ÜÚ]™NˆLØ\\™NˆL_K›Ž˜J

OOžÛŠ
K\OOOH”S‘S‘È‰‰™J
_K™›ˆŠ_KÙ]™[˜[YNˆÙXšÚ][Ý\ÙY›Ü˜ÙYÝÛˆ‹›Ž˜JOOžØÛÛœÝÏ[Š
NÚYŠË\OOOH’QH‰‰šÝ

KË˜XÝ[ÛœËœÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÊ
J^ÙJ
NÜ™]\›ŸZKœ™]™[Y˜][

_K™›ˆŠ_KÙ]™[˜[YN›Ž™_W_XJ\Ý™Ù]Ø\\™Pš[™[™ÜÈŠNÙ[˜Ý[ÛˆÝ
J^ØÛÛœÝ^\ÙT™YŠÛ™JK^\ÙT™YŠÜ
KYœŠ

OOŠÙ]™[˜[YNˆ›[Ý\ÙYÝÛˆ‹›Ž˜J[˜Ý[ÛŠJ^ÚYŠK™Y˜][™]™[YK˜]ÛˆOOXžY_K˜Ý›Ù^_K›Y]RÙ^_KœÚYÙ^_K˜[Ù^J\™]\›ŽØÛÛœÝÏYK™š[™ÛÜÙ\Ý˜YÙØX›RY
JNÚYŠYÊ\™]\›ŽØÛÛœÝYKžQÙ]ØÚÊËËÜÛÝ\˜ÙQ]™[›_JNÚYŠXŠ\™]\›ŽÛKœ™]™[Y˜][

NØÛÛœÝÏ^Þ›K˜ÛY[N›K˜ÛY[_NÛ‹˜Ý\œ™[

KŠ‹Ê_K›Û“[Ý\ÙQÝÛˆŠ_JKÙWJKOYœŠ

OOŠÙ]™[˜[YNˆÙXšÚ][Ý\ÙY›Ü˜Ù]Ú[™YÚ[ˆ‹›Ž˜JOžÚYŠ™Y˜][™]™[Y
\™]\›ŽØÛÛœÝOYK™š[™ÛÜÙ\Ý˜YÙØX›RY

NÚYŠ[J\™]\›ŽØÛÛœÝÏYK™š[™Ü[ÛœÑ›Ü‘˜YÙØX›JJNÙÉ‰ŠËœÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜßK˜Ø[‘Ù]ØÚÊJI‰šœ™]™[Y˜][

J_K™›ˆŠ_JKÙWJKÏ][ŠJ[˜Ý[ÛŠ
^ØÛÛœÝO^Ü\ÜÚ]™NˆLKØ\\™NˆLNÛ‹˜Ý\œ™[T
Ú[™ÝËÚK—KJ_K›\Ý[‘›ÜØ\\™LˆŠKÚK—JKÏ][Š

OOžÝ˜Ý\œ™[\HOOH’QH‰‰Š˜Ý\œ™[XÛ™K‹˜Ý\œ™[

KÊ
J_KÜ×JKÏ][Š

OOžØÛÛœÝ]˜Ý\œ™[ÛÊ
K\OOOH‘QÑÒS‘È‰‰š˜XÝ[ÛœË˜Ø[˜Ù[
ÜÚÝ[›ØÚÓ™^ÛXÚÎˆLJK\OOOH”S‘S‘È‰‰š˜XÝ[ÛœË˜X›Ü

_KÛ×JKO][ŠJ[˜Ý[ÛŠ
^ØÛÛœÝO^ØØ\\™NˆL\ÜÚ]™NˆL_KÏ\\Ý
ØØ[˜Ù[˜ËÛÛ\]Y›ËÙ]\ÙN˜J

OO˜Ý\œ™[™Ù]\ÙHŠKÙ]\ÙN˜JOžÝ˜Ý\œ™[XŸKœÙ]\ÙHŠ_JNÛ‹˜Ý\œ™[T
Ú[™ÝËËJ_K˜š[™Ø\\š[™Ñ]™[ÌˆŠKØË×JK][ŠJ[˜Ý[ÛŠKÊ^Ý˜Ý\œ™[\HOOH’QH‰‰šÝ

K˜Ý\œ™[^Ý\Nˆ”S‘S‘È‹Ú[™ËXÝ[ÛœÎ›_KJ
_KœÝ\[™[™Ñ˜YÌˆŠKÝWJNÜ›
J[˜Ý[ÛŠ
^Ü™]\›ˆÊ
KJ[˜Ý[ÛŠ
^Û‹˜Ý\œ™[

_K[›[Ý[Š_K›[Ý[ŠKÜ×J_XJÝ\ÙS[Ý\ÙTÙ[œÛÜˆŠNÙ[˜Ý[ÛˆœÝ

^ßXJœÝ››ÛÜ	HŠNØÛÛœÝÜÝ^ÖÒ\ÝNˆLÑÝNˆLÓ\ÝNˆLÔÝNˆLNÙ[˜Ý[ÛˆÜÝ
K
^Ù[˜Ý[ÛˆŠ
^Ý

KK˜Ø[˜Ù[

_XJ‹˜Ø[˜Ù[ŠNÙ[˜Ý[ÛˆŠ
^Ý

KK™›Ü

_\™]\›ˆJ‹™›ÜˆŠKÞÙ]™[˜[YNˆšÙ^YÝÛˆ‹›Ž˜JOOžÚYŠKšÙ^PÛÙOOOUžŠ^ÚKœ™]™[Y˜][

KŠ
NÜ™]\›ŸZYŠKšÙ^PÛÙOOO]žYJ^ÚKœ™]™[Y˜][

KŠ
NÜ™]\›ŸZYŠKšÙ^PÛÙOOOU\Ý
^ÚKœ™]™[Y˜][

KK›[Ý™QÝÛŠ
NÜ™]\›ŸZYŠKšÙ^PÛÙOOOQœÝ
^ÚKœ™]™[Y˜][

KK›[Ý™U\

NÜ™]\›ŸZYŠKšÙ^PÛÙOOOIÝ
^ÚKœ™]™[Y˜][

KK›[Ý™TšYÚ

NÜ™]\›ŸZYŠKšÙ^PÛÙOOOSÝ
^ÚKœ™]™[Y˜][

KK›[Ý™SY

NÜ™]\›ŸZYŠÜÝÚKšÙ^PÛÙWJ^ÚKœ™]™[Y˜][

NÜ™]\›Ÿ^^YJJ_K™›ˆŠ_KÙ]™[˜[YNˆ›[Ý\ÙYÝÛˆ‹›Ž›ŸKÙ]™[˜[YNˆ›[Ý\Ù]\‹›Ž›ŸKÙ]™[˜[YNˆ˜ÛXÚÈ‹›Ž›ŸKÙ]™[˜[YNˆÝXÚÝ\‹›Ž›ŸKÙ]™[˜[YNˆœ™\Ú^™H‹›Ž›ŸKÙ]™[˜[YNˆÚY[‹›Ž›‹Ü[ÛœÎžÜ\ÜÚ]™NˆL_KÙ]™[˜[YN›Ž›ŸW_XJÜÝ™Ù]˜YÙÚ[™Ðš[™[™ÜÈŠNÙ[˜Ý[Ûˆ\Ý
J^ØÛÛœÝ^\ÙT™YŠœÝ
KYœŠ

OOŠÙ]™[˜[YNˆšÙ^YÝÛˆ‹›Ž˜J[˜Ý[ÛŠÊ^ÚYŠË™Y˜][™]™[YËšÙ^PÛÙHOO]žYJ\™]\›ŽØÛÛœÝÏYK™š[™ÛÜÙ\Ý˜YÙØX›RY
ÊNÚYŠ[Ê\™]\›ŽØÛÛœÝÏYKžQÙ]ØÚÊËÜÛÝ\˜ÙQ]™[œßJNÚYŠXÊ\™]\›ŽÜËœ™]™[Y˜][

NÛ]OHLØÛÛœÝXËœÛ˜\Y

NÝ˜Ý\œ™[

NÙ[˜Ý[Ûˆ

^Ý_Ý

KOHLK˜Ý\œ™[

KŠ
_XJœÝÜŠK˜Ý\œ™[T
Ú[™ÝËÜÝ
‹
KØØ\\™NˆL\ÜÚ]™NˆL_J_K›Û’Ù^QÝÛˆŠ_JKÙWJK][ŠJ[˜Ý[ÛŠ
^ØÛÛœÝÏ^Ü\ÜÚ]™NˆLKØ\\™NˆLNÝ˜Ý\œ™[T
Ú[™ÝËÛ—KÊ_KžTÝ\Ø\\™HŠKÛ—JNÜ›
J[˜Ý[ÛŠ
^Ü™]\›ˆŠ
KJ[˜Ý[ÛŠ
^Ý˜Ý\œ™[

_K[›[Ý[Š_K›[Ý[ŠKÜ—J_XJ\Ý\ÙRÙ^X›Ø\™Ù[œÛÜˆŠNØÛÛœÝMO^Ý\Nˆ’QHŸKÜÝLLŒÝKŒMNÙ[˜Ý[Ûˆ\Ý
ØØ[˜Ù[™KÙ]\ÙNJ^Ü™]\›–ÞÙ]™[˜[YNˆ›ÜšY[][Û˜Ú[™ÙH‹›Ž™_KÙ]™[˜[YNˆœ™\Ú^™H‹›Ž™_KÙ]™[˜[YNˆ˜ÛÛ^Y[H‹›Ž˜JOžÛ‹œ™]™[Y˜][

_K™›ˆŠ_KÙ]™[˜[YNˆšÙ^YÝÛˆ‹›Ž˜JOžÚYŠ

K\HOOH‘QÑÒS‘ÈŠ^ÙJ
NÜ™]\›Ÿ[‹šÙ^PÛÙOOOUž‰‰›‹œ™]™[Y˜][

KJ
_K™›ˆŠ_KÙ]™[˜[YN›Ž™_W_XJ\Ý™Ù]Ú[™ÝÐš[™[™ÜÈŠNÙ[˜Ý[ÛˆœÝ
ØØ[˜Ù[™KÛÛ\]YÙ]\ÙN›ŸJ^Ü™]\›–ÞÙ]™[˜[YNˆÝXÚ[Ý™H‹Ü[ÛœÎžØØ\\™NˆL_K›Ž˜JOžØÛÛœÝO[Š
NÚYŠK\HOOH‘QÑÒS‘ÈŠ^ÙJ
NÜ™]\›ŸZKš\Ó[Ý™YHLØÛÛœÝØÛY[œËÛY[N›ßO\‹ÝXÚ\ÖÌKÏ^ÞœËN›ßNÜ‹œ™]™[Y˜][

KK˜XÝ[ÛœË›[Ý™JÊ_K™›ˆŠ_KÙ]™[˜[YNˆÝXÚ[™‹›Ž˜JOžØÛÛœÝO[Š
NÚYŠK\HOOH‘QÑÒS‘ÈŠ^ÙJ
NÜ™]\›Ÿ\‹œ™]™[Y˜][

KK˜XÝ[ÛœË™›Ü
ÜÚÝ[›ØÚÓ™^ÛXÚÎˆLJK

_K™›ˆŠ_KÙ]™[˜[YNˆÝXÚØ[˜Ù[‹›Ž˜JOžÚYŠŠ
K\HOOH‘QÑÒS‘ÈŠ^ÙJ
NÜ™]\›Ÿ\‹œ™]™[Y˜][

KJ
_K™›ˆŠ_KÙ]™[˜[YNˆÝXÚ›Ü˜ÙXÚ[™ÙH‹›Ž˜JOžØÛÛœÝO[Š
NÚK\OOOH’QH‰‰šÝ

NØÛÛœÝÏ\‹ÝXÚ\ÖÌNÚYŠ\ßJË™›Ü˜ÙOVÝ
J\™]\›ŽØÛÛœÝÏZK˜XÝ[ÛœËœÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÊ
NÚYŠK\OOOH”S‘S‘ÈŠ^ØÉ‰™J
NÜ™]\›ŸZYŠÊ^ÚYŠKš\Ó[Ý™Y
^Ü‹œ™]™[Y˜][

NÜ™]\›ŸYJ
NÜ™]\›Ÿ\‹œ™]™[Y˜][

_K™›ˆŠ_KÙ]™[˜[YN›Ž™_W_XJœÝ™Ù][™Pš[™[™ÜÈŠNÙ[˜Ý[ÛˆœÝ
J^ØÛÛœÝ^\ÙT™YŠMJK^\ÙT™YŠÜ
K][ŠJ[˜Ý[ÛŠ
^Ü™]\›ˆ˜Ý\œ™[K™Ù]\ÙLˆŠK×JKO][ŠJ[˜Ý[ÛŠŠ^Ý˜Ý\œ™[XŸKœÙ]\ÙLˆŠK×JKÏYœŠ

OOŠÙ]™[˜[YNˆÝXÚÝ\‹›Ž˜J[˜Ý[ÛŠŠ^ÚYŠ‹™Y˜][™]™[Y
\™]\›ŽØÛÛœÝÏYK™š[™ÛÜÙ\Ý˜YÙØX›RY
ŠNÚYŠ]Ê\™]\›ŽØÛÛœÝÏYKžQÙ]ØÚÊËËÜÛÝ\˜ÙQ]™[˜ŸJNÚYŠWÊ\™]\›ŽØÛÛœÝOX‹ÝXÚ\ÖÌKØÛY[”‹ÛY[NšŸOQKO^Þ”‹NšŸNÛ‹˜Ý\œ™[

KJËJ_K›Û•ÝXÚÝ\Š_JKÙWJKÏ][ŠJ[˜Ý[ÛŠ
^ØÛÛœÝ^ØØ\\™NˆL\ÜÚ]™NˆL_NÛ‹˜Ý\œ™[T
Ú[™ÝËÜ×KŠ_K›\Ý[‘›ÜØ\\™LˆŠKÜ×JKÏ][Š

OOžØÛÛœÝÏ]˜Ý\œ™[ÙË\HOOH’QH‰‰ŠË\OOOH”S‘S‘È‰‰˜ÛX\•[Y[Ý]
Ë›Û™Ô™\ÜÕ[Y\’Y
KJMJK‹˜Ý\œ™[

KÊ
J_KÛËWJKO][Š

OOžØÛÛœÝÏ]˜Ý\œ™[ØÊ
KË\OOOH‘QÑÒS‘È‰‰™Ë˜XÝ[ÛœË˜Ø[˜Ù[
ÜÚÝ[›ØÚÓ™^ÛXÚÎˆLJKË\OOOH”S‘S‘È‰‰™Ë˜XÝ[ÛœË˜X›Ü

_KØ×JK][ŠJ[˜Ý[ÛŠ
^ØÛÛœÝ^ØØ\\™NˆL\ÜÚ]™NˆL_KÏ^ØØ[˜Ù[KÛÛ\]Y˜ËÙ]\ÙNœŸKÏT
Ú[™ÝËœÝ
ÊKŠKOT
Ú[™ÝË\Ý
ÊKŠNÛ‹˜Ý\œ™[XJ[˜Ý[ÛŠ
^×Ê
KJ
_K[˜š[™[Š_K˜š[™Ø\\š[™Ñ]™[ÌˆŠKÝK‹×JK][ŠJ[˜Ý[ÛŠ
^ØÛÛœÝ\Š
NØ‹\HOOH”S‘S‘È‰‰šÝ

NØÛÛœÝÏX‹˜XÝ[ÛœË™›ZYY
‹œÚ[
NÚJÝ\Nˆ‘QÑÒS‘È‹XÝ[ÛœÎË\Ó[Ý™YˆL_J_KœÝ\˜YÙÚ[™ÌˆŠKÜ‹WJKO][ŠJ[˜Ý[ÛŠ‹Ê^ÜŠ
K\HOOH’QH‰‰šÝ

NØÛÛœÝÏ\Ù][Y[Ý]
ÜÝ
NÚJÝ\Nˆ”S‘S‘È‹Ú[ËXÝ[ÛœÎ˜‹Û™Ô™\ÜÕ[Y\’Y—ßJKŠ
_KœÝ\[™[™Ñ˜YÌˆŠKÙ‹‹KJNÜ›
J[˜Ý[ÛŠ
^Ü™]\›ˆÊ
KJ[˜Ý[ÛŠ
^Û‹˜Ý\œ™[

NØÛÛœÝÏ\Š
NÝË\OOOH”S‘S‘È‰‰ŠÛX\•[Y[Ý]
Ë›Û™Ô™\ÜÕ[Y\’Y
KJMJJ_K[›[Ý[Š_K›[Ý[ŠKÜ‹ËWJK›
J[˜Ý[ÛŠ
^Ü™]\›ˆ
Ú[™ÝËÞÙ]™[˜[YNˆÝXÚ[Ý™H‹›Ž˜J

OOžßK™›ˆŠKÜ[ÛœÎžØØ\\™NˆLK\ÜÚ]™NˆL__WJ_KÙXšÚ]XÚÈŠK×J_XJœÝ\ÙUÝXÚÙ[œÛÜˆŠNØÛÛœÝ[ÝVÈš[œ]‹˜]Ûˆ‹^\™XH‹œÙ[XÝ‹›Ü[Ûˆ‹›ÜÜ›Ý\‹šY[È‹˜]Y[È—NÙ[˜Ý[ÛˆYJK
^ÚYŠO[[
\™]\›ˆLNÚYŠ[Ýš[˜ÛY\ÊYÓ˜[YKÓÝÙ\Ø\ÙJ
JJ\™]\›ˆLØÛÛœÝ]™Ù]]šX]J˜ÛÛ[Y]X›HŠNÜ™]\›ˆOOHYHŸOOHˆÈLOOYOÈLNžYJKœ\™[[[Y[
_XJYKš\Ð[’[\˜XÝ]™Q[[Y[ŠNÙ[˜Ý[ÛˆÝ
K
^ØÛÛœÝ]\™Ù]Ü™]\›ˆ“ÊŠOÞYJKŠNˆL_XJÝš\Ñ]™[[’[\˜XÝ]™Q[[Y[ŠNÝ˜\ˆ›ÝXJOO”ÊK™Ù]›Ý[™[™ÐÛY[™XÝ

JK˜Ù[\‹™Ù]›Ü™\›ÞÙ[\”ÜÚ][ÛˆŠNÙ[˜Ý[Ûˆ›Ý
J^Ü™]\›ˆH[œÝ[˜Ù[Ùˆ^YJJK‘[[Y[XJ›Ýš\Ñ[[Y[ŠNØÛÛœÝ[ÝJ

OOžØÛÛœÝOH›X]Ú\ÈŽÜ™]\›ˆ\[ÙˆØÝ[Y[ˆHÙN–ÙK›\ÓX]Ú\ÔÙ[XÝÜˆ‹ÙXšÚ]X]Ú\ÔÙ[XÝÜˆ—K™š[™
Oœˆ[ˆ[[Y[œ›ÝÝ\J__JJ
NÙ[˜Ý[ÛˆÞYJK
^Ü™]\›ˆOO[[Û[™VØ[ÝJ
OÙNÞYJKœ\™[[[Y[
_XJÞYK˜ÛÜÙ\ÝÛžYš[ŠNÙ[˜Ý[Ûˆ[Ý
K
^Ü™]\›ˆK˜ÛÜÙ\ÝÙK˜ÛÜÙ\Ý

NÞYJK
_XJ[Ý˜ÛÜÙ\ÝŠNÙ[˜Ý[ÛˆÛÝ
J^Ü™]\›˜ÉÖ˜ÛÛ^YOH‰Ù_H—XXJÛÝ™Ù]Ù[XÝÜˆŠNÙ[˜Ý[ÛˆÛÝ
K
^ØÛÛœÝ]\™Ù]ÚYŠ\›Ý
ŠJ\™]\›ˆ[ØÛÛœÝ\ÛÝ
JKOZ[Ý
‹ŠNÜ™]\›ˆZ_V“ÊJOÛ[š_XJÛÝ™š[™ÛÜÙ\Ý˜YÒ[™Qœ›ÛQ]™[ŠNÙ[˜Ý[ÛˆÝ
K
^ØÛÛœÝ[ÛÝ
K
NÜ™]\›ˆÛ‹™Ù]]šX]J™˜YÙØX›RY
N›[XJÝžQÙ]ÛÜÙ\Ý˜YÙØX›RYœ›ÛQ]™[ŠNÙ[˜Ý[ÛˆÛÝ
K
^ØÛÛœÝXÉÒŽ˜ÛÛ^YOH‰Ù_H—XO\YJØÝ[Y[ŠK™š[™
ÏOœË™Ù]]šX]JŽšY
OOO]
NÜ™]\›ˆZ_V“ÊJOÛ[š_XJÛÝ™š[™˜YÙØX›HŠNÙ[˜Ý[Ûˆ[Ý
J^ÙKœ™]™[Y˜][

_XJ[Ýœ™]™[Y˜][ŠNÙ[˜Ý[ÛˆŠÙ^XÝY™K\ÙN\ÓØÚÐXÝ]™N›‹ÚÝ[Ø\›ŽœŸJ^Ü™]\›ˆJ[Š
_HOO]
_XJ‹š\ÐXÝ]™HŠNÙ[˜Ý[ÛˆÞYJÛØÚÐTN™KÝÜ™N™YÚ\ÝžN›‹˜YÙØX›RYœŸJ^ÚYŠKš\ÐÛZ[YY

J\™]\›ˆLNØÛÛœÝO[‹™˜YÙØX›K™š[™žRY
ŠNÜ™]\›ˆJZ_ZK›Ü[ÛœËš\Ñ[˜X›Y]^YJ™Ù]Ý]J
KŠJ_XJÞYK˜Ø[”Ý\ŠNÙ[˜Ý[ÛˆÝ
ÛØÚÐTN™KÛÛ^YÝÜ™N›‹™YÚ\ÝžNœ‹˜YÙØX›RYšK›Ü˜ÙTÙ[œÛÜ”ÝÜœËÛÝ\˜ÙQ]™[›ßJ^ÚYŠWÞYJÛØÚÐTN™KÝÜ™N›‹™YÚ\ÝžNœ‹˜YÙØX›RYš_JJ\™]\›ˆ[ØÛÛœÝO\‹™˜YÙØX›K™Ù]žRY
JKXÛÝ
K™\ØÜš\Ü‹šY
NÚYŠYŸÉ‰ˆ]K›Ü[ÛœË˜Ø[‘˜YÒ[\˜XÝ]™Q[[Y[É‰Ý
‹ÊJ\™]\›ˆ[ØÛÛœÝYK˜ÛZ[JßÜ
NÛ]OH”‘WÑQÈŽÙ[˜Ý[ÛˆÊ
^Ü™]\›ˆK›Ü[ÛœËœÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜßXJË™Ù]ÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÈŠNÙ[˜Ý[ÛˆŠ
^Ü™]\›ˆKš\ÐXÝ]™J
_XJ‹š\ÓØÚÐXÝ]™HŠNÙ[˜Ý[ÛˆÊÊ^ÔŠÙ^XÝY‘\ÙN›K\ÓØÚÐXÝ]™N˜‹ÚÝ[Ø\›ŽˆLJI‰›‹™\Ü]Ú
Ê
J_XJËžQ\Ü]ÚŠNØÛÛœÝÏ]Ë˜š[™
[‘QÑÒS‘ÈŠNÙ[˜Ý[ÛˆJ
^Ù[˜Ý[ÛˆÊ
^ÙKœ™[X\ÙJ
KOHÓÓTUQŸXJË˜ÛÛ\]YŠKHOOH”‘WÑQÈ‰‰ŠÊ
KÝ

JK‹™\Ü]Ú
Z]
›YXÝ[Û\™ÜÊJKOH‘QÑÒS‘ÈŽÙ[˜Ý[Ûˆ
ËO^ÜÚÝ[›ØÚÓ™^ÛXÚÎˆL_J^ÚYŠ˜ÛX[\

KKœÚÝ[›ØÚÓ™^ÛXÚÊ^ØÛÛœÝ	T
Ú[™ÝËÞÙ]™[˜[YNˆ˜ÛXÚÈ‹›Ž[ÝÜ[ÛœÎžÛÛ˜ÙNˆL\ÜÚ]™NˆLKØ\\™NˆL_WJNÜÙ][Y[Ý]
	
_SÊ
K‹™\Ü]Ú
žYJÜ™X\ÛÛŽšßJJ_\™]\›ˆJ™š[š\ÚˆŠKÚ\ÐXÝ]™N˜J

OO”ŠÙ^XÝYˆ‘QÑÒS‘È‹\ÙN›K\ÓØÚÐXÝ]™N˜‹ÚÝ[Ø\›ŽˆL_JKš\ÐXÝ]™HŠKÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎ™Ë›Ü˜JÏO”
‘“Ô‹ÊK™›ÜŠKØ[˜Ù[˜JÏO”
ÐSÑS‹ÊK˜Ø[˜Ù[ŠK‹‹‘˜XÝ[Ûœß_XJK›YˆŠNÙ[˜Ý[ÛˆŠ
^ØÛÛœÝÏQ”ÊÏOž×Ê

OOYJØÛY[šßJJ_JNÜ™]\›žË‹‹‘JÛYXÝ[Û\™ÜÎžÚYšKÛY[Ù[XÝ[ÛŽ‘[Ý™[Y[[ÙNˆ‘“RQŸKÛX[\˜J

OO“Ë˜Ø[˜Ù[

K˜ÛX[\ŠKXÝ[ÛœÎžÛ[Ý™N“ß_JK[Ý™N“ß_XJ‹™›ZYYŠNÙ[˜Ý[ÛˆŠ
^ØÛÛœÝ^Û[Ý™U\˜J

OO—Ê]
K›[Ý™U\ŠK[Ý™TšYÚ˜J

OO—ÊÚ]
K›[Ý™TšYÚŠK[Ý™QÝÛŽ˜J

OO—ÊZ]
K›[Ý™QÝÛˆŠK[Ý™SY˜J

OO—Êš]
K›[Ý™SYŠ_NÜ™]\›ˆJÛYXÝ[Û\™ÜÎžÚYšKÛY[Ù[XÝ[ÛŽ››Ý
ŠK[Ý™[Y[[ÙNˆ”ÓTŸKÛX[\œÜXÝ[ÛœÎ‘J_XJ‹œÛ˜\YŠNÙ[˜Ý[ÛˆJ
^ÔŠÙ^XÝYˆ”‘WÑQÈ‹\ÙN›K\ÓØÚÐXÝ]™N˜‹ÚÝ[Ø\›ŽˆLJI‰™Kœ™[X\ÙJ
_\™]\›ˆJK˜X›Ü™Q˜YÈŠKÚ\ÐXÝ]™N˜J

OO”ŠÙ^XÝYˆ”‘WÑQÈ‹\ÙN›K\ÓØÚÐXÝ]™N˜‹ÚÝ[Ø\›ŽˆL_JKš\ÐXÝ]™HŠKÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎ™Ë›ZYY”‹Û˜\Yš‹X›Ü__XJÝžTÝ\ŠNØÛÛœÝ›ÝVÒÝ\ÝœÝNÙ[˜Ý[ÛˆÝ
ØÛÛ^Y™KÝÜ™N™YÚ\ÝžN›‹Ý\ÝÛTÙ[œÛÜœÎœ‹[˜X›QY˜][Ù[œÛÜœÎš_J^ØÛÛœÝÏVË‹‹šOÙ›Ý–×K‹‹œŸ×WKÏ^\ÙTÝ]J

OOšÜÝ

JVÌKÏ][ŠJ[˜Ý[ÛŠKŠ^ÒÊJI‰ˆRÊŠI‰›ËžPX˜[™ÛŠ
_KžPX˜[™Û“ØÚÌˆŠKÛ×JNÜ›
J[˜Ý[ÛŠ
^Û]O]™Ù]Ý]J
NÜ™]\›ˆœÝXœØÜšX™J

OOžØÛÛœÝ]™Ù]Ý]J
NØÊKŠKOZŸJ_K›\Ý[•ÔÝÜ™HŠKÛË×JK›


OO›ËžPX˜[™Û‹ÛËžPX˜[™Û—JNØÛÛœÝO][ŠÏO—ÞYJÛØÚÐTN›Ë™YÚ\ÝžN›‹ÝÜ™N˜YÙØX›RY—ßJKÛË‹JK][Š
ËKŠOO™Ý
ÛØÚÐTN›Ë™YÚ\ÝžN›‹ÛÛ^Y™KÝÜ™N˜YÙØX›RY—Ë›Ü˜ÙTÙ[œÛÜ”ÝÜ‘_[ÛÝ\˜ÙQ]™[”‰‰”‹œÛÝ\˜ÙQ]™[Ô‹œÛÝ\˜ÙQ]™[›[JKÙKË‹JK][ŠÏO›Ý
KÊKÙWJKO][ŠÏOžØÛÛœÝO[‹™˜YÙØX›K™š[™žRY
ÊNÜ™]\›ˆOÑK›Ü[ÛœÎ›[KÛ‹™˜YÙØX›WJKÏ][ŠJ[˜Ý[ÛŠ
^ÛËš\ÐÛZ[YY

I‰ŠËžPX˜[™ÛŠ
K™Ù]Ý]J
Kœ\ÙHOOH’QH‰‰™\Ü]Ú
^Š
JJ_KžT™[X\ÙSØÚÌˆŠKÛËJK][Š

OO›Ëš\ÐÛZ[YY

KÛ×JKÏYœŠ

OOŠØØ[‘Ù]ØÚÎKžQÙ]ØÚÎ™‹š[™ÛÜÙ\Ý˜YÙØX›RYšš[™Ü[ÛœÑ›Ü‘˜YÙØX›N›KžT™[X\ÙSØÚÎ™Ë\ÓØÚÐÛZ[YY˜ŸJKÝK‹KË—JNÙ›ÜŠ]ÏL×ÏË›[™Ý×ÊÊÊ\Ö××JÊ_XJÝ\ÙTÙ[œÛÜ“X\œÚ[ŠNØÛÛœÝÝXJOOŠÛÛ™Y›Ü™PØ\\™N˜JOžØÛÛœÝXJ

OOžÙK›Û™Y›Ü™PØ\\™I‰™K›Û™Y›Ü™PØ\\™J
_K›Û™Y›Ü™PØ\\™PØ[˜XÚÈŠNÑÛ™›\ÚÞ[˜ÊŠ_K›Û™Y›Ü™PØ\\™HŠKÛ™Y›Ü™Q˜YÔÝ\™K›Û™Y›Ü™Q˜YÔÝ\Û‘˜YÔÝ\™K›Û‘˜YÔÝ\Û‘˜YÑ[™™K›Û‘˜YÑ[™Û‘˜YÕ\]N™K›Û‘˜YÕ\]_JK˜Ü™X]T™\ÜÛ™\œÈŠK[ÝXJOOŠË‹‹œTË‹‹™K˜]]ÔØÜ›Û\“Ü[ÛœË\˜][Û‘[\[š[™ÎžË‹‹œTË™\˜][Û‘[\[š[™Ë‹‹™K˜]]ÔØÜ›Û\“Ü[Ûœß_JK˜Ü™X]P]]ÔØÜ›Û\“Ü[ÛœÈŠNÙ[˜Ý[ÛˆQJJ^Ü™]\›ˆK˜Ý\œ™[Ý

KK˜Ý\œ™[XJQK™Ù]ÝÜ™HŠNÙ[˜Ý[ÛˆÛÝ
J^ØÛÛœÝØÛÛ^YÙ]Ø[˜XÚÜÎ›‹Ù[œÛÜœÎœ‹›Û˜ÙNšK˜YÒ[™U\ØYÙR[œÝXÝ[ÛœÎœßOYKÏ^\ÙT™YŠ[
KÏYÞYJJKO][Š

OOœÝ
Ë˜Ý\œ™[
KØ×JK][Š

OO›[Ý
Ë˜Ý\œ™[
KØ×JKZœÝ

KOUÝ
ØÛÛ^Y^œßJKÏXœÝ
JK][Š	OžÙQJÊK™\Ü]Ú
	
_K×JKÏYœŠ

OO”JÜX›\ÚÚ[Q˜YÙÚ[™Î›Ú]\]Q›ÜX›TØÜ›Û˜Ú]\]Q›ÜX›R\Ñ[˜X›YZ]\]Q›ÜX›R\ÐÛÛXš[™Q[˜X›Y™]ÛÛXÝ[Û”Ý\[™Î›]KŠKØ—JKÏQ\Ý

KOYœŠ

OO”Z]
ËÊK×Ë×JKYœŠ

OOœÝ
ÜØÜ›ÛÚ[™ÝÎ’š]ØÜ›Û›ÜX›N‘KœØÜ›Û›ÜX›KÙ]]]ÔØÜ›Û\“Ü[ÛœÎ™‹‹‹”JÛ[Ý™NY_KŠ_JKÑKœØÜ›Û›ÜX›K‹—JK]ÜÝ

KOYœŠ

OO‘Ú]
Ø[››Ý[˜ÙNš]]ÔØÜ›Û\Ž”‹[Y[œÚ[Û“X\œÚ[‘K›ØÝ\ÓX\œÚ[š‹Ù]™\ÜÛ™\œÎKÝ[SX\œÚ[™ßJKÚ‹K‹K×JNÛË˜Ý\œ™[PNØÛÛœÝ][Š

OOžØÛÛœÝ	YQJÊNÉ™Ù]Ý]J
Kœ\ÙHOOH’QH‰‰‰™\Ü]Ú
^Š
J_K×JK][Š

OOžØÛÛœÝ	YQJÊK™Ù]Ý]J
NÜ™]\›ˆ	œ\ÙOOOH‘“ÔÐS’SPUS‘ÈÈL‰œ\ÙOOOH’QHÈLN‰š\Ñ˜YÙÚ[™ßK×JKÏYœŠ

OOŠÚ\Ñ˜YÙÚ[™Î‘žPX›Ü•JKÑJNÛŠÊNØÛÛœÝ][Š	O^YJQJÊK™Ù]Ý]J
K	
K×JKÏ][Š

OO‘YÊQJÊK™Ù]Ý]J
JK×JKOYœŠ

OOŠÛX\œÚ[‘K›ØÝ\Îš‹ÛÛ^YØ[“Y”\Ó[Ý™[Y[[ÝÙYšË˜YÒ[™U\ØYÙR[œÝXÝ[ÛœÒY›K™YÚ\ÝžN—ßJKÝKK‹Ë×JNÜ™]\›ˆÝ
ØÛÛ^YÝÜ™NK™YÚ\ÝžN—ËÝ\ÝÛTÙ[œÛÜœÎœŸ[[˜X›QY˜][Ù[œÛÜœÎ™K™[˜X›QY˜][Ù[œÛÜœÈOOHL_JK\ÙQY™™XÝ


OO•ÕJKYK˜Ü™X]Q[[Y[
Q”›ÝšY\‹Ý˜[YN“_KYK˜Ü™X]Q[[Y[
œØÛÛ^œ^‹ÝÜ™N_KK˜Ú[™[ŠJ_XJÛÝ\ŠNÙ[˜Ý[Ûˆ›Ý

^Ü™]\›ˆYK\ÙRY

_XJ›Ý\ÙU[š\]YPÛÛ^YŠNÙ[˜Ý[Ûˆ[Ý
J^ØÛÛœÝ]›Ý

KYK™˜YÒ[™U\ØYÙR[œÝXÝ[Ûœß™˜YÒ[™U\ØYÙR[œÝXÝ[ÛœÎÜ™]\›ˆYK˜Ü™X]Q[[Y[
Î[O›YK˜Ü™X]Q[[Y[
ÛÝÛ›Û˜ÙN™K››Û˜ÙKÛÛ^YÙ]Ø[˜XÚÜÎœ‹˜YÒ[™U\ØYÙR[œÝXÝ[ÛœÎ›‹[˜X›QY˜][Ù[œÛÜœÎ™K™[˜X›QY˜][Ù[œÛÜœËÙ[œÛÜœÎ™KœÙ[œÛÜœËÛ™Y›Ü™PØ\\™N™K›Û™Y›Ü™PØ\\™KÛ™Y›Ü™Q˜YÔÝ\™K›Û™Y›Ü™Q˜YÔÝ\Û‘˜YÔÝ\™K›Û‘˜YÔÝ\Û‘˜YÕ\]N™K›Û‘˜YÕ\]KÛ‘˜YÑ[™™K›Û‘˜YÑ[™]]ÔØÜ›Û\“Ü[ÛœÎ™K˜]]ÔØÜ›Û\“Ü[ÛœßKK˜Ú[™[ŠJ_XJ[Ý‘˜YÑ›ÜÛÛ^ŠNØÛÛœÝ[™O^Ù˜YÙÚ[™ÎYLË›Ü[š[X][™ÎLK›ÝXJ
K
OOÑK™›Ü
™\˜][ÛŠN™OÑKœÛ˜\‘K™›ZY™Ù]˜YÙÚ[™Õ˜[œÚ][ÛˆŠKÝXJ
K
OOžÚYŠJ\™]\›ˆÞ”Ë›ÜXÚ]K™›Üž”Ë›ÜXÚ]K˜ÛÛXš[š[™ßK™Ù]˜YÙÚ[™ÓÜXÚ]HŠKÛÝXJOO™K™›Ü˜ÙTÚÝ[[š[X]HO[[ÙK™›Ü˜ÙTÚÝ[[š[X]N™K›[ÙOOOH”ÓT‹™Ù]ÚÝ[˜YÙÚ[™Ð[š[X]HŠNÙ[˜Ý[ÛˆÛÝ
J^ØÛÛœÝYK™[Y[œÚ[Û‹˜ÛY[ÛÙ™œÙ]œ‹ÛÛXš[™UÚ]šK›Ü[™ÎœßOYKÏHHZKÏ]ÛÝ
JKOHH\Ë]OÖ™›Ü
‹ÊN–›[Ý™UÊŠNÜ™]\›žÜÜÚ][ÛŽˆ™š^Y‹Ü›‹›X\™Ú[›ÞÜY›‹›X\™Ú[›Þ›Y›ÞÚ^š[™Îˆ˜›Ü™\‹X›Þ‹ÚY›‹˜›Ü™\›ÞÚYZYÚ›‹˜›Ü™\›ÞšZYÚ˜[œÚ][ÛŽ˜›Ý
ËÊK˜[œÙ›Ü›N™‹ÜXÚ]NžÝ
ËJK’[™^OÝ[™K™›Ü[š[X][™Î[™K™˜YÙÚ[™ËÚ[\‘]™[Îˆ››Û™HŸ_XJÛÝ™Ù]˜YÙÚ[™ÔÝ[HŠNÙ[˜Ý[Ûˆ[Ý
J^Ü™]\›žÝ˜[œÙ›Ü›N–›[Ý™UÊK›Ù™œÙ]
K˜[œÚ][ÛŽ™KœÚÝ[[š[X]Q\ÜXÙ[Y[Ý›ÚYˆ››Û™HŸ_XJ[Ý™Ù]ÙXÛÛ™\žTÝ[HŠNÙ[˜Ý[ÛˆÛÝ
J^Ü™]\›ˆK\OOOH‘QÑÒS‘È×ÛÝ
JN‘[Ý
J_XJÛÝ™Ù]Ý[IHŠNÙ[˜Ý[ÛˆÛÝ
KSJ^ØÛÛœÝ]Ú[™ÝË™Ù]ÛÛ\]YÝ[J
KO]™Ù]›Ý[™[™ÐÛY[™XÝ

KÏU™JKŠKÏUŠËŠKÏ^ØÛY[œËYÓ˜[YNYÓ˜[YKÓÝÙ\Ø\ÙJ
K\Ü^Nœ‹™\Ü^_KO^ÞœË›X\™Ú[›ÞÚYNœË›X\™Ú[›ÞšZYÚNÜ™]\›žÙ\ØÜš\ÜŽ™KXÙZÛ\Ž˜Ë\ÜXÙPžNKÛY[œËYÙN›ß_XJÛÝ™Ù][Y[œÚ[Û‰HŠNÙ[˜Ý[Ûˆ›Ý
J^ØÛÛœÝRŠ™˜YÙØX›HŠKÙ\ØÜš\ÜŽ›‹™YÚ\ÝžNœ‹Ù]˜YÙØX›T™YŽšKØ[‘˜YÒ[\˜XÝ]™Q[[Y[ÎœËÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎ›Ë\Ñ[˜X›Y˜ßOYKOYœŠ

OOŠØØ[‘˜YÒ[\˜XÝ]™Q[[Y[ÎœËÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎ›Ë\Ñ[˜X›Y˜ßJKÜËË×JK][ŠOžØÛÛœÝÏZJ
NÜ™]\›ˆßÝ

KÛÝ
‹ËŠ_KÛ‹WJKYœŠ

OOŠÝ[š\]YRY\ØÜš\ÜŽ›‹Ü[ÛœÎKÙ][Y[œÚ[ÛŽ™ŸJKÛ‹‹KJKO^\ÙT™YŠ
KÏ^\ÙT™YŠL
NÜ›


OOŠ‹™˜YÙØX›Kœ™YÚ\Ý\ŠK˜Ý\œ™[
K

OOœ‹™˜YÙØX›K[œ™YÚ\Ý\ŠK˜Ý\œ™[
JKÜ‹™˜YÙØX›WJK›


OOžÚYŠË˜Ý\œ™[
^ÙË˜Ý\œ™[HLNÜ™]\›ŸXÛÛœÝ[K˜Ý\œ™[ÛK˜Ý\œ™[Z‹™˜YÙØX›K\]JŠ_KÚ‹™˜YÙØX›WJ_XJ›Ý\ÙQ˜YÙØX›TX›\Ú\ˆŠNÝ˜\ˆÞ[YK˜Ü™X]PÛÛ^
[
NÙ[˜Ý[ÛˆLŠJ^ØÛÛœÝ^\ÙPÛÛ^
JNÜ™]\›ˆÝ

KXJL‹\ÙT™\]Z\™YÛÛ^ŠNÙ[˜Ý[Ûˆ[Ý
J^ÙKœ™]™[Y˜][

_XJ[Ýœ™]™[[Q™ŠNØÛÛœÝ›ÝXJOOžØÛÛœÝ^\ÙT™YŠ[
K][Š
Ï[[
OOžÝ˜Ý\œ™[SßK×JK][Š

OO˜Ý\œ™[×JKØÛÛ^YšK˜YÒ[™U\ØYÙR[œÝXÝ[ÛœÒYœË™YÚ\ÝžN›ßORLŠQ
KÝ\N˜Ë›ÜX›RY_ORLŠÞŠKYœŠ

OOŠÚY™K™˜YÙØX›RY[™^™Kš[™^\N˜Ë›ÜX›RY_JKÙK™˜YÙØX›RYKš[™^ËWJKØÚ[™[Žš˜YÙØX›RY›K\Ñ[˜X›Y™ËÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎ˜‹Ø[‘˜YÒ[\˜XÝ]™Q[[Y[ÎË\ÐÛÛ™N—ËX\Y‘K›Ü[š[X][Û‘š[š\ÚY”ŸOYNÚYŠWÊ^ØÛÛœÝÏYœŠ

OOŠÙ\ØÜš\ÜŽ™‹™YÚ\ÝžN›ËÙ]˜YÙØX›T™YŽœ‹Ø[‘˜YÒ[\˜XÝ]™Q[[Y[ÎËÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎ˜‹\Ñ[˜X›Y™ßJKÙ‹Ë‹Ë‹×JNÚ›Ý
Ê_XÛÛœÝYœŠ

OO™ÏÞÝX’[™^Œ›ÛNˆ˜]Ûˆ‹˜\šXKY\ØÜšX™YžHŽœË™]K\™™Y˜YËZ[™KY˜YÙØX›KZYŽ›K™]K\™™Y˜YËZ[™KXÛÛ^ZYŽšK˜YÙØX›NˆLKÛ‘˜YÔÝ\[ÝN›[ÚKËK×JKO][ŠÏOžÑK\OOOH‘QÑÒS‘È‰‰‘K™›Ü[™É‰“Ëœ›Ü\S˜[YOOOH˜[œÙ›Ü›H‰‰‘Û™›\ÚÞ[˜ÊŠ_KÔ‹WJKYœŠ

OOžØÛÛœÝÏTÛÝ
JKQK\OOOH‘QÑÒS‘È‰‰‘K™›Ü[™ÏÐN›ÚYÜ™]\›žÚ[›™\”™YŽ›‹˜YÙØX›T›ÜÎžÈ™]K\™™Y˜YÙØX›KXÛÛ^ZYŽšK™]K\™™Y˜YÙØX›KZYŽ›KÝ[N“ËÛ•˜[œÚ][Û‘[™”K˜YÒ[™T›ÜÎšŸ_KÚK‹KKK—JKYœŠ

OOŠÙ˜YÙØX›RY™‹šY\N™‹\KÛÝ\˜ÙNžÚ[™^™‹š[™^›ÜX›RY™‹™›ÜX›RY_JKÙ‹™›ÜX›RY‹šY‹š[™^‹\WJNÜ™]\›ˆYK˜Ü™X]Q[[Y[
YK‘œ˜YÛY[[
KœÛ˜\ÚÝ
J_K‘˜YÙØX›HŠNÝ˜\ˆ^YOXJ
K
OO™OOO]š\ÔÝšXÝ\]X[ŠKÞYOXJOOžØÛÛœÝØÛÛXš[™N\Ý[˜][ÛŽ›ŸOYNÜ™]\›ˆÛ‹™›ÜX›RYÝ™›ÜX›RY›[KÚ]\Ñ˜YÙÙYÝ™\‘œ›ÛT™\Ý[ŠNØÛÛœÝÝXJOO™K˜ÛÛXš[™OÙK˜ÛÛXš[™K™˜YÙØX›RY›[™Ù]ÛÛXš[™UÚ]œ›ÛT™\Ý[ŠKÛÝXJOO™K˜]	‰™K˜]\OOOHÓÓP’S‘HÙK˜]˜ÛÛXš[™K™˜YÙØX›RY›[™Ù]ÛÛXš[™UÚ]œ›ÛR[\XÝŠNÙ[˜Ý[Ûˆ›Ý

^ØÛÛœÝOSZJ
KÊOOŠÞšKNœßJJKSZJ
KËÏ[[Ï[[O[[
OOŠÚ\Ñ˜YÙÚ[™ÎˆL\ÐÛÛ™NœË\Ñ›Ü[š[X][™ÎˆH]K›Ü[š[X][ÛŽK[ÙNšK˜YÙÚ[™ÓÝ™\Ž›ËÛÛXš[™UÚ]˜ËÛÛXš[™U\™Ù]›ÜŽ›[JJKSZJ
KËËËO[[[[[[
OOŠÛX\YžÝ\Nˆ‘QÑÒS‘È‹›Ü[™Î›[˜YÙÚ[™ÓÝ™\ŽKÛÛXš[™UÚ]™‹[ÙNœËÙ™œÙ]šK[Y[œÚ[ÛŽ›Ë›Ü˜ÙTÚÝ[[š[X]NšÛ˜\ÚÝ
ËËK‹[
__JJNÜ™]\›ˆJ
KÊOOžÚYŠÊJJ^ÚYŠK˜Üš]XØ[™˜YÙØX›KšYOO\Ë™˜YÙØX›RY
\™]\›ˆ[ØÛÛœÝÏZK˜Ý\œ™[˜ÛY[›Ù™œÙ]ÏZK™[Y[œÚ[ÛœË™˜YÙØX›\ÖÜË™˜YÙØX›RYKO[›
Kš[\XÝ
KZÛÝ
Kš[\XÝ
KZK™›Ü˜ÙTÚÝ[[š[X]NÜ™]\›ˆŠJËžËžJKK›[Ý™[Y[[ÙKËËš\ÐÛÛ™KK‹
_ZYŠKœ\ÙOOOH‘“ÔÐS’SPUS‘ÈŠ^ØÛÛœÝÏZK˜ÛÛ\]YÚYŠËœ™\Ý[™˜YÙØX›RYOO\Ë™˜YÙØX›RY
\™]\›ˆ[ØÛÛœÝÏ\Ëš\ÐÛÛ™KOZK™[Y[œÚ[ÛœË™˜YÙØX›\ÖÜË™˜YÙØX›RYK[Ëœ™\Ý[Y‹›[ÙKOTÞYJŠKÏUÝ
ŠKÏ^Ù\˜][ÛŽšK™›Ü\˜][Û‹Ý\™N‘ž‹™›Ü[Ý™UÎšK›™]ÒÛYPÛY[Ù™œÙ]ÜXÚ]N™ÏÞ”Ë›ÜXÚ]K™›Ü›[ØØ[N™ÏÞ”ËœØØ[K™›Ü›[NÜ™]\›žÛX\YžÝ\Nˆ‘QÑÒS‘È‹Ù™œÙ]šK›™]ÒÛYPÛY[Ù™œÙ][Y[œÚ[ÛŽK›Ü[™ÎË˜YÙÚ[™ÓÝ™\Ž›KÛÛXš[™UÚ]™Ë[ÙNš›Ü˜ÙTÚÝ[[š[X]N›[Û˜\ÚÝ
ËKËÊ___\™]\›ˆ[KœÙ[XÝÜˆŠ_XJ›Ý™Ù]˜YÙØX›TÙ[XÝÜˆŠNÙ[˜Ý[ÛˆÞYJO[[
^Ü™]\›žÚ\Ñ˜YÙÚ[™ÎˆLK\Ñ›Ü[š[X][™ÎˆLK\ÐÛÛ™NˆLK›Ü[š[X][ÛŽ›[[ÙN›[˜YÙÚ[™ÓÝ™\Ž›[ÛÛXš[™U\™Ù]›ÜŽ™KÛÛXš[™UÚ]›[_XJÞYK™Ù]ÙXÛÛ™\žTÛ˜\ÚÝŠNØÛÛœÝÛÝ^ÛX\YžÝ\Nˆ”ÑPÓÓ‘T–H‹Ù™œÙ]“KÛÛXš[™U\™Ù]›ÜŽ›[ÚÝ[[š[X]Q\ÜXÙ[Y[ˆLÛ˜\ÚÝÞYJ[
__NÙ[˜Ý[ÛˆÝ

^ØÛÛœÝOSZJ
ËÊOOŠÞ›ËN˜ßJJKSZJÞYJKSZJ
ËÏ[[JOOŠÛX\YžÝ\Nˆ”ÑPÓÓ‘T–H‹Ù™œÙ]›ËÛÛXš[™U\™Ù]›ÜŽ˜ËÚÝ[[š[X]Q\ÜXÙ[Y[KÛ˜\ÚÝ
Ê__JJKXJÏO›ÏÛŠKËL
N›[™Ù]˜[˜XÚÈŠKOXJ
ËËKŠOOžØÛÛœÝ]K™\ÜXÙYš\ÚX›VÛ×KOHHJ‹š[•š\X[\Ý	‰™‹™Y™™XÝYÛ×JKÏVÊJKYÉ‰™Ë™˜YÙØX›RYOO[ÏØÎ›[ÚYŠZ
^ÚYŠ[J\™]\›ˆŠŠNÚYŠK™\ÜXÙYš[š\ÚX›VÛ×J\™]\›ˆ[ØÛÛœÝOP]Ê‹™\ÜXÙYžKœÚ[
KYJKžKžJNÜ™]\›ˆŠ‹‹L
_ZYŠJ\™]\›ˆŠŠNØÛÛœÝÏ]K™\ÜXÙYžKœÚ[ÏYJËžËžJNÜ™]\›ˆŠË‹œÚÝ[[š[X]J_K™Ù]›ÜÈŠNÜ™]\›ˆJ
ËÊOOžÚYŠÊÊJ\™]\›ˆË˜Üš]XØ[™˜YÙØX›KšYOOXË™˜YÙØX›RYÛ[šJË™˜YÙØX›RYË˜Üš]XØ[™˜YÙØX›KšYËš[\XÝË˜Y\Üš]XØ[
NÚYŠËœ\ÙOOOH‘“ÔÐS’SPUS‘ÈŠ^ØÛÛœÝO[Ë˜ÛÛ\]YÜ™]\›ˆKœ™\Ý[™˜YÙØX›RYOOXË™˜YÙØX›RYÛ[šJË™˜YÙØX›RYKœ™\Ý[™˜YÙØX›RYKš[\XÝK˜Y\Üš]XØ[
_\™]\›ˆ[KœÙ[XÝÜˆŠ_XJÝ™Ù]ÙXÛÛ™\žTÙ[XÝÜˆŠNØÛÛœÝ[ÝXJ

OOžØÛÛœÝOS›Ý

KQÝ

NÜ™]\›ˆJ
‹JOO™J‹J_
‹J_ÛÝœÙ[XÝÜˆŠ_K›XZÙSX\Ý]UÔ›ÜÉHŠKÝ^Ù›Ü[š[X][Û‘š[š\ÚYœžY_K[ÝT™J[ÝÝ[ØÛÛ^œ^‹\™TÝ]T›ÜÑ\]X[‘^Y_JJ›Ý
NÙ[˜Ý[ÛˆžYJJ^Ü™]\›ˆLŠÞŠKš\Õ\Ú[™ÐÛÛ™Q›ÜOOYK™˜YÙØX›RY	‰ˆYKš\ÐÛÛ™OÛ[›YK˜Ü™X]Q[[Y[
[ÝJ_XJžYK”š]˜]Q˜YÙØX›HŠNÙ[˜Ý[ÛˆÝ
J^ØÛÛœÝ]\[ÙˆKš\Ñ˜YÑ\ØX›YOH˜›ÛÛX[ˆÈYKš\Ñ˜YÑ\ØX›YˆLHHYK™\ØX›R[\˜XÝ]™Q[[Y[›ØÚÚ[™ËHHYKœÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎÜ™]\›ˆYK˜Ü™X]Q[[Y[
žYKÌŠßKKÚ\ÐÛÛ™NˆLK\Ñ[˜X›YØ[‘˜YÒ[\˜XÝ]™Q[[Y[Î›‹ÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎœŸJJ_XJÝ”X›XÑ˜YÙØX›HŠNØÛÛœÝ^YOXJOOO™OOO]š\Ñ\]X[ŠK›ÝP^YJœØÜ›ÛŠK	ÝP^YJ˜]]ÈŠK™OXJ
K
OO
K›Ý™\™›ÝÖ
_
K›Ý™\™›ÝÖJKš\ÑZ]\ˆŠK[ÝXJOOžØÛÛœÝ]Ú[™ÝË™Ù]ÛÛ\]YÝ[JJK^ÛÝ™\™›ÝÖ›Ý™\™›ÝÖÝ™\™›ÝÖN›Ý™\™›ÝÖ_NÜ™]\›ˆ™J‹›Ý
_™J‹	Ý
_Kš\Ñ[[Y[ØÜ›ÛX›HŠK›ÝXJ

OOˆLKš\Ð›ÙTØÜ›ÛX›HŠKžYOXJOO™OO[[Û[™OOOYØÝ[Y[˜›ÙOÐ›Ý

OÙN›[™OOOYØÝ[Y[™ØÝ[Y[[[Y[Û[•[Ý
JOÙN”žYJKœ\™[[[Y[
K™Ù]ÛÜÙ\ÝØÜ›ÛX›HŠNÝ˜\ˆŽXJOOŠÞ™KœØÜ›ÛYN™KœØÜ›ÛÜJK™Ù]ØÜ›ÛŠNØÛÛœÝYOXJOO™OÝÚ[™ÝË™Ù]ÛÛ\]YÝ[JJKœÜÚ][ÛOOH™š^YÈL•YJKœ\™[[[Y[
NˆLK™Ù]\Ñš^YŠNÝ˜\ˆ›ÝXJOOžØÛÛœÝTžYJJKUYJJNÜ™]\›žØÛÜÙ\ÝØÜ›ÛX›N\Ñš^YÛ”YÙN›Ÿ_K™Ù][ˆŠK[ÝXJ
Ù\ØÜš\ÜŽ™K\Ñ[˜X›Y\ÐÛÛXš[™Q[˜X›Y›‹\Ñš^YÛ”YÙNœ‹\™XÝ[ÛŽšKÛY[œËYÙN›ËÛÜÙ\Ý˜ßJOOžØÛÛœÝOJ

OOžÚYŠXÊ\™]\›ˆ[ØÛÛœÝÜØÜ›ÛÚ^™N™ËÛY[˜ŸOXËÏ[ÞYJÜØÜ›ÛZYÚ™ËœØÜ›ÛZYÚØÜ›ÛÚY™ËœØÜ›ÛÚYZYÚ˜‹œY[™Ð›ÞšZYÚÚY˜‹œY[™Ð›ÞÚYJNÜ™]\›žÜYÙSX\™Ú[›Þ˜ËœYÙK›X\™Ú[›Þœ˜[YPÛY[˜‹ØÜ›ÛÚ^™N™ËÚÝ[Û\ÝXš™XÝ˜ËœÚÝ[Û\ÝXš™XÝØÜ›ÛžÚ[š]X[˜ËœØÜ›ÛÝ\œ™[˜ËœØÜ›ÛX^ËY™ŽžÝ˜[YN“K\ÜXÙ[Y[“____JJ
KZOOOH™\XØ[ÓžŽ•]™KVL
ÜYÙN›ËÚ]XÙZÛ\Ž›[^\Î™‹œ˜[YN_JNÜ™]\›žÙ\ØÜš\ÜŽ™K\ÐÛÛXš[™Q[˜X›Y›‹\Ñš^YÛ”YÙNœ‹^\Î™‹\Ñ[˜X›YÛY[œËYÙN›Ëœ˜[YNKÝXš™XÝš_K™Ù]›ÜX›Q[Y[œÚ[ÛˆŠNØÛÛœÝÝXJ
K
OOžØÛÛœÝZÝ™JJNÚYŠ]HOO]
\™]\›ˆŽØÛÛœÝ[‹œY[™Ð›ÞÜ]œØÜ›ÛÜO[‹œY[™Ð›Þ›Y]œØÜ›ÛYÏ\ŠÝœØÜ›ÛZYÚÏZJÝœØÜ›ÛÚYOP^ŠÝÜœ‹šYÚ›Ë›ÝÛNœËYš_K‹˜›Ü™\ŠNÜ™]\›ˆžŠØ›Ü™\›ÞKX\™Ú[Ž›‹›X\™Ú[‹›Ü™\Ž›‹˜›Ü™\‹Y[™Î›‹œY[™ßJ_K™Ù]ÛY[ŠNÝ˜\ˆ›ÝXJ
Ü™YŽ™K\ØÜš\ÜŽ[Ž›‹Ú[™ÝÔØÜ›Ûœ‹\™XÝ[ÛŽšK\Ñ›Ü\ØX›YœË\ÐÛÛXš[™Q[˜X›Y›ËÚÝ[Û\ÝXš™XÝ˜ßJOOžØÛÛœÝO[‹˜ÛÜÙ\ÝØÜ›ÛX›KRÝ
KJKUŠ‹ŠKOJ

OOžÚYŠ]J\™]\›ˆ[ØÛÛœÝZÝ™JJKÏ^ÜØÜ›ÛZYÚKœØÜ›ÛZYÚØÜ›ÛÚYKœØÜ›ÛÚYNÜ™]\›žØÛY[˜‹YÙN•Š‹ŠKØÜ›Û–Ž
JKØÜ›ÛÚ^™NËÚÝ[Û\ÝXš™XÝ˜ß_JJ
NÜ™]\›ˆ[Ý
Ù\ØÜš\ÜŽ\Ñ[˜X›Yˆ\Ë\ÐÛÛXš[™Q[˜X›Y›Ë\Ñš^YÛ”YÙN›‹š\Ñš^YÛ”YÙK\™XÝ[ÛŽšKÛY[™‹YÙNšÛÜÙ\Ý›_J_K™Ù][Y[œÚ[ÛˆŠNØÛÛœÝÛÝ^Ü\ÜÚ]™NˆL_KÛÝ^Ü\ÜÚ]™NˆLNÝ˜\ˆ›™OXJOO™KœÚÝ[X›\Ú[[YYX][OÕÛÝ‘ÛÝ™Ù]\Ý[™\“Ü[ÛœÈŠNØÛÛœÝTXJOO™I‰™K™[‹˜ÛÜÙ\ÝØÜ›ÛX›_[™Ù]ÛÜÙ\ÝØÜ›ÛX›Qœ›ÛQ˜YÈŠNÙ[˜Ý[Ûˆ[Ý
J^ØÛÛœÝ^\ÙT™YŠ[
KRLŠQ
KRŠ™›ÜX›HŠKÜ™YÚ\ÝžNšKX\œÚ[œßO[‹ÏYÞYJJKÏYœŠ

OOŠÚY™K™›ÜX›RY\N™K\K[ÙN™K›[Ù_JKÙK™›ÜX›RYK›[ÙKK\WJKO^\ÙT™YŠÊKYœŠ

OO“ZJ

OOžÝ˜Ý\œ™[Ý

NØÛÛœÝÏ^Þ•N‘NÜË\]Q›ÜX›TØÜ›Û
ËšYÊ_JKØËšY×JK][Š

OOžØÛÛœÝ]˜Ý\œ™[Ü™]\›ˆUU™[‹˜ÛÜÙ\ÝØÜ›ÛX›OÓN–Ž
™[‹˜ÛÜÙ\ÝØÜ›ÛX›J_K×JKO][Š

OOžØÛÛœÝZ

NÙŠžžJ_KÚ—JKÏYœŠ

OO‘”ÊJKÛWJK][Š

OOžØÛÛœÝ]˜Ý\œ™[STŠ
NÚYŠ	‰‘Ý

KœØÜ›ÛÜ[ÛœËœÚÝ[X›\Ú[[YYX][J^ÛJ
NÜ™]\›ŸYÊ
_KÙËWJKÏ][Š

OOžÝ˜Ý\œ™[	‰šÝ

NØÛÛœÝÏ[Ë˜Ý\œ™[SË™Ù]›ÜX›T™YŠ
NÔÝ

NØÛÛœÝÏ^›Ý

KO^Ü™YŽ”\ØÜš\ÜŽ˜Ë[ŽšËØÜ›ÛÜ[ÛœÎ‘NÝ˜Ý\œ™[SNØÛÛœÝ	U›Ý
Ü™YŽ”\ØÜš\ÜŽ˜Ë[ŽšËÚ[™ÝÔØÜ›Û•\™XÝ[ÛŽ“Ë™\™XÝ[Û‹\Ñ›Ü\ØX›Y“Ëš\Ñ›Ü\ØX›Y\ÐÛÛXš[™Q[˜X›Y“Ëš\ÐÛÛXš[™Q[˜X›YÚÝ[Û\ÝXš™XÝˆSËšYÛ›Ü™PÛÛZ[™\Û\[™ßJKZË˜ÛÜÙ\ÝØÜ›ÛX›NÜ™]\›ˆ‰‰Š‹œÙ]]šX]JÛ™K˜ÛÛ^Y‹˜ÛÛ^Y
K‹˜Y]™[\Ý[™\ŠœØÜ›Û‹‹›™JKœØÜ›ÛÜ[ÛœÊJJK	KÛ‹˜ÛÛ^YË‹×JKÏ][Š

OOžØÛÛœÝ]˜Ý\œ™[STŠ
NÜ™]\›ˆ	‰‘Ý

KŽ

_K×JKO][Š

OOžØÛÛœÝ]˜Ý\œ™[ÕÝ

NØÛÛœÝSTŠ
NÝ˜Ý\œ™[[[	‰ŠË˜Ø[˜Ù[

Kœ™[[Ý™P]šX]JÛ™K˜ÛÛ^Y
Kœ™[[Ý™Q]™[\Ý[™\ŠœØÜ›Û‹‹›™JœØÜ›ÛÜ[ÛœÊJJ_KØ‹×JK][ŠOžØÛÛœÝ]˜Ý\œ™[ÑÝ

NØÛÛœÝÏSTŠ
NÓßÝ

KËœØÜ›ÛÜ
ÏUžKËœØÜ›ÛY
ÏUžK×JKYœŠ

OOŠÙÙ][Y[œÚ[Û[™Ø]ÚØÜ›ÛËÙ]ØÜ›ÛÚ[Q˜YÙÚ[™Î—Ë˜YÔÝÜY‘KØÜ›Û”ŸJKÑKËË—JKOYœŠ

OOŠÝ[š\]YRYœ‹\ØÜš\ÜŽ˜ËØ[˜XÚÜÎšŸJKÚ‹Ë—JNÜ›


OOŠK˜Ý\œ™[PK™\ØÜš\Ü‹K™›ÜX›Kœ™YÚ\Ý\ŠJK

OOžÝ˜Ý\œ™[	‰‘J
KK™›ÜX›K[œ™YÚ\Ý\ŠJ_JKÚ‹ËKKËK™›ÜX›WJK›


OOžÝ˜Ý\œ™[	‰œË\]Q›ÜX›R\Ñ[˜X›Y
K˜Ý\œ™[šYYKš\Ñ›Ü\ØX›Y
_KÙKš\Ñ›Ü\ØX›Y×JK›


OOžÝ˜Ý\œ™[	‰œË\]Q›ÜX›R\ÐÛÛXš[™Q[˜X›Y
K˜Ý\œ™[šYKš\ÐÛÛXš[™Q[˜X›Y
_KÙKš\ÐÛÛXš[™Q[˜X›Y×J_XJ[Ý\ÙQ›ÜX›TX›\Ú\ˆŠNÙ[˜Ý[ÛˆÍJ
^ßXJÍK››ÛÜŠNØÛÛœÝ™O^ÝÚYŒZYÚŒX\™Ú[Ž]KÛÝXJ
Ú\Ð[š[X][™ÓÜ[“Û“[Ý[™KXÙZÛ\Ž[š[X]N›ŸJOO™_OOH˜ÛÜÙHÚ™NžÚZYÚ˜ÛY[˜›Ü™\›ÞšZYÚÚY˜ÛY[˜›Ü™\›ÞÚYX\™Ú[Ž˜ÛY[›X\™Ú[ŸK™Ù]Ú^™HŠKÝXJ
Ú\Ð[š[X][™ÓÜ[“Û“[Ý[™KXÙZÛ\Ž[š[X]N›ŸJOOžØÛÛœÝRÛÝ
Ú\Ð[š[X][™ÓÜ[“Û“[Ý[™KXÙZÛ\Ž[š[X]N›ŸJNÜ™]\›žÙ\Ü^N™\Ü^K›ÞÚ^š[™Îˆ˜›Ü™\‹X›Þ‹ÚYœ‹ÚYZYÚœ‹šZYÚX\™Ú[•Üœ‹›X\™Ú[‹ÜX\™Ú[”šYÚœ‹›X\™Ú[‹œšYÚX\™Ú[›ÝÛNœ‹›X\™Ú[‹˜›ÝÛKX\™Ú[“Yœ‹›X\™Ú[‹›Y›^Úš[šÎˆŒ‹›^Ü›ÝÎˆŒ‹Ú[\‘]™[Îˆ››Û™H‹˜[œÚ][ÛŽ›ˆOOH››Û™HÑKœXÙZÛ\Ž›[_K™Ù]Ý[HŠK[ÝXJOOžØÛÛœÝ^\ÙT™YŠ[
K][Š

OOžÝ˜Ý\œ™[	‰ŠÛX\•[Y[Ý]
˜Ý\œ™[
K˜Ý\œ™[[[
_K×JKØ[š[X]Nœ‹Û•˜[œÚ][Û‘[™šKÛÛÜÙNœËÛÛ^Y›ßOYKØËWO^\ÙTÝ]JK˜[š[X]OOOH›Ü[ˆŠNÞ\ÙQY™™XÝ


OO˜ÏÜˆOOH›Ü[ˆÊŠ
KJLJKÍJN˜Ý\œ™[ÒÍNŠ˜Ý\œ™[\Ù][Y[Ý]


OOžÝ˜Ý\œ™[[[JLJ_JKŠN’ÍKÜ‹Ë—JNØÛÛœÝ][ŠOOžÛKœ›Ü\S˜[YOOOHšZYÚ‰‰ŠJ
KOOH˜ÛÜÙH‰‰œÊ
J_KÜ‹ËWJKVÝ
Ú\Ð[š[X][™ÓÜ[“Û“[Ý[˜Ë[š[X]N™K˜[š[X]KXÙZÛ\Ž™KœXÙZÛ\ŸJNÜ™]\›ˆYK˜Ü™X]Q[[Y[
KœXÙZÛ\‹YÓ˜[YKÜÝ[Nš™]K\™™\XÙZÛ\‹XÛÛ^ZYŽ›ËÛ•˜[œÚ][Û‘[™™‹™YŽ™Kš[›™\”™YŸJ_K”XÙZÛ\ˆŠNÝ˜\ˆ›Ý[YK›Y[[Ê[Ý
NØÛÛœÝœOXÛ\ÜÈœH^[™ÈYK”\™PÛÛ\Û™[ØÛÛœÝXÝÜŠ‹‹
^ÜÝ\\Š‹‹
K\ËœÝ]O^Ú\Õš\ÚX›NˆH]\Ëœ›ÜË›Û‹]N\Ëœ›ÜË›Û‹[š[X]N\Ëœ›ÜËœÚÝ[[š[X]I‰\Ëœ›ÜË›ÛÈ›Ü[ˆŽˆ››Û™HŸK\Ë›ÛÛÜÙOJ
OOžÝ\ËœÝ]K˜[š[X]OOOH˜ÛÜÙH‰‰\ËœÙ]Ý]JÚ\Õš\ÚX›NˆL_J__\Ý]XÈÙ]\š]™YÝ]Qœ›ÛT›ÜÊŠ^Ü™]\›ˆœÚÝ[[š[X]OÝ›ÛÞÚ\Õš\ÚX›NˆL]N›Û‹[š[X]Nˆ›Ü[ˆŸN›‹š\Õš\ÚX›OÞÚ\Õš\ÚX›NˆL]N›‹™]K[š[X]Nˆ˜ÛÜÙHŸNžÚ\Õš\ÚX›NˆLK[š[X]Nˆ˜ÛÜÙH‹]N›[NžÚ\Õš\ÚX›NˆH]›Û‹]N›Û‹[š[X]Nˆ››Û™HŸ_\™[™\Š
^ÚYŠ]\ËœÝ]Kš\Õš\ÚX›J\™]\›ˆ[ØÛÛœÝ^ÛÛÛÜÙN\Ë›ÛÛÜÙK]N\ËœÝ]K™]K[š[X]N\ËœÝ]K˜[š[X]_NÜ™]\›ˆ\Ëœ›ÜË˜Ú[™[Š
__NØJœK[š[X]R[“Ý]ŠNÛ]UOPœNØÛÛœÝ›ÝXJOOžØÛÛœÝ^\ÙPÛÛ^
Q
NÝÝ

NØÛÛœÝØÛÛ^Y›‹\Ó[Ý™[Y[[ÝÙYœŸO]O^\ÙT™YŠ[
KÏ^\ÙT™YŠ[
KØÚ[™[Ž›Ë›ÜX›RY˜Ë\NK[ÙN™‹\™XÝ[ÛŽšYÛ›Ü™PÛÛZ[™\Û\[™Î›K\Ñ›Ü\ØX›Y™Ë\ÐÛÛXš[™Q[˜X›Y˜‹Û˜\ÚÝË\ÙPÛÛ™N—Ë\]UšY]ÜÜX^ØÜ›Û‘KÙ]ÛÛZ[™\‘›ÜÛÛ™N”ŸOYK][Š

OOšK˜Ý\œ™[×JKO][Š
[[
OOžÚK˜Ý\œ™[QŸK×JNÝ[Š

OOœË˜Ý\œ™[×JNØÛÛœÝ][Š
[[
OOžÜË˜Ý\œ™[QŸK×JK][Š

OOžÜŠ
I‰‘JÛX^ØÜ›Û˜ÞYJ
_J_KÜ‹WJNÖ[Ý
Ù›ÜX›RY˜Ë\NK[ÙN™‹\™XÝ[ÛŽš\Ñ›Ü\ØX›Y™Ë\ÐÛÛXš[™Q[˜X›Y˜‹YÛ›Ü™PÛÛZ[™\Û\[™Î›KÙ]›ÜX›T™YŽšŸJNØÛÛœÝÏYœŠ

OO›YK˜Ü™X]Q[[Y[
UKÛÛŽ™KœXÙZÛ\‹ÚÝ[[š[X]N™KœÚÝ[[š[X]TXÙZÛ\ŸK
ÛÛÛÜÙN‘‹]N•K[š[X]NžŸJOO›YK˜Ü™X]Q[[Y[
›ÝÜXÙZÛ\Ž•KÛÛÜÙN‘‹[›™\”™YŽ•[š[X]Nž‹ÛÛ^Y›‹Û•˜[œÚ][Û‘[™‘JJKÛ‹KœXÙZÛ\‹KœÚÝ[[š[X]TXÙZÛ\‹JKYœŠ

OOŠÚ[›™\”™YŽKXÙZÛ\Ž“Ë›ÜX›T›ÜÎžÈ™]K\™™Y›ÜX›KZYŽ˜Ë™]K\™™Y›ÜX›KXÛÛ^ZYŽ›Ÿ_JKÛ‹ËËWJKÏWÏ×Ë™˜YÙÚ[™Ë™˜YÙØX›RY›[OYœŠ

OOŠÙ›ÜX›RY˜Ë\NK\Õ\Ú[™ÐÛÛ™Q›ÜŽšßJKØËËWJNÙ[˜Ý[Ûˆ	

^ÚYŠWÊ\™]\›ˆ[ØÛÛœÝÙ˜YÙÚ[™Î‘‹™[™\Ž•_OWË[YK˜Ü™X]Q[[Y[
žYKÙ˜YÙØX›RY‘‹™˜YÙØX›RY[™^‘‹œÛÝ\˜ÙKš[™^\ÐÛÛ™NˆL\Ñ[˜X›YˆLÚÝ[™\ÜXÝ›Ü˜ÙT™\ÜÎˆLKØ[‘˜YÒ[\˜XÝ]™Q[[Y[ÎˆLK
ËJOO•JËKŠJNÜ™]\›ˆXYK˜Ü™X]TÜ[
‹Š
J_\™]\›ˆJ	™Ù]ÛÛ™HŠKYK˜Ü™X]Q[[Y[
Þ‹”›ÝšY\‹Ý˜[YN“_KÊÊK	

J_K‘›ÜX›HŠNÙ[˜Ý[Ûˆ[

^Ü™]\›ˆØÝ[Y[˜›Ù_Ý

KØÝ[Y[˜›Ù_XJ[™Ù]›ÙHŠNØÛÛœÝ™O^Û[ÙNˆœÝ[™\™‹\Nˆ‘QUS‹\™XÝ[ÛŽˆ™\XØ[‹\Ñ›Ü\ØX›YˆLK\ÐÛÛXš[™Q[˜X›YˆLKYÛ›Ü™PÛÛZ[™\Û\[™ÎˆLK™[™\ÛÛ™N›[Ù]ÛÛZ[™\‘›ÜÛÛ™N™[KÞYOXJOOžÛ]^Ë‹‹™_KŽÙ›ÜŠˆ[ˆ™JYVÛ—OOO]›ÚY	‰Š^Ë‹‹Û—Nœ™VÛ—_JNÜ™]\›ˆK˜]XÚY˜][›ÜÕÓÝÛ”›ÜÈŠKOXJ
K
OO™OOO]™›ÜX›K\Kš\ÓX]Ú[™Õ\HŠK[™OXJ
K
OO™˜YÙØX›\ÖÙK™˜YÙØX›KšYK™Ù]˜YÙØX›HŠKXJ

OOžØÛÛœÝO^ÜXÙZÛ\Ž›[ÚÝ[[š[X]TXÙZÛ\ŽˆLÛ˜\ÚÝžÚ\Ñ˜YÙÚ[™ÓÝ™\ŽˆLK˜YÙÚ[™ÓÝ™\•Ú]›[˜YÙÚ[™Ñœ›ÛU\ÕÚ]›[\Õ\Ú[™ÔXÙZÛ\ŽˆL_K\ÙPÛÛ™N›[K^Ë‹‹™KÚÝ[[š[X]TXÙZÛ\ŽˆL_KSZJÏOŠÙ˜YÙØX›RYœËšY\NœË\KÛÝ\˜ÙNžÚ[™^œËš[™^›ÜX›RYœË™›ÜX›RY_JJKSZJ
ËËËK‹
OOžØÛÛœÝOY‹™\ØÜš\Ü‹šYÚYŠ‹™\ØÜš\Ü‹™›ÜX›RYOO\Ê^ØÛÛœÝÏZÞÜ™[™\Žš˜YÙÚ[™Î›Š‹™\ØÜš\ÜŠ_N›[Ï^Ú\Ñ˜YÙÚ[™ÓÝ™\Ž˜Ë˜YÙÚ[™ÓÝ™\•Ú]˜ÏÛN›[˜YÙÚ[™Ñœ›ÛU\ÕÚ]›K\Õ\Ú[™ÔXÙZÛ\ŽˆLNÜ™]\›žÜXÙZÛ\Ž™‹œXÙZÛ\‹ÚÝ[[š[X]TXÙZÛ\ŽˆLKÛ˜\ÚÝ—Ë\ÙPÛÛ™Nß_ZYŠ[Ê\™]\›ˆÚYŠ]J\™]\›ˆNØÛÛœÝ^Ú\Ñ˜YÙÚ[™ÓÝ™\Ž˜Ë˜YÙÚ[™ÓÝ™\•Ú]›K˜YÙÚ[™Ñœ›ÛU\ÕÚ]›[\Õ\Ú[™ÔXÙZÛ\ŽˆLNÜ™]\›žÜXÙZÛ\Ž™‹œXÙZÛ\‹ÚÝ[[š[X]TXÙZÛ\ŽˆLÛ˜\ÚÝ˜‹\ÙPÛÛ™N›[_JNÜ™]\›ˆJ
ËÊOOžØÛÛœÝÏZÞYJÊKOXË™›ÜX›RYXË\KHXËš\Ñ›Ü\ØX›YOXËœ™[™\ÛÛ™NÚYŠÊÊJ^ØÛÛœÝÏ\Ë˜Üš]XØ[ÚYŠVJ‹ÊJ\™]\›ˆØÛÛœÝ[[™JËË™[Y[œÚ[ÛœÊKÏ[›
Ëš[\XÝ
OOO]NÜ™]\›ˆŠKËË‹J_ZYŠËœ\ÙOOOH‘“ÔÐS’SPUS‘ÈŠ^ØÛÛœÝÏ\Ë˜ÛÛ\]YÚYŠVJ‹Ë˜Üš]XØ[
J\™]\›ˆØÛÛœÝ[[™JË˜Üš]XØ[Ë™[Y[œÚ[ÛœÊNÜ™]\›ˆŠKÞYJËœ™\Ý[
OOO]K›
Ëš[\XÝ
OOO]K‹J_ZYŠËœ\ÙOOOH’QH‰‰œË˜ÛÛ\]Y	‰ˆ\ËœÚÝ[›\Ú
^ØÛÛœÝÏ\Ë˜ÛÛ\]YÚYŠVJ‹Ë˜Üš]XØ[
J\™]\›ˆØÛÛœÝ[›
Ëš[\XÝ
OOO]KÏHHJËš[\XÝ˜]	‰™Ëš[\XÝ˜]\OOOHÓÓP’S‘HŠKÏYË˜Üš]XØ[™›ÜX›KšYOO]NÜ™]\›ˆÝÏÙN—ÏÙN\™]\›ˆKœÙ[XÝÜˆŠ_K›XZÙSX\Ý]UÔ›ÜÈŠK›^Ý\]UšY]ÜÜX^ØÜ›Ûš]K›T™J›
KŠOOŠË‹‹šÞYJŠK‹‹™K‹‹JKØÛÛ^œ^‹\™TÝ]T›ÜÑ\]X[‘^Y_JJ›Ý
K[XJ
ÙX[™K[™^JOO™OÛšœÞ
ÝÙ˜YÙØX›RY”Ýš[™ÊKšY
K[™^Ú[™[Ž˜J
‹ŠOO›šœÞ
žYKÜ›ÝšYY›‹Û˜\ÚÝœ‹X[™_JK˜Ú[™[ˆŠ_JN›[‘X[Ø\™ŠKžYOXJ
Ü›ÝšYY™KÛ˜\ÚÝX[›ŸJOOžØÛÛœÝÙX[Ø]YÛÜšY\ÎœŸOUÜŠ
KOV˜J
KÏ[‹˜]Ø\™Ü™]šY]×ÜÝ]\ÏOOHœ™XYKY›Ü‹\™]šY]È‹Ï[‹˜]Ø\™Ü™]šY]×ÜÝ]\ÏOOH˜\›Ý™YŸ‹œØ[\×ÛÝ]ÛÛYOOOHÛÛˆ‹ÏS[X™\Š‹œ›ÛZ\ÙYØ[[Ý[
_O^]™JŠK^Ž
ŠKXJ

OOžÚJÙX[ËÉÛ‹šYKÜÚÝØ›ÚY›ÚY›ÚY×ÜØÜ›ÛÕÜˆL_J_Kš[™PÛXÚÈŠNÜ™]\›ˆšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜Ý\œÛÜ‹\Ú[\ˆ‹‹‹™OË™˜YÙØX›T›ÜË‹‹™OË™˜YÒ[™T›ÜË™YŽ™OËš[›™\”™Y‹ÛÛXÚÎšÚ[™[Ž›šœÞ
šKÝ˜[YN›‹Ú[™[Ž›šœÞ
Û‹È™]KZ›Ø‹][YHŽ™‹šÙ^KÛ\ÜÓ˜[YN˜KLÈ˜[œÚ][Û‹X[\˜][Û‹LŒ	Ù‹˜Ø\™Û\ÜÓ˜[Y_H	ÝËš\Ñ˜YÙÚ[™ÏÈ›ÜXÚ]KNL˜[œÙ›Ü›H›Ý]KLHÚYÝË[ÈŽˆœÚYÝË\ÛHÝ™\ŽœÚYÝË[YŸXÚ[™[Ž›šœÞÊ‹ØÛ\ÜÓ˜[YNˆœLÈ›^›^XÛÛ‹Ú[™[Ž–ÝOÛšœÞ
Ü‹ØÛ\ÜÓ˜[YNˆ›X‹LˆËYš]›Ü™\‹]Ú]KÌH™Ë]Ú]H^X›XÚÈÝ™\Ž˜™Ë]Ú]H‹Ú[™[Žˆ“Õ‘T‘QHSSÑHŸJNœÏÛšœÞ
Ü‹ØÛ\ÜÓ˜[YNˆ›X‹LˆËYš]™ËX[X™\‹ML^X›XÚÈÝ™\Ž˜™ËX[X™\‹ML‹Ú[™[Žˆ”‘PQH“ÔˆUÐT‘‘U’QUÈŸJN›ÏÛšœÞ
Ü‹ØÛ\ÜÓ˜[YNˆ›X‹LˆËYš]™ËY[Y\˜[MÌ^]Ú]HÝ™\Ž˜™ËY[Y\˜[MÌ‹Ú[™[Žˆ“ÕÓ‘Tˆ‘T’Q’QQŸJN›[šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LH›^‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ™›^LH^\ÛH›Û[YY][HX‹Lˆ‹Ú[™[Ž›‹›˜[Y_JKšœÞ
KÜÛÝ\˜ÙNˆ˜ÛÛ\[žWÚY‹™Y™\™[˜ÙNˆ˜ÛÛ\[šY\È‹[šÎˆLKÚ[™[Ž›šœÞ
˜ËÝÚYŒŒZYÚŒŒJ_JW_JKšœÞ
œ‹ØÛ\ÜÓ˜[YN˜^^È	Ù‹›Y]Y]PÛ\ÜÓ˜[Y_XÚ[™[Ž›šœÞ
Ù™KÜÛÝ\˜ÙNˆ˜Ø]YÛÜžH‹ÚÚXÙ\Îœ‹Ü[Û•^ˆ›X™[‹Ü[Û•˜[YNˆ˜[YHŸJ_JK[É‰›‹œØ[\×ÛÝ]ÛÛYHOOH›ÜÝ‰‰˜ÏŒÛšœÞÊœ‹ØÛ\ÜÓ˜[YN˜]LH^^È›Û\Ù[ZX›Û	Ù‹›Y]Y]PÛ\ÜÓ˜[Y_XÚ[™[Ž–È”›ÛZ\ÙY‹[
ÊW_JN›[_J_J_J_J_K‘X[Ø\™ÛÛ[ŠK[XJOO™KÓØØ[TÝš[™Ê™[‹UTÈ‹Û›Ý][ÛŽˆ˜ÛÛ\XÝ‹Ý[Nˆ˜Ý\œ™[˜ÞH‹Ý\œ™[˜ÞNˆ•TÑŸJK˜ÛÛ\XÝ[Û™^HŠKÛ™OXJ

OOžØÛÛœÝOT™J
KÝH™[ˆ—O\Ù

KÚY[]N›ŸOSŠ
KÙ]Nœ‹Ý[šK\Ô[™[™ÎœßO]œŠ™X[È‹ÜYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒYLßKÛÜžÙšY[ˆ˜\˜Ú]™YØ]‹Ü™\Žˆ‘TÐÈŸKš[\ŽžÈ˜\˜Ú]™YØ]›Ýš\ÈŽ›[_JKÛË×O^\ÙTÝ]JLJNÚYŠ\ÙQY™™XÝ


OOžÈ\É‰šOOOL	‰˜ÊLJ_KÜËWJK\ÙQY™™XÝ


OOžØÊLJ_KÜ—JK[ŸßZ_\Š\™]\›ˆ[ØÛÛœÝO\‹œ™YXÙJ
‹
OOžØÛÛœÝO[™]È]J˜\˜Ú]™YØ]
KÑ]TÝš[™Ê
NÜ™]\›ˆ–ÛW_
–ÛWOV×JK–ÛWKœ\Ú

KŸKßJNÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[›^›^\›ÝÈ][\ËXÙ[\ˆ\ÝYžKXÙ[\ˆ‹Ú[™[Ž–ÛšœÞ
™KÝ˜\šX[ˆ™ÚÜÝ‹ÛÛXÚÎ˜J

OO˜ÊL
K›ÛÛXÚÈŠKÛ\ÜÓ˜[YNˆ›^KM‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë˜\˜Ú]™YšY]ÈŠ_JKšœÞ
[ËÛÜ[Ž›ËÛ“Ü[Ú[™ÙN˜J

OO˜ÊLJK›Û“Ü[Ú[™ÙHŠKÚ[™[Ž›šœÞÊ›ËØÛ\ÜÓ˜[YNˆ›Î›X^]ËMÝ™\™›ÝË^KX]]ÈX^ZNKÌLÜLKÌŒ˜[œÛ]K^KL‹Ú[™[Ž–ÛšœÞ
ØÚ[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë˜\˜Ú]™Y›\ÝÝ]HŠ_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\N‹Ú[™[Ž“Øš™XÝ™[šY\ÊJK›X\

Ù‹JOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\M‹Ú[™[Ž–ÛšœÞ
š‹ØÛ\ÜÓ˜[YNˆ™›ÛX›Û‹Ú[™[Ž™ÎYJ‹
_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLHÛN™ÜšYXÛÛËLˆY™ÜšYXÛÛËLÈØ\N‹Ú[™[Žš›X\
OO›šœÞ
™]ˆ‹ØÚ[™[Ž›šœÞ
žYKÙX[›_J_KKšY
J_JW_KŠJ_JW_J_JW_J_K‘X[\˜Ú]™Y\ÝŠKÞYOXJ

OOžØÛÛœÝOY˜J
NÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\N‹Ú[™[Ž–ÛšœÞ
ÛßJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YN˜›^Ø\Mˆ	ÙOÈ™›^XÛÛŽˆ™›^\›ÝÈŸXÚ[™[Ž–ÛšœÞ
ÛßJKšœÞ
ÚKÛÜšY[][ÛŽ™OÈšÜš^›Û[Žˆ™\XØ[ŸJKšœÞ
ßJW_JW_J_K‘X[[œ]ÈŠKÛXJ

OO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\M›^LH‹Ú[™[Ž–ÛšœÞ
›‹ÜÛÝ\˜ÙNˆ›˜[YH‹˜[Y]N›J
K[\•^ˆL_JKšœÞ
›‹ÜÛÝ\˜ÙNˆ™\ØÜš\[Ûˆ‹][[[™NˆL›ÝÜÎŒË[\•^ˆL_JW_JK‘X[[™›Ò[œ]ÈŠKÛXJ

OOžØÛÛœÝOT™J
NÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\M›^LH‹Ú[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^X˜\ÙH›Û[YY][H‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ëš[œ]Ë›[šÙYÝÈŠ_JKšœÞ
‹ÜÛÝ\˜ÙNˆ˜ÛÛ\[žWÚY‹™Y™\™[˜ÙNˆ˜ÛÛ\[šY\È‹Ú[™[Ž›šœÞ
šKÛX™[ˆœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë˜ÛÛ\[žWÚY‹˜[Y]N›J
K[Ù[ˆLJ_JKšœÞ
	™KÜÛÝ\˜ÙNˆ˜ÛÛXÝÚYÈ‹™Y™\™[˜ÙNˆ˜ÛÛXÝ×ÜÝ[[X\žH‹Ú[™[Ž›šœÞ
ZKÛX™[ˆœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë˜ÛÛXÝÚYÈ‹Ü[Û•^Œ[\•^ˆL_J_JW_J_K‘X[[šÙYÒ[œ]ÈŠKXJ

OOžØÛÛœÝÙX[ÝYÙ\Î™KX[Ø]YÛÜšY\ÎOUÜŠ
KT™J
KØØ[XØÙ\ÜÎœŸOSXÊÜ™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\ÝŸJKO\ÙN™K™š[\ŠÏOˆVÈ˜]Ø\™‹˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹š[›ÚXÙY‹œ^[Y[X\œ˜[™Ù[Y[‹˜˜[[˜ÙKYYH‹œZYZ[‹Y[—Kš[˜ÛY\ÊË˜[YJJNÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\M›^LH‹Ú[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^X˜\ÙH›Û[YY][H‹Ú[™[Ž›Šœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[ØØ]YÛÜšY\Ë›Z\ØÈŠ_JKšœÞ
ËÜÛÝ\˜ÙNˆ˜Ø]YÛÜžH‹ÚÚXÙ\ÎÜ[Û•^ˆ›X™[‹Ü[Û•˜[YNˆ˜[YH‹[\•^ˆL_JKšœÞ
™KÝ˜[Y]N›J
KÛÝ\˜ÙNˆ™^XÝYØÛÜÚ[™×Ù]H‹[\•^ˆLKY˜][˜[YN›™]È]J
KÒTÓÔÝš[™Ê
KœÜ]
•ŠVÌ_JKšœÞ
ËÜÛÝ\˜ÙNˆœÝYÙH‹ÚÚXÙ\ÎšKÜ[Û•^ˆ›X™[‹Ü[Û•˜[YNˆ˜[YH‹Y˜][˜[YNˆ›ÜÜ[š]H‹[\•^ˆLK˜[Y]N›J
_JW_J_K‘X[Z\ØÒ[œ]ÈŠKYOXJ
ÛÜ[Ž™_JOOžØÛÛœÝV˜J
K\[Š
KÙ]NœŸOV›Š
KOXJ

OOžÝ
‹ÙX[ÈŠ_Kš[™PÛÜÙHŠKÏYJ
KÏXJ\Þ[˜ÈOOžÚYŠ\Š^Ý
‹ÙX[ÈŠNÜ™]\›ŸXÛÛœÝ\‹™š[\ŠÏO™ËœÝYÙOOO]KœÝYÙI‰™ËšYOO]KšY
NØ]ØZ]›ÛZ\ÙK˜[
‹›X\
\Þ[˜ÈÏO›‹\]J™X[È‹ÚY™ËšY]NžÚ[™^™Ëš[™^
Ì_K™]š[Ý\Ñ]N™ßJJJNØÛÛœÝY‹œ™YXÙJ
ËŠOOŠË‹‹™ËØ‹šYNžË‹‹˜‹[™^˜‹š[™^
Ì__JKßJKOQ]K››ÝÊ
NÜËœÙ]]Y\šY\Ñ]JÜ]Y\žRÙ^N–È™X[È‹™Ù]\Ý—_KÏO™É‰žË‹‹™Ë]N™Ë™]K›X\
OšØ‹šY_Š_KÝ\]Y]›_JK
‹ÙX[ÈŠ_K›Û”ÝXØÙ\ÜÈŠKÚY[]N˜ßOSŠ
NÜ™]\›ˆšœÞ
[ËÛÜ[Ž™KÛ“Ü[Ú[™ÙN˜J

OOšJ
K›Û“Ü[Ú[™ÙHŠKÚ[™[Ž›šœÞ
›ËØÛ\ÜÓ˜[YNˆ›Î›X^]ËMÝ™\™›ÝË^KX]]ÈX^ZNKÌLÜLKÌŒ˜[œÛ]K^KL‹Ú[™[Ž›šœÞ
ž™KÜ™\ÛÝ\˜ÙNˆ™X[È‹]]][Û“Ü[ÛœÎžÛÛ”ÝXØÙ\ÜÎ›ßKÚ[™[Ž›šœÞÊXKÙY˜][˜[Y\ÎžÜØ[\×ÚY˜ÏËšYÛÛXÝÚYÎ–×K[™^ŒKÚ[™[Ž–ÛšœÞ
ÞYKßJKšœÞ
ÎKØÚ[™[Ž›šœÞ
ßJ_JW_J_J_J_J_K‘X[Ü™X]HŠKÛXJ
ÛÜ[Ž™KYJOOžØÛÛœÝV˜J
K\Š
KOXJ

OOžÛŠ‹ÙX[È‹›ÚY›ÚY›ÚY×ÜØÜ›ÛÕÜˆL_J_Kš[™PÛÜÙHŠNÜ™]\›ˆšœÞ
[ËÛÜ[Ž™KÛ“Ü[Ú[™ÙN˜J

OOšJ
K›Û“Ü[Ú[™ÙHŠKÚ[™[Ž›šœÞ
›ËØÛ\ÜÓ˜[YNˆ›Î›X^]ËMMÝ™\™›ÝË^KX]]ÈX^ZNKÌLÜLKÌŒ˜[œÛ]K^KL‹Ú[™[ŽÛšœÞÊËÚY]]][Û“[ÙNˆœ\ÜÚ[Z\ÝXÈ‹]]][Û“Ü[ÛœÎžÛÛ”ÝXØÙ\ÜÎ˜J

OOžÜŠœ™\ÛÝ\˜Ù\Ë™X[Ë\]Y‹ßJKŠÙX[ËÉÝKÜÚÝØ›ÚY›ÚY›ÚY×ÜØÜ›ÛÕÜˆL_J_K›Û”ÝXØÙ\ÜÈŠ_KÚ[™[Ž–ÛšœÞ
[ßJKšœÞÊXKØÚ[™[Ž–ÛšœÞ
ÞYKßJKšœÞ
	‹ßJW_JW_JN›[J_J_K‘X[Y]ŠNÙ[˜Ý[Ûˆ[

^ØÛÛœÝOT™J
KÙY˜][]NO[Ê
K[[Š
NÜ™]\›ˆÛšœÞ
ØÛ\ÜÓ˜[YNˆœ‹L‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^\ÝYžKX™]ÙY[ˆ][\Ë\Ý\X‹N‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\M‹Ú[™[Ž–ÛšœÞ
KÜÛÝ\˜ÙNˆ˜ÛÛ\[žWÚY‹™Y™\™[˜ÙNˆ˜ÛÛ\[šY\È‹[šÎˆœÚÝÈ‹Ú[™[Ž›šœÞ
˜ËßJ_JKšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ^Lž›Û\Ù[ZX›Û‹Ú[™[ŽJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\Lˆ‹LLˆ‹Ú[™[Ž–ÛšœÞ
\Ü™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\Ý‹Ú[™[Ž›šœÞ
ËßJ_JKšœÞ
™KØ\ÐÚ[ˆL˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆšNH‹Ú[™[Ž›šœÞ
‹ÝÎ˜ÙX[ËÉÛ‹šYKÜÚÝØÚ[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë˜XÝ[Û‹˜˜XÚ×Ý×ÙX[Š_J_JW_JW_J_JN›[XJ[‘Y]XY\ˆŠNØÛÛœÝXJ
ØÚ[™[Ž™_JOOžØÛÛœÝT™J
KQZJ
KXœÊ‹ÙX[ËØÜ™X]H‹‹œ]˜[YJKOZ“Š
KÙ]NœË\Ô[™[™Î›ßO]œŠ˜ÛÛXÝÈ‹ÜYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒ__JNÜ™]\›ˆÏÛšœÞ
\KÝ˜[YNLJN›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ\ÝYžKXÙ[\ˆ][\ËXÙ[\ˆØ\LLˆ‹Ý[NžÚZYÚ˜Ø[ÊLšH	Ú_\
XKÚ[™[Ž–ÛšœÞ
š[YÈ‹ÜÜ˜Îˆ‹‹Ú[YËÙ[\KœÝ™È‹[
œ™\ÛÝ\˜Ù\Ë™X[Ë™[\K]HŠ_JKÉ‰œË›[™ÝŒÛšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆØ\L‹Ú[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›ÛX›Û‹Ú[™[Ž
œ™\ÛÝ\˜Ù\Ë™X[Ë™[\K]HŠ_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XÙ[\ˆ^[]]YY›Ü™YÜ›Ý[™X‹M‹Ú[™[Ž
œ™\ÛÝ\˜Ù\Ë™X[Ë™[\K™\ØÜš\[ÛˆŠ_JW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^ÜXÙK^N‹Ú[™[Ž›šœÞ
ÛX™[ˆœ™\ÛÝ\˜Ù\Ë™X[Ë˜XÝ[Û‹˜Ü™X]HŸJ_JKšœÞ
YKÛÜ[ŽˆH\ŸJKW_JN›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆØ\L‹Ú[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›ÛX›Û‹Ú[™[Ž
œ™\ÛÝ\˜Ù\Ë™X[Ë™[\K]HŠ_JKšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^XÙ[\ˆ^[]]YY›Ü™YÜ›Ý[™X‹M‹Ú[™[Ž–Ý
œ™\ÛÝ\˜Ù\Ë˜ÛÛXÝË™[\K™\ØÜš\[ÛˆŠKšœÞ
˜œˆ‹ßJKšœÞ
‹ÝÎˆ‹ØÛÛXÝËØÜ™X]H‹Û\ÜÓ˜[YNˆšÝ™\Ž[™\›[™H‹Ú[™[Ž
œ™\ÛÝ\˜Ù\Ë˜ÛÛXÝË˜XÝ[Û‹˜YÙš\œÝŠ_JKˆ‹
œ™\ÛÝ\˜Ù\Ë™X[Ë™[\K˜™Y›Ü™WØÜ™X]HŠW_JW_JW_J_K‘X[[\HŠK›XJ
ÜÝYÙN™KX[ÎJOOžØÛÛœÝÙX[ÝYÙ\Î›ŸOUÜŠ
NÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LH‹N‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ][\ËXÙ[\ˆ‹Ú[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^X˜\ÙH›Û[YY][H‹Ú[™[Ž™”Ê‹J_JKšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–Ý›[™Ýˆ‹›[™ÝOOLOÈš›ØˆŽˆš›ØœÈ—_JW_JKšœÞ
›Ù›ÜX›RY™KÚ[™[Ž˜J
‹JOO›šœÞÊ™]ˆ‹Ü™YŽœ‹š[›™\”™Y‹‹‹œ‹™›ÜX›T›ÜËÛ\ÜÓ˜[YN˜›^›^XÛÛ›Ý[™YLž]LˆØ\Lˆ	ÚKš\Ñ˜YÙÚ[™ÓÝ™\È˜™Ë[]]YŽˆˆŸXÚ[™[Ž–Ý›X\

ËÊOO›šœÞ
[ÙX[œË[™^›ßKËšY
JK‹œXÙZÛ\—_JK˜Ú[™[ˆŠ_JW_J_K‘X[ÛÛ[[ˆŠK›™OXJ
K
OOžÚYŠ]
\™]\›žßNØÛÛœÝYKœ™YXÙJ
‹JOOžØÛÛœÝÏ]™š[™
ÏO›Ë˜[YOOOZKœÝYÙJOÚKœÝYÙNÌK˜[YNÜ™]\›ˆ–Ü×Kœ\Ú
JKŸKœ™YXÙJ
‹JOOŠË‹‹œ‹ÚK˜[YWN–×_JKßJJNÜ™]\›ˆ™›Ü‘XXÚ
OžÛ–Ü‹˜[YWO[–Ü‹˜[YWKœÛÜ

KÊOOšKš[™^\Ëš[™^
_JKŸK™Ù]X[ÐžTÝYÙHŠK[™]ÈÙ]
È˜]Ø\™‹˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹š[›ÚXÙY‹œ^[Y[X\œ˜[™Ù[Y[‹˜˜[[˜ÙKYYH‹œZYZ[‹Y[—JKXJOOšš\ÊJOÞÜØ[\×ÛÝ]ÛÛYNˆÛÛˆ‹ÜÝÜ™X\ÛÛŽ›[ÛÜÙYØ]›™]È]J
KÒTÓÔÝš[™Ê
_N™OOOH™XYÞÜØ[\×ÛÝ]ÛÛYNˆ›ÜÝ‹ÛÜÙYØ]›™]È]J
KÒTÓÔÝš[™Ê
_NžÜØ[\×ÛÝ]ÛÛYNˆ›Ü[ˆ‹ÜÝÜ™X\ÛÛŽ›[ÛÜÙYØ]›[K›Ý]ÛÛYQ›Ü”ÝYÙHŠK[XJ

OOžØÛÛœÝÙX[ÝYÙ\Î™_OUÜŠ
KÙ]N\Ô[™[™Î›‹™Y™]ÚœŸOV›Š
KO\[Š
KÏ\Š
KØØ[XØÙ\ÜÎ›ßOSXÊÜ™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\ÝŸJKØËWO^\ÙTÝ]J›™J×KJJNÚYŠ\ÙQY™™XÝ


OOžÚYŠ
^ØÛÛœÝ]›™JJNÓ[
Ê_J
__KÝJKŠ\™]\›ˆ[ØÛÛœÝXJOžØÛÛœÝÙ\Ý[˜][ÛŽ›KÛÝ\˜ÙN™ßOZÚYŠ[_K™›ÜX›RYOOYË™›ÜX›RY	‰›Kš[™^OOYËš[™^
\™]\›ŽØÛÛœÝYË™›ÜX›RYÏ[K™›ÜX›RYÚYŠ[É‰–È˜]Ø\™‹˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹š[›ÚXÙY‹œ^[Y[X\œ˜[™Ù[Y[‹˜˜[[˜ÙKYYH‹œZYZ[‹Y[—Kš[˜ÛY\ÊÊJ^ÜÊ[ˆÝÛ™\ˆ]\ÝX\šÈH›ØˆÛÛˆ[™[\ˆ]È˜[YKˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÛÛœÝÏXÖØ—VÙËš[™^KOXÖÝ×VÛKš[™^OÏÞÜÝYÙNË[™^›ÚYNÝJÛ
ËÜÝYÙN˜‹[™^™Ëš[™^KÜÝYÙNË[™^›Kš[™^KÊJK›
ËKJK[Š

OOžÜŠ
_J_K›Û‘˜YÑ[™ŠNÜ™]\›ˆšœÞ
[ÝÛÛ‘˜YÑ[™™‹Ú[™[Ž›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\M‹Ú[™[Ž™K›X\
O›šœÞ
›ÜÝYÙNš˜[YKX[Î˜ÖÚ˜[YW_K˜[YJJ_J_J_K‘X[\ÝÛÛ[ŠKÛXJ
K‹ŠOOžÚYŠœÝYÙOOO[‹œÝYÙJ^ØÛÛœÝO\–ÝœÝYÙWNÜ™]\›ˆKœÜXÙJš[™^JKKœÜXÙJ‹š[™^ÏÚK›[™Ý
ÌKJKË‹‹œ‹Û‹œÝYÙWNš__Y[Ù^ØÛÛœÝO\–ÝœÝYÙWKÏ\–Û‹œÝYÙWNÜ™]\›ˆKœÜXÙJš[™^JKËœÜXÙJ‹š[™^ÏÜË›[™Ý
ÌKJKË‹‹œ‹ÝœÝYÙWNšKÛ‹œÝYÙWNœß__K\]QX[ÝYÙSØØ[ŠK›XJ\Þ[˜ÊKŠOOžÚYŠKœÝYÙOOO]œÝYÙJ^ØÛÛœÝÙ]NœŸOX]ØZ]‹™Ù]\Ý
™X[È‹ÜÛÜžÙšY[ˆš[™^‹Ü™\ŽˆTÐÈŸKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒLKš[\ŽžÜÝYÙN™KœÝYÙ__JKO]š[™^ÏÜ‹›[™Ý
ÌNÙKš[™^šOØ]ØZ]›ÛZ\ÙK˜[
Ë‹‹œ‹™š[\ŠÏOœËš[™^ZI‰œËš[™^Kš[™^
K›X\
ÏO›‹\]J™X[È‹ÚYœËšY]NžÚ[™^œËš[™^
Ì_K™]š[Ý\Ñ]NœßJJK‹\]J™X[È‹ÚY™KšY]NžÚ[™^š_K™]š[Ý\Ñ]N™_JWJN˜]ØZ]›ÛZ\ÙK˜[
Ë‹‹œ‹™š[\ŠÏOœËš[™^ZI‰œËš[™^™Kš[™^
K›X\
ÏO›‹\]J™X[È‹ÚYœËšY]NžÚ[™^œËš[™^L_K™]š[Ý\Ñ]NœßJJK‹\]J™X[È‹ÚY™KšY]NžÚ[™^š_K™]š[Ý\Ñ]N™_JWJ_Y[Ù^ØÛÛœÝÞÙ]NœŸKÙ]Nš_WOX]ØZ]›ÛZ\ÙK˜[
Û‹™Ù]\Ý
™X[È‹ÜÛÜžÙšY[ˆš[™^‹Ü™\ŽˆTÐÈŸKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒLKš[\ŽžÜÝYÙN™KœÝYÙ__JK‹™Ù]\Ý
™X[È‹ÜÛÜžÙšY[ˆš[™^‹Ü™\ŽˆTÐÈŸKYÚ[˜][ÛŽžÜYÙNŒK\”YÙNŒLKš[\ŽžÜÝYÙNœÝYÙ__JWJKÏ]š[™^ÏÚK›[™Ý
ÌNØ]ØZ]›ÛZ\ÙK˜[
Ë‹‹œ‹™š[\ŠÏO›Ëš[™^™Kš[™^
K›X\
ÏO›‹\]J™X[È‹ÚY›ËšY]NžÚ[™^›Ëš[™^L_K™]š[Ý\Ñ]N›ßJJK‹‹šK™š[\ŠÏO›Ëš[™^\ÊK›X\
ÏO›‹\]J™X[È‹ÚY›ËšY]NžÚ[™^›Ëš[™^
Ì_K™]š[Ý\Ñ]N›ßJJK‹\]J™X[È‹ÚY™KšY]NžÚ[™^œËÝYÙNœÝYÙK‹‹œ
œÝYÙJK\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_JWJ__K\]QX[ÝYÙHŠK[XJ

OOžØÛÛœÝÙ]N™K\œ›ÜŽ\Ô[™[™Î›ŸOV›Š
KT™J
NÜ™]\›ˆŸÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆšNŸJN›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^\›ÝÈ›^]Ü˜\Ø\M]M‹Ú[™[Ž™K›X\
OO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^\›ÝÈØ\M][\ËXÙ[\ˆ‹Ú[™[Ž–ÛšœÞ
Ü™XÛÜ™š_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ‹Ú[™[Ž–ÛšœÞÊ‹ÝÎ˜ØÛÛXÝËÉÚKšYKÜÚÝØÛ\ÜÓ˜[YNˆ^\ÛHÝ™\Ž[™\›[™H‹Ú[™[Ž–ÚK™š\œÝÛ˜[YKˆ‹K›\ÝÛ˜[YW_JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽšK]I‰šK˜ÛÛ\[žWÛ˜[YOÜŠœ™\ÛÝ\˜Ù\Ë˜ÛÛXÝËœÜÚ][Û—Ø]ØÛÛ\[žH‹Ý]NšK]KÛÛ\[žNšK˜ÛÛ\[žWÛ˜[Y_JNšK]_K˜ÛÛ\[žWÛ˜[Y_JW_JW_KKšY
J_J_KÛÛXÝ\ÝŠK[™OVÞÝ˜[YNˆšÝ™\‹[YX\Ý\™[Y[‹X™[ˆ’Ý™\ˆÈYX\Ý\™[Y[™\ÜŸKÝ˜[YNˆš[œÝ\˜[˜ÙK\ØÛÜH‹X™[ˆ’[œÝ\˜[˜ÙHØÛÜHÜˆØ\œšY\ˆØÝ[Y[ŸKÝ˜[YNˆœÚYÛ™YYØÝ[Y[‹X™[ˆ”ÚYÛ™YÛÛ˜XÝÜˆ]]Üš^˜][ÛˆŸKÝ˜[YNˆ™\Ý[X]H‹X™[ˆ‘\Ý[X]HÜˆ›ÜÜØ[ŸKÝ˜[YNˆ›X]\šX[[Ü™\ˆ‹X™[ˆ“X]\šX[Ü™\ˆÜˆÜXÚYšXØ][ÛˆŸKÝ˜[YNˆ›Ý\ˆ‹X™[ˆ“Ý\ˆÝ\Ü[™ÈØÝ[Y[ŸWK›XJOO™KÛÜš×Ý˜Y\ÏË›[™ÝÙKÛÜš×Ý˜Y\Î™K˜Ø]YÛÜžOOOHš[œÝ\˜[˜ÙHÖÈœ›ÛÙš[™È—N–È›Ý\ˆ—K™Ù]›Ø•˜Y\ÈŠKXJ
Ú›ØŽ™_JOOžØÛÛœÝ\[Š
KÚY[]N›ŸOSŠ
K\Š
KOZ›Ê
KÏX›
JKÏ\Ëš[˜ÛY\Êœ›ÛÙš[™ÈŠKÏ\ËœÛÛYJOOœHOOHœ›ÛÙš[™ÈŠKÝK—O^\ÙTÝ]JßJKÚWO^\ÙTÝ]J×JKÙË—O^\ÙTÝ]J›Ý\ˆŠKÝË×O^\ÙTÝ]JˆŠKÑK—O^\ÙTÝ]JLJKÚ‹WO^\ÙTÝ]JLJK^\ÙSY[[Ê

OO–Ë‹‹›ÏÚN–×K‹‹ˆ[ßÏÐ]N–×WKØË×JKU™›]X\
OOœKš][\Ë›X\

‹
OO˜	ÜKšÙ^_N‰ÒX
JKÏQ™š[\ŠOOVÜWOË›[™Ý
K›[™ÝSØš™XÝ˜[Y\ÊJKœ™YXÙJ
KŠOOœJÕ‹›[™Ý
KÏQ›[™ÝSËOXJ
K‹JOOžÚYŠVOË›[™Ý
\™]\›ŽØÛÛœÝÏSÊJK›X\
ÏOŠË‹‹‘ËÚXÚÛ\ÝÚÙ^NœKÚXÚÛ\ÝÚ][N•‹Ø\\™WÜÛÝ\˜ÙN’JJNÙŠÏOŠË‹‹‘ËÜWN–Ë‹‹‘ÖÜWOÏÖ×K‹‹’×_JJ_K˜Yš[\ÈŠK	XJ
KŠOO™ŠOžØÛÛœÝORÜWOË–Õ—NÖI‰•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜ÊNØÛÛœÝÏJÜWOÏÖ×JK™š[\Š
YKŠOO–ˆOOUŠKÏ^Ë‹‹’NÜ™]\›ˆË›[™ÝÑÖÜWORÎ™[]HÖÜWKßJKœ™[[Ý™Q]šY[˜ÙHŠKXJOO›JO–Ë‹‹•‹‹‹“ÊJWJK˜YØÝ[Y[ÈŠKOXJOO›JOžØÛÛœÝU–ÜWNÜ™]\›ˆ	‰•T“œ™]›ÚÙSØš™XÝT“
œÜ˜ÊK‹™š[\Š
KÊOO’ÈOO\J_JKœ™[[Ý™QØÝ[Y[ŠKXJ\Þ[˜Ê
OOžÚYŠÊ^ÜŠY]X\ÝÛ™H\ÜÚYÛ™YÝÈÈ]™\žH™\]Z\™Y][Kˆ	ÚßH™[XZ[š[™Ë˜Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸZYŠT
^ÜŠYH™\]Z\™Y[œÜXÝ[ÛˆÝÜÈ™Y›Ü™HØ]š[™Ëˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸTŠL
NÝž^ØÛÛœÝOU™›]X\
ÏO–Ø	ÒË]_Nˆ	ÒËš][\Ë›[™ÝKÉÒËš][\Ë›[™ÝH™\]Z\™Y][\ÈÛÛ\]X‹‹’Ëš][\Ë›X\

ËYJOOžØÛÛœÝ]VØ	ÒËšÙ^_N‰ÙY_XOÏÖ×KV‹™š[\ŠÙOO›ÙK˜Ø\\™WÜÛÝ\˜ÙOOOH˜Ø[Y\˜HŠK›[™ÝYOV‹›[™ÝRŽÜ™]\›˜H	ÑßNˆ	Ö‹›[™ÝHÝÉÖ‹›[™ÝOOLOÈˆŽˆœÈŸH
	ÒŸHØ[Y\˜K	ÚY_H\ØYY
XJWJKVÈ‘’QSS”ÔPÕSÓˆ‹”Ý]\ÎˆÛÛ\]H8 %]™\žH™\]Z\™YÚXÚÛ\Ý][H\È\ÜÚYÛ™YÝÙÜ˜\XÈ]šY[˜ÙH‹ÛÜšÈ\Nˆ	ÜË›X\
ÏOŽ™š[™
ÏO‘ËšÙ^OOORÊOË›X™[ÏÒÊKš›Ú[Š‹Š_XÚXÚÛ\Ýˆ	ÓßKÉÑ›[™ÝX‹‹œKËš[J
I‰˜›Ý\Îˆ	ÝËš[J
_XK™š[\Š›ÛÛX[ŠKš›Ú[Š˜
KOSØš™XÝ˜[Y\ÊJK™›]

NØ]ØZ]˜Ü™X]J™X[Û›Ý\È‹Ù]NžÙX[ÚY™KšY\Nˆ™šY[Z[œÜXÝ[Ûˆ‹^’]N›™]È]J
KÒTÓÔÝš[™Ê
KØ[\×ÚY›ËšY]XÚY[Î–__JKK™›Ü‘XXÚ
ÏO•T“œ™]›ÚÙSØš™XÝT“
ËœÜ˜ÊJKŠßJKÊˆŠKŠÛÛ\]Y[œÜXÝ[ÛˆØ]™YÈ\È›Ø‹ˆ‹Ý\NˆœÝXØÙ\ÜÈŸJKJ
_XØ]Ú
J^ÜŠH[œÝ[˜Ù[Ùˆ\œ›ÜÜK›Y\ÜØYÙNˆ•H[œÜXÝ[ÛˆÛÝ[›Ý™HØ]™Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ_Yš[˜[^ÔŠLJ__KœØ]™R[œÜXÝ[ÛˆŠKÏXJ\Þ[˜Ê
OOžÚYŠZ›[™Ý
^ÜŠÚÛÜÙH]X\ÝÛ™H›ØˆØÝ[Y[ÈØ]™Kˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸPJL
NÝž^Ø]ØZ]˜Ü™X]J™X[Û›Ý\È‹Ù]NžÙX[ÚY™KšY\N˜›Ø‹YØÝ[Y[ËIÙßX^–Ø“ÐˆÐÕSQS•È8 %	Þ[™K™š[™
OOœK˜[YOOOYÊOË›X™[ÏÈ”Ý\Ü[™ÈØÝ[Y[ŸX‹‹š›X\
OO˜H	ÜK]_X
K•\ÙHš[\È\™HÝ\Ü[™È›ØˆØÝ[Y[È[™È›ÝØ]\ÙžH[œÜXÝ[ÛˆÝÈ™\]Z\™[Y[Ëˆ—Kš›Ú[Š˜
K]N›™]È]J
KÒTÓÔÝš[™Ê
KØ[\×ÚY›ËšY]XÚY[Îš_JK™›Ü‘XXÚ
OO•T“œ™]›ÚÙSØš™XÝT“
KœÜ˜ÊJKJ×JKŠ’›ØˆØÝ[Y[ÈØ]™YˆHÝÈÚXÚÛ\ÝØ\È›ÝÚ[™ÙYˆ‹Ý\NˆœÝXØÙ\ÜÈŸJKJ
_XØ]Ú
J^ÜŠH[œÝ[˜Ù[Ùˆ\œ›ÜÜK›Y\ÜØYÙNˆ•H›ØˆØÝ[Y[ÈÛÝ[›Ý™HØ]™Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ_Yš[˜[^ÐJLJ__KœØ]™QØÝ[Y[ÈŠNÜ™]\›ˆšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹\š[X\žKÌH™Ë\š[X\žKÖÌŒWHÚYÝË[›Û™H‹Ú[™[Ž–ÛšœÞÊØKØÛ\ÜÓ˜[YNˆ™Ø\LÈ‹Lˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û\Ù[ZX›Û\\˜Ø\ÙH˜XÚÚ[™ËVÌŒM[WH^\š[X\žH‹Ú[™[Žˆ‘šY[[œÜXÝ[ÛˆŸJKšœÞ
ØKØÛ\ÜÓ˜[YNˆ›]LH^^‹Ú[™[Ž›ÏÈ“X[™]ÜžH^\š[Üˆ›ÛÙˆ[œÜXÝ[ÛˆÝÜÈŽˆ’[œÜXÝ[ÛˆÝÜÈ[™›Ý\ÈŸJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LˆX^]ËLÞ^\ÛHXY[™ËMH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž›ÏÈØ\\™HHÝ[™\™^\š[Üˆ[œÜXÝ[ÛˆÙ]\ÙY›ÜˆØ\œšY\ˆØÝ[Y[][Û‹ˆŽˆ‘ØÝ[Y[HÛÛ™][Û‹YX\Ý\™[Y[Ë[™^XÝÛÛ\Û™[È™YYY›ÜˆH™\Z\‹ˆŸJW_JKšœÞÊÜ‹Ý˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆ˜™ËX˜XÚÙÜ›Ý[™‹Ú[™[Ž–ÓË‹È‹›[™ÝˆÛÛ\]H0­È‹ˆÝÜÈ—_JW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\Ø\Lˆ‹Ú[™[ŽœË›X\
OO›šœÞ
Ü‹Ý˜\šX[ˆœÙXÛÛ™\žH‹Ú[™[ŽŽ™š[™
O•‹šÙ^OOO\JOË›X™[ÏÜ_KJJ_JW_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KMH‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YN›É‰ˆXÏÈ™ÜšYØ\MŽˆ™ÜšYØ\MÎ™ÜšYXÛÛËLˆ‹Ú[™[Ž–ÛÏÛšœÞ
›™KÚXY[™Îˆ”›ÛÙˆ[œÜXÝ[Ûˆ‹ÙXÝ[ÛœÎšKš[\ÎKÛ‘š[\Î“KÛ”™[[Ý™N‰JN›[[ßÏÛšœÞ
›™KÚXY[™Î›ÏÈY][Û˜[˜YHÝÜÈŽˆ’[œÜXÝ[ÛˆÝÜÈ‹ÙXÝ[ÛœÎ]Kš[\ÎKÛ‘š[\Î“KÛ”™[[Ý™N‰JN›[_JKšœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y^›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™M‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹LÈ›^][\Ë\Ý\Ø\LÈ‹Ú[™[Ž–ÛšœÞ
ÖØÛ\ÜÓ˜[YNˆ›]LHÚ^™KMH^\š[X\žHŸJKšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[Žˆ’›ØˆØÝ[Y[ÈŸJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽˆYœË™\ÜËØÛÜ\ËÜ™XYÚY]ËÜˆÝ\Ü[™Èš[\Ëˆ\ÙH™]™\ˆÛÝ[ÝØ\™H™\]Z\™YÝÈÚXÚÛ\ÝˆŸJW_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›X‹MX^]Ë[YÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽ˜ØÝ[Y[]\KIÙKšYXÚ[™[Žˆ‘ØÝ[Y[Ø]YÛÜžHŸJKšœÞÊ˜KÝ˜[YN™ËÛ•˜[YPÚ[™ÙN˜‹Ú[™[Ž–ÛšœÞ
ØKÚY˜ØÝ[Y[]\KIÙKšYXÛ\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞ
ØKØÚ[™[Žž[™K›X\
OO›šœÞ
›‹Ý˜[YNœK˜[YKÚ[™[ŽœK›X™[KK˜[YJJ_JW_JW_JKšœÞ
SËÚY˜›Ø‹YØÝ[Y[ËIÙKšYXš[\ÎšÛ‘š[\Î‘‹Û”™[[Ý™N•_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]M›^\ÝYžKY[™›Ü™\‹]M‹Ú[™[Ž›šœÞÊ™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ›Ý][™H‹ÛÛXÚÎ•Ë\ØX›YšŸZ›[™ÝÚ[™[Ž–ÚÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÖßJK”Ø]™H›ØˆØÝ[Y[È—_J_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽ˜[œÜXÝ[Û‹[›Ý\ËIÙKšYXÚ[™[Žˆ’[œÜXÝ[Ûˆ›Ý\ÈŸJKšœÞ
Ó‹ÚY˜[œÜXÝ[Û‹[›Ý\ËIÙKšYX˜[YNËÛÚ[™ÙN˜JOO—ÊK\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\Žˆ“ØœÙ\™Y[XYÙKXØÙ\ÜÈ\ÜÝY\ËYX\Ý\™[Y[Ë˜[™HÜˆÛÛ\Û™[]Z[Ë[™›ÛÝË]\™YYY‹Û\ÜÓ˜[YNˆ›Z[‹ZL^X˜\ÙHŸJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\LÈ›Ü™\‹]MÛN™›^\›ÝÈÛNš][\ËXÙ[\ˆÛNš\ÝYžKX™]ÙY[ˆ‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][H^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽšÏØ	ÚßH™\]Z\™YÝÈ][IÚÏOOLOÈˆŽˆœÈŸH™[XZ[š[™Øˆ‘]™\žH™\]Z\™YÝÈ][H\È\ÜÚYÛ™Y]šY[˜ÙHŸJKšœÞÊ™KÛÛÛXÚÎž‹\ØX›Y‘KÚ^™Nˆ›È‹Ú[™[Ž–ÑOÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJK”Ø]™HÛÛ\]Y[œÜXÝ[Ûˆ—_JW_JW_JW_J_K‘šY[Ø\\™T[™[ŠK›™OXJ
ÚXY[™Î™KÙXÝ[ÛœÎš[\Î›‹Û‘š[\Îœ‹Û”™[[Ý™Nš_JOO›šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ™›Û\Ù[ZX›Û‹Ú[™[Ž™_JKšœÞ
KÝ\NˆœÚ[™ÛH‹ÛÛ\ÚX›NˆLÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Ú[™[Ž›X\
ÏOžØÛÛœÝÏ\Ëš][\Ë™š[\Š
ËJOO›–Ø	ÜËšÙ^_N‰Ý_XOË›[™Ý
K›[™ÝÜ™]\›ˆšœÞÊKÝ˜[YNœËšÙ^KÛ\ÜÓ˜[YNˆœ›Ý[™Y^›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™M‹Ú[™[Ž–ÛšœÞ
ÍKØÛ\ÜÓ˜[YNˆšÝ™\Ž››Ë][™\›[™H‹Ú[™[Ž›šœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Z[‹]ËL›^LH][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹LÈ^[Y‹Ú[™[Ž–ÛšœÞÊœÜ[ˆ‹ØÚ[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ˜›ØÚÈ›Û\Ù[ZX›Û‹Ú[™[ŽœË]_JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›]LH›ØÚÈ^\ÛH›Û[›Ü›X[^[]]YY›Ü™YÜ›Ý[™‹Ú[™[ŽœË™\ØÜš\[ÛŸJW_JKšœÞÊÜ‹Ý˜\šX[›ÏOO\Ëš][\Ë›[™ÝÈ™Y˜][Žˆ›Ý][™H‹Ú[™[Ž–ÛË‹È‹Ëš][\Ë›[™Ý_JW_J_JKšœÞÊÍKØÚ[™[Ž–ÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ‹Lˆ‹Ú[™[ŽœËš][\Ë›X\

ËJOOžØÛÛœÝX	ÜËšÙ^_N‰Ý_X[–Ù—OÏÖ×KOZ›[™ÝŒÜ™]\›ˆšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[È›Ü™\ˆ™Ë[]]YÌŒLÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\Ý\Ø\Lˆ‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YN›OÈ›]LH›Ý[™YY[™ËY[Y\˜[MŒLH^]Ú]HŽˆ›]LH›Ý[™YY[›Ü™\ˆLH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž›OÛšœÞ
[ØÛ\ÜÓ˜[YNˆœÚ^™KLÈŸJN›šœÞ
S™KØÛ\ÜÓ˜[YNˆœÚ^™KLÈŸJ_JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û[YY][HXY[™ËMH‹Ú[™[Ž˜ßJW_JKšœÞ
Ü‹Ý˜\šX[›OÈœÙXÛÛ™\žHŽˆ›Ý][™H‹Û\ÜÓ˜[YNˆœÚš[šËL‹Ú[™[Ž›OØ	Ú›[™ÝH]XÚYˆ”™\]Z\™YŸJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈ›^›^]Ü˜\Ø\Lˆ‹Ú[™[Ž–ÛšœÞ
™KØ\ÐÚ[ˆL\Nˆ˜]Ûˆ‹Ú^™NˆœÛH‹Ú[™[Ž›šœÞÊ›X™[‹Ú[›ÜŽ˜Ø[Y\˜KIÙŸXÛ\ÜÓ˜[YNˆ˜Ý\œÛÜ‹\Ú[\ˆ‹Ú[™[Ž–ÛšœÞ
šÙKßJKˆZÙHÝÈ—_J_JKšœÞ
š[œ]‹ÚY˜Ø[Y\˜KIÙŸX\Nˆ™š[H‹XØÙ\ˆš[XYÙKÊˆ‹Ø\\™Nˆ™[š\›Û›Y[‹Û\ÜÓ˜[YNˆœÜ‹[Û›H‹ÛÚ[™ÙN˜JÏOžÜŠ‹Ë˜Ø[Y\˜H‹Ë\™Ù]™š[\ÊKË˜Ý\œ™[\™Ù]˜[YOHˆŸK›ÛÚ[™ÙHŠ_JKšœÞ
™KØ\ÐÚ[ˆL\Nˆ˜]Ûˆ‹Ú^™NˆœÛH‹˜\šX[ˆ›Ý][™H‹Ú[™[Ž›šœÞÊ›X™[‹Ú[›ÜŽ˜\ØYIÙŸXÛ\ÜÓ˜[YNˆ˜Ý\œÛÜ‹\Ú[\ˆ‹Ú[™[Ž–ÛšœÞ
ÍËßJKˆ\ØY^\Ý[™È—_J_JKšœÞ
š[œ]‹ÚY˜\ØYIÙŸX\Nˆ™š[H‹XØÙ\ˆš[XYÙKÊˆ‹][\NˆLÛ\ÜÓ˜[YNˆœÜ‹[Û›H‹ÛÚ[™ÙN˜JÏOžÜŠ‹Ë™š[K]\ØY‹Ë\™Ù]™š[\ÊKË˜Ý\œ™[\™Ù]˜[YOHˆŸK›ÛÚ[™ÙHŠ_JW_JK›[™ÝÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]LÈÜšYØ\LˆÛN™ÜšYXÛÛËLˆ‹Ú[™[Žš›X\

ËŠOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LÈ›Ý[™Y[Y›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™Lˆ‹Ú[™[Ž–ÛšœÞ
š[YÈ‹ÜÜ˜Î™ËœÜ˜Ë[ˆˆ‹Û\ÜÓ˜[YNˆœÚ^™KLLˆÚš[šËL›Ý[™YØš™XÝXÛÝ™\ˆŸJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›Z[‹]ËL›^LH‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^^È›Û[YY][H‹Ú[™[Ž™Ë]_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™Ë˜Ø\\™WÜÛÝ\˜ÙOOOH˜Ø[Y\˜HÈ•ZÙ[ˆ›Üˆ\È][HŽˆ‘^\Ý[™ÈÝÈ\ÜÚYÛ™Y\™HŸJW_JKšœÞ
™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ™ÚÜÝ‹Ú^™NˆšXÛÛˆ‹˜\šXK[X™[Ž˜™[[Ý™H	ÙË]_XÛÛXÚÎ˜J

OOšJ‹ŠK›ÛÛXÚÈŠKÚ[™[Ž›šœÞ
YßJ_JW_K	ÙË]_KIØŸX
J_JN›[_KŠ_J_JKËš][\Ë™]™\žJ
ËJOO›–Ø	ÜËšÙ^_N‰Ý_XOË›[™Ý
OÛšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ›^][\ËXÙ[\ˆØ\LH^\ÛH›Û[YY][H^Y[Y\˜[MÌ\šÎ^Y[Y\˜[M‹Ú[™[Ž–ÛšœÞ
[ØÛ\ÜÓ˜[YNˆœÚ^™KMŸJKˆÚXÚÛ\ÝÛÛ\]H—_JN›[_JW_KËšÙ^J_J_JW_JK’[œÜXÝ[Û‘Ü›Ý\ŠKÛXJ
Ú›ØŽ™_JOOžØÛÛœÝ\[Š
K\Š
KZ›Ê
KÚK×O^\ÙTÝ]JK˜\Ú[Y[Ý\OÏÈ››Û™HŠKÛË×O^\ÙTÝ]J›
K˜\Ú[Y[ÜÝ\
JKÝK—O^\ÙTÝ]JÝš[™ÊK˜\Ú[Y[Ù\˜][Û—ÛZ[]\ÏÏÍŒ
JKÚWO^\ÙTÝ]JK˜\Ú[Y[ÛÝ]ÛÛYOÏÈœØÚY[YŠKÙË—O^\ÙTÝ]JLJKÝË×O^\ÙTÝ]JLJKÑK—O^\ÙTÝ]J[
NÞ\ÙQY™™XÝ


OOžÛ]ÏHLÜ™]\›ˆ™Ù]Ø[[™\ÛÛ›™XÝ[ÛŠ
K[ŠOžÓÉ‰”Š
_JK˜Ø]Ú


OOžÓÉ‰”ŠØÛÛ™šYÝ\™YˆLKÛÛ›™XÝYˆLK[XZ[›[J_JK

OOžÓÏHL__KÝJNØÛÛœÝXJ\Þ[˜Ê
OOž×ÊL
NÝž^ÝÚ[™ÝË›ØØ][Û‹˜\ÜÚYÛŠ]ØZ]˜ÛÛ›™XÝÛÛÙÛPØ[[™\ŠKšY
J_XØ]Ú
Ê^×ÊLJKŠÈ[œÝ[˜Ù[Ùˆ\œ›ÜÓË›Y\ÜØYÙNˆØ[[™\ˆÛÛ›™XÝ[Ûˆ˜Z[Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ__K˜ÛÛ›™XÝØ[[™\ˆŠKOXJ\Þ[˜Ê
OOžÝž^Ø]ØZ]œÞ[˜ÑÛÛÙÛPØ[[™\ŠKšY
KŠ\Ú[Y[Þ[˜ÙYÈÛÛÙÛHØ[[™\‹ˆ‹Ý\NˆœÝXØÙ\ÜÈŸJKŠ
_XØ]Ú
Ê^ÛŠ\Ú[Y[Ø]™Y[ˆHÔ“H]›Ý[ˆÛÛÙÛHØ[[™\‹ˆ	ÓÈ[œÝ[˜Ù[Ùˆ\œ›ÜÓË›Y\ÜØYÙNˆ”™]žHØ[[™\ˆÞ[˜ËˆŸXÝ\NˆØ\›š[™ÈŸJKŠ
__KœÞ[˜ÐØ[[™\ˆŠKXJÏOžÜÊÊNØÛÛœÝSTË™š[™
ÏOšË˜[YOOOSÊNÔË™\˜][Û‰‰™ŠÝš[™Ê™\˜][ÛŠJ_K˜Ú[™ÙU\HŠKXJ\Þ[˜Ê
OOžÚYŠHOOH››Û™H‰‰ˆ[Ê^ÛŠÚÛÜÙHH\Ú[Y[]H[™[YKˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÛÛœÝÏS[X™\ŠJNÚYŠHOOH››Û™H‰‰ŠS[X™\‹š\Ñš[š]JÊ_ÏL
J^ÛŠ‘[\ˆH\Ú[Y[\˜][Û‹ˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXŠL
NÝž^ØÛÛœÝÏZOOOHš[œÜXÝ[Ûˆ‰‰–È›XY‹œ›ÜÜXÝXšY[™È—Kš[˜ÛY\ÊKœÝYÙJOÈš[œÜXÝ[Û‹\ØÚY[YŽ™KœÝYÙNØ]ØZ]\]J™X[È‹ÚY™KšY]NžØ\Ú[Y[Ý\NšOOOH››Û™HÛ[šK\Ú[Y[ÜÝ\šOOOH››Û™HÛ[œ™JÊK\Ú[Y[Ù\˜][Û—ÛZ[]\ÎšOOOH››Û™HÛ[“Ë\Ú[Y[ÛÝ]ÛÛYNšOOOH››Û™HÛ[š\Ú[Y[Ý[Y^›Û™NšOOOH››Û™HÛ[ˆ[Y\šXØKÐÚXØYÛÈ‹ÝYÙNšË\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_JK]ØZ]J
_XØ]Ú

^ÛŠ[œÝ[˜Ù[Ùˆ\œ›ÜÔ›Y\ÜØYÙNˆ•H\Ú[Y[ÛÝ[›Ý™HØ]™Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ_Yš[˜[^ØŠLJ__KœØ]™HŠNÜ™]\›ˆšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆœÚYÝË[›Û™H‹Ú[™[Ž–ÛšœÞ
ØKØÛ\ÜÓ˜[YNˆœ‹Lˆ‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û\Ù[ZX›Û\\˜Ø\ÙH˜XÚÚ[™ËVÌŒM[WH^\š[X\žH‹Ú[™[Žˆ\Ú[Y[ŸJKšœÞ
ØKØÛ\ÜÓ˜[YNˆ›]LH^[È‹Ú[™[Ž™K˜\Ú[Y[ÜÝ\	‰™K˜\Ú[Y[Ý\OØ	Ù™JK˜\Ú[Y[Ý\J_H0­È	Ú™JK˜\Ú[Y[ÜÝ\
_Xˆ“›È\Ú[Y[ØÚY[YŸJW_JKK˜\Ú[Y[ÛÝ]ÛÛYOÛšœÞ
Ü‹Ý˜\šX[ˆ›Ý][™H‹Ú[™[Ž™K˜\Ú[Y[ÛÝ]ÛÛY_JN›[_J_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MÛN™ÜšYXÛÛËLˆÎ™ÜšYXÛÛËM‹Ú[™[Ž–ÛšœÞ
MKÛX™[ˆ\Ú[Y[\H‹[›ÜŽ˜\Ú[Y[]\KIÙKšYXÚ[™[Ž›šœÞÊ˜KÝ˜[YNšKÛ•˜[YPÚ[™ÙN•Ú[™[Ž–ÛšœÞ
ØKÚY˜\Ú[Y[]\KIÙKšYXÛ\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞ
ØKØÚ[™[Ž“TË›X\
ÏO›šœÞ
›‹Ý˜[YN“Ë˜[YKÚ[™[Ž“Ë›X™[KË˜[YJJ_JW_J_JKšœÞ
]™KÚY™Yš^˜\Ú[Y[\Ý\IÙKšYX˜[YN›ËÛÚ[™ÙN˜Ë\ØX›YšOOOH››Û™HŸJKšœÞ
MKÛX™[ˆ“Z[]\È‹[›ÜŽ˜\Ú[Y[Y\˜][Û‹IÙKšYXÚ[™[Ž›šœÞ
‹ÚY˜\Ú[Y[Y\˜][Û‹IÙKšYX\Nˆ›[X™\ˆ‹Z[ŽˆŒMH‹Ý\ˆŒMH‹˜[YNKÛÚ[™ÙN˜JÏO™ŠË\™Ù]˜[YJK›ÛÚ[™ÙHŠK\ØX›YšOOOH››Û™HŸJ_JKšœÞ
MKÛX™[ˆ“Ý]ÛÛYH‹[›ÜŽ˜\Ú[Y[[Ý]ÛÛYKIÙKšYXÚ[™[Ž›šœÞÊ˜KÝ˜[YNšÛ•˜[YPÚ[™ÙN˜JÏO›JÊK›Û•˜[YPÚ[™ÙHŠK\ØX›YšOOOH››Û™H‹Ú[™[Ž–ÛšœÞ
ØKÚY˜\Ú[Y[[Ý]ÛÛYKIÙKšYXÛ\ÜÓ˜[YNˆËY[‹Ú[™[Ž›šœÞ
KßJ_JKšœÞÊØKØÚ[™[Ž–ÛšœÞ
›‹Ý˜[YNˆœØÚY[Y‹Ú[™[Žˆ”ØÚY[YŸJKšœÞ
›‹Ý˜[YNˆ˜ÛÛ\]Y‹Ú[™[ŽˆÛÛ\]YŸJKšœÞ
›‹Ý˜[YNˆ˜Ø[˜Ù[Y‹Ú[™[ŽˆØ[˜Ù[YŸJKšœÞ
›‹Ý˜[YNˆ››Ë\ÚÝÈ‹Ú[™[Žˆ“›Ë\ÚÝÈŸJW_JW_J_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆØ\Lˆ›Ü™\‹]M‹Ú[™[Ž–ÛšœÞÊœÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–È‘ÛÛÙÛHØ[[™\Žˆ‹ˆ‹OË˜ÛÛ›™XÝYÑK™[XZ[ˆ“›ÝÛÛ›™XÝY‹K™ÛÛÙÛWØØ[[™\—Ù]™[ÚY	‰™K˜Ø[[™\—ÜÞ[˜×ÜÝ]\ÏOOHœÞ[˜ÙYÈˆ0­ÈÞ[˜ÙYŽˆˆ—_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\Ø\Lˆ‹Ú[™[Ž–ÙK™ÛÛÙÛWØØ[[™\—Ù]™[Ý\›ÛšœÞ
™KØ\ÐÚ[ˆL˜\šX[ˆ›Ý][™H‹Ú[™[Ž›šœÞÊ˜H‹Ú™YŽ™K™ÛÛÙÛWØØ[[™\—Ù]™[Ý\›\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ú[™[Ž–ÛšœÞ
ÕßJKˆšY]ÈØ[[™\ˆ]™[‹šœÞ
œÙKßJW_J_JN›[OË˜ÛÛ™šYÝ\™Y	‰ˆQK˜ÛÛ›™XÝYÛšœÞ
™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ›Ý][™H‹ÛÛXÚÎš‹\ØX›YËÚ[™[ŽˆÛÛ›™XÝÛÛÙÛHØ[[™\ˆŸJN›[OË˜ÛÛ›™XÝY	‰™K˜Ø[[™\—ÜÞ[˜×ÜÝ]\ÏOOH™˜Z[YÛšœÞ
™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ›Ý][™H‹ÛÛXÚÎK\ØX›Y™ËÚ[™[Žˆ”™]žHØ[[™\ˆÞ[˜ÈŸJN›[šœÞÊ™KÛÛÛXÚÎ‘\ØX›Y™ËÚ[™[Ž–ÙÏÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJK”Ø]™H\Ú[Y[—_JW_JW_JW_JW_J_K’›Ø\Ú[Y[[™[ŠKMOXJ
ÛX™[™K[›ÜŽÚ[™[Ž›ŸJOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽÚ[™[Ž™_JK—_JK‘šY[ŠKÛ[™]ÈÙ]
È˜]Ø\™‹˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹š[›ÚXÙY‹œ^[Y[X\œ˜[™Ù[Y[‹˜˜[[˜ÙKYYH‹œZYZ[‹Y[—JK[XJOO™OÛ™]È[‘]U[YQ›Ü›X]
™[‹UTÈ‹Ý[YV›Û™Nˆ[Y\šXØKÐÚXØYÛÈ‹[ÛˆœÚÜ‹^Nˆ›[Y\šXÈ‹YX\Žˆ›[Y\šXÈ‹Ý\Žˆ›[Y\šXÈ‹Z[]NˆŒ‹YYÚ]‹[YV›Û™S˜[YNˆœÚÜŸJK™›Ü›X]
™]È]JJJNˆˆ‹™›Ü›X]ÝX›Z]Y]ŠKÛXJ
Ú›ØŽ™_JOOžØÛÛœÝ\[Š
K\Š
KZ›Ê
KÚY[]Nš_OSŠ
KØØ[XØÙ\ÜÎœßOSXÊÜ™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\ÝŸJKÛË×O^\ÙTÝ]J×JKÝK—O^\ÙTÝ]J×JKÚWO^\ÙTÝ]J×JKÙË—O^\ÙTÝ]JLJNÚYŠKœØ[\×ÛÝ]ÛÛYOOOHÛÛˆŸK˜]Ø\™Ü™]šY]×ÜÝ]\ÏOOH˜\›Ý™YŸÛš\ÊKœÝYÙJJ\™]\›ˆšœÞ
Û‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹Y[Y\˜[MŒÍL™ËY[Y\˜[MLÍÌÚYÝË[›Û™H\šÎ˜™ËY[Y\˜[NMLÌŒ‹Ú[™[Ž›šœÞ
ØKØÚ[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ”Ø[\È™\šYšXØ][ÛˆŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ›]LH›^][\ËXÙ[\ˆØ\Lˆ^[È‹Ú[™[Ž–ÛšœÞ
VØÛ\ÜÓ˜[YNˆœÚ^™KMH^Y[Y\˜[MÌ\šÎ^Y[Y\˜[MŸJK“ÝÛ™\ˆ™\šYšYY8 %ÛÛˆ—_JW_JKšœÞ
Ü‹ØÛ\ÜÓ˜[YNˆ˜™ËY[Y\˜[MÌ^]Ú]HÝ™\Ž˜™ËY[Y\˜[MÌ‹Ú[™[ŽˆUÐT‘QŸJW_J_J_JNÚYŠK˜]Ø\™Ü™]šY]×ÜÝ]\ÏOOHœ™XYKY›Ü‹\™]šY]ÈŠ\™]\›ˆšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹X[X™\‹ML™ËX[X™\‹MLÎÚYÝË[›Û™H\šÎ˜™ËX[X™\‹NMLÌŒ‹Ú[™[Ž–ÛšœÞ
ØKØÚ[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ”Ø[\È™\šYšXØ][ÛˆŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ›]LH›^][\ËXÙ[\ˆØ\Lˆ^[È‹Ú[™[Ž–ÛšœÞ
˜‹ØÛ\ÜÓ˜[YNˆœÚ^™KMH^X[X™\‹MÌ\šÎ^X[X™\‹MŸJK”™XYH›Üˆ]Ø\™™]šY]È—_JKšœÞÊœ‹ØÛ\ÜÓ˜[YNˆ›]Lˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž–È”ÝX›Z]Y‹[
K˜]Ø\™Ü™]šY]×ÜÝX›Z]YØ]
K‹ˆH›Øˆ\ÈÝ[Ü[ˆ[[HÝÛ™\ˆ™\šYšY\È]ˆ—_JW_JKšœÞ
Ü‹ØÛ\ÜÓ˜[YNˆ˜™ËX[X™\‹ML^X›XÚÈÝ™\Ž˜™ËX[X™\‹ML‹Ú[™[Žˆ“ÕÓ‘Tˆ‘U’QUÈŸJW_J_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KM‹Ú[™[Ž–ÛšœÞ
ÛÚ›ØŽ™_JKÏÛšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^\ÝYžKY[™›Ü™\‹]M‹Ú[™[Ž›šœÞ
™KØ\ÐÚ[ˆLÚ[™[Ž›šœÞÊ‹ÝÎ˜ÙX[ËÉÙKšYKÛYÙ\˜Ú[™[Ž–ÛšœÞ
VßJKˆ™]šY]È[™™\šYžH]Ø\™—_J_J_JN›šœÞ
œ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹]M^\ÛH›Û[YY][H^X[X™\‹NL\šÎ^X[X™\‹LŒ‹Ú[™[Žˆ“ÝÛ™\ˆ›ÝYšXØ][Ûˆ\ÈXÝ]™Kˆ›Èš[˜[˜ÚX[[™›Ü›X][ÛˆÜˆÛÛˆÝ]\È\È™Y[ˆÚ[™ÙYˆŸJW_JW_JNØÛÛœÝÏXJ
‹JOOšŠO–Ë‹‹•‹‹“ÊJWJK˜Yš[\ÈŠKOXJ
‹K
OOžØÛÛœÝPVÕNÑ	‰•T“œ™]›ÚÙSØš™XÝT“
œÜ˜ÊKŠÏO“Ë™š[\Š
ÊOOšÈOOU
J_Kœ™[[Ý™Qš[HŠKXJ\Þ[˜Ê
OOžÚYŠ[Ë›[™Ý]K›[™ÝZ›[™Ý
^ÛŠ•\ØYHÚYÛ™YÛÛ˜XÝ\ÜÚ]›ÛÙ‹[™›ØˆÝÙÜ˜\È™Y›Ü™HÝX›Z][™Ëˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXŠL
NØÛÛœÝ[™]È]J
KÒTÓÔÝš[™Ê
KOVË‹‹›Ë‹‹K‹‹šNÝž^Ø]ØZ]˜Ü™X]J™X[Û›Ý\È‹Ù]NžÙX[ÚY™KšY\Nˆ˜]Ø\™\™]šY]Ë\XÚØYÙH‹^–ÈUÐT‘‘U’QUÈPÒÐQÑH‹ÚYÛ™YÛÛ˜XÝˆ	ÛË›X\
O•]JKš›Ú[Š‹Š_X\ÜÚ]›ÛÙŽˆ	ÝK›X\
O•]JKš›Ú[Š‹Š_X›ØˆÝÙÜ˜\Îˆ	Ú›X\
O•]JKš›Ú[Š‹Š_X”ÝX›Z]YžHØ[\È›ÜˆÝÛ™\ˆ™\šYšXØ][Û‹ˆ\ÈÝX›Z\ÜÚ[ÛˆÙ\È›ÝXÛ\™HH›ØˆÛÛ‹ˆ—Kš›Ú[Š˜
K]Nš‹Ø[\×ÚYšOËšY]XÚY[Î__JK]ØZ]\]J™X[È‹ÚY™KšY]NžØ]Ø\™Ü™]šY]×ÜÝ]\Îˆœ™XYKY›Ü‹\™]šY]È‹]Ø\™Ü™]šY]×ÜÝX›Z]YØ]š‹]Ø\™Ü™]šY]×ÜÝX›Z]YØžNšOËšY]Ø\™Ü™]šY]×ØÛÛ˜XÝØÛÝ[›Ë›[™Ý]Ø\™Ü™]šY]×Ù\ÜÚ]ØÛÝ[K›[™Ý]Ø\™Ü™]šY]×ÜÝ×ØÛÝ[š›[™Ý\]YØ]šŸK™]š[Ý\Ñ]N™_JKK™›Ü‘XXÚ
O•T“œ™]›ÚÙSØš™XÝT“
œÜ˜ÊJKÊ×JKŠ×JKJ×JKŠÜ™Y[X[XÚØYÙHÝX›Z]Y›ÜˆÝÛ™\ˆ™]šY]Ëˆ‹Ý\NˆœÝXØÙ\ÜÈŸJKŠ
_XØ]Ú

^ÛŠ[œÝ[˜Ù[Ùˆ\œ›ÜÕ›Y\ÜØYÙNˆ•H]Ø\™™]šY]ÈXÚØYÙHÛÝ[›Ý™HÝX›Z]Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ_Yš[˜[^ØŠLJ__KœÝX›Z]›Ü”™]šY]ÈŠNÜ™]\›ˆšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹\ÚÞKMŒÌÍHÚYÝË[›Û™H‹Ú[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ”Ø[\È™\šYšXØ][ÛˆŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ^[È‹Ú[™[Ž–ÛšœÞ
˜‹ØÛ\ÜÓ˜[YNˆœÚ^™KMH^\ÚÞKMÌ\šÎ^\ÚÞKMŸJK”ÝX›Z]ÛÛˆ›Øˆ›ÜˆÝÛ™\ˆ™]šY]È—_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ•\È[\ÈHÝÛ™\‹ˆ]Ù\È›ÝÚ[™ÙHH›ØˆÈÛÛ‹[\ˆ™]™[YK™XÛÜ™H^[Y[Üˆ^ÜÙHÝÛ™\ˆXØÛÝ[[™ËˆŸJW_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KMH‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYØ\MÎ™ÜšYXÛÛËLÈ‹Ú[™[Ž–ÛšœÞ
KÚXÛÛŽ›šœÞ
ÙKßJK]Nˆ”ÚYÛ™YÛÛ˜XÝ‹\ØÜš\[ÛŽˆ‘^XÝ]YÝ\ÝÛY\ˆYÜ™Y[Y[‹Y˜]Ø\™XÛÛ˜XÝIÙKšYXš[\Î›ËÛ‘š[\Î˜JO—ÊËŠK›Û‘š[\ÈŠKÛ”™[[Ý™N˜JO‘JËËŠK›Û”™[[Ý™HŠ_JKšœÞ
KÚXÛÛŽ›šœÞ
ËßJK]Nˆ‘\ÜÚ]›ÛÙˆ‹\ØÜš\[ÛŽˆÚXÚË™XÙZ\˜[œÙ™\‹Üˆ^[Y[]šY[˜ÙH‹Y˜]Ø\™Y\ÜÚ]IÙKšYXš[\ÎKÛ‘š[\Î˜JO—Ê‹ŠK›Û‘š[\ÈŠKÛ”™[[Ý™N˜JO‘J‹KŠK›Û”™[[Ý™HŠ_JKšœÞ
KÚXÛÛŽ›šœÞ
ËßJK]Nˆ’›ØˆÝÙÜ˜\È‹\ØÜš\[ÛŽˆ”™\]Z\™Y›Ü\H[™›ØˆØÝ[Y[][Ûˆ‹Y˜]Ø\™\ÝÜËIÙKšYXš[\ÎšÛ‘š[\Î˜JO—ÊKŠK›Û‘š[\ÈŠKÛ”™[[Ý™N˜JO‘JKŠK›Û”™[[Ý™HŠ_JW_JKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^\ÝYžKY[™›Ü™\‹]M‹Ú[™[Ž›šœÞÊ™KÛÛÛXÚÎ”‹\ØX›Y™ËÚ[™[Ž–ÙÏÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÜÙKßJK”ÝX›Z]›ÜˆÝÛ™\ˆ™\šYšXØ][Ûˆ—_J_JW_JW_J_K]Ø\™™]šY]Ô[™[ŠKOXJ
ÚXÛÛŽ™K]N\ØÜš\[ÛŽ›‹Yœ‹š[\ÎšKÛ‘š[\ÎœËÛ”™[[Ý™N›ßJOO›šœÞÊœÙXÝ[Ûˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLÈ›Ý[™Y[È›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™M‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\Ë\Ý\Ø\LÈ‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ›]LH^\š[X\žHÉœÝ™×NœÚ^™KMH‹Ú[™[Ž™_JKšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^\ÛH›Û\Ù[ZX›Û‹Ú[™[ŽJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž›ŸJW_JW_JKšœÞ
SËÚYœ‹š[\ÎšKÛ‘š[\ÎœËÛ”™[[Ý™N›ËÛÛ\XÝˆLX™[˜\ØY	ÝÓÝÙ\Ø\ÙJ
_XJW_JKÜ™Y[X[\ØYŠKÛXJ
Ú›ØŽ™_JOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™ÜšYÜšYXÛÛËLÈØ\Lˆ‹Ú[™[Ž–ÛšœÞ
KÛX™[ˆÛÛ˜XÝ‹˜[YN™K˜]Ø\™Ü™]šY]×ØÛÛ˜XÝØÛÝ[ÏÌJKšœÞ
KÛX™[ˆ‘\ÜÚ]›ÛÙˆ‹˜[YN™K˜]Ø\™Ü™]šY]×Ù\ÜÚ]ØÛÝ[ÏÌJKšœÞ
KÛX™[ˆ”ÝÙÜ˜\È‹˜[YN™K˜]Ø\™Ü™]šY]×ÜÝ×ØÛÝ[ÏÌJW_JKÜ™Y[X[ÛÝ[ÈŠKOXJ
ÛX™[™K˜[YNJOO›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœ›Ý[™Y[Y›Ü™\ˆ™ËX˜XÚÙÜ›Ý[™LÈ^XÙ[\ˆ‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^›ÛX›ÛX[\‹[[\È‹Ú[™[ŽJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Ž™_JW_JKÜ™Y[X[ÛÝ[ŠK›[™]ÈÙ]
È˜]Ø\™‹˜Z[[™Ë[ZY\›ÙXÝ[Ûˆ‹š[›ÚXÙY‹œ^[Y[X\œ˜[™Ù[Y[‹˜˜[[˜ÙKYYH‹œZYZ[‹Y[—JK[XJOO™KÓØØ[TÝš[™Ê™[‹UTÈ‹ÜÝ[Nˆ˜Ý\œ™[˜ÞH‹Ý\œ™[˜ÞNˆ•TÑŸJK›[Û™^HŠK›XJ
Ú›ØŽ™_JOOžØÛÛœÝ\[Š
K\Š
KZ›Ê
KÚK×O^\ÙTÝ]JÝš[™ÊKœ›ÛZ\ÙYØ[[Ý[ÏÈˆŠJKÛË×O^\ÙTÝ]JLJKOYKœØ[\×ÛÝ]ÛÛYOOOHÛÛˆŸKœØ[\×ÛÝ]ÛÛYOOOH›ÜÝŸK˜]Ø\™Ü™]šY]×ÜÝ]\ÏOOH˜\›Ý™YŸ›š\ÊKœÝYÙJNÞ\ÙQY™™XÝ


OOžÜÊÝš[™ÊKœ›ÛZ\ÙYØ[[Ý[ÏÈˆŠJ_KÙKšYKœ›ÛZ\ÙYØ[[Ý[JNØÛÛœÝXJ\Þ[˜Ê
OOžØÛÛœÝZKš[J
OÓ[X™\ŠJNŒÚYŠS[X™\‹š\Ñš[š]J
_
^ÛŠ‘[\ˆH˜[Y›ÛZ\ÙY[[Ý[ÜˆX]™H]›[šËˆ‹Ý\NˆØ\›š[™ÈŸJNÜ™]\›ŸXÊL
NÝž^Ø]ØZ]\]J™X[È‹ÚY™KšY]NžÜ›ÛZ\ÙYØ[[Ý[š\]YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_JKŠ”›ÛZ\ÙY[[Ý[Ø]™YÈHØ[\È›Ü™XØ\Ýˆ‹Ý\NˆœÝXØÙ\ÜÈŸJKŠ
_XØ]Ú
J^ÛŠH[œÝ[˜Ù[Ùˆ\œ›ÜÛK›Y\ÜØYÙNˆ•H›ÛZ\ÙY[[Ý[ÛÝ[›Ý™HØ]™Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ_Yš[˜[^ØÊLJ__KœØ]™HŠNÜ™]\›ˆšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹\ÚÞKMŒÌÍHÚYÝË[›Û™H‹Ú[™[Ž–ÛšœÞ
ØKØÛ\ÜÓ˜[YNˆœ‹Lˆ‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ”Ø[\È›Ü™XØ\ÝŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ›]LH›^][\ËXÙ[\ˆØ\Lˆ^[È‹Ú[™[Ž–ÛšœÞ
ËØÛ\ÜÓ˜[YNˆœÚ^™KMH^\ÚÞKMÌ\šÎ^\ÚÞKMŸJK”›ÛZ\ÙY[[Ý[—_JW_JKšœÞ
Ü‹Ý˜\šX[ˆ›Ý][™H‹Ú[™[ŽOÈ’TÕÔ’PÐSŽˆ“ÔSˆTSS‘HŸJW_J_JKšœÞ
‹ØÚ[™[ŽOÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆØ\M›Ý[™Y[È›Ü™\ˆ™Ë[]]YÍM‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^Lž›ÛX›ÛX[\‹[[\È‹Ú[™[Ž[
[X™\ŠKœ›ÛZ\ÙYØ[[Ý[
_
_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›]LH^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ“ÜšYÚ[˜[Ø[\È›Ü™XØ\ÝˆHÙ™šXÚX[ÛÛ˜XÝ˜[YH\ÈÙ\Ù\\˜][H[ˆHÝÛ™\ˆYÙ\‹ˆŸJW_JKšœÞ
Ó™KØÛ\ÜÓ˜[YNˆœÚ^™KMHÚš[šËL^[]]YY›Ü™YÜ›Ý[™ŸJW_JN›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛØ\MÛN™›^\›ÝÈÛNš][\ËY[™‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LHÜXÙK^KLˆ‹Ú[™[Ž–ÛšœÞ
ÚKÚ[›ÜŽ˜›ÛZ\ÙYX[[Ý[IÙKšYXÚ[™[Žˆ[[Ý[Ý\ÝÛY\ˆØ^\È^H[[™ÈÜ[™ŸJKšœÞ
‹ÚY˜›ÛZ\ÙYX[[Ý[IÙKšYX\Nˆ›[X™\ˆ‹Z[ŽˆŒ‹Ý\ˆŒŒH‹˜[YNšKÛÚ[™ÙN˜JOœÊ\™Ù]˜[YJK›ÛÚ[™ÙHŠKXÙZÛ\ŽˆŒŒŸJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ•\ÙY›Üˆ^XÝY\Ø[\È™\Ü[™ÈÛ›Kˆ]Ù\È›ÝX\šÈH›ØˆÛÛˆÜˆ™XÛÛYHHÚYÛ™YÛÛ˜XÝ˜[YKˆŸJW_JKšœÞÊ™KÛÛÛXÚÎ™‹\ØX›Y›ËÚ[™[Ž–ÛÏÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ÛËßJK”Ø]™H›ÛZ\ÙY[[Ý[—_JW_J_JW_J_K”›ÛZ\ÙY[[Ý[[™[ŠKXJ
Ú›ØŽ™_JOOžØÛÛœÝ\[Š
K\Š
KZ›Ê
KÚK×O^\ÙTÝ]JLJKÏHHYK™[×ØØ\™ÚYÏXJ\Þ[˜Ê
OOžÜÊL
NÝž^ÚYŠÊ^ØÛÛœÝOX]ØZ]œÞ[˜Õ™[ÓYYXJKšY
NÛŠ	ÝK˜ÛÝ[H™[È]XÚY[	ÝK˜ÛÝ[OOLOÈˆŽˆœÈŸH[™^Y˜Ý\NˆœÝXØÙ\ÜÈŸJ_Y[ÙH]ØZ]™[œÝ\™U™[ÐØ\™
KšY
KŠ•™[È›ØˆØ\™Ü™X]Y[™[šÙYˆ‹Ý\NˆœÝXØÙ\ÜÈŸJNÜŠ
_XØ]Ú
J^ÛŠH[œÝ[˜Ù[Ùˆ\œ›ÜÝK›Y\ÜØYÙNˆ•™[ÈÛÝ[›Ý™H\]Yˆ‹Ý\Nˆ™\œ›ÜˆŸJ_Yš[˜[^ÜÊLJ__Kœ[ˆŠNÜ™]\›ˆšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹\ÚÞKMŒÌÍHÚYÝË[›Û™H‹Ú[™[Ž–ÛšœÞ
ØKØÛ\ÜÓ˜[YNˆœ‹LÈ‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\Ë\Ý\\ÝYžKX™]ÙY[ˆØ\LÈ‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÚ[™[Ž–ÛšœÞ
ÚKØÚ[™[Žˆ’›ØˆYYXHÝÜ˜YÙHŸJKšœÞÊØKØÛ\ÜÓ˜[YNˆ›]LH›^][\ËXÙ[\ˆØ\Lˆ^[È‹Ú[™[Ž–ÛšœÞ
ËØÛ\ÜÓ˜[YNˆœÚ^™KMH^\ÚÞKMÌ\šÎ^\ÚÞKMŸJK•™[ÈÝÈš[H—_JW_JKšœÞ
Ü‹Ý˜\šX[›ÏÈ™Y˜][Žˆ›Ý][™H‹Ú[™[Ž›ÏÈ“S’ÑQŽˆ”S‘S‘ÈŸJW_J_JKšœÞÊ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\][\ËXÙ[\ˆ\ÝYžKX™]ÙY[ˆØ\LÈ›Ü™\‹]M‹Ú[™[Ž–ÛšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ›X^]Ë^^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ”ÝÜÈ\™HÛÛ\™\ÜÙY™Y›Ü™H\ØYÝÜ™YÛˆ\È›Ø‰ÜÈ™[ÈØ\™[™[™^Y\™H›Üˆ˜\Ý™]šY]˜[ˆŸJKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^]Ü˜\Ø\Lˆ‹Ú[™[Ž–ÙK™[×ØØ\™Ý\›ÛšœÞ
™KØ\ÐÚ[ˆL\Nˆ˜]Ûˆ‹˜\šX[ˆ›Ý][™H‹Ú[™[Ž›šœÞÊ˜H‹Ú™YŽ™K™[×ØØ\™Ý\›\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ú[™[Ž–ÛšœÞ
œÙKßJKˆÜ[ˆ™[Èš[H—_J_JN›[šœÞÊ™KÝ\Nˆ˜]Ûˆ‹ÛÛXÚÎ˜Ë\ØX›YšKÚ[™[Ž–ÚOÛšœÞ
XKØÛ\ÜÓ˜[YNˆ˜[š[X]K\Ü[ˆŸJN›šœÞ
ËßJKÏÈ’[™^™[ÈÝÜÈŽˆÜ™X]H™[Èš[H—_JW_JW_JW_J_K•™[ÓYYXT[™[ŠKIH•[Xœ™[HÔ“H
Î‹ËÙÙ][Ý\[Xœ™[K˜ÛÛJH‹ÛXJ
Ú›ØŽ™_JOOžØÛÛœÝ[[Š
KYOÏÝÜ‹WO^\ÙTÝ]J[
KÜË×O^\ÙTÝ]JLJKØËWO^\ÙTÝ]JLJKÙ]N™ŸO[
˜ÛÛ\[šY\È‹ÚY›Ë˜ÛÛ\[žWÚYKÙ[˜X›YˆH[Ë˜ÛÛ\[žWÚYJKXJ\Þ[˜Ê
OOžØÛÛœÝÏYËžš\ÛÙOË›X]Ú
×Í_KÊOË–ÌNÚYŠÊ^ÛÊL
KJLJNÝž^ØÛÛœÝX]ØZ]™]Ú
Î‹ËØ\Kžš\ÜÝ[K\ËÝ\ËÉÙßX
NÚYŠX‹›ÚÊ]›ÝÈ™]È\œ›ÜŠ“ØØ][Ûˆ[˜]˜Z[X›HŠNØÛÛœÝÏJ]ØZ]‹šœÛÛŠ
JKœXÙ\ÏË–ÌNÚYŠWÊ]›ÝÈ™]È\œ›ÜŠ“ØØ][Ûˆ[˜]˜Z[X›HŠNØÛÛœÝOWË›]]YKWË›Û™Ú]YKX]ØZ]™]Ú
Î‹ËØ\KÙX]\‹™ÛÝ‹ÜÚ[ËÉÑ_K	ÔŸXÚXY\œÎžÐXØÙ\ˆ˜\XØ][Û‹ÙÙ[ÊÚœÛÛˆ‹•\Ù\‹PYÙ[Ž™I_JNÚYŠZ‹›ÚÊ]›ÝÈ™]È\œ›ÜŠ‘›Ü™XØ\Ý[˜]˜Z[X›HŠNØÛÛœÝOX]ØZ]‹šœÛÛŠ
KÕOX]ØZ]›ÛZ\ÙK˜[
Ù™]Ú
Kœ›Ü\Y\Ë™›Ü™XØ\ÝÚXY\œÎžÐXØÙ\ˆ˜\XØ][Û‹ÙÙ[ÊÚœÛÛˆ‹•\Ù\‹PYÙ[Ž™I_JK™]Ú
Î‹ËØ\KÙX]\‹™ÛÝ‹Ø[\ËØXÝ]™OÜÚ[IÑ_K	ÔŸXÚXY\œÎžÐXØÙ\ˆ˜\XØ][Û‹ÙÙ[ÊÚœÛÛˆ‹•\Ù\‹PYÙ[Ž™I_JWJNÚYŠU›ÚÊ]›ÝÈ™]È\œ›ÜŠ‘›Ü™XØ\Ý[˜]˜Z[X›HŠNØÛÛœÝJ]ØZ]šœÛÛŠ
JKœ›Ü\Y\ÏËœ\š[ÙÏË–ÌNÚYŠT
]›ÝÈ™]È\œ›ÜŠ‘›Ü™XØ\Ý[˜]˜Z[X›HŠNØÛÛœÝÏQ›ÚÏØ]ØZ]šœÛÛŠ
N›[ÚJÝ[\\˜]\™N”[\\˜]\™K[š]”[\\˜]\™U[š]ÚÜ›Ü™XØ\Ý”œÚÜ›Ü™XØ\ÝØØ][ÛŽ˜	×ÖÈœXÙH˜[YH—_K	×ÖÈœÝ]HX˜œ™]šX][Ûˆ—_X[\ÛÝ[šÏË™™X]\™\ÏË›[™ÝÏÌ[\\›šÏË™™X]\™\ÏË–ÌOËœ›Ü\Y\ÏËÙXŸJ_XØ]ÚÝJL
_Yš[˜[^ÛÊLJ___K›ØYÙX]\ˆŠNÚYŠ\ÙQY™™XÝ


OOžÚ

_KÙËžš\ÛÙWJKYËžš\ÛÙJ\™]\›ˆ[ÚYŠÉ‰ˆ\Š\™]\›ˆšœÞÊÜ‹Ý˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆšNØ\LKHLÈ‹Ú[™[Ž–ÛšœÞ
XKØÛ\ÜÓ˜[YNˆœÚ^™KLËH[š[X]K\Ü[ˆŸJKˆÙX]\¸ )ˆ—_JNÚYŠß\Š\™]\›ˆšœÞÊ™KÝ\Nˆ˜]Ûˆ‹˜\šX[ˆ›Ý][™H‹Ú^™NˆœÛH‹ÛÛXÚÎšÚ[™[Ž–ÛšœÞ
ËßJKˆØYÙX]\ˆ—_JNØÛÛœÝO[šœÞÊ‘œ˜YÛY[ØÚ[™[Ž–Ü‹˜[\ÛÝ[ŒÛšœÞ
ÍËØÛ\ÜÓ˜[YNˆœÚ^™KLËH^X[X™\‹MŒŸJN›šœÞ
ÜÙKØÛ\ÜÓ˜[YNˆœÚ^™KLËHŸJK‹[\\˜]\™K°¬‹‹[š]šœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆšY[ˆX^]ËLŽ[˜Ø]HÛNš[›[™H‹Ú[™[Žœ‹œÚÜ›Ü™XØ\ÝJK‹˜[\ÛÝ[ŒØ0­È	Ü‹˜[\ÛÝ[H[\	Ü‹˜[\ÛÝ[OOLOÈˆŽˆœÈŸX›[_JNÜ™]\›ˆ‹˜[\ÛÝ[Œ	‰œ‹˜[\\›ÛšœÞ
Ü‹Ø\ÐÚ[ˆL˜\šX[ˆ›Ý][™H‹]N˜	Ü‹›ØØ][ÛŸNˆÜ[ˆHXÝ]™HÙX]\ˆ[\Û\ÜÓ˜[YNˆšNØ\LKH›Ü™\‹X[X™\‹MLÍŒLÈ^X[X™\‹NÝ™\Ž˜™ËX[X™\‹ML\šÎ^X[X™\‹LÌ\šÎšÝ™\Ž˜™ËX[X™\‹NML‹Ú[™[Ž›šœÞ
˜H‹Ú™YŽœ‹˜[\\›\™Ù]ˆ—Ø›[šÈ‹™[ˆ››Ü™Y™\œ™\ˆ‹Ú[™[Ž›_J_JN›šœÞ
Ü‹Ý˜\šX[ˆ›Ý][™H‹]N˜	Ü‹›ØØ][ÛŸNˆ	Ü‹œÚÜ›Ü™XØ\ÝXÛ\ÜÓ˜[YNˆšNØ\LKH›Ü™\‹\ÚÞKMŒÍLÈ^\ÚÞKN\šÎ^\ÚÞKLÌ‹Ú[™[Ž›_J_K’›Ø•ÙX]\˜YÙHŠK™OXJ
ÛÜ[Ž™KYJOOžØÛÛœÝV˜J
KXJ

OOžÛŠ›\Ý‹™X[ÈŠ_Kš[™PÛÜÙHŠNÜ™]\›ˆšœÞ
[ËÛÜ[Ž™KÛ“Ü[Ú[™ÙN˜JOOˆZI‰œŠ
K›Û“Ü[Ú[™ÙHŠKÚ[™[Ž›šœÞ
›ËØÛ\ÜÓ˜[YNˆ›Î›X^]ËMMÝ™\™›ÝË^KX]]ÈX^ZNKÌLÜLKÌŒ˜[œÛ]K^KL‹Ú[™[ŽÛšœÞ
šËÚYÚ[™[Ž›šœÞ
›ßJ_JN›[J_J_K‘X[ÚÝÈŠK›XJ

OOžØÛÛœÝOT™J
KÙX[ÝYÙ\ÎX[Ø]YÛÜšY\Î›ŸOUÜŠ
K[[Š
NÜ™]\›ˆÛšœÞ
‘œ˜YÛY[ØÚ[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆœÜXÙK^KLˆ‹Ú[™[Ž–Ü‹˜\˜Ú]™YØ]ÛšœÞ
ÛßJN›[šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^LH‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^\ÝYžKX™]ÙY[ˆ][\Ë\Ý\X‹N‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Z[‹]ËL][\ËXÙ[\ˆØ\LÈ‹Ú[™[Ž–ÛšœÞ
KÜÛÝ\˜ÙNˆ˜ÛÛ\[žWÚY‹™Y™\™[˜ÙNˆ˜ÛÛ\[šY\È‹[šÎˆœÚÝÈ‹Ú[™[Ž›šœÞ
˜ËßJ_JKšœÞ
šˆ‹ØÛ\ÜÓ˜[YNˆ[˜Ø]H^Lž›Û\Ù[ZX›Û‹Ú[™[Žœ‹›˜[Y_JW_JKšœÞ
ÛÚ›ØŽœŸJKšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YN˜›^Ø\Lˆ	Ü‹˜\˜Ú]™YØ]ÈˆŽˆœ‹LLˆŸXÚ[™[Žœ‹˜\˜Ú]™YØ]ÛšœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
[Ü™XÛÜ™œŸJKšœÞ
ËßJW_JN›šœÞÊ‘œ˜YÛY[ØÚ[™[Ž–ÛšœÞ
\Ü™\ÛÝ\˜ÙNˆš›Ø—ÛYÙ\ˆ‹XÝ[ÛŽˆ›\Ý‹Ú[™[Ž›šœÞ
™KØ\ÐÚ[ˆLÚ^™NˆœÛH‹˜\šX[ˆœÙXÛÛ™\žH‹Ú[™[Ž›šœÞÊ‹ÝÎ˜ÙX[ËÉÜ‹šYKÛYÙ\˜Ú[™[Ž–ÛšœÞ
UßJKˆÝÛ™\ˆYÙ\ˆ—_J_J_JKšœÞ
Ü™XÛÜ™œŸJKšœÞ
‹ßJW_J_JW_JK‹˜\˜Ú]™YØ]Û[›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›KMÜXÙK^KM‹Ú[™[Ž–ÛšœÞ
›Ú›ØŽœŸJKšœÞ
ÛÚ›ØŽœŸJKšœÞ
ÛÚ›ØŽœŸJKšœÞ
Ú›ØŽœŸJKšœÞÊÛ‹ØÛ\ÜÓ˜[YNˆ˜›Ü™\‹\š[X\žKÌHÚYÝË[›Û™H‹Ú[™[Ž–ÛšœÞÊØKØÚ[™[Ž–ÛšœÞÊÚKØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
œÙKØÛ\ÜÓ˜[YNˆœÚ^™KMŸJKˆØ[Ë^Ë[XZ[ËYY][™ÜË[™›Øˆ\]\È—_JKšœÞ
ØKØÚ[™[ŽˆÝ\ÝÛY\ˆ[\˜XÝ[Ûˆ›Ý\›˜[ŸJKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛH^[]]YY›Ü™YÜ›Ý[™‹Ú[™[Žˆ‘]™\žH[žH™XÙZ]™\È[ˆ]]ÛX]XÈÙ[˜[[YH[Y\Ý[\ˆÝY™ˆØ[ˆY[™\]H[šY\ÎÈÛ›HHÝÛ™\ˆØ[ˆ[]H[KˆŸJW_JKšœÞ
‹ØÚ[™[Ž›šœÞ
ËÜ™\ÛÝ\˜ÙNˆ™X[Û›Ý\È‹š[\ŽžÙX[ÚYœ‹šYKÛÜžÙšY[ˆ™]H‹Ü™\Žˆ‘TÐÈŸK\”YÙNŒK\ØX›TÞ[˜ÕÚ]ØØ][ÛŽˆLÝÜ™RÙ^NˆLK[\N›šœÞ
NKÜ™Y™\™[˜ÙNˆ™X[È‹ØÚÑ]NˆLXÙZÛ\Žˆ”™XÛÜ™HØ[^[XZ[YY][™ËÜˆÝ\ˆÝ\ÝÛY\ˆ[\˜XÝ[ÛˆŸJKÚ[™[Ž›šœÞ
KÜ™Y™\™[˜ÙNˆ™X[È‹ØÚÑ]NˆLXÙZÛ\Žˆ”™XÛÜ™HØ[^[XZ[YY][™ËÜˆÝ\ˆÝ\ÝÛY\ˆ[\˜XÝ[ÛˆŸJ_J_JW_JKšœÞ
Ú›ØŽœŸJW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^Ø\NKM‹Ú[™[Ž–ÛšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ\‹LL‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™˜XÚÚ[™Ë]ÚYH‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë™^XÝYØÛÜÚ[™×Ù]HŠ_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\Lˆ‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH‹Ú[™[Ž˜\ÙJ™]È]J‹™^XÝYØÛÜÚ[™×Ù]JJOØŽYJ‹™^XÝYØÛÜÚ[™×Ù]JN™Jœ™\ÛÝ\˜Ù\Ë™X[Ëš[˜[YÙ]HŠ_JK™]È]J‹™^XÝYØÛÜÚ[™×Ù]JO™]È]OÛšœÞ
Ü‹Ý˜\šX[ˆ™\ÝXÝ]™H‹Ú[™[Ž™J˜Ü›K˜ÛÛ[[Û‹œ\ÝŠ_JN›[_JW_JK‹˜Ø]YÛÜžI‰›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ\‹LL‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™˜XÚÚ[™Ë]ÚYH‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë˜Ø]YÛÜžHŠ_JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH‹Ú[™[Ž›‹™š[™
OOšK˜[YOOO\‹˜Ø]YÛÜžJOË›X™[ÏÜ‹˜Ø]YÛÜž_JW_JKšœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛ\‹LL‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™˜XÚÚ[™Ë]ÚYH‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[ËœÝYÙHŠ_JKšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^\ÛH‹Ú[™[Ž™”Ê‹œÝYÙJ_JW_JW_JKH\‹˜ÛÛXÝÚYÏË›[™Ý	‰›šœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›KM‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^›^XÛÛZ[‹ZLLˆ\‹LL‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™˜XÚÚ[™Ë]ÚYH‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë˜ÛÛXÝÚYÈŠ_JKšœÞ
™KÜÛÝ\˜ÙNˆ˜ÛÛXÝÚYÈ‹™Y™\™[˜ÙNˆ˜ÛÛXÝ×ÜÝ[[X\žH‹Ú[™[Ž›šœÞ
[ßJ_JW_J_JK‹™\ØÜš\[Û‰‰›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ›KMÚ]\ÜXÙK\™K[[™H‹Ú[™[Ž–ÛšœÞ
œÜ[ˆ‹ØÛ\ÜÓ˜[YNˆ^^È^[]]YY›Ü™YÜ›Ý[™˜XÚÚ[™Ë]ÚYH‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë™\ØÜš\[ÛˆŠ_JKšœÞ
œ‹ØÛ\ÜÓ˜[YNˆ^\ÛHXY[™ËMˆ‹Ú[™[Žœ‹™\ØÜš\[ÛŸJW_JW_JW_J_JN›[K‘X[ÚÝÐÛÛ[ŠKÛXJ

OOžØÛÛœÝOT™J
NÜ™]\›ˆšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ˜™Ë[Ü˜[™ÙKMLMˆKM‹Ú[™[Ž›šœÞ
šÈ‹ØÛ\ÜÓ˜[YNˆ^[È›ÛX›Û^]Ú]H‹Ú[™[Ž™Jœ™\ÛÝ\˜Ù\Ë™X[Ë˜\˜Ú]™Y]HŠ_J_J_K\˜Ú]™Y]HŠKXJ
Ü™XÛÜ™™_JOOžØÛÛœÝT™J
KÛ—ORÛ

KV˜J
KO\Š
KÏZ›Ê
KÏXJ

OOžÛŠ™X[È‹ÚY™KšY]NžØ\˜Ú]™YØ]›™]È]J
KÒTÓÔÝš[™Ê
_K™]š[Ý\Ñ]N™_KÛÛ”ÝXØÙ\ÜÎ˜J

OOžÜŠ›\Ý‹™X[ÈŠKJœ™\ÛÝ\˜Ù\Ë™X[Ë˜\˜Ú]™YœÝXØÙ\ÜÈ‹Ý\Nˆš[™›È‹[™ØX›NˆL_JKÊ
_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜J

OOžÚJœ™\ÛÝ\˜Ù\Ë™X[Ë˜\˜Ú]™Y™\œ›Üˆ‹Ý\Nˆ™\œ›ÜˆŸJ_K›Û‘\œ›ÜˆŠ_J_Kš[™PÛXÚÈŠNÜ™]\›ˆšœÞÊ™KÛÛÛXÚÎ›ËÚ^™NˆœÛH‹˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LˆNH‹Ú[™[Ž–ÛšœÞ
Ì™KØÛ\ÜÓ˜[YNˆËMMŸJK
œ™\ÛÝ\˜Ù\Ë™X[Ë˜\˜Ú]™Y˜XÝ[ÛˆŠW_J_K\˜Ú]™P]ÛˆŠK[XJ
Ü™XÛÜ™™_JOOžØÛÛœÝT™J
K\[Š
KV˜J
KO\Š
KÏZ›Ê
KÛ]]]N›ßOX[
Û]]][Û‘›Ž˜J

OO›‹[˜\˜Ú]™QX[
JK›]]][Û‘›ˆŠKÛ”ÝXØÙ\ÜÎ˜J

OOžÜŠ›\Ý‹™X[ÈŠKJœ™\ÛÝ\˜Ù\Ë™X[Ë[˜\˜Ú]™YœÝXØÙ\ÜÈ‹Ý\Nˆš[™›È‹[™ØX›NˆL_JKÊ
_K›Û”ÝXØÙ\ÜÈŠKÛ‘\œ›ÜŽ˜J

OOžÚJœ™\ÛÝ\˜Ù\Ë™X[Ë[˜\˜Ú]™Y™\œ›Üˆ‹Ý\Nˆ™\œ›ÜˆŸJ_K›Û‘\œ›ÜˆŠ_JKÏXJ

OOžÛÊ
_Kš[™PÛXÚÈŠNÜ™]\›ˆšœÞÊ™KÛÛÛXÚÎ˜ËÚ^™NˆœÛH‹˜\šX[ˆ›Ý][™H‹Û\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆØ\LˆNH‹Ú[™[Ž–ÛšœÞ
L™KØÛ\ÜÓ˜[YNˆËMMŸJK
œ™\ÛÝ\˜Ù\Ë™X[Ë[˜\˜Ú]™Y˜XÝ[ÛˆŠW_J_K•[˜\˜Ú]™P]ÛˆŠKXJOOžØÛÛœÝT™J
KÙš[\•˜[Y\Î›‹\Ü^YYš[\œÎœ‹Ù]š[\œÎš_OQTÙJ
KÚY[]NœßOSŠ
KÏXJ

OOžØÛÛœÝÏ^Ë‹‹›ŸNÝ\[Ùˆ‹œØ[\×ÚYHÙ[]HËœØ[\×ÚY˜ËœØ[\×ÚY\É‰œÏËšYJËŠ_Kš[™PÚ[™ÙHŠNÜ™]\›ˆšœÞ
™]ˆ‹ØÛ\ÜÓ˜[YNˆ›]X]]È‹L‹ŒH‹Ú[™[Ž›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆ™›^][\ËXÙ[\ˆÜXÙK^Lˆ‹Ú[™[Ž–ÛšœÞ
KÚYˆ›Û›K[Z[™H‹ÚXÚÙY\[Ùˆ‹œØ[\×ÚYH‹ÛÚXÚÙYÚ[™ÙN›ßJKšœÞ
ÚKÚ[›ÜŽˆ›Û›K[Z[™H‹Ú[™[Ž
œ™\ÛÝ\˜Ù\Ë˜ÛÛ\[šY\Ë™š[\œË›Û›WÛZ[™H‹×Îˆ“Û›HÛÛ\[šY\ÈHX[˜YÙHŸJ_JW_J_J_K“Û›SZ[™R[œ]ŠK[XJ

OOžØÛÛœÝÚY[]N™_OSŠ
KÙX[Ø]YÛÜšY\ÎOUÜŠ
KT™J
NÚYŠYJ\™]\›ˆ[ØÛÛœÝVÛšœÞ
ÔËÜÛÝ\˜ÙNˆœH‹[Ø^\ÓÛŽˆLJKšœÞ
‹ÜÛÝ\˜ÙNˆ˜ÛÛ\[žWÚY‹™Y™\™[˜ÙNˆ˜ÛÛ\[šY\È‹Ú[™[Ž›šœÞ
\ÛX™[ˆLKXÙZÛ\Ž›Šœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë˜ÛÛ\[žWÚYŠ_J_JKšœÞ
	ÜÛÝ\˜ÙNˆ˜Ø]YÛÜžH‹X™[ˆœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë˜Ø]YÛÜžH‹Ú[™[Ž›šœÞ
ËÜÛÝ\˜ÙNˆ˜Ø]YÛÜžH‹X™[ˆLK[\U^ˆœ™\ÛÝ\˜Ù\Ë™X[Ë™šY[Ë˜Ø]YÛÜžH‹ÚÚXÙ\ÎÜ[Û•^ˆ›X™[‹Ü[Û•˜[YNˆ˜[YHŸJ_JKšœÞ
ÜÛÝ\˜ÙNˆœØ[\×ÚY‹[Ø^\ÓÛŽˆLJWNÜ™]\›ˆšœÞ
Ó‹Ü\”YÙNŒLš[\ŽžÈ˜\˜Ú]™YØ]\ÈŽ›[K]NˆLKÛÜžÙšY[ˆš[™^‹Ü™\Žˆ‘TÐÈŸKš[\œÎœ‹XÝ[ÛœÎ›šœÞ
›ßJKYÚ[˜][ÛŽ›[Ú[™[Ž›šœÞ
ßJ_J_K‘X[\ÝŠKXJ

OOžØÛÛœÝOQZJ
KXœÊ‹ÙX[ËØÜ™X]H‹Kœ]˜[YJKXœÊ‹ÙX[ËÎšYÜÚÝÈ‹Kœ]˜[YJKXœÊ‹ÙX[ËÎšY‹Kœ]˜[YJKÙ]NšK\Ô[™[™ÎœËš[\•˜[Y\Î›ßOV›Š
KÏ[É‰“Øš™XÝšÙ^\ÊÊK›[™ÝŒÜ™]\›ˆÏÛ[ˆZOË›[™Ý	‰ˆXÏÛšœÞ
‘œ˜YÛY[ØÚ[™[Ž›šœÞÊØÚ[™[Ž–ÛšœÞ
™KÛÜ[ŽˆH[‹Y›Ëœ\˜[\ËšYJKšœÞ
Û™KßJW_J_JN›šœÞÊ™]ˆ‹ØÛ\ÜÓ˜[YNˆËY[‹Ú[™[Ž–ÛšœÞ
[ßJKšœÞ
Û™KßJKšœÞ
YKÛÜ[ŽˆH]JKšœÞ
ÛÛÜ[ŽˆH\‰‰ˆ]YœËœ\˜[\ËšYJKšœÞ
™KÛÜ[ŽˆH[‹Y›Ëœ\˜[\ËšYJW_J_K‘X[^[Ý]ŠK›XJ

OO›šœÞÊÓ‹ØÚ[™[Ž–ÛšœÞ
YKßJKšœÞ
ÐËßJKšœÞ
™KØ\ÐÚ[ˆLÚ[™[Ž›šœÞÊ‹ÝÎˆ‹Û™]ËZ›Øˆ‹Ú[™[Ž–ÛšœÞ
›ßJKˆ™]È›Øˆ—_J_JW_JK‘X[XÝ[ÛœÈŠK	XJ
ØÚ[™[Ž™_JOO™K•Ü˜\\‘šY[ŠK[SØš™XÝ™œ™Y^™JØš™XÝ™Yš[™T›Ü\J××Ü›Ý××Î›[Y˜][“[KÞ[X›ÛÔÝš[™ÕYËÝ˜[YNˆ“[Ù[HŸJJNÂ