"use strict";

// task 1

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function addNumbers(arr, n = 0) {
//   if (n === arr.length - 1) {
//     return arr[n];
//   } else {
//     return arr[n] + addNumbers(arr, n + 1);
//   }
// }

// function addNumbers(arr, n = 0) {
//   return n === arr.length - 1 ? arr[n] : arr[n] + addNumbers(arr, n + 1);
// }

// console.log(addNumbers(arr));

// task 2

// function deepCount(arr) {
//   let elementsQuantity = arr.length;

//   arr.forEach((currentValue) => {
//     if (Array.isArray(currentValue)) {
//       elementsQuantity += deepCount(currentValue);
//     }
//   });

//   return elementsQuantity;
// }

// console.log(deepCount([])); // 0
// console.log(deepCount([1, 2, 3])); //3
// console.log(deepCount(["x", "y", ["z"]])); // 4
// console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
// console.log(deepCount([[[[]]]])); // 3

// task 3

// let employees = {
//   development: {
//     backend: [
//       { name: "Mike", salary: 2000 },
//       { name: "Nikola", salary: 2500 },
//     ],
//     frontend: [
//       { name: "Artem", salary: 3000 },
//       { name: "Alex", salary: 2700 },
//     ],
//   },
//   sales: {
//     marketing: {
//       internet_marketers: [
//         { name: "Nina", salary: 1000 },
//         { name: "Olena", salary: 1300 },
//       ],
//       promotion: [
//         { name: "Oleg", salary: 1400 },
//         { name: "Masha", salary: 1700 },
//       ],
//     },

//     sellers: [
//       { name: "Max", salary: 900 },
//       { name: "Donald", salary: 700 },
//       { name: "Joe", salary: 1100 },
//     ],
//   },

//   designer: [{ name: "Kate", salary: 1800 }],
// };

// function sumSalary() {
//   let sum = 0;

//   return function(obj) {
//     for (let key in obj) {
//       if (Array.isArray(obj[key])) {
//         obj[key].forEach(employee => sum += employee.salary);
//       } else {
//         sumSalary(obj[key]);
//       }
//     }

//   }
// }

// let sumSalary1 = sumSalary();

// console.log(sumSalary1(employees));

// task 4

// let arr1 = [2, 15, 7, 3];
// let arr2 = [9, 3, 17, 12, 4, 8];
// let arr3 = [6, 11, 16, 15, 11];

// let maxNumber = Math.max(...arr1, ...arr2, ...arr3);

// console.log(maxNumber);
