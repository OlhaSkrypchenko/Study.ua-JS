"use strict";

//task 1-2-3

class User {
  #name;

  constructor(name, login, age) {
    this.#name = name;
    this.login = login;
    this.age = age;
  }

  getName(isAdmin) {
    return isAdmin ? this.#name || this.login : "Permission denied";
  }

  changeName(name, password) {
    if (password === "123") {
      const oldName = this.#name;
      this.#name = name;

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

//task 4

class Admin extends User {
  #isAdmin;

  constructor(...args) {
    super(...args);
    this.#isAdmin = true;
  }

  getUserName(user) {
    return user.getName(this.#isAdmin);
  }
}

const admin = new Admin();

console.log(admin.getUserName(user1));

// task 5

class User1 {
  #phone;

  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }

  getPhone(isAdmin) {
    if (isAdmin) {
      return this.#phone;
    }

    const phoneArr = this.#phone.split("");

    const hiddenPhone = phoneArr.map((el, index) => {
      if (index >= 4 && index <= 9) {
        return "*";
      }

      return el;
    });

    return hiddenPhone.join("");
  }
}

const user3 = new User1("Mike", "067-888-88-77");
const user4 = new User1("Tom", "067-888-88-77");

console.log(user3.getPhone(true));
console.log(user3.getPhone(false));
console.log(user4.getPhone(true));
console.log(user4.getPhone(false));
