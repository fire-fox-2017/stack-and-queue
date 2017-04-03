'use strict'

// Your code implementation
class Stack {
  constructor() {
    this._array = [];
    this._max = 3;
    this._min = 0;
  }

  size() {
    return this._array.length;
  }

  stackPush(x) {
    if(this._array.length===this._max){
      console.log('Warning: array is full');
    }else {
      this._array.push(x);
    }
  }

  stackPop() {
    if(this._array.length===this._min){
      console.log('Warning: array is empty');
    }else {
      return this._array.pop()
    }
  }

  first() {
    return this._array[0];
  }

  last() {
    return this._array[this._array.length-1];
  }

  isEmpty() {
    if (this._array.length === this._min) {
      return 'Yes, this stack is empty';
    } else {
      return 'No, this stack is not Empty';
    }
  }

  isFull() {
    if (this._array.length === this._max) {
      return 'Yes, this stack is full';
    } else {
      return 'No, this stack is not Full';
    }
  }

  stackPeep() {
    let index = this._array.length -1;
    console.log(this.simpan[index]);
  }

  // implement queue
  queue() {
  }
}

let stack1 = new Stack();

console.log(`Is the stack is empty? ${stack1.isEmpty()}`)
console.log(`Stack size : ${stack1.size()}`);
stack1.stackPush('satu');
stack1.stackPush('dua');
stack1.stackPush('tiga');
console.log(stack1.first());
console.log(stack1.last());
console.log(stack1.isEmpty());
console.log(stack1.isFull());
stack1.stackPop();
console.log(stack1.first());
console.log(stack1.last());
console.log(stack1.isEmpty());
console.log(stack1.isFull());

module.exports = Stack;
