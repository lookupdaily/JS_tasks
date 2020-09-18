const settleAll = require('../../src/promises/settlePromises');

describe('settleAll', () => {
  it('returns an array of multiple settled promises', async () => {
    const delay = (ms) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    const checkGreaterThan10 = (num) => {
      return new Promise((resolve, reject) => {
        num > 10
          ? resolve('greater than 10')
          : reject('must be greater than 10');
      });
    };

    await expect(
      settleAll(delay(3000), checkGreaterThan10(11))
    ).resolves.toEqual([
      { status: 'fulfilled', value: undefined },
      { status: 'fulfilled', value: 'greater than 10' },
    ]);
  });
});
