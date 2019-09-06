'use strict';

const client = require('socket.io-client');

const SERVER_URL = 'http://localhost:3000';

const handleError = payload => {
  console.log(`ERROR, ${payload}`);
};

const handleSave = payload => {
  console.log(`SUCCESS, ${payload}`);
};

module.exports = () => {
  const socket = client.connect(SERVER_URL);

  socket.on('save', handleSave);
  socket.on('err', handleError);
};
