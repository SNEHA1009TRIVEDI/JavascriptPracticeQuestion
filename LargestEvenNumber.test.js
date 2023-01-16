const file = require('./LargestEvenNumber.js')
const LargestEvenNumber = file.LargestEvenNumber;
const LargestEvenNumberArrow = file.LargestEvenNumberArrow;


test('Testing for largest even  number', ()=> {
    expect(LargestEvenNumber([1,2,3,4,5,6,7,8])).toBe(8);
    expect(LargestEvenNumber([1,3,5,7,9])).toBe(-1);

})

test('Testing for largest even  number', ()=> {
    expect(LargestEvenNumberArrow([1,2,3,4,5,6,7,8])).toBe(8);
    expect(LargestEvenNumberArrow([1,3,5,7,9])).toBe(-1);

})
