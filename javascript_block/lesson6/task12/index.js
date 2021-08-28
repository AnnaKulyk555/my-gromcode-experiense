function sortAsc(arr) {
  for (let i = 0, endI = arr.length - 1; i < endI; i += 1) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }

    if (!wasSwap) break;
  }
  return arr;
}

function sortDesc(arr) {
  for (let i = 0, endI = arr.length - 1; i < endI; i += 1) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j += 1) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        wasSwap = true;
      }
    }

    if (!wasSwap) break;
  }
  return arr;
}

// test
// let numbers = [12, 10, 15, 11, 14, 13, 16];
// sortDesc(numbers);
// sortAsc(numbers);
// console.log(numbers);
