//safegaurding function parameter
"use strict";
let number1 = 45;

let anonymousfFunc = function () {
    console.log("hi")
}

function namedFunc(func) {
    if (typeof func == "function") {
        func();
    } else {
        console.log("please give the fuction only")
    }
}

namedFunc(anonymousfFunc);