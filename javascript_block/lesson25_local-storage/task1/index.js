export function getLocalStorageData() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (e) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
}

// BAD option (JSON.parse() without JSON.stringify() will get error)
// export function getLocalStorageData() {
//   const res = Object.entries(localStorage).reduce((acc, [key, value]) => {
//     return {
//       ...acc,
//       [key]: JSON.parse(value),
//     };
//   }, {});

//   return res;
// }

// test data
// const testObj = { name: 'Ann' };
// const testBool = false;
// const testArr = [1, 2, 3];
// const test = null;
// localStorage.setItem('user', JSON.stringify(testObj));
// localStorage.setItem('boolean', testBool);
// localStorage.setItem('array', JSON.stringify(testArr));
// localStorage.setItem('test', test);
// localStorage.setItem('name', JSON.stringify('Tom'));
// localStorage.setItem('name2', 'Test');
// localStorage.setItem('age', JSON.stringify(17));
// // console.log(localStorage);
// // console.log(localStorage.key(1));
// console.log(getLocalStorageData());
