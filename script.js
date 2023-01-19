"use strict";

let defaultFirstValue = 1;
let defaultSecondValue = 2;
let bonus = 1;
let basicSalaryAmount = 2000;

let firstMonthSalary = prompt("Enter first month salary", defaultFirstValue);
let secondMonthSalary = prompt("Enter second month salary", defaultSecondValue);

if (firstMonthSalary && secondMonthSalary) {
    let totalSalaryAmount = Number(firstMonthSalary) + Number(secondMonthSalary);
    let summarySalaryAmount = totalSalaryAmount + bonus;
    alert(`Your salary for 2 months is: ${totalSalaryAmount}$`);
    alert(`You have extra bonus!Your total salary was: ${totalSalaryAmount}$. It's increase for ${bonus}$ and now it is ${summarySalaryAmount}$`);
    // task3
    // alert(`Will you work next? ${summarySalaryAmount >= basicSalaryAmount}`);
    alert(`${summarySalaryAmount >= basicSalaryAmount ? 'I\'m ready to work' : 'I\'m out'}`);
} else {
    alert('User did not provide required data');
}
