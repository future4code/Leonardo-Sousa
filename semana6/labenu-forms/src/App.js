import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components'

const Corpo = styled.div`
  text-align: center;
`

class App extends React.Component{
  state ={
    etapa: 1
  }
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1/>;
      case 2:
        return <Etapa2/>;
      case 3:
        return <Etapa3/>;
      case 4:
        return <Final />;
      default:
        return this.setState({
          etapa: 1
        })
    }
  }

  irParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1
    })
  }
  render(){

  return (
    <Corpo>
      {this.renderizaEtapa()}<br/>
      {this.state.etapa <= 3 
      ?<button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
      : ""} 
    </Corpo>
  );
}
}

export default App;