let initialNum = 0;

export function add(num) {
  initialNum += num;
  return initialNum;
}

export function decrease(num) {
  initialNum -= num;
  return initialNum;
}

export function reset() {
  initialNum = 0;
}

export function getMemo() {
  return initialNum;
}

// test
// console.log(initialNum);
// console.log(add(6));
// console.log(decrease(2));
// reset();
// console.log(getMemo());
// console.log(initialNum);
