import analyze from './analyze';

test('returns average of an array', () => {
  expect(analyze([2,2]).average()).toBe(2);
})

test('returns minimum value of an array', () => {
  expect(analyze([2,0,7]).min()).toBe(0);
})

test('returns maximum value of an array', () => {
  expect(analyze([2,0,7]).max()).toBe(7);
})

test('returns the length of an array', () => {
  expect(analyze([2,0,7]).length()).toBe(3);
})