'use strict';

const client = require('socket.io-client');

const SERVER_URL = 'http://localhost:3000';

const handleSave = payload => {
  console.log(`SUCCESS, ${payload}`);
};

const handleError = payload => {
  console.log(`ERROR, ${payload}`);
};

module.exports = () => {
  const socket = client.connect(SERVER_URL);

  socket.on('file-save', handleSave);
  socket.on('file-error', handleError);
};
