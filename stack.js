'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.stack = [];
    this.size = [5];
  }


  stackPush(x) {
    if (this.isFull()){
      console.log("Stack penuh!!");
    }else{
      console.log(this.stack.push(x))
    }
  }

  stackPop() {
    if (this.isEmpty()){
      console.log("Stack kosong!!");
    }else {
      console.log(this.stack= this.stack.slice(0, this.stack.length-1))
    }
  }

  first() {
    console.log(this.stack[this.stack-1]);
  }

  last() {
    console.log(this.stack[0]);
  }

  isEmpty() {
    if(this.stack.length == 0){
      return true;
    }else{
      return false;
    }
  }

  isFull() {
    if(this.size == this.stack.length){
      return true;
    }else {
      return false
    }
  }

  stackPeek() {
    console.log(this.stack[this.stack.length-1])
  }
}

let MyStack = new Stack();

console.log(MyStack.isEmpty());

MyStack.stackPush('JavaScript');
MyStack.stackPush('is just so');
MyStack.stackPush('cool');
MyStack.stackPush(15);

MyStack.stackPeek();

MyStack.stackPop();
MyStack.stackPop();
MyStack.stackPop();
MyStack.stackPop();

console.log(MyStack.isEmpty());

// MyStack.stackPop();
//   // implement queue
//   queue() {
//   }
// }

module.exports = Stack
