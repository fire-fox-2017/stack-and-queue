'use strict'

// Your code implementation
class Stack {
  constructor(MAX_SIZE = 5) {
    this._max = MAX_SIZE;
    this._stack = [];
  }


  size() {
    return this._stack.length;
  }

  stackPush(x) {
    if (this._stack.length < this._max){
    this._stack.push(x);
  }
  else {
    console.log("sory uda full bro")
  }
  }

  stackPop() {
    if (this._stack.length > 0){
      return this._stack.pop();
    }
      else{
        console.log("wadu uda kosong bro gak ada yang mau di pop")
      }
  }

  first() {
    if (this._stack.length > 0){
    return this._stack[this.size()-1];
    }
    else {
      console.log("uda kosong gan mau cari opo?")
    }
  }

  last() {
    if (this._stack.length > 0){
      this._stack[0];
    }
    else {
      console.log("uda kosong gan mau cari opo?")
    }
  }

  isEmpty() {
    if (this._stack.length === 0){
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

  stackPeep() {
    console.log(this.first())
  }

  // implement queue
  queue() {
  }

  getMax(newMax){
    return this._max;
  }

  setMax(newMax){
    this._max = newMax;
  }
}
let myStack = new Stack(4);

// cek apakah stack sudah ada isi atau kosong?
console.log(`The stack is empty? ${myStack.isEmpty()}`) // true
// true jika jika stack kosong
// false jika jika stack memiliki suatu nilai atau lebih

console.log(myStack.size());

// Tambahkan tiga
myStack.stackPush("JavaScript")

myStack.stackPush("is just so")

myStack.stackPush("cool")

// Karna stack menggunakan array,
// kita bisa add tipe data apapun seperti string dan integer
myStack.stackPush(15)

// Lihat data paling atas
myStack.stackPeep() // 15

console.log(myStack.size());

console.log(`The stack is full? ${myStack.isFull()}`) // true

myStack.stackPush("lala")
myStack.stackPeep()
myStack.stackPush("baba")
myStack.stackPeep()
myStack.stackPush("ccaa")
myStack.stackPeep()


console.log(myStack.size());

console.log(myStack.stackPop())
myStack.stackPush("ccaa")
myStack.stackPeep()

console.log(myStack.getMax());
myStack.setMax(7);
console.log(myStack.getMax());

myStack.stackPush("a")
myStack.stackPush("b")
myStack.stackPush("c")
myStack.stackPeep()

console.log(myStack.size());

module.exports = Stack
