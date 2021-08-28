/* eslint-disable arrow-body-style */
// option 1
const flatArray = arr => {
  const resultArr = arr.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
  return resultArr.sort((a, b) => a - b);
};

// option 2 - use .flat()

// test
const numbers = [0, 6, 20, 100, 5, 6, 8, [1, 2, 3], [0]];
console.log(numbers);
console.log(flatArray(numbers));
console.log(numbers);

// ======= reduce
// [1,2,3,4] => 10;
// [1, 2, 3, 4].reduce(function (acc, num) {
//   return acc + num;
// }, 0);
// 1: 0, 1 => 1
// 2: 1, 2 => 3
// 3: 3, 3 => 6
// 4: 6, 4 => 10
