const mongoose = require('mongoose');

const getConnectionUri = () => {
  const connectionUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  return connectionUri;
};

const checkConnection = async () => {
  const mongooseConnectionUri = getConnectionUri();
  mongoose.set('strictQuery', false);
  await mongoose.connect(mongooseConnectionUri);
  console.log('!!!db connected!!!');
};

module.exports = {
  getConnectionUri,
  checkConnection
};
