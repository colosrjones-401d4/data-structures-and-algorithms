const LinkedList = require('./linkedlist');

describe('The linked list', () => {
  const list = new LinkedList();
  list.insert('first value');
  list.insert('second value');
// Can successfully instantiate an empty linked list
  it('instantiates an empty array to begin', () => {
    const myLinkedList = new LinkedList();
    expect(myLinkedList).toBeDefined();
  });
// Can properly insert into the linked list
  it('should have the ability to add new nodes to the head on an empty list', () => {
    const newList = new LinkedList();
    newList.insert('this is my value');
    expect(newList.head.value).toBe(`this is my value`);
  });
// The head property will properly point to the first node in the linked list
  it('should add new nodes to head on a populated list', () => {
    const list1 = new LinkedList();
    list1.insert('first value!');
    list1.insert('second value!');
    expect(list1.head.value).toBe('second value!');
  });
// Can properly insert multiple nodes into the linked list
  it('should be able to insert multiple nodes at once', () => {
    const list1 = new LinkedList();
    list1.insertArray(['hello', 'im inserting', 'multiple nodes']);
    expect(list1.head.value).toBe('multiple nodes');
  });
// Will return true when finding a value within the linked list that exists
  it('should return true if you run the includes method and it finds a match', () => {
    expect(list.includes('second value')).toBeTruthy();
  });
// Will return false when searching for a value in the linked list that does not exist
  it('should return false if a match isnt found.', () => {
    expect(list.includes('I am not in the list')).toBeFalsy();
  });
// Can properly return a collection of all the values that exist in the linked list
  it('should log a collection of all node values as a string', () => {
    expect(list.toString()).toBe('second value first value ');
  });
// Send message if you don't have nodes in your list
  it('should log a message if you dont have any nodes in your list', () => {
    const list1 = new LinkedList();
    expect(list1.toString()).toBe('You have to insert a node first!');
  });
});