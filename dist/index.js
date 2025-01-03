"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(b,o){
var v=require('@stdlib/math-base-assert-is-nanf/dist'),f=require('@stdlib/math-base-assert-is-negative-zerof/dist');function y(e,r,a,s){var i,t;return e<=0?NaN:e===1||a===0?r[0]:(i=r[s],t=r[s+(e-1)*a],v(i)||v(t)?NaN:i===t?f(i)||f(t)?-0:i:i<t?i:t)}o.exports=y
});var c=n(function(h,q){
var x=require('@stdlib/strided-base-stride2offset/dist'),N=u();function g(e,r,a){return N(e,r,a,x(e,a))}q.exports=g
});var p=n(function(j,m){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=c(),O=u();l(d,"ndarray",O);m.exports=d
});var R=p();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
