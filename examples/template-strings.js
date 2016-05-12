
var size = 'huge', feels = 'awesome';

// We frequently need to build strings while injecting varibles
console.log('This feature is ' + feels + '!\nIt\'s going to be ' + size + '!');

// Now we can use template strings to inject values
// console.log(`This feature is ${feels}!\nIt's going to be ${size}!`);

// Template strings can span multiple lines
// console.log(`Strings can span
// multiple lines now.

// I told you this was ${size}!`);

// You can use any javascript expression in your templates
// console.log(`The date is: ${ new Date().toISOString() }`);
