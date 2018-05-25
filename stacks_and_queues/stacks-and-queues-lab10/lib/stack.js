'use strict';

class Stack {

  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count --;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
}

module.exports = Stack;












