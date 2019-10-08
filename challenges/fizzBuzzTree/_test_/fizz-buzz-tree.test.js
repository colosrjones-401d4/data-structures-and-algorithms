'use strict';

const BinaryTree = require('../../Data-Structures/')
const fizzBuzzTree = require('../fizz-buzz-tree');

describe('First Test', () => {
  it('If the value is divisible by 3, replace the value with “Fizz”', () => {
    let tree = new BinaryTree();
    // add stuff to it

    fizzBuzzTree(tree.root);

    expect('fizz');

  });

  it('If the value is divisible by 5, replace the value with "Buzz"', () => {

    expect('buzz');
  });

  it('If the value is divisible by 3 and 5, replace the value with "FizzBuzz"', () => {

    expect('fizzbuzz');
  });
});