const settleAll = async (...args) => {
  return Promise.allSettled(args).then((values) => values);
};

const checkStatuses = async (...args) => {
  return Promise.allSettled(args).then((values) => {
    return values.map((value) => value.status);
  });
};

module.exports = { settleAll, checkStatuses };
