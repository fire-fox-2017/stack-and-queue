'use strict'

class Queue {
  constructor() {
    this.queue=[];
    this.maxSize=5;
  }
  queuePush(x) {
    if(this.isFull()){
      console.log("Gagal Menambahkan Karena Queue Penuh!")
    }else {
      this.queue.push(x);
    }
  }
  queuePop() {
    if(this.isEmpty()){
      console.log("Gagal Menghapus karena Queue Kosong!");
    }else {
      this.queue.shift();
    }
  }
  queuePeek() {
    console.log(this.queue[0]);
  }
  first() {
    console.log(this.queue[0]) ;
  }
  last() {
    console.log(this.queue[this.queue.length-1]);
  }
  isEmpty() {
    if (this.queue.length==0) {
      return true;
    }else {
      return false;
    }
  }
  isFull() {
    if (this.maxSize==this.queue.length) {
      return true;
    }else {
      return false;
    }
  }
}

let myQueue=new Queue();

console.log(myQueue.isEmpty());

myQueue.queuePush("JavaScript");
myQueue.queuePush("is just so");
myQueue.queuePush("cool");
myQueue.queuePush(15);

myQueue.queuePeek();

myQueue.queuePop();
myQueue.queuePop();
myQueue.queuePop();

console.log(myQueue.isEmpty());


myQueue.queuePop();


module.exports = Queue
