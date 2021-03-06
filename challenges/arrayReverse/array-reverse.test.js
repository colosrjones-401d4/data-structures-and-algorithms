'user strict'

const reverseArray = arr => {
  if (Array.isArray(arr)) {
    let result = [];
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        if (i === arr.length / 2) {
          break;
        } else {
          let front = arr[i];
          let back = arr[arr.length - i - 1];
          arr[i] = back;
          arr[arr.length - i - 1] = front;
          result = arr;
        }
      }
    }
    return result;
  } else {
    return 'Not an array!';
  }
};

describe('Challenge 1', () => {
  it('Should return [6, 5, 4, 3, 2, 1]', () => {
    expect(reverseArray([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });
});

describe('Challenge 2', () => {
  it('Should return [-12, 823, -923, 10, 23, 3546, 2354, 89]', () => {
    expect(reverseArray([89, 2354, 3546, 23, 10, -923, 823, -12])).toEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
  });
});

describe('Challenge 3', () => {
  it('Should return [199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]', () => {
    expect(reverseArray([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199])).toEqual([199, 197, 193, 191, 181, 179, 173, 167, 163, 157, 151, 149, 139, 137, 131, 127, 113, 109, 107, 103, 101, 97, 89, 83, 79, 73, 71, 67, 61, 59, 53, 47, 43, 41, 37, 31, 29, 23, 19, 17, 13, 11, 7, 5, 3, 2]);
  });
});

describe('Challenge 4', () => {
  it('Should return []', () => {
    expect(reverseArray([])).toEqual([]);
  });
});

describe('Challenge 5', () => {
  it('Should return \'Not an array!\'', () => {
    expect(reverseArray('I\'m not an array!')).toBe('Not an array!');
  });
});

