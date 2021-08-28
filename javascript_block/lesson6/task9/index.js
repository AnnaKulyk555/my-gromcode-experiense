function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reverseArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    reverseArr.unshift(arr[index]);
  }

  return reverseArr;
}

// test

reverseArray([1, 2, 3, 4, 5, 6]);
reverseArray([1]);
reverseArray(3);
reverseArray([1, -1, 3]);
