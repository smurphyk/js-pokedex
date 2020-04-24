var pokemonRepository = (function() {
  var pokemonList = [
    {
      name: 'Raichu',
      height: 0.8,
      types: ['Mouse', 'Electric'],
      abilities: ['Static', 'Lightningrod'],
    },
    {
      name: 'Charmeleon',
      height: 1.1,
      types: ['Flame', 'Fire'],
      abilities: ['Blaze', 'Solar-Power'],
    },
    {
      name: 'Alakazam',
      height: 1.5,
      types: ['Telekinesis', 'Psychic'],
      abilities: ['Synchronize', 'Inner-Focus', 'Magic-Guard'],
    },
    {
      name: 'Pidgeotto',
      height: 1.1,
      types: ['Bird', 'Flying', 'Normal'],
      abilities: ['Keen-Eye', 'Tangled-Feet', 'Big-Pecks'],
    }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
      add: add,
      getAll: getAll
    };
  })();

pokemonRepository.getAll().forEach(function pokemon(property) {
  pokemonRepository.add(property.name);
  pokemonRepository.add(property.height);
});
document.write(pokemon(property));
document.write('<h1>' + pokemonRepository.getAll()[4] + '</h1>' + '<h3>' + 'Height:' + pokemonRepository.getAll()[5] + '</h3>');
document.write('<h1>' + pokemonRepository.getAll()[6] + '</h1>' + '<h3>' + 'Height:' + pokemonRepository.getAll()[7] + '</h3>');
document.write('<h1>' + pokemonRepository.getAll()[8] + '</h1>' + '<h3>' + 'Height:' + pokemonRepository.getAll()[9] + '</h3>');
document.write('<h1>' + pokemonRepository.getAll()[10] + '</h1>' + '<h3>' + 'Height:' + pokemonRepository.getAll()[11] + '</h3>');
