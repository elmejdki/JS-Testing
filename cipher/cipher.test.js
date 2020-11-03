import cipher from './cipher';

test('cipher of edu with one shift is equal to fev', () => {
  expect(cipher('edu', 1)).toBe('fev');
});

test('cipher of edu with one shift is not equal to edu', () => {
  expect(cipher('edu', 1)).not.toBe('edu');
});

test('cipher of edu with zero shift is equal to fev', () => {
  expect(cipher('edu', 0)).toBe('edu');
});

test('cipher of edu with 102 shift is equal to cipher of edu with 102 shift', () => {
  expect(cipher('edu', 102)).toBe(cipher('edu', 2));
});

test('cipher of zzzZZZ with one shift is equal to aaaAAA', () => {
  expect(cipher('zzzZZZ', 1)).toBe('aaaAAA');
});

test('cipher of aAbx]{!,. with one shift is equal to cCdz]{!,.', () => {
  expect(cipher('aAbx]{!,.', 2)).toBe('cCdz]{!,.');
});
