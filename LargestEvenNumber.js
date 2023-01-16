const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function LargestEvenNumber(num){ 
    let max = Number.MIN_VALUE;
    for(let i=0; i<num.length; i++)
        if(num[i]>max && num[i]%2==0){ 
            max = num[i];
        }
    return (max==Number.MIN_VALUE?-1:max);
}

const LargestEvenNumberArrow = (num) => {
    let max = Number.MIN_VALUE;
    for(let i=0; i<num.length; i++)
        if(num[i]>max && num[i]%2==0){
            max = num[i];
        }    
    return (max==Number.MIN_VALUE?-1:max);
}

console.log(LargestEvenNumber(numbers))
console.log(LargestEvenNumberArrow(numbers))

module.exports = {LargestEvenNumber, LargestEvenNumberArrow}
