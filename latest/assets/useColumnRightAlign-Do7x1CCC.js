import{R as a}from"./index-BwDkhjyp.js";import{c as C}from"./index-CO-HQMMN.js";import{p as f}from"./settings-9_3hiHpE.js";const s=`${f.prefix}--datagrid`,n=d=>{const g=(t,e)=>{var i,r;return a.createElement("div",{className:C(`${s}__right-align-cell-renderer`,{sortDisabled:!t.isTableSortable||((i=t==null?void 0:t.column)==null?void 0:i.disableSortBy)===!0})},(r=e==null?void 0:e.Cell)==null?void 0:r.call(e,t))},h=(t,e)=>a.createElement("div",{className:`${s}__right-align-header`},typeof e.Header=="function"?(e==null?void 0:e.Header).call(e,t):e.Header),l=t=>[...t.map(i=>({...i,Cell:i.rightAlignedColumn?r=>g(r,i):i.Cell,Header:i.rightAlignedColumn?r=>h(r,i):i.Header}))];d.visibleColumns.push(l)};export{n as u};
