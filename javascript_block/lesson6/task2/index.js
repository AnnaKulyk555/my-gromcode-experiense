function getSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i += 1) {
    sum += arr[i];
  }
  return Array.isArray(arr) ? sum : null;
}

// examples
getSum([1, 10, -10, 4]); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
