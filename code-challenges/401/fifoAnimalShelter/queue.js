'use strict';

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'Underflow';
    } else {
      return this.items.shift();
    }
  }
  front() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.items[0];
    }
  }
}

module.exports = Queue;