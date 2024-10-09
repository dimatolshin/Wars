var ht=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var a=(t,e,s)=>(ht(t,e,"read from private field"),s?s.call(t):e.get(t)),g=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},b=(t,e,s,r)=>(ht(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var y=(t,e,s)=>(ht(t,e,"access private method"),s);import{S as Ht,w as O,x as dt,y as tt,z as Vt,A as Qt,C as Ft,D as Wt,E as Gt,F as Jt,G as $t,H as Mt,r as f,I as Yt,J as Zt}from"./index-91530331.js";var w,d,B,x,P,j,C,H,L,_,k,U,F,z,A,N,V,ft,W,pt,G,mt,J,gt,Y,bt,Z,yt,K,vt,at,jt,At,Kt=(At=class extends Ht{constructor(e,s){super();g(this,A);g(this,V);g(this,W);g(this,G);g(this,J);g(this,Y);g(this,Z);g(this,K);g(this,at);g(this,w,void 0);g(this,d,void 0);g(this,B,void 0);g(this,x,void 0);g(this,P,void 0);g(this,j,void 0);g(this,C,void 0);g(this,H,void 0);g(this,L,void 0);g(this,_,void 0);g(this,k,void 0);g(this,U,void 0);g(this,F,void 0);g(this,z,new Set);this.options=s,b(this,w,e),b(this,C,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(a(this,d).addObserver(this),Tt(a(this,d),this.options)?y(this,A,N).call(this):this.updateResult(),y(this,J,gt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return xt(a(this,d),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return xt(a(this,d),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,y(this,Y,bt).call(this),y(this,Z,yt).call(this),a(this,d).removeObserver(this)}setOptions(e,s){const r=this.options,n=a(this,d);if(this.options=a(this,w).defaultQueryOptions(e),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof O(this.options.enabled,a(this,d))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");y(this,K,vt).call(this),a(this,d).setOptions(this.options),r._defaulted&&!dt(this.options,r)&&a(this,w).getQueryCache().notify({type:"observerOptionsUpdated",query:a(this,d),observer:this});const i=this.hasListeners();i&&Pt(a(this,d),n,this.options,r)&&y(this,A,N).call(this),this.updateResult(s),i&&(a(this,d)!==n||O(this.options.enabled,a(this,d))!==O(r.enabled,a(this,d))||tt(this.options.staleTime,a(this,d))!==tt(r.staleTime,a(this,d)))&&y(this,V,ft).call(this);const o=y(this,W,pt).call(this);i&&(a(this,d)!==n||O(this.options.enabled,a(this,d))!==O(r.enabled,a(this,d))||o!==a(this,F))&&y(this,G,mt).call(this,o)}getOptimisticResult(e){const s=a(this,w).getQueryCache().build(a(this,w),e),r=this.createResult(s,e);return qt(this,r)&&(b(this,x,r),b(this,j,this.options),b(this,P,a(this,d).state)),r}getCurrentResult(){return a(this,x)}trackResult(e,s){const r={};return Object.keys(e).forEach(n=>{Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(n),s==null||s(n),e[n])})}),r}trackProp(e){a(this,z).add(e)}getCurrentQuery(){return a(this,d)}refetch({...e}={}){return this.fetch({...e})}fetchOptimistic(e){const s=a(this,w).defaultQueryOptions(e),r=a(this,w).getQueryCache().build(a(this,w),s);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,s))}fetch(e){return y(this,A,N).call(this,{...e,cancelRefetch:e.cancelRefetch??!0}).then(()=>(this.updateResult(),a(this,x)))}createResult(e,s){var Dt;const r=a(this,d),n=this.options,i=a(this,x),o=a(this,P),l=a(this,j),u=e!==r?e.state:a(this,B),{state:p}=e;let h={...p},v=!1,m;if(s._optimisticResults){const R=this.hasListeners(),ut=!R&&Tt(e,s),Bt=R&&Pt(e,r,s,n);(ut||Bt)&&(h={...h,...Jt(p.data,e.options)}),s._optimisticResults==="isRestoring"&&(h.fetchStatus="idle")}let{error:D,errorUpdatedAt:Ot,status:T}=h;if(s.select&&h.data!==void 0)if(i&&h.data===(o==null?void 0:o.data)&&s.select===a(this,H))m=a(this,L);else try{b(this,H,s.select),m=s.select(h.data),m=$t(i==null?void 0:i.data,m,s),b(this,L,m),b(this,C,null)}catch(R){b(this,C,R)}else m=h.data;if(s.placeholderData!==void 0&&m===void 0&&T==="pending"){let R;if(i!=null&&i.isPlaceholderData&&s.placeholderData===(l==null?void 0:l.placeholderData))R=i.data;else if(R=typeof s.placeholderData=="function"?s.placeholderData((Dt=a(this,_))==null?void 0:Dt.state.data,a(this,_)):s.placeholderData,s.select&&R!==void 0)try{R=s.select(R),b(this,C,null)}catch(ut){b(this,C,ut)}R!==void 0&&(T="success",m=$t(i==null?void 0:i.data,R,s),v=!0)}a(this,C)&&(D=a(this,C),m=a(this,L),Ot=Date.now(),T="error");const nt=h.fetchStatus==="fetching",lt=T==="pending",ct=T==="error",St=lt&&nt,It=m!==void 0;return{status:T,fetchStatus:h.fetchStatus,isPending:lt,isSuccess:T==="success",isError:ct,isInitialLoading:St,isLoading:St,data:m,dataUpdatedAt:h.dataUpdatedAt,error:D,errorUpdatedAt:Ot,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>u.dataUpdateCount||h.errorUpdateCount>u.errorUpdateCount,isFetching:nt,isRefetching:nt&&!lt,isLoadingError:ct&&!It,isPaused:h.fetchStatus==="paused",isPlaceholderData:v,isRefetchError:ct&&It,isStale:Ct(e,s),refetch:this.refetch}}updateResult(e){const s=a(this,x),r=this.createResult(a(this,d),this.options);if(b(this,P,a(this,d).state),b(this,j,this.options),a(this,P).data!==void 0&&b(this,_,a(this,d)),dt(r,s))return;b(this,x,r);const n={},i=()=>{if(!s)return!0;const{notifyOnChangeProps:o}=this.options,l=typeof o=="function"?o():o;if(l==="all"||!l&&!a(this,z).size)return!0;const c=new Set(l??a(this,z));return this.options.throwOnError&&c.add("error"),Object.keys(a(this,x)).some(u=>{const p=u;return a(this,x)[p]!==s[p]&&c.has(p)})};(e==null?void 0:e.listeners)!==!1&&i()&&(n.listeners=!0),y(this,at,jt).call(this,{...n,...e})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&y(this,J,gt).call(this)}},w=new WeakMap,d=new WeakMap,B=new WeakMap,x=new WeakMap,P=new WeakMap,j=new WeakMap,C=new WeakMap,H=new WeakMap,L=new WeakMap,_=new WeakMap,k=new WeakMap,U=new WeakMap,F=new WeakMap,z=new WeakMap,A=new WeakSet,N=function(e){y(this,K,vt).call(this);let s=a(this,d).fetch(this.options,e);return e!=null&&e.throwOnError||(s=s.catch(Vt)),s},V=new WeakSet,ft=function(){y(this,Y,bt).call(this);const e=tt(this.options.staleTime,a(this,d));if(Qt||a(this,x).isStale||!Ft(e))return;const r=Wt(a(this,x).dataUpdatedAt,e)+1;b(this,k,setTimeout(()=>{a(this,x).isStale||this.updateResult()},r))},W=new WeakSet,pt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(a(this,d)):this.options.refetchInterval)??!1},G=new WeakSet,mt=function(e){y(this,Z,yt).call(this),b(this,F,e),!(Qt||O(this.options.enabled,a(this,d))===!1||!Ft(a(this,F))||a(this,F)===0)&&b(this,U,setInterval(()=>{(this.options.refetchIntervalInBackground||Gt.isFocused())&&y(this,A,N).call(this)},a(this,F)))},J=new WeakSet,gt=function(){y(this,V,ft).call(this),y(this,G,mt).call(this,y(this,W,pt).call(this))},Y=new WeakSet,bt=function(){a(this,k)&&(clearTimeout(a(this,k)),b(this,k,void 0))},Z=new WeakSet,yt=function(){a(this,U)&&(clearInterval(a(this,U)),b(this,U,void 0))},K=new WeakSet,vt=function(){const e=a(this,w).getQueryCache().build(a(this,w),this.options);if(e===a(this,d))return;const s=a(this,d);b(this,d,e),b(this,B,e.state),this.hasListeners()&&(s==null||s.removeObserver(this),e.addObserver(this))},at=new WeakSet,jt=function(e){Mt.batch(()=>{e.listeners&&this.listeners.forEach(s=>{s(a(this,x))}),a(this,w).getQueryCache().notify({query:a(this,d),type:"observerResultsUpdated"})})},At);function Xt(t,e){return O(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function Tt(t,e){return Xt(t,e)||t.state.data!==void 0&&xt(t,e,e.refetchOnMount)}function xt(t,e,s){if(O(e.enabled,t)!==!1){const r=typeof s=="function"?s(t):s;return r==="always"||r!==!1&&Ct(t,e)}return!1}function Pt(t,e,s,r){return(t!==e||O(r.enabled,t)===!1)&&(!s.suspense||t.state.status!=="error")&&Ct(t,s)}function Ct(t,e){return O(e.enabled,t)!==!1&&t.isStaleByTime(tt(e.staleTime,t))}function qt(t,e){return!dt(t.getCurrentResult(),e)}var Lt=f.createContext(!1),te=()=>f.useContext(Lt);Lt.Provider;function ee(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var se=f.createContext(ee()),re=()=>f.useContext(se),ie=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},ae=t=>{f.useEffect(()=>{t.clearReset()},[t])},oe=({result:t,errorResetBoundary:e,throwOnError:s,query:r})=>t.isError&&!e.isReset()&&!t.isFetching&&r&&Yt(s,[t.error,r]),ne=t=>{t.suspense&&typeof t.staleTime!="number"&&(t.staleTime=1e3)},le=(t,e)=>(t==null?void 0:t.suspense)&&e.isPending,ce=(t,e,s)=>e.fetchOptimistic(t).catch(()=>{s.clearReset()});function ue(t,e,s){var u,p,h,v;const r=Zt(s),n=te(),i=re(),o=r.defaultQueryOptions(t);(p=(u=r.getDefaultOptions().queries)==null?void 0:u._experimental_beforeQuery)==null||p.call(u,o),o._optimisticResults=n?"isRestoring":"optimistic",ne(o),ie(o,i),ae(i);const[l]=f.useState(()=>new e(r,o)),c=l.getOptimisticResult(o);if(f.useSyncExternalStore(f.useCallback(m=>{const D=n?()=>{}:l.subscribe(Mt.batchCalls(m));return l.updateResult(),D},[l,n]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),f.useEffect(()=>{l.setOptions(o,{listeners:!1})},[o,l]),le(o,c))throw ce(o,l,i);if(oe({result:c,errorResetBoundary:i,throwOnError:o.throwOnError,query:r.getQueryCache().get(o.queryHash)}))throw c.error;return(v=(h=r.getDefaultOptions().queries)==null?void 0:h._experimental_afterQuery)==null||v.call(h,o,c),o.notifyOnChangeProps?c:l.trackResult(c)}function rs(t,e){return ue(t,Kt,e)}let he={data:""},de=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||he,fe=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,pe=/\/\*[^]*?\*\/|  +/g,kt=/\n+/g,Q=(t,e)=>{let s="",r="",n="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?s=i+" "+o+";":r+=i[1]=="f"?Q(o,i):i+"{"+Q(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Q(o,e?e.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=Q.p?Q.p(i,o):i+":"+o+";")}return s+(e&&n?e+"{"+n+"}":n)+r},S={},_t=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+_t(t[s]);return e}return t},me=(t,e,s,r,n)=>{let i=_t(t),o=S[i]||(S[i]=(c=>{let u=0,p=11;for(;u<c.length;)p=101*p+c.charCodeAt(u++)>>>0;return"go"+p})(i));if(!S[o]){let c=i!==t?t:(u=>{let p,h,v=[{}];for(;p=fe.exec(u.replace(pe,""));)p[4]?v.shift():p[3]?(h=p[3].replace(kt," ").trim(),v.unshift(v[0][h]=v[0][h]||{})):v[0][p[1]]=p[2].replace(kt," ").trim();return v[0]})(t);S[o]=Q(n?{["@keyframes "+o]:c}:c,s?"":"."+o)}let l=s&&S.g?S.g:null;return s&&(S.g=S[o]),((c,u,p,h)=>{h?u.data=u.data.replace(h,c):u.data.indexOf(c)===-1&&(u.data=p?c+u.data:u.data+c)})(S[o],e,r,l),o},ge=(t,e,s)=>t.reduce((r,n,i)=>{let o=e[i];if(o&&o.call){let l=o(s),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=c?"."+c:l&&typeof l=="object"?l.props?"":Q(l,""):l===!1?"":l}return r+n+(o??"")},"");function ot(t){let e=this||{},s=t.call?t(e.p):t;return me(s.unshift?s.raw?ge(s,[].slice.call(arguments,1),e.p):s.reduce((r,n)=>Object.assign(r,n&&n.call?n(e.p):n),{}):s,de(e.target),e.g,e.o,e.k)}let zt,wt,Et;ot.bind({g:1});let I=ot.bind({k:1});function be(t,e,s,r){Q.p=e,zt=t,wt=s,Et=r}function $(t,e){let s=this||{};return function(){let r=arguments;function n(i,o){let l=Object.assign({},i),c=l.className||n.className;s.p=Object.assign({theme:wt&&wt()},l),s.o=/ *go\d+/.test(c),l.className=ot.apply(s,r)+(c?" "+c:""),e&&(l.ref=o);let u=t;return t[0]&&(u=l.as||t,delete l.as),Et&&u[0]&&Et(l),zt(u,l)}return e?e(n):n}}var ye=t=>typeof t=="function",it=(t,e)=>ye(t)?t(e):t,ve=(()=>{let t=0;return()=>(++t).toString()})(),Nt=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),xe=20,et=new Map,we=1e3,Ut=t=>{if(et.has(t))return;let e=setTimeout(()=>{et.delete(t),M({type:4,toastId:t})},we);et.set(t,e)},Ee=t=>{let e=et.get(t);e&&clearTimeout(e)},Rt=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,xe)};case 1:return e.toast.id&&Ee(e.toast.id),{...t,toasts:t.toasts.map(i=>i.id===e.toast.id?{...i,...e.toast}:i)};case 2:let{toast:s}=e;return t.toasts.find(i=>i.id===s.id)?Rt(t,{type:1,toast:s}):Rt(t,{type:0,toast:s});case 3:let{toastId:r}=e;return r?Ut(r):t.toasts.forEach(i=>{Ut(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===r||r===void 0?{...i,visible:!1}:i)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(i=>i.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let n=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(i=>({...i,pauseDuration:i.pauseDuration+n}))}}},st=[],rt={toasts:[],pausedAt:void 0},M=t=>{rt=Rt(rt,t),st.forEach(e=>{e(rt)})},Re={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Ce=(t={})=>{let[e,s]=f.useState(rt);f.useEffect(()=>(st.push(s),()=>{let n=st.indexOf(s);n>-1&&st.splice(n,1)}),[e]);let r=e.toasts.map(n=>{var i,o;return{...t,...t[n.type],...n,duration:n.duration||((i=t[n.type])==null?void 0:i.duration)||(t==null?void 0:t.duration)||Re[n.type],style:{...t.style,...(o=t[n.type])==null?void 0:o.style,...n.style}}});return{...e,toasts:r}},Oe=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||ve()}),X=t=>(e,s)=>{let r=Oe(e,t,s);return M({type:2,toast:r}),r.id},E=(t,e)=>X("blank")(t,e);E.error=X("error");E.success=X("success");E.loading=X("loading");E.custom=X("custom");E.dismiss=t=>{M({type:3,toastId:t})};E.remove=t=>M({type:4,toastId:t});E.promise=(t,e,s)=>{let r=E.loading(e.loading,{...s,...s==null?void 0:s.loading});return t.then(n=>(E.success(it(e.success,n),{id:r,...s,...s==null?void 0:s.success}),n)).catch(n=>{E.error(it(e.error,n),{id:r,...s,...s==null?void 0:s.error})}),t};var Se=(t,e)=>{M({type:1,toast:{id:t,height:e}})},Ie=()=>{M({type:5,time:Date.now()})},De=t=>{let{toasts:e,pausedAt:s}=Ce(t);f.useEffect(()=>{if(s)return;let i=Date.now(),o=e.map(l=>{if(l.duration===1/0)return;let c=(l.duration||0)+l.pauseDuration-(i-l.createdAt);if(c<0){l.visible&&E.dismiss(l.id);return}return setTimeout(()=>E.dismiss(l.id),c)});return()=>{o.forEach(l=>l&&clearTimeout(l))}},[e,s]);let r=f.useCallback(()=>{s&&M({type:6,time:Date.now()})},[s]),n=f.useCallback((i,o)=>{let{reverseOrder:l=!1,gutter:c=8,defaultPosition:u}=o||{},p=e.filter(m=>(m.position||u)===(i.position||u)&&m.height),h=p.findIndex(m=>m.id===i.id),v=p.filter((m,D)=>D<h&&m.visible).length;return p.filter(m=>m.visible).slice(...l?[v+1]:[0,v]).reduce((m,D)=>m+(D.height||0)+c,0)},[e]);return{toasts:e,handlers:{updateHeight:Se,startPause:Ie,endPause:r,calculateOffset:n}}},Qe=I`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Fe=I`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$e=I`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Te=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Fe} 0.15s ease-out forwards;
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
    animation: ${$e} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pe=I`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ke=$("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Pe} 1s linear infinite;
`,Ue=I`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ae=I`
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
}`,Me=$("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ue} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ae} 0.2s ease-out forwards;
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
`,je=$("div")`
  position: absolute;
`,Le=$("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,_e=I`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ze=$("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${_e} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ne=({toast:t})=>{let{icon:e,type:s,iconTheme:r}=t;return e!==void 0?typeof e=="string"?f.createElement(ze,null,e):e:s==="blank"?null:f.createElement(Le,null,f.createElement(ke,{...r}),s!=="loading"&&f.createElement(je,null,s==="error"?f.createElement(Te,{...r}):f.createElement(Me,{...r})))},Be=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,He=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Ve="0%{opacity:0;} 100%{opacity:1;}",We="0%{opacity:1;} 100%{opacity:0;}",Ge=$("div")`
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
`,Je=$("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ye=(t,e)=>{let s=t.includes("top")?1:-1,[r,n]=Nt()?[Ve,We]:[Be(s),He(s)];return{animation:e?`${I(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${I(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ze=f.memo(({toast:t,position:e,style:s,children:r})=>{let n=t.height?Ye(t.position||e||"top-center",t.visible):{opacity:0},i=f.createElement(Ne,{toast:t}),o=f.createElement(Je,{...t.ariaProps},it(t.message,t));return f.createElement(Ge,{className:t.className,style:{...n,...s,...t.style}},typeof r=="function"?r({icon:i,message:o}):f.createElement(f.Fragment,null,i,o))});be(f.createElement);var Ke=({id:t,className:e,style:s,onHeightUpdate:r,children:n})=>{let i=f.useCallback(o=>{if(o){let l=()=>{let c=o.getBoundingClientRect().height;r(t,c)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return f.createElement("div",{ref:i,className:e,style:s},n)},Xe=(t,e)=>{let s=t.includes("top"),r=s?{top:0}:{bottom:0},n=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Nt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...r,...n}},qe=ot`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,q=16,is=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:r,children:n,containerStyle:i,containerClassName:o})=>{let{toasts:l,handlers:c}=De(s);return f.createElement("div",{style:{position:"fixed",zIndex:9999,top:q,left:q,right:q,bottom:q,pointerEvents:"none",...i},className:o,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let p=u.position||e,h=c.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),v=Xe(p,h);return f.createElement(Ke,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?qe:"",style:v},u.type==="custom"?it(u.message,u):n?n(u):f.createElement(Ze,{toast:u,position:p}))}))},as=E;export{is as I,as as _,rs as u};
