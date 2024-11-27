"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[351],{4424:(t,e,n)=>{n.d(e,{A:()=>a});n(5043);var i=n(1529),s=n(2177),r=n(579);const o=i.Ay.button.withConfig({shouldComponentUpdate:t=>!["isActive"].includes(t)})`
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.buttonText};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  padding: ${t=>{let{$size:e}=t;return"small"===e?"0.5rem 1rem":"medium"===e?"0.75rem 1.5rem":"1rem 2rem"}};
  
  font-size: ${t=>{let{$size:e}=t;return"small"===e?"0.875rem":"medium"===e?"1rem":"1.125rem"}};
  
  min-width: ${t=>{let{$size:e}=t;return"small"===e?"100px":"medium"===e?"150px":"200px"}};
  
  background: ${t=>{let{$variant:e,theme:n}=t;return"secondary"===e?n.colors.secondaryBackground:n.colors.primary}};
  
  ${t=>{let{$glow:e,$variant:n,$glowIntensity:i=1}=t;return e&&"primary"===n?(0,s.QE)(i):""}}
  ${t=>{let{$glow:e,$variant:n,$glowIntensity:i=.5}=t;return e&&"secondary"===n?(0,s.Tw)(i):""}}

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
`,a=t=>{let{children:e,variant:n="primary",size:i="medium",glow:s=!1,glowIntensity:a=1,className:u,isActive:c,...l}=t;return(0,r.jsx)(o,{$variant:n,$size:i,$glow:s,$glowIntensity:a,className:u,...l,children:e})}},9351:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var i=n(5043),s=n(1529),r=n(3968),o=n(3546),a=n(7886),u=n(3216),c=n(4117),l=n(579);const p=s.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: 0;
  will-change: transform;
  transform: translateZ(0);
`,h=s.Ay.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateZ(0);
  image-rendering: optimizeSpeed;
`,d=t=>{let{priority:e=!1}=t;const n=(0,i.useRef)(null),s=(0,i.useRef)(null),r=(0,i.useRef)([]),o=(0,i.useRef)(!0),a=(0,i.useRef)(0),u=(0,i.useRef)(null),c=1e3/30,d=(0,i.useMemo)((()=>window.innerWidth<768?15:25),[]),m=(0,i.useCallback)(((t,e)=>{r.current=Array.from({length:d},(()=>({x:Math.random()*t,y:Math.random()*e,radius:1.2*Math.random()+.3,vx:.2*(Math.random()-.5),vy:.2*(Math.random()-.5),connections:new Set})))}),[d]),g=(0,i.useCallback)((()=>{if(!n.current)return null;const t=n.current,e=window.devicePixelRatio||1,i=t.getBoundingClientRect();t.width=i.width*e,t.height=i.height*e;const s=t.getContext("2d",{alpha:!1,desynchronized:!0,willReadFrequently:!1});return s?(s.scale(e,e),u.current=s,{width:i.width,height:i.height}):null}),[]),f=(0,i.useCallback)((t=>{if(!o.current)return;const e=t-a.current;if(e<c)return void(s.current=requestAnimationFrame(f));a.current=t-e%c;const i=u.current;if(!i||!n.current)return;const l=n.current.getBoundingClientRect(),p=l.width,h=l.height;i.fillStyle="#000000",i.fillRect(0,0,p,h),i.fillStyle="rgba(255, 255, 255, 0.8)",i.lineWidth=.5,r.current.forEach(((t,e)=>{t.x=(t.x+t.vx+p)%p,t.y=(t.y+t.vy+h)%h,i.beginPath(),i.arc(t.x,t.y,t.radius,0,2*Math.PI),i.fill(),t.connections.clear();for(let n=e+1;n<r.current.length;n++){const e=r.current[n],s=Math.abs(t.x-e.x),o=Math.abs(t.y-e.y);if(s>150||o>150)continue;const a=Math.sqrt(s*s+o*o);if(a<150){t.connections.add(n);const s=1-a/150;if(s<=.1)continue;i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.strokeStyle=`rgba(255, 255, 255, ${s})`,i.stroke()}}})),s.current=requestAnimationFrame(f)}),[c]),y=(0,i.useCallback)((()=>{s.current&&cancelAnimationFrame(s.current);const t=g();if(t){const{width:e,height:n}=t;m(e,n),a.current=performance.now(),f(a.current)}}),[g,m,f]);return(0,i.useEffect)((()=>{o.current=!0;e?y():requestIdleCallback((()=>y()));const t=new ResizeObserver((()=>{o.current&&(e?y():requestIdleCallback((()=>y())))}));return n.current&&t.observe(n.current),()=>{o.current=!1,s.current&&cancelAnimationFrame(s.current),t.disconnect()}}),[y,e]),(0,l.jsx)(p,{children:(0,l.jsx)(h,{ref:n})})},m=i.memo(d),g=(0,s.Ay)(r.P.div)`
  font-size: clamp(1.2rem, 3vw, 2.2rem);
  color: ${t=>t.theme.colors.secondaryBackground};
  line-height: 1.6;
  max-width: min(1200px, 90vw);
  margin: clamp(1.5rem, 3vw, 3rem) auto;
  min-height: clamp(80px, 15vh, 120px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,f=(0,s.Ay)(r.P.p)`
  margin: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  padding: clamp(1.5rem, 3vw, 3rem);
  border-radius: 16px;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  
  // Efecto de brillo en los bordes
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: 0.8s;
    animation: shine 8s infinite;
  }
  
  @keyframes shine {
    0% {
      left: -100%;
    }
    20% {
      left: 100%;
    }
    100% {
      left: 100%;
    }
  }
`,y=()=>{const[t,e]=(0,i.useState)(0),{t:n}=(0,c.Bd)(),s=[n("home.subtitle.1"),n("home.subtitle.2"),n("home.subtitle.3"),n("home.subtitle.4"),n("home.subtitle.5")];return(0,i.useEffect)((()=>{const t=setInterval((()=>{e((t=>(t+1)%s.length))}),5e3);return()=>clearInterval(t)}),[s.length]),(0,l.jsx)(g,{children:(0,l.jsx)(o.N,{mode:"wait",children:(0,l.jsx)(f,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}},exit:{opacity:0,scale:.9,y:-20,transition:{duration:.6,ease:[.6,-.05,.01,.99]}},children:s[t]},t)})})};var b=n(4424),x=n(9617);const v=s.Ay.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${t=>t.theme.colors.background}99 0%,
    ${t=>t.theme.colors.background}80 100%
  );
