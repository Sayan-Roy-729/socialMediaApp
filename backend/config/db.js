const mongoose = require('mongoose');

const mongodbConnection = () => {
  mongoose.connect(process.env.MONGO_CONNECTION_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log('Connected with mongodb');
  })
  .catch(err => {
    console.log('Database connection failed', err);
  })
};

module.exports = mongodbConnection;