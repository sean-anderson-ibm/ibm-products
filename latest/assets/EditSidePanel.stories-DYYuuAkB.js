import{p as P,j as e,B as F}from"./settings-DrdbGLhD.js";import{R as G,r as x}from"./index-BwDkhjyp.js";import{a as y}from"./chunk-MZXVCX43-CM0pFb8Z.js";import{c as H,i as z,u as A}from"./deprecate-D9ms-jbM.js";import{D as U}from"./Dropdown-B71Nk9fM.js";import{G as Y}from"./Grid-sFQW4EYz.js";import{C as L}from"./Column-joQvaXDX.js";import{N as d}from"./NumberInput-CdfmSC9K.js";import{H as W,a as J}from"./HeaderName-DQ5XwvUg.js";import{H as K}from"./HeaderContainer-Drmrq-i_.js";import{S as Q,a as X}from"./index-DQgsvTql.js";import{T as Z}from"./TextInput-C0l_7R0Q.js";import{S as ee}from"./StoryDocsPage-woJQAPsS.js";import{s as te}from"./sidePanelDecorator-BmY2bceZ.js";import{P as t}from"./index-Dk74W0Oi.js";import{g as ie}from"./devtools-B_UYo462.js";import{F as ne}from"./Form-Cl1Tfi_h.js";import"./props-helper-D-fMQKH_.js";import{u as oe}from"./uuidv4-BQrI85uz.js";import{S as se}from"./SidePanel-Ckg7Fc9s.js";import{a as ae}from"./bucket-13-DC_Wi0nI.js";import{T as re}from"./bucket-16-C-1D9aPX.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJvxHwuA.js";import"./events-Bq7WR1mU.js";import"./index-BONylQH5.js";import"./v4-CQkTLCs1.js";import"./index-JVWw4PeO.js";import"./extends-CCbyfPlC.js";import"./index-DcAOwtUU.js";import"./tslib.es6-CI8bilKU.js";import"./FormContext-C7kRVu4t.js";import"./mergeRefs-CTUecegF.js";import"./bucket-17-CArjO86K.js";import"./index-gKY8typL.js";import"./useNormalizedInputProps-DRpk_7sW.js";import"./Text-_TFgs5hl.js";import"./bucket-14-u3bYiptr.js";import"./bucket-0-D7rUCVax.js";import"./Link-CeOVr8UJ.js";import"./useAnnouncer-MW4fVOqQ.js";import"./index-CeYEq9Lt.js";import"./iframe-Dn5BrwtG.js";import"../sb-preview/runtime.js";import"./index-C2eUe6cH.js";import"./index-BjQFKvNH.js";import"./isSymbol-BZYRlrjc.js";import"./index-DrFu-skq.js";import"./story-helper-CKb9Drku.js";import"./index-DkUr2NOz.js";import"./motionConstants-DFa43y0E.js";import"./ActionSet-Byj_zrS3.js";import"./ButtonSet-CqsYbwZH.js";import"./InlineLoading-DEQVZSgg.js";import"./bucket-5-BuK6y5Rd.js";import"./usePreviousValue-DDnp_zt4.js";import"./useFocus-S7kgSeaq.js";const r=`${P.prefix}--edit-side-panel`,g="EditSidePanel";let o=G.forwardRef(({children:i,className:c,disableSubmit:u,id:f,formTitle:s,formDescription:a,onRequestClose:m,onRequestSubmit:p,open:h,placement:j="right",primaryButtonText:D,secondaryButtonText:_,selectorPrimaryFocus:R,selectorPageContent:w,size:I="md",slideIn:k,subtitle:O,title:$,...E},B)=>{const M=[{label:D,onClick:V=>{V.preventDefault(),p&&p()},kind:"primary",disabled:u,type:"submit"},{label:_,onClick:m,kind:"secondary"}],b=oe();return e.jsxs(se,{...E,open:h,ref:B,selectorPageContent:w,onRequestClose:m,title:$,subtitle:O,selectorPrimaryFocus:R,id:f,...ie(g),placement:j,slideIn:k,animateTitle:!1,className:H(r,c),size:I,preventCloseOnClickOutside:!0,actions:M,children:[s&&e.jsx("h3",{id:b,className:`${r}__form-title-text ${r}__content-text`,children:s}),a&&e.jsx("p",{className:`${r}__form-description-text ${r}__content-text`,children:a}),e.jsx(ne,{className:`${r}__form`,"aria-labelledby":b,children:i})]})});o=P.checkComponentEnabled(o,g);o.displayName=g;o.propTypes={children:t.oneOfType([t.arrayOf(t.node),t.node]).isRequired,className:t.string,disableSubmit:t.bool,formDescription:t.node,formTitle:t.node.isRequired,id:t.string,onRequestClose:t.func,onRequestSubmit:t.func,open:t.bool.isRequired,placement:t.oneOf(["left","right"]),primaryButtonText:t.string.isRequired,secondaryButtonText:t.string.isRequired,selectorPageContent:t.string.isRequired.if(({slideIn:i})=>i),selectorPrimaryFocus:t.node.isRequired,size:t.oneOf(["xs","sm","md","lg","2xl"]),slideIn:t.bool,slug:t.node,subtitle:t.node,title:t.node.isRequired};o.__docgenInfo={description:"Use with medium complexity edits if the user needs page context.",methods:[],displayName:"EditSidePanel",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Sets the body content of the create side panel",type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]}},className:{required:!1,tsType:{name:"string"},description:"Provide an optional class to be applied to the containing node.",type:{name:"string"}},disableSubmit:{required:!1,tsType:{name:"boolean"},description:"Specifies a boolean for disabling or enabling the primary button. This is important for form validation\nReturning `true` prevents the primary button from being clicked until required fields are completed.",type:{name:"bool"}},formDescription:{required:!1,tsType:{name:"ReactNode"},description:"Specifies an optional field that provides a additional context for a form",type:{name:"node"}},formTitle:{required:!0,tsType:{name:"ReactNode"},description:"Specifies a required field that provides a title for a form",type:{name:"node"}},id:{required:!1,tsType:{name:"string"},description:"Unique identifier",type:{name:"string"}},onRequestClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Specifies an optional handler which is called when the CreateSidePanel
is closed.`,type:{name:"func"}},onRequestSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Specifies an optional handler which is called when the CreateSidePanel
primary button is pressed.`,type:{name:"func"}},open:{required:!0,tsType:{name:"boolean"},description:"Specifies whether the CreateSidePanel is open or not.",type:{name:"bool"}},placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Determines if the side panel is on the right or left",defaultValue:{value:"'right'",computed:!1},type:{name:"enum",value:[{value:"'left'",computed:!1},{value:"'right'",computed:!1}]}},primaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the primary button's text in the modal.",type:{name:"string"}},secondaryButtonText:{required:!0,tsType:{name:"string"},description:"Specifies the secondary button's text in the modal.",type:{name:"string"}},selectorPageContent:{required:!0,tsType:{name:"string"},description:"This is the selector to the element that contains all of the page content that will shrink if the panel is a slide in.\nThis prop is required when using the `slideIn` variant of the side panel.",type:{name:"string"}},selectorPrimaryFocus:{required:!0,tsType:{name:"string"},description:"Specifies which DOM element in the form should be focused.",type:{name:"node"}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'2xl'"}]},description:"Sets the size of the side panel",defaultValue:{value:"'md'",computed:!1},type:{name:"enum",value:[{value:"'xs'",computed:!1},{value:"'sm'",computed:!1},{value:"'md'",computed:!1},{value:"'lg'",computed:!1},{value:"'2xl'",computed:!1}]}},slideIn:{required:!1,tsType:{name:"boolean"},description:"Specifies which DOM element in the form should be focused.",type:{name:"bool"}},slug:{required:!1,tsType:{name:"ReactNode"},description:"**Experimental:** Provide a `Slug` component to be rendered inside the `SidePanel` component",type:{name:"node"}},subtitle:{required:!1,tsType:{name:"ReactNode"},description:"The subtitle of the CreateSidePanel is optional and serves to provide more information about the modal.",type:{name:"node"}},title:{required:!0,tsType:{name:"string"},description:"The title of the CreateSidePanel is usually the product or service name.",type:{name:"node"}}}};const le=".edit-side-panel-stories__example-container{display:grid;align-items:flex-end;grid-gap:.75rem;grid-template-columns:1fr 1fr}.edit-side-panel-stories__example-form-group .cds--label{margin-bottom:0}.c4p--edit-side-panel .cds--number__control-btn:before,.c4p--edit-side-panel .cds--number__control-btn:after{background-color:var(--cds-field-02, #ffffff)}.edit-side-panel-stories__container{display:flex;height:100vh;flex-direction:column}.edit-side-panel-stories__content{flex-grow:1}.edit-side-panel-stories__toggle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",me=e.jsx(Q,{className:"slug-container",size:"xs",children:e.jsx(X,{children:e.jsxs("div",{children:[e.jsx("p",{className:"secondary",children:"AI Explained"}),e.jsx("h1",{children:"84%"}),e.jsx("p",{className:"secondary bold",children:"Confidence score"}),e.jsx("p",{className:"secondary",children:"This is not really Lorem Ipsum but the spell checker did not like the previous text with it's non-words which is why this unwieldy sentence, should one choose to call it that, here."}),e.jsx("hr",{}),e.jsx("p",{className:"secondary",children:"Model type"}),e.jsx("p",{className:"bold",children:"Foundation model"})]})})}),de={title:"Edit platform quotas",subtitle:"Specify the details of the quotas",formTitle:"Core configuration",formDescription:"We recommend you fill out and evaluate these details at a minimum before deploying your topic.",primaryButtonText:"Save",secondaryButtonText:"Cancel"},q=()=>e.jsx(K,{render:()=>e.jsx(W,{children:e.jsx(J,{href:"/",prefix:"IBM",children:"Cloud Pak"})})}),n="edit-side-panel-stories__",ht={title:"IBM Products/Patterns/Edit and update/EditSidePanel",component:o,tags:["autodocs"],argTypes:{title:{control:{type:"text"}},subtitle:{control:{type:"text"}},formTitle:{control:{type:"text"}},formDescription:{control:{type:"text"}},open:{control:{disable:!0}},slug:{control:{type:"select",labels:{0:"No AI slug",1:"with AI Slug"},default:0},options:[0,1]}},parameters:{layout:"fullscreen",styles:le,docs:{page:()=>e.jsx(ee,{altGuidelinesHref:"https://pages.github.ibm.com/cdai-design/pal/patterns/edit/usage#side-panel-edit"})}},decorators:[te(q,n)]},pe=({slug:i,...c})=>{const u=A(),f=["Day(s)","Month(s)","Year(s)"],[s,a]=x.useState(!1),[m,p]=x.useState("Cluster management");return e.jsxs(e.Fragment,{children:[q(),e.jsx(Y,{id:"ibm-products-page-content",className:"story-content",children:e.jsx(L,{lg:{span:2,start:8},children:e.jsx(F,{onClick:()=>a(!s),children:s?"Close side panel":"Open side panel"})})}),e.jsxs(o,{...c,id:"storybook-id",open:s,onRequestClose:()=>a(!1),onRequestSubmit:()=>a(!1),disableSubmit:!m.length,selectorPrimaryFocus:`.${u}--text-input`,slug:i&&me,children:[e.jsx(Z,{id:"create-side-panel-topic-name-a",labelText:"Topic name",className:`${n}form-item`,placeholder:"Enter topic name",value:m,onChange:h=>p(h.target.value)}),e.jsx(d,{iconDescription:"Choose a number",id:"1",className:`${n}form-item`,label:"Partitions",min:0,max:50,value:1}),e.jsx(d,{iconDescription:"Choose a number",id:"2",className:`${n}form-item`,label:"Replicas",min:0,max:50,value:1}),e.jsx(d,{iconDescription:"Choose a number",id:"3",className:`${n}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1}),e.jsxs("div",{style:{display:"grid",alignItems:"flex-end",gridGap:"0.75rem",gridTemplateColumns:"1fr 1fr"},children:[e.jsx(d,{iconDescription:"Choose a number",id:"4",className:`${n}form-item`,label:"Retention time",min:0,max:50,value:30}),e.jsx(U,{id:"create-side-panel-dropdown-options-a",items:f,initialSelectedItem:"Day(s)",label:"Options",titleText:"Options",className:`${n}form-item`})]}),e.jsx(d,{iconDescription:"Choose a number",id:"5",className:`${n}form-item`,label:"Minimum in-sync replicas",min:0,max:50,value:1})]})]})},l=pe.bind({});l.args={actionToolbarButtons:[{label:"Copy platform id",icon:i=>e.jsx(z,{size:16,...i}),onClick:y("Toolbar button clicked: Copy")},{label:"Settings",icon:i=>e.jsx(ae,{size:16,...i}),onClick:y("Toolbar button clicked: Settings")},{label:"Delete",icon:i=>e.jsx(re,{size:16,...i}),onClick:y("Toolbar button clicked: Delete")}],includeOverlay:!0,...de};var v,T,S,C,N;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`({
  slug,
  ...args
}) => {
  const carbonPrefix = usePrefix();
  const items = ['Day(s)', 'Month(s)', 'Year(s)'];
  const [open, setOpen] = useState(false);
  const [topicValue, setTopicValue] = useState('Cluster management');
  return <>
      {renderUIShellHeader()}
      <Grid id="ibm-products-page-content" className="story-content">
        <Column lg={{
        span: 2,
        start: 8
      }}>
          <Button onClick={() => setOpen(!open)}>
            {open ? 'Close side panel' : 'Open side panel'}
          </Button>
        </Column>
      </Grid>
      <EditSidePanel {...args} id="storybook-id" open={open} onRequestClose={() => setOpen(false)} onRequestSubmit={() => setOpen(false)} disableSubmit={!topicValue.length} selectorPrimaryFocus={\`.\${carbonPrefix}--text-input\`} slug={slug && sampleSlug}>
        <TextInput id="create-side-panel-topic-name-a" labelText="Topic name" className={\`\${prefix}form-item\`} placeholder="Enter topic name" value={topicValue} onChange={event => setTopicValue(event.target.value)} />
        <NumberInput iconDescription="Choose a number" id="1" className={\`\${prefix}form-item\`} label="Partitions" min={0} max={50} value={1} />
        <NumberInput iconDescription="Choose a number" id="2" className={\`\${prefix}form-item\`} label="Replicas" min={0} max={50} value={1} />
        <NumberInput iconDescription="Choose a number" id="3" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} />
        <div style={{
        display: 'grid',
        alignItems: 'flex-end',
        gridGap: '0.75rem',
        gridTemplateColumns: '1fr 1fr'
      }}>
          <NumberInput iconDescription="Choose a number" id="4" className={\`\${prefix}form-item\`} label="Retention time" min={0} max={50} value={30} />
          <Dropdown id="create-side-panel-dropdown-options-a" items={items} initialSelectedItem="Day(s)" label="Options" titleText="Options" className={\`\${prefix}form-item\`} />
        </div>
        <NumberInput iconDescription="Choose a number" id="5" className={\`\${prefix}form-item\`} label="Minimum in-sync replicas" min={0} max={50} value={1} />
      </EditSidePanel>
    </>;
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source},description:{story:`TODO: Declare one or more stories, generally one per design scenario.
NB no need for a 'Playground' because all stories have all controls anyway.`,...(N=(C=l.parameters)==null?void 0:C.docs)==null?void 0:N.description}}};const yt=["editSidePanel"];export{yt as __namedExportsOrder,ht as default,l as editSidePanel};