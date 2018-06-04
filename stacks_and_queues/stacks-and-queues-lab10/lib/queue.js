class Queue {

  constructor() {
    this.storage = new Array();
    this.count = 0;
    this.lowestCount = 0;
  }
  
  enqueue(value) {
    this.storage.push(value);
    this.count++;
  }
  
  dequeue() {
    if(this.count - this.lowestCount === 0){
      return "queue is empty";
    }

    this.count --;
    this.lowestCount ++;
    return this.storage.shift();
  }
  
}

module.exports = Queue;

