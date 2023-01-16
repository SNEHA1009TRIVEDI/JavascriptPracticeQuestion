function IsSameDigit(num) {
    let first = num % 10;
    while (num) {
        if (num % 10 !== first) return false;
        num = Math.floor(num / 10);
    }
    return true
}
  
const ISSameDigitsArrow = (num) =>{
    let first = num % 10;
    while (num) {
        if (num % 10 !== first) return false;
        num = Math.floor(num / 10);
    }
    return true
}



  console.log(IsSameDigit(22));
  module.exports={ISSameDigitsArrow,IsSameDigit};
  