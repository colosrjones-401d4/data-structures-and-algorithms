'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    let len = 0;
    let currNode = this.head;
    if (currNode === null) {
      throw new Error('LIST IS EMPTY');
    }
    while (currNode.next !== null) {
      currNode = currNode.next;
      len += 1;
    }
    if (k > len) {
      throw new Error('LIST DOES NOT CONTAIN THAT NODE');
    }
    const pos = len - k;
    let currNode2 = this.head;
    for (let x = 0; x < pos; x++) {
      currNode2 = currNode2.next;
    }
    return currNode2;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedList;
  
  const testList = new LinkedList();
  const emptyList = new LinkedList();
  testList.append(1);
  testList.append(2);
  testList.append(3);
  testList.append(4);
  
  describe('ll-kth-from-end.js', () => {
    test('#kthFromEnd on testList - success', () => {
      expect(testList.kthFromEnd(0).value).toEqual(4);
    });
    test('#kthFromEnd on testList - error', () => {
      expect(() => { testList.kthFromEnd(5); }).toThrow('LIST DOES NOT CONTAIN THAT NODE');
    });
    test('#kthFromEnd on emptyList', () => {
      expect(() => { emptyList.kthFromEnd(2); }).toThrow('LIST IS EMPTY');
    });
  });