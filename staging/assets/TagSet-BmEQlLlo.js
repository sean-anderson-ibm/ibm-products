import{p as I,j as a}from"./settings-DEdZ0TrD.js";import{r as t,R as G}from"./index-BwDkhjyp.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as w}from"./floating-ui.core.mjs-LzsX8FoD.js";import{T as D}from"./Tag-D0bJ7i5y.js";import{C as be,M as Te,a as we}from"./ComposedModal-Bz57YeIR.js";import{S as Se}from"./Search-BNsOkhPW.js";import{p as _e,i as Ne}from"./props-helper-Bq60RLbY.js";import{u as xe}from"./usePortalTarget-C9qZOTQP.js";import{L as qe}from"./Link-Dcx-j9tl.js";import{O as ae}from"./OperationalTag-B3HIPX8m.js";import{P as Ce,a as $e}from"./index-CtP8jiW9.js";import{u as je}from"./useClickOutside-Dcd11u7q.js";import{g as ke}from"./devtools-BMJcATO0.js";import{u as le}from"./useResizeObserver-CYrpFlRY.js";const Ae="TagSetModal",P=`${I.prefix}--tag-set-modal`,oe={modalAriaLabel:"List of all tags",searchLabel:""},Y=({allTags:o,className:C,title:E,modalAriaLabel:A=oe.modalAriaLabel,onClose:h,open:S,portalTarget:r,searchLabel:v=oe.searchLabel,searchPlaceholder:O,..._})=>{const[y,M]=t.useState([]),[N,x]=t.useState(""),b=xe(r);t.useEffect(()=>{let n=[];if(S)if(N===""&&o)n=o==null?void 0:o.slice(0);else{const f=N.toLocaleLowerCase();o==null||o.forEach(p=>{var d,R,F,H;const m=(R=(d=p["data-search"])==null?void 0:d.toLocaleLowerCase())==null?void 0:R.indexOf(f),g=(H=(F=p.label)==null?void 0:F.toLocaleLowerCase())==null?void 0:H.indexOf(f);(m>-1||g>-1)&&n.push(p)})}M(n)},[o,S,N]);const s=n=>{x(n.target.value||"")};return b(a.jsxs(be,{..._,containerClassName:`${P}__container`,className:w(C,`${P}`),size:"sm",open:S,onClose:h,children:[a.jsx(Te,{className:`${P}__header`,closeModal:h,title:E,children:a.jsx(Se,{"data-modal-primary-focus":!0,className:`${P}__search`,labelText:v,placeholder:O,onChange:s,size:"lg"})}),a.jsxs(we,{className:`${P}__body`,hasForm:!0,hasScrollingContent:!0,"aria-label":A,children:[y.map(({label:n,...f},p)=>t.createElement(D,{...f,filter:!1,key:`all-tags-${p}`},n)),a.jsx("div",{className:`${P}__fade`})]})]}))};Y.propTypes={allTags:e.arrayOf(e.shape({..._e(D.propTypes,"filter"),label:e.string.isRequired})),className:e.string,onClose:e.func,open:e.bool,portalTarget:e.node,searchLabel:e.string,searchPlaceholder:e.string,title:e.string};Y.displayName=Ae;const Oe="TagSetOverflow",u=`${I.prefix}--tag-set-overflow`,Me={allTagsModalSearchThreshold:10},K=G.forwardRef(({allTagsModalSearchThreshold:o=Me.allTagsModalSearchThreshold,onOverflowClick:C,className:E,onShowAllClick:A,overflowAlign:h="bottom",overflowAutoAlign:S,overflowTags:r,overflowType:v,showAllTagsLabel:O,popoverOpen:_,setPopoverOpen:y,size:M,...N},x)=>{const b=t.useRef(null),s=t.useRef(null);je(x||b,()=>{_&&y(!1)});const n=m=>{m.stopPropagation(),m.preventDefault(),y(!1),A()},f=m=>{const{key:g}=m;g==="Escape"&&y(!1)},p=()=>{C?C(r):y(!_)};return C?a.jsx("span",{...N,"aria-hidden":r.length===0,className:w(`${u}`,{[`${u}--hidden`]:r.length===0}),ref:x||b,children:a.jsx(ae,{onClick:()=>p(),className:`${u}__popover-trigger`,size:M,text:`+${r.length}`})}):a.jsx("span",{...N,"aria-hidden":r.length===0,className:w(`${u}`,{[`${u}--hidden`]:r.length===0}),ref:x||b,children:a.jsxs(Ce,{align:h,className:w(E,`${u}__tagset-popover`),dropShadow:!0,highContrast:!0,onKeyDown:f,open:_,autoAlign:S,children:[a.jsx(ae,{onClick:()=>y(!_),className:w(`${u}__popover-trigger`),size:M,text:`+${r.length}`}),a.jsx($e,{children:a.jsxs("div",{ref:s,className:`${u}__content`,children:[a.jsx("ul",{className:`${u}__tag-list`,children:r.filter((m,g)=>r.length>o?g<o:g<=o).map((m,g)=>{const d={};if(v==="tag"&&(d.type="high-contrast"),v==="default"&&(d.filter=!1),G.isValidElement(m))return a.jsx("li",{className:w(`${u}__tag-item`,{[`${u}__tag-item--default`]:v==="default",[`${u}__tag-item--tag`]:v==="tag"}),children:G.cloneElement(m,d)},g)})}),r.length>o&&a.jsx(qe,{className:`${u}__show-all-tags-link`,href:"",onClick:n,role:"button",children:O})]})})]})})});K.displayName=Oe;K.propTypes={allTagsModalSearchThreshold:e.number,className:e.string,onOverflowClick:e.func,onShowAllClick:e.func.isRequired,overflowAlign:e.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"]),overflowAutoAlign:e.bool,overflowTags:e.arrayOf(e.object).isRequired,overflowType:e.oneOf(["default","tag"]),popoverOpen:e.bool,setPopoverOpen:e.func.isRequired,showAllTagsLabel:e.string,size:e.string};K.__docgenInfo={description:"",methods:[],displayName:"TagSetOverflow",props:{allTagsModalSearchThreshold:{required:!1,tsType:{name:"number"},description:"count of overflowTags over which a modal is offered",defaultValue:{value:"10",computed:!1},type:{name:"number"}},className:{required:!1,tsType:{name:"string"},description:"className",type:{name:"string"}},onOverflowClick:{required:!1,tsType:{name:"union",raw:"((overFlowTags: ReactNode[]) => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"An optional click handler that overrides the default functionality of displaying all tags in a modal",type:{name:"func"}},onShowAllClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"function to execute on clicking show all",type:{name:"func"}},overflowAlign:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-left'
| 'top-right'
| 'bottom'
| 'bottom-left'
| 'bottom-right'
| 'left'
| 'left-bottom'
| 'left-top'
| 'right'
| 'right-bottom'
| 'right-top'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-bottom'"},{name:"literal",value:"'right-top'"}]},description:"overflowAlign from the standard tooltip",defaultValue:{value:"'bottom'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'left'",computed:!1},{value:"'left-bottom'",computed:!1},{value:"'left-top'",computed:!1},{value:"'right'",computed:!1},{value:"'right-bottom'",computed:!1},{value:"'right-top'",computed:!1}]}},overflowTags:{required:!0,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:`@type {Array<any>}
tags shown in overflow`,type:{name:"arrayOf",value:{name:"object"}}},overflowType:{required:!1,tsType:{name:"union",raw:"'default' | 'tag'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'tag'"}]},description:"Type of rendering displayed inside of the tag overflow component",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'tag'",computed:!1}]}},overflowAutoAlign:{required:!1,tsType:{name:"boolean"},description:"Will auto-align the popover on first render if it is not visible. This prop is currently experimental and is subject to future changes.",type:{name:"bool"}},popoverOpen:{required:!1,tsType:{name:"boolean"},description:"Open state of the popover",type:{name:"bool"}},setPopoverOpen:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:"Setter function for the popoverOpen state value",type:{name:"func"}},showAllTagsLabel:{required:!1,tsType:{name:"string"},description:"label for the overflow show all tags link",type:{name:"string"}},size:{required:!1,tsType:{name:"string"},description:"Size of the overflow tag",type:{name:"string"}}}};const J="TagSet",T=`${I.prefix}--tag-set`,ne=10,se={align:"start",measurementOffset:0,overflowAlign:"bottom",overflowType:"default",onOverflowTagChange:()=>{}};let V=G.forwardRef(({align:o="start",allTagsModalTarget:C,className:E,maxVisible:A,multiline:h,overflowAutoAlign:S,overflowAlign:r="bottom",overflowClassName:v,overflowType:O="default",allTagsModalAriaLabel:_,allTagsModalTitle:y="All tags",allTagsModalSearchLabel:M="Search all tags",allTagsModalSearchPlaceholderText:N="Search all tags",showAllTagsLabel:x="View all tags",onOverflowClick:b,tags:s,containingElementRef:n,measurementOffset:f=se.measurementOffset,onOverflowTagChange:p=se.onOverflowTagChange,...m},g)=>{const[d,R]=t.useState(3),[F,H]=t.useState([]),[ie,ue]=t.useState([]),[pe,Q]=t.useState(!1),me=t.useRef(null),L=g||me,X=t.useRef(null),de=t.useRef(null),[$,ce]=t.useState([]),U=t.useRef(null),[W,fe]=t.useState(0),[Z,ee]=t.useState(!1),ge=()=>{Q(!0)};t.useEffect(()=>{const l=A||(s==null?void 0:s.length)||0;fe(l)},[A,s]),t.useEffect(()=>{const l=[];ue(s&&s.length>0?s.map(({label:i,id:j,...k},c)=>a.jsx("div",{className:`${T}__sizing-tag`,ref:q=>{q!=null&&(l[c]=q)},children:a.jsx(D,{...k,"data-original-id":j,children:i})},c)):[]),ce(l)},[s]);const te=t.useCallback((l,i)=>{l==null||l(),i<=d-1&&ee(!1)},[d]);t.useEffect(()=>{let l="md",i=s&&s.length>0?s.map(({label:k,onClose:c,...q},z)=>(z==s.length-1&&q.size&&(l=q.size),t.createElement(D,{...q,key:`displayed-tag-${z}`,onClose:()=>te(c,z)},k))):[];const j=i.splice(d,i.length-d);i=i.map((k,c)=>a.jsx("div",{className:`${T}__displayed-tag`,children:k},c)),i.push(a.jsx(K,{allTagsModalSearchThreshold:ne,overflowAutoAlign:S,className:v,onShowAllClick:ge,overflowTags:j,overflowAlign:r,overflowType:O,showAllTagsLabel:x,size:l,ref:U,popoverOpen:Z,onOverflowClick:b,setPopoverOpen:ee},"displayed-tag-overflow")),p==null||p(j),H(i)},[d,r,v,O,x,b,s,p,Z,te,S]);const B=t.useCallback(()=>{var i;if(h)return R(W);let l=0;if($.length>0){const j=n==null?void 0:n.current,k=typeof f=="number"?f:0;let c=j?j.offsetWidth-k:L==null?void 0:L.current.offsetWidth;for(const q in $){const z=((i=$[q])==null?void 0:i.offsetWidth)||0;if(c>=z)c-=z,l+=1;else break}if(l<$.length&&U.current)for(;l>0&&c<U.current.offsetWidth;)l-=1,c+=$[l].offsetWidth}l<1?R(0):R(W?Math.min(l,W):l)},[W,h,$,L,f,n]);t.useEffect(()=>{B()},[B,W,h,$]);const he=()=>{B()},ve=()=>{B()},ye=()=>{Q(!1)};return le(X,ve),le(n||L,he),a.jsxs("div",{...m,className:w([T,E]),ref:L,...ke(J),children:[a.jsxs("div",{className:w([`${T}__space`,`${T}__space--align-${o}`]),children:[a.jsx("div",{className:`${T}__tag-container ${T}__tag-container--hidden`,"aria-hidden":!0,ref:X,children:ie}),a.jsx("div",{className:w([`${T}__tag-container`,h&&`${T}__tag-container--multiline`]),ref:de,children:F})]}),!b&&a.jsx(Y,{allTags:s,open:pe,title:y,onClose:ye,modalAriaLabel:_,searchLabel:M,searchPlaceholder:N,portalTarget:C})]})});V=I.checkComponentEnabled(V,J);const Qe=Ne(e.string,({tags:o})=>o&&o.length>ne),Re={red:"Red",magenta:"Magenta",purple:"Purple",blue:"Blue",cyan:"Cyan",teal:"Teal",green:"Green",gray:"Gray","cool-gray":"Cool-Gray","warm-gray":"Warm-Gray","high-contrast":"High-Contrast",outline:"Outline"},re=Object.keys(Re);V.types=re;V.propTypes={align:e.oneOf(["start","center","end"]),allTagsModalAriaLabel:e.string,allTagsModalSearchLabel:e.string,allTagsModalSearchPlaceholderText:e.string,allTagsModalTarget:e.node,allTagsModalTitle:e.string,className:e.string,containingElementRef:e.object,maxVisible:e.number,measurementOffset:e.number,multiline:e.bool,onOverflowClick:e.func,onOverflowTagChange:e.func,overflowAlign:e.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-bottom","left-top","right","right-bottom","right-top"]),overflowAutoAlign:e.bool,overflowClassName:e.string,overflowType:e.oneOf(["default","tag"]),showAllTagsLabel:e.string,tags:e.arrayOf(e.shape({...D.propTypes,label:e.string.isRequired,type:e.oneOf(re)}))};V.displayName=J;V.__docgenInfo={description:"",methods:[],displayName:"TagSet",props:{align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"align the Tags displayed by the TagSet. Default start.",defaultValue:{value:"'start'",computed:!1},type:{name:"enum",value:[{value:"'start'",computed:!1},{value:"'center'",computed:!1},{value:"'end'",computed:!1}]}},allTagsModalAriaLabel:{required:!1,tsType:{name:"string"},description:"aria label for all tags modal with hasScrollingContent",type:{name:"string"}},allTagsModalSearchLabel:{required:!1,tsType:{name:"string"},description:"label text for the show all search.",defaultValue:{value:"'Search all tags'",computed:!1},type:{name:"string"}},allTagsModalSearchPlaceholderText:{required:!1,tsType:{name:"string"},description:"placeholder text for the show all search.",defaultValue:{value:"'Search all tags'",computed:!1},type:{name:"string"}},allTagsModalTarget:{required:!1,tsType:{name:"ReactNode"},description:"portal target for the all tags modal",type:{name:"node"}},allTagsModalTitle:{required:!1,tsType:{name:"string"},description:"title for the show all modal.",defaultValue:{value:"'All tags'",computed:!1},type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"className",type:{name:"string"}},containingElementRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:`Optional ref for custom resize container to measure available space
Default will measure the available space of the TagSet container itself.`,type:{name:"object"}},maxVisible:{required:!1,tsType:{name:"number"},description:"maximum visible tags",type:{name:"number"}},measurementOffset:{required:!1,tsType:{name:"number"},description:"Specify offset amount for measure available space, only used when `containingElementSelector`\nis also provided",defaultValue:{value:"0",computed:!1},type:{name:"number"}},multiline:{required:!1,tsType:{name:"boolean"},description:"display tags in multiple lines",type:{name:"bool"}},onOverflowClick:{required:!1,tsType:{name:"union",raw:"((overFlowTags: ReactNode[]) => void) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:"An optional click handler that overrides the default functionality of displaying all tags in a modal",type:{name:"func"}},onOverflowTagChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ReactNode) => void",signature:{arguments:[{type:{name:"ReactNode"},name:"value"}],return:{name:"void"}}},description:"Handler to get overflow tags",defaultValue:{value:"() => {}",computed:!1},type:{name:"func"}},overflowAlign:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'top-left'
| 'top-right'
| 'bottom'
| 'bottom-left'
| 'bottom-right'
| 'left'
| 'left-bottom'
| 'left-top'
| 'right'
| 'right-bottom'
| 'right-top'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-bottom'"},{name:"literal",value:"'right-top'"}]},description:"overflowAlign from the standard tooltip. Default center.",defaultValue:{value:"'bottom'",computed:!1},type:{name:"enum",value:[{value:"'top'",computed:!1},{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'left'",computed:!1},{value:"'left-bottom'",computed:!1},{value:"'left-top'",computed:!1},{value:"'right'",computed:!1},{value:"'right-bottom'",computed:!1},{value:"'right-top'",computed:!1}]}},overflowAutoAlign:{required:!1,tsType:{name:"boolean"},description:"Will auto-align the popover on first render if it is not visible. This prop is currently experimental and is subject to future changes.",type:{name:"bool"}},overflowClassName:{required:!1,tsType:{name:"string"},description:"overflowClassName for the tooltip popup",type:{name:"string"}},overflowType:{required:!1,tsType:{name:"union",raw:"'default' | 'tag'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'tag'"}]},description:"Type of rendering displayed inside of the tag overflow component",defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'tag'",computed:!1}]}},showAllTagsLabel:{required:!1,tsType:{name:"string"},description:"label for the overflow show all tags link.",defaultValue:{value:"'View all tags'",computed:!1},type:{name:"string"}},tags:{required:!1,tsType:{name:"Array",elements:[{name:"intersection",raw:`{
  label: string;
  type?: keyof typeof tagTypes;
} & TagBaseProps`,elements:[{name:"signature",type:"object",raw:`{
  label: string;
  type?: keyof typeof tagTypes;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"type",value:{name:"unknown",required:!1}}]}},{name:"TagBaseProps"}]}],raw:"TagType[]"},description:`The tags to be shown in the TagSet. Each tag is specified as an object
with properties: **label**\\* (required) to supply the tag content, and
other properties will be passed to the Carbon Tag component, such as
**type**, **disabled**, **ref**, **className** , and any other Tag props.

See https://react.carbondesignsystem.com/?path=/docs/components-tag--default`,type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},type:{name:"enum",value:[{value:'"red"',computed:!1},{value:'"magenta"',computed:!1},{value:'"purple"',computed:!1},{value:'"blue"',computed:!1},{value:'"cyan"',computed:!1},{value:'"teal"',computed:!1},{value:'"green"',computed:!1},{value:'"gray"',computed:!1},{value:'"cool-gray"',computed:!1},{value:'"warm-gray"',computed:!1},{value:'"high-contrast"',computed:!1},{value:'"outline"',computed:!1}],required:!1}}}}}},composes:["PropsWithChildren"]};export{V as T,Qe as s};
