"use strict";

//task 1-2-3

class User {
  constructor(name, login, age) {
    this._name = name;
    this.login = login;
    this.age = age;
  }

  getName(isAdmin) {
    return isAdmin ? this._name || this.login : "Permission denied";
  }

  changeName(name, password) {
    if (password === "123") {
      const oldName = this._name;
      this._name = name;

      return `Name Changed From ${oldName} to ${name}`;
    }

    return "Permission denied";
  }
}

const user1 = new User("Mike", "MK_18", 18);
const user2 = new User("", "NRG", 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));

console.log(user1.changeName("Bill", "123"));