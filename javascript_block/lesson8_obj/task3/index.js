/* eslint-disable dot-notation */
const transaction = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  agent: {
    country: 'Ukraine',
    company: 'NYSE',
  },
  'operation time': 1584029990001,
};

console.log(transaction.currency);

console.log(transaction['value']);

const key = 'operation';
/* выведи в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
console.log(transaction[key]);
/* выведи в консоль значение свойства 'company' используя квадратные скобки */
console.log(transaction['agent']['company']);

/* выведи в консоль значение свойства 'country' используя точку */
console.log(transaction.agent['country']);

/* выведи в консоль значение свойства 'operation time' используя квадратные скобки */
console.log(transaction['operation time']);
