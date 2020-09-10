function getObjectLength(object) {
  var properties = []
  for (var property in object) {
    properties.push(property)
  }
    return properties.length;
}

module.exports = getObjectLength;