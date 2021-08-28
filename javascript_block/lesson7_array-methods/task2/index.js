function sortDesc(array) {
  const resultArr = array.slice();
  return resultArr.sort((a, b) => b - a);
}

// test
const numbers = [0, 6, 20, 100, 5, 6, 8];
console.log(numbers);
console.log(sortDesc(numbers));
console.log(numbers);
