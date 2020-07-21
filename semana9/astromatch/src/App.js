import React, { useState , useEffect} from "react";
import axios from "axios";
import {AllPage, ContainerBorder, Header, Title, tema} from "./style";
import Picks from './components/picks/Picks'
import { MuiThemeProvider} from '@material-ui/core/styles'
import Matches from './components/matches/Matches'
import IconButton from '@material-ui/core/IconButton';
import MatchesIcon from '@material-ui/icons/Sms';

function App() {
  const [page, setPage] = useState(true)
  const [profile, setProfile] = useState({})
  const [matchesList, setMatchesList] = useState([])

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const trocaPagina = () => {
    setPage(!page)
  }

  const getProfileToChoose = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-gomes/person")
      .then(response => {
        setProfile(response.data.profile);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const choosePersonLike = () => {
    const body= {
      id: profile.id,
      choice: true
    }
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-gomes/choose-person", body)
      .then(response => {
        getProfileToChoose()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const choosePersonDeslike = () => {
    const body= {
      id: profile.id,
      choice: false
    }
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-gomes/choose-person", body)
      .then(response => {
        getProfileToChoose()
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-gomes/matches")
      .then(response => {
        setMatchesList(response.data.matches)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const clearMatches = () => {
    if (matchesList.length !== 0){
      let question= window.confirm('Tem certeza de que deseja apagar os seus matches?') ;
      if (question === true){
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo-gomes/clear")
          .then(response => {
            alert("Seus matches foram apagados")
            getMatches()
          })
          .catch(err => {
            console.log(err)
          })
      }
    } else {
      alert("Você não tem nenhum match para ser apagado")
    }
  }

  return (
    <MuiThemeProvider theme={tema}>
      <AllPage>
        <ContainerBorder>
          <Header>
            <Title href="">astromatch</Title>
            <IconButton  onClick= {trocaPagina}>
              <MatchesIcon/>
            </IconButton>
          </Header>
          {page ?
          <Picks
            choosePersonLike= {choosePersonLike}
            choosePersonDeslike= {choosePersonDeslike}
            profile= {profile}
          /> : 
          <Matches
            getMatches= {getMatches}
            matchesList= {matchesList}
            trocaPagina= {trocaPagina}
            clearMatches= {clearMatches}
          />}
        </ContainerBorder>
      </AllPage>
    </MuiThemeProvider>
  );
}

export default App;
