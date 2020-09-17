const getTelephoneNumber = require('../../src/regex/getTelephoneNumber')

describe('getTelephoneNumber', () => {
  it('returns a telephone number on its own in a string', () => {
    expect(getTelephoneNumber('0800 300 500')).toEqual(['0800 300 500']);
  });
})