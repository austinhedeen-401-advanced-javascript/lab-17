'use strict';

const server = require('./lib/server');
const logger = require('./lib/logger');

switch (process.argv[2]) {
  case 'server':
    server();
    break;
  case 'logger':
    logger();
    break;
  default:
    console.error("Expected argument: [server | logger]");
}
