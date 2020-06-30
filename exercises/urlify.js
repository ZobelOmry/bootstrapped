/* eslint-disable require-jsdoc */
// node exercises/urlify.js -a "a b c de      "  -b 9
const minimist = require('minimist');


function findIndexOfCompared(str, index, compareMethod) {
  for (let i = index - 1; i >= 0; i--) {
    if (compareMethod(str[i])) {
      return i;
    }
  }
  return -1;
}

function findWhiteSpaceIndex(str, index) {
  return findIndexOfCompared(str, index, (char) => (char == ' ') );
}

function findCharIndex(str, index) {
  return findIndexOfCompared(str, index, (char) => (char != ' ') );
}

function main(args) {
  const str = args.a.split('');
  const stringLength = str.length;
  let copyTo = findWhiteSpaceIndex(str, stringLength);
  let copyFrom = findCharIndex(str, stringLength);
  while (copyTo > 0) {
    if (str[copyFrom] != ' ') {
      str[copyTo] = str[copyFrom];
      str[copyFrom] = '';
    } else {
      str[copyTo] = '0';
      str[--copyTo] = '2';
      str[--copyTo] = '%';
    }
    copyFrom--;
    copyTo--;
  }

  console.log(`Answer is '${str.join('')}'`);
}

const args = minimist(process.argv.slice(2));

console.log(`input is '${args.a}', ${args.b}`);
main(args);
