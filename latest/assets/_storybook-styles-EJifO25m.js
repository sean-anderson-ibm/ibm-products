import{R as e}from"./index-BwDkhjyp.js";import{P as s}from"./index-Dk74W0Oi.js";import{c as d,y as u}from"./index-CO-HQMMN.js";import{g as f}from"./devtools-7ohusRRR.js";import{p as n}from"./settings-9_3hiHpE.js";import{I as v}from"./InlineLoading-BdVs8Ys4.js";import{b as h}from"./bucket-6-DcTgwLU8.js";import{b as g}from"./bucket-2-Bt1jIBkN.js";const a=`${n.prefix}--status-indicator-step`,r="StatusIndicatorStep",E={status:"inactive"};let i=e.forwardRef(({className:c,description:l,errorMessage:o,status:t=E.status,...p},m)=>e.createElement("li",{...p,className:d(a,c,`${a}--${t}`),ref:m,...f(r)},e.createElement("div",{className:`${a}__details`},e.createElement("div",{className:`${a}__icon`},t==="inactive"&&e.createElement(u,{size:16,viewBox:"1 1 14 14"}),t==="active"&&e.createElement(v,null),t==="error"&&e.createElement(h,{size:16}),t==="finished"&&e.createElement(g,{size:16})),e.createElement("div",{className:`${a}__text`},l)),t==="error"&&o&&e.createElement("div",{className:`${a}__error-message`},o)));i=n.checkComponentEnabled(i,r);i.displayName=r;i.propTypes={className:s.string,description:s.string.isRequired,errorMessage:s.string,status:s.oneOf(["inactive","active","error","finished"]).isRequired};i.__docgenInfo={description:"An icon/description pair that describes one step of the `StatusIndicator`.",methods:[],displayName:"StatusIndicatorStep",props:{status:{defaultValue:{value:"'inactive'",computed:!1},description:"Each `status` represents a different icon..",type:{name:"enum",value:[{value:"'inactive'",computed:!1},{value:"'active'",computed:!1},{value:"'error'",computed:!1},{value:"'finished'",computed:!1}]},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},description:{description:"The text associated with the icon.",type:{name:"string"},required:!0},errorMessage:{description:'This message will appear below the description if the `status` is "error".',type:{name:"string"},required:!1}}};const q="";export{i as S,q as s};
