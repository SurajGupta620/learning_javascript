"use strict";

//two methods of creating object
//1. creating object by constructor - singleton(always)
//2. object literal



//creating object

const mySymbol = Symbol("key1");

 const JsUser = {
    name : "Suraj",
    "full name" : "Suraj Gupta",
    age : 18,
    location : "Bihar",
    email : "surajgupta6206@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"],
    [mySymbol] : "myKey1"
 }


 //access the object
 console.log(JsUser.name);
 console.log(JsUser["email"]);
 console.log(JsUser["full name"]);



 //change/ update object values
 JsUser.email = "surajgupta@google.com";
 console.log(JsUser.email);


 // freeze - make object immutable (object can't be modified)
//  Object.freeze(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user ${this["full name"]}`);
}

// console.log(JsUser);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());