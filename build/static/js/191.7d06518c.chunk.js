"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[191],{4424:(e,r,t)=>{t.d(r,{A:()=>c});t(5043);var o=t(1529),n=t(2339),a=t(579);const i=o.i7`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
`,s=o.Ay.button`
  ${n.ku}
  ${e=>n.dK[e.size||"medium"]}
  ${e=>n.ru[e.variant||"primary"]}
  ${e=>e.customStyle}

  ${e=>e.$isAnimated&&o.AH`
    animation: ${i} 2s infinite ease-in-out;
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
`,c=e=>{let{children:r,variant:t="primary",size:o="medium",animated:n=!1,className:i="",customStyle:c,fullWidth:l=!1,...d}=e;return(0,a.jsx)(s,{$variant:t,$isAnimated:n,size:o,className:i,customStyle:c,fullWidth:l,...d,children:r})}},558:(e,r,t)=>{t.d(r,{A:()=>S});var o=t(5043),n=t(1529),a=t(3216),i=t(5475),s=t(764),c=t(5327),l=t(1286),d=t(5088),m=t(4632),p=t(4405),h=t(2330),u=t(8814),x=t(579);const g=n.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,b=n.Ay.footer`
  background: linear-gradient(
    45deg,
    ${e=>e.theme.colors.background},
    ${e=>e.theme.colors.primaryBackground}
  );
  color: ${e=>e.theme.colors.text};
  padding: 2rem 2rem 1.5rem; // Reducido de 4rem 2rem 2rem
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      ${e=>e.theme.colors.primary},
      ${e=>e.theme.colors.accent},
      ${e=>e.theme.colors.primary}
    );
    background-size: 200% 200%;
    animation: ${g} 3s linear infinite;
  }
`,f=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem; // Reducido de 3rem
  max-width: 1200px;
  margin: 0 auto;
`,y=n.Ay.div`
  h3 {
    color: ${e=>e.theme.colors.primary};
    font-size: 1.2rem; // Reducido de 1.5rem
    margin-bottom: 1rem; // Reducido de 1.5rem
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px; // Reducido de 50px
      height: 2px;
      background: ${e=>e.theme.colors.accent};
    }
  }
`,j=(0,n.Ay)(i.N_)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.colors.text};
  text-decoration: none;
  margin-bottom: 0.75rem; // Reducido de 1rem
  transition: all 0.3s ease;

  &:hover {
    color: ${e=>e.theme.colors.accent};
    transform: translateX(10px);
  }
`,v=n.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem; // Reducido de 1.5rem
`,k=n.Ay.a`
  color: ${e=>e.theme.colors.text};
  background: ${e=>e.theme.colors.primaryBackground};
  padding: 0.6rem; // Reducido de 0.8rem
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${e=>e.theme.colors.background};
    background: ${e=>e.theme.colors.accent};
    transform: translateY(-5px);
  }

  svg {
    width: 18px; // Reducido de 20px
    height: 18px; // Reducido de 20px
  }
`,w=n.Ay.div`
  text-align: center;
  margin-top: 2rem; // Reducido de 3rem
  padding-top: 1.5rem; // Reducido de 2rem
  border-top: 1px solid ${e=>e.theme.colors.primary}40;
  color: ${e=>e.theme.colors.text}80;
  font-size: 0.9rem; // Añadido para reducir tamaño del texto
