function getTelephoneNumber(string) {
  const regex = /[0-9]{4}\s?[0-9]{3}\s?[0-9]{3}/g;
  return string.match(regex);
}

module.exports = getTelephoneNumber;
