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


//5. indexOf - return index of element of a array (if it is not found it returns -1)
let colors = ["blue", "black", "yello", "red"];
console.log(colors.indexOf("red")); //3
console.log(colors.indexOf("green")); //-1


//6. includes - search for a value (returns true or false)
let friends = ["ramesh", "dinesh", "suresh"];
console.log(friends.includes("ramesh")); //true
console.log(friends.includes("suraj")); //false


//7. concat - merge 2 arrays (it does not change the original array)
let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "violet"];
console.log(primary.concat(secondary));
console.log(secondary.concat(primary));


//8. reverse - reverse an array (it changes the original array)
let a = [78, 74, 29, 48];
console.log("reverse of a : ", a.reverse());


//9. slice - copies a portion of an array(does not change original array)
let b = ["suraj", 21 , "siit patna"];
console.log(b.slice()); //return copy of an array
console.log(b.slice(2)); //it return elements starting from index 2 to end index
console.log(b.slice(1,2)); // (start , ending index) ending index is not included
console.log(b.slice(-2)); //it returns last elements of an array


//10. splice - copies a portion of an array (changes the original array)
let colors1 = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors1.splice(4));
console.log(colors1.splice(0, 1, "black", "grey"));
console.log(colors1);


//11. sort - sorts an array 
let c = ["f", "r", "t", "g"];
console.log(c.sort());
let d = [5 , 76, 34, 87];
console.log(d.sort());


//nested array
let nestedArr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(nestedArr[0][2]); 