`,A=()=>{const e=(0,a.Zp)(),r=()=>{window.open("https://wa.me/5491168805604","_blank")};return(0,x.jsxs)(b,{children:[(0,x.jsxs)(f,{children:[(0,x.jsxs)(y,{children:[(0,x.jsx)("h3",{children:"Axion Dev"}),(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"/about-us",children:[(0,x.jsx)(s.A,{size:16}),"Sobre Nosotros"]}),(0,x.jsxs)(j,{to:"/services",children:[(0,x.jsx)(s.A,{size:16}),"Servicios"]}),(0,x.jsxs)(j,{to:"/contact",children:[(0,x.jsx)(c.A,{size:16}),"Contacto"]})]})]}),(0,x.jsxs)(y,{children:[(0,x.jsx)("h3",{children:"Recursos"}),(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"/blog",children:[(0,x.jsx)(s.A,{size:16}),"Blog"]}),(0,x.jsxs)(j,{to:"#",onClick:r=>{r.preventDefault(),e("/services#faq")},children:[(0,x.jsx)(s.A,{size:16}),"Preguntas Frecuentes"]}),(0,x.jsxs)(j,{to:"#",onClick:r,children:[(0,x.jsx)(l.A,{size:16}),"Soporte"]})]})]}),(0,x.jsxs)(y,{children:[(0,x.jsx)("h3",{children:"Contacto"}),(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"#",onClick:r,children:[(0,x.jsx)(l.A,{size:16}),"WhatsApp"]}),(0,x.jsxs)(j,{to:"mailto:contact@axiondev.tech",children:[(0,x.jsx)(c.A,{size:16}),"contact@axiondev.tech"]}),(0,x.jsxs)(j,{to:"#",children:[(0,x.jsx)(d.A,{size:16}),"Lun - Vie: 9:00 - 18:00"]})]})]}),(0,x.jsxs)(y,{children:[(0,x.jsx)("h3",{children:"S\xedguenos"}),(0,x.jsxs)(v,{children:[(0,x.jsx)(k,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(m.A,{})}),(0,x.jsx)(k,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(p.A,{})}),(0,x.jsx)(k,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(h.A,{})}),(0,x.jsx)(k,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(u.A,{})})]})]})]}),(0,x.jsxs)(w,{children:["\xa9 ",(new Date).getFullYear()," AxionDev. Todos los derechos reservados."]})]})};var $=t(7617);const D=n.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
`,C=n.Ay.main`
  flex: 1;
  width: 100%;
  min-height: ${e=>e.isHome?"100vh":"calc(100vh - 120px)"};
  padding-top: 100px; 
  padding-bottom: ${e=>e.showFooter?"2rem":"0"};
  position: relative;
  z-index: 1;
`,z=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,S=e=>{let{children:r}=e;const t="/"===(0,a.zy)().pathname;return(0,x.jsxs)(D,{children:[(0,x.jsx)(C,{isHome:t,showFooter:!t,children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)($.A,{}),children:(0,x.jsx)(z,{children:r})})}),!t&&(0,x.jsx)(A,{})]})}},6131:(e,r,t)=>{t.d(r,{A:()=>p});var o=t(5043),n=t(1529),a=t(3968),i=t(3546),s=t(579);const c=(0,n.Ay)(a.P.div)`
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
`,l=(0,n.Ay)(a.P.div)`
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
`,d=n.Ay.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: ${e=>e.theme.colors.accent};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  line-height: 1;
  z-index: 1;
  &:hover {
    color: ${e=>e.theme.colors.primary};
  }
`,m=n.Ay.h2`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-shadow: 0 0 1px rgba(0, 255, 255, 0.3);
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,p=e=>{let{isOpen:r,onClose:t,title:n,children:a}=e;return(0,o.useEffect)((()=>(r&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"})),[r]),r?(0,s.jsx)(i.N,{children:(0,s.jsx)(c,{onClick:t,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,s.jsxs)(l,{onClick:e=>e.stopPropagation(),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},children:[(0,s.jsx)(d,{onClick:t,children:"\xd7"}),(0,s.jsx)(m,{children:n}),a]})})}):null}},8191:(e,r,t)=>{t.r(r),t.d(r,{default:()=>G});var o=t(5043),n=t(3216),a=t(1529),i=t(7886),s=t(3968),c=t(4424),l=t(579);const d=a.Ay.div`
  background: ${e=>e.theme.colors.background};
  border: 1px solid ${e=>e.theme.colors.primary};
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.8rem;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 2rem; // Agregar margen inferior
  display: flex;
  flex-direction: column;
`,m=a.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,p=a.Ay.h3`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
`,h=a.Ay.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.1rem;
  flex-grow: 1;
  padding: 0.1rem;
`,u=(0,a.Ay)(s.P.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  min-height: 10px; 
  min-width: 10px;  
  padding: 0.1rem;
  background: ${e=>e.isSelected?e.theme.colors.primary:e.isDisabled?e.theme.colors.background+"40":"transparent"};
  color: ${e=>e.isSelected?e.theme.colors.background:e.isDisabled?e.theme.colors.text+"40":e.theme.colors.text};
  border-radius: 50%;
  cursor: ${e=>e.isDisabled?"not-allowed":"pointer"};
  font-size: 0.7rem;
  opacity: ${e=>e.isDisabled?.5:1};
  
  &:hover {
    background: ${e=>!e.isDisabled&&e.theme.colors.secondaryBackground};
  }
`,x=a.Ay.div`
  text-align: center;
  font-weight: bold;
  color: ${e=>e.theme.colors.accent};
  font-size: 0.7rem;
`,g=(0,a.Ay)(c.A)`
  padding: 0.3rem 0.6rem;
  min-width: auto;
  font-size: 0.8rem;
  background:  ${e=>e.theme.colors.primary};
  border: 1px solid ${e=>e.theme.colors.accent}40;
  
  &:hover {
    background: ${e=>e.theme.colors.accent}10;
  }
`,b=e=>{let{onSelectDate:r,minDate:t}=e;const[n,a]=(0,o.useState)(new Date),[i,s]=(0,o.useState)(null),c=new Date(n.getFullYear(),n.getMonth()+1,0).getDate(),b=new Date(n.getFullYear(),n.getMonth(),1).getDay(),f=e=>{const o=new Date(n.getFullYear(),n.getMonth(),e);o>=t&&(s(o),r(o))},y=e=>{const r=new Date(n.getFullYear(),n.getMonth(),e);return 0===r.getDay()||r<t};return(0,l.jsxs)(d,{children:[(0,l.jsxs)(m,{children:[(0,l.jsx)(g,{variant:"calendar",onClick:e=>{e.preventDefault(),e.stopPropagation(),a((e=>{const r=new Date(e.getFullYear(),e.getMonth()-1,1),t=new Date;return t.setDate(1),t.setHours(0,0,0,0),r>=t?r:e}))},children:"<"}),(0,l.jsx)(p,{children:`${["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"][n.getMonth()]} ${n.getFullYear()}`}),(0,l.jsx)(g,{variant:"calendar",onClick:e=>{e.preventDefault(),e.stopPropagation(),a((e=>{const r=new Date(e.getFullYear(),e.getMonth()+1,1),t=new Date;return t.setMonth(t.getMonth()+3),r<=t?r:e}))},children:">"})]}),(0,l.jsxs)(h,{children:[["Dom","Lun","Mar","Mi\xe9","Jue","Vie","S\xe1b"].map((e=>(0,l.jsx)(x,{children:e},e))),(()=>{const e=[];for(let r=0;r<b;r++)e.push((0,l.jsx)(u,{},`empty-${r}`));for(let r=1;r<=c;r++){const t=new Date(n.getFullYear(),n.getMonth(),r),o=i&&t.toDateString()===i.toDateString(),a=y(r);e.push((0,l.jsx)(u,{onClick:()=>!a&&f(r),isSelected:o,isDisabled:a,whileHover:a?{}:{scale:1.1},whileTap:a?{}:{scale:.95},children:r},r))}return e})()]})]})};b.defaultProps={minDate:new Date};const f=b;var y=t(6131),j=t(7617),v=t(558);const k=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1.5rem;
  background: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  border: 1px solid ${e=>e.hasError?"#ff3333":e.theme.colors.secondaryBackground}40;
`,w=a.Ay.div`
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  letter-spacing: 3px;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  background: ${e=>e.theme.colors.primaryBackground};
  border-radius: 4px;
  user-select: none;
`,A=a.Ay.input`
  width: 200px;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${e=>e.hasError?"#ff3333":e.theme.colors.accent}40;
  border-radius: 8px;
  background: rgba(30, 30, 30, 0.7);
  color: ${e=>e.theme.colors.text};
  text-align: center;
  font-size: 1rem;
`,$=a.Ay.p`
  color: #ff3333;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,D=e=>{let{onVerify:r}=e;const[t,n]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),[s,c]=(0,o.useState)("");(0,o.useEffect)((()=>{d()}),[]);const d=()=>{const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";let r="";for(let t=0;t<6;t++)r+=e.charAt(Math.floor(56*Math.random()));n(r),i(""),c("")};return(0,l.jsxs)(k,{children:[(0,l.jsx)(w,{children:t}),(0,l.jsx)(A,{type:"text",placeholder:"Ingrese el c\xf3digo",value:a,onChange:e=>{i(e.target.value),c("")},onBlur:()=>{a.toLowerCase()===t.toLowerCase()?(r(!0),c("")):(r(!1),c("El c\xf3digo no coincide"),d())},hasError:!!s}),s&&(0,l.jsx)($,{children:s})]})},C=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);
  width: 100%;
  padding-bottom: 5rem;
`,z=a.Ay.h1`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,S=a.Ay.textarea`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${e=>e.theme.colors.secondaryBackground}40;
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }
`,M=a.Ay.select`
  width: fit-content; // Ajustar al contenido
  min-width: 120px; // Ancho mínimo
  margin: 0 auto; // Centrar
  display: block;
  padding: 0.8rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${e=>e.theme.colors.secondaryBackground}40;
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }

  option {
    background: ${e=>e.theme.colors.background};
    color: ${e=>e.theme.colors.text};
    padding: 0.5rem;
  }
`,T=a.Ay.div`

  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  background: ${e=>e.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 2rem 7rem 2rem; // Aumentar padding inferior
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid ${e=>e.hasError?"#ff3333":e.theme.colors.secondaryBackground}40;

  @media (max-width: 768px) {
   padding: 2rem;
 }
`,E=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,P=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.1em; // Espaciado uniforme
  width: 100%;
  padding: 1rem;
  
  h2 {
    color: ${e=>e.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: left;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        ${e=>e.theme.colors.primary},
        ${e=>e.theme.colors.accent},
        transparent
      );
    }
  }
`,B=a.Ay.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${e=>e.hasError?"#ff3333":e.theme.colors.secondaryBackground}40;
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${e=>e.theme.colors.text};
    -webkit-box-shadow: 0 0 0px 1000px rgba(30, 30, 30, 0.7) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`,F=a.Ay.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid ${e=>e.hasError?"#ff3333":e.theme.colors.secondaryBackground}40;
`,R=a.Ay.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`,H=a.Ay.h3`
  color: ${e=>e.error?"#ff3333":e.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
`,Y=a.Ay.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 5px;
  border: 1px solid ${e=>e.hasError?"#ff3333":e.theme.colors.secondaryBackground}40;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${e=>e.error?"#ff3333":e.theme.colors.primary};
    border-radius: 50%;
    position: relative;
    transition: all 0.3s ease;

    &:checked {
      background: ${e=>e.theme.colors.primary};
      border-color: ${e=>e.theme.colors.accent};
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${e=>e.theme.colors.background};
      }
    }
  }
`,N=a.Ay.div`
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    ${e=>e.theme.colors.primary},
    ${e=>e.theme.colors.accent},
    ${e=>e.theme.colors.primary},
    transparent
  );
  margin: 0 1rem;
  opacity: 0.6;

  @media (max-width: 768px) {
    display: none;
  }
`,V=(a.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  margin-top: 2rem;
`,a.Ay.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${e=>e.theme.colors.text};
  margin: 0.5rem 0;
`),O=a.Ay.span`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`,L=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`,W=a.Ay.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
  height: 100%;
`,_=a.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,J=a.Ay.div`
 position: absolute;
 bottom: 2rem;
 right: 2rem;
 display: flex;
 gap: 1rem;
 

 @media (max-width: 768px) {
   position: static;
   justify-content: center;
   margin-top: 2rem;
 }
`,Z=(0,a.Ay)(c.A)`
  width: 150px;
  height: 45px;
  background: ${e=>e.theme.colors.primaryBackground};
  &:hover {
    background: ${e=>e.theme.colors.secondaryBackground};
  }
`,q=(0,a.Ay)(c.A)`
  width: 150px;
  height: 45px;
`,G=()=>{const[e,r]=(0,o.useState)({name:"",email:"",phone:"",company:"",contactPreference:[],contactDays:[],contactTime:[],appointmentDate:"",appointmentTime:"10:00",appointmentMedium:"",observations:""}),[t,a]=(0,o.useState)({}),[s,c]=(0,o.useState)(null),[d,m]=(0,o.useState)(!1),[p,h]=(0,o.useState)(!1),[u,x]=(0,o.useState)({success:!1,message:""}),g=(0,n.Zp)(),b=(0,o.useRef)(null),k=()=>{r({name:"",email:"",phone:"",company:"",contactPreference:[],contactDays:[],contactTime:[],appointmentDate:"",appointmentTime:"10:00",appointmentMedium:"",observations:""}),c(null),a({}),b.current&&b.current.reset()},[w,A]=(0,o.useState)(!1);return(0,l.jsxs)(v.A,{children:[d&&(0,l.jsx)(j.A,{}),(0,l.jsxs)(C,{children:[(0,l.jsx)(z,{children:(0,l.jsx)(i.i,{strings:["Contacto"],typeSpeed:50,showCursor:!0,cursorChar:"|"})}),(0,l.jsx)(T,{children:(0,l.jsxs)("form",{onSubmit:async r=>{if(r.preventDefault(),!(()=>{const r={};return e.name||(r.name=!0),e.email||(r.email=!0),e.phone||(r.phone=!0),e.contactPreference.length||(r.contactPreference=!0),e.contactDays.length||(r.contactDays=!0),e.contactTime.length||(r.contactTime=!0),w||(r.captcha=!0),a(r),0===Object.keys(r).length})())return x({success:!1,message:"Por favor, complete todos los campos requeridos."}),void h(!0);m(!0);try{if(!(await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)throw new Error("Error al enviar el formulario");x({success:!0,message:"\xa1Gracias por contactarnos! Te responderemos pronto."}),k()}catch(t){console.error("Error:",t),x({success:!1,message:"Hubo un error al enviar el formulario. Por favor, intenta nuevamente."})}finally{m(!1),h(!0)}},ref:b,children:[(0,l.jsxs)(E,{children:[(0,l.jsxs)(P,{children:[(0,l.jsx)("h2",{children:"Informaci\xf3n"}),(0,l.jsx)(B,{type:"text",name:"name",placeholder:"Nombre *",value:e.name,onChange:t=>r({...e,name:t.target.value}),hasError:t.name,autoComplete:"name"}),(0,l.jsx)(B,{type:"email",name:"email",placeholder:"Email *",value:e.email,onChange:t=>r({...e,email:t.target.value}),hasError:t.email,autoComplete:"email"}),(0,l.jsx)(B,{type:"tel",name:"phone",placeholder:"Tel\xe9fono *",value:e.phone,onChange:t=>r({...e,phone:t.target.value}),hasError:t.phone,autoComplete:"tel"}),(0,l.jsx)(B,{type:"text",name:"company",placeholder:"Empresa",value:e.company,onChange:t=>r({...e,company:t.target.value}),autoComplete:"organization"}),(0,l.jsxs)(F,{children:[(0,l.jsx)(H,{error:t.contactPreference,children:"Preferencias de Contacto *"}),(0,l.jsxs)(R,{children:[(0,l.jsxs)(Y,{error:t.contactPreference,children:[(0,l.jsx)("input",{type:"radio",name:"contactPreference",value:"telefono",checked:e.contactPreference.includes("telefono"),onChange:t=>r({...e,contactPreference:[t.target.value]})}),"Tel\xe9fono"]}),(0,l.jsxs)(Y,{error:t.contactPreference,children:[(0,l.jsx)("input",{type:"radio",name:"contactPreference",value:"email",checked:e.contactPreference.includes("email"),onChange:t=>r({...e,contactPreference:[t.target.value]})}),"Email"]})]})]}),(0,l.jsxs)(F,{children:[(0,l.jsx)(H,{error:t.contactDays,children:"D\xedas de Contacto *"}),(0,l.jsxs)(R,{children:[(0,l.jsxs)(Y,{error:t.contactDays,children:[(0,l.jsx)("input",{type:"radio",name:"contactDays",value:"lunVier",checked:e.contactDays.includes("lunVier"),onChange:t=>r({...e,contactDays:[t.target.value]})}),"Lun-Vier"]}),(0,l.jsxs)(Y,{error:t.contactDays,children:[(0,l.jsx)("input",{type:"radio",name:"contactDays",value:"fSemana",checked:e.contactDays.includes("fSemana"),onChange:t=>r({...e,contactDays:[t.target.value]})}),"F/Semana"]})]})]}),(0,l.jsxs)(F,{children:[(0,l.jsx)(H,{error:t.contactTime,children:"Horario de Contacto *"}),(0,l.jsxs)(R,{children:[(0,l.jsxs)(Y,{error:t.contactTime,children:[(0,l.jsx)("input",{type:"radio",name:"contactTime",value:"manana",checked:e.contactTime.includes("manana"),onChange:t=>r({...e,contactTime:[t.target.value]})}),"Ma\xf1ana"]}),(0,l.jsxs)(Y,{error:t.contactTime,children:[(0,l.jsx)("input",{type:"radio",name:"contactTime",value:"tarde",checked:e.contactTime.includes("tarde"),onChange:t=>r({...e,contactTime:[t.target.value]})}),"Tarde"]})]})]}),(0,l.jsx)(W,{children:(0,l.jsx)(_,{children:(0,l.jsx)(S,{name:"observations",placeholder:"Observaciones generales",value:e.observations,onChange:t=>r({...e,observations:t.target.value}),style:{flex:1,minHeight:"150px"}})})})]}),(0,l.jsx)(N,{}),(0,l.jsxs)(P,{children:[(0,l.jsx)("h2",{children:"Agendar una Cita"}),(0,l.jsx)(f,{onSelectDate:e=>{c(e),r((r=>({...r,appointmentDate:e.toISOString().split("T")[0]})))},selectedDate:s}),(0,l.jsxs)(F,{children:[(0,l.jsx)(H,{children:"Horario de Cita"}),(0,l.jsxs)(M,{name:"appointmentTime",value:e.appointmentTime,onChange:t=>r({...e,appointmentTime:t.target.value}),children:[(0,l.jsx)("option",{value:"09:00",children:"09:00"}),(0,l.jsx)("option",{value:"10:00",children:"10:00"}),(0,l.jsx)("option",{value:"11:00",children:"11:00"}),(0,l.jsx)("option",{value:"12:00",children:"12:00"}),(0,l.jsx)("option",{value:"13:00",children:"13:00"}),(0,l.jsx)("option",{value:"14:00",children:"14:00"}),(0,l.jsx)("option",{value:"15:00",children:"15:00"}),(0,l.jsx)("option",{value:"16:00",children:"16:00"}),(0,l.jsx)("option",{value:"17:00",children:"17:00"})]})]}),(0,l.jsxs)(F,{children:[(0,l.jsx)(H,{children:"Medio de la Cita"}),(0,l.jsxs)(R,{children:[(0,l.jsxs)(Y,{children:[(0,l.jsx)("input",{type:"radio",name:"appointmentMedium",value:"zoom",checked:"zoom"===e.appointmentMedium,onChange:t=>r({...e,appointmentMedium:t.target.value})}),"Zoom"]}),(0,l.jsxs)(Y,{children:[(0,l.jsx)("input",{type:"radio",name:"appointmentMedium",value:"meet",checked:"meet"===e.appointmentMedium,onChange:t=>r({...e,appointmentMedium:t.target.value})}),"Google Meet"]}),(0,l.jsxs)(Y,{children:[(0,l.jsx)("input",{type:"radio",name:"appointmentMedium",value:"whatsapp",checked:"whatsapp"===e.appointmentMedium,onChange:t=>r({...e,appointmentMedium:t.target.value})}),"WhatsApp"]})]})]}),(0,l.jsx)(D,{onVerify:A})]})]}),(0,l.jsxs)(J,{children:[(0,l.jsx)(Z,{variant:"secondary",onClick:k,children:"Vaciar"}),(0,l.jsx)(q,{variant:"primary",type:"submit",children:"Enviar"})]})]})})]}),(0,l.jsx)(y.A,{isOpen:p,onClose:()=>{h(!1),u.success&&setTimeout((()=>g("/")),500)},title:u.success?"\xa1Env\xedo Exitoso!":"Error",children:(0,l.jsxs)(L,{children:[(0,l.jsx)(O,{children:u.success?"\u2705":"\u274c"}),(0,l.jsx)(V,{children:u.message})]})})]})}}}]);
//# sourceMappingURL=191.7d06518c.chunk.js.map