function reverseNumber(number) {
  if (typeof number !== 'number') {
    return 'not a number';
  }

  var digits = number.toString().split('');
  for (var i = 0; i < digits.length / 2; i++) {
    var item = digits[i];
    digits[i] = digits[digits.length - (i + 1)];
    digits[digits.length - (i + 1)] = item;
  }
  return parseInt(digits.join(''));
}

module.exports = reverseNumber;
