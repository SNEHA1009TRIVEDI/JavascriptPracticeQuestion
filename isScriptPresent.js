function isPresent(str) {
    return ((str.substring(str.length - 6, str.length) == 'Script')?true:false);
}

const isPresentArrow = (str) => {
    return ((str.substring(str.length - 6, str.length) == 'Script')?true:false);
}
  console.log(isPresent("Java Scripts"));
module.exports={isPresent,isPresentArrow};
  