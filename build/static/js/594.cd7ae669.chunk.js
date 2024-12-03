"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[594],{4424:(e,t,r)=>{r.d(t,{A:()=>s});r(5043);var n=r(1529),o=r(2177),a=r(579);const i=n.Ay.button.withConfig({shouldComponentUpdate:e=>!["isActive"].includes(e)})`
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
  
  ${e=>{let{$glow:t,$variant:r,$glowIntensity:n=1}=e;return t&&"primary"===r?(0,o.QE)(n):""}}
  ${e=>{let{$glow:t,$variant:r,$glowIntensity:n=.5}=e;return t&&"secondary"===r?(0,o.Tw)(n):""}}

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
`,s=e=>{let{children:t,variant:r="primary",size:n="medium",glow:o=!1,glowIntensity:s=1,className:c,isActive:l,...d}=e;return(0,a.jsx)(i,{$variant:r,$size:n,$glow:o,$glowIntensity:s,className:c,...d,children:t})}},558:(e,t,r)=>{r.d(t,{A:()=>E});var n=r(5043),o=r(1529),a=r(3216),i=r(5475),s=r(764),c=r(5327),l=r(1286),d=r(5088),m=r(4632),p=r(4405),h=r(2330),x=r(8814),u=r(4117),g=r(579);const f=o.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,y=o.Ay.footer`
  background: linear-gradient(
    45deg,
    ${e=>e.theme.colors.background},
    ${e=>e.theme.colors.primaryBackground}
  );
  color: ${e=>e.theme.colors.text};
  padding: 2rem 2rem 1.5rem;
  position: relative;
  overflow: hidden;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

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
`,b=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,v=o.Ay.div`
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
`,j=(0,o.Ay)(i.N_)`
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
`,w=o.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,$=o.Ay.a`
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
`,k=o.Ay.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${e=>e.theme.colors.primary}40;
  color: ${e=>e.theme.colors.text}80;
  font-size: 0.9rem;
`,A=()=>{const{t:e}=(0,u.Bd)(),t=(0,a.Zp)(),r=()=>{window.open("https://wa.me/5491168805604","_blank")},n=e=>{e.preventDefault(),t("/services#faq")},o=()=>{window.location.href="mailto:help@axiondev.tech"},i=(e,t)=>{switch(e){case"company":return(0,g.jsxs)("nav",{children:[(0,g.jsxs)(j,{to:"/about-us",children:[(0,g.jsx)(s.A,{size:16}),t.links.about]}),(0,g.jsxs)(j,{to:"/services",children:[(0,g.jsx)(s.A,{size:16}),t.links.services]}),(0,g.jsxs)(j,{to:"/contact",children:[(0,g.jsx)(c.A,{size:16}),t.links.contact]})]});case"resources":return(0,g.jsxs)("nav",{children:[(0,g.jsxs)(j,{to:"/blog",children:[(0,g.jsx)(s.A,{size:16}),t.links.blog]}),(0,g.jsxs)(j,{to:"#",onClick:n,children:[(0,g.jsx)(s.A,{size:16}),t.links.faq]}),(0,g.jsxs)(j,{to:"#",onClick:o,children:[(0,g.jsx)(l.A,{size:16}),t.links.support]})]});case"contact":return(0,g.jsxs)("nav",{children:[(0,g.jsxs)(j,{to:"#",onClick:r,children:[(0,g.jsx)(l.A,{size:16}),t.links.whatsapp]}),(0,g.jsxs)(j,{to:"mailto:info@axiondev.tech",children:[(0,g.jsx)(c.A,{size:16}),t.links.email]}),(0,g.jsxs)(j,{to:"#",children:[(0,g.jsx)(d.A,{size:16}),t.links.schedule]})]});case"social":return(0,g.jsxs)(w,{children:[(0,g.jsx)($,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(m.A,{})}),(0,g.jsx)($,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(p.A,{})}),(0,g.jsx)($,{href:"https://instagram.com/axiondev",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(h.A,{})}),(0,g.jsx)($,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(x.A,{})})]});default:return null}};return(0,g.jsxs)(y,{children:[(0,g.jsx)(b,{children:Object.entries(e("footer.sections",{returnObjects:!0})).map((e=>{let[t,r]=e;return(0,g.jsxs)(v,{children:[(0,g.jsx)("h3",{children:r.title}),i(t,r)]},t)}))}),(0,g.jsx)(k,{children:e("footer.copyright")})]})};var S=r(7617);const z=o.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
  width: 100%; // Cambiado de 100vw a 100%
  margin: 0;
  padding: 0;
  overflow-x: hidden;

    @media (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
  }
`,C=o.Ay.main`
  flex: 1;
  width: 100%; // Cambiado de 100vw a 100%
  min-height: ${e=>e.isHome?"100vh":"calc(100vh - 120px)"};
  padding-top: 100px;
  padding-bottom: ${e=>e.showFooter?"2rem":"0"};
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (max-width: 968px) {
    padding-top: 80px;
    width: 100%;
  }

  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 1rem;
  }

  @media (max-width: 480px) {
    padding-top: 50px;
    min-height: calc(100vh - 80px);
  }
`,T=o.Ay.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1rem; // Reducido el padding
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`,E=e=>{let{children:t}=e;const r="/"===(0,a.zy)().pathname;return(0,g.jsxs)(z,{children:[(0,g.jsx)(C,{isHome:r,showFooter:!r,children:(0,g.jsx)(n.Suspense,{fallback:(0,g.jsx)(S.default,{}),children:(0,g.jsx)(T,{children:t})})}),!r&&(0,g.jsx)(A,{})]})}},1594:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(5043),o=r(3216),a=r(1529),i=r(7886),s=r(4117),c=r(558),l=r(4424),d=r(2177);const m={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_URL||"http://localhost:5001";var p=r(579);const h=(0,n.lazy)((()=>r.e(178).then(r.bind(r,7178)))),x=(0,n.lazy)((()=>r.e(131).then(r.bind(r,6131)))),u=(0,n.lazy)((()=>Promise.resolve().then(r.bind(r,7617)))),g=(0,n.lazy)((()=>r.e(908).then(r.bind(r,5908)))),f=a.Ay.div`
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
`,y=a.Ay.h1`
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
`,b=a.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
`,v=a.Ay.div`
  width: 150%;
  max-width: 1300px;
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
    margin: 0.5rem auto;
    gap: 2rem;
  }
