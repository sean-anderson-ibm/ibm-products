import{u as G,c as N,_ as I,C as S,d as p,s as j}from"./deprecate-D9ms-jbM.js";import{P as t}from"./index-Dk74W0Oi.js";import{R as n}from"./index-BwDkhjyp.js";import{T as h}from"./Text-_TFgs5hl.js";var k;const R=j(),u={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"},B={sm:"sm",md:"md",lg:"lg"},w=x=>{var v;let{children:a,className:o,id:O,type:i,filter:y,renderIcon:r,title:f="Clear filter",disabled:m,onClose:$,size:l,as:C,slug:d,...c}=x;const e=G(),b=O||`tag-${R()}`,E=[`${e}--tag--selectable`,`${e}--tag--filter`,`${e}--tag--operational`].some(s=>o==null?void 0:o.includes(s)),T=N(`${e}--tag`,o,{[`${e}--tag--disabled`]:m,[`${e}--tag--filter`]:y,[`${e}--tag--${l}`]:l,[`${e}--layout--size-${l}`]:l,[`${e}--tag--${i}`]:i,[`${e}--tag--interactive`]:c.onClick&&!E}),_=i!==void 0&&i in Object.keys(u)?u[i]:"",P=s=>{$&&(s.stopPropagation(),$(s))};let g;if(d&&((v=d.type)==null?void 0:v.displayName)==="Slug"&&!E&&(g=n.cloneElement(d,{size:"sm",kind:"inline"})),y){const s=C??"div";return n.createElement(s,I({className:T,id:b},c),r&&l!=="sm"?n.createElement("div",{className:`${e}--tag__custom-icon`},n.createElement(r,null)):"",n.createElement(h,{className:`${e}--tag__label`,title:typeof a=="string"?a:void 0},a??_),g,n.createElement("button",{type:"button",className:`${e}--tag__close-icon`,onClick:P,disabled:m,"aria-label":f,title:f},k||(k=n.createElement(S,null))))}const z=C??(c.onClick||o!=null&&o.includes(`${e}--tag--operational`)?"button":"div");return n.createElement(z,I({disabled:m,className:T,id:b},c),r&&l!=="sm"?n.createElement("div",{className:`${e}--tag__custom-icon`},n.createElement(r,null)):"",n.createElement(h,null,a??_),g)};w.propTypes={as:t.elementType,children:t.node,className:t.string,disabled:t.bool,filter:p(t.bool),id:t.string,onClose:p(t.func),renderIcon:t.oneOfType([t.func,t.object]),size:t.oneOf(Object.keys(B)),slug:t.node,title:p(t.string),type:t.oneOf(Object.keys(u))};export{w as T};