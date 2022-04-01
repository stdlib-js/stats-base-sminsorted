// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).sminsorted=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var c=e,f=function(t,r,e){var c,f,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(u.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),y="get"in e,p="set"in e,f&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(t,r,e.get),p&&i&&i.call(t,r,e.set),t},y=r()?c:f;var p=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})};var v=function(t){return t!=t};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var d=function(){return b&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,s=_;var m=function(t){return s.call(t)},w=Object.prototype.hasOwnProperty;var A=function(t,r){return null!=t&&w.call(t,r)},g="function"==typeof Symbol?Symbol.toStringTag:"",j=A,h=g,S=_;var N=function(t){var r,e,n;if(null==t)return S.call(t);e=t[h],r=j(t,h);try{t[h]=void 0}catch(r){return S.call(t)}return n=S.call(t),r?t[h]=e:delete t[h],n},F=m,O=N,T=d()?O:F,U=T,E="function"==typeof Float32Array;var P=function(t){return E&&t instanceof Float32Array||"[object Float32Array]"===U(t)},I=Number.POSITIVE_INFINITY,x="function"==typeof Float32Array?Float32Array:null,V=P,k=I,G=x;var C="function"==typeof Float32Array?Float32Array:void 0,Y=function(){throw new Error("not implemented")},q=function(){var t,r;if("function"!=typeof G)return!1;try{r=new G([1,3.14,-3.14,5e40]),t=V(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===k}catch(r){t=!1}return t}()?C:Y,z=T,B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null,H=function(t){return B&&t instanceof Uint32Array||"[object Uint32Array]"===z(t)},J=D;var K="function"==typeof Uint32Array?Uint32Array:void 0,L=function(){throw new Error("not implemented")},M=function(){var t,r;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,4294967296,4294967297]),t=H(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?K:L,Q=new q(1);new M(Q.buffer)[0]=4286578688;var R=Q[0];var W=function(t){return 0===t&&1/t===R},X=v,Z=W;var $=v,tt=W;var rt=function(t,r,e){var n,o;return t<=0?NaN:1===t||0===e?r[0]:(e<0?(n=r[(1-t)*e],o=r[0]):(n=r[0],o=r[(t-1)*e]),X(n)||X(o)?NaN:n===o?Z(n)||Z(o)?-0:n:n<o?n:o)};return p(rt,"ndarray",(function(t,r,e,n){var o,a;return t<=0?NaN:1===t||0===e?r[0]:(o=r[n],a=r[n+(t-1)*e],$(o)||$(a)?NaN:o===a?tt(o)||tt(a)?-0:o:o<a?o:a)})),rt}));
//# sourceMappingURL=bundle.js.map
