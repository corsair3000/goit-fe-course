'use strict';
let obj1 = {};
let obj2 = {
  name: 'Mango',
  age: 2,
};
let obj3 = {
  mail: 'poly@mail.com',
  isOnline: true,
  score: 500,
};

console.log(countProps(obj1));
console.log(countProps(obj2));
console.log(countProps(obj3));

function countProps(object) {
  let counter = 0;
  Object.keys(object).forEach(key => {
    counter++;
  });
  return `Количество свойств обьекта = ${counter}`;
}
