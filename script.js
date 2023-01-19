"use strict";

//task 1

let userAge = prompt("Enter your age");

if (userAge) {
  userAge = Number(userAge);
  switch (true) {
    case userAge <= 17:
      confirm("Do you study at school?");
      break;
    case userAge > 17 && userAge < 25:
      confirm("Do you study at university?");
      break;
    case userAge >= 25 && userAge < 60:
      confirm("Do you have a job?");
      break;
    default:
      confirm("What are you doing?");
  }
} else {
  alert("User did not provide required data");
}

// task2

let displayProperty = prompt("Enter one of display property like: block, flex, grid, inline or none");

switch(displayProperty) {
    case 'block': alert(displayProperty);
    break;
    case 'flex': alert(displayProperty);
    break;
    case 'grid': alert(displayProperty);
    break;
    case 'inline': alert(displayProperty);
    break;
    case 'none': alert(displayProperty);
    break;
    default: alert("Set 'display:inline-block;'");
}

// task 3

let num = prompt("Please enter the number", 1);
let multiplyNum = 12;
let exitMessage = "User did not provide required data";

if (num !== null) {
  while (isNaN(num) === true || num <= 0) {
    num = prompt("Your number is not correct, please enter correct number");

    if (num === null) {
      alert(exitMessage);
    }
  }

  if (num > 0) {
    alert(`${num} by ${multiplyNum} is ${num * multiplyNum}`);
  }
} else {
  alert(exitMessage);
}

// task 4

for (let i = 2; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
