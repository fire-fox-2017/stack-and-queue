'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.arr=[];
    this.max=5;
  }

  size() {
    return this.arr.length;
  }

  stackPush(x) {
    if (this.arr.length <= this.max){
      this.arr.push(x);
      return this.arr;
    } else {
      return "Stack is already full!";
    }
  }

  stackPop() {
    this.arr.pop();
    return this.arr;
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length-1];
  }

  isEmpty() {
    if (this.arr.length === 0){
      return true;
    }
    else {
      return false;
    }
  }

  isFull() {
    if (this.arr.length === this.max){
      return true;
    } else {
      return false;
    }
  }

  stackPeep() {
    return this.arr[this.arr.length-1];
  }

}
let myStack = new Stack()
console.log(`The stack is empty? ${myStack.isEmpty()}`)
myStack.stackPush("Javascript")
myStack.stackPush("is just so")
myStack.stackPush("cool")
myStack.stackPush(15)
myStack.stackPeep()
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(`The stack is empty? ${myStack.isEmpty()}`)
console.log(myStack.stackPop())
module.exports = Stack
