/* eslint-disable require-jsdoc */
const minimist = require('minimist');


function main(args) {
  const str1 = args.a.split('');
  const str2 = args.b.split('');

  if (str1.length !== str2.length) {
    console.log('the two strings are not permutations - exiting');
    return;
  }

  str1.forEach((char, index) => {
    const indexStr2 = str2.indexOf(char);
    console.log(str2.indexOf(char));
    console.log(char);
    if (indexStr2 != -1) str2.splice(indexStr2, 1);
  });

  console.log(`Answer is ${str2.length == 0}`);
}

const args = minimist(process.argv.slice(2));

console.log(`input is ${args.a},${args.b}`);
main(args);
