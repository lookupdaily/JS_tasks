function find3LetterWords(string) {
  let words = string.split(' ');
  let output = [];

  words.forEach(word => {
    if(word.length === 3) {
      output.push(word);
    }
  })

  return output.join(' ');
}

module.exports = find3LetterWords;
