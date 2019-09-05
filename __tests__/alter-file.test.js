'use strict';

const mock = require('mock-fs');

const alterFile = require('../../lib/alter-file.js');
const fileRead = require('../../lib/file-read.js');

beforeAll(() => {
  mock({
    'some-file.txt': 'file content here'
  });
});

afterAll(() => {
  mock.restore();
});

describe('alterFile', () => {
  const expectedContent = 'FILE CONTENT HERE';

  it('successfully converts file contents to uppercase', () => {
    expect.assertions(1);
    return alterFile('some-file.txt')
      .then(() => fileRead('some-file.txt'))
      .then(data => expect(data.toString()).toEqual(expectedContent));
  });

});
