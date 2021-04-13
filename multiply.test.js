const multiply = require('./multiply');

test('adds 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
});


test('adds 2*2 to equal 4', () => {
    expect(multiply(2, 2)).toBe(4);
});