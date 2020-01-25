'use strict';
const employeesAvis = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

const employeesKness = {
  poly: 12,
  mango: 17,
  ajax: 4,
};

const employeesRoshen = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 30,
};

console.table(findBestEmployee(employeesAvis));
console.table(findBestEmployee(employeesKness));
console.table(findBestEmployee(employeesRoshen));

function findBestEmployee(employees) {
  let salary = 0;
  let name;
  Object.keys(employees).forEach(key => {
    if (salary < employees[key]) {
      salary = employees[key];
      name = key;
    }
  });
  return name;
}
