const file =require('./LongestString');
const LongestString=file.LongestString;
const LongestStringArrow=file.LongestStringArrow;

test('Test to find the longest string in an array', () => {
    expect(LongestString(["we", "love", "code", "academy"])).toBe("academy");
   
})
test('Test to find the longest string in an array', () => {
    expect(LongestStringArrow(["we", "love", "code", "academy"])).toBe("academy");
   
})