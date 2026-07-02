const { showNumbers } = require('./evodNumbers');

describe('showNumbers', () => {
  test('logs the correct numbers and their parity', () => {
    console.log = jest.fn(); // Mock console.log
    showNumbers(4);
    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenNthCalledWith(1, '0 is even');
    expect(console.log).toHaveBeenNthCalledWith(2, '1 is odd');
    expect(console.log).toHaveBeenNthCalledWith(3, '2 is even');
    expect(console.log).toHaveBeenNthCalledWith(4, '3 is odd');
    expect(console.log).toHaveBeenNthCalledWith(5, '4 is even');
  });
});
