function Concatenate(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
  }
 const  ConcatenateArrow = (str1, str2) => {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
  }
  
  

  module.exports ={Concatenate,ConcatenateArrow};
  