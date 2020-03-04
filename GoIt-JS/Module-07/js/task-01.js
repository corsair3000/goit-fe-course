'use strict';
const quantityListItem = document.querySelectorAll('.item')
console.log(`В списку ${quantityListItem.length} категорії`);

quantityListItem.forEach((item,idx)=>{
  console.dir(`Категорія: ${item.children[0].textContent}`);
  console.dir(`Кількість Елементів: ${item.children[1].children.length}`)

})

