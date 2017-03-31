'use strict'
// LIFO
class Stack {
  constructor () {
    this.arr = []
    this.MAX_SIZE = 5
  }

  stackPush (x) {
    if (this.isFull()) {
      console.log(`Stack is full, you can't add more stack`);
    } else {
      this.arr.push(x)
    }
    console.log(this.arr);
  }

  stackPop () {
    return this.arr.pop()
  }

  stackPeek () {
    return this.arr
  }

  isEmpty () {
    if (this.arr.length == 0) {
      return `yes it's empty`
    } else {
      return `no, it's: ${this.stackPeek()}`
    }
  }

  isFull() {
    if (this.arr.length >= this.MAX_SIZE) {
      return true
    } else {
      return false
    }
  }
}

let myStack = new Stack()

console.log(`The stack is empty? ${myStack.isEmpty()}`);

myStack.stackPush(15)
myStack.stackPush('hacktiv8')
myStack.stackPush('full stack')
myStack.stackPush('web developer')
myStack.stackPush('javascript')
myStack.stackPush('HTML')
console.log(myStack.stackPeek())

console.log(myStack.isFull());
console.log(`The stack is empty? ${myStack.isEmpty()}`);

console.log(`removing stack: ${myStack.stackPop()}`);
console.log(`removing stack: ${myStack.stackPop()}`);
console.log(`removing stack: ${myStack.stackPop()}`);
console.log(`removing stack: ${myStack.stackPop()}`);
// console.log(myStack);
myStack.stackPush('HTML')
console.log(myStack.stackPeek());