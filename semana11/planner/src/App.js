import React from 'react';
import styled from 'styled-components'

const Planner = styled.div`
  color: white;
`
const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #e37222;
  padding: 12px 100px;
`
// .nome-pagina{
//   font-weight: 500;
//   font-size: 18px;
// }

// .form{
//   display: flex;
// }

// .form > *{
//   margin: 0 10px;
// }

const Button = styled.button`
  border: none;
  border-radius: 4px;
  padding: 2px 20px;
  :hover{
    color: white;
    background-color: rgb(63, 63, 240);
  }
`
const UnList = styled.ul`
  list-style-position: inside;
  font-size: 16px;
`
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #66b9bf;
  > * {
    box-shadow: 2px 2px  gray;
    border-radius: 4px;
    min-width: 380px;
    min-height: 320px;
    margin: 8px;
    background-color: rgb(221, 221, 221);
    color: black;
    font-size: 24px;
  }
`
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e37222;
  padding: 12px;
`

function App() {
  return (
    <div>
      <Planner>
        <Header>
          <div class="nome-pagina"> Minha Semana </div>  
          <div class="form">
            <label for="tarefa">Nova tarefa:</label>
            <input type="text" name="tarefa" id="tarefa" value=""/>  
            <select name="diaDaSemana" id="diaDaSemana">
              <option value="segunda">Segunda-Feira</option>
              <option value="terca">Terça-Feira</option>
              <option value="quarta">Quarta-Feira</option>
              <option value="quinta">Quinta-Feira</option>
              <option value="sexta">Sexta-Feira</option>
              <option value="sabado">Sábado</option>
              <option value="domingo">Domingo</option>
            </select>
            <Button onclick="adicionaTarefa()">CRIAR TAREFA</Button>
          </div> 
        </Header>
        <Main>
          <div>
            --Segunda
            <UnList id="segunda"></UnList>
          </div>
          <div>
            --Terça
            <UnList id="terca"></UnList>
          </div>
          <div>
            --Quarta
            <UnList id="quarta"></UnList>
          </div>
          <div >
            --Quinta
            <UnList id="quinta"></UnList>
          </div>
          <div>
            --Sexta
            <UnList id="sexta"></UnList>
          </div>
          <div>
            --Sábado
            <UnList id="sabado"></UnList>
          </div>
          <div>
            --Domingo
            <UnList id="domingo"></UnList>
          </div>
        </Main>
        <Footer>
          <p> Planner do Leo</p><p>© 2020 Todos os direitos reservados </p>
        </Footer>
      </Planner>
    </div>
  );
}

export default App;
