(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[,,,,,,,,function(t,e,n){"use strict";n.r(e),n.d(e,"Oscillator",(function(){return y})),n.d(e,"__wbindgen_object_drop_ref",(function(){return g})),n.d(e,"__widl_f_new_AudioContext",(function(){return h})),n.d(e,"__widl_f_close_AudioContext",(function(){return _})),n.d(e,"__widl_f_create_gain_AudioContext",(function(){return b})),n.d(e,"__widl_f_create_oscillator_AudioContext",(function(){return w})),n.d(e,"__widl_f_destination_AudioContext",(function(){return m})),n.d(e,"__widl_f_connect_with_audio_node_AudioNode",(function(){return v})),n.d(e,"__widl_f_set_value_AudioParam",(function(){return O})),n.d(e,"__widl_f_gain_GainNode",(function(){return j})),n.d(e,"__wbindgen_string_new",(function(){return x})),n.d(e,"__widl_f_set_type_OscillatorNode",(function(){return T})),n.d(e,"__widl_f_frequency_OscillatorNode",(function(){return E})),n.d(e,"__widl_f_start_OscillatorNode",(function(){return S})),n.d(e,"__wbindgen_throw",(function(){return A})),n.d(e,"__wbindgen_rethrow",(function(){return z}));var r=n(13);const o="undefined"!=typeof AudioContext?AudioContext:webkitAudioContext,i=new Array(32);function u(t){return i[t]}i.fill(void 0),i.push(void 0,null,!0,!1);let c=i.length;function f(t){const e=u(t);return function(t){t<36||(i[t]=c,c=t)}(t),e}let s=new("undefined"==typeof TextDecoder?n(9).TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});s.decode();let l=null;function a(t,e){return s.decode((null!==l&&l.buffer===r.c.buffer||(l=new Uint8Array(r.c.buffer)),l).subarray(t,t+e))}function p(t){c===i.length&&i.push(i.length+1);const e=c;return c=i[e],i[e]=t,e}function d(t){r.b(p(t))}class y{static __wrap(t){const e=Object.create(y.prototype);return e.ptr=t,e}free(){const t=this.ptr;this.ptr=0,r.a(t)}constructor(){var t=r.d();return y.__wrap(t)}set_gain(t){r.e(this.ptr,t)}}const g=function(t){f(t)},h=function(){try{return p(new o)}catch(t){d(t)}},_=function(t){try{return p(u(t).close())}catch(t){d(t)}},b=function(t){try{return p(u(t).createGain())}catch(t){d(t)}},w=function(t){try{return p(u(t).createOscillator())}catch(t){d(t)}},m=function(t){return p(u(t).destination)},v=function(t,e){try{return p(u(t).connect(u(e)))}catch(t){d(t)}},O=function(t,e){u(t).value=e},j=function(t){return p(u(t).gain)},x=function(t,e){return p(a(t,e))},T=function(t,e){u(t).type=f(e)},E=function(t){return p(u(t).frequency)},S=function(t){try{u(t).start()}catch(t){d(t)}},A=function(t,e){throw new Error(a(t,e))},z=function(t){throw f(t)}},function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!_(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}})),f=r[n];n<i;f=r[++n])g(f)||!m(f)?u+=" "+f:u+=" "+c(f);return u},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n;if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,u={};function c(t,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),y(n)?r.showHidden=n:n&&e._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=f),l(r,t,r.depth)}function f(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function s(t,e){return t}function l(t,n,r){if(t.customInspect&&n&&j(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return _(o)||(o=l(t,o,r)),o}var i=function(t,e){if(b(e))return t.stylize("undefined","undefined");if(_(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(h(e))return t.stylize(""+e,"number");if(y(e))return t.stylize(""+e,"boolean");if(g(e))return t.stylize("null","null")}(t,n);if(i)return i;var u=Object.keys(n),c=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),O(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return a(n);if(0===u.length){if(j(n)){var f=n.name?": "+n.name:"";return t.stylize("[Function"+f+"]","special")}if(w(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(v(n))return t.stylize(Date.prototype.toString.call(n),"date");if(O(n))return a(n)}var s,m="",x=!1,T=["{","}"];(d(n)&&(x=!0,T=["[","]"]),j(n))&&(m=" [Function"+(n.name?": "+n.name:"")+"]");return w(n)&&(m=" "+RegExp.prototype.toString.call(n)),v(n)&&(m=" "+Date.prototype.toUTCString.call(n)),O(n)&&(m=" "+a(n)),0!==u.length||x&&0!=n.length?r<0?w(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),s=x?function(t,e,n,r,o){for(var i=[],u=0,c=e.length;u<c;++u)A(e,String(u))?i.push(p(t,e,n,r,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))})),i}(t,n,r,c,u):u.map((function(e){return p(t,n,r,c,e,x)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(s,m,T)):T[0]+m+T[1]}function a(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var u,c,f;if((f=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=f.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):f.set&&(c=t.stylize("[Setter]","special")),A(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(f.value)<0?(c=g(n)?l(t,f.value,null):l(t,f.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),b(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function d(t){return Array.isArray(t)}function y(t){return"boolean"==typeof t}function g(t){return null===t}function h(t){return"number"==typeof t}function _(t){return"string"==typeof t}function b(t){return void 0===t}function w(t){return m(t)&&"[object RegExp]"===x(t)}function m(t){return"object"==typeof t&&null!==t}function v(t){return m(t)&&"[object Date]"===x(t)}function O(t){return m(t)&&("[object Error]"===x(t)||t instanceof Error)}function j(t){return"function"==typeof t}function x(t){return Object.prototype.toString.call(t)}function T(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(b(i)&&(i=t.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;u[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else u[n]=function(){};return u[n]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=y,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=h,e.isString=_,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=b,e.isRegExp=w,e.isObject=m,e.isDate=v,e.isError=O,e.isFunction=j,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(11);var E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function S(){var t=new Date,e=[T(t.getHours()),T(t.getMinutes()),T(t.getSeconds())].join(":");return[t.getDate(),E[t.getMonth()],e].join(" ")}function A(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",S(),e.format.apply(e,arguments))},e.inherits=n(12),e._extend=function(t,e){if(!e||!m(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var z="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function D(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(z&&t[z]){var e;if("function"!=typeof(e=t[z]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,z,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(t){n(t)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),z&&Object.defineProperty(e,z,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=z,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};e.apply(this,n).then((function(e){t.nextTick(u,null,e)}),(function(e){t.nextTick(D,e,u)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n(10))},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var f,s=[],l=!1,a=-1;function p(){l&&f&&(l=!1,f.length?s=f.concat(s):a=-1,s.length&&d())}function d(){if(!l){var t=c(p);l=!0;for(var e=s.length;e;){for(f=s,s=[];++a<e;)f&&f[a].run();a=-1,e=s.length}f=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function y(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new y(t,e)),1!==s.length||l||c(d)},y.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){"use strict";var r=n.w[t.i];t.exports=r;n(8);r.f()}]]);