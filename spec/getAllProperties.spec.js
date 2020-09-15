var getAllProperties = require('../src/getAllProperties');

describe('getAllProperties', () => {
  it('returns all properties of an object with no parent', () => {
    var object = { title: 'The Road Ahead' };
    expect(getAllProperties(object)).toEqual(['title']);
  });

  it('returns all properties of an object with inherited properties', () => {
    var Parent = { library: 'Stockport', inStock: true };
    var child = Object.create(Parent);
    child.title = 'The Road Ahead';
    // sort arrays to check for an exact match of properties
    expect(getAllProperties(child).sort()).toEqual(
      ['library', 'inStock', 'title'].sort()
    );
  });

  it('works for multiple parents', () => {
    var Parent = { library: 'Stockport', inStock: true };
    var child = Object.create(Parent);
    child.title = 'The Road Ahead';
    var childOfChild = Object.create(child);
    childOfChild.id = 1254;

    expect(getAllProperties(childOfChild).sort()).toEqual(
      ['library', 'inStock', 'title', 'id'].sort()
    );
  });

  it('works with constructors', () => {
    var Parent = function () {
      this.isObject = true;
    };
    var child = new Parent();
    child.isChild = true;

    expect(getAllProperties(child).sort()).toEqual(
      ['isObject', 'isChild'].sort()
    );
  });

  it('can handle empty objects', () => {
    var Parent = {};
    var child = Object.create(Parent);
    expect(getAllProperties(child)).toEqual([]);
  });
});
