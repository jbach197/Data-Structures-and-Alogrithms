'use strict';

let Stack = require('../../lib/stack.js');

describe('Stack', () => {

  it('constructor()', ()=> {
    let stack = new Stack();
    expect(stack.count).toBeNull();
  });

  it('push()', ()=> {
    let stack = new Stack();
    let initialValue = 'A';
    stack.push(initialValue);
    expect(stack.storage).toBe(initialValue);
});

});