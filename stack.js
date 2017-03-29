'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.simpan = []
    this.maxSize = 6
  }

  size() {
    return this.simpan.length
  }

  stackPush(x) {
    this.simpan.push(x)
  }

  stackPop() {
    return this.simpan.pop()
  }

  first() {
  }

  last() {
  }

  isEmpty() {
    if(this.simpan.length == 0){
      return true
    } else {
      return false
    }
  }

  isFull() {
    if (this.simpan.length == this.maxSize){
      return true
    } else {
      return false
    }
  }

  stackPeek() {
    let find = this.simpan.length -1
    console.log(this.simpan[find])
  }

  // implement queue
  queue() {
  }
}

let myStack = new Stack()
console.log(`The stack is empty? ${myStack.isEmpty()}`); //true

myStack.stackPush("Javascript")
myStack.stackPush("is just so")
myStack.stackPush("cool")
// console.log(`The stack is empty? ${myStack.isEmpty()}`);

// karna stack menggunakan array,
// kita bisa add tipe data apapun seperti string dan integer
myStack.stackPush(15)

myStack.stackPeek() //15

/*kita menghapus data satu per satu*/
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

/*kita cek lagi apakah stack beneran kosong*/
console.log(`The stack is empty? ${myStack.isEmpty()}`); //false

// coba hapus stack kosong, apa yang terjadi?
console.log(myStack.stackPop());



module.exports = Stack
