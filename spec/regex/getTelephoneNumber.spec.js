const getTelephoneNumber = require('../../src/regex/getTelephoneNumber');

describe('getTelephoneNumber', () => {
  it('returns a telephone number on its own in a string', () => {
    expect(getTelephoneNumber('0800 300 500')).toEqual(['0800 300 500']);
  });

  it('returns a telephone number in a longer string', () => {
    expect(
      getTelephoneNumber('Contact customer support on 0800 300 500')
    ).toEqual(['0800 300 500']);
  });

  it('returns multiple telephone numbers', () => {
    expect(getTelephoneNumber('0800 300 500 or 0800 300 501')).toEqual([
      '0800 300 500',
      '0800 300 501',
    ]);
  });

  it('returns null if no match', () => {
    expect(getTelephoneNumber('Contact customer support')).toEqual(null);
  });

  it('spaces are not required', () => {
    expect(getTelephoneNumber('0800300500')).toEqual(['0800300500']);
  });
});
