import{r as o,R as n}from"./index-BwDkhjyp.js";import{j as r}from"./jsx-runtime-Yb_4y5hn.js";import{useMDXComponents as M}from"./index-DlpNa54Y.js";import"./chunk-HLWAVYOI-D4Zgo6Ny.js";import{j as J,e as K,i as Q,C as Z}from"./index-Dq5OYLvq.js";import{P as l}from"./index-Dk74W0Oi.js";import{c as $}from"./floating-ui.dom.mjs-BB6krl5l.js";import{g as ee}from"./devtools-TX7bKGcX.js";import{p as X,c as te}from"./settings-GP6q6PuD.js";import{l as re}from"./lodash-C6Eq4oiK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-d869IuaJ.js";import"../sb-preview/runtime.js";import"./react-18-Dd3bHtks.js";import"./index-BONylQH5.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./index-CJvxHwuA.js";import"./events-b0qlIvq_.js";import"./index-CmXP8YBY.js";const E={X:"X",Y:"Y"},s={NONE:"NONE",INITIAL:"INITIAL",STARTED:"STARTED",END:"END"},A=(e,t)=>{switch(t){case E.X:return e.scrollWidth===e.clientWidth?s.NONE:e.scrollLeft===0?s.INITIAL:e.scrollLeft+e.clientWidth===e.scrollWidth?s.END:s.STARTED;case E.Y:default:return e.scrollHeight===e.clientHeight?s.NONE:e.scrollTop===0?s.INITIAL:e.scrollTop+e.clientHeight===e.scrollHeight?s.END:s.STARTED}},ne=e=>{const[t,p]=o.useState(),[x,N]=o.useState(),[d,C]=o.useState(),[m,G]=o.useState(),u=o.useCallback(()=>{e.current&&(p(e.current.scrollWidth>e.current.clientWidth),N(e.current.scrollHeight>e.current.clientHeight))},[e]);return o.useEffect(()=>{if(d)return()=>{d&&d.disconnect(),m&&m.disconnect()}}),o.useLayoutEffect(()=>{const{current:S}=e;S&&("ResizeObserver"in window&&!m&&G(new ResizeObserver(u).observe(S)),"MutationObserver"in window&&!d&&C(new MutationObserver(u).observe(S,{attributes:!1,childList:!0,subtree:!1})),u())},[e,u,d,m]),{xScrollable:t,yScrollable:x}},a=`${X.prefix}--scroll-gradient`,I="ScrollGradient",b={color:`var(--${te.prefix}-layer-01)`,hideStartGradient:!1,onScroll:()=>{},getScrollElementRef:()=>{}};let i=n.forwardRef(({children:e,className:t,color:p=b.color,onScroll:x=b.onScroll,scrollElementClassName:N,getScrollElementRef:d=b.getScrollElementRef,hideStartGradient:C=b.hideStartGradient,...m},G)=>{const[u,S]=o.useState(s.NONE),[Y,F]=o.useState(s.NONE),c=o.useRef(void 0),y=o.useRef(void 0),T=re.throttle(()=>{const h=A(c.current,E.Y),B=A(c.current,E.X);S(h),F(B)},150),O=o.useCallback(h=>{x(h),T()},[x,T]),U=h=>{c.current=h,d(h)};o.useEffect(()=>{O()},[O]);const{xScrollable:R,yScrollable:_}=ne(c),j=_&&c.current&&y.current?c.current.offsetWidth-y.current.offsetWidth:0,w=R&&c.current&&y.current?c.current.offsetHeight-y.current.offsetHeight:0;return n.createElement("div",{...m,className:$(a,`${a}--x-${Y.toLowerCase()}`,`${a}--y-${u.toLowerCase()}`,{[`${a}--x-scrollable`]:R,[`${a}--y-scrollable`]:_},t),ref:G,role:"presentation",...ee(I)},n.createElement("div",{onScroll:O,ref:U,className:$(`${a}__content`,N),tabIndex:0},n.createElement("div",{ref:y,className:`${a}__content-children`},e)),!C&&n.createElement(n.Fragment,null,n.createElement("div",{className:`${a}__start-vertical`,style:{right:j,backgroundImage:`linear-gradient(0deg, transparent, ${p} 90%)`},role:"presentation","aria-hidden":!0}),n.createElement("div",{className:`${a}__start-horizontal`,style:{backgroundImage:`linear-gradient(-90deg, transparent, ${p} 90%)`,bottom:w},role:"presentation","aria-hidden":!0})),n.createElement("div",{className:`${a}__end-vertical`,style:{right:j,bottom:w,backgroundImage:`linear-gradient(0deg, ${p} 10%, transparent)`},role:"presentation","aria-hidden":!0}),n.createElement("div",{className:`${a}__end-horizontal`,style:{right:j,bottom:w,backgroundImage:`linear-gradient(-90deg, ${p} 10%, transparent)`},role:"presentation","aria-hidden":!0}))});i=X.checkComponentEnabled(i,I);i.displayName=I;i.propTypes={children:l.oneOfType([l.arrayOf(l.node),l.node]),className:l.string,color:l.string,getScrollElementRef:l.func,hideStartGradient:l.bool,onScroll:l.func,scrollElementClassName:l.string};i.__docgenInfo={description:"TODO: A description of the component.",methods:[],displayName:"ScrollGradient",props:{color:{defaultValue:{value:"`var(--${carbon.prefix}-layer-01)`",computed:!1},description:"@type {string} Fade out color. Any valid CSS color value works",type:{name:"string"},required:!1},onScroll:{defaultValue:{value:"() => {}",computed:!1},description:"@type {Function} Optional scroll handler",type:{name:"func"},required:!1},getScrollElementRef:{defaultValue:{value:"() => {}",computed:!1},description:"@type {(element: HTMLElement) => {}} Optional function to get reference to scrollable DOM element",type:{name:"func"},required:!1},hideStartGradient:{defaultValue:{value:"false",computed:!1},description:"@type {boolean} Set to true if you want to hide gradient on the start side (top or left) of scrollable element.",type:{name:"bool"},required:!1},children:{description:"Provide the contents of the ScrollGradient.",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},scrollElementClassName:{description:"@type {string} Optional classname for scroll element.",type:{name:"string"},required:!1}}};function D(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...M(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(J,{title:"ScrollGradient",component:i}),`
`,r.jsx(t.h1,{id:"scrollgradient",children:"ScrollGradient"}),`
`,r.jsx(t.h2,{id:"table-of-contents",children:"Table of Contents"}),`
`,r.jsxs(t.ul,{children:[`
`,r.jsx(t.li,{children:r.jsx(t.a,{href:"#overview",children:"Overview"})}),`
`,r.jsx(t.li,{children:r.jsx(t.a,{href:"#example-usage",children:"Example usage"})}),`
`,r.jsx(t.li,{children:r.jsx(t.a,{href:"#component-api",children:"Component API"})}),`
`]}),`
`,r.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,r.jsx(t.p,{children:`The ScrollGradient implements gradient fades in horizontal and vertical
directions based on the user's scroll position. Visually, it informs the user of
more content that can be scrolled to.`}),`
`,r.jsx(t.h2,{id:"example-usage",children:"Example usage"}),`
`,r.jsx(K,{children:r.jsx(Q,{of:g})}),`
`,r.jsx(t.h2,{id:"code-sample",children:"Code sample"}),`
`,r.jsx(t.pre,{children:r.jsx(t.code,{className:"language-jsx",children:`<ScrollGradient>
  <p>Scrolling content here</p>
</ScrollGradient>
`})}),`
`,r.jsx(t.h2,{id:"component-api",children:"Component API"}),`
`,r.jsx(Z,{})]})}function oe(e={}){const{wrapper:t}={...M(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(D,{...e})}):D(e)}const ae=".sb-show-main,.docs-story{background-color:var(--cds-layer-01, #f4f4f4)!important}.templateContainer{overflow:auto;width:300px;height:400px;margin:auto;resize:both}.templateContainer-sm{overflow:auto;width:300px;height:250px;margin:auto;resize:both}",f="Use case specific content to display in the ScrollGradient component. Use case specific content to display in the ScrollGradient component. Use case specific content to display in the ScrollGradient component. ",W=n.createElement("div",{style:{padding:16}},n.createElement("p",null,f),n.createElement("p",null,f),n.createElement("p",null,f),n.createElement("p",null,f),n.createElement("p",null,f),n.createElement("p",null,f)),Te={title:"Experimental/Components/Scroll gradient/ScrollGradient",component:i,tags:["autodocs"],parameters:{styles:ae,docs:{page:oe}}},q={width:"100%",height:"100%"},le=e=>n.createElement("div",{className:"templateContainer"},n.createElement(i,{style:q,className:"myScrollGradient",...e})),se=e=>n.createElement("div",{className:"templateContainer-sm"},n.createElement(i,{style:q,className:"myScrollGradient",...e})),g=le.bind({});g.args={children:W};const v=se.bind({});v.args={children:n.createElement("div",{style:{width:"1500px"}},W)};var z,H,V;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`args => {
  return <div className="templateContainer">
      <ScrollGradient style={style} className={'myScrollGradient'} {...args} />
    </div>;
}`,...(V=(H=g.parameters)==null?void 0:H.docs)==null?void 0:V.source}}};var k,L,P;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`args => {
  return <div className="templateContainer-sm">
      <ScrollGradient style={style} className={'myScrollGradient'} {...args} />
    </div>;
}`,...(P=(L=v.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const Re=["scrollGradientVertical","scrollGradientXAndYAxis"];export{Re as __namedExportsOrder,Te as default,g as scrollGradientVertical,v as scrollGradientXAndYAxis};
