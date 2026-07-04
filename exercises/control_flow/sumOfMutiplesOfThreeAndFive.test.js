const sum = require('./sumOfMutiplesOfThreeAndFive');

describe('sum', () => {
  test('returns the sum of all multiples of 3 and 5 including the limit', () => {
    expect(sum(10)).toBe(33);
    expect(sum(15)).toBe(60);
    expect(sum(20)).toBe(98);
  });

    test('returns 0 for limit less than 3', () => {
      expect(sum(2)).toBe(0);
    });
});