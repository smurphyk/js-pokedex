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


  for(var i = 0; i <= pokemonRepository.getAll().length; i++) {
   document.write('<h1>' + pokemonRepository.getAll(i).name + '</h1>' + '<h2>' + ' Height: ' + pokemonRepository.getAll(i).height +'m');
 };
