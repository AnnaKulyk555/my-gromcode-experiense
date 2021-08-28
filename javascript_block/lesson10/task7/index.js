// input: numbers: length, from, to; to > from; length is integer;
// output: array (with random numbers in  from -> to period) || null

// algo
// 1. create empty array
// 2. if numbers in from -> to period is not integer return null
// 3. run loop, create random num in  from -> to period
// 4. push integer num to array if array.length <= length

// OPTION 1
const getRandomNumbers = (length, from, to) => {
  const result = [];
  if (to - from < 1) {
    return null;
  }
  for (let index = 0; index < length; index += 1) {
    if (result.length <= length) {
      result.push(Math.round(Math.random() * (to - from) + from));
    }
  }

  return result;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(5, 1.6, 2.1));
console.log(getRandomNumbers(5, 0.6, 0.8));
console.log(getRandomNumbers(5, 2, 4));
