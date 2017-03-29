'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.items = [];
    this.maxSize = 5;
  }

  size() {
    return this.items.length;
  }

  stackPush(x) {
    if (this.items.length === this.maxSize) {
      return console.log("Error, stack is in its max size.");
    } else {
      this.items.unshift(x);
    }
  }

  stackPop() {
    if (this.items.length > 0) {
      this.items.shift();
    } else {
      return console.log("Error, no item in the stack.");
    }
  }

  first() {
    return console.log(this.items[this.items.length-1]);
  }

  last() {
    return console.log(this.items[0]);
  }

  isEmpty() {
    if (this.items.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  isFull() {
    if (this.items.length === this.maxSize) {
      return true;
    } else {
      return false;
    }
  }

  stackPeek() {
    return this.last();
  }

  // implement queue
  // queue() {
  // }
}

var warna = new Stack();
warna.stackPop();
warna.stackPush("merah");
console.log(warna.items);
warna.stackPush("biru");
console.log(warna.items);
warna.stackPush("kuning");
console.log(warna.items);
warna.stackPush("hijau");
console.log(warna.items);
warna.first(); // merah
warna.last(); // hijau
console.log(warna.isEmpty()); // false
warna.stackPush("ungu");
console.log(warna.isFull()); // true
console.log(warna.items);
warna.stackPush("coklat");
console.log(warna.items);
warna.stackPop();
console.log(warna.items);
warna.stackPeek();




module.exports = Stack
