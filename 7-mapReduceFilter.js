"use strict";
//Map
//It returns a transformed array value in  new array by applying the callback function on each element of an array.
console.log("-----------------map---------------------------")
const array = [1, 2, 3, 4, 5, 6];
const transformedArray = array.map((element) => element * 2)
console.log(transformedArray);


console.log("-----------------reduce---------------------------")
//Reduce
//It will executes a reducer function for array element. This method returns a single value.
const array1 = [1, 2, 3, 4, 5, 6];
const returnSingleValue = array1.reduce((periviousValue, currentValue) => periviousValue + currentValue);
console.log(returnSingleValue);


console.log("-----------------filter---------------------------")
//Filter
//which array element will true for given condition that array element value will be stored. which array element will false for given condition that array element value will not stored. 
const ages = [32, 33, 16, 40];
const adult = ages.filter((a) => (a > 18));
console.log(adult);