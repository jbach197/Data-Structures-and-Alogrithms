class Stack {

  constructor() {
    this.storage = new Array();
    this.count = 0;
  }
  
  push(value) {
    this.storage.push(value);
    this.count++;
  }

  pop() {
    if(this.count === 0){
      return 'No items in stack';
    }

    this.count --;
    return this.storage.pop();   
  }
}

module.exports = Stack;












