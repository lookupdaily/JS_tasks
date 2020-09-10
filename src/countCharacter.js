function countCharacter(string, character) {
  if (character) {
    var characters = string.split('');
    var output = 0;
    for (var i = 0; i < characters.length; i++) {
      if (characters[i] === character) {
        output += 1;
      }
    }
    return output;
  }
  return 'no character provided';
}

module.exports = countCharacter;
