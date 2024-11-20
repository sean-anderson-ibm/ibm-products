import{r as e,R as c}from"./index-BwDkhjyp.js";import{C as P,a as Q,b as $}from"./CoachmarkOverlayElements-DwrUkres.js";import{P as t}from"./index-Dk74W0Oi.js";import{r as X}from"./index-BONylQH5.js";import{c as q}from"./index-CO-HQMMN.js";import{g as Z}from"./devtools-7ohusRRR.js";import{p as M}from"./settings-9_3hiHpE.js";import{l as ee}from"./lodash-C6Eq4oiK.js";import{P as te,a as oe}from"./index-DQ9l4IMz.js";import{u as B}from"./useIsomorphicEffect-D7JMtAof.js";function ae(a,i,n,u){const r=e.useRef(void 0),p=n===P.TOOLTIP;e.useLayoutEffect(()=>{r.current=u},[u]),e.useEffect(()=>{function s(o){const h=i.current&&!i.current.contains(o.target),C=a.current&&!a.current.contains(o.target);h&&C&&b()}function b(){p&&r.current()}return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[a,i,p])}const se=(a,i)=>{const n=e.useRef(null);e.useEffect(()=>{n.current=i}),e.useEffect(()=>{function u(r){n.current&&n.current(r)}return window.addEventListener(a,u),()=>{window.removeEventListener(a,u)}},[a])},L=`${M.prefix}--coachmark`,D=`${L}-overlay`,T="Coachmark",k={align:"bottom",onClose:()=>{},overlayKind:"tooltip",theme:"light"};let g=e.forwardRef(({align:a=k.align,autoAlign:i,children:n,className:u,onClose:r=k.onClose,overlayClassName:p,overlayKind:s=k.overlayKind,overlayRef:b,positionTune:o,portalTarget:h,target:C,theme:E=k.theme,...N},F)=>{const H=s===P.TOOLTIP,O=s===P.STACKED,[f,d]=e.useState(O),[A,S]=e.useState(!1),[W,K]=e.useState(),[j,z]=e.useState({x:0,y:0}),G=e.useRef(void 0),U=e.useRef(void 0),I=F||U,R=b||G,m=e.useRef(null),v=e.useRef(null);B(()=>{m.current=h?(document==null?void 0:document.querySelector(h))??(document==null?void 0:document.querySelector("body")):document==null?void 0:document.querySelector("body")},[h]);const V=()=>{d(!1)},y=e.useCallback(()=>{O||d(!1),r()},[O,r]),w=e.useCallback(l=>{l.key==="Escape"&&y()},[y]);e.useEffect(()=>(document.addEventListener("keydown",w,!1),()=>{document.removeEventListener("keydown",w,!1)}),[w]);const _=l=>{K(l.target.getBoundingClientRect()),z({x:l.target.offsetLeft,y:l.target.offsetTop}),H?d(x=>!x):(d(!1),S(!0))},Y={buttonProps:{"aria-expanded":f,tabIndex:0,onClick:_,onDoubleClick:_},closeButtonProps:{onClick:y},targetRect:W,targetOffset:j,align:a,positionTune:o,isOpen:f},J=ee.throttle(()=>{V()},2e3);return e.useEffect(()=>{A&&(S(!1),d(!0))},[A]),B(()=>{const l={top:`${((o==null?void 0:o.y)??0)-16}px`,left:`${((o==null?void 0:o.x)??0)-16}px`};if(v.current&&v.current.style&&l){const x={position:"absolute",...l};Object.assign(v.current.style,x)}},[v,o]),e.useEffect(()=>()=>d(!1),[]),ae(I,R,s,V),se("resize",J),c.createElement(Q.Provider,{value:Y},c.createElement("div",{className:q(L,`${L}__${E}`,u),ref:I,...N,...Z(T)},s!=="tooltip"?c.createElement(c.Fragment,null,C,f&&(m==null?void 0:m.current)&&X.createPortal(c.createElement($,{ref:R,fixedIsVisible:!1,kind:s,onClose:y,theme:E,className:q(p,`${D}--is-visible`)},n),m==null?void 0:m.current)):c.createElement(te,{highContrast:!0,caret:!0,ref:v,align:a,autoAlign:i,open:f},C,c.createElement(oe,null,f&&c.createElement($,{ref:R,fixedIsVisible:!1,kind:s,onClose:y,theme:E,className:q(p,{[`${D}--is-visible`]:f})},n)))))});const ne=typeof HTMLElement>"u"?t.object:t.instanceOf(HTMLElement);g=M.checkComponentEnabled(g,T);g.displayName=T;g.propTypes={align:t.oneOf(["bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom","top","top-left","top-right"]),autoAlign:t.bool,children:t.node.isRequired,className:t.string,onClose:t.func,overlayClassName:t.string,overlayKind:t.oneOf(["tooltip","floating","stacked"]),overlayRef:t.shape({current:ne}),portalTarget:t.string,positionTune:t.shape({x:t.number,y:t.number}),target:t.node,theme:t.oneOf(["light","dark"])};g.__docgenInfo={description:`Coachmarks are used to call out specific functionality or concepts
within the UI that may not be intuitive but are important for the
user to gain understanding of the product's main value and discover new use cases.`,methods:[],displayName:"Coachmark",props:{align:{defaultValue:{value:"'bottom'",computed:!1},description:`Where to render the Coachmark relative to its target.
Applies only to Floating and Tooltip Coachmarks.
@see COACHMARK_ALIGNMENT`,type:{name:"enum",value:[{value:"'bottom'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1},{value:"'left'",computed:!1},{value:"'left-top'",computed:!1},{value:"'left-bottom'",computed:!1},{value:"'right'",computed:!1},{value:"'right-top'",computed:!1},{value:"'right-bottom'",computed:!1},{value:"'top'",computed:!1},{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1}]},required:!1},onClose:{defaultValue:{value:"() => {}",computed:!1},description:"Function to call when the Coachmark closes.",type:{name:"func"},required:!1},overlayKind:{defaultValue:{value:"'tooltip'",computed:!1},description:"What kind or style of Coachmark to render.",type:{name:"enum",value:[{value:"'tooltip'",computed:!1},{value:"'floating'",computed:!1},{value:"'stacked'",computed:!1}]},required:!1},theme:{defaultValue:{value:"'light'",computed:!1},description:"Determines the theme of the component.",type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1},autoAlign:{description:`Auto aligns the coachmark based on screen boundaries
Applies only to Tooltip Coachmarks.`,type:{name:"bool"},required:!1},children:{description:`Coachmark should use a single CoachmarkOverlayElements component as a child.
@see CoachmarkOverlayElements`,type:{name:"node"},required:!0},className:{description:"Optional class name for this component.",type:{name:"string"},required:!1},overlayClassName:{description:"Optional class name for the Coachmark Overlay component.",type:{name:"string"},required:!1},overlayRef:{description:"",type:{name:"shape",value:{current:{name:"custom",raw:"overlayRefType as PropTypes.Validator<HTMLElement | null>",required:!1}}},required:!1},portalTarget:{description:`By default, the Coachmark will be appended to the end of \`document.body\`.
The Coachmark will remain persistent as the user navigates the app until
the user closes the Coachmark.

Alternatively, the app developer can tightly couple the Coachmark to a DOM
element or other component by specifying a CSS selector. The Coachmark will
remain visible as long as that element remains visible or mounted. When the
element is hidden or component is unmounted, the Coachmark will disappear.`,type:{name:"string"},required:!1},positionTune:{description:"Fine tune the position of the target in pixels. Applies only to Beacons.",type:{name:"shape",value:{x:{name:"number",required:!1},y:{name:"number",required:!1}}},required:!1},target:{description:"The optional button or beacon that the user will click to show the Coachmark.",type:{name:"node"},required:!1}}};export{g as C};
