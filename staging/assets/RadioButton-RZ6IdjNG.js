import{u as w,c as u,_ as P}from"./deprecate-D9ms-jbM.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as t,r as k}from"./index-BwDkhjyp.js";import{a as v}from"./events-Bq7WR1mU.js";import{m as L}from"./mergeRefs-CTUecegF.js";import{T as O}from"./Text-_TFgs5hl.js";const p=t.forwardRef((b,f)=>{var c;const{className:g,disabled:h,hideLabel:x,id:R,labelPosition:s="right",labelText:r="",name:l,onChange:$=()=>{},value:i="",slug:o,...C}=b,a=w(),E=v("radio-button"),d=R||E;function N(n){$(i,l,n)}const _=u(`${a}--radio-button__label-text`,{[`${a}--visually-hidden`]:x}),T=u(g,`${a}--radio-button-wrapper`,{[`${a}--radio-button-wrapper--label-${s}`]:s!=="right",[`${a}--radio-button-wrapper--slug`]:o}),y=k.useRef(null);let m;if(o&&t.isValidElement(o)){const n=((c=o.props)==null?void 0:c.kind)==="inline"?"md":"mini";m=t.cloneElement(o,{size:n})}return t.createElement("div",{className:T},t.createElement("input",P({},C,{type:"radio",className:`${a}--radio-button`,onChange:N,id:d,ref:L(y,f),disabled:h,value:i,name:l})),t.createElement("label",{htmlFor:d,className:`${a}--radio-button__label`},t.createElement("span",{className:`${a}--radio-button__appearance`}),r&&t.createElement(O,{className:_},r,m)))});p.displayName="RadioButton";p.propTypes={checked:e.bool,className:e.string,defaultChecked:e.bool,disabled:e.bool,hideLabel:e.bool,id:e.string,labelPosition:e.oneOf(["right","left"]),labelText:e.node.isRequired,name:e.string,onChange:e.func,onClick:e.func,slug:e.node,value:e.oneOfType([e.string,e.number])};export{p as R};