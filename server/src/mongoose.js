const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  const mongoUri= 'mongodb+srv://admin:passwordpassword@cluster0-ikvuk.mongodb.net/test?retryWrites=true&w=majority';
  mongoose.connect(
    mongoUri,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }
  ).catch(err => {
    logger.error(err);
    process.exit(1);
  });
  
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
