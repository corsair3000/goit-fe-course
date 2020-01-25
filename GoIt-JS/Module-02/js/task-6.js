'use strict';

let total = 0;
const summ = () => {
  let input;
  const numbers = [];

  for (let i = 0; input !== null; i++) {
    input = prompt('введіть число');
    if (input === '') {
      i--;
      alert('Щоб вивести результат натисніть "Cкасувати"');
      continue;
    }

    if (isNaN(input)) {
      i = i - 1;
      alert('Ведіть тільки цифри');
      continue;
    }
    if (input === null) continue;
    else {
      numbers[i] = Number(input);
      total += numbers[i];
    }
  }

  return total;
};

summ();
if (total === 0) console.log(`НЕ БУЛО ВВEДЕНО ЖОДНОГО ЗНАЧЕННЯ!!!`);
else console.log(`Загальна сума дорівнює: ${total}!`);
