import calculator from './calculator'

test('adds two numbers', () => {
  expect(calculator.add(5, 5)).toBe(10);
})

test('subtracts two numbers', () => {
  expect(calculator.subtract(10, 7)).toBe(3);
  expect(calculator.subtract(10, 3)).toEqual(expect.any(Number));
})