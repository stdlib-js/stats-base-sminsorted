"use strict";var a=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var o=a(function(h,f){
var s=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-assert-is-negative-zerof/dist');function g(n,e,t){var i,r;return n<=0?NaN:n===1||t===0?e[0]:(t<0?(i=e[(1-n)*t],r=e[0]):(i=e[0],r=e[(n-1)*t]),s(i)||s(r)?NaN:i===r?v(i)||v(r)?-0:i:i<r?i:r)}f.exports=g
});var m=a(function(j,N){
var q=require('@stdlib/math-base-assert-is-nanf/dist'),c=require('@stdlib/math-base-assert-is-negative-zerof/dist');function l(n,e,t,i){var r,u;return n<=0?NaN:n===1||t===0?e[0]:(r=e[i],u=e[i+(n-1)*t],q(r)||q(u)?NaN:r===u?c(r)||c(u)?-0:r:r<u?r:u)}N.exports=l
});var d=a(function(k,y){
var Z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=o(),O=m();Z(p,"ndarray",O);y.exports=p
});var R=d();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
