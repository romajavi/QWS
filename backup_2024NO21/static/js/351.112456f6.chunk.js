"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[351],{4424:(t,e,n)=>{n.d(e,{A:()=>a});n(5043);var s=n(1529),r=n(2177),i=n(579);const o=s.Ay.button`
  /* Estilos base */
  background: ${t=>t.theme.colors.primary};
  color: ${t=>t.theme.colors.buttonText};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  /* Tamaños */
  padding: ${t=>{let{$size:e}=t;return"small"===e?"0.5rem 1rem":"0.75rem 1.5rem"}};
  font-size: ${t=>{let{$size:e}=t;return"medium"===e?"0.875rem":"1rem"}};
  min-width: ${t=>{let{$size:e}=t;return"large"===e?"100px":"150px"}};
  
  /* Variantes */
  background: ${t=>{let{$variant:e,theme:n}=t;return"secondary"===e?n.colors.secondaryBackground:n.colors.primary}};
  
  /* Efectos de resplandor */
  ${t=>{let{$glow:e,$variant:n,$glowIntensity:s=1}=t;return e&&"primary"===n?(0,r.QE)(s):""}}
  ${t=>{let{$glow:e,$variant:n,$glowIntensity:s=.5}=t;return e&&"secondary"===n?(0,r.Tw)(s):""}}

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
`,a=t=>{let{children:e,variant:n="primary",size:s="medium",glow:r=!1,glowIntensity:a=1,...u}=t;return(0,i.jsx)(o,{$variant:n,$size:s,$glow:r,$glowIntensity:a,...u,children:e})}},9351:(t,e,n)=>{n.r(e),n.d(e,{default:()=>A});var s=n(5043),r=n(1529),i=n(3968),o=n(3546),a=n(7886),u=n(3216),c=n(4117),l=n(579);const h=r.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: 0;
  will-change: transform;
  transform: translateZ(0);
`,p=r.Ay.canvas`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateZ(0);
  image-rendering: optimizeSpeed;
`,d=t=>{let{priority:e=!1}=t;const n=(0,s.useRef)(null),r=(0,s.useRef)(null),i=(0,s.useRef)([]),o=(0,s.useRef)(!0),a=(0,s.useRef)(0),u=(0,s.useRef)(null),c=1e3/30,d=(0,s.useMemo)((()=>window.innerWidth<768?15:25),[]),m=(0,s.useCallback)(((t,e)=>{i.current=Array.from({length:d},(()=>({x:Math.random()*t,y:Math.random()*e,radius:1.2*Math.random()+.3,vx:.2*(Math.random()-.5),vy:.2*(Math.random()-.5),connections:new Set})))}),[d]),g=(0,s.useCallback)((()=>{if(!n.current)return null;const t=n.current,e=window.devicePixelRatio||1,s=t.getBoundingClientRect();t.width=s.width*e,t.height=s.height*e;const r=t.getContext("2d",{alpha:!1,desynchronized:!0,willReadFrequently:!1});return r?(r.scale(e,e),u.current=r,{width:s.width,height:s.height}):null}),[]),f=(0,s.useCallback)((t=>{if(!o.current)return;const e=t-a.current;if(e<c)return void(r.current=requestAnimationFrame(f));a.current=t-e%c;const s=u.current;if(!s||!n.current)return;const l=n.current.getBoundingClientRect(),h=l.width,p=l.height;s.fillStyle="#000000",s.fillRect(0,0,h,p),s.fillStyle="rgba(255, 255, 255, 0.8)",s.lineWidth=.5,i.current.forEach(((t,e)=>{t.x=(t.x+t.vx+h)%h,t.y=(t.y+t.vy+p)%p,s.beginPath(),s.arc(t.x,t.y,t.radius,0,2*Math.PI),s.fill(),t.connections.clear();for(let n=e+1;n<i.current.length;n++){const e=i.current[n],r=Math.abs(t.x-e.x),o=Math.abs(t.y-e.y);if(r>150||o>150)continue;const a=Math.sqrt(r*r+o*o);if(a<150){t.connections.add(n);const r=1-a/150;if(r<=.1)continue;s.beginPath(),s.moveTo(t.x,t.y),s.lineTo(e.x,e.y),s.strokeStyle=`rgba(255, 255, 255, ${r})`,s.stroke()}}})),r.current=requestAnimationFrame(f)}),[c]),y=(0,s.useCallback)((()=>{r.current&&cancelAnimationFrame(r.current);const t=g();if(t){const{width:e,height:n}=t;m(e,n),a.current=performance.now(),f(a.current)}}),[g,m,f]);return(0,s.useEffect)((()=>{o.current=!0;e?y():requestIdleCallback((()=>y()));const t=new ResizeObserver((()=>{o.current&&(e?y():requestIdleCallback((()=>y())))}));return n.current&&t.observe(n.current),()=>{o.current=!1,r.current&&cancelAnimationFrame(r.current),t.disconnect()}}),[y,e]),(0,l.jsx)(h,{children:(0,l.jsx)(p,{ref:n})})},m=s.memo(d),g=(0,r.Ay)(i.P.div)`
  font-size: 2rem;
  color: ${t=>t.theme.colors.secondaryBackground};
  line-height: 1.8;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1.5rem;
    height: 120px;
    margin: 2rem auto;
  }
`,f=(0,r.Ay)(i.P.p)`
  margin: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3rem 3rem;
  border-radius: 12px;
  width: 100%;
  border: 1px solid ${t=>t.theme.colors.secondaryBackground};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`,y=()=>{const[t,e]=(0,s.useState)(0),{t:n}=(0,c.Bd)(),r=[n("home.subtitle.1"),n("home.subtitle.2"),n("home.subtitle.3"),n("home.subtitle.4"),n("home.subtitle.5")];return(0,s.useEffect)((()=>{const t=setInterval((()=>{e((t=>(t+1)%r.length))}),5e3);return()=>clearInterval(t)}),[r.length]),(0,l.jsx)(g,{children:(0,l.jsx)(o.N,{mode:"wait",children:(0,l.jsx)(f,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{duration:.7,ease:"easeOut"}},exit:{opacity:0,scale:1.1,transition:{duration:.5,ease:"easeIn"}},children:r[t]},t)})})};var b=n(4424);const x=r.Ay.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`,v=(0,r.Ay)(i.P.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem 20px;
  box-sizing: border-box;
  z-index: 1;
  will-change: transform;
`,w=(0,r.Ay)(i.P.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
`,C=r.Ay.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  margin: 2rem 0 1rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  will-change: transform;
  
  .company-name {
    color: #a5aa9a;
  }
  
  .separator {
    color: #00FFFF;
  }

  @media (max-width: 768px) {
    margin: 1rem 0 0.5rem;
  }
`,k=(0,r.Ay)(b.A)`
  transition: transform 0.3s ease;
  will-change: transform;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`,P={initial:{opacity:0},animate:{opacity:1,transition:{duration:.5,when:"beforeChildren",staggerChildren:.2}},exit:{opacity:0,transition:{duration:.3}}},S={initial:{y:20,opacity:0},animate:{y:0,opacity:1,transition:{duration:.5,ease:"easeOut"}},exit:{y:-20,opacity:0,transition:{duration:.3}}},T=()=>{const{t:t}=(0,c.Bd)(),e=(0,u.Zp)(),n=(0,s.useCallback)((()=>{const t=document.activeElement;t&&t.blur(),requestAnimationFrame((()=>{e("/services",{state:{fromHome:!0}})}))}),[e]);return(0,l.jsxs)(x,{children:[(0,l.jsx)(m,{priority:!1}),(0,l.jsx)(o.N,{mode:"wait",children:(0,l.jsx)(v,{variants:P,initial:"initial",animate:"animate",exit:"exit",children:(0,l.jsxs)(w,{variants:S,children:[(0,l.jsx)(C,{children:(0,l.jsx)(a.i,{strings:['<span style="color: #a5aa9a;">Axion</span><span style="color: #00FFFF;">Dev</span>'],typeSpeed:100,showCursor:!0,cursorChar:"|",html:!0})}),(0,l.jsx)(y,{}),(0,l.jsx)(k,{variant:"primary",glow:!0,animated:!0,size:"large",onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},glowIntensity:1,children:t("home.exploreButton")})]})})})]})},A=s.memo(T)},2177:(t,e,n)=>{n.d(e,{FK:()=>o,QE:()=>a,Tw:()=>u});var s=n(1529);const r=s.i7`
  0% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
  50% { box-shadow: 0 0 7px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.5); }
  100% { box-shadow: 0 0 5px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 215, 0, 0.3); }
`,i=s.i7`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`,o=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return s.AH`
  animation: ${i} 2s infinite ease-in-out;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(${-3*t}px);
  }
`},a=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return s.AH`
  animation: ${r} 2s infinite;
  transition: all 0.3s ease;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${12*t}px rgba(255, 215, 0, 0.8), 
                0 0 ${50*t}px rgba(255, 215, 0, 0.5);
  }
`},u=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return s.AH`
  animation: ${r} 3s infinite;
  animation-delay: 0.5s;
  
  &:hover {
    animation: none;
    box-shadow: 0 0 ${15*t}px rgba(255, 215, 0, 0.6), 
                0 0 ${30*t}px rgba(255, 215, 0, 0.4);
  }
`}},7886:(t,e,n)=>{n.d(e,{i:()=>c});var s=n(5043);function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},r.apply(this,arguments)}var i={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},o=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=r({},i,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var s=Array.prototype.slice.apply(t.stringsElement.children),o=s.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(s[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(n)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.setAttribute(e,"true"),n.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(n)}},t}()),a=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s=t.substring(e).charAt(0);if("<"===s||"&"===s){var r;for(r="<"===s?">":";";t.substring(e+1).charAt(0)!==r&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,n){if("html"!==n.contentType)return e;var s=t.substring(e).charAt(0);if(">"===s||";"===s){var r;for(r=">"===s?"<":"&";t.substring(e-1).charAt(0)!==r&&!(--e<0););e--}return e},t}()),u=function(){function t(t,e){o.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},e.typewrite=function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=a.typeHtmlChars(t,e,n);var s=0,i=t.substring(e);if("^"===i.charAt(0)&&/^\^\d+/.test(i)){var o=1;o+=(i=/\d+/.exec(i)[0]).length,s=parseInt(i),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+o),n.toggleBlinking(!0)}if("`"===i.charAt(0)){for(;"`"!==t.substring(e+r).charAt(0)&&(r++,!(e+r>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+r),l=t.substring(e+r+1);t=u+c+l,r--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),s)}),s):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var s=t.substring(0,e+=n);this.replaceText(s),this.typewrite(t,e)},e.doneTyping=function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))},e.backspace=function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=a.backSpaceHtmlChars(t,e,n);var s=t.substring(0,e);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];n.stopNum=r&&s===r.substring(0,e)?e:0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),s)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const c=(0,s.memo)((t=>{let{style:e,className:n,typedRef:r,parseRef:i,stopped:o,children:a,startWhenVisible:c,...l}=t;const h=(0,s.useRef)(null),p=(0,s.useMemo)((()=>[...Object.values(l).filter((t=>"boolean"===typeof t||"number"===typeof t||"string"===typeof t)),l.strings?.join(",")]),[l]);(0,s.useEffect)((()=>{const t=i&&i(h)||h.current,e=new u(t,{...l});if((o||c)&&e?.stop(),c){const n=new IntersectionObserver((t=>{let[s]=t;s.isIntersecting&&(e?.start(),n.disconnect())}));n.observe(t)}return r&&e&&r(e),()=>{e.destroy()}}),p);const d=a?s.cloneElement(a,{ref:h}):s.createElement("span",{style:e,ref:h});return s.createElement("span",{style:e,className:n,"data-testid":"react-typed"},d)}))}}]);
//# sourceMappingURL=351.112456f6.chunk.js.map