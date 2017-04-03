'use strict'

class Queue {
  constructor() {
    this.queueArray = [];
    this.MAX_SIZE = 10;
  }

  queueSize() {
    return this.queueArray.length;
  }

  queuePush(x) {
    if (this.isFull()) {
      console.log("The queue is full.");
    } else {
      this.queueArray.push(x);
    }
  }

  queuePop() {
    if (this.isEmpty()) {
      console.log("The queue is empty.");
    } else {
      let temp = this.queueArray.shift();
      return temp;
    }
  }

  queueFirst() {
    return this.queueArray[0];
  }

  queueLast() {
    return this.queueArray[this.queueSize() - 1]
  }

  isEmpty() {
    return this.queueSize() == 0;
  }

  isFull() {
    return this.queueSize() == this.MAX_SIZE;
  }

  queuePeep() {
    return this.queueLast();
  }
}

let myQueue = new Queue();
console.log(`The Queue is empty? ${myQueue.isEmpty()}`);
myQueue.queuePush("JavaScript");
myQueue.queuePush("is just so");
myQueue.queuePush("cool");
myQueue.queuePush(15);
myQueue.queuePeep();
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());
console.log(`The Queue is empty? ${myQueue.isEmpty()}`);
console.log(myQueue.queuePop());

module.exports = Queue
