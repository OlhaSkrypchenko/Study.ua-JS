"use strict";

const errorMessage = "User did not provide required data";

//task 1

let a = prompt('Enter first number');
let b = prompt('Enter first second');

 function maxNumber(a, b){
    if (a === null || b === null) {
        return errorMessage;
    }

    let firstNum = Number(a);
    let secondNum = Number(b);

    if (isNaN(firstNum) || isNaN(secondNum)) {
        return errorMessage;
    }

    if (firstNum === secondNum) {
        return "a = b";
    }

    return firstNum > secondNum ? firstNum : secondNum;
 }

 alert(maxNumber(a, b));

//task 2

 function reverse(num) {
    if (typeof num === "number" && !isNaN(num)) {
        return -num;
    }
    return "User did not provide required data";
 }

 console.log(reverse(8));
 console.log(reverse(-6));
 console.log(reverse(false));

//task 3

function addThreeCountTimes(num, count) {
  const isValidType = typeof num === "number" && typeof count === "number";
  const areValidNumbers = !isNaN(num) && !isNaN(count);

  if (isValidType && areValidNumbers) {
    return num + 3 * count;
  }

  return errorMessage;
}

console.log(addThreeCountTimes(1, 3));
console.log(addThreeCountTimes(NaN, 3));

// task 4

function kmToM(km) {
    if (typeof km === "number" && !isNaN(km)) {
        return km * 1000;
    }

    return errorMessage;   
}

function kmToSm(km) {
    if (typeof km === "number" && !isNaN(km)) {
        return km * 100000;
    }

    return errorMessage;   
}

function getMetric(metric, km, m, sm) {
    switch(metric) {
        case "m": return m(km);
        case "sm":  return sm(km);
        default: return errorMessage;
    }
 
}

console.log(getMetric("m", 7, kmToM, kmToSm));
console.log(getMetric("sm", 7, kmToM, kmToSm));