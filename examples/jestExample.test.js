const { divide, sum } = require('./jestExample');

describe('jestExample', () => {
  test('divides 6 by 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});