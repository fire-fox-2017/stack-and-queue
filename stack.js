'use strict'

// Your code implementation
class Stack {
  constructor() {
    this._value=[];
    this._maksimal=3;
  }

  // size() {
  //   return this._value.length;
  // }

  stackPush(data) {
    if(this._value.length < this._maksimal){
      this._value.push(data);
    }
    else {
      console.log(`Stack is FULL!!, Data inputan tidak masuk`);
    }
  }

  stackPop() {
    return this._value.pop();
  }

  first() {
    return this._value[0];
  }

  last() {
    console.log(`Data terakhir = ${this._value[this._value.length-1]}`);
  }

  isEmpty() {
    if(this._value.length == 0){
      return true;
    }
    else {
      return false
    }
  }

  isFull() {
    if(this._value.length == this._maksimal){
      return `DATA FULL`;
    }
    else {
      return `BELUM FULL`;
    }
  }

  stackPeep() {
    console.log(`Data paling atas ada di indeks ke-${this._value.length-1}`)
  }

  // implement queue
  // queue() {
  // }
}


let myStack = new Stack();


//cek data full
console.log(`The Stack is Empty?? ${myStack.isEmpty()}`);


//Masukin data
myStack.stackPush('oscar');
console.log(`The Stack is Empty?? ${myStack.isEmpty()}`);
myStack.stackPush('hacktiv8');
myStack.stackPush('javascript');

//Mencetak "DATA" yang ada di indeks paling ujung!!
myStack.last();

// Mencetak "INDEKS" yang ada di indeks paling ujung!!
myStack.stackPeep();

//hapus Data paling Ujung
console.log(myStack.stackPop());

//cek stack full atau gak?
console.log(myStack.isFull());



module.exports = Stack
