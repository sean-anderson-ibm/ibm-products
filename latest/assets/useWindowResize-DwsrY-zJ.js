import{u as H,e as V,w as Z,x as ee,y as te,z as ne,a as _,j as se,c as k,A as oe,_ as M,i as L,B as ae,o as re,S as ie,b as le,f as ce,s as ue}from"./floating-ui.dom.mjs-BB6krl5l.js";import{P as e}from"./index-Dk74W0Oi.js";import{r as t,R as n}from"./index-BwDkhjyp.js";import{u as U}from"./useControllableState-DwpxGhsf.js";import{M as P,u as de,a as J,b as me}from"./useAttachedMenu-CHvJfzq1.js";import{T as fe}from"./Text-XRl1lg-_.js";import{f as pe,g as ge,C as Q,d as he}from"./events-b0qlIvq_.js";import{B as be}from"./settings-GP6q6PuD.js";import{m as we}from"./mergeRefs-CTUecegF.js";var j,G;const W=t.forwardRef(function(l,a){let{children:o,className:c,disabled:r,kind:s="default",label:w,onClick:p,renderIcon:d,shortcut:C,...g}=l;const[u,h]=t.useState(!1),[y,x]=t.useState(!1),{refs:b,floatingStyles:m,context:N}=H({open:u,onOpenChange:h,placement:y?"left-start":"right-start",whileElementsMounted:V,middleware:[Z({mainAxis:-6,crossAxis:-6})]}),{getReferenceProps:$,getFloatingProps:D}=ee([te(N,{delay:100,enabled:!0,handleClose:ne({requireIntent:!1})})]),f=_(),R=t.useContext(P),S=t.useRef(null),O=se([a,S,b.setReference]),I=!!o,T=r&&!I,A=s==="danger"&&!I;function B(){R.dispatch({type:"registerItem",payload:{ref:S,disabled:!!r}})}function v(){S.current&&h(!0)}function q(){h(!1)}function z(i){T||(I?v():(R.state.requestCloseRoot(i),p&&p(i)))}function X(i){I&&L(i,ae)&&(v(),i.stopPropagation()),(L(i,re)||L(i,ie))&&z(i),g.onKeyDown&&g.onKeyDown(i)}const Y=k(c,`${f}--menu-item`,{[`${f}--menu-item--disabled`]:T,[`${f}--menu-item--danger`]:A});t.useEffect(()=>{B()},[]);const{direction:K}=de();t.useEffect(()=>{(document==null?void 0:document.dir)==="rtl"||K==="rtl"?x(!0):x(!1)},[K]);const F=R.state.mode==="basic"||g.role==="menuitemcheckbox"||g.role==="menuitemradio";return t.useEffect(()=>{F&&d&&!R.state.hasIcons&&R.dispatch({type:"enableIcons"})},[F,d,R.state.hasIcons,R]),t.useEffect(()=>{Object.keys(m).forEach(i=>{b.floating.current&&i!=="position"&&(b.floating.current.style[i]=m[i])})},[m,b.floating]),n.createElement(oe,{context:N,order:["reference","floating"],modal:!1},n.createElement("li",M({role:"menuitem"},g,{ref:O,className:Y,tabIndex:-1,"aria-disabled":T??void 0,"aria-haspopup":I??void 0,"aria-expanded":I?u:void 0,onClick:z,onKeyDown:X},$()),n.createElement("div",{className:`${f}--menu-item__icon`},F&&d&&n.createElement(d,null)),n.createElement(fe,{as:"div",className:`${f}--menu-item__label`,title:w},w),C&&!I&&n.createElement("div",{className:`${f}--menu-item__shortcut`},C),I&&n.createElement(n.Fragment,null,n.createElement("div",{className:`${f}--menu-item__shortcut`},y?j||(j=n.createElement(pe,null)):G||(G=n.createElement(ge,null))),n.createElement(J,M({label:w,open:u,onClose:()=>{var i;q(),(i=S.current)==null||i.focus()},ref:b.setFloating},D()),o))))});W.propTypes={children:e.node,className:e.string,disabled:e.bool,kind:e.oneOf(["default","danger"]),label:e.string.isRequired,onClick:e.func,renderIcon:e.oneOfType([e.func,e.object]),shortcut:e.string};const Ce=t.forwardRef(function(l,a){let{className:o,defaultSelected:c,label:r,onChange:s,selected:w,...p}=l;const d=_(),C=t.useContext(P);C.state.mode;const[g,u]=U({value:w,onChange:s,defaultValue:c??!1});function h(x){u(!g),s&&s(x)}t.useEffect(()=>{C.state.hasIcons||C.dispatch({type:"enableIcons"})},[C.state.hasIcons,C]);const y=k(o,`${d}--menu-item-selectable--selected`);return n.createElement(W,M({},p,{ref:a,label:r,className:y,role:"menuitemcheckbox","aria-checked":g,renderIcon:g?Q:void 0,onClick:h}))});Ce.propTypes={className:e.string,defaultSelected:e.bool,label:e.string.isRequired,onChange:e.func,selected:e.bool};const Ee=t.forwardRef(function(l,a){let{children:o,className:c,label:r,...s}=l;const w=_(),p=k(c,`${w}--menu-item-group`);return n.createElement("li",{className:p,role:"none",ref:a},n.createElement("ul",M({},s,{role:"group","aria-label":r}),o))});Ee.propTypes={children:e.node,className:e.string,label:e.string.isRequired};const ye=E=>E.toString(),Ie=t.forwardRef(function(l,a){let{className:o,defaultSelectedItem:c,items:r,itemToString:s=ye,label:w,onChange:p,selectedItem:d,...C}=l;const g=_(),u=t.useContext(P);u.state.mode;const[h,y]=U({value:d,onChange:p,defaultValue:c});function x(m,N){y(m),p&&p(N)}t.useEffect(()=>{u.state.hasIcons||u.dispatch({type:"enableIcons"})},[u.state.hasIcons,u]);const b=k(o,`${g}--menu-item-radio-group`);return n.createElement("li",{className:b,role:"none",ref:a},n.createElement("ul",M({},C,{role:"group","aria-label":w}),r.map((m,N)=>n.createElement(W,{key:N,label:s(m),role:"menuitemradio","aria-checked":m===h,renderIcon:m===h?Q:void 0,onClick:$=>{x(m,$)}}))))});Ie.propTypes={className:e.string,defaultSelectedItem:e.any,itemToString:e.func,items:e.array,label:e.string.isRequired,onChange:e.func,selectedItem:e.any};const xe=t.forwardRef(function(l,a){let{className:o,...c}=l;const r=_(),s=k(o,`${r}--menu-item-divider`);return n.createElement("li",M({},c,{className:s,role:"separator",ref:a}))});xe.propTypes={className:e.string};const Re=["primary","tertiary","ghost"],Ne="primary",ke=t.forwardRef(function(l,a){let{children:o,className:c,disabled:r,kind:s=Ne,label:w,size:p="lg",menuAlignment:d="bottom",tabIndex:C=0,...g}=l;const u=le("MenuButton"),h=_(),y=t.useRef(null),x=[ce({crossAxis:!1})];(d==="bottom"||d==="top")&&x.push(ue({apply(v){let{rects:q,elements:z}=v;Object.assign(z.floating.style,{width:`${q.reference.width}px`})}}));const{refs:b,floatingStyles:m,placement:N,middlewareData:$}=H({placement:d,strategy:"fixed",middleware:x,whileElementsMounted:V}),D=we(a,y),{open:f,handleClick:R,handleMousedown:S,handleClose:O}=me(y);t.useLayoutEffect(()=>{Object.keys(m).forEach(v=>{b.floating.current&&(b.floating.current.style[v]=m[v])})},[m,b.floating,$,N,f]);function I(){y.current&&R()}const T=k(`${h}--menu-button__container`,c),A=k(`${h}--menu-button__trigger`,{[`${h}--menu-button__trigger--open`]:f}),B=k(`${h}--menu-button__${d}`);return n.createElement("div",M({},g,{ref:D,"aria-owns":f?u:void 0,className:T}),n.createElement(be,{ref:b.setReference,className:A,size:p,tabIndex:C,kind:s,renderIcon:he,disabled:r,"aria-haspopup":!0,"aria-expanded":f,onClick:I,onMouseDown:S,"aria-controls":f?u:void 0},w),n.createElement(J,{containerRef:y,menuAlignment:d,className:B,ref:b.setFloating,id:u,legacyAutoalign:!1,label:w,mode:"basic",size:p,open:f,onClose:O},o))});ke.propTypes={children:e.node.isRequired,className:e.string,disabled:e.bool,kind:e.oneOf(Re),label:e.string.isRequired,menuAlignment:e.oneOf(["top","top-start","top-end","bottom","bottom-start","bottom-end"]),size:e.oneOf(["sm","md","lg"]),tabIndex:e.number};const ve=typeof window<"u",Me=()=>{if(!ve)return{innerHeight:0,innerWidth:0,outerHeight:0,outerWidth:0};const{innerHeight:E,innerWidth:l,outerHeight:a,outerWidth:o}={...window};return{innerHeight:E,innerWidth:l,outerHeight:a,outerWidth:o}},qe=(E,l,a=0)=>{const o=t.useRef({}),c=t.useRef(null),r=()=>{const s={previous:o.current,current:Me()};E(s),o.current=s.current,c.current=null};t.useLayoutEffect(()=>{const s=()=>{a?c.current===null&&(c.current=setTimeout(r,a)):r()};return window.addEventListener("resize",s),r(),()=>window.removeEventListener("resize",s)},l)};export{ke as M,W as a,qe as u};
