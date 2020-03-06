'use strict';

const input = document.querySelector('input[type="number"]');
const btnRender = document.querySelector('button[data-action="render"]');
const btnDestroy = document.querySelector('button[data-action="destroy"]');
const containerBoxes = document.querySelector('#boxes');
let widthAndHeightBoxes = 30;

btnRender.addEventListener('click', crateBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function crateBoxes() {
  let amount;
  // умова: якщо вже створені div і збільшується значення в input то добавляється
  // тільки стільки div на скільки збільшилося значення в input
  if (input.value !== containerBoxes.childElementCount) {
    amount = input.value - containerBoxes.childElementCount;
  }
  // умова: при зменшенні значення в  input створюється відповідна к-сть div
  // В планах переробити щоб  видалялося необхідна кількість div,
  // а не створювалися повністю нові.
  if (input.value < containerBoxes.childElementCount) {
    amount = input.value;
    destroyBoxes();
  }

  for (let i = 0; i < amount; i++) {
    let crateHexCode = Math.random();
    let backGroundColor = `background-color:#${String(crateHexCode).slice(2,8)}`;
    let sizeBox = `width:${(widthAndHeightBoxes += 10)}px;height:${widthAndHeightBoxes}px`;
    const crateOneBox = `<div class="div1" style="${backGroundColor};${sizeBox}"></div>`;
    containerBoxes.insertAdjacentHTML('beforeend', crateOneBox);
  }
}

function destroyBoxes() {
  containerBoxes.innerHTML = '';
  input.value = 0;
  widthAndHeightBoxes = 30;
}
