"use strict"

function fakeKeys(obj){
    let arr = [];
    for(let key in obj){
        arr.push(key)
    }
    return arr
}
console.log(fakeKeys({a:1, b:2}));