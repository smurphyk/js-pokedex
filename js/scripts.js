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
  },
];

/* for (var i = 0; i < pokemonList.length; i++) {
  document.write('<h1>' + pokemonList[i].name + '</h1>' + '<h2>' + ' Height: ' + pokemonList[i].height)
    if (pokemonList[i].height > 1.1) {
      document.write(" - Wow, that's BIG! ")
    }
}; */

pokemonList.forEach(function(pokemon) {
  document.write('<h1>' + pokemon.name + '</h1>' + '<h2>' + ' Height: ' + pokemon.height +'m');
});
