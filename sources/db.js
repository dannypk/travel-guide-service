const mongoose = require('mongoose');

const initDB = () => {
  let mongoConfig = process.env.MONGOLAB_URI;

  mongoose.connect(
    mongoConfig,
    { useNewUrlParser: true }
  );
  
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
  
};

module.exports = initDB;