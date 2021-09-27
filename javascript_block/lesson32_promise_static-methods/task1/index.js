const getSum = numbers =>
  numbers.filter(elem => !isNaN(elem)).reduce((acc, num) => acc + Number(num), 0);

export const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error('Can\t calculate')));

// test

// const getValueWithDelay = (value, delay) =>
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log(value);
//       resolve(value);
//     }, delay);
//   });

// const asyncNum1 = getValueWithDelay(36, 1000);
// const asyncNum2 = getValueWithDelay(4, 2000);
// const asyncNum4 = getValueWithDelay('10', 3000);
// const asyncNum5 = getValueWithDelay(undefined, 3000);

// asyncSum(asyncNum1, asyncNum2, Promise.reject(new Error('err')), asyncNum4, asyncNum5).then(
//   result => console.log(result),
// );
