import{p as c,j as a}from"./settings-DDDiKwEV.js";import{R as x,r as l}from"./index-BwDkhjyp.js";import{P as t}from"./index-Dk74W0Oi.js";import{c as g}from"./floating-ui.react-BgNs4SA8.js";import{S as R}from"./Search-DEO4IeZ8.js";import{g as S}from"./devtools-C7Iu0rt6.js";const r=`${c.prefix}--filter-panel-search`,o="FilterPanelSearch",T={searchProps:{}};let s=x.forwardRef(({children:i,className:p,searchProps:m=T.searchProps,...u},d)=>{const[h,n]=l.useState(!1);let e;const f=()=>{clearTimeout(e),e=setTimeout(()=>{n(!1)},300)},P=()=>{clearTimeout(e),n(!0)};return l.useEffect(()=>clearTimeout(e),[e]),a.jsxs("div",{...u,className:g(r,`${r}__container`,p),onBlur:f,onFocus:P,ref:d,...S(o),children:[a.jsx(R,{className:`${r}__input`,...m}),h&&!!i&&a.jsx("div",{className:`${r}__results`,children:i})]})});s=c.checkComponentEnabled(s,o);s.displayName=o;s.propTypes={children:t.node,className:t.string,searchProps:t.shape({labelText:t.string.isRequired}).isRequired};s.__docgenInfo={description:"An input field and container to show search results.",methods:[],displayName:"FilterPanelSearch",props:{searchProps:{defaultValue:{value:"{}",computed:!1},description:"Props specific to the internal `Search` component.",type:{name:"shape",value:{labelText:{name:"string",description:"The label text for the Search icon.",required:!0}}},required:!1},children:{description:"Provide the contents of the FilterPanelSearch.",type:{name:"node"},required:!1},className:{description:"Optional class to be applied to the containing node.",type:{name:"string"},required:!1}}};export{s as F};
