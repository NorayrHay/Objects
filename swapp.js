"use strict";

let a = 3;
let b = 6;

({ a, b } = { a: b, b: a });
console.log(a);
console.log(b);
