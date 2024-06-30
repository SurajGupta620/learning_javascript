"use strict";

//Quest- Create a traffic light system that show what to do based on color

let color = "Green";
if (color === "Red") {
    console.log("Stop!");
} else if (color === "Yello") {
    console.log("Slow down");
} else if (color === "Green") {
    console.log("Go");
} else {
    console.log("Invalid color");
}


//Ques- Create a system to calculate popcorn prices based on the size customer asked for:
// if size is 'XL', price is Rs.250
// if size is 'L', price is Rs.200
// if size is 'M', price is Rs.100
// if size is 'S', price is Rs.50

let popcornSize = "M";
if (popcornSize === "XL") {
    console.log("Price is Rs.250");
} else if (popcornSize === "L") {
    console.log("Price is Rs.200");
} else if (popcornSize === "M") {
    console.log("Price is Rs.100");
} else if (popcornSize === "S") {
    console.log("Price is Rs.50");
} else {
    console.log("Invalid Size");
}