`,w=(0,s.Ay)(r.P.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 1.5rem;
    align-items: center;
  }
`,k=(0,s.Ay)(r.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%; // Cambiado para mejor control del ancho
  max-width: 1200px; // Límite máximo para pantallas grandes
  margin: 0 auto; // Centrado automático
  margin-top: -120px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem; // Padding fijo para mejor simetría
  justify-content: space-between;
  gap: 2rem;
  min-height: 60vh; // Altura mínima consistente

  // Proporciones más controladas
  @media (min-width: 769px) {
    aspect-ratio: 16/9; // Proporción más estándar
    min-height: auto; // Se elimina en pantallas grandes
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem;
    margin-top: -10px;
    aspect-ratio: auto;
    gap: 1.5rem;
  }
`,C=s.Ay.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  text-align: center;
  margin: 0;
  padding: 0;
  
  .company-name {
    background: linear-gradient(45deg, #a5aa9a, #d4d6d1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,P=s.i7`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,A=s.AH`
  animation: ${P} 3s linear infinite;
`,S=(0,s.Ay)(b.A)`
  width: min(100%, 300px);
  padding: 0.85em 2em;
  font-size: clamp(0.875rem, 2vw, 1rem);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(90deg,
      ${t=>t.theme.colors.accent},
      ${t=>t.theme.colors.primary},
      ${t=>t.theme.colors.accent}
    );
    background-size: 200% 200%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    ${A}
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 10px 20px rgba(0, 255, 255, 0.2),
      0 6px 6px rgba(0, 255, 255, 0.1),
      0 0 100px -20px ${t=>t.theme.colors.primary};
  }
`,T=s.Ay.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 0;
  font-size: clamp(1rem, 2.5vw, 1.25rem);
`,$=()=>{const{t:t}=(0,c.Bd)(),e=(0,u.Zp)(),{shouldAnimate:n,animationLevel:s,completeAnimation:r}=(0,x.W)(),p=(0,i.useCallback)((()=>{const t=document.activeElement;t&&t.blur(),requestAnimationFrame((()=>{e("/services",{state:{fromHome:!0}})}))}),[e]),h=n&&"minimal"!==s?"reduced"===s?{initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.5}},exit:{opacity:0,y:-20}}:{initial:{opacity:0,scale:.98,y:30},animate:{opacity:1,scale:1,y:0,transition:{duration:.8,ease:[.6,-.05,.01,.99]}},exit:{opacity:0,scale:.96,transition:{duration:.5}}}:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.3}},exit:{opacity:0}};return(0,l.jsxs)(v,{children:[(0,l.jsx)(m,{priority:!1}),(0,l.jsx)(o.N,{mode:"wait",children:(0,l.jsx)(w,{variants:h,initial:"initial",animate:"animate",exit:"exit",onAnimationComplete:r,children:(0,l.jsxs)(k,{children:[(0,l.jsx)(C,{children:(0,l.jsx)(a.i,{strings:['<span style="color: #a5aa9a;">Axion</span><span style="color: #00FFFF;">Dev</span>'],typeSpeed:100,showCursor:!0,cursorChar:"|",html:!0})}),(0,l.jsx)(T,{children:(0,l.jsx)(y,{})}),(0,l.jsx)(S,{variant:"primary",glow:!0,size:"large",onClick:p,glowIntensity:1.5,children:t("home.exploreButton")})]})})})]})},E=i.memo($)},2177:(t,e,n)=>{n.d(e,{FK:()=>o,QE:()=>a,Tw:()=>u});var i=n(1529);const s=i.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,r=i.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,o=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return i.AH`
  animation: ${r} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*t}px);
  }
