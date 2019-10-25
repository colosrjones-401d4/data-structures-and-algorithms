'use strict';

const { LinkedList } = require('../../Data-Structures/linkedList/linked-list');
const arraySize = 1024;

class Hashtable {
  constructor() {
    this.table = Array(arraySize).fill(new LinkedList());
  }

  // Take in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
  add(key, value) {
    const index = this.hash(key);
    this.table[index].append(value);
    //console.log(value);
  }
  //Takes in the key and returns the value from the table.
  get(key) {
    //how do we store data in the bucket, key/value pair 
    //in the bucket
    const index = this.hash(key);
    const result = this.table[index].print();
    return result.length > 0 ? result : null;
  }
  //Takes in the key and returns a boolean indicating if the key exists in the table already
  contain(key) {
    const index = this.hash(key);
    return this.table[index].print.length > 0 ? true : false;
  }
  //Take in an arbitrary key and returns an index in the collection
  hash(key) {
    const charCodes =[];
    for (let i = 0; i < key.length; i++) {
      charCodes.push(key.charCodeAt(i));
    }
    const sum = charCodes.reduce((acc, curr) => acc + curr);
    const product = sum * 599;
    const remainder = product % arraySize;
    return Math.floor(remainder);
  }
}

module.exports = { arraySize, Hashtable };
