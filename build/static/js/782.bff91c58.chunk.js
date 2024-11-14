"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[782],{4424:(e,o,i)=>{i.d(o,{A:()=>c});i(5043);var a=i(1529),n=i(2339),r=i(579);const s=a.i7`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
`,t=a.Ay.button`
  ${n.ku}
  ${e=>n.dK[e.size||"medium"]}
  ${e=>n.ru[e.variant||"primary"]}
  ${e=>e.customStyle}

  ${e=>e.$isAnimated&&a.AH`
    animation: ${s} 2s infinite ease-in-out;
  `}

  ${e=>e.fullWidth&&a.AH`
    width: 100%;
  `}

  ${e=>"submit"===e.type&&a.AH`
    margin-left: auto;
  `}

  ${e=>"clear"===e.variant&&a.AH`
    background: ${e=>e.theme.colors.secondaryBackground};
    &:hover {
      background: ${e=>e.theme.colors.secondaryBackground};
      opacity: 0.8;
    }
  `}
`,c=e=>{let{children:o,variant:i="primary",size:a="medium",animated:n=!1,className:s="",customStyle:c,fullWidth:d=!1,...l}=e;return(0,r.jsx)(t,{$variant:i,$isAnimated:n,size:a,className:s,customStyle:c,fullWidth:d,...l,children:o})}},33:(e,o,i)=>{i.d(o,{A:()=>t});i(5043);var a=i(3968),n=i(579);const r={initial:{opacity:0,x:"-100vw"},in:{opacity:1,x:0},out:{opacity:0,x:"100vw"}},s={type:"tween",ease:"anticipate",duration:.5},t=e=>o=>(0,n.jsx)(a.P.div,{style:{flex:1,display:"flex",flexDirection:"column",width:"100%"},initial:"initial",animate:"in",exit:"out",variants:r,transition:s,children:(0,n.jsx)(e,{...o})})},558:(e,o,i)=>{i.d(o,{A:()=>C});var a=i(5043),n=i(1529),r=i(3216),s=i(5475),t=i(764),c=i(5327),d=i(1286),l=i(5088),m=i(4632),p=i(4405),u=i(2330),h=i(8814),g=i(579);const x=n.i7`
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
    animation: ${x} 3s linear infinite;
  }
`,y=n.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem; // Reducido de 3rem
  max-width: 1200px;
  margin: 0 auto;
`,f=n.Ay.div`
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
`,v=(0,n.Ay)(s.N_)`
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
`,w=n.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem; // Reducido de 1.5rem
`,j=n.Ay.a`
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
`,$=n.Ay.div`
  text-align: center;
  margin-top: 2rem; // Reducido de 3rem
  padding-top: 1.5rem; // Reducido de 2rem
  border-top: 1px solid ${e=>e.theme.colors.primary}40;
  color: ${e=>e.theme.colors.text}80;
  font-size: 0.9rem; // Añadido para reducir tamaño del texto
