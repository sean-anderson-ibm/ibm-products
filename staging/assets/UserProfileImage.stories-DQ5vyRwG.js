import{j as T}from"./settings-BiUEFdm2.js";import{i as x}from"./headshot-DLlybMEg.js";import{S}from"./StoryDocsPage-D8CHG6Rh.js";import{U}from"./UserProfileImage-u-4iFqrT.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-Dk74W0Oi.js";import"./deprecate-D9ms-jbM.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./index-Bn0fEmUD.js";import"./iframe--N8dq0Yd.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-YTYnELA9.js";import"./tslib.es6-B4_xh3D5.js";import"./devtools-BPcQvzXy.js";import"./props-helper-1oU9hECe.js";import"./TooltipTrigger-BUBh9TEp.js";import"./bucket-16-C-1D9aPX.js";import"./bucket-6-CpWzItqu.js";const k=()=>T.jsx(S,{blocks:[{story:o},{story:r,description:"By passing in icon prop with a value of `group`, the avatar will display the group icon"},{story:t,description:"When passing a display name to the component, the display name will be distilled down to the first and last initials of the display name. `Thomas Watson` and `Thomas J. Watson` will both display `TW` as the initials."}]});k.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const a={backgroundColor:"light-cyan",theme:"light",size:"xl"},oo={title:"IBM Products/Patterns/User profile images/UserProfileImage",component:U,tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"select"},options:["light-cyan","dark-cyan"]},theme:{control:{type:"select"},options:["light","dark"]},kind:{control:{type:"radio"},options:["user","group"]},size:{control:{type:"radio"},options:["xl","lg","md"]},tooltipAlignment:{control:{type:"select"},options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","right"]}},parameters:{docs:{page:k}}},i=D=>T.jsx(U,{...D}),o=i.bind({});o.args={...a,kind:"user",tooltipText:"Thomas Watson"};const r=i.bind({});r.args={...a,kind:"group"};const t=i.bind({});t.args={...a,initials:"thomas j. watson",tooltipText:"Thomas Watson"};const e=i.bind({});e.args={...a,image:x,imageDescription:"image here"};const s=i.bind({});s.args={...a,image:x,imageDescription:"image here",tooltipText:"Display Name"};var p,n,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return <UserProfileImage {...args} />;
}`,...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,l,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <UserProfileImage {...args} />;
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var d,u,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  return <UserProfileImage {...args} />;
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,y,I;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  return <UserProfileImage {...args} />;
}`,...(I=(y=e.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var W,b,P;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  return <UserProfileImage {...args} />;
}`,...(P=(b=s.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};const ro=["Default","WithGroupIcon","WithInitials","WithImage","WithImageAndTooltip"];export{o as Default,r as WithGroupIcon,e as WithImage,s as WithImageAndTooltip,t as WithInitials,ro as __namedExportsOrder,oo as default};