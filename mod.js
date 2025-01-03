// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var i=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,a,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(a=r.arg,c=parseInt(a,10),!isFinite(c)){if(!t(a))throw new Error("invalid integer. Value: "+a);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(a=(-c).toString(e),r.precision&&(a=n(a,r.precision,r.padRight)),a="-"+a):(a=c.toString(e),c||r.precision?r.precision&&(a=n(a,r.precision,r.padRight)):a="",r.sign&&(a=r.sign+a)),16===e&&(r.alternate&&(a="0x"+a),a=r.specifier===o.call(r.specifier)?o.call(a):i.call(a)),8===e&&r.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,a,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+a);n=r.arg}switch(r.specifier){case"e":case"E":a=n.toExponential(r.precision);break;case"f":case"F":a=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),a=n.toExponential(e)):a=n.toPrecision(r.precision),r.alternate||(a=u.call(a,w,"$1e"),a=u.call(a,v,"e"),a=u.call(a,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return a=u.call(a,f,"e+0$1"),a=u.call(a,g,"e-0$1"),r.alternate&&(a=u.call(a,d,"$1."),a=u.call(a,y,"$1.e")),n>=0&&r.sign&&(a=r.sign+a),a=r.specifier===p.call(r.specifier)?p.call(a):s.call(a)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function A(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,a,i,o,l,s,p,u,f,g,d,y;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",s=1,p=0;p<r.length;p++)if(a=r[p],"string"==typeof a)l+=a;else{if(e=void 0!==a.precision,!(a=E(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+a+"`.");for(a.mapping&&(s=a.mapping),t=a.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=t.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===a.width){if(a.width=parseInt(arguments[s],10),s+=1,A(a.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(e&&"*"===a.precision){if(a.precision=parseInt(arguments[s],10),s+=1,A(a.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,e=!1)}switch(a.arg=arguments[s],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(a.padZeros=!1),a.arg=c(a);break;case"s":a.maxWidth=e?a.precision:-1,a.arg=String(a.arg);break;case"c":if(!A(a.arg)){if((o=parseInt(a.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=A(o)?String(a.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(a.precision=6),a.arg=b(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=n(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=(f=a.arg,g=a.width,d=a.padRight,y=void 0,(y=g-f.length)<0?f:f=d?f+m(y):m(y)+f)),l+=a.arg||"",s+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,a,n;for(t=[],n=0,a=x.exec(r);a;)(e=r.slice(n,x.lastIndex-a[0].length)).length&&t.push(e),t.push(F(a)),n=x.lastIndex,a=x.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function I(r){var e,t;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return k.apply(null,e)}var T,V=Object.prototype,$=V.toString,O=V.__defineGetter__,U=V.__defineSetter__,C=V.__lookupGetter__,N=V.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var a,n,i,o;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(C.call(r,e)||N.call(r,e)?(a=r.__proto__,r.__proto__=V,delete r[e],r[e]=t.value,r.__proto__=a):r[e]=t.value),i="get"in t,o="set"in t,n&&(i||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&O&&O.call(r,e,t.get),o&&U&&U.call(r,e,t.set),r};var P=T;function R(r){return r!=r}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var G=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;var L,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";L=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,a,n,i;if(null==r)return G.call(r);t=r[z],i=z,e=null!=(n=r)&&W.call(n,i);try{r[z]=void 0}catch(e){return G.call(r)}return a=G.call(r),e?r[z]=t:delete r[z],a}:function(r){return G.call(r)};var M=L,Y="function"==typeof Float32Array;var q=Number.POSITIVE_INFINITY,B="function"==typeof Float32Array?Float32Array:null;var D,H="function"==typeof Float32Array?Float32Array:void 0;D=function(){var r,e,t;if("function"!=typeof B)return!1;try{e=new B([1,3.14,-3.14,5e40]),t=e,r=(Y&&t instanceof Float32Array||"[object Float32Array]"===M(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===q}catch(e){r=!1}return r}()?H:function(){throw new Error("not implemented")};var J=D,K="function"==typeof Uint32Array;var Q="function"==typeof Uint32Array?Uint32Array:null;var rr,er="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(K&&t instanceof Uint32Array||"[object Uint32Array]"===M(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var tr=rr,ar=new J(1);new tr(ar.buffer)[0]=4286578688;var nr=ar[0];function ir(r){return 0===r&&1/r===nr}function or(r,e,t,a){var n,i;return r<=0?NaN:1===r||0===t?e[0]:(n=e[a],i=e[a+(r-1)*t],R(n)||R(i)?NaN:n===i?ir(n)||ir(i)?-0:n:n<i?n:i)}function cr(r,e,t){return or(r,e,t,function(r,e){return e>0?0:(1-r)*e}(r,t))}P(cr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:or});export{cr as default,or as ndarray};
//# sourceMappingURL=mod.js.map
