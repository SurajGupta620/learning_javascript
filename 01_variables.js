const accountId = 5234;
let accountEmail = "surajgupta6206@gmail.com";
var accountPassword = "12345";
accontCity = "Jaipur";
let accountState;

//accountId = 2 //not allowed because const varialbles can't be changeble


accountEmail = "sk3022460@gmail.com";
accountPassword = "21342";
accontCity = "Patna";
console.log(accountId);

/*
  Prefer not to use var 
  because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accontCity, accountState])