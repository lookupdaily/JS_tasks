const chainedPromises = require('../../src/promises/chainedPromises');
const capitalize = chainedPromises.capitalize;
const sort = chainedPromises.sort;

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

  it('can be chained with sort function', async () => {
    await capitalize(['dog', 'cat', 'Fox'])
      .then((result) => {
        return sort(result);
      })
      .then((result) => {
        expect(result).toEqual(['Cat', 'Dog', 'Fox']);
      });
  });
});
