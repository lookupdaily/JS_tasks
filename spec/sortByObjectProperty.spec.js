var sortByObjectProperty = require('../src/sortByObjectProperty');

describe('sortByObjectProperty', () => {
    it('returns the same for an array of one object', () => {
        var array = [{name:'Liz'}]
        expect(sortByObjectProperty(array)).toEqual(array);
    })
})