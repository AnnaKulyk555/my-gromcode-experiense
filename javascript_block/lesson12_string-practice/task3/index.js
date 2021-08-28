// input: array [' 1.9', '16.4', '17', ' 1 dollar ']
// output: array ['$1.90', '$16.40', '$17.00']

// algo
// iterate array
// delete elem if it includes letters
const cleanTransactionsList = array => {
  const resArray = array.map(elem => {
    elem = Number(elem);
    elem = elem.toFixed(2);
    return `$${elem}`;
  });

  return resArray.filter(elem => elem !== '$NaN');
};

// test
const array = [' 1.9', '16.4', '17', ' 1 dollar ', '', undefined, NaN, '14', 'dd'];
console.log(cleanTransactionsList(array));
console.log(array);
