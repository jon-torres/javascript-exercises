const palindromes = function (palindrome) {
  let re = /[^A-Za-z0-9]/g;
  palindrome = palindrome.toLowerCase().replace(re, "");
  let len = palindrome.length;
  for (let i = 0; i < len / 2; i++) {
    if (palindrome[i] !== palindrome[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Fancier way
// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//   };

// Do not edit below this line
module.exports = palindromes;
