"use strict";
//task 1

const url = "http://127.0.0.1:5500/JS/JSON/home-work-data.json";

function showAdminData(data) {
  for (let key in data) {
    if (data[key]?.isAdmin === true) {
      return data[key].name;
    }
  }

  return "admin is not found";
}

async function getData(url) {
  try {
    const request = await fetch(url);

    if (request.ok) {
      return await request.json();
    } else {
      throw new Error(`Error: ${request.status}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

getData(url).then((data) => console.log(showAdminData(data)));

// task 2

let nikola = { firstName: "Nikola", lastName: "Tesla" };
let bob = { firstName: "Bob" };
let mike = { lastName: "Smith" };
let michael = {};

let getFullName = function (user) {
  return `${user.firstName} ${user.lastName}`;
};

getFullName = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    const [user] = args;

    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }

    if (!user.firstName && !user.lastName) {
      return `No name`;
    }

    return user.firstName || user.lastName;
  },
});

console.log(getFullName(nikola));
console.log(getFullName(bob));
console.log(getFullName(mike));
console.log(getFullName(michael));

// task 3

let users = [
  { name: "Nikola", age: 18, id: 1 },
  { name: "Bob", age: 25, id: 2 },
  { name: "Mike", age: 32, id: 3 },
];

localStorage.setItem("users", JSON.stringify(users));

function sayHelloToUser(id) {
  const users = JSON.parse(localStorage.getItem("users"));

  const user = users.find((el) => el.id === id);

  return `Hello: ${user.name}`;
}

console.log(sayHelloToUser(3));

// task 4

const input = document.querySelector("input");

input.addEventListener("change", () =>
  localStorage.setItem("inputText", input.value)
);

window.addEventListener(
  "load",
  () => (input.value = localStorage.getItem("inputText"))
);
