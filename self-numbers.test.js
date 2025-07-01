const { hasGenerator, totalSelfNums } = require('./self-numbers');

describe('test self numbers', () => {
    test('hasGenerator 1 should return false', () => {
        expect(hasGenerator(1)).toBe(false)
    });

    test('totalSelfNums 9 should return 16', () => {
        expect(totalSelfNums(9)).toBe(16)
    });
});