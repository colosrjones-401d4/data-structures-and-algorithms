'use strict'

const SandQ = require('../stacks-and-queues');

describe('Test for Stacks and Queues', () => {
// First test passed!!!
  it('Can successfully push onto a stack', () => {
    const stackTest = new SandQ.Stack();
    stackTest.push(3);

    expect(stackTest.top.value).toEqual(3);
  });
}); 