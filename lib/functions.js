const fsPromises = require('fs').promises;

const copy = (source, destination) => {
  return fsPromises.readFile(source)
    .then(copy => fsPromises.writeFile(destination, copy));
};

module.exports = {
  copy
};
