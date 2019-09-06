'use strict';

const fs = require('fs');
const util = require('util');

/**
 * Promisified version of the core fs.readFile() function.
 *
 * @param {string} filename
 * @returns {Promise<Buffer>}
 */
const readFile = util.promisify(fs.readFile);

/**
 * Promisified version of the core fs.writeFile() function.
 *
 * @param {string} filename
 * @param {Buffer} data
 * @returns {Promise}
 */
const writeFile = util.promisify(fs.writeFile);

/**
 * Converts a Buffer representing a string to uppercase.
 *
 * @param buffer - Buffer representing a string
 * @returns {Buffer} - The input Buffer converted to uppercase
 */
const convertBuffer = buffer => {
  return Buffer.from(buffer.toString().trim().toUpperCase());
};

/**
 * Converts the given file to uppercase.
 *
 * @param filename
 * @returns {Promise}
 */
const alterFile = filename => {
  return readFile(filename)
    .then(convertBuffer)
    .then(buffer => writeFile(filename, buffer));
};

module.exports = {
  readFile,
  writeFile,
  convertBuffer,
  alterFile
};
