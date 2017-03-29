'use strict'

class Queue {
  constructor () {
    this.container = [];
    this.maxSize = 5;
  }

  insert(value) {
    if(this.container.length === this.maxSize) {
      console.log(`Error! container max capacity is ${this.maxSize}. Current capacity is ${this.container.length}`);
    } else {
      this.container.push(value);
      console.log(`${value} added!`);
    }
    
  }
  // remove first element
  remove() {
    if(this.container.length === 0) {
      console.log(`Stack is empty. you can't removed anything.`)
    } else {
      let removed = this.container.shift();
      console.log(`${removed} removed!`);
    }
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
