const capitalize = (words) => {
  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });

  return new Promise((resolve) => {
    resolve(capitalizedWords);
  });
};

const sort = (words) => {
  return new Promise((resolve) => {
    resolve(words.sort());
  });
};

module.exports = { capitalize, sort };
