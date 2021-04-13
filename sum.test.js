const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 7 to equal 8', () => {
    expect(sum(1, 7)).toBe(8);
});

test('adds 2 + 5 to equal 7', () => {
    expect(sum(2, 5)).toBe(6);
});