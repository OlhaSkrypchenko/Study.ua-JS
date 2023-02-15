"use strict";

//  tasks 1-2

function count(expression) {
  function getValues(data) {
    let values = [...data];
    return values;
  }

  let values = getValues(expression);

  switch (values[1]) {
    case "+":
      return showResult(sum(values));
    case "-":
      return showResult(subtract(values));
    case "*":
      return showResult(multiply(values));
    case "/":
      return showResult(divide(values));
  }

  function showResult(value) {
    return value;
  }
}

function sum(values) {
  return +values[0] + +values[2];
}

function subtract(values) {
  return values[0] - values[2];
}

function multiply(values) {
  return values[0] * values[2];
}

function divide(values) {
  if (+values[2] === 0) {
    try {
      throw new Error(`Can't divide by 0`);
    } catch (err) {
      console.log(`${err.name}: ${err.message}`);
      return 0;
    }
  }
  return values[0] / values[2];
}

console.log(count("5/0"));

// task 3

function count1(expression) {
  try {
    if (typeof expression !== "string") {
      throw new Error("Please, write in a string format");
    }

    function getValues(expression) {
      let values = [...expression];
      return values;
    }

    let values = Values(expression);

    switch (values[1]) {
      case "+":
        return showResult(sum1(values));
      case "-":
        return showResult(subtract1(values));
      case "*":
        return showResult(multiply1(values));
      case "/":
        return showResult(divide1(values));
    }

    function showResult(value) {
      return value;
    }
  } catch (err) {
    if (err.message === "Please, write in a string format") {
      console.log(err.message);
    } else {
      throw err;
    }
  }
}

function sum1(values) {
  return +values[0] + +values[2];
}

function subtract1(values) {
  return +values[0] - +values[2];
}

function multiply1(values) {
  return +values[0] * +values[2];
}

function divide1(values) {
  return +values[0] / +values[2];
}

try {
  count1(5 * 2);
} catch(err) {
  console.log(err.name + ": " + err.message);
}

try {
  count1('5 * 2');
} catch(err) {
  console.log(err.name + ": " + err.message);
}

// task 4

function MakeUsers(name, age) {
  this.name = name;
  this.age = age;
}

let user = new MakeUsers("Mike"); //Forgot to pass the second parameter

function showMovie(user) {
  try {
    if (user.age == undefined) {
      throw new SyntaxError("Age are not determined");
    }

    if (user.age >= 18) {
      return "You can watch this movie";
    } else {
      return "Sorry, you are too young";
    }
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);

    let userAge = prompt("Enter your age", 18);
      

    while (typeof +userAge !== "number" || isNaN(+userAge) || userAge === null) {
      userAge = prompt("Enter your age", 18);
    }

    user.age = +userAge;
    return showMovie(user);
  }
}

console.log(showMovie(user));
