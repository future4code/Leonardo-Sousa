import React from 'react';
import styled from 'styled-components'


const DivDetalhe = styled.div`
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
const BotaoVoltar = styled.button`
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

class DetalheUsuarios extends React.Component{
    
  render(){
      console.log(this.props.detalhes)
    return (
      <DivDetalhe>
        <BotaoVoltar onClick= {this.props.changeRenderizaListaOuDetalhe}>Voltar</BotaoVoltar>
        <Conteudo>
            <div key= {this.props.detalhes.id}>
                <span> {this.props.detalhes.name} </span>
                <span> {this.props.detalhes.email} </span>
                <BotaoApaga onClick= {() => this.props.removeUsuarios(this.props.detalhes.id)}> X </BotaoApaga>
                <hr/>
            </div>
            
        </Conteudo>
      </DivDetalhe>
    );
  }
}

export default DetalheUsuarios;
