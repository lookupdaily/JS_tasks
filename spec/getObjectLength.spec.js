var getObjectLength = require('../src/getObjectLength');

describe('getObjectLength', () => {
  it('returns 0 for an empty object', () => {
    var object = {};
    expect(getObjectLength(object)).toEqual(0);
  });

  it('returns 1 for an object with one property', () => {
    var object = { name: 'Liam' };
    expect(getObjectLength(object)).toEqual(1);
  });

  it('counts multiple properties in an object', () => {
    var object = { name: 'test', class: 'VI', rollno: 12 };
    expect(getObjectLength(object)).toEqual(3);
  });
});
