function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const arrayClone = [];
  for (let index = 0; index < arr.length; index += 1) {
    arrayClone.push(arr[index]);
  }

  return arrayClone;
}

// test
cloneArr([1, 2, 3, 5, 8]);
cloneArr([5, 8]);
cloneArr([555555, -8]);
cloneArr(-7);
cloneArr(7);
