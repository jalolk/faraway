LavaPack.loadBundle([[4708,{bail:4709,extend:3631,"is-buffer":4710,"is-plain-obj":3990,trough:4711,vfile:4769},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){var n=e("bail"),r=e("is-buffer"),t=e("extend"),s=e("is-plain-obj"),o=e("trough"),l=e("vfile");a.exports=function e(){var a=[],i=o(),r={},y=!1,k=-1;return v.data=function(e,a){if("string"==typeof e)return 2===arguments.length?(p("data",y),r[e]=a,v):d.call(r,e)&&r[e]||null;if(e)return p("data",y),r=e,v;return r},v.freeze=w,v.attachers=a,v.use=function(e){var i;if(p("use",y),null===e||e===undefined);else if("function"==typeof e)d.apply(null,arguments);else{if("object"!=typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?l(e):n(e)}i&&(r.settings=t(r.settings||{},i));return v;function n(e){l(e.plugins),e.settings&&(i=t(i||{},e.settings))}function o(e){if("function"==typeof e)d(e);else{if("object"!=typeof e)throw new Error("Expected usable value, not `"+e+"`");"length"in e?d.apply(null,e):n(e)}}function l(e){var a,i;if(null===e||e===undefined);else{if("object"!=typeof e||!("length"in e))throw new Error("Expected a list of plugins, not `"+e+"`");for(a=e.length,i=-1;++i<a;)o(e[i])}}function d(e,i){var n=j(e);n?(s(n[1])&&s(i)&&(i=t(n[1],i)),n[1]=i):a.push(c.call(arguments))}},v.parse=function(e){var a,i=l(e);if(w(),h("parse",a=v.Parser),m(a,"parse"))return new a(String(i),i).parse();return a(String(i),i)},v.stringify=function(e,a){var i,n=l(a);if(w(),g("stringify",i=v.Compiler),b(e),m(i,"compile"))return new i(e,n).compile();return i(e,n)},v.run=z,v.runSync=function(e,a){var i,r=!1;return z(e,a,t),f("runSync","run",r),i;function t(e,a){r=!0,n(e),i=a}},v.process=x,v.processSync=function(e){var a,i=!1;return w(),h("processSync",v.Parser),g("processSync",v.Compiler),x(a=l(e),r),f("processSync","process",i),a;function r(e){i=!0,n(e)}},v;function v(){for(var i=e(),n=a.length,s=-1;++s<n;)i.use.apply(null,a[s]);return i.data(t(!0,{},r)),i}function w(){var e,n,r,t;if(y)return v;for(;++k<a.length;)n=(e=a[k])[0],null,!1!==(r=e[1])&&(!0===r&&(e[1]=undefined),"function"==typeof(t=n.apply(v,e.slice(1)))&&i.use(t));return y=!0,k=Infinity,v}function j(e){for(var i,n=a.length,r=-1;++r<n;)if((i=a[r])[0]===e)return i}function z(e,a,n){if(b(e),w(),n||"function"!=typeof a||(n=a,a=null),!n)return new Promise(r);function r(r,t){i.run(e,l(a),(function(a,i,s){i=i||e,a?t(a):r?r(i):n(null,i,s)}))}r(null,n)}function x(e,a){if(w(),h("process",v.Parser),g("process",v.Compiler),!a)return new Promise(i);function i(i,n){var r=l(e);u.run(v,{file:r},(function(e){e?n(e):i?i(r):a(null,r)}))}i(null,a)}}().freeze();var c=[].slice,d={}.hasOwnProperty,u=o().use((function(e,a){a.tree=e.parse(a.file)})).use((function(e,a,i){e.run(a.tree,a.file,(function(e,n,r){e?i(e):(a.tree=n,a.file=r,i())}))})).use((function(e,a){var i=e.stringify(a.tree,a.file),n=a.file;i===undefined||null===i||("string"==typeof i||r(i)?n.contents=i:n.result=i)}));function m(e,a){return"function"==typeof e&&e.prototype&&(function(e){var a;for(a in e)return!0;return!1}(e.prototype)||a in e.prototype)}function h(e,a){if("function"!=typeof a)throw new Error("Cannot `"+e+"` without `Parser`")}function g(e,a){if("function"!=typeof a)throw new Error("Cannot `"+e+"` without `Compiler`")}function p(e,a){if(a)throw new Error("Cannot invoke `"+e+"` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.")}function b(e){if(!e||"string"!=typeof e.type)throw new Error("Expected node, got `"+e+"`")}function f(e,a,i){if(!i)throw new Error("`"+e+"` finished async. Use `"+a+"` instead")}}}},{package:"react-markdown>unified",file:"node_modules/unified/index.js"}],[4709,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){a.exports=function(e){if(e)throw e}}}},{package:"react-markdown>unified>bail",file:"node_modules/unified/node_modules/bail/index.js"}],[4710,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
a.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}}}},{package:"react-markdown>unified>is-buffer",file:"node_modules/unified/node_modules/is-buffer/index.js"}],[4711,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){a.exports=function(){var e=[],a={};return a.run=function(){var a=-1,i=n.call(arguments,0,-1),r=arguments[arguments.length-1];if("function"!=typeof r)throw new Error("Expected function as last argument, not "+r);function t(s){var o=e[++a],l=n.call(arguments,0).slice(1),c=i.length,d=-1;if(s)r(s);else{for(;++d<c;)null!==l[d]&&l[d]!==undefined||(l[d]=i[d]);i=l,o?function(e,a){var i;return r;function r(){var a,r=n.call(arguments,0),o=e.length>r.length;o&&r.push(t);try{a=e.apply(null,r)}catch(e){if(o&&i)throw e;return t(e)}o||(a&&"function"==typeof a.then?a.then(s,t):a instanceof Error?t(a):s(a))}function t(){i||(i=!0,a.apply(null,arguments))}function s(e){t(null,e)}}(o,t).apply(null,i):r.apply(null,[null].concat(i))}}t.apply(null,[null].concat(i))},a.use=function(i){if("function"!=typeof i)throw new Error("Expected `fn` to be a function, not "+i);return e.push(i),a},a};var n=[].slice}}},{package:"react-markdown>unified>trough",file:"node_modules/unified/node_modules/trough/index.js"}],[4712,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){a.exports=function(e,a,i){var n;null!==i&&i!==undefined||"object"==typeof a&&!Array.isArray(a)||(i=a,a={});n=Object.assign({type:String(e)},a),Array.isArray(i)?n.children=i:null!==i&&i!==undefined&&(n.value=String(i));return n}}}},{package:"react-markdown>remark-rehype>mdast-util-to-hast>unist-builder",file:"node_modules/unist-builder/index.js"}],[4713,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){a.exports=function(e){return!(e&&e.position&&e.position.start&&e.position.start.line&&e.position.start.column&&e.position.end&&e.position.end.line&&e.position.end.column)}}}},{package:"react-markdown>remark-rehype>mdast-util-to-hast>unist-util-generated",file:"node_modules/unist-util-generated/index.js"}],[4714,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){var n=s("start"),r=s("end");function t(e){return{start:n(e),end:r(e)}}function s(e){return a.displayName=e,a;function a(a){var i=a&&a.position&&a.position[e]||{};return{line:i.line||null,column:i.column||null,offset:isNaN(i.offset)?null:i.offset}}}a.exports=t,t.start=n,t.end=r}}},{package:"react-markdown>remark-rehype>mdast-util-to-hast>unist-util-position",file:"node_modules/unist-util-position/index.js"}],[4715,{"unist-util-visit-parents":4718},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){a.exports=o;var n=e("unist-util-visit-parents"),r=n.CONTINUE,t=n.SKIP,s=n.EXIT;function o(e,a,i,r){"function"==typeof a&&"function"!=typeof i&&(r=i,i=a,a=null),n(e,a,(function(e,a){var n=a[a.length-1],r=n?n.children.indexOf(e):null;return i(e,r,n)}),r)}o.CONTINUE=r,o.SKIP=t,o.EXIT=s}}},{package:"react-markdown>unist-util-visit",file:"node_modules/unist-util-visit/index.js"}],[4716,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){function n(e){if("string"==typeof e)return function(e){return a;function a(a){return Boolean(a&&a.type===e)}}(e);if(null===e||e===undefined)return s;if("object"==typeof e)return("length"in e?t:r)(e);if("function"==typeof e)return e;throw new Error("Expected function, string, or object as test")}function r(e){return function(a){var i;for(i in e)if(a[i]!==e[i])return!1;return!0}}function t(e){var a=function(e){for(var a=[],i=e.length,r=-1;++r<i;)a[r]=n(e[r]);return a}(e),i=a.length;return function(){var e=-1;for(;++e<i;)if(a[e].apply(this,arguments))return!0;return!1}}function s(){return!0}a.exports=n}}},{package:"react-markdown>unist-util-visit>unist-util-is",file:"node_modules/unist-util-visit/node_modules/unist-util-is/convert.js"}],[4717,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){a.exports=function(e){return e}}}},{package:"react-markdown>unist-util-visit>unist-util-visit-parents",file:"node_modules/unist-util-visit/node_modules/unist-util-visit-parents/color.browser.js"}],[4718,{"./color":4717,"unist-util-is/convert":4716},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){a.exports=l;var n=e("unist-util-is/convert"),r=e("./color"),t=!0,s="skip",o=!1;function l(e,a,i,t){var l;function h(e,n,d){var g,p=m(e)?e:{};return u(p.type)&&(g=u(p.tagName)?p.tagName:u(p.name)?p.name:undefined,b.displayName="node ("+r(p.type+(g?"<"+g+">":""))+")"),b;function b(){var r,u=[];return(a&&!l(e,n,d[d.length-1]||null)||(u=c(i(e,d)))[0]!==o)&&e.children&&u[0]!==s?(r=c(function(e,a){var i,n=-1,r=t?-1:1,s=(t?e.length:n)+r;for(;s>n&&s<e.length;){if((i=h(e[s],s,a)())[0]===o)return i;s="number"==typeof i[1]?i[1]:s+r}}(e.children,d.concat(e))),r[0]===o?r:u):u}}d(a)&&!d(i)&&(t=i,i=a,a=null),l=n(a),h(e,null,[])()}function c(e){return m(e)&&"length"in e?e:"number"==typeof e?[t,e]:[e]}function d(e){return"function"==typeof e}function u(e){return"string"==typeof e}function m(e){return"object"==typeof e&&null!==e}l.CONTINUE=t,l.SKIP=s,l.EXIT=o}}},{package:"react-markdown>unist-util-visit>unist-util-visit-parents",file:"node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js"}],[4730,{react:4562},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){Object.defineProperty(i,"__esModule",{value:!0});var n=e("react");function r(e,a){var i=n.useState((function(){return{inputs:a,result:e()}}))[0],r=n.useRef(!0),t=n.useRef(i),s=r.current||Boolean(a&&t.current.inputs&&function(e,a){if(e.length!==a.length)return!1;for(var i=0;i<e.length;i++)if(e[i]!==a[i])return!1;return!0}(a,t.current.inputs))?t.current:{inputs:a,result:e()};return n.useEffect((function(){r.current=!1,t.current=s}),[s]),s.result}function t(e,a){return r((function(){return e}),a)}var s=r,o=t;i.useCallback=o,i.useCallbackOne=t,i.useMemo=s,i.useMemoOne=r}}},{package:"react-beautiful-dnd>use-memo-one",file:"node_modules/use-memo-one/dist/use-memo-one.cjs.js"}],[4761,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){function n(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}a.exports=function e(a,i){if(a===i)return!0;if(null==a||null==i)return!1;if(Array.isArray(a))return Array.isArray(i)&&a.length===i.length&&a.every((function(a,n){return e(a,i[n])}));if("object"==typeof a||"object"==typeof i){var r=n(a),t=n(i);return r!==a||t!==i?e(r,t):Object.keys(Object.assign({},a,i)).every((function(n){return e(a[n],i[n])}))}return!1}}}},{package:"react-router-dom>history>value-equal",file:"node_modules/value-equal/cjs/value-equal.js"}],[4762,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){function n(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}a.exports=function e(a,i){if(a===i)return!0;if(null==a||null==i)return!1;if(Array.isArray(a))return Array.isArray(i)&&a.length===i.length&&a.every((function(a,n){return e(a,i[n])}));if("object"!=typeof a&&"object"!=typeof i)return!1;var r=n(a),t=n(i);return r!==a||t!==i?e(r,t):Object.keys(Object.assign({},a,i)).every((function(n){return e(a[n],i[n])}))}}}},{package:"react-router-dom>history>value-equal",file:"node_modules/value-equal/cjs/value-equal.min.js"}],[4763,{"./cjs/value-equal.js":4761,"./cjs/value-equal.min.js":4762},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){a.exports=e("./cjs/value-equal.min.js")}}},{package:"react-router-dom>history>value-equal",file:"node_modules/value-equal/index.js"}],[4768,{_process:4307,"is-buffer":4770,path:4291,"replace-ext":4771},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){(function(i){(function(){var n=e("path"),r=e("replace-ext"),t=e("is-buffer");a.exports=c;var s={}.hasOwnProperty,o=c.prototype,l=["history","path","basename","stem","extname","dirname"];function c(e){var a,n,r;if(e){if("string"==typeof e||t(e))e={contents:e};else if("message"in e&&"messages"in e)return e}else e={};if(!(this instanceof c))return new c(e);for(this.data={},this.messages=[],this.history=[],this.cwd=i.cwd(),n=-1,r=l.length;++n<r;)a=l[n],s.call(e,a)&&(this[a]=e[a]);for(a in e)-1===l.indexOf(a)&&(this[a]=e[a])}function d(e,a){if(-1!==e.indexOf(n.sep))throw new Error("`"+a+"` cannot be a path: did not expect `"+n.sep+"`")}function u(e,a){if(!e)throw new Error("`"+a+"` cannot be empty")}function m(e,a){if(!e)throw new Error("Setting `"+a+"` requires `path` to be set too")}o.toString=function(e){var a=this.contents||"";return t(a)?a.toString(e):String(a)},Object.defineProperty(o,"path",{get:function(){return this.history[this.history.length-1]},set:function(e){u(e,"path"),e!==this.path&&this.history.push(e)}}),Object.defineProperty(o,"dirname",{get:function(){return"string"==typeof this.path?n.dirname(this.path):undefined},set:function(e){m(this.path,"dirname"),this.path=n.join(e||"",this.basename)}}),Object.defineProperty(o,"basename",{get:function(){return"string"==typeof this.path?n.basename(this.path):undefined},set:function(e){u(e,"basename"),d(e,"basename"),this.path=n.join(this.dirname||"",e)}}),Object.defineProperty(o,"extname",{get:function(){return"string"==typeof this.path?n.extname(this.path):undefined},set:function(e){var a=e||"";if(d(a,"extname"),m(this.path,"extname"),a){if("."!==a.charAt(0))throw new Error("`extname` must start with `.`");if(-1!==a.indexOf(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=r(this.path,a)}}),Object.defineProperty(o,"stem",{get:function(){return"string"==typeof this.path?n.basename(this.path,this.extname):undefined},set:function(e){u(e,"stem"),d(e,"stem"),this.path=n.join(this.dirname||"",e+(this.extname||""))}})}).call(this)}).call(this,e("_process"))}}},{package:"react-markdown>vfile",file:"node_modules/vfile/core.js"}],[4769,{"./core.js":4768,"vfile-message":4773},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){var n=e("vfile-message"),r=e("./core.js");a.exports=r;var t=r.prototype;t.message=function(e,a,i){var r=this.path,t=new n(e,a,i);r&&(t.name=r+":"+t.name,t.file=r);return t.fatal=!1,this.messages.push(t),t},t.info=function(){var e=this.message.apply(this,arguments);return e.fatal=null,e},t.fail=function(){var e=this.message.apply(this,arguments);throw e.fatal=!0,e}}}},{package:"react-markdown>vfile",file:"node_modules/vfile/index.js"}],[4770,{},function(){with(this.scopeTerminator)with(this.globalThis)return function(){"use strict";return function(e,a,i){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */