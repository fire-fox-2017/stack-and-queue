'use strict'



class Queue {
  constructor() {
    this._arr=[];
    this.MAX_SIZE=5;
  }

  size() {
    return 'panjang Queue ini : '+this._arr.length;

  }

  queuePush(x) {

    if(this.isFull()){
      console.log(x);
      this._arr.push(x);
    }else{
      console.log('antrian sudah full');

    }

  }

  queuePop() {
    if(this.isEmpty()){
      console.log('antrian sudah habis!');
    }else{
      this._arr.shift();
    }


  }

  first() {
    return 'antrian pertama yang menunggu : '+this._arr[0];
  }

  last() {
    return 'antrian terakhir yang menunggu : '+this._arr[this._arr.length-1];
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

  queuePeep() {
    return 'nilai paling atas : '+this._arr[this._arr.length-1];
  }

}
var antrian = new Queue();
antrian.queuePush(1);
antrian.queuePush(2);
antrian.queuePush(3);
console.log(antrian.size());

antrian.queuePush(4);
antrian.queuePush(5);
antrian.queuePush(6);
antrian.queuePush(7);
antrian.queuePush(8);
console.log(antrian.first());
console.log(antrian.last());
antrian.queuePush(9);
antrian.queuePop();
antrian.queuePop();
antrian.queuePop();
antrian.queuePop();
antrian.queuePop();
antrian.queuePop();
antrian.queuePop();
antrian.queuePop();
