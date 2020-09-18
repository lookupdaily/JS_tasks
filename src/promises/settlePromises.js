const settleAll = async (...args) => {
  return Promise.allSettled(args).then((values) => values);
};

const checkStatuses = async (...args) => {
  return Promise.allSettled(args).then((values) => {
    return values.map((value) => value.status);
  });
};

const getAllResolvedValues = async (...args) => {
  return Promise.all(args);
};

module.exports = { settleAll, checkStatuses, getAllResolvedValues };
