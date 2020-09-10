reverseNumber = require('../src/reverseNumber');

describe ('reverseNumber', () => {
    it('returns the same for a number of one length', () => {
        expect(reverseNumber(1)).toEqual(1);
    })
})