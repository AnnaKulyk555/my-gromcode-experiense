const reverseArray = arr => (Array.isArray(arr) ? arr.slice().reverse() : null);

// test
const array = [1, 2, 3, 8, 0, 5];

console.log(array);
console.log(reverseArray(array));
console.log(array);
console.log(reverseArray(3));
