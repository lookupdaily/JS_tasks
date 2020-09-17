const testNum = require('../../src/promises/testNum');

describe('testNum', () => {
  it('returns "{num} is less than 10 for number less than 10"', async () => {
    await testNum(1).then((result) => {
      expect(result).toEqual('1 is less than 10');
    });
  });

  it('returns "{num}" is greater than 10 for number greater than 10', async () => {
    await testNum(11).then((result) => {
      expect(result).toEqual('11 is greater than 10');
    });
  });

  it('returns "{num}" is 10 when passed 10', async () => {
    await testNum(10).then((result) => {
      expect(result).toEqual('10 is 10');
    });
  });

  it('returns "{num} is less than 10 for negative number"', async () => {
    await testNum(-1).then((result) => {
      expect(result).toEqual('-1 is less than 10');
    });
  });

  it('returns "{num} is less than 10 for zero"', async () => {
    await testNum(0).then((result) => {
      expect(result).toEqual('0 is less than 10');
    });
  });


  it('returns an object', async () => {
    expect(typeof testNum(1)).toEqual('object');
  });
});
