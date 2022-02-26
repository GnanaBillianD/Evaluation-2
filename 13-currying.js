"use strict";
function Currying(num1) {
    return function two(num2, num3) {
        return function three(num4, num5, num6) {
            console.log(num1 * num2 * num3 * num4 * num5 * num6);
        }
    }
}

Currying(1)(2, 2)(3, 3, 3);//multiple arguments into several functions of a single argument in sequence. 