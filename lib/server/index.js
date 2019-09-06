'use strict';

const io = require('socket.io');

const PORT = process.argv[3];

module.exports = () => {

  if (!PORT) {
    console.error('Expected argument: [port]');
  }

  const server = io(PORT);
  console.log(`Server running on port ${PORT}`);

  server.on('connection', socket => {
    console.log('Connected', socket.id);

    server.on('publish', payload => {
      socket.broadcast.emit(payload.event, payload.data);
    });

    socket.emit('save', 'test payload');
    socket.emit('err', 'test error');

    socket.on('disconnect', () => {
      console.log(`Client ${socket.id} disconnected`);
    })
  });

};
