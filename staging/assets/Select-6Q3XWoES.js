import{u as Y,c as o,_ as Z,d as ee,s as le}from"./deprecate-D9ms-jbM.js";import{P as l}from"./index-Dk74W0Oi.js";import{R as s,r as p}from"./index-BwDkhjyp.js";import{F as se}from"./FormContext-C7kRVu4t.js";import{j as te,k as ae}from"./events-Bq7WR1mU.js";import{T as v}from"./Text-_TFgs5hl.js";import{W as ne,a as re}from"./bucket-17-CArjO86K.js";const ie=le(),C=s.forwardRef(function(F,I){var T;let{className:S,id:f,inline:r=!1,labelText:D="Select",disabled:c=!1,children:A,noLabel:R=!1,hideLabel:z=!1,invalid:a=!1,invalidText:L="",helperText:$="",light:O=!1,readOnly:d,size:g,warn:m=!1,warnText:P,onChange:K,slug:u,...W}=F;const e=Y(),{isFluid:n}=p.useContext(se),[k,q]=p.useState(!1),[H,j]=p.useState(""),{current:B}=p.useRef(ie()),G=o({[`${e}--select`]:!0,[`${e}--select--inline`]:r,[`${e}--select--light`]:O,[`${e}--select--invalid`]:a,[`${e}--select--disabled`]:c,[`${e}--select--readonly`]:d,[`${e}--select--warning`]:m,[`${e}--select--fluid--invalid`]:n&&a,[`${e}--select--fluid--focus`]:n&&k,[`${e}--select--slug`]:u}),M=o(`${e}--label`,{[`${e}--visually-hidden`]:z,[`${e}--label--disabled`]:c}),U=o({[`${e}--select-input`]:!0,[`${e}--select-input--${g}`]:g}),x=`${f}-error-msg`,V=(()=>{if(a)return L;if(m)return P})(),i=a||m?s.createElement(v,{as:"div",className:`${e}--form-requirement`,id:x},V):null,J=o(`${e}--form__helper-text`,{[`${e}--form__helper-text--disabled`]:c}),_=$?`select-helper-text-${B}`:void 0,y=$?s.createElement(v,{as:"div",id:_,className:J},$):null,b={};a?b["aria-describedby"]=x:!r&&!n&&(b["aria-describedby"]=y?_:void 0);const E=t=>{q(t.type==="focus")},Q=t=>{var h;j((h=t==null?void 0:t.target)==null?void 0:h.value)},X={onMouseDown:t=>{d&&(t.preventDefault(),t.target.focus())},onKeyDown:t=>{d&&["ArrowDown","ArrowUp"," "].includes(t.key)&&t.preventDefault()}};let w;u&&((T=u.type)==null?void 0:T.displayName)==="Slug"&&(w=s.cloneElement(u,{size:"mini"}));const N=s.createElement(s.Fragment,null,s.createElement("select",Z({},W,b,{id:f,className:U,disabled:c||void 0,"aria-invalid":a||void 0,"aria-readonly":d||void 0,title:H,onChange:te([K,Q])},X,{ref:I}),A),s.createElement(ae,{className:`${e}--select__arrow`}),a&&s.createElement(ne,{className:`${e}--select__invalid-icon`}),!a&&m&&s.createElement(re,{className:`${e}--select__invalid-icon ${e}--select__invalid-icon--warning`}));return s.createElement("div",{className:o(`${e}--form-item`,S)},s.createElement("div",{className:G},!R&&s.createElement(v,{as:"label",htmlFor:f,className:M},D),r&&s.createElement("div",{className:`${e}--select-input--inline__wrapper`},s.createElement("div",{className:`${e}--select-input__wrapper`,"data-invalid":a||null},N),i),!r&&s.createElement("div",{className:`${e}--select-input__wrapper`,"data-invalid":a||null,onFocus:E,onBlur:E},N,w,n&&s.createElement("hr",{className:`${e}--select__divider`}),n&&i?i:null),!r&&!n&&i?i:y))});C.displayName="Select";C.propTypes={children:l.node,className:l.string,defaultValue:l.any,disabled:l.bool,helperText:l.node,hideLabel:l.bool,id:l.string.isRequired,inline:l.bool,invalid:l.bool,invalidText:l.node,labelText:l.node,light:ee(l.bool),noLabel:l.bool,onChange:l.func,readOnly:l.bool,size:l.oneOf(["sm","md","lg"]),slug:l.node,warn:l.bool,warnText:l.node};export{C as S};