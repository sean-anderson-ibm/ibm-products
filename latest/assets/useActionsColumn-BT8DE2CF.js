import{p as O,j as n,I as S}from"./settings-Bk-Ww79A.js";import{R as E,r as B}from"./index-BwDkhjyp.js";import{u as T,_ as W,c as I}from"./useMergedRefs-DoviDd4t.js";import{P as z}from"./index-Dk74W0Oi.js";import{O as F,a as q}from"./index-pjE0epes.js";import{p as G}from"./props-helper-DKwMo5Mj.js";const R=o=>{let{className:w,...A}=o;const c=T();return E.createElement("div",W({className:I(`${c}--icon--skeleton`,w)},A))};R.propTypes={className:z.string};const t=`${O.prefix}--datagrid`,X=o=>{const w=c=>{const{rowActions:e,isFetching:a,state:{selectedRowIds:r}}=c,l=i=>!!Object.keys(r).map($=>Number($)).includes(i);if(e&&Array.isArray(e)){const i=(d,$)=>{const{cell:v}=$,{row:s,column:k}=v;if(k.isAction){const y=!!k.sticky;return[d,{children:n.jsxs("div",{className:`${t}__actions-column-contents`,children:[a&&n.jsx(R,{className:`${t}__actions-column-loading`}),!a&&e.length<=2&&!y&&n.jsx("div",{className:`${t}_actions-column`,style:{display:"flex"},children:e.map((u,x)=>{const m=G(u,["isDelete"]),{align:_,id:g,itemText:p,onClick:f,icon:j,shouldHideMenuItem:b,shouldDisableMenuItem:h,disabled:M,...C}=m,D=typeof b=="function"&&b(s),H=typeof h=="function"?h(s):M;if(D)return null;const N=j;return n.jsx("div",{className:I(`${t}__actions-column-button`,{[`${t}__disabled-row-action-button`]:l(s.index)}),children:n.jsx(S,{...C,align:_||"top",label:p,kind:"ghost",name:p,className:I({[`${t}__disabled-row-action`]:l(s.index)}),onClick:P=>{l(s.index)||(P.stopPropagation(),f==null||f(g,s,P))},disabled:H,children:N&&n.jsx(N,{})})},`${p}__${x}`)})}),!a&&(e.length>2||y)&&n.jsx("div",{children:n.jsx(F,{align:"left",size:"sm",flipped:!0,onClick:u=>{u.stopPropagation()},children:e.map(u=>{const{id:x,onClick:m,shouldHideMenuItem:_,shouldDisableMenuItem:g,disabled:p,...f}=u,j=typeof _=="function"&&_(s),b=typeof g=="function"?g(s):p;return j?null:B.createElement(q,{...f,disabled:b,onClick:h=>{h.stopPropagation(),m==null||m(x,s,h)},key:x})})})})]}),className:I({[`${t}__actions-column-cell`]:!0,[`${t}__cell`]:!0,[`${t}__actions-column-cell-non-sticky`]:!y}),style:{width:e.length>2||y?48:96}}]}return[d]};o.getCellProps.push(i)}},A=c=>{const{rowActions:e}=c;if(e&&Array.isArray(e)){const a=(r,l)=>{const{column:i}=l;if(i.isAction){const d=!!i.sticky;return[r,{style:{...r.style,width:e.length>2||d?48:96}}]}return[r]};o.getHeaderProps.push(a)}};o.useInstance.push(A),o.useInstance.push(w)};export{X as u};
