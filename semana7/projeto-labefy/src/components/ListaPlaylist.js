import React from 'react';
import axios from 'axios'

class ListaPlaylist extends React.Component {
  render(){
    return (
      <div>
        {this.props.listaDePlaylists.map(playlist => {
            return (
              <div key= {playlist.name}>
                 {playlist.name} 
                <hr/>
              </div>
            )
          })}
      </div>
    )
  }
}

export default ListaPlaylist;