`,z=()=>{const e=(0,r.Zp)(),o=()=>{window.open("https://wa.me/5491168805604","_blank")};return(0,g.jsxs)(b,{children:[(0,g.jsxs)(y,{children:[(0,g.jsxs)(f,{children:[(0,g.jsx)("h3",{children:"Axion Dev"}),(0,g.jsxs)("nav",{children:[(0,g.jsxs)(v,{to:"/about-us",children:[(0,g.jsx)(t.A,{size:16}),"Sobre Nosotros"]}),(0,g.jsxs)(v,{to:"/services",children:[(0,g.jsx)(t.A,{size:16}),"Servicios"]}),(0,g.jsxs)(v,{to:"/contact",children:[(0,g.jsx)(c.A,{size:16}),"Contacto"]})]})]}),(0,g.jsxs)(f,{children:[(0,g.jsx)("h3",{children:"Recursos"}),(0,g.jsxs)("nav",{children:[(0,g.jsxs)(v,{to:"/blog",children:[(0,g.jsx)(t.A,{size:16}),"Blog"]}),(0,g.jsxs)(v,{to:"#",onClick:o=>{o.preventDefault(),e("/services#faq")},children:[(0,g.jsx)(t.A,{size:16}),"Preguntas Frecuentes"]}),(0,g.jsxs)(v,{to:"#",onClick:o,children:[(0,g.jsx)(d.A,{size:16}),"Soporte"]})]})]}),(0,g.jsxs)(f,{children:[(0,g.jsx)("h3",{children:"Contacto"}),(0,g.jsxs)("nav",{children:[(0,g.jsxs)(v,{to:"#",onClick:o,children:[(0,g.jsx)(d.A,{size:16}),"WhatsApp"]}),(0,g.jsxs)(v,{to:"mailto:contact@axiondev.tech",children:[(0,g.jsx)(c.A,{size:16}),"contact@axiondev.tech"]}),(0,g.jsxs)(v,{to:"#",children:[(0,g.jsx)(l.A,{size:16}),"Lun - Vie: 9:00 - 18:00"]})]})]}),(0,g.jsxs)(f,{children:[(0,g.jsx)("h3",{children:"S\xedguenos"}),(0,g.jsxs)(w,{children:[(0,g.jsx)(j,{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(m.A,{})}),(0,g.jsx)(j,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(p.A,{})}),(0,g.jsx)(j,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(u.A,{})}),(0,g.jsx)(j,{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(h.A,{})})]})]})]}),(0,g.jsxs)($,{children:["\xa9 ",(new Date).getFullYear()," AxionDev. Todos los derechos reservados."]})]})};var A=i(7617);const k=n.Ay.div`
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
`,q=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
`,C=e=>{let{children:o}=e;const i="/"===(0,r.zy)().pathname;return(0,g.jsxs)(k,{children:[(0,g.jsx)(S,{isHome:i,showFooter:!i,children:(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(A.A,{}),children:(0,g.jsx)(q,{children:o})})}),!i&&(0,g.jsx)(z,{})]})}},6131:(e,o,i)=>{i.d(o,{A:()=>p});var a=i(5043),n=i(1529),r=i(3968),s=i(3546),t=i(579);const c=(0,n.Ay)(r.P.div)`
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
`,d=(0,n.Ay)(r.P.div)`
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
`,l=n.Ay.button`
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
`,p=e=>{let{isOpen:o,onClose:i,title:n,children:r}=e;return(0,a.useEffect)((()=>(o&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow="unset"})),[o]),o?(0,t.jsx)(s.N,{children:(0,t.jsx)(c,{onClick:i,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,t.jsxs)(d,{onClick:e=>e.stopPropagation(),initial:{scale:.5,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.5,opacity:0},children:[(0,t.jsx)(l,{onClick:i,children:"\xd7"}),(0,t.jsx)(m,{children:n}),r]})})}):null}},782:(e,o,i)=>{i.r(o),i.d(o,{default:()=>N});var a=i(5043),n=i(1529),r=i(3968),s=i(3546),t=i(3910),c=i(7929),d=i(4424),l=i(579);const m=(0,n.Ay)(r.P.div)`
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
`,p=n.Ay.h3`
  color: ${e=>e.theme.colors.accent};
  font-size: 1.1rem;
  font-family: ${e=>e.theme.fonts.secondary};
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  background: ${e=>e.theme.effects.accent};
  padding: 0.6rem 1rem;
  border-radius: 8px;
  width: 100%;
  box-shadow: ${e=>e.theme.effects.glow};
`,u=n.Ay.p`
  font-size: 1rem;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 1rem;
  font-weight: bold;

`,h=n.Ay.ul`
  list-style-type: none;
  padding: 0;
  text-align: left;
  width: 100%;
  margin: 1rem 0;
`,g=n.Ay.li`
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  position: relative;
  color: ${e=>e.theme.colors.text};
`,x=n.Ay.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,b=(0,n.Ay)(t.g)`
  color: ${e=>e.theme.colors.primary};
  margin-right: 0.8rem;
  font-size: 0.8rem;
`,y=(0,n.Ay)(r.P.div)`
  position: absolute;
  left: 0;
  bottom: 100%;
  background: ${e=>e.theme.colors.background};
  color: ${e=>e.theme.colors.text};
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  width: 200px;
  z-index: 10;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid ${e=>e.theme.colors.accent};
  margin-bottom: 5px;
`,f=(0,n.Ay)(d.A)`
  width: 60%;
  padding: 0.8rem;
  margin-top: auto;
  font-size: 0.7rem;
  border-radius: 8;
`,v=e=>{let{feature:o}=e;const[i,n]=(0,a.useState)(!1);return(0,l.jsxs)(g,{children:[(0,l.jsxs)(x,{onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[(0,l.jsx)(b,{icon:c.e68}),o.name]}),(0,l.jsx)(s.N,{children:i&&(0,l.jsx)(y,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.2},children:o.description})})]})},w=e=>{let{name:o,price:i,features:a,onContactClick:n}=e;return(0,l.jsxs)(m,{whileHover:{scale:1.02},transition:{type:"spring",stiffness:300},children:[(0,l.jsx)(p,{children:o}),(0,l.jsx)(u,{children:i}),(0,l.jsx)(h,{children:a.map(((e,o)=>(0,l.jsx)(v,{feature:e},o)))}),(0,l.jsx)(f,{variant:"service",onClick:()=>n(o),children:"M\xe1s informaci\xf3n"})]})};var j=i(6131),$=i(33),z=i(558);const A=n.Ay.section`
  margin: 4rem auto;
  max-width: 800px;
  padding: 2rem;
  width: 100%;
  scroll-margin-top: 120px;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem auto;
  }
`,k=n.Ay.h2`
  color: ${e=>e.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`,S=n.Ay.div`
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
`,q=(0,n.Ay)(r.P.div)`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${e=>e.theme.colors.text};
  font-weight: bold;
  transition: background 0.3s ease;
  background: ${e=>e.isOpen?`${e.theme.colors.accent}10`:"transparent"};

  &:hover {
    background: ${e=>`${e.theme.colors.accent}10`};
  }
`,C=(0,n.Ay)(r.P.div)`
  padding: 1.5rem;
  color: ${e=>e.theme.colors.text}CC;
  line-height: 1.6;
  background: ${e=>e.theme.colors.background}40;
  width: 100%;
  max-width: 100%;
  overflow-wrap: break-word;
  border-top: 1px solid ${e=>e.theme.colors.accent}20;
  overflow: hidden;
`,E=n.Ay.h3`
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
`,L=(0,n.Ay)(r.P.span)`
  color: ${e=>e.theme.colors.accent};
  font-size: 1.2rem;
`,O=n.Ay.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,R={conceptos:[{question:"\xbfQu\xe9 es un dominio web?",answer:"Un dominio web es el nombre \xfanico que identifica a tu sitio en Internet, como 'mipagina.com'. Es la direcci\xf3n que los usuarios escriben en el navegador para visitar tu sitio. Los dominios se registran por per\xedodos de 1 a\xf1o y pueden renovarse anualmente para mantener la propiedad."},{question:"\xbfQu\xe9 es el hosting y por qu\xe9 lo necesito?",answer:"El hosting o alojamiento web es el espacio en un servidor donde se almacenan todos los archivos de tu sitio web (im\xe1genes, texto, c\xf3digo, etc.). Es esencial para que tu sitio est\xe9 accesible en Internet. Los planes suelen contratarse anualmente e incluyen caracter\xedsticas como SSL y backups seg\xfan el plan elegido."},{question:"\xbfQu\xe9 es un certificado SSL?",answer:"El SSL es un certificado de seguridad que protege la comunicaci\xf3n entre el usuario y el servidor. Cuando tu sitio tiene SSL, su direcci\xf3n comienza con 'https://' y muestra un candado, lo que aumenta la confianza de los usuarios. Es importante para la seguridad y el SEO, y debe renovarse anualmente."},{question:"\xbfQu\xe9 es SEO y por qu\xe9 es importante?",answer:"El SEO (Optimizaci\xf3n para Motores de B\xfasqueda) es el proceso de mejorar tu sitio web para que aparezca mejor posicionado en Google y otros buscadores. Incluye optimizaci\xf3n de palabras clave, enlaces, velocidad del sitio y otros factores. Un buen SEO ayuda a que m\xe1s personas encuentren tu sitio naturalmente."},{question:"\xbfQu\xe9 es una Landing Page?",answer:"Una landing page es una p\xe1gina web dise\xf1ada espec\xedficamente para captar la atenci\xf3n de los usuarios y animarlos a realizar una acci\xf3n espec\xedfica, como registrarse o hacer una compra. Son p\xe1ginas optimizadas para conversi\xf3n con un objetivo claro y espec\xedfico."}],servicios:[{question:"\xbfQu\xe9 incluye el servicio de hosting?",answer:"Nuestro servicio de hosting incluye espacio en servidor para almacenar los archivos del sitio web, certificado SSL, copias de seguridad regulares, y soporte t\xe9cnico. Los planes var\xedan en capacidad de almacenamiento y caracter\xedsticas adicionales seg\xfan las necesidades del cliente."},{question:"\xbfQu\xe9 son las rondas de revisi\xf3n?",answer:"Las rondas de revisi\xf3n son oportunidades para solicitar cambios y ajustes despu\xe9s de la primera entrega del proyecto. Cada servicio incluye una cantidad espec\xedfica de rondas que se pueden realizar sin costo adicional para perfeccionar el trabajo seg\xfan tus necesidades."},{question:"\xbfQu\xe9 incluye el mantenimiento web?",answer:"El mantenimiento web incluye actualizaciones de seguridad, revisi\xf3n de enlaces, backups peri\xf3dicos, actualizaciones de contenido y soporte t\xe9cnico. La frecuencia y alcance de estos servicios depende del plan contratado (b\xe1sico, est\xe1ndar o premium)."},{question:"\xbfQu\xe9 es la optimizaci\xf3n de velocidad?",answer:"La optimizaci\xf3n de velocidad es el proceso de mejorar el tiempo de carga de tu sitio web mediante t\xe9cnicas como optimizaci\xf3n de im\xe1genes, minificaci\xf3n de c\xf3digo y mejora de la configuraci\xf3n del servidor. Un sitio m\xe1s r\xe1pido mejora la experiencia del usuario y el SEO."}],soporte:[{question:"\xbfQu\xe9 es el soporte prioritario?",answer:"El soporte prioritario es un servicio de atenci\xf3n r\xe1pida para resolver problemas urgentes en tu sitio web. Los clientes con este servicio tienen acceso a respuestas m\xe1s r\xe1pidas y soluciones inmediatas, especialmente \xfatil en casos de emergencias fuera del horario normal."},{question:"\xbfQu\xe9 pasa si necesito m\xe1s revisiones de las incluidas?",answer:"Si necesitas revisiones adicionales m\xe1s all\xe1 de las incluidas en tu paquete, estas tendr\xe1n un costo extra que te informaremos antes de realizar cualquier ajuste. Siempre ser\xe1s notificado y podr\xe1s aprobar el costo antes de proceder."},{question:"\xbfQu\xe9 incluye el per\xedodo de soporte post-entrega?",answer:"Todos los proyectos incluyen un per\xedodo de soporte gratuito de 30 d\xedas para corregir posibles errores. Despu\xe9s de este per\xedodo, puedes contratar un plan de mantenimiento para continuar recibiendo soporte y actualizaciones."}],mantenimiento:[{question:"\xbfQu\xe9 son los backups y cada cu\xe1nto se realizan?",answer:"Los backups son copias de seguridad de todos los archivos y base de datos de tu sitio web. Seg\xfan el plan de mantenimiento, realizamos backups semanales o mensuales para proteger tu informaci\xf3n en caso de cualquier incidente."},{question:"\xbfC\xf3mo funcionan las actualizaciones de contenido?",answer:"Las actualizaciones de contenido implican modificar o a\xf1adir texto, im\xe1genes, videos u otros elementos en tu sitio web. La frecuencia de actualizaciones depende del plan de mantenimiento contratado, generalmente mensual o trimestral."},{question:"\xbfQu\xe9 incluye la optimizaci\xf3n de im\xe1genes?",answer:"La optimizaci\xf3n de im\xe1genes consiste en reducir el tama\xf1o de los archivos sin sacrificar la calidad visual, mejorando as\xed la velocidad de carga del sitio. Incluye compresi\xf3n, redimensionamiento y optimizaci\xf3n de formatos."}],"pol\xedticas":[{question:"\xbfCu\xe1l es la pol\xedtica de cancelaci\xf3n?",answer:"Si decides cancelar un proyecto despu\xe9s de iniciado, el adelanto no es reembolsable ya que cubre el trabajo y recursos iniciales. Para servicios anuales como hosting o dominio, la cancelaci\xf3n puede implicar una retenci\xf3n parcial de la cuota."},{question:"\xbfCu\xe1l es la pol\xedtica de revisiones?",answer:"Cada paquete incluye un n\xfamero espec\xedfico de rondas de revisi\xf3n, detallado en el contrato. Las revisiones adicionales se cobrar\xe1n por separado y siempre se comunicar\xe1n previamente para su aprobaci\xf3n."},{question:"\xbfC\xf3mo funciona la pol\xedtica de soporte post-entrega?",answer:"Ofrecemos un per\xedodo de soporte gratuito de 30 d\xedas despu\xe9s de la entrega para corregir posibles errores. Despu\xe9s de este per\xedodo, recomendamos contratar un plan de mantenimiento para soporte continuo."}],Costos:[{question:"\xbfEn qu\xe9 moneda se reflejan los precios?",answer:"Los precios de nuestros servicios est\xe1n reflejados en d\xf3lares americanos. Sin embargo, puedes realizar el pago en pesos argentinos al tipo de cambio del d\xeda, seg\xfan lo establezca tu banco o procesador de pagos."},{question:"\xbfEl costo del dominio y hosting est\xe1n incluidos en el precio?",answer:"No, los costos de dominio y hosting no est\xe1n incluidos en el precio de nuestros servicios. Estos servicios son contratados por separado y renovados anualmente, de acuerdo con las tarifas del proveedor de hosting y dominio."},{question:"\xbfEl certificado SSL est\xe1 incluido en el precio?",answer:"El certificado SSL no est\xe1 incluido en el precio est\xe1ndar. Si deseas a\xf1adir SSL para proteger tu sitio, que en algunos proveedores de servicio es obligatorio, este se contrata por separado y suele renovarse anualmente. Un SSL es importante para la seguridad y confianza de los usuarios en tu p\xe1gina web."},{question:"\xbfExisten otros costos adicionales que deba considerar?",answer:"Es posible que algunos servicios adicionales, como revisiones extra o mantenimiento posterior al per\xedodo incluido, impliquen costos adicionales. Cualquier gasto adicional ser\xe1 comunicado antes de proceder para que pueda ser aprobado."}]},P=()=>{const[e,o]=(0,a.useState)({});(0,a.useEffect)((()=>{if("#faq"===window.location.hash){const e=document.getElementById("faq");e&&setTimeout((()=>{e.scrollIntoView({behavior:"smooth"})}),100)}}),[]);return(0,l.jsxs)(A,{id:"faq",children:[(0,l.jsx)(k,{children:"Preguntas Frecuentes"}),Object.entries(R).map((i=>{let[a,n]=i;return(0,l.jsxs)(O,{children:[(0,l.jsx)(E,{children:a.charAt(0).toUpperCase()+a.slice(1)}),n.map(((i,n)=>(0,l.jsxs)(S,{children:[(0,l.jsxs)(q,{onClick:()=>((e,i)=>{o((o=>{const a={...o};return Object.keys(a).forEach((o=>{o!==`${e}-${i}`&&(a[o]=!1)})),a[`${e}-${i}`]=!o[`${e}-${i}`],a}))})(a,n),whileHover:{scale:1.01},isOpen:e[`${a}-${n}`],children:[i.question,(0,l.jsx)(L,{animate:{rotate:e[`${a}-${n}`]?180:0,color:e[`${a}-${n}`]?e=>e.theme.colors.primary:e=>e.theme.colors.accent},transition:{duration:.3},children:"\u2193"})]}),(0,l.jsx)(s.N,{children:e[`${a}-${n}`]&&(0,l.jsx)(C,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1,transition:{height:{duration:.4,ease:"easeOut"},opacity:{duration:.4,ease:"easeInOut"}}},exit:{height:0,opacity:0,transition:{height:{duration:.4,ease:"easeIn"},opacity:{duration:.3,ease:"easeOut"}}},children:i.answer})})]},n)))]},a)}))]})};var B=i(7886),I=i(5475);const D=n.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  width: 100%;
  padding-bottom: 5rem; // space before the footer
