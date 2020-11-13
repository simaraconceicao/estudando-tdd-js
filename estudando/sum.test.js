const sum = require('./sum')

test('add two numbers', () => {
    expect(
        sum(1,2)
    ).toBe(3)
})