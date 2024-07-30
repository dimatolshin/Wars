import{j as s,b as f,r as A,e as R}from"./index-313a9a34.js";import{c as _,B as v,u as I}from"./useQuery-773a96ee.js";import{b as U,q as h,e as S,l as L,r as H}from"./queryClient-40363f4d.js";import{M as O}from"./ModalRoute-9772d02a.js";function Q(){return s.jsx("svg",{width:"24",height:"28",viewBox:"0 0 24 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:s.jsx("path",{d:"M4.66688 23.9268H4.66681C4.28017 23.9268 3.9167 23.5828 3.9167 23.0989V11.3993C3.9167 10.9155 4.28017 10.5714 4.66681 10.5714H6.63837V16.5983C6.63837 18.9824 8.46717 20.9707 10.7775 20.9707H13.9717V23.1001C13.9717 23.5839 13.6083 23.928 13.2217 23.928C13.2216 23.928 13.2216 23.928 13.2216 23.928L4.66688 23.9268ZM22.9867 6.25805L18.0975 1.05781C17.7829 0.723199 17.3495 0.5275 16.8893 0.5275H10.7786C8.46829 0.5275 6.63822 2.51689 6.63822 4.89988V7.02712L4.66667 7.0281C4.66659 7.0281 4.66651 7.0281 4.66643 7.0281C2.35618 7.02824 0.5275 9.01646 0.5275 11.4005V23.1001C0.5275 25.4842 2.3563 27.4725 4.66667 27.4725H13.2226C15.533 27.4725 17.3618 25.4842 17.3618 23.1001V20.9731H19.3333C21.6437 20.9731 23.4725 18.9848 23.4725 16.6007V7.5006C23.4725 7.0398 23.3013 6.59257 22.9868 6.25807C22.9867 6.25806 22.9867 6.25806 22.9867 6.25805ZM17.3611 5.33014L18.957 7.02813H18.1108C17.7242 7.02813 17.3608 6.6842 17.3606 6.20052C17.3606 6.2005 17.3606 6.20049 17.3606 6.20047C17.3606 6.2004 17.3606 6.20033 17.3606 6.20026L17.3611 5.33014Z",fill:"white",stroke:"#00318F",strokeWidth:"0.945"})})}const V="_inviteBlock_wotzb_1",q="_line_wotzb_8",X="_category_wotzb_14",x={inviteBlock:V,line:q,category:X};function F({title:n}){return s.jsxs("div",{className:x.inviteBlock,children:[s.jsx("div",{className:x.line}),s.jsx("h2",{className:x.category,children:n}),s.jsx("div",{className:x.line})]})}const E="_progressbar_4ya4d_1",P="_progressbar__fill_4ya4d_10",y="_progressbar__text_4ya4d_16",p={progressbar:E,progressbar__fill:P,progressbar__text:y};function T({value:n,max:r,className:t="",textProg:l,classNamefill:d="",colorFill:m="#8aca27"}){const g=n/r*100,o=n!==r?m:"#8aca27";return s.jsxs("div",{className:_(p.progressbar,{},[t]),children:[s.jsx("div",{className:_(p.progressbar__fill,{},[d]),style:{width:`${g}%`,backgroundColor:o}}),l&&s.jsx("div",{className:p.progressbar__text,children:`${n}/${r}`})]})}const K="_CardBlock_10bw3_1",M="_info_10bw3_7",Z="_infoName_10bw3_20",W="_nameUnit_10bw3_23",J="_bgBar_10bw3_27",Y="_progressBar_10bw3_36",G="_value_10bw3_42",D="_king_10bw3_48",i={CardBlock:K,info:M,infoName:Z,nameUnit:W,bgBar:J,progressBar:Y,value:G,king:D},N="/assets/Cards_king-9550b8f5.png",z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIYSURBVHgB1VVJSFtRFD1qYrRojNa2VKz9oQod0uYXEtFW2lhKN22hixYEa6soDgtRFy7cKG7ElQO4cCOoC3WloivdGHGKAxJBXTkEZ+MUxIEogu/9/I/hYxKVJ+KBw7vcd+87//77uA+47/C7xKchLCTUi7YnOAg7CZtwDQGOsC819x9nSDIiNEztLRddLR3oau1sJGbGVQWqU3PTCosrSrDl3IXz7MRTHtTKEIFZP/9jYmicVmMVWUtok+IUsjw++ftXrBxtoH2pF96gCghETlwKDEnxiI1/qdEl6k2jPcOm7ob2X2Q7WRLxxw3hXt2204Gn72OQWZaHlKI0jrgKpL0bC7hjx7mHoa1JrB/b8eXPN+rimQpIeKAIhn15k5qOWxEIU4Zi2jJFTStzgUhVuLBOjwgCZuYC6sAQYV2cXaDLFHMBWoF9eQOH+wf097DvQXBAEPn6eWra3P1MBJT+CvcGm5kL0MMpFmeECqzMBR6qXENXbHA/cwHh8Jk52mCz3C8fdra1pVW8TdCDj3iFk7NTjwdGBrnuPY3nDHFSg62+BJrqK+vSDR+N+BRjhC9MDI7BMmDBj/zfaKtqpi6zPOayFy2dsCzqWRQHH4iIfoTM0jxo37xA9oe/sK9saiG7pn5e8p8ThourCa4JyT+OfqLRvo6FLvEddAl6IbCtuhmjvcM1xCzCFSrwBV7kZ1yMZfo2l+MucA7l7JNvkHn/twAAAABJRU5ErkJggg==";function $(){return s.jsxs("div",{className:i.CardBlock,children:[s.jsx(F,{title:"Collect Card"}),s.jsxs("div",{className:i.bgBar,children:[s.jsx(v,{className:i.info,children:"i"}),s.jsx("div",{className:i.infoName,children:s.jsx("p",{className:i.nameUnit,children:"King"})}),s.jsxs("div",{className:i.progressBar,children:[s.jsx("img",{className:i.value,src:z,alt:""}),s.jsx(T,{max:10,value:5,textProg:!0}),s.jsx("img",{className:i.king,src:N,alt:""})]})]})]})}const ss="_coinsCollect_tztcv_1",es={coinsCollect:ss},ns="_blockFriend_1ncbe_1",rs="_progress_1ncbe_9",as="_cardFrBar_1ncbe_14",cs="_cardFrBarFill_1ncbe_19",is="_img_1ncbe_23",ts="_nameFr_1ncbe_29",os="_coinBar_1ncbe_37",As="_btnFriend_1ncbe_45",ls="_btnDescr_1ncbe_58",ds="_coinTake_1ncbe_64",ms="_coin_1ncbe_37",gs="_btnClassFr_1ncbe_75",a={blockFriend:ns,progress:rs,cardFrBar:as,cardFrBarFill:cs,img:is,nameFr:ts,coinBar:os,btnFriend:As,btnDescr:ls,coinTake:ds,coin:ms,btnClassFr:gs},xs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOzSURBVHgB7ZnPbxJBFMdnf3RBWFIIPyKkjVBCpRd7a3rz4h/g3VuPnox/QT0Zbx68mPhHePFiYtUmNtVrm9gWU/lhixSaIrAL+xPfa6BCU8rMAuXiJxnYnX0D353ZeTPvLUf68UN5COUOmQ5ZKJ873xdwPcdPBEF4KkluVRB4nUwBy7Il09TrhmG8g9P1br3Y+V53u91rkuQ6IVOE53l9ZkbkeF5b07TWuS78wJ6Mu1yuLy6Xu0gc4vXKrlAoKHfPdd2warVaU1EaGnFIq9WK6rr2CA4/gWr+jcfjXcG7IIyEw2Hf4mIqOjs767vqerX6p57JZIrlcrlOGLHttqAo9dN2u/2Ag+cwDz3BPMxLS+lYIpGI0tgeHv4s7u3tHRNGFEUNWpaR4DmO9xBGWAQiCwuJaDqdjhFGOK59PkI8YSQejwdZBHZBodFozE8cINIaSpIkJpPJcCwWDRGHpFJJEHrbXyz+rhaLx1XadtQiYZLIiUScech6kWXZg8UwdJNFJNVwo4tJp+/OkzERiUQCojgj0NpTiZSkGQF8qUTGBOtvUYk8OztTK5UK9fAMAxy1ZpqGRWtPPbtN06L+0WHAxDllsacWub9/wOyMB5HPFyYjcpr8FzkuqEWCA7YaDUUlI2AChUKhBFs4ph0XtUhd163Nzc3vlcqpY1cEN9nc2dn9RRhhHm7oDMeuqF6vORoJZpGlUslxT9Zq9SZxALPIo6OjKq4YhBFsk8vlmPxjF0eze3v76wGLULTFNsQhjkSqqqrTCsU4B22xDXGIYz+Jf7qx8XE3m80OXC5xU7K1tTWSQGRkZ14uVxqDro1rUzKSSAwpvF7vwL2hLHtvYUzk9/uZg71eONghVzweT5alEe7UIbCKQLwThJCYaoetQHyay+VP4PGgnuGqqsTBL4eYRGLPQRgRnZubixCHaJoGk+7bAU12g1kk9t7q6sriuMIIyGwUMpkfJzQiqQOxcQpEUqnUPG3CYKjISQjsggkDnFjD7IaKnJTALpDwmseOuM7mWpF4l5MUiIiiKCwv37s2swwi2wNXjGRyYaSMBS1+/6wP04iX6yH9d761423bfo+5wMsG2GjSvdhLKBSSe88ty3LZtvWBdES+0rRmbFijSRMIBPp6EvLmOKGe4TE+k1moeA47mj6hPp9vpKWMFVhCL/4PtUAq+jXpvIXoZtVeQmUWUh8vILkvQWJVB0NIByvkpoCOEmA1ihiGWbVt8zFUve1e466wvw8l3ik3SZb8e4/Tx18o3J7Hb2FKDQAAAABJRU5ErkJggg==",Cs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAVCAYAAACkCdXRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIjSURBVHgB7ZO/axNhGMe/d+97uctdkmtFotEYq7YZpGppk9JaBaGoSzsIuqh/gOAiSJc6CoIoFrQOCo4iXZwkdnSJQ6WkVk7BCJakTU1bg/mdu9y951VUTmpLderQ7/b++Hx4nof3Bbbzr+E2c+nhWbG9XJK9/lZj+Wqi+uW/ZPdOh86EQ9LtcN++LtnKoFoEspqpLWTKN68nixObkt052XrUY3EPeoYPx48MSl5vvQmmZ8CXizDlALSPBNOT+t0rL+dH3BxZU82J4Lljw9FXks+zv/d8SBAogyfeCcLlQFULnM/EDmdP2us73l1B+sVc7d0vlneLHg35dx7qUu8PDKhQFjIQbRPkYATcav32T4DnIe5miHbYCITpqJv/Q8ZW7M7IqbZwKZuHKHLgPQT0c+6Hx+bt3wAnOvuEQBKNwLoyXZYFT6kCsUVBtqaATb1Bg1A0tYwjJHCahAkGo8BBdwZUysm5dWWwHDCVhtwRwp5wALNpA8KHJMxvBVgV57jBYOoUdtPA3PM86mX21I1T98LrL6dSmlQ5kJj0xS7HMTG6jMISRXdPCurXBuhq600enxYVJGfZvCmQhJtf8zTG+3ddk3xsbHBIR7DFwNRrAk2ToAg8JGphpUadRuvvK1V26cZMdWZDmTNmbqxPvcDbwogFO6YqHjhdoWroi1Qg48EI9+Tis6U8/pINf8CtXn9Ulfg2xqPQH21/G3s83cR2tm6+A3Egww2OlkuWAAAAAElFTkSuQmCC";function vs({name:n,referral_system_id:r}){const{tg_id:t}=f(),[l,d]=A.useState(!1),[m,g]=A.useState(!1),o=4,j=10,B=U({mutationFn:w=>S(w.tg_id,w.referral_system_id)},h),b=()=>{B.mutate({tg_id:t,referral_system_id:r})};A.useEffect(()=>{d(!1),g(!1)},[o]);const c={[a.btnClassFr]:m};return s.jsxs("div",{className:a.blockFriend,children:[s.jsx("img",{className:a.img,src:xs,alt:""}),s.jsxs("div",{className:a.progress,children:[s.jsx("p",{className:a.nameFr,children:n}),s.jsx("p",{className:a.coinBar,children:"20 000 / 30 000"}),s.jsx(T,{value:o,max:j,className:a.cardFrBar,classNamefill:a.cardFrBarFill,colorFill:"#f7a31a"})]}),s.jsxs(v,{onClick:b,className:_(a.btnFriend,c,[]),isDisabled:l,children:[s.jsx("p",{className:a.btnDescr,children:"Collect NOW"}),s.jsxs("div",{className:a.coinTake,children:[s.jsx("img",{src:Cs,alt:""}),s.jsx("p",{className:a.coin,children:"0"})]})]})]})}function js({friends:n}){return s.jsxs("div",{className:es.coinsCollect,children:[s.jsx(F,{title:"Collect Coins"}),n&&n.map(r=>s.jsx("li",{children:s.jsx(vs,{name:r.name,lvl:r.lvl,person_id:r.person_id,referral_system_id:r.referral_system_id})},r.person_id))]})}const Bs="_friendInv_15m4g_1",bs="_inviteBlock_15m4g_7",ps="_line_15m4g_14",_s="_category_15m4g_20",hs="_invite_15m4g_7",Ns="_invitePrem_15m4g_31",Fs="_crown_15m4g_45",ws="_inviteFr_15m4g_50",us="_descr_15m4g_63",ks="_span_15m4g_71",fs="_card_15m4g_76",Us="_card_unit_15m4g_80",Ts="_cardCoin_15m4g_87",Rs="_card_value_15m4g_93",Is="_imgCard_15m4g_98",e={friendInv:Bs,inviteBlock:bs,line:ps,category:_s,invite:hs,invitePrem:Ns,crown:Fs,inviteFr:ws,descr:us,span:ks,card:fs,card_unit:Us,cardCoin:Ts,card_value:Rs,imgCard:Is},Ss="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPLSURBVHgB7ZRbaFxVFIb/fa6TzH3G5joT0TQ1d21LUmlITJoKpS1VioFIxaciFWl8KUXBhwRBoRBsQsCiD0FKCRSFahpTK8VgG5VUcxFJbK25TauNyZyZzD17zjnbE6gyUDLpUMGHzvf6L9a/17/3XkCWLI8859sqJfZNs4CHhM+k+OODBS9xhdLlG5OBkw0WolxaiE+k6t37TK1vttefOZCHHc00NDKsQMPDwhjIwCGnb21hL4tN1bBPDjrZ2dcqClNrPj9W9FMyeIT92u9l3TuL29L145AB0QTn8V+ZhP+HeSTDPO5Oz5ek6sEF7er4qcu4ORKGaNG3/yfGhIBFE3znhX7gwjkRkTV++kTryeupNf54vG/8mgDljlGsU2RkfHoP8gc6nhk9f6zs27MNtU+lah0tr7+rgR/a1VYJMVfn0NnJUnVZtFqKimLwlsSgJYkdmRibOddbLxx37N7Tbmlc4ebfTtVIV5dOVTpqKuaxs56W9zY/1vNl71Z5XetvdjhAtfdLnwAkQYAOLW2a930LqrOlsZ4JRCMaBDWXMBYi6zH/o+vQSyVeR+lei3HPseMzFwP7PmhyzZM8c13z9rBDX41B1wh4ImdmLIvaR1Pj8qtWi1phc8Rf/PB5534gMMQYI30H3IcdOjniftxmTOVBXcskKmpRZvPKZZwljsWxGMI6gdnOwHiWk874vlMd/Sqk8Db+hDEqaquYrdApXOxptE/2tXqmigv1T3e/bDW5qqugu+sgiBSuAiOZZAQkoEAEgSQxhGMcREbS7giykdDT6BraUUX3u91r2PKkBHtDBVSTHZKnzFCLjRMfRfLSNgha5F4TguU7wPJtAb/8LEIl/PVXBkP1eNCJ/xVM7L3ZOVNclAWs+iiUVSckbw04TjK+lgJGpsCsxv5g91oQBjEnF7NzovGqNaxFtLRRbxjH8GzC1+oVq3mOVOfnJ0EjKqxbc6AvDoJRBZw5Dp0mQJQFY6vJmPpRxsqyBZU1cfw2w2M5KJ8aXox/v1H/tMs+R2Zv3P7DdEiWWK41uATXje9gNsfA/rqJ4AqHgJKHpVEbeLsN257TICkBXB024XcfHWuqVnpxbePeBJtw7rBz4NmmWPuyT0QoaiQraxAdVuPlCvC01MOdlwC9NYHJrznMjKrRUFzvi5j873SNQE3Xd1PjM60llSIf+axgi1pe4OVg91CoFjNomMHvI/jzFo8ln3aX8NogZ6anO65EpvEAbGq8Tu8u2CKqq81mFlooRT4hSZFw8pwo0wWOw2L508kvWrrDK8iSJcv/wd+rrXmJuvDAqwAAAABJRU5ErkJggg==",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFxSURBVHgB7ZS/S0JRFMe/mVpK/njkEBVpRFOJItrPIRtaKsOhPWksqKB/oERccg1bIgiao6GhIayWCgOf8PRZFtoalFYW+CztPVAQn1ovXltfOHDuOV8+9x649wJ/oIYqNW0xKpUuhjAooSMCk7MOu0qj4hmvqRgCh8frbLoGAVCXe9O70zdtQTbP8Iydyjb4VryI38ZJOhgh2RK3QbIaVFqW662jNhw9XOI1l+EZB3UmtHd1wOiwmvV6g9m36LHfkLHualAJBCqUiiJDZGEZtxm4g4gC5aSUKpCI3HHpvWhQtUyFl6c0WasvGKpoVKDw9gH6KioeVCNrKY1+IhpU16QFdRHm0rBoULVcBTpIcS/r5+M3S+T4Tkk6Qdbrl1/+072tXSx5VsF85vjO9zz8ZxtYmBnC82O6LrTyQ3ERrcSchtBomSxjLhX7h03IFwqYmneCOg9j2+13suUD/FJjbCyzsT8wMRLqMfamiut/1dYXQdFqjdPSBZ4AAAAASUVORK5CYII=",k="data:image/png;base64,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";function Ls(){return s.jsxs("div",{className:e.friendInv,children:[s.jsx(F,{title:"Invite Friends"}),s.jsxs("div",{className:e.invite,children:[s.jsxs("div",{className:e.invitePrem,children:[s.jsx("img",{className:e.crown,src:Ss,alt:"crown"}),s.jsx("p",{className:e.descr,children:"Invite Premium Friend"}),s.jsxs("div",{className:e.card,children:[s.jsxs("div",{className:e.card_unit,children:[s.jsx("img",{className:e.imgCard,src:N,alt:""}),s.jsxs("div",{className:e.card_value,children:[s.jsx("img",{src:u,alt:""}),s.jsx("span",{className:`${e.descr} ${e.span}`,children:"2"})]})]}),s.jsxs("div",{className:e.cardCoin,children:[s.jsx("img",{className:e.imgCard,src:k,alt:""}),s.jsx("p",{className:`${e.descr} ${e.span}`,children:"+50 000"})]})]})]}),s.jsxs("div",{className:e.inviteFr,children:[s.jsx("p",{className:e.descr,children:"Invite Friend"}),s.jsx("div",{children:s.jsxs("div",{className:e.card,children:[s.jsxs("div",{className:e.card_unit,children:[s.jsx("img",{className:e.imgCard,src:N,alt:""}),s.jsxs("div",{className:e.card_value,children:[s.jsx("img",{src:u,alt:""}),s.jsx("span",{className:`${e.descr} ${e.span}`,children:"2"})]})]}),s.jsxs("div",{className:e.cardCoin,children:[s.jsx("img",{className:e.imgCard,src:k,alt:""}),s.jsx("p",{className:`${e.descr} ${e.span}`,children:"+50 000"})]})]})})]})]})]})}const Hs="_btnForward_1j273_1",Os="_infiteFr_1j273_9",Qs="_copy_1j273_21",Vs="_friend_1j273_28",C={btnForward:Hs,infiteFr:Os,copy:Qs,friend:Vs};function ys(){const{tg_id:n,tg:r}=f(),[t,l]=A.useState(),d=R(),[m,g]=A.useState([]),o=I({queryFn:()=>H(n),queryKey:["refLink"],enabled:!!n},h);A.useEffect(()=>{l(o.data)},[o]);const j=()=>{const c=`https://t.me/share/url?url=${t}`;r.openTelegramLink(c)},B=async()=>{try{t&&(await navigator.clipboard.writeText(t),console.log("Ссылка скопирована"))}catch(c){console.error("Ошибка при копировании",c)}},b=U({mutationFn:c=>L(c.tg_id),onSuccess:c=>{g(c)}},h);return A.useEffect(()=>{d.pathname==="/friends"&&b.mutate({tg_id:n})},[]),s.jsx(O,{children:s.jsxs("div",{className:C.friend,children:[s.jsx(Ls,{}),s.jsx($,{}),s.jsx(js,{friends:m}),s.jsxs("div",{className:C.btnForward,children:[s.jsx(v,{onClick:j,className:C.infiteFr,children:"Invite Friend"}),s.jsx(v,{onClick:B,className:C.copy,children:s.jsx(Q,{})})]})]})})}export{ys as default};
