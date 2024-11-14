"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[809],{4424:(e,o,r)=>{r.d(o,{A:()=>c});r(5043);var t=r(1529),i=r(2339),n=r(579);const s=t.i7`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
`,a=t.Ay.button`
  ${i.ku}
  ${e=>i.dK[e.size||"medium"]}
  ${e=>i.ru[e.variant||"primary"]}
  ${e=>e.customStyle}

  ${e=>e.$isAnimated&&t.AH`
    animation: ${s} 2s infinite ease-in-out;
  `}

  ${e=>e.fullWidth&&t.AH`
    width: 100%;
  `}

  ${e=>"submit"===e.type&&t.AH`
    margin-left: auto;
  `}

  ${e=>"clear"===e.variant&&t.AH`
    background: ${e=>e.theme.colors.secondaryBackground};
    &:hover {
      background: ${e=>e.theme.colors.secondaryBackground};
      opacity: 0.8;
    }
  `}
`,c=e=>{let{children:o,variant:r="primary",size:t="medium",animated:i=!1,className:s="",customStyle:c,fullWidth:d=!1,...l}=e;return(0,n.jsx)(a,{$variant:r,$isAnimated:i,size:t,className:s,customStyle:c,fullWidth:d,...l,children:o})}},33:(e,o,r)=>{r.d(o,{A:()=>a});r(5043);var t=r(3968),i=r(579);const n={initial:{opacity:0,x:"-100vw"},in:{opacity:1,x:0},out:{opacity:0,x:"100vw"}},s={type:"tween",ease:"anticipate",duration:.5},a=e=>o=>(0,i.jsx)(t.P.div,{style:{flex:1,display:"flex",flexDirection:"column",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:n,transition:s,children:(0,i.jsx)(e,{...o})})},558:(e,o,r)=>{r.d(o,{A:()=>E});var t=r(5043),i=r(1529),n=r(3216),s=r(5475),a=r(764),c=r(5327),d=r(1286),l=r(5088),h=r(4632),m=r(4405),x=r(2330),p=r(8814),u=r(579);const f=i.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,g=i.Ay.footer`
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
    animation: ${f} 3s linear infinite;
  }
`,v=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem; // Reducido de 3rem
  max-width: 1200px;
  margin: 0 auto;
`,b=i.Ay.div`
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
`,j=(0,i.Ay)(s.N_)`
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
`,y=i.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem; // Reducido de 1.5rem
`,A=i.Ay.a`
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
`,w=i.Ay.div`
  text-align: center;
  margin-top: 2rem; // Reducido de 3rem
  padding-top: 1.5rem; // Reducido de 2rem
  border-top: 1px solid ${e=>e.theme.colors.primary}40;
  color: ${e=>e.theme.colors.text}80;
  font-size: 0.9rem; // Añadido para reducir tamaño del texto
