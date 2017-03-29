'use strict'

// Your code implementation
class Stack {
  constructor() {
    this._arr=[];
    this.MAX_SIZE=5;
  }

  size() {
    return 'Besar Stack ini : '+this._arr.length;

  }

  stackPush(x) {

    if(this.isFull()){
      console.log(x);
      this._arr.push(x);
    }else{
      console.log('Maaf sudah full');

    }

  }

  stackPop() {
    if(this.isEmpty()){
      console.log('Maaf sudah habis!');
    }else{
      this._arr.pop();
    }


  }

  first() {
    return 'nilai pertama yang dimasukkan : '+this._arr[0];
  }

  last() {
    return 'nilai terakhir yang dimasukkan : '+this._arr[this._arr.length-1];
  }

  isEmpty() {
    if(this._arr.length>0){
      return false;
    }else{
      return true;
    }
  }

  isFull() {
    if(this._arr.length<this.MAX_SIZE){
      return true;
    }else{
      return false;
    }
  }

  stackPeep() {
    return 'nilai paling atas : '+this._arr[this._arr.length-1];
  }

}
var stak = new Stack();
stak.stackPush(1);
stak.stackPush(2);
stak.stackPush(3);
console.log(stak.size());
stak.stackPush(4);
stak.stackPush(5);
stak.stackPush(6);
stak.stackPush(7);
stak.stackPush(8);
console.log(stak.last());
console.log(stak.first());
console.log(stak.stackPeep());
stak.stackPush(9);
stak.stackPop();
stak.stackPop();
stak.stackPop();
stak.stackPop();
stak.stackPop();
stak.stackPop();
stak.stackPop();
stak.stackPop();


module.exports = Stack
