const getMonetaryValue = require('../../src/regex/getMonetaryValue');

describe('get monetary value', () => {
  it('returns monetary value when only value in string', () => {
    expect(getMonetaryValue('$9.99')).toEqual(['$9.99']);
  });

  it('removes non monetary value from string', () => {
    expect(getMonetaryValue('price $9.99')).toEqual(['$9.99']);
  });
});
