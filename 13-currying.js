"use strict";
function Currying(a) {
    return function two(b,c) {
        return function three(d,e,f) {
            console.log(a * b * c * d * e *f);
        }
    }
}

Currying(1)(2,2)(3,3,3);//multiple arguments into several functions of a single argument in sequence. 