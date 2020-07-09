import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CriaPlaylist from './components/CriaPlaylist';
import ListaPlaylist from './components/ListaPlaylist';
import ListaMusicas from './components/ListaMusicas';

const Divzona = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
grid-template-rows: 2fr 4fr;
gap: 10px;
background-color: #202829;
min-height: 98vh;
min-width: 98vw;
padding: 1vh 1vw;
`
const DivVazia = styled.div`
background-color: #2F3940;
grid-row: 2/3;
grid-column: 2/3;
`

class App extends React.Component {
  state= {
    listaDePlaylists: [],
    musicas: [],
    rendMusicas: "sem musicas"
  }
    
  getPlaylistTracks = (playlistId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
    {
      headers: {
        Authorization: "leonardo-gomes-turing"
      }
    })
    .then(response => {
      this.setState({musicas: response.data.result.tracks})
    })
    .catch(error => {
      console.log(error.data);
    })
  }
  
  getAllPlaylists = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      {
        headers: {
          Authorization: "leonardo-gomes-turing"
        }
      }
    )
    .then(response => {
      this.setState({ listaDePlaylists: response.data.result.list})
    })
    .catch(error => {
      console.log(error.data);
    })
  }

  componentDidMount = () => {
    this.getAllPlaylists()
  }

  renderizaMusicas = () =>{
    if(this.state.rendMusicas === "sem musicas"){
      this.setState({rendMusicas: "com musicas"})
    }
  }

  render(){
    const semMusica = (
      <Divzona>
        <CriaPlaylist
          getAllPlaylists= {this.getAllPlaylists}
        />
        <ListaPlaylist
          listaDePlaylists= {this.state.listaDePlaylists}
          getAllPlaylists= {this.getAllPlaylists}
          getPlaylistTracks= {this.getPlaylistTracks}
          funcaoRenderizaMusicas= {this.renderizaMusicas}
        />
        <DivVazia/>
      </Divzona>
    )
    const comMusica = (
      <Divzona>
        <CriaPlaylist
          getAllPlaylists= {this.getAllPlaylists}
        />
        <ListaPlaylist
          listaDePlaylists= {this.state.listaDePlaylists}
          getAllPlaylists= {this.getAllPlaylists}
          getPlaylistTracks= {this.getPlaylistTracks}
          funcaoRenderizaMusicas= {this.renderizaMusicas}
        />
        <ListaMusicas
          musicas= {this.state.musicas}
          getPlaylistTracks= {this.getPlaylistTracks}
        />
      </Divzona>
    )

    return (
      <div>
        {this.state.rendMusicas === "sem musicas" ? semMusica : comMusica}
      </div>
    )
  }
}

export default App;