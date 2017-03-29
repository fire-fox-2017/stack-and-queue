'use strict'

class Queue {
  constructor (maxSize = 5) {
    this._MAX_SIZE = maxSize;
    this._queue = [];
  }

  size() {
    return this._queue.length;
  }

  first() {
      if(!this.isEmpty())
        return this._queue[0];
      return "Queue is empty";
  }

  last() {
    if(!this.isEmpty())
      return this._queue[this.size()-1];
    return "Queue is empty";
  }

  queueInsert(item) {
    if(!this.isFull())
      this._queue.push(item);
    else
      console.log("Sorry, Queue is full");
  }

  queueRemove() {
    if(!this.isEmpty())
      return this._queue.shift();
    return "Queue is empty";
  }

  queuePeep() {
    // See the last data
    console.log(this.last());
  }

  isEmpty() {
    if(this.size() == 0)
      return true;
    return false;
  }

  isFull() {
    if(this.size() == this._MAX_SIZE)
      return true;
    return false;
  }

  printQueue() {
    console.log(this._queue);
  }

}

let myQueue = new Queue();
console.log(`The queue is empty? ${myQueue.isEmpty()}`) // true
// true jika jika stack kosong
// false jika jika stack memiliki suatu nilai atau lebih

console.log(myQueue.size());

console.log(myQueue.first());
console.log(myQueue.last());
myQueue.printQueue();


// Tambahkan tiga
myQueue.queueInsert("JavaScript");
myQueue.queuePeep();

myQueue.queueInsert("is just so");
myQueue.queuePeep();

myQueue.queueInsert("cool");
myQueue.queuePeep();

myQueue.printQueue();

console.log(myQueue.queueRemove());
console.log(myQueue.queueRemove());

myQueue.queueInsert("1");
myQueue.queueInsert("2");
myQueue.queueInsert("3");
myQueue.queueInsert("4");
myQueue.queueInsert("5");

myQueue.printQueue();
