import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const CriarPlaylist = styled.div`
background-color: #2F3940;
grid-row: 1/2;
grid-column: 2/3;
`

class CriaPlaylist extends React.Component {
  state= {
    inputPlaylistASerCriada: ""
  }

  onChangeInputPlaylistASerCriada = (event) => {
    this.setState({inputPlaylistASerCriada: event.target.value})
  }

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylistASerCriada,
    };
  
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
      {
        headers: {
          Authorization: "leonardo-gomes-turing"
        }
      }
    )
    .then(response => {
      this.props.getAllPlaylists()
      alert("Playlist criada com sucesso")
      this.setState({inputPlaylistASerCriada: ""})
    })
    .catch(error => {
      console.log(error.data);
      alert("Erro")
    });
  }

  render(){
    return (
      <CriarPlaylist>
        <input
          value= {this.state.inputPlaylistASerCriada}
          onChange= {this.onChangeInputPlaylistASerCriada}
          placeholder= "Nome da Playlist a ser criada"
        />
        <button onClick= {this.createPlaylist}>Criar Playlist</button>
      </CriarPlaylist>
    )
  }
}

export default CriaPlaylist;