var pokemonList = [
  {
    name: 'Raichu',
    height: 0.8+'m',
    types: ['Mouse', 'Electric'],
    abilities: ['Static', 'Lightningrod'],
  },
  {
    name: 'Charmeleon',
    height: 1.1+'m',
    types: ['Flame', 'Fire'],
    abilities: ['Blaze', 'Solar-Power'],
  },
  {
    name: 'Alakazam',
    height: 1.5+'m',
    types: ['Telekinesis', 'Psychic'],
    abilities: ['Synchronize', 'Inner-Focus', 'Magic-Guard'],
  },
  {
    name: 'Pidgeotto',
    height: 1.1+'m',
    types: ['Bird', 'Flying', 'Normal'],
    abilities: ['Keen-Eye', 'Tangled-Feet', 'Big-Pecks'],
  },
];

for (var pokemonList=0; i<pokemonList.length; i++) {
  document.write(pokemonList.name);
}
