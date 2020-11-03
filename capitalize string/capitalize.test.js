import capitalize from './capitalize';

test('First letter is uppercased', () => {
  expect(capitalize('edu')).toBe('Edu');
});

test('First letter is not lowercased', () => {
  expect(capitalize('edu')).not.toBe('edu');
});