const start = 16;
const end = 30;
let result = 0;

for (let index = start; index <= end; index += 1) {
  if (index % 5 === 0) {
    console.log(index);
    break;
  }
  if (index % 2 === 0 && index % 4 !== 0) {
    result += index;
    break;
  }
  if (index % 3 === 0) {
    result -= index;
    break;
  }
  if (index % 4 === 0) {
    result *= index;
    break;
  }
}
