import React from 'react';
import styled from 'styled-components'

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

class ListaUsuarios extends React.Component{
  render(){
    return (
      <DivLista>
        <BotaoCadastra onClick= {this.props.changeRenderiza}>Cadastro de Usuários</BotaoCadastra>
        <Conteudo>
          {this.props.usuarios.map(user => {
              return (
                <div key= {user.id}>
                  <span> {user.name} </span>
                  <BotaoApaga onClick= {() => this.props.removeUsuarios(user.id)}> X </BotaoApaga>
                  <hr/>
                </div>
              )
          })}
        </Conteudo>
      </DivLista>
    );
  }
}

export default ListaUsuarios;
