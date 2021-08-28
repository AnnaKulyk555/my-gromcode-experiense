// input: string
// output: reverse string || null

// algo
// check if string === 'string'
// reverse string use three methods:
// String.prototype.split() method,
//  Array.prototype.reverse() method
// Array.prototype.join() method.

const reverseString = string => {
  if (typeof string !== 'string') {
    return null;
  }
  const result = string.split('');
  console.log(result);
  result.reverse();
  const resStr = result.join('');
  return resStr;
};

// test
const text = 'hello World';
console.log(reverseString(text));
console.log(reverseString(15));
