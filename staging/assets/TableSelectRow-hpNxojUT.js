import{u as x,c as g,_ as h,d as C}from"./useMergedRefs-DoviDd4t.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as l}from"./index-BwDkhjyp.js";import{I as k}from"./TableToolbar-gvgihfDM.js";import{R as I}from"./RadioButton-V5H6Fpn_.js";const L=s=>{let{ariaLabel:o,["aria-label"]:r,checked:n,id:c,name:d,onSelect:b,onChange:m,disabled:p,radio:a,className:t}=s;const i=x(),u={id:c,name:d,onClick:b,onChange:m,checked:n,disabled:p},f=a?I:k,R=g(`${i}--table-column-checkbox`,{...t&&{[t]:!0},[`${i}--table-column-radio`]:a});return l.createElement("td",{className:R,"aria-live":"off"},l.createElement(f,h({},u,a&&{labelText:r||o,hideLabel:!0},!a&&{"aria-label":r||o})))};L.propTypes={"aria-label":e.string,ariaLabel:C(e.string),checked:e.bool.isRequired,className:e.string,disabled:e.bool,id:e.string.isRequired,name:e.string.isRequired,onChange:e.func,onSelect:e.func.isRequired,radio:e.bool};export{L as T};
