import React from 'react';

class CadastraUsuarios extends React.Component{
  render(){
    return (
      <div>
          <button>Lista de Usuários</button>
          <input 
            value= {this.props.inputNome}
            onChange= {this.props.onChangeInputNome}
            placeholder= "Nome"
          />
          <input 
            value= {this.props.inputEmail}
            onChange= {this.props.onChangeInputEmail}
            placeholder= "E-mail"
          />
          <button onClick= {this.props.cadastrarUsuarios}>Cadastrar</button>
      </div>
    );
  }
}

export default CadastraUsuarios;
