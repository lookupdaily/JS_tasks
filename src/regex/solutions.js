const find3LetterWords = require('./find3LetterWords');
const getEmail = require('./getEmail');
const getMonetaryValue = require('./getMonetaryValue');
const getTelephoneNumber = require('./getTelephoneNumber');
const removeNumbers = require('./removeNumbers');

const ex1 = 'The quick brown fox jumped over the lazy dog';
const ex1Solution = find3LetterWords(ex1);
console.log('Exercise 1:', ex1Solution);

const ex2 = 'A1B2C3D4E5F6G7H8I9J10';
const ex2Solution = removeNumbers(ex2);
console.log('Exercise 2:', ex2Solution);

const ex3 = 'The salad costs $9.99';
const ex3Solution = getMonetaryValue(ex3);
console.log('Exercise 3:', ex3Solution);

const ex4 = 'Contact customer support on 0800 300 500';
const ex4Solution = getTelephoneNumber(ex4);
console.log('Exercise 4:', ex4Solution);

const ex5 = 'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com';
const ex5Solution = getEmail(ex5);
console.log('Exercise 5:', ex5Solution);