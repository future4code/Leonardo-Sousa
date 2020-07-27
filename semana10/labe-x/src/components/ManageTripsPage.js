import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import Info from '@material-ui/icons/Info'

const ManageTrips = styled.div`
  justify-self: center;
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
`
const ListTrips = styled.div`
  width: 100%;
  height: 100%;
  background-color: #041B2E;
  border-radius: 2px;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background: #FF7819; 
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #555; 
  }
`
const Form = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`
const LabelTextArea = styled.label`
  grid-column: 1/3;
  margin-left: 10px;
`
const TextArea = styled.textarea`
  grid-column: 1/3;
  height: 100%;
  margin: 0 10px;
  border: white;
  border-radius: 2px;
`
const ButtonSendForm = styled.button`
  grid-column: 1/3;
  width: 30%;
  height: 50%;
  justify-self: center;
  border: white;
  border-radius: 2px;
  background-color: blue;
  color: #FFF;
  :hover{
    background-color: green;
  }
`
const InputSub = styled.input`
  height: 50%;
  margin: 20px 10px;
  align-self: start;
  border: white;
  border-radius: 2px;
`
const Select = styled.select`
  justify-self: center;
  margin: 20px 10px;
  align-self: start;
  height: 54%;
  width: 92%;
  border: white;
  border-radius: 2px;
`
const Trip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  height: 10%;
  margin: 2%;
  transition: 0.5s;
  border-radius: 2px;
  :hover{
    background-color: #03141C;
  }
`
const Title = styled.h2`
  display: flex;
  align-items: center;
  width: 96%;
  margin: 2%;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 15%;
`

const InfoIcon = styled(Info)`
  cursor: pointer;
`

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  return { form, onChange };
};

function ManageTripsPage() {
  const token = window.localStorage.getItem("token");
  const history = useHistory();
  const [allTrips, setAllTrips] = useState([]);
  const { form, onChange } = useForm({ name: "", planet: "", date: "", description: "" , durationInDays: ""});

  const handleInputChange = event => {
    const { name, value } = event.target;

    onChange(name, value);
  };
  
  const getAllTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-gomes/trips")
    .then(response =>{
      setAllTrips(response.data.trips)
    })
    .catch(err =>{
      console.log(err.message)
    })
  }

  const sendIdToDetailPage = (idTrip) => {
    history.push(`/TripDetailsPage/${idTrip}`)
  }
  
  const createTrip = (event) => {
    event.preventDefault()
    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    }
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-gomes/trips`, body, {
        headers: {
          auth: token
        }
      })
      .then(() => {
        alert("Viagem criada com sucesso!");
        getAllTrips()
      })
      .catch(() => {
        alert("Ops, algo está errado! Confira todos os campos e tente novamente.");
      });
  };

  useEffect(() => {
    if (token === null) {
      history.push("/LoginPage");
    } else {
      getAllTrips()
    }
  }, [history]);

  return (
    <ManageTrips>
      <ListTrips>
        <Title>Lista de viagens</Title>
        {allTrips.map(trip => {
          return(
            <Trip 
              key= {trip.id} 
            >
              {trip.name}
              <Icons>
                <InfoIcon onClick= {() => sendIdToDetailPage(trip.id)}/>
              </Icons>
            </Trip>
          )
        })}
      </ListTrips>
      <Form onSubmit= {createTrip}>
        <InputSub
          value={form.name}
          name= "name"
          placeholder= "Nome"
          type= "text"
          minLength= "5"
          onChange={handleInputChange}
          required
        />        
        <Select
          value={form.planet}
          name= "planet"
          onChange={handleInputChange}
          required
        >
          <option value= "" disabled selected>-- Planeta --</option>
          <option value= "Mercúrio">Mercúrio</option>
          <option value= "Vênus">Vênus</option>
          <option value= "Terra">Terra</option>
          <option value= "Marte">Marte</option>
          <option value= "Júpter">Júpter</option>
          <option value= "Saturno">Saturno</option>
          <option value= "Urano">Urano</option>
          <option value= "Neptuno">Neptuno</option>
        </Select>
        <InputSub
          value={form.date}
          name= "date"
          placeholder= "Data"
          type="date"
          min="2020-07-25"
          onChange={handleInputChange}
          required
        />
        <InputSub
          value={form.durationInDays}
          name= "durationInDays"
          placeholder= "Duração em dias"
          type= "number"
          min="50"
          onChange={handleInputChange}
          required
        />
        <LabelTextArea>Descrição:</LabelTextArea>
        <TextArea
          value={form.description}
          name= "description"
          type= "number"
          min="30"
          onChange={handleInputChange}
          required
        />
        <ButtonSendForm>Criar Viagem</ButtonSendForm>
      </Form>
    </ManageTrips>
  );
}

export default ManageTripsPage;
