function getEmail(string) {
  const regex = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}/;
  return [string.match(regex)[0]];
}

module.exports = getEmail;
