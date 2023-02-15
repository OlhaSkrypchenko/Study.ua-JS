"use strict";

// task 1

const root1 = document.querySelector('.task1');
const secondaryHeader = root1.getElementsByTagName('h2');
secondaryHeader[1].textContent += ' description';


// task 2
const root2 = document.querySelector('.task2');
const uaLinks = root2.querySelectorAll('a[href*="/ua/"]');
console.log(uaLinks);


// task 3

function createBasicElement(elem, attr = {}, content='') {
  let el = document.createElement(elem);

  for (let key in attr) {
    el.setAttribute(key, attr[key]);
  }
  
  el.textContent = content;

  return el;
}

const list = document.getElementById('ul');
const firstLi = document.getElementById('first');

list.prepend(createBasicElement('li', {id: 'null'}, '0'));
list.append(createBasicElement('li', {id: 'fourth'}, '4'));
firstLi.after(createBasicElement('li', {id: 'second'}, '2'));

// task 4

const root4 = document.querySelector('.task4');

const header = root4.querySelector('h1');

const link = createBasicElement('a', {id: 'link', href: 'https:/dom.spec.whatwg.org'});
link.append(header);

root4.append(link);
