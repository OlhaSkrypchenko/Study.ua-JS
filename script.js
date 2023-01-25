"use strict";

// task 1

let users = ["Mike", "Nikola", "Tom"];

console.log(users[2]);

users[1] = "Alex";
console.log(users);

users.splice(-2);
console.log(users);

console.log(users.length);

// task 2

let a = [5, 3, -4, 25, 32, -16, 6];
let b = [21, -30, 9, 5, 12, -19, 5, 25];

function onlyNumbersInArr(array) {
  const isArray = Array.isArray(array);

  if (isArray) {
    return array.every((el) => typeof el === "number" && !isNaN(el));
  }
  return false;
}

function compareArrSum(a, b) {
  const isRequiredData = onlyNumbersInArr(a) && onlyNumbersInArr(b);

  if (isRequiredData) {
    const firstArrSum = a.reduce((sum, currentValue) => sum + currentValue, 0);
    const secondArrSum = b.reduce((sum, currentValue) => sum + currentValue, 0);

    switch (true) {
      case firstArrSum > secondArrSum:
        return "a > b";
      case firstArrSum < secondArrSum:
        return "a < b";
      case firstArrSum === secondArrSum:
        return "a == b";
    }
  }

  return "did not provide required data";
}

console.log(compareArrSum(a, b));

// task 3

let phrase = "I am learning JavaScript right now";

let phraseArr = phrase.split(" ");
console.log(phraseArr);

// task 4

let c = [5, 3, 8, 5, 3, 2, 1, 2];
let d = [];

c.forEach((el) => {
  if (!d.includes(el)) {
    d.push(el);
  }
});

console.log(d);

// task 5

let usersArr = [
  { id: 1, age: 17 },
  { id: 2, age: 18 },
  { id: 3, age: 19 },
  { id: 4, age: 21 },
  { id: 5, age: 17 },
  { id: 6, age: 20 },
  { id: 7, age: 25 },
];

function isValidData(arr) {
  const isArr = Array.isArray(arr);

  if (isArr && arr.length) {
    return arr.every(
      (el) =>
        typeof el === "object" &&
        el.hasOwnProperty("id") &&
        el.hasOwnProperty("age")
    );
  }
  return false;
}

function selectionAge(a) {
  const isValid = isValidData(a);
  if (isValid) {
    let result = [];

    a.forEach((element) => {
      if (element.age > 18 && element.age < 21) {
        result.push(element.id);
      }
    });

    return result;
  }

  return "did not provide required data";
}

console.log(selectionAge(usersArr));
