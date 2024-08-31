"use strict";


//Spread operator 
let arr = ["Suraj", "Mohan", "Sohan"];
let newArr = ["Adarsh", "Fateh", "Nitesh"];

let mergedArr = [...arr, ...newArr];
console.log(mergedArr);



//For in loop
let student = {
    name: "Suraj",
    rollNum: 1971821604,
    branch: "CSE"
}


let text = "";

for(let key in student) {
    text += `${key} : ${student[key]}` 
    
}

console.log(text);


//For each loop
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function(Suraj) {
    console.log(Suraj);
})

coding.forEach((Suraj) => {
    console.log(Suraj);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName);
    
})



//Filter function
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = num.filter(number => number % 2 === 0);
console.log(evenNum);


const products = [
    { id: 1, name: 'Product 1', price: 40 },
    { id: 2, name: 'Product 2', price: 60 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 65 },
    { id: 5, name: 'Product 5', price: 80 }
];

const expensiveProducts = products.filter(filteredProduct => filteredProduct.price > 50);
console.log(expensiveProducts);



//MapFunction
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
const newNums = myNumers
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num >= 40);


console.log(newNums);
