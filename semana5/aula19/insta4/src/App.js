import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'

const Input = styled.input `
  padding: 0;
  width: 300px;
`
const FormPost = styled.div `
  width: 306px;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  background-color: rgb(224, 9, 110);
  > *{
    margin: 2px;
  }
  
`
const Button = styled.button `
  width: 100px;
  border-radius: 4px;
  border: none;
`


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
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

   adicionaPost = () => {
    const novoPost ={
      nomeUsuario: this.state.valorInputNomeUsuario,
      
      fotoUsuario: this.state.valorInputFotoUsuario,

      fotoPost: this.state.valorInputFotoPost
    }

    const novoArray = [...this.state.user, novoPost];
    
    this.setState({ 
      user: novoArray, 
      valorInputNomeUsuario: "",
      valorInputFotoPost: "",
      valorInputFotoUsuario: ""
    });
   }

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoDePerfil = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoDoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };
  
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
      <div>
        <FormPost>
          <Input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome de Usuario"}
          />
          <Input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoDePerfil}
            placeholder={"Link foto de perfil"}
          />
          <Input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoDoPost}
            placeholder={"Link foto do post"}
          />
          <Button onClick={this.adicionaPost}>Adicionar</Button>
        </FormPost>
        <div className={'app-container'}>
          {listaDeUsuarios}
        </div>
      </div>
    );
  }
}

export default App;
