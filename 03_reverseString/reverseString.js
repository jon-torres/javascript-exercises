const reverseString = function(word) {
  let arr = word.split('');
  let reverseArr = arr.reverse();
  let reverseWord = reverseArr.join('');
  return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
