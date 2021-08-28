import getMinSquareNumber from './getMinSquareNumber';

it('should get null if argument is empty array', () => {
  const result = getMinSquareNumber([]);

  expect(result).toEqual(null);
});

it('should get null if argument is not array', () => {
  const result = getMinSquareNumber('test');

  expect(result).toEqual(null);
});

it('should get square of min absolute number from array if argument is array', () => {
  const result = getMinSquareNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
