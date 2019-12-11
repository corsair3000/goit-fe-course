'use strict';
let someArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let someArrayText = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];

const logItems = function(array) {
  for (let i = 0; i < array.length; ++i) {
    console.log(`${i + 1} - ${array[i]}`);
  }
};

console.log('First list:');
logItems(someArray);
console.log('Second list:');
logItems(someArrayText);
