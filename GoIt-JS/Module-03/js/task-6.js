'use strict';
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Захват')); // 2800

function calculateTotalPrice(allProducts, productName) {
  let total;
  allProducts.forEach(object => {
    Object.keys(object).forEach(key => {
      if (object[key] === productName) total = object['price'] * object['quantity'];
    });
  });
  return total;
}
