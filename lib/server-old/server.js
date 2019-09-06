'use strict';

const server = require('socket.io')(3000);

server.on('connection', socket => {
  console.log('CONNECTION', socket.id);

  socket.on('message', message => {
    server.emit('message', message);
  });
});

const fileNamespace = server.of('/file');

fileNamespace.on('connection', socket => {
  console.log('Connection to the file namespace');
  socket.on('file', payload => {
    fileNamespace.emit('file', payload);
  });
});

// // Client
// const fileConnection = socketIo.connect(`${API_URL}/file`);
// fileConnection.emit('file', Buffer.from(`${__dirname}/general-client.js`));


'use strict';

const socketIo = require('socket.io-client');

const API_URL = 'http://localhost:3000';

const fileConnection = socketIo.connect(`${API_URL}/file`);

fileConnection.on('file', payload => {
  console.log(payload.toString());
});
