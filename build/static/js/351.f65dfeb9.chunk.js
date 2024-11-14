"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[351],{4424:(t,e,s)=>{s.d(e,{A:()=>u});s(5043);var n=s(1529),i=s(2339),r=s(579);const o=n.i7`
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
  50% { transform: scale(1.05); box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
  100% { transform: scale(1); box-shadow: 0 0 0 rgba(0, 255, 255, 0); }
`,a=n.Ay.button`
  ${i.ku}
  ${t=>i.dK[t.size||"medium"]}
  ${t=>i.ru[t.variant||"primary"]}
  ${t=>t.customStyle}

  ${t=>t.$isAnimated&&n.AH`
    animation: ${o} 2s infinite ease-in-out;
  `}

  ${t=>t.fullWidth&&n.AH`
    width: 100%;
  `}

  ${t=>"submit"===t.type&&n.AH`
    margin-left: auto;
  `}

  ${t=>"clear"===t.variant&&n.AH`
    background: ${t=>t.theme.colors.secondaryBackground};
    &:hover {
      background: ${t=>t.theme.colors.secondaryBackground};
      opacity: 0.8;
    }
  `}
`,u=t=>{let{children:e,variant:s="primary",size:n="medium",animated:i=!1,className:o="",customStyle:u,fullWidth:c=!1,...l}=t;return(0,r.jsx)(a,{$variant:s,$isAnimated:i,size:n,className:o,customStyle:u,fullWidth:c,...l,children:e})}},9351:(t,e,s)=>{s.r(e),s.d(e,{default:()=>C});var n=s(5043),i=s(3216),r=s(1529),o=s(3968),a=s(7886),u=s(579);const c=r.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  z-index: -1;
`,l=r.Ay.canvas`
  width: 100%;
  height: 100%;
`,p=()=>{const t=(0,n.useRef)(null),e=(0,n.useRef)(null),s=(0,n.useRef)([]),i=()=>{const e=t.current;if(!e)return;const n=window.devicePixelRatio||1,i=window.innerWidth,r=window.innerHeight;e.width=i*n,e.height=r*n,e.style.width=`${i}px`,e.style.height=`${r}px`;const o=e.getContext("2d");o&&(o.scale(n,n),((t,e)=>{s.current=[];for(let n=0;n<50;n++)s.current.push({x:Math.random()*t,y:Math.random()*e,radius:1.5*Math.random()+.5,vx:.5*(Math.random()-.5),vy:.5*(Math.random()-.5)})})(i,r))},r=()=>{const n=t.current;if(!n)return;const i=n.getContext("2d");if(!i)return;i.clearRect(0,0,n.width,n.height),s.current.forEach((t=>{t.x+=t.vx,t.y+=t.vy,(t.x<0||t.x>window.innerWidth)&&(t.vx*=-1),(t.y<0||t.y>window.innerHeight)&&(t.vy*=-1),i.beginPath(),i.arc(t.x,t.y,t.radius,0,2*Math.PI),i.fillStyle="#FFFFFF",i.fill(),s.current.forEach((e=>{const s=t.x-e.x,n=t.y-e.y,r=Math.sqrt(s*s+n*n);r<150&&(i.beginPath(),i.moveTo(t.x,t.y),i.lineTo(e.x,e.y),i.strokeStyle=`rgba(255, 255, 255, ${1-r/150})`,i.lineWidth=.2,i.stroke())}))})),e.current=requestAnimationFrame(r)};return(0,n.useEffect)((()=>{let t=!0;const s=()=>{t&&(e.current&&cancelAnimationFrame(e.current),i(),r())};return setTimeout((()=>{t&&(i(),r())}),0),window.addEventListener("resize",s),()=>{t=!1,e.current&&cancelAnimationFrame(e.current),window.removeEventListener("resize",s)}}),[]),(0,u.jsx)(c,{children:(0,u.jsx)(l,{ref:t})})};var h=s(3546);const d=(0,r.Ay)(o.P.div)`
  font-size: 2rem;
  color: ${t=>t.theme.colors.secondaryBackground};
  line-height: 1.8;
  max-width: 1200px;
  margin: 3rem auto; // Aumentamos el margen vertical
  padding: 2rem;
  height: 100px; // Reducimos un poco la altura
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
`,m=(0,r.Ay)(o.P.p)`
  margin: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 3rem 3rem;
  border-radius: 12px;
  width: 100%;
  border: 1px solid ${t=>t.theme.colors.secondaryBackground};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
`,y=["\ud83c\udfaf Desarrollo de sitios web modernos y accesibles para peque\xf1os y medianos negocios","\ud83d\udcbb Desarrollo y dise\xf1o de landing pages atractivas y optimizadas","\u26a1 Mantenimiento y actualizaciones de sitios web WordPress","\ud83d\udcf1 Dise\xf1o responsivo para una experiencia perfecta en todos los dispositivos","\ud83d\udd0d Implementaci\xf3n de SEO para mejorar tu visibilidad online"],f=()=>{const[t,e]=(0,n.useState)(0);return(0,n.useEffect)((()=>{const t=setInterval((()=>{e((t=>(t+1)%y.length))}),5e3);return()=>clearInterval(t)}),[]),(0,u.jsx)(d,{children:(0,u.jsx)(h.N,{mode:"wait",children:(0,u.jsx)(m,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{duration:.7,ease:"easeOut"}},exit:{opacity:0,scale:1.1,transition:{duration:.5,ease:"easeIn"}},children:y[t]},t)})})};var g=s(4424);const b=(0,r.Ay)(o.P.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem 20px;
  box-sizing: border-box;
  z-index: 1;
`,v=(0,r.Ay)(o.P.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 3.5rem;
`,x=r.Ay.h1`
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,w=r.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`,C=()=>{const[t,e]=(0,n.useState)(!1),s=(0,i.Zp)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w,{children:(0,u.jsx)(p,{})}),(0,u.jsx)(b,{children:(0,u.jsxs)(v,{children:[(0,u.jsx)(x,{children:(0,u.jsx)(a.i,{strings:['<span style="color: #a5aa9a;">Axion</span><span style="color: #00FFFF;">Dev</span>'],typeSpeed:100,showCursor:!0,cursorChar:"|",html:!0})}),(0,u.jsx)(f,{}),(0,u.jsx)(g.A,{animated:!0,onClick:()=>{e(!0),setTimeout((()=>{s("/services")}),1e3)},className:"home-button",children:"Descubre m\xe1s"})]})})]})}},7886:(t,e,s)=>{s.d(e,{i:()=>c});var n=s(5043);function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t},i.apply(this,arguments)}var r={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},o=new(function(){function t(){}var e=t.prototype;return e.load=function(t,e,s){if(t.el="string"==typeof s?document.querySelector(s):s,t.options=i({},r,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),t.stringsElement="string"==typeof t.options.stringsElement?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var n=Array.prototype.slice.apply(t.stringsElement.children),o=n.length;if(o)for(var a=0;a<o;a+=1)t.strings.push(n[a].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var e="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ",document.body.appendChild(s)}},e.appendFadeOutAnimationCss=function(t){var e="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+e+"]")){var s=document.createElement("style");s.setAttribute(e,"true"),s.innerHTML="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ",document.body.appendChild(s)}},t}()),a=new(function(){function t(){}var e=t.prototype;return e.typeHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n=t.substring(e).charAt(0);if("<"===n||"&"===n){var i;for(i="<"===n?">":";";t.substring(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e},e.backSpaceHtmlChars=function(t,e,s){if("html"!==s.contentType)return e;var n=t.substring(e).charAt(0);if(">"===n||";"===n){var i;for(i=">"===n?"<":"&";t.substring(e-1).charAt(0)!==i&&!(--e<0););e--}return e},t}()),u=function(){function t(t,e){o.load(this,e,t),this.begin()}var e=t.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){void 0===t&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){0===t.strPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)},e.typewrite=function(t,e){var s=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var n=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=a.typeHtmlChars(t,e,s);var n=0,r=t.substring(e);if("^"===r.charAt(0)&&/^\^\d+/.test(r)){var o=1;o+=(r=/\d+/.exec(r)[0]).length,n=parseInt(r),s.temporaryPause=!0,s.options.onTypingPaused(s.arrayPos,s),t=t.substring(0,e)+t.substring(e+o),s.toggleBlinking(!0)}if("`"===r.charAt(0)){for(;"`"!==t.substring(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+i),l=t.substring(e+i+1);t=u+c+l,i--}s.timeout=setTimeout((function(){s.toggleBlinking(!1),e>=t.length?s.doneTyping(t,e):s.keepTyping(t,e,i),s.temporaryPause&&(s.temporaryPause=!1,s.options.onTypingResumed(s.arrayPos,s))}),n)}),n):this.setPauseStatus(t,e,!0)},e.keepTyping=function(t,e,s){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var n=t.substring(0,e+=s);this.replaceText(n),this.typewrite(t,e)},e.doneTyping=function(t,e){var s=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){s.backspace(t,e)}),this.backDelay))},e.backspace=function(t,e){var s=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var n=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=a.backSpaceHtmlChars(t,e,s);var n=t.substring(0,e);if(s.replaceText(n),s.smartBackspace){var i=s.strings[s.arrayPos+1];s.stopNum=i&&n===i.substring(0,e)?e:0}e>s.stopNum?(e--,s.backspace(t,e)):e<=s.stopNum&&(s.arrayPos++,s.arrayPos===s.strings.length?(s.arrayPos=0,s.options.onLastStringBackspaced(),s.shuffleStringsIfNeeded(),s.begin()):s.typewrite(s.strings[s.sequence[s.arrayPos]],e))}),n)}else this.setPauseStatus(t,e,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,e,s){this.pause.typewrite=s,this.pause.curString=t,this.pause.curStrPos=e},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},t}();const c=(0,n.memo)((t=>{let{style:e,className:s,typedRef:i,parseRef:r,stopped:o,children:a,startWhenVisible:c,...l}=t;const p=(0,n.useRef)(null),h=(0,n.useMemo)((()=>[...Object.values(l).filter((t=>"boolean"===typeof t||"number"===typeof t||"string"===typeof t)),l.strings?.join(",")]),[l]);(0,n.useEffect)((()=>{const t=r&&r(p)||p.current,e=new u(t,{...l});if((o||c)&&e?.stop(),c){const s=new IntersectionObserver((t=>{let[n]=t;n.isIntersecting&&(e?.start(),s.disconnect())}));s.observe(t)}return i&&e&&i(e),()=>{e.destroy()}}),h);const d=a?n.cloneElement(a,{ref:p}):n.createElement("span",{style:e,ref:p});return n.createElement("span",{style:e,className:s,"data-testid":"react-typed"},d)}))}}]);
//# sourceMappingURL=351.f65dfeb9.chunk.js.map