'use strict';

const uppercase = require('../../lib/uppercase.js');

describe('uppercase', () => {
  const beforeConversion = Buffer.from('a test string');
  const afterConversion = Buffer.from('A TEST STRING');

  it('successfully converts a string buffer to uppercase', () => {
    expect(uppercase(beforeConversion)).toEqual(afterConversion);
  });

});
