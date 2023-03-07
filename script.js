
"use strict";

// task 1
let taxes = {
    vat() {
        return 'inappropriate tax';
    },

    exciseDuty() {
        return 'inappropriate tax';
    },

    singleTax() {
        return 'inappropriate tax';
    }
}

class Cola {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}

Object.assign(Cola.prototype, taxes);
Cola.prototype.vat = function () { return this.price + this.price * 0.2 };

class Whiskey {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}

Object.assign(Whiskey.prototype, taxes);
Whiskey.prototype.exciseDuty = function () {
    return this.price + this.price * 0.3 + 10;
}

class Ice {
    constructor(price) {
        this.price = price;
    }
}

Object.assign(Ice.prototype, taxes);
Ice.prototype.singleTax = function () {
    return this.price + 1;
}

let cocaCola = new Cola('Coca-Cola', 10);
let johnWalker = new Whiskey('john walker', 100);
let ice = new Ice(2);

console.log(cocaCola.vat());
console.log(johnWalker.exciseDuty());
console.log(ice.singleTax());

// task 2

function uniqueString(str) {
    if (typeof str === 'string') {
        const arr = str.split('; ');
        const uniqueValues = new Set(arr);

        return Array.from(uniqueValues);
    }

    return 'wrong type of data'
}
console.log(uniqueString('cherry; orange; cherry; banana; banana'));

// task 3 

function getContentOfList(list) {
    let goodsList = [];
    for (let li of list.children) {
        goodsList.push(li.innerText);
    }

    return goodsList;
}

function getUniqueGoods(arr) {
    return Array.from(new Set(arr));
}

function renderList() {
    const shopList = document.querySelector('.shop-list');
    const goodsList = getContentOfList(shopList);

    shopList.innerHTML = "";

    const uniqueGoods = getUniqueGoods(goodsList);

    uniqueGoods.forEach(el => {
        const li = document.createElement('li');
        li.textContent = el;
        shopList.append(li);
    })
}

const btn = document.querySelector('.show-unique-goods');
btn.addEventListener('click', renderList);

// task 4

let mike = {name:'Mike', age: 18};
let bob = {name: 'Bob', age: 25};
let nikola = {name: 'Nikola', age: 32}; 

let userVisits = new Map();

function countVisits() {
    let result = 0;

    return function(user) {
        userVisits.set(user, ++result)
    }
}

const mikeVisits = countVisits();
const bobVisits = countVisits();
const nikolaVisits= countVisits();

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);

console.log(userVisits.get(mike));
console.log(userVisits.get(bob));
console.log(userVisits.get(nikola));