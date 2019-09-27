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

  // 3rd passed - Can successfully pop off the stack
  it('Can successfully pop off the stack', () => {
    const stackTest = new SandQ.Stack();
    [4,8].forEach(num => stackTest.push(num));
    stackTest.pop();

    expect(stackTest.top.value).toEqual(4);
    expect(stackTest.top.next).toBeNull();

  });

  // 4th passed - Can successfully empty a stack after multiple pops
  it('Can successfully empty a stack after multiple pops', () => {
    const stackTest = new SandQ.Stack();
    [2,4,6].forEach(num => stackTest.push(num));
    stackTest.pop();
    stackTest.pop();
    stackTest.pop();

    expect(stackTest.top).toBeNull();
  });

  // 5th passed - Can successfully peek the next item on the stack
  it('Can successfully peek the next time on the stack', () => {
    const stackTest = new SandQ.Stack();
    [2,4,6].forEach(num => stackTest.push(num));
    let peek = stackTest.peek();

    expect(peek).toEqual(6);
  });

  // 6th passed - Can successfully instantiate an empty stack
  it('Can successfully instantiate an empty stack', () => {
    const stackTest = new SandQ.Stack();

    expect(stackTest.top).toBeNull();
  });

  // 7th passed - Can successfully enqueue into a queue
  it('Can successfully enqueue into a queue', () => {
    const queueTest = new SandQ.Queue();
    [2,4,6].forEach(num => queueTest.enqueue(num));

    expect(queueTest.front.value).toEqual(2);
    expect(queueTest.front.next.value).toEqual(4);
    expect(queueTest.back.value).toEqual(6);
  });

  //  1st failed - changed value numbers then 8th passed - Can successfully enqueue multiple values into a queue
  it('Can successfully enqueue multiple values into a queue', () => {
    const queueTest = new SandQ.Queue();
    [2,4,6].forEach(num => queueTest.enqueue(num));

    expect(queueTest.front.value).toEqual(2);
    expect(queueTest.front.next.value).toEqual(4);
    expect(queueTest.back.value).toEqual(6);
  });

  // Failed(dequeue to enqueue) Now it passed - Can successfully dequeue out of a queue the expected value
  it('Can successfully dequeue out of a queue the expected value', () => {
    const queueTest = new SandQ.Queue();
    [2,4,6].forEach(num => queueTest.enqueue(num));
    queueTest.dequeue();
    
    expect(queueTest.front.value).toEqual(4);
    expect(queueTest.front.next.value).toEqual(6);
  });

  // Passed - Can successfully peek into a queue, seeing the expected value
  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queueTest = new SandQ.Queue();
    [2,4,6].forEach(num => queueTest.enqueue(num));
    const peek = queueTest.peek();

    expect(peek).toEqual(2);
  });


  // Passed - Can successfully empty a queue after multiple dequeues
  it('Can successfully empty a queue after multiple dequeues', () => {
    const queueTest = new SandQ.Queue();
    [3,6,9].forEach(num => queueTest.enqueue(num));
    queueTest.dequeue();
    queueTest.dequeue();
    queueTest.dequeue();

    expect(queueTest.front).toBeNull();
    expect(queueTest.back).toBeNull();
  });

  // Passed - Can successfully instantiate an empty queue
  it('Can successfully instantiate an empty queue', () => {
    const queueTest = new SandQ.Queue();

    expect(queueTest.front).toBeNull();
  });
}); 