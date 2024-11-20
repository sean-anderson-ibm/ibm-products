import{b as z,j as xe,c as v,_ as Ne,e as we}from"./index-CO-HQMMN.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as r,r as f}from"./index-BwDkhjyp.js";import{u as Ee}from"./useNormalizedInputProps-BXOXUZo5.js";import{F as Ie}from"./FormContext-C7kRVu4t.js";import{T as ne}from"./Text-DeIkfaUm.js";import{S as Ce}from"./bucket-16-C765DF6-.js";import{A as Te}from"./bucket-0-a_zZqU1p.js";var X,Y;const Z={"increment.number":"increment.number","decrement.number":"decrement.number"},Fe={[Z["increment.number"]]:"Increment number",[Z["decrement.number"]]:"Decrement number"},Le=r.forwardRef(function(c,u){var G,J;const{allowEmpty:i=!1,className:s,disabled:l=!1,disableWheel:x=!1,defaultValue:h=0,helperText:O="",hideLabel:W=!1,hideSteppers:k,iconDescription:N,id:L,label:re,invalid:le=!1,invalidText:ie,light:se,max:w,min:E,onChange:I,onClick:V,onKeyUp:oe,readOnly:m,size:B="md",slug:d,step:C=1,translateWithId:D=n=>Fe[n],warn:ue=!1,warnText:de="",value:b,...g}=c,t=z(),{isFluid:p}=f.useContext(Ie),[ce,M]=f.useState(!1),[S,T]=f.useState(()=>b!==void 0?b:h!==void 0?h:i?"":0),[me,be]=f.useState(b),_=f.useRef(null),pe=xe([u,_]),fe=v({[`${t}--number`]:!0,[`${t}--number--helpertext`]:!0,[`${t}--number--readonly`]:m,[`${t}--number--light`]:se,[`${t}--number--nolabel`]:W,[`${t}--number--nosteppers`]:k,[`${t}--number--${B}`]:B}),ve=Ve({allowEmpty:i,invalid:le,value:S,max:w,min:E}),a=Ee({id:L,readOnly:m,disabled:l,invalid:!ve,invalidText:ie,warn:ue,warnText:de}),[K,U]=[D("increment.number"),D("decrement.number")],he=v(`${t}--number__input-wrapper`,{[`${t}--number__input-wrapper--warning`]:a.warn,[`${t}--number__input-wrapper--slug`]:d}),ge=v({[`${t}--number__invalid`]:a.invalid||a.warn,[`${t}--number__invalid--warning`]:a.warn});b!==me&&(T(b),be(b));let F;a.invalid&&(F=a.invalidId),a.warn&&(F=a.warnId),a.validation||(F=O?a.helperId:void 0);function _e(n){if(l)return;const y={value:i&&n.target.value===""?"":Number(n.target.value),direction:S<n.target.value?"up":"down"};T(y.value),I&&I(n,y)}const j=n=>{"type"in n.target&&n.target.type==="button"?M(!1):M(n.type==="focus")},ye=v(`${t}--form-item`,{[s]:!!s,[`${t}--number-input--fluid--invalid`]:p&&a.invalid,[`${t}--number-input--fluid--focus`]:p&&ce,[`${t}--number-input--fluid--disabled`]:p&&l}),q=a.icon;function H(n,y){if(_.current){const Q=Number(_.current.value);let $=y==="up"?Q+C:Q-C;E!==void 0&&($=Math.max($,E)),w!==void 0&&($=Math.min($,w));const $e=_.current?_.current.value:"",P={value:i&&$e===""&&C===0?"":$,direction:y};T(P.value),I&&I(n,P),V&&V(n,P)}}let R;d&&((G=d.type)==null?void 0:G.displayName)==="AILabel"&&(R=r.cloneElement(d,{size:"mini"}));let A;return d&&((J=d.type)==null?void 0:J.displayName)==="AILabel"&&(A=R.props.revertActive),f.useEffect(()=>{!A&&d&&h&&T(h)},[h,A,d]),r.createElement("div",{className:ye,onFocus:p?j:void 0,onBlur:p?j:void 0},r.createElement("div",{className:fe,"data-invalid":a.invalid?!0:void 0},r.createElement(te,{disabled:a.disabled,hideLabel:W,id:L,label:re}),r.createElement("div",{className:he},r.createElement("input",Ne({},g,{"data-invalid":a.invalid?!0:void 0,"aria-invalid":a.invalid,"aria-describedby":F,"aria-readonly":m,disabled:a.disabled,ref:pe,id:L,max:w,min:E,onClick:V,onChange:_e,onKeyUp:oe,onFocus:n=>{x&&n.target.addEventListener("wheel",ee),g.onFocus&&g.onFocus(n)},onBlur:n=>{x&&n.target.removeEventListener("wheel",ee),g.onBlur&&g.onBlur(n)},pattern:"[0-9]*",readOnly:m,step:C,type:"number",value:S})),R,q?r.createElement(q,{className:ge}):null,!k&&r.createElement("div",{className:`${t}--number__controls`},r.createElement("button",{"aria-label":U||N,className:`${t}--number__control-btn down-icon`,disabled:l||m,onClick:n=>H(n,"down"),tabIndex:-1,title:U||N,type:"button"},X||(X=r.createElement(Ce,{className:"down-icon"}))),r.createElement("div",{className:`${t}--number__rule-divider`}),r.createElement("button",{"aria-label":K||N,className:`${t}--number__control-btn up-icon`,disabled:l||m,onClick:n=>H(n,"up"),tabIndex:-1,title:K||N,type:"button"},Y||(Y=r.createElement(Te,{className:"up-icon"}))),r.createElement("div",{className:`${t}--number__rule-divider`}))),p&&r.createElement("hr",{className:`${t}--number-input__divider`}),a.validation?a.validation:r.createElement(ae,{id:a.helperId,disabled:l,description:O})))});Le.propTypes={allowEmpty:e.bool,className:e.string,defaultValue:e.oneOfType([e.number,e.string]),disableWheel:e.bool,disabled:e.bool,helperText:e.node,hideLabel:e.bool,hideSteppers:e.bool,iconDescription:e.string,id:e.string.isRequired,invalid:e.bool,invalidText:e.node,label:e.node,light:we(e.bool),max:e.number,min:e.number,onChange:e.func,onClick:e.func,onKeyUp:e.func,readOnly:e.bool,size:e.oneOf(["sm","md","lg"]),slug:e.node,step:e.number,translateWithId:e.func,value:e.oneOfType([e.number,e.string]),warn:e.bool,warnText:e.node};const te=o=>{let{disabled:c,id:u,hideLabel:i,label:s}=o;const l=z(),x=v({[`${l}--label`]:!0,[`${l}--label--disabled`]:c,[`${l}--visually-hidden`]:i});return s?r.createElement(ne,{as:"label",htmlFor:u,className:x},s):null};te.propTypes={disabled:e.bool,hideLabel:e.bool,id:e.string,label:e.node};function ae(o){let{disabled:c,description:u,id:i}=o;const s=z(),l=v(`${s}--form__helper-text`,{[`${s}--form__helper-text--disabled`]:c});return u?r.createElement(ne,{as:"div",id:i,className:l},u):null}ae.propTypes={description:e.node,disabled:e.bool,id:e.string};function Ve(o){let{allowEmpty:c,invalid:u,value:i,max:s,min:l}=o;return u?!1:i===""?c:!(i>s||i<l)}function ee(o){o.preventDefault()}export{Le as N};
