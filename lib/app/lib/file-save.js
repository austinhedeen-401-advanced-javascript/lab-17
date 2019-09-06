'use strict';

const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

/**
 * Writes data to a file asynchronously
 *
 * @param {string} fileName
 * @param {Buffer} data - Buffer representing a string
 * @returns {Promise}
 */
module.exports = (fileName, data) => writeFile(fileName, data);
