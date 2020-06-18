const fsPromises = require('fs').promises;
const { copy, transform } = require('./functions.js');


describe('test function', () => {
  beforeAll(() => {
    return Promise.all([
      fsPromises.writeFile('./newFile1.txt', 'Sup, this is a newFile.'),
      fsPromises.writeFile('./newFile2.txt', 'WhAtEvEr') 
    ]);
  });
  afterAll(() => {
    return Promise.all([
      fsPromises.unlink('./newFile1.txt'),
      fsPromises.unlink('./newFile3.txt'),
      fsPromises.unlink('./newFile2.txt')
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
  it('can transform text by removing all capitals then rest of the letters become capital letters and reversed', () => {
    return transform('./newFile2.txt', { encoding: 'utf8' })
      .then((transformed) => {
        expect(transformed).toEqual('RVTH');
      });
  }); 
}); 
