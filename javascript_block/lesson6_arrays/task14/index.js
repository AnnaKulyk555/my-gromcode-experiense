const getSubArray = (arr, numberOfElements) => {
  const subArray = [];
  for (let index = 0; index < numberOfElements; index += 1) {
    subArray.push(arr[index]);
  }

  return subArray;
};

// test
// console.log(getSubArray([1, 6, 8, 9, 6], 3));
