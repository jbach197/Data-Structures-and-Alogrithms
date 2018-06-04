'use strict';

let Stack = require('../../lib/stack.js');

describe('Stack', () => {

  it('constructor()', ()=> {
    let stack = new Stack();
    expect(stack.count).toEqual(0);
  });

  it('push() check count updated', () => {
    let stack = new Stack ();
    let initialValue = 'A';
    stack.push(initialValue);
    expect(stack.count).toEqual(1);
  });

  it('push() check value inserted', () => {
    let stack = new Stack();
    let initialValue = 'A';
    stack.push(initialValue);
    expect(stack.storage).toEqual([initialValue]);
  });

  it('pop() check count updated', () => {
    let stack = new Stack ();
    let initialValue = 'A';
    let secondValue = 'B'
    stack.push(initialValue);
    stack.push(secondValue);
    stack.pop();
    expect(stack.count).toEqual(1);
  });

  it('pop() check value updated', () => {
    let stack = new Stack ();
    let initialValue = 'A';
    let secondValue = 'B'
    stack.push(initialValue);
    stack.push(secondValue);
    stack.pop();
    expect(stack.storage).toEqual([initialValue]);
  });

  it('pop() on empty stack', ()=> {
    let stack = new Stack();
    stack.pop
    expect ('No items in stack');
  });


});