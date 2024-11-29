"use strict";(self.webpackChunkaxiondev=self.webpackChunkaxiondev||[]).push([[908],{5908:(e,r,o)=>{o.r(r),o.d(r,{default:()=>p});var t=o(5043),a=o(1529),n=o(4117),c=o(2177),s=o(579);const d=a.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
  padding: 1rem;
  background: ${e=>e.theme.colors.primaryBackground};
  border-radius: 8px;
  border: 1px solid ${e=>e.$hasError?"#ff3333":`${e.theme.colors.secondaryBackground}40`};
`,i=a.Ay.div`
  font-family: 'Courier New', monospace;
  font-size: 2rem;
  letter-spacing: 3px;
  background: ${e=>e.theme.colors.primaryBackground};
  border-radius: 4px;
  user-select: none;
  padding: 0.5rem 1rem;
  ${(0,c.FK)()} 
`,l=a.Ay.input`
  width: 200px;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${e=>e.$hasError?"#ff3333":`${e.theme.colors.accent}40`};
  border-radius: 8px;
  background: rgba(30, 30, 30, 0.7);
  color: ${e=>e.theme.colors.text};
  text-align: center;
  font-size: 1rem;
`,m=a.Ay.p`
  color: #ff3333;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,p=e=>{let{onVerify:r}=e;const{t:o}=(0,n.Bd)(),[a,c]=(0,t.useState)(""),[p,u]=(0,t.useState)(""),[h,f]=(0,t.useState)(""),g=()=>{const e="ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789";let o="";for(let r=0;r<3;r++)o+=e.charAt(Math.floor(56*Math.random()));c(o),u(""),f(""),r(!1)};(0,t.useEffect)((()=>{g()}),[]);return(0,s.jsxs)(d,{$hasError:!!h,children:[(0,s.jsx)(i,{children:a}),(0,s.jsx)(l,{type:"text",placeholder:o("contact.captcha.placeholder"),value:p,onChange:e=>{u(e.target.value),f("")},onBlur:()=>{p.toLowerCase()===a.toLowerCase()?(r(!0),f("")):(r(!1),f(o("contact.captcha.error")),g())},$hasError:!!h}),h&&(0,s.jsx)(m,{children:h})]})}}}]);
//# sourceMappingURL=908.8e979a1c.chunk.js.map