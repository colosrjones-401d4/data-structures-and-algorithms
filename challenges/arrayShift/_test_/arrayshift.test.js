'use strict';

const insertArrayShift = require('../arrayshift');
const deleteArrayShift = require('../arrayshift');

describe('Insert Array Shift', () => {
  it('Should return the given array with the given value inserted into the middle index of the given array', () => {
    let array = [1, 2, 4, 5];
    const value = 3;
    expect(insertArrayShift(array, value)).toEqual([1,2,value,4,5]);
  });

describe('Delete Array Shift', () => {
    it('Should return the given array with the value at the middle index removed', () => {
      let deleteArray = [];
      let selectArray = [3];
      let value = 3;

      expect(deleteArrayShift(deleteArray, value)).toEqual(selectArray);
    })
  })
})