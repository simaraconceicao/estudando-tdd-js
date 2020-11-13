const cloneArray = require('./cloneArray')

test('cloning array', ()=>{
    array = [1,2,3]
    expect(
        cloneArray(array)
    ).toEqual(array)
})