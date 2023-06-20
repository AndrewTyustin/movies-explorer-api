const errorHandler = (err, _, res, next) => {
  //const statusCode = err.statusCode || 500;
  //const message = statusCode === 500 ? 'На сервере произошла ошибка' : err.message;
  //res.status(statusCode).send({ message });
  res.send(err);
  next();
};
module.exports = errorHandler;
