"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[8679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Merklized Key-Value Store (MKVS)",c={unversionedId:"core/mkvs",id:"core/mkvs",title:"Merklized Key-Value Store (MKVS)",description:"For all places that require an [authenticated data structure (ADS)] we provide",source:"@site/docs/core/mkvs.md",sourceDirName:"core",slug:"/core/mkvs",permalink:"/core/mkvs",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-core/edit/stable/22.2.x/docs/mkvs.md",tags:[],version:"current",lastUpdatedAt:1669418750,formattedLastUpdatedAt:"Nov 25, 2022",frontMatter:{},sidebar:"oasisCore",previous:{title:"Authenticated gRPC",permalink:"/core/authenticated-grpc"},next:{title:"Processes",permalink:"/core/processes"}},s={},l=[{value:"Interfaces",id:"interfaces",level:2},{value:"Updates",id:"updates",level:3},{value:"Read Syncer",id:"read-syncer",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"merklized-key-value-store-mkvs"},"Merklized Key-Value Store (MKVS)"),(0,a.kt)("p",null,"For all places that require an ",(0,a.kt)("a",{parentName:"p",href:"https://www.cs.umd.edu/~mwh/papers/gpads.pdf"},"authenticated data structure (ADS)")," we provide\nan implementation of a Merklized Key-Value Store, internally implemented as a\nMerklized ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Radix_tree#PATRICIA"},"Patricia trie"),"."),(0,a.kt)("h2",{id:"interfaces"},"Interfaces"),(0,a.kt)("h3",{id:"updates"},"Updates"),(0,a.kt)("h3",{id:"read-syncer"},"Read Syncer"))}u.isMDXComponent=!0}}]);