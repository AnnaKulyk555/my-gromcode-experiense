// export function createArrayOfFunctions(length) {
//   const arrayOfFunctions = [];

//   if (length === undefined) {
//     return arrayOfFunctions;
//   }

//   if (typeof length !== 'number') {
//     return null;
//   }

//   for (let index = 0; index < length; index += 1) {
//     arrayOfFunctions[index] = function () {
//       return index;
//     };
//   }

//   return arrayOfFunctions;
// }

// option 2
export function createArrayOfFunctions(length = 0) {
  if (typeof length !== 'number') {
    return null;
  }
  const arrayOfFunctions = [];

  for (let index = 0; index < length; index += 1) {
    arrayOfFunctions[index] = function () {
      return index;
    };
  }

  return arrayOfFunctions;
}

// test data
console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions(9)[8]());
console.log(createArrayOfFunctions(9).length);
console.log(createArrayOfFunctions('test'));
console.log(createArrayOfFunctions());
