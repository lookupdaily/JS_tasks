const promiseFunctions = require('../../src/promises/settlePromises');
const settleAll = promiseFunctions.settleAll;
const checkStatuses = promiseFunctions.checkStatuses;

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
          ? resolve('value is greater than 10')
          : reject('value must be greater than 10');
      });
    };

    await expect(
      settleAll(delay(3000), checkGreaterThan10(11))
    ).resolves.toEqual([
      { status: 'fulfilled', value: undefined },
      { status: 'fulfilled', value: 'value is greater than 10' },
    ]);
  });

  it('includes rejected promises', async () => {
    const delay = (ms) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    const checkGreaterThan10 = (num) => {
      return new Promise((resolve, reject) => {
        num > 10
          ? resolve('value is greater than 10')
          : reject('value must be greater than 10');
      });
    };

    await expect(
      settleAll(delay(3000), checkGreaterThan10(1))
    ).resolves.toEqual([
      { status: 'fulfilled', value: undefined },
      { status: 'rejected', reason: 'value must be greater than 10' },
    ]);
  });

  it('can be used to check the status of a list of promises', async () => {
    const delay = (ms) => {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    const checkGreaterThan10 = (num) => {
      return new Promise((resolve, reject) => {
        num > 10
          ? resolve('value is greater than 10')
          : reject('value must be greater than 10');
      });
    };

    await expect(checkStatuses(
      delay(2000),
      checkGreaterThan10(1)
    )).resolves.toEqual(['fulfilled', 'rejected']);
  });
});
