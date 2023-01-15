
const file =require('./IsLeapYear');
const isleap=file.isLeapYear;
const isLeapyeararrow=file.isLeapYearArrow;

test('check for leap year' ,()=>{
    expect(isleap(1998)).toBe(false);
    expect(isleap(2000)).toBe(true);
    expect(isleap(2012)).toBe(false);
})

test('check for leap year' , () => {
    expect(isLeapyeararrow(2026)).toBe(false);
    expect(isLeapyeararrow(2013)).toBe(false);
    expect(isLeapyeararrow(2015)).toBe(false);
})
