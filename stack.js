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
        if (this.objStack.length === this.max_size) {
            console.log('Stack Penuh, Maksimal Jumlah Data '+this.max_size);
        } else {
            this.objStack.push(x);
            console.log('Berhasil menambah ' + x);
        }
    }

    stackPop() {
        if (this.objStack.length === 0) {
            console.log('Tidak ada data di stack');
        } else {
            console.log('Berhasil hapus data ' + this.objStack.pop());
        }

    }

    first() {
        console.log(this.objStack[this.objStack.length - 1]);
    }

    last() {
        if (this.objStack[0] === null) {
            console.log('Stack Kosong');
        } else {
            console.log(this.objStack[0]);
        }
    }

    isEmpty() {
        if (this.objStack.length === 0) {
            console.log('Stack Kosong');
        } else if (this.objStack.length === this.max_size) {
            console.log('Stack Penuh, Maksimal Jumlah Data '+this.max_size);
        } else {
            console.log('Jumlah data di stack : ' +this.objStack.length);
        }
    }

    isFull() {
        if (this.objStack.length === this.max_size) {
            console.log('Stack Penuh, Maksimal Jumlah Data '+this.max_size);
        } else if (this.objStack.length === 0) {
            console.log('Stack Kosong');
        } else {
            console.log('Jumlah data di stack : ' +this.objStack.length);
        }
    }

    stackPeep() {
        return this.objStack[this.objStack.length - 1];
    }

}

let stack1 = new Stack;
stack1.isEmpty();
stack1.stackPush('Mangga');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.isEmpty();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.showAll();
stack1.stackPush('Melon');
stack1.isFull();
stack1.stackPop();
stack1.showAll();


module.exports = Stack
