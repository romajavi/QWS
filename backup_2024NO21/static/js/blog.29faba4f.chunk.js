"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[19],{4424:(e,r,t)=>{t.d(r,{A:()=>s});t(5043);var o=t(1529),a=t(2177),i=t(579);const n=o.Ay.button`
  /* Estilos base */
  background: ${e=>e.theme.colors.primary};
  color: ${e=>e.theme.colors.buttonText};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  /* Tamaños */
  padding: ${e=>{let{$size:r}=e;return"small"===r?"0.5rem 1rem":"0.75rem 1.5rem"}};
  font-size: ${e=>{let{$size:r}=e;return"medium"===r?"0.875rem":"1rem"}};
  min-width: ${e=>{let{$size:r}=e;return"large"===r?"100px":"150px"}};
  
  /* Variantes */
  background: ${e=>{let{$variant:r,theme:t}=e;return"secondary"===r?t.colors.secondaryBackground:t.colors.primary}};
  
  /* Efectos de resplandor */
  ${e=>{let{$glow:r,$variant:t,$glowIntensity:o=1}=e;return r&&"primary"===t?(0,a.QE)(o):""}}
  ${e=>{let{$glow:r,$variant:t,$glowIntensity:o=.5}=e;return r&&"secondary"===t?(0,a.Tw)(o):""}}

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
`,s=e=>{let{children:r,variant:t="primary",size:o="medium",glow:a=!1,glowIntensity:s=1,...l}=e;return(0,i.jsx)(n,{$variant:t,$size:o,$glow:a,$glowIntensity:s,...l,children:r})}},9824:(e,r,t)=>{t.r(r),t.d(r,{default:()=>w});var o=t(5043),a=t(1529),i=t(3968),n=t(579);const s=(0,a.Ay)(i.P.article)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin-bottom: 2rem;
  overflow: hidden;
`,l=a.Ay.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,d=a.Ay.div`
  padding: 1rem;
`,m=a.Ay.h2`
  color: ${e=>e.theme.colors.primary};
  margin-bottom: 0.5rem;
`,c=a.Ay.p`
  color: #a5aa9a;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`,p=a.Ay.p`
  margin-bottom: 1rem;
`,x=a.Ay.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,g=(a.Ay.div`
  display: flex;
  gap: 0.5rem;
`,a.Ay.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`),u=(0,a.Ay)(i.P.button)`
  // Si necesitas estilos adicionales específicos para este botón, 
  // puedes agregarlos aquí. De lo contrario, heredará los estilos 
  // globales definidos en GlobalStyles.js
`,b=e=>{let{title:r,date:t,excerpt:a,content:i,image:b}=e;const[h,v]=(0,o.useState)(!1);return(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{src:b,alt:r}),(0,n.jsxs)(d,{children:[(0,n.jsx)(m,{children:r}),(0,n.jsx)(c,{children:t}),(0,n.jsx)(p,{children:h?i:a}),(0,n.jsx)(x,{children:(0,n.jsx)(u,{onClick:()=>v(!h),children:h?"Cerrar":"Leer m\xe1s"})}),(0,n.jsx)(g,{children:(0,n.jsx)("h3",{children:"Comentarios"})})]})]})};t(4424);var h=t(3216),v=t(4117);const y=a.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,$=a.Ay.h1`
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
`,f=a.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`,w=()=>{const{t:e}=(0,v.Bd)();(0,h.Zp)();return(0,n.jsxs)(y,{children:[(0,n.jsx)($,{children:"Blog"}),(0,n.jsxs)(f,{children:[(0,n.jsx)(b,{title:"T\xedtulo del Post 1",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),(0,n.jsx)(b,{title:"T\xedtulo del Post 2",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),"                ",(0,n.jsx)(b,{title:"T\xedtulo del Post 1",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),(0,n.jsx)(b,{title:"T\xedtulo del Post 2",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),"                ",(0,n.jsx)(b,{title:"T\xedtulo del Post 1",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."}),(0,n.jsx)(b,{title:"T\xedtulo del Post 2",date:"22 de noviembre, 2024",excerpt:"Lorem ipsum dolor sit amet..."})]})]})}},2177:(e,r,t)=>{t.d(r,{FK:()=>n,QE:()=>s,Tw:()=>l});var o=t(1529);const a=o.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,i=o.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.AH`
  animation: ${i} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*e}px);
  }
`},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.AH`
  animation: ${a} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*e}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*e}px rgba(255, 215, 0, 0.5);
  }
`},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return o.AH`
  animation: ${a} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*e}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*e}px rgba(255, 215, 0, 0.4);
  }
`}}}]);
//# sourceMappingURL=blog.29faba4f.chunk.js.map