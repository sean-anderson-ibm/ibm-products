import{R as n}from"./index-BwDkhjyp.js";import{c as o}from"./index-CO-HQMMN.js";import{p as m}from"./settings-9_3hiHpE.js";const a=`${m.prefix}--datagrid`,f=s=>{const i=(e,t)=>n.createElement("div",{className:o(`${a}__center-align-cell-renderer`,{sortDisabled:!e.isTableSortable||e.column&&e.column.disableSortBy===!0})},t.Cell(e)),c=(e,t)=>n.createElement("div",{className:`${a}__center-align-header`},typeof t.Header=="function"?t.Header(e):t.Header),d=e=>[...e.map(r=>({...r,Cell:r.centerAlignedColumn?l=>i(l,r):r.Cell,Header:r.centerAlignedColumn?l=>c(l,r):r.Header}))];s.visibleColumns.push(d)};export{f as u};
