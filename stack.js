'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.stack=[];
    this.maxSize=5;
  }
  stackPush(x) {
    if(this.isFull()){
      console.log("Gagal Menambahkan Karena Stack Penuh!")
    }else {
      this.stack.push(x);
    }
  }
  stackPop() {
    if(this.isEmpty()){
      console.log("Gagal Menghapus karena Stack Kosong!");
    }else {
      this.stack=this.stack.slice(0,this.stack.length-1);
    }
  }
  stackPeek() {
    console.log(this.stack[this.stack.length-1]);
  }
  first() {
    console.log(this.stack[this.stack.length-1]) ;
  }
  last() {
    console.log(this.stack[0]);
  }
  isEmpty() {
    if (this.stack.length==0) {
      return true;
    }else {
      return false;
    }
  }
  isFull() {
    if (this.maxSize==this.stack.length) {
      return true;
    }else {
      return false;
    }
  }
}
let myStack=new Stack();

console.log(myStack.isEmpty());

myStack.stackPush("JavaScript");
myStack.stackPush("is just so");
myStack.stackPush("cool");
myStack.stackPush(15);

myStack.stackPeek();

myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();

console.log(myStack.isEmpty());

myStack.stackPop();


module.exports = Stack
