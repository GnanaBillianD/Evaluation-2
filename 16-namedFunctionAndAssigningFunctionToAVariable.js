//Named function
function named(){
    console.log("hi");
}
named();


//assigning function to a variable
let myVariable = function(){
    console.log("hi! hello");
}
myVariable();


//we can use the named function as a higher order function and we can use assigning function to a variable pass as parameters into Higher-Order Functions.//Example:
let radius = [3,1,2,4];


let area = function(radius){
    return Math.PI*radius*radius;
};

let circumference = function (radius){
    return 2*Math.PI*radius;
};

let diameter = function (radius){
    return 2*radius;
};

function higherOrder (radius, logic){
    let emptyArr = [];
    for (let i=0; i< radius.length; i++){
        emptyArr.push(logic(radius[i]));
    }return emptyArr;
}
console.log(higherOrder(radius, area));