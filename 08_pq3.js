"use strict";

//Ques- Create a number variable num with some value.
//Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
let num = 45;
if (num % 10 == 0) {
    console.log("good");
}
else {
    console.log("bad");
}


//Ques- Write a switch statement to print the months in a quater.
//Quater1- January,february,march
//Quater2- april,may,june
//Quater3- july,august,september
//Quater4- october,november,december
let currentMonth = "november";
switch (currentMonth) {
    case "january":
        console.log("Month in Quater 1");
        break;

    case "february":
        console.log("Month in Quater 1");
        break;
    
    case "march":
        console.log("Month in Quater 1");
        break;

    case "april":
        console.log("Month in Quater 2");
        break;

    case "may":
        console.log("Month in Quater 2");
        break;
      
    case "june":
        console.log("Month in Quater 2");
        break; 

    case "july":
        console.log("Month in Quater 3");
        break;

    case "august":
        console.log("Month in Quater 3");
        break;

    case "september":
        console.log("Month in Quater 3");
        break;

    case "october":
        console.log("Month in Quater 4");
        break;

    case "november":
        console.log("Month in Quater 4");
        break;

    case "december":
        console.log("Month in Quater 4");
        break;
        
    default:
        console.log("Not a month");
        break;
}