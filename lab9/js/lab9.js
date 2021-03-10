/*
 * Author: Monica To
 * Created: March 2, 2021
 * License: Public Domain
 */

 //In the function, declare a variable userName and use window.prompy()
 var outputEl = document.getElementById("output");
// Create a new element with document.createElement("p")and assign it to variable new1El
var new1El = document.createElement("p");

// Change the html attribute of new1El to say something new.

new1El.innerHTML = ("something new.");

// Create another new element and asssign it to a varaible new2El

var new2El = document.createElement("p")

// Change thr html attribute of new2El to say something else.
new2El.innerHTML = ("Something else. ");

//Append both new elements one at a time using appendChild()
 outputEl.appendChild(new1El);
 outputEl.appendChild(new2El);

 //Change the css attributes of at least two elements of your page
 new1el.style.fontsize = "18pt"
 new2El.style.fontsize = "25pt";
