"use strict";

// task 1

const user = {};

Object.defineProperties(user, {
  name: { value: "Ivan", writable: false },
  age: { value: 20, writable: false },
  id: { value: 123, configurable: false },
});

// task 2
let dataBase = {
  dbName: "user",
  dbType: "MySQL",
};

Object.freeze(dataBase);

let configurateDB = {
  token: "123",
  password: "567",
  user: "admin",
};

Object.seal(configurateDB);

// task 3

let salaries = {
  frontend: 2000,
  backend: 1500,
  design: 1000,
};

Object.defineProperty(salaries, "sum", {
  get() {
    let sum = 0;
    for (salary in this) {
      sum += this[salary];
    }

    return sum;
  },
  enumerable: false,
});

Object.defineProperty(salaries, "addSalaries", {
  set(arr) {
    if (Array.isArray(arr)) {
      arr.forEach((el) => {
        let [key, salaryAmount] = el.split(": ");
        this[key] = +salaryAmount;
      });
    }
  },

  enumerable: false,
});

salaries.addSalaries = [
  "frontend: 2500",
  "backend: 1750",
  "design: 1300",
  "manager: 800",
];
console.log(salaries);

// task 4

let user1 = {
  name: "Mike",
  surname: "Davis",
  age: 25,
};

Object.defineProperty(user1, "userInfo", {
  get() {
    let result = [];
    for (key in this) {
      result.push(`${key}: ${this[key]}`);
    }

    return result.join(', ');
  },

  enumerable: false,
});

console.log(user1.userInfo);
user1.login = "MK_18";
console.log(user1.userInfo);
