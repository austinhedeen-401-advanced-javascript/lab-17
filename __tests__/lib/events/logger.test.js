'use strict';

require('../../../lib/events/logger.js');
const emitter = require('../../../lib/events/event.js');

console.log = jest.fn();
console.error = jest.fn();

describe('logger', () => {

  it('correctly logs a success message upon file-altered event', () => {
    emitter.emit('file-altered', 'filename');
    expect(console.log).toBeCalledWith('Success: filename converted to uppercase');
  });

  it('correctly logs an error message upon file-error event', () => {
    emitter.emit('file-error');
    expect(console.log).toBeCalledWith('Error: No files were altered');
  });

});
