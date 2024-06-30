//Operator are used for perform operations

let num1 = 10;
let num2 = 5;

//addition operation
console.log("add : ", num1 + num2);

//subtraction operation
console.log("sub : ", num1 - num2);

//multiplication operation
console.log("mul : ", num1 * num2);

//division operation 
console.log("div : ", num1 / num2);

//modulo operator - for finding remainder
console.log("remainder : ", num1 % num2);

//exponentiation (power operator)
console.log("num1 to the power num2 : ", num1 ** num2);


//assignment operator (use for assign values to variables)
let age = 18;
age = age + 2; //age += 2;
age = age - 3; //age -= 3;
console.log("age : ", age);



//unary operator (Single operand)
let newAge = ++age; //pre-increment(change, then use)
newAge = age++; //post-increment (use, then change)
newAge = --age; //pre-decrement
newAge = age--; //post-decrement



//comparison operator (used for compare values)
//(>, >=, <, <=, ==, !=, ===)
let num3 = 18;
console.log(num3 < 18);  //false
console.log(num3 <= 18); //true
console.log(num3 > 18);  //false
console.log(num3 >= 18); //true
console.log(num3 == 18); //true
console.log(num3 != 18); //false

//(== only compare value, not type) (=== compare type & value)
let str = "18";
console.log(num3 == str); //true
console.log(num3 === str); //false


//Logical operator(&&,||,!)
let course = "Enrooled";
let courseState = "Completed";
if (course == "Enrooled" && courseState == "Completed") {
    console.log("You have completed our course");
} else{
    console.log("Enrool and complete our course");
}