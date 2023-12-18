(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[243],{8574:function(e,t,n){Promise.resolve().then(n.bind(n,3676))},1216:function(e,t,n){"use strict";var r=n(7437),a=n(6481),l=n(1396),o=n.n(l);t.Z=e=>{let{children:t,className:n,...l}=e;return(0,r.jsx)(o(),{className:(0,a.Z)("cursor-pointer",n),...l,children:t})}},4298:function(e,t,n){"use strict";var r=n(7437),a=n(6481);t.Z=e=>{let{className:t,children:n,size:l="default",direction:o="column",gap:i="default",containerRef:s,...c}=e;return(0,r.jsx)("div",{ref:s,className:(0,a.Z)("flex w-full flex-col",{default:"max-w-sectionContainer",small:"max-w-sectionContainerSmall"}[l],{column:"flex-col",row:"tablet:flex-row"}[o],{default:"",xl:"gap-4 tablet:gap-8",lg:"gap-9 tablet:gap-12"}[i],t),...c,children:n})}},358:function(e,t,n){"use strict";var r=n(7437),a=n(8294),l=n(6481);t.Z=e=>{let{subtitle:t,title:n,description:o,titleColor:i="secondary",subtitleColor:s="secondary",heading:c="h2",position:u="center"}=e;return(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:(0,l.Z)("flex flex-col gap-2 text-center",{start:"tablet:text-start",end:"tablet:text-end",center:"text-center"}[u]),children:[(0,r.jsx)(a.Z,{tag:"p",variant:"subtitle",className:(0,l.Z)("h-fit",{secondary:"text-secondary",white:"text-white"}[s]),children:t}),(0,r.jsx)(a.Z,{tag:c,variant:c,className:(0,l.Z)({secondary:"text-secondary",black:"text-black",white:"text-white"}[i]),children:n})]}),(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{variant:"p",className:"mt-3 ",children:o})})]})}},8278:function(e,t,n){"use strict";n.d(t,{Z:function(){return Section}});var r=n(7437),a=n(6481);function Section(e){let{className:t,children:n,sectionRef:l,...o}=e;return(0,r.jsx)("section",{ref:l,className:(0,a.Z)("flex h-fit w-full items-center justify-center p-5 py-10 tablet:p-14",t),...o,children:n})}},8294:function(e,t,n){"use strict";var r=n(7437),a=n(2265),l=n(6481),o=n(6061);let i=(0,o.j)("",{variants:{variant:{h1:["uppercase text-2xl font-semibold tablet:extrabold tablet:text-3xl desktop:text-[42px] tracking-[5px] desktop:leading-heading"],h2:[" desktop:leading-heading uppercase font-bold text-2xl tablet:font-extrabold tablet:text-3xl desktop:text-[42px]	 tracking-[4px]"],h3:["leading-heading uppercase font-bold text-xl  tablet:text-[27px]  tracking-[4px] "],subtitle:["uppercase font-bold text-sm tablet:text-lg tracking-[9px]"],p:["tracking-wide"],pBold:[""],pHGL:[""],citation:["uppercase font-normal tracking-[1.5px]"],cardTitle:[" text-left text-lg tablet:text-xl font-bold uppercase tracking-[2px]"],cardBody:[" w-full p-2 tablet:p-4 text-center font-medium tracking-wide "],anchor:[""],footerHeader:["text-2xl font-bold text-black uppercase tracking-[2px]"],button:["text-left text-lg tablet:text-xl font-bold uppercase"],span:[""]}},defaultVariants:{variant:"p"}}),s=(0,a.forwardRef)(function(e,t){let{children:n,tag:a="p",variant:o="p",icon:s,className:c,...u}=e;return(0,r.jsx)(a,{ref:t,className:(0,l.Z)(i({variant:o}),c),...u,children:s?s+" "+n:n})});t.Z=s},112:function(e,t,n){"use strict";var r=n(7437),a=n(1216),l=n(8294),o=n(6481),i=n(6061),s=n(3159);let c=(0,i.j)("flex w-fit justify-between rounded-2xl px-4 py-3 items-center",{variants:{variant:{primary:"gap-3 border border-secondary bg-white  font-bold text-secondary hover:border-white hover:text-white hover:bg-secondary",secondary:"justify-between gap-3 border border-white bg-secondary  font-bold text-white hover:border-secondary hover:text-secondary hover:bg-white",tertiary:"gap-5 justify-between bg-secondary text-white hover:bg-secondary/95"}},defaultVariants:{variant:"primary"}});t.Z=e=>{let{href:t,className:n,Icon:i,children:u,variant:d="primary",highlight:f=!1,iconSize:m,ariaLabel:p}=e;return(0,r.jsxs)(a.Z,{href:t,className:(0,o.Z)(c({variant:d}),n),"aria-label":p,children:[i?(0,r.jsx)(i,{size:m||27}):(0,r.jsx)(s.wEH,{size:m||27}),(0,r.jsx)(l.Z,{tag:"p",variant:f?"button":"p",className:"",children:u})]})}},3676:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return organisms_Contact}});var r=n(7437),a=n(4606),l=n(5932);let o={subtitle:"Contato",title:"entre em contato com a gente e nos siga nas redes sociais",links:[{name:"WhatsApp",url:"https://wa.me/5511930153155",Icon:a.RGt},{name:"Email",url:"mailto:marcelo.lima@malisiengenharia.com.br",Icon:l.sMq},{name:"Linkedin",url:"https://www.linkedin.com/company/malisi-engenharia-de-seguran%C3%A7a-do-trabalho-e-meio-ambiente/",Icon:a.NQh},{name:"Instagram",url:"https://www.instagram.com/malisiengenharia?utm_source=qr",Icon:a.Vs6}]};var i=n(8278),s=n(4298),c=n(112),u=n(358),d=n(7712),f=n(6165),m=n(2167),p=n(2979),h=n(2265),organisms_Contact=()=>{let e=(0,h.useRef)(null),t=(0,d._)(),n=(0,f.Y)(e,{once:!0});return(0,h.useEffect)(()=>{n?t.start({y:0,scale:1,opacity:1}):t.start({y:"100vh"})},[n,t]),(0,r.jsx)(i.Z,{className:"h-screen",children:(0,r.jsxs)(s.Z,{containerRef:e,direction:"row",children:[(0,r.jsx)(u.Z,{subtitle:o.subtitle,title:o.title,position:"start"}),(0,r.jsx)(s.Z,{className:"flex w-full flex-col gap-4",children:(0,r.jsx)(m.M,{children:o.links.map((e,n)=>(0,r.jsx)(p.E.div,{initial:{scale:0,opacity:0},animate:t,transition:{type:"spring",stiffness:260,damping:20,delay:.5+n/10,duration:10,ease:"easeInOut"},children:(0,r.jsx)(c.Z,{variant:"secondary",href:e.url,Icon:e.Icon,iconSize:30,className:"mx-auto w-full min-w-[240px] justify-between",highlight:!0,ariaLabel:"Entre em contato com a gente via ".concat(e.name,"."),children:e.name})},e.name))})})]})})}},6481:function(e,t,n){"use strict";var r=n(7042),a=n(4769);function cn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}t.Z=cn},1172:function(e,t,n){"use strict";n.d(t,{w_:function(){return GenIcon}});var r=n(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Tree2Element(e){return e&&e.map(function(e,t){return r.createElement(e.tag,__assign({key:t},e.attr),Tree2Element(e.child))})}function GenIcon(e){return function(t){return r.createElement(IconBase,__assign({attr:__assign({},e.attr)},t),Tree2Element(e.child))}}function IconBase(e){var elem=function(t){var n,a=e.attr,l=e.size,o=e.title,i=__rest(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:n,style:__assign(__assign({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&r.createElement("title",null,o),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return elem(e)}):elem(a)}},6061:function(e,t,n){"use strict";n.d(t,{j:function(){return cva}});var r=n(7042);let falsyToString=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=r.W,cva=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return a(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:l,defaultVariants:o}=t,i=Object.keys(l).map(e=>{let t=null==n?void 0:n[e],r=null==o?void 0:o[e];if(null===t)return null;let a=falsyToString(t)||falsyToString(r);return l[e][a]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...a}=t;return Object.entries(a).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...o,...s}[t]):({...o,...s})[t]===n})?[...e,n,r]:e},[]);return a(e,i,c,null==n?void 0:n.class,null==n?void 0:n.className)}},7712:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});var r=n(6567),a=n(7798),l=n(9870);function stopAnimation(e){e.values.forEach(e=>e.stop())}function animationControls(){let e=!1,t=new Set,n={subscribe:e=>(t.add(e),()=>void t.delete(e)),start(n,a){(0,r.k)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");let o=[];return t.forEach(e=>{o.push((0,l.d)(e,n,{transitionOverride:a}))}),Promise.all(o)},set:n=>((0,r.k)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach(e=>{(0,a.gg)(e,n)})),stop(){t.forEach(e=>{stopAnimation(e)})},mount:()=>(e=!0,()=>{e=!1,n.stop()})};return n}var o=n(961),i=n(538);function useAnimationControls(){let e=(0,o.h)(animationControls);return(0,i.L)(e.mount,[]),e}let s=useAnimationControls},6165:function(e,t,n){"use strict";n.d(t,{Y:function(){return useInView}});var r=n(2265),a=n(6567);function resolveElements(e,t,n){var r;if("string"==typeof e){let l=document;t&&((0,a.k)(!!t.current,"Scope provided, but no element detected."),l=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=l.querySelectorAll(e)),e=n[e]):e=l.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}let l={some:0,all:1};function inView(e,t,{root:n,margin:r,amount:a="some"}={}){let o=resolveElements(e),i=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let n=i.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?i.set(e.target,n):s.unobserve(e.target)}else n&&(n(e),i.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof a?a:l[a]});return o.forEach(e=>s.observe(e)),()=>s.disconnect()}function useInView(e,{root:t,margin:n,amount:a,once:l=!1}={}){let[o,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||l&&o)return;let r={root:t&&t.current||void 0,margin:n,amount:a};return inView(e.current,()=>(i(!0),l?void 0:()=>i(!1)),r)},[t,e,n,l]),o}}},function(e){e.O(0,[465,447,420,463,971,472,744],function(){return e(e.s=8574)}),_N_E=e.O()}]);