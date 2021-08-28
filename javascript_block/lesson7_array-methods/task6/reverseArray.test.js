import { reverseArray } from './reverseArray';

it('should get null if argument is not array', () => {
  const result = reverseArray('test');

  expect(result).toEqual(null);
});

it('should get reverse array', () => {
  const result = reverseArray([1, 2, 3]);

  expect(result).toEqual([3, 2, 1]);
});

it('should keep incoming array not changed', () => {
  const result = [1, 2, 3];
  reverseArray(result);

  expect(result).toEqual([1, 2, 3]);
});
