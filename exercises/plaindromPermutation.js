/* eslint-disable require-jsdoc */
// node exercises/plaindromPermutation.js -a "pal lap"
const minimist = require('minimist');

function isPalindromePermutation(charArr) {
  const palindromeMap = {};
  charArr.forEach((char) => {
    if (palindromeMap[char] > 0) {
      palindromeMap[char] = palindromeMap[char] + 1;
    } else {
      palindromeMap[char] = 1;
    }
  });
  console.log(`plaindromeMap '${JSON.stringify(palindromeMap)}'`);
  let unevenCount = 0;
  Object.keys(palindromeMap).forEach((key) => {
    if (palindromeMap[key] % 2 > 0) unevenCount = unevenCount + 1;
  });
  if ((charArr.length % 2) > 0) {
    return (unevenCount % 2) > 0 ? true : false;
  } else {
    return (unevenCount) > 0 ? false : true;
  }
}

function main(args) {
  const charArr = args.a.split('');

  console.log(`Answer is '${isPalindromePermutation(charArr)}'`);
}

const args = minimist(process.argv.slice(2));

console.log(`input is '${args.a}', ${args.b}`);
main(args);
