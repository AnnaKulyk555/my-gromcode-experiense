// input: array
// output: num (max absolute) || null

// algo
// 1. return null if !array and if array is empty
// 2. iter array
// 3. make all array elem absolute
// 4. find and return max elem
function getMaxAbsoluteNumber(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const absoluteValues = array.map(elem => Math.abs(elem));
  return Math.max(...absoluteValues);
}

// test
const arr1 = [-3, -9, -15, -66.66];
const arr2 = [];
const arr3 = [-3, 9, undefined];
console.log(getMaxAbsoluteNumber(arr1));
console.log(getMaxAbsoluteNumber(arr2));
console.log(getMaxAbsoluteNumber(arr3));
console.log(getMaxAbsoluteNumber(6));
