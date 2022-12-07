"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3573],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return t?o.createElement(f,a(a({ref:n},u),{},{components:t})):o.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2872:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const i={},a="Seed Node",d={unversionedId:"node/run-your-node/seed-node",id:"node/run-your-node/seed-node",title:"Seed Node",description:"This guide will cover setting up a seed node for the Oasis Network. This guide assumes some basic knowledge on the use of command line tools.",source:"@site/docs/node/run-your-node/seed-node.md",sourceDirName:"node/run-your-node",slug:"/node/run-your-node/seed-node",permalink:"/node/run-your-node/seed-node",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/seed-node.md",tags:[],version:"current",lastUpdatedAt:1670432054,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{},sidebar:"operators",previous:{title:"Non-validator Node",permalink:"/node/run-your-node/non-validator-node"},next:{title:"Archive Node",permalink:"/node/run-your-node/archive-node"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Working Directory",id:"creating-a-working-directory",level:3},{value:"Copying the Genesis File",id:"copying-the-genesis-file",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Starting the Oasis Node",id:"starting-the-oasis-node",level:2},{value:"Seed node address",id:"seed-node-address",level:3},{value:"Share seed node address",id:"share-seed-node-address",level:3}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seed-node"},"Seed Node"),(0,r.kt)("p",null,"This guide will cover setting up a seed node for the Oasis Network. This guide assumes some basic knowledge on the use of command line tools."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before following this guide, make sure you've followed the ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/oasis-node"},"Prerequisites Guide")," and understand how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node")," binary."),(0,r.kt)("h3",{id:"creating-a-working-directory"},"Creating a Working Directory"),(0,r.kt)("p",null,"We will be creating the following directory structure inside a chosen top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"/node")," (feel free to name your directories however you wish) directory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"etc"),": This will store the node configuration and genesis file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data"),": This will store the data directory needed by the running ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node")," binary, including the complete blockchain state."),(0,r.kt)("p",{parentName:"li"},"The directory permissions should be ",(0,r.kt)("inlineCode",{parentName:"p"},"rwx------"),"."))),(0,r.kt)("p",null,"To create the directory structure, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mkdir -m700 -p /node/{etc,data}\n")),(0,r.kt)("h3",{id:"copying-the-genesis-file"},"Copying the Genesis File"),(0,r.kt)("p",null,"The latest genesis file can be found in ",(0,r.kt)("a",{parentName:"p",href:"/node/mainnet/"},"Network Parameters"),". You should download the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file and copy it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/node/etc")," directory we just created."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This will configure the given node to only act as a seed node.")),(0,r.kt)("p",null,"In order to configure the node create the ",(0,r.kt)("inlineCode",{parentName:"p"},"/node/etc/config.yml")," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"datadir: /node/data\n\nlog:\n  level:\n    default: info\n    tendermint: info\n    tendermint/context: error\n  format: JSON\n\ngenesis:\n  file: /node/etc/genesis.json\n\nconsensus:\n  tendermint:\n    mode: seed\n")),(0,r.kt)("h2",{id:"starting-the-oasis-node"},"Starting the Oasis Node"),(0,r.kt)("p",null,"You can start the node by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node --config /node/etc/config.yml\n")),(0,r.kt)("h3",{id:"seed-node-address"},"Seed node address"),(0,r.kt)("p",null,"To get the seed node Tendermint identity, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node identity tendermint show-node-address --datadir /node/data/\n")),(0,r.kt)("h3",{id:"share-seed-node-address"},"Share seed node address"),(0,r.kt)("p",null,"Nodes can now use your seed node by specifying it via a configuration flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--consensus.tendermint.p2p.seed <TENDERMINT_ADDRESS>@<EXTERNAL_IP>:26656\n")))}c.isMDXComponent=!0}}]);