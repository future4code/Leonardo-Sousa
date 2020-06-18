import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    user: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=1"
      },
      {
        nomeUsuario: "Severo",
        fotoUsuario: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150?random=2"
      },
      {
        nomeUsuario: "Leonardo",
        fotoUsuario: "https://picsum.photos/50/50?random=3",
        fotoPost: "https://picsum.photos/200/150?random=3"
      }
    ]
  }
  
  render() {

    const listaDeUsuarios = this.state.user.map((usuario) => {
      return (
        <Post
          nomeUsuario={usuario.nomeUsuario}
          fotoUsuario={usuario.fotoUsuario}
          fotoPost={usuario.fotoPost}
        />
      );
    });
    return (
      <div className={'app-container'}>
        {listaDeUsuarios}
      </div>
    );
  }
}

export default App;
