let numberOfRequests = 0;

module.exports = {
  logRequests: (req, res, next) => {
    numberOfRequests++;

    console.log(`Número de requisições: ${numberOfRequests}`);

    return next();
  }
};
