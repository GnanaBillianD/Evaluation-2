"use strict";
//Map
//It returns a transformed array value in  new array by applying the callback function on each element of an array.
const a = [1,2,3,4,5,6];
const b = a.map((c)=> c * 2)
console.log(b);


//Reduce
//It will executes a reducer function for array element. This method returns a single value.
const d = [1,2,3,4,5,6];
const e = d.reduce((periviousValue, currentValue) => periviousValue + currentValue);
console.log(e);


//Filter
//which array element will true for given condition that array element value will be stored. which array element will false for given condition that array element value will not stored. 
const ages = [32, 33, 16, 40];
const result = ages.filter((a)=> (a>18)) ;
console.log(result);