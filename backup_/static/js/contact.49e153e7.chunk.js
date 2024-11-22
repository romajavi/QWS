"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[353],{4424:(e,t,r)=>{r.d(t,{A:()=>s});r(5043);var o=r(1529),n=r(2177),a=r(579);const i=o.Ay.button`
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
  padding: ${e=>{let{$size:t}=e;return"small"===t?"0.5rem 1rem":"0.75rem 1.5rem"}};
  font-size: ${e=>{let{$size:t}=e;return"medium"===t?"0.875rem":"1rem"}};
  min-width: ${e=>{let{$size:t}=e;return"large"===t?"100px":"150px"}};
  
  /* Variantes */
  background: ${e=>{let{$variant:t,theme:r}=e;return"secondary"===t?r.colors.secondaryBackground:r.colors.primary}};
  
  /* Efectos de resplandor */
  ${e=>{let{$glow:t,$variant:r,$glowIntensity:o=1}=e;return t&&"primary"===r?(0,n.QE)(o):""}}
  ${e=>{let{$glow:t,$variant:r,$glowIntensity:o=.5}=e;return t&&"secondary"===r?(0,n.Tw)(o):""}}

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
`,s=e=>{let{children:t,variant:r="primary",size:o="medium",glow:n=!1,glowIntensity:s=1,...c}=e;return(0,a.jsx)(i,{$variant:r,$size:o,$glow:n,$glowIntensity:s,...c,children:t})}},558:(e,t,r)=>{r.d(t,{A:()=>E});var o=r(5043),n=r(1529),a=r(3216),i=r(5475),s=r(764),c=r(5327),l=r(1286),d=r(5088),m=r(4632),p=r(4405),h=r(2330),u=r(8814),g=r(4117),x=r(579);const f=n.i7`
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
  padding: 2rem 2rem 1.5rem;
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
    animation: ${f} 3s linear infinite;
  }
`,y=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,v=n.Ay.div`
  h3 {
    color: ${e=>e.theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 40px;
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
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${e=>e.theme.colors.accent};
    transform: translateX(10px);
  }
`,$=n.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,k=n.Ay.a`
  color: ${e=>e.theme.colors.text};
  background: ${e=>e.theme.colors.primaryBackground};
  padding: 0.6rem;
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
    width: 18px;
    height: 18px;
  }
`,w=n.Ay.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${e=>e.theme.colors.primary}40;
  color: ${e=>e.theme.colors.text}80;
  font-size: 0.9rem;
`,A=()=>{const{t:e}=(0,g.Bd)(),t=(0,a.Zp)(),r=()=>{window.open("https://wa.me/5491168805604","_blank")},o=e=>{e.preventDefault(),t("/services#faq")},n=(e,t)=>{switch(e){case"company":return(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"/about-us",children:[(0,x.jsx)(s.A,{size:16}),t.links.about]}),(0,x.jsxs)(j,{to:"/services",children:[(0,x.jsx)(s.A,{size:16}),t.links.services]}),(0,x.jsxs)(j,{to:"/contact",children:[(0,x.jsx)(c.A,{size:16}),t.links.contact]})]});case"resources":return(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"/blog",children:[(0,x.jsx)(s.A,{size:16}),t.links.blog]}),(0,x.jsxs)(j,{to:"#",onClick:o,children:[(0,x.jsx)(s.A,{size:16}),t.links.faq]}),(0,x.jsxs)(j,{to:"#",onClick:r,children:[(0,x.jsx)(l.A,{size:16}),t.links.support]})]});case"contact":return(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"#",onClick:r,children:[(0,x.jsx)(l.A,{size:16}),t.links.whatsapp]}),(0,x.jsxs)(j,{to:"mailto:info@axiondev.tech",children:[(0,x.jsx)(c.A,{size:16}),t.links.email]}),(0,x.jsxs)(j,{to:"#",children:[(0,x.jsx)(d.A,{size:16}),t.links.schedule]})]});case"social":return(0,x.jsxs)($,{children:[(0,x.jsx)(k,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(m.A,{})}),(0,x.jsx)(k,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(p.A,{})}),(0,x.jsx)(k,{href:"https://instagram.com/axiondev",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(h.A,{})}),(0,x.jsx)(k,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(u.A,{})})]});default:return null}};return(0,x.jsxs)(b,{children:[(0,x.jsx)(y,{children:Object.entries(e("footer.sections",{returnObjects:!0})).map((e=>{let[t,r]=e;return(0,x.jsxs)(v,{children:[(0,x.jsx)("h3",{children:r.title}),n(t,r)]},t)}))}),(0,x.jsx)(w,{children:e("footer.copyright")})]})};var D=r(7617);const z=n.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
`,S=n.Ay.main`
  flex: 1;
  width: 100%;
  min-height: ${e=>e.isHome?"100vh":"calc(100vh - 120px)"};
  padding-top: 100px; 
  padding-bottom: ${e=>e.showFooter?"2rem":"0"};
  position: relative;
  z-index: 1;
