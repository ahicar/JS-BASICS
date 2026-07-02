const {checkSpeed} = require('./demeritus');

describe('checkSpeed', () => {
  test('returns "Ok" for speeds less than or equal to 70', () => {
    expect(checkSpeed(60)).toBe("Ok");
    expect(checkSpeed(70)).toBe("Ok");
  });

  test('returns "Points: 1" for speeds between 71 and 75', () => {
    expect(checkSpeed(71)).toBe("Points: 1");
    expect(checkSpeed(75)).toBe("Points: 1");
  });

  test('returns "Points: 2" for speeds between 76 and 80', () => {
    expect(checkSpeed(76)).toBe("Points: 2");
    expect(checkSpeed(80)).toBe("Points: 2");
  });

   test('returns "License suspended" for points above 12', () => {
    expect(checkSpeed(130)).toBe("License suspended");
    expect(checkSpeed(150)).toBe("License suspended");
  });
});
