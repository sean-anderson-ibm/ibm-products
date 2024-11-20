import{R as t,r as E}from"./index-BwDkhjyp.js";import{b as G,_ as K,C as Be,c as X,n as de,e as ae,o as ce,S as me}from"./index-CO-HQMMN.js";import{o as ue,n as fe,T as Ie,p as ye,B as W}from"./settings-9_3hiHpE.js";import{a as Ce}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as Re}from"./StoryDocsPage-Cb8ckBcE.js";import{u as we}from"./index-DHGWxKiG.js";import{b as ke}from"./story-helper-6_fmjwZ-.js";import{C as ze,M as Oe,a as Pe,b as He}from"./ComposedModal-COQTPQ85.js";import{P as e}from"./index-Dk74W0Oi.js";import{c as Le}from"./events-OVwOsPzJ.js";import{L as Ae}from"./InlineLoading-BdVs8Ys4.js";import{a as Me}from"./bucket-2-Bt1jIBkN.js";import{W as Ue}from"./bucket-18-BI__9nmH.js";import{T as j}from"./Text-DeIkfaUm.js";import{T as je}from"./TextInput-ChL1gOHC.js";import{g as We}from"./devtools-7ohusRRR.js";import{u as Ke}from"./usePortalTarget-CBi58TPO.js";import{u as ne}from"./uuidv4-BQrI85uz.js";import{A as Ge}from"./bucket-0-a_zZqU1p.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BONylQH5.js";import"./index-CJvxHwuA.js";import"./index-DQ9l4IMz.js";import"./v4-CQkTLCs1.js";import"./iframe-CBdycsFE.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-C0xX6qoh.js";import"./index-DrFu-skq.js";import"./tslib.es6-B4_xh3D5.js";import"./index-DcAOwtUU.js";import"./index-Y0d6iLU4.js";import"./LayerContext-DbU-6VX4.js";import"./ButtonSet-Cn6zokRw.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-gin0UG4f.js";import"./bucket-6-DcTgwLU8.js";import"./useNormalizedInputProps-BXOXUZo5.js";import"./FormContext-C7kRVu4t.js";import"./useAnnouncer-Dwt0jqXi.js";import"./feature-flags-AXXmAEUF.js";import"./index-CeOnRtOi.js";var oe;function ge(l){let{iconDescription:p="Uploading file",status:a="uploading",invalid:u,name:c,tabIndex:v=0,["aria-describedby"]:y,...g}=l;const f=G();switch(a){case"uploading":return t.createElement(Ae,{description:p,small:!0,withOverlay:!1,className:`${f}--file-loading`});case"edit":return t.createElement(t.Fragment,null,u&&t.createElement(Ue,{className:`${f}--file-invalid`}),t.createElement("button",K({"aria-label":`${p} - ${c}`,className:`${f}--file-close`,type:"button",tabIndex:v},g,{"aria-describedby":u?y:void 0}),oe||(oe=t.createElement(Be,null))));case"complete":return t.createElement(Me,K({"aria-label":p,className:`${f}--file-complete`},g,{tabIndex:-1}),p&&t.createElement("title",null,p));default:return null}}ge.propTypes={"aria-describedby":e.string,iconDescription:e.string,invalid:e.bool,name:e.string,status:e.oneOf(["edit","complete","uploading"]),tabIndex:e.number};function be(l){let{accept:p=[],className:a,id:u,disabled:c,labelText:v="Add file",multiple:y=!1,name:g,onAddFiles:f=fe,onClick:N,pattern:R=".[0-9a-z]+$",innerRef:w,..._}=l;const m=G(),$=E.useRef(null),{current:o}=E.useRef(u||ue()),[B,D]=E.useState(!1),I=X(`${m}--file__drop-container`,`${m}--file-browse-btn`,{[`${m}--file__drop-container--drag-over`]:B,[`${m}--file-browse-btn--disabled`]:c},a);function x(r){if(!p.length)return r;const b=new Set(p);return r.reduce((F,C)=>{const{name:L,type:Y=""}=C,J=new RegExp(R,"i"),[A]=L.match(J)??[];return A===void 0?F:b.has(Y)||b.has(A.toLowerCase())?F.concat([C]):(C.invalidFileType=!0,F.concat([C]))},[])}function k(r){const b=[...r.target.files??[]],F=x(b);return f(r,{addedFiles:F})}function s(r){const b=[...r.dataTransfer.files],F=x(b);return f(r,{addedFiles:F})}const V=()=>{var r;c||(r=$.current)==null||r.click()};return t.createElement("div",{className:`${m}--file`,onDragOver:r=>{r.stopPropagation(),r.preventDefault(),!c&&(D(!0),r.dataTransfer.dropEffect="copy")},onDragLeave:r=>{r.stopPropagation(),r.preventDefault(),!c&&(D(!1),r.dataTransfer.dropEffect="move")},onDrop:r=>{r.stopPropagation(),r.preventDefault(),!c&&(D(!1),s(r))}},t.createElement("button",K({type:"button",className:I,ref:w,onKeyDown:r=>{var b;de(r,[ce,me])&&(r.preventDefault(),(b=$.current)==null||b.click())},onClick:Le([N,V])},_),v),t.createElement("label",{htmlFor:o,className:`${m}--visually-hidden`},v),t.createElement("input",{type:"file",id:o,className:`${m}--file-input`,ref:$,tabIndex:-1,disabled:c,accept:p.join(","),name:g,multiple:y,onChange:k,onClick:r=>{r.target.value=""}}))}be.propTypes={accept:e.arrayOf(e.string),className:e.string,disabled:e.bool,id:e.string,labelText:e.string.isRequired,multiple:e.bool,name:e.string,onAddFiles:e.func,onClick:e.func,pattern:e.string,role:ae(e.number),tabIndex:ae(e.number)};function he(l){let{uuid:p,name:a,status:u="uploading",iconDescription:c,onDelete:v=fe,invalid:y,errorSubject:g,errorBody:f,size:N,className:R,...w}=l;const _=E.useRef(null),[m,$]=E.useState(!1),o=G(),{current:B}=E.useRef(p||ue()),D=X(`${o}--file__selected-file`,R,{[`${o}--file__selected-file--invalid`]:y,[`${o}--file__selected-file--md`]:N==="md",[`${o}--file__selected-file--sm`]:N==="sm"}),I=y?`${o}--file-filename-container-wrap-invalid`:`${o}--file-filename-container-wrap`,x=s=>s==null?void 0:s.replace(/\s+/g,""),k=s=>($(s.offsetWidth<s.scrollWidth),s.offsetWidth<s.scrollWidth);return E.useLayoutEffect(()=>{k(_.current)},[o,a]),t.createElement("span",K({className:D},w),m?t.createElement("div",{className:I},t.createElement(Ie,{label:a,align:"bottom",className:`${o}--file-filename-tooltip`},t.createElement("button",{className:`${o}--file-filename-button`,type:"button"},t.createElement(j,{ref:_,as:"p",title:a,className:`${o}--file-filename-button`,id:x(a)},a)))):t.createElement(j,{ref:_,as:"p",title:a,className:`${o}--file-filename`,id:x(a)},a),t.createElement("div",{className:`${o}--file-container-item`},t.createElement("span",{className:`${o}--file__state-container`},t.createElement(ge,{name:a,iconDescription:c,status:u,invalid:y,"aria-describedby":y&&g?`${x(a)}-id-error`:void 0,onKeyDown:s=>{de(s,[ce,me])&&u==="edit"&&(s.preventDefault(),v(s,{uuid:B}))},onClick:s=>{u==="edit"&&v(s,{uuid:B})}}))),y&&g&&t.createElement("div",{className:`${o}--form-requirement`,role:"alert",id:`${x(a)}-id-error`},t.createElement(j,{as:"div",className:`${o}--form-requirement__title`},g),f&&t.createElement(j,{as:"p",className:`${o}--form-requirement__supplement`},f)))}he.propTypes={errorBody:e.string,errorSubject:e.string,iconDescription:e.string,invalid:e.bool,name:e.string,onDelete:e.func,size:e.oneOf(["sm","md","lg"]),status:e.oneOf(["uploading","edit","complete"]),uuid:e.string};const Z="ImportModal";let q=E.forwardRef(({accept:l=[],className:p,defaultErrorBody:a,defaultErrorHeader:u,description:c,fetchErrorBody:v,fetchErrorHeader:y,fileDropHeader:g,fileDropLabel:f,fileUploadLabel:N,inputButtonIcon:R,inputButtonText:w,inputId:_,inputLabel:m,inputPlaceholder:$,invalidFileTypeErrorBody:o,invalidFileTypeErrorHeader:B,invalidIconDescription:D,maxFileSize:I,maxFileSizeErrorBody:x,maxFileSizeErrorHeader:k,onClose:s,onRequestSubmit:V,open:r,portalTarget:b,primaryButtonText:F,secondaryButtonText:C,title:L,...Y},J)=>{const A=G(),[z,M]=E.useState([]),[O,ee]=E.useState(""),Te=Ke(b),ve=i=>{const T=new Set(l),S=i.name,d=i.type,n=`.${S.split(".").pop()}`;return!(T.has(d)||T.has(n)||l.length===0)},Q=i=>{const S=[...i.map(d=>{const n={uuid:d.uuid||ne(),status:"edit",iconDescription:D,name:d.name,fileSize:d.size,invalidFileType:d.invalidFileType,fileData:d,fetchError:d.fetchError};return n.fetchError?(n.errorBody=v||a,n.errorSubject=y||u,n.invalid=!0):n.invalidFileType?(n.errorBody=o||a,n.errorSubject=B||u,n.invalid=!0):I&&((n==null?void 0:n.fileSize)??0)>I&&(n.errorBody=x||a,n.errorSubject=k||u,n.invalid=!0),n})];M(S)},xe=async i=>{i.preventDefault();const T=O.substring(O.lastIndexOf("/")+1).split("?")[0],S={name:T,status:"uploading",uuid:ne()};M([S]);try{const d=await fetch(O);if(!d.ok||d.status!==200)throw new Error(`${d.status}`);const n=await d.blob(),U=new File([n],T,{type:n.type});U.invalidFileType=ve(U),U.uuid=S.uuid,Q([U])}catch{const n={...S,fetchError:!0};Q([n])}},Fe=(i,{addedFiles:T})=>{i.stopPropagation(),Q(T)},Se=i=>{const T=z.filter(S=>S.uuid!==i);M(T)},_e=()=>{V(z)},$e=i=>{ee(i.target.value)},te=()=>{M([]),ee(""),s&&s()},re=z.length,ie=z.filter(i=>!i.invalid).length,P=re>0,De=!P||!(ie>0),qe=!O||P,Ne=`${ie} / ${re} ${N}`,h=`${ye.prefix}--import-modal`;return Te(t.createElement(ze,{...Y,open:r,ref:J,...We(Z),"aria-label":L,className:X(h,p),size:"sm",preventCloseOnClickOutside:!0,onClose:te},t.createElement(Oe,{className:`${h}__header`,title:L}),t.createElement(Pe,{className:`${h}__body-container`},c&&t.createElement("p",{className:`${h}__body`},c),g&&t.createElement("p",{className:`${h}__file-drop-header`},g),t.createElement(be,{accept:l,labelText:f,onAddFiles:Fe,disabled:P,"data-modal-primary-focus":!0}),m&&t.createElement("p",{className:`${h}__label`},m),t.createElement("div",{className:`${h}__input-group`},t.createElement(je,{labelText:"",id:_||"",onChange:$e,placeholder:$,value:O,disabled:P,"aria-label":m}),t.createElement(W,{onClick:xe,className:`${h}__import-button`,size:"sm",disabled:qe,renderIcon:R?i=>t.createElement(Ge,{size:20,...i}):void 0},w)),t.createElement("div",{className:`${A}--file-container ${h}__file-container`},P&&t.createElement("p",{className:`${h}__helper-text`},Ne),z.map(i=>t.createElement(he,{key:i.uuid,onDelete:()=>Se(i.uuid),name:i.name,status:i.status,size:"lg",uuid:i.uuid,iconDescription:i.iconDescription,invalid:i.invalid,errorBody:i.errorBody,errorSubject:i.errorSubject,filesize:i.fileSize})))),t.createElement(He,{className:`${h}__footer`},t.createElement(W,{type:"button",kind:"secondary",onClick:te},C),t.createElement(W,{type:"submit",kind:"primary",onClick:_e,disabled:De},F))))});q=ye.checkComponentEnabled(q,Z);q.propTypes={accept:e.array,className:e.string,defaultErrorBody:e.string.isRequired,defaultErrorHeader:e.string.isRequired,description:e.string,fetchErrorBody:e.string,fetchErrorHeader:e.string,fileDropHeader:e.string,fileDropLabel:e.string,fileUploadLabel:e.string,inputButtonIcon:e.bool,inputButtonText:e.string.isRequired,inputId:e.string,inputLabel:e.string,inputPlaceholder:e.string,invalidFileTypeErrorBody:e.string,invalidFileTypeErrorHeader:e.string,invalidIconDescription:e.string,maxFileSize:e.number,maxFileSizeErrorBody:e.string,maxFileSizeErrorHeader:e.string,onClose:e.func,onRequestSubmit:e.func.isRequired,open:e.bool.isRequired,portalTarget:e.node,primaryButtonText:e.string.isRequired,secondaryButtonText:e.string.isRequired,title:e.string.isRequired};q.displayName=Z;q.__docgenInfo={description:"",methods:[],displayName:"ImportModal",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Specifies the file types that are valid for importing",defaultValue:{value:"[]",computed:!1},type:{name:"array"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},defaultErrorBody:{required:!0,tsType:{name:"string"},description:"The default message shown for an import error",type:{name:"string"}},defaultErrorHeader:{required:!0,tsType:{name:"string"},description:"The default header that is displayed to show an error message",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Content that is displayed inside the modal",type:{name:"string"}},fetchErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error body to display specifically for a fetch error",type:{name:"string"}},fetchErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a fetch error",type:{name:"string"}},fileDropHeader:{required:!1,tsType:{name:"string"},description:"Header for the drag and drop box",type:{name:"string"}},fileDropLabel:{required:!1,tsType:{name:"string"},description:"Label for the drag and drop box",type:{name:"string"}},fileUploadLabel:{required:!1,tsType:{name:"string"},description:"Label that appears when a file is uploaded to show number of files (1 / 1)",type:{name:"string"}},inputButtonIcon:{required:!1,tsType:{name:"boolean"},description:"Button icon for import by url button",type:{name:"bool"}},inputButtonText:{required:!0,tsType:{name:"string"},description:"Button text for import by url button",type:{name:"string"}},inputId:{required:!1,tsType:{name:"string"},description:"ID for text input",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"Header to display above import by url",type:{name:"string"}},inputPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for text input",type:{name:"string"}},invalidFileTypeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a invalid file type error",type:{name:"string"}},invalidFileTypeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a invalid file type error",type:{name:"string"}},invalidIconDescription:{required:!1,tsType:{name:"string"},description:"Description for delete file icon",type:{name:"string"}},maxFileSize:{required:!1,tsType:{name:"number"},description:"File size limit in bytes",type:{name:"number"}},maxFileSizeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a max file size error",type:{name:"string"}},maxFileSizeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a max file size error",type:{name:"string"}},open:{required:!0,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},onClose:{description:"Specify a handler for closing modal",type:{name:"func"},required:!1},onRequestSubmit:{description:'Specify a handler for "submitting" modal. Access the imported file via `file => {}`',type:{name:"func"},required:!0}}};const Ee=()=>{const{csfFile:l}=we("meta",["meta"]);return t.createElement(Re,{altGuidelinesHref:[ke(l),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})};Ee.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const Lt={title:"IBM Products/Patterns/Import and upload/ImportModal",component:q,tags:["autodocs"],parameters:{docs:{page:Ee}},argTypes:{accept:{control:{type:"select",labels:{0:"image (png, jpeg or gif)",1:"document (doc or pdf)",2:"development (html, css or javascript)"}},options:[0,1,2],mapping:{0:["image/png","image/jpeg","image/gif"],1:["application/doc","application/docx","application/pdf"],2:["text/plain","text/css","text/html","text/javascript"]}},portalTarget:{control:!1}}},Ve={className:"test-class",defaultErrorBody:"Select a new file and try again.",defaultErrorHeader:"Import failed",description:"You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB)",fetchErrorBody:"Unable to fetch URL.",fetchErrorHeader:"Import failed",fileDropHeader:"Add files using drag and drop",fileDropLabel:"Drag and drop files here or click to upload",fileUploadLabel:"files uploaded",inputButtonIcon:!1,inputButtonText:"Add file",inputId:"test-id",inputLabel:"Add a file by specifying a URL",inputPlaceholder:"URL",invalidFileTypeErrorBody:"Invalid file type.",invalidFileTypeErrorHeader:"Import failed",invalidIconDescription:"Delete",maxFileSize:5e5,maxFileSizeErrorBody:"500kb max file size. Select a new file and try again.",maxFileSizeErrorHeader:"Import failed",onClose:Ce("onClose event"),onRequestSubmit:l=>console.log("file contents",l),open:!0,primaryButtonText:"Import",secondaryButtonText:"Cancel",title:"Import"},Ye=l=>{const[p,a]=E.useState(!1);return t.createElement(t.Fragment,null,t.createElement(q,{...l,open:p,onClose:()=>a(!1)}),t.createElement(W,{onClick:()=>a(!0)},"Launch modal"))},H=Ye.bind({});H.args={accept:0,...Ve};var se,le,pe;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <ImportModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(pe=(le=H.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};const At=["Standard"];export{H as Standard,At as __namedExportsOrder,Lt as default};
