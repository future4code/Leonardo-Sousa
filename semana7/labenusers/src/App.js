import React from 'react';
import ListaUsuarios from './components/ListaUsuarios';
import CadastraUsuarios from './components/CadastroUsuarios';
import axios from 'axios'
import styled from 'styled-components'

const DivPai = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #1f1f1f;
`

class App extends React.Component{
  state= {
    usuarios: [],
    inputNome: "",
    inputEmail: "",
    renderizaListaOuCadastro: true,
  }

  changeRenderizaListaOuCadastro = () =>{
    this.setState({renderizaListaOuCadastro: !this.state.renderizaListaOuCadastro})
  }

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  }
  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  }

  componentDidMount = () => {
    this.pegarUsuarios();
  };

  pegarUsuarios = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "leonardo-gomes-turing"
          }
        }
      )
      .then(response => {
        this.setState({ usuarios: response.data });
      })
      .catch(error => {
        console.log(error.data);
      });
  };

  removeUsuarios = (userId) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
          headers: {
            Authorization: "leonardo-gomes-turing"
          }
        }
      )
      .then(response => {
        this.pegarUsuarios()
        alert("Usuario deletado com sucesso");
      })
      .catch(error => {
        console.log(error.data);
        alert("Erro")
      });
  };

  cadastrarUsuarios = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    };
  
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {
        headers: {
          Authorization: "leonardo-gomes-turing"
        }
      }
    )
    .then(response => {
      this.pegarUsuarios();
      this.setState({ inputNome: "" });
      this.setState({ inputEmail: "" });
      alert("Usuário criado com sucesso")
    })
    .catch(error => {
      console.log(error.data);
      alert("Erro")
    });
  }

  render(){
    const telaCadastro = (
      <CadastraUsuarios
        inputNome= {this.state.inputNome}
        inputEmail= {this.state.inputEmail}
        onChangeInputNome= {this.onChangeInputNome}
        onChangeInputEmail= {this.onChangeInputEmail}
        cadastrarUsuarios= {this.cadastrarUsuarios}
        changeRenderizaListaOuCadastro= {this.changeRenderizaListaOuCadastro}
      />
    )

    const telaLista = (
      <ListaUsuarios
        usuarios= {this.state.usuarios}
        changeRenderizaListaOuCadastro= {this.changeRenderizaListaOuCadastro}
        removeUsuarios= {this.removeUsuarios}
      />
    )

    return (
      <DivPai>
        {this.state.renderizaListaOuCadastro ? telaCadastro : telaLista}
      </DivPai>
    );
  }
}

export default App;