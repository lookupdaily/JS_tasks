const capitalize = (words) => {
  return new Promise((resolve, reject) => {
    const capitalizedWords = words.map((word) => {
      if (typeof word === 'string') {
        return word[0].toUpperCase() + word.substring(1);
      } else {
        reject('Invalid input');
      }
    });
    resolve(capitalizedWords);
  });
};

const sort = (words) => {
  return new Promise((resolve, reject) => {
    if (isAllStrings(words)) {
      resolve(words.sort());
    } else {
      reject('Invalid input');
    }
  });
};

const isAllStrings = (words) => {
  const isString = (word) => typeof word === 'string';
  return words.every(isString);
};
module.exports = { capitalize, sort };
