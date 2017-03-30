'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.max_size = 4;
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  stackPush(x) {
    if (this.array.length === this.max_size) {
      console.log("Full");
    } else {
      console.log(x);
      this.array.push(x);
    }
  }

  stackPop() {
    if (this.array.length === 0) {
      console.log("Empty");
    } else {
      this.array.pop();
    }
  }

  first() {
    return this.array[0];
  }

  last() {
    return this.array[this.array.length-1];
  }

  isEmpty() {
    if (this.array.length === 0) {
      return 'Empty';
    } else {
      return 'Not Empty';
    }
  }

  isFull() {
    if (this.array.length === this.max_size) {
      return 'Full';
    } else {
      return 'Not Full';
    }
  }

  // stackPeep() {
  // }
  //
  // // implement queue
  // queue() {
  // }
}

let stack = new Stack();

console.log(stack.size());
stack.stackPush('erer');
stack.stackPush('eywueyw');
stack.stackPush('udhjh');
console.log(stack.array);
stack.stackPop();
console.log(stack.array);
console.log(stack.first());
console.log(stack.last());
console.log(stack.isEmpty());
console.log(stack.isFull());

module.exports = Stack
