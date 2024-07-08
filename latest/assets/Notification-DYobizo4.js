import{d as p,u as w,c as N,_ as h,C as L}from"./deprecate-D9ms-jbM.js";import{P as n}from"./index-Dk74W0Oi.js";import{r as C,R as e}from"./index-BwDkhjyp.js";import{n as D}from"./settings-DrdbGLhD.js";import{T as I}from"./Text-_TFgs5hl.js";import{E as R}from"./bucket-5-BuK6y5Rd.js";import{b as v}from"./events-Bq7WR1mU.js";import{W as A,a as P}from"./bucket-17-CArjO86K.js";import{d as W,I as S}from"./bucket-8-61DsWji_.js";n.node,n.string,n.bool,n.func;function _(u){let{"aria-label":o="close notification",ariaLabel:a,className:s,type:r="button",renderIcon:t=L,name:f,notificationType:l="toast",...g}=u;const d=w(),c=N(s,{[`${d}--${l}-notification__close-button`]:l}),b=N({[`${d}--${l}-notification__close-icon`]:l});return e.createElement("button",h({},g,{type:r,"aria-label":a||o,title:a||o,className:c}),t&&e.createElement(t,{className:b,name:f}))}_.propTypes={"aria-label":n.string,ariaLabel:p(n.string),className:n.string,name:n.string,notificationType:n.oneOf(["toast","inline","actionable"]),renderIcon:n.oneOfType([n.func,n.object]),type:n.string};const j={error:R,success:v,warning:A,"warning-alt":P,info:W,"info-square":S};function $(u){let{iconDescription:o,kind:a,notificationType:s}=u;const r=w(),t=j[a];return t?e.createElement(t,{className:`${r}--${s}-notification__icon`,size:20},e.createElement("title",null,o)):null}$.propTypes={iconDescription:n.string.isRequired,kind:n.oneOf(["error","success","warning","warning-alt","info","info-square"]).isRequired,notificationType:n.oneOf(["inline","toast"]).isRequired};n.string,p(n.string),n.string,n.node,n.string,n.bool,n.oneOf(["error","info","info-square","success","warning","warning-alt"]),n.bool,n.func,n.func,n.oneOf(["alert","log","status"]),n.string,n.string,n.number,n.string;function z(u){let{["aria-label"]:o,children:a,title:s,subtitle:r,role:t="status",onClose:f,onCloseButtonClick:l=D,statusIconDescription:g,className:d,kind:c="error",lowContrast:b,hideCloseButton:k=!1,...E}=u;const[T,y]=C.useState(!0),i=w(),B=N(d,{[`${i}--inline-notification`]:!0,[`${i}--inline-notification--low-contrast`]:b,[`${i}--inline-notification--${c}`]:c,[`${i}--inline-notification--hide-close-button`]:k}),O=C.useRef(null),x=m=>{(!f||f(m)!==!1)&&y(!1)},q=C.useRef(null);function F(m){l(m),x(m)}return T?e.createElement("div",h({ref:q},E,{role:t,className:B}),e.createElement("div",{className:`${i}--inline-notification__details`},e.createElement($,{notificationType:"inline",kind:c,iconDescription:g||`${c} icon`}),e.createElement("div",{ref:O,className:`${i}--inline-notification__text-wrapper`},s&&e.createElement(I,{as:"div",className:`${i}--inline-notification__title`},s),r&&e.createElement(I,{as:"div",className:`${i}--inline-notification__subtitle`},r),a)),!k&&e.createElement(_,{notificationType:"inline",onClick:F,"aria-hidden":"true","aria-label":o,tabIndex:-1})):null}z.propTypes={"aria-label":n.string,children:n.node,className:n.string,hideCloseButton:n.bool,kind:n.oneOf(["error","info","info-square","success","warning","warning-alt"]),lowContrast:n.bool,onClose:n.func,onCloseButtonClick:n.func,role:n.oneOf(["alert","log","status"]),statusIconDescription:n.string,subtitle:n.string,title:n.string};n.string,n.string,p(n.string),n.node,n.string,n.bool,p(n.bool),n.bool,n.bool,n.oneOf(["error","info","info-square","success","warning","warning-alt"]),n.bool,n.func,n.func,n.func,n.string,n.string,n.node,n.string;n.string,n.node,n.string,n.oneOf(["error","info","info-square","success","warning","warning-alt"]),n.bool,n.func,n.string,n.node,n.string,n.string;export{z as I};