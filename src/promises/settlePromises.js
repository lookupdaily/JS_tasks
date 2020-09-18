// Function which returns array of resolved/rejected promise objects
const settleAll = async (...args) => {
  return Promise.allSettled(args).then((values) => values);
};

// Function which uses Promise.allSettled to return the statuses
// of a list of promises
const checkStatuses = async (...args) => {
  return Promise.allSettled(args).then((values) => {
    return values.map((value) => value.status);
  });
};

// Function which returns an array of promise values, only if all resolved
const getAllResolvedValues = async (...args) => {
  return Promise.all(args);
};

module.exports = { settleAll, checkStatuses, getAllResolvedValues };
