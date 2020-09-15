const removeNumbers = require('../../src/regex/removeNumbers')

describe('remove numbers', () => {
  it('does not remove any characters from a string with no numbers', () => {
    expect(removeNumbers('a')).toEqual('a');
  });
});
