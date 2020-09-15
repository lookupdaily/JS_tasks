function find3LetterWords(string) {
  const regex = /\b[A-Za-z]{3}\b/g;
  const matchingWords = string.match(regex);
  if (matchingWords) {
    return matchingWords.join(' ');
  } else {
    return 'No three letter word found in string'
  }
}

module.exports = find3LetterWords;
