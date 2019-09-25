'use strict';
class Node {

  constructor (value) {
    this.value = value;
    this.next = null;
  }

}

class LinkedList {

  constructor () {
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

  insertBefore(value, newVal) {
    const node = new Node(newVal);
    if (this.head.value === value) {
      node.next = this.head;
      this.head = node;
      return this;
    }
    let currNode = this.head;
    while (currNode.next.value !== value) {
      currNode = currNode.next;
      if (currNode.value !== value && !currNode.next) {
        throw new Error('Expected value does not exist');
      }
    }
    node.next = currNode.next;
    currNode.next = node;
    return this;
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
      if (currNode.value !== value && !currNode.next) {
        throw new Error('Expected value does not exist');
      }
    }
    node.next = currNode.next;
    currNode.next = node;
    return this;
  }
};

const testList = new LinkedList();
testList.append(1);
testList.append(2);
testList.append(3);

const node = new Node('Steven');

describe('node.js', () => {
  test('node constructor', () => {
    expect(node.value).toEqual('Steven');
    expect(node.next).toBeNull();
  });
});

describe('ll-insertions.js', () => {
  test('#append', () => {
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(2);
    expect(testList.head.next.next.value).toEqual(3);
    expect(testList.head.next.next.next).toBeNull();
  });
  /**
   * @param
   */
  test('#insertBefore', () => {
    testList.insertBefore(2, 4);
    expect(testList.head.next.next.value).toEqual(2);
    expect(testList.head.next.value).toEqual(4);
  });
  test('#insertAfter', () => {
    testList.insertAfter(4, 5);
    expect(testList.head.next.value).toEqual(4);
    expect(testList.head.next.next.value).toEqual(5);
    expect(() => { testList.insertAfter(6, 7); }).toThrow('Expected value does not exist');
  });
});