import React, { useState , useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Picks from './components/picks/Picks'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Matches from './components/matches/Matches'
import IconButton from '@material-ui/core/IconButton';
import MatchesIcon from '@material-ui/icons/Sms';

const tema = createMuiTheme({
	palette: {
	  primary: {
		main: "#FF0000"
	  },
	  secondary: {
		main:"#00FF00"
    },
    textPrimary: {
      main: "#FFFFFF"
    },
    textSecondary: {
      main: "#FFFFFF"
    },
	}
})
const AllPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`
const ContainerBorder = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 90vh;
  width: 25vw;
`
const Header = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr; 
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 95%;
`
const Title = styled.h2`
  grid-column: 1/2;
  justify-self: center;
  background: -webkit-linear-gradient(red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`
const ChangePageButton = styled.div`
  cursor: pointer;
  justify-self: center;
`
const ClearButton = styled.button`
  align-self: flex-start;
  margin-top: 30px;
  margin-left: 30px;
`

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
  }

  return (
    <MuiThemeProvider theme={tema}>
      <AllPage>
        <ContainerBorder>
          <Header>
            <Title>astromatch</Title>
            <IconButton>
              <MatchesIcon onClick= {trocaPagina}>00</MatchesIcon>
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
          />}
        </ContainerBorder>
        <ClearButton onClick= {clearMatches}>Limpa matches</ClearButton>
      </AllPage>
    </MuiThemeProvider>
  );
}

export default App;