`,k=()=>{const e=(0,n.Zp)(),o=()=>{window.open("https://wa.me/5491168805604","_blank")};return(0,u.jsxs)(g,{children:[(0,u.jsxs)(v,{children:[(0,u.jsxs)(b,{children:[(0,u.jsx)("h3",{children:"Axion Dev"}),(0,u.jsxs)("nav",{children:[(0,u.jsxs)(j,{to:"/about-us",children:[(0,u.jsx)(a.A,{size:16}),"Sobre Nosotros"]}),(0,u.jsxs)(j,{to:"/services",children:[(0,u.jsx)(a.A,{size:16}),"Servicios"]}),(0,u.jsxs)(j,{to:"/contact",children:[(0,u.jsx)(c.A,{size:16}),"Contacto"]})]})]}),(0,u.jsxs)(b,{children:[(0,u.jsx)("h3",{children:"Recursos"}),(0,u.jsxs)("nav",{children:[(0,u.jsxs)(j,{to:"/blog",children:[(0,u.jsx)(a.A,{size:16}),"Blog"]}),(0,u.jsxs)(j,{to:"#",onClick:o=>{o.preventDefault(),e("/services#faq")},children:[(0,u.jsx)(a.A,{size:16}),"Preguntas Frecuentes"]}),(0,u.jsxs)(j,{to:"#",onClick:o,children:[(0,u.jsx)(d.A,{size:16}),"Soporte"]})]})]}),(0,u.jsxs)(b,{children:[(0,u.jsx)("h3",{children:"Contacto"}),(0,u.jsxs)("nav",{children:[(0,u.jsxs)(j,{to:"#",onClick:o,children:[(0,u.jsx)(d.A,{size:16}),"WhatsApp"]}),(0,u.jsxs)(j,{to:"mailto:contact@axiondev.tech",children:[(0,u.jsx)(c.A,{size:16}),"contact@axiondev.tech"]}),(0,u.jsxs)(j,{to:"#",children:[(0,u.jsx)(l.A,{size:16}),"Lun - Vie: 9:00 - 18:00"]})]})]}),(0,u.jsxs)(b,{children:[(0,u.jsx)("h3",{children:"S\xedguenos"}),(0,u.jsxs)(y,{children:[(0,u.jsx)(A,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(h.A,{})}),(0,u.jsx)(A,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(m.A,{})}),(0,u.jsx)(A,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(x.A,{})}),(0,u.jsx)(A,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)(p.A,{})})]})]})]}),(0,u.jsxs)(w,{children:["\xa9 ",(new Date).getFullYear()," AxionDev. Todos los derechos reservados."]})]})};var $=r(7617);const z=i.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${e=>e.theme.colors.background};
`,R=i.Ay.main`
  flex: 1;
  width: 100%;
  min-height: ${e=>e.isHome?"100vh":"calc(100vh - 120px)"};
  padding-top: 100px; 
  padding-bottom: ${e=>e.showFooter?"2rem":"0"};
  position: relative;
  z-index: 1;
`,C=i.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,E=e=>{let{children:o}=e;const r="/"===(0,n.zy)().pathname;return(0,u.jsxs)(z,{children:[(0,u.jsx)(R,{isHome:r,showFooter:!r,children:(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)($.A,{}),children:(0,u.jsx)(C,{children:o})})}),!r&&(0,u.jsx)(k,{})]})}},9809:(e,o,r)=>{r.r(o),r.d(o,{default:()=>E});var t=r(5043),i=r(1529),n=r(3968),s=r(8129),a=r(3077),c=r(7070);function d(e,o){[...o].reverse().forEach((r=>{const t=e.getVariant(r);t&&(0,a.U)(e,t),e.variantChildren&&e.variantChildren.forEach((e=>{d(e,o)}))}))}function l(){let e=!1;const o=new Set,r={subscribe:e=>(o.add(e),()=>{o.delete(e)}),start(r,t){(0,s.V)(e,"controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");const i=[];return o.forEach((e=>{i.push((0,c._)(e,r,{transitionOverride:t}))})),Promise.all(i)},set:r=>((0,s.V)(e,"controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),o.forEach((e=>{!function(e,o){Array.isArray(o)?d(e,o):"string"===typeof o?d(e,[o]):(0,a.U)(e,o)}(e,r)}))),stop(){o.forEach((e=>{!function(e){e.values.forEach((e=>e.stop()))}(e)}))},mount:()=>(e=!0,()=>{e=!1,r.stop()})};return r}var h=r(4930),m=r(293);const x=function(){const e=(0,h.M)(l);return(0,m.E)(e.mount,[]),e};var p=r(7886),u=r(33),f=r(558),g=r(4424),v=r(579);const b=i.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  min-height: calc(100vh - 120px);
  justify-content: flex-start;
  padding-bottom: 5rem;
`,j=i.Ay.h1`
  font-size: 2rem;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,y=i.Ay.div`
  width: 100vw;
  overflow: hidden;
  padding: 2rem 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
`,A=(0,i.Ay)(n.P.div)`
  display: flex;
  width: fit-content;
  padding: 0;
  margin: 0;
`,w=(0,i.Ay)(n.P.div)`
  flex: 0 0 300px;
  height: 350px;
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
`,k=i.Ay.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`,$=i.Ay.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`,z=i.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,R=i.Ay.p`
  color: ${e=>e.theme.colors.text};
  font-size: 0.8rem;
  line-height: 1.4;
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`,C=(0,i.Ay)(g.A)`
  width: 40%;
  padding: auto;
  margin-top: auto;
  font-size: 0.7rem;
  border-radius: 8px;
`;const E=(0,u.A)((function(){const[e,o]=(0,t.useState)([]),r=x(),i=(0,t.useRef)(null);return(0,t.useEffect)((()=>{fetch("/api/projects").then((e=>e.json())).then((e=>o(e))).catch((e=>console.error("Error loading projects:",e)))}),[]),(0,t.useEffect)((()=>{e.length>0&&(async()=>{if(i.current){const e=i.current.scrollWidth;await r.start({x:[-e/2,0],transition:{repeat:1/0,repeatType:"loop",duration:20,ease:"linear"}})}})()}),[r,e]),(0,v.jsx)(f.A,{children:(0,v.jsxs)(b,{children:[(0,v.jsx)(j,{children:(0,v.jsx)(p.i,{strings:["Portafolio de Proyectos Web"],typeSpeed:50,showCursor:!0,cursorChar:"|"})}),(0,v.jsx)(y,{children:(0,v.jsx)(A,{ref:i,animate:r,children:[...e,...e].map(((e,o)=>(0,v.jsxs)(w,{whileHover:{y:-10},transition:{duration:.3},children:[(0,v.jsx)(k,{src:`/images/portfolio/${e.image}`,alt:e.name}),(0,v.jsxs)($,{children:[(0,v.jsx)(z,{children:e.name}),(0,v.jsx)(R,{children:e.description}),(0,v.jsx)(C,{variant:"portfolio",onClick:()=>{return o=e.link,void window.open(o,"_blank");var o},children:"IR AL SITIO"})]})]},`${e.id}-${o}`)))})})]})})}))}}]);
//# sourceMappingURL=809.15702d63.chunk.js.map