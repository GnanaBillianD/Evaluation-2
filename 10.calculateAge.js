"use strict";
function dateOfBirth(year) {
    if (typeof year === "number") {
        let a = new Date();
        let b = a.getFullYear();
        let age = b - year;
        return age;
    }
    else {
        return "please enter the year in number";
    }
}
console.log(dateOfBirth(1994));


