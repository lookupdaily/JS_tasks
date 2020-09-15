function removeNumbers(string) {
  const regex = /[^0-9]/g
  const noNumbers = string.match(regex) 

  if(noNumbers) {
    return noNumbers.join("");
  } else {
    return ''
  }
}

module.exports = removeNumbers