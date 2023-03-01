"use strict";

// task 1

let usersName = ["Mike", "Bob", "Nikola"];

let users = {};

[users.mike, users.bob, users.nikola] = usersName;

console.log(users);

// task 2

let salaries = {
  Mike: 1500,
  Bob: 1800,
  Nikola: 1700,
};

function maxSalaries(salaries) {
  const arr = Object.entries(salaries);
  let [name, salary] = ['', 0];

  arr.forEach((elem) => {
      if (elem[1] > salary) {
          [name, salary] = elem;
      }
  })

  return name;
}

console.log(maxSalaries(salaries));

let arr1 = Object.entries(salaries);

//task 3

const usersThirdTask = { mike: "Mike", bob: "Bob", nikola: "Nikola" };

let { mike: userMike, bob: userBob, nikola: userNikola } = usersThirdTask;

console.log(userMike);
console.log(userBob);
console.log(userNikola);