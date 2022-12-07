"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(n),c=r,k=l["".concat(m,".").concat(c)]||l[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=l;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},2505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="Hardware Requirements",s={unversionedId:"node/run-your-node/prerequisites/hardware-recommendations",id:"node/run-your-node/prerequisites/hardware-recommendations",title:"Hardware Requirements",description:"The Oasis Network is composed of multiple classes of nodes and services such",source:"@site/docs/node/run-your-node/prerequisites/hardware-recommendations.md",sourceDirName:"node/run-your-node/prerequisites",slug:"/node/run-your-node/prerequisites/hardware-recommendations",permalink:"/node/run-your-node/prerequisites/hardware-recommendations",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/prerequisites/hardware-recommendations.md",tags:[],version:"current",lastUpdatedAt:1670432054,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{},sidebar:"operators",previous:{title:"Prerequisites",permalink:"/node/run-your-node/prerequisites"},next:{title:"Stake Requirements",permalink:"/node/run-your-node/prerequisites/stake-requirements"}},m={},p=[{value:"CPU",id:"suggested-minimum-configurations",level:3},{value:"Memory",id:"memory",level:3},{value:"Storage",id:"storage",level:3},{value:"Network",id:"network",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"The Oasis Network is composed of multiple classes of nodes and services such\nas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consensus validator or non-validator node"),(0,r.kt)("li",{parentName:"ul"},"Emerald ParaTime compute or client node"),(0,r.kt)("li",{parentName:"ul"},"Cipher ParaTime compute or client node")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Hardware requirements for running the Oasis Web3 gateway can be found\n",(0,r.kt)("a",{parentName:"p",href:"/node/web3#hardware"},"here"),".")),(0,r.kt)("p",null,"This page describes the ",(0,r.kt)("strong",{parentName:"p"},"minimum")," and ",(0,r.kt)("strong",{parentName:"p"},"recommended")," system hardware\nrequirements for running different types of nodes on the Oasis Network."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you configure a system with slower resources than the recommended values, you\nrun the risk of being underprovisioned, causing proposer node timeouts and\nsynchronization delays. This could result in losing stake and not participating\nin committees."),(0,r.kt)("p",{parentName:"admonition"},"If you run out of memory or storage, the Oasis node process will be forcefully\nkilled. This could lead to state corruption, losing stake and not participating\nin committees.")),(0,r.kt)("h3",{id:"suggested-minimum-configurations"},"CPU"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consensus validator or non-validator node:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 2.0 GHz x86-64 CPU with ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AES_instruction_set"},"AES instruction set")," support"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 2.0 GHz x86-64 CPU with 2 cores/vCPUs with\n",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AES_instruction_set"},"AES instruction set")," and ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#Advanced_Vector_Extensions_2"},"AVX2")," support"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Emerald ParaTime compute node and all ParaTime client nodes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 2.0 GHz x86-64 CPU with ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AES_instruction_set"},"AES instruction set")," support"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 2.0 GHz x86-64 CPU with 4 cores/vCPUs with\n",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AES_instruction_set"},"AES instruction set")," and ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#Advanced_Vector_Extensions_2"},"AVX2")," support"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cipher ParaTime compute node:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 2.0 GHz x86-64 CPU with ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AES_instruction_set"},"AES instruction set")," and ",(0,r.kt)("a",{parentName:"li",href:"https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html"},"Intel SGX")," support"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 2.0 GHz x86-64 CPU with 2 cores/vCPUs with\n",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AES_instruction_set"},"AES instruction set"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html"},"Intel SGX")," and ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#Advanced_Vector_Extensions_2"},"AVX2")," support")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"During regular workload your node will operate with the minimal CPU resources.\nHowever, if put under heavy load it might require more cores/vCPUs (e.g. an\nEmerald ParaTime client node behind a public Emerald Web3 gateway)."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/AES_instruction_set"},"AES instruction set")," support is required by ",(0,r.kt)("a",{parentName:"p",href:"https://sites.google.com/view/deoxyscipher"},"Deoxys-II-256-128"),", a\nMisuse-Resistant Authenticated Encryption (MRAE) algorithm, which is used for\nencrypting ParaTime's state."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#Advanced_Vector_Extensions_2"},"Advanced Vector Extensions 2 (AVX2)")," support enables faster Ed25519\nsignature verification which in turn makes a node sync faster."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/architecture-and-technology/software-guard-extensions.html"},"Intel SGX")," support is required if you want to run Paratime compute nodes\nthat use a Trusted Execution Environment (TEE).")),(0,r.kt)("h3",{id:"memory"},"Memory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consensus validator or non-validator node:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 4 GB of ECC RAM"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 8 GB of ECC RAM"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"All ParaTime compute or client nodes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 8 GB of ECC RAM"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 16 GB of ECC RAM")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"During regular workload your node will operate with less than the minimum amount\nof memory. However, at certain time points, it will absolutely require more\nmemory. Examples of such more resource intensive time points are the initial\nstate sync, BadgerDB migration when upgrading a node to a new major version of\nthe Oasis Core, generating storage checkpoints with BadgerDB, periodic BadgerDB\ncompactions...")),(0,r.kt)("h3",{id:"storage"},"Storage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Consensus validator or non-validator node:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 400 GB of SSD or NVMe fast storage"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 700 GB of SSD or NVMe fast storage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Emerald ParaTime compute or client node (in addition to the consensus storage requirements):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 400 GB of SSD or NVMe fast storage"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 700 GB of SSD or NVMe fast storage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cipher ParaTime compute or client node (in addition to the consensus storage requirements):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 200 GB of SSD or NVMe fast storage"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 300 GB of SSD or NVMe fast storage")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Consensus and ParaTime state is stored in an embedded ",(0,r.kt)("a",{parentName:"p",href:"https://dgraph.io/docs/badger/"},"BadgerDB")," database which\nwas ",(0,r.kt)("a",{parentName:"p",href:"https://dgraph.io/docs/badger/design/"},"designed to run on SSDs"),". Hence, we ",(0,r.kt)("strong",{parentName:"p"},"strongly discourage"),"\ntrying to run a node that stores data ",(0,r.kt)("strong",{parentName:"p"},"on classical HDDs"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The consensus layer and ParaTimes accumulate state over time. The speed at which\nthe state grows depends on the number of transactions on the network and\nParaTimes."),(0,r.kt)("p",{parentName:"admonition"},"For example, a consensus non-validator node on the Mainnet accumulated:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"280 GB of consensus state in ~1 year between Apr 28, 2021 and Apr 11, 2022 (since the ",(0,r.kt)("a",{parentName:"li",href:"/node/mainnet/previous-upgrades/cobalt-upgrade"},"Cobalt upgrade"),")"),(0,r.kt)("li",{parentName:"ul"},"32 GB of consensus state in ~1 month since the ",(0,r.kt)("a",{parentName:"li",href:"/node/mainnet/damask-upgrade"},"Damask upgrade"))),(0,r.kt)("p",{parentName:"admonition"},"For example, an Emerald client node on the Mainnet additionally accumulated:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"260 GB of Emerald ParaTime state in ~5 months between Nov 18, 2021 and Apr 11, 2022 (since the ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/oasis-protocol-project/oasis-emerald-evm-paratime-is-live-on-mainnet-13afe953a4c9"},"Emerald Mainnet launch"),")"),(0,r.kt)("li",{parentName:"ul"},"25 GB of Emerald ParaTime state in ~1 month since the ",(0,r.kt)("a",{parentName:"li",href:"/node/mainnet/damask-upgrade"},"Damask upgrade")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Dump & restore upgrades (e.g. ",(0,r.kt)("a",{parentName:"p",href:"/node/mainnet/damask-upgrade"},"Damask upgrade"),", ",(0,r.kt)("a",{parentName:"p",href:"/node/mainnet/previous-upgrades/cobalt-upgrade"},"Cobalt upgrade"),") include state\nwipes which will free the node storage. Historical state can be accessed by\nrunning a separate archive node.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can configure your node ",(0,r.kt)("em",{parentName:"p"},"not to")," keep a complete state from the genesis\nonward. This will reduce the amount of storage required for the consensus and\nParaTime state."),(0,r.kt)("p",{parentName:"admonition"},"To enable pruning of the consensus state set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"consensus.tendermint.abci.prune.strategy")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"consensus.tendermint.abci.prune.num_kept")," parameters appropriately in your\n",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/#configuring-the-oasis-node"},"node's configuration"),"."),(0,r.kt)("p",{parentName:"admonition"},"To enable pruning of the ParaTime state set the\n",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.history.pruner.strategy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"runtime.history.pruner.num_kept"),"\nparameters appropriately in your ",(0,r.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/#configuring-the-oasis-node"},"node's configuration"),".")),(0,r.kt)("h3",{id:"network"},"Network"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consensus validator node and Emerald ParaTime compute node:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Minimum: 200 Mbps internet connection with low latency"),(0,r.kt)("li",{parentName:"ul"},"Recommended: 1 Gbps internet connection with low latency")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"During regular workload your node will receive much less network traffic.\nHowever, at certain time points when huge bursts of transactions arrive, you\nneed to assure that it doesn't timeout.")))}u.isMDXComponent=!0}}]);