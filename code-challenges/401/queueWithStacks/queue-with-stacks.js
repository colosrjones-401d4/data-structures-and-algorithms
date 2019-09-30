'use strict';

const Node = require('./node');

class Stack {
  constructor() {
    this.bottom = null;
  }
  push(value) {
    const top = this.bottom;
    this.bottom = new Node(value);
    this.bottom.next = top;
  }
  pop() {
    const out = this.bottom.value; //to pop out value to variable that will return
    this.bottom = this.bottom.next; // move next value to the top
    return out;
  }
  peek() {
    return this.value;
  }
}

// enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
// dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
// The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor

class PseudoQueue {
  constructor() {
    this.back = null;
    this.front = null;
  }
  enqueue(value) {
    let newNode = new Node(value);

    if (this.front === null) {
      this.back = newNode;
      this.front = newNode;
    } else {
      this.front.next = newNode;
      this.front = newNode;
    }
  }

  dequeue() {
    const out = this.back.value;
    if (this.back || this.back.next) {
      this.back = this.back.next;
    }
    if (this.back === null) this.front = null;
    return out;
  }

  peek() {
    return this.back.value;
  }
}
module.exports = { Stack, PseudoQueue };