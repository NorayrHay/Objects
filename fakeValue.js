"use strict";

function fakeValues(obj){
    let arr = [];
    for(let key in obj){
        arr.push(obj[key]);
    }
    return arr;
}
console.log(fakeValues({a:2, b:3, c:4}));