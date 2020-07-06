import React from 'react';
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #AB4D2E;
`
const BotaoSorteio = styled.button`
  background-color: #AB953C;
  border: none;
  border-radius: 2px;
  min-width: 150px;
  min-height: 24px;
`
const House = styled.div`
  color: white;
  font-size: 24px;
`

export class App extends React.Component {
  state = {
    casa: ""
  }
  
  key = "$2a$10$GMwdzTNjxWQ3ZbaZxdXZ8O50lSlkcpJqBuEkCYq64f2muhDpYQ4OC"

  sorteiaCasa = () => {
    axios.get(`https://www.potterapi.com/v1/sortingHat?key=${this.key}`)
    .then(response => {
      this.setState({ casa: response.data + "!"});
    })
    .catch(err => {
      console.log(err.message);
    })
  }
 

  render(){
    return (
      <Container>
        <BotaoSorteio onClick= {this.sorteiaCasa}>Sortear Casa</BotaoSorteio>
        <House>{this.state.casa}</House>
      </Container>
    );
  }
}
export default App;





  

  

