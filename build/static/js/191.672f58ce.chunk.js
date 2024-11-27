"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[191],{4424:(e,t,r)=>{r.d(t,{A:()=>s});r(5043);var o=r(1529),n=r(2177),a=r(579);const i=o.Ay.button.withConfig({shouldComponentUpdate:e=>!["isActive"].includes(e)})`
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
`,s=e=>{let{children:t,variant:r="primary",size:o="medium",glow:n=!1,glowIntensity:s=1,className:c,isActive:l,...d}=e;return(0,a.jsx)(i,{$variant:r,$size:o,$glow:n,$glowIntensity:s,className:c,...d,children:t})}},558:(e,t,r)=>{r.d(t,{A:()=>M});var o=r(5043),n=r(1529),a=r(3216),i=r(5475),s=r(764),c=r(5327),l=r(1286),d=r(5088),m=r(4632),p=r(4405),h=r(2330),u=r(8814),g=r(4117),x=r(579);const f=n.i7`
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
`,w=n.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,$=n.Ay.a`
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
`,k=n.Ay.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${e=>e.theme.colors.primary}40;
  color: ${e=>e.theme.colors.text}80;
  font-size: 0.9rem;
`,A=()=>{const{t:e}=(0,g.Bd)(),t=(0,a.Zp)(),r=()=>{window.open("https://wa.me/5491168805604","_blank")},o=e=>{e.preventDefault(),t("/services#faq")},n=(e,t)=>{switch(e){case"company":return(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"/about-us",children:[(0,x.jsx)(s.A,{size:16}),t.links.about]}),(0,x.jsxs)(j,{to:"/services",children:[(0,x.jsx)(s.A,{size:16}),t.links.services]}),(0,x.jsxs)(j,{to:"/contact",children:[(0,x.jsx)(c.A,{size:16}),t.links.contact]})]});case"resources":return(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"/blog",children:[(0,x.jsx)(s.A,{size:16}),t.links.blog]}),(0,x.jsxs)(j,{to:"#",onClick:o,children:[(0,x.jsx)(s.A,{size:16}),t.links.faq]}),(0,x.jsxs)(j,{to:"#",onClick:r,children:[(0,x.jsx)(l.A,{size:16}),t.links.support]})]});case"contact":return(0,x.jsxs)("nav",{children:[(0,x.jsxs)(j,{to:"#",onClick:r,children:[(0,x.jsx)(l.A,{size:16}),t.links.whatsapp]}),(0,x.jsxs)(j,{to:"mailto:info@axiondev.tech",children:[(0,x.jsx)(c.A,{size:16}),t.links.email]}),(0,x.jsxs)(j,{to:"#",children:[(0,x.jsx)(d.A,{size:16}),t.links.schedule]})]});case"social":return(0,x.jsxs)(w,{children:[(0,x.jsx)($,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(m.A,{})}),(0,x.jsx)($,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(p.A,{})}),(0,x.jsx)($,{href:"https://instagram.com/axiondev",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(h.A,{})}),(0,x.jsx)($,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(u.A,{})})]});default:return null}};return(0,x.jsxs)(b,{children:[(0,x.jsx)(y,{children:Object.entries(e("footer.sections",{returnObjects:!0})).map((e=>{let[t,r]=e;return(0,x.jsxs)(v,{children:[(0,x.jsx)("h3",{children:r.title}),n(t,r)]},t)}))}),(0,x.jsx)(k,{children:e("footer.copyright")})]})};var D=r(7617);const S=n.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
`,z=n.Ay.main`
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
`,M=e=>{let{children:t}=e;const r="/"===(0,a.zy)().pathname;return(0,x.jsxs)(S,{children:[(0,x.jsx)(z,{isHome:r,showFooter:!r,children:(0,x.jsx)(o.Suspense,{fallback:(0,x.jsx)(D.A,{}),children:(0,x.jsx)(C,{children:t})})}),!r&&(0,x.jsx)(A,{})]})}},6131:(e,t,r)=>{r.d(t,{A:()=>u});var o=r(5043),n=r(1529),a=r(3968),i=r(3546),s=r(4117),c=r(579);const l=(0,n.Ay)(a.P.div)`
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
`,b=e=>{let{onSelectDate:t,minDate:r}=e;const{i18n:n}=(0,s.Bd)(),[a,i]=(0,o.useState)(new Date),[c,l]=(0,o.useState)(null),b=new Date(a.getFullYear(),a.getMonth()+1,0).getDate(),y=new Date(a.getFullYear(),a.getMonth(),1).getDay(),v={es:["Dom","Lun","Mar","Mi\xe9","Jue","Vie","S\xe1b"],en:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],pt:["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"]},j=v[n.language]||v.es,w=e=>{const o=new Date(a.getFullYear(),a.getMonth(),e);o>=r&&(l(o),t(o))},$=e=>{const t=new Date(a.getFullYear(),a.getMonth(),e);return 0===t.getDay()||t<r};return(0,d.jsxs)(m,{children:[(0,d.jsxs)(p,{children:[(0,d.jsx)(f,{variant:"calendar",onClick:e=>{e.preventDefault(),e.stopPropagation(),i((e=>{const t=new Date(e.getFullYear(),e.getMonth()-1,1),r=new Date;return r.setDate(1),r.setHours(0,0,0,0),t>=r?t:e}))},children:"<"}),(0,d.jsx)(h,{children:`${{es:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],en:["January","February","March","April","May","June","July","August","September","October","November","December"],pt:["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]}[n.language][a.getMonth()]} ${a.getFullYear()}`}),(0,d.jsx)(f,{variant:"calendar",onClick:e=>{e.preventDefault(),e.stopPropagation(),i((e=>{const t=new Date(e.getFullYear(),e.getMonth()+1,1),r=new Date;return r.setMonth(r.getMonth()+3),t<=r?t:e}))},children:">"})]}),(0,d.jsxs)(u,{children:[j.map((e=>(0,d.jsx)(x,{children:e},e))),(()=>{const e=[];for(let t=0;t<y;t++)e.push((0,d.jsx)(g,{},`empty-${t}`));for(let t=1;t<=b;t++){const r=new Date(a.getFullYear(),a.getMonth(),t),o=c&&r.toDateString()===c.toDateString(),n=$(t);e.push((0,d.jsx)(g,{onClick:()=>!n&&w(t),isSelected:o,isDisabled:n,whileHover:n?{}:{scale:1.1},whileTap:n?{}:{scale:.95},children:t},t))}return e})()]})]})};b.defaultProps={minDate:new Date};const y=b;var v=r(6131),j=r(7617),w=r(558),$=r(2177);const k=a.Ay.div`
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
  ${(0,$.FK)()} // Llamamos a la función dentro de una función
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
`,S=a.Ay.p`
  color: #ff3333;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,z=e=>{let{onVerify:t}=e;const{t:r}=(0,s.Bd)(),[n,a]=(0,o.useState)(""),[i,c]=(0,o.useState)(""),[l,m]=(0,o.useState)(""),p=()=>{const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";let r="";for(let t=0;t<3;t++)r+=e.charAt(Math.floor(56*Math.random()));a(r),c(""),m(""),t(!1)};(0,o.useEffect)((()=>{p()}),[]);return(0,d.jsxs)(k,{$hasError:!!l,children:[(0,d.jsx)(A,{children:n}),(0,d.jsx)(D,{type:"text",placeholder:r("contact.captcha.placeholder"),value:i,onChange:e=>{c(e.target.value),m("")},onBlur:()=>{i.toLowerCase()===n.toLowerCase()?(t(!0),m("")):(t(!1),m(r("contact.captcha.error")),p())},$hasError:!!l}),l&&(0,d.jsx)(S,{children:l})]})};var C=r(9617);const M=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);
  width: 100%;
  padding-bottom: 5rem;

  /* Ensure proper width handling */
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,E=a.Ay.h1`
  text-align: center;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin: 2rem 0;  // Match Services.js margin
  font-size: 2.5rem;  // Match Services.js font size
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  height: 3.5rem;  // Match Services.js height
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    height: 2.8rem;
    margin: 1.5rem 0;
  }
`,T=a.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
`,P=a.Ay.div`
  width: 90%;
  max-width: 1200px;
  margin: 1.5rem 0;  // Match ServicesContainer margin
  padding: 2rem;  // Match ServicesContainer padding
  background: ${e=>e.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid ${e=>e.hasError?"#ff3333":e.theme.colors.secondaryBackground}40;
  min-width: min(90%, 1200px);
  box-sizing: border-box;
  
  & > form {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 1400px) {
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
    margin: 1rem auto;
  }
`,B=a.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%; // Ensure full width

  @media (min-width: 768px) {
    grid-template-columns: minmax(300px, 1fr) 2px minmax(300px, 1fr);
    gap: 2rem;
  }

  /* Ensure grid items don't overflow */
  & > * {
    width: 100%;
    max-width: 100%;
  }
`,Y=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;

  h2 {
    color: ${e=>e.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
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
  margin-bottom: 1rem;
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
`,O=a.Ay.textarea`
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
`,K=a.Ay.select`
  width: auto;  // Change from 100% to auto
  min-width: 120px;  // Add minimum width
  padding: 0.8rem;
  margin: 0 auto 1rem auto;  // Center the select element
  display: block;  // Make it a block element
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${e=>e.theme.colors.secondaryBackground}40;
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;  // Center the text inside
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
`,J=a.Ay.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: ${e=>e.theme.colors.secondaryBackground};
`,N=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;  // Add this to center the radio buttons
  gap: 1rem;
  width: 100%;  // Add this to ensure full width
`,q=a.Ay.label`
  display: flex;
  align-items: center;
  justify-content: center;  // Add this to center the content
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 5px;
  width: 100%;  // Add this to make labels full width
  max-width: 300px;  // Add this to control the maximum width
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
  display: none;

  @media (min-width: 768px) {
    display: block;
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
  }
`,_=a.Ay.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${e=>e.theme.colors.text};
  margin: 0.5rem 0;
`,L=a.Ay.span`
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
`,V=a.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,R=a.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`,W=(0,a.Ay)(l.A)`
  background: ${e=>e.theme.colors.secondaryBackground};
  &:hover {
    background: ${e=>e.theme.colors.secondaryBackground};
  }
`,Z=(0,a.Ay)(l.A)`
  ${$.QE}
`,U=a.Ay.p`
  color: #ff3333;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
`,X=()=>{const{shouldAnimate:e,animationLevel:t}=(0,C.W)(),r=e&&"minimal"!==t?"reduced"===t?{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3}}:{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,ease:"easeOut"}}:{},{t:a}=(0,s.Bd)(),[l,m]=(0,o.useState)({name:"",email:"",phone:"",company:"",contactPreference:[],contactDays:[],contactTime:[],appointmentDate:"",appointmentTime:"10:00",appointmentMedium:"",observations:""}),[p,h]=(0,o.useState)({success:!1,titleKey:"",message:""}),[u,g]=(0,o.useState)({}),[x,f]=(0,o.useState)(null),[b,$]=(0,o.useState)(!1),[k,A]=(0,o.useState)(!1),[D,S]=(0,o.useState)({isSubmitting:!1,isSuccess:!1,error:null}),[X,G]=(0,o.useState)(!1),ee=(0,n.Zp)(),te=(0,o.useRef)(null);(0,o.useEffect)((()=>{D.isSuccess?(h({success:!0,titleKey:"contact.form.status.success.title",message:a("contact.form.status.success.message")}),A(!0)):D.error&&(h({success:!1,titleKey:"contact.form.status.error.title",message:a("contact.form.status.error.message")}),A(!0))}),[D,a]);const re=e=>{if(e&&e.preventDefault(),m({name:"",email:"",phone:"",company:"",contactPreference:[],contactDays:[],contactTime:[],appointmentDate:"",appointmentTime:"10:00",appointmentMedium:"",observations:""}),f(null),g({}),G(!1),h({success:!1,titleKey:"",message:""}),A(!1),te.current){te.current.reset();te.current.querySelectorAll('input[type="radio"]').forEach((e=>{e.checked=!1}));const e=te.current.querySelector("textarea");e&&(e.value="");const t=te.current.querySelector('select[name="appointmentTime"]');t&&(t.value="10:00")}A(!1)};return console.log("Rendering popup with:",{isOpen:k,titleKey:p.titleKey,message:p.message}),(0,d.jsxs)(w.A,{children:[b&&(0,d.jsx)(j.A,{}),(0,d.jsx)(M,{children:(0,d.jsxs)(c.P.div,{...r,children:[(0,d.jsx)(E,{children:(0,d.jsx)(i.i,{strings:[a("contact.title")],typeSpeed:50,showCursor:!0,cursorChar:"|"})}),(0,d.jsx)(P,{$hasError:Object.keys(u).length>0,children:(0,d.jsxs)("form",{onSubmit:async e=>{if(e.preventDefault(),$(!0),!(()=>{console.log("Starting form validation");const e={};return l.name.trim()||(e.name=!0),l.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(l.email)||(e.email=!0),l.phone.trim()||(e.phone=!0),l.observations&&""!==l.observations.trim()||(e.observations=!0),X||(e.captcha=!0),g(e),0===Object.keys(e).length})())return h({success:!1,titleKey:"contact.form.errors.title",message:a("contact.form.errors.required")}),A(!0),void $(!1);try{const e=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!e.ok){const t=await e.json();throw new Error(t.message||"Server response was not ok")}S({isSubmitting:!1,isSuccess:!0,error:null}),re()}catch(t){S({isSubmitting:!1,isSuccess:!1,error:"email_error"===t.message?"contact.form.errors.clientEmailError":"contact.form.errors.required"})}finally{$(!1)}},ref:te,children:[(0,d.jsxs)(B,{children:[(0,d.jsxs)(Y,{children:[(0,d.jsx)("h2",{children:a("contact.form.sections.personal")}),(0,d.jsx)(F,{type:"text",name:"name",placeholder:a("contact.form.inputs.name"),value:l.name,onChange:e=>m({...l,name:e.target.value}),$hasError:u.name,autoComplete:"given-name"}),(0,d.jsx)(F,{type:"email",name:"email",placeholder:a("contact.form.inputs.email"),value:l.email,onChange:e=>m({...l,email:e.target.value}),$hasError:u.email,autoComplete:"email"}),(0,d.jsx)(F,{type:"tel",name:"phone",placeholder:a("contact.form.inputs.phone"),value:l.phone,onChange:e=>m({...l,phone:e.target.value}),$hasError:u.phone,autoComplete:"tel"}),(0,d.jsx)(F,{type:"text",name:"company",placeholder:a("contact.form.inputs.company"),value:l.company,onChange:e=>m({...l,company:e.target.value}),autoComplete:"organization"}),(0,d.jsxs)(J,{$hasError:u.contactPreference,children:[(0,d.jsx)(T,{$error:u.contactPreference,children:a("contact.form.preferences.contact.title")}),(0,d.jsxs)(N,{children:[(0,d.jsxs)(q,{$hasError:u.contactPreference,children:[(0,d.jsx)("input",{type:"radio",name:"contactPreference",value:"phone",checked:l.contactPreference.includes("phone"),onChange:e=>{m({...l,contactPreference:[e.target.value]}),u.contactPreference&&g((e=>({...e,contactPreference:!1})))}}),a("contact.form.preferences.contact.options.phone")]}),(0,d.jsxs)(q,{$hasError:u.contactPreference,children:[(0,d.jsx)("input",{type:"radio",name:"contactPreference",value:"email",checked:l.contactPreference.includes("email"),onChange:e=>{m({...l,contactPreference:[e.target.value]}),u.contactPreference&&g((e=>({...e,contactPreference:!1})))}}),a("contact.form.preferences.contact.options.email")]})]})]}),(0,d.jsxs)(J,{$hasError:u.contactDays,children:[(0,d.jsx)(T,{$error:u.contactDays,children:a("contact.form.preferences.days.title")}),(0,d.jsxs)(N,{children:[(0,d.jsxs)(q,{$hasError:u.contactDays,children:[(0,d.jsx)("input",{type:"radio",name:"contactDays",value:"weekdays",checked:l.contactDays.includes("weekdays"),onChange:e=>{m({...l,contactDays:[e.target.value]}),u.contactDays&&g((e=>({...e,contactDays:!1})))}}),a("contact.form.preferences.days.options.weekdays")]}),(0,d.jsxs)(q,{$hasError:u.contactDays,children:[(0,d.jsx)("input",{type:"radio",name:"contactDays",value:"weekend",checked:l.contactDays.includes("weekend"),onChange:e=>{m({...l,contactDays:[e.target.value]}),u.contactDays&&g((e=>({...e,contactDays:!1})))}}),a("contact.form.preferences.days.options.weekend")]})]})]}),(0,d.jsxs)(J,{$hasError:u.contactTime,children:[(0,d.jsx)(T,{$error:u.contactTime,children:a("contact.form.preferences.time.title")}),(0,d.jsxs)(N,{children:[(0,d.jsxs)(q,{$hasError:u.contactTime,children:[(0,d.jsx)("input",{type:"radio",name:"contactTime",value:"morning",checked:l.contactTime.includes("morning"),onChange:e=>{m({...l,contactTime:[e.target.value]}),u.contactTime&&g((e=>({...e,contactTime:!1})))}}),a("contact.form.preferences.time.options.morning")]}),(0,d.jsxs)(q,{$hasError:u.contactTime,children:[(0,d.jsx)("input",{type:"radio",name:"contactTime",value:"afternoon",checked:l.contactTime.includes("afternoon"),onChange:e=>{m({...l,contactTime:[e.target.value]}),u.contactTime&&g((e=>({...e,contactTime:!1})))}}),a("contact.form.preferences.time.options.afternoon")]})]})]}),(0,d.jsx)(I,{children:(0,d.jsxs)(V,{children:[(0,d.jsx)(T,{$error:u.contactTime,children:a("contact.form.inputs.observations")}),(0,d.jsx)(O,{name:"observations",value:l.observations,onChange:e=>m({...l,observations:e.target.value}),style:{flex:1,minHeight:"150px"},$hasError:u.observations})]})})]}),(0,d.jsx)(H,{}),(0,d.jsxs)(Y,{children:[(0,d.jsx)("h2",{children:a("contact.form.sections.appointment")}),(0,d.jsx)(y,{onSelectDate:e=>{if(!e)return;const t=e.toISOString().split("T")[0];f(e),m((e=>({...e,appointmentDate:t})))},selectedDate:x}),(0,d.jsxs)(J,{children:[(0,d.jsx)(T,{children:a("contact.form.appointment.time")}),(0,d.jsxs)(K,{name:"appointmentTime",value:l.appointmentTime,onChange:e=>m({...l,appointmentTime:e.target.value}),$hasError:u.appointmentTime,children:[(0,d.jsx)("option",{value:"09:00",children:"09:00"}),(0,d.jsx)("option",{value:"10:00",children:"10:00"}),(0,d.jsx)("option",{value:"11:00",children:"11:00"}),(0,d.jsx)("option",{value:"12:00",children:"12:00"}),(0,d.jsx)("option",{value:"13:00",children:"13:00"}),(0,d.jsx)("option",{value:"14:00",children:"14:00"}),(0,d.jsx)("option",{value:"15:00",children:"15:00"}),(0,d.jsx)("option",{value:"16:00",children:"16:00"}),(0,d.jsx)("option",{value:"17:00",children:"17:00"})]})]}),(0,d.jsxs)(J,{children:[(0,d.jsx)(T,{children:a("contact.form.appointment.medium.title")}),(0,d.jsxs)(N,{children:[(0,d.jsxs)(q,{children:[(0,d.jsx)("input",{type:"radio",name:"appointmentMedium",value:"zoom",checked:"zoom"===l.appointmentMedium,onChange:e=>m({...l,appointmentMedium:e.target.value})}),a("contact.form.appointment.medium.options.zoom")]}),(0,d.jsxs)(q,{children:[(0,d.jsx)("input",{type:"radio",name:"appointmentMedium",value:"meet",checked:"meet"===l.appointmentMedium,onChange:e=>m({...l,appointmentMedium:e.target.value})}),a("contact.form.appointment.medium.options.meet")]}),(0,d.jsxs)(q,{children:[(0,d.jsx)("input",{type:"radio",name:"appointmentMedium",value:"whatsapp",checked:"whatsapp"===l.appointmentMedium,onChange:e=>m({...l,appointmentMedium:e.target.value})}),a("contact.form.appointment.medium.options.whatsapp")]})]})]}),(0,d.jsxs)(J,{children:[(0,d.jsx)(T,{$error:u.captcha,children:a("contact.captcha.title")}),(0,d.jsx)(z,{onVerify:e=>{G(e),g(e?e=>({...e,captcha:!1}):e=>({...e,captcha:!0}))}}),u.captcha&&(0,d.jsx)(U,{children:a("contact.captcha.required")})]})]})]}),(0,d.jsxs)(R,{children:[(0,d.jsx)(W,{variant:"secondary",size:"small",onClick:re,children:a("contact.form.buttons.clear")}),(0,d.jsx)(Z,{variant:"primary",size:"small",type:"submit",children:a("contact.form.buttons.submit")})]})]})})]})}),(0,d.jsx)(v.A,{isOpen:k,onClose:()=>{A(!1),p.success&&setTimeout((()=>ee("/")),500)},titleKey:p.titleKey,children:(0,d.jsxs)(Q,{children:[(0,d.jsx)(L,{children:p.success?"\u2705":"\u274c"}),(0,d.jsx)(_,{children:p.message})]})})]})}},2177:(e,t,r)=>{r.d(t,{FK:()=>i,QE:()=>s,Tw:()=>c});var o=r(1529);const n=o.i7`
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
//# sourceMappingURL=191.672f58ce.chunk.js.map