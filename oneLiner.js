"use strict";

function liner(obj) {
  let { name, population, continent } = obj;
  return  (name + " has a population of " + population + " and is situated in " + continent);     
}
console.log(liner({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
  })
);
