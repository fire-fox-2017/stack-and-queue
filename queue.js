'use strict'

class Queue {
  constructor () {
    this.queue = [];
    this.size = [5];
  }

    queuePush(x) {
      if (this.isFull()){
        console.log("Queue penuh!!");
      }else{
        console.log(this.queue.push(x))
      }
    }

    queuePop() {
      if (this.isEmpty()){
        console.log("Queue kosong!!");
      }else {
        console.log(this.queue.shift());
      }
    }

    first() {
      console.log(this.queue[0]);
    }

    last() {
      console.log(this.queue[this.queue.length-1]);
    }

    isEmpty() {
      if(this.queue.length == 0){
        return true;
      }else{
        return false;
      }
    }

    isFull() {
      if(this.size == this.queue.length){
        return true;
      }else {
        return false
      }
    }

    stackPeek() {
      console.log(this.queue[this.queue.length-1])
    }
  }

  let MyQueue = new Queue();

  console.log(MyQueue.isEmpty());

  MyQueue.queuePush('JavaScript');
  MyQueue.queuePush('is just so');
  MyQueue.queuePush('cool');
  MyQueue.queuePush(15);

  MyQueue.stackPeek();

  MyQueue.queuePop();
  MyQueue.queuePop();
  MyQueue.queuePop();
  MyQueue.queuePop();

  console.log(MyQueue.isEmpty());
