'use strict';

const LinkedList = require('../linkedlist');

function  mergeLists(list1, list2) {
  if (list1 == this.head) return list2;
  if (list2 == this.head) return list1;

  if (list1.value < list2.value) {
    list1.next = this.mergeLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeLists(list2.next, list1);
    return list2;
  }
}

module.exports = mergeLists;
