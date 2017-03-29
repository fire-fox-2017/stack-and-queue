'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.container = [];
    this.maxSize = 5;
  }

  size() {
    console.log(this.container.length);
    return this.container.length;
  }

  stackPush(x) {
    if(this.container.length === this.maxSize) {
      console.log(`Error! container max capacity is ${this.maxSize}. Current capacity is ${this.container.length}`);
    } else {
      this.container.push(x);
    }
  }


  stackPop() {
    if(this.container.length === 0) {
      console.log(`Stack is empty. you can't removed anything.`)
    } else {
      let removed = this.container.pop();
      console.log(`${removed} is removed!`)
    }
  }

  first() {
    console.log(`First data in the stack: ${this.container[0]}`);
  }

  last() {
    console.log(`Last data in the stack: ${this.container[this.container.length - 1]}`);
  }

  isEmpty() {
    let empty = this.container.length === 0 ? true : false;
    console.log(empty);
    return empty;
  }

  isFull() {
    let full = this.container.length === this.maxSize ? `Container is full. Current capacity is ${this.container.length}` : `Container current capacity is: ${this.container.length}. There are still ${this.maxSize - this.container.length} capacity left.`;
    console.log(full);
    return full;
  }

  stackPeep() {
    let lastData = this.container.length - 1;
    console.log(this.container[lastData])
    return this.container[lastData];
  }

  // implement queue
  queue() {
  }

}

let myStack = new Stack();
// myStack.size();
myStack.stackPush(23);
myStack.stackPush('Sekolah');
myStack.stackPush('Ayam');
myStack.stackPush('Ikan');
myStack.stackPush('Belanja');
myStack.stackPush('Senam');
// myStack.size();
// myStack.first();
// myStack.last();
// myStack.isEmpty();
// myStack.isFull();
// myStack.stackPop();

module.exports = Stack
