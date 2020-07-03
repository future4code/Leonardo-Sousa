import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CriaPlaylist from './components/CriaPlaylist';
import ListaPlaylist from './components/ListaPlaylist';

const Divzona = styled.div`
background-color: green;
`

class App extends React.Component {
  state= {
    listaDePlaylists: []
  }

  

  pegarPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "leonardo-gomes-turing"
        }
      }
    )
    .then(response => {
      this.setState({ listaDePlaylists: response.data.results.list})
    })
    .catch(error => {
      console.log(error.data);
    })
  }
  componentDidMount = () => {
    this.pegarPlaylists()
  }

  render(){
    return (
      <Divzona>
        <CriaPlaylist pegarPlaylists= {this.pegarPlaylists}/>
        <hr/>
        <ListaPlaylist lista= {this.state.listaDePlaylists}/>
      </Divzona>
    )
  }
}

export default App;