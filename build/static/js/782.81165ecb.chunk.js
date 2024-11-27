"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[782],{4424:(e,t,r)=>{r.d(t,{A:()=>a});r(5043);var o=r(1529),i=r(2177),n=r(579);const s=o.Ay.button.withConfig({shouldComponentUpdate:e=>!["isActive"].includes(e)})`
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
  
  ${e=>{let{$glow:t,$variant:r,$glowIntensity:o=1}=e;return t&&"primary"===r?(0,i.QE)(o):""}}
  ${e=>{let{$glow:t,$variant:r,$glowIntensity:o=.5}=e;return t&&"secondary"===r?(0,i.Tw)(o):""}}

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
`,a=e=>{let{children:t,variant:r="primary",size:o="medium",glow:i=!1,glowIntensity:a=1,className:c,isActive:l,...d}=e;return(0,n.jsx)(s,{$variant:r,$size:o,$glow:i,$glowIntensity:a,className:c,...d,children:t})}},558:(e,t,r)=>{r.d(t,{A:()=>H});var o=r(5043),i=r(1529),n=r(3216),s=r(5475),a=r(764),c=r(5327),l=r(1286),d=r(5088),m=r(4632),h=r(4405),p=r(2330),x=r(8814),g=r(4117),u=r(579);const b=i.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,f=i.Ay.footer`
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
    animation: ${b} 3s linear infinite;
  }
`,y=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,v=i.Ay.div`
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
`,$=(0,i.Ay)(s.N_)`
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
`,j=i.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,w=i.Ay.a`
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
`,k=i.Ay.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${e=>e.theme.colors.primary}40;
  color: ${e=>e.theme.colors.text}80;
  font-size: 0.9rem;
`,A=()=>{const{t:e}=(0,g.Bd)(),t=(0,n.Zp)(),r=()=>{window.open("https://wa.me/5491168805604","_blank")},o=e=>{e.preventDefault(),t("/services#faq")},i=(e,t)=>{switch(e){case"company":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)($,{to:"/about-us",children:[(0,u.jsx)(a.A,{size:16}),t.links.about]}),(0,u.jsxs)($,{to:"/services",children:[(0,u.jsx)(a.A,{size:16}),t.links.services]}),(0,u.jsxs)($,{to:"/contact",children:[(0,u.jsx)(c.A,{size:16}),t.links.contact]})]});case"resources":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)($,{to:"/blog",children:[(0,u.jsx)(a.A,{size:16}),t.links.blog]}),(0,u.jsxs)($,{to:"#",onClick:o,children:[(0,u.jsx)(a.A,{size:16}),t.links.faq]}),(0,u.jsxs)($,{to:"#",onClick:r,children:[(0,u.jsx)(l.A,{size:16}),t.links.support]})]});case"contact":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)($,{to:"#",onClick:r,children:[(0,u.jsx)(l.A,{size:16}),t.links.whatsapp]}),(0,u.jsxs)($,{to:"mailto:info@axiondev.tech",children:[(0,u.jsx)(c.A,{size:16}),t.links.email]}),(0,u.jsxs)($,{to:"#",children:[(0,u.jsx)(d.A,{size:16}),t.links.schedule]})]});case"social":return(0,u.jsxs)(j,{children:[(0,u.jsx)(w,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(m.A,{})}),(0,u.jsx)(w,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(h.A,{})}),(0,u.jsx)(w,{href:"https://instagram.com/axiondev",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(p.A,{})}),(0,u.jsx)(w,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(x.A,{})})]});default:return null}};return(0,u.jsxs)(f,{children:[(0,u.jsx)(y,{children:Object.entries(e("footer.sections",{returnObjects:!0})).map((e=>{let[t,r]=e;return(0,u.jsxs)(v,{children:[(0,u.jsx)("h3",{children:r.title}),i(t,r)]},t)}))}),(0,u.jsx)(k,{children:e("footer.copyright")})]})};var z=r(7617);const C=i.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
`,P=i.Ay.main`
  flex: 1;
  width: 100%;
  min-height: ${e=>e.isHome?"100vh":"calc(100vh - 120px)"};
  padding-top: 100px; 
  padding-bottom: ${e=>e.showFooter?"2rem":"0"};
  position: relative;
  z-index: 1;
