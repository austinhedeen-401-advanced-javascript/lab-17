'use strict';

const mock = require('mock-fs');

const fileRead = require('../../lib/file-read.js');

beforeAll(() => {
  mock({
    'some-file.txt': 'file content here'
  });
});

afterAll(() => {
  mock.restore();
});

describe('fileRead', () => {

  it('successfully reads from a file', () => {
    expect.assertions(1);
    return fileRead('some-file.txt')
      .then(data => expect(data.toString()).toEqual('file content here'));
  });

  it('throws an error for nonexistent files', () => {
    expect.assertions(1);
    return fileRead('nonexistent-file.txt')
      .catch(error => expect(error).toBeDefined());
  });

});
