import"./index-BwDkhjyp.js";import{P as a}from"./index-Dk74W0Oi.js";import{a as o}from"./settings-DrdbGLhD.js";const P=(...n)=>{const r=t=>typeof t=="string"?{[t]:null}:Array.isArray(t)?Object.fromEntries(t.map(i=>[i,null])):t,e=Object.assign({},...n.map(r));return Object.entries(e).reduce((t,[i,s])=>(s!==null&&(t[i]=s),t),{})},f=(n,r)=>{let e=n[r]!==null&&n[r]!==void 0;if(e&&r==="children"&&Array.isArray(n[r])){e=!1;for(let t=0;!e&&t<n[r].length;t++)e=n[r][t]!==null&&n[r][t]!==void 0}return e},g=(n,r)=>(e,t,i,s,u,l)=>(f(e,t)&&o.warn(`The ${s} \`${u||t}\` of \`${i}\` has been deprecated and will soon be removed. ${r}`),n(e,t,i,s,u,l)),A=n=>Object.keys(n).reduce((e,t)=>(e[t]={table:{disable:!0}},e),{}),q=o.shimIfProduction(n=>{if(!Array.isArray(n))return o.error("Warning: Invalid argument supplied to allPropTypes, expected an instance of array."),o.noop;for(let e=0;e<n.length;e++)if(typeof n[e]!="function")return o.error(`Invalid argument supplied to allPropTypes. Expected an array of check functions, but received ${n[e]} at index ${e}.`),o.noop;const r=(...e)=>{let t=null;return n.some(i=>t=i(...e)),t};return r.isRequired=(e,t,i,s,u,l)=>{const d=u||t;return e[d]==null?new Error(`The ${s} \`${d}\` is marked as required in \`${i||"<<anonymous>>"}\`, but its value is \`${e[d]===null?"null":"undefined"}\`.`):r(e,d,i,s,u,l)},r}),c=(n,r)=>(e,t,i,s,u,l)=>(r(e)?n.isRequired:n)(e,t,i,s,u,l);c.decorate=n=>{n.isRequired.if=o.isProduction?o.noop:c.bind(null,n)};for(const n in a)a[n].isRequired&&c.decorate(a[n]);export{q as a,g as d,A as g,c as i,P as p};