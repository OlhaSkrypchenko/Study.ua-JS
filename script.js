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
