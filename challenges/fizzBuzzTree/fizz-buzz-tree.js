'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class FizzBuzzTree {
  constructor(root = null) {
    this.root = root;
  }
}

const fizzBuzz = (root) => {
  if (root == null) {
    return;
  }

  if (root.value % 3 == 0 && root.value % 5 == 0) {
    fizzBuzz(root.value = 'fizzBuzz');
  } else {
    if (root.value % 3) {
      fizzBuzz(root.value = 'fizz');

    } else if (root.value % 5) {
      fizzBuzz(root.value = 'buzz');
    }
    fizzBuzz(root.left);
    fizzBuzz(root.right);
  }
  return fizzBuzz;
};

module.exports = {
  Node,
  FizzBuzzTree,
};