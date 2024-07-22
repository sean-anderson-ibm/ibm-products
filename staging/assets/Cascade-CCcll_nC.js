import{p as h,j as i}from"./settings-Bk-Ww79A.js";import{r as E,R as t}from"./index-BwDkhjyp.js";import{c as l}from"./useMergedRefs-DoviDd4t.js";import{G as _}from"./Grid-TJ4vp-sr.js";import{P as c}from"./index-Dk74W0Oi.js";import{g as j}from"./devtools-jK7s13u1.js";const a=`${h.prefix}--cascade`,p="Cascade",T={grid:!1};let n=E.forwardRef(({children:o,className:f,grid:u=T.grid,...g},y)=>{const d={...g,className:l(a,f),ref:y,...j(p)},C=e=>{const r=l(e.props.className,`${a}__element`);return t.cloneElement(e,{className:r})},N=()=>t.Children.map(o,e=>C(e));if(u){let e=0;const r=t.Children.map(o,s=>{if(t.isValidElement(s)){const x=t.Children.map(s==null?void 0:s.props.children,m=>{e=e+1;const b=l(m.props.className,`${a}__col`,`${a}__col-${e}`);return t.cloneElement(m,{className:b})});return t.cloneElement(s,{children:x})}return o});return i.jsx("div",{...d,children:i.jsx(_,{children:r})})}return i.jsx("div",{...d,children:N()})});n=h.checkComponentEnabled(n,p);n.displayName=p;n.propTypes={children:c.node,className:c.string,grid:c.bool};n.__docgenInfo={description:`This pattern is intended for use with cards, tiles, or similarly styled
components. Use this patterns in areas that are the primary focus on the page to
help the user along their journey or locate the most important information on
the page. It should not be used on a page if it is the secondary focus of the
page as that will distract the user.`,methods:[],displayName:"Cascade",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"Main content that is shown.",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:`Specify an optional className to be applied to
the container node.`,type:{name:"string"}},grid:{required:!1,tsType:{name:"boolean"},description:"Specifies whether or not to wrap the child content in a `<Grid />`.\nIf this is set to true it's important that the children are being wrapped in rows in columns.\nCheck the documentation for additional clarification.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};export{n as C};
