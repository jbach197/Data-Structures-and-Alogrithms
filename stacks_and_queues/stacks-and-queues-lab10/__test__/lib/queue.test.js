'use strict';

let Queue = require('../../lib/queue.js');

describe('Queue', () => {

  it('constructor()', ()=> {
    let queue = new Queue();
    expect(queue.count).toEqual(0);
  });

  it('enqueue() check count updated', () => {
    let queue = new Queue ();
    let initialValue = 'A';
    queue.enqueue(initialValue);
    expect(queue.count).toEqual(1);
  });

  it('enqueue() value added to  queue', () => {
    let queue = new Queue ();
    let initialValue = 'A';
    queue.enqueue(initialValue);
    expect(queue.storage).toEqual([initialValue]);
  });

  it('dequeue() on empty stack', ()=> {
    let queue = new Queue();
    queue.dequeue
    expect ('queue is empty');
  });

  it('dequeue() check count updated', () => {
    let queue = new Queue ();
    let initialValue = 'A';
    let secondValue = 'B'
    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.dequeue();
    expect(queue.count).toEqual(1);
  });

  it('dequeue() check items updated', () => {
    let queue = new Queue ();
    let initialValue = 'A';
    let secondValue = 'B'
    queue.enqueue(initialValue);
    queue.enqueue(secondValue);
    queue.dequeue();
    expect(queue.storage).toEqual([secondValue]);
  });

});