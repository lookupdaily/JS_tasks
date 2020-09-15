const find3LetterWords = require('../../src/regex/find3LetterWords');

describe('find three letter word', () => {
  it('returns three letter word in three letter string', () => {
    expect(find3LetterWords('the')).toEqual('the');
  });

  it('returns only the three letter word in a two word string', () => {
    expect(find3LetterWords('the quick')).toEqual('the');
  });
});
