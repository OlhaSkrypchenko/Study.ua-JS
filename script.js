'use strict';
// task1
console.log(`You can ignore single and double quotes like this: \\' \\' \\" \\"`);

// task2
let enterData=confirm('Please enter your data');

let userName = prompt('Enter your name');
let userNameInfo = alert(`Your name is: ${userName}`);

let userSurname = prompt('Enter your surname');
let userFullNameInfo = alert(`Your full name is: ${userName} ${userSurname}`);

let userAge = prompt('How old are you?');
let basicUserInfo = alert(`Your full name is: ${userName} ${userSurname}, your age: ${userAge}`);

let isAdmin = confirm('Are you admin?');
let fullUserInfo = alert(`Your full name is: ${userName} ${userSurname}, your age: ${userAge}, admin status: ${isAdmin}`);

