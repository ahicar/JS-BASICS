const { maxOfTwo, max } = require('./maxOfTwo');

describe('maxOfTwo', () => {
  test('returns the maximum of two numbers', () => {
    expect(maxOfTwo(5, 10)).toBe(10);
    expect(maxOfTwo(-3, 2)).toBe(2);
    expect(maxOfTwo(7, 7)).toBe(7);
  });

  test('returns the maximum of two numbers using max function', () => {
    expect(max(5, 10)).toBe(10);
    expect(max(-3, 2)).toBe(2);
    expect(max(7, 7)).toBe(7);
  });
});




