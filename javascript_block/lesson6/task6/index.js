/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const squareNumArr = [];
  for (let index = 0; index <= arr.length - 1; index += 1) {
    squareNumArr.push(arr[index] * arr[index]);
  }

  return squareNumArr;
}

// examples
squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
squareArray(1); // null
