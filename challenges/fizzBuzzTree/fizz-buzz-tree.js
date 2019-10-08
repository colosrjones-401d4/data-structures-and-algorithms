'use strict';

const fizzBuzzTree = (root) => {
  if (root === null) {
    return;
  }

  if (root.value % 3 === 0 && root.value % 5 === 0) {
    root.value = 'fizzBuzz';
  } else {
    if (root.value % 3) {
      (root.value = 'fizz');

    } else if (root.value % 5) {
      (root.value = 'buzz');
    }
  }

  fizzBuzzTree(root.left);
  fizzBuzzTree(root.right);

  return root;
};

module.exports = {
  Node, fizzBuzzTree,
};