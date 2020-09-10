var countCharacter = require('../src/countCharacter')

describe('countCharacter', () => {
    it('returns 1 for a matching one letter string', () => {
        expect(countCharacter('a','a')).toEqual(1);
    })

    it('returns 0 if no matching character', () => {
        expect(countCharacter('a','b')).toEqual(0);
    })

    it('returns 1 if only one letter matching in longer string', () => {
        expect(countCharacter('ab','a')).toEqual(1);
    })
})