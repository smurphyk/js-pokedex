var pokemonRepository = (function() {
  var pokemonList = [];

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

var pokemonRaichu =
  {
    name: 'Raichu',
    height: 0.8,
    types: ['Mouse', 'Electric'],
    abilities: ['Static', 'Lightningrod'],
  };
var pokemonCharmeleon =
  {
    name: 'Charmeleon',
    height: 1.1,
    types: ['Flame', 'Fire'],
    abilities: ['Blaze', 'Solar-Power'],
  };
var pokemonAlakazam =
  {
    name: 'Alakazam',
    height: 1.5,
    types: ['Telekinesis', 'Psychic'],
    abilities: ['Synchronize', 'Inner-Focus', 'Magic-Guard'],
  };
var pokemonPidgeotto =
  {
    name: 'Pidgeotto',
    height: 1.1,
    types: ['Bird', 'Flying', 'Normal'],
    abilities: ['Keen-Eye', 'Tangled-Feet', 'Big-Pecks'],
  };

  console.log(pokemonRepository.getAll());
  pokemonRepository.add('<h1>' + pokemonRaichu.name + '</h1>' + '<h2>' + ' Height: ' + pokemonRaichu.height +'m');

  console.log(pokemonRepository.getAll());
  pokemonRepository.add('<h1>' + pokemonCharmeleon.name + '</h1>' + '<h2>' + ' Height: ' + pokemonCharmeleon.height +'m');

  console.log(pokemonRepository.getAll());
  pokemonRepository.add('<h1>' + pokemonAlakazam.name + '</h1>' + '<h2>' + ' Height: ' + pokemonAlakazam.height +'m');

  console.log(pokemonRepository.getAll());
  pokemonRepository.add('<h1>' + pokemonPidgeotto.name + '</h1>' + '<h2>' + ' Height: ' + pokemonPidgeotto.height +'m');
  document.write(pokemonRepository.getAll());


/*pokemonList.forEach(function(pokemon) {
  document.write('<h1>' + pokemon.name + '</h1>' + '<h2>' + ' Height: ' + pokemon.height +'m');
  if (pokemon.height > 1.1) {
    document.write(" - Wow, that's BIG! ")
  }else{
    var result = pokemon;
    return result;
  }
});*/
