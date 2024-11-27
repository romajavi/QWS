/*! For license information please see 814.21e9ff1a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[814],{7784:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(5043);const a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t)).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const o=(0,n.forwardRef)(((e,t)=>{let{color:r="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:m,iconNode:d,...h}=e;return(0,n.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:r,strokeWidth:l?24*Number(s)/Number(o):s,className:a("lucide",c),...h},[...d.map((e=>{let[t,r]=e;return(0,n.createElement)(t,r)})),...Array.isArray(m)?m:[m]])})),s=(e,t)=>{const r=(0,n.forwardRef)(((r,i)=>{let{className:s,...l}=r;return(0,n.createElement)(o,{ref:i,iconNode:t,className:a(`lucide-${c=e,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,s),...l});var c}));return r.displayName=`${e}`,r}},4424:(e,t,r)=>{r.d(t,{A:()=>s});r(5043);var n=r(1529),a=r(2177),i=r(579);const o=n.Ay.button.withConfig({shouldComponentUpdate:e=>!["isActive"].includes(e)})`
  background: ${e=>e.theme.colors.primary};
  color: ${e=>e.theme.colors.buttonText};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  padding: ${e=>{let{$size:t}=e;return"small"===t?"0.5rem 1rem":"medium"===t?"0.75rem 1.5rem":"1rem 2rem"}};
  
  font-size: ${e=>{let{$size:t}=e;return"small"===t?"0.875rem":"medium"===t?"1rem":"1.125rem"}};
  
  min-width: ${e=>{let{$size:t}=e;return"small"===t?"100px":"medium"===t?"150px":"200px"}};
  
  background: ${e=>{let{$variant:t,theme:r}=e;return"secondary"===t?r.colors.secondaryBackground:r.colors.primary}};
  
  ${e=>{let{$glow:t,$variant:r,$glowIntensity:n=1}=e;return t&&"primary"===r?(0,a.QE)(n):""}}
  ${e=>{let{$glow:t,$variant:r,$glowIntensity:n=.5}=e;return t&&"secondary"===r?(0,a.Tw)(n):""}}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`,s=e=>{let{children:t,variant:r="primary",size:n="medium",glow:a=!1,glowIntensity:s=1,className:l,isActive:c,...m}=e;return(0,i.jsx)(o,{$variant:r,$size:n,$glow:a,$glowIntensity:s,className:l,...m,children:t})}},4814:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});r(5043);var n=r(1529);const a=(0,r(7784).A)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var i=r(4117),o=r(3216),s=r(4424),l=r(579);const c=n.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,m=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
`,d=n.Ay.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${e=>e.theme.colors.primary};
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  font-family: ${e=>e.theme.fonts.main};
`,h=n.Ay.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,p=n.Ay.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${c} 10s linear infinite;

  svg {
    width: 100%;
    height: 100%;
    color: ${e=>e.theme.colors.primary};
  }
`,x=n.Ay.div`
  position: absolute;
  width: 50px;
  height: 50px;
  animation: ${c} 10s linear infinite reverse;

  svg {
    width: 100%;
    height: 100%;
    color: ${e=>e.theme.colors.accent};
  }

  &.top-right {
    top: 20px;
    right: 20px;
  }

  &.bottom-left {
    bottom: 20px;
    left: 20px;
  }
`,g=n.Ay.div`
  text-align: center;
  margin-top: 3rem;
  
  p {
    font-size: 1.5rem;
    margin: 1rem 0;
    line-height: 1.6;
    color: ${e=>e.theme.colors.text};
    
    &.subtitle {
      font-size: 1.1rem;
      color: ${e=>e.theme.colors.primary};
      opacity: 0.8;
    }
  }
`,u=n.Ay.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`,f=e=>{let{pageName:t}=e;const{t:r}=(0,i.Bd)(),n=(0,o.Zp)();return(0,l.jsxs)(m,{children:[(0,l.jsx)(d,{children:t}),(0,l.jsxs)(h,{children:[(0,l.jsx)(p,{children:(0,l.jsx)(a,{})}),(0,l.jsx)(x,{className:"top-right",children:(0,l.jsx)(a,{})}),(0,l.jsx)(x,{className:"bottom-left",children:(0,l.jsx)(a,{})})]}),(0,l.jsxs)(g,{children:[(0,l.jsx)("p",{children:r("underConstruction.message")}),(0,l.jsx)("p",{className:"subtitle",children:r("underConstruction.subtitle")})]}),(0,l.jsx)(u,{children:(0,l.jsx)(s.A,{variant:"primary",glow:!0,onClick:()=>{n("/services")},children:r("navigation.goToServices","Ir a Servicios")})})]})}},2177:(e,t,r)=>{r.d(t,{FK:()=>o,QE:()=>s,Tw:()=>l});var n=r(1529);const a=n.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,i=n.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.AH`
  animation: ${i} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*e}px);
  }
`},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.AH`
  animation: ${a} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*e}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*e}px rgba(255, 215, 0, 0.5);
  }
`},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return n.AH`
  animation: ${a} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*e}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*e}px rgba(255, 215, 0, 0.4);
  }
`}}}]);
//# sourceMappingURL=814.21e9ff1a.chunk.js.map