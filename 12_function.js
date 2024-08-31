"use strict";


//Creating a function
function hello() {
    console.log("Hello World!");
}

//calling of function
hello();
hello();


//Functions with arguments
function add(num1 , num2) {
    let sum = num1 + num2;
    console.log(sum);
}

// add(12, 3);


function average(num1 , num2, num3) {
    console.log(`Average is : ${(num1 + num2 + num3) / 3}`);
}

// average(3, 6, 9);

function printTable(num) {
    for(let i=1; i<=10; i++){
        console.log(i*num);
    }
}

// printTable(4);


//A function that return sum of n number from 1
function nNumSum(num) {
    if (num == 1){
        return 1;
    }
    let sum = 0;
    for(let i=1; i<=num; i++){
        sum = sum + i;
    }
    return sum;
}

// console.log(nNumSum(5));


//A function that returns the concatenation of all string in an array
let str = ["Hi", "Suraj", "Gupta"];
function concatArray(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(concatArray(str));

