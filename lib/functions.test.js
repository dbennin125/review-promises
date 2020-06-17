const fsPromises = require('fs').promises;
const { copy } = require('./functions.js');

describe('test function', () => {
  beforeAll(() => {
    return Promise.all([
      fsPromises.writeFile('./newFile1.txt', 'Sup, this is a newFile.'),
      fsPromises.writeFile('./newFile2.txt', 'Hello, this is a definitely a newFile.') 
    ]);
  });
  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./newFile1.txt'),
      fsPromises.unlink('./newFile3.txt')
    ]);
  });
  it('can copy a file after it reads it', () => {
    return copy('./newFile1.txt', './newFile3.txt')
      .then(() => {
        return fsPromises.readFile('./newFile1.txt', { encoding: 'utf8' });
      })  
      .then(copiedFile => {
        expect(copiedFile).toEqual('Sup, this is a newFile.');
      });
  });
}); 


