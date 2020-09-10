function getObjectLength(object) {
  var noOfProperties = 0;
  for (var property in object) {
    noOfProperties += 1;
  }
  return noOfProperties;
}

module.exports = getObjectLength;
