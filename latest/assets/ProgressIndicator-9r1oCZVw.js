import{b as y,c as x,_ as P,n as q,o as w,S as W,p as _}from"./index-CO-HQMMN.js";import{P as t}from"./index-Dk74W0Oi.js";import{r as C,R as e}from"./index-BwDkhjyp.js";import{T as N}from"./Text-DeIkfaUm.js";import{c as D}from"./bucket-18-BI__9nmH.js";import{c as R}from"./bucket-9-CnK3eVdV.js";import{b as K}from"./bucket-2-Bt1jIBkN.js";const L={"carbon.progress-step.complete":"Complete","carbon.progress-step.incomplete":"Incomplete","carbon.progress-step.current":"Current","carbon.progress-step.invalid":"Invalid"};function V(u){return L[u]}function j(u){let{children:b,className:f,currentIndex:a=0,onChange:s,spaceEqually:i,vertical:d,...g}=u;const c=y(),[n,m]=C.useState(a),[I,r]=C.useState(a),$=x({[`${c}--progress`]:!0,[`${c}--progress--vertical`]:d,[`${c}--progress--space-equal`]:i&&!d,[f??""]:f});return a!==I&&(m(a),r(a)),e.createElement("ul",P({className:$},g),e.Children.map(b,(l,o)=>{if(!e.isValidElement(l))return null;const p=s?()=>s(o):void 0;return o===n?e.cloneElement(l,{complete:l.props.complete,current:!l.props.complete,index:o,onClick:p}):o<n?e.cloneElement(l,{complete:!0,index:o,onClick:p}):o>n?e.cloneElement(l,{complete:l.props.complete||!1,index:o,onClick:p}):null}))}j.propTypes={children:t.node,className:t.string,currentIndex:t.number,onChange:t.func,spaceEqually:t.bool,vertical:t.bool};function G(u){let{label:b,description:f,className:a,current:s,complete:i,invalid:d,secondaryLabel:g,disabled:c,onClick:n,translateWithId:m=V,...I}=u;const r=y(),$=x({[`${r}--progress-step`]:!0,[`${r}--progress-step--current`]:s,[`${r}--progress-step--complete`]:i,[`${r}--progress-step--incomplete`]:!i&&!s,[`${r}--progress-step--disabled`]:c,[a??""]:a}),l=E=>{q(E,[w,W])&&n&&n(E)},o=E=>{let{complete:k,current:T,description:v,invalid:h,prefix:S}=E;return h?e.createElement(D,{className:`${S}--progress__warning`},e.createElement("title",null,v)):T?e.createElement(R,null,e.createElement("title",null,v)):k?e.createElement(K,null,e.createElement("title",null,v)):e.createElement(_,null,e.createElement("title",null,v))};let p=m("carbon.progress-step.incomplete");return s&&(p=m("carbon.progress-step.current")),i&&(p=m("carbon.progress-step.complete")),d&&(p=m("carbon.progress-step.invalid")),e.createElement("li",{className:$},e.createElement("button",P({type:"button",className:x(`${r}--progress-step-button`,{[`${r}--progress-step-button--unclickable`]:!n||s}),disabled:c,"aria-disabled":c,tabIndex:!s&&n&&!c?0:-1,onClick:s?void 0:n,onKeyDown:l,title:b},I),e.createElement(o,{complete:i,current:s,description:f,invalid:d,prefix:r}),e.createElement("div",{className:`${r}--progress-text`},e.createElement(N,{as:"p",className:`${r}--progress-label`},b),g!=null?e.createElement(N,{as:"p",className:`${r}--progress-optional`},g):null),e.createElement("span",{className:`${r}--assistive-text`},p),e.createElement("span",{className:`${r}--progress-line`})))}G.propTypes={className:t.string,complete:t.bool,current:t.bool,description:t.string,disabled:t.bool,index:t.number,invalid:t.bool,label:t.node.isRequired,onClick:t.func,overflowTooltipProps:t.object,secondaryLabel:t.string,tooltipId:t.string,translateWithId:t.func};export{j as P,G as a};
