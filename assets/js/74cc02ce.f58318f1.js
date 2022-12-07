"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1564:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),o=r(6010),a=r(9960),i=r(3438),c=r(3919),s=r(5999);const l="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",l)},r)}function u(e){let{href:t,icon:r,title:a,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",d),title:a},r," ",a),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",m),title:i},i))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:null==o?void 0:o.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},9268:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),o=r(6010),a=r(3438),i=r(1564);function c(e){let{className:t}=e;const r=(0,a.jA)();return n.createElement(s,{items:r.items,className:t})}function s(e){const{items:t,className:r}=e;if(!t)return n.createElement(c,e);const s=(0,a.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(i.Z,{item:e})))))}},7525:(e,t,r)=>{r.d(t,{n:()=>a});var n=r(4477);function o(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&o(t.items)}}function a(e){const t=(0,n.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)o(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},4707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var n=r(7462),o=(r(7294),r(3905)),a=r(9268),i=r(7525);const c={},s="Overview",l={unversionedId:"general/README",id:"general/README",title:"Overview",description:"This chapter provides general overview of the Oasis Network and introduces",source:"@site/docs/general/README.mdx",sourceDirName:"general",slug:"/general/",permalink:"/general/",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/general/README.mdx",tags:[],version:"current",lastUpdatedAt:1670432054,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{},sidebar:"general",next:{title:"Overview of the Oasis Network",permalink:"/general/oasis-network/"}},d={},m=[],p={toc:m};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This chapter provides general overview of the Oasis Network and introduces\nbasic tools for you to get started."),(0,o.kt)(a.Z,{items:[(0,i.n)("/general/oasis-network/"),(0,i.n)("/general/manage-tokens/")],mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);