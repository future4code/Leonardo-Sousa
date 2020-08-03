import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Planner, Menu, Title, FormCreateTask, ButtonCreateTask, InputCreateTask, AllTasksContainer,
       TaskDay, Task, Delete, FooterPlanner, TextTask} from './style'

const baseUrl = `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turing-leonardo-gomes`

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  const cleanForm = (name, value) => {
    setForm(initialValues);
  };
  return {form, onChange, cleanForm};
};

function App() {
  const [tasks, setTasks] = useState([])
  const {form, onChange, cleanForm} = useForm({ tarefa: "", day: ""});

  const handleInputChange = event => {
    const {name, value} = event.target;

    onChange(name, value);
  };

  const getTasks = () => {
    axios.get(baseUrl)
    .then(response => {
      setTasks(response.data)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  const createTask = (event) => {
    event.preventDefault()
    const body = {
      text: form.tarefa,
      day: form.day,
      completed: false
    }
    axios.post(baseUrl, body)
    .then(() => {
      getTasks()
      cleanForm()
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  const deleteTask = (taskId) => {
    axios.delete(`${baseUrl}/${taskId}`)
    .then(() => {
      alert("Deletado com sucesso!")
      getTasks()
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  const editTask = (task) => {
    axios.put(`${baseUrl}/${task.id}`)
    .then(() => {
      task.completed = !(task.completed)
      console.log(task.completed)
    })
    .catch((err) => {
      console.log(err.message)
    })
  }

  useEffect(() => {
    getTasks()
  })

  return (
    <Planner>
      <Menu>
        <Title>
          Minha Semana 
        </Title>  
        <FormCreateTask onSubmit={createTask}> 
          <label>Nova tarefa:
            <InputCreateTask
              value={form.tarefa}
              name= "tarefa"
              placeholder= "Tarefa"
              type="text"
              minLength="5"
              onChange={handleInputChange}
              required
            />  
           </label>
          <select
             value= {form.day}
             name= "day"
             onChange= {handleInputChange}
             data-testid={'select'}
             required
          >
            <option value="" disabled>--Dia da Semana--</option>
            <option value="Segunda">Segunda-Feira</option>
            <option value="Terca">Terça-Feira</option>
            <option value="Quarta">Quarta-Feira</option>
            <option value="Quinta">Quinta-Feira</option>
            <option value="Sexta">Sexta-Feira</option>
            <option value="Sabado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
          <ButtonCreateTask>CRIAR TAREFA</ButtonCreateTask>
        </FormCreateTask> 
      </Menu>
      <AllTasksContainer>
        <div>
          <TaskDay>-Segunda</TaskDay>
          {tasks.map(task => {
            return task.day === "Segunda" ? <Task key={task.id}>
              <TextTask onClick={() => editTask(task)} completa={task.completed}> {task.text}</TextTask>
              <Delete onClick={() => deleteTask(task.id)}/>
            </Task> : ""
          })}
        </div>
        <div>
          <TaskDay>-Terça</TaskDay>
          {tasks.map(task => {
            return task.day === "Terca" ? <Task key={task.id}>
              <TextTask onClick={() => editTask(task)} completa={task.completed}> {task.text}</TextTask>
              <Delete onClick={() => deleteTask(task.id)}/>
            </Task> : ""
          })}
        </div>
        <div>
          <TaskDay>-Quarta-</TaskDay>
          {tasks.map(task => {
            return task.day === "Quarta" ? <Task key={task.id}>
              <TextTask onClick={() => editTask(task)} completa={task.completed}> {task.text}</TextTask>
              <Delete onClick={() => deleteTask(task.id)}/>
            </Task> : ""
          })}
        </div>
        <div >
          <TaskDay>-Quinta-</TaskDay>
          {tasks.map(task => {
            return task.day === "Quinta" ? <Task key={task.id}>
              <TextTask onClick={() => editTask(task)} completa={task.completed}> {task.text}</TextTask>
              <Delete onClick={() => deleteTask(task.id)}/>
            </Task> : ""
          })}
        </div>
        <div>
          <TaskDay>-Sexta-</TaskDay>
          {tasks.map(task => {
            return task.day === "Sexta" ? <Task key={task.id}>
              <TextTask onClick={() => editTask(task)} completa={task.completed}> {task.text}</TextTask>
              <Delete onClick={() => deleteTask(task.id)}/>
            </Task> : ""
          })}
        </div>
        <div>
          <TaskDay>-Sábado-</TaskDay>
          {tasks.map(task => {
            return task.day === "Sabado" ? <Task key={task.id}>
              <TextTask onClick={() => editTask(task)} completa={task.completed}> {task.text}</TextTask>
              <Delete onClick={() => deleteTask(task.id)}/>
            </Task> : ""
          })}
        </div>
        <div>
          <TaskDay>-Domingo-</TaskDay>
          {tasks.map(task => {
            return task.day === "Domingo" ? <Task key={task.id}>
              <TextTask onClick={() => editTask(task)} completa={task.completed}> {task.text}</TextTask>
              <Delete onClick={() => deleteTask(task.id)}/>
            </Task> : ""
          })}
        </div>
      </AllTasksContainer>
      <FooterPlanner>
        <span>© 2020 Todos os direitos reservados - Desenvolvido por Leo Gomes</span>
      </FooterPlanner>
    </Planner>
  );
}

export default App;
