!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a.default(e,t,r[t])}))}return e};var u,a=(u=o("hKHmD"))&&u.__esModule?u:{default:u};var f,c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var l="Expected a function",s=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,p=/^0o[0-7]+$/i,m=parseInt,b="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,y=b||g||Function("return this")(),O=Object.prototype.toString,j=Math.max,h=Math.min,w=function(){return y.Date.now()};function x(e,t,r){var n,o,i,u,a,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(l);function p(t){var r=n,i=o;return n=o=void 0,c=t,u=e.apply(i,r)}function m(e){return c=e,a=setTimeout(g,t),s?p(e):u}function b(e){var r=e-f;return void 0===f||r>=t||r<0||d&&e-c>=i}function g(){var e=w();if(b(e))return y(e);a=setTimeout(g,function(e){var r=t-(e-f);return d?h(r,i-(e-c)):r}(e))}function y(e){return a=void 0,v&&n?p(e):(n=o=void 0,u)}function O(){var e=w(),r=b(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return m(f);if(d)return a=setTimeout(g,t),p(f)}return void 0===a&&(a=setTimeout(g,t)),u}return t=_(t)||0,S(r)&&(s=!!r.leading,i=(d="maxWait"in r)?j(_(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),O.cancel=function(){void 0!==a&&clearTimeout(a),c=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:y(w())},O}function S(t){var r=void 0===t?"undefined":e(c)(t);return!!t&&("object"==r||"function"==r)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(c)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==O.call(t)}(t))return NaN;if(S(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=S(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(s,"");var n=v.test(t);return n||p.test(t)?m(t.slice(2),n?2:8):d.test(t)?NaN:+t}f=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(l);return S(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),x(e,t,{leading:n,maxWait:t,trailing:o})};var T="feedback-form-state",E=JSON.parse(localStorage.getItem(T)),M=e(i)({},E),N=(document.querySelector("input"),document.querySelector(".feedback-form"));document.querySelector("textarea");N.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(T);try{console.log(E)}catch(e){error,console.log(error.name),console.log(error.message)}})),N.addEventListener("input",e(f)((function(e){M[e.target.name]=e.target.value,localStorage.setItem(T,JSON.stringify(M))}),500)),E&&(N.email.value=E.email||"",N.message.value=E.message||"")}();
//# sourceMappingURL=03-feedback.eea70b6c.js.map