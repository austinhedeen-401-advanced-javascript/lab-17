'use strict';

const client = require('socket.io-client');

const files = require('./lib/files');

const FILENAME = process.argv[3];
const SERVER_URL = 'http://localhost:3000';

module.exports = () => {
  if (!FILENAME) {
    console.error('Expected argument: [filename]');
    return;
  }

  const socket = client.connect(SERVER_URL);

  console.log(`Altering file: ${FILENAME}`);

  files.alterFile(FILENAME)
    .then(() => socket.emit('publish', { event: 'file-save', data: FILENAME }))
    .catch(error => socket.emit('publish', { event: 'file-error', data: error }));
};
