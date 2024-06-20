"use strict";

//used to execute specific blocks of code based on conditions

//if (check single condition)
let age = 23;
if (age => 18) {
    console.log("You can vote");
}

let firstName = "Suraj";
if (firstName == "Suraj") {
    console.log(`Welcome ${firstName}`);
}


//if else (execute code of else when given condition is false)
let num1 = 11;
if (num1 % 2 ==0){
    console.log("Given number is even. ");
} else{
    console.log("Given number is odd. ")
}


//if, else if ... , else (used for two or multiple condition)
let str = "Suraj";
if (str == "sk") {
    console.log("Name is sk");
} else if (str == "Suraj") {
    console.log("Name is Suraj");
} else {
    console.log("Name not found");
}


//Switch Statement
let weather = "sunny";
switch (weather) {
    case "sunny":
        console.log("It's a warm day.");
        break;
    case "rainy":
        console.log("Don't forget your umbrella!");
        break;
    default:
        console.log("Check the weather forecast!");
        break;
}


//Ternary operator
let num2 = 20;
let result = (num2 >= 21) ? "You may enter." : "You may not enter.";
console.log(result);