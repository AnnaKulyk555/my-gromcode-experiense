export function getLocalStorageData() {
  return Object.entries(localStorage).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: JSON.parse(value),
    }),
    {},
  );
}

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
// localStorage.setItem('age', JSON.stringify(17));
// console.log(localStorage);
// console.log(localStorage.key(1));
// console.log(getLocalStorageData());
