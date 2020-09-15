const find3LetterWords = require('../../src/regex/find3LetterWords');

describe('find three letter word', () => {
  it('returns three letter word in three letter string', () => {
    expect(find3LetterWords('the')).toEqual('the');
  });

  it('returns only the three letter word in a two word string', () => {
    expect(find3LetterWords('the quick')).toEqual('the');
  });

  it('returns more than one three letter word', () => {
    expect(find3LetterWords('the quick brown fox')).toEqual('the fox');
  });

  it('inores capital letters', () => {
    expect(find3LetterWords('The')).toEqual('The');
  })
});
