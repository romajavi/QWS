"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[345],{4424:(e,r,o)=>{o.d(r,{A:()=>s});o(5043);var t=o(1529),n=o(2177),i=o(579);const a=t.Ay.button`
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
  background: ${e=>{let{$variant:r,theme:o}=e;return"secondary"===r?o.colors.secondaryBackground:o.colors.primary}};
  
  /* Efectos de resplandor */
  ${e=>{let{$glow:r,$variant:o,$glowIntensity:t=1}=e;return r&&"primary"===o?(0,n.QE)(t):""}}
  ${e=>{let{$glow:r,$variant:o,$glowIntensity:t=.5}=e;return r&&"secondary"===o?(0,n.Tw)(t):""}}

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
`,s=e=>{let{children:r,variant:o="primary",size:t="medium",glow:n=!1,glowIntensity:s=1,...l}=e;return(0,i.jsx)(a,{$variant:o,$size:t,$glow:n,$glowIntensity:s,...l,children:r})}},558:(e,r,o)=>{o.d(r,{A:()=>S});var t=o(5043),n=o(1529),i=o(3216),a=o(5475),s=o(764),l=o(5327),c=o(1286),d=o(5088),m=o(4632),p=o(4405),h=o(2330),x=o(8814),g=o(4117),u=o(579);const f=n.i7`
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
`,v=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,y=n.Ay.div`
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
`,j=(0,n.Ay)(a.N_)`
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
`,w=n.Ay.a`
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
`,A=()=>{const{t:e}=(0,g.Bd)(),r=(0,i.Zp)(),o=()=>{window.open("https://wa.me/5491168805604","_blank")},t=e=>{e.preventDefault(),r("/services#faq")},n=(e,r)=>{switch(e){case"company":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)(j,{to:"/about-us",children:[(0,u.jsx)(s.A,{size:16}),r.links.about]}),(0,u.jsxs)(j,{to:"/services",children:[(0,u.jsx)(s.A,{size:16}),r.links.services]}),(0,u.jsxs)(j,{to:"/contact",children:[(0,u.jsx)(l.A,{size:16}),r.links.contact]})]});case"resources":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)(j,{to:"/blog",children:[(0,u.jsx)(s.A,{size:16}),r.links.blog]}),(0,u.jsxs)(j,{to:"#",onClick:t,children:[(0,u.jsx)(s.A,{size:16}),r.links.faq]}),(0,u.jsxs)(j,{to:"#",onClick:o,children:[(0,u.jsx)(c.A,{size:16}),r.links.support]})]});case"contact":return(0,u.jsxs)("nav",{children:[(0,u.jsxs)(j,{to:"#",onClick:o,children:[(0,u.jsx)(c.A,{size:16}),r.links.whatsapp]}),(0,u.jsxs)(j,{to:"mailto:info@axiondev.tech",children:[(0,u.jsx)(l.A,{size:16}),r.links.email]}),(0,u.jsxs)(j,{to:"#",children:[(0,u.jsx)(d.A,{size:16}),r.links.schedule]})]});case"social":return(0,u.jsxs)($,{children:[(0,u.jsx)(w,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(m.A,{})}),(0,u.jsx)(w,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(p.A,{})}),(0,u.jsx)(w,{href:"https://instagram.com/axiondev",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(h.A,{})}),(0,u.jsx)(w,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(x.A,{})})]});default:return null}};return(0,u.jsxs)(b,{children:[(0,u.jsx)(v,{children:Object.entries(e("footer.sections",{returnObjects:!0})).map((e=>{let[r,o]=e;return(0,u.jsxs)(y,{children:[(0,u.jsx)("h3",{children:o.title}),n(r,o)]},r)}))}),(0,u.jsx)(k,{children:e("footer.copyright")})]})};var z=o(7617);const E=n.Ay.div`
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
`,B=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,S=e=>{let{children:r}=e;const o="/"===(0,i.zy)().pathname;return(0,u.jsxs)(E,{children:[(0,u.jsx)(C,{isHome:o,showFooter:!o,children:(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)(z.A,{}),children:(0,u.jsx)(B,{children:r})})}),!o&&(0,u.jsx)(A,{})]})}},975:(e,r,o)=>{o.r(r),o.d(r,{default:()=>I});var t=o(5043),n=o(1529),i=o(3968),a=o(8129),s=o(3077),l=o(7070);function c(e,r){[...r].reverse().forEach((o=>{const t=e.getVariant(o);t&&(0,s.U)(e,t),e.variantChildren&&e.variantChildren.forEach((e=>{c(e,r)}))}))}function d(){let e=!1;const r=new Set,o={subscribe:e=>(r.add(e),()=>{r.delete(e)}),start(o,t){(0,a.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const n=[];return r.forEach((e=>{n.push((0,l._)(e,o,{transitionOverride:t}))})),Promise.all(n)},set:o=>((0,a.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),r.forEach((e=>{!function(e,r){Array.isArray(r)?c(e,r):"string"===typeof r?c(e,[r]):(0,s.U)(e,r)}(e,o)}))),stop(){r.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount:()=>(e=!0,()=>{e=!1,o.stop()})};return o}var m=o(4930),p=o(293);const h=function(){const e=(0,m.M)(d);return(0,p.E)(e.mount,[]),e};var x=o(7886),g=o(3216),u=o(4117),f=o(33),b=o(558),v=o(4424);const y=[{id:1,name:"E-commerce Premium",description:"Plataforma de comercio electr\xf3nico desarrollada con React y Node.js. Incluye pasarela de pagos, gesti\xf3n de inventario y panel de administraci\xf3n.",image:"portfolio1.png",technologies:["React","Node.js","MongoDB","Stripe"],link:"https://example-ecommerce.com",category:"E-commerce"},{id:2,name:"Sistema de Gesti\xf3n Educativa",description:"Aplicaci\xf3n web para la gesti\xf3n integral de instituciones educativas. Control de asistencia, calificaciones y comunicaci\xf3n con padres.",image:"portfolio2.png",technologies:["React","Firebase","Material-UI"],link:"https://example-education.com",category:"Educaci\xf3n"},{id:3,name:"Dashboard Anal\xedtico",description:"Panel de control interactivo para visualizaci\xf3n de datos empresariales. Gr\xe1ficos en tiempo real y reportes personalizables.",image:"portfolio3.png",technologies:["React","D3.js","Node.js","PostgreSQL"],link:"https://example-dashboard.com",category:"Business Intelligence"},{id:4,name:"App de Delivery",description:"Aplicaci\xf3n m\xf3vil para servicio de entrega a domicilio. Sistema de tracking en tiempo real y gesti\xf3n de pedidos.",image:"portfolio4.png",technologies:["React Native","Express","MongoDB","Socket.io"],link:"https://example-delivery.com",category:"Servicios"}];var j=o(579);const $=n.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: calc(100vh - 120px);
  justify-content: flex-start;
  padding-bottom: 5rem;
`,w=n.Ay.h1`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,k=n.Ay.div`
  width: 100vw;
  overflow: hidden;
  padding: 2rem 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`,A=(0,n.Ay)(i.P.div)`
  display: flex;
  width: fit-content;
  padding: 0;
  margin: 0;
