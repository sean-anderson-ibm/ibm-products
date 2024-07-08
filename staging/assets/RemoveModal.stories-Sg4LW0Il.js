import{p as j,j as t,B as h}from"./settings-BiUEFdm2.js";import{r as a}from"./index-BwDkhjyp.js";import{c as Z}from"./deprecate-D9ms-jbM.js";import{S as ee}from"./StoryDocsPage-D8CHG6Rh.js";import{u as te}from"./index-Bn0fEmUD.js";import{b as oe}from"./story-helper-YTYnELA9.js";import{C as ne,M as re,a as se,b as ae}from"./ComposedModal-Ckm8JaZ3.js";import{T as ie}from"./TextInput-CjYtA_nO.js";import{P as e}from"./index-Dk74W0Oi.js";import{g as pe}from"./devtools-BPcQvzXy.js";import{u as le}from"./uuidv4-BQrI85uz.js";import{u as me}from"./usePortalTarget-CUzsWZah.js";import{u as de}from"./usePreviousValue-DDnp_zt4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./iframe--N8dq0Yd.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./ButtonSet-CqsYbwZH.js";import"./InlineLoading-DEQVZSgg.js";import"./bucket-5-BuK6y5Rd.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-gKY8typL.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./Text-_TFgs5hl.js";import"./bucket-17-CArjO86K.js";import"./FormContext-C7kRVu4t.js";import"./bucket-16-C-1D9aPX.js";import"./useAnnouncer-MW4fVOqQ.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-BO2nGe7b.js";const b="RemoveModal";let n=a.forwardRef(({body:s,className:c,iconDescription:u,inputInvalidText:y,inputLabelText:m,inputPlaceholderText:$,label:I,onClose:v,onRequestSubmit:L,open:d,portalTarget:E,preventCloseOnClickOutside:F,primaryButtonDisabled:H,primaryButtonText:G,primaryDangerDescription:U,resourceName:z,secondaryButtonText:A,textConfirmation:f,title:C,...V},J)=>{const r=de({open:d}),[R,q]=a.useState(""),K=a.useRef(le()),Q=me(E),W=Y=>{q(Y.target.value)},X=H?!0:!!(f&&R!==z),g=`${j.prefix}--remove-modal`;return a.useEffect(()=>{!d&&(r!=null&&r.open)&&q("")},[d,r==null?void 0:r.open]),Q(t.jsxs(ne,{...V,className:Z(g,c),size:"sm","aria-label":C,open:d,ref:J,preventCloseOnClickOutside:F,onClose:v,...pe(b),children:[t.jsx(re,{title:C,label:I,iconDescription:u}),t.jsxs(se,{children:[t.jsx("p",{className:`${g}__body`,children:s}),f&&t.jsx(ie,{id:`${K.current}-confirmation-input`,className:`${g}__input`,invalidText:y,labelText:m,placeholder:$,onChange:W,value:R,"data-modal-primary-focus":!0})]}),t.jsxs(ae,{children:[t.jsx(h,{type:"button",kind:"secondary",onClick:v,"data-modal-primary-focus":!f,children:A}),t.jsx(h,{type:"submit",kind:"danger",dangerDescription:U,onClick:L,disabled:X,children:G})]})]}))});n=j.checkComponentEnabled(n,b);n.propTypes={body:e.string.isRequired,className:e.string,iconDescription:e.string.isRequired,inputInvalidText:e.string,inputLabelText:e.node,inputPlaceholderText:e.string,label:e.string,onClose:e.func,onRequestSubmit:e.func,open:e.bool.isRequired,portalTarget:e.node,preventCloseOnClickOutside:e.bool,primaryButtonDisabled:e.bool,primaryButtonText:e.string,primaryDangerDescription:e.string,resourceName:e.string.isRequired,secondaryButtonText:e.string,textConfirmation:e.bool,title:e.string.isRequired};n.displayName=b;n.__docgenInfo={description:"",methods:[],displayName:"RemoveModal",props:{body:{required:!0,tsType:{name:"string"},description:"The content to be displayed in the body of the modal",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Optional classname",type:{name:"string"}},iconDescription:{required:!0,tsType:{name:"string"},description:'Provide a description for "close" icon that can be read by screen readers',type:{name:"string"}},inputInvalidText:{required:!1,tsType:{name:"string"},description:"Message showed when user input fails validation",type:{name:"string"}},inputLabelText:{required:!1,tsType:{name:"ReactNode"},description:"Label for text box",type:{name:"node"}},inputPlaceholderText:{required:!1,tsType:{name:"string"},description:"Placeholder for text box",type:{name:"string"}},label:{required:!1,tsType:{name:"string"},description:"Specify the modal label texts",type:{name:"string"}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function that runs when user closes the modal",type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function that runs when user submits the modal",type:{name:"func"}},open:{required:!0,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},preventCloseOnClickOutside:{required:!1,tsType:{name:"boolean"},description:"Prevent closing on click outside of modal",type:{name:"bool"}},primaryButtonDisabled:{required:!1,tsType:{name:"boolean"},description:"Specify whether the primary button should be disabled. This value will override textConfirmation",type:{name:"bool"}},primaryButtonText:{required:!1,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},primaryDangerDescription:{required:!1,tsType:{name:"string"},description:"Specify the danger description on the primary button",type:{name:"string"}},resourceName:{required:!0,tsType:{name:"string"},description:"The name of the resource being acted upon",type:{name:"string"}},secondaryButtonText:{required:!1,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},textConfirmation:{required:!1,tsType:{name:"boolean"},description:"Specify whether or not to show the text confirmation input",type:{name:"bool"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}}}};const _=()=>{const{csfFile:s}=te("meta",["meta"]);return t.jsx(ee,{altGuidelinesHref:[oe(s),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})};_.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const tt={title:"IBM Products/Patterns/Remove/RemoveModal",component:n,tags:["autodocs"],parameters:{docs:{page:_}},argTypes:{portalTarget:{control:!1}}},o="bx1001",T={body:`Deleting ${o} will permanently delete the configuration. This action cannot be undone.`,className:"remove-modal-test",title:"Confirm delete",iconDescription:"Close",inputInvalidText:"A valid value is required",inputLabelText:`Type ${o} to confirm`,inputPlaceholderText:"Name of resourceName",onClose:()=>!1,open:!0,primaryButtonDisabled:!1,primaryButtonText:"Delete",resourceName:o,secondaryButtonText:"Cancel",label:`Delete ${o}`,preventCloseOnClickOutside:!0},x=({open:s,...c},u)=>{const[y,m]=a.useState(u.viewMode!=="docs"&&s);return t.jsxs(t.Fragment,{children:[t.jsx(n,{...c,open:y,onClose:()=>m(!1)}),t.jsx(h,{onClick:()=>m(!0),children:"Launch modal"})]})},i=x.bind({});i.args={...T,body:`Removing ${o} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${o}`};const p=x.bind({});p.args={...T,body:`Removing ${o} will permanently remove the configuration. This action cannot be undone.`,title:"Confirm removal",primaryButtonText:"Remove",label:`Remove ${o}`,open:!0};const l=x.bind({});l.args={...T,textConfirmation:!0};var O,D,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var P,w,M;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(M=(w=p.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var k,S,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`({
  open: initOpen,
  ...args
}, context) => {
  const [open, setOpen] = useState(context.viewMode !== 'docs' && initOpen);
  return <>
      <RemoveModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(N=(S=l.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};const ot=["Standard","RemovePattern","DeletePattern"];export{l as DeletePattern,p as RemovePattern,i as Standard,ot as __namedExportsOrder,tt as default};