const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log('got the following args', args);
console.log(args.a[0]);
