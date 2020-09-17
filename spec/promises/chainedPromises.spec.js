const chainedPromises = require('../../src/promises/chainedPromises');
const capitalize = chainedPromises.capitalize;
const sort = chainedPromises.sort;

describe('chained promises', () => {
  it('returns array of one', async () => {
    await capitalize(['cat'])
      .then((result) => {
        return sort(result);
      })
      .then((result) => {
        expect(result).toEqual(['Cat']);
      });
  });
});
