"use strict";


//creating array
let marks = [99, 85, 74, 34, 98];
let names = ["Suraj", "Fateh", "Adarsh"];
let info = ["Suraj", 21, 6.1];  //mixed array
let newArr = []; //empty array


//some array methods
//1. push - add a new element in array at the end
let cars = ["audi", "bmw", "xuv", "maruti"];
cars.push("toyota");
cars.push("ferrari");
console.log(cars);

//2. pop - delete last element of array
cars.pop();
console.log(cars);

//3. unshift - add new element at start
cars.unshift("ferrari");
console.log(cars);

//4. shift - delete from start and return it
cars.shift();
console.log(cars);

let followers = ["a", "b", "c"];
let blocked = followers.shift();
console.log(followers);
console.log(blocked);