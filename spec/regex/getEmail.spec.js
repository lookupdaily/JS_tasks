const getEmail = require('../../src/regex/getEmail');

describe('getEmail', () => {
  it('returns an email address alone in string', () => {
    expect(getEmail('james@juniordevelopercentral.com')).toEqual(
      ['james@juniordevelopercentral.com']
    );
  });
});
