const getEmail = require('../../src/regex/getEmail');

describe('getEmail', () => {
  it('returns an email address alone in string', () => {
    expect(getEmail('james@juniordevelopercentral.com')).toEqual([
      'james@juniordevelopercentral.com',
    ]);
  });

  it('returns an email address in a longer string', () => {
    expect(
      getEmail(
        'You can contact me on Twitter @codebubb or james@juniordevelopercentral.com'
      )
    ).toEqual(['james@juniordevelopercentral.com']);
  });

  it('returns multiple emails', () => {
    expect(
      getEmail('james@juniordevelopercentral.com or james@yahoo.com')
    ).toEqual(['james@juniordevelopercentral.com', 'james@yahoo.com']);
  });
});
