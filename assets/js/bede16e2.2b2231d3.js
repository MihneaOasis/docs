"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[7767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=o,h=m["".concat(l,".").concat(c)]||m[c]||p[c]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1564:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7294),o=n(6010),r=n(9960),i=n(3438),s=n(3919),l=n(5999);const d="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return a.createElement(r.Z,{href:t,className:(0,o.Z)("card padding--lg",d)},n)}function c(e){let{href:t,icon:n,title:r,description:i}=e;return a.createElement(m,{href:t},a.createElement("h2",{className:(0,o.Z)("text--truncate",u),title:r},n," ",r),i&&a.createElement("p",{className:(0,o.Z)("text--truncate",p),title:i},i))}function h(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?a.createElement(c,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function k(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return a.createElement(c,{href:t.href,icon:n,title:t.label,description:null==o?void 0:o.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(k,{item:t});case"category":return a.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),o=n(7294),r=n(6010),i=n(2389),s=n(7392),l=n(7094),d=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:c,groupId:h,className:k}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=c??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!y.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,l.U)(),[w,T]=(0,o.useState)(b),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&y.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),a=y[n].value;a!==w&&(x(t),T(a),null!=h&&N(h,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>P.push(e),onKeyDown:C,onClick:E},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},7525:(e,t,n)=>{n.d(t,{n:()=>r});var a=n(4477);function o(e){for(const t of e){const e=t.href;e&&void 0===globalThis.sidebarItemsMap[e]&&(globalThis.sidebarItemsMap[e]=t),"category"===t.type&&o(t.items)}}function r(e){const t=(0,a.E)();if(!t)throw new Error("Unexpected: cant find docsVersion in current context");if(void 0===globalThis.sidebarItemsMap){globalThis.sidebarItemsMap={};for(const e in t.docsSidebars)o(t.docsSidebars[e])}if(void 0===globalThis.sidebarItemsMap[e])throw console.log("Registered sidebar items:"),console.log(globalThis.sidebarItemsMap),new Error("Unexpected: sidebar item with href "+e+" does not exist.");return globalThis.sidebarItemsMap[e]}},2129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(1564),i=n(7525),s=n(5488),l=n(5162);const d={},u="ParaTime Node",p={unversionedId:"node/run-your-node/paratime-node",id:"node/run-your-node/paratime-node",title:"ParaTime Node",description:"These instructions are for setting up a ParaTime node which participates in one or more ParaTime compute committees. If you want to run a ParaTime client node instead, see the instructions for running a ParaTime client node. If you want to run a validator node instead, see the instructions for running a validator node. Similarly, if you want to run a non-validator node instead, see the instructions for running a non-validator node.",source:"@site/docs/node/run-your-node/paratime-node.mdx",sourceDirName:"node/run-your-node",slug:"/node/run-your-node/paratime-node",permalink:"/node/run-your-node/paratime-node",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/paratime-node.mdx",tags:[],version:"current",lastUpdatedAt:1670432054,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{},sidebar:"operators",previous:{title:"Archive Node",permalink:"/node/run-your-node/archive-node"},next:{title:"ParaTime Client Node",permalink:"/node/run-your-node/paratime-client-node"}},m={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Stake Requirements",id:"stake-requirements",level:3},{value:"Register a New Entity or Update Your Entity Registration",id:"register-a-new-entity-or-update-your-entity-registration",level:3},{value:"The ParaTime Bundle",id:"the-paratime-bundle",level:3},{value:"Install Oasis Core Runtime Loader",id:"install-oasis-core-runtime-loader",level:3},{value:"Install ParaTime Bundle",id:"install-paratime-bundle",level:3},{value:"Install Bubblewrap Sandbox (at least version 0.3.3)",id:"install-bubblewrap-sandbox-at-least-version-033",level:3},{value:"Setting up Trusted Execution Environment (TEE)",id:"setting-up-trusted-execution-environment-tee",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Starting the Oasis Node",id:"starting-the-oasis-node",level:2},{value:"Checking Node Status",id:"checking-node-status",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Too Old Bubblewrap Version",id:"too-old-bubblewrap-version",level:3},{value:"Stake Requirement",id:"stake-requirement",level:3},{value:"See also",id:"see-also",level:2}],h={toc:c};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"paratime-node"},"ParaTime Node"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"These instructions are for setting up a ",(0,o.kt)("em",{parentName:"p"},"ParaTime")," node which participates in one or more ParaTime compute committees. If you want to run a ",(0,o.kt)("em",{parentName:"p"},"ParaTime client")," node instead, see the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-client-node"},"instructions for running a ParaTime client node"),". If you want to run a ",(0,o.kt)("em",{parentName:"p"},"validator")," node instead, see the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/"},"instructions for running a validator node"),". Similarly, if you want to run a non-validator node instead, see the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/non-validator-node"},"instructions for running a non-validator node"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"For a production setup, we recommend running the ParaTime compute/storage node separately from the validator node (if you run one)."),(0,o.kt)("p",{parentName:"admonition"},"Running ParaTime and validator nodes as separate Oasis nodes will prevent configuration mistakes and/or (security) issues affecting one node type from affecting the other one.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are looking for some concrete ParaTimes that you can run, see ",(0,o.kt)("a",{parentName:"p",href:"/get-involved/run-node/paratime-node"},"the list of ParaTimes and their parameters"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Oasis Core refers to ParaTimes as runtimes internally, so all configuration options will have runtime in their name.")),(0,o.kt)("p",null,"This guide will cover setting up your ParaTime compute node for the Oasis Network. This guide assumes some basic knowledge on the use of command line tools."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before following this guide, make sure you've followed the ",(0,o.kt)("a",{parentName:"p",href:"prerequisites"},"Prerequisites")," and ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/non-validator-node"},"Run a Non-validator Node")," sections and have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Oasis Node binary installed and configured on your system."),(0,o.kt)("li",{parentName:"ul"},"The chosen top-level ",(0,o.kt)("inlineCode",{parentName:"li"},"/node/")," working directory prepared. In addition to ",(0,o.kt)("inlineCode",{parentName:"li"},"etc")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," directories, also prepare the following directories:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bin"),": This will store binaries needed by Oasis Node for running the ParaTimes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"runtimes"),": This will store the ParaTime bundles.")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Feel free to name your working directory as you wish, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/srv/oasis/"),"."),(0,o.kt)("p",{parentName:"admonition"},"Just make sure to use the correct working directory path in the instructions below.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Genesis file copied to ",(0,o.kt)("inlineCode",{parentName:"li"},"/node/etc/genesis.json"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Reading the rest of the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/"},"validator node setup instructions")," may also be useful.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To speed up bootstraping your new node, we recommend ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/advanced/copy-state-from-one-node-to-the-other"},"copying node's state from your existing node")," or ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/advanced/sync-node-using-state-sync"},"syncing it using state sync"),".")),(0,o.kt)("h3",{id:"stake-requirements"},"Stake Requirements"),(0,o.kt)("p",null,"To be able to register as a ParaTime node on the Oasis Network, you need to\nhave enough tokens staked in your entity's escrow account."),(0,o.kt)("p",null,"Current minimum staking requirements for a specific ParaTime are listed on the\nContribute to the Network section - ",(0,o.kt)("a",{parentName:"p",href:"/get-involved/run-node/paratime-node"},"Run a ParaTime Node")," page. Should you want\nto check the staking requirements for other node roles and registered ParaTimes\nmanually, use the Oasis CLI tools as described in ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/common-staking-info"},"Common Staking Info"),"."),(0,o.kt)("p",null,"Finally, to stake the tokens, use our ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/delegate-tokens"},"Oasis CLI tools"),". If everything was set\nup correctly, you should see something like below when running ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/get-account-info"},"Oasis Node\nStake Account Info")," command for your entity's account (this is an example for\nthe Testnet):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Balance:\n  Total: 0.0 TEST\n  Available: 0.0 TEST\n\nActive Delegations to this Account:\n  Total: 20000.0 TEST (20000000000000 shares)\n  Delegations:\n    - From:   oasis1qrwdwxutpyr9d2m84zh55rzcf99aw0hkts7myvv9\n      Amount: 20000.0 TEST (20000000000000 shares)\n\nStake Accumulator:\n  Claims:\n    - Name: registry.RegisterEntity\n      Staking Thresholds:\n        - Global: entity\n    - Name: registry.RegisterNode.HG5TB3dbY8gtYBBw/R/cHfPaOpe0vT7W1wu/2rtpk/A=\n      Staking Thresholds:\n        - Global: node-compute\n      Staking Thresholds:\n        - Global: node-storage\n\nNonce: 1\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The stake requirements may differ from ParaTime to ParaTime and are subject to\nchange in the future.")),(0,o.kt)("h3",{id:"register-a-new-entity-or-update-your-entity-registration"},"Register a New Entity or Update Your Entity Registration"),(0,o.kt)("p",null,"If you don't have an entity yet, create a new one by following the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/#creating-your-entity"},"Creating Your Entity")," instructions."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Everything in this section should be done on the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," as there are sensitive items that will be created.")),(0,o.kt)("p",null,"If you will be running the ParaTime on a new Oasis Node, initialize a new node by following the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/#initializing-a-node"},"Initializing a Node")," instructions."),(0,o.kt)("p",null,"Then update your entity descriptor by enumerating paths to all your node's descriptors (existing and new ones) in the ",(0,o.kt)("inlineCode",{parentName:"p"},"--entity.node.descriptor")," flag. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node registry entity update \\\n    ... various signer flags ... \\\n    --entity.node.descriptor /localhost/node1/node_genesis.json,/localhost/node2/node_genesis.json\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To confirm all nodes are added to your entity descriptor, run:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat <PATH-TO-entity.json>\n")),(0,o.kt)("p",{parentName:"admonition"},"and ensure you see all your nodes' IDs under the ",(0,o.kt)("inlineCode",{parentName:"p"},'"nodes"')," list."),(0,o.kt)("p",{parentName:"admonition"},"For example:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "v": 2,\n  "id": "QTg+ZjubD/36egwByAIGC6lMVBKgqo7xnZPgHVoIKzc=",\n  "nodes": [\n    "yT1h8/eN0VInQxn3YKcHxvSgGcsjsTSYmdTLZZMBTWI=",\n    "HG5TB3dbY8gtYBBw/R/cHfPaOpe0vT7W1wu/2rtpk/A="\n  ]\n}\n'))),(0,o.kt)("p",null,"Then generate and submit the new/updated entity descriptor via the entity registration transaction by following the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/validator-node/#generating-entity-registration-transaction"},"Generating Entity Registration Transaction")," instructions."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure your entity descriptor (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"entity.json"),") is copied to your online server and saved as ",(0,o.kt)("inlineCode",{parentName:"p"},"/node/entity/entity.json")," to ensure the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node#configuration"},"node's configuration")," will find it.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You will ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node#configuration"},"configure the node")," to automatically register for the roles it has enabled (i.e. storage and compute roles) via the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker.registration.entity")," configuration flag."),(0,o.kt)("p",{parentName:"admonition"},"No manual node registration is necessary.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"ParaTime rewards for running the compute node will be sent to your entity address ",(0,o.kt)("strong",{parentName:"p"},"inside the ParaTime"),". To access the rewards on the consensus layer, you will need to withdraw them first. Read the ",(0,o.kt)("a",{parentName:"p",href:"/general/manage-tokens/advanced/oasis-cli-tools/deposit-withdraw-tokens-to-from-paratime"},"Deposit/Withdraw Tokens to/from ParaTime")," chapter to learn more.")),(0,o.kt)("h3",{id:"the-paratime-bundle"},"The ParaTime Bundle"),(0,o.kt)("p",null,"In order to run a ParaTime node you need to obtain the ParaTime bundle that\nneeds to come from a trusted source. The bundle (usually with an ",(0,o.kt)("inlineCode",{parentName:"p"},".orc"),"\nextension that stands for Oasis Runtime Container) contains all the needed\nParaTime binaries together with the identifier and version metadata to ease\ndeployment."),(0,o.kt)("p",null,"When the ParaTime is running in a Trusted Execution Environment (TEE) the bundle\nwill also contain all the required artifacts (e.g. SGXS version of the binary\nand any enclave signatures)."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Like the genesis document, make sure you obtain these from a trusted source.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("h4",{parentName:"admonition",id:"compiling-the-paratime-binary-from-source-code"},(0,o.kt)("strong",{parentName:"h4"},"Compiling the ParaTime Binary from Source Code")),(0,o.kt)("p",{parentName:"admonition"},"In case you decide to build the ParaTime binary from source yourself, make sure\nthat you follow our ",(0,o.kt)("a",{parentName:"p",href:"/paratime/reproducibility"},"guidelines for deterministic compilation"),"\nto ensure that you receive the exact same binary."),(0,o.kt)("p",{parentName:"admonition"},"When the ParaTime is running in a TEE, a different binary to what is registered\nin the consensus layer will not work and will be rejected by the network.")),(0,o.kt)("h3",{id:"install-oasis-core-runtime-loader"},"Install Oasis Core Runtime Loader"),(0,o.kt)("p",null,"For ParaTimes running inside ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node#setting-up-trusted-execution-environment-tee"},"Intel SGX Trusted Execution Environment"),", you will need to install the Oasis Core Runtime Loader."),(0,o.kt)("p",null,"The Oasis Core Runtime Loader binary (",(0,o.kt)("inlineCode",{parentName:"p"},"oasis-core-runtime-loader"),") is part of Oasis Core binary releases, so make sure you download the appropriate version specified the ",(0,o.kt)("a",{parentName:"p",href:"/node/mainnet/"},"Network Parameters")," page."),(0,o.kt)("p",null,"Install it to ",(0,o.kt)("inlineCode",{parentName:"p"},"bin")," subdirectory of your node's working directory, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/node/bin/oasis-core-runtime-loader"),"."),(0,o.kt)("h3",{id:"install-paratime-bundle"},"Install ParaTime Bundle"),(0,o.kt)("p",null,"For each ParaTime, you need to obtain its bundle and install it to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"runtimes")," subdirectory of your node's working directory."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For example, for the ",(0,o.kt)("a",{parentName:"p",href:"/node/mainnet/#cipher-paratime"},"Cipher ParaTime"),",\nyou would have to obtain the ",(0,o.kt)("inlineCode",{parentName:"p"},"cipher-paratime.orc")," bundle and install it to\n",(0,o.kt)("inlineCode",{parentName:"p"},"/node/runtimes/cipher-paratime.orc"),".")),(0,o.kt)("h3",{id:"install-bubblewrap-sandbox-at-least-version-033"},"Install Bubblewrap Sandbox (at least version 0.3.3)"),(0,o.kt)("p",null,"ParaTime compute nodes execute ParaTime binaries inside a sandboxed environment provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/bubblewrap"},"Bubblewrap"),". In order to install it, please follow these instructions, depending on your distribution:"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"Ubuntu 18.10+",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install bubblewrap\n"))),(0,o.kt)(l.Z,{value:"Fedora",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install bubblewrap\n"))),(0,o.kt)(l.Z,{value:"Other Distributions",mdxType:"TabItem"},"On other systems, you can download the latest [source release provided by the Bubblewrap project](https://github.com/containers/bubblewrap/releases) and build it yourself.",(0,o.kt)("p",null,"Make sure you have the necessary development tools installed on your system and the ",(0,o.kt)("inlineCode",{parentName:"p"},"libcap")," development headers. On Ubuntu, you can install them with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install build-essential libcap-dev\n")),(0,o.kt)("p",null,"After obtaining the Bubblewrap source tarball, e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/bubblewrap/releases/download/v0.4.1/bubblewrap-0.4.1.tar.xz"},"bubblewrap-0.4.1.tar.xz"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xf bubblewrap-0.4.1.tar.xz\ncd bubblewrap-0.4.1\n./configure --prefix=/usr\nmake\nsudo make install\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Note that Oasis Node expects Bubblewrap to be installed under ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/bin/bwrap")," by default.")))),(0,o.kt)("p",null,"Ensure you have a new enough version by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bwrap --version\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Ubuntu 18.04 LTS (and earlier) provide overly-old ",(0,o.kt)("inlineCode",{parentName:"p"},"bubblewrap"),". Follow ",(0,o.kt)("em",{parentName:"p"},"Other Distributions")," section on those systems.")),(0,o.kt)("h3",{id:"setting-up-trusted-execution-environment-tee"},"Setting up Trusted Execution Environment (TEE)"),(0,o.kt)("p",null,"If a ParaTime requires the use of a TEE, then make sure you set up TEE as instructed in the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee"},"Set up Trusted Execution Environment (TEE)")," doc."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to configure the node create the ",(0,o.kt)("inlineCode",{parentName:"p"},"/node/etc/config.yml")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'datadir: /node/data\n\nlog:\n  level:\n    default: info\n    tendermint: info\n    tendermint/context: error\n  format: JSON\n\ngenesis:\n  file: /node/etc/genesis.json\n\nconsensus:\n  tendermint:\n    core:\n      listen_address: tcp://0.0.0.0:26656\n\n      # The external IP that is used when registering this node to the network.\n      # NOTE: If you are using the Sentry node setup, this option should be\n      # omitted.\n      external_address: tcp://{{ external_address }}:26656\n\n    p2p:\n      # List of seed nodes to connect to.\n      # NOTE: You can add additional seed nodes to this list if you want.\n      seed:\n        - "{{ seed_node_address }}"\n\nruntime:\n  mode: compute\n  paths:\n    # Paths to ParaTime bundles for all of the supported ParaTimes.\n    - "{{ runtime_orc_path }}"\n\n  # The following section is required for ParaTimes which are running inside the\n  # Intel SGX Trusted Execution Environment.\n  sgx:\n    loader: /node/bin/oasis-core-runtime-loader\n\nworker:\n  registration:\n    # In order for the node to register itself, the entity.json of the entity\n    # used to provision the node must be available on the node.\n    entity: /node/entity/entity.json\n\n  p2p:\n    # External P2P configuration.\n    port: 30002\n    addresses:\n      # The external IP that is used when registering this node to the network.\n      - "{{ external_address }}:30002"\n\n# The following section is required for ParaTimes which are running inside the\n# Intel SGX Trusted Execution Environment.\nias:\n  proxy:\n    address:\n      # List of IAS proxies to connect to.\n      # NOTE: You can add additional IAS proxies to this list if you want.\n      - "{{ ias_proxy_address }}"\n')),(0,o.kt)("p",null,"Before using this configuration you should collect the following information to replace the  variables present in the configuration file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{{ external_address }}"),": The external IP you used when registering this node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{{ seed_node_address }}"),": The seed node address in the form ",(0,o.kt)("inlineCode",{parentName:"li"},"ID@IP:port"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can find the current Oasis Seed Node address in the ",(0,o.kt)("a",{parentName:"li",href:"/node/mainnet/"},"Network Parameters"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{{ runtime_orc_path }}"),": Path to the ",(0,o.kt)("a",{parentName:"li",href:"/node/run-your-node/paratime-node#the-paratime-bundle"},"ParaTime bundle")," of the form ",(0,o.kt)("inlineCode",{parentName:"li"},"/node/runtimes/foo-paratime.orc"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can find the current Oasis-supported ParaTimes in the ",(0,o.kt)("a",{parentName:"li",href:"/node/mainnet/#paratimes"},"Network Paramers"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{{ ias_proxy_address }}"),": The IAS proxy address in the form ",(0,o.kt)("inlineCode",{parentName:"li"},"ID@HOST:port"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can find the current Oasis IAS proxy address in the ",(0,o.kt)("a",{parentName:"li",href:"/node/mainnet/#cipher-paratime"},"Network Parameters"),"."),(0,o.kt)("li",{parentName:"ul"},"If you want, you can also ",(0,o.kt)("a",{parentName:"li",href:"/node/run-your-node/ias-proxy"},"run your own IAS proxy"),".")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure the ",(0,o.kt)("inlineCode",{parentName:"p"},"worker.p2p.port")," (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"9200"),") port is exposed and publicly\naccessible on the internet (for ",(0,o.kt)("inlineCode",{parentName:"p"},"TCP")," traffic).")),(0,o.kt)("h2",{id:"starting-the-oasis-node"},"Starting the Oasis Node"),(0,o.kt)("p",null,"You can start the node by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node --config /node/etc/config.yml\n")),(0,o.kt)("h2",{id:"checking-node-status"},"Checking Node Status"),(0,o.kt)("p",null,"To ensure that your node is properly connected with the network, you can run the following command after the node has started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oasis-node control status -a unix:/node/data/internal.sock\n")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"See the general ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/troubleshooting"},"Node troubleshooting")," and ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/prerequisites/set-up-trusted-execution-environment-tee#troubleshooting"},"Set up TEE troubleshooting")," sections before proceeding with ParaTime node-specific troubleshooting."),(0,o.kt)("h3",{id:"too-old-bubblewrap-version"},"Too Old Bubblewrap Version"),(0,o.kt)("p",null,"Double check your installed ",(0,o.kt)("inlineCode",{parentName:"p"},"bubblewrap")," version, and ensure is at least of version ",(0,o.kt)("strong",{parentName:"p"},"0.3.3"),". Previous versions of this guide did not explicitly mention the required version. For details see the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node#install-bubblewrap-sandbox-at-least-version-0-3-3"},"Install Bubblewrap Sandbox")," section."),(0,o.kt)("h3",{id:"stake-requirement"},"Stake Requirement"),(0,o.kt)("p",null,"Double check your node entity satisfies the staking requirements for a ParaTime node. For details see the ",(0,o.kt)("a",{parentName:"p",href:"/node/run-your-node/paratime-node#stake-requirements"},"Stake Requirements")," section."),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)(r.Z,{item:(0,i.n)("/node/web3"),mdxType:"DocCard"}))}k.isMDXComponent=!0}}]);