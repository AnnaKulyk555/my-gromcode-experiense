import { getAdults } from './getAdults';

it('should get new obj with people who age > 18', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('should get empty obj if in argument obj is empty', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

it('should keep incoming obj not changed', () => {
  const result = { Ann: 56, Andrey: 7 };
  getAdults(result);

  expect(result).toEqual({ Ann: 56, Andrey: 7 });
});
