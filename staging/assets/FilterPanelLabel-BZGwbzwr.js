import{p as i,j as t}from"./settings-BiUEFdm2.js";import{R as h}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as b}from"./deprecate-D9ms-jbM.js";import{g as u}from"./devtools-BPcQvzXy.js";const f=`${i.prefix}--filter-panel`,d="FilterPanel";let n=h.forwardRef(({children:r,className:o,title:s,...l},p)=>t.jsxs("section",{...l,className:b(f,o),ref:p,...u(d),children:[s&&t.jsx("h1",{className:`${f}__title`,children:s}),r]}));n=i.checkComponentEnabled(n,d);n.displayName=d;n.propTypes={children:e.node,className:e.string,title:e.node};n.__docgenInfo={description:"The container for filter panel subcomponents.",methods:[],displayName:"FilterPanel",props:{children:{description:"Provide the contents of the FilterPanel.",type:{name:"node"},required:!1},className:{description:"Provide an optional class to be applied to the containing node.",type:{name:"string"},required:!1},title:{description:"Title text for the filter panel.",type:{name:"node"},required:!1}}};const c=`${i.prefix}--filter-panel-label`,m="FilterPanelLabel";let a=h.forwardRef(({className:r,count:o,labelText:s,title:l,...p},y)=>t.jsxs("span",{...p,className:b(c,r),ref:y,...u(m),children:[t.jsx("span",{className:`${c}__text`,title:l,children:s}),o&&t.jsx("span",{className:`${c}__count`,children:o})," "]}));a=i.checkComponentEnabled(a,m);a.displayName=m;a.propTypes={className:e.string,count:e.oneOfType([e.number,e.string]),labelText:e.node.isRequired,title:e.string};a.__docgenInfo={description:"A container with a label and optional count.",methods:[],displayName:"FilterPanelLabel",props:{className:{description:"Optional class to be applied to the containing node.",type:{name:"string"},required:!1},count:{description:"Number to be displayed with the label.",type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1},labelText:{description:"The label for the component.",type:{name:"node"},required:!0},title:{description:"Optional title attribute for the label.",type:{name:"string"},required:!1}}};export{a as F,n as a};