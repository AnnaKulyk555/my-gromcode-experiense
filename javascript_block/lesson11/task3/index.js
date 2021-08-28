// input: string, num (chunkLen)
// output: array || null

// algo
// default chunkLen = 10;
// check typeof string === 'string' if not return null
// create empty array
// split the string into substrings: length === chunkLen
// push substrings to the array
// if the last substring.length < chunkLen => it should be completed with ...

function splitString(text, chunkLen = 10) {
  if (typeof text !== 'string') {
    return null;
  }

  const strArray = [];
  let startPosition = 0;
  while (true) {
    const chunk = text.substr(startPosition, chunkLen);

    if (chunk.length === 0) {
      break;
    }

    strArray.push(chunk);
    startPosition += chunkLen;
  }
  if (strArray[strArray.length - 1].length < chunkLen) {
    strArray[strArray.length - 1] = strArray[strArray.length - 1].concat(
      '.'.repeat(chunkLen - strArray[strArray.length - 1].length),
    );
  }

  return strArray;
}

// test
const text = 'Lorem ipsum dolor sit';
console.log(splitString(text, 16));
console.log(splitString(text));
console.log(splitString(15, 10));
