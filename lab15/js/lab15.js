//Lab 15: Object Oriented Design
//Author: Monica To
//Created: April 7, 2021
//License: Public Domain

class Vehicle {
  constructor(make, model, year, color, extras, name) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
  }
  info() {
    return this.color + " " + this.year + " " + this.make + " " +  this.model + " with " +  this.extras + " called " + this.name;
    }
}



  var vehicles = [];

  vehicles.push(new Vehicle("Toyota", "Prius", 2008, "gray", "thule roof racks", "Mon's Car"));
  vehicles.push(new Vehicle("Lexus", "GS350", 2020, "black", "leather seats", "dream car"));

  outputEl = document.getElementById("output");
  for (var i = 0; i<vehicles.length; i++) {
    var newEl = document.createElement("li");
    newEl.innerText = vehicles[i].info();
    outputEl.appendChild(newEl);
  }
