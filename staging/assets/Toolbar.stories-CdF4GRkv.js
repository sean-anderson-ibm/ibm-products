import{j as e,p as D,I as U}from"./settings-DDDiKwEV.js";import{c as I,L as G,M as X}from"./floating-ui.react-BgNs4SA8.js";import{D as V}from"./Dropdown-kl0VN08K.js";import{O as H,a as g}from"./index-D9ju4W2A.js";import{r as a}from"./index-BwDkhjyp.js";import{useMDXComponents as E}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-BO9OClxn.js";import{e as R,i as _,C as K}from"./index-Ypkytheb.js";import{p}from"./index-Dk74W0Oi.js";import{g as W}from"./getFocusableElements-BW7cf991.js";import{g as J}from"./devtools-C7Iu0rt6.js";import{c as Q,e as Y,R as q,f as ee}from"./bucket-14-BmSAzvkd.js";import{e as oe,c as ne}from"./bucket-17-B2E3mTyd.js";import{P as re,b as te,c as se}from"./bucket-13-DEUQBRGC.js";import{Z as A,e as O}from"./bucket-18-D_XNNF5i.js";import{b as ie}from"./bucket-10-CePHAp3M.js";import{d as ae}from"./bucket-0-Cw-xsoio.js";import{a as S}from"./bucket-12-C33cLYA1.js";import{b as ce,c as le}from"./bucket-16-DFCeQRVG.js";import{T as pe}from"./bucket-15-DqJqYgDY.js";import{O as de,a as me,M as xe}from"./bucket-11-QofEwuwf.js";import{c as ue}from"./bucket-5-BlAGcMmC.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Dp3Lalez.js";import"./index-BLdp044m.js";import"./index-BONylQH5.js";import"./index-C7XzgV7l.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-B4_xh3D5.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./Text-DpcC0Z3Y.js";import"./index-BK1SMh4y.js";import"./useAttachedMenu-Ba8a--1h.js";import"./wrapFocus-CuszVIVc.js";import"./iframe-DqqWLuMW.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";const{checkComponentEnabled:je,prefix:he}=D,T=`${he}--toolbar`,M=a.createContext({});let m=a.forwardRef(({children:t,className:o,vertical:c,...x},n)=>{const f=a.useRef(),d=a.useCallback(()=>f.current,[f]),b=a.useRef(null),u=n||b,[h,z]=a.useState(-1);a.useEffect(()=>{var i;f.current=W(u==null?void 0:u.current),h!==-1&&((i=d())==null||i.forEach((l,j)=>{l[j!==h?"setAttribute":"removeAttribute"]("tabindex","-1")}))}),a.useEffect(()=>{var i;h!==-1&&((i=d())==null||i[h].focus())},[h,d]);const[F,B]=c?["ArrowDown","ArrowUp"]:["ArrowRight","ArrowLeft"];function C(i){var j;const l=h+i;(j=d())!=null&&j[l]&&z(l)}function Z({target:i}){const l=d();l!=null&&l.includes(i)&&z(l.indexOf(i))}function L({key:i,target:l}){var j;if((j=d())!=null&&j.includes(l))switch(i){case F:C(1);break;case B:C(-1);break}}return e.jsx("div",{...x,ref:u,className:I(T,o,{[`${T}--vertical`]:c}),onFocus:Z,onKeyDown:L,...c&&{"aria-orientation":"vertical"},...J(y),role:"toolbar",children:e.jsx(M.Provider,{value:{vertical:c},children:t})})});const y="Toolbar";m.displayName=y;m.propTypes={children:p.node.isRequired,className:p.string,vertical:p.bool};m=je(m,y);m.__docgenInfo={description:"Toolbars are a collection of action items that organize a program’s interaction patterns into a series of closely related commands.",methods:[],displayName:"Toolbar",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},vertical:{required:!1,tsType:{name:"boolean"},description:"Determines whether the `Toolbar` is rendered vertically",type:{name:"custom",raw:"bool"}},children:{description:"Provide the content of the `Toolbar`",type:{name:"node"},required:!0}}};const N=`${T}__button`;let r=a.forwardRef(({caret:t=!1,children:o,className:c,renderIcon:x,iconDescription:n="",...f},d)=>{var u;const b=x;return e.jsx(U,{align:(u=a.useContext(M))!=null&&u.vertical?"right":"top",...f,label:n,ref:d,className:I(c,{[`${N}--caret`]:t}),kind:"ghost",size:"md",children:e.jsxs(e.Fragment,{children:[b?e.jsx(b,{}):null,o,t&&e.jsx("span",{className:`${N}__caret`})]})})});const k="ToolbarButton";r.displayName=k;r.propTypes={caret:p.bool,children:p.node,className:p.string,iconDescription:p.string.isRequired,renderIcon:p.func.isRequired};r=D.checkComponentEnabled(r,k);r.__docgenInfo={description:"Toolbar buttons are common functions performed as part of a products interface or an open window.",methods:[],displayName:"ToolbarButton",props:{caret:{required:!1,tsType:{name:"boolean"},description:"Determines whether the caret is rendered",defaultValue:{value:"false",computed:!1},type:{name:"custom",raw:"bool"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}},iconDescription:{required:!1,tsType:{name:"string"},description:"Specifies the label for the icon button",defaultValue:{value:"''",computed:!1},type:{name:"string"}},renderIcon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Specifies the icon to be used by the ToolbarButton component",type:{name:"func"}},children:{description:"Provide the content of the `ToolbarButton`",type:{name:"custom",raw:"node"},required:!1}}};let s=a.forwardRef(({className:t,children:o,...c},x)=>e.jsx("div",{...c,ref:x,className:I(`${T}__group`,t),children:o}));const $="ToolbarGroup";s.displayName=$;s.propTypes={children:p.node.isRequired,className:p.string};s=D.checkComponentEnabled(s,$);s.__docgenInfo={description:"Toolbar groups organize the commands within a toolbar into related groups.",methods:[],displayName:"ToolbarGroup",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Provide the content of the `ToolbarGroup`",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node",type:{name:"custom",raw:"string"}}}};function P(t){const o={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...E(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"toolbar",children:"Toolbar"}),`
`,e.jsx(o.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#overview",children:"Overview"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#example-usage",children:"Example usage"})}),`
`,e.jsx(o.li,{children:e.jsx(o.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,e.jsx(o.h2,{id:"overview",children:"Overview"}),`
`,`
`,e.jsx(o.h2,{id:"example-usage",children:"Example usage"}),`
`,`
`,e.jsx(o.h3,{id:"default",children:"Default"}),`
`,e.jsx(R,{children:e.jsx(_,{of:v})}),`
`,e.jsx(o.h3,{id:"with-image",children:"With Image"}),`
`,e.jsx(R,{children:e.jsx(_,{of:w})}),`
`,e.jsx(o.h2,{id:"code-sample",children:"Code sample"}),`
`,`
`,e.jsx(o.h2,{id:"component-api",children:"Component API"}),`
`,e.jsx(K,{})]})}function fe(t={}){const{wrapper:o}={...E(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(P,{...t})}):P(t)}const ao={title:"Experimental/Patterns/Toolbars/Toolbar",component:m,tags:["autodocs"],parameters:{docs:{page:fe}},argTypes:{vertical:{control:"boolean"}}};function v(t){const o=["11","12","14","16","18"],[c,x]=a.useState(o[o.length/2|0]);return e.jsxs(m,{...t,children:[e.jsxs(s,{children:[e.jsx(r,{iconDescription:"Save",renderIcon:n=>e.jsx(Q,{size:16,...n})}),e.jsx(r,{iconDescription:"Share",renderIcon:n=>e.jsx(Y,{size:16,...n})}),e.jsx(r,{iconDescription:"Upload",renderIcon:n=>e.jsx(oe,{size:16,...n})}),e.jsx(r,{iconDescription:"Print",renderIcon:n=>e.jsx(re,{size:16,...n})})]}),e.jsxs(s,{children:[e.jsx(r,{iconDescription:"Undo",renderIcon:n=>e.jsx(ne,{size:16,...n})}),e.jsx(r,{iconDescription:"Redo",renderIcon:n=>e.jsx(te,{size:16,...n})}),e.jsx(r,{iconDescription:"Zoom in",renderIcon:n=>e.jsx(A,{size:16,...n})}),e.jsx(r,{iconDescription:"Zoom out",renderIcon:n=>e.jsx(O,{size:16,...n})}),e.jsx(r,{iconDescription:"Minimize",renderIcon:n=>e.jsx(ie,{size:16,...n})}),e.jsx(r,{iconDescription:"Align horizontal center",renderIcon:n=>e.jsx(ae,{size:16,...n})})]}),e.jsxs(s,{children:[e.jsx(r,{iconDescription:"Ruler",renderIcon:n=>e.jsx(q,{size:16,...n})}),e.jsx(r,{iconDescription:"Pin",renderIcon:n=>e.jsx(S,{size:16,...n})}),e.jsx(r,{iconDescription:"Copy file",renderIcon:n=>e.jsx(G,{size:16,...n})})]}),e.jsx(s,{children:e.jsx(V,{id:"dropdown",hideLabel:!0,titleText:"Font size",initialSelectedItem:c,items:o,label:c,onChange:({selectedItem:n})=>x(n)})}),e.jsx(s,{children:e.jsx(r,{iconDescription:"Text align center",renderIcon:n=>e.jsx(ce,{size:16,...n}),caret:!0})}),e.jsx(s,{children:e.jsxs(H,{"aria-label":"List",flipped:!0,children:[e.jsx(g,{itemText:"Color palette"}),e.jsx(g,{itemText:"Text creation"}),e.jsx(g,{itemText:"Bulleted list"}),e.jsx(g,{itemText:"Delete",hasDivider:!0,isDelete:!0})]})}),e.jsxs(s,{children:[e.jsx(r,{iconDescription:"Table",renderIcon:n=>e.jsx(pe,{size:16,...n})}),e.jsx(r,{iconDescription:"Settings adjust",renderIcon:n=>e.jsx(ee,{size:16,...n})})]})]})}v.args={vertical:!1};function w(t){return e.jsxs(m,{...t,children:[e.jsx(s,{children:e.jsx(r,{iconDescription:"Drag",renderIcon:o=>e.jsx(ue,{size:16,...o})})}),e.jsxs(s,{children:[e.jsx(r,{iconDescription:"Ruler",renderIcon:o=>e.jsx(q,{size:16,...o})}),e.jsx(r,{iconDescription:"Pin",renderIcon:o=>e.jsx(S,{size:16,...o})}),e.jsx(r,{iconDescription:"Color palette",renderIcon:o=>e.jsx(X,{size:16,...o})}),e.jsx(r,{iconDescription:"Text creation",renderIcon:o=>e.jsx(le,{size:16,...o})})]}),e.jsxs(s,{children:[e.jsx(r,{iconDescription:"Open panel left",renderIcon:o=>e.jsx(de,{size:16,...o})}),e.jsx(r,{iconDescription:"Open panel right",renderIcon:o=>e.jsx(me,{size:16,...o})})]}),e.jsxs(s,{children:[e.jsx(r,{iconDescription:"Move",renderIcon:o=>e.jsx(xe,{size:16,...o})}),e.jsx(r,{iconDescription:"Rotate",renderIcon:o=>e.jsx(se,{size:16,...o})})]}),e.jsxs(s,{children:[e.jsx(r,{iconDescription:"Zoom in",renderIcon:o=>e.jsx(A,{size:16,...o})}),e.jsx(r,{iconDescription:"Zoom out",renderIcon:o=>e.jsx(O,{size:16,...o})})]})]})}w.args={vertical:!0};v.__docgenInfo={description:"",methods:[],displayName:"_Toolbar"};w.__docgenInfo={description:"",methods:[],displayName:"vertical"};const co=["_Toolbar","vertical"];export{v as _Toolbar,co as __namedExportsOrder,ao as default,w as vertical};
