'use strict';
const input = document.querySelector('#validation-input');
const inputDataLength = +input.dataset.length;

input.addEventListener('blur', inputOnFocusOn);
function inputOnFocusOn(event) {
  const handleInput = event.currentTarget.value;

  handleInput.length !== inputDataLength
    ? input.classList.add('invalid')
    : input.classList.add('valid');
}
