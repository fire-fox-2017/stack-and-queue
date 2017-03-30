'use strict'

class Queue {
    constructor() {
        this.max_size = 5;
        this.objQueue = [];
    }

    showAll() {
        console.log('Data di queue : ' + this.objQueue);
    }

    size() {
        console.log('Ukuran queue : ' + this.objQueue.length);
    }

    queuePush(x) {
      if(this.objQueue.length === this.max_size){
          console.log('Queue Penuh, Maksimal Jumlah Data '+this.max_size);
      } else {
        this.objQueue.push(x);
        console.log('Berhasil menambah ' + x);
      }
    }

    queuePop() {
      if(this.objQueue.length === 0){
        console.log('Tidak ada data di queue');
      } else {
        console.log('Berhasil hapus data ' +this.objQueue.shift());
      }
        ;
    }

    first() {
        if (this.objQueue[0] === null) {
            console.log('Queue Kosong');
        } else {
            console.log(this.objQueue[0]);
        }
    }

    last() {
        console.log(this.objQueue[this.objQueue.length-1]);
    }

    isEmpty() {
      if (this.objQueue.length === 0) {
          console.log('Queue Kosong');
      } else if(this.objQueue.length === this.max_size){
          console.log('Queue Penuh, Maksimal Jumlah Data '+this.max_size);
      } else {
        console.log('Jumlah data di queue : ' +this.objQueue.length);
      }
    }

    isFull() {
      if (this.objQueue.length === this.max_size) {
          console.log('Queue Penuh, Maksimal Jumlah Data '+this.max_size);
      } else if(this.objQueue.length === 0){
          console.log('Queue Kosong');
      } else {
        console.log('Jumlah data di queue : ' +this.objQueue.length);
      }
    }

    queuePeep() {
        console.log(this.objQueue[this.objQueue.length-1]);
    }
}

let queue1 = new Queue;
queue1.isEmpty();
queue1.queuePush('Mangga');
queue1.showAll();
queue1.queuePush('Melon');
queue1.showAll();
queue1.queuePush('Melon');
queue1.showAll();
queue1.queuePush('Melon');
queue1.showAll();
queue1.isEmpty();
queue1.queuePush('Melon');
queue1.showAll();
queue1.queuePush('Melon');
queue1.showAll();
queue1.queuePush('Melon');
queue1.isFull();
queue1.isEmpty();
queue1.queuePop();
queue1.showAll();
