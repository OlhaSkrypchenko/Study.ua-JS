"use strict";

//task 1

let car = {
  type: "electric",
  wheels: 4,
};

let sportCar = {
  doors: 2,
};

Object.setPrototypeOf(sportCar, car);

let passengerCar = {
  doors: 4,
};

Object.setPrototypeOf(passengerCar, car);

let toyCar = {
  type: "toy",
};

Object.setPrototypeOf(toyCar, sportCar);

// task 2

let employees = {
  wallet: {},
  pay(month, sum) {
    this.wallet[month] = sum;
  },
};

let frontendDeveloper = {
  wallet: {},
  name: "Mike",
};

Object.setPrototypeOf(frontendDeveloper, employees);

let backendDeveloper = {
  wallet: {},
  name: "Bob",
};

Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay("june", 1500);

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);

// task 3

function User(name, age) {
  this.name = name;
  this.age = age;
}

let user_1 = new User("Mike", 18);

let user_2 = new user_1.constructor("Bob", 25);

// task 4

function UserType(name) {
  for (let i = 0; i < name.length; ++i) {
    this[i] = name[i];
    if (i + 1 == name.length) {
      Object.defineProperty(this, "length", {
        enumerable: false,
        writable: false,
        configurable: true,
        value: i + 1,
      });
    }
  }

  this.join = Array.prototype.join;
}

let admins = new UserType(["Mike", "Bob", "Nikola"]);
console.log(admins.join("; "));
