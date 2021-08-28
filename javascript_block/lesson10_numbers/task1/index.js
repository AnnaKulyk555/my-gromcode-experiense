function getFiniteNumbers(arr) {
  return arr.filter(num => Number.isFinite(num));
}

function getFiniteNumbersV2(arr) {
  return arr.filter(num => isFinite(num));
}

function getNaN(arr) {
  return arr.filter(num => Number.isNaN(num));
}

function getNaNV2(arr) {
  return arr.filter(num => isNaN(num));
}

function getIntegers(arr) {
  return arr.filter(num => Number.isInteger(num));
}

// test
const arr = [-3, -9, 1.5, 66.66, 7.251, '152', '55vj', NaN, undefined];

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));