`,B=i.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,H=e=>{let{children:t}=e;const r="/"===(0,n.zy)().pathname;return(0,u.jsxs)(C,{children:[(0,u.jsx)(P,{isHome:r,showFooter:!r,children:(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)(z.A,{}),children:(0,u.jsx)(B,{children:t})})}),!r&&(0,u.jsx)(A,{})]})}},6131:(e,t,r)=>{r.d(t,{A:()=>x});var o=r(5043),i=r(1529),n=r(3968),s=r(3546),a=r(4117),c=r(579);const l=(0,i.Ay)(n.P.div)`
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
`,d=(0,i.Ay)(n.P.div)`
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
`,m=i.Ay.button`
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
`,h=i.Ay.h2`
  color: ${e=>e.theme.colors.text};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-shadow: 0 0 1px rgba(0, 255, 255, 0.3);
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`,p=i.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 2rem;
  }
`,x=e=>{let{isOpen:t,onClose:r,titleKey:i,children:n}=e;const{t:x}=(0,a.Bd)();return(0,o.useEffect)((()=>(t&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"})),[t]),t?(0,c.jsx)(s.N,{children:(0,c.jsx)(l,{onClick:r,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,c.jsxs)(d,{onClick:e=>e.stopPropagation(),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},children:[(0,c.jsx)(m,{onClick:r,children:"\xd7"}),(0,c.jsx)(h,{children:x(i)}),(0,c.jsx)(p,{children:n})]})})}):null}},782:(e,t,r)=>{r.r(t),r.d(t,{default:()=>M});var o=r(5043),i=r(1529),n=r(4117),s=r(7886),a=r(3968),c=r(3546),l=r(3910),d=r(7929),m=r(4424),h=r(579);const p=(0,i.Ay)(a.P.div)`
  background: ${e=>e.theme.colors.cardBackground};
  border: 1px solid ${e=>e.theme.colors.secondaryBackground};
  border-radius: 15px;
  padding: 1.5rem 1.2rem;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: visible;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    border-color: ${e=>e.theme.colors.accent};
    transform: translateY(-5px);
  }
`,x=i.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  font-size: 1rem;
  font-family: ${e=>e.theme.fonts.secondary};
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  background: ${e=>e.theme.effects.accent};
  padding: 0.6rem 1rem;
  border-radius: 8px;
  width: 100%;
  box-shadow: ${e=>e.theme.effects.glow};
`,g=i.Ay.p`
  font-size: 1rem;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 1rem;
  font-weight: bold;
`,u=i.Ay.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  width: 100%;
  margin: 1rem 0;
`,b=i.Ay.li`
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  position: relative;
  color: ${e=>e.theme.colors.text};
`,f=i.Ay.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,y=(0,i.Ay)(l.g)`
  color: ${e=>e.theme.colors.primary};
  margin-right: 0.8rem;
  font-size: 0.8rem;
`,v=(0,i.Ay)(a.P.div)`
  position: absolute;
  left: 0;
  bottom: 100%;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  width: auto;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid ${e=>e.theme.colors.accent};
  margin-bottom: 5px;
`,$=e=>{let{feature:t,description:r}=e;const[i,n]=(0,o.useState)(!1);return(0,h.jsxs)(b,{children:[(0,h.jsxs)(f,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,h.jsx)(y,{icon:d.e68}),t]}),(0,h.jsx)(c.N,{children:i&&(0,h.jsx)(v,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},children:r})})]})},j=e=>{let{serviceKey:t,onContactClick:r}=e;const{t:o}=(0,n.Bd)();return(0,h.jsxs)(p,{children:[(0,h.jsx)(x,{children:o(`services.categories.${t}.name`)}),(0,h.jsx)(g,{children:o(`services.categories.${t}.price`)}),(0,h.jsx)(u,{children:o(`services.categories.${t}.features`,{returnObjects:!0}).map(((e,t)=>(0,h.jsx)($,{feature:e.title,description:e.description},t)))}),(0,h.jsx)(m.A,{variant:"primary",size:"small",glow:!0,onClick:()=>r(t),glowIntensity:.5,children:o("services.moreInfo")})]})};var w=r(6131);const k=i.Ay.section`
  margin: 10rem auto;
  max-width: 800px;
  padding: 2rem;
  width: 100%;
  scroll-margin-top: 120px;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem auto;
  }
`,A=i.Ay.h2`
  color: ${e=>e.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,z=i.Ay.div`
  margin-bottom: 1.5rem;
  background: ${e=>e.theme.colors.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${e=>e.theme.colors.accent}30;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
  }
`,C=(0,i.Ay)(a.P.div)`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.colors.text};
  font-weight: bold;
  transition: background 0.3s ease;
  background: ${e=>e.$isOpen?`${e.theme.colors.accent}10`:"transparent"};
  
  &:hover {
    background: ${e=>`${e.theme.colors.accent}10`};
  }
`,P=(0,i.Ay)(a.P.div)`
  padding: 1.5rem;
  color: ${e=>e.theme.colors.text}CC;
  line-height: 1.6;
  background: ${e=>e.theme.colors.background}40;
  width: 100%;
  max-width: 100%;
  overflow-wrap: break-word;
  border-top: 1px solid ${e=>e.theme.colors.accent}20;
  overflow: hidden;
`,B=i.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  margin: 2rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${e=>e.theme.colors.accent}30;
  font-size: 1.5rem;
  text-transform: capitalize;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 1.5rem 0 1rem;
  }
`,H=(0,i.Ay)(a.P.span)`
  color: ${e=>e.theme.colors.accent};
  font-size: 1.2rem;
`,I=i.Ay.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,O=()=>{const{t:e}=(0,n.Bd)(),[t,r]=(0,o.useState)({}),i=e("faq.categories",{returnObjects:!0});return i&&0!==Object.keys(i).length?(0,h.jsxs)(k,{id:"faq",children:[(0,h.jsx)(A,{children:e("faq.title")}),Object.entries(i).map((e=>{let[o,i]=e;return(0,h.jsxs)(I,{children:[(0,h.jsx)(B,{children:i.title}),Array.isArray(i.items)&&i.items.map(((e,i)=>(0,h.jsxs)(z,{children:[(0,h.jsxs)(C,{onClick:()=>((e,t)=>{r((r=>({...r,[`${e}-${t}`]:!r[`${e}-${t}`]})))})(o,i),$isOpen:t[`${o}-${i}`],children:[(0,h.jsx)("span",{children:e.question}),(0,h.jsx)(H,{children:t[`${o}-${i}`]?"\u2212":"+"})]}),(0,h.jsx)(c.N,{children:t[`${o}-${i}`]&&(0,h.jsx)(P,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3},children:e.answer})})]},`${o}-${i}`)))]},o)}))]}):null};var S=r(558),Y=r(3216);const q=i.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  padding-bottom: 5rem;
  position: relative; // Add this
`,_=i.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 1.5rem 0;
  padding: 2rem;
  position: relative; // Add this
  z-index: 1; // Add this to ensure proper stacking
`,E=i.Ay.h1`
  text-align: center;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin: 2rem 0;
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  height: 3.5rem; // Add fixed height to reserve space
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    height: 2.8rem; // Adjust height for mobile
    margin: 1.5rem 0;
  }
`;const M=function(){const{t:e}=(0,n.Bd)(),t=(0,Y.Zp)(),[r,i]=(0,o.useState)(!1),[a,c]=(0,o.useState)(null),l=e=>{c(e),i(!0)},d=r=>{if("WHATSAPP"===r){const t=a?e(`services.services.${a}.name`):"",r=`https://wa.me/5491168805604?text=${encodeURIComponent(a?`\xa1Hola! Me interesa obtener m\xe1s informaci\xf3n sobre el servicio de ${t}.`:"\xa1Hola! Me gustar\xeda obtener m\xe1s informaci\xf3n sobre sus servicios.")}`;window.open(r,"_blank")}else"EMAIL"===r&&(i(!1),t("/contact"),setTimeout((()=>{const e=document.querySelector("#calendar-section");e&&e.scrollIntoView({behavior:"smooth"})}),100));i(!1)};return(0,h.jsx)(S.A,{children:(0,h.jsxs)(q,{children:[(0,h.jsx)(E,{children:(0,h.jsx)("div",{style:{minHeight:"1em"},children:(0,h.jsx)(s.i,{strings:[e("services.title")],typeSpeed:50,showCursor:!0,cursorChar:"|"})})}),(0,h.jsx)(_,{children:["landingPages","wordpress","optimization"].map((e=>(0,h.jsx)(j,{serviceKey:e,onContactClick:l},e)))}),(0,h.jsxs)(w.A,{isOpen:r,onClose:()=>i(!1),titleKey:"services.contactPopup.title",children:[(0,h.jsx)(m.A,{variant:"primary",size:"small",glow:!0,onClick:()=>d("WHATSAPP"),children:e("services.contactPopup.directContact")}),(0,h.jsx)(m.A,{variant:"primary",size:"small",glow:!0,onClick:()=>d("EMAIL"),children:e("services.contactPopup.schedule")})]}),(0,h.jsx)(O,{})]})})}},2177:(e,t,r)=>{r.d(t,{FK:()=>s,QE:()=>a,Tw:()=>c});var o=r(1529);const i=o.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,n=o.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.AH`
  animation: ${n} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*e}px);
  }
`},a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.AH`
  animation: ${i} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*e}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*e}px rgba(255, 215, 0, 0.5);
  }
`},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return o.AH`
  animation: ${i} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*e}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*e}px rgba(255, 215, 0, 0.4);
  }
`}}}]);
//# sourceMappingURL=782.81165ecb.chunk.js.map