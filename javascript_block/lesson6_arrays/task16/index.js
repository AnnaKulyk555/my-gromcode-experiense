function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let count = 0;
  for (let index = 1; index < array.length; index += 1) {
    for (let j = 0; j < index; j += 1) {
      console.log(array[index], array[j]);
      if (array[index] === array[j]) {
        count += 1;
        break;
      }
    }
  }

  return array.length - count;
}

// test

const arr = [1, 5, 6, 8, 9, 1, 5, 6];
console.log(uniqueCount(arr));
