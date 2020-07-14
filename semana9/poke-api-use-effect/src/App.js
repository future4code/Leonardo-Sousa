import React, { useState , useEffect} from "react";
import axios from "axios";
import PokeCard from "./components/PokeCard";
import styled from "styled-components";

const MostraConteudo = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  const [pokeList, alteraPokeList] = useState([])
  const [pokeName, alteraPokeName] = useState("")

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        alteraPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const changePokeName = event => {
    alteraPokeName(event.target.value)
  }
 
  return (
    <MostraConteudo>
      <p>Selecione um Pokemon para ver os dados:</p>
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </MostraConteudo>
  );
}

export default App;
