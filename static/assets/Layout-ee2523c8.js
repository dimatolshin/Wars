import{r as c,u as Tt,a as it,b as zt,c as ct,d as ne,e as St,j as u,L as qt,O as ie}from"./index-13b98abf.js";import{u as ot,B as wt}from"./useQuery-bd88bb78.js";import{g as Pt,a as ce}from"./getArmy-3bee7851.js";import{q,u as le,i as de,a as ue,b as pe,t as me}from"./queryClient-1a4128f7.js";const fe="_headers_1kva0_1",ge="_main_1kva0_6",he="_divs_1kva0_12",Ae="_footers_1kva0_16",rt={headers:fe,main:ge,divs:he,footers:Ae},ye="_coinBlock_ryftz_1",xe="_descrLvl_ryftz_9",be="_coinBar_ryftz_16",ve="_coinBlockMoney_ryftz_22",ke="_imgCoin_ryftz_29",we="_bgValue_ryftz_36",Re="_descr_ryftz_9",Ee="_btnDonatMoney_ryftz_51",y={coinBlock:ye,descrLvl:xe,coinBar:be,coinBlockMoney:ve,imgCoin:ke,bgValue:we,descr:Re,btnDonatMoney:Ee},Ce="/assets/coinMoney-bd93148e.png",Be="/assets/diamondMoney-344191ca.png",Rt="data:image/png;base64,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";let je={data:""},Me=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||je,Ne=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ie=/\/\*[^]*?\*\/|  +/g,Et=/\n+/g,C=(t,e)=>{let s="",a="",o="";for(let r in t){let n=t[r];r[0]=="@"?r[1]=="i"?s=r+" "+n+";":a+=r[1]=="f"?C(n,r):r+"{"+C(n,r[1]=="k"?"":e)+"}":typeof n=="object"?a+=C(n,e?e.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=C.p?C.p(r,n):r+":"+n+";")}return s+(e&&o?e+"{"+o+"}":o)+a},w={},Vt=t=>{if(typeof t=="object"){let e="";for(let s in t)e+=s+Vt(t[s]);return e}return t},Oe=(t,e,s,a,o)=>{let r=Vt(t),n=w[r]||(w[r]=(l=>{let d=0,p=11;for(;d<l.length;)p=101*p+l.charCodeAt(d++)>>>0;return"go"+p})(r));if(!w[n]){let l=r!==t?t:(d=>{let p,g,f=[{}];for(;p=Ne.exec(d.replace(Ie,""));)p[4]?f.shift():p[3]?(g=p[3].replace(Et," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(Et," ").trim();return f[0]})(t);w[n]=C(o?{["@keyframes "+n]:l}:l,s?"":"."+n)}let i=s&&w.g?w.g:null;return s&&(w.g=w[n]),((l,d,p,g)=>{g?d.data=d.data.replace(g,l):d.data.indexOf(l)===-1&&(d.data=p?l+d.data:d.data+l)})(w[n],e,a,i),n},He=(t,e,s)=>t.reduce((a,o,r)=>{let n=e[r];if(n&&n.call){let i=n(s),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":C(i,""):i===!1?"":i}return a+o+(n??"")},"");function _(t){let e=this||{},s=t.call?t(e.p):t;return Oe(s.unshift?s.raw?He(s,[].slice.call(arguments,1),e.p):s.reduce((a,o)=>Object.assign(a,o&&o.call?o(e.p):o),{}):s,Me(e.target),e.g,e.o,e.k)}let Yt,lt,dt;_.bind({g:1});let R=_.bind({k:1});function Te(t,e,s,a){C.p=e,Yt=t,lt=s,dt=a}function B(t,e){let s=this||{};return function(){let a=arguments;function o(r,n){let i=Object.assign({},r),l=i.className||o.className;s.p=Object.assign({theme:lt&&lt()},i),s.o=/ *go\d+/.test(l),i.className=_.apply(s,a)+(l?" "+l:""),e&&(i.ref=n);let d=t;return t[0]&&(d=i.as||t,delete i.as),dt&&d[0]&&dt(i),Yt(d,i)}return e?e(o):o}}var ze=t=>typeof t=="function",Z=(t,e)=>ze(t)?t(e):t,Se=(()=>{let t=0;return()=>(++t).toString()})(),Qt=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),qe=20,K=new Map,Pe=1e3,Ct=t=>{if(K.has(t))return;let e=setTimeout(()=>{K.delete(t),N({type:4,toastId:t})},Pe);K.set(t,e)},Ve=t=>{let e=K.get(t);e&&clearTimeout(e)},ut=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,qe)};case 1:return e.toast.id&&Ve(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:s}=e;return t.toasts.find(r=>r.id===s.id)?ut(t,{type:1,toast:s}):ut(t,{type:0,toast:s});case 3:let{toastId:a}=e;return a?Ct(a):t.toasts.forEach(r=>{Ct(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===a||a===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let o=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+o}))}}},U=[],J={toasts:[],pausedAt:void 0},N=t=>{J=ut(J,t),U.forEach(e=>{e(J)})},Ye={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Qe=(t={})=>{let[e,s]=c.useState(J);c.useEffect(()=>(U.push(s),()=>{let o=U.indexOf(s);o>-1&&U.splice(o,1)}),[e]);let a=e.toasts.map(o=>{var r,n;return{...t,...t[o.type],...o,duration:o.duration||((r=t[o.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||Ye[o.type],style:{...t.style,...(n=t[o.type])==null?void 0:n.style,...o.style}}});return{...e,toasts:a}},Fe=(t,e="blank",s)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...s,id:(s==null?void 0:s.id)||Se()}),P=t=>(e,s)=>{let a=Fe(e,t,s);return N({type:2,toast:a}),a.id},x=(t,e)=>P("blank")(t,e);x.error=P("error");x.success=P("success");x.loading=P("loading");x.custom=P("custom");x.dismiss=t=>{N({type:3,toastId:t})};x.remove=t=>N({type:4,toastId:t});x.promise=(t,e,s)=>{let a=x.loading(e.loading,{...s,...s==null?void 0:s.loading});return t.then(o=>(x.success(Z(e.success,o),{id:a,...s,...s==null?void 0:s.success}),o)).catch(o=>{x.error(Z(e.error,o),{id:a,...s,...s==null?void 0:s.error})}),t};var Ge=(t,e)=>{N({type:1,toast:{id:t,height:e}})},De=()=>{N({type:5,time:Date.now()})},Le=t=>{let{toasts:e,pausedAt:s}=Qe(t);c.useEffect(()=>{if(s)return;let r=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&x.dismiss(i.id);return}return setTimeout(()=>x.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,s]);let a=c.useCallback(()=>{s&&N({type:6,time:Date.now()})},[s]),o=c.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:d}=n||{},p=e.filter(h=>(h.position||d)===(r.position||d)&&h.height),g=p.findIndex(h=>h.id===r.id),f=p.filter((h,E)=>E<g&&h.visible).length;return p.filter(h=>h.visible).slice(...i?[f+1]:[0,f]).reduce((h,E)=>h+(E.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:Ge,startPause:De,endPause:a,calculateOffset:o}}},We=R`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Xe=R`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ke=R`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ue=B("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${We} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Xe} 0.15s ease-out forwards;
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
    animation: ${Ke} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Je=R`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ze=B("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Je} 1s linear infinite;
`,_e=R`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,$e=R`
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
}`,ts=B("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_e} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${$e} 0.2s ease-out forwards;
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
`,es=B("div")`
  position: absolute;
`,ss=B("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,as=R`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,os=B("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${as} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,rs=({toast:t})=>{let{icon:e,type:s,iconTheme:a}=t;return e!==void 0?typeof e=="string"?c.createElement(os,null,e):e:s==="blank"?null:c.createElement(ss,null,c.createElement(Ze,{...a}),s!=="loading"&&c.createElement(es,null,s==="error"?c.createElement(Ue,{...a}):c.createElement(ts,{...a})))},ns=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,is=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,cs="0%{opacity:0;} 100%{opacity:1;}",ls="0%{opacity:1;} 100%{opacity:0;}",ds=B("div")`
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
`,us=B("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ps=(t,e)=>{let s=t.includes("top")?1:-1,[a,o]=Qt()?[cs,ls]:[ns(s),is(s)];return{animation:e?`${R(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${R(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ms=c.memo(({toast:t,position:e,style:s,children:a})=>{let o=t.height?ps(t.position||e||"top-center",t.visible):{opacity:0},r=c.createElement(rs,{toast:t}),n=c.createElement(us,{...t.ariaProps},Z(t.message,t));return c.createElement(ds,{className:t.className,style:{...o,...s,...t.style}},typeof a=="function"?a({icon:r,message:n}):c.createElement(c.Fragment,null,r,n))});Te(c.createElement);var fs=({id:t,className:e,style:s,onHeightUpdate:a,children:o})=>{let r=c.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;a(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return c.createElement("div",{ref:r,className:e,style:s},o)},gs=(t,e)=>{let s=t.includes("top"),a=s?{top:0}:{bottom:0},o=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Qt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(s?1:-1)}px)`,...a,...o}},hs=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,D=16,As=({reverseOrder:t,position:e="top-center",toastOptions:s,gutter:a,children:o,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=Le(s);return c.createElement("div",{style:{position:"fixed",zIndex:9999,top:D,left:D,right:D,bottom:D,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(d=>{let p=d.position||e,g=l.calculateOffset(d,{reverseOrder:t,gutter:a,defaultPosition:e}),f=gs(p,g);return c.createElement(fs,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?hs:"",style:f},d.type==="custom"?Z(d.message,d):o?o(d):c.createElement(ms,{toast:d,position:p}))}))},ys=x;function xs(){const t=Tt(),e=it(Pt),{tg_id:s,userName:a}=zt(),[o,r]=c.useState(!1),n=ot({queryFn:()=>le(s,a),queryKey:["info",s],enabled:!!s,retry:1},q);c.useEffect(()=>{n.data&&r(!0),t(ct.addCoinStore(n.data))},[n.data]);const i=ot({queryFn:()=>de(s),queryKey:["army",s],enabled:!!s&&o,retry:2},q);c.useEffect(()=>{t(ne.addArmyStore(i.data))},[i.data]);const d=new URLSearchParams(St().search).get("id"),[p,g]=c.useState(),f=ot({queryKey:["friend"],queryFn:()=>ue(s,p),enabled:!!s&&!!p,retry:1},q);return c.useEffect(()=>{d&&g(d)},[d]),c.useEffect(()=>{f.data&&ys.success(f.data)},[f.data]),u.jsxs("div",{className:y.coinBlock,children:[u.jsxs("p",{className:y.descrLvl,children:["LVL ",e==null?void 0:e.lvl]}),u.jsxs("div",{className:y.coinBar,children:[u.jsxs("div",{className:y.coinBlockMoney,children:[u.jsx("img",{className:y.imgCoin,src:Ce,alt:""}),u.jsx("div",{className:y.bgValue,children:u.jsx("p",{className:y.descr,children:e==null?void 0:e.money.toLocaleString("ru-RU")})}),u.jsx(wt,{className:y.btnDonatMoney,children:u.jsx("img",{src:Rt,alt:""})})]}),u.jsxs("div",{className:y.coinBlockMoney,children:[u.jsx("img",{className:y.imgCoin,src:Be,alt:""}),u.jsx("div",{className:y.bgValue,children:u.jsx("p",{className:y.descr,children:"0"})}),u.jsx(wt,{className:y.btnDonatMoney,children:u.jsx("img",{src:Rt,alt:""})})]})]})]})}const bs="_list_138vi_1",vs="_item_138vi_11",ks="_link_138vi_21",ws="_img_138vi_26",Rs="_descr_138vi_31",Es="_active_138vi_39",M={list:bs,item:vs,link:ks,img:ws,descr:Rs,active:Es},Cs="/assets/guilds-a9a43f6c.png",Bs="/assets/friends-205bb587.png",js="/assets/attack-1b400151.png",Ms="/assets/leaders-4fe79ef5.png",Ns="/assets/airdrop-f8a7acac.png",Is=[{text:"Guilds",path:"/guilds",img:Cs},{text:"Friends",path:"/friends",img:Bs},{text:"Attack!",path:"/",img:js},{text:"Leaders",path:"/leaders",img:Ms},{text:"Airdrop",path:"/airdrop",img:Ns}];function Os(){const t=St();return u.jsx("ul",{className:M.list,children:Is.map(e=>u.jsx("li",{className:t.pathname===e.path?`${M.item} ${M.active}`:M.item,children:u.jsx(qt,{to:e.path,children:u.jsxs("div",{className:M.link,children:[u.jsx("img",{className:M.img,src:e.img,alt:e.text}),u.jsx("p",{className:M.descr,children:e.text})]})})},e.path))})}/*! *****************************************************************************
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
***************************************************************************** */var pt=function(t,e){return pt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,a){s.__proto__=a}||function(s,a){for(var o in a)a.hasOwnProperty(o)&&(s[o]=a[o])},pt(t,e)};function Hs(t,e){pt(t,e);function s(){this.constructor=t}t.prototype=e===null?Object.create(e):(s.prototype=e.prototype,new s)}var Ts=100,zs=100,Bt=50,mt=50,ft=50;function jt(t){var e=t.className,s=t.counterClockwise,a=t.dashRatio,o=t.pathRadius,r=t.strokeWidth,n=t.style;return c.createElement("path",{className:e,style:Object.assign({},n,qs({pathRadius:o,dashRatio:a,counterClockwise:s})),d:Ss({pathRadius:o,counterClockwise:s}),strokeWidth:r,fillOpacity:0})}function Ss(t){var e=t.pathRadius,s=t.counterClockwise,a=e,o=s?1:0;return`
      M `+mt+","+ft+`
      m 0,-`+a+`
      a `+a+","+a+" "+o+" 1 1 0,"+2*a+`
      a `+a+","+a+" "+o+" 1 1 0,-"+2*a+`
    `}function qs(t){var e=t.counterClockwise,s=t.dashRatio,a=t.pathRadius,o=Math.PI*2*a,r=(1-s)*o;return{strokeDasharray:o+"px "+o+"px",strokeDashoffset:(e?-r:r)+"px"}}var Ps=function(t){Hs(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},e.prototype.getPathRadius=function(){return Bt-this.props.strokeWidth/2-this.getBackgroundPadding()},e.prototype.getPathRatio=function(){var s=this.props,a=s.value,o=s.minValue,r=s.maxValue,n=Math.min(Math.max(a,o),r);return(n-o)/(r-o)},e.prototype.render=function(){var s=this.props,a=s.circleRatio,o=s.className,r=s.classes,n=s.counterClockwise,i=s.styles,l=s.strokeWidth,d=s.text,p=this.getPathRadius(),g=this.getPathRatio();return c.createElement("svg",{className:r.root+" "+o,style:i.root,viewBox:"0 0 "+Ts+" "+zs,"data-test-id":"CircularProgressbar"},this.props.background?c.createElement("circle",{className:r.background,style:i.background,cx:mt,cy:ft,r:Bt}):null,c.createElement(jt,{className:r.trail,counterClockwise:n,dashRatio:a,pathRadius:p,strokeWidth:l,style:i.trail}),c.createElement(jt,{className:r.path,counterClockwise:n,dashRatio:g*a,pathRadius:p,strokeWidth:l,style:i.path}),d?c.createElement("text",{className:r.text,style:i.text,x:mt,y:ft},d):null)},e.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},e}(c.Component);function Vs(t){var e=t.rotation,s=t.strokeLinecap,a=t.textColor,o=t.textSize,r=t.pathColor,n=t.pathTransition,i=t.pathTransitionDuration,l=t.trailColor,d=t.backgroundColor,p=e==null?void 0:"rotate("+e+"turn)",g=e==null?void 0:"center center";return{root:{},path:L({stroke:r,strokeLinecap:s,transform:p,transformOrigin:g,transition:n,transitionDuration:i==null?void 0:i+"s"}),trail:L({stroke:l,strokeLinecap:s,transform:p,transformOrigin:g}),text:L({fill:a,fontSize:o}),background:L({fill:d})}}function L(t){return Object.keys(t).forEach(function(e){t[e]==null&&delete t[e]}),t}const Ys="_blockField_zs0ey_1",Qs="_btnTap_zs0ey_7",Fs="_textEnergy_zs0ey_35",Gs="_progress_zs0ey_45",W={blockField:Ys,btnTap:Qs,textEnergy:Fs,progress:Gs},Ds="_canvas_brbgf_1",Ls={canvas:Ds},Ws=c.forwardRef((t,e)=>u.jsx("canvas",{className:Ls.canvas,ref:e})),Mt=t=>{const[e,s]=c.useState(null);return c.useEffect(()=>{const a=new Image;a.src=t,a.onload=()=>{s(a)}},[t]),e},Xs="/assets/casle-lvl-1-16f970d5.png",Ks="/assets/level_tape-33fe2b3d.png";function Us(t){const{width:e,height:s}=t.getBoundingClientRect();if(t.width!==e||t.height!==s){const o=t.getContext("2d");return t.width=e*2,t.height=s*2,o==null||o.scale(2,2),{x:t.width,y:t.height}}return!1}function Js(t,e){c.useEffect(()=>{const s=e,a=s==null?void 0:s.getContext("2d");let o=0,r;if(a){const n=()=>{o++,s&&Us(s),t(a,o),r=window.requestAnimationFrame(n)};return n(),()=>{window.cancelAnimationFrame(r)}}},[t])}function Nt(t){const e=t.canvas.width/2,s=t.canvas.height/2,a=e*.5,o=e/2-a/2,r=s/2.4-a,n=e*.5,i=e/2-n/2,l=s/1.2-n,d=e*.04,p=i+n/2,g=l+n/3.5,f=e*.99,h=s*.08,E=e/1.98-f/2,V=s/12.6-h,I=e,$=s*.09,tt=e/2.02-f/2,Y=s/12.5-h,Q=e*.05,et=E+I/2,b=V+Q-2,O=e*.036,H=b+O,F=e*.06;return{centerX:e,centerY:s,sizeCastle:a,squareX:o,squareY:r,sizeBtn:n,buttonX:i,buttonY:l,sizeText:d,textX:p,textY:g,sizeTapeX:f,sizeTapeY:h,tapeX:E,tapeY:V,sizeBgTypeX:I,sizeBgTypeY:$,BgTypeX:tt,BgTypeY:Y,sizeTextLvl:Q,textLvlX:et,textLvlY:b,sizeTexеHp:O,textLvlHpY:H,sizeCoinJump:F}}function Zs(t,e,s,a,o){t.beginPath(),t.arc(e,s,a,0,2*Math.PI,!1),t.fillStyle=o,t.fill()}function _s(t,e,s,a){const o=t.x>=e+40&&t.x<=e+a-40,r=t.y>=s&&t.y<=s+a-30;return o&&r}function It(t,e,s,a,o,r){t.textAlign="center",t.font=`${e}px PassionOne`,t.strokeStyle="black",t.lineWidth=2,t.fillStyle=r,t.strokeText(o,s,a),t.fillText(o,s,a)}function $s(t,e,s,a,o,r,n,i,l,d){let p=t.createLinearGradient(s,a,s,a+r);p.addColorStop(0,"#000"),p.addColorStop(1,"rgba(0, 0, 0, 0)"),t.fillStyle=p,t.fillRect(s,a,o,o),t.drawImage(e,n,i,l,d)}function Ot(t){return Math.random()*t}function Ht(t,e,s,a){const o=Ot(e-t)+t,r=Ot(a-s)+s;return{x:o,y:r}}function ta(t,e,s){const a=Math.random();if(!Array.isArray(s))throw new Error("armyUser должен быть массивом");const o=s[Math.floor(Math.random()*s.length)],r=a<.5?Ht(10,60,e/7,e/1.8+200):Ht(t-10,t-60,e/7,e/1.8+200),n=(t/2-r.x)/(o.speed*60),i=(e/3-r.y)/(o.speed*60);return{...r,dx:n,dy:i,color:o.name,damage:o.damage,img:o.image}}function ea(){var xt;const t=Tt(),e=it(Pt),s=it(ce),{tg_id:a}=zt(),[o,r]=c.useState(null),[n,i]=c.useState(0),[l,d]=c.useState(0),[p,g]=c.useState(0),[f,h]=c.useState(0),[E,V]=c.useState(!1),[I,$]=c.useState(0),[tt,Y]=c.useState([]),[Q,et]=c.useState(s),[b,O]=c.useState((e==null?void 0:e.energy_start)||0),[H,F]=c.useState((e==null?void 0:e.hp_castle_start)||0),Ft=f/b*100,[Gt,gt]=c.useState([]),ht=Mt(Xs),At=Mt(Ks),st=c.useRef(null);let T=(xt=st.current)==null?void 0:xt.getContext("2d");Js(Lt,st.current);const yt=pe({mutationFn:m=>me(m.tg_id,m.money,m.energy,m.hp),onSuccess:m=>{e&&p>=(e==null?void 0:e.hp_castle_start)&&q.invalidateQueries({queryKey:["info",a]}),d(0),t(ct.updateCoinStore(m))}},q);c.useEffect(()=>{s&&et(s)},[s]);const Dt=m=>{e&&g(k=>{const j=k+m;return j>(e==null?void 0:e.hp_castle_start)?e==null?void 0:e.hp_castle_start:j})};c.useEffect(()=>{e&&(i(e.money),h(e.energy_now),g(e.hp_castle_now),O(e.energy_start),F(e.hp_castle_start))},[E]),c.useEffect(()=>{e&&(V(!0),O(e.energy_start),F(e.hp_castle_start))},[e]),c.useEffect(()=>{e&&(g(e.hp_castle_now),h(e.energy_now))},[e==null?void 0:e.lvl]),c.useEffect(()=>{if(e){const m=setTimeout(()=>{yt.mutate({tg_id:a,money:l,energy:f,hp:p}),d(0)},2e3);return()=>clearTimeout(m)}},[p,l]),c.useEffect(()=>{o&&yt.mutate({tg_id:a,money:l,energy:f,hp:p})},[o]),c.useEffect(()=>{e&&p>=e.hp_castle_start&&r(p)},[p]),c.useEffect(()=>{if(e&&b){const m=setTimeout(()=>{f<b&&h(k=>k+e.recharge_energy)},1e3);return f>b&&h(b),()=>clearTimeout(m)}},[f]),c.useEffect(()=>{I&&clearInterval(I);const m=setInterval(()=>{t(ct.updateCoinSumm(n)),i(0),clearInterval(m),$(m)},300);return()=>clearInterval(m)},[l]);function Lt(m){m.clearRect(0,0,m.canvas.width,m.canvas.height);const{sizeCastle:k,squareX:j,squareY:z,sizeTapeX:S,sizeTapeY:Xt,tapeX:Kt,tapeY:Ut,sizeBgTypeX:Jt,sizeBgTypeY:Zt,BgTypeX:_t,BgTypeY:$t,sizeTextLvl:te,textLvlX:bt,textLvlY:ee,sizeTexеHp:se,textLvlHpY:ae,sizeCoinJump:oe}=Nt(m);Gt.map((A,at)=>{A.x+=A.dx,A.y+=A.dy;const G={x:j*2,y:z*2,value:A.damage,time:Date.now()};_s(A,j,z,k)?(Dt(A.damage),d(v=>v+A.damage),i(v=>v+A.damage),Y(v=>[...v,G]),gt(v=>v.filter((vt,kt)=>kt!==at))):Zs(m,A.x,A.y,7,A.color)}),At&&($s(m,At,_t,$t,Jt,Zt,Kt,Ut,S,Xt),It(m,te,bt,ee,`Level ${e==null?void 0:e.lvl}`,"white"),It(m,se,bt,ae,`${p.toLocaleString("ru-RU")} / ${H==null?void 0:H.toLocaleString("ru-RU")}`,"white")),ht&&m.drawImage(ht,j,z,k,k),tt.forEach((A,at)=>{const G=Date.now()-A.time,v=50*G/500;m.font=`${oe}px PassionOne`,m.strokeStyle="black",m.lineWidth=2,m.fillStyle="Yellow",m.strokeText(`+ ${A.value}`,A.x,A.y-v),m.fillText(`+ ${A.value}`,A.x,A.y-v),G>500&&Y(vt=>vt.filter((kt,re)=>re!==at))})}const Wt=()=>{if(T){const{centerX:m,centerY:k}=Nt(T);if((T==null?void 0:T.canvas)&&f>0){const z=ta(m,k,Q);gt(S=>[...S,z]),h(S=>S-1)}}};return u.jsxs("div",{className:W.blockField,children:[u.jsx(Ws,{ref:st}),u.jsxs("button",{onTouchStart:Wt,className:W.btnTap,children:[u.jsx(Ps,{className:W.progress,value:Ft,strokeWidth:5,counterClockwise:!0,styles:Vs({pathColor:"#1fbcff"})}),u.jsx("p",{className:W.textEnergy,children:`${f.toLocaleString("ru-RU")} / ${b==null?void 0:b.toLocaleString("ru-RU")}`})]})]})}const sa="_BtnField_197vz_1",aa="_link_197vz_11",oa="_img_197vz_18",ra="_text_197vz_24",X={BtnField:sa,link:aa,img:oa,text:ra};function nt({img:t,text:e,path:s,bottonP:a,left:o,right:r}){let n={bottom:`${a}%`};return o&&(n={...n,left:`${o}%`}),r&&(n={...n,right:`${r}%`}),u.jsx("div",{className:X.BtnField,style:n,children:u.jsxs(qt,{className:X.link,to:s,children:[u.jsx("img",{className:X.img,src:t,alt:e}),u.jsx("p",{className:X.text,children:e})]})})}const na="data:image/png;base64,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",ia="data:image/png;base64,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",ca="data:image/png;base64,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";function ma(){return u.jsxs(u.Fragment,{children:[u.jsxs("header",{className:rt.headers,children:[u.jsx(As,{position:"top-center",reverseOrder:!1}),u.jsx(xs,{})]}),u.jsxs("main",{className:rt.main,children:[u.jsx(ea,{}),u.jsx(nt,{text:"Tasks",img:na,path:"/tasks",bottonP:"35",left:"3"}),u.jsx(nt,{text:"Upgrades",img:ia,path:"/upgrades",bottonP:"24",left:"3"}),u.jsx(nt,{text:"Boosters",img:ca,path:"/boosters",bottonP:"24",right:"3"}),u.jsx(ie,{})]}),u.jsx("footer",{className:rt.footers,children:u.jsx(Os,{})})]})}export{ma as default};
