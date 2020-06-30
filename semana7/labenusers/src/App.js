import React from 'react';
import ListaUsuarios from './components/ListaUsuarios';
import CadastraUsuarios from './components/CadastroUsuarios';
import axios from 'axios'

class App extends React.Component{
  state= {
    usuarios: [
    ],
    inputNome: "",
    inputEmail: ""
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
      })
      .catch(error => {
        console.log(error.data);
      });
  }

  render(){
    return (
      <div>
        <ListaUsuarios/>
        <CadastraUsuarios
          inputNome= {this.state.inputNome}
          inputEmail= {this.state.inputEmail}
          onChangeInputNome= {this.onChangeInputNome}
          onChangeInputEmail= {this.onChangeInputEmail}
          cadastrarUsuarios= {this.cadastrarUsuarios}
        />
      </div>
    );
  }
}

export default App;
