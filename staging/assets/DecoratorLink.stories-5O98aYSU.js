import{j as n,p as f}from"./settings-BiUEFdm2.js";import{a as c}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{useMDXComponents as h}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-DqhEdfox.js";import{e as g,i as b,C as x}from"./index-Bn0fEmUD.js";import{R as v}from"./index-BwDkhjyp.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as y}from"./devtools-BPcQvzXy.js";import{p as k}from"./props-helper-1oU9hECe.js";import{D as j}from"./DecoratorBase-VVVhgTEi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./deprecate-D9ms-jbM.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe--N8dq0Yd.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./bucket-1-Bggqt_K0.js";import"./bucket-4-CfqsrDTc.js";import"./bucket-14-u3bYiptr.js";const l="DecoratorLink";let o=v.forwardRef((r,e)=>{const i=k(r,["disabled","kind","onClickLabel","onClickValue","onContextMenuLabel","onContextMenuValue"]);return n.jsx(j,{ref:e,...i,kind:"link",...y(l)})});o=f.checkComponentEnabled(o,l);o.displayName=l;o.propTypes={className:t.string,hideIcon:t.bool,href:t.string.isRequired,label:t.string,onClick:t.func,onContextMenu:t.func,score:t.number,scoreThresholds:t.arrayOf(t.number),setLabelTitle:t.func,small:t.bool,theme:t.oneOf(["light","dark"]),truncateValue:t.oneOfType([t.oneOf(["end","start"]),t.shape({maxLength:t.number,front:t.number,back:t.number})]),value:t.string.isRequired,valueTitle:t.string};o.__docgenInfo={description:"The DecoratorLink groups a key/value pair to behave like a link.",methods:[],displayName:"DecoratorLink",props:{className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},hideIcon:{description:"Do not show the icon, regardless of score.",type:{name:"bool"},required:!1},href:{description:"The component's URL.",type:{name:"string"},required:!0},label:{description:"The label for the data.",type:{name:"string"},required:!1},onClick:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},onContextMenu:{description:"Optional callback function.\nReturns two objects: `event` and `{ score, label, value, magnitude }`",type:{name:"func"},required:!1},score:{description:"Used in conjunction with `scoreThresholds`, determines the color, shape, and type of magnitude of the icon.\n\nIf you don't want to show the icon at all, set `hideIcon={true}`.",type:{name:"number"},required:!1},scoreThresholds:{description:'Used in conjunction with `score`, determines the color, shape, and type of magnitude of the icon.\n\nAn array of 4 numbers determines the range of thresholds.\n\nExample using `[0, 4, 7, 10]`:\n<br/>- `<= 0` "Benign"\n<br/>- `1-3` "Low"\n<br/>- `4-6` "Medium"\n<br/>- `7-9` "High"\n<br/>- `>= 10` "Critical"\n<br/>- `NaN` "Unknown"',type:{name:"arrayOf",value:{name:"number"}},required:!1},setLabelTitle:{description:'Optional callback function for building a more detailed descriptive text.\nReturns `score`, `scoreThresholds`, `magnitude`.\n\nTypical description is in the form of\n\'"(magnitude)" magnitude: score (score) out of (last element of scoreThresholds array)\'.\n\nE.g. `"Medium" magnitude: score 5 out of 10`.\n\nIf not defined, the title will default to the `label` prop.',type:{name:"func"},required:!1},small:{description:"Styled smaller to better fit inline with text.",type:{name:"bool"},required:!1},theme:{description:`Override the default theme of the component.
Useful if you want "invert" the component's theme.`,type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},truncateValue:{description:"If not defined, it will behave as `display:inline-block`.",type:{name:"union",value:[{name:"enum",value:[{value:"'end'",computed:!1},{value:"'start'",computed:!1}]},{name:"shape",value:{maxLength:{name:"number",required:!1},front:{name:"number",required:!1},back:{name:"number",required:!1}}}]},required:!1},value:{description:"The value of the data.",type:{name:"string"},required:!0},valueTitle:{description:"Overrides the default title for the Decorator's value.",type:{name:"string"},required:!1}}};function d(r){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{id:"decoratorlink",children:"DecoratorLink"}),`
`,n.jsx(e.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#overview",children:"Overview"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-usage",children:"Example usage"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#example-setlabeltitle",children:"Example setLabelTitle()"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"The DecoratorLink groups a key/value pair to look and behave like a single link."}),`
`,n.jsx(e.h2,{id:"example-usage",children:"Example usage"}),`
`,n.jsx(g,{children:n.jsx(b,{of:a})}),`
`,n.jsxs(e.h2,{id:"example-setlabeltitle",children:["Example ",n.jsx(e.strong,{children:"setLabelTitle()"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`setLabelTitle: (score, scoreThresholds, magnitude) => {
  if (typeof score !== 'number') {
    return 'Unknown score';
  }
  return \`"\${magnitude}" magnitude. Score \${score} out of \${
    scoreThresholds[scoreThresholds.length - 1]
  }\`;
},
`})}),`
`,n.jsx(e.h2,{id:"component-api",children:"Component API"}),`
`,n.jsx(x,{})]})}function T(r={}){const{wrapper:e}={...h(),...r.components};return e?n.jsx(e,{...r,children:n.jsx(d,{...r})}):d(r)}const w="",s={"-1 (less than 0 is 0)":-1,"0 ":0,"1 ":1,"2 ":2,"3 ":3,"4 ":4,"5 ":5,"6 ":6,"7 ":7,"8 ":8,"9 ":9,"10 ":10,"11 (greater than 10 is 10)":11,'NaN; treated as "Unknown"':null},Z={title:"IBM Products/Components/Decorators/DecoratorLink",component:o,tags:["autodocs"],parameters:{styles:w,docs:{page:T}},argTypes:{kind:{table:{disable:!0}},target:{table:{disable:!0}},className:{control:{type:{}}},onClick:{control:{type:{}}},onContextMenu:{control:{type:{}}},setLabelTitle:{control:{type:{}}},score:{control:{type:"select",labels:Object.keys(s)},mapping:Object.values(s),options:Object.values(s).map((r,e)=>e)},theme:{control:{type:"select",labels:["use default","light","dark"]},mapping:{0:null,1:"light",2:"dark"},options:[0,1,2]},truncateValue:{control:{type:"select",labels:{0:"No truncation",1:'"end"',2:'"start"',3:"{ maxLength:20, front:9, back:10 }"}},mapping:{0:void 0,1:"end",2:"start",3:{maxLength:20,front:9,back:10}},options:[0,1,2,3]}},args:{theme:0,truncateValue:0}},L=r=>r.truncateValue?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{padding:"0 0 1rem"},children:"With limited width."}),n.jsx("div",{style:{maxWidth:"16rem",padding:"3px",outline:"2px dashed #999"},children:n.jsx(o,{...r,value:"Very long value to show truncation"})})]}):n.jsx(o,{...r}),a=L.bind({});a.storyName="DecoratorLink";a.args={hideIcon:!1,href:"http://www.ibm.com",label:"IP",onClick:(r,e)=>c("onClick")(e),onContextMenu:(r,e)=>c("onContextMenu")(e),score:5,scoreThresholds:[0,4,7,10],setLabelTitle:(r,e,i)=>typeof r!="number"?"Unknown score":`"${i}" magnitude. Score ${r} out of ${e[e.length-1]}`,small:!1,value:"192.168.0.50",valueTitle:"",target:"_blank"};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  if (args.truncateValue) {
    return <>
        <div style={{
        padding: '0 0 1rem'
      }}>With limited width.</div>
        <div style={{
        maxWidth: '16rem',
        padding: '3px',
        outline: '2px dashed #999'
      }}>
          <DecoratorLink {...args} value="Very long value to show truncation" />
        </div>
      </>;
  }
  return <DecoratorLink {...args} />;
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const ee=["Default"];export{a as Default,ee as __namedExportsOrder,Z as default};