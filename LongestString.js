let longest=Number.MIN_VALUE;
let answer;
function LongestString(arr){
    for(let i=0;i<arr.length;i++){
        let string= arr[i];
        if(string.length>longest){
            answer=string;
            longest=string.length;
        }
    }
    return answer;
}
const LongestStringArrow = (arr) => {
    for(let i=0;i<arr.length;i++){
        let string= arr[i];
        if(string.length>longest){
            answer=string;
            longest=string.length;
        }
    }
    return answer;
}
console.log(LongestString);
module.exports = {LongestString,LongestStringArrow};
