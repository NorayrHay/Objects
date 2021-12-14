"use strict";

function multiplication(...args) {
  let op = "";
  let res = 1;

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string") {
      op += args[i];
      args.splice(0, 1);
    }

    if (op === "*") res *= args[i];
  }
  return res;
}
console.log(multiplication("*", 1, 2, 3, 4));
