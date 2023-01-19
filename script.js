"use strict";

let bonus = 1;
let basicSalaryAmount = 2000;

let firstMonthSalary = prompt("Enter first month salary", 1);
let secondMonthSalary = prompt("Enter second month salary", 2);

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