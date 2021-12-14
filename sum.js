"use strict";

function sum(...args) {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
sum(1, 2);
sum(1, 2, 3);
