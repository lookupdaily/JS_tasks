var getAllProperties = require('../src/getAllProperties');

describe('getAllProperties', () => {
  it('returns all properties of an object with no parent', () => {
    var object = { title: 'The Road Ahead' };
    expect(getAllProperties(object)).toEqual(['title']);
  });
});
