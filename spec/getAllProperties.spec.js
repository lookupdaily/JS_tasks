var getAllProperties = require('../src/getAllProperties');

describe('getAllProperties', () => {
  it('returns all properties of an object with no parent', () => {
    var object = { title: 'The Road Ahead' };
    expect(getAllProperties(object)).toEqual(['title']);
  });

  it('returns all properties of an object with inherited properties', () => {
    var Parent = { library: 'Stockport', inStock: true};
    var child = Object.create(Parent);
    child.title = 'The Road Ahead';
    // sort arrays to check for an exact match of properties
    expect(getAllProperties(child).sort()).toEqual(['library','inStock','title'].sort());
  })
});
