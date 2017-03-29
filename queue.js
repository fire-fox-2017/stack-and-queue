'use strict'

class Queue {
  constructor () {
    this.container = [];
  }

  insert(value) {
    this.container.push(value);
  }
  // remove first element
  remove() {
    let removed = this.container.shift();
    console.log(`${removed} removed!`);
  }

  display() {
    console.log(this.container);
  }
}

let myQueue = new Queue();

myQueue.insert('Makan');
myQueue.insert('Belanja');
myQueue.insert('Bernyanyi');
myQueue.insert('Belajar');
myQueue.insert('Bermain');
myQueue.display();
myQueue.remove();
myQueue.display();
