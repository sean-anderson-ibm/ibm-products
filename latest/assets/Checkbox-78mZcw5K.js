import{b as W,d as L,c as f,_ as P}from"./index-CO-HQMMN.js";import{P as a}from"./index-Dk74W0Oi.js";import{R as n}from"./index-BwDkhjyp.js";import{n as z}from"./settings-9_3hiHpE.js";import{T as O}from"./Text-DeIkfaUm.js";import{W as A,a as D}from"./bucket-18-BI__9nmH.js";const k=n.forwardRef((u,i)=>{var x;let{className:g,helperText:c,id:s,labelText:$,onChange:d=z,onClick:m,indeterminate:v=!1,invalid:r,invalidText:w,hideLabel:E,readOnly:t,title:N="",warn:p,warnText:T,slug:o,..._}=u;const e=W(),h=!t&&!r&&p,C=!r&&!p,y=L(),F=c?`checkbox-helper-text-${y}`:void 0,R=c?n.createElement("div",{id:F,className:`${e}--form__helper-text`},c):null,q=f(`${e}--form-item`,`${e}--checkbox-wrapper`,g,{[`${e}--checkbox-wrapper--readonly`]:t,[`${e}--checkbox-wrapper--invalid`]:!t&&r,[`${e}--checkbox-wrapper--warning`]:h,[`${e}--checkbox-wrapper--slug`]:o}),I=f(`${e}--checkbox-label-text`,{[`${e}--visually-hidden`]:E});let b;if(o&&n.isValidElement(o)){const l=((x=o.props)==null?void 0:x.kind)==="inline"?"md":"mini";b=n.cloneElement(o,{size:l})}return n.createElement("div",{className:q},n.createElement("input",P({},_,{type:"checkbox","data-invalid":r?!0:void 0,onChange:l=>{!t&&d&&d(l,{checked:l.target.checked,id:s})},className:`${e}--checkbox`,id:s,ref:l=>{l&&(l.indeterminate=v??!1),typeof i=="function"?i(l):i&&"current"in i&&(i.current=l)},"aria-readonly":t,onClick:l=>{t&&l.preventDefault(),m&&m(l)}})),n.createElement("label",{htmlFor:s,className:`${e}--checkbox-label`,title:N},n.createElement(O,{className:I},$,b)),n.createElement("div",{className:`${e}--checkbox__validation-msg`},!t&&r&&n.createElement(n.Fragment,null,n.createElement(A,{className:`${e}--checkbox__invalid-icon`}),n.createElement("div",{className:`${e}--form-requirement`},w)),h&&n.createElement(n.Fragment,null,n.createElement(D,{className:`${e}--checkbox__invalid-icon ${e}--checkbox__invalid-icon--warning`}),n.createElement("div",{className:`${e}--form-requirement`},T))),C&&R)});k.propTypes={checked:a.bool,className:a.string,defaultChecked:a.bool,disabled:a.bool,helperText:a.node,hideLabel:a.bool,id:a.string.isRequired,indeterminate:a.bool,invalid:a.bool,invalidText:a.node,labelText:a.node.isRequired,onChange:a.func,readOnly:a.bool,slug:a.node,title:a.string,warn:a.bool,warnText:a.node};k.displayName="Checkbox";export{k as C};
