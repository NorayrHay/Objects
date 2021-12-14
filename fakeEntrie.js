"use strict"

function fakeEntries(obj){
    let arr = [];
    for(let key in obj){
        arr.push([key,obj[key]])
    }
    return arr;
}
console.log(fakeEntries({a:1, b:2, c:3}));