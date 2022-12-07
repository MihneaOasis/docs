"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[3671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="Troubleshooting",s={unversionedId:"node/run-your-node/troubleshooting",id:"node/run-your-node/troubleshooting",title:"Troubleshooting",description:"Before you begin troubleshooting we suggest you check all of the following:",source:"@site/docs/node/run-your-node/troubleshooting.md",sourceDirName:"node/run-your-node",slug:"/node/run-your-node/troubleshooting",permalink:"/node/run-your-node/troubleshooting",draft:!1,editUrl:"https://github.com/oasisprotocol/docs/edit/main/docs/node/run-your-node/troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1670432054,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{},sidebar:"operators",previous:{title:"Using Ledger-backed Consensus Key with a Remote Signer",permalink:"/node/run-your-node/advanced/using-ledger-backed-consensus-key-with-a-remote-signer"},next:{title:"Oasis Web3 Gateway for your EVM ParaTime",permalink:"/node/web3"}},l={},p=[{value:"Running a Node",id:"running-a-node",level:2},{value:"Invalid Permissions",id:"invalid-permissions",level:3},{value:"Permissions for node and entity",id:"permissions-for-node-and-entity",level:4},{value:"Permissions for .pem files",id:"permissions-for-pem-files",level:4},{value:"Serverdir Ownership",id:"serverdir-ownership",level:4},{value:"Cannot Find File",id:"cannot-find-file",level:3},{value:"Staking and Registering",id:"staking-and-registering",level:2},{value:"Transaction Out of Gas",id:"transaction-out-of-gas",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"mdxAdmonitionTitle"},"BEFORE YOU BEGIN TROUBLESHOOTING")),(0,o.kt)("p",{parentName:"admonition"},"Before you begin troubleshooting we suggest you check all of the following:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check that your current binary version is the latest listed on the ",(0,o.kt)("a",{parentName:"p",href:"/node/mainnet/"},"Current Network Parameters")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check the version on your localhost using ",(0,o.kt)("inlineCode",{parentName:"li"},"oasis-node --version")),(0,o.kt)("li",{parentName:"ul"},"Check the version on your server using ",(0,o.kt)("inlineCode",{parentName:"li"},"oasis-node --version")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If upgrading, make sure that you've wiped state (unless that is explicitly not required)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you're doing anything with the entity:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Do you have the latest genesis?"),(0,o.kt)("li",{parentName:"ul"},"Do you have the correct private key (or Ledger device)."),(0,o.kt)("li",{parentName:"ul"},"If you're signing a transaction:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Do you sufficient account balance to make the transaction?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"oasis-node stake account info")))),(0,o.kt)("li",{parentName:"ul"},"Are you using the correct nonce?",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"oasis-node stake account info")))))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you're generating a transaction:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Do you have the latest genesis?"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you're submitting a transaction:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Do you have the latest genesis?"),(0,o.kt)("li",{parentName:"ul"},"Is your node synced? If not, the transaction will fail to run properly"))))),(0,o.kt)("h2",{id:"running-a-node"},"Running a Node"),(0,o.kt)("h3",{id:"invalid-permissions"},"Invalid Permissions"),(0,o.kt)("h4",{id:"permissions-for-node-and-entity"},"Permissions for node and entity"),(0,o.kt)("p",null,"Error Message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"common/Mkdir: path '/serverdir/node' has invalid permissions: -rwxr-xr-x\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"entity")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," directories both need to have permissions ",(0,o.kt)("inlineCode",{parentName:"p"},"rwx------"),". Make sure you initialize the directory with correct permissions or change them using ",(0,o.kt)("inlineCode",{parentName:"p"},"chmod"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir --mode 700 --parents {entity,node}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 700 /serverdir/node\nchmod 700 /serverdir/entity\n")),(0,o.kt)("h4",{id:"permissions-for-pem-files"},"Permissions for .pem files"),(0,o.kt)("p",null,"Error Message example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"signature/signer/file: invalid PEM file permissions 700 on /serverdir/node/identity.pem\n")),(0,o.kt)("p",null,"All ",(0,o.kt)("inlineCode",{parentName:"p"},".pem")," files should have the permissions ",(0,o.kt)("inlineCode",{parentName:"p"},"600"),". You can set the permissions for all ",(0,o.kt)("inlineCode",{parentName:"p"},".pem")," files in a directory using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chmod -R 600 /path/*.pem\n")),(0,o.kt)("h4",{id:"serverdir-ownership"},"Serverdir Ownership"),(0,o.kt)("p",null,"Another possible cause of permission issues is not giving ownership of your ",(0,o.kt)("inlineCode",{parentName:"p"},"serverdir")," to the user running the node (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-host")," or replace with your user):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chown -R docker-host:docker-host /serverdir\n")),(0,o.kt)("p",null,"In general, to avoid problems when running docker, specify the user when running ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," commands by adding the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--user $(id -u):$(id -g)"),"."),(0,o.kt)("h3",{id:"cannot-find-file"},"Cannot Find File"),(0,o.kt)("p",null,"Error Message examples:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"no such file or directory\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"file does not exist\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'ts=2019-11-17T03:42:09.778647033Z level=error module=cmd/registry/node caller=node.go:127 msg="failed to load entity" err="file does not exist"\n')),(0,o.kt)("p",null,"More often than you'd expect, this error is the result of setting the path incorrectly. You may have left something like ",(0,o.kt)("inlineCode",{parentName:"p"},"--genesis.file $GENESIS_FILE_PATH")," in the command without setting ",(0,o.kt)("inlineCode",{parentName:"p"},"$GENESIS_FILE_PATH")," first, or set the path incorrectly. Check that ",(0,o.kt)("inlineCode",{parentName:"p"},"echo $GENESIS_FILE_PATH")," matches your expectation or provide a path in the command."),(0,o.kt)("p",null,"Another possible cause: the files in your localhost directory cannot be read from the container. Make sure to run commands in the same session within the container."),(0,o.kt)("h2",{id:"staking-and-registering"},"Staking and Registering"),(0,o.kt)("h3",{id:"transaction-out-of-gas"},"Transaction Out of Gas"),(0,o.kt)("p",null,"Error message:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'module=cmd/stake caller=stake.go:70 msg="failed to submit transaction" err="rpc error: code = Unknown desc = staking: add escrow transaction failed: out of gas" attempt=1\n')),(0,o.kt)("p",null,"The docs are now updated to show that you need to add ",(0,o.kt)("inlineCode",{parentName:"p"},"--stake.transaction.fee.gas")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--stake.transaction.fee.amount")," flags when generating your transaction. Note that if you're re-generating a transaction, you will need to increment the ",(0,o.kt)("inlineCode",{parentName:"p"},"--nonce")," flag."))}d.isMDXComponent=!0}}]);