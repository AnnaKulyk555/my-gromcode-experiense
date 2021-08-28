function findDivCount(a, b, n) {
  let count = 0;
  for (let index = a; index <= b; index += 1) {
    if (index % n === 0) {
      count += 1;
    }
  }

  return count;
}
