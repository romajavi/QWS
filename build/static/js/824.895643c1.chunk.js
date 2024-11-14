"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[824],{4424:(e,t,r)=>{r.d(t,{A:()=>l});r(5043);var o=r(1529),i=r(2339),a=r(579);const s=o.i7`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
`,d=o.Ay.button`
  ${i.ku}
  ${e=>i.dK[e.size||"medium"]}
  ${e=>i.ru[e.variant||"primary"]}
  ${e=>e.customStyle}

  ${e=>e.$isAnimated&&o.AH`
    animation: ${s} 2s infinite ease-in-out;
  `}

  ${e=>e.fullWidth&&o.AH`
    width: 100%;
  `}

  ${e=>"submit"===e.type&&o.AH`
    margin-left: auto;
  `}

  ${e=>"clear"===e.variant&&o.AH`
    background: ${e=>e.theme.colors.secondaryBackground};
    &:hover {
      background: ${e=>e.theme.colors.secondaryBackground};
      opacity: 0.8;
    }
  `}
`,l=e=>{let{children:t,variant:r="primary",size:o="medium",animated:i=!1,className:s="",customStyle:l,fullWidth:m=!1,...n}=e;return(0,a.jsx)(d,{$variant:r,$isAnimated:i,size:o,className:s,customStyle:l,fullWidth:m,...n,children:t})}},9824:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var o=r(5043),i=r(1529),a=r(3968),s=r(579);const d=(0,i.Ay)(a.P.article)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  overflow: hidden;
`,l=i.Ay.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,m=i.Ay.div`
  padding: 1rem;
`,n=i.Ay.h2`
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem;
`,c=i.Ay.p`
  color: #a5aa9a;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`,p=i.Ay.p`
  margin-bottom: 1rem;
`,u=i.Ay.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,x=(i.Ay.div`
  display: flex;
  gap: 0.5rem;
`,i.Ay.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`),h=(0,i.Ay)(a.P.button)`
  // Si necesitas estilos adicionales específicos para este botón, 
  // puedes agregarlos aquí. De lo contrario, heredará los estilos 
  // globales definidos en GlobalStyles.js
`,g=e=>{let{title:t,date:r,excerpt:i,content:a,image:g}=e;const[b,y]=(0,o.useState)(!1);return(0,s.jsxs)(d,{children:[(0,s.jsx)(l,{src:g,alt:t}),(0,s.jsxs)(m,{children:[(0,s.jsx)(n,{children:t}),(0,s.jsx)(c,{children:r}),(0,s.jsx)(p,{children:b?a:i}),(0,s.jsx)(u,{children:(0,s.jsx)(h,{onClick:()=>y(!b),children:b?"Cerrar":"Leer m\xe1s"})}),(0,s.jsx)(x,{children:(0,s.jsx)("h3",{children:"Comentarios"})})]})]})};r(4424);const b=i.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,y=i.Ay.h1`
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
`,v=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`,j=()=>(0,s.jsxs)(b,{children:[(0,s.jsx)(y,{children:"Blog"}),(0,s.jsxs)(v,{children:[(0,s.jsx)(g,{title:"T\xedtulo del Post 1",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),(0,s.jsx)(g,{title:"T\xedtulo del Post 2",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),"                ",(0,s.jsx)(g,{title:"T\xedtulo del Post 1",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),(0,s.jsx)(g,{title:"T\xedtulo del Post 2",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),"                ",(0,s.jsx)(g,{title:"T\xedtulo del Post 1",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),(0,s.jsx)(g,{title:"T\xedtulo del Post 2",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."})]})]})}}]);
//# sourceMappingURL=824.895643c1.chunk.js.map