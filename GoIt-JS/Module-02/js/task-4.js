'use strict';

const formatString = function(string) {
  let stringLetter = string.length;
  if (stringLetter <= 40) return string;
  else {
    return `${string.slice(0, 40)}...`;
  }
};
console.log(
  formatString('Curabitur lig, tincidunt non11ffffffffffffffff2345612'),
);
