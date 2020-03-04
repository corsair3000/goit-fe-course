'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', inputChange);
function inputChange(event) {
  let currentNameInput = event.currentTarget.value;

  currentNameInput = up(currentNameInput);

  currentNameInput === ''
    ? (nameOutput.textContent = 'незнакомец')
    : (nameOutput.textContent = currentNameInput);
}
const up = str => str[0].toUpperCase() + str.slice(1);