`,Q=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin: 1.5rem 0;
`,M=n.Ay.h1`
  text-align: center;
  color: ${e=>e.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,H=[{name:"Landing Pages y Sitios Web",image:"/assets/web-development.jpg",price:"Desde u$d 149",features:[{name:"Dise\xf1o Responsivo",included:!0,description:"Sitio web adaptable a m\xf3viles, tablets y computadoras."},{name:"Hasta 5 Secciones",included:!0,description:"Inicio, Acerca de, Servicios, Galer\xeda y Contacto."},{name:"Formulario de Contacto",included:!0,description:"Formulario funcional conectado a tu email."},{name:"SEO B\xe1sico",included:!0,description:"Optimizaci\xf3n b\xe1sica para buscadores y metadata."},{name:"Enlaces a Redes Sociales",included:!0,description:"Integraci\xf3n con tus perfiles sociales."},{name:"Entrega a convenir",included:!0,description:"Desarrollo y ajustes en tiempo \xf3ptimo."}]},{name:"Mantenimiento WordPress",image:"/assets/wordpress-maintenance.jpg",price:"Desde u$d 49/mes",features:[{name:"Actualizaciones de Seguridad",included:!0,description:"Mantenimiento mensual de plugins y WordPress core."},{name:"Backups Regulares",included:!0,description:"Copias de seguridad semanales de tu sitio."},{name:"Actualizaciones de Contenido",included:!0,description:"Hasta 4 actualizaciones mensuales de contenido."},{name:"Monitoreo de Uptime",included:!0,description:"Supervisi\xf3n del tiempo de actividad del sitio."},{name:"Soporte por Email",included:!0,description:"Respuesta en 24-48 horas h\xe1biles."},{name:"Informes Mensuales",included:!0,description:"Reporte de actualizaciones y estado del sitio."}]},{name:"Optimizaci\xf3n Web B\xe1sica",image:"/assets/optimization.jpg",price:"Desde u$d 99",features:[{name:"Optimizaci\xf3n de Im\xe1genes",included:!0,description:"Mejora del rendimiento de im\xe1genes y tiempo de carga."},{name:"Meta Descripciones",included:!0,description:"Optimizaci\xf3n de t\xedtulos y descripciones para SEO."},{name:"Mejoras de Velocidad",included:!0,description:"Optimizaciones b\xe1sicas de rendimiento."},{name:"Implementaci\xf3n de SSL",included:!0,description:"Configuraci\xf3n de certificado de seguridad b\xe1sico."},{name:"Mobile-Friendly",included:!0,description:"Ajustes para mejor experiencia en m\xf3viles."},{name:"Informe de Mejoras",included:!0,description:"Informe detallado de optimizaciones realizadas."}]}];const N=(0,$.A)((function(){const[e,o]=(0,a.useState)(!1),[i,n]=(0,a.useState)(null),r=e=>{n(e),o(!0)},s=e=>{if("schedule"===e)console.log("Redirigir a la p\xe1gina de contacto");else if("whatsapp"===e){const e=`Hola, estoy interesado en el servicio "${i}". \xbfPodr\xedan darme m\xe1s informaci\xf3n?`;window.open(`https://wa.me/5491168805604?text=${encodeURIComponent(e)}`,"_blank")}o(!1)};return(0,l.jsx)(z.A,{children:(0,l.jsxs)(D,{children:[(0,l.jsx)(M,{children:(0,l.jsx)(B.i,{strings:["Servicios de Desarrollo Web"],typeSpeed:50,showCursor:!0,cursorChar:"|"})}),(0,l.jsx)(Q,{children:H.map(((e,o)=>(0,l.jsx)(w,{...e,onContactClick:r},o)))}),(0,l.jsxs)(j.A,{isOpen:e,onClose:()=>o(!1),title:"\xbfC\xf3mo deseas seguir?",children:[(0,l.jsx)(I.N_,{to:"/contact",children:(0,l.jsx)(d.A,{variant:"primary",onClick:()=>s("schedule"),children:"Agendar cita"})}),(0,l.jsx)(d.A,{variant:"primary",onClick:()=>s("whatsapp"),children:"Contacto Directo"})]}),(0,l.jsx)(P,{})]})})}))}}]);
//# sourceMappingURL=782.bff91c58.chunk.js.map