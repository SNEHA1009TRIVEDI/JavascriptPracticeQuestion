const file = require('./ChangeChar.js')
const changeCharacter = file.ChangeCharacter;
const changeCharacterArrow = file.ChangeCharacterArrow;

test('Testing change chjaracter function', () => {
    expect(changeCharacter("heLLo")).toBe("HEllO");
    expect(changeCharacter("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
})

test('Testing replaceCharacterRegular function', () => {
    expect(changeCharacterArrow("Hello")).toBe("hELLO");
    expect(changeCharacterArrow("WORLD")).toBe("world");
    
})