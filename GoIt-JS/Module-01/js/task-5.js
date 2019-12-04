'use strict';
let nameCountry;
let credits = [100, 250, 170, 80, 120];
const CHINA = 'китай';
const CHILY = 'чилі';
const AUSTRALIA = 'австралія';
const INDIA = 'індія';
const JAMAICA = 'ямайка';
let price = 0;

nameCountry = prompt('В яку країну бажаєте доставку?');
if (!nameCountry) console.log('Canceled by user');
else {
  nameCountry = nameCountry.toLowerCase();
  switch (nameCountry) {
    case CHINA:
      price = credits[0];
      break;

    case CHILY:
      price = credits[1];
      break;

    case AUSTRALIA:
      price = credits[2];
      break;

    case INDIA:
      price = credits[3];
      break;

    case JAMAICA:
      price = credits[4];
      break;

    default:
      console.log('В вашей стране доставка не доступна');
  }
}

if (price > 0) {
  let message = `Доставка в ${nameCountry} будет стоить ${price} кредитов`;
  console.log(message);
}
