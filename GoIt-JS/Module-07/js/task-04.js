'use strict';

const btnDecrement = document.querySelector('.button[data-action="decrement"]');
const btnIncrement = document.querySelector('.button[data-action="increment"]');
const valueCounter = document.querySelector('#value');

let value = 0;
valueCounter.textContent = value;

const decrement = () => (valueCounter.textContent = --value);
const increment = () => (valueCounter.textContent = ++value);

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

// --------------ДОДАТКОВЕ ЗАВДАННЯ ВИГАДАНЕ МНОЮ- RESET BUTTON----------------------//

const containerButton = document.querySelector('#counter');
containerButton.classList.add('containerBtn');

const btnResetCounter =
  '<button type="button" class="button" data-action="reset">reset</button>';
const counterContainer = document.querySelector('#counter');
counterContainer.insertAdjacentHTML('beforeend', btnResetCounter);

const btnReset = document.querySelector('.button[data-action="reset"]');

btnReset.addEventListener('click', () => {
  value = 0;
  valueCounter.textContent = value;
});
valueCounter.classList.add('value-counter');
