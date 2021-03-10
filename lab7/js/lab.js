/*
 * Author: Monica To
 * Created: February 16, 2021
 * License: Public Domain
 */

//Create a new function wisely in your file, call it what you like.//
function sortUserName() {
 //In the function, declare a variable userName and use window.prompy()//
 var userName = window.prompt("Please fill in your name so I can sort it");
 console.log("userName =" userName);

 var nameArray = userNme.split ('');
 console.log("nameArray=", nameArray);

 var nameArraySort = nameArray.sort();
 console.log ("nameArraySort =") nameArraySort);

 var nameSorted = nameArray.join ('');
 console.log("nameSorted=", nameSorted);

 return nameSorted;


  }
document.writeIn("I've sorted your name:", sortUserName(), "</br")
