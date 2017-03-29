'use strict'

class Queue {
  constructor () {
    this.wadah = []
  }

  insert (insert) {
    this.wadah.push(insert)
  }

  remove () {
    this.wadah.shift();
  }
}

let fifo = new Queue();
fifo.insert("pertama");
fifo.remove();
fifo.insert(2);
fifo.insert(true);
console.log(fifo.wadah);
