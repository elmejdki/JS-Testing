import analyze from './analyze';

test('The average of [2,2] is 2', () => {
  expect(analyze([2, 2]).average).toBe(2);
});

test('The average of [2,2] is not 4', () => {
  expect(analyze([2, 2]).average).not.toBe(4);
});

test('The min of [2,0,7] is 0', () => {
  expect(analyze([2, 0, 7]).min).toBe(0);
});

test('The min of [2,0,7] is not 10', () => {
  expect(analyze([2, 0, 7]).min).not.toBe(7);
});

test('The max of [2, 0, 7] is 7', () => {
  expect(analyze([2, 0, 7]).max).toBe(7);
});

test('The max of [2, 0, 7] is not 2', () => {
  expect(analyze([2, 0, 7]).max).not.toBe(2);
});

test('The length of [2, 0, 7] is 3', () => {
  expect(analyze([2, 0, 7]).length).toBe(3);
});

test('The length of [2, 0, 7] is not 4', () => {
  expect(analyze([2, 0, 7]).length).not.toBe(4);
});