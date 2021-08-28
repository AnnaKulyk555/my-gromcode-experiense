// input: string (text), string (substring)
// output: number (count of occurrences) || null

// algo
// default text = '';
// check if str is empty return null
// use .split for create array with substrings where separator is removed
// count of occurrences will be array.length - 1

const countOccurrences = (text = '', str) => {
  if (str.length <= 0) {
    return null;
  }
  const resArr = text.split(str);
  return resArr.length - 1;
};

// test
const text = 'lorem ipsum dolor sit';
let textV2;
console.log(countOccurrences(text, 'o'));
console.log(countOccurrences(text, 'lo'));
console.log(countOccurrences(text, 's'));
console.log(countOccurrences(text, ' '));
console.log(countOccurrences(text, ' do'));
console.log(countOccurrences(textV2, 'l'));
console.log(countOccurrences(text, ''));
