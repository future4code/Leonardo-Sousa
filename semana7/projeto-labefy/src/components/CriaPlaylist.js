import React from 'react';
import axios from 'axios'

class CriaPlaylist extends React.Component {
  state= {
    inputPlaylistASerCriada: ""
  }

  onChangeInputPlaylistASerCriada = (event) => {
    this.setState({inputPlaylistASerCriada: event.target.value})
    console.log(this.state.inputPlaylistASerCriada)
  }

  criaPlaylist = () => {
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
      this.props.pegarPlaylists()
      alert("Playlist criada com sucesso")
    })
    .catch(error => {
      console.log(error.data);
      alert("Erro")
    });
  }

  render(){
    return (
      <div>
        <input
          value= {this.state.inputPlaylistASerCriada}
          onChange= {this.onChangeInputPlaylistASerCriada}
          placeholder= "Nome da Playlist a ser criada"
        />
        <button onClick= {this.criaPlaylist}>Criar Playlist</button>
      </div>
    )
  }
}

export default CriaPlaylist;