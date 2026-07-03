const countTruthy = require ('./countTruthy');

describe('countTruthy', () => {
  test('counts the number of truthy elements in an array', () => {
    const array = [0, null, undefined, '', 2, 3, 'hello', false, true];
    expect(countTruthy(array)).toBe(4);
  });

  test('returns 0 for an empty array', () => {
    const array = [];
    expect(countTruthy(array)).toBe(0);
  });

  test('returns 0 for an array with all falsy values', () => {
    const array = [0, null, undefined, '', false];
    expect(countTruthy(array)).toBe(0);
  });

  test('returns the correct count for an array with mixed values', () => {
    const array = [1, 'string', true, false, null, undefined];
    expect(countTruthy(array)).toBe(3);
  });
}); 