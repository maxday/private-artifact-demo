import { sum } from '../sum'; // assuming the sum function is in sum.ts

describe('sum function', () => {
  test('adds two positive numbers correctly', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds a positive and negative number correctly', () => {
    expect(sum(5, -3)).toBe(2);
  });

  test('adds two negative numbers correctly', () => {
    expect(sum(-1, -1)).toBe(-2);
  });

  test('adds zero correctly', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });
});
