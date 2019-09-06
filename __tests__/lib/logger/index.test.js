'use strict';

const logger = require('../../../lib/logger');

console.log = jest.fn();
console.error = jest.fn();

describe('#handleSave', () => {

  it('', () => {
    const payload = '';
    logger.handleSave(payload);
    expect(console.log).toBeCalledWith(`SUCCESS, ${payload}`);
  });

});

describe('#handleError', () => {

  it('', () => {
    const payload = '';
    logger.handleError(payload);
    expect(console.log).toBeCalledWith(`ERROR, ${payload}`);
  });

});
