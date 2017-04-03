'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.arrayStack=[];
    this.MAX_SIZE=0;
  }

  size() {
    return 5;
  }

  stackPush(x) {
    if(this.isFull()===false)
    {
      this.arrayStack.push(x);
    }
    else {
      return console.log("STACK PENUH!");
    }
  }

  stackPop() {
    if(this.arrayStack.length===0)
    console.log("Tumpukan Kosong! Tidak Dapat Melakukan Aksi ini")
    else
    return this.arrayStack.pop();
  }

  first() {
    return this.arrayStack[0];
  }

  last() {
    return this.arrayStack[this.arrayStack.length-1];
  }

  isEmpty() {
    if(this.arrayStack.length===0)
    return true;
    else {
      return false;
    }
  }

  isFull() {
    if(this.arrayStack.length===this.MAX_SIZE)
    return true;
    else {
      return false;
    }
  }

  stackPeek() {
    return console.log(this.last());
  }

  setMaxStack(x)
  {
    this.MAX_SIZE=x;
  }

  getMaxStack()
  {
    return this.MAX_SIZE;
  }
  // implement queue
  queue() {
  }
}

let myStack = new Stack();
myStack.setMaxStack(5);
//console.log(myStack.getMaxStack());
//console.log(`The Stack is Empty ? ${myStack.isEmpty()}`);
myStack.stackPush("JavaScript");
myStack.stackPush("is just so");
myStack.stackPush("cool");
myStack.stackPush(15);
myStack.stackPush(15);
// myStack.stackPeek();
// console.log(myStack.stackPop());
// console.log(myStack.stackPop());
// console.log(myStack.stackPop());
// console.log(myStack.stackPop());
// console.log(`The Stack is Empty ? ${myStack.isEmpty()}`);

module.exports = Stack
