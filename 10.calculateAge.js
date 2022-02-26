"use strict";
console.log("--------------------------calculate the age--------------------------------")
function dateOfBirth(bornYear) {
    if (typeof bornYear === "number") {
        let date = new Date();
        let presentYear = date.getFullYear();
        let calculateAge = presentYear - bornYear;
        return calculateAge;
    }
    else {
        return "please enter the year in number";
    }
}
console.log(dateOfBirth(1994));


