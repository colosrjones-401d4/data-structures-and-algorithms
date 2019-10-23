'use strict';

const insertArrayShift = (array, value) => {
  if (Array.isArray(array)) {
    let result = [];
  const middleIndex = Math.round(array.length /2);
  for (let i = 0; i < array.length + 1; i++) {
    if (i === middleIndex) {
      result[i] = value;
    } else if (i > middleIndex) {
      result[i] = array[i - 1];
    } else {
      result[i] = array[i];
    }
  }
  array = result;
  return array;
} else {
  return null;
}
}

const deleteArrayShift = array => {
  if (Array.isArray(array)) {
    let result = [];
    const middleIndex = Math.floor(array.length / 2);
    for (let i = 0; i < array.length; i++) {
      if (i === middleIndex) {
        continue;
      } else if (i > middleIndex) {
        result[i - 1] = array[i];
      } else {
        result[i] = array[i];
      }
    }
    return result;
  } else {
    return null;
  }
}

describe('Insert Array Shift', () => {
  it('Should return the given array with the given value inserted into the middle index of the given array', () => {
    let array = [1, 2, 4, 5];
    const value = 3;
    expect(insertArrayShift(array, value)).toEqual([1,2,value,4,5]);
  });

describe('Delete Array Shift', () => {
    it('Should return the given array with the value at the middle index removed', () => {
      let array = [1,2,3,4,5];
      expect(deleteArrayShift(array)).toEqual([1,2,4,5]);
    })
  })
})