"use strict";(self.webpackChunkdocs_oasis_dev=self.webpackChunkdocs_oasis_dev||[]).push([[2126],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=a,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return t?i.createElement(g,r(r({ref:n},u),{},{components:t})):i.createElement(g,r({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8546:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const o={},r="Minimal Runtime",s={unversionedId:"paratime/minimal-runtime",id:"paratime/minimal-runtime",title:"Minimal Runtime",description:"This section will show you how to quickly create, build and test a minimal",source:"@site/docs/paratime/minimal-runtime.md",sourceDirName:"paratime",slug:"/paratime/minimal-runtime",permalink:"/paratime/minimal-runtime",draft:!1,editUrl:"https://github.com/oasisprotocol/oasis-sdk/edit/main/docs/runtime/minimal-runtime.md",tags:[],version:"current",lastUpdatedAt:1670432054,formattedLastUpdatedAt:"Dec 7, 2022",frontMatter:{},sidebar:"paratime",previous:{title:"Prerequisites",permalink:"/paratime/prerequisites"},next:{title:"Modules",permalink:"/paratime/modules"}},l={},c=[{value:"Repository Structure and Dependencies",id:"repository-structure-and-dependencies",level:2},{value:"Runtime Definition",id:"runtime-definition",level:2},{value:"Building and Running",id:"building-and-running",level:2},{value:"Deploying Locally",id:"deploying-locally",level:2},{value:"Testing From Oasis CLI",id:"testing-from-oasis-cli",level:2},{value:"Testing From a Client",id:"testing-from-a-client",level:2}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"minimal-runtime"},"Minimal Runtime"),(0,a.kt)("p",null,"This section will show you how to quickly create, build and test a minimal\nruntime that allows transfers between accounts by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts")," module\nprovided by the Runtime SDK."),(0,a.kt)("h2",{id:"repository-structure-and-dependencies"},"Repository Structure and Dependencies"),(0,a.kt)("p",null,"First we create the basic directory structure for the minimal runtime using\nRust's ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo"},(0,a.kt)("inlineCode",{parentName:"a"},"cargo")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo init minimal-runtime\n")),(0,a.kt)("p",null,"This will create the ",(0,a.kt)("inlineCode",{parentName:"p"},"minimal-runtime")," directory and populate it with some\nboilerplate needed to describe a Rust application. It will also set up the\ndirectory for version control using Git. The rest of the guide assumes that you\nare executing commands from within this directory."),(0,a.kt)("p",null,"Since the Runtime SDK requires a nightly version of the Rust toolchain, you need\nto specify a version to use by creating a special file called ",(0,a.kt)("inlineCode",{parentName:"p"},"rust-toolchain"),"\ncontaining the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"nightly-2022-08-22\n")),(0,a.kt)("p",null,"Additionally, due to the requirements of some upstream dependencies, you need to\nconfigure Cargo to always build with specific target CPU platform features\n(namely AES-NI and SSE3) by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},".cargo/config")," file with the following\ncontent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[build]\nrustflags = ["-C", "target-feature=+aes,+ssse3"]\nrustdocflags = ["-C", "target-feature=+aes,+ssse3"]\n\n[test]\nrustflags = ["-C", "target-feature=+aes,+ssse3"]\nrustdocflags = ["-C", "target-feature=+aes,+ssse3"]\n')),(0,a.kt)("p",null,"After you complete this guide, the minimal runtime directory structure will look\nas follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"minimal-runtime\n\u251c\u2500\u2500 .cargo\n\u2502   \u2514\u2500\u2500 config      # Cargo configuration.\n\u251c\u2500\u2500 Cargo.lock      # Rust dependency tree checksums.\n\u251c\u2500\u2500 Cargo.toml      # Rust crate defintion.\n\u251c\u2500\u2500 rust-toolchain  # Rust toolchain version configuration.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 lib.rs      # The runtime definition.\n\u2502   \u2514\u2500\u2500 main.rs     # Some boilerplate for building the runtime.\n\u2514\u2500\u2500 test\n    \u251c\u2500\u2500 go.mod      # Go module definition\n    \u251c\u2500\u2500 go.sum      # Go dependency tree checksums.\n    \u2514\u2500\u2500 test.go     # Test client implementation.\n")),(0,a.kt)("h2",{id:"runtime-definition"},"Runtime Definition"),(0,a.kt)("p",null,"First you need to declare the ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-runtime-sdk")," as a dependency in order to be\nable to use its features. To do this, edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"[dependencies]")," section in your\n",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," to look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'[package]\nname = "minimal-runtime"\nversion = "0.1.0"\nedition = "2018"\n\n[dependencies]\noasis-runtime-sdk = { git = "https://github.com/oasisprotocol/oasis-sdk" }\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We are using the Git repository directly instead of releasing Rust packages on\ncrates.io.")),(0,a.kt)("p",null,"After you have declared the dependency on the Runtime SDK the next thing is to\ndefine the minimal runtime. To do this, create ",(0,a.kt)("inlineCode",{parentName:"p"},"src/lib.rs")," with the following\ncontent:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/lib.rs"',title:'"src/lib.rs"'},"//! Minimal runtime.\nuse std::collections::BTreeMap;\n\nuse oasis_runtime_sdk::{self as sdk, modules, types::token::Denomination, Version};\n\n/// Configuration of the various modules.\npub struct Config;\n\n// The base runtime type.\n//\n// Note that everything is statically defined, so the runtime has no state.\npub struct Runtime;\n\nimpl modules::core::Config for Config {}\n\nimpl sdk::Runtime for Runtime {\n    // Use the crate version from Cargo.toml as the runtime version.\n    const VERSION: Version = sdk::version_from_cargo!();\n\n    // Define the module that provides the core API.\n    type Core = modules::core::Module<Config>;\n\n    // Define the modules that the runtime will be composed of. Here we just use\n    // the core and accounts modules from the SDK. Later on we will go into\n    // detail on how to create your own modules.\n    type Modules = (modules::core::Module<Config>, modules::accounts::Module);\n\n    // Define the genesis (initial) state for all of the specified modules. This\n    // state is used when the runtime is first initialized.\n    //\n    // The return value is a tuple of states in the same order as the modules\n    // are defined above.\n    fn genesis_state() -> <Self::Modules as sdk::module::MigrationHandler>::Genesis {\n        (\n            // Core module.\n            modules::core::Genesis {\n                parameters: modules::core::Parameters {\n                    max_batch_gas: 10_000,\n                    max_tx_signers: 8,\n                    max_tx_size: 10_000,\n                    max_multisig_signers: 8,\n                    min_gas_price: BTreeMap::from([(Denomination::NATIVE, 0)]),\n                    ..Default::default()\n                },\n            },\n            // Accounts module.\n            modules::accounts::Genesis {\n                parameters: modules::accounts::Parameters {\n                    gas_costs: modules::accounts::GasCosts { tx_transfer: 100 },\n                    ..Default::default()\n                },\n                balances: BTreeMap::from([\n                    (\n                        sdk::testing::keys::alice::address(),\n                        BTreeMap::from([(Denomination::NATIVE, 1_000_000_000)]),\n                    ),\n                    (\n                        sdk::testing::keys::bob::address(),\n                        BTreeMap::from([(Denomination::NATIVE, 2_000_000_000)]),\n                    ),\n                ]),\n                total_supplies: BTreeMap::from([(Denomination::NATIVE, 3_000_000_000)]),\n                ..Default::default()\n            },\n        )\n    }\n}\n")),(0,a.kt)("p",null,"This defines the behavior (state transition function) and the initial state of\nthe runtime. We are populating the state with some initial accounts so that we\nwill be able to test things later. The accounts use test keys provided by the\nSDK."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"While the test keys are nice for testing they ",(0,a.kt)("strong",{parentName:"p"},"should never be used in\nproduction")," versions of the runtimes as the private keys are generated from\npublicly known seeds!")),(0,a.kt)("p",null,"In order to be able to build a runtime binary that can be loaded by an Oasis\nNode, we need to add some boilerplate into ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.rs")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},"use oasis_runtime_sdk::Runtime;\n\nfn main() {\n    minimal_runtime::Runtime::start();\n}\n")),(0,a.kt)("h2",{id:"building-and-running"},"Building and Running"),(0,a.kt)("p",null,"In order to build the runtime you can use the regular Cargo build process by\nrunning:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build\n")),(0,a.kt)("p",null,"This will generate a binary under ",(0,a.kt)("inlineCode",{parentName:"p"},"target/debug/minimal-runtime")," which will\ncontain the runtime."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For simplicity, we are building a non-confidential runtime which results in a\nregular ELF binary. In order to build a runtime that requires the use of a TEE\nlike Intel SGX you need to perform some additional steps which are described in\nlater sections of the guide.")),(0,a.kt)("p",null,"You can also try to run your runtime using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run\n")),(0,a.kt)("p",null,"However, this will result in the startup process failing similar to the\nfollowing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    Finished dev [unoptimized + debuginfo] target(s) in 0.08s\n     Running `target/debug/minimal-runtime`\n{"msg":"Runtime is starting","level":"INFO","ts":"2021-06-09T10:35:10.913154095+02:00","module":"runtime"}\n{"msg":"Establishing connection with the worker host","level":"INFO","ts":"2021-06-09T10:35:10.913654559+02:00","module":"runtime"}\n{"msg":"Failed to connect with the worker host","level":"ERRO","ts":"2021-06-09T10:35:10.913723541+02:00","module":"runtime","err":"Invalid argument (os error 22)"}\n')),(0,a.kt)("p",null,"The reason is that the built runtime binary is designed to be run by Oasis Node\ninside a specific sandbox environment. We will see how to deploy the runtime in\na local test environment in the next section."),(0,a.kt)("h2",{id:"deploying-locally"},"Deploying Locally"),(0,a.kt)("p",null,"In order to deploy the newly developed runtime in a local development network,\nyou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-net-runner")," provided in Oasis Core. This will set up a\nsmall network of local nodes that will run the runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /tmp/minimal-runtime-test; mkdir -p /tmp/minimal-runtime-test\n${OASIS_CORE_PATH}/oasis-net-runner \\\n    --fixture.default.node.binary ${OASIS_CORE_PATH}/oasis-node \\\n    --fixture.default.runtime.binary target/debug/minimal-runtime \\\n    --fixture.default.runtime.loader ${OASIS_CORE_PATH}/oasis-core-runtime-loader \\\n    --fixture.default.runtime.provisioner unconfined \\\n    --fixture.default.keymanager.binary '' \\\n    --basedir /tmp/minimal-runtime-test \\\n    --basedir.no_temp_dir\n")),(0,a.kt)("p",null,"After successful startup this should result in the following message being\ndisplayed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'level=info module=net-runner caller=root.go:152 ts=2021-06-14T08:42:47.219513806Z msg="client node socket available" path=/tmp/minimal-runtime-test/net-runner/network/client-0/internal.sock\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The local network runner will take control of the current terminal until you\nterminate it via Ctrl+C. For the rest of the guide keep the local network\nrunning and use a separate terminal to run the client.")),(0,a.kt)("h2",{id:"testing-from-oasis-cli"},"Testing From Oasis CLI"),(0,a.kt)("p",null,"After you have the runtime running in your local network, the next step is to\ntest that it actually works. First, let's add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," network to the\nOasis CLI and provide the path to the local socket file reported above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis network add-local localhost unix:/tmp/minimal-runtime-test/net-runner/network/client-0/internal.sock\n? Description: localhost\n? Denomination symbol: TEST\n? Denomination decimal places: 9\n")),(0,a.kt)("p",null,"Now, let's see, if the local network was correctly initialized and the runtime\nis ready:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis inspect node-status --network localhost\n")),(0,a.kt)("p",null,"If everything is working correctly, you should see the ",(0,a.kt)("inlineCode",{parentName:"p"},'"status": "ready"'),"\nunder the runtime's ",(0,a.kt)("inlineCode",{parentName:"p"},'"committee"')," field after a while and an increasing\n",(0,a.kt)("inlineCode",{parentName:"p"},'"latest_round"')," value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      "committee": {\n        "status": "ready",\n        "active_version": {\n          "minor": 1\n        },\n        "latest_round": 19,\n        "latest_height": 302,\n        "executor_roles": null,\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When you restart ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-net-runner"),", a new ",(0,a.kt)("a",{parentName:"p",href:"/core/crypto#chain-domain-separation"},"chain context")," will be generated\nand you will have to remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," network and add it again to Oasis\nCLI.")),(0,a.kt)("p",null,"Now, let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"minimal")," runtime to the wallet. By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"oasis-net-runner"),"\nassigns ID ",(0,a.kt)("inlineCode",{parentName:"p"},"8000000000000000000000000000000000000000000000000000000000000000"),"\nto the first provided runtime."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis paratime add localhost minimal 8000000000000000000000000000000000000000000000000000000000000000\n? Description: minimal\n? Denomination symbol: TEST\n? Denomination decimal places: 9\n")),(0,a.kt)("p",null,"If the Oasis CLI was configured correctly, you should see the balance of Alice's\naccount in the runtime. Oasis CLI comes with hidden accounts for Alice, Bob and\nother test users (check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/blob/main/client-sdk/go/testing/testing.go"},"oasis-sdk testing source")," for a complete list).\nYou can access the accounts by prepending ",(0,a.kt)("inlineCode",{parentName:"p"},"test:")," literal in front of the test\nuser's name, for example ",(0,a.kt)("inlineCode",{parentName:"p"},"test:alice"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"oasis accounts show test:alice --network localhost\nAddress: oasis1qrec770vrek0a9a5lcrv0zvt22504k68svq7kzve\nNonce: 0\n\n=== CONSENSUS LAYER (localhost) ===\n  Total: 0.0 TEST\n  Available: 0.0 TEST\n\n\n\n=== minimal PARATIME ===\nBalances for all denominations:\n  1.0 TEST\n")),(0,a.kt)("p",null,"Sending some TEST in your runtime should also work. Let's send 0.1 TEST to\nBob's address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'oasis accounts transfer 0.1 test:bob --network localhost --account test:alice \nUnlock your account.\n? Passphrase: \nYou are about to sign the following transaction:\n{\n  "v": 1,\n  "call": {\n    "method": "accounts.Transfer",\n    "body": "omJ0b1UAyND0Wds45cwxynfmbSxEVty+tQJmYW1vdW50gkQF9eEAQA=="\n  },\n  "ai": {\n    "si": [\n      {\n        "address_spec": {\n          "signature": {\n            "ed25519": "NcPzNW3YU2T+ugNUtUWtoQnRvbOL9dYSaBfbjHLP1pE="\n          }\n        },\n        "nonce": 0\n      }\n    ],\n    "fee": {\n      "amount": {\n        "Amount": "0",\n        "Denomination": ""\n      },\n      "gas": 100\n    }\n  }\n}\n\nAccount:  test:alice\nNetwork:  localhost (localhost)\nParatime: minimal (minimal)\n? Sign this transaction? Yes\n(In case you are using a hardware-based signer you may need to confirm on device.)\nBroadcasting transaction...\nTransaction included in block successfully.\nRound:            14\nTransaction hash: 03a73bd08fb23472673ea45938b0871edd9ecd2cd02b3061d49c0906a772348a\nExecution successful.\n')),(0,a.kt)("h2",{id:"testing-from-a-client"},"Testing From a Client"),(0,a.kt)("p",null,"While the Oasis CLI is useful to quickly get your hands dirty, a more convenient\nway for writing end-to-end tests for your runtime once it grows is to create a\nGo client. Let's see how to use Go bindings for Oasis Runtime SDK in practice\nto submit some transactions and perform queries."),(0,a.kt)("p",null,"First, create a ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," directory and move into it, creating a Go module:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go mod init example.com/oasisprotocol/minimal-runtime-client\ngo mod tidy\n")),(0,a.kt)("p",null,"Then create a ",(0,a.kt)("inlineCode",{parentName:"p"},"test.go")," file with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="test.go"',title:'"test.go"'},'package main\n\nimport (\n    "context"\n    "fmt"\n    "os"\n    "time"\n\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/credentials/insecure"\n\n    "github.com/oasisprotocol/oasis-core/go/common"\n    cmnGrpc "github.com/oasisprotocol/oasis-core/go/common/grpc"\n    "github.com/oasisprotocol/oasis-core/go/common/logging"\n    "github.com/oasisprotocol/oasis-core/go/common/quantity"\n\n    "github.com/oasisprotocol/oasis-sdk/client-sdk/go/client"\n    "github.com/oasisprotocol/oasis-sdk/client-sdk/go/modules/accounts"\n    "github.com/oasisprotocol/oasis-sdk/client-sdk/go/testing"\n    "github.com/oasisprotocol/oasis-sdk/client-sdk/go/types"\n)\n\n// In reality these would come from command-line arguments, the environment\n// or a configuration file.\nconst (\n    // This is the default runtime ID as used in oasis-net-runner. It can\n    // be changed by using its --fixture.default.runtime.id argument.\n    runtimeIDHex = "8000000000000000000000000000000000000000000000000000000000000000"\n    // This is the default client node address as set in oasis-net-runner.\n    nodeAddress = "unix:/tmp/minimal-runtime-test/net-runner/network/client-0/internal.sock"\n)\n\n// The global logger.\nvar logger = logging.GetLogger("minimal-runtime-client")\n\n// Client contains the client helpers for communicating with the runtime. This is a simple wrapper\n// used for convenience.\ntype Client struct {\n    client.RuntimeClient\n\n    // Accounts are the accounts module helpers.\n    Accounts accounts.V1\n}\n\n// showBalances is a simple helper for displaying account balances.\nfunc showBalances(ctx context.Context, rc *Client, address types.Address) error {\n    // Query the runtime, specifically the accounts module, for the given address\' balances.\n    rsp, err := rc.Accounts.Balances(ctx, client.RoundLatest, address)\n    if err != nil {\n        return fmt.Errorf("failed to fetch account balances: %w", err)\n    }\n\n    fmt.Printf("=== Balances for %s ===\\n", address)\n    for denom, balance := range rsp.Balances {\n        fmt.Printf("%s: %s\\n", denom, balance)\n    }\n    fmt.Printf("\\n")\n\n    return nil\n}\n\nfunc tokenTransfer() error {\n    // Initialize logging.\n    if err := logging.Initialize(os.Stdout, logging.FmtLogfmt, logging.LevelDebug, nil); err != nil {\n        return fmt.Errorf("unable to initialize logging: %w", err)\n    }\n\n    // Decode hex runtime ID into something we can use.\n    var runtimeID common.Namespace\n    if err := runtimeID.UnmarshalHex(runtimeIDHex); err != nil {\n        return fmt.Errorf("malformed runtime ID: %w", err)\n    }\n\n    // Establish a gRPC connection with the client node.\n    logger.Info("connecting to local node")\n    conn, err := cmnGrpc.Dial(nodeAddress, grpc.WithTransportCredentials(insecure.NewCredentials()))\n    if err != nil {\n        return fmt.Errorf("failed to establish connection to %s: %w", nodeAddress, err)\n    }\n    defer conn.Close()\n\n    // Create the runtime client with account module query helpers.\n    c := client.New(conn, runtimeID)\n    rc := &Client{\n        RuntimeClient: c,\n        Accounts:      accounts.NewV1(c),\n    }\n\n    ctx, cancelFn := context.WithTimeout(context.Background(), 30*time.Second)\n    defer cancelFn()\n\n    // Show initial balances for Alice\'s and Bob\'s accounts.\n    logger.Info("dumping initial balances")\n    if err = showBalances(ctx, rc, testing.Alice.Address); err != nil {\n        return err\n    }\n    if err = showBalances(ctx, rc, testing.Bob.Address); err != nil {\n        return err\n    }\n\n    // Get current nonce for Alice\'s account.\n    nonce, err := rc.Accounts.Nonce(ctx, client.RoundLatest, testing.Alice.Address)\n    if err != nil {\n        return fmt.Errorf("failed to fetch account nonce: %w", err)\n    }\n\n    // Perform a transfer from Alice to Bob.\n    logger.Info("performing transfer", "nonce", nonce)\n    // Create a transfer transaction with Bob\'s address as the destination and 10 native base units\n    // as the amount.\n    tb := rc.Accounts.Transfer(\n        testing.Bob.Address,\n        types.NewBaseUnits(*quantity.NewFromUint64(10), types.NativeDenomination),\n    ).\n        // Configure gas as set in genesis parameters. We could also estimate it instead.\n        SetFeeGas(100).\n        // Append transaction authentication information using a single signature variant.\n        AppendAuthSignature(testing.Alice.SigSpec, nonce)\n    // Sign the transaction using the signer. Before a transaction can be submitted it must be\n    // signed by all configured signers. This will automatically fetch the corresponding chain\n    // domain separation context for the runtime.\n    if err = tb.AppendSign(ctx, testing.Alice.Signer); err != nil {\n        return fmt.Errorf("failed to sign transfer transaction: %w", err)\n    }\n    // Submit the transaction and wait for it to be included and a runtime block.\n    if err = tb.SubmitTx(ctx, nil); err != nil {\n        return fmt.Errorf("failed to submit transfer transaction: %w", err)\n    }\n\n    // Show final balances for Alice\'s and Bob\'s accounts.\n    logger.Info("dumping final balances")\n    if err = showBalances(ctx, rc, testing.Alice.Address); err != nil {\n        return err\n    }\n    return showBalances(ctx, rc, testing.Bob.Address)\n}\n\nfunc main() {\n    if err := tokenTransfer(); err != nil {\n        panic(err)\n    }\n}\n')),(0,a.kt)("p",null,"Fetch the dependencies:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go get\n")),(0,a.kt)("p",null,"And build it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go build\n")),(0,a.kt)("p",null,"The example client will connect to one of the nodes in the network (the ",(0,a.kt)("em",{parentName:"p"},"client"),"\nnode), query the runtime for initial balances of two accounts (Alice and Bob as\nspecified above in the genesis state), then proceed to issue a transfer\ntransaction that will transfer 10 native base units from Alice to Bob. At the\nend it will again query and display the final balances of both accounts."),(0,a.kt)("p",null,"To run the built client do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./minimal-runtime-client\n")),(0,a.kt)("p",null,"The output should be something like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'level=info ts=2022-06-28T14:08:02.834961397Z caller=test.go:81 module=minimal-runtime-client msg="connecting to local node"\nlevel=info ts=2022-06-28T14:08:02.836059713Z caller=test.go:103 module=minimal-runtime-client msg="dumping initial balances"\n=== Balances for oasis1qrec770vrek0a9a5lcrv0zvt22504k68svq7kzve ===\n<native>: 1000000000\n\n=== Balances for oasis1qrydpazemvuwtnp3efm7vmfvg3tde044qg6cxwzx ===\n<native>: 2000000000\n\nlevel=info ts=2022-06-28T14:08:02.864348758Z caller=test.go:117 module=minimal-runtime-client msg="performing transfer" nonce=0\nlevel=info ts=2022-06-28T14:08:18.515842571Z caller=test.go:146 module=minimal-runtime-client msg="dumping final balances"\n=== Balances for oasis1qrec770vrek0a9a5lcrv0zvt22504k68svq7kzve ===\n<native>: 999999990\n\n=== Balances for oasis1qrydpazemvuwtnp3efm7vmfvg3tde044qg6cxwzx ===\n<native>: 2000000010\n\n')),(0,a.kt)("p",null,"You can try running the client multiple times and it should transfer the given\namount each time. As long as the local network is running the state will be\npreserved."),(0,a.kt)("p",null,"Congratulations, you have successfully built and deployed your first runtime!"),(0,a.kt)("admonition",{title:"Example",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can view and download complete ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/tree/main/examples/runtime-sdk/minimal-runtime"},"runtime example")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/oasisprotocol/oasis-sdk/tree/main/examples/client-sdk/go/minimal-runtime-client"},"client code in Go"),"\nfrom the Oasis SDK repository.")))}m.isMDXComponent=!0}}]);