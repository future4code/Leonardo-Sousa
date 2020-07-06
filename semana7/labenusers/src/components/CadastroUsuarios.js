import React from 'react';
import styled from 'styled-components'

const DivCadastro = styled.div`
  display: flex;
  flex-direction: column;
`
const Cadastro = styled.div`
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 30vh;
  border-radius: 2px;
  > * {
    margin: 10px;
  }
`
const BotaoLista = styled.button`
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
const BotaoCadastra = styled.button`
  background-color: #30B800;
  width: 30%;
  min-height: 24px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  color: white;
  :hover{
    background: #0FA900;
  }
`
const Input = styled.input`
  border-radius: 2px;
  border: white;
  height: 20px;
  width: 70%;
`

class CadastraUsuarios extends React.Component{
  render(){
    return (
      <DivCadastro>
          <BotaoLista onClick= {this.props.changeRenderizaListaOuCadastro}>Lista de Usuários</BotaoLista>
          <Cadastro>
            <Input 
              value= {this.props.inputNome}
              onChange= {this.props.onChangeInputNome}
              placeholder= "Nome"
            />
            <Input 
              value= {this.props.inputEmail}
              onChange= {this.props.onChangeInputEmail}
              placeholder= "E-mail"
            />
            <BotaoCadastra onClick= {this.props.cadastrarUsuarios}>Cadastrar</BotaoCadastra>
          </Cadastro>
      </DivCadastro>
    );
  }
}

export default CadastraUsuarios;
