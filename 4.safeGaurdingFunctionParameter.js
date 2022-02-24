"use strict";
let a= 45;

let b = function (){
    console.log("hi")
}

function safe(fun){
    if(typeof fun == "function"){
        fun();
    }else{
        console.log("please give the fuction only")
    }
}

safe(a);