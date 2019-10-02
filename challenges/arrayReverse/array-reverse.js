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


module.exports = reverseArray;