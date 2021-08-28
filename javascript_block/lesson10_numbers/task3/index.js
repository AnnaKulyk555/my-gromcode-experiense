// input: num (franction)
// output: array

// algo
// 1. create empty arr
// 4. push num to the arr after rounding to 2 decimal places
const multiRound = num => {
  const res = [];
  res.push(Math.floor(num * 100) / 100);
  res.push(Math.trunc(num * 100) / 100);
  res.push(Math.ceil(num * 100) / 100);
  res.push(Math.round(num * 100) / 100);
  res.push(Number(num.toFixed(2)));

  return res;
};

// test
console.log(multiRound(1.3668));
console.log(multiRound(-1.3661));
console.log(multiRound(1.341));
console.log(multiRound(11.12556));
console.log(multiRound(6.112));
