var Ot=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var i=(e,t,s)=>(Ot(e,t,"read from private field"),s?s.call(e):t.get(e)),g=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},m=(e,t,s,n)=>(Ot(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s);var R=(e,t,s)=>(Ot(e,t,"access private method"),s);import{r as l,u as pe,a as Tt,b as me,c as Ht,d as He,j as c,e as Ne,L as ye,O as Ye}from"./index-f1c853a9.js";import{B as se}from"./Button-bde33ada.js";import{S as Fe,r as j,s as Nt,a as Bt,n as qe,i as ne,b as ie,t as ze,f as Le,c as Ge,d as ae,e as be,g as De,u as Ue,h as Re,q as Ct,j as Ve,k as Pe,l as Xe,m as Ke,o as We}from"./getArmy-fe556440.js";const Je="_headers_1kva0_1",Ze="_main_1kva0_6",_e="_divs_1kva0_12",$e="_footers_1kva0_16",jt={headers:Je,main:Ze,divs:_e,footers:$e},ts="_coinBlock_ryftz_1",es="_descrLvl_ryftz_9",ss="_coinBar_ryftz_16",ns="_coinBlockMoney_ryftz_22",is="_imgCoin_ryftz_29",as="_bgValue_ryftz_36",rs="_descr_ryftz_9",os="_btnDonatMoney_ryftz_51",S={coinBlock:ts,descrLvl:es,coinBar:ss,coinBlockMoney:ns,imgCoin:is,bgValue:as,descr:rs,btnDonatMoney:os},cs="/assets/coinMoney-bd93148e.png",ls="/assets/diamondMoney-344191ca.png",re="data:image/png;base64,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";var w,u,ot,C,V,$,O,ct,tt,et,P,X,q,st,K,rt,lt,Yt,ht,Ft,ut,qt,dt,zt,ft,Lt,At,Gt,gt,Dt,wt,ve,ge,hs=(ge=class extends Fe{constructor(t,s){super();g(this,K);g(this,lt);g(this,ht);g(this,ut);g(this,dt);g(this,ft);g(this,At);g(this,gt);g(this,wt);g(this,w,void 0);g(this,u,void 0);g(this,ot,void 0);g(this,C,void 0);g(this,V,void 0);g(this,$,void 0);g(this,O,void 0);g(this,ct,void 0);g(this,tt,void 0);g(this,et,void 0);g(this,P,void 0);g(this,X,void 0);g(this,q,void 0);g(this,st,new Set);this.options=s,m(this,w,t),m(this,O,null),this.bindMethods(),this.setOptions(s)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(i(this,u).addObserver(this),oe(i(this,u),this.options)?R(this,K,rt).call(this):this.updateResult(),R(this,dt,zt).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return Ut(i(this,u),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return Ut(i(this,u),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,R(this,ft,Lt).call(this),R(this,At,Gt).call(this),i(this,u).removeObserver(this)}setOptions(t,s){const n=this.options,a=i(this,u);if(this.options=i(this,w).defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof j(this.options.enabled,i(this,u))!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");R(this,gt,Dt).call(this),i(this,u).setOptions(this.options),n._defaulted&&!Nt(this.options,n)&&i(this,w).getQueryCache().notify({type:"observerOptionsUpdated",query:i(this,u),observer:this});const r=this.hasListeners();r&&ce(i(this,u),a,this.options,n)&&R(this,K,rt).call(this),this.updateResult(s),r&&(i(this,u)!==a||j(this.options.enabled,i(this,u))!==j(n.enabled,i(this,u))||Bt(this.options.staleTime,i(this,u))!==Bt(n.staleTime,i(this,u)))&&R(this,lt,Yt).call(this);const o=R(this,ht,Ft).call(this);r&&(i(this,u)!==a||j(this.options.enabled,i(this,u))!==j(n.enabled,i(this,u))||o!==i(this,q))&&R(this,ut,qt).call(this,o)}getOptimisticResult(t){const s=i(this,w).getQueryCache().build(i(this,w),t),n=this.createResult(s,t);return ds(this,n)&&(m(this,C,n),m(this,$,this.options),m(this,V,i(this,u).state)),n}getCurrentResult(){return i(this,C)}trackResult(t,s){const n={};return Object.keys(t).forEach(a=>{Object.defineProperty(n,a,{configurable:!1,enumerable:!0,get:()=>(this.trackProp(a),s==null||s(a),t[a])})}),n}trackProp(t){i(this,st).add(t)}getCurrentQuery(){return i(this,u)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const s=i(this,w).defaultQueryOptions(t),n=i(this,w).getQueryCache().build(i(this,w),s);return n.isFetchingOptimistic=!0,n.fetch().then(()=>this.createResult(n,s))}fetch(t){return R(this,K,rt).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),i(this,C)))}createResult(t,s){var N;const n=i(this,u),a=this.options,r=i(this,C),o=i(this,V),f=i(this,$),B=t!==n?t.state:i(this,ot),{state:A}=t;let d={...A},v=!1,p;if(s._optimisticResults){const x=this.hasListeners(),Y=!x&&oe(t,s),Et=x&&ce(t,n,s,a);(Y||Et)&&(d={...d,...Ge(A.data,t.options)}),s._optimisticResults==="isRestoring"&&(d.fetchStatus="idle")}let{error:Q,errorUpdatedAt:z,status:E}=d;if(s.select&&d.data!==void 0)if(r&&d.data===(o==null?void 0:o.data)&&s.select===i(this,ct))p=i(this,tt);else try{m(this,ct,s.select),p=s.select(d.data),p=ae(r==null?void 0:r.data,p,s),m(this,tt,p),m(this,O,null)}catch(x){m(this,O,x)}else p=d.data;if(s.placeholderData!==void 0&&p===void 0&&E==="pending"){let x;if(r!=null&&r.isPlaceholderData&&s.placeholderData===(f==null?void 0:f.placeholderData))x=r.data;else if(x=typeof s.placeholderData=="function"?s.placeholderData((N=i(this,et))==null?void 0:N.state.data,i(this,et)):s.placeholderData,s.select&&x!==void 0)try{x=s.select(x),m(this,O,null)}catch(Y){m(this,O,Y)}x!==void 0&&(E="success",p=ae(r==null?void 0:r.data,x,s),v=!0)}i(this,O)&&(Q=i(this,O),p=i(this,tt),z=Date.now(),E="error");const L=d.fetchStatus==="fetching",G=E==="pending",T=E==="error",H=G&&L,W=p!==void 0;return{status:E,fetchStatus:d.fetchStatus,isPending:G,isSuccess:E==="success",isError:T,isInitialLoading:H,isLoading:H,data:p,dataUpdatedAt:d.dataUpdatedAt,error:Q,errorUpdatedAt:z,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>B.dataUpdateCount||d.errorUpdateCount>B.errorUpdateCount,isFetching:L,isRefetching:L&&!G,isLoadingError:T&&!W,isPaused:d.fetchStatus==="paused",isPlaceholderData:v,isRefetchError:T&&W,isStale:Vt(t,s),refetch:this.refetch}}updateResult(t){const s=i(this,C),n=this.createResult(i(this,u),this.options);if(m(this,V,i(this,u).state),m(this,$,this.options),i(this,V).data!==void 0&&m(this,et,i(this,u)),Nt(n,s))return;m(this,C,n);const a={},r=()=>{if(!s)return!0;const{notifyOnChangeProps:o}=this.options,f=typeof o=="function"?o():o;if(f==="all"||!f&&!i(this,st).size)return!0;const b=new Set(f??i(this,st));return this.options.throwOnError&&b.add("error"),Object.keys(i(this,C)).some(B=>{const A=B;return i(this,C)[A]!==s[A]&&b.has(A)})};(t==null?void 0:t.listeners)!==!1&&r()&&(a.listeners=!0),R(this,wt,ve).call(this,{...a,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&R(this,dt,zt).call(this)}},w=new WeakMap,u=new WeakMap,ot=new WeakMap,C=new WeakMap,V=new WeakMap,$=new WeakMap,O=new WeakMap,ct=new WeakMap,tt=new WeakMap,et=new WeakMap,P=new WeakMap,X=new WeakMap,q=new WeakMap,st=new WeakMap,K=new WeakSet,rt=function(t){R(this,gt,Dt).call(this);let s=i(this,u).fetch(this.options,t);return t!=null&&t.throwOnError||(s=s.catch(qe)),s},lt=new WeakSet,Yt=function(){R(this,ft,Lt).call(this);const t=Bt(this.options.staleTime,i(this,u));if(ne||i(this,C).isStale||!ie(t))return;const n=ze(i(this,C).dataUpdatedAt,t)+1;m(this,P,setTimeout(()=>{i(this,C).isStale||this.updateResult()},n))},ht=new WeakSet,Ft=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(i(this,u)):this.options.refetchInterval)??!1},ut=new WeakSet,qt=function(t){R(this,At,Gt).call(this),m(this,q,t),!(ne||j(this.options.enabled,i(this,u))===!1||!ie(i(this,q))||i(this,q)===0)&&m(this,X,setInterval(()=>{(this.options.refetchIntervalInBackground||Le.isFocused())&&R(this,K,rt).call(this)},i(this,q)))},dt=new WeakSet,zt=function(){R(this,lt,Yt).call(this),R(this,ut,qt).call(this,R(this,ht,Ft).call(this))},ft=new WeakSet,Lt=function(){i(this,P)&&(clearTimeout(i(this,P)),m(this,P,void 0))},At=new WeakSet,Gt=function(){i(this,X)&&(clearInterval(i(this,X)),m(this,X,void 0))},gt=new WeakSet,Dt=function(){const t=i(this,w).getQueryCache().build(i(this,w),this.options);if(t===i(this,u))return;const s=i(this,u);m(this,u,t),m(this,ot,t.state),this.hasListeners()&&(s==null||s.removeObserver(this),t.addObserver(this))},wt=new WeakSet,ve=function(t){be.batch(()=>{t.listeners&&this.listeners.forEach(s=>{s(i(this,C))}),i(this,w).getQueryCache().notify({query:i(this,u),type:"observerResultsUpdated"})})},ge);function us(e,t){return j(t.enabled,e)!==!1&&e.state.data===void 0&&!(e.state.status==="error"&&t.retryOnMount===!1)}function oe(e,t){return us(e,t)||e.state.data!==void 0&&Ut(e,t,t.refetchOnMount)}function Ut(e,t,s){if(j(t.enabled,e)!==!1){const n=typeof s=="function"?s(e):s;return n==="always"||n!==!1&&Vt(e,t)}return!1}function ce(e,t,s,n){return(e!==t||j(n.enabled,e)===!1)&&(!s.suspense||e.state.status!=="error")&&Vt(e,s)}function Vt(e,t){return j(t.enabled,e)!==!1&&e.isStaleByTime(Bt(t.staleTime,e))}function ds(e,t){return!Nt(e.getCurrentResult(),t)}var xe=l.createContext(!1),fs=()=>l.useContext(xe);xe.Provider;function As(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}var gs=l.createContext(As()),ps=()=>l.useContext(gs),ms=(e,t)=>{(e.suspense||e.throwOnError)&&(t.isReset()||(e.retryOnMount=!1))},ys=e=>{l.useEffect(()=>{e.clearReset()},[e])},bs=({result:e,errorResetBoundary:t,throwOnError:s,query:n})=>e.isError&&!t.isReset()&&!e.isFetching&&n&&De(s,[e.error,n]),Rs=e=>{e.suspense&&typeof e.staleTime!="number"&&(e.staleTime=1e3)},vs=(e,t)=>(e==null?void 0:e.suspense)&&t.isPending,xs=(e,t,s)=>t.fetchOptimistic(e).catch(()=>{s.clearReset()});function Bs(e,t,s){var B,A,d,v;const n=Ue(s),a=fs(),r=ps(),o=n.defaultQueryOptions(e);(A=(B=n.getDefaultOptions().queries)==null?void 0:B._experimental_beforeQuery)==null||A.call(B,o),o._optimisticResults=a?"isRestoring":"optimistic",Rs(o),ms(o,r),ys(r);const[f]=l.useState(()=>new t(n,o)),b=f.getOptimisticResult(o);if(l.useSyncExternalStore(l.useCallback(p=>{const Q=a?()=>{}:f.subscribe(be.batchCalls(p));return f.updateResult(),Q},[f,a]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),l.useEffect(()=>{f.setOptions(o,{listeners:!1})},[o,f]),vs(o,b))throw xs(o,f,r);if(bs({result:b,errorResetBoundary:r,throwOnError:o.throwOnError,query:n.getQueryCache().get(o.queryHash)}))throw b.error;return(v=(d=n.getDefaultOptions().queries)==null?void 0:d._experimental_afterQuery)==null||v.call(d,o,b),o.notifyOnChangeProps?b:f.trackResult(b)}function le(e,t){return Bs(e,hs,t)}function Cs(){const e=pe(),t=Tt(Re),{tg_id:s,userName:n,tg:a}=me(),r=le({queryFn:()=>Ve(s,n),queryKey:["info",s],enabled:!!s,retry:1},Ct);l.useEffect(()=>{e(Ht.addCoinStore(r.data))},[r.data]);const o=le({queryFn:()=>Pe(s),queryKey:["army",s],enabled:!!s,retry:0},Ct);return l.useEffect(()=>{e(He.addArmyStore(o.data))},[o.data]),c.jsxs("div",{className:S.coinBlock,children:[c.jsxs("p",{className:S.descrLvl,children:["LVL ",t==null?void 0:t.lvl]}),c.jsxs("div",{className:S.coinBar,children:[c.jsxs("div",{className:S.coinBlockMoney,children:[c.jsx("img",{className:S.imgCoin,src:cs,alt:""}),c.jsx("div",{className:S.bgValue,children:c.jsx("p",{className:S.descr,children:t==null?void 0:t.money.toLocaleString("ru-RU")})}),c.jsx(se,{className:S.btnDonatMoney,children:c.jsx("img",{src:re,alt:""})})]}),c.jsxs("div",{className:S.coinBlockMoney,children:[c.jsx("img",{className:S.imgCoin,src:ls,alt:""}),c.jsx("div",{className:S.bgValue,children:c.jsx("p",{className:S.descr,children:"0"})}),c.jsx(se,{className:S.btnDonatMoney,children:c.jsx("img",{src:re,alt:""})})]})]})]})}const ws="_list_138vi_1",Es="_item_138vi_11",Ms="_link_138vi_21",Ss="_img_138vi_26",Is="_descr_138vi_31",Os="_active_138vi_39",U={list:ws,item:Es,link:Ms,img:Ss,descr:Is,active:Os},js="/assets/guilds-a9a43f6c.png",Qs="/assets/friends-205bb587.png",ks="/assets/attack-1b400151.png",Ts="/assets/leaders-4fe79ef5.png",Hs="/assets/airdrop-f8a7acac.png",Ns=[{text:"Guilds",path:"/guilds",img:js},{text:"Friends",path:"/friends",img:Qs},{text:"Attack!",path:"/",img:ks},{text:"Leaders",path:"/leaders",img:Ts},{text:"Airdrop",path:"/airdrop",img:Hs}];function Ys(){const e=Ne();return c.jsx("ul",{className:U.list,children:Ns.map(t=>c.jsx("li",{className:e.pathname===t.path?`${U.item} ${U.active}`:U.item,children:c.jsx(ye,{to:t.path,children:c.jsxs("div",{className:U.link,children:[c.jsx("img",{className:U.img,src:t.img,alt:t.text}),c.jsx("p",{className:U.descr,children:t.text})]})})},t.path))})}const Fs="_canvas_brbgf_1",qs={canvas:Fs},zs=l.forwardRef((e,t)=>c.jsx("canvas",{className:qs.canvas,ref:t})),Qt=e=>{const[t,s]=l.useState(null);return l.useEffect(()=>{const n=new Image;n.src=e,n.onload=()=>{s(n)}},[e]),t},Ls="/assets/casle-lvl-1-16f970d5.png",Gs="/assets/btn-tap-22212b8a.png",Ds="/assets/level_tape-33fe2b3d.png";function Us(e){const{width:t,height:s}=e.getBoundingClientRect();if(e.width!==t||e.height!==s){const a=e.getContext("2d");return e.width=t*2,e.height=s*2,a==null||a.scale(2,2),{x:e.width,y:e.height}}return!1}function Vs(e,t){l.useEffect(()=>{const s=t,n=s==null?void 0:s.getContext("2d");let a=0,r;if(n){const o=()=>{a++,s&&Us(s),e(n,a),r=window.requestAnimationFrame(o)};return o(),()=>{window.cancelAnimationFrame(r)}}},[e])}function he(e){const t=e.canvas.width/2,s=e.canvas.height/2,n=t*.5,a=t/2-n/2,r=s/2.4-n,o=t*.5,f=t/2-o/2,b=s/1.2-o,B=t*.04,A=f+o/2,d=b+o/3.5,v=t*.99,p=s*.08,Q=t/1.98-v/2,z=s/12.6-p,E=t,L=s*.09,G=t/2.02-v/2,T=s/12.5-p,H=t*.05,W=Q+E/2,M=z+H-2,N=t*.036,x=M+N,Y=t*.06;return{centerX:t,centerY:s,sizeCastle:n,squareX:a,squareY:r,sizeBtn:o,buttonX:f,buttonY:b,sizeText:B,textX:A,textY:d,sizeTapeX:v,sizeTapeY:p,tapeX:Q,tapeY:z,sizeBgTypeX:E,sizeBgTypeY:L,BgTypeX:G,BgTypeY:T,sizeTextLvl:H,textLvlX:W,textLvlY:M,sizeTexеHp:N,textLvlHpY:x,sizeCoinJump:Y}}function Ps(e,t,s,n,a){e.beginPath(),e.arc(t,s,n,0,2*Math.PI,!1),e.fillStyle=a,e.fill()}function Xs(e,t,s,n){const a=e.x>=t+40&&e.x<=t+n-40,r=e.y>=s&&e.y<=s+n-30;return a&&r}function Ks(e,t,s,n,a){const r=1.5*Math.PI,o=r-2*Math.PI*a;e.beginPath(),e.arc(t,s,n,r,o,!0),e.lineWidth=10,e.strokeStyle="#1fbcff",e.stroke()}function Ws(e,t,s,n,a,r){e.textAlign="center",e.font=`${t}px PassionOne`,e.fillStyle=r,e.fillText(a,s,n)}function ue(e,t,s,n,a,r){e.textAlign="center",e.font=`${t}px PassionOne`,e.strokeStyle="black",e.lineWidth=2,e.fillStyle=r,e.strokeText(a,s,n),e.fillText(a,s,n)}function Js(e,t,s,n,a,r,o){e.save(),e.translate(t+n/2,s+n/2),e.scale(r,r),e.drawImage(a,-n/2,-n/2,n,n),e.restore(),e.save(),e.translate(t+n/2,s+n/2),e.scale(r,r),Ks(e,0,0,n/2.33,o),e.restore()}function Zs(e,t,s,n,a,r,o,f,b,B){let A=e.createLinearGradient(s,n,s,n+r);A.addColorStop(0,"#000"),A.addColorStop(1,"rgba(0, 0, 0, 0)"),e.fillStyle=A,e.fillRect(s,n,a,a),e.drawImage(t,o,f,b,B)}function de(e){return Math.random()*e}function fe(e,t,s,n){const a=de(t-e)+e,r=de(n-s)+s;return{x:a,y:r}}function Ae(e,t,s){const n=Math.random();if(!Array.isArray(s))throw new Error("armyUser должен быть массивом");const a=s[Math.floor(Math.random()*s.length)],r=n<.5?fe(10,60,t/7,t/1.8+200):fe(e-10,e-60,t/7,t/1.8+200),o=(e/2-r.x)/(a.speed*60),f=(t/3-r.y)/(a.speed*60);return{...r,dx:o,dy:f,color:a.name,damage:a.damage,img:a.image}}function _s(){var _t;const e=pe(),t=Tt(Re),s=Tt(Xe),{tg_id:n}=me(),[a,r]=l.useState(null),[o,f]=l.useState(0),[b,B]=l.useState(0),[A,d]=l.useState(0),[v,p]=l.useState(0),[Q,z]=l.useState(!1),[E,L]=l.useState(0),[G,T]=l.useState([]),[H,W]=l.useState(s),[M,N]=l.useState((t==null?void 0:t.energy_start)||0),[x,Y]=l.useState((t==null?void 0:t.hp_castle_start)||0),[Et,Pt]=l.useState([]),[Be,Xt]=l.useState(1),Kt=Qt(Ls),Wt=Qt(Gs),Jt=Qt(Ds),Mt=l.useRef(null);let J=(_t=Mt.current)==null?void 0:_t.getContext("2d");Vs(we,Mt.current);const Zt=Ke({mutationFn:h=>We(h.tg_id,h.money,h.energy,h.hp),onSuccess:h=>{t&&A>=(t==null?void 0:t.hp_castle_start)&&Ct.invalidateQueries({queryKey:["info",n]}),e(Ht.updateCoinStore(h))}},Ct);l.useEffect(()=>{s&&W(s)},[s]);const Ce=h=>{t&&d(k=>{const D=k+h;return D>(t==null?void 0:t.hp_castle_start)?t==null?void 0:t.hp_castle_start:D})};l.useEffect(()=>{t&&(f(t.money),p(t.energy_now),d(t.hp_castle_now),N(t.energy_start),Y(t.hp_castle_start))},[Q]),l.useEffect(()=>{t&&(z(!0),N(t.energy_start),Y(t.hp_castle_start))},[t]),l.useEffect(()=>{t&&(d(t.hp_castle_now),p(t.energy_now))},[t==null?void 0:t.lvl]),l.useEffect(()=>{if(t){const h=setTimeout(()=>{Zt.mutate({tg_id:n,money:b,energy:v,hp:A}),B(0)},2e3);return()=>clearTimeout(h)}},[A,b]),l.useEffect(()=>{a&&(Zt.mutate({tg_id:n,money:b,energy:v,hp:A}),B(0))},[a]),l.useEffect(()=>{t&&A>=t.hp_castle_start&&r(A)},[A]),l.useEffect(()=>{if(t&&M){const h=setTimeout(()=>{v<M&&p(k=>k+t.recharge_energy)},1e3);return v>M&&p(M),()=>clearTimeout(h)}},[v]),l.useEffect(()=>{E&&clearInterval(E);const h=setInterval(()=>{e(Ht.updateCoinSumm(o)),f(0),clearInterval(h),L(h)},300);return()=>clearInterval(h)},[b]);function we(h){h.clearRect(0,0,h.canvas.width,h.canvas.height);const{sizeCastle:k,sizeBtn:D,sizeText:pt,squareX:Z,squareY:F,buttonX:mt,buttonY:nt,textX:yt,textY:_,sizeTapeX:bt,sizeTapeY:Rt,tapeX:St,tapeY:It,sizeBgTypeX:it,sizeBgTypeY:Ee,BgTypeX:Me,BgTypeY:Se,sizeTextLvl:Ie,textLvlX:$t,textLvlY:Oe,sizeTexеHp:je,textLvlHpY:Qe,sizeCoinJump:ke}=he(h);if(Et.map((y,at)=>{y.x+=y.dx,y.y+=y.dy;const vt={x:Z*2,y:F*2,value:y.damage,time:Date.now()};Xs(y,Z,F,k)?(Ce(y.damage),B(I=>I+y.damage),f(I=>I+y.damage),T(I=>[...I,vt]),Pt(I=>I.filter((te,ee)=>ee!==at))):Ps(h,y.x,y.y,7,y.color)}),Jt&&(Zs(h,Jt,Me,Se,it,Ee,St,It,bt,Rt),ue(h,Ie,$t,Oe,`Level ${t==null?void 0:t.lvl}`,"white"),ue(h,je,$t,Qe,`${A.toLocaleString("ru-RU")} / ${x==null?void 0:x.toLocaleString("ru-RU")}`,"white")),Kt&&h.drawImage(Kt,Z,F,k,k),G.forEach((y,at)=>{const vt=Date.now()-y.time,I=50*vt/500;h.font=`${ke}px PassionOne`,h.strokeStyle="black",h.lineWidth=2,h.fillStyle="Yellow",h.strokeText(`+ ${y.value}`,y.x,y.y-I),h.fillText(`+ ${y.value}`,y.x,y.y-I),vt>500&&T(te=>te.filter((ee,Te)=>Te!==at))}),Wt){const at=v/(M||0);Js(h,mt,nt,D,Wt,Be,at)}Ws(h,pt,yt,_,`${v.toLocaleString("ru-RU")} / ${M==null?void 0:M.toLocaleString("ru-RU")}`,"black")}return l.useEffect(()=>{if(J){const{centerX:h,centerY:k,sizeBtn:D,buttonX:pt,buttonY:Z}=he(J),F=J==null?void 0:J.canvas;if(F){const mt=nt=>{const yt=F.getBoundingClientRect();for(let _=0;_<nt.touches.length;_++){const bt=nt.touches[_].clientX-yt.left,Rt=nt.touches[_].clientY-yt.top;if(bt>=pt&&bt<=pt+D&&Rt>=Z&&Rt<=Z+D&&v>0){const St=Ae(h,k,H);Pt(it=>[...it,St]),p(it=>it-1),Xt(.9);const It=setTimeout(()=>Xt(1),50);return()=>clearTimeout(It)}}};return F.addEventListener("touchstart",mt,{passive:!0}),()=>{F.removeEventListener("touchstart",mt)}}}},[Ae,J,v,H]),c.jsx(c.Fragment,{children:c.jsx(zs,{ref:Mt})})}const $s="_BtnField_197vz_1",tn="_link_197vz_11",en="_img_197vz_18",sn="_text_197vz_24",xt={BtnField:$s,link:tn,img:en,text:sn};function kt({img:e,text:t,path:s,bottonP:n,left:a,right:r}){let o={bottom:`${n}%`};return a&&(o={...o,left:`${a}%`}),r&&(o={...o,right:`${r}%`}),c.jsx("div",{className:xt.BtnField,style:o,children:c.jsxs(ye,{className:xt.link,to:s,children:[c.jsx("img",{className:xt.img,src:e,alt:t}),c.jsx("p",{className:xt.text,children:t})]})})}const nn="data:image/png;base64,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",an="data:image/png;base64,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",rn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAjQSURBVHgB7VhrjFVXFf72eZ/7mjv3Ms8O74HyEMGQWFutIiqWUJvahEkak0qlKWn6IPqn+sNQ/hgTRRFNaDURE41RoUArFK2W58zImAwQZnCkQwcYZpj3zJ25r/Pc23UObfzTyr2XqdGUNZmce8859+xvf/tba337AHfjbvx/BcMshBD0nJ9u1ILP1yaK7/tML22K5olPumznTo4K447A9u5p1k8dzbfkC86XfSHWM18PYElMuPBlmWYBKMKHzxRIjHHZLFxOx6I/eXz7M0ewbqfPWHDHfwHs1R0LjD+fcg9Yjr2+elHCbFzoQjc5GPdh6AyqD9gmAVYVOA6H7ym43q0g2z1lWXGx54E1xksP/HigWM6YFYN9+Ut12528vPtzWxQsa8qCZRxwn8MjsmSZwY/4UD82D3JEBxP0na7wHMPFHwzgXI8GS/FH71kqfXXzLybbSx1TQgVx8DvxtJ33X1z4oMCy+VOQ+jzIeRuq6sKMO5CTHoxF9WCmGg7AJBHIAF4hjk80unjsszZqJaW2/yKeKGfcisBe69AWez5rWPugAYy4YIoFkSKJkgyciAapsQZI6VDoD4yucQk8sQKsqwBf8pE0iqiv5pBUsUm0bzbDBP2wwHKXf7O6yURdVR5SkRY+5oPJlEimAr02CWYQo5JMCBxafgUiPg+8SLO53gsZnP40DIxJlIp2E2pyvNREKxus2LFDkjxpyeK1HvypbKh6KcHANQ3KnBR8RQHTVdKpAEkVwiCg0fnInO2Gm+OwCwoy0xyZIiWfr76C5mNOqWOXDXZX549Sgvtrl65S4Gdo/WLEFbEo6tMkBwIaAlTBuQxPqYKSuBeSr6L49y5MWgxFz8NQNgFOK6Ejcr6c8lUW2FBbefWRWDqOVNKF6jgQUSpXc6rBNGKX0Q26HtZXTyPFVq0kdnWIYgHTRhq9k0m0vl2N9h4OlTPYXu4re79Y01KqZhWUEQELuz6l3n/PGhfI5EmrNEZ9AhIxGQAMxBfo1ZcY5KrVEMQsggnEElj+rUfRnHNIBj6K0w6G+4vID2Y29bzevX7vBoO6n/Wb241fFrNXDz2aZJxtWrQ8AhQssLpYWEfFe08hNqlGhTQxpY6OJA9RpH+aiS6gpzVUzzVRvyKBNRvrcN/WJVj16fmmM5Peve/h9LLbMVwWs3/4fndMk6wGgzoTJwblVAxcBK1ehLQzWaLDLbDe+FEiNZiIQ0cJMotAJJaDq3Oo/VJdpnP+lTGsZJdwI6mnb4xLxzpfalgJDBU+aPyymE2ls4/5lEy1aRq8IU7libhjUljwpSBNig68GZLHZBbaSAFSdhqKRxMIRWzRDTyURVjUpizc3H8U1pCNz6yyoXG+4K9vjK35T+OXBXYmW1xW3UQrWqtANZR314z9e+1oHSWbWHOplhJ7TKNkkzhkj75HGsknxG/d5/rIHvoL2HgODpme/mF6AtPodJ2B2QArTqxTdFN7fE4T9XrNfV9XEbAbnOaBbhN0nxK4MDIxahpKfAFdN6mkebDbOhG/2Yc6TUXBN3GuL/iNBdXkVzAbYMfGVhjFHEvWNRGjkvSBPxVByaCW6wesCjI3jLpbVTNVCJO06sN95yqktg7IKk1I47hwXQsdGQn+dy+2Dt3AbIBtPXJcZzR4TS0P2SEU8AUNEiSY4GHZEsSoT91LMnSESpXpmrkEkhajbkXXJseBUyfJjVFDmaPh6nAMA1MSlTh3LLXM3nO7BlG6DHJMo/zFTE4mYy2oO5GBIaY86kSuxEO9BvVVoZIZyADMofMxSLEGEkIcPiWfOPMm6b0Il8zu5KiJNvK3Mucw4tj19V9m/3Y7DCWDTS2MuMzT0f57BwPHabAOG1OdVODHTDLcWuADIccjpFM6BnWVmqkSX0yyMKjd5uB3HYMczRB1tBoZE8dPe8gHZkfS9m/buuGHpWAoGey6+xZNUZ36o225aDvgYvJsDoXOETDbp+Um1mJq2BAC9xI0Aa7XUjeroYkosPs7oCUcqA315MBknD1jYiJHCQh7qKrWepq17PdLwVAy2OCBkebCNkqu1mlbwdnLOi6NkneNUGkyTPKmOrhCIIO2G1QBSirBdbij56Hkb4a7BSFsdJyScaHTDorEiF4vfeHJw5lMqRjKqrNP/7owLEWsb7iQ+6csE9ema6CmqohVg5LLh+TIt1iOk9Fm5KyyfVAnL4e/FXAx2Gvg4gmT7qGKovnfffbQRE8545cFNsjWF96cvqLV2Q+T2R5N1DqkS5mK/q1SFvrXyALIWh0l5Bgw3EEnqDJQFZkeUfHGvjwsR5Al915Zvf7j+1BmlO1nqfeL51+b6hKu2RWfS3pVvbBLBaaFk01EdAVcawoYaCe9srDDZmdUHNhdhDdFUmH5czOF6R2f33nSQ5lR0bbmxI51ZLP5vMa5ybDoCzLagmovT6ym7QuBuvgWAaUtD+29igUHh36WhTOqULcqDhg1xte+140RVBBlua73oucf3Yt92V0Sb0hC9oPtiwsvQttuJw6v47dQXfIFIgGnkMNbexmyQxocxe2rbcQjW16d+CcqjIrAutNuLNixpupv2UNPSpIDa0Th+GuIwqLm4MG75qHtcBS9w1HSbH4gkpZbtrw6eQl3EBXJIJuVdaZEYVa927Xi9yJ/sB0Ra5r6PIcYUHHmYAJdN6hZcLuYSPItzxwZP4c7jIqYjTJtqRol56/H4UZqYB/sROT6ddoE0j6MEq3tAgEdpM/BNsG0Njz1p2zrU7PwCrAisIouzdV00mmhBhOn3kH8Qh85K2qdjoITvRyXB3lgcoqmiSefPZltxSyFjArioQZ4Iqdufbu9H/W09JrBMJN3cLIrip6hKqhMHlWjTstzJ8ZfxyxGRWBfeGieuDmZuT+fj8ztG1Th0rvASzciGMx70GWPDGtu8/Ons6cxy3EHrzzXGYfbzj+HvPltJpR04HVdyT2vpvJPbD/qdONDiDuSfbB1fnlj/XyrmG0RvpOLrnB/te3nKOB/OUp9o3I37sZHLf4FfcfNbEPjQccAAAAASUVORK5CYII=";function un(){return c.jsxs(c.Fragment,{children:[c.jsx("header",{className:jt.headers,children:c.jsx(Cs,{})}),c.jsxs("main",{className:jt.main,children:[c.jsx(_s,{}),c.jsx(kt,{text:"Tasks",img:nn,path:"/tasks",bottonP:"35",left:"3"}),c.jsx(kt,{text:"Upgrades",img:an,path:"/upgrades",bottonP:"24",left:"3"}),c.jsx(kt,{text:"Boosters",img:rn,path:"/boosters",bottonP:"24",right:"3"}),c.jsx(Ye,{})]}),c.jsx("footer",{className:jt.footers,children:c.jsx(Ys,{})})]})}export{un as default};
