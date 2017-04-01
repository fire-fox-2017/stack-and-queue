'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.constBox = []; //declare an array object
    this.maxSize = 5; // declare maxSize as 5 of length
  }

// define the length of constBox
  size() {
    console.log(this.constBox.length);
    return this.constBox.length;
  }

// for adding of array data
  stackPush(x) {
    if (this.maxSize === this.constBox.length){
      console.log(`Warning!, just availble of ${this.maxSize}. current capasity is  ${this.constBox.length}`);
    } else {
      this.constBox.push(x);
      console.log(`${x} is added`);
    }
  }

//remove the last arr
  stackPop() {
    if (this.constBox.length === 0){
      console.log(`Data is empty now!, you cannot delete data`);
    } else {
      let deleted = this.constBox.pop();
      console.log(`${deleted} is deleted!`);
    }
  }
//print the first of stack arr
  first() {
    console.log(`The first of data is ${this.constBox[0]}`);
  }

//print the last of stack of array
  last() {
    console.log(`The last of data is ${this.constBox[this.constBox.length - 1]}`);
  }

//function for checking if empty or not
  isEmpty() {
    let emptyData = this.constBox.length === 0 ? true : false;
    console.log(emptyData);
    return emptyData;
  }

//function for checking if full or not
  isFull() {
    let fullData = this.constBox.length === this.maxSize ? `The Data is full, current is ${this.constBox.length}` :
                    `The Data is availabe! you can create any ${this.maxSize - this.constBox.length}`;
    console.log(fullData);
    return fullData;
  }

  stackPeep() {
    console.log(this.constBox[this.constBox.length - 1]);
    return this.constBox[this.constBox.length - 1];
  }

  // implement queue
  queue() {

  }
}

let stackArr = new Stack();

stackArr.stackPush(25);
stackArr.stackPush('hallo1');
stackArr.stackPush('hallo2');
stackArr.stackPush('hallo3');
stackArr.stackPush('hallo4');
stackArr.stackPush('halo5');
stackArr.size();
stackArr.first();
stackArr.last();
stackArr.isEmpty();
stackArr.isFull();

module.exports = Stack
