import{u as E,f as O,_ as P,c as N,d as C,a as T,E as v}from"./useMergedRefs-DoviDd4t.js";import{P as t}from"./index-Dk74W0Oi.js";import{r as y,R as a}from"./index-BwDkhjyp.js";import{P as R,a as D}from"./index-8ToAQMOn.js";const k=i=>{let{align:l="bottom-start",className:p,children:d,definition:f,defaultOpen:m=!1,id:c,openOnHover:u,tooltipText:g,triggerClassName:b,...h}=i;const[o,e]=y.useState(m),r=E(),n=O(c);function x(s){o&&T(s,v)&&(s.stopPropagation(),e(!1))}return a.createElement(R,{align:l,className:p,dropShadow:!1,highContrast:!0,onMouseLeave:()=>{e(!1)},onMouseEnter:()=>{u&&e(!0)},onFocus:()=>{e(!0)},open:o},a.createElement("button",P({},h,{className:N(`${r}--definition-term`,b),"aria-controls":n,"aria-expanded":o,onBlur:()=>{e(!1)},onClick:()=>{e(!o)},onKeyDown:x,type:"button"}),d),a.createElement(D,{className:`${r}--definition-tooltip`,id:n},g??f))};k.propTypes={align:t.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top","top-start","top-end","bottom-start","bottom-end","left-end","left-start","right-end","right-start"]),children:t.node.isRequired,className:t.string,defaultOpen:t.bool,definition:t.node.isRequired,id:t.string,openOnHover:t.bool,tooltipText:C(t.node),triggerClassName:t.string};export{k as D};