`,C=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,E=e=>{let{children:t}=e;const r="/"===(0,a.zy)().pathname;return(0,x.jsxs)(z,{children:[(0,x.jsx)(S,{isHome:r,showFooter:!r,children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)(D.A,{}),children:(0,x.jsx)(C,{children:t})})}),!r&&(0,x.jsx)(A,{})]})}},6131:(e,t,r)=>{r.d(t,{A:()=>u});var o=r(5043),n=r(1529),a=r(3968),i=r(3546),s=r(4117),c=r(579);const l=(0,n.Ay)(a.P.div)`
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
`,d=(0,n.Ay)(a.P.div)`
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
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 2rem;
  }
`,u=e=>{let{isOpen:t,onClose:r,titleKey:n,children:a}=e;const{t:u}=(0,s.Bd)();return(0,o.useEffect)((()=>(t&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"})),[t]),t?(0,c.jsx)(i.N,{children:(0,c.jsx)(l,{onClick:r,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,c.jsxs)(d,{onClick:e=>e.stopPropagation(),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},children:[(0,c.jsx)(m,{onClick:r,children:"\xd7"}),(0,c.jsx)(p,{children:u(n)}),(0,c.jsx)(h,{children:a})]})})}):null}},8191:(e,t,r)=>{r.r(t),r.d(t,{default:()=>X});var o=r(5043),n=r(3216),a=r(1529),i=r(7886),s=r(4117),c=r(3968),l=r(4424),d=r(579);const m=a.Ay.div`
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
`,p=a.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,h=a.Ay.h3`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
`,u=a.Ay.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.1rem;
  flex-grow: 1;
  padding: 0.1rem;
`,g=(0,a.Ay)(c.P.div)`
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
`,f=(0,a.Ay)(l.A)`
  padding: 0.3rem 0.6rem;
  min-width: auto;
  font-size: 0.8rem;
  background:  ${e=>e.theme.colors.primary};
  border: 1px solid ${e=>e.theme.colors.accent}40;
  
  &:hover {
    background: ${e=>e.theme.colors.accent}10;
  }
`,b=e=>{let{onSelectDate:t,minDate:r}=e;const{t:n,i18n:a}=(0,s.Bd)(),[i,c]=(0,o.useState)(new Date),[l,b]=(0,o.useState)(null),y=new Date(i.getFullYear(),i.getMonth()+1,0).getDate(),v=new Date(i.getFullYear(),i.getMonth(),1).getDay(),j={es:["Dom","Lun","Mar","Mi\xe9","Jue","Vie","S\xe1b"],en:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],pt:["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"]},$=j[a.language]||j.es,k=e=>{const o=new Date(i.getFullYear(),i.getMonth(),e);o>=r&&(b(o),t(o))},w=e=>{const t=new Date(i.getFullYear(),i.getMonth(),e);return 0===t.getDay()||t<r};return(0,d.jsxs)(m,{children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(f,{variant:"calendar",onClick:e=>{e.preventDefault(),e.stopPropagation(),c((e=>{const t=new Date(e.getFullYear(),e.getMonth()-1,1),r=new Date;return r.setDate(1),r.setHours(0,0,0,0),t>=r?t:e}))},children:"<"}),(0,d.jsx)(h,{children:`${{es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],pt:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]}[a.language][i.getMonth()]} ${i.getFullYear()}`}),(0,d.jsx)(f,{variant:"calendar",onClick:e=>{e.preventDefault(),e.stopPropagation(),c((e=>{const t=new Date(e.getFullYear(),e.getMonth()+1,1),r=new Date;return r.setMonth(r.getMonth()+3),t<=r?t:e}))},children:">"})]}),(0,d.jsxs)(u,{children:[$.map((e=>(0,d.jsx)(x,{children:e},e))),(()=>{const e=[];for(let t=0;t<v;t++)e.push((0,d.jsx)(g,{},`empty-${t}`));for(let t=1;t<=y;t++){const r=new Date(i.getFullYear(),i.getMonth(),t),o=l&&r.toDateString()===l.toDateString(),n=w(t);e.push((0,d.jsx)(g,{onClick:()=>!n&&k(t),isSelected:o,isDisabled:n,whileHover:n?{}:{scale:1.1},whileTap:n?{}:{scale:.95},children:t},t))}return e})()]})]})};b.defaultProps={minDate:new Date};const y=b;var v=r(6131),j=r(7617),$=r(558),k=r(2177);const w=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  border: 1px solid ${e=>e.$hasError?"#ff3333":`${e.theme.colors.secondaryBackground}40`};
`,A=a.Ay.div`
  font-family: 'Courier New', monospace;
  font-size: 2rem;
  letter-spacing: 3px;
  background: ${e=>e.theme.colors.primaryBackground};
  border-radius: 4px;
  user-select: none;
  padding: 0.5rem 1rem;
  ${(0,k.FK)()} // Llamamos a la función dentro de una función
