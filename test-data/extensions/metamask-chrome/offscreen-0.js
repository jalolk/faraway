LavaPack.loadBundle([[2182,{"./proxy/index.cjs":2184},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){s===undefined&&(s=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,r)}:function(e,t,n,s){s===undefined&&(s=n),e[s]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(n,"__esModule",{value:!0}),r(e("./proxy/index.cjs"),n)}}},{package:"@metamask/snaps-execution-environments",file:"node_modules/@metamask/snaps-execution-environments/dist/index.cjs"}],[2183,{"@metamask/post-message-stream":1843,"@metamask/snaps-execution-environments/package.json":2185,"@metamask/snaps-utils":2384,"@metamask/utils":2530},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var s,r,i,a,o,c,l=this&&this.__classPrivateFieldSet||function(e,t,n,s,r){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?r.call(e,n):r?r.value=n:t.set(e,n),n},u=this&&this.__classPrivateFieldGet||function(e,t,n,s){if("a"===n&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?s:"a"===n?s.call(e):s?s.value:t.get(e)},d=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.ProxySnapExecutor=void 0;const m=e("@metamask/post-message-stream"),p=d(e("@metamask/snaps-execution-environments/package.json")),f=e("@metamask/snaps-utils"),g=e("@metamask/utils"),h=`https://execution.metamask.io/iframe/${p.default.version}/index.html`;class b{static initialize(e,t=h){return new b(e,t)}constructor(e,t){s.add(this),r.set(this,void 0),i.set(this,void 0),this.jobs={},l(this,r,e,"f"),u(this,r,"f").on("data",u(this,s,"m",a).bind(this)),l(this,i,t,"f")}}n.ProxySnapExecutor=b,r=new WeakMap,i=new WeakMap,s=new WeakSet,a=function e(t){const{jobId:n,data:r}=t;this.jobs[n]?"terminateJob"!==r.method?this.jobs[n].stream.write(r):u(this,s,"m",c).call(this,n):u(this,s,"m",o).call(this,n).then((()=>{u(this,s,"m",e).call(this,t)})).catch((e=>{(0,f.logError)("[Worker] Error initializing job:",e)}))},o=async function(e){const t=await(0,f.createWindow)(u(this,i,"f"),e),n=new m.WindowPostMessageStream({name:"parent",target:"child",targetWindow:t,targetOrigin:"*"});return n.on("data",(t=>{u(this,r,"f").write({data:t,jobId:e})})),this.jobs[e]={id:e,window:t,stream:n},this.jobs[e]},c=function(e){(0,g.assert)(this.jobs[e],`Job "${e}" not found.`);const t=document.getElementById(e);(0,g.assert)(t,`Iframe with ID "${e}" not found.`),t.remove(),this.jobs[e].stream.destroy(),delete this.jobs[e]}}}},{package:"@metamask/snaps-execution-environments",file:"node_modules/@metamask/snaps-execution-environments/dist/proxy/ProxySnapExecutor.cjs"}],[2184,{"./ProxySnapExecutor.cjs":2183},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var s=this&&this.__createBinding||(Object.create?function(e,t,n,s){s===undefined&&(s=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,s,r)}:function(e,t,n,s){s===undefined&&(s=n),e[s]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||s(t,e,n)};Object.defineProperty(n,"__esModule",{value:!0}),r(e("./ProxySnapExecutor.cjs"),n)}}},{package:"@metamask/snaps-execution-environments",file:"node_modules/@metamask/snaps-execution-environments/dist/proxy/index.cjs"}],[2185,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){t.exports={name:"@metamask/snaps-execution-environments",version:"6.7.2",description:"Snap sandbox environments for executing SES javascript",repository:{type:"git",url:"https://github.com/MetaMask/snaps.git"},sideEffects:!1,exports:{".":{import:{types:"./dist/index.d.mts",default:"./dist/index.mjs"},require:{types:"./dist/index.d.cts",default:"./dist/index.cjs"}},"./dist/browserify/node-process/bundle.js":{default:"./dist/browserify/node-process/bundle.js"},"./dist/browserify/node-thread/bundle.js":{default:"./dist/browserify/node-thread/bundle.js"},"./package.json":"./package.json"},main:"./dist/index.cjs",module:"./dist/index.mjs",types:"./dist/index.d.cts",files:["dist"],scripts:{test:"rimraf coverage && jest && yarn test:browser && yarn posttest",posttest:"ts-node scripts/coverage.ts && rimraf coverage/jest coverage/wdio","test:browser":"wdio run wdio.config.js","test:ci":"yarn test","test:watch":"jest --watch","lint:eslint":"eslint . --cache --ext js,ts,jsx,tsx","lint:misc":'prettier --no-error-on-unmatched-pattern --loglevel warn "**/*.json" "**/*.md" "**/*.html" "!CHANGELOG.md" --ignore-path ./.prettierignore',"lint:fix":"yarn lint:eslint --fix && yarn lint:misc --write","lint:changelog":"../../scripts/validate-changelog.sh @metamask/snaps-execution-environments",lint:"yarn lint:eslint && yarn lint:misc --check && yarn lint:changelog && yarn lint:dependencies",clean:"rimraf '*.tsbuildinfo' 'dist' 'src/__GENERATED__/' 'coverage/*' '__test__/*'",build:"ts-bridge --project tsconfig.build.json --verbose --no-references && yarn build:lavamoat","build:lavamoat":"lavamoat scripts/build.js --policy lavamoat/build-system/policy.json  --policyOverride lavamoat/build-system/policy-override.json","build:lavamoat:policy":"yarn build:lavamoat --writeAutoPolicy && node scripts/build.js --writeAutoPolicy","auto-changelog-init":"auto-changelog init","publish:preview":"yarn npm publish --tag preview","lint:ci":"yarn lint",start:"node scripts/start.js","lint:dependencies":"depcheck"},dependencies:{"@metamask/json-rpc-engine":"^9.0.2","@metamask/object-multiplex":"^2.0.0","@metamask/post-message-stream":"^8.1.1","@metamask/providers":"^17.1.2","@metamask/rpc-errors":"^6.3.1","@metamask/snaps-sdk":"^6.5.0","@metamask/snaps-utils":"^8.1.1","@metamask/superstruct":"^3.1.0","@metamask/utils":"^9.2.1",nanoid:"^3.1.31","readable-stream":"^3.6.2"},devDependencies:{"@babel/core":"^7.23.2","@babel/preset-env":"^7.23.2","@babel/preset-typescript":"^7.23.2","@esbuild-plugins/node-globals-polyfill":"^0.2.3","@esbuild-plugins/node-modules-polyfill":"^0.2.2","@lavamoat/allow-scripts":"^3.0.4","@lavamoat/lavapack":"^6.1.1","@lavamoat/lavatube":"^1.0.0","@metamask/auto-changelog":"^3.4.4","@metamask/eslint-config":"^12.1.0","@metamask/eslint-config-jest":"^12.1.0","@metamask/eslint-config-nodejs":"^12.1.0","@metamask/eslint-config-typescript":"^12.1.0","@swc/core":"1.3.78","@swc/jest":"^0.2.26","@ts-bridge/cli":"^0.5.1","@types/express":"^4.17.17","@types/jest":"^27.5.1","@types/node":"18.14.2","@typescript-eslint/eslint-plugin":"^5.42.1","@typescript-eslint/parser":"^6.21.0","@wdio/browser-runner":"^8.19.0","@wdio/cli":"^8.19.0","@wdio/globals":"^8.19.0","@wdio/mocha-framework":"^8.19.0","@wdio/spec-reporter":"^8.19.0","@wdio/static-server-service":"^8.19.0","babel-plugin-tsconfig-paths-module-resolver":"^1.0.4",babelify:"^10.0.0",browserify:"^17.0.0",deepmerge:"^4.2.2",depcheck:"^1.4.7",esbuild:"^0.18.10",eslint:"^8.27.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.26.0","eslint-plugin-jest":"^27.1.5","eslint-plugin-jsdoc":"^41.1.2","eslint-plugin-n":"^15.7.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-promise":"^6.1.1","expect-webdriverio":"^4.4.1","istanbul-lib-coverage":"^3.2.0","istanbul-lib-report":"^3.0.0","istanbul-reports":"^3.1.5",jest:"^29.0.2","jest-environment-node":"^29.5.0","jest-fetch-mock":"^3.0.3",lavamoat:"^8.0.4","lavamoat-browserify":"^17.0.5",prettier:"^2.7.1","prettier-plugin-packagejson":"^2.2.11",rimraf:"^4.1.2","serve-handler":"^6.1.5",ses:"^1.1.0",terser:"^5.17.7","ts-node":"^10.9.1",typescript:"~5.3.3",vite:"^4.3.9","vite-tsconfig-paths":"^4.0.5","wdio-chromedriver-service":"^8.1.1","wdio-geckodriver-service":"^5.0.2",webdriverio:"^8.19.0",yargs:"^17.7.1"},engines:{node:"^18.16 || >=20"},publishConfig:{access:"public",registry:"https://registry.npmjs.org/"}}}}},{package:"@metamask/snaps-execution-environments",file:"node_modules/@metamask/snaps-execution-environments/package.json"}],[4808,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(n!==undefined){var s=n.call(e,t||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(n,"__esModule",{value:!0}),n.CallbackProcessor=void 0;n.CallbackProcessor=class{constructor(){s(this,"currentMessageId",0),s(this,"messageCallbacks",new Map)}registerCallback(e){return this.currentMessageId+=1,this.messageCallbacks.set(this.currentMessageId,e),this.currentMessageId}processCallback(e){if(this.messageCallbacks.has(e.messageId)){const t=this.messageCallbacks.get(e.messageId);if(t)return this.messageCallbacks.delete(e.messageId),t(e)}return null}}}}},{package:"$root$",file:"offscreen/scripts/callback-processor.ts"}],[4809,{"../../shared/constants/offscreen-communication":4833},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){chrome.runtime.onMessage.addListener(((e,t,n)=>{if(e.target===s.OffscreenCommunicationTarget.latticeOffscreen)return async function(e){const t=window.open(e);if(!t)throw new Error("Failed to open Lattice connector.");return t}(e.params.url).then((e=>{const t=setInterval((()=>{e.closed&&(clearInterval(t),n({error:new Error("Lattice connector closed.")}))}),500);window.addEventListener("message",(r=>{if(r.origin===s.KnownOrigins.lattice||r.source!==e)try{clearInterval(t);const e=JSON.parse(r.data);e.deviceID&&e.password||n({error:new Error("Invalid credentials returned from Lattice.")}),n({result:e})}catch(e){n({error:e})}}),!1)})),!0}))};var s=e("../../shared/constants/offscreen-communication")}}},{package:"$root$",file:"offscreen/scripts/lattice.ts"}],[4810,{"../../shared/constants/offscreen-communication":4833,"./callback-processor":4808},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=async function(){return new Promise((e=>{const t=document.createElement("iframe");t.src="https://metamask.github.io/eth-ledger-bridge-keyring",t.allow="hid",t.onload=()=>{!function(e){window.addEventListener("message",(({origin:t,data:n,source:r})=>{if(t===s.KnownOrigins.ledger&&r===e.contentWindow&&n){if(n.action===a)return void chrome.runtime.sendMessage({action:s.OffscreenCommunicationEvents.ledgerDeviceConnect,payload:n.payload.connected});o.processCallback(n)}})),chrome.runtime.onMessage.addListener(((t,n,r)=>{if(t.target!==s.OffscreenCommunicationTarget.ledgerOffscreen)return;if(!e.contentWindow){return void r({success:!1,payload:{error:new Error("Ledger iframe not present")}})}const a=o.registerCallback(r),c={...t,target:i,messageId:a};return e.contentWindow.postMessage(c,s.KnownOrigins.ledger),!0}))}(t),e()},document.body.appendChild(t)}))};var s=e("../../shared/constants/offscreen-communication"),r=e("./callback-processor");const i="LEDGER-IFRAME",a="ledger-connection-event",o=new r.CallbackProcessor}}},{package:"$root$",file:"offscreen/scripts/ledger.ts"}],[4812,{"../../shared/constants/offscreen-communication":4833,"@trezor/connect-web":2822},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){chrome.runtime.onMessage.addListener(((e,t,n)=>{if(e.target===r.OffscreenCommunicationTarget.trezorOffscreen){switch(e.action){case r.TrezorAction.init:s.default.on(s.DEVICE_EVENT,(e=>{var t;e.type===s.DEVICE.CONNECT&&null!==(t=e.payload.features)&&void 0!==t&&t.model&&chrome.runtime.sendMessage({target:r.OffscreenCommunicationTarget.extension,event:r.OffscreenCommunicationEvents.trezorDeviceConnect,payload:e.payload.features.model})})),s.default.init({...e.params,env:"web"}).then((()=>{n()}));break;case r.TrezorAction.dispose:s.default.dispose(),n();break;case r.TrezorAction.getPublicKey:s.default.getPublicKey(e.params).then((e=>{n(e)}));break;case r.TrezorAction.signTransaction:s.default.ethereumSignTransaction(e.params).then((e=>{n(e)}));break;case r.TrezorAction.signMessage:s.default.ethereumSignMessage(e.params).then((e=>{n(e)}));break;case r.TrezorAction.signTypedData:s.default.ethereumSignTypedData(e.params).then((e=>{n(e)}));break;default:n({success:!1,payload:{error:"Trezor action not supported"}})}return!0}}))};var s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var s={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(s,a,o):s[a]=e[a]}return s.default=e,n&&n.set(e,s),s}(e("@trezor/connect-web")),r=e("../../shared/constants/offscreen-communication");function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}}}},{package:"$root$",file:"offscreen/scripts/trezor.ts"}],[4811,{"../../shared/constants/offscreen-communication":4833,"./lattice":4809,"./ledger":4810,"./trezor":4812,"@metamask/post-message-stream":1843,"@metamask/snaps-execution-environments":2182,"@metamask/utils":2530},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,t,n){var s=e("@metamask/post-message-stream"),r=e("@metamask/snaps-execution-environments"),i=(e("@metamask/utils"),e("../../shared/constants/offscreen-communication")),a=l(e("./ledger")),o=l(e("./trezor")),c=l(e("./lattice"));function l(e){return e&&e.__esModule?e:{default:e}}(async function(){!function(){const e=new s.BrowserRuntimePostMessageStream({name:"child",target:"parent"});r.ProxySnapExecutor.initialize(e,"./snaps/index.html")}(),(0,o.default)(),(0,c.default)();try{const e=new Promise(((e,t)=>{setTimeout((()=>{t(new Error("Ledger initialization timed out"))}),i.OFFSCREEN_LEDGER_INIT_TIMEOUT)}));await Promise.race([(0,a.default)(),e])}catch(e){console.error("Ledger initialization failed:",e)}})().then((()=>{chrome.runtime.sendMessage({target:i.OffscreenCommunicationTarget.extensionMain,isBooted:!0,webdriverPresent:!0===navigator.webdriver})}))}}},{package:"$root$",file:"offscreen/scripts/offscreen.ts"}]],[4811],{});