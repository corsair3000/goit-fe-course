'use strict';

let logins = ['Poly', 'Mango', 'Ajax', 'Zod2000'];
let login;

login = prompt('Write your LOGIN:');

const isLoginValid = function() {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else return false;
};

const isLoginUnique = function(ourLogins, inputLogin) {
  inputLogin = inputLogin.toLowerCase();
  let i;
  for (i = 0; i < ourLogins.length; i += 1) {
    ourLogins[i] = ourLogins[i].toLowerCase();
    if (inputLogin === ourLogins[i]) return false;
    else continue;
  }
  return true;
};

const addLogin = function(logins, log) {
  if (log === null) return console.log('Canceled of user');
  if (isLoginValid()) {
    if (isLoginUnique(logins, login)) {
      return logins.push(log);
    } else return console.log('Пользователь с таким именем уже есть');
  } else return console.log('Error,login must be from 4 to 16 symbol');
};

addLogin(logins, login);
console.log(logins);
