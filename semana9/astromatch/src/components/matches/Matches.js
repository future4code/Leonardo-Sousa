import React, {useEffect} from "react";
import {MatchesPage, AllMatches, Match, Deslizar, ImagemMatch} from "./style";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Delete';

function Matches(props) {
  useEffect(() => {
    props.getMatches()
  }, [])
 
  const cheio =(
    <AllMatches>
      {props.matchesList.map(match => {
        return(
          <Match>
            <ImagemMatch src={match.photo}/>
            <span>{match.name}</span>
          </Match>
        )
      })}
    </AllMatches>
  )

  const vazio = <Match>Sem matches. Volte a&nbsp;<Deslizar onClick= {props.trocaPagina}>deslizar</Deslizar>.</Match>
  
  return (
    <MatchesPage>
      {props.matchesList.length === 0 ? vazio : cheio}
      <IconButton color="primary" onClick= {props.clearMatches}>
        <ClearIcon color="primary">Limpa matches</ClearIcon>
      </IconButton>
    </MatchesPage>
  );
}

export default Matches;
