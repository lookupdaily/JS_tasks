const settleAll = async (...args) => {
  return Promise.allSettled(args).then((values) => values);
};

module.exports = settleAll;
