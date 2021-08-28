// input: string, num (chunkLen)
// output: string || null

// algo
// check typeof string === 'string' if not return null
// split the string into substrings: length === chunkLen, the first letter in upperCase, start in a new line
// default chunkLen = 10;

function splitText(text, chunkLen = 10) {
  if (typeof text !== 'string') {
    return null;
  }
  const srtArr = [];
  let startPosition = 0;

  while (true) {
    const chunk = text.substr(startPosition, chunkLen);

    if (chunk.length === 0) {
      break;
    }

    srtArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += chunkLen;
  }

  return srtArr.join('\n');
}

// test
const text =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.';
console.log(splitText(text, 6));
console.log(splitText(text, 2));
console.log(splitText(text));
console.log(splitText(15, 10));
