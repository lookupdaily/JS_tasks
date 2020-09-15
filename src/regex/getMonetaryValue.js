function getMonetaryValue(string) {
  const regex = /\$+(?:[0-9]{1,})+(?:\.(?=[0-9])[0-9]{0,2})?/g;
  return string.match(regex);
}

module.exports = getMonetaryValue;
