'use strict';

// task 1

const user = {};

Object.defineProperties(user, {
  name: {value: 'Ivan', writable: false},
  age: {value: 20, writable: false},
  id: {value: 123, configurable: false}
});

// task 2
let dataBase = {
  dbName:'user',
  dbType: 'MySQL'
}

Object.freeze(dataBase);

let configurateDB = {
  token: '123',
  password: '567',
  user: 'admin'
}

Object.seal(configurateDB);
