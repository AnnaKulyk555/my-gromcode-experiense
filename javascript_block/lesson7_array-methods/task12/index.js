const arrAverage = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const res = arr.reduce((acc, elem) => acc + elem) / arr.length;
  return res;
};

// const arrAverage = arr =>
//   Array.isArray(arr) ? arr.reduce((acc, elem) => acc + elem) / arr.length : null;

// test
const arr = [2, 6, 0];
console.log(arrAverage(arr));
console.log(arrAverage(2));
