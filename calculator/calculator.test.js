import calculator from './calculator'

describe('Negative test cases', () => {
  test('5 plus 5 is not equal to 3', () => {
    expect(calculator.add(5, 5)).not.toBe(3);
  })
  
  test('10 minus 7 is not equal to 6', () => {
    expect(calculator.subtract(10, 7)).not.toBe(6);
  })
  
  test("10 divide by 5 is not equal to 21", () => {
    expect(calculator.divide(10, 5)).not.toBe(21);
  })
  
  test('5 multiplied with 5 is not equal to 23', () => {
    expect(calculator.multiply(5, 5)).not.toBe(23);
  })
});

describe('Positive test cases', () => {
  test('5 plus 5 is equal to 10', () => {
    expect(calculator.add(5, 5)).toBe(10);
  })
  
  test('10 minus 7 is equal to 3', () => {
    expect(calculator.subtract(10, 7)).toBe(3);
  })
  
  test("10 divide by 5 is equal to 2", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  })
  
  test('5 multiplied with 5 is equal to 25', () => {
    expect(calculator.multiply(5, 5)).toBe(25);
  })
});
