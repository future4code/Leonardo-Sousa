import React, { useState , useEffect} from "react";
import styled from "styled-components";

const MatchesPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`
const Match = styled.div`
  
`

function Matches(props) {
  useEffect(() => {
    props.getMatches()
  }, [])
 
  return (
    <MatchesPage>
      {props.matchesList.map(match => {
        return(
          <Match>
            {match.name}
          </Match>
        )
      })}
    </MatchesPage>
  );
}

export default Matches;
