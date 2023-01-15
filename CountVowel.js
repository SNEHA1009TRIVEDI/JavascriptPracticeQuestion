const vowel = ['a','e','i','o','u'];
function vowelCount(str){
    
    let cnt = 0;
    for (itr of str){
        if(vowel.includes(itr)) cnt++;
    }
    return cnt;
}
const vowelCountArrow = (str) => {
    
    let cnt = 0;
    for (itr of str){
        if(vowel.includes(itr)) cnt++;
    }
    return cnt;
}

console.log(vowelCount("codeacademy"));
module.exports={vowelCount,vowelCountArrow};