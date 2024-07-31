import{p as c,j as i}from"./settings-Bk-Ww79A.js";import{r as l}from"./index-BwDkhjyp.js";import{p as e}from"./index-Dk74W0Oi.js";import"./useMergedRefs-DoviDd4t.js";import{L as d}from"./Link-BwB-I-vI.js";const r=`${c.prefix}--http-errors`,h="HTTPErrorContent";let o=({description:n,errorCodeLabel:a,title:p,links:s})=>i.jsxs("div",{className:`${r}__content`,children:[a&&i.jsx("p",{className:`${r}__error-code-label`,children:a}),p&&i.jsx("h1",{className:`${r}__title`,children:p}),n&&i.jsx("p",{className:`${r}__description`,children:n}),s&&s.length&&s.map(t=>l.createElement(d,{...t,role:"link",href:t.href,key:t.text,className:`${r}__link`},t.text))]});o.displayName=h;o.propTypes={description:e.string.isRequired,errorCodeLabel:e.string.isRequired,links:e.arrayOf(e.shape({...d.propTypes,text:e.string.isRequired,href:e.string.isRequired})),title:e.string.isRequired};o.__docgenInfo={description:"",methods:[],displayName:"HTTPErrorContent",props:{description:{description:"String that will provide the description for the HTTP error code",type:{name:"string"},required:!0},errorCodeLabel:{description:"String that will describe the error that occurred",type:{name:"string"},required:!0},links:{description:"Links that will display for extra context when receiving particular errors",type:{name:"arrayOf",value:{name:"shape",value:{text:{name:"string",description:"The text to display for the link",required:!0},href:{name:"string",description:"The link's destination",required:!0}}}},required:!1},title:{description:"This will be for the main title of the HTTP error component",type:{name:"string"},required:!0}}};const T=".http-error-stories__viewport{overflow:hidden;height:calc(100vh - 58px)}.sbdocs .http-error-stories__viewport{max-height:60vh;background-color:var(--cds-background, #ffffff)}";export{o as H,T as s};
