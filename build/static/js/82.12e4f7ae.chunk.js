"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[82],{4424:(e,t,i)=>{i.d(t,{A:()=>s});i(5043);var o=i(1529),r=i(2177),n=i(579);const a=o.Ay.button.withConfig({shouldComponentUpdate:e=>!["isActive"].includes(e)})`
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
  
  background: ${e=>{let{$variant:t,theme:i}=e;return"secondary"===t?i.colors.secondaryBackground:i.colors.primary}};
  
  ${e=>{let{$glow:t,$variant:i,$glowIntensity:o=1}=e;return t&&"primary"===i?(0,r.QE)(o):""}}
  ${e=>{let{$glow:t,$variant:i,$glowIntensity:o=.5}=e;return t&&"secondary"===i?(0,r.Tw)(o):""}}

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
`,s=e=>{let{children:t,variant:i="primary",size:o="medium",glow:r=!1,glowIntensity:s=1,className:l,isActive:c,...d}=e;return(0,n.jsx)(a,{$variant:i,$size:o,$glow:r,$glowIntensity:s,className:l,...d,children:t})}},558:(e,t,i)=>{i.d(t,{A:()=>P});var o=i(5043),r=i(1529),n=i(3216),a=i(5475),s=i(764),l=i(5327),c=i(1286),d=i(5088),m=i(4632),p=i(4405),h=i(2330),x=i(8814),g=i(4117),u=i(579);const f=r.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,v=r.Ay.footer`
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
`,b=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,y=r.Ay.div`
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
`,w=(0,r.Ay)(a.N_)`
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
`,j=r.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`,$=r.Ay.a`
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
`,k=r.Ay.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${e=>e.theme.colors.primary}40;
  color: ${e=>e.theme.colors.text}80;
  font-size: 0.9rem;
`,A=()=>{const{t:e}=(0,g.Bd)(),t=(0,n.Zp)(),i=()=>{window.open("https://wa.me/5491168805604","_blank")},o=e=>{e.preventDefault(),t("/services#faq")},r=()=>{window.location.href="mailto:help@axiondev.tech"},a=(e,t)=>{switch(e){case"company":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)(w,{to:"/about-us",children:[(0,u.jsx)(s.A,{size:16}),t.links.about]}),(0,u.jsxs)(w,{to:"/services",children:[(0,u.jsx)(s.A,{size:16}),t.links.services]}),(0,u.jsxs)(w,{to:"/contact",children:[(0,u.jsx)(l.A,{size:16}),t.links.contact]})]});case"resources":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)(w,{to:"/blog",children:[(0,u.jsx)(s.A,{size:16}),t.links.blog]}),(0,u.jsxs)(w,{to:"#",onClick:o,children:[(0,u.jsx)(s.A,{size:16}),t.links.faq]}),(0,u.jsxs)(w,{to:"#",onClick:r,children:[(0,u.jsx)(c.A,{size:16}),t.links.support]})]});case"contact":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)(w,{to:"#",onClick:i,children:[(0,u.jsx)(c.A,{size:16}),t.links.whatsapp]}),(0,u.jsxs)(w,{to:"mailto:info@axiondev.tech",children:[(0,u.jsx)(l.A,{size:16}),t.links.email]}),(0,u.jsxs)(w,{to:"#",children:[(0,u.jsx)(d.A,{size:16}),t.links.schedule]})]});case"social":return(0,u.jsxs)(j,{children:[(0,u.jsx)($,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(m.A,{})}),(0,u.jsx)($,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(p.A,{})}),(0,u.jsx)($,{href:"https://instagram.com/axiondev",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(h.A,{})}),(0,u.jsx)($,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(x.A,{})})]});default:return null}};return(0,u.jsxs)(v,{children:[(0,u.jsx)(b,{children:Object.entries(e("footer.sections",{returnObjects:!0})).map((e=>{let[t,i]=e;return(0,u.jsxs)(y,{children:[(0,u.jsx)("h3",{children:i.title}),a(t,i)]},t)}))}),(0,u.jsx)(k,{children:e("footer.copyright")})]})};var z=i(7617);const C=r.Ay.div`
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
`,E=r.Ay.main`
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
`,B=r.Ay.div`
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
`,P=e=>{let{children:t}=e;const i="/"===(0,n.zy)().pathname;return(0,u.jsxs)(C,{children:[(0,u.jsx)(E,{isHome:i,showFooter:!i,children:(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)(z.default,{}),children:(0,u.jsx)(B,{children:t})})}),!i&&(0,u.jsx)(A,{})]})}},9082:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var o=i(5043),r=i(1529),n=i(3968),a=i(8129),s=i(3077),l=i(7070);function c(e,t){[...t].reverse().forEach((i=>{const o=e.getVariant(i);o&&(0,s.U)(e,o),e.variantChildren&&e.variantChildren.forEach((e=>{c(e,t)}))}))}function d(){let e=!1;const t=new Set,i={subscribe:e=>(t.add(e),()=>{t.delete(e)}),start(i,o){(0,a.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const r=[];return t.forEach((e=>{r.push((0,l._)(e,i,{transitionOverride:o}))})),Promise.all(r)},set:i=>((0,a.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),t.forEach((e=>{!function(e,t){Array.isArray(t)?c(e,t):"string"===typeof t?c(e,[t]):(0,s.U)(e,t)}(e,i)}))),stop(){t.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount:()=>(e=!0,()=>{e=!1,i.stop()})};return i}var m=i(4930),p=i(293);const h=function(){const e=(0,m.M)(d);return(0,p.E)(e.mount,[]),e};var x=i(7886),g=i(4117),u=i(579);const f={initial:{opacity:0,x:"-100vw"},in:{opacity:1,x:0},out:{opacity:0,x:"100vw"}},v={type:"tween",ease:"anticipate",duration:.5},b=e=>t=>(0,u.jsx)(n.P.div,{style:{flex:1,display:"flex",flexDirection:"column",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:f,transition:v,children:(0,u.jsx)(e,{...t})});var y=i(558),w=i(4424);const j=[{id:1,name:"E-commerce Premium",description:"Plataforma de comercio electr\xf3nico desarrollada con React y Node.js. Incluye pasarela de pagos, gesti\xf3n de inventario y panel de administraci\xf3n.",image:"portfolio1.png",technologies:["React","Node.js","MongoDB","Stripe"],link:"https://example-ecommerce.com",category:"E-commerce"},{id:2,name:"Sistema de Gesti\xf3n Educativa",description:"Aplicaci\xf3n web para la gesti\xf3n integral de instituciones educativas. Control de asistencia, calificaciones y comunicaci\xf3n con padres.",image:"portfolio2.png",technologies:["React","Firebase","Material-UI"],link:"https://example-education.com",category:"Educaci\xf3n"},{id:3,name:"Dashboard Anal\xedtico",description:"Panel de control interactivo para visualizaci\xf3n de datos empresariales. Gr\xe1ficos en tiempo real y reportes personalizables.",image:"portfolio3.png",technologies:["React","D3.js","Node.js","PostgreSQL"],link:"https://example-dashboard.com",category:"Business Intelligence"},{id:4,name:"App de Delivery",description:"Aplicaci\xf3n m\xf3vil para servicio de entrega a domicilio. Sistema de tracking en tiempo real y gesti\xf3n de pedidos.",image:"portfolio4.png",technologies:["React Native","Express","MongoDB","Socket.io"],link:"https://example-delivery.com",category:"Servicios"}],$=r.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: calc(100vh - 120px);
  justify-content: flex-start;
  padding-bottom: 5rem;
`,k=r.Ay.h1`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,A=r.Ay.div`
  width: 100vw;
  overflow: hidden;
  padding: 2rem 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`,z=(0,r.Ay)(n.P.div)`
  display: flex;
  width: fit-content;
  padding: 0;
  margin: 0;
`,C=(0,r.Ay)(n.P.div)`
  flex: 0 0 300px;
  height: 400px;
  margin: 0 1rem;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background: ${e=>e.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>e.theme.colors.secondaryBackground};
  box-shadow: 0 8px 32px rgba(0, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
`,E=r.Ay.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,B=r.Ay.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`,P=r.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,S=r.Ay.p`
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.4;
  flex-grow: 1;
  margin-bottom: 1rem;
`,Y=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,_=r.Ay.span`
  background: ${e=>e.theme.colors.primary}20;
  color: ${e=>e.theme.colors.accent};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`,D=(0,r.Ay)(w.A)`
  margin-top: auto;
`;const I=b((function(){const{t:e}=(0,g.Bd)(),t=h(),i=(0,o.useRef)(null);return(0,o.useEffect)((()=>{(async()=>{if(i.current){const e=i.current.scrollWidth;await t.start({x:[-e/2,0],transition:{repeat:1/0,repeatType:"loop",duration:20,ease:"linear"}})}})()}),[t]),(0,u.jsx)(y.A,{children:(0,u.jsxs)($,{children:[(0,u.jsx)(k,{children:(0,u.jsx)(x.i,{strings:[e("portfolio.title")],typeSpeed:50,showCursor:!0,cursorChar:"|"})}),(0,u.jsx)(A,{children:(0,u.jsx)(z,{ref:i,animate:t,children:[...j,...j].map(((t,i)=>{const o=(t=>{const i=`portfolio.projects.${t.id}`;return{name:e(`${i}.name`,{defaultValue:t.name}),description:e(`${i}.description`,{defaultValue:t.description}),technologies:t.technologies.map((t=>e(`portfolio.technologies.${t}`,{defaultValue:t})))}})(t);return(0,u.jsxs)(C,{whileHover:{y:-10},transition:{duration:.3},children:[(0,u.jsx)(E,{src:`/images/portfolio/${t.image}`,alt:o.name}),(0,u.jsxs)(B,{children:[(0,u.jsx)(P,{children:o.name}),(0,u.jsx)(S,{children:o.description}),(0,u.jsx)(Y,{children:o.technologies.map(((e,t)=>(0,u.jsx)(_,{children:e},t)))}),(0,u.jsx)(D,{variant:"portfolio",size:"small",onClick:()=>{return e=t.link,void window.open(e,"_blank");var e},children:e("portfolio.viewProject")})]})]},`${t.id}-${i}`)}))})})]})})}))},2177:(e,t,i)=>{i.d(t,{FK:()=>a,QE:()=>s,Tw:()=>l});var o=i(1529);const r=o.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,n=o.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.AH`
  animation: ${n} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*e}px);
  }
`},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o.AH`
  animation: ${r} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*e}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*e}px rgba(255, 215, 0, 0.5);
  }
`},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return o.AH`
  animation: ${r} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*e}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*e}px rgba(255, 215, 0, 0.4);
  }
`}}}]);
//# sourceMappingURL=82.12e4f7ae.chunk.js.map