'use strict';
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'category'));

function getAllPropValues(arr, prop) {
  let j = 0;
  let newArr = [];
  arr.forEach(element => {
    if (!Object.keys(element).includes(prop)) return newArr;
    newArr[j] = element[prop];
    j++;
  });

  return newArr;
}
