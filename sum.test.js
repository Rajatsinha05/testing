const { sum } = require('./index');

describe('sum function', () => {
  test('adds two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('handles string inputs as numbers', () => {
    expect(sum('3', '4')).toBe(7);
  });

  test('handles mixed string and number inputs', () => {
    expect(sum(5, '6')).toBe(11);
  });

  test('returns NaN for invalid inputs', () => {
    expect(sum('a', 5)).toBeNaN();
  });
});
