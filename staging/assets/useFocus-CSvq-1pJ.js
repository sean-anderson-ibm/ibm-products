import{u as D}from"./deprecate-D9ms-jbM.js";import{p as S}from"./settings-BiUEFdm2.js";import{r as y}from"./index-BwDkhjyp.js";const v=(c,u)=>{const a=D(),$=`${S.prefix}--tearsheet`,r=`:not(.${a}--visually-hidden,.${$}__header--no-close-icon,.${a}--btn--disabled,[aria-hidden="true"],[tabindex="-1"])`,d=`button${r}`,f=`input${r}`,h=`select${r}`,x=`textarea${r}`,q=`[href]${r}`,g=`[tabindex="0"]${r}`,l=`${d},${q},${f},${h},${x}, ${g}`,n=c==null?void 0:c.current,e=y.useCallback(()=>{let t=n==null?void 0:n.querySelectorAll(`${l}`);t!=null&&t.length&&(t=Array.prototype.filter.call(t,A=>{var p;return((p=window==null?void 0:window.getComputedStyle(A))==null?void 0:p.display)!=="none"}));const s=t==null?void 0:t[0],o=t==null?void 0:t[(t==null?void 0:t.length)-1],i=t,w=u?n==null?void 0:n.querySelector(u):null;return{first:s,last:o,all:i,specifiedElement:w}},[n,l,u]);y.useEffect(()=>{e()},[e]);const k=t=>{if(t.key==="Tab"){const{first:s,last:o,all:i}=e();setTimeout(()=>{t.shiftKey&&!Array.prototype.includes.call(i,document==null?void 0:document.activeElement)?(t.preventDefault(),o==null||o.focus()):Array.prototype.includes.call(i,document==null?void 0:document.activeElement)||(t.preventDefault(),s==null||s.focus())},0)}};return{firstElement:e().first,lastElement:e().last,allElements:e().all,specifiedElement:e().specified,keyDownListener:k,getFocusable:e}};export{v as u};