import{a as o,c,_ as g}from"./floating-ui.dom.mjs-BB6krl5l.js";import{P as e}from"./index-Dk74W0Oi.js";import{R as a,r as p}from"./index-BwDkhjyp.js";import{L as k,a as I}from"./Link-BDYfrBjK.js";import{S as y}from"./SideNavLinkText-Bhd_mWHe.js";import{b as L}from"./SideNavItems-DOZGME_q.js";const N=l=>{let{children:n,className:r,small:i=!1}=l;const s=o(),t=c({[`${s}--side-nav__icon`]:!0,[`${s}--side-nav__icon--small`]:i,[r]:!!r});return a.createElement("div",{className:t},n)};N.propTypes={children:e.node.isRequired,className:e.string,small:e.bool};const u=l=>{let{className:n,children:r,large:i=!1}=l;const s=o(),t=c({[`${s}--side-nav__item`]:!0,[`${s}--side-nav__item--large`]:i,[n]:!!n});return a.createElement("li",{className:t},r)};u.propTypes={children:e.node.isRequired,className:e.string,large:e.bool};const v=p.forwardRef(function(n,r){let{children:i,className:s,renderIcon:t,isActive:f,isSideNavExpanded:x,large:_=!1,tabIndex:m,...b}=n;const E=p.useContext(L),d=o(),S=c({[`${d}--side-nav__link`]:!0,[`${d}--side-nav__link--current`]:f,[s]:!!s});return a.createElement(u,{large:_},a.createElement(k,g({},b,{className:S,ref:r,tabIndex:m===void 0?!x&&!E?-1:0:m}),t&&a.createElement(N,{small:!0},a.createElement(t,null)),a.createElement(y,null,i)))});v.displayName="SideNavLink";v.propTypes={...I,children:e.node.isRequired,className:e.string,isActive:e.bool,isSideNavExpanded:e.bool,large:e.bool,renderIcon:e.oneOfType([e.func,e.object]),tabIndex:e.number};export{v as S};
