import{aa as g,b as C,a as P,e as b,ab as q,D as y,ac as S,ad as k,a6 as x,ae as T,af as A,ag as R,ah as N,ai as w,aj as B}from"./entry.851d371b.js";const p=globalThis.requestIdleCallback||(t=>{const a=Date.now(),s={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(s)},1)}),L=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),E=t=>{const a=g();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{p(t)}):p(t)};async function _(t,a=C()){const{path:s,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(s)))return;const n=a._preloadPromises=a._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>_(t,a));a._routePreloaded.add(s);const l=e.map(r=>r.components?.default).filter(r=>typeof r=="function");for(const r of l){const u=Promise.resolve(r()).catch(()=>{}).finally(()=>n.splice(n.indexOf(u)));n.push(u)}await Promise.all(n)}const I=(...t)=>t.find(a=>a!==void 0),D="noopener noreferrer";function O(t){const a=t.componentName||"NuxtLink",s=(e,n)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const l=t.trailingSlash==="append"?N:w;if(typeof e=="string")return l(e,!0);const r="path"in e?e.path:n(e).path;return{...e,name:void 0,path:l(r,!0)}};return P({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:n}){const l=C(),r=b(()=>{const o=e.to||e.href||"";return s(o,l.resolve)}),u=b(()=>e.external||e.target&&e.target!=="_self"?!0:typeof r.value=="object"?!1:r.value===""||q(r.value,{acceptRelative:!0})),d=y(!1),c=y(null);if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!U()){const h=g();let v,f=null;S(()=>{const i=j();E(()=>{v=p(()=>{c?.value?.tagName&&(f=i.observe(c.value,async()=>{f?.(),f=null;const m=typeof r.value=="string"?r.value:l.resolve(r.value).fullPath;await Promise.all([h.hooks.callHook("link:prefetch",m).catch(()=>{}),!u.value&&_(r.value,l).catch(()=>{})]),d.value=!0}))})})}),k(()=>{v&&L(v),f?.(),f=null})}return()=>{if(!u.value){const i={ref:m=>{c.value=m?.$el},to:r.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(d.value&&(i.class=e.prefetchedClass||t.prefetchedClass),i.rel=e.rel),x(T("RouterLink"),i,n.default)}const o=typeof r.value=="object"?l.resolve(r.value)?.href??null:r.value||null,h=e.target||null,v=e.noRel?null:I(e.rel,t.externalRelAttribute,o?D:"")||null,f=()=>B(o,{replace:e.replace});return e.custom?n.default?n.default({href:o,navigate:f,get route(){if(!o)return;const i=A(o);return{path:i.pathname,fullPath:i.pathname,get query(){return R(i.search)},hash:i.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:o}},rel:v,target:h,isExternal:u.value,isActive:!1,isExactActive:!1}):null:x("a",{ref:c,href:o,rel:v,target:h},n.default?.())}}})}const M=O({componentName:"NuxtLink"});function j(){const t=g();if(t._observer)return t._observer;let a=null;const s=new Map,e=(l,r)=>(a||(a=new IntersectionObserver(u=>{for(const d of u){const c=s.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&c&&c()}})),s.set(l,r),a.observe(l),()=>{s.delete(l),a.unobserve(l),s.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function U(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{M as _};

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9ca8d9a5-ea00-47ea-8651-89300753cf72")}catch(e){}}()
//# debugId=9ca8d9a5-ea00-47ea-8651-89300753cf72
//# sourceMappingURL=nuxt-link.2687c399.js.map