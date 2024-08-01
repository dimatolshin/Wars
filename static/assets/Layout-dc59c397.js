import{r as c,u as Rt,a as Z,b as Et,c as _,d as Dt,e as Ct,j as l,L as jt,O as Yt}from"./index-35cdeefc.js";import{u as U,B as gt}from"./useQuery-f3fb4516.js";import{g as Bt,a as Lt}from"./getArmy-3bee7851.js";import{q as H,u as Wt,i as Kt,a as Ut,b as Xt,t as Jt}from"./queryClient-0c17e1ad.js";const Zt="_headers_1kva0_1",_t="_main_1kva0_6",$t="_divs_1kva0_12",te="_footers_1kva0_16",X={headers:Zt,main:_t,divs:$t,footers:te},ee="_coinBlock_ryftz_1",se="_descrLvl_ryftz_9",ae="_coinBar_ryftz_16",re="_coinBlockMoney_ryftz_22",oe="_imgCoin_ryftz_29",ne="_bgValue_ryftz_36",ie="_descr_ryftz_9",ce="_btnDonatMoney_ryftz_51",y={coinBlock:ee,descrLvl:se,coinBar:ae,coinBlockMoney:re,imgCoin:oe,bgValue:ne,descr:ie,btnDonatMoney:ce},le="/assets/coinMoney-bd93148e.png",de="/assets/diamondMoney-344191ca.png",At="data:image/png;base64,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";let ue={data:""},pe=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||ue,me=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,fe=/\/\*[^]*?\*\/|  +/g,yt=/\n+/g,E=(t,e)=>{let s="",a="",r="";for(let o in t){let n=t[o];o[0]=="@"?o[1]=="i"?s=o+" "+n+";":a+=o[1]=="f"?E(n,o):o+"{"+E(n,o[1]=="k"?"":e)+"}":typeof n=="object"?a+=E(n,e?e.replace(/([^,])+/g,i=>o.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,i):i?i+" "+d:d)):o):n!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=E.p?E.p(o,n):o+":"+n+";")}return s+(e&&r?e+"{"+r+"}":r)+a},k={},Nt=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+Nt(t[s]);return e}return t},he=(t,e,s,a,r)=>{let o=Nt(t),n=k[o]||(k[o]=(d=>{let u=0,p=11;for(;u<d.length;)p=101*p+d.charCodeAt(u++)>>>0;return"go"+p})(o));if(!k[n]){let d=o!==t?t:(u=>{let p,h,f=[{}];for(;p=me.exec(u.replace(fe,""));)p[4]?f.shift():p[3]?(h=p[3].replace(yt," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][p[1]]=p[2].replace(yt," ").trim();return f[0]})(t);k[n]=E(r?{["@keyframes "+n]:d}:d,s?"":"."+n)}let i=s&&k.g?k.g:null;return s&&(k.g=k[n]),((d,u,p,h)=>{h?u.data=u.data.replace(h,d):u.data.indexOf(d)===-1&&(u.data=p?d+u.data:u.data+d)})(k[n],e,a,i),n},ge=(t,e,s)=>t.reduce((a,r,o)=>{let n=e[o];if(n&&n.call){let i=n(s),d=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=d?"."+d:i&&typeof i=="object"?i.props?"":E(i,""):i===!1?"":i}return a+r+(n??"")},"");function Y(t){let e=this||{},s=t.call?t(e.p):t;return he(s.unshift?s.raw?ge(s,[].slice.call(arguments,1),e.p):s.reduce((a,r)=>Object.assign(a,r&&r.call?r(e.p):r),{}):s,pe(e.target),e.g,e.o,e.k)}let Mt,$,tt;Y.bind({g:1});let w=Y.bind({k:1});function Ae(t,e,s,a){E.p=e,Mt=t,$=s,tt=a}function C(t,e){let s=this||{};return function(){let a=arguments;function r(o,n){let i=Object.assign({},o),d=i.className||r.className;s.p=Object.assign({theme:$&&$()},i),s.o=/ *go\d+/.test(d),i.className=Y.apply(s,a)+(d?" "+d:""),e&&(i.ref=n);let u=t;return t[0]&&(u=i.as||t,delete i.as),tt&&u[0]&&tt(i),Mt(u,i)}return e?e(r):r}}var ye=t=>typeof t=="function",D=(t,e)=>ye(t)?t(e):t,xe=(()=>{let t=0;return()=>(++t).toString()})(),It=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),be=20,F=new Map,ve=1e3,xt=t=>{if(F.has(t))return;let e=setTimeout(()=>{F.delete(t),N({type:4,toastId:t})},ve);F.set(t,e)},ke=t=>{let e=F.get(t);e&&clearTimeout(e)},et=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,be)};case 1:return e.toast.id&&ke(e.toast.id),{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:s}=e;return t.toasts.find(o=>o.id===s.id)?et(t,{type:1,toast:s}):et(t,{type:0,toast:s});case 3:let{toastId:a}=e;return a?xt(a):t.toasts.forEach(o=>{xt(o.id)}),{...t,toasts:t.toasts.map(o=>o.id===a||a===void 0?{...o,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let r=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+r}))}}},G=[],T={toasts:[],pausedAt:void 0},N=t=>{T=et(T,t),G.forEach(e=>{e(T)})},we={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Re=(t={})=>{let[e,s]=c.useState(T);c.useEffect(()=>(G.push(s),()=>{let r=G.indexOf(s);r>-1&&G.splice(r,1)}),[e]);let a=e.toasts.map(r=>{var o,n;return{...t,...t[r.type],...r,duration:r.duration||((o=t[r.type])==null?void 0:o.duration)||(t==null?void 0:t.duration)||we[r.type],style:{...t.style,...(n=t[r.type])==null?void 0:n.style,...r.style}}});return{...e,toasts:a}},Ee=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||xe()}),S=t=>(e,s)=>{let a=Ee(e,t,s);return N({type:2,toast:a}),a.id},x=(t,e)=>S("blank")(t,e);x.error=S("error");x.success=S("success");x.loading=S("loading");x.custom=S("custom");x.dismiss=t=>{N({type:3,toastId:t})};x.remove=t=>N({type:4,toastId:t});x.promise=(t,e,s)=>{let a=x.loading(e.loading,{...s,...s==null?void 0:s.loading});return t.then(r=>(x.success(D(e.success,r),{id:a,...s,...s==null?void 0:s.success}),r)).catch(r=>{x.error(D(e.error,r),{id:a,...s,...s==null?void 0:s.error})}),t};var Ce=(t,e)=>{N({type:1,toast:{id:t,height:e}})},je=()=>{N({type:5,time:Date.now()})},Be=t=>{let{toasts:e,pausedAt:s}=Re(t);c.useEffect(()=>{if(s)return;let o=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(o-i.createdAt);if(d<0){i.visible&&x.dismiss(i.id);return}return setTimeout(()=>x.dismiss(i.id),d)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,s]);let a=c.useCallback(()=>{s&&N({type:6,time:Date.now()})},[s]),r=c.useCallback((o,n)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:u}=n||{},p=e.filter(A=>(A.position||u)===(o.position||u)&&A.height),h=p.findIndex(A=>A.id===o.id),f=p.filter((A,I)=>I<h&&A.visible).length;return p.filter(A=>A.visible).slice(...i?[f+1]:[0,f]).reduce((A,I)=>A+(I.height||0)+d,0)},[e]);return{toasts:e,handlers:{updateHeight:Ce,startPause:je,endPause:a,calculateOffset:r}}},Ne=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Me=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ie=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Oe=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ne} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
    animation: ${Ie} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,He=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Se=C("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${He} 1s linear infinite;
`,qe=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Pe=w`
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
}`,Ve=C("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Pe} 0.2s ease-out forwards;
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
`,ze=C("div")`
  position: absolute;
`,Qe=C("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Fe=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ge=C("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fe} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Te=({toast:t})=>{let{icon:e,type:s,iconTheme:a}=t;return e!==void 0?typeof e=="string"?c.createElement(Ge,null,e):e:s==="blank"?null:c.createElement(Qe,null,c.createElement(Se,{...a}),s!=="loading"&&c.createElement(ze,null,s==="error"?c.createElement(Oe,{...a}):c.createElement(Ve,{...a})))},De=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ye=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Le="0%{opacity:0;} 100%{opacity:1;}",We="0%{opacity:1;} 100%{opacity:0;}",Ke=C("div")`
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
`,Ue=C("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Xe=(t,e)=>{let s=t.includes("top")?1:-1,[a,r]=It()?[Le,We]:[De(s),Ye(s)];return{animation:e?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Je=c.memo(({toast:t,position:e,style:s,children:a})=>{let r=t.height?Xe(t.position||e||"top-center",t.visible):{opacity:0},o=c.createElement(Te,{toast:t}),n=c.createElement(Ue,{...t.ariaProps},D(t.message,t));return c.createElement(Ke,{className:t.className,style:{...r,...s,...t.style}},typeof a=="function"?a({icon:o,message:n}):c.createElement(c.Fragment,null,o,n))});Ae(c.createElement);var Ze=({id:t,className:e,style:s,onHeightUpdate:a,children:r})=>{let o=c.useCallback(n=>{if(n){let i=()=>{let d=n.getBoundingClientRect().height;a(t,d)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return c.createElement("div",{ref:o,className:e,style:s},r)},_e=(t,e)=>{let s=t.includes("top"),a=s?{top:0}:{bottom:0},r=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:It()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...a,...r}},$e=Y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,V=16,ts=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:a,children:r,containerStyle:o,containerClassName:n})=>{let{toasts:i,handlers:d}=Be(s);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:V,left:V,right:V,bottom:V,pointerEvents:"none",...o},className:n,onMouseEnter:d.startPause,onMouseLeave:d.endPause},i.map(u=>{let p=u.position||e,h=d.calculateOffset(u,{reverseOrder:t,gutter:a,defaultPosition:e}),f=_e(p,h);return c.createElement(Ze,{id:u.id,key:u.id,onHeightUpdate:d.updateHeight,className:u.visible?$e:"",style:f},u.type==="custom"?D(u.message,u):r?r(u):c.createElement(Je,{toast:u,position:p}))}))},es=x;function ss(){const t=Rt(),e=Z(Bt),{tg_id:s,userName:a}=Et(),[r,o]=c.useState(!1),n=U({queryFn:()=>Wt(s,a),queryKey:["info",s],enabled:!!s,retry:1},H);c.useEffect(()=>{n.data&&o(!0),t(_.addCoinStore(n.data))},[n.data]);const i=U({queryFn:()=>Kt(s),queryKey:["army",s],enabled:!!s&&r,retry:2},H);c.useEffect(()=>{t(Dt.addArmyStore(i.data))},[i.data]);const u=new URLSearchParams(Ct().search).get("id"),[p,h]=c.useState(),f=U({queryKey:["friend"],queryFn:()=>Ut(s,p),enabled:!!s&&!!p,retry:1},H);return c.useEffect(()=>{u&&h(u)},[u]),c.useEffect(()=>{f.data&&es.success(f.data)},[f.data]),l.jsxs("div",{className:y.coinBlock,children:[l.jsxs("p",{className:y.descrLvl,children:["LVL ",e==null?void 0:e.lvl]}),l.jsxs("div",{className:y.coinBar,children:[l.jsxs("div",{className:y.coinBlockMoney,children:[l.jsx("img",{className:y.imgCoin,src:le,alt:""}),l.jsx("div",{className:y.bgValue,children:l.jsx("p",{className:y.descr,children:e==null?void 0:e.money.toLocaleString("ru-RU")})}),l.jsx(gt,{className:y.btnDonatMoney,children:l.jsx("img",{src:At,alt:""})})]}),l.jsxs("div",{className:y.coinBlockMoney,children:[l.jsx("img",{className:y.imgCoin,src:de,alt:""}),l.jsx("div",{className:y.bgValue,children:l.jsx("p",{className:y.descr,children:"0"})}),l.jsx(gt,{className:y.btnDonatMoney,children:l.jsx("img",{src:At,alt:""})})]})]})]})}const as="_list_138vi_1",rs="_item_138vi_11",os="_link_138vi_21",ns="_img_138vi_26",is="_descr_138vi_31",cs="_active_138vi_39",j={list:as,item:rs,link:os,img:ns,descr:is,active:cs},ls="/assets/guilds-a9a43f6c.png",ds="/assets/friends-205bb587.png",us="/assets/attack-1b400151.png",ps="/assets/leaders-4fe79ef5.png",ms="/assets/airdrop-f8a7acac.png",fs=[{text:"Guilds",path:"/guilds",img:ls},{text:"Friends",path:"/friends",img:ds},{text:"Attack!",path:"/",img:us},{text:"Leaders",path:"/leaders",img:ps},{text:"Airdrop",path:"/airdrop",img:ms}];function hs(){const t=Ct();return l.jsx("ul",{className:j.list,children:fs.map(e=>l.jsx("li",{className:t.pathname===e.path?`${j.item} ${j.active}`:j.item,children:l.jsx(jt,{to:e.path,children:l.jsxs("div",{className:j.link,children:[l.jsx("img",{className:j.img,src:e.img,alt:e.text}),l.jsx("p",{className:j.descr,children:e.text})]})})},e.path))})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var st=function(t,e){return st=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,a){s.__proto__=a}||function(s,a){for(var r in a)a.hasOwnProperty(r)&&(s[r]=a[r])},st(t,e)};function gs(t,e){st(t,e);function s(){this.constructor=t}t.prototype=e===null?Object.create(e):(s.prototype=e.prototype,new s)}var As=100,ys=100,bt=50,at=50,rt=50;function vt(t){var e=t.className,s=t.counterClockwise,a=t.dashRatio,r=t.pathRadius,o=t.strokeWidth,n=t.style;return c.createElement("path",{className:e,style:Object.assign({},n,bs({pathRadius:r,dashRatio:a,counterClockwise:s})),d:xs({pathRadius:r,counterClockwise:s}),strokeWidth:o,fillOpacity:0})}function xs(t){var e=t.pathRadius,s=t.counterClockwise,a=e,r=s?1:0;return`
      M `+at+","+rt+`
      m 0,-`+a+`
      a `+a+","+a+" "+r+" 1 1 0,"+2*a+`
      a `+a+","+a+" "+r+" 1 1 0,-"+2*a+`
    `}function bs(t){var e=t.counterClockwise,s=t.dashRatio,a=t.pathRadius,r=Math.PI*2*a,o=(1-s)*r;return{strokeDasharray:r+"px "+r+"px",strokeDashoffset:(e?-o:o)+"px"}}var vs=function(t){gs(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return bt-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var s=this.props,a=s.value,r=s.minValue,o=s.maxValue,n=Math.min(Math.max(a,r),o);return(n-r)/(o-r)},e.prototype.render=function(){var s=this.props,a=s.circleRatio,r=s.className,o=s.classes,n=s.counterClockwise,i=s.styles,d=s.strokeWidth,u=s.text,p=this.getPathRadius(),h=this.getPathRatio();return c.createElement("svg",{className:o.root+" "+r,style:i.root,viewBox:"0 0 "+As+" "+ys,"data-test-id":"CircularProgressbar"},this.props.background?c.createElement("circle",{className:o.background,style:i.background,cx:at,cy:rt,r:bt}):null,c.createElement(vt,{className:o.trail,counterClockwise:n,dashRatio:a,pathRadius:p,strokeWidth:d,style:i.trail}),c.createElement(vt,{className:o.path,counterClockwise:n,dashRatio:h*a,pathRadius:p,strokeWidth:d,style:i.path}),u?c.createElement("text",{className:o.text,style:i.text,x:at,y:rt},u):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(c.Component);function ks(t){var e=t.rotation,s=t.strokeLinecap,a=t.textColor,r=t.textSize,o=t.pathColor,n=t.pathTransition,i=t.pathTransitionDuration,d=t.trailColor,u=t.backgroundColor,p=e==null?void 0:"rotate("+e+"turn)",h=e==null?void 0:"center center";return{root:{},path:z({stroke:o,strokeLinecap:s,transform:p,transformOrigin:h,transition:n,transitionDuration:i==null?void 0:i+"s"}),trail:z({stroke:d,strokeLinecap:s,transform:p,transformOrigin:h}),text:z({fill:a,fontSize:r}),background:z({fill:u})}}function z(t){return Object.keys(t).forEach(function(e){t[e]==null&&delete t[e]}),t}const ws="_blockField_cc00t_1",Rs="_infoLvlHp_cc00t_7",Es="_lvl_cc00t_25",Cs="_hpCastle_cc00t_32",js="_btnTap_cc00t_50",Bs="_textEnergy_cc00t_78",Ns="_progress_cc00t_88",B={blockField:ws,infoLvlHp:Rs,lvl:Es,hpCastle:Cs,btnTap:js,textEnergy:Bs,progress:Ns},Ms="_canvas_brbgf_1",Is={canvas:Ms},Os=c.forwardRef((t,e)=>l.jsx("canvas",{className:Is.canvas,ref:e})),Hs=t=>{const[e,s]=c.useState(null);return c.useEffect(()=>{const a=new Image;a.src=t,a.onload=()=>{s(a)}},[t]),e},Ss="/assets/casle-lvl-1-16f970d5.png";function qs(t){const{width:e,height:s}=t.getBoundingClientRect();if(t.width!==e||t.height!==s){const r=t.getContext("2d");return t.width=e*2,t.height=s*2,r==null||r.scale(2,2),{x:t.width,y:t.height}}return!1}function Ps(t,e){c.useEffect(()=>{const s=e,a=s==null?void 0:s.getContext("2d");let r=0,o;if(a){const n=()=>{r++,s&&qs(s),t(a,r),o=window.requestAnimationFrame(n)};return n(),()=>{window.cancelAnimationFrame(o)}}},[t])}function ot(t){const e=t.canvas.width/2,s=t.canvas.height/2,a=e*.5,r=e/2-a/2,o=s/2.4-a,n=e*.06;return{centerX:e,centerY:s,sizeCastle:a,squareX:r,squareY:o,sizeCoinJump:n}}function Vs(t,e,s,a,r){t.beginPath(),t.arc(e,s,a,0,2*Math.PI,!1),t.fillStyle=r,t.fill()}function zs(t,e,s,a){const r=t.x>=e+40&&t.x<=e+a-40,o=t.y>=s&&t.y<=s+a-30;return r&&o}function kt(t){return Math.random()*t}function wt(t,e,s,a){const r=kt(e-t)+t,o=kt(a-s)+s;return{x:r,y:o}}function Qs(t,e,s){const a=Math.random();if(!Array.isArray(s))throw new Error("armyUser должен быть массивом");const r=s[Math.floor(Math.random()*s.length)],o=a<.5?wt(10,60,e/7,e/1.8+200):wt(t-10,t-60,e/7,e/1.8+200),n=(t/2-o.x)/(r.speed*60),i=(e/3-o.y)/(r.speed*60);return{...o,dx:n,dy:i,color:r.name,damage:r.damage,img:r.image}}function Fs(t,e,s){const{sizeCoinJump:a}=ot(t);t.font=`${a}px PassionOne`,t.strokeStyle="black",t.lineWidth=2,t.fillStyle="Yellow",t.strokeText(`+ ${e.value}`,e.x,e.y-s),t.fillText(`+ ${e.value}`,e.x,e.y-s)}function Gs(){var mt;const t=Rt(),e=Z(Bt),s=Z(Lt),{tg_id:a}=Et(),[r,o]=c.useState(null),[n,i]=c.useState(0),[d,u]=c.useState(0),[p,h]=c.useState(0),[f,A]=c.useState(0),[I,Ot]=c.useState(!1),[nt,Ht]=c.useState(0),[St,it]=c.useState([]),[qt,Pt]=c.useState(s),[R,ct]=c.useState((e==null?void 0:e.energy_start)||0),[L,lt]=c.useState((e==null?void 0:e.hp_castle_start)||0),Vt=f/R*100,[zt,dt]=c.useState([]),ut=Hs(Ss),W=c.useRef(null);let O=(mt=W.current)==null?void 0:mt.getContext("2d");Ps(Ft,W.current);const pt=Xt({mutationFn:m=>Jt(m.tg_id,m.money,m.energy,m.hp),onSuccess:m=>{e&&p>=(e==null?void 0:e.hp_castle_start)&&H.invalidateQueries({queryKey:["info",a]}),u(0),t(_.updateCoinStore(m))}},H);c.useEffect(()=>{s&&Pt(s)},[s]);const Qt=m=>{e&&h(b=>{const M=b+m;return M>(e==null?void 0:e.hp_castle_start)?e==null?void 0:e.hp_castle_start:M})};c.useEffect(()=>{e&&(i(e.money),A(e.energy_now),h(e.hp_castle_now),ct(e.energy_start),lt(e.hp_castle_start))},[I]),c.useEffect(()=>{e&&(Ot(!0),ct(e.energy_start),lt(e.hp_castle_start))},[e]),c.useEffect(()=>{e&&(h(e.hp_castle_now),A(e.energy_now))},[e==null?void 0:e.lvl]),c.useEffect(()=>{if(e){const m=setTimeout(()=>{pt.mutate({tg_id:a,money:d,energy:f,hp:p})},2e3);return()=>clearTimeout(m)}},[p,d]),c.useEffect(()=>{r&&pt.mutate({tg_id:a,money:d,energy:f,hp:p})},[r]),c.useEffect(()=>{e&&p>=e.hp_castle_start&&o(p)},[p]),c.useEffect(()=>{if(e&&R){const m=setTimeout(()=>{f<R&&A(b=>b+e.recharge_energy)},1e3);return f>R&&A(R),()=>clearTimeout(m)}},[f]),c.useEffect(()=>{nt&&clearInterval(nt);const m=setInterval(()=>{t(_.updateCoinSumm(n)),i(0),clearInterval(m),Ht(m)},300);return()=>clearInterval(m)},[d]);function Ft(m){m.clearRect(0,0,m.canvas.width,m.canvas.height);const{sizeCastle:b,squareX:M,squareY:q}=ot(m);zt.map((g,K)=>{g.x+=g.dx,g.y+=g.dy;const P={x:g.x,y:g.y,value:g.damage,time:Date.now()};zs(g,M,q,b)?(Qt(g.damage),u(v=>v+g.damage),i(v=>v+g.damage),it(v=>[...v,P]),dt(v=>v.filter((ft,ht)=>ht!==K))):Vs(m,g.x,g.y,7,g.color)}),ut&&m.drawImage(ut,M,q,b,b),St.forEach((g,K)=>{const P=Date.now()-g.time,v=50*P/500;Fs(m,g,v),P>500&&it(ft=>ft.filter((ht,Tt)=>Tt!==K))})}const Gt=()=>{if(O){const{centerX:m,centerY:b}=ot(O);if((O==null?void 0:O.canvas)&&f>0){const q=Qs(m,b,qt);dt(g=>[...g,q]),A(g=>g-1)}}};return l.jsxs("div",{className:B.blockField,children:[l.jsxs("div",{className:B.infoLvlHp,children:[l.jsxs("p",{className:B.lvl,children:["Level ",e==null?void 0:e.lvl]}),l.jsxs("p",{className:B.hpCastle,children:[p.toLocaleString("ru-RU")," / ",L==null?void 0:L.toLocaleString("ru-RU")]})]}),l.jsx(Os,{ref:W}),l.jsxs("button",{onTouchStart:Gt,className:B.btnTap,children:[l.jsx(vs,{className:B.progress,value:Vt,strokeWidth:5,counterClockwise:!0,styles:ks({pathColor:"#1fbcff"})}),l.jsx("p",{className:B.textEnergy,children:`${f.toLocaleString("ru-RU")} / ${R==null?void 0:R.toLocaleString("ru-RU")}`})]})]})}const Ts="_BtnField_197vz_1",Ds="_link_197vz_11",Ys="_img_197vz_18",Ls="_text_197vz_24",Q={BtnField:Ts,link:Ds,img:Ys,text:Ls};function J({img:t,text:e,path:s,bottonP:a,left:r,right:o}){let n={bottom:`${a}%`};return r&&(n={...n,left:`${r}%`}),o&&(n={...n,right:`${o}%`}),l.jsx("div",{className:Q.BtnField,style:n,children:l.jsxs(jt,{className:Q.link,to:s,children:[l.jsx("img",{className:Q.img,src:t,alt:e}),l.jsx("p",{className:Q.text,children:e})]})})}const Ws="data:image/png;base64,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",Ks="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAkvSURBVHgB7VhpbBSHGX1z7ezh3bXXXi++YnMYxybGLhAEThNsKIWmnFFDg9IWUlHlqOiPqipVoxZopUpF5A9VokRVlVC1lIQEkYSKJAr3WW5sbMDGG3ysvfZe3nN25+y3Jkj9ubumUivxJGvtkXfmzTfve+/7BniER/j/AoOHCMMAs6MD3IO/dxyHxjAw8JAwZbLbt29nZ3a+URZjUj+HzjQbhjEXDAuD0cHpiAD6P82G+N7gNzJ9O3dCxxQwZbJvr+e3geN/PaN+jqOmpgY2hwMcx0LXM5AzGfiGh9Hf2xtLJBJvbz2kbsMUMCWyl+dDuFBr9q5cvaa6rq6KdMDd1wKd1QBV12Dpdx2xeBQf7Nsfdemx8g0HIKNAsJgC5l8hTRpqVAqPwEjLYIisklHgH7gLKRGAbkjQlCSiYz76TDkxRfDID0y2WyYL9/XnOwxzdqivZ06JEQBrtkJKJYjsAGx2O9zVlWBkGfcGo1CAs1RVBVNAvpU1HhDN4s03X7NltOLgaFKjE+nQpRjsVjMaW1pQN302IKUBVUUwkgZvOCLHt7dPOoVRoPwK1uzqLS8uujKEXU3lxlPPxw6xKxZVwiToZAQ8VN0A9RiikTDCMQk3fTo+55fjQtR1y+Fkt9ze/+45FAAOBeC3r7V0fBpuOdzx0tbZ05d+i7HfOAAoMspKbFRhjUrAg2M4xGMx+EMKghIL29a/oaxlibv/nv/55RXcYE+vtwt5Ii+y2UYnZ2VPj/i3WJrXLJ/btgic6ISYCkHqPIbRSBLhOHV/UoUvnKYfBaMTEpTWHyEy7/uwlrggaLp4vmckmrh79RPkibwa7H4a7TRWrV8jeAMhMAoLq6BBXPsrsG434qf2IjneB0nVIXICOJcH4upXwLVvRQ3LwRtlcKfnHp0oXpAL5esGk2itHuw71tuL2z0hVE4T4almULz8VdSveRlVmSgEJQaZs2KEqt6fNGEwmMZwUMVYIIHR4SG0lyZu5V3WQsga28HutTUcK/dFR0J371SaS57E0WsyVEUFZ1ZgFXlY2WIkZR7JNDmEkQFv0lHqMiEcnYApMaDwFdP3oQDk/TgYyvfNv3y/n+GsR7q6T0IZ88JTyaO8BnCWWsDZHEiT3wpOHiXTBJQ/xuOJBjMMZRzXT30MllG/bK+/G0ABKNi62jeuX3krXnwkDAfKPFUoKa2Fq7wMFpsVoiDC0DWkpTAS4XEM3OtFLCIBchLznIENZ97/8AAKQMFks87w9E+2vNDp4/fJjIkCXwXD0cGsc+lkYJwKGg2ItACBpjCBsqvREdq3O+Db1HHihIoCkJdmJ63rBNldO7QXX9o8ayCEbYrFAfPjP4ApQ9OglIQmJ6BqMnieA2uiCcxUDNbqhjR2HD1D1zfueYI9ROf471c221w76LNnvOM75/zlf4ljpmfxys1QzS4oCTJtD4ukakCmoYbKC0EwYBeKkKJgcHAZ3Dz7EVLB28Fm6+grpz84dHDy/rNDWo4Det4y2PXyko27R2ftVYWZwvwVz8EmlkClq9lrOTiLBWQ0BZLGw0RxI9JDEE0GIhQO0XtpKBTFN0/uR3zQi9pKeV3nu2998jWJh0/28XULSwOpZ7rY8uKKheSr2UvcCwwhZCRQNNuBescQapwlMBXVQtEnMBr0ozdoo0azQfRb0FhinUyWnmuH4Ovt0lcKFxd8+PHl67lWNi/N2ooa/jigKhVPLdtEy4GGG7f7UFF1HH9YRyQdCdgZJ9z892BHOQ26HIIzjmBM6YQ/bcMXXbOw93A9FrQsRlPLOoyN+9nuRNN7NMK35nr9nH32jddn1vSNFa2f3bwYds6EYCwDSepER9sxuOxRGBpHAUATlzFCsuiHrN8mQWZoBWNRIWawtOUCqkouYXh4FDIvoLF1FUjKc1ds+HZHrhxyJvun3o62FC+4Kmq/CU0AfCNDaG04h0i/goEQj4CsYUybgF+/hgH1EIaMoxhRhhGihuuTZHQPpzGn4SYCgbu0o+lw19QjZnVhRCp6JlcOOcvAH7cVWRwiRLuTqphBIu1HSXEcMaTRS5k/YThpjVApoUbBGrTGUB2yUtQYdnKlHQrGyc7oqDkERUmDpeqW2utgjHU35coh58q22u/OZzICFLIgRmOpzzkYAkeELPD5xyHJKhFDdpqFQiGhk2ZVOnv22AjdTJy2BZYT6Uay6wZP6shMdpXOmky5csiZbDTjDCa1IMSMTo+DpViths/3GMymJDIZDj09XgRCSdoSaKvlFEovHWmS7OBgiNbxEZjpOxOsh/63AjxHt6hbIClhSj1zrhRyl0FYtd8y0QX9w71w1TWgotyJq9cWY1pVEA5bP9QESzNAAL6hIDlF1jlZyKRjmruIPAPZ7sH5o22oLp9BT4NDOOhFIjoGkY335coh58qua/6qR1SkSHfX52CoaaaRdt01bpw+tRTRxEw4PBo4C5Gj56xoGrmBQnGr03bAgLdX4eiFRZRss1Bd7YZG37918yjMKg+Xx3U5Vw45rzVXzvaPzWxoaPJrXAtPW2txRQ3Ky6qQkgWcv1iK0Hgj+NIkRGpCzmaBbi5CJOlBV3cbLlxsI/HW48m5CyCwDHzdp/CV9yKmm8P+3yy8tP0fn0WiuXDIOcGyGb527VOzT+hzb6Y1la+a8TTmLlgFXdQQoC3WHw5jxBeEpklghSRYzUp+S5WjRKv11MLtcsLKkYXdOIP+O2dJ+2a0Tx9tO/zOX8/nyiEvstnPeateXdZnMAdTLOwOIjLniedQ11SLihlmOGl4caTGYFIEhOh/43YXSdcCb3cQYb8fnVe+nNSqBVpygRH83ckjB3chD+QzGzD3OYP54dZ1Pz3lde/26byYPWhxONHY3IyF9bVYMqsMdcUWdEdk/GsohqvdXtzqvI1EYhwsOYWJSU9M4/XXvZ/++S3kiYKG7+yo+AvTs8v+fn7GjyUl/V2Jtdg1QyRvoTcwOlmbZiIJyNBpRITOgyeSopFCSRHzWWOl+fdf7NlT0EuOKb1FzFa5fvWmpuKi5NZQRl+d0Z2lMc0qKjo5ACWXhdHTshrt9xQlb8yzSnv310nHmJ2FbQlTJvufoPdYfG/lbPdHl3RziokLL9R1tib5ZWeaLf2hZ392JIP/RTxoxEd4hEcA/g1Q5wl16CjeowAAAABJRU5ErkJggg==",Us="data:image/png;base64,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";function $s(){return l.jsxs(l.Fragment,{children:[l.jsxs("header",{className:X.headers,children:[l.jsx(ts,{position:"top-center",reverseOrder:!1}),l.jsx(ss,{})]}),l.jsxs("main",{className:X.main,children:[l.jsx(Gs,{}),l.jsx(J,{text:"Tasks",img:Ws,path:"/tasks",bottonP:"35",left:"3"}),l.jsx(J,{text:"Upgrades",img:Ks,path:"/upgrades",bottonP:"24",left:"3"}),l.jsx(J,{text:"Boosters",img:Us,path:"/boosters",bottonP:"24",right:"3"}),l.jsx(Yt,{})]}),l.jsx("footer",{className:X.footers,children:l.jsx(hs,{})})]})}export{$s as default};
