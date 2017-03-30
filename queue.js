'use strict'

class Queue {
  constructor (MAX_SIZE = 5) {
    this._max = MAX_SIZE;
    this._queue = [];
  }


  size() {
    return this._queue.length;
  }

  queuePush(x) {
    if (this._queue.length < this._max){
    this._queue.push(x);
  }
  else {
    console.log("sory uda full bro")
  }
  }

  queueShift() {
    if (this._queue.length > 0){
      return this._queue.shift();
    }
      else{
        console.log("wadu uda kosong bro gak ada yang mau di pop")
      }
  }

  last() {
    if (this._queue.length > 0){
    return this._queue[this.size()-1];
    }
    else {
      console.log("uda kosong gan mau cari opo?")
    }
  }

  first() {
    if (this._queue.length > 0){
      this._queue[0];
    }
    else {
      console.log("uda kosong gan mau cari opo?")
    }
  }

  isEmpty() {
    if (this._queue.length === 0){
      return true;
    }
    else {
      return false;
    }
  }

  isFull() {
    if(this.size() >= this._max){
      return true;
    }
    else {
      return false;
    }
  }

  queuePeep() {
    console.log(this.last())
  }

  getMax(newMax){
    return this._max;
  }

  setMax(newMax){
    this._max = newMax;
  }
  }
  let myQueue = new Queue(4);

  // cek apakah stack sudah ada isi atau kosong?
  console.log(`The Queue is empty? ${myQueue.isEmpty()}`) // true
  // true jika jika stack kosong
  // false jika jika stack memiliki suatu nilai atau lebih

  console.log(myQueue.size());

  // Tambahkan tiga
  myQueue.queuePush("JavaScript")

  myQueue.queuePush("is just so")

  myQueue.queuePush("cool")

  // Karna stack menggunakan array,
  // kita bisa add tipe data apapun seperti string dan integer
  myQueue.queuePush(15)

  // Lihat data paling atas
  myQueue.queuePeep() // 15

  console.log(myQueue.size());

  console.log(`The Queue is full? ${myQueue.isFull()}`) // true

  myQueue.queuePush("lala")
  myQueue.queuePeep()
  myQueue.queuePush("baba")
  myQueue.queuePeep()
  myQueue.queuePush("ccaa")
  myQueue.queuePeep()


  console.log(myQueue.size());

  console.log(myQueue.queueShift())
  myQueue.queuePush("ccaa")
  myQueue.queuePeep()

  console.log(myQueue.getMax());
  myQueue.setMax(7);
  console.log(myQueue.getMax());

  myQueue.queuePush("a")
  myQueue.queuePush("b")
  myQueue.queuePush("c")
  myQueue.queuePeep()

  console.log(myQueue.size());

  module.exports = Queue
