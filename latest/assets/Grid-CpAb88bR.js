import{P as e}from"./index-Dk74W0Oi.js";import{R as s}from"./index-BwDkhjyp.js";import{b as f,_ as u,c as b,u as T}from"./index-CO-HQMMN.js";import{u as $,G as p,F as h}from"./Column-C2vw5Ugh.js";function w(n){let{align:d,as:i="div",children:c,className:r,condensed:l=!1,fullWidth:t=!1,narrow:m=!1,...g}=n;const o=f(),{subgrid:y}=$();let a="wide";if(m?a="narrow":l&&(a="condensed"),y)return s.createElement(p,{mode:"css-grid",subgrid:!0},s.createElement(C,u({as:i,className:r,mode:a},g),c));const S=b(r,{[`${o}--css-grid`]:!0,[`${o}--css-grid--condensed`]:a==="condensed",[`${o}--css-grid--narrow`]:a==="narrow",[`${o}--css-grid--full-width`]:t,[`${o}--css-grid--start`]:d==="start",[`${o}--css-grid--end`]:d==="end"}),N=i;return s.createElement(p,{mode:"css-grid",subgrid:!0},s.createElement(N,u({className:S},g),c))}w.propTypes={align:e.oneOf(["start","center","end"]),as:e.oneOfType([e.string,e.elementType]),children:e.node,className:e.string,condensed:e.bool,fullWidth:e.bool,narrow:e.bool};const C=n=>{let{as:d="div",className:i,children:c,mode:r,...l}=n;const t=f(),m=b(i,{[`${t}--subgrid`]:!0,[`${t}--subgrid--condensed`]:r==="condensed",[`${t}--subgrid--narrow`]:r==="narrow",[`${t}--subgrid--wide`]:r==="wide"});return s.createElement(d,u({},l,{className:m}),c)};C.propTypes={as:e.oneOfType([e.string,e.elementType]),children:e.node,className:e.string,mode:e.oneOf(["wide","narrow","condensed"])};const x=w;function G(n){return T("enable-css-grid")?s.createElement(x,n):s.createElement(h,n)}G.propTypes={align:e.oneOf(["start","center","end"]),as:e.oneOfType([e.string,e.elementType]),children:e.node,className:e.string,condensed:e.bool,fullWidth:e.bool,narrow:e.bool};const B=G;export{B as G};
