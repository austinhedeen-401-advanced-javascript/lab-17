'use strict';

const emitter = require('./event.js');

emitter.on('file-altered', fileName => {
  console.log(`Success: ${fileName} converted to uppercase`);
});

emitter.on('file-error', error => {
  console.log(`Error: No files were altered`);
  console.error(error);
});
