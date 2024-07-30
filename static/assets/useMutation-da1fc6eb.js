var S=(r,t,s)=>{if(!t.has(r))throw TypeError("Cannot "+s)};var e=(r,t,s)=>(S(r,t,"read from private field"),s?s.call(r):t.get(r)),l=(r,t,s)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,s)},b=(r,t,s,i)=>(S(r,t,"write to private field"),i?i.call(r,s):t.set(r,s),s);var p=(r,t,s)=>(S(r,t,"access private method"),s);import{S as U,s as k,o as w,p as L,v as R,w as j,r as f,x as q,y as A}from"./index-5ef1bae8.js";var n,a,h,o,m,M,v,C,K,D=(K=class extends U{constructor(t,s){super();l(this,m);l(this,v);l(this,n,void 0);l(this,a,void 0);l(this,h,void 0);l(this,o,void 0);b(this,n,t),this.setOptions(s),this.bindMethods(),p(this,m,M).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var i;const s=this.options;this.options=e(this,n).defaultMutationOptions(t),k(this.options,s)||e(this,n).getMutationCache().notify({type:"observerOptionsUpdated",mutation:e(this,h),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&w(s.mutationKey)!==w(this.options.mutationKey)?this.reset():((i=e(this,h))==null?void 0:i.state.status)==="pending"&&e(this,h).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=e(this,h))==null||t.removeObserver(this)}onMutationUpdate(t){p(this,m,M).call(this),p(this,v,C).call(this,t)}getCurrentResult(){return e(this,a)}reset(){var t;(t=e(this,h))==null||t.removeObserver(this),b(this,h,void 0),p(this,m,M).call(this),p(this,v,C).call(this)}mutate(t,s){var i;return b(this,o,s),(i=e(this,h))==null||i.removeObserver(this),b(this,h,e(this,n).getMutationCache().build(e(this,n),this.options)),e(this,h).addObserver(this),e(this,h).execute(t)}},n=new WeakMap,a=new WeakMap,h=new WeakMap,o=new WeakMap,m=new WeakSet,M=function(){var s;const t=((s=e(this,h))==null?void 0:s.state)??L();b(this,a,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},v=new WeakSet,C=function(t){R.batch(()=>{var s,i,u,y,c,O,E,x;if(e(this,o)&&this.hasListeners()){const d=e(this,a).variables,g=e(this,a).context;(t==null?void 0:t.type)==="success"?((i=(s=e(this,o)).onSuccess)==null||i.call(s,t.data,d,g),(y=(u=e(this,o)).onSettled)==null||y.call(u,t.data,null,d,g)):(t==null?void 0:t.type)==="error"&&((O=(c=e(this,o)).onError)==null||O.call(c,t.error,d,g),(x=(E=e(this,o)).onSettled)==null||x.call(E,void 0,t.error,d,g))}this.listeners.forEach(d=>{d(e(this,a))})})},K);function Q(r,t){const s=j(t),[i]=f.useState(()=>new D(s,r));f.useEffect(()=>{i.setOptions(r)},[i,r]);const u=f.useSyncExternalStore(f.useCallback(c=>i.subscribe(R.batchCalls(c)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),y=f.useCallback((c,O)=>{i.mutate(c,O).catch(q)},[i]);if(u.error&&A(i.options.throwOnError,[u.error]))throw u.error;return{...u,mutate:y,mutateAsync:u.mutate}}export{Q as u};
