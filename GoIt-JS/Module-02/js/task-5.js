'use strict';

const checkForSpam = function(string) {
string = string.toLowerCase();
  if (string.includes('spam')) return true;
  if (string.includes('sale')) return true;
return false;
}


console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('JavaScript weekly newsletter')); // false



