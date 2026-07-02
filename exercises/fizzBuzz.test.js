const fizzBuzz = require ('./fizzBuzz');

describe('fizzBuzz', () => {
  test('returns "Fizz" for numbers divisible by 3', () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  test('returns "Buzz" for numbers divisible by 5', () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  test('returns "FizzBuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  test('returns the number itself for numbers not divisible by 3 or 5', () => {
    expect(fizzBuzz(7)).toBe(7);
  });

  test('returns "NaN" for non-number inputs', () => {
    expect(fizzBuzz("hello")).toBe("NaN");
    expect(fizzBuzz(null)).toBe("NaN");
    expect(fizzBuzz(undefined)).toBe("NaN");
  });
}); 