`,j=a.Ay.div`
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
`,w=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // Ajustamos el gap para mantener consistencia
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
`,$=a.Ay.input`
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
`,k=a.Ay.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${e=>e.$hasError?"#ff3333":`${e.theme.colors.secondaryBackground}40`};
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  flex: 1; // Permitimos que crezca para llenar el espacio
  min-height: 200px; // Altura mínima que coincide con el captcha
  height: calc(100% - 2rem); // Restamos el espacio del título
  resize: vertical;
  transition: all 0.3s ease;
  margin-bottom: 0; // Eliminamos el margen inferior

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.colors.accent};
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }
`,A="1rem",S="1.5rem",z=a.Ay.select`
  width: 100%; // Cambiado a ancho completo
  max-width: 250px; // Mismo ancho máximo que RadioLabel
  padding: 0.8rem;
  margin: 0 auto 1rem auto;
  display: block;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${e=>e.theme.colors.secondaryBackground}40;
  border-radius: 8px;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  text-align: center;

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
`,C=a.Ay.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 1.2rem;
  border-radius: 8px;
  border: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: ${A};

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,T=a.Ay.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${S}; // Usamos gap en lugar de margin para un espaciado más consistente

  &:last-child {
    margin-bottom: 0;
  }
`,E=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  /* Espaciado consistente para móvil */
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
`,D=a.Ay.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${e=>e.theme.colors.text};
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 5px;
  width: 100%; // Ancho completo
  max-width: 250px; // Limitar el ancho máximo para mejor apariencia
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
    @media (min-width: 768px) {
    width: calc(50% - 0.5rem); // Distribuye el espacio equitativamente
  }
`,P=a.Ay.div`
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
`,M=a.Ay.span`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`,B=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`,O=a.Ay.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1; // Asegura que ocupe todo el espacio vertical disponible
`,I=a.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%; // Aseguramos que ocupe todo el espacio vertical disponible
`,q=a.Ay.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`,K=(0,a.Ay)(l.A)`
  background: ${e=>e.theme.colors.secondaryBackground};
  &:hover {
    background: ${e=>e.theme.colors.secondaryBackground};
  }
`,R=(0,a.Ay)(l.A)`
  ${d.QE}
`,H=a.Ay.p`
  color: #ff3333;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
`,Y=a.Ay.div`
  animation: fadeIn 0.3s ease-in;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,L=a.Ay.div`
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;
  animation-delay: 1s;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,N=()=>{const{t:e}=(0,s.Bd)(),[t,r]=(0,n.useState)({name:"",email:"",phone:"",company:"",contactPreference:[],contactDays:[],contactTime:[],appointmentDate:"",appointmentTime:"10:00",appointmentMedium:"",observations:""}),[a,l]=(0,n.useState)({success:!1,titleKey:"",message:""}),[d,A]=(0,n.useState)({}),[S,N]=(0,n.useState)(null),[U,F]=(0,n.useState)(!1),[W,Q]=(0,n.useState)(!1),[V,Z]=(0,n.useState)({isSubmitting:!1,isSuccess:!1,error:null}),[J,X]=(0,n.useState)(!1),[G]=(0,n.useState)(!1),[ee,te]=(0,n.useState)(!0),re=(0,o.Zp)(),ne=(0,n.useRef)(null);(0,n.useEffect)((()=>{const e=setTimeout((()=>{te(!1)}),1e3);return()=>{clearTimeout(e)}}),[]),(0,n.useEffect)((()=>{V.isSuccess?(l({success:!0,titleKey:"contact.form.status.success.title",message:e("contact.form.status.success.message")}),Q(!0)):V.error&&(l({success:!1,titleKey:"contact.form.status.error.title",message:e("contact.form.status.error.message")}),Q(!0))}),[V,e]);const oe=e=>{if(e&&e.preventDefault(),r({name:"",email:"",phone:"",company:"",contactPreference:[],contactDays:[],contactTime:[],appointmentDate:"",appointmentTime:"10:00",appointmentMedium:"",observations:""}),N(null),A({}),X(!1),l({success:!1,titleKey:"",message:""}),Q(!1),ne.current){ne.current.reset();ne.current.querySelectorAll('input[type="radio"]').forEach((e=>{e.checked=!1}));const e=ne.current.querySelector("textarea");e&&(e.value="");const t=ne.current.querySelector('select[name="appointmentTime"]');t&&(t.value="10:00")}Q(!1)};return console.log("Rendering popup with:",{isOpen:W,titleKey:a.titleKey,message:a.message}),(0,p.jsxs)(c.A,{children:[U&&(0,p.jsx)(u,{fullScreen:!0}),(0,p.jsx)(f,{children:(0,p.jsxs)(n.Suspense,{fallback:(0,p.jsx)(u,{}),children:[(0,p.jsx)(y,{children:(0,p.jsx)(Y,{children:(0,p.jsx)(i.i,{strings:[e("contact.title")],typeSpeed:50,showCursor:!0,cursorChar:"|",startDelay:300})})}),(0,p.jsx)(L,{children:(0,p.jsx)(v,{$hasError:Object.keys(d).length>0,children:(0,p.jsxs)("form",{onSubmit:async r=>{if(r.preventDefault(),F(!0),!(()=>{console.log("Starting form validation");const e={};return t.name.trim()||(e.name=!0),t.email&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t.email)||(e.email=!0),t.phone.trim()||(e.phone=!0),t.observations&&""!==t.observations.trim()||(e.observations=!0),J||(e.captcha=!0),A(e),0===Object.keys(e).length})())return l({success:!1,titleKey:"contact.form.errors.title",message:e("contact.form.errors.required")}),Q(!0),void F(!1);try{const e=await fetch("http://localhost:5001/api/contact",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)});console.log("Response:",e);const r=await e.json();if(console.log("Data:",r),!e.ok)throw new Error(r.message||"Error en el servidor");Z({isSubmitting:!1,isSuccess:!0,error:null}),oe()}catch(n){console.error("Error:",n),Z({isSubmitting:!1,isSuccess:!1,error:n.message})}finally{F(!1)}},ref:ne,children:[(0,p.jsxs)(j,{children:[(0,p.jsxs)(w,{children:[(0,p.jsx)("h2",{children:e("contact.form.sections.personal")}),(0,p.jsx)($,{type:"text",name:"name",placeholder:e("contact.form.inputs.name"),value:t.name,onChange:e=>r({...t,name:e.target.value}),$hasError:d.name,autoComplete:"given-name"}),(0,p.jsx)($,{type:"email",name:"email",placeholder:e("contact.form.inputs.email"),value:t.email,onChange:e=>r({...t,email:e.target.value}),$hasError:d.email,autoComplete:"email"}),(0,p.jsx)($,{type:"tel",name:"phone",placeholder:e("contact.form.inputs.phone"),value:t.phone,onChange:e=>r({...t,phone:e.target.value}),$hasError:d.phone,autoComplete:"tel"}),(0,p.jsx)($,{type:"text",name:"company",placeholder:e("contact.form.inputs.company"),value:t.company,onChange:e=>r({...t,company:e.target.value}),autoComplete:"organization"}),(0,p.jsxs)(n.Suspense,{fallback:(0,p.jsx)(u,{}),children:[(0,p.jsx)(T,{children:(0,p.jsxs)(C,{$hasError:d.contactPreference,children:[(0,p.jsx)(b,{$error:d.contactPreference,children:e("contact.form.preferences.contact.title")}),(0,p.jsxs)(E,{children:[(0,p.jsxs)(D,{$hasError:d.contactPreference,children:[(0,p.jsx)("input",{type:"radio",name:"contactPreference",value:"phone",checked:t.contactPreference.includes("phone"),onChange:e=>{r({...t,contactPreference:[e.target.value]}),d.contactPreference&&A((e=>({...e,contactPreference:!1})))}}),e("contact.form.preferences.contact.options.phone")]}),(0,p.jsxs)(D,{$hasError:d.contactPreference,children:[(0,p.jsx)("input",{type:"radio",name:"contactPreference",value:"email",checked:t.contactPreference.includes("email"),onChange:e=>{r({...t,contactPreference:[e.target.value]}),d.contactPreference&&A((e=>({...e,contactPreference:!1})))}}),e("contact.form.preferences.contact.options.email")]})]})]})}),(0,p.jsxs)(C,{$hasError:d.contactDays,children:[(0,p.jsx)(b,{$error:d.contactDays,children:e("contact.form.preferences.days.title")}),(0,p.jsxs)(E,{children:[(0,p.jsxs)(D,{$hasError:d.contactDays,children:[(0,p.jsx)("input",{type:"radio",name:"contactDays",value:"weekdays",checked:t.contactDays.includes("weekdays"),onChange:e=>{r({...t,contactDays:[e.target.value]}),d.contactDays&&A((e=>({...e,contactDays:!1})))}}),e("contact.form.preferences.days.options.weekdays")]}),(0,p.jsxs)(D,{$hasError:d.contactDays,children:[(0,p.jsx)("input",{type:"radio",name:"contactDays",value:"weekend",checked:t.contactDays.includes("weekend"),onChange:e=>{r({...t,contactDays:[e.target.value]}),d.contactDays&&A((e=>({...e,contactDays:!1})))}}),e("contact.form.preferences.days.options.weekend")]})]})]}),(0,p.jsxs)(C,{$hasError:d.contactTime,children:[(0,p.jsx)(b,{$error:d.contactTime,children:e("contact.form.preferences.time.title")}),(0,p.jsxs)(E,{children:[(0,p.jsxs)(D,{$hasError:d.contactTime,children:[(0,p.jsx)("input",{type:"radio",name:"contactTime",value:"morning",checked:t.contactTime.includes("morning"),onChange:e=>{r({...t,contactTime:[e.target.value]}),d.contactTime&&A((e=>({...e,contactTime:!1})))}}),e("contact.form.preferences.time.options.morning")]}),(0,p.jsxs)(D,{$hasError:d.contactTime,children:[(0,p.jsx)("input",{type:"radio",name:"contactTime",value:"afternoon",checked:t.contactTime.includes("afternoon"),onChange:e=>{r({...t,contactTime:[e.target.value]}),d.contactTime&&A((e=>({...e,contactTime:!1})))}}),e("contact.form.preferences.time.options.afternoon")]})]})]})]}),(0,p.jsx)(O,{children:(0,p.jsxs)(I,{children:[(0,p.jsx)(b,{$error:d.contactTime,children:e("contact.form.inputs.observations")}),(0,p.jsx)(k,{name:"observations",value:t.observations,onChange:e=>r({...t,observations:e.target.value}),style:{flex:1,minHeight:"150px"},$hasError:d.observations})]})})]}),(0,p.jsx)(P,{}),(0,p.jsxs)(w,{children:[(0,p.jsx)("h2",{children:e("contact.form.sections.appointment")}),(0,p.jsx)(n.Suspense,{fallback:(0,p.jsx)(u,{fullScreen:!1,size:"30px",borderWidth:"3px",height:"100%"}),children:ee?(0,p.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"300px"},children:(0,p.jsx)(u,{fullScreen:!1,size:"30px",borderWidth:"3px",height:"auto"})}):(0,p.jsx)(Y,{children:(0,p.jsxs)(T,{children:[" ",(0,p.jsx)(h,{onSelectDate:e=>{if(!e)return;const t=e.toISOString().split("T")[0];N(e),r((e=>({...e,appointmentDate:t})))},selectedDate:S}),(0,p.jsxs)(C,{children:[(0,p.jsx)(b,{children:e("contact.form.appointment.time")}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:[" ",(0,p.jsxs)(z,{name:"appointmentTime",value:t.appointmentTime,onChange:e=>r({...t,appointmentTime:e.target.value}),$hasError:d.appointmentTime,children:[(0,p.jsx)("option",{value:"09:00",children:"09:00"}),(0,p.jsx)("option",{value:"10:00",children:"10:00"}),(0,p.jsx)("option",{value:"11:00",children:"11:00"}),(0,p.jsx)("option",{value:"12:00",children:"12:00"}),(0,p.jsx)("option",{value:"13:00",children:"13:00"}),(0,p.jsx)("option",{value:"14:00",children:"14:00"}),(0,p.jsx)("option",{value:"15:00",children:"15:00"}),(0,p.jsx)("option",{value:"16:00",children:"16:00"}),(0,p.jsx)("option",{value:"17:00",children:"17:00"})]})]})]}),(0,p.jsxs)(C,{children:[(0,p.jsx)(b,{children:e("contact.form.appointment.medium.title")}),(0,p.jsxs)(E,{children:[(0,p.jsxs)(D,{children:[(0,p.jsx)("input",{type:"radio",name:"appointmentMedium",value:"zoom",checked:"zoom"===t.appointmentMedium,onChange:e=>r({...t,appointmentMedium:e.target.value})}),e("contact.form.appointment.medium.options.zoom")]}),(0,p.jsxs)(D,{children:[(0,p.jsx)("input",{type:"radio",name:"appointmentMedium",value:"meet",checked:"meet"===t.appointmentMedium,onChange:e=>r({...t,appointmentMedium:e.target.value})}),e("contact.form.appointment.medium.options.meet")]}),(0,p.jsxs)(D,{children:[(0,p.jsx)("input",{type:"radio",name:"appointmentMedium",value:"whatsapp",checked:"whatsapp"===t.appointmentMedium,onChange:e=>r({...t,appointmentMedium:e.target.value})}),e("contact.form.appointment.medium.options.whatsapp")]})]})]}),(0,p.jsxs)(C,{children:[(0,p.jsx)(b,{$error:d.captcha,children:e("contact.captcha.title")}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:[" ",(0,p.jsx)(g,{onVerify:e=>{X(e),A(e?e=>({...e,captcha:!1}):e=>({...e,captcha:!0}))}})]}),d.captcha&&(0,p.jsx)(H,{children:e("contact.captcha.required")})]})]})})})]})]}),(0,p.jsxs)(q,{children:[(0,p.jsx)(K,{variant:"secondary",size:"small",onClick:oe,children:e("contact.form.buttons.clear")}),(0,p.jsx)(R,{variant:"primary",size:"small",type:"submit",children:e("contact.form.buttons.submit")}),(0,p.jsx)(R,{variant:"secondary",size:"small",type:"button",onClick:()=>{console.log("Testing API URL:",m),fetch(`${m}/api/test-email`).then((e=>e.json())).then((e=>console.log("Test response:",e))).catch((e=>console.error("Test error:",e)))},children:"Test API"})]})]})})})]})}),W&&(0,p.jsx)(n.Suspense,{fallback:null,children:(0,p.jsx)(x,{isOpen:W,onClose:()=>{Q(!1),a.success&&setTimeout((()=>re("/")),500)},titleKey:a.titleKey,children:(0,p.jsxs)(B,{children:[(0,p.jsx)(M,{children:a.success?"\u2705":"\u274c"}),(0,p.jsx)(_,{children:a.message})]})})})]})}},2177:(e,t,r)=>{r.d(t,{FK:()=>i,QE:()=>s,Tw:()=>c});var n=r(1529);const o=n.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,a=n.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.AH`
  animation: ${a} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*e}px);
  }
`},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return n.AH`
  animation: ${o} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*e}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*e}px rgba(255, 215, 0, 0.5);
  }
`},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return n.AH`
  animation: ${o} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*e}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*e}px rgba(255, 215, 0, 0.4);
  }
`}}}]);
//# sourceMappingURL=594.cd7ae669.chunk.js.map