/* eslint-disable default-case */
// '1 + 2' => '1 + 2 = 3'

// OPTION 1
// const calc = expression => {
//   const a = expression.split(' ');
//   let result;

//   switch (a[1]) {
//     case '+':
//       result = Number(a[0]) + Number(a[2]);
//       break;
//     case '-':
//       result = a[0] - a[2];
//   }

//   return `${expression} = ${result}`;
// };

// OPTION 2
const calc = expression => {
  const [a, operator, b] = expression.split(' ');
  let result;

  switch (operator) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
  }

  return `${expression} = ${result}`;
};

console.log(calc('1 + 2'));
console.log(calc('9 - 2'));
console.log(calc('9 * 2'));
console.log(calc('8 / 2'));
