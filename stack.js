 'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.data = [];
    this.maxSize = 6;
  }

  size() {
    return this.maxSize.length;
  }

  stackPush(x) {
    if(this.data.length === this.maxSize ) {
      return console.log(`Stack Penuh, Data Maximal ${this.maxSize}`);
    } else {
      this.data.push(x);
      return console.log(`Berhasil menambah data ${x}`);
    }
  }

  stackPop() {
    if (this.data.length === 0) {
      return console.log(`Data di Stak Kosong`);
    } else {
      return console.log(`Berhasil  menghapus data ${this.data.pop()}`);
    }
  }

  first() {
    console.log(this.data[this.data.length - 1]);
  }

  last() {
    if (this.data[0] === null) {
      return console.log(`Data Stack Kosong`);
    } else  {
      return console.log(this.data[0]);
    }
  }

  isEmpty() {
    if (this.data.length === 0) {
      return console.log(`Data Kosong`);
    } else {
      return console.log(`Stack tidak kosong, Jumlah data : ${this.data.length}`);
    }
  }

  isFull() {
    if (this.data.length === this.maxSize) {
      return console.log(`Stak Penuh!!`);
    } else if(this.data.length === 0){
       return console.log(`Data di Stack Kosong`);
    } else {
        return console.log(`Stack Belum Penuh, Data di dalam stack : ${this.data.length}`);
    }
  }

  stackPeep() {
    return this.data[this.data.length - 1];
  }

  // // implement queue
  // queue() {
  // }
}


let mobil = new Stack;
mobil.isEmpty();
mobil.stackPush('Fortuner');
console.log(mobil.data);
mobil.stackPush('Lamborgini');
console.log(mobil.data);
mobil.stackPush('Ferary');
console.log(mobil.data);

mobil.isEmpty();
mobil.stackPush('Lexus');
console.log(mobil.data);
mobil.stackPush('Jazz');
console.log(mobil.data);
mobil.stackPush('Avanza');
console.log(mobil.data);
mobil.stackPush('xenia');
console.log(mobil.data);
mobil.stackPush('Luxio');
console.log(mobil.data);

mobil.isFull();
mobil.stackPop();
console.log(mobil.data);


module.exports = Stack
