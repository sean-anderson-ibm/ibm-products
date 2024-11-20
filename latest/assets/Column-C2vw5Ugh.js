import{b as C,c as T,_ as g,z as F}from"./index-CO-HQMMN.js";import{P as e}from"./index-Dk74W0Oi.js";import{r as y,R as d}from"./index-BwDkhjyp.js";const x=y.createContext({mode:"flexbox",subgrid:!1}),O=r=>{let{children:o,mode:n,subgrid:a=!1}=r;const s=y.useMemo(()=>({mode:n,subgrid:a}),[n,a]);return y.createElement(x.Provider,{value:s},o)},S=["flexbox","css-grid"];O.propTypes={children:e.node,mode:e.oneOf(S).isRequired,subgrid:e.bool};const j=()=>y.useContext(x);function G(r){let{as:o="div",condensed:n=!1,narrow:a=!1,fullWidth:s=!1,className:t,children:l,...c}=r;const i=C(),p=T(t,{[`${i}--grid`]:!0,[`${i}--grid--condensed`]:n,[`${i}--grid--narrow`]:a,[`${i}--grid--full-width`]:s}),f=o;return d.createElement(O,{mode:"flexbox",subgrid:!1},d.createElement(f,g({className:p},c),l))}G.propTypes={as:e.oneOfType([e.string,e.elementType]),children:e.node,className:e.string,condensed:e.bool,fullWidth:e.bool,narrow:e.bool};const W=G;function v(r){let{as:o="div",children:n,className:a,sm:s,md:t,lg:l,xlg:c,max:i,...p}=r;const{mode:f}=j(),u=C();if(f==="css-grid")return d.createElement(B,g({as:o,className:a,sm:s,md:t,lg:l,xlg:c,max:i},p),n);const b=k([s,t,l,c,i],u),h=T(a,b,{[`${u}--col`]:b.length===0}),N=o;return d.createElement(N,g({className:h},p),n)}const $=e.oneOf(["25%","50%","75%","100%"]),m=F("enable-css-grid")?e.oneOfType([e.bool,e.number,e.shape({span:e.oneOfType([e.number,$]),offset:e.number,start:e.number,end:e.number}),$]):e.oneOfType([e.bool,e.number,e.shape({span:e.number,offset:e.number})]);v.propTypes={as:e.oneOfType([e.string,e.elementType]),children:e.node,className:e.string,lg:m,max:m,md:m,sm:m,span:e.oneOfType([e.number,$]),xlg:m};function B(r){let{as:o="div",children:n,className:a,sm:s,md:t,lg:l,xlg:c,max:i,span:p,...f}=r;const u=C(),b=P([s,t,l,c,i],u),h=w(p,u),N=T(a,b,h,{[`${u}--css-grid-column`]:!0});return d.createElement(o,g({className:N},f),n)}B.propTypes={as:e.oneOfType([e.string,e.elementType]),children:e.node,className:e.string,lg:m,max:m,md:m,sm:m,span:e.oneOfType([e.number,$,e.shape({span:e.oneOfType([e.number,$]),start:e.number,end:e.number})]),xlg:m};const E=["sm","md","lg","xlg","max"];function P(r,o){const n=[];for(let a=0;a<r.length;a++){const s=r[a];if(s==null)continue;const t=E[a];if(s===!0){n.push(`${o}--${t}:col-span-auto`);continue}if(typeof s=="string"){n.push(`${o}--${t}:col-span-${s.replace("%","")}`);continue}if(typeof s=="number"){n.push(`${o}--${t}:col-span-${s}`);continue}if(typeof s=="object"){const{span:l,offset:c,start:i,end:p}=s;if(typeof c=="number"&&n.push(`${o}--${t}:col-start-${c>0?c+1:"auto"}`),typeof i=="number"&&n.push(`${o}--${t}:col-start-${i||"auto"}`),typeof p=="number"&&n.push(`${o}--${t}:col-end-${p}`),typeof l=="number")n.push(`${o}--${t}:col-span-${l}`);else if(typeof l=="string"){n.push(`${o}--${t}:col-span-${l.slice(0,-1)}`);continue}}}return n.join(" ")}function k(r,o){const n=[];for(let a=0;a<r.length;a++){const s=r[a];if(s==null)continue;const t=E[a];if(s===!0){n.push(`${o}--col-${t}`);continue}if(typeof s=="number"){n.push(`${o}--col-${t}-${s}`);continue}if(typeof s=="object"){const{span:l,offset:c}=s;typeof l=="number"&&n.push(`${o}--col-${t}-${l}`),l===!0&&n.push(`${o}--col-${t}`),typeof c=="number"&&n.push(`${o}--offset-${t}-${c}`)}}return n.join(" ")}function w(r,o){const n=[];if(typeof r=="number")n.push(`${o}--col-span-${r}`);else if(typeof r=="string")n.push(`${o}--col-span-${r.slice(0,-1)}`);else if(typeof r=="object"){const{span:a,start:s,end:t}=r;a!=null&&n.push(`${o}--col-span-${a}`),s!=null&&n.push(`${o}--col-start-${s}`),t!=null&&n.push(`${o}--col-end-${t}`)}return n.join("")}export{v as C,W as F,O as G,j as u};
