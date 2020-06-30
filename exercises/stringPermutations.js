// node exercises/stringPermutations.js -a gever -b everg

const minimist = require('minimist');


function main(args) {
  const str1 = args.a.split('');
  const str2 = args.b.split('');

  if (str1.length !== str2.length) {
    console.log('the two strings are not permutations - exiting');
    return;
  }

  str1.sort();
  str2.sort();

  str1.forEach((char, index) => {
    if (str2[index] != char) {
      console.log('the two strings are not permutations - exiting');
      return;
    }
  });

  console.log('the two strings are permutations - Woohoo!');
}

const args = minimist(process.argv.slice(2));

console.log(`input is ${args.a},${args.b}`);
main(args);
