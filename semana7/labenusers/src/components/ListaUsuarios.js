import React from 'react';
import styled from 'styled-components'
import DetalheUsuarios from './DetalheUsuario';
import axios from 'axios'

const DivLista = styled.div`
  display: flex;
  flex-direction: column;
`
const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40vw;
  min-height: 30vh;
  color: white;
  border: 1px solid white;
  > * {
    margin: 10px;
  }
`
const BotaoCadastra = styled.button`
  background-color: #015DC7;
  width: 30%;
  min-height: 24px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  :hover{
    background: #0038C7;
  }
`
const BotaoApaga = styled.span`
  background-color: orangered;
  margin: 10px;
  padding: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  :hover{
    background-color: red;
  }
`
const Usuario = styled.span`
    cursor: pointer;
`

class ListaUsuarios extends React.Component{
  state= {
    renderizaListaOuDetalhe: true,
    detalhes: []
}
pegarUsuariosPorId = (userId) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        {
            headers: {
                Authorization: "leonardo-gomes-turing"
            }
        }
    )
    .then(response => {
        this.setState({detalhes: response.data});
    })
    .catch(error => {
        console.log(error.data);
    });
};
  changeRenderizaListaOuDetalhe = () =>{
    this.setState({renderizaListaOuDetalhe: !this.state.renderizaListaOuDetalhe})
  }

  handleClick(id){
    this.pegarUsuariosPorId(id);
    this.changeRenderizaListaOuDetalhe();
}

  render(){
    const telaLista = (
      <DivLista>
        <BotaoCadastra onClick= {this.props.changeRenderizaListaOuCadastro}>Cadastro de Usuários</BotaoCadastra>
        <Conteudo>
          {this.props.usuarios.map(user => {
              return (
                <div key= {user.id}>
                  <Usuario onClick= {() => this.handleClick(user.id)}> {user.name} </Usuario>
                  <BotaoApaga onClick= {() => this.props.removeUsuarios(user.id)}> X </BotaoApaga>
                  <hr/>
                </div>
              )
          })}
        </Conteudo>
      </DivLista>
    )

    const telaDetalhe = (
      <DetalheUsuarios
        changeRenderizaListaOuDetalhe= {this.changeRenderizaListaOuDetalhe}
        detalhes= {this.state.detalhes}
        removeUsuarios= {this.props.removeUsuarios}
      />
    )
    return (
      <div>
        {this.state.renderizaListaOuDetalhe ? telaLista : telaDetalhe}
      </div>
    );
  }
}

export default ListaUsuarios;
