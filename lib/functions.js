const fsPromises = require('fs').promises;

const copy = (source, destination) => {
  return fsPromises.readFile(source)
    .then(copy => fsPromises.writeFile(destination, copy));
};


const transform = (src) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    //takes a promise and makes all lowercase
    .then(promise => promise.toLocaleLowerCase())
    //takes a promise and makes it uppercase
    .then(promise => promise.toUpperCase())
    //takes a promise and reverses it
    .then(promise => promise.split('').reverse().join(''));
};


module.exports = {
  copy, 
  transform
};
