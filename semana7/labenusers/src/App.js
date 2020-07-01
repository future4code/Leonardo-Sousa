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
    usuarios: [
    ],
    inputNome: "",
    inputEmail: "",
    renderiza: true
  }

  changeRendereriza = () =>{
    this.setState({renderiza: !this.state.renderiza})
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
    const tela1 = <CadastraUsuarios
      inputNome= {this.state.inputNome}
      inputEmail= {this.state.inputEmail}
      onChangeInputNome= {this.onChangeInputNome}
      onChangeInputEmail= {this.onChangeInputEmail}
      cadastrarUsuarios= {this.cadastrarUsuarios}
      changeRenderiza= {this.changeRendereriza}
    />

    const tela2 = <ListaUsuarios
      usuarios= {this.state.usuarios}
      changeRenderiza= {this.changeRendereriza}
      removeUsuarios= {this.removeUsuarios}
    />

    // const renderizaTela = () => {
    //   if (this.state.renderiza) {
    //     return (
    //       <CadastraUsuarios
    //         inputNome= {this.state.inputNome}
    //         inputEmail= {this.state.inputEmail}
    //         onChangeInputNome= {this.onChangeInputNome}
    //         onChangeInputEmail= {this.onChangeInputEmail}
    //         cadastrarUsuarios= {this.cadastrarUsuarios}
    //         changeRendereriza= {this.changeRendereriza}
    //       />
    //     );
    //   } else {
    //     return(
    //       <ListaUsuarios
    //         usuarios= {this.state.usuarios}
    //         changeRendereriza= {this.changeRendereriza}
    //       />
    //     )
    //   }
    // }

    return (
      <DivPai>
        {this.state.renderiza ? tela1 : tela2}
      </DivPai>
    );
  }
}

export default App;