'use strict'

class Queue {
  constructor () {
    this._value = [];
    this._maksimal = 3;

  }

  queuePush(data){
    if(this._value.length < this._maksimal){
      this._value.push(data)
    }
    else{
      console.log('Queue nya udah PULL');
    }

  }

  queuePop(){
    return this._value.shift();

  }

  isEmpty(){
    if(this._value.length == 0){
      return true;
    }
    else {
      return false;
    }
  }

  isFull(){
    if(this._value.length == this._maksimal){
      return `DATA FULL`;
    }
    else {
      return `BELUM FULL`;
    }
  }

  first() {
    return this._value[0];
  }

  last() {
    return this._value[this._value.length-1]
  }

  //MELIHAT INDEKS DATA PALING ATAS, YANG TERISI
  queuePeep() {
    console.log(`Data paling atas ada di indeks ke-${this._value.length-1}`)
  }
}

let newQueue = new Queue();

//cek queuePush
console.log(`The Queue is Empty?? ${newQueue.isEmpty()}`);

newQueue.queuePush('Halo')
newQueue.queuePush('Cinta')
newQueue.queuePush('Apa Kabar')
newQueue.queuePush('Apa Kabar')
console.log(newQueue.first())
console.log(newQueue.last())
newQueue.queuePeep()
newQueue.queuePush('Apa Kabar')
console.log(newQueue.isFull())
