function getSpecialNumbers(array) {
  return array.filter(el => el % 3 === 0);
}

// test

getSpecialNumbers([1, 6, 5, 9, 3, 8, 11, 21]);
