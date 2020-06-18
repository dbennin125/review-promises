const fsPromises = require('fs').promises;

const copy = (source, destination) => {
  return fsPromises.readFile(source)
    .then(copy => fsPromises.writeFile(destination, copy));
};


const transform = (src) => {
  return fsPromises.readFile(src, { encoding: 'utf8' })
    //takes a promise and removes capital letters
    .then(promise => promise.split('').filter(filtered => {
      return filtered === filtered.toLowerCase();
    }))
    //takes a promise and makes it uppercase
    .then(promise => promise.map(mapped => {
      return mapped.toUpperCase();
    }))
    //takes a promise and reverses it
    .then(promise => promise.reverse().join(''));
};


module.exports = {
  copy, 
  transform
};