`},a=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return i.AH`
  animation: ${s} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*t}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*t}px rgba(255, 215, 0, 0.5);
  }
`},u=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return i.AH`
  animation: ${s} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*t}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*t}px rgba(255, 215, 0, 0.4);
  }
`}},7886:(t,e,n)=>{n.d(e,{i:()=>c});var i=n(5043);function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s.apply(this,arguments)}var r={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},o=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=s({},r,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var i=Array.prototype.slice.apply(t.stringsElement.children),o=i.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(i[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},t}()),a=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var i=t.substring(e).charAt(0);if("<"===i||"&"===i){var s;for(s="<"===i?">":";";t.substring(e+1).charAt(0)!==s&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var i=t.substring(e).charAt(0);if(">"===i||";"===i){var s;for(s=">"===i?"<":"&";t.substring(e-1).charAt(0)!==s&&!(--e<0););e--}return e},t}()),u=function(){function t(t,e){o.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},e.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var i=this.humanizer(this.typeSpeed),s=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=a.typeHtmlChars(t,e,n);var i=0,r=t.substring(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var o=1;o+=(r=/\d+/.exec(r)[0]).length,i=parseInt(r),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+o),n.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substring(e+s).charAt(0)&&(s++,!(e+s>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+s),l=t.substring(e+s+1);t=u+c+l,s--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,s),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),i)}),i):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var i=t.substring(0,e+=n);this.replaceText(i),this.typewrite(t,e)},e.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))},e.backspace=function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var i=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=a.backSpaceHtmlChars(t,e,n);var i=t.substring(0,e);if(n.replaceText(i),n.smartBackspace){var s=n.strings[n.arrayPos+1];n.stopNum=s&&i===s.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),i)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const c=(0,i.memo)((t=>{let{style:e,className:n,typedRef:s,parseRef:r,stopped:o,children:a,startWhenVisible:c,...l}=t;const p=(0,i.useRef)(null),h=(0,i.useMemo)((()=>[...Object.values(l).filter((t=>"boolean"===typeof t||"number"===typeof t||"string"===typeof t)),l.strings?.join(",")]),[l]);(0,i.useEffect)((()=>{const t=r&&r(p)||p.current,e=new u(t,{...l});if((o||c)&&e?.stop(),c){const n=new IntersectionObserver((t=>{let[i]=t;i.isIntersecting&&(e?.start(),n.disconnect())}));n.observe(t)}return s&&e&&s(e),()=>{e.destroy()}}),h);const d=a?i.cloneElement(a,{ref:p}):i.createElement("span",{style:e,ref:p});return i.createElement("span",{style:e,className:n,"data-testid":"react-typed"},d)}))}}]);
//# sourceMappingURL=351.8df7c3d8.chunk.js.map