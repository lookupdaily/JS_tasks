function find3LetterWords(string) {
  const regex = /\b[A-Za-z]{3}\b/g;
  return string.match(regex);
}

module.exports = find3LetterWords;
