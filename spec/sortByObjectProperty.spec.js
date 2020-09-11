var sortByObjectProperty = require('../src/sortByObjectProperty');

describe('sortByObjectProperty', () => {
  it('returns the same for an array of one object', () => {
    var input = [{ name: 'Liam' }];
    expect(sortByObjectProperty(input, 'name')).toEqual(input);
  });

  it('sorts an array of two objects with one property', () => {
    var input = [{ name: 'Liam' }, { name: 'Becky' }];
    var expected = [{ name: 'Becky' }, { name: 'Liam' }];
    expect(sortByObjectProperty(input, 'name')).toEqual(expected);
  });

  it('sorts an array of object swith more than one property', () => {
    var input = [
      { id: 143, name: 'Becky' },
      { id: 123, name: 'Liam' },
    ];
    var expected = [
      { id: 123, name: 'Liam' },
      { id: 143, name: 'Becky' },
    ];
    expect(sortByObjectProperty(input, 'id')).toEqual(expected);
  });

  it('shows error message if property does not exist', () => {
    var input = [{ name: 'Liam' }];
    expect(sortByObjectProperty(input, 'id')).toEqual(
      'property name does not exist'
    );
  });
});
