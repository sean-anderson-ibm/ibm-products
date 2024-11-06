import{R as t}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{a as x,c as E}from"./floating-ui.dom.mjs-BB6krl5l.js";import{g as N}from"./devtools-TX7bKGcX.js";import{p as h,T as _}from"./settings-GP6q6PuD.js";import"./props-helper-2sr7eXy7.js";import{T as k}from"./TooltipTrigger-D9C1uyVx.js";import{U as w}from"./bucket-17-CZ6sDvQ6.js";const o=`${h.prefix}--user-avatar`,i="UserAvatar";let a=t.forwardRef(({backgroundColor:s="order-1-cyan",className:v,image:p,imageDescription:y,name:l,renderIcon:u,size:n="md",tooltipText:d,tooltipAlignment:b="bottom",...q},A)=>{const C=x(),P={sm:16,md:20,lg:24,xl:32},T=()=>{const r=(l==null?void 0:l.split(" "))||[],m=r[0].charAt(0).toUpperCase(),$=r[0].charAt(1).toUpperCase();if(r.length===1)return m+$;const f=r[r.length-1].charAt(0).toUpperCase(),g=[m];return f&&g.push(f),"".concat(...g)},U=()=>{const r={size:P[n]};return p?t.createElement("img",{alt:y,src:p,className:`${o}__photo ${o}__photo--${n}`}):u?t.createElement(u,{...r}):l?T():t.createElement(w,{...r})},c=()=>t.createElement("div",{...q,className:E(o,v,`${o}--${s}`,`${o}--${n}`,{}),ref:A,role:"img","aria-hidden":"true",...N(i)},U());return d?t.createElement(_,{align:b,label:d,className:`${o}__tooltip ${C}--icon-tooltip`},t.createElement(k,null,t.createElement(c,null))):t.createElement(c,null)});a=h.checkComponentEnabled(a,i);a.displayName=i;a.propTypes={backgroundColor:e.oneOf(["order-1-cyan","order-2-gray","order-3-green","order-4-magenta","order-5-purple","order-6-teal","order-7-cyan","order-8-gray","order-9-green","order-10-magenta","order-11-purple","order-12-teal"]),className:e.string,image:e.string,imageDescription:e.string.isRequired.if(({image:s})=>!!s),name:e.string,renderIcon:e.oneOfType([e.func,e.object]),size:e.oneOf(["xl","lg","md","sm"]),tooltipAlignment:e.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]),tooltipText:e.string};a.__docgenInfo={description:"",methods:[],displayName:"UserAvatar",props:{backgroundColor:{defaultValue:{value:"'order-1-cyan'",computed:!1},description:"Provide the background color need to be set for UserAvatar.",type:{name:"enum",value:[{value:"'order-1-cyan'",computed:!1},{value:"'order-2-gray'",computed:!1},{value:"'order-3-green'",computed:!1},{value:"'order-4-magenta'",computed:!1},{value:"'order-5-purple'",computed:!1},{value:"'order-6-teal'",computed:!1},{value:"'order-7-cyan'",computed:!1},{value:"'order-8-gray'",computed:!1},{value:"'order-9-green'",computed:!1},{value:"'order-10-magenta'",computed:!1},{value:"'order-11-purple'",computed:!1},{value:"'order-12-teal'",computed:!1}]},required:!1},size:{defaultValue:{value:"'md'",computed:!1},description:"Set the size of the avatar circle",type:{name:"enum",value:[{value:"'xl'",computed:!1},{value:"'lg'",computed:!1},{value:"'md'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},tooltipAlignment:{defaultValue:{value:"'bottom'",computed:!1},description:"Specify how the trigger should align with the tooltip",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'left'",computed:!1},{value:"'right'",computed:!1}]},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},image:{description:"When passing the image prop, supply a full path to the image to be displayed.",type:{name:"string"},required:!1},imageDescription:{description:"When passing the image prop use the imageDescription prop to describe the image for screen reader.",type:{name:"string"},required:!0},name:{description:"When passing the name prop, either send the initials to be used or the user's full name. The first two capital letters of the user's name will be used as the name.",type:{name:"string"},required:!1},renderIcon:{description:"Provide a custom icon to use if you need to use an icon other than the default one",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},tooltipText:{description:"Pass in the display name to have it shown on hover",type:{name:"string"},required:!1}}};export{a as U};
