'use strict'

class Queue {
  constructor () {
    this.panjang = [];
    this.MAX_SIZE = 5;
  }
  setMaxQueue(size)
  {
    this.MAX_SIZE=x;
  }

  getMaxQueue()
  {
    return this.MAX_SIZE;
  }

  masukQueue(masuk) {
    if(this.panjang.length === this.MAX_SIZE) {
      console.log(`Antrina Penuh! Maksimal antrian adalah ${this.getMaxQueue()}`);
    } else {
      this.panjang.push(masuk);
    }

  }

  keluarQueue() {
    if(this.panjang.length === 0) {
      console.log("Antrian Kosong!. Tidak dapat melakukan aksi ini")
    } else {
      let keluar = this.panjang.shift();
      console.log(`${keluar} keluar!`);
    }
  }

  tampilQueue() {
    if(this.panjang.length===0)
    console.log("Antrian Kosong!. Silahkan Masukan Antrian");
    else{
    console.log(`Antrian Sekarang ${this.panjang.length}`);
    console.log(this.panjang);
  }
  }
}

let myQueue = new Queue();

myQueue.tampilQueue();
myQueue.keluarQueue();
myQueue.masukQueue('Mobil 1');
myQueue.masukQueue('Mobil 2');
myQueue.masukQueue('Mobil 4');
myQueue.masukQueue('Mobil 5');
myQueue.masukQueue('Mobil 6');
myQueue.masukQueue('Mobil 7');
myQueue.masukQueue('Mobil 8');
myQueue.tampilQueue();
myQueue.keluarQueue();
myQueue.tampilQueue();
