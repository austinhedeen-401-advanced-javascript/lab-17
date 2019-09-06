'use strict';

const mock = require('mock-fs');

const files = require('../../../../lib/app/lib/files.js');

beforeEach(() => {
  mock({
    'some-file.txt': 'file content here'
  });
});

afterAll(() => {
  mock.restore();
});

describe('#readFile', () => {

  it('successfully reads from a file', () => {
    expect.assertions(1);
    return files.readFile('some-file.txt')
      .then(data => expect(data.toString()).toEqual('file content here'));
  });

  it('throws an error for nonexistent files', () => {
    expect.assertions(1);
    return files.readFile('nonexistent-file.txt')
      .catch(error => expect(error).toBeDefined());
  });

});

describe('#writeFile', () => {

  const newContent = 'the file should end with this';

  it('successfully writes content to a file', () => {
    expect.assertions(1);
    return files.writeFile('some-file.txt', Buffer.from(newContent))
      .then(() => files.readFile('some-file.txt'))
      .then(data => expect(data.toString()).toEqual(newContent));
  });

});

describe('#convertBuffer', () => {

  const beforeConversion = Buffer.from('a test string');
  const afterConversion = Buffer.from('A TEST STRING');

  it('successfully converts a string buffer to uppercase', () => {
    expect(files.convertBuffer(beforeConversion)).toEqual(afterConversion);
  });

});

describe('#alterFile', () => {

  const expectedContent = 'FILE CONTENT HERE';

  it('successfully converts file contents to uppercase', () => {
    expect.assertions(1);
    return files.alterFile('some-file.txt')
      .then(() => files.readFile('some-file.txt'))
      .then(data => expect(data.toString()).toEqual(expectedContent));
  });

});
