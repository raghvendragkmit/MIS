require('dotenv').config();
const app = require('./app');
const { checkConnection } = require('./helpers/dbConnection.helper');

const startServer = async function () {
  try {
    await checkConnection();
    app.listen(process.env.SERVER_PORT);
    console.log(`--- Server started on ${process.env.SERVER_PORT} ---\n\n`);
  } catch (err) {
    console.log('server setup failed', err);
    console.log('Error: ', err.message);
  }
};

startServer();
