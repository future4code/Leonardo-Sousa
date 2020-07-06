import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

class ListaMusicas extends React.Component{
  state= {
    inputNome: "",
    inputArtista: "",
    inputUrl: ""
  }

  onChangeInputNome = (event) => {
    this.setState({inputNome: event.target.value})
  }
  onChangeInputArtista = (event) => {
    this.setState({inputArtista: event.target.value})
  }
  onChangeInputUrl = (event) => {
    this.setState({inputUrl: event.target.value})
  }

  addTrackToPlaylist = (playlistId) => {
    const body = {
      name: this.state.inputNome,
      artist: this.state.inputArtista,
      url: this.state.inputUrl
    };
  
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body,
      {
        headers: {
          Authorization: "leonardo-gomes-turing"
        }
      }
    )
    .then(response => {
      this.props.getPlaylistTracks()
      alert("Música adicionada com sucesso")
      this.setState({inputNome: ""})
      this.setState({inputArtista: ""})
      this.setState({inputUrl: ""})
    })
    .catch(error => {
      console.log(error.data);
      alert("Erro")
    });
  }
  
  render(){
    return (
      <div>
        <div key= {this.props.musicas.id}>
          {this.props.musicas.map(track => {
            return (
              <div key= {track.id}>
                {track.name} 
              </div>
            )
          })}
        </div>  
        <div>
          <input
            value= {this.state.inputNome}
            onChange= {this.onChangeInputNome}
            placeholder= "Nome da Música"
          />
          <input
            value= {this.state.inputArtista}
            onChange= {this.onChangeInputArtista}
            placeholder= "Nome do(a) Artista/Banda"
          />
          <input
            value= {this.state.inputUrl}
            onChange= {this.onChangeInputUrl}
            placeholder= "Link da Música"
          />
          <button >Adicionar</button>
        </div>       
      </div>
    );
  }
}

export default ListaMusicas;
