import { pokemonArray } from "./data/pokemon.js";

let cardContainer = document.querySelector(".card-container");


const displayPokemons = () => {

    let cards = pokemonArray.map((pokemon) => {
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

window.addEventListener("load", displayPokemons);

