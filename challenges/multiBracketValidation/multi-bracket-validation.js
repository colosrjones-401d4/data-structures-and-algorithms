'use strict';

class BracketValidation {
  constructor() {
    this.bracketStack = [];
    this.count = 0;
  }

  push(value) {
    this.bracketStack.push(value);
    this.count += 1;
  }

  pop() {
    this.bracketStack.pop();
    this.count -= 1;
  }

  peek() {
    let lastStack;
    if (this.bracketStack.length !== 0) {
      for (let i = 0; i < this.bracketStack.length; i++) {
        lastStack = i;
      }
      return this.bracketStack[lastStack];
    }
    return undefined;
  }
}
module.exports = function multiBracketValidation(string) {
  const correctStack = new BracketValidation();
  if (typeof string !== 'string') {
    return false;
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(' || string[i] === '[' || string[i] === '{') {
      correctStack.push(string[i]);
    }
    if (string[i] === '}') {
      if (correctStack.peek() === '{') {
        correctStack.pop();
      }
    }
    if (string[i] === ')') {
      if (correctStack.peek() === '(') {
        correctStack.pop();
      }
    }
    if (string[i] === ']') {
      if (correctStack.peek() === '[') {
        correctStack.pop();
      }
    }
  }
  return correctStack.size === 0;
};