`,z=(0,n.Ay)(i.P.div)`
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
`,E=n.Ay.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,C=n.Ay.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`,B=n.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,S=n.Ay.p`
  color: ${e=>e.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.4;
  flex-grow: 1;
  margin-bottom: 1rem;
`,P=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,Y=n.Ay.span`
  background: ${e=>e.theme.colors.primary}20;
  color: ${e=>e.theme.colors.accent};
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`,_=(0,n.Ay)(v.A)`
  margin-top: auto;
`;const I=(0,f.A)((function(){const{t:e}=(0,u.Bd)(),r=((0,g.Zp)(),h()),o=(0,t.useRef)(null);return(0,t.useEffect)((()=>{(async()=>{if(o.current){const e=o.current.scrollWidth;await r.start({x:[-e/2,0],transition:{repeat:1/0,repeatType:"loop",duration:20,ease:"linear"}})}})()}),[r]),(0,j.jsx)(b.A,{children:(0,j.jsxs)($,{children:[(0,j.jsx)(w,{children:(0,j.jsx)(x.i,{strings:[e("portfolio.title")],typeSpeed:50,showCursor:!0,cursorChar:"|"})}),(0,j.jsx)(k,{children:(0,j.jsx)(A,{ref:o,animate:r,children:[...y,...y].map(((r,o)=>{const t=(r=>{const o=`portfolio.projects.${r.id}`;return{name:e(`${o}.name`,{defaultValue:r.name}),description:e(`${o}.description`,{defaultValue:r.description}),technologies:r.technologies.map((r=>e(`portfolio.technologies.${r}`,{defaultValue:r})))}})(r);return(0,j.jsxs)(z,{whileHover:{y:-10},transition:{duration:.3},children:[(0,j.jsx)(E,{src:`/images/portfolio/${r.image}`,alt:t.name}),(0,j.jsxs)(C,{children:[(0,j.jsx)(B,{children:t.name}),(0,j.jsx)(S,{children:t.description}),(0,j.jsx)(P,{children:t.technologies.map(((e,r)=>(0,j.jsx)(Y,{children:e},r)))}),(0,j.jsx)(_,{variant:"portfolio",size:"small",onClick:()=>{return e=r.link,void window.open(e,"_blank");var e},children:e("portfolio.viewProject")})]})]},`${r.id}-${o}`)}))})})]})})}))},2177:(e,r,o)=>{o.d(r,{FK:()=>a,QE:()=>s,Tw:()=>l});var t=o(1529);const n=t.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,i=t.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t.AH`
  animation: ${i} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*e}px);
  }
`},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return t.AH`
  animation: ${n} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*e}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*e}px rgba(255, 215, 0, 0.5);
  }
`},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return t.AH`
  animation: ${n} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*e}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*e}px rgba(255, 215, 0, 0.4);
  }
`}}}]);
//# sourceMappingURL=portfolio.ac019f10.chunk.js.map