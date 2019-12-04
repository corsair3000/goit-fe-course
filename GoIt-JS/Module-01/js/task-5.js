'use strict';

let nameCountry;
let credits = [100, 250, 170, 80, 120];

nameCountry = prompt('В яку країну бажаєте доставку?');
if (!nameCountry) console.log('Canceled by user');
else {
  nameCountry = nameCountry.toLowerCase();
  switch (nameCountry) {
    case 'китай':
      console.log(
        `Доставка в ${nameCountry} буде коштувати ${credits[0]} кредитів`,
      );
      break;

    case 'чілі':
      console.log(
        `Доставка в ${nameCountry} буде коштувати ${credits[1]} кредитів`,
      );
      break;

    case 'австралія':
      console.log(
        `Доставка в ${nameCountry} буде коштувати ${credits[2]} кредитів`,
      );
      break;

    case 'індія':
      console.log(
        `Доставка в ${nameCountry} буде коштувати ${credits[3]} кредитів`,
      );
      break;

    case 'ямайка':
      console.log(
        `Доставка в ${nameCountry} буде коштувати ${credits[4]} кредитів`,
      );
      break;

    default:
      console.log('В вашей стране доставка не доступна');
  }
}
