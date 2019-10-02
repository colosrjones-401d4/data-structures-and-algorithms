'use strict';

const LinkedList = require('../ll-merge');

describe('Test', () => {

  it('should zipper merge two linked lists with the same amount of nodes successfully', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let newList = new LinkedList();

    [1,3].map(num => list1.add(num));
    [2,4].map(num => list2.add(num));

    let mergedList = newList.mergeLists(list1, list2);
    expect(mergedList.value).toEqual(1);
    expect(mergedList.next.value).toEqual(2);
    expect(mergedList.next.next.value).toEqual(3);
    expect(mergedList.next.next.next.value).toEqual(4);
  });

  it('should zipper merge two linked lists successfully, where list1 contains more nodes than list2', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let newList = new LinkedList();

    [1,3].map(num => list1.add(num));
    [2].map(num => list2.add(num));

    let mergedList = newList.mergeLists(list1, list2);

    expect(mergedList.value).toEqual(1);
    expect(mergedList.next.value).toEqual(2);
    expect(mergedList.next.next.value).toEqual(3);
  });

  it('should zipper merge two linked lists successfully, where listB contains more nodes than list1', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let newList = new LinkedList();

    [1].map(num => list1.add(num));
    [2,3].map(num => list2.add(num));

    let mergedList = newList.mergeLists(list1, list2);

    expect(mergedList.value).toEqual(1);
    expect(mergedList.next.value).toEqual(2);
    expect(mergedList.next.next.value).toEqual(3);
  });

  it('should return list1 if list2 is empty', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let newList = new LinkedList();

    [1,2,3].map(num => list1.add(num));

    let mergedList = newList.mergeLists(list1, list2);

    expect(mergedList).toEqual(list1.head);
    expect(mergedList.value).toEqual(1);
  });

  it('should return list2 if list1 is empty', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    let newList = new LinkedList();

    [1,2,3].map(num => list2.add(num));

    let mergedList = newList.mergeLists(list1, list2);

    expect(mergedList).toEqual(list2.head);
    expect(mergedList.value).toEqual(list2.head.value);
  });

}); 