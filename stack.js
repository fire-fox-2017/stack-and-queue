'use strict'

// Your code implementation
class Stack {
    constructor() {
        this.max_size = 5;
        this.objStack = [];
    }

    showAll() {
        console.log('Data di stack : ' + this.objStack);
    }

    size() {
        console.log('Ukuran stack : ' + this.objStack.length);
    }

    stackPush(x) {
      if(this.objStack.length === this.max_size){
        console.log('Stack Penuh');
      } else {
        this.objStack.push(x);
        console.log('Berhasil menambah ' + x);
      }
    }

    stackPop() {
        this.objStack.pop();
    }

    first() {
        console.log(this.objStack[this.objStack.length-1]);
    }

    last() {
        if (this.objStack[0] === null) {
            console.log('Stack Kosong');
        } else {
            console.log(this.objStack[0]);
        }
    }

    isEmpty() {
        if (this.objStack.length !== this.max_size) {
            console.log('Stack Kosong');
        } else {
            console.log('Stack Penuh');
        }
    }

    isFull() {
        if (this.objStack.length === this.max_size) {
            console.log('Stack Penuh');
        } else {
            console.log('Stack Kosong');
        }
    }

    stackPeep() {
        console.log(this.objStack[this.objStack.length-1]);
    }

}

let stack1 = new Stack;
stack1.stackPush('Mangga');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.isFull();
stack1.isEmpty();

// module.exports = Stack
