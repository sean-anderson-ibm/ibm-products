import{p as N,j as e,B as d,I as $}from"./settings-DDDiKwEV.js";import"./floating-ui.react-BgNs4SA8.js";import{C as L,M as P,a as R,b as G}from"./ComposedModal-BB3t0zem.js";import{D as h}from"./Dropdown-kl0VN08K.js";import{M as H,a as j}from"./useWindowResize-DdSPNfdm.js";import{O as k,a as t}from"./index-D9ju4W2A.js";import{T as C,a as I}from"./TableToolbarSearch-D107niuO.js";import{r as c}from"./index-BwDkhjyp.js";import{a as b}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{F as V}from"./_storybook-styles-DWjD7-VX.js";import{D as O}from"./bucket-5-BlAGcMmC.js";import{A as W}from"./bucket-0-Cw-xsoio.js";import{R as J}from"./bucket-13-DEUQBRGC.js";import{d as K}from"./events-Dp3Lalez.js";import{F as Q}from"./bucket-6-CS7rNrxx.js";const U=()=>{const l=c.useContext(V);if(l===void 0)throw new Error("useFilterContext was used outside of its Provider");return l},n=`${N.prefix}--datagrid`,X=l=>{const{setPanelOpen:S}=U(),{selectedFlatRows:y,setGlobalFilter:f,CustomizeColumnsButton:a,RowSizeDropdown:T,rowSizeDropdownProps:g,useDenseHeader:v,filterProps:o,getFilterFlyoutProps:z,FilterFlyout:M,data:_}=l,D=()=>{alert("Downloading...")},B=()=>{alert("refreshing...")},w="Search",q=y.length===0,r={"button:nthChild(1) > span:nthChild(1)":{bottom:"-37px"}},u=()=>(o==null?void 0:o.variation)==="flyout"&&e.jsx(M,{...z()}),m=()=>(o==null?void 0:o.variation)==="panel"&&e.jsx($,{kind:"ghost",align:o.align,label:o.panelIconDescription,className:`${n}-filter-panel-open-button`,onClick:()=>S(i=>!i),disabled:_.length===0,children:e.jsx(Q,{})}),[x,p]=c.useState(!1),[E,A]=c.useState(window.innerWidth);c.useLayoutEffect(()=>{function i(){A(window.innerWidth)}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]);const F=E<672,s=["Option 1","Option 2","Option 3"];return q&&(v&&v?e.jsx(C,{size:"sm",children:F?e.jsxs(k,{"aria-label":"Tools",size:"md",flipped:!0,children:[e.jsx(t,{itemText:"Filter",hasDivider:!0,requireTitle:!0,onClick:()=>p(!0)}),e.jsx(t,{itemText:"Export",hasDivider:!0,requireTitle:!0}),e.jsx(t,{itemText:"Settings",hasDivider:!0,requireTitle:!0}),e.jsx(t,{itemText:"Import items",hasDivider:!0,requireTitle:!0}),e.jsx(t,{itemText:"Create",hasDivider:!0,requireTitle:!0})]}):e.jsxs(e.Fragment,{children:[m(),e.jsx("div",{style:r,children:e.jsx(d,{kind:"ghost",hasIconOnly:!0,tooltipPosition:"bottom",renderIcon:O,iconDescription:"Download CSV",onClick:D})}),u(),a&&e.jsx("div",{style:r,children:e.jsx(a,{})}),e.jsx(T,{...g}),e.jsx("div",{style:r,className:`${n}__toolbar-divider`,children:e.jsx(d,{kind:"ghost",renderIcon:W,iconDescription:"Action",children:"Ghost button"})})]})}):F?e.jsxs(C,{children:[m(),e.jsx(I,{size:"xl",id:"columnSearch",persistent:!0,placeholder:w,onChange:i=>f(i.target.value)}),u(),e.jsxs(k,{"aria-label":"Tools",size:"lg",flipped:!0,renderIcon:K,className:`${n}__toolbar-menu__trigger`,menuOptionsClass:`${n}__toolbar-options`,children:[e.jsx(t,{itemText:"Filter",hasDivider:!0,requireTitle:!0,onClick:()=>p(!0)}),e.jsx(t,{itemText:"Export",hasDivider:!0,requireTitle:!0}),e.jsx(t,{itemText:"Settings",hasDivider:!0,requireTitle:!0}),e.jsx(t,{itemText:"Import items",hasDivider:!0,requireTitle:!0}),e.jsx(t,{itemText:"Create",hasDivider:!0,requireTitle:!0})]}),x&&e.jsxs(L,{size:"lg",open:x&&x,onClose:()=>p(!1),className:`${n}__mobile-toolbar-modal`,children:[e.jsx(P,{children:e.jsx("h4",{children:"Filters"})}),e.jsxs(R,{children:[e.jsx(h,{initialSelectedItem:s[2],items:s,titleText:"Label",id:"filter1"}),e.jsx(h,{initialSelectedItem:s[2],items:s,titleText:"Label",id:"filter2"}),e.jsx(h,{initialSelectedItem:s[2],items:s,titleText:"Label",id:"filter3"})]}),e.jsx(G,{primaryButtonText:"Apply",secondaryButtonText:"Cancel"})]})]}):e.jsxs(C,{children:[m(),e.jsx(I,{size:"lg",id:"columnSearch",persistent:!0,placeholder:w,onChange:i=>f(i.target.value)}),u(),e.jsx("div",{style:r,children:e.jsx(d,{kind:"ghost",hasIconOnly:!0,tooltipPosition:"bottom",renderIcon:J,iconDescription:"Refresh",onClick:B})}),e.jsx("div",{style:r,children:e.jsx(d,{kind:"ghost",hasIconOnly:!0,tooltipPosition:"bottom",renderIcon:O,iconDescription:"Download CSV",onClick:D})}),a&&e.jsx("div",{style:r,children:e.jsx(a,{})}),e.jsx(T,{...g}),e.jsxs(H,{label:"Primary button",className:`${n}__toolbar-options`,children:[e.jsx(j,{label:"Option 1",onClick:b("Click on ButtonMenu Option 1")}),e.jsx(j,{label:"Option 2",onClick:b("Click on ButtonMenu Option 2")}),e.jsx(j,{label:"Option 3",onClick:b("Click on ButtonMenu Option 3")})]})]}))};X.__docgenInfo={description:"",methods:[],displayName:"DatagridActions"};export{X as D};
