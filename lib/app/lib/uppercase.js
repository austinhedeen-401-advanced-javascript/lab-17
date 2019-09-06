'use strict';

/**
 * Converts a Buffer representing a string to uppercase
 *
 * @param {Buffer} data - Buffer representing a string
 * @returns {Buffer} - The uppercase representation of the data
 */
module.exports = data => Buffer.from(data.toString().toUpperCase());
