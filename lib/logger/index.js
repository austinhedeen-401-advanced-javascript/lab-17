'use strict';

const client = require('socket.io-client');

const SERVER_URL = 'http://localhost:3000';

/**
 * Logs a success message.
 *
 * @param {*} payload - Additional data to log
 */
const handleSave = payload => {
  console.log(`SUCCESS, ${payload}`);
};

/**
 * Logs an error message.
 *
 * @param {*} payload - Additional data to log
 */
const handleError = payload => {
  console.log(`ERROR, ${payload}`);
};

module.exports = () => {
  const socket = client.connect(SERVER_URL);

  console.log('Connected to server');

  socket.on('file-save', handleSave);
  socket.on('file-error', handleError);
};
