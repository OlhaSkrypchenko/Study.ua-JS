"use strict";

// task 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isValidData(arr) {
  if (Array.isArray(arr) && arr.length !== 0) {
    return arr.every((el) => typeof el === "number");
  }

  return false;
}

function addNumbers(arr, n = 0) {
  const isValidArr = isValidData(arr);
  if (isValidArr) {
    if (n === arr.length - 1) {
      return arr[n];
    } else {
      return arr[n] + addNumbers(arr, n + 1);
    }
  }
  return "did not provide required data";
}

function addNumbersTernary(arr, n = 0) {
  const isValidArr = isValidData(arr);
  if (isValidArr) {
    return n === arr.length - 1 ? arr[n] : arr[n] + addNumbers(arr, n + 1);
  }

  return "did not provide required data";
}

console.log(addNumbers(arr));
console.log(addNumbersTernary([arr]));

// task 2

function deepCount(arr) {
  if (Array.isArray(arr)) {
    let elementsQuantity = arr.length;

    arr.forEach((currentValue) => {
      if (Array.isArray(currentValue)) {
        elementsQuantity += deepCount(currentValue);
      }
    });

    return elementsQuantity;
  }

  return "did not provide required data";
}

console.log(deepCount([])); // 0
console.log(deepCount([1, 2, 3])); //3
console.log(deepCount(["x", "y", ["z"]])); // 4
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
console.log(deepCount([[[[]]]])); // 3
console.log(deepCount("sd"));

// task 3

let employees = {
  development: {
    backend: [
      { name: "Mike", salary: 2000 },
      { name: "Nikola", salary: 2500 },
    ],
    frontend: [
      { name: "Artem", salary: 3000 },
      { name: "Alex", salary: 2700 },
    ],
  },
  sales: {
    marketing: {
      internet_marketers: [
        { name: "Nina", salary: 1000 },
        { name: "Olena", salary: 1300 },
      ],
      promotion: [
        { name: "Oleg", salary: 1400 },
        { name: "Masha", salary: 1700 },
      ],
    },

    sellers: [
      { name: "Max", salary: 900 },
      { name: "Donald", salary: 700 },
      { name: "Joe", salary: 1100 },
    ],
  },

  designer: [{ name: "Kate", salary: 1800 }],
};

function makeSumSalary() {
  let sum = 0;

  return function sumSalary(obj) {
    if (typeof obj === "object" && !Array.isArray(obj)) {
      for (let key in obj) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach((employee) => (sum += employee.salary));
        } else {
          sumSalary(obj[key]);
        }
      }

      return sum;
    }

    return "did not provide required data";
  };
}

let sumOfSalary = makeSumSalary();
console.log(sumOfSalary(employees));

// task 4

let arr1 = [2, 15, 7, 3];
let arr2 = [9, 3, 17, 12, 4, 8];
let arr3 = [6, 11, 16, 15, 11];

let maxNumber = Math.max(...arr1, ...arr2, ...arr3);

console.log(maxNumber);
