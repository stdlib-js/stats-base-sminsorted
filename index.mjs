// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@esm/index.mjs";var t=r,a=s;var n=r,i=s;var d=function(e,r,s){var n,i;return e<=0?NaN:1===e||0===s?r[0]:(s<0?(n=r[(1-e)*s],i=r[0]):(n=r[0],i=r[(e-1)*s]),t(n)||t(i)?NaN:n===i?a(n)||a(i)?-0:n:n<i?n:i)};e(d,"ndarray",(function(e,r,s,t){var a,d;return e<=0?NaN:1===e||0===s?r[0]:(a=r[t],d=r[t+(e-1)*s],n(a)||n(d)?NaN:a===d?i(a)||i(d)?-0:a:a<d?a:d)}));var m=d;export{m as default};
//# sourceMappingURL=index.mjs.map
