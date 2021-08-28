export function getSquaredArray(arr) {
  return arr.map(elem => elem * elem);
}

export function getOddNumbers(arr) {
  return arr.filter(elem => elem % 2 !== 0);
}

export default (firstNum, secondNum) => firstNum + secondNum;
