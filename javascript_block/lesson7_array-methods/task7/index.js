// function increaseEvenEl(arr, delta) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const result = arr.map(el => {
//     if (el % 2 === 0) {
//       el += delta;
//     }
//     return el;
//   });

//   return result;
// }

// function increaseEvenEl(arr, delta) {
//   return Array.isArray(arr)
//     ? arr.map(el => {
//         if (el % 2 === 0) {
//           el += delta;
//         }
//         return el;
//       })
//     : null;
// }

function increaseEvenEl(arr, delta) {
  return Array.isArray(arr) ? arr.map(el => (el % 2 === 0 ? (el += delta) : el)) : null;
}

// test

const array = [1, 2, 3, 8, 0, 5];

// console.log(array);
console.log(increaseEvenEl(array, 10));
console.log(array);
console.log(increaseEvenEl(3));
