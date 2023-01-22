"use strict";

// task 1

let car = {
  model: "Chevrolet",
  year: 2018,
  color: "black",
};

car.color = "blue";
car.type = "gas";
car.signal = () => console.log("fa! fa!");

console.log(car);

// task 2

let salaries = {
  frontend: 12000,
  backend: 10000,
  designer: 8000,
  dayPay() {
    console.log("We must pay salary on Tuesday!");
  },
  total() {
    let sum = 0;

    for (let prop in this) {
      if (typeof this[prop] === "number") {
        sum += this[prop];
      }
    }

    console.log(sum);
  },
};

salaries.total();

// task 3-4

function PersonalComputer(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this.convertToPrimitive = this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case "string":
        return this.brand;
      case "number":
        return this.cost;
      case "default":
        return `${this.brand} ${this.system} ${this.cost} // `;
    }
  };
}

let dell = new PersonalComputer("Dell", "windows", 800);
let apple = new PersonalComputer("Apple", "MAC OS", 1700);

console.log(dell);
console.log(apple);

console.log(String(dell));
console.log(+apple);
console.log(dell + apple);

// Katherine extra tasks
// task 1

function isEvenOrOdd(a, b) {
  const isValidType = typeof a === "number" && typeof b === "number";
  const areValidNumbers = !isNaN(a) && !isNaN(a);

  if (isValidType && areValidNumbers) {
    const isEvenA = a % 2 === 0;
    const isEvenB = b % 2 === 0;

    switch (true) {
      case isEvenA && isEvenB:
        return a * b;
      case !isEvenA && !isEvenB:
        return a + b;
      case isEvenA && !isEvenB:
        return b;
      default:
        return a;
    }
  }

  return "User did not provide required data";
}

console.log(isEvenOrOdd(4, 6));
console.log(isEvenOrOdd(3, 7));
console.log(isEvenOrOdd(4, 7));
console.log(isEvenOrOdd(5, 8));
console.log(isEvenOrOdd(6, null));

// task 2

let nameOfResponsiblePerson = prompt(
  "Enter name of responsible person",
  "name"
);
let statusOfTask = prompt("Enter status of task", "status");
let descriptionOfTask = prompt("Enter description of task", "description");

const tasks = {
  Anna: {
    status: "new",
    text: "Create checkout page",
  },
  Ihor: {
    status: "done",
    text: "Add styles to header",
  },
};

function addTask(name, statusOfTask, descriptionOfTask) {
  const targetTask = tasks[name];
  if (targetTask?.status === "new") {
    console.log(name, "this person is busy");
  } else {
    tasks[name] = {
      status: statusOfTask,
      description: descriptionOfTask,
    };
  }
}

addTask(nameOfResponsiblePerson, statusOfTask, descriptionOfTask);

console.log(tasks);
