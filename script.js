"use strict";

let defaultFirstValue = 1;
let defaultSecondValue = 2;
let bonus = 1;
let basicSalaryAmount = 2000;

let firstMonthSalary = prompt("Enter first month salary", defaultFirstValue);
let secondMonthSalary = prompt("Enter second month salary", defaultSecondValue);
let totalSalaryAmount = +firstMonthSalary + +secondMonthSalary;
let summarySalaryAmount = totalSalaryAmount + bonus;


let message = alert(`Your salary for 2 months is: ${totalSalaryAmount}$`);
let bonusMessage = alert(`You have extra bonus!Your total salary was: ${totalSalaryAmount}$. It's increase for ${bonus}$ and now it is ${summarySalaryAmount}$`);

// task3
// let containWork = alert(`Will you work next? ${summarySalaryAmount >= basicSalaryAmount}`);

let containWork = alert(`${summarySalaryAmount >= basicSalaryAmount ? 'I\'m ready to work' : 'I\'m out'}`);
