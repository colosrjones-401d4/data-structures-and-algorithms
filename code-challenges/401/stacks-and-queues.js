'use strict';

const Node = require('./stacksAndQueues/node');

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    const bottom = this.top;
    this.top = new Node(value);
    this.top.next = bottom;
  }
  pop() {
    const out = this.top.value; //to pop out value to variable that will return
    this.top = this.top.next; // move next value to the top
    return out;
  }
  peek() {
    return this.top.value;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(value) {
    let newNode = new Node(value);

    if (this.last === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    const out = this.first.value;
    if (this.first || this.first.next) {
      this.first = this.first.next;
    }
    if (this.first === null) this.last = null;
    return out;
  }

  peek() {
    return this.first.value;
  }
}
module.exports = { Stack, Queue };