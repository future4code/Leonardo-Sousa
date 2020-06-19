import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?random=1'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
        <Post
          nomeUsuario={'Leonardo'}
          fotoUsuario={'https://picsum.photos/50/50?random=2'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />
        <Post
          nomeUsuario={'Severo'}
          fotoUsuario={'https://picsum.photos/50/50?random=3'}
          fotoPost={'https://picsum.photos/200/150?random=3'}
        />
      </div>
    );
  }
}

export default App;
