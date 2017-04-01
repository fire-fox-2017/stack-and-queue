'use strict'

class Queue {
  constructor () {
    this.constBox = [];
    this.maxSize = 5;
  }

  queueInsert(x) {
    if(this.constBox.length === this.maxSize){
      console.log(`You cannot input again, this max size of ${this.constBox.length} !`)
    } else {
      this.constBox.push(x);
      console.log(`value of ${x} is added!`);
    }
  }

  queueRemove() {
    if (this.constBox.length === 0){
      console.log(`Not have any data list, this is ${this.constBox.length} or empty`);
    } else {
      let isRemove = this.constBox.shift();
      console.log(`The ${isRemove} is removed!`);
      return isRemove;
    }
  }

  print() {
    console.log(this.constBox);
  }
}

let que = new Queue();

que.queueInsert('makan1');
que.queueInsert('makan2');
que.queueInsert('makan3');
que.queueInsert('makan4');
que.queueInsert('makan5');
que.queueInsert('makan6');
que.print();
que.queueRemove();
que.queueInsert('makan5');
que.print();
