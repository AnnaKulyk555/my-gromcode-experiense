import { withdraw } from './withdraw';

it('should get -1 if client balance < amount', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

it('should keep balances not changed if client balance < amount', () => {
  const result = [1400, 87, -6];
  withdraw(['Ann', 'John', 'User'], result, 'User', 10);

  expect(result).toEqual([1400, 87, -6]);
});

it('should get new client balance after operation: balance < amount', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});
