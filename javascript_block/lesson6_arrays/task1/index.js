function getArrayBounds(arr) {
  const arrayBounds = [arr.length, arr[0], arr[arr.length - 1]];
  return Array.isArray(arr) ? arrayBounds : null;
}

// examples
getArrayBounds([1, 10, 9, 11]); // ==> [4, 1, 11]
getArrayBounds(10, 12, 14); // ==> null
getArrayBounds([1]); // ==> [1, 1, 1]
