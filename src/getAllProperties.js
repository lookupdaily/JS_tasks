function getAllProperties(object) {
  var properties = [];
  for (var property in object) {
    properties.push(property);
  }
  return properties;
}

module.exports = getAllProperties;
