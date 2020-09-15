var sortByObjectProperty = require('../src/sortByObjectProperty');

describe('sortByObjectProperty', () => {
  it('shows error message if property does not exist', () => {
    var input = [{ name: 'Liam' }];
    expect(sortByObjectProperty(input, 'id')).toEqual(
      'property name does not exist'
    );
  });

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
      {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,
      },
      {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264,
      },
      {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
      },
    ];
    var expected = [
      {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245,
      },
      {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254,
      },
      {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264,
      },
    ];
    expect(sortByObjectProperty(input, 'title')).toEqual(expected);
  });
});
