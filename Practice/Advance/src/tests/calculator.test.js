// calculator.test.js

describe('Calculator Operations', () => {
    let calculator;

    beforeEach(() => {
        calculator = {
            add: (a, b) => a + b,
            subtract: (a, b) => a - b,
            multiply: (a, b) => a * b,
            divide: (a, b) => {
                if (b === 0) {
                    throw new Error('Divisor cannot be zero');
                }
                return a / b;
            }
        };
    });

    test('adds two numbers', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('subtracts two numbers', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('multiplies two numbers', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('divides two numbers', () => {
        expect(calculator.divide(10, 2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
        expect(() => calculator.divide(10, 0)).toThrow('Divisor cannot be zero');
    });
});