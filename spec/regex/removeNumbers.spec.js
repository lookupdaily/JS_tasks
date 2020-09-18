const removeNumbers = require('../../src/regex/removeNumbers');

describe('remove numbers', () => {
  it('does not remove any characters from a string with no numbers', () => {
    expect(removeNumbers('a')).toEqual('a');
  });

  it('removes one number from a string with a single letter and digit', () => {
    expect(removeNumbers('a1')).toEqual('a');
  });

  it('removes more than one number from a string with multiple numbers', () => {
    expect(removeNumbers('a12b')).toEqual('ab');
  });

  it('works with capital letters', () => {
    expect(removeNumbers('A1')).toEqual('A');
  });

  it('returns an empty string if no matches', () => {
    expect(removeNumbers('1')).toEqual('');
  });

  it('works for supplied test case', () => {
    const string = 'A1B2C3D4E5F6G7H8I9J10';
    const expected = 'ABCDEFGHIJ';
    expect(removeNumbers(string)).toEqual(expected);
  });
});
