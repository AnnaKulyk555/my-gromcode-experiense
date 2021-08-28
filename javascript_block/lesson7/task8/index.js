const cloneArr = arr => (Array.isArray(arr) ? arr.slice() : null);

// test

const array = [1, 2, 3, 8, 0, 5];

console.log('before func work ', array);
console.log(cloneArr(array));
console.log('after func work ', array);
console.log(cloneArr(3));
