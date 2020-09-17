const capitalize = (words) => {
  const word = words[0][0].toUpperCase() + words[0].substring(1);
  return new Promise((resolve) => {
    console.log([word]);
    resolve([word]);
  });
};

const sort = (words) => {
  return new Promise((resolve) => {
    console.log(words);
    resolve(words);
  });
};

module.exports = { capitalize, sort };
