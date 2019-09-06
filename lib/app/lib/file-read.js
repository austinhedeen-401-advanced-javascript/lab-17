'use strict';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

/**
 * Reads data from a file asynchronously
 *
 * @param {string} fileName
 * @returns {Promise<Buffer>} - Promise object representing the file contents
 */
module.exports = fileName => readFile(fileName);
