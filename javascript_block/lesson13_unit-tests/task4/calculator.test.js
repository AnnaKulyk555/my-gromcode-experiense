import { calc } from './calculator';

it('should get null if type of argument not a string', () => {
  const result = calc(15);

  expect(result).toEqual(null);
});

it('should get string with expression sum of numbers', () => {
  const result = calc('1 + 6');

  expect(result).toEqual('1 + 6 = 7');
});

it('should get string with expression subtraction of numbers', () => {
  const result = calc('7 - 6');

  expect(result).toEqual('7 - 6 = 1');
});

it('should get string with expression multiplication of numbers', () => {
  const result = calc('7 * 5');

  expect(result).toEqual('7 * 5 = 35');
});

it('should get string with expression division of numbers', () => {
  const result = calc('10 / 5');

  expect(result).toEqual('10 / 5 = 2');
});
