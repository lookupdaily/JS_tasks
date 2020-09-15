function find3LetterWords(string) {
  const regex = /\b[A-Za-z]{3}\b/g;
  const matchingWords = string.match(regex);
  return matchingWords.join(' ');
}

module.exports = find3LetterWords;
