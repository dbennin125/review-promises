const { getCharacter } = require('./rickAndMortyApi');

describe('Rick and Morty function test', () => {
  it('gets a character by ID with GET', () => {
    return getCharacter('2')
      .then(character => {
        expect(character).toEqual({
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human',
        });
      });
  });
});
