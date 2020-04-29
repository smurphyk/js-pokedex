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

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(fucntion (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.frunt_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

/*  function addListItem(pokemon) {
    var pList = document.querySelector('.pokeList');
    var pokeItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokeButton');
    pokeItem.appendChild(button);
    pList.appendChild(pokeItem);
    button.addEventListener('click' , function () {
      showDetails(pokemon);
    });
  } */

  return {
      add: add,
      getAll: getAll,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
});
