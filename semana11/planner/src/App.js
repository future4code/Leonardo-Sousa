import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])

  const getTasks = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-leonardo-gomes`)
    .then(response => {
      setTasks(response.data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  useEffect(() => {
    getTasks()
  })

  return (
    <div>
      <header>
        <div>
          Minha Semana 
        </div>  
        <form>
          <label for="tarefa">Nova tarefa: </label>
          <input type="text" name="tarefa" value=""/>  
          <select name="diaDaSemana" id="diaDaSemana">
            <option value="segunda">Segunda-Feira</option>
            <option value="terca">Terça-Feira</option>
            <option value="quarta">Quarta-Feira</option>
            <option value="quinta">Quinta-Feira</option>
            <option value="sexta">Sexta-Feira</option>
            <option value="sabado">Sábado</option>
            <option value="domingo">Domingo</option>
          </select>
          <button onclick="adicionaTarefa()">CRIAR TAREFA</button>
        </form> 
      </header>
      <main>
        <div>
          --Segunda
          <div id="segunda"></div>
          {tasks.map(task => {
            return(
              <div>=============================={task.text}</div>
            )})}
          -----@@-----
        </div>
        <div>
          --Terça
          <div id="terca"></div>
          -----@@-----
        </div>
        <div>
          --Quarta
          <div id="quarta"></div>
          -----@@-----
        </div>
        <div >
          --Quinta
          <div id="quinta"></div>
          -----@@-----
        </div>
        <div>
          --Sexta
          <div id="sexta"></div>
          -----@@-----
        </div>
        <div>
          --Sábado
          <div id="sabado"></div>
          -----@@-----
        </div>
        <div>
          --Domingo
          <div id="domingo"></div>
          -----@@-----
        </div>
      </main>
      <footer>
        <span> Planner do Leo</span> --///-- <span>© 2020 Todos os direitos reservados </span>
      </footer>
    </div>
  );
}

export default App;
