"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[131],{6131:(e,i,t)=>{t.r(i),t.d(i,{default:()=>u});var o=t(5043),n=t(1529),r=t(3968),a=t(3546),d=t(4117),l=t(579);const s=(0,n.Ay)(r.P.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 1rem;
`,c=(0,n.Ay)(r.P.div)`
  background: ${e=>e.theme.colors.primaryBackground};
  color: ${e=>e.theme.colors.text};
  padding: 2.5rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  border: 1px solid ${e=>e.theme.colors.accent};
`,m=n.Ay.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 0;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.accent};
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 255, 255, 0.1);
    color: ${e=>e.theme.colors.primary};
    transform: rotate(90deg);
  }
`,p=n.Ay.h2`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-shadow: 0 0 1px rgba(0, 255, 255, 0.3);
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,h=n.Ay.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  // Mantenemos la dirección en row incluso en móvil
  flex-direction: row;
`,x=n.Ay.div`
  flex: 1;
  min-width: 120px; // Reducimos el ancho mínimo para móvil
  max-width: 200px;

  @media (max-width: 479px) {
    min-width: 100px; // Ajustamos el ancho mínimo para móvil
    max-width: 150px; // Limitamos el ancho máximo en móvil
  }

  > button {
    width: 100%;
    height: 40px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 0.75rem; // Reducimos el padding en móvil
    font-size: 0.9rem; // Reducimos ligeramente el tamaño de la fuente en móvil
  }
`,u=e=>{let{isOpen:i,onClose:t,titleKey:n,children:r}=e;const{t:u}=(0,d.Bd)();if((0,o.useEffect)((()=>(i&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"})),[i]),!i)return null;const g=o.Children.map(r,(e=>(0,l.jsx)(x,{children:e})));return(0,l.jsx)(a.N,{children:(0,l.jsx)(s,{onClick:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,l.jsxs)(c,{onClick:e=>e.stopPropagation(),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},children:[(0,l.jsx)(m,{onClick:t,children:"\xd7"}),(0,l.jsx)(p,{children:u(n)}),(0,l.jsx)(h,{children:g})]})})})}}}]);
//# sourceMappingURL=131.741fd611.chunk.js.map