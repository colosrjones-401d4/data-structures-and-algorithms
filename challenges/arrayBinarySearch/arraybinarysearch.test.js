'use strict';

const arrayBinarySearch = (arr, val) => {
  let leftSide = 0;
  let rightSide = arr.length - 1;

  while (leftSide <= rightSide){
    let mid = Math.floor(leftSide + (rightSide - leftSide) / 2);

    if (arr[mid] < val){
      leftSide = mid + 1;
    }else if (arr[mid] > val){
      rightSide = mid -1;
    }else {return mid};
    }
  return -1;
}

describe('array-binary-search', () => {
  it('returns the index of the middle element of the array if it matches the value', () => {
    expect(arrayBinarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  });

  it('returns the matched value/index of the element of the array if value is less than middle', () => {
    expect(arrayBinarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
  });

  it('returns the matched value/index of the element of the array if value is greater than middle', () => {
    expect(arrayBinarySearch([1, 2, 3, 4, 5], 4)).toEqual(3);
  });

  it('returns -1 if value is not found in the array', () => {
    expect(arrayBinarySearch([1, 2, 3, 4 ,5], 8)).toEqual(-1);
  });
});