const processInteger = require('./fizzbuzz')

test('process integer', ()=> {
    expect(
        processInteger(3)
    ).toBe('fizz');
    expect(
        processInteger(5)
    ).toBe('Buzz');
    expect(
        processInteger(15)
    ).toBe('fizzBuzz');
})