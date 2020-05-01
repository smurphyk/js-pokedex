var pokemonRepository = (function() {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
  var pList = document.querySelector('.pokeList');
  var pokeItem = document.createElement('li');
  var button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add('pokeButton');
  pokeItem.appendChild(button);
  pList.appendChild(pokeItem);
  button.addEventListener('click' , function (event) {
    showDetails(pokemon);
  });
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
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

// Displays details in modal
  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item);
    });
  }

  // Displays Modal when pokemon is selected
  function showModal(item) {
    var $modalContainer = document.querySelector('#modal-container');
    // Clear existing content first
    $modalContainer.innerHTML = '';
    // Add div to HTML for new modal content
    var modal = document.createElement('div');
    // Create a class for new div
    modal.classList.add('pokemodal');
    // Create a closing button for Modal
    var closeButton = document.createElement('button');
    closeButton.classList.add('closePokemon');
    closeButton.innerText = 'X'
    // Create event listener to close modal with closeButton is clicked
    closeButton.addEventListener('click', hideModal);
    // Display pokemon name in Modal
    var pokeName = document.createElement('h1');
    pokeName.classList.add('pokeName')
    pokeName.innerText = item.name;
    // Display pokemon image in Modal
    var pokePic = document.createElement('img');
    pokePic.classList.add('pokePic');
    pokePic.setAttribute('src', item.imageUrl);
    // Display pokemon height in Modal
    var pokeHeight = document.createElement('h3');
    pokeHeight.innerText = 'Height: ' + item.height +'m';

    //Append Modal
    modal.appendChild(closeButton);
    modal.appendChild(pokeName);
    modal.appendChild(pokePic);
    modal.appendChild(pokeHeight);
    $modalContainer.appendChild(modal);

    // Create a class for showModal function
    $modalContainer.classList.add('is-visible')
  }

  // Create hideModal function
  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  // Implement hideModal on outside mouse click
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', e => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  // Implement hideModal on ESC key press
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('keydown', e => {
    if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')
  ) {
      hideModal();
  }
});

  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails
    };
  })();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
  });
});