`,D=a.Ay.input`
  width: 200px;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${e=>e.$hasError?"#ff3333":`${e.theme.colors.accent}40`};
  border-radius: 8px;
  background: rgba(30, 30, 30, 0.7);
  color: ${e=>e.theme.colors.text};
  text-align: center;
  font-size: 1rem;
`,z=a.Ay.p`
  color: #ff3333;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,S=e=>{let{onVerify:t}=e;const{t:r}=(0,s.Bd)(),[n,a]=(0,o.useState)(""),[i,c]=(0,o.useState)(""),[l,m]=(0,o.useState)(""),p=()=>{const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";let r="";for(let t=0;t<3;t++)r+=e.charAt(Math.floor(56*Math.random()));a(r),c(""),m(""),t(!1)};(0,o.useEffect)((()=>{p()}),[]);return(0,d.jsxs)(w,{$hasError:!!l,children:[(0,d.jsx)(A,{children:n}),(0,d.jsx)(D,{type:"text",placeholder:r("contact.captcha.placeholder"),value:i,onChange:e=>{c(e.target.value),m("")},onBlur:()=>{i.toLowerCase()===n.toLowerCase()?(t(!0),m("")):(t(!1),m(r("contact.captcha.error")),p())},$hasError:!!l}),l&&(0,d.jsx)(z,{children:l})]})},C=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);
  width: 100%;
  padding-bottom: 5rem;
