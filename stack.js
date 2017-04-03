'use strict'

// Your code implementation
class Stack {
  constructor() {
  this.MAX_SIZE = 5;
  this.EMPTY = 0;
  this.arrStack = [];
  }
  size() {
    return this.arrStack.length;
  }

  stackPush(data) {
    if(this.isFull()){
      return "Stack Full !!!";
    }else{
     return this.arrStack.push(data);
    }
  }

  stackPop() {
    if(this.isEmpty()){
      return "Stack Empty !!!";
    }else{
    return this.arrStack.pop();
    }
  }

  first() {
    return this.arrStack[0];
  }

  last() {
    return this.arrStack[this.size()-1];
  }

  isEmpty() {
    return this.size() == this.EMPTY;
  }

  isFull() {
    return this.size() == this.MAX_SIZE;
  }
  stackPeek(){
    return this.arrStack[this.size()-1];
  }

  // implement queue
  queue() {
  }

}
let myStack = new Stack();
console.log(`The stack is empty? ${myStack.isEmpty()}`);
console.log(myStack.stackPush("JavaScript")+" "+myStack.arrStack);
console.log(myStack.stackPush("Hacktiv8")+" "+myStack.arrStack);
console.log(myStack.stackPush("Fire Fox")+" "+myStack.arrStack);
console.log(myStack.size());
console.log(myStack.stackPeek());
console.log(`The stack is empty? ${myStack.isEmpty()}`);
console.log(myStack.stackPush(15)+" "+myStack.arrStack);
console.log(myStack.stackPush(1)+" "+myStack.arrStack);
console.log(myStack.stackPush(2)+" \nLast data is : "+myStack.arrStack);

console.log(myStack.stackPeek());
console.log(myStack.size());
console.log("Data pop : "+myStack.stackPop()+" \nLast data is : "+myStack.arrStack);
console.log("Data pop : "+myStack.stackPop()+" \nLast data is : "+myStack.arrStack);
console.log("Data pop : "+myStack.stackPop()+" \nLast data is : "+myStack.arrStack);
console.log("Data pop : "+myStack.stackPop()+" \nLast data is : "+myStack.arrStack);
console.log("Data pop : "+myStack.stackPop()+" \nLast data is : "+myStack.arrStack);
console.log("Data pop : "+myStack.stackPop()+" \nLast data is : "+myStack.arrStack);
console.log(myStack.arrStack);
console.log(`The stack is empty? ${myStack.isEmpty()}`);
module.exports = Stack
