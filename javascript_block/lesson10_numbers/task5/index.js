// input: array
// output: string

// algo
// 1. iterate array
// 2. get sum of array elements
// 3. round sum to two decimal places
// 4. return sum as string '$sum'
function getTotalPrice(array) {
  const sum = array.reduce((acc, elem) => acc + elem, 0);
  const res = Math.floor(sum * 100) / 100;

  return `$${res}`;
}
// test
const arr1 = [1.25658, 1];
const arr2 = [0, 2.1199, 1];
const arr3 = [-3, 9.9888, 0];
console.log(getTotalPrice(arr1));
console.log(getTotalPrice(arr2));
console.log(getTotalPrice(arr3));
