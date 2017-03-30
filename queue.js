'use strict'

class Queue {
  constructor () {
    this.max_size = 4;
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  queueInsert(x) {
    if (this.array.length === this.max_size) {
      console.log("Full");
    } else {
      console.log(x);
      this.array.unshift(x);
    }
  }

  queueRemove() {
    if (this.array.length === 0) {
      console.log("Empty");
    } else {
      this.array.shift();
    }
  }

  first() {
    return this.array[0];
  }

  last() {
    return this.array[this.array.length-1];
  }

  isEmpty() {
    if (this.array.length === 0) {
      return 'Empty';
    } else {
      return 'Not Empty';
    }
  }

  isFull() {
    if (this.array.length === this.max_size) {
      return 'Full';
    } else {
      return 'Not Full';
    }
  }
}

let queue = new Queue()
console.log(queue.size());
queue.queueInsert('jkjkj');
queue.queueInsert('bgbgbg');
queue.queueInsert('jujuj');
console.log(queue.array);
queue.queueRemove();
console.log(queue.array);
console.log(queue.first());
console.log(queue.last());
console.log(queue.isEmpty());
console.log(queue.isFull());
