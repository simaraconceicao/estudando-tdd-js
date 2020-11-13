const subtract = require('./subtract')

test('subtracting two numbers', ()=> {
    expect(
        subtract(1,2)
    ).toBe(-1)
})