class Student {
  classes = [];
  constructor(name1) {
    this.name = name1;
  }

  addClass(studentClass) {
    this.classes.push(studentClass);
  }
}

const student = new Student();

class Store {
  categories = [];
  items = [];
  constructor(name) {
    this.storeName = name;
  }

  addItems(itemName) {
    this.items.push(itemName);
  }

  addCategories(catName) {
    this.categories.push(catName);
  }

  getItems() {
    return this.items;
  }
}

let store = new Store("myStore");
store.addItems("bread");
store.addCategories("cat1");

console.log(store);
