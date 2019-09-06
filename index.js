'use strict';

const server = require('./lib/server');
const logger = require('./lib/logger');
const app = require('./lib/app');

switch (process.argv[2]) {
  case 'server':
    server();
    break;
  case 'logger':
    logger();
    break;
  case 'app':
    app();
    break;
  default:
    console.error("Expected argument: [server | logger | app]");
}
