var sortByObjectProperty = require('../src/sortByObjectProperty');

describe('sortByObjectProperty', () => {
    it('returns the same for an array of one object', () => {
        var array = [{name:'Liz'}]
        expect(sortByObjectProperty(array, 'name')).toEqual(array);
    })

    it('sorts an array of two objects with one property', () => {
        var input = [{name:'Liz'},{name:'Becky'}]
        var expected = [{name:'Becky'},{name:'Liz'}]
        expect(sortByObjectProperty(input, 'name')).toEqual(expected)
    })
})
