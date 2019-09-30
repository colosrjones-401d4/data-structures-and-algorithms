'use strict';

const Node = require('./node');

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

class PseudoQueue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  enqueue(value) {
    let newNode = new Node(value);

    if (this.back === null) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    const out = this.front.value;
    if (this.front || this.front.next) {
      this.front = this.front.next;
    }
    if (this.front === null) this.back = null;
    return out;
  }

  peek() {
    return this.front.value;
  }
}
module.exports = { Stack, PseudoQueue };