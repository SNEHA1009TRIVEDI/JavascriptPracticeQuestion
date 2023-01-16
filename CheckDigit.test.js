const file = require('./ChecKDigit')
const ISSameDigitArrow = file.ISSameDigitsArrow;
const ISSameDigit = file.IsSameDigit;


test('Testing issameDigits normal function', ()=> {
    expect(ISSameDigit(22)).toBe(true)
    expect(ISSameDigit(23)).toBe(false)
    expect(ISSameDigit(11111112)).toBe(false)

})
test('Testing issameDigits arrow function', ()=> {
    expect(ISSameDigitArrow(22)).toBe(true)
    expect(ISSameDigitArrow(23)).toBe(false)
    expect(ISSameDigitArrow(11111112)).toBe(false)

})

