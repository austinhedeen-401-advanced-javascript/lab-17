'use strict';

const io = require('socket.io');

const PORT = process.argv[3];

module.exports = () => {

  if (!PORT) {
    console.error('Expected argument: [port]');
    return;
  }

  const server = io(PORT);
  console.log(`Server running on port ${PORT}`);

  server.on('connect', socket => {
    console.log('Connected', socket.id);

    socket.on('publish', payload => {
      socket.broadcast.emit(payload.event, payload.data);
    });

    socket.on('disconnect', () => {
      console.log(`Client ${socket.id} disconnected`);
    })
  });

};
