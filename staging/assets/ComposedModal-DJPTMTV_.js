import{u as q,c as B,_ as L,C as re,g as le,a as J,E as ce,T as ie}from"./useMergedRefs-DoviDd4t.js";import{R as n,r as y}from"./index-BwDkhjyp.js";import{r as Q}from"./index-DcAOwtUU.js";import{P as e}from"./index-Dk74W0Oi.js";import{I as ue,B as z,n as D,i as de}from"./settings-Bk-Ww79A.js";import{B as me}from"./ButtonSet-BfrcW0LA.js";import{I as fe}from"./InlineLoading-BtULKugn.js";import{m as pe}from"./mergeRefs-CTUecegF.js";import{r as ye}from"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import{w as ge,e as be,a as Ce}from"./wrapFocus-CuszVIVc.js";import{u as he}from"./index-Bxn63eqr.js";const V=n.forwardRef(function(o,l){let{buttonOnClick:c,children:m,className:$,closeClassName:C,closeIconClassName:h,closeModal:i,iconDescription:u="Close",label:f,labelClassName:p,title:s,titleClassName:x,...N}=o;const a=q();function S(R){i==null||i(R),c==null||c(R)}const w=B(`${a}--modal-header`,$),T=B(`${a}--modal-header__label ${a}--type-delta`,p),I=B(`${a}--modal-header__heading ${a}--type-beta`,x),d=B(`${a}--modal-close`,C),E=B(`${a}--modal-close__icon`,h);return n.createElement("div",L({className:w},N,{ref:l}),f&&n.createElement("h2",{className:T},f),s&&n.createElement("h3",{className:I},s),m,n.createElement("div",{className:`${a}--modal-close-button`},n.createElement(ue,{className:d,label:u,onClick:S,"aria-label":u,align:"left"},n.createElement(re,{size:20,"aria-hidden":"true",tabIndex:"-1",className:E}))))});V.propTypes={buttonOnClick:e.func,children:e.node,className:e.string,closeClassName:e.string,closeIconClassName:e.string,closeModal:e.func,iconDescription:e.string,label:e.node,labelClassName:e.string,title:e.node,titleClassName:e.string};function X(r){let{secondaryButtons:o,secondaryButtonText:l,secondaryClassName:c,closeModal:m,onRequestClose:$,disabled:C}=r;function h(i){m(i),$(i)}return Array.isArray(o)&&o.length<=2?o.map((i,u)=>{let{buttonText:f,onClick:p}=i;return n.createElement(z,{key:`${f}-${u}`,className:c,kind:"secondary",onClick:p||h},f)}):l?n.createElement(z,{disabled:C,className:c,onClick:h,kind:"secondary"},l):null}X.propTypes={closeModal:e.func,disabled:e.bool,onRequestClose:e.func,secondaryButtonText:e.string,secondaryButtons:(r,o,l)=>{if(r.secondaryButtons){if(!Array.isArray(r.secondaryButtons)||r.secondaryButtons.length!==2)return new Error(`${o} needs to be an array of two button config objects`);const c={buttonText:e.node,onClick:e.func};r[o].forEach(m=>{e.checkPropTypes(c,m,o,l)})}return null},secondaryClassName:e.string};const Y=n.forwardRef(function(o,l){let{children:c,className:m,closeModal:$=D,danger:C,inputref:h,onRequestClose:i=D,onRequestSubmit:u=D,primaryButtonDisabled:f,primaryButtonText:p,primaryClassName:s,secondaryButtonText:x,secondaryButtons:N,secondaryClassName:a,loadingStatus:S="inactive",loadingDescription:w,loadingIconDescription:T,onLoadingSuccess:I=D,...d}=o;const E=q(),R=B(`${E}--modal-footer`,m,Array.isArray(N)&&N.length===2?`${E}--modal-footer--three-button`:null),v=B(s,S!=="inactive"?`${E}--btn--loading`:null),k=S!=="inactive",g={closeModal:$,secondaryButtons:N,secondaryButtonText:x,secondaryClassName:a,onRequestClose:i,disabled:k};return n.createElement(me,L({className:R},d,{ref:l,"aria-busy":k}),n.createElement(X,g),p&&n.createElement(z,{onClick:u,className:v,disabled:k||f,kind:C?"danger":"primary",ref:h},S==="inactive"?p:n.createElement(fe,{status:S,description:w,iconDescription:T,className:`${E}--inline-loading--btn`,onSuccess:I})),c)});Y.propTypes={children:e.node,className:e.string,closeModal:e.func,danger:e.bool,inputref:e.oneOfType([e.func,e.shape({current:e.any})]),loadingDescription:e.string,loadingIconDescription:e.string,loadingStatus:e.oneOf(["inactive","active","finished","error"]),onLoadingSuccess:e.func,onRequestClose:e.func,onRequestSubmit:e.func,primaryButtonDisabled:e.bool,primaryButtonText:e.string,primaryClassName:e.string,secondaryButtonText:e.string,secondaryButtons:(r,o,l)=>{if(r.secondaryButtons){if(!Array.isArray(r.secondaryButtons)||r.secondaryButtons.length!==2)return new Error(`${o} needs to be an array of two button config objects`);const c={buttonText:e.node,onClick:e.func};r[o].forEach(m=>{e.checkPropTypes(c,m,o,l)})}return null},secondaryClassName:e.string};function U(r,o,l){r.classList.contains(o)===!l&&r.classList[l?"add":"remove"](o)}const Ne=n.forwardRef(function(o,l){let{className:c,children:m,hasForm:$,hasScrollingContent:C,...h}=o;const i=q(),u=y.useRef(null),[f,p]=y.useState(!1),s=B({[`${i}--modal-content`]:!0,[`${i}--modal-content--with-form`]:$,[`${i}--modal-scroll-content`]:C||f},c);le(()=>{u.current&&p(u.current.scrollHeight>u.current.clientHeight);function N(){u.current&&p(u.current.scrollHeight>u.current.clientHeight)}const a=de(N,200);return window.addEventListener("resize",a),()=>{a.cancel(),window.removeEventListener("resize",a)}},[]);const x=C||f?{tabIndex:0,role:"region"}:{};return n.createElement("div",L({className:s},x,h,{ref:pe(u,l)}),m)});Ne.propTypes={"aria-label":ye("hasScrollingContent",e.string),children:e.node,className:e.string,hasForm:e.bool,hasScrollingContent:e.bool};const Ee=n.forwardRef(function(o,l){var G;let{["aria-labelledby"]:c,["aria-label"]:m,children:$,className:C,containerClassName:h,danger:i,isFullWidth:u,onClose:f,onKeyDown:p,open:s,preventCloseOnClickOutside:x,selectorPrimaryFocus:N="[data-modal-primary-focus]",selectorsFloatingMenus:a,size:S,launcherButtonRef:w,slug:T,...I}=o;const d=q(),[E,R]=y.useState(!!s),[v,k]=y.useState(!!s),g=y.useRef(null),_=y.useRef(null),H=y.useRef(null),W=y.useRef(null),A=he("enable-experimental-focus-wrap-without-sentinels");y.useEffect(()=>{s!==v&&(R(!!s),k(!!s),U(document.body,`${d}--body--with-modal-open`,!!s))},[s,v,d]),y.useEffect(()=>()=>{U(document.body,`${d}--body--with-modal-open`,!1)},[]);function Z(t){t.stopPropagation(),J(t,ce)&&O(t),A&&s&&J(t,ie)&&g.current&&ge({containerNode:g.current,currentActiveNode:t.target,event:t}),p==null||p(t)}function ee(t){const b=t.target;t.stopPropagation(),!x&&!be(b,a)&&g.current&&!g.current.contains(b)&&O(t)}function te(t){let{target:b,relatedTarget:M}=t;if(s&&M&&b&&g.current){const{current:F}=g,{current:P}=H,{current:ae}=W;Ce({bodyNode:F,startTrapNode:P,endTrapNode:ae,currentActiveNode:M,oldActiveNode:b,selectorsFloatingMenus:a==null?void 0:a.filter(Boolean)})}}function O(t){(!f||f(t)!==!1)&&R(!1)}const ne=B(`${d}--modal`,{"is-visible":E,[`${d}--modal--danger`]:i,[`${d}--modal--slug`]:T},C),oe=B(`${d}--modal-container`,S&&`${d}--modal-container--${S}`,u&&`${d}--modal-container--full-width`,h);let j;const se=n.Children.toArray($).map(t=>{switch(!0){case(Q.isElement(t)&&t.type===n.createElement(V).type):{const b=t;return j=b.props.label,n.cloneElement(b,{closeModal:O})}case(Q.isElement(t)&&t.type===n.createElement(Y).type):{const b=t;return n.cloneElement(b,{closeModal:O,inputref:_})}default:return t}});y.useEffect(()=>{!s&&w&&setTimeout(()=>{var t;(t=w==null?void 0:w.current)==null||t.focus()})},[s,w]),y.useEffect(()=>{const t=M=>{const F=M||g.current,P=F?F.querySelector(N):null;return P||_&&_.current};s&&E&&(M=>{const F=t(M);F&&F.focus()})(g.current)},[s,N,E]);let K;return T&&((G=T.type)==null?void 0:G.displayName)==="Slug"&&(K=n.cloneElement(T,{size:"sm"})),n.createElement("div",L({},I,{role:"presentation",ref:l,"aria-hidden":!s,onBlur:A?()=>{}:te,onMouseDown:ee,onKeyDown:Z,className:ne}),n.createElement("div",{className:oe,role:"dialog","aria-modal":"true","aria-label":m||j,"aria-labelledby":c},!A&&n.createElement("button",{type:"button",ref:H,className:`${d}--visually-hidden`},"Focus sentinel"),n.createElement("div",{ref:g,className:`${d}--modal-container-body`},K,se),!A&&n.createElement("button",{type:"button",ref:W,className:`${d}--visually-hidden`},"Focus sentinel")))});Ee.propTypes={"aria-label":e.string,"aria-labelledby":e.string,children:e.node,className:e.string,containerClassName:e.string,danger:e.bool,isFullWidth:e.bool,launcherButtonRef:e.oneOfType([e.func,e.shape({current:e.any})]),onClose:e.func,onKeyDown:e.func,open:e.bool,preventCloseOnClickOutside:e.bool,selectorPrimaryFocus:e.string,selectorsFloatingMenus:e.arrayOf(e.string.isRequired),size:e.oneOf(["xs","sm","md","lg"]),slug:e.node};export{Ee as C,V as M,Ne as a,Y as b};
