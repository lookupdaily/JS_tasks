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

  it('accepts "-" in first section of email', () => {
    expect(getEmail('james-marshall@developer.com')).toEqual([
      'james-marshall@developer.com',
    ]);
  });

  it('accepts "_" in first section of email', () => {
    expect(getEmail('james_marshall@developer.com')).toEqual([
      'james_marshall@developer.com',
    ]);
  });

  it('accepts "." in first section of email', () => {
    expect(getEmail('james.marshall@developer.com')).toEqual([
      'james.marshall@developer.com',
    ]);
  });

  it('accepts "-" in second section of email', () => {
    expect(getEmail('jamesmarshall@developer-central.com')).toEqual([
      'jamesmarshall@developer-central.com',
    ]);
  });

  it('accepts "." in section section of email', () => {
    expect(getEmail('jamesmarshall@developer.co.uk')).toEqual([
      'jamesmarshall@developer.co.uk',
    ]);
  });
});
