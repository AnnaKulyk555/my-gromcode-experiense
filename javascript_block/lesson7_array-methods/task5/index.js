// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const resultArr = [];
//   arr.forEach(el => resultArr.push(el * el));
//   return resultArr;
// }

// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//  const resultArr = arr.map(el => el * el);
//   return resultArr;
// }

// function squareArray(arr) {
//   return Array.isArray(arr) ? arr.map(el => el * el) : null;
// }

const squareArray = arr => (Array.isArray(arr) ? arr.map(el => el * el) : null);

// test

const array = [1, 2, 3, 8, 0, 5];

console.log(array);
console.log(squareArray(array));
console.log(array);
