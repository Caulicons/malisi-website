(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7577:function(e,t,r){Promise.resolve().then(r.t.bind(r,413,23)),Promise.resolve().then(r.t.bind(r,8326,23)),Promise.resolve().then(r.t.bind(r,2998,23)),Promise.resolve().then(r.t.bind(r,2489,23)),Promise.resolve().then(r.bind(r,431)),Promise.resolve().then(r.bind(r,386)),Promise.resolve().then(r.bind(r,2722))},1216:function(e,t,r){"use strict";var a=r(7437),n=r(6481),o=r(1396),i=r.n(o);t.Z=e=>{let{children:t,className:r,...o}=e;return(0,a.jsx)(i(),{className:(0,n.Z)("cursor-pointer",r),...o,children:t})}},8504:function(e,t,r){"use strict";r.d(t,{Z:function(){return Image}});var a=r(7437),n=r(6691),o=r.n(n);function Image(e){let{src:t,alt:r,className:n,width:i,height:s,...l}=e;return(0,a.jsx)(o(),{src:t,alt:r,width:i,height:s,className:n,...l})}},431:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(4883),o=r(3890),i=r(3604);t.default=()=>{let e=(0,o.Dv)(i.S);return(0,a.jsx)("ul",{className:"invisible hidden tablet:visible tablet:flex",children:e.map(e=>(0,a.jsx)("li",{className:"mr-3 last:mr-0",children:(0,a.jsx)(n.Z,{route:e})},e.name))})}},386:function(e,t,r){"use strict";r.r(t);var a=r(7437),n=r(2167),o=r(2979),i=r(4883),s=r(3890),l=r(3604);t.default=()=>{let e=(0,s.Dv)(l.S);return(0,a.jsx)("ul",{className:"flex flex-col gap-2 tablet:invisible tablet:hidden",children:(0,a.jsx)(n.M,{children:e.map((e,t)=>(0,a.jsx)(o.E.li,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0,width:0,transition:{delay:0,damping:0}},transition:{type:"spring",stiffness:260,damping:20,delay:.9+t/10,duration:12,ease:"easeInOut"},className:" ",children:(0,a.jsx)(i.Z,{route:e,className:"mt-2 p-[6px]"})},e.name))})})}},4883:function(e,t,r){"use strict";var a=r(7437),n=r(1216),o=r(3990),i=r(6481),s=r(3890);t.Z=e=>{let{route:t,setState:r,className:l}=e,u=(0,s.b9)(o.Z),onClick=e=>{u(!1)};return(0,a.jsxs)(n.Z,{onMouseEnter:()=>{},onClick:e=>onClick(e),className:(0,i.Z)("group/underline flex flex-col  text-xl font-semibold tracking-[3px] text-primary hover:ml-2 hover:text-secondary  tablet:p-4 tablet:text-lg tablet:hover:ml-0",l),href:t.href,children:[t.name,(0,a.jsx)("span",{className:(0,i.Z)("h-[2px] w-0 bg-primary duration-700 group-hover/underline:w-10/12")})]})}},2722:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return HamburgerMenu}});var a=r(7437),n=r(3890),o=r(2265);let Burger=({color:e="currentColor",direction:t="left",distance:r="md",duration:a=.4,easing:n="cubic-bezier(0, 0, 0, 1)",hideOutline:i=!0,label:s,lines:l=3,onToggle:u,render:d,rounded:m=!1,size:c=32,toggle:f,toggled:h})=>{let[g,p]=(0,o.useState)(!1),v=Math.max(12,Math.min(48,c)),b=Math.round((48-v)/2),A=v/12,x=Math.round(A),y=v/(l*(("lg"===r?.25:"sm"===r?.75:.5)+(3===l?1:1.25))),w=Math.round(y),S=x*l+w*(l-1),E=(A-x+(y-w))/(3===l?1:2),_=parseFloat((v/(3===l?"lg"===r?4.0425:"sm"===r?5.1625:4.6325:"lg"===r?6.7875:"sm"===r?8.4875:7.6675)-E/(4/3)).toFixed(2)),$=Math.max(0,a),j={cursor:"pointer",height:"48px",position:"relative",transition:`${$}s ${n}`,userSelect:"none",width:"48px"},P={background:e,height:`${x}px`,left:`${b}px`,position:"absolute"};i&&(j.outline="none"),m&&(P.borderRadius="9em");let M=f||p,O=void 0!==h?h:g;return d({barHeight:x,barStyles:P,burgerStyles:j,easing:n,handler:()=>{M(!O),"function"==typeof u&&u(!O)},isLeft:"left"===t,isToggled:O,label:s,margin:w,move:_,time:$,topOffset:Math.round((48-S)/2),width:v})};function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}let Divide=e=>o.createElement(Burger,_extends({},e,{render:e=>o.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:e.burgerStyles,tabIndex:0},o.createElement("div",{style:{...e.barStyles,width:`${e.width/2}px`,borderRadius:`${e.barStyles.borderRadius} 0 0 ${e.barStyles.borderRadius}`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`translate(${.48*e.move}px, ${.73*e.move}px) rotate(45deg)`:"none"}`}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width/2}px`,borderRadius:`0 ${e.barStyles.borderRadius} ${e.barStyles.borderRadius} 0`,left:"50%",top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`translate(-${.48*e.move}px, ${.73*e.move}px) rotate(-45deg)`:"none"}`}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width/2}px`,borderRadius:`${e.barStyles.borderRadius} 0 0 ${e.barStyles.borderRadius}`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,opacity:e.isToggled?0:1,transform:`${e.isToggled?`translate(${-(1.25*e.move)}px, 0)`:"none"}`}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width/2}px`,borderRadius:`0 ${e.barStyles.borderRadius} ${e.barStyles.borderRadius} 0`,top:`${e.topOffset+e.barHeight+e.margin}px`,left:"50%",transition:`${e.time}s ${e.easing}`,opacity:e.isToggled?0:1,transform:`${e.isToggled?`translate(${1.25*e.move}px, 0)`:"none"}`}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width/2}px`,borderRadius:`${e.barStyles.borderRadius} 0 0 ${e.barStyles.borderRadius}`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`translate(${.48*e.move}px, -${.73*e.move}px) rotate(-45deg)`:"none"}`}}),o.createElement("div",{style:{...e.barStyles,width:`${e.width/2}px`,borderRadius:`0 ${e.barStyles.borderRadius} ${e.barStyles.borderRadius} 0`,left:"50%",top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`translate(-${.48*e.move}px, -${.73*e.move}px) rotate(45deg)`:"none"}`}}))}));var i=r(3990);function on(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function off(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var s=["mousedown","touchstart"],esm_useClickAway=function(e,t,r){void 0===r&&(r=s);var a=(0,o.useRef)(t);(0,o.useEffect)(function(){a.current=t},[t]),(0,o.useEffect)(function(){for(var handler=function(t){var r=e.current;r&&!r.contains(t.target)&&a.current(t)},t=0,n=r;t<n.length;t++){var o=n[t];on(document,o,handler)}return function(){for(var e=0,t=r;e<t.length;e++){var a=t[e];off(document,a,handler)}}},[r,e])},l=r(2167),u=r(2979),d=r(8504),m=r(431),c=r(386),molecules_Nav=()=>(0,a.jsxs)("nav",{children:[(0,a.jsx)(c.default,{}),(0,a.jsx)(m.default,{})]}),f=r(1216),Mobile_AsideMenu=()=>{let[e,t]=(0,n.KO)(i.Z),r=(0,o.useRef)(null);return esm_useClickAway(r,()=>t(!1)),(0,a.jsx)(l.M,{children:e&&(0,a.jsxs)("div",{className:"fixed left-0 right-0 top-0 z-10 h-screen",children:[(0,a.jsx)(u.E.span,{initial:{opacity:0,width:0},animate:{opacity:.8,width:"100%",transition:{delay:.3,duration:.4}},exit:{opacity:.6,width:0,transition:{duration:.6,delay:.1}},className:"fixed left-0 right-0 top-0 h-screen  bg-gray-600"}),(0,a.jsxs)(u.E.aside,{ref:r,initial:{opacity:0,width:0},animate:{opacity:1,width:"78%",transition:{delay:.6,duration:.4}},exit:{opacity:0,width:0,transition:{duration:.2,delay:.1}},className:"fixed left-0 right-0 top-0 h-screen  bg-white p-6",children:[(0,a.jsxs)("div",{className:"flex w-full justify-between pb-6",children:[(0,a.jsx)(f.Z,{href:"/",children:(0,a.jsx)(d.Z,{src:"/assets/images/logos/Logo.webp",alt:"Malisi Engenharia de seguran\xe7a do trabalho e meio ambiente logo",width:120,height:47,className:"mr-1"})}),(0,a.jsx)("div",{className:"rounded-xl bg-primary text-white hover:bg-primary/95",children:(0,a.jsx)(Divide,{toggled:e,size:21,toggle:t,label:"menu"})})]}),(0,a.jsx)(molecules_Nav,{})]})]})})};function HamburgerMenu(){let[e,t]=(0,n.KO)(i.Z);return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"rounded-xl bg-primary text-white hover:bg-primary/95",children:(0,a.jsx)(Divide,{toggled:e,size:21,toggle:t,label:"menu"})}),(0,a.jsx)(Mobile_AsideMenu,{})]})}},3990:function(e,t,r){"use strict";var a=r(7665);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};let n=globalThis.jotaiAtomCache.get("F:\\Jobs\\Freelas\\Malisi - Project\\malisi-website\\src\\provider\\atoms\\asideMenuOpen.tsx/asideMenuOpenAtom",(0,a.cn)(!1));t.Z=n},3604:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});var a=r(7665);globalThis.jotaiAtomCache=globalThis.jotaiAtomCache||{cache:new Map,get(e,t){return this.cache.has(e)?this.cache.get(e):(this.cache.set(e,t),t)}};let n=globalThis.jotaiAtomCache.get("F:\\Jobs\\Freelas\\Malisi - Project\\malisi-website\\src\\provider\\atoms\\routes.tsx/routesAtom",(0,a.cn)([{name:"IN\xcdCIO",href:"/",active:!0},{name:"SOBRE",href:"/sobre",active:!1},{name:"SERVI\xc7OS",href:"/servicos",active:!1},{name:"CONTATO",href:"/contato",active:!1}]));globalThis.jotaiAtomCache.get("F:\\Jobs\\Freelas\\Malisi - Project\\malisi-website\\src\\provider\\atoms\\routes.tsx/activateReactAtom",(0,a.cn)(null,(e,t,r)=>{t(n,e(n).map(e=>e.name===r?{...e,active:!0}:{...e,active:!1}))}))},6481:function(e,t,r){"use strict";var a=r(7042),n=r(4769);function cn(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,a.W)(t))}t.Z=cn},2489:function(){},2998:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},3890:function(e,t,r){"use strict";r.d(t,{Dv:function(){return useAtomValue},KO:function(){return useAtom},b9:function(){return useSetAtom}});var a=r(2265),n=r(7665);let o=(0,a.createContext)(void 0),useStore=e=>{let t=(0,a.useContext)(o);return(null==e?void 0:e.store)||t||(0,n.K7)()},isPromiseLike=e=>"function"==typeof(null==e?void 0:e.then),i=a.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e});function useAtomValue(e,t){let r=useStore(t),[[n,o,s],l]=(0,a.useReducer)(t=>{let a=r.get(e);return Object.is(t[0],a)&&t[1]===r&&t[2]===e?t:[a,r,e]},void 0,()=>[r.get(e),r,e]),u=n;(o!==r||s!==e)&&(l(),u=r.get(e));let d=null==t?void 0:t.delay;return(0,a.useEffect)(()=>{let t=r.sub(e,()=>{if("number"==typeof d){setTimeout(l,d);return}l()});return l(),t},[r,e,d]),(0,a.useDebugValue)(u),isPromiseLike(u)?i(u):u}function useSetAtom(e,t){let r=useStore(t),n=(0,a.useCallback)((...t)=>{if(!("write"in e))throw Error("not writable atom");return r.set(e,...t)},[r,e]);return n}function useAtom(e,t){return[useAtomValue(e,t),useSetAtom(e,t)]}},7665:function(e,t,r){"use strict";let a;r.d(t,{K7:function(){return getDefaultStore},cn:function(){return atom}});let n=0;function atom(e,t){let r=`atom${++n}`,a={toString:()=>r};return"function"==typeof e?a.read=e:(a.init=e,a.read=function(e){return e(this)},a.write=function(e,t,r){return t(this,"function"==typeof r?r(e(this)):r)}),t&&(a.write=t),a}let hasInitialValue=e=>"init"in e,isActuallyWritableAtom=e=>!!e.write,o=new WeakMap,registerCancelPromise=(e,t)=>{o.set(e,t),e.catch(()=>{}).finally(()=>o.delete(e))},cancelPromise=(e,t)=>{let r=o.get(e);r&&(o.delete(e),r(t))},resolvePromise=(e,t)=>{e.status="fulfilled",e.value=t},rejectPromise=(e,t)=>{e.status="rejected",e.reason=t},isPromiseLike=e=>"function"==typeof(null==e?void 0:e.then),isEqualAtomValue=(e,t)=>!!e&&"v"in e&&"v"in t&&Object.is(e.v,t.v),isEqualAtomError=(e,t)=>!!e&&"e"in e&&"e"in t&&Object.is(e.e,t.e),hasPromiseAtomValue=e=>!!e&&"v"in e&&e.v instanceof Promise,isEqualPromiseAtomValue=(e,t)=>"v"in e&&"v"in t&&e.v.orig&&e.v.orig===t.v.orig,returnAtomValue=e=>{if("e"in e)throw e.e;return e.v},createStore=()=>{let e,t;let r=new WeakMap,a=new WeakMap,n=new Map;e=new Set,t=new Set;let getAtomState=e=>r.get(e),setAtomState=(e,t)=>{Object.freeze(t);let a=r.get(e);if(r.set(e,t),n.has(e)||n.set(e,a),hasPromiseAtomValue(a)){let e="v"in t?t.v instanceof Promise?t.v:Promise.resolve(t.v):Promise.reject(t.e);a.v!==e&&cancelPromise(a.v,e)}},updateDependencies=(e,t,r)=>{let a=new Map,n=!1;r.forEach((r,o)=>{r||o!==e||(r=t),r?(a.set(o,r),t.d.get(o)!==r&&(n=!0)):console.warn("[Bug] atom state not found")}),(n||t.d.size!==a.size)&&(t.d=a)},setAtomValue=(e,t,r)=>{let a=getAtomState(e),n={d:(null==a?void 0:a.d)||new Map,v:t};if(r&&updateDependencies(e,n,r),isEqualAtomValue(a,n)&&a.d===n.d)return a;if(hasPromiseAtomValue(a)&&hasPromiseAtomValue(n)&&isEqualPromiseAtomValue(a,n)){if(a.d===n.d)return a;n.v=a.v}return setAtomState(e,n),n},setAtomValueOrPromise=(e,t,r,n)=>{if(isPromiseLike(t)){let o;let updatePromiseDependencies=()=>{let t=getAtomState(e);if(!hasPromiseAtomValue(t)||t.v!==i)return;let n=setAtomValue(e,i,r);a.has(e)&&t.d!==n.d&&mountDependencies(e,n,t.d)},i=new Promise((e,r)=>{let a=!1;t.then(t=>{a||(a=!0,resolvePromise(i,t),e(t),updatePromiseDependencies())},e=>{a||(a=!0,rejectPromise(i,e),r(e),updatePromiseDependencies())}),o=t=>{a||(a=!0,t.then(e=>resolvePromise(i,e),e=>rejectPromise(i,e)),e(t))}});return i.orig=t,i.status="pending",registerCancelPromise(i,e=>{e&&o(e),null==n||n()}),setAtomValue(e,i,r)}return setAtomValue(e,t,r)},setAtomError=(e,t,r)=>{let a=getAtomState(e),n={d:(null==a?void 0:a.d)||new Map,e:t};return(r&&updateDependencies(e,n,r),isEqualAtomError(a,n)&&a.d===n.d)?a:(setAtomState(e,n),n)},readAtomState=(e,t)=>{let r,n;let o=getAtomState(e);if(!t&&o&&(a.has(e)||Array.from(o.d).every(([t,r])=>{if(t===e)return!0;let a=readAtomState(t);return a===r||isEqualAtomValue(a,r)})))return o;let i=new Map,s=!0;try{let t=e.read(t=>{if(t===e){let e=getAtomState(t);if(e)return i.set(t,e),returnAtomValue(e);if(hasInitialValue(t))return i.set(t,void 0),t.init;throw Error("no atom init")}let r=readAtomState(t);return i.set(t,r),returnAtomValue(r)},{get signal(){return r||(r=new AbortController),r.signal},get setSelf(){return isActuallyWritableAtom(e)||console.warn("setSelf function cannot be used with read-only atom"),!n&&isActuallyWritableAtom(e)&&(n=(...t)=>{if(s&&console.warn("setSelf function cannot be called in sync"),!s)return writeAtom(e,...t)}),n}});return setAtomValueOrPromise(e,t,i,()=>null==r?void 0:r.abort())}catch(t){return setAtomError(e,t,i)}finally{s=!1}},addAtom=e=>{let t=a.get(e);return t||(t=mountAtom(e)),t},canUnmountAtom=(e,t)=>!t.l.size&&(!t.t.size||1===t.t.size&&t.t.has(e)),delAtom=e=>{let t=a.get(e);t&&canUnmountAtom(e,t)&&unmountAtom(e)},recomputeDependents=e=>{let t=new Map,r=new WeakMap,getDependents=e=>{var t;let r=new Set(null==(t=a.get(e))?void 0:t.t);return n.forEach((t,a)=>{var n;(null==(n=getAtomState(a))?void 0:n.d.has(e))&&r.add(a)}),r},loop1=e=>{getDependents(e).forEach(a=>{a!==e&&(t.set(a,(t.get(a)||new Set).add(e)),r.set(a,(r.get(a)||0)+1),loop1(a))})};loop1(e);let loop2=e=>{getDependents(e).forEach(a=>{var n;if(a!==e){let e=r.get(a);if(e&&r.set(a,--e),!e){let e=!!(null==(n=t.get(a))?void 0:n.size);if(e){let t=getAtomState(a),r=readAtomState(a,!0);e=!isEqualAtomValue(t,r)}e||t.forEach(e=>e.delete(a))}loop2(a)}})};loop2(e)},writeAtomState=(t,...r)=>{let a=!0,n=t.write(e=>returnAtomValue(readAtomState(e)),(r,...n)=>{let o;if(r===t){if(!hasInitialValue(r))throw Error("atom not writable");let e=getAtomState(r),t=setAtomValueOrPromise(r,n[0]);isEqualAtomValue(e,t)||recomputeDependents(r)}else o=writeAtomState(r,...n);if(!a){let t=flushPending();e.forEach(e=>e({type:"async-write",flushed:t}))}return o},...r);return a=!1,n},writeAtom=(t,...r)=>{let a=writeAtomState(t,...r),n=flushPending();return e.forEach(e=>e({type:"write",flushed:n})),a},mountAtom=(e,r,n)=>{var o;let i=n||[];null==(o=getAtomState(e))||o.d.forEach((t,r)=>{let n=a.get(r);n?n.t.add(e):r!==e&&mountAtom(r,e,i)}),readAtomState(e);let s={t:new Set(r&&[r]),l:new Set};if(a.set(e,s),t.add(e),isActuallyWritableAtom(e)&&e.onMount){let{onMount:t}=e;i.push(()=>{let r=t((...t)=>writeAtom(e,...t));r&&(s.u=r)})}return n||i.forEach(e=>e()),s},unmountAtom=e=>{var r;let n=null==(r=a.get(e))?void 0:r.u;n&&n(),a.delete(e),t.delete(e);let o=getAtomState(e);o?(hasPromiseAtomValue(o)&&cancelPromise(o.v),o.d.forEach((t,r)=>{if(r!==e){let t=a.get(r);t&&(t.t.delete(e),canUnmountAtom(r,t)&&unmountAtom(r))}})):console.warn("[Bug] could not find atom state to unmount",e)},mountDependencies=(e,t,r)=>{let n=new Set(t.d.keys());null==r||r.forEach((t,r)=>{if(n.has(r)){n.delete(r);return}let o=a.get(r);o&&(o.t.delete(e),canUnmountAtom(r,o)&&unmountAtom(r))}),n.forEach(t=>{let r=a.get(t);r?r.t.add(e):a.has(e)&&mountAtom(t,e)})},flushPending=()=>{let e;for(e=new Set;n.size;){let t=Array.from(n);n.clear(),t.forEach(([t,r])=>{let n=getAtomState(t);if(n){let o=a.get(t);o&&n.d!==(null==r?void 0:r.d)&&mountDependencies(t,n,null==r?void 0:r.d),o&&!(!hasPromiseAtomValue(r)&&(isEqualAtomValue(r,n)||isEqualAtomError(r,n)))&&(o.l.forEach(e=>e()),e.add(t))}else console.warn("[Bug] no atom state to flush")})}return e};return{get:e=>returnAtomValue(readAtomState(e)),set:writeAtom,sub:(t,r)=>{let a=addAtom(t),n=flushPending(),o=a.l;return o.add(r),e.forEach(e=>e({type:"sub",flushed:n})),()=>{o.delete(r),delAtom(t),e.forEach(e=>e({type:"unsub"}))}},dev_subscribe_store:(t,r)=>{if(2!==r)throw Error("The current StoreListener revision is 2.");return e.add(t),()=>{e.delete(t)}},dev_get_mounted_atoms:()=>t.values(),dev_get_atom_state:e=>r.get(e),dev_get_mounted:e=>a.get(e),dev_restore_atoms:t=>{for(let[e,r]of t)hasInitialValue(e)&&(setAtomValueOrPromise(e,r),recomputeDependents(e));let r=flushPending();e.forEach(e=>e({type:"restore",flushed:r}))}}};"number"==typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__?++globalThis.__NUMBER_OF_JOTAI_INSTANCES__:globalThis.__NUMBER_OF_JOTAI_INSTANCES__=1;let getDefaultStore=()=>(a||(1!==globalThis.__NUMBER_OF_JOTAI_INSTANCES__&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"),a=createStore()),a)}},function(e){e.O(0,[463,691,971,472,744],function(){return e(e.s=7577)}),_N_E=e.O()}]);