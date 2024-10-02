var ft=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(ft(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},g=(t,e,s,r)=>(ft(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var y=(t,e,s)=>(ft(t,e,"access private method"),s);import{j as U,r as f}from"./index-4a73c7d0.js";import{S as Wt,r as C,s as pt,b as st,n as Yt,i as Qt,c as $t,t as Zt,f as Gt,d as Jt,e as Ft,g as Mt,h as Kt,j as Xt}from"./queryClient-4a473a86.js";function qt(t,e={},s=[]){return[t,...s.filter(Boolean),...Object.entries(e).filter(([r,o])=>!!o).map(([r])=>r)].join(" ")}const te="_loader_itbzf_25",ee="_loader__item_itbzf_31",se="_second_itbzf_1",re="_third_itbzf_1",ie="_first_itbzf_1",tt={loader:te,loader__item:ee,second:se,third:re,first:ie},ae=()=>U.jsxs("div",{className:tt.loader,children:[U.jsx("div",{className:tt.loader__item}),U.jsx("div",{className:tt.loader__item}),U.jsx("div",{className:tt.loader__item})]}),fs=({isLoading:t,isDisabled:e=t,children:s,className:r="",kind:o="primary",type:i,...n})=>U.jsx("button",{disabled:e,type:i,className:qt("btn",{},[r]),"data-kind":o,...n,children:t?U.jsx(ae,{}):s});var w,h,H,x,F,M,O,V,z,A,T,k,D,B,P,L,W,mt,Y,bt,Z,gt,G,yt,J,vt,K,xt,X,wt,nt,zt,Ut,oe=(Ut=class extends Wt{constructor(e,s){super();b(this,P);b(this,W);b(this,Y);b(this,Z);b(this,G);b(this,J);b(this,K);b(this,X);b(this,nt);b(this,w,void 0);b(this,h,void 0);b(this,H,void 0);b(this,x,void 0);b(this,F,void 0);b(this,M,void 0);b(this,O,void 0);b(this,V,void 0);b(this,z,void 0);b(this,A,void 0);b(this,T,void 0);b(this,k,void 0);b(this,D,void 0);b(this,B,new Set);this.options=s,g(this,w,e),g(this,O,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(a(this,h).addObserver(this),Tt(a(this,h),this.options)?y(this,P,L).call(this):this.updateResult(),y(this,G,yt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Et(a(this,h),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Et(a(this,h),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,y(this,J,vt).call(this),y(this,K,xt).call(this),a(this,h).removeObserver(this)}setOptions(e,s){const r=this.options,o=a(this,h);if(this.options=a(this,w).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof C(this.options.enabled,a(this,h))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");y(this,X,wt).call(this),a(this,h).setOptions(this.options),r._defaulted&&!pt(this.options,r)&&a(this,w).getQueryCache().notify({type:"observerOptionsUpdated",query:a(this,h),observer:this});const i=this.hasListeners();i&&kt(a(this,h),o,this.options,r)&&y(this,P,L).call(this),this.updateResult(s),i&&(a(this,h)!==o||C(this.options.enabled,a(this,h))!==C(r.enabled,a(this,h))||st(this.options.staleTime,a(this,h))!==st(r.staleTime,a(this,h)))&&y(this,W,mt).call(this);const n=y(this,Y,bt).call(this);i&&(a(this,h)!==o||C(this.options.enabled,a(this,h))!==C(r.enabled,a(this,h))||n!==a(this,D))&&y(this,Z,gt).call(this,n)}getOptimisticResult(e){const s=a(this,w).getQueryCache().build(a(this,w),e),r=this.createResult(s,e);return le(this,r)&&(g(this,x,r),g(this,M,this.options),g(this,F,a(this,h).state)),r}getCurrentResult(){return a(this,x)}trackResult(e,s){const r={};return Object.keys(e).forEach(o=>{Object.defineProperty(r,o,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(o),s==null||s(o),e[o])})}),r}trackProp(e){a(this,B).add(e)}getCurrentQuery(){return a(this,h)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=a(this,w).defaultQueryOptions(e),r=a(this,w).getQueryCache().build(a(this,w),s);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,s))}fetch(e){return y(this,P,L).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),a(this,x)))}createResult(e,s){var Dt;const r=a(this,h),o=this.options,i=a(this,x),n=a(this,F),l=a(this,M),u=e!==r?e.state:a(this,H),{state:p}=e;let d={...p},v=!1,m;if(s._optimisticResults){const R=this.hasListeners(),ht=!R&&Tt(e,s),Vt=R&&kt(e,r,s,o);(ht||Vt)&&(d={...d,...Jt(p.data,e.options)}),s._optimisticResults==="isRestoring"&&(d.fetchStatus="idle")}let{error:I,errorUpdatedAt:St,status:$}=d;if(s.select&&d.data!==void 0)if(i&&d.data===(n==null?void 0:n.data)&&s.select===a(this,V))m=a(this,z);else try{g(this,V,s.select),m=s.select(d.data),m=Ft(i==null?void 0:i.data,m,s),g(this,z,m),g(this,O,null)}catch(R){g(this,O,R)}else m=d.data;if(s.placeholderData!==void 0&&m===void 0&&$==="pending"){let R;if(i!=null&&i.isPlaceholderData&&s.placeholderData===(l==null?void 0:l.placeholderData))R=i.data;else if(R=typeof s.placeholderData=="function"?s.placeholderData((Dt=a(this,A))==null?void 0:Dt.state.data,a(this,A)):s.placeholderData,s.select&&R!==void 0)try{R=s.select(R),g(this,O,null)}catch(ht){g(this,O,ht)}R!==void 0&&($="success",m=Ft(i==null?void 0:i.data,R,s),v=!0)}a(this,O)&&(I=a(this,O),m=a(this,z),St=Date.now(),$="error");const ct=d.fetchStatus==="fetching",ut=$==="pending",dt=$==="error",It=ut&&ct,jt=m!==void 0;return{status:$,fetchStatus:d.fetchStatus,isPending:ut,isSuccess:$==="success",isError:dt,isInitialLoading:It,isLoading:It,data:m,dataUpdatedAt:d.dataUpdatedAt,error:I,errorUpdatedAt:St,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>u.dataUpdateCount||d.errorUpdateCount>u.errorUpdateCount,isFetching:ct,isRefetching:ct&&!ut,isLoadingError:dt&&!jt,isPaused:d.fetchStatus==="paused",isPlaceholderData:v,isRefetchError:dt&&jt,isStale:_t(e,s),refetch:this.refetch}}updateResult(e){const s=a(this,x),r=this.createResult(a(this,h),this.options);if(g(this,F,a(this,h).state),g(this,M,this.options),a(this,F).data!==void 0&&g(this,A,a(this,h)),pt(r,s))return;g(this,x,r);const o={},i=()=>{if(!s)return!0;const{notifyOnChangeProps:n}=this.options,l=typeof n=="function"?n():n;if(l==="all"||!l&&!a(this,B).size)return!0;const c=new Set(l??a(this,B));return this.options.throwOnError&&c.add("error"),Object.keys(a(this,x)).some(u=>{const p=u;return a(this,x)[p]!==s[p]&&c.has(p)})};(e==null?void 0:e.listeners)!==!1&&i()&&(o.listeners=!0),y(this,nt,zt).call(this,{...o,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&y(this,G,yt).call(this)}},w=new WeakMap,h=new WeakMap,H=new WeakMap,x=new WeakMap,F=new WeakMap,M=new WeakMap,O=new WeakMap,V=new WeakMap,z=new WeakMap,A=new WeakMap,T=new WeakMap,k=new WeakMap,D=new WeakMap,B=new WeakMap,P=new WeakSet,L=function(e){y(this,X,wt).call(this);let s=a(this,h).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(Yt)),s},W=new WeakSet,mt=function(){y(this,J,vt).call(this);const e=st(this.options.staleTime,a(this,h));if(Qt||a(this,x).isStale||!$t(e))return;const r=Zt(a(this,x).dataUpdatedAt,e)+1;g(this,T,setTimeout(()=>{a(this,x).isStale||this.updateResult()},r))},Y=new WeakSet,bt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(a(this,h)):this.options.refetchInterval)??!1},Z=new WeakSet,gt=function(e){y(this,K,xt).call(this),g(this,D,e),!(Qt||C(this.options.enabled,a(this,h))===!1||!$t(a(this,D))||a(this,D)===0)&&g(this,k,setInterval(()=>{(this.options.refetchIntervalInBackground||Gt.isFocused())&&y(this,P,L).call(this)},a(this,D)))},G=new WeakSet,yt=function(){y(this,W,mt).call(this),y(this,Z,gt).call(this,y(this,Y,bt).call(this))},J=new WeakSet,vt=function(){a(this,T)&&(clearTimeout(a(this,T)),g(this,T,void 0))},K=new WeakSet,xt=function(){a(this,k)&&(clearInterval(a(this,k)),g(this,k,void 0))},X=new WeakSet,wt=function(){const e=a(this,w).getQueryCache().build(a(this,w),this.options);if(e===a(this,h))return;const s=a(this,h);g(this,h,e),g(this,H,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},nt=new WeakSet,zt=function(e){Mt.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(a(this,x))}),a(this,w).getQueryCache().notify({query:a(this,h),type:"observerResultsUpdated"})})},Ut);function ne(t,e){return C(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Tt(t,e){return ne(t,e)||t.state.data!==void 0&&Et(t,e,e.refetchOnMount)}function Et(t,e,s){if(C(e.enabled,t)!==!1){const r=typeof s=="function"?s(t):s;return r==="always"||r!==!1&&_t(t,e)}return!1}function kt(t,e,s,r){return(t!==e||C(r.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&_t(t,s)}function _t(t,e){return C(e.enabled,t)!==!1&&t.isStaleByTime(st(e.staleTime,t))}function le(t,e){return!pt(t.getCurrentResult(),e)}var At=f.createContext(!1),ce=()=>f.useContext(At);At.Provider;function ue(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var de=f.createContext(ue()),he=()=>f.useContext(de),fe=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},pe=t=>{f.useEffect(()=>{t.clearReset()},[t])},me=({result:t,errorResetBoundary:e,throwOnError:s,query:r})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&Kt(s,[t.error,r]),be=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},ge=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,ye=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function ve(t,e,s){var u,p,d,v;const r=Xt(s),o=ce(),i=he(),n=r.defaultQueryOptions(t);(p=(u=r.getDefaultOptions().queries)==null?void 0:u._experimental_beforeQuery)==null||p.call(u,n),n._optimisticResults=o?"isRestoring":"optimistic",be(n),fe(n,i),pe(i);const[l]=f.useState(()=>new e(r,n)),c=l.getOptimisticResult(n);if(f.useSyncExternalStore(f.useCallback(m=>{const I=o?()=>{}:l.subscribe(Mt.batchCalls(m));return l.updateResult(),I},[l,o]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),f.useEffect(()=>{l.setOptions(n,{listeners:!1})},[n,l]),ge(n,c))throw ye(n,l,i);if(me({result:c,errorResetBoundary:i,throwOnError:n.throwOnError,query:r.getQueryCache().get(n.queryHash)}))throw c.error;return(v=(d=r.getDefaultOptions().queries)==null?void 0:d._experimental_afterQuery)==null||v.call(d,n,c),n.notifyOnChangeProps?c:l.trackResult(c)}function ps(t,e){return ve(t,oe,e)}let xe={data:""},we=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||xe,Ee=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Re=/\/\*[^]*?\*\/|  +/g,Pt=/\n+/g,j=(t,e)=>{let s="",r="",o="";for(let i in t){let n=t[i];i[0]=="@"?i[1]=="i"?s=i+" "+n+";":r+=i[1]=="f"?j(n,i):i+"{"+j(n,i[1]=="k"?"":e)+"}":typeof n=="object"?r+=j(n,e?e.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):n!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=j.p?j.p(i,n):i+":"+n+";")}return s+(e&&o?e+"{"+o+"}":o)+r},_={},Bt=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+Bt(t[s]);return e}return t},Oe=(t,e,s,r,o)=>{let i=Bt(t),n=_[i]||(_[i]=(c=>{let u=0,p=11;for(;u<c.length;)p=101*p+c.charCodeAt(u++)>>>0;return"go"+p})(i));if(!_[n]){let c=i!==t?t:(u=>{let p,d,v=[{}];for(;p=Ee.exec(u.replace(Re,""));)p[4]?v.shift():p[3]?(d=p[3].replace(Pt," ").trim(),v.unshift(v[0][d]=v[0][d]||{})):v[0][p[1]]=p[2].replace(Pt," ").trim();return v[0]})(t);_[n]=j(o?{["@keyframes "+n]:c}:c,s?"":"."+n)}let l=s&&_.g?_.g:null;return s&&(_.g=_[n]),((c,u,p,d)=>{d?u.data=u.data.replace(d,c):u.data.indexOf(c)===-1&&(u.data=p?c+u.data:u.data+c)})(_[n],e,r,l),n},Ce=(t,e,s)=>t.reduce((r,o,i)=>{let n=e[i];if(n&&n.call){let l=n(s),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;n=c?"."+c:l&&typeof l=="object"?l.props?"":j(l,""):l===!1?"":l}return r+o+(n??"")},"");function lt(t){let e=this||{},s=t.call?t(e.p):t;return Oe(s.unshift?s.raw?Ce(s,[].slice.call(arguments,1),e.p):s.reduce((r,o)=>Object.assign(r,o&&o.call?o(e.p):o),{}):s,we(e.target),e.g,e.o,e.k)}let Lt,Rt,Ot;lt.bind({g:1});let S=lt.bind({k:1});function _e(t,e,s,r){j.p=e,Lt=t,Rt=s,Ot=r}function Q(t,e){let s=this||{};return function(){let r=arguments;function o(i,n){let l=Object.assign({},i),c=l.className||o.className;s.p=Object.assign({theme:Rt&&Rt()},l),s.o=/ *go\d+/.test(c),l.className=lt.apply(s,r)+(c?" "+c:""),e&&(l.ref=n);let u=t;return t[0]&&(u=l.as||t,delete l.as),Ot&&u[0]&&Ot(l),Lt(u,l)}return e?e(o):o}}var Se=t=>typeof t=="function",ot=(t,e)=>Se(t)?t(e):t,Ie=(()=>{let t=0;return()=>(++t).toString()})(),Ht=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),je=20,rt=new Map,De=1e3,Nt=t=>{if(rt.has(t))return;let e=setTimeout(()=>{rt.delete(t),N({type:4,toastId:t})},De);rt.set(t,e)},Qe=t=>{let e=rt.get(t);e&&clearTimeout(e)},Ct=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,je)};case 1:return e.toast.id&&Qe(e.toast.id),{...t,toasts:t.toasts.map(i=>i.id===e.toast.id?{...i,...e.toast}:i)};case 2:let{toast:s}=e;return t.toasts.find(i=>i.id===s.id)?Ct(t,{type:1,toast:s}):Ct(t,{type:0,toast:s});case 3:let{toastId:r}=e;return r?Nt(r):t.toasts.forEach(i=>{Nt(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===r||r===void 0?{...i,visible:!1}:i)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(i=>i.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+o}))}}},it=[],at={toasts:[],pausedAt:void 0},N=t=>{at=Ct(at,t),it.forEach(e=>{e(at)})},$e={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Fe=(t={})=>{let[e,s]=f.useState(at);f.useEffect(()=>(it.push(s),()=>{let o=it.indexOf(s);o>-1&&it.splice(o,1)}),[e]);let r=e.toasts.map(o=>{var i,n;return{...t,...t[o.type],...o,duration:o.duration||((i=t[o.type])==null?void 0:i.duration)||(t==null?void 0:t.duration)||$e[o.type],style:{...t.style,...(n=t[o.type])==null?void 0:n.style,...o.style}}});return{...e,toasts:r}},Te=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||Ie()}),q=t=>(e,s)=>{let r=Te(e,t,s);return N({type:2,toast:r}),r.id},E=(t,e)=>q("blank")(t,e);E.error=q("error");E.success=q("success");E.loading=q("loading");E.custom=q("custom");E.dismiss=t=>{N({type:3,toastId:t})};E.remove=t=>N({type:4,toastId:t});E.promise=(t,e,s)=>{let r=E.loading(e.loading,{...s,...s==null?void 0:s.loading});return t.then(o=>(E.success(ot(e.success,o),{id:r,...s,...s==null?void 0:s.success}),o)).catch(o=>{E.error(ot(e.error,o),{id:r,...s,...s==null?void 0:s.error})}),t};var ke=(t,e)=>{N({type:1,toast:{id:t,height:e}})},Pe=()=>{N({type:5,time:Date.now()})},Ne=t=>{let{toasts:e,pausedAt:s}=Fe(t);f.useEffect(()=>{if(s)return;let i=Date.now(),n=e.map(l=>{if(l.duration===1/0)return;let c=(l.duration||0)+l.pauseDuration-(i-l.createdAt);if(c<0){l.visible&&E.dismiss(l.id);return}return setTimeout(()=>E.dismiss(l.id),c)});return()=>{n.forEach(l=>l&&clearTimeout(l))}},[e,s]);let r=f.useCallback(()=>{s&&N({type:6,time:Date.now()})},[s]),o=f.useCallback((i,n)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:u}=n||{},p=e.filter(m=>(m.position||u)===(i.position||u)&&m.height),d=p.findIndex(m=>m.id===i.id),v=p.filter((m,I)=>I<d&&m.visible).length;return p.filter(m=>m.visible).slice(...l?[v+1]:[0,v]).reduce((m,I)=>m+(I.height||0)+c,0)},[e]);return{toasts:e,handlers:{updateHeight:ke,startPause:Pe,endPause:r,calculateOffset:o}}},Ue=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Me=S`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ze=S`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ae=Q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Me} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ze} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Be=S`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Le=Q("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Be} 1s linear infinite;
`,He=S`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ve=S`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,We=Q("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${He} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ye=Q("div")`
  position: absolute;
`,Ze=Q("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ge=S`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Je=Q("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ge} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ke=({toast:t})=>{let{icon:e,type:s,iconTheme:r}=t;return e!==void 0?typeof e=="string"?f.createElement(Je,null,e):e:s==="blank"?null:f.createElement(Ze,null,f.createElement(Le,{...r}),s!=="loading"&&f.createElement(Ye,null,s==="error"?f.createElement(Ae,{...r}):f.createElement(We,{...r})))},Xe=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,qe=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,ts="0%{opacity:0;} 100%{opacity:1;}",es="0%{opacity:1;} 100%{opacity:0;}",ss=Q("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,rs=Q("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,is=(t,e)=>{let s=t.includes("top")?1:-1,[r,o]=Ht()?[ts,es]:[Xe(s),qe(s)];return{animation:e?`${S(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${S(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},as=f.memo(({toast:t,position:e,style:s,children:r})=>{let o=t.height?is(t.position||e||"top-center",t.visible):{opacity:0},i=f.createElement(Ke,{toast:t}),n=f.createElement(rs,{...t.ariaProps},ot(t.message,t));return f.createElement(ss,{className:t.className,style:{...o,...s,...t.style}},typeof r=="function"?r({icon:i,message:n}):f.createElement(f.Fragment,null,i,n))});_e(f.createElement);var os=({id:t,className:e,style:s,onHeightUpdate:r,children:o})=>{let i=f.useCallback(n=>{if(n){let l=()=>{let c=n.getBoundingClientRect().height;r(t,c)};l(),new MutationObserver(l).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return f.createElement("div",{ref:i,className:e,style:s},o)},ns=(t,e)=>{let s=t.includes("top"),r=s?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Ht()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...r,...o}},ls=lt`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,et=16,ms=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:r,children:o,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=Ne(s);return f.createElement("div",{style:{position:"fixed",zIndex:9999,top:et,left:et,right:et,bottom:et,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let p=u.position||e,d=c.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),v=ns(p,d);return f.createElement(os,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?ls:"",style:v},u.type==="custom"?ot(u.message,u):o?o(u):f.createElement(as,{toast:u,position:p}))}))},bs=E;export{fs as B,ms as I,bs as _,qt as c,ps as u};
