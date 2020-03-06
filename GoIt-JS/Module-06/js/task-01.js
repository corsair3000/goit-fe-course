'use strict';
import users from './users.js';

// Task 1---------

const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));

// Task 2---------
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));

// Task 3---------

const getUserWithGender = (users, gender) => {
  const filtred = users.filter(user => user.gender === gender);
  return filtred.map(user => user.name);
};
console.log(getUserWithGender(users, 'male'));

// Task 4---------
const getInactiveUsers = users => users.filter(user => !user.isActive);
console.log(getInactiveUsers(users));

// Task 5---------
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

//task6-----------
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

//task7-----------
const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);
console.log(calculateTotalBalance(users)); // 20916

//task8-----------
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName)).map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
//task9-----------
const getNamesSortedByFriendsCount = users => {
  return users
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);
};
console.log(getNamesSortedByFriendsCount(users));

//task10-----------
const getSortedUniqueSkills = users => {
  const arrayListScills = users.reduce((acc, user) => {acc.push(...user.skills);return acc;}, []).sort();
  return [...new Set(arrayListScills)];
};
console.log(getSortedUniqueSkills(users));


////  П Е Р Е Б О Р    М А С И В У    НА     У Н І К А Л Ь Н І С Т Ь  2 - ВАРІАНТ
// const copyArr = arrayListScills.slice();
// let k;
// for (let i = 0; i <= arrayListScills.length; i++) {
//   k = 0;
//   for (let j = 0; j <= arrayListScills.length; j++)
//     if (copyArr[j] === arrayListScills[i]) {
//       k++;
//       if (k > 1) copyArr.splice(j, 1);
//     }
// }
// return copyArr;

////  П Е Р Е Б О Р    М А С И В У    НА     У Н І К А Л Ь Н І С Т Ь  3 - ВАРІАНТ
// const newList = [];
//   arrayListScills.forEach(el => {
//     if (!newList.includes(el)) newList.push(el);
//   });
// return newList;
