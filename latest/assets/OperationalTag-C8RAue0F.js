import{b as I,d as C,c as y,_ as d}from"./index-CO-HQMMN.js";import{P as e}from"./index-Dk74W0Oi.js";import{r,R as s}from"./index-BwDkhjyp.js";import{i as P,T as u,S as R}from"./Tag-CzJ1JcPE.js";import{T as S}from"./settings-9_3hiHpE.js";import{T as E}from"./Text-DeIkfaUm.js";const A={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray"},G=b=>{let{className:T,disabled:o,id:x,renderIcon:n,size:i,text:a,type:c="gray",...p}=b;const t=I(),l=r.useRef(),m=x||`tag-${C()}`,g=y(`${t}--tag--operational`,T),[N,O]=r.useState(!1);r.useLayoutEffect(()=>{var f;const $=(f=l.current)==null?void 0:f.getElementsByClassName(`${t}--tag__label`)[0];O(P($))},[t,l]);const _=y(`${t}--icon-tooltip`,`${t}--tag-label-tooltip`);return N?s.createElement(S,{label:a,align:"bottom",className:_,leaveDelayMs:0,onMouseEnter:()=>!1,closeOnActivation:!0},s.createElement(u,d({ref:l,type:c,size:i,renderIcon:n,disabled:o,className:g,id:m},p),s.createElement(E,{title:a,className:`${t}--tag__label`},a))):s.createElement(u,d({ref:l,type:c,size:i,renderIcon:n,disabled:o,className:g,id:m},p),s.createElement(E,{title:a,className:`${t}--tag__label`},a))};G.propTypes={className:e.string,disabled:e.bool,id:e.string,renderIcon:e.oneOfType([e.func,e.object]),size:e.oneOf(Object.keys(R)),text:e.string,type:e.oneOf(Object.keys(A))};export{G as O};
