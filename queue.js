'use strict'

class Queue {
  constructor () {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }

  queuePush(x) {
    this.queue.push(x);
  }

  queuePop() {
    return this.queue.pop();
  }

  queuePeek() {
    return this.queue[0];
  }

  first() {
    return this.queue[0];
  }

  last() {
    return this.queue[size()-1];
  }

  isEmpty() {
    if (this.size() == 0){
      return "true";
    } else {
      return "false";
    }
  }

  isFull() {
    if (this.size() == this.maxsize){
      return "true";
    } else {
      return "false";
    }
  }

  queuePeep() {
    return this.last();
  }

  queuePush(x){
    return this.queue.push(x);
  }

  queuePop(){
    return this.queue.shift();
  }
}

let myQueue = new Queue()
console.log(`The queue is empty? ${myQueue.isEmpty()}`)
myQueue.queuePush("JavaScript");
myQueue.queuePush("is just so");
myQueue.queuePush("cool");
myQueue.queuePush(15);
myQueue.queuePeek();
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());
console.log(myQueue.queuePop());
console.log(`The queue is empty? ${myQueue.isEmpty()}`)
console.log(myQueue.queuePop())
