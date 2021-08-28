/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const increaseEvenArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 2 === 0) {
      increaseEvenArr.push(arr[index] + delta);
    } else {
      increaseEvenArr.push(arr[index]);
    }
  }

  return increaseEvenArr;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
