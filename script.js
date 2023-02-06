'use strict';

//task 1

// let car = {
//   type: 'electric',
//   wheels: 4,
// }

// let sportCar = {
//   doors: 2,
// }

// Object.setPrototypeOf(sportCar, car);


// let passengerCar = {
//   doors: 4,
// }

// Object.setPrototypeOf(passengerCar, car);

// let toyCar = {
//   type: 'toy',
// }

// Object.setPrototypeOf(toyCar, sportCar);

// task 2

let employees = {
  wallet: {},
  pay(month, sum) {
    this.wallet[month] = sum;
  }
}

let frontendDeveloper = {
  wallet: {},
  name: 'Mike',
}

Object.setPrototypeOf(frontendDeveloper, employees);

let backendDeveloper = {
  wallet: {},
  name: 'Bob',
}

Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay('june', 1500);

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);