const chainedPromises = require('../../src/promises/chainedPromises');
const capitalize = chainedPromises.capitalize;

describe('capitalize', () => {
  it('capitalizes array of one', async () => {
    await capitalize(['cat']).then((result) => {
      expect(result).toEqual(['Cat']);
    });
  });

  it('capitalizes more than one item in an array', async () => {
    await capitalize(['cat', 'dog']).then((result) => {
      expect(result).toEqual(['Cat', 'Dog']);
    });
  });
});
