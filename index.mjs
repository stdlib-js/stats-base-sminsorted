// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@v0.1.1-esm/index.mjs";function r(e,r,n){var a,i;return e<=0?NaN:1===e||0===n?r[0]:(n<0?(a=r[(1-e)*n],i=r[0]):(a=r[0],i=r[(e-1)*n]),s(a)||s(i)?NaN:a===i?t(a)||t(i)?-0:a:a<i?a:i)}function n(e,r,n,a){var i,d;return e<=0?NaN:1===e||0===n?r[0]:(i=r[a],d=r[a+(e-1)*n],s(i)||s(d)?NaN:i===d?t(i)||t(d)?-0:i:i<d?i:d)}e(r,"ndarray",n);export{r as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
