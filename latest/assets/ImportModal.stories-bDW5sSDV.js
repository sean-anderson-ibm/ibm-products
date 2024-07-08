import{r as ce,n as me,T as Ie,p as ue,j as o,B as W}from"./settings-DrdbGLhD.js";import{R as i,r as E}from"./index-BwDkhjyp.js";import{u as G,_ as K,C as je,c as Z,d as ne}from"./deprecate-D9ms-jbM.js";import{a as Ce}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{S as we}from"./StoryDocsPage-woJQAPsS.js";import{u as Re}from"./index-CeYEq9Lt.js";import{b as ze}from"./story-helper-CKb9Drku.js";import{C as Oe,M as ke,a as Pe,b as He}from"./ComposedModal-BkuB78hp.js";import{P as e}from"./index-Dk74W0Oi.js";import{b as Le,e as fe,j as Ae,f as ye,S as ge}from"./events-Bq7WR1mU.js";import{L as Me}from"./InlineLoading-DEQVZSgg.js";import{W as Ue}from"./bucket-17-CArjO86K.js";import{T as U}from"./Text-_TFgs5hl.js";import{T as We}from"./TextInput-C0l_7R0Q.js";import{g as Ke}from"./devtools-B_UYo462.js";import{u as Ge}from"./usePortalTarget-BwaChJ5a.js";import{u as se}from"./uuidv4-BQrI85uz.js";import{A as Ve}from"./bucket-0-D7rUCVax.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./iframe-Dn5BrwtG.js";import"../sb-preview/runtime.js";import"./extends-CCbyfPlC.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./tslib.es6-CI8bilKU.js";import"./index-DcAOwtUU.js";import"./ButtonSet-CqsYbwZH.js";import"./mergeRefs-CTUecegF.js";import"./requiredIfGivenPropIsTruthy-CU7JwK8h.js";import"./wrapFocus-CuszVIVc.js";import"./index-gKY8typL.js";import"./bucket-5-BuK6y5Rd.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./FormContext-C7kRVu4t.js";import"./bucket-16-C-1D9aPX.js";import"./useAnnouncer-MW4fVOqQ.js";import"./feature-flags-CaJ_YE9P.js";import"./index-DshjxXYm.js";import"./index-CQjTSNrb.js";var oe;function be(d){let{iconDescription:p="Uploading file",status:a="uploading",invalid:f,name:m,tabIndex:v=0,["aria-describedby"]:h,...x}=d;const y=G();switch(a){case"uploading":return i.createElement(Me,{description:p,small:!0,withOverlay:!1,className:`${y}--file-loading`});case"edit":return i.createElement(i.Fragment,null,f&&i.createElement(Ue,{className:`${y}--file-invalid`}),i.createElement("button",K({"aria-label":`${p} - ${m}`,className:`${y}--file-close`,type:"button",tabIndex:v},x,{"aria-describedby":f?h:void 0}),oe||(oe=i.createElement(je,null))));case"complete":return i.createElement(Le,K({"aria-label":p,className:`${y}--file-complete`},x,{tabIndex:-1}),p&&i.createElement("title",null,p));default:return null}}be.propTypes={"aria-describedby":e.string,iconDescription:e.string,invalid:e.bool,name:e.string,status:e.oneOf(["edit","complete","uploading"]),tabIndex:e.number};function he(d){let{accept:p=[],className:a,id:f,disabled:m,labelText:v="Add file",multiple:h=!1,name:x,onAddFiles:y=me,onClick:q,pattern:I=".[0-9a-z]+$",innerRef:j,...C}=d;const u=G(),n=E.useRef(null),{current:$}=E.useRef(f||ce()),[w,_]=E.useState(!1),N=Z(`${u}--file__drop-container`,`${u}--file-browse-btn`,{[`${u}--file__drop-container--drag-over`]:w,[`${u}--file-browse-btn--disabled`]:m},a);function l(t){if(!p.length)return t;const g=new Set(p);return t.reduce((F,B)=>{const{name:H,type:J=""}=B,Q=new RegExp(I,"i"),[L]=H.match(Q)??[];return L===void 0?F:g.has(J)||g.has(L.toLowerCase())?F.concat([B]):(B.invalidFileType=!0,F.concat([B]))},[])}function V(t){const g=[...t.target.files??[]],F=l(g);return y(t,{addedFiles:F})}function P(t){const g=[...t.dataTransfer.files],F=l(g);return y(t,{addedFiles:F})}const Y=()=>{var t;m||(t=n.current)==null||t.click()};return i.createElement("div",{className:`${u}--file`,onDragOver:t=>{t.stopPropagation(),t.preventDefault(),!m&&(_(!0),t.dataTransfer.dropEffect="copy")},onDragLeave:t=>{t.stopPropagation(),t.preventDefault(),!m&&(_(!1),t.dataTransfer.dropEffect="move")},onDrop:t=>{t.stopPropagation(),t.preventDefault(),!m&&(_(!1),P(t))}},i.createElement("button",K({type:"button",className:N,ref:j,onKeyDown:t=>{var g;fe(t,[ye,ge])&&(t.preventDefault(),(g=n.current)==null||g.click())},onClick:Ae([q,Y])},C),v),i.createElement("label",{htmlFor:$,className:`${u}--visually-hidden`},v),i.createElement("input",{type:"file",id:$,className:`${u}--file-input`,ref:n,tabIndex:-1,disabled:m,accept:p.join(","),name:x,multiple:h,onChange:V,onClick:t=>{t.target.value=null}}))}he.propTypes={accept:e.arrayOf(e.string),className:e.string,disabled:e.bool,id:e.string,labelText:e.string.isRequired,multiple:e.bool,name:e.string,onAddFiles:e.func,onClick:e.func,pattern:e.string,role:ne(e.number),tabIndex:ne(e.number)};function xe(d){let{uuid:p,name:a,status:f="uploading",iconDescription:m,onDelete:v=me,invalid:h,errorSubject:x,errorBody:y,size:q,className:I,...j}=d;const[C,u]=E.useState(!1),n=G(),{current:$}=E.useRef(p||ce()),w=Z(`${n}--file__selected-file`,I,{[`${n}--file__selected-file--invalid`]:h,[`${n}--file__selected-file--md`]:q==="md",[`${n}--file__selected-file--sm`]:q==="sm"}),_=h?`${n}--file-filename-container-wrap-invalid`:`${n}--file-filename-container-wrap`,N=l=>(u(l.offsetWidth<l.scrollWidth),l.offsetWidth<l.scrollWidth);return E.useLayoutEffect(()=>{const l=document.querySelector(`[title="${a}"]`);N(l)},[n,a]),i.createElement("span",K({className:w},j),C?i.createElement("div",{className:_},i.createElement(Ie,{label:a,align:"bottom",className:`${n}--file-filename-tooltip`},i.createElement("button",{className:`${n}--file-filename-button`,type:"button"},i.createElement(U,{as:"p",title:a,className:`${n}--file-filename-button`,id:a},a)))):i.createElement(U,{as:"p",title:a,className:`${n}--file-filename`,id:a},a),i.createElement("div",{className:`${n}--file-container-item`},i.createElement("span",{className:`${n}--file__state-container`},i.createElement(be,{name:a,iconDescription:m,status:f,invalid:h,"aria-describedby":`${a}-id-error`,onKeyDown:l=>{fe(l,[ye,ge])&&f==="edit"&&(l.preventDefault(),v(l,{uuid:$}))},onClick:l=>{f==="edit"&&v(l,{uuid:$})}}))),h&&x&&i.createElement("div",{className:`${n}--form-requirement`,role:"alert",id:`${a}-id-error`},i.createElement(U,{as:"div",className:`${n}--form-requirement__title`},x),y&&i.createElement(U,{as:"p",className:`${n}--form-requirement__supplement`},y)))}xe.propTypes={errorBody:e.string,errorSubject:e.string,iconDescription:e.string,invalid:e.bool,name:e.string,onDelete:e.func,size:e.oneOf(["sm","md","lg"]),status:e.oneOf(["uploading","edit","complete"]),uuid:e.string};const ee="ImportModal",Ye={accept:Object.freeze([])};let D=E.forwardRef(({accept:d=Ye.accept,className:p,defaultErrorBody:a,defaultErrorHeader:f,description:m,fetchErrorBody:v,fetchErrorHeader:h,fileDropHeader:x,fileDropLabel:y,fileUploadLabel:q,inputButtonIcon:I,inputButtonText:j,inputId:C,inputLabel:u,inputPlaceholder:n,invalidFileTypeErrorBody:$,invalidFileTypeErrorHeader:w,invalidIconDescription:_,maxFileSize:N,maxFileSizeErrorBody:l,maxFileSizeErrorHeader:V,onClose:P,onRequestSubmit:Y,open:t,portalTarget:g,primaryButtonText:F,secondaryButtonText:B,title:H,...J},Q)=>{const L=G(),[R,A]=E.useState([]),[z,te]=E.useState(""),Ee=Ge(g),ve=r=>{const T=new Set(d),S=r.name,c=r.type,s=`.${S.split(".").pop()}`;return!(T.has(c)||T.has(s)||d.length===0)},X=r=>{const S=[...r.map(c=>{const s={uuid:c.uuid||se(),status:"edit",iconDescription:_,name:c.name,fileSize:c.size,invalidFileType:c.invalidFileType,fileData:c,fetchError:c.fetchError};return s.fetchError?(s.errorBody=v||a,s.errorSubject=h||f,s.invalid=!0):s.invalidFileType?(s.errorBody=$||a,s.errorSubject=w||f,s.invalid=!0):N&&((s==null?void 0:s.fileSize)??0)>N&&(s.errorBody=l||a,s.errorSubject=V||f,s.invalid=!0),s})];A(S)},Fe=async r=>{r.preventDefault();const T=z.substring(z.lastIndexOf("/")+1).split("?")[0],S={name:T,status:"uploading",uuid:se()};A([S]);try{const c=await fetch(z);if(!c.ok||c.status!==200)throw new Error(`${c.status}`);const s=await c.blob(),M=new File([s],T,{type:s.type});M.invalidFileType=ve(M),M.uuid=S.uuid,X([M])}catch{const s={...S,fetchError:!0};X([s])}},Se=(r,{addedFiles:T})=>{r.stopPropagation(),X(T)},$e=r=>{const T=R.filter(S=>S.uuid!==r);A(T)},_e=()=>{Y(R)},De=r=>{te(r.target.value)},re=()=>{A([]),te(""),P&&P()},ie=R.length,ae=R.filter(r=>!r.invalid).length,O=ie>0,qe=!O||!(ae>0),Ne=!z||O,Be=`${ae} / ${ie} ${q}`,b=`${ue.prefix}--import-modal`;return Ee(o.jsxs(Oe,{...J,open:t,ref:Q,...Ke(ee),"aria-label":H,className:Z(b,p),size:"sm",preventCloseOnClickOutside:!0,onClose:re,children:[o.jsx(ke,{className:`${b}__header`,title:H}),o.jsxs(Pe,{className:`${b}__body-container`,children:[m&&o.jsx("p",{className:`${b}__body`,children:m}),x&&o.jsx("p",{className:`${b}__file-drop-header`,children:x}),o.jsx(he,{accept:d,labelText:y,onAddFiles:Se,disabled:O,"data-modal-primary-focus":!0}),u&&o.jsx("p",{className:`${b}__label`,children:u}),o.jsxs("div",{className:`${b}__input-group`,children:[o.jsx(We,{labelText:"",id:C,onChange:De,placeholder:n,value:z,disabled:O,"aria-label":u}),o.jsx(W,{onClick:Fe,className:`${b}__import-button`,size:"sm",disabled:Ne,renderIcon:I?r=>o.jsx(Ve,{size:20,...r}):null,children:j})]}),o.jsxs("div",{className:`${L}--file-container ${b}__file-container`,children:[O&&o.jsx("p",{className:`${b}__helper-text`,children:Be}),R.map(r=>o.jsx(xe,{onDelete:()=>$e(r.uuid),name:r.name,status:r.status,size:"lg",uuid:r.uuid,iconDescription:r.iconDescription,invalid:r.invalid,errorBody:r.errorBody,errorSubject:r.errorSubject,filesize:r.fileSize},r.uuid))]})]}),o.jsxs(He,{className:`${b}__footer`,children:[o.jsx(W,{type:"button",kind:"secondary",onClick:re,children:B}),o.jsx(W,{type:"submit",kind:"primary",onClick:_e,disabled:qe,children:F})]})]}))});D=ue.checkComponentEnabled(D,ee);D.propTypes={accept:e.array,className:e.string,defaultErrorBody:e.string.isRequired,defaultErrorHeader:e.string.isRequired,description:e.string,fetchErrorBody:e.string,fetchErrorHeader:e.string,fileDropHeader:e.string,fileDropLabel:e.string,fileUploadLabel:e.string,inputButtonIcon:e.bool,inputButtonText:e.string.isRequired,inputId:e.string,inputLabel:e.string,inputPlaceholder:e.string,invalidFileTypeErrorBody:e.string,invalidFileTypeErrorHeader:e.string,invalidIconDescription:e.string,maxFileSize:e.number,maxFileSizeErrorBody:e.string,maxFileSizeErrorHeader:e.string,onClose:e.func,onRequestSubmit:e.func.isRequired,open:e.bool.isRequired,portalTarget:e.node,primaryButtonText:e.string.isRequired,secondaryButtonText:e.string.isRequired,title:e.string.isRequired};D.displayName=ee;D.__docgenInfo={description:"",methods:[],displayName:"ImportModal",props:{accept:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Specifies the file types that are valid for importing",defaultValue:{value:"Object.freeze([])",computed:!0},type:{name:"array"}},className:{required:!1,tsType:{name:"string"},description:"Optional class name",type:{name:"string"}},defaultErrorBody:{required:!0,tsType:{name:"string"},description:"The default message shown for an import error",type:{name:"string"}},defaultErrorHeader:{required:!0,tsType:{name:"string"},description:"The default header that is displayed to show an error message",type:{name:"string"}},description:{required:!1,tsType:{name:"string"},description:"Content that is displayed inside the modal",type:{name:"string"}},fetchErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error body to display specifically for a fetch error",type:{name:"string"}},fetchErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a fetch error",type:{name:"string"}},fileDropHeader:{required:!1,tsType:{name:"string"},description:"Header for the drag and drop box",type:{name:"string"}},fileDropLabel:{required:!1,tsType:{name:"string"},description:"Label for the drag and drop box",type:{name:"string"}},fileUploadLabel:{required:!1,tsType:{name:"string"},description:"Label that appears when a file is uploaded to show number of files (1 / 1)",type:{name:"string"}},inputButtonIcon:{required:!1,tsType:{name:"boolean"},description:"Button icon for import by url button",type:{name:"bool"}},inputButtonText:{required:!0,tsType:{name:"string"},description:"Button text for import by url button",type:{name:"string"}},inputId:{required:!1,tsType:{name:"string"},description:"ID for text input",type:{name:"string"}},inputLabel:{required:!1,tsType:{name:"string"},description:"Header to display above import by url",type:{name:"string"}},inputPlaceholder:{required:!1,tsType:{name:"string"},description:"Placeholder for text input",type:{name:"string"}},invalidFileTypeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a invalid file type error",type:{name:"string"}},invalidFileTypeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a invalid file type error",type:{name:"string"}},invalidIconDescription:{required:!1,tsType:{name:"string"},description:"Description for delete file icon",type:{name:"string"}},maxFileSize:{required:!1,tsType:{name:"number"},description:"File size limit in bytes",type:{name:"number"}},maxFileSizeErrorBody:{required:!1,tsType:{name:"string"},description:"Optional error message to display specifically for a max file size error",type:{name:"string"}},maxFileSizeErrorHeader:{required:!1,tsType:{name:"string"},description:"Optional error header to display specifically for a max file size error",type:{name:"string"}},open:{required:!0,tsType:{name:"boolean"},description:"Specify whether the Modal is currently open",type:{name:"bool"}},portalTarget:{required:!1,tsType:{name:"ReactNode"},description:"The DOM node the tearsheet should be rendered within. Defaults to document.body.",type:{name:"node"}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the primary button",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specify the text for the secondary button",type:{name:"string"}},title:{required:!0,tsType:{name:"string"},description:"The text displayed at the top of the modal",type:{name:"string"}},onClose:{description:"Specify a handler for closing modal",type:{name:"func"},required:!1},onRequestSubmit:{description:'Specify a handler for "submitting" modal. Access the imported file via `file => {}`',type:{name:"func"},required:!0}}};const Te=()=>{const{csfFile:d}=Re("meta",["meta"]);return o.jsx(we,{altGuidelinesHref:[ze(d),{href:"https://www.carbondesignsystem.com/components/modal/usage",label:"Carbon Modal usage guidelines"},{href:"https://react.carbondesignsystem.com/?path=/docs/modal--default",label:"Carbon Modal documentation"}]})};Te.__docgenInfo={description:"",methods:[],displayName:"DocsPage"};const At={title:"IBM Products/Patterns/Import and upload/ImportModal",component:D,tags:["autodocs"],parameters:{docs:{page:Te}},argTypes:{accept:{control:{type:"select",labels:{0:"image (png, jpeg or gif)",1:"document (doc or pdf)",2:"development (html, css or javascript)"}},options:[0,1,2],mapping:{0:["image/png","image/jpeg","image/gif"],1:["application/doc","application/docx","application/pdf"],2:["text/plain","text/css","text/html","text/javascript"]}},portalTarget:{control:!1}}},Je={className:"test-class",defaultErrorBody:"Select a new file and try again.",defaultErrorHeader:"Import failed",description:"You can specify a file to import by either dragging it into the drag and drop area or by specifying a URL. (Maximum file size of 500KB)",fetchErrorBody:"Unable to fetch URL.",fetchErrorHeader:"Import failed",fileDropHeader:"Add files using drag and drop",fileDropLabel:"Drag and drop files here or click to upload",fileUploadLabel:"files uploaded",inputButtonIcon:!1,inputButtonText:"Add file",inputId:"test-id",inputLabel:"Add a file by specifying a URL",inputPlaceholder:"URL",invalidFileTypeErrorBody:"Invalid file type.",invalidFileTypeErrorHeader:"Import failed",invalidIconDescription:"Delete",maxFileSize:5e5,maxFileSizeErrorBody:"500kb max file size. Select a new file and try again.",maxFileSizeErrorHeader:"Import failed",onClose:Ce("onClose event"),onRequestSubmit:d=>console.log("file contents",d),open:!0,primaryButtonText:"Import",secondaryButtonText:"Cancel",title:"Import"},Qe=d=>{const[p,a]=E.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(D,{...d,open:p,onClose:()=>a(!1)}),o.jsx(W,{onClick:()=>a(!0),children:"Launch modal"})]})},k=Qe.bind({});k.args={accept:0,...Je};var le,de,pe;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>
      <ImportModal {...args} open={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>Launch modal</Button>
    </>;
}`,...(pe=(de=k.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const Mt=["Standard"];export{k as Standard,Mt as __namedExportsOrder,At as default};