'use strict';

const user = {
  name: 'Alex',
  age: 32,
  hobby: 'js',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skiing';
user.premium = false;
Object.keys(user).forEach(key => {
  console.table(`${key}: ${user[key]}`);
});
