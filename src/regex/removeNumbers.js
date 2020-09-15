function removeNumbers(string) {
  const regex = /[^0-9]/g
  return string.match(regex).join("");
}

module.exports = removeNumbers