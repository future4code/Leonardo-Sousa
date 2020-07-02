import React from 'react';
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`

export class App extends React.Component {
  state = {
    personagens: [],
    imagemPersonagem: ""
  }
  
  key = "$2a$10$GMwdzTNjxWQ3ZbaZxdXZ8O50lSlkcpJqBuEkCYq64f2muhDpYQ4OC"

  componentDidMount = () => {
    this.pegaPersonagens();
  };

  pegaPersonagens = () => {
    axios.get(`https://www.potterapi.com/v1/characters?key=${this.key}`)
    .then(response => {
      this.setState({ personagens: response.data });
    })
    .catch(err => {
      console.log(err.message);
    })
  }

 

  render(){
    return (
      <Container>
        <select >
          <option value={""} />
          {this.state.personagens.map(personagem => {
            return (
              <option key={personagem.name} value={personagem.name}>
                {" "}
                {personagem.name}
              </option>
            );
          })}
        </select>
        
      </Container>
    );
  }
}
export default App;

// -------------------------------------------------------------------------------





  

  

