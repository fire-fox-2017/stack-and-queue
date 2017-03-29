'use strict'

// Your code implementation
class Stack {
  constructor() {
    this._stack = [];
  }

  size() {
    return this._stack.length;
  }

  stackPush(x) {
    this._stack.push(x);
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
    // full nya size berapa?
  }

  stackPeep() {
    // See the last data
    console.log(this.first());
  }

  // implement queue
  queue() {
  }
}


// Buat stack baru
let myStack = new Stack()

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


// Lihat, kita menghapus data sata per satu
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())

// cek lagi apakah stack-nya beneran kosong?
console.log(`The stack is empty? ${myStack.isEmpty()}`) // false

// Coba hapus stack kosong, apa yang terjadi?
console.log(myStack.stackPop())



module.exports = Stack
