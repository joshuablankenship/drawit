require('dotenv').config();
const path = require('path');

module.exports = {
  PORT: process.env.PORT || 8080,
  PATH: path.resolve(__dirname, '../public'),
  MONGODB: process.env.MONGODB,
};