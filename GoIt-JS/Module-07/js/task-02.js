'use strict';

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  const listIngridients = document.querySelector('#ingredients');
  listIngridients.textContent="Інгридієнти:"
  listIngridients.classList.add('list')


const arr = ingredients.map(item=>{
    const itemIngredients = document.createElement('li');
    itemIngredients.textContent=item;
    itemIngredients.classList.add('list__item')
    return itemIngredients;
    
})
listIngridients.append(...arr);