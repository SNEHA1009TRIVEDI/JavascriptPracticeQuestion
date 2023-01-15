
const file =require('./isScriptPresent');
const isPresent=file.isPresent;
const isPresentArrow=file.isPresentArrow;

test('check for leap year' ,()=>{
    expect(isPresent("JavaScript")).toBe(true);
    expect(isPresent("Java Script")).toBe(true);
    expect(isPresent("JavaScripts")).toBe(false);
})

test('check for leap year' ,()=>{
    expect(isPresentArrow("JavaScript")).toBe(true);
    expect(isPresentArrow("Java Script")).toBe(true);
    expect(isPresentArrow("JavaScripts")).toBe(false);
})