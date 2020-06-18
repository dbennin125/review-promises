const request = require('superagent');


const getCharacter = id => {
  return request 
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ body }) => ({
      name: body.name,
      status: body.status,
      species: body.species
    }));
};

const getManyCharacters = arrayIds => {
  //returns the promise all(which takes an array) with a new array made by map
  return Promise.all(
    arrayIds.map(id => getCharacter(id))
  );
};


module.exports = {
  getCharacter,
  getManyCharacters
};
