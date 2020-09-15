const getMonetaryValue = require('../../src/regex/getMonetaryValue');

describe('get monetary value', () => {
  it('returns monetary value when only value in string', () => {
    expect(getMonetaryValue('$9.99')).toEqual(['$9.99']);
  });

  it('removes non monetary value from string', () => {
    expect(getMonetaryValue('price $9.99')).toEqual(['$9.99']);
  });

  it('accepts monetary values with no decimals', () => {
    expect(getMonetaryValue('$10')).toEqual(['$10'])
  })

  it('does not return the \'.\' character if it is not followed by digits', () => {
    expect(getMonetaryValue('$10.')).toEqual(['$10'])
  })

  it('returns more than one value', () => {
    expect(getMonetaryValue('$9.99 $9.99')).toEqual(['$9.99', '$9.99']);
  });
});
