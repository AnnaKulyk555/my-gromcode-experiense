function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let minElem = arr[0];
  let maxElem = arr[0];
  for (let index = 1; index < arr.length; index += 1) {
    if (minElem > arr[index]) {
      minElem = arr[index];
    }

    if (maxElem < arr[index]) {
      maxElem = arr[index];
    }
  }

  return maxElem - minElem > 1000;
}

// test

checker(1);
checker([1, -8, 3, 1]);
checker([0]);
checker([5, 9, 10000, 1]);
