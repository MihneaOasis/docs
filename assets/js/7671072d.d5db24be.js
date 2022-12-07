"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[594],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var d={};for(var s in n)hasOwnProperty.call(n,s)&&(d[s]=n[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5194:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var o=t(7462),r=(t(7294),t(3905));const a={},i="Non-validator Node",d={unversionedId:"node/run-your-node/non-validator-node",id:"node/run-your-node/non-validator-node",title:"Non-validator Node",description:"These instructions are for setting up a non-validator node. If you want to run a validator node instead, see the instructions for running a validator node. Similarly, if you want to run a ParaTime node instead, see the instructions for running a ParaTime node.",source:"@site/docs/node/run-your-node/non-validator-node.md",sourceDirName:"node/run-your-node",slug:"/node/run-your-node/non-validator-node",permalink:"/node/run-your-node/non-validator-node",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/non-validator-node.md",tags:[],version:"current",lastUpdatedAt:1670432054,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{},sidebar:"operators",previous:{title:"Amend Commission Schedule",permalink:"/node/run-your-node/validator-node/amend-commission-schedule"},next:{title:"Seed Node",permalink:"/node/run-your-node/seed-node"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Working Directory",id:"creating-a-working-directory",level:3},{value:"Copying the Genesis File",id:"copying-the-genesis-file",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Starting the Oasis Node",id:"starting-the-oasis-node",level:2},{value:"Checking Node Status",id:"checking-node-status",level:2}],u={toc:l};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"non-validator-node"},"Non-validator Node"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"These instructions are for setting up a ",(0,r.kt)("em",{parentName:"p"},"non-validator")," node. If you want to run a ",(0,r.kt)("em",{parentName:"p"},"validator")," node instead, see the ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/"},"instructions for running a validator node"),". Similarly, if you want to run a ",(0,r.kt)("em",{parentName:"p"},"ParaTime")," node instead, see the ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node"},"instructions for running a ParaTime node"),".")),(0,r.kt)("p",null,"This guide will cover setting up your non-validator node for the Oasis Network. This guide assumes some basic knowledge on the use of command line tools."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before following this guide, make sure you've followed the ",(0,r.kt)("a",{parentName:"p",href:"prerequisites"},"Prerequisites")," section and have the Oasis Node binary installed on your systems."),(0,r.kt)("h3",{id:"creating-a-working-directory"},"Creating a Working Directory"),(0,r.kt)("p",null,"We will be creating the following directory structure inside a chosen top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"/node")," (feel free to name your directories however you wish) directory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"etc"),": This will store the node configuration and genesis file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"data"),": This will store the data directory needed by the running ",(0,r.kt)("inlineCode",{parentName:"p"},"oasis-node")," binary, including the complete blockchain state."),(0,r.kt)("p",{parentName:"li"},"The directory permissions should be ",(0,r.kt)("inlineCode",{parentName:"p"},"rwx------"),"."))),(0,r.kt)("p",null,"To create the directory structure, use the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -m700 -p /node/{etc,data}\n")),(0,r.kt)("h3",{id:"copying-the-genesis-file"},"Copying the Genesis File"),(0,r.kt)("p",null,"The latest genesis file can be found in ",(0,r.kt)("a",{parentName:"p",href:"/node/mainnet/"},"Network Parameters"),". You should download the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file and copy it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/node/etc")," directory we just created."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This will configure the given node to only follow the consensus layer.")),(0,r.kt)("p",null,"In order to configure the node create the ",(0,r.kt)("inlineCode",{parentName:"p"},"/node/etc/config.yml")," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'datadir: /node/data\n\nlog:\n  level:\n    default: info\n    tendermint: info\n    tendermint/context: error\n  format: JSON\n\ngenesis:\n  file: /node/etc/genesis.json\n\nconsensus:\n  tendermint:\n    p2p:\n      # List of seed nodes to connect to.\n      # NOTE: You can add additional seed nodes to this list if you want.\n      seed:\n        - "{{ seed_node_address }}"\n\n')),(0,r.kt)("p",null,"Before using this configuration you should collect the following information to replace the  variables present in the configuration file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"{{ seed_node_address }}"),": The seed node address in the form ",(0,r.kt)("inlineCode",{parentName:"p"},"ID@IP:port"),"."),(0,r.kt)("p",{parentName:"li"},"You can find the current Oasis Seed Node address in the ",(0,r.kt)("a",{parentName:"p",href:"/node/mainnet/"},"Network Parameters"),"."))),(0,r.kt)("h2",{id:"starting-the-oasis-node"},"Starting the Oasis Node"),(0,r.kt)("p",null,"You can start the node by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node --config /node/etc/config.yml\n")),(0,r.kt)("h2",{id:"checking-node-status"},"Checking Node Status"),(0,r.kt)("p",null,"To ensure that your node is properly connected with the network, you can run the following command after the node has started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node control status -a unix:/node/data/internal.sock\n")))}c.isMDXComponent=!0}}]);