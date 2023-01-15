function isLeapYear(year){
    return ((year%4==0  && year % 100==0) || (year % 400==0))?true:false;
    
}

const isLeapYearArrow = (year)=>{
    return ((year%4==0  &&  year % 100==0) || (year % 400==0))?true:false;
}

console.log(isLeapYear(2000));
module.exports={isLeapYear,isLeapYearArrow};