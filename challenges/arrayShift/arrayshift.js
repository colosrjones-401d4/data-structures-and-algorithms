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


module.exports = insertArrayShift, deleteArrayShift;