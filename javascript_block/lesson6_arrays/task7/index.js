function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let sum = 0;
  for (let index = 0; index <= arr.length - 1; index += 1) {
    sum += arr[index];
  }
  console.log(sum);
  return sum > 100;
}

// test

checkSum([1, 2, 3]);
checkSum([1]);
checkSum([120, 2, 3]);
checkSum(2);