`,E=a.Ay.h1`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,T=a.Ay.textarea`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${e=>e.$hasError?"#ff3333":`${e.theme.colors.secondaryBackground}40`};
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
`,B=a.Ay.div`

  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  background: ${e=>e.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 2rem 2rem 2rem; // Aumentar padding inferior
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid ${e=>e.hasError?"#ff3333":e.theme.colors.secondaryBackground}40;

  @media (max-width: 768px) {
   padding: 2rem;
 }
`,P=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,Y=a.Ay.div`
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
`,F=a.Ay.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${e=>e.$hasError?"#ff3333":`${e.theme.colors.secondaryBackground}40`};
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${e=>e.theme.colors.text};
    -webkit-box-shadow: 0 0 0px 1000px rgba(30, 30, 30, 0.7) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`,K=a.Ay.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: ${e=>e.theme.colors.secondaryBackground};
`,O=a.Ay.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`,J=a.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
`,q=a.Ay.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 5px;
  border: ${e=>e.theme.colors.secondaryBackground};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${e=>e.$error?"#ff3333":e.theme.colors.primary};
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
`,H=a.Ay.div`
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
`,N=a.Ay.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${e=>e.theme.colors.text};
  margin: 0.5rem 0;
`,_=a.Ay.span`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`,Q=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`,I=a.Ay.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
  height: 100%;
`,L=a.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,V=a.Ay.div`
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
`,R=(0,a.Ay)(l.A)`
  background: ${e=>e.theme.colors.secondaryBackground};
  &:hover {
    background: ${e=>e.theme.colors.secondaryBackground};
  }
`,Z=(0,a.Ay)(l.A)`
  ${k.QE}
`,W=a.Ay.p`
  color: #ff3333;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
`,X=()=>{const{t:e}=(0,s.Bd)(),[t,r]=(0,o.useState)({name:"",email:"",phone:"",company:"",contactPreference:[],contactDays:[],contactTime:[],appointmentDate:"",appointmentTime:"10:00",appointmentMedium:"",observations:""}),[a,c]=(0,o.useState)({success:!1,titleKey:"",message:""}),[l,m]=(0,o.useState)({}),[p,h]=(0,o.useState)(null),[u,g]=(0,o.useState)(!1),[x,f]=(0,o.useState)(!1),[b,k]=(0,o.useState)({isSubmitting:!1,isSuccess:!1,error:null}),[w,A]=(0,o.useState)(!1),D=(0,n.Zp)(),z=(0,o.useRef)(null);(0,o.useEffect)((()=>{b.isSuccess?(c({success:!0,titleKey:"contact.form.status.success.title",message:e("contact.form.status.success.message")}),f(!0)):b.error&&(c({success:!1,titleKey:"contact.form.status.error.title",message:e("contact.form.status.error.message")}),f(!0))}),[b,e]);const X=e=>{if(e&&e.preventDefault(),r({name:"",email:"",phone:"",company:"",contactPreference:[],contactDays:[],contactTime:[],appointmentDate:"",appointmentTime:"10:00",appointmentMedium:"",observations:""}),h(null),m({}),A(!1),c({success:!1,titleKey:"",message:""}),f(!1),z.current){z.current.reset();z.current.querySelectorAll('input[type="radio"]').forEach((e=>{e.checked=!1}));const e=z.current.querySelector("textarea");e&&(e.value="");const t=z.current.querySelector('select[name="appointmentTime"]');t&&(t.value="10:00")}f(!1)};return console.log("Rendering popup with:",{isOpen:x,titleKey:a.titleKey,message:a.message}),(0,d.jsxs)($.A,{children:[u&&(0,d.jsx)(j.A,{}),(0,d.jsxs)(C,{children:[(0,d.jsx)(E,{children:(0,d.jsx)(i.i,{strings:[e("contact.title")],typeSpeed:50,showCursor:!0,cursorChar:"|"})}),(0,d.jsx)(B,{$hasError:Object.keys(l).length>0,children:(0,d.jsxs)("form",{onSubmit:async r=>{if(r.preventDefault(),g(!0),!(()=>{console.log("Starting form validation");const e={};return t.name.trim()||(e.name=!0),t.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(e.email=!0),t.phone.trim()||(e.phone=!0),t.observations&&""!==t.observations.trim()||(e.observations=!0),w||(e.captcha=!0),m(e),0===Object.keys(e).length})())return c({success:!1,titleKey:"contact.form.errors.title",message:e("contact.form.errors.required")}),f(!0),void g(!1);try{const e=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok){const t=await e.json();throw new Error(t.message||"Server response was not ok")}k({isSubmitting:!1,isSuccess:!0,error:null}),X()}catch(o){k({isSubmitting:!1,isSuccess:!1,error:"email_error"===o.message?"contact.form.errors.clientEmailError":"contact.form.errors.required"})}finally{g(!1)}},ref:z,children:[(0,d.jsxs)(P,{children:[(0,d.jsxs)(Y,{children:[(0,d.jsx)("h2",{children:e("contact.form.sections.personal")}),(0,d.jsx)(F,{type:"text",name:"name",placeholder:e("contact.form.inputs.name"),value:t.name,onChange:e=>r({...t,name:e.target.value}),$hasError:l.name,autoComplete:"given-name"}),(0,d.jsx)(F,{type:"email",name:"email",placeholder:e("contact.form.inputs.email"),value:t.email,onChange:e=>r({...t,email:e.target.value}),$hasError:l.email,autoComplete:"email"}),(0,d.jsx)(F,{type:"tel",name:"phone",placeholder:e("contact.form.inputs.phone"),value:t.phone,onChange:e=>r({...t,phone:e.target.value}),$hasError:l.phone,autoComplete:"tel"}),(0,d.jsx)(F,{type:"text",name:"company",placeholder:e("contact.form.inputs.company"),value:t.company,onChange:e=>r({...t,company:e.target.value}),autoComplete:"organization"}),(0,d.jsxs)(K,{$hasError:l.contactPreference,children:[(0,d.jsx)(J,{$error:l.contactPreference,children:e("contact.form.preferences.contact.title")}),(0,d.jsxs)(O,{children:[(0,d.jsxs)(q,{$hasError:l.contactPreference,children:[(0,d.jsx)("input",{type:"radio",name:"contactPreference",value:"phone",checked:t.contactPreference.includes("phone"),onChange:e=>{r({...t,contactPreference:[e.target.value]}),l.contactPreference&&m((e=>({...e,contactPreference:!1})))}}),e("contact.form.preferences.contact.options.phone")]}),(0,d.jsxs)(q,{$hasError:l.contactPreference,children:[(0,d.jsx)("input",{type:"radio",name:"contactPreference",value:"email",checked:t.contactPreference.includes("email"),onChange:e=>{r({...t,contactPreference:[e.target.value]}),l.contactPreference&&m((e=>({...e,contactPreference:!1})))}}),e("contact.form.preferences.contact.options.email")]})]})]}),(0,d.jsxs)(K,{$hasError:l.contactDays,children:[(0,d.jsx)(J,{$error:l.contactDays,children:e("contact.form.preferences.days.title")}),(0,d.jsxs)(O,{children:[(0,d.jsxs)(q,{$hasError:l.contactDays,children:[(0,d.jsx)("input",{type:"radio",name:"contactDays",value:"weekdays",checked:t.contactDays.includes("weekdays"),onChange:e=>{r({...t,contactDays:[e.target.value]}),l.contactDays&&m((e=>({...e,contactDays:!1})))}}),e("contact.form.preferences.days.options.weekdays")]}),(0,d.jsxs)(q,{$hasError:l.contactDays,children:[(0,d.jsx)("input",{type:"radio",name:"contactDays",value:"weekend",checked:t.contactDays.includes("weekend"),onChange:e=>{r({...t,contactDays:[e.target.value]}),l.contactDays&&m((e=>({...e,contactDays:!1})))}}),e("contact.form.preferences.days.options.weekend")]})]})]}),(0,d.jsxs)(K,{$hasError:l.contactTime,children:[(0,d.jsx)(J,{$error:l.contactTime,children:e("contact.form.preferences.time.title")}),(0,d.jsxs)(O,{children:[(0,d.jsxs)(q,{$hasError:l.contactTime,children:[(0,d.jsx)("input",{type:"radio",name:"contactTime",value:"morning",checked:t.contactTime.includes("morning"),onChange:e=>{r({...t,contactTime:[e.target.value]}),l.contactTime&&m((e=>({...e,contactTime:!1})))}}),e("contact.form.preferences.time.options.morning")]}),(0,d.jsxs)(q,{$hasError:l.contactTime,children:[(0,d.jsx)("input",{type:"radio",name:"contactTime",value:"afternoon",checked:t.contactTime.includes("afternoon"),onChange:e=>{r({...t,contactTime:[e.target.value]}),l.contactTime&&m((e=>({...e,contactTime:!1})))}}),e("contact.form.preferences.time.options.afternoon")]})]})]}),(0,d.jsx)(I,{children:(0,d.jsxs)(L,{children:[(0,d.jsx)(J,{$error:l.contactTime,children:e("contact.form.inputs.observations")}),(0,d.jsx)(T,{name:"observations",value:t.observations,onChange:e=>r({...t,observations:e.target.value}),style:{flex:1,minHeight:"150px"},$hasError:l.observations})]})})]}),(0,d.jsx)(H,{}),(0,d.jsxs)(Y,{children:[(0,d.jsx)("h2",{children:e("contact.form.sections.appointment")}),(0,d.jsx)(y,{onSelectDate:e=>{if(!e)return;const t=e.toISOString().split("T")[0];h(e),r((e=>({...e,appointmentDate:t})))},selectedDate:p}),(0,d.jsxs)(K,{children:[(0,d.jsx)(J,{children:e("contact.form.appointment.time")}),(0,d.jsxs)(M,{name:"appointmentTime",value:t.appointmentTime,onChange:e=>r({...t,appointmentTime:e.target.value}),$hasError:l.appointmentTime,children:[(0,d.jsx)("option",{value:"09:00",children:"09:00"}),(0,d.jsx)("option",{value:"10:00",children:"10:00"}),(0,d.jsx)("option",{value:"11:00",children:"11:00"}),(0,d.jsx)("option",{value:"12:00",children:"12:00"}),(0,d.jsx)("option",{value:"13:00",children:"13:00"}),(0,d.jsx)("option",{value:"14:00",children:"14:00"}),(0,d.jsx)("option",{value:"15:00",children:"15:00"}),(0,d.jsx)("option",{value:"16:00",children:"16:00"}),(0,d.jsx)("option",{value:"17:00",children:"17:00"})]})]}),(0,d.jsxs)(K,{children:[(0,d.jsx)(J,{children:e("contact.form.appointment.medium.title")}),(0,d.jsxs)(O,{children:[(0,d.jsxs)(q,{children:[(0,d.jsx)("input",{type:"radio",name:"appointmentMedium",value:"zoom",checked:"zoom"===t.appointmentMedium,onChange:e=>r({...t,appointmentMedium:e.target.value})}),e("contact.form.appointment.medium.options.zoom")]}),(0,d.jsxs)(q,{children:[(0,d.jsx)("input",{type:"radio",name:"appointmentMedium",value:"meet",checked:"meet"===t.appointmentMedium,onChange:e=>r({...t,appointmentMedium:e.target.value})}),e("contact.form.appointment.medium.options.meet")]}),(0,d.jsxs)(q,{children:[(0,d.jsx)("input",{type:"radio",name:"appointmentMedium",value:"whatsapp",checked:"whatsapp"===t.appointmentMedium,onChange:e=>r({...t,appointmentMedium:e.target.value})}),e("contact.form.appointment.medium.options.whatsapp")]})]})]}),(0,d.jsxs)(K,{children:[(0,d.jsx)(J,{$error:l.captcha,children:e("contact.captcha.title")}),(0,d.jsx)(S,{onVerify:e=>{A(e),m(e?e=>({...e,captcha:!1}):e=>({...e,captcha:!0}))}}),l.captcha&&(0,d.jsx)(W,{children:e("contact.captcha.required")})]})]})]}),(0,d.jsxs)(V,{children:[(0,d.jsx)(R,{variant:"secondary",size:"small",onClick:X,children:e("contact.form.buttons.clear")}),(0,d.jsx)(Z,{variant:"primary",size:"small",type:"submit",children:e("contact.form.buttons.submit")})]})]})})]}),(0,d.jsx)(v.A,{isOpen:x,onClose:()=>{f(!1),a.success&&setTimeout((()=>D("/")),500)},titleKey:a.titleKey,children:(0,d.jsxs)(Q,{children:[(0,d.jsx)(_,{children:a.success?"\u2705":"\u274c"}),(0,d.jsx)(N,{children:a.message})]})})]})}},2177:(e,t,r)=>{r.d(t,{FK:()=>i,QE:()=>s,Tw:()=>c});var o=r(1529);const n=o.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,a=o.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.AH`
  animation: ${a} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*e}px);
  }
`},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.AH`
  animation: ${n} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*e}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*e}px rgba(255, 215, 0, 0.5);
  }
`},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return o.AH`
  animation: ${n} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*e}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*e}px rgba(255, 215, 0, 0.4);
  }
`}}}]);
//# sourceMappingURL=contact.49e153e7.chunk.js.map