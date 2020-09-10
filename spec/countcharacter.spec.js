var countCharacter = require('../src/countCharacter')

describe('countCharacter', () => {
    it('returns 1 for a matching one letter string', () => {
        expect(countCharacter('a','a')).toEqual(1);
    })
})