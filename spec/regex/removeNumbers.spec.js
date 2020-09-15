const removeNumbers = require('../../src/regex/removeNumbers');

describe('remove numbers', () => {
  it('does not remove any characters from a string with no numbers', () => {
    expect(removeNumbers('a')).toEqual('a');
  });

  it('removes one number from a string with a single letter and digit', () => {
    expect(removeNumbers('a1')).toEqual('a');
  })
});
