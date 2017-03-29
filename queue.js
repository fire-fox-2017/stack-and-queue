'use strict'

class Queue {
  constructor() {
    this.arr=[];
    this.max=5;
  }

  size() {
    return this.arr.length;
  }

  queueInsert(x) {
    if (this.arr.length <= this.max){
      this.arr.push(x);
      return this.arr;
    } else {
      return "Queue is already full!";
    }
  }

  queueRemove() {
    this.arr.shift();
    return this.arr;
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length-1];
  }

  isEmpty() {
    if (this.arr.length === 0){
      return true;
    }
    else {
      return false;
    }
  }

  isFull() {
    if (this.arr.length === this.max){
      return true;
    } else {
      return false;
    }
  }

  queuePeep() {
    return this.arr[this.arr.length-1];
  }
}

let myQueue = new Queue()
console.log(`The queue is empty? ${myQueue.isEmpty()}`)
myQueue.queueInsert("Javascript")
myQueue.queueInsert("is just so")
myQueue.queueInsert("cool")
myQueue.queueInsert(15)
myQueue.queuePeep()
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(`The queue is empty? ${myQueue.isEmpty()}`)
console.log(myQueue.queueRemove())
