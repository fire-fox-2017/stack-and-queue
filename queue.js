'use strict'

class Queue {
  constructor () {
    this.simpan = []
    this.maxSize = 6
  }

  queuePush(x){
    this.simpan.unshift(x)
  }

  queuePop(){
    this.simpan.shift()
  }

  size(){
    return this.simpan.length
  }

}

let person = new Queue()
person.queuePush('orangke-1')
person.queuePush('orangke-2')
person.queuePush('orangke-3')
person.queuePush('orangke-4')

console.log(`isi datanya ada ${person.size()}`);
