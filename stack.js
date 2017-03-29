'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.stack = [];
    this.maxsize = 5;
  }

  size() {
    return this.stack.length;
  }

  stackPush(x) {
    this.stack.push(x);
  }

  stackPop() {
    return this.stack.pop();
  }

  stackPeek() {
    return this.stack[0];
  }

  first() {
    return this.stack[0];
  }

  last() {
    return this.stack[size()-1];
  }

  isEmpty() {
    if (this.size() == 0){
      return "true";
    } else {
      return "false";
    }
  }

  isFull() {
    if (this.size() == this.maxsize){
      return "true";
    } else {
      return "false";
    }
  }

  stackPeep() {
    return this.last();
  }

  // implement queue
  queue() {

  }
}

let myStack = new Stack()
console.log(`The stack is empty? ${myStack.isEmpty()}`)
myStack.stackPush("JavaScript");
myStack.stackPush("is just so");
myStack.stackPush("cool");
myStack.stackPush(15);
myStack.stackPeek();
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(`The stack is empty? ${myStack.isEmpty()}`)
console.log(myStack.stackPop())

module.exports = Stack
