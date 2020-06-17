const fsPromises = require('fs').promises;

const readFile = fsPromises.readFile('./README.md', { encoding: 'utf-8' });
readFile  
  .then(result => console.log(result));

fsPromises.writeFile('./new-file.txt', 'I can write')
  .then(() => console.log('Done'));

readFile
  .then(fsPromises.writeFile('./new-file.txt', 'I can read and write!'))
  .then(() => console.log('Done!'));
