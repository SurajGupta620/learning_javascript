"use strict"; // treat all JS code as newer version

// alert("Hello World!") //we are using node.js, not browser

let name = "Suraj"
let age = 18
let isLoggedIn = true
let state;


console.table([name, age, isLoggedIn, state])

console.log(typeof undefined) //undefined
console.log(typeof null)  //object


//JS is Weak/Dynamic typed language

let sk = 45; //sk is now a number 
sk = "Party"; //sk is now a String
sk = true; //sk is now a boolean