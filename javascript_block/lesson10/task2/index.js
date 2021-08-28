function getParsedIntegers(arr) {
  return arr.map(num => Number.parseInt(num, 10));
}

function getParsedIntegersV2(arr) {
  return arr.map(num => parseInt(num, 10));
}

function getParsedFloats(arr) {
  return arr.map(num => Number.parseFloat(num));
}

function getParsedFloatsV2(arr) {
  return arr.map(num => parseFloat(num));
}

// test
const arr = [-3, -9, 1.5, 66.66, 7.251, '152', '55vj', NaN, undefined];

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
