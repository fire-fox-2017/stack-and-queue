'use strict'

class Queue {
  constructor () {
    this.MAX_SIZE = 5;
    this.EMPTY = 0;
    this.arrQueue = [];
  }
  size(){
    return this.arrQueue.length;
  }
  queuePush(data){
    if(this.isFull()){
      console.log("Queue is FUll!!!")
    }else{
    return this.arrQueue.push(data);
    }
  }
  queueShift(){
    if(this.isEmpty()){
      console.log("Queue is Empty!!!");
    }else{
    return this.arrQueue.shift();
    }
  }
  isFull(){
    return this.size() == this.MAX_SIZE;
  }
  isEmpty(){
    return this.size() == this.EMPTY;
  }
  first(){
    return this.arrQueue[0];
  }
  last(){
    return this.arrQueue[this.size() - 1];
  }
}

let myQueue = new Queue();
console.log(`The queue is empty? ${myQueue.isEmpty()}`);
myQueue.queuePush("JavaScript");
console.log(myQueue.arrQueue);
myQueue.queuePush("is just so");
console.log(myQueue.arrQueue);
myQueue.queuePush("cool");
console.log(myQueue.arrQueue);
myQueue.queuePush(15);
console.log(myQueue.arrQueue);
myQueue.queuePush(1);
console.log(myQueue.arrQueue);
myQueue.queuePush(2);
console.log(myQueue.arrQueue);

console.log(myQueue.queueShift());
console.log(myQueue.arrQueue);
console.log(myQueue.queueShift());
console.log(myQueue.arrQueue);
console.log(myQueue.queueShift());
console.log(myQueue.arrQueue);
console.log(myQueue.queueShift());
console.log(myQueue.arrQueue);
console.log(myQueue.queueShift());
console.log(myQueue.arrQueue);
console.log(`The queue is empty? ${myQueue.isEmpty()}`);
