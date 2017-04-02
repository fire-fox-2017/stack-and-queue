class Queue{
  constructor() {
    this.data = [];
    this.maxSize = 6;
  }

  size() {
    return this.maxSize.length;
  }

  QueuePush(x) {
    if(this.isFull()) {
      return console.log(`Queue Penuh, Data Maximal ${this.maxSize}`);
    } else {
      this.data.push(x);
      return console.log(`Berhasil menambah data ${x}`);
    }
  }

  QueueShift() {
    if (this.isEmpty()) {
      return console.log(`Data di Queue Kosong`);
    } else {
      this.data.shift();
      return console.log(`Berhasil  menghapus data ${this.data.shift()}`);
    }
  }

  Queue_first() {
    if (this.data[0] === null) {
      return console.log(`Data Queue Kosong`);
    } else  {
      return console.log(this.data[0]);
    }
  }

  Queue_last() {
      return console.log(this.data[this.data.length - 1]);
  }

  isEmpty() {
    if (this.data.length === 0) {
      return console.log(`Queue Kosong`);
    } 
  }

  isFull() {
    return this.size() == this.maxSize;
  }

  QueuePeep() {
    return this.Queue_last();
  }

}

let DataNew = new Queue();
console.log(`The Queue Kosong? ${DataNew.isEmpty()}`);
DataNew.QueuePush("JavaScript");
DataNew.QueuePush("is just so");
DataNew.QueuePush("cool");
DataNew.QueuePush(15);
console.log(DataNew.data);
DataNew.QueuePeep();
console.log(DataNew.QueueShift());
console.log(DataNew.QueueShift());
console.log(DataNew.QueueShift());
console.log(DataNew.QueueShift());
console.log(`The Queue is empty? ${DataNew.isEmpty()}`);
console.log(DataNew.QueueShift());

module.exports = Queue
