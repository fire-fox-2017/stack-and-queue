'use strict'

// Your code implementation
class Stack {
  constructor(maxSize = 5) {
    this._MAX_SIZE = maxSize;
    this._stack = [];
  }

  size() {
    return this._stack.length;
  }

  stackPush(x) {
    if(!this.isFull())
      this._stack.push(x);
    else
      console.log("Cannot Push, Stack is already full");
  }

  stackPop() {
    if(!this.isEmpty())
      return this._stack.pop();
    return "Cannot Pop, Stack is already empty";
  }

  first() {
    // check isEmpty()
    if(!this.isEmpty())
      return this._stack[this.size()-1];
    return "Stack is empty"

  }

  last() {
    if(!this.isEmpty())
      return this._stack[0];
    return "Stack is empty"
  }

  isEmpty() {
    if(this._stack.length === 0)
      return true;
    return false;
  }

  isFull() {
    // console.log("isfull " + this._MAX_SIZE);
    if(this.size() >= this._MAX_SIZE)
      return true;
    return false;
  }

  stackPeep() {
    // See the last data
    console.log(this.first());
  }

  getMax(newMax) {
    return this._MAX_SIZE;
  }
  setMax(newMax) {
    this._MAX_SIZE = newMax;
  }

  // implement queue
  queue() {
  }
}


// Buat stack baru
let myStack = new Stack();

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


/*
// Lihat, kita menghapus data sata per satu
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())

// cek lagi apakah stack-nya beneran kosong?
console.log(`The stack is empty? ${myStack.isEmpty()}`) // false

// Coba hapus stack kosong, apa yang terjadi?
console.log(myStack.stackPop())
*/


module.exports = Stack
