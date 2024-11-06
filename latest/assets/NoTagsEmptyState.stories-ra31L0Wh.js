import{R as t}from"./index-BwDkhjyp.js";import{a as d}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as J}from"./StoryDocsPage-D3jszs05.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as K}from"./floating-ui.dom.mjs-BB6krl5l.js";import{p as _,B as h}from"./settings-GP6q6PuD.js";import{L as Q}from"./Link-nkMjvGqf.js";import{g as U}from"./devtools-TX7bKGcX.js";import{E as X,d as b}from"./EmptyState-B7ZK1OU2.js";import{NoTagsIllustration as Y}from"./NoTagsIllustration-9FUOyiSQ.js";import{A as R}from"./bucket-0-ChI4u8X4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./v4-CQkTLCs1.js";import"./index-Dq5OYLvq.js";import"./iframe-d869IuaJ.js";import"../sb-preview/runtime.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./story-helper-6_fmjwZ-.js";import"./tslib.es6-B4_xh3D5.js";import"./index-CJvxHwuA.js";import"./events-b0qlIvq_.js";import"./index-CmXP8YBY.js";import"./props-helper-2sr7eXy7.js";import"./EmptyStateV2-B0y4VkY2.js";import"./uuidv4-BQrI85uz.js";const u=`${_.prefix}--empty-state`,g="NoTagsEmptyState";let r=t.forwardRef(({action:a,className:V,illustrationPosition:$=b.position,illustrationTheme:j,illustrationDescription:M,link:W,size:f=b.size,subtitle:F,title:y,...G},H)=>t.createElement("div",{...G,className:K(u,V,`${u}-position--${$}`,`${u}-type--noTags`),ref:H,...U(g)},t.createElement(Y,{theme:j,size:f,alt:M||y}),t.createElement(X,{action:a,link:W,size:f,subtitle:F,title:y=""})));r=_.checkComponentEnabled(r,g);r.displayName=g;r.propTypes={action:e.shape({...h.propTypes,kind:e.oneOf(["primary","secondary","tertiary"]),renderIcon:e.oneOfType([e.func,e.object]),onClick:h.propTypes.onClick,text:e.string}),className:e.string,illustrationDescription:e.string,illustrationPosition:e.oneOf(["top","right","bottom","left"]),illustrationTheme:e.oneOf(["light","dark"]),link:e.shape({...Q.propTypes,text:e.oneOfType([e.string,e.node]),href:e.string}),size:e.oneOf(["lg","sm"]),subtitle:e.oneOfType([e.string,e.node]),title:e.oneOfType([e.string,e.node]).isRequired};r.__docgenInfo={description:"The `EmptyState` component follows the Carbon guidelines for empty states with some added specifications around illustration usage. For additional usage guidelines and documentation please refer to the links above.",methods:[],displayName:"NoTagsEmptyState",props:{illustrationPosition:{defaultValue:{value:"'top'",computed:!1},description:"Designates the position of the illustration relative to the content",type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'left'",computed:!1}]},required:!1},size:{defaultValue:{value:"sizes.lg",computed:!0},description:"Empty state size",type:{name:"enum",value:[{value:"'lg'",computed:!1},{value:"'sm'",computed:!1}]},required:!1},action:{description:"Empty state action button",type:{name:"shape",value:{kind:{name:"enum",value:[{value:"'primary'",computed:!1},{value:"'secondary'",computed:!1},{value:"'tertiary'",computed:!1}],required:!1},renderIcon:{name:"union",value:[{name:"func"},{name:"object"}],required:!1},onClick:{name:"custom",raw:"Button.propTypes.onClick",required:!1},text:{name:"string",required:!1}}},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},illustrationDescription:{description:"The alt text for empty state svg images. If not provided , title will be used.",type:{name:"string"},required:!1},illustrationTheme:{description:`Empty state illustration theme variations.
To ensure you use the correct themed illustrations, you can conditionally specify light or dark
based on your app's current theme value. Example:
\`illustrationTheme={appTheme === ('carbon--g100' || 'carbon--g90') ? 'dark' : 'light'}\``,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},link:{description:"Empty state link object",type:{name:"shape",value:{text:{name:"union",value:[{name:"string"},{name:"node"}],required:!1},href:{name:"string",required:!1}}},required:!1},subtitle:{description:"Empty state subtitle",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!1},title:{description:"Empty state title",type:{name:"union",value:[{name:"string"},{name:"node"}]},required:!0}}};const qe={title:"IBM Products/Patterns/Empty state/NoTagsEmptyState",component:r,tags:["autodocs"],parameters:{docs:{page:()=>t.createElement(J,{altGuidelinesHref:[{href:"https://carbondesignsystem.com/patterns/empty-states-pattern/",label:"Error pattern usage guidelines"},{href:"https://www.carbondesignsystem.com/patterns/empty-states-pattern/",label:"Carbon empty pattern usage guidelines"}]})}}},o={title:"Empty state title",subtitle:"Description text explaining why this section is empty.",illustrationDescription:"Test alt text"},s=a=>t.createElement(r,{...a}),n=s.bind({});n.args={...o};const i=s.bind({});i.args={...o,illustrationTheme:"dark"};const p=s.bind({});p.args={...o,action:{text:"Create new",onClick:d("Clicked empty state action button")}};const m=s.bind({});m.args={...o,action:{text:"Create new",onClick:d("Clicked empty state action button"),renderIcon:a=>t.createElement(R,{size:20,...a}),iconDescription:"Add icon"}};const l=s.bind({});l.args={...o,link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};const c=s.bind({});c.args={...o,action:{text:"Create new",onClick:d("Clicked empty state action button"),renderIcon:a=>t.createElement(R,{size:20,...a}),iconDescription:"Add icon"},link:{text:"View documentation",href:"https://www.carbondesignsystem.com"}};var k,E,T;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var v,w,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var x,C,N;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(N=(C=p.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var q,D,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(A=(D=m.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var I,P,O;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(O=(P=l.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var z,B,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <NoTagsEmptyState {...args} />;
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const De=["Default","WithDarkModeIllustration","withAction","withActionIconButton","withLink","withActionAndLink"];export{n as Default,i as WithDarkModeIllustration,De as __namedExportsOrder,qe as default,p as withAction,c as withActionAndLink,m as withActionIconButton,l as withLink};
