const file =require('./CountVowel.js');
const vowelCount=file.vowelCount;
const vowelCountArrow=file.vowelCountArrow;

test('Count of vowel check' ,()=>{

    expect(vowelCount("codeacademy")).toBe(5);
})


test('Count of vowel check' ,()=>{

    expect(vowelCountArrow("codeacademy")).toBe(5);
})

