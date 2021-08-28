const getMinSquareNumber = array => {
  if (!Array.isArray(array) || array.length <= 0) {
    return null;
  }
  const resArr = array.map(num => Math.abs(num));
  let result = Math.min(...resArr);
  result *= result;
  return result;
};

export default getMinSquareNumber;
