import { sub } from '../sub'; // assuming the sum function is in sum.ts

describe('sub function', () => {
  test('subs two numbers correctly', () => {
    expect(sub(-1, -1)).toBe(0);
  });

  test('subs zero correctly', () => {
    expect(sub(0, 5)).toBe(-5);
    expect(sub(5, 0)).toBe(5);
  });
});
