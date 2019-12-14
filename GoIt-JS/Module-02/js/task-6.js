'use strict';

let total = 0;
const summ = () => {
  let input;
  const numbers = [];
  let i = 0;
  for (i = 0; input !== null; i += 1) {
    input = prompt('Input some numbers:');
    if (!input) break;
    if (isNaN(input)) {
      i = i - 1;
      continue;
    }
    numbers[i] = Number(input);
    total += numbers[i];
  }
  return total;
};

summ();
if (total === 0) console.log(`НЕ БУЛО ВВEДЕНО ЖОДНОГО ЗНАЧЕННЯ!!!`);
else console.log(`Загальна сума дорівнює: ${total}!`);
