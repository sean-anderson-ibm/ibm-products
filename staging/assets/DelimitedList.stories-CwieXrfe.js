import{p as h,j as o}from"./settings-Bk-Ww79A.js";import{S as T}from"./StoryDocsPage-D-hLaGzY.js";import{R as w}from"./index-BwDkhjyp.js";import{P as i}from"./index-Dk74W0Oi.js";import{c as C}from"./useMergedRefs-DoviDd4t.js";import{g as j}from"./devtools-jK7s13u1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-CiqBCP_Q.js";import"./index-8ToAQMOn.js";import"./index-BONylQH5.js";import"./index-TffMvrPM.js";import"./iframe-DrDxz63W.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-Cn6RZn1q.js";import"./tslib.es6-B4_xh3D5.js";const p=`${h.prefix}--delimited-list`,n="DelimitedList",m={delimiter:", ",items:[],truncate:!0};let e=w.forwardRef(({className:a,delimiter:N=m.delimiter,items:l=m.items,truncate:x=m.truncate,...L},P)=>o.jsx("div",{...L,className:C(p,a,[x&&`${p}-truncate`]),ref:P,...j(n),children:l.length>0?l.join(N):"–"}));e=h.checkComponentEnabled(e,n);e.displayName=n;e.propTypes={className:i.string,delimiter:i.string,items:i.arrayOf(i.any),truncate:i.bool};e.__docgenInfo={description:"`DelimitedList` converts an array of items into a single line of\ncomma-separated values.",methods:[],displayName:"DelimitedList",props:{className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},delimiter:{required:!1,tsType:{name:"string"},description:"The character(s) used to separate the items.",defaultValue:{value:"', '",computed:!1},type:{name:"string"}},items:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of items to be listed.",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"any"}}},truncate:{required:!1,tsType:{name:"boolean"},description:"Toggle the component's ability to truncate or not.",defaultValue:{value:"true",computed:!1},type:{name:"bool"}}},composes:["PropsWithChildren"]};const $=".delimited-list-stories__viewport{width:20rem}",b=()=>o.jsx(T,{blocks:[{story:t},{story:s},{story:r}]});b.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const S="delimited-list-stories",ee={title:"IBM Products/Components/Delimited list/DelimitedList",component:e,tags:["autodocs"],parameters:{styles:$,docs:{page:b}}},d=a=>o.jsx("div",{className:`${S}__viewport`,children:o.jsx(e,{...a})}),t=d.bind({});t.args={delimiter:", ",items:["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7","Item 8","Item 9","Item 10"],truncate:!0};const s=d.bind({});s.args={delimiter:", ",items:["Item 1","Item 2","Item 3"],truncate:!0};const r=d.bind({});r.args={items:[]};var c,u,y;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,f,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var _,D,I;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
  return <div className={\`\${storyClass}__viewport\`}>
      <DelimitedList {...args} />
    </div>;
}`,...(I=(D=r.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const te=["delimited","notDelimited","empty"];export{te as __namedExportsOrder,ee as default,t as delimited,r as empty,s as notDelimited};
