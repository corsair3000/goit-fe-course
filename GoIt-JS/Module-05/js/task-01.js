'use strict';

function Account(value) {
  this.login = value.login;
  this.email = value.email;
}

Account.prototype.getInfo = function() {
  return console.log(`Login: ${this.login} and Email: ${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
console.log(mango);

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
console.log(mango);
