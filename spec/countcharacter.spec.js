var countCharacter = require('../src/countCharacter');

describe('countCharacter', () => {
  it('returns 1 for a matching one letter string', () => {
    expect(countCharacter('a', 'a')).toEqual(1);
  });

  it('returns 0 if no matching character', () => {
    expect(countCharacter('a', 'b')).toEqual(0);
  });

  it('returns 1 if only one letter matching in longer string', () => {
    expect(countCharacter('ab', 'a')).toEqual(1);
  });

  it('returns more than 1 if there is more than one matching character in the string', () => {
    expect(countCharacter('aab', 'a')).toEqual(2);
  });

  it('works with spaces', () => {
    expect(countCharacter('test it', 't')).toEqual(3);
  });

  it('works with empty string', () => {
    expect(countCharacter('', 'a')).toEqual(0);
  });

  it('show error if no character provided', () => {
    expect(countCharacter('q', '')).toEqual('no character provided');
  });

  it('should work for capital letters in string', () => {
    expect(countCharacter('Test', 't')).toEqual(2);
  })
});
