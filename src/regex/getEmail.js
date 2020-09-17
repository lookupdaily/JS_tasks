function getEmail(string) {
  const regex = /[a-zA-Z0-9-_.]+@[a-zA-Z0-9-.]+\.[a-zA-Z]{2,4}/g;
  return string.match(regex);
}

module.exports = getEmail;
