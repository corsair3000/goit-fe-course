'use strict';
// -------------------ПЕРШИЙ ВАРІАНТ-------------------

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    return this.items.push(item);
  }

  removeItem(item) {
    return this.items.splice(this.items.indexOf(item), 1);
//  return (this.items = this.items.filter(str => str != item));

  }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.log(items);

storage.addItem('Droid');
console.log(storage.items);

storage.removeItem('Пролонгер');
console.log(storage.items);

