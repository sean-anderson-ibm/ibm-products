import{r as f}from"./index-BwDkhjyp.js";import{d as v}from"./debounce-Bo8k2pkZ.js";import{c as h}from"./useMergedRefs-DoviDd4t.js";import{p as x}from"./settings-Bk-Ww79A.js";const a=`${x.prefix}--datagrid`,_=`${a}__right-sticky-column`,y=`${a}__left-sticky-column`,m=`${_}-offset-scroll`,R=s=>{const t=f.useRef(),r=f.useRef(),[p,l]=f.useState();f.useEffect(()=>{l(window==null?void 0:window.innerWidth)},[]),f.useLayoutEffect(()=>{function n(){l(window.innerWidth)}return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),s.getCellProps.push(L.bind(null,"cell",null,p)),s.getHeaderProps.push(L.bind(null,"header",r,p)),s.getTableBodyProps.push(b.bind(null,t)),s.getHeaderGroupProps.push(n=>[n,{style:{...n.style,minWidth:"unset"}}]);const d=n=>{f.useEffect(()=>{var o;const i=t.current,e=r==null?void 0:r.current;$(i)&&e&&((o=e==null?void 0:e.classList)==null||o.add(m));const c=v(S.bind(null,i,e),250);return typeof window<"u"&&window.addEventListener("resize",c),()=>{typeof window<"u"&&window.removeEventListener("resize",c)}},[n.rows,n.isFetching]),f.useEffect(()=>{const i=t.current,e=r.current,c=o=>{g(o.target,e)};return g(i,e),i&&(i==null||i.addEventListener("scroll",c)),()=>{i&&i.removeEventListener("scroll",c)}},[n.rows,n.isFetching])},w=n=>{const i=t.current,e=r.current;f.useEffect(()=>{S(i,e)},[n.rows,e,i])};s.useInstance.push(d),s.useInstance.push(w),s.useInstance.push(n=>{Object.assign(n,{withStickyColumn:!0})}),s.useInstance.push(n=>{const i=n.visibleColumns;let e=i.findIndex(u=>u.id==="spacer"),c=i.findIndex(u=>u.sticky==="right");if(e>=0&&c>=0&&c<e){const u=i[e];i[e]=i[c],i[c]=u}const o=n.headers;if(e=o.findIndex(u=>u.id==="spacer"),c=o.findIndex(u=>u.sticky==="right"),e>=0&&c>=0&&c<e){const u=o[e];o[e]=o[c],o[e].canResize=!1,o[e].disableResizing=!0,delete o[e].getResizerProps,o[c]=u}})},b=(s,t)=>[t,{ref:s}],L=(s,t,r,p,l)=>{var w,n;const d=l.column||((w=l.cell)==null?void 0:w.column);return(d==null?void 0:d.sticky)==="right"?[p,{className:h({[`${_}-${s}`]:!0,[`${a}__resizableColumn`]:!1,[`${a}__sortableColumn`]:!1}),...t&&{ref:t}}]:(d==null?void 0:d.sticky)==="left"?[p,{className:h({[`${y}-${s}`]:r&&r>671,[`${y}-${s}--with-extra-select-column`]:((n=l==null?void 0:l.instance)==null?void 0:n.withSelectRows)&&r&&r>671}),...t&&{ref:t}}]:[p]},S=(s,t)=>{t&&($(s)?t.classList.add(m):t.classList.remove(m),g(s,t))},g=(s,t)=>{s&&t&&(s.scrollLeft+s.clientWidth===s.scrollWidth?(t.classList.add(`${a}__sticky-noShadow`),s.classList.add(`${a}__sticky-column-noShadow`)):(t.classList.remove(`${a}__sticky-noShadow`),s.classList.remove(`${a}__sticky-column-noShadow`)))},$=s=>{if(!s)return!1;const{scrollHeight:t,clientHeight:r}=s;return t>r};export{R as u};
