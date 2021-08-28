/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [start, ...rest] = numbers;

  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  const swapArray = [];
  for (let index = 1; index <= numbers.length - 1; index += 1) {
    swapArray.push(numbers[index]);
  }
  swapArray.push(numbers[0]);

  return swapArray;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
