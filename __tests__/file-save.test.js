'use strict';

const mock = require('mock-fs');

const fileRead = require('../../lib/file-read.js');
const fileSave = require('../../lib/file-save.js');

beforeAll(() => {
  mock({
    'some-file.txt': 'file content here'
  });
});

afterAll(() => {
  mock.restore();
});

describe('fileSave', () => {
  const newContent = 'the file should end with this';

  it('successfully writes content to a file', () => {
    expect.assertions(1);
    return fileSave('some-file.txt', Buffer.from(newContent))
      .then(() => fileRead('some-file.txt'))
      .then(data => expect(data.toString()).toEqual(newContent));
  });

});
