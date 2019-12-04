'use strict';
let input = 0;
let total = 0;
let i = 0;

while (input != null) {
  input = prompt('введіть число');
  if (isNaN(input)) alert('Введіть коректні дані!!!');
  else if (input === null) break;
  else {
    input = Number(input);
    total += input;
    i += 1;
  }
}

// for (i; i > -1; i++) {
//   input = prompt('введіть число');

//   if (!input && input != '') break;
//   if (isNaN(input)) alert('Введіть коректні дані!!!');
//   else {
//     input = Number(input);
//     total = total + input;
//   }
// }
if (i === 0) console.log(`Жодного значення не було введено`);
else console.log(` Загальна сума дорівнює: ${total}`);
