import reverse from './reversedString'

test('string is reversed', () => {
  expect(reverse('love')).toBe('evol');
});

test('string is not the same as intered', () => {
  expect(reverse('love')).not.toBe('love');
});
