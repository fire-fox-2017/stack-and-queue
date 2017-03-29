'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.jar = [];
    this.jarCapacity = 10;
  }

  size() {
    return this.jarCapacity;
  }

  stackPush(x) {
    if(this.jar.length<this.jarCapacity){
      this.jar.push(x);
      console.log(`[${x}] dimasukkan ke dalam Jar!`)
    }
    else {
      console.log("Jar Sudah Penuh!")
    }
  }

  stackPop() {
    return this.jar.pop();
  }

  first() {
    return `first : ${this.jar[0]}`
  }

  last() {
    return `last : ${this.jar[this.jar.length-1]}`
  }

  isEmpty() {
    return this.jar.length == 0
  }

  isFull() {
    return this.jar.length == this.jarCapacity;
  }

  stackPeep() {
    return this.jar.length;
  }

  // implement queue
  queue() {
  }
}

let myStack = new Stack();
console.log(`is the jar empty? ${myStack.isEmpty()}`);
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool');
myStack.stackPush(15);
myStack.stackPush(true);
myStack.stackPush('error in here');
myStack.stackPush('error again');
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool');
myStack.stackPush(15);
myStack.stackPush(true);
console.log(`isi jar sementara :${myStack.stackPeep()}`);
//console.log(myStack.stackPop());
console.log(myStack.jar);

module.exports = Stack
