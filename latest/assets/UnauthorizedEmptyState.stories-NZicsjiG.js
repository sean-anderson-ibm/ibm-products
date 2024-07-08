import{p as L,j as a,B as h}from"./settings-DrdbGLhD.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as H}from"./StoryDocsPage-woJQAPsS.js";import{R as J}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as K}from"./deprecate-D9ms-jbM.js";import{L as Q}from"./Link-CxgVlihf.js";import{g as X}from"./devtools-B_UYo462.js";import{E as Y,d as b}from"./EmptyState-CeG0zptd.js";import{UnauthorizedIllustration as Z}from"./UnauthorizedIllustration-Dy8smVdX.js";import{A as N}from"./bucket-0-D7rUCVax.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./index-CeYEq9Lt.js";import"./iframe-Dn5BrwtG.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-CKb9Drku.js";import"./tslib.es6-CI8bilKU.js";import"./props-helper-D-fMQKH_.js";import"./EmptyStateV2-C7UXGPvF.js";import"./uuidv4-BQrI85uz.js";const c=`${L.prefix}--empty-state`,f="UnauthorizedEmptyState";let r=J.forwardRef(({action:t,className:R,illustrationPosition:_=b.position,illustrationTheme:V,illustrationDescription:$,link:M,size:g=b.size,subtitle:W,title:y,...F},G)=>a.jsxs("div",{...F,className:K(c,R,`${c}-position--${_}`,`${c}-type--unauthorized`),ref:G,...X(f),children:[a.jsx(Z,{size:g,theme:V,alt:$||y}),a.jsx(Y,{action:t,link:M,size:g,subtitle:W,title:y||""})]}));r=L.checkComponentEnabled(r,f);r.displayName=f;r.propTypes={action:e.shape({...h.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:h.propTypes.onClick,text:e.string}),className:e.string,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),link:e.shape({...Q.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};r.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"UnauthorizedEmptyState",props:{illustrationPosition:{defaultValue:{value:"'top'",computed:!1},description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},size:{defaultValue:{value:"'lg'",computed:!1},description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},action:{description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for empty state svg images. If not provided , title will be used.",type:{name:"string"},required:!1},illustrationTheme:{description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},subtitle:{description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};const De={title:"IBM Products/Patterns/Empty state/UnauthorizedEmptyState",component:r,tags:["autodocs"],parameters:{docs:{page:()=>a.jsx(H,{altGuidelinesHref:[{href:"https://pages.github.ibm.com/cdai-design/pal/patterns/empty-state/usage",label:"Error pattern usage guidelines"},{href:"https://www.carbondesignsystem.com/patterns/empty-states-pattern/",label:"Carbon empty pattern usage guidelines"}]})}}},o={title:"Empty state title",subtitle:"Description text explaining why this section is empty.",illustrationDescription:"Test alt text"},s=t=>a.jsx(r,{...t}),i=s.bind({});i.args={...o};const n=s.bind({});n.args={...o,illustrationTheme:"dark"};const p=s.bind({});p.args={...o,action:{text:"Create new",onClick:d("Clicked empty state action button")}};const m=s.bind({});m.args={...o,action:{text:"Create new",onClick:d("Clicked empty state action button"),renderIcon:t=>a.jsx(N,{size:20,...t}),iconDescription:"Add icon"}};const l=s.bind({});l.args={...o,link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};const u=s.bind({});u.args={...o,action:{text:"Create new",onClick:d("Clicked empty state action button"),renderIcon:t=>a.jsx(N,{size:20,...t}),iconDescription:"Add icon"},link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};var k,v,w;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,E,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var T,z,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(C=(z=p.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var q,D,j;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var A,I,U;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(U=(I=l.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var P,O,B;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`args => {
  return <UnauthorizedEmptyState {...args} />;
}`,...(B=(O=u.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};const je=["Default","WithDarkModeIllustration","withAction","withActionIconButton","withLink","withActionAndLink"];export{i as Default,n as WithDarkModeIllustration,je as __namedExportsOrder,De as default,p as withAction,u as withActionAndLink,m as withActionIconButton,l as withLink};