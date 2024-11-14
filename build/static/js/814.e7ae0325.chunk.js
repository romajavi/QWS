/*! For license information please see 814.e7ae0325.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[814],{7784:(e,t,r)=>{r.d(t,{A:()=>l});var a=r(5043);const o=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t)).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const n=(0,a.forwardRef)(((e,t)=>{let{color:r="currentColor",size:n=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:c="",children:h,iconNode:m,...d}=e;return(0,a.createElement)("svg",{ref:t,...i,width:n,height:n,stroke:r,strokeWidth:s?24*Number(l)/Number(n):l,className:o("lucide",c),...d},[...m.map((e=>{let[t,r]=e;return(0,a.createElement)(t,r)})),...Array.isArray(h)?h:[h]])})),l=(e,t)=>{const r=(0,a.forwardRef)(((r,i)=>{let{className:l,...s}=r;return(0,a.createElement)(n,{ref:i,iconNode:t,className:o(`lucide-${c=e,c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,l),...s});var c}));return r.displayName=`${e}`,r}},4814:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});r(5043);var a=r(1529);const o=(0,r(7784).A)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var i=r(579);const n=a.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,l=(a.i7`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`,a.i7`
  0% { box-shadow: 0 0 5px ${e=>e.theme.colors.primary}; }
  50% { box-shadow: 0 0 20px ${e=>e.theme.colors.primary}; }
  100% { box-shadow: 0 0 5px ${e=>e.theme.colors.primary}; }
`,a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  padding: 2rem;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
`),s=a.Ay.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: ${e=>e.theme.colors.primary};
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
  font-family: ${e=>e.theme.fonts.main};
`,c=a.Ay.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`,h=a.Ay.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${n} 10s linear infinite;

  svg {
    width: 100%;
    height: 100%;
    color: ${e=>e.theme.colors.primary};
  }
`,m=a.Ay.div`
  position: absolute;
  width: 50px;
  height: 50px;
  animation: ${n} 10s linear infinite reverse;

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
`,d=a.Ay.div`
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
`,p=e=>{let{pageName:t}=e;return(0,i.jsxs)(l,{children:[(0,i.jsx)(s,{children:t}),(0,i.jsxs)(c,{children:[(0,i.jsx)(h,{children:(0,i.jsx)(o,{})}),(0,i.jsx)(m,{className:"top-right",children:(0,i.jsx)(o,{})}),(0,i.jsx)(m,{className:"bottom-left",children:(0,i.jsx)(o,{})})]}),(0,i.jsxs)(d,{children:[(0,i.jsx)("p",{children:"Estamos trabajando en algo incre\xedble"}),(0,i.jsx)("p",{className:"subtitle",children:"\xa1Vuelve pronto para descubrir las novedades!"})]})]})}}}]);
//# sourceMappingURL=814.e7ae0325.chunk.js.map