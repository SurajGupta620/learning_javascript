"use strict";


//String are immutable in JS
//1. trim()-Trims whitespaces from both ends of string & return a new one
let pass = "   abc@123  ";
let newPass = pass.trim();
console.log(newPass);



//2.  toUpperCase() & toLowerCase()
let msg = "hello";
let newMsg = msg.toUpperCase(); //change all letter into capital letter
console.log(newMsg);
let newMsg2 = newMsg.toLowerCase();  //change all letter into small letter
console.log(newMsg2);


//String Method with argument, format- stringName.method(arg)

//3. indexOF - returns the first index of occurence of some value in string, or give -1 if not found
let str = "iLoveCoding";
str.indexOf("Love"); //1
str.indexOf("J");  //-1 (not found)
str.indexOf("o");  //2 (only 1 index)


//4. slice - Return a part of the original string as a new string
let str2 = "iLoveCoding";
console.log(str2.slice(5)); //"Coding"
console.log(str2.slice(1,5)); //"Love"
console.log(str2.slice(-2)); //"ce" , str.slice(length-num)


//5. replace - Searches a value in the string & returns a new string with the value replaced
console.log(str2.replace("Love", "Do"));


//6. repeat - Returns a string with the number of copies of a string
let str3 = "Mango";
console.log(str3.repeat(3));