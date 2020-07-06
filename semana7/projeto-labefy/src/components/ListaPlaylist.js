import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

const ListarPlaylist = styled.div`
background-color: #2F3940;
grid-row: 1/3;
grid-column: 1/2;
`

class ListaPlaylist extends React.Component {
  deletePlaylist = (playlistId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        {
          headers: {
            Authorization: "leonardo-gomes-turing"
          }
        }
      )
    .then(response => {
      this.props.getAllPlaylists()
      alert("Playlist deletada com sucesso");
    })
    .catch(error => {
      console.log(error.data);
      alert("Erro")
    })
  }

  clickPlaylist = () => {
    this.props.getPlaylistTracks()
    this.props.funcaoRenderizaMusicas()
  }

  render(){
    return (
      <ListarPlaylist>
        {this.props.listaDePlaylists.map(playlist => {
          return (
            <div key= {playlist.id}>
              <span onClick= {this.clickPlaylist}>{playlist.name}</span> 
              <span onClick= {() => this.deletePlaylist(playlist.id)}> X </span>
              <hr/>
            </div>
          )
        })}
      </ListarPlaylist>
    )
  }
}

export default ListaPlaylist;