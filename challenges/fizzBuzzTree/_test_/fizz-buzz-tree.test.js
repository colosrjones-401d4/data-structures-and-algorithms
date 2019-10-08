'use strict';

const BinaryTree = require('../../../tree/tree')
const fizzBuzzTree = require('../fizz-buzz-tree');

describe('First Test', () => {
  it('If the value is divisible by 3, replace the value with “Fizz”', () => {
    let tree = new BinaryTree();

    //TODO to fix describe ===================================================

    
    fizzBuzzTree(root.value);

    expect('fizz');

  });

  it('If the value is divisible by 5, replace the value with "Buzz"', () => {
    let tree = new BinaryTree();

    fizzBuzzTree(tree.root);

    expect('buzz');
  });

  it('If the value is divisible by 3 and 5, replace the value with "FizzBuzz"', () => {

    let tree = new BinaryTree();

    fizzBuzzTree(tree.root);

    expect('fizzbuzz');
  });
});