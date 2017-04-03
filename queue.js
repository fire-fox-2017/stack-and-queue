'use strict'

class Queue {
  constructor() {
    this._array = [];
    this._max = 3;
    this._min = 0;
  }

  size() {
    return this._array.length;
  }

  queueInsert(x) {
    if(this._array.length===this._max){
      console.log('Warning: array is full');
    }else {
      this._array.push(x);
    }
  }

  queueRemove() {
    if(this._array.length===this._min){
      console.log('Warning: array is empty');
    }else {
      return this._array.shift()
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
      return 'Yes, this queue is empty';
    } else {
      return 'No, this queue is not Empty';
    }
  }

  isFull() {
    if (this._array.length === this._max) {
      return 'Yes, this queue is full';
    } else {
      return 'No, this queue is not Full';
    }
  }

}

let stack1 = new Queue();

console.log(`Is the queue is empty? ${stack1.isEmpty()}`)
console.log(`Queue size : ${stack1.size()}`);
stack1.queueInsert('satu');
stack1.queueInsert('dua');
stack1.queueInsert('tiga');
console.log(stack1.first());
console.log(stack1.last());
console.log(stack1.isEmpty());
console.log(stack1.isFull());
stack1.queueRemove();
console.log(stack1.first());
console.log(stack1.last());
console.log(stack1.isEmpty());
console.log(stack1.isFull());
