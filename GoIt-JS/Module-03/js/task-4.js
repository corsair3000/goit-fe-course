'use strict';
const AvisListSalary = {};
const KnessListSalary = {
  mango: 100,
  poly: 150,
  alfred: 80,
};

const RoshenListSalary = {
  kiwi: 200,
  lux: 50,
  chelsy: 150,
};

console.log(`Total Salary = ${countTotalSalary(AvisListSalary)}`);
console.log(`Total Salary = ${countTotalSalary(KnessListSalary)}`);
console.log(`Total Salary = ${countTotalSalary(RoshenListSalary)}`);

function countTotalSalary(employees) {
  let total = 0;
  Object.keys(employees).forEach(key => {
    total = total + employees[key];
  });
  return total;
}
