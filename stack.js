'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.stackArray = [];
    this.MAX_SIZE = 10;
  }

  stackSize() {
    return this.stackArray.length;
  }

  stackPush(x) {
    if (this.isFull()) {
      console.log("The stack is full.");
    } else {
      this.stackArray.push(x);
    }
  }

  stackPop() {
    if (this.isEmpty()) {
      console.log("The stack is empty.");
    } else {
      let temp = this.stackArray.pop();
      return temp;
    }
  }

  stackFirst() {
    return this.stackArray[0];
  }

  stackLast() {
    return this.stackArray[this.stackSize() - 1]
  }

  isEmpty() {
    return this.stackSize() == 0;
  }

  isFull() {
    return this.stackSize() == this.MAX_SIZE;
  }

  stackPeep() {
    return this.stackLast();
  }

}

let myStack = new Stack();
console.log(`The stack is empty? ${myStack.isEmpty()}`);
myStack.stackPush("JavaScript");
myStack.stackPush("is just so");
myStack.stackPush("cool");
myStack.stackPush(15);
myStack.stackPeep();
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(`The stack is empty? ${myStack.isEmpty()}`);
console.log(myStack.stackPop());

module.exports = Stack
