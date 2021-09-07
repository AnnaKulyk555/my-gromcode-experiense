// input: numbers
// output: num

export function sumOfSquares() {
  return [...arguments].reduce((acc, num) => {
    acc += num * num;
    return acc;
  });
}

// test
// console.log(sumOfSquares(1, 2, 3));
// console.log(sumOfSquares(0, 2));
