import{p as f,j as n,B as r}from"./settings-Bk-Ww79A.js";import{R as _}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as u}from"./useMergedRefs-DoviDd4t.js";import{L as y}from"./Link-BwB-I-vI.js";import{g as C}from"./devtools-jK7s13u1.js";import"./props-helper-DKwMo5Mj.js";import{E as j}from"./EmptyStateV2-BPVRgou1.js";const a=`${f.prefix}--empty-state`,$="EmptyStateContent",m=({action:t,link:s,size:l,subtitle:p,title:d})=>n.jsxs("div",{className:`${a}__content`,children:[n.jsx("h3",{className:u(`${a}__header`,{[`${a}__header--small`]:l==="sm"}),children:d}),p&&n.jsx("p",{className:u(`${a}__subtitle`,{[`${a}__subtitle--small`]:l==="sm"}),children:p}),(t==null?void 0:t.text)&&(t==null?void 0:t.onClick)&&n.jsx(r,{...t,className:`${a}__action-button`,kind:t.kind||"tertiary",onClick:t.onClick,renderIcon:t.renderIcon||null,size:"sm",children:t.text}),(s==null?void 0:s.text)&&(s==null?void 0:s.href)&&n.jsx(y,{...s,className:`${a}__link`,href:s.href,children:s.text})]});m.displayName=$;m.propTypes={action:e.shape({...r.propTypes,iconDescription:e.string,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:r.propTypes.onClick,text:e.string}),link:e.shape({...y.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};m.__docgenInfo={description:"",methods:[],displayName:"EmptyStateContent",props:{action:{description:"Empty state action button",type:{name:"shape",value:{iconDescription:{name:"string",required:!1},kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},size:{description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},subtitle:{description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};const i=`${f.prefix}--empty-state`,g="EmptyState",v={position:"top",size:"lg"};let o=_.forwardRef(({v2:t=!1,...s},l)=>{if(t)return n.jsx(j,{...s});const{action:p,className:d,illustration:c,illustrationDescription:q,illustrationPosition:b=v.position,link:x,size:h=v.size,subtitle:E,title:k,...T}=s;return n.jsxs("div",{...T,className:u(i,`${i}-type--default`,d,{[`${i}-position--${b}`]:!!c}),ref:l,...C(g),children:[c&&n.jsx("img",{src:c,alt:q,className:u([`${i}__illustration`,`${i}__illustration--${h}`])}),n.jsx(m,{action:p,link:x,size:h,subtitle:E,title:k})]})});o=f.checkComponentEnabled(o,g);o.propTypes={action:e.shape({...r.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:r.propTypes.onClick,text:e.string}),className:e.string,illustration:e.string,illustrationDescription:e.string.isRequired.if(({illustration:t})=>t),illustrationPosition:e.oneOf(["top","right","bottom","left"]),link:e.shape({...y.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired,v2:e.bool};o.displayName=g;o.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"EmptyState",props:{v2:{defaultValue:{value:"false",computed:!1},description:`Designates which version of the EmptyState component is being used.
Refer to V2 documentation separately.`,type:{name:"bool"},required:!1},action:{description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustration:{description:"Empty state illustration, specify the `src` for a provided illustration to be displayed. In the case of requiring a light and dark illustration of your own, simply pass the corresponding illustration based on the current theme of your application.\nFor example: `illustration={appTheme === 'dark' ? darkIllustration : lightIllustration}`",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for custom provided illustrations",type:{name:"string"},required:!0},illustrationPosition:{description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},size:{description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},subtitle:{description:"Empty state subtext",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state heading",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};export{m as E,o as a,v as d};
