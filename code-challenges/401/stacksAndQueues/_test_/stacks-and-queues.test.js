'use strict'

const SandQ = require('../stacks-and-queues');

describe('Test for Stacks and Queues', () => {
// First test passed!!! Can successfully push onto a stack
  it('Can successfully push onto a stack', () => {
    const stackTest = new SandQ.Stack();
    stackTest.push(3);

    expect(stackTest.top.value).toEqual(3);
  });
  // 2nd test passed!!! Can successfully push multiple values onto a stack
  it('Can sucessfully push multiple values onto a stack', () => {
    const stackTest = new SandQ.Stack();
    [2,4,6].forEach(num => stackTest.push(num));

    expect(stackTest.top.value).toEqual(6);
    expect(stackTest.top.next.value).toEqual(4);
    expect(stackTest.top.next.next.value).toEqual(2);
  });

  // Can successfully pop off the stack
  it('Can successfully pop off the stack', () => {
    const stackTest = new SandQ.Stack();
    [4,8].forEach(num => stackTest.push(num));
    stackTest.pop();

    expect(stackTest.top.value).toEqual(4);
    expect(stackTest.top.next).toBeNull();

  });


  // Can successfully empty a stack after multiple pops


  // Can successfully peek the next item on the stack


  // Can successfully instantiate an empty stack


  // Can successfully enqueue into a queue


  // Can successfully enqueue multiple values into a queue


  // Can successfully dequeue out of a queue the expected value


  // Can successfully peek into a queue, seeing the expected value


  // Can successfully empty a queue after multiple dequeues


  // Can successfully instantiate an empty queue
}); 