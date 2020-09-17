const testNum = (number) => {
  return new Promise((resolve) => {
    if(number < 10) resolve(`${number} is less than 10`);
    if(number > 10) resolve(`${number} is greater than 10`)
  });
};

module.exports = testNum;
