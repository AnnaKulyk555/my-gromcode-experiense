/* eslint-disable no-continue */
const start = 1;
const end = 10;
let result = 0;

for (let index = start; index <= end; index += 1) {
  if (index % 5 === 0) {
    console.log(index);
    continue;
  }
  if (index % 2 === 0 && index % 4 !== 0) {
    result += index;
    continue;
  }
  if (index % 3 === 0) {
    result -= index;
    continue;
  }
  if (index % 4 === 0) {
    result *= index;
    continue;
  }
}
