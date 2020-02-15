'use strict';
// -------------------ПЕРШИЙ ВАРІАНТ-------------------

class Storage {
  constructor(items) {
    this.arr = items;
  }

  getItems() {
    return this.arr;
  }

  addItem(item) {
    return this.arr.push(item);
  }

  removeItem(item) {
    return this.arr.splice(this.arr.indexOf(item), 1);
  }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.log(items);
storage.items = items;

storage.addItem('Droid');
console.log(storage.items);

storage.removeItem('Пролонгер');
console.log(storage.items);

// ----------------------------------------------------------
// -------------------ДРУГИЙ ВАРІАНТ-------------------

// class Storage {
//   constructor(items) {
//     this.arr = items;
//   }

//   getItems() {
//     return this.arr;
//   }

//   addItem(item) {
//     return this.arr.push(item);
//   }

//   removeItem(item) {
//     return (this.arr = this.arr.filter(str => str != item));
//   }
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

// const items = storage.getItems();
// console.log(items);

// storage.addItem('Droid');
// console.log(storage.getItems());

// storage.removeItem('Пролонгер');
// console.log(storage.getItems());
