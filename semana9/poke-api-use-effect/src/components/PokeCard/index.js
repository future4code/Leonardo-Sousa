import React, { useState , useEffect} from "react";
import axios from "axios";

function PokeCard(props) {
  const [pokemon, alteraPokemon] = useState({})

  useEffect(() => {
    pegaPokemon(props.pokemon)
  }, [props.pokemon])

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        alteraPokemon(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>Nome: {pokemon.name}</p>
      <p>Peso: {pokemon.weight} Kg</p>
      {pokemon.types && <p> Tipo: {pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}

export default PokeCard;
