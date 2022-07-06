import { pokemonArray } from "./data/pokemon.js";


const pokemonImage = document.querySelector(".card__image");
const pokemonName = document.querySelector(".card__heading");
const pokemonDescription = document.querySelector(".card__text");

const renderCard = () => {
    pokemonImage.src = pokemonArray[0]["sprite"];
    pokemonName.innerHTML = pokemonArray[0].name;
    pokemonDescription.innerHTML = `${pokemonName.innerHTML}#${pokemonArray[0].id} 
    is a ${ pokemonArray[0].types[0]} & ${ pokemonArray[0].types[1]} type pokemon.`;
};

renderCard();

