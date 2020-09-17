const testNum = require('../../src/promises/testNum')

describe('testNum', () => {
  it('returns "{num} is less than 10 for number less than 10"', async () => {
    await testNum(1).then((result) => {
      expect(result).toEqual('1 is less than 10');
    });
  });

  it('returns an object', async() => {
    expect(typeof testNum(1)).toEqual('object')
  })
});
