import { pokemonArray } from "./data/pokemon.js";

// Create a deep copy
let displayCards = [...pokemonArray];
// Select objects
let cardContainer = document.querySelector(".card-container");
const nameSearchBar = document.querySelector("#name-search");
const resetButton = document.querySelector(".reset-btn");


// Declare functions
const displayPokemons = () => {

    cardContainer.innerHTML = "";

    let cards = displayCards.map((pokemon) => {
        return `<div class="card">
        <img src="${pokemon.sprite}" alt="card-image" class="card__image">

        <div class="card__content">
          <h3 class="card__heading">${pokemon.name}</h3>
          <h4 class="card__text">${pokemon.name}#${pokemon.id} 
          is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon.</h4>
        </div>
      </div>`
    });

    cards.forEach((card) => {
        cardContainer.innerHTML += card;
    });

};

const searchByNameOrType = (event) => {

    const userInput = event.target.value.toLowerCase();
    displayCards = pokemonArray.filter((pokemon) => {
        return (pokemon.name === userInput || pokemon.types.includes(userInput));
    });

    displayPokemons();

};

const reset = () => {
    // reset and display all pokemons
    displayCards = [...pokemonArray];
    displayPokemons();
};

// Attach Event Listener
nameSearchBar.addEventListener("input", searchByNameOrType);
resetButton.addEventListener("click", reset);

// display pokemon cards
displayPokemons();
