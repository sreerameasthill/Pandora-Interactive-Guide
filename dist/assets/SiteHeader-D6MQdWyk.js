import{u as y,b as f,c as g,r as i,j as n,L as c}from"./index-Vp66VRMP.js";function v(o){const r=y();return f(r.stores.__store,g(o,r))}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=(...o)=>o.filter((t,r,a)=>!!t&&a.indexOf(t)===r).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=i.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:l="",children:e,iconNode:s,...x},b)=>i.createElement("svg",{ref:b,...k,width:t,height:t,stroke:o,strokeWidth:a?Number(r)*24/Number(t):r,className:u("lucide",l),...x},[...s.map(([h,m])=>i.createElement(h,m)),...Array.isArray(e)?e:[e]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(o,t)=>{const r=i.forwardRef(({className:a,...l},e)=>i.createElement(w,{ref:e,iconNode:t,className:u(`lucide-${S(o)}`,a),...l}));return r.displayName=`${o}`,r};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=p("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=p("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),d=[{to:"/",label:"Home"},{to:"/about-pandora",label:"About Pandora"},{to:"/why-iis",label:"Why IIS"},{to:"/supply-chain",label:"Supply Chain"},{to:"/how-iis-works",label:"How It Works"},{to:"/consumers",label:"Consumers"},{to:"/glossary",label:"Glossary"}];function L(){const[o,t]=i.useState(!1),a=v().location.pathname;function l(e){return e==="/"?a==="/":a.startsWith(e)}return n.jsxs("header",{style:{position:"sticky",top:0,zIndex:50,background:"rgba(255,255,255,0.97)",backdropFilter:"blur(8px)",borderBottom:"1px solid var(--color-border)"},children:[n.jsxs("div",{style:{maxWidth:"80rem",margin:"0 auto",padding:"0 1.5rem",height:"48px",display:"flex",alignItems:"center",gap:"1.5rem"},children:[n.jsx(c,{to:"/",style:{fontWeight:700,fontSize:"13px",letterSpacing:"0.08em",color:"var(--color-ink)",textDecoration:"none",textTransform:"uppercase",whiteSpace:"nowrap",flexShrink:0},children:"IIS"}),n.jsx("div",{style:{width:1,height:16,background:"var(--color-border)",flexShrink:0}}),n.jsx("nav",{style:{display:"flex",gap:"0",flex:1},"aria-label":"Site navigation",children:d.map(e=>{const s=l(e.to);return n.jsx(c,{to:e.to,style:{fontSize:"12px",fontWeight:s?600:400,color:s?"var(--color-accent-blue)":"var(--color-muted-foreground)",textDecoration:"none",padding:"14px 10px",borderBottom:s?"2px solid var(--color-accent-blue)":"2px solid transparent",transition:"color 0.15s, border-color 0.15s",whiteSpace:"nowrap"},children:e.label},e.to)})}),n.jsx("button",{style:{marginLeft:"auto",background:"none",border:"none",cursor:"pointer",padding:4,flexShrink:0},onClick:()=>t(e=>!e),"aria-label":o?"Close menu":"Open menu",children:o?n.jsx(C,{size:18}):n.jsx(j,{size:18})})]}),o&&n.jsx("nav",{style:{background:"white",borderTop:"1px solid var(--color-border)",padding:"0.5rem 1.5rem 1rem",display:"flex",flexDirection:"column"},"aria-label":"Mobile navigation",children:d.map(e=>{const s=l(e.to);return n.jsx(c,{to:e.to,onClick:()=>t(!1),style:{fontSize:"14px",fontWeight:s?600:400,color:s?"var(--color-accent-blue)":"var(--color-ink)",textDecoration:"none",padding:"10px 0",borderBottom:"1px solid var(--color-border)"},children:e.label},e.to)})})]})}export{L as S,p as c};
