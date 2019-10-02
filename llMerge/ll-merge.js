'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);
    let current = this.head;

    if (current === null) {
      this.head = newNode;
    } else {
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

  }

  mergeLists(list1, list2) {

    this.head = list1.head;

    let currList1 = list1.head;
    let currList2 = list2.head;

    let node = this.head;

    while (currList1 || currList2) {

      if (list1.head === null) {
        return list2.head;
      } else if (list2.head === null) {
        return list1.head;
      }

      if (currList1) currList1 = currList1.next;

      if (currList2) {
        node.next = currList2; //2
        currList2 = currList2.next; //4
        node = node.next; //2
      }
      if (currList1) {
        node.next = currList1; //3
        currList1 = currList1.next; //3
        node = node.next; //3
      }

    }
    return this.head;
  }
}


module.exports = LinkedList; 