function getMonetaryValue(string) {
  const regex = /\$+([0-9]{1,})+(\.+[0-9]{0,2})?/
  return [string.match(regex)[0]];
}

module.exports = getMonetaryValue;
