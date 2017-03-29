'use strict'

class Queue {
  constructor () {
    this.antrian = []
    this.kapasitasAntrian = 5
  }

  size() {
    return this.kapasitasAntrian;
  }

  insert (insert) {
    if(this.antrian.length < this.kapasitasAntrian){
      this.antrian.push(insert)
    } else {
      console.log("maaf antrian penuh")
    }

  }

  remove () {
    this.antrian.shift();
  }

  first() {
    return `first : ${this.antrian[0]}`
  }

  last() {
    return `last : ${this.antrian[this.antrian.length-1]}`
  }

  isEmpty() {
    return this.antrian.length == 0
  }

  isFull() {
    return this.antrian.length == this.kapasitasAntrian;
  }

  queuePeep() {
    return this.antrian.length;
  }
}

let fifo = new Queue();
fifo.insert("pertama");
fifo.remove();
fifo.insert(2);
fifo.insert(true);
console.log(`apakah antriannya kosong? ${fifo.isEmpty()}`);
fifo.insert("hai");
fifo.insert("tambah dong");
console.log(`apakah antriannya penuh? ${fifo.isFull()}`);
fifo.insert("masih bisa ga?");
fifo.insert("satu lagi ya");
console.log(fifo.antrian);
