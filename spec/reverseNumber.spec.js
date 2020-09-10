reverseNumber = require('../src/reverseNumber');

describe ('reverseNumber', () => {
    it('returns the same for a number of one length', () => {
        expect(reverseNumber(1)).toEqual(1);
    })

    it('reverses a two digit number', () => {
        expect(reverseNumber(12)).toEqual(21);
    })
})
