"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[108],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,m=p["".concat(d,".").concat(h)]||p[h]||l[h]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={description:"This page describes how to run an archive node on the Oasis Network."},i="Archive Node",s={unversionedId:"node/run-your-node/archive-node",id:"node/run-your-node/archive-node",title:"Archive Node",description:"This page describes how to run an archive node on the Oasis Network.",source:"@site/docs/node/run-your-node/archive-node.md",sourceDirName:"node/run-your-node",slug:"/node/run-your-node/archive-node",permalink:"/node/run-your-node/archive-node",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/archive-node.md",tags:[],version:"current",lastUpdatedAt:1670432054,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{description:"This page describes how to run an archive node on the Oasis Network."},sidebar:"operators",previous:{title:"Seed Node",permalink:"/node/run-your-node/seed-node"},next:{title:"ParaTime Node",permalink:"/node/run-your-node/paratime-node"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Starting the Oasis Node",id:"starting-the-oasis-node",level:2},{value:"Archive node status",id:"archive-node-status",level:3},{value:"See also",id:"see-also",level:2}],u={toc:c};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"archive-node"},"Archive Node"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Archive node support is currently only available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-core/releases/tag/v21.3.14"},"21.3.14")," release for\nuse with the Cobalt (pre Damask upgrade) archived state.")),(0,o.kt)("p",null,"This guide will cover setting up an archive node for the Oasis Network. Node\nstarted in archive mode only serves existing consensus and runtime states.\nThe node has all unneeded consensus and P2P functionality disabled, therefore\nit will not participate in the network. Archive nodes can be used to access\nhistoric state which is pruned in dump-restore network upgrades."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Archive node requires a pre-existing oasis-node state."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Archive mode can be enabled by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"consensus.tendermint.mode")," setting."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This will configure the given node to act as a consensus archive node.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# other settings omitted ...\nconsensus:\n  tendermint:\n    mode: archive\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Keep other settings unchanged from the full-node. For example in order to\nserve archived runtime state, the node needs to have the runtime configured\nand have the state present.")),(0,o.kt)("h2",{id:"starting-the-oasis-node"},"Starting the Oasis Node"),(0,o.kt)("p",null,"You can start the node by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node --config /node/etc/config.yml\n")),(0,o.kt)("h3",{id:"archive-node-status"},"Archive node status"),(0,o.kt)("p",null,"To ensure the node is running in archive mode, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node control status -a unix:/node/data/internal.sock\n")),(0,o.kt)("p",null,"Output should report ",(0,o.kt)("inlineCode",{parentName:"p"},"archive")," consensus mode status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // other fields omitted ...\n  "consensus": {\n    "mode": "archive",\n    // ...\n')),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/node/web3#archive-web3-gateway"},"Archive Web3 Gateway")))}l.isMDXComponent=!0}}]);