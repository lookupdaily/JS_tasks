function find3LetterWords(string) {
  return string.match(/[a-z]{3}/).join(' ');
}

module.exports = find3LetterWords;
