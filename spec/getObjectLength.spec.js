var getObjectLength = require('../src/getObjectLength')

describe('getObjectLength', () => {
    it('returns 0 for an empty object', () => {
        var object = {};
        expect(getObjectLength(object)).toEqual(0);
    })
})