/*
 * Author: Monica To
 * Created: March 23, 2021
 * License: Public Domain
 */

// Create a constructor for vehicles called Vehicle, including make, model, year, color, and extras.
function Vehicle (make, model, year, color, extras) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  // Add a method info() to your constructor that neatly returns a string with all that information.
  this.info = function() {
    return this.year + " " + this.color +  " " + this.make +  " " + this.model + " and " + this.extras;
  }
}

// Instantiate objects with your constructor for every vehicle you've ever owned.
var firstCar = new Vehicle("Toyota", "Camry", 2009, "white", "ate a lot of gas");
var secondCar = new Vehicle("Lexus", "GS350", 2005, "navy", "runs smooth");

// For each instantiated object, call your method info() and output the results to your output div.
document.getElementById("output").innerHTML += "<p>" + "My first car was " + firstCar.info() + "." + "</p>";
document.getElementById("output").innerHTML += "<p>" + "My second car was " + secondCar.info() + "." + "</p>";
