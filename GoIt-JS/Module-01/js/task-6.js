'use strict';
let input;
let total = 0;
let i = 0;
for (i; i > -1; i++) {
  input = prompt('введіть число');
  // console.log(typeof(input));
  // console.log(input);
  if (!input && input != '') break;
  if (isNaN(input)) alert('Введіть коректні дані!!!');
  else {
    input = Number(input);
    total = total + input;
  }
  // console.log(i);
}

if (i === 0) console.log(`Жодного значення не було введено`);
else console.log(` Загальна сума дорівнює: ${total}`);
