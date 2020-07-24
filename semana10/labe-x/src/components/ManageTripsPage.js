import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'

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
  outline: none;
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

function ManageTripsPage() {
  const now = new Date
  const minDate = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate()
  const [allTrips, setAllTrips] = useState([]);
  
  const getAllTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-gomes/trips")
    .then(response =>{
      setAllTrips(response.data.trips)
    })
    .catch(err =>{
      console.log(err.message)
    })
  }

  useEffect(() =>{
    getAllTrips()
  }, [])
  return (
    <ManageTrips>
      <ListTrips>
        <Title>Lista de viagens</Title>
        {/* <div>{minDate}</div> */}
        {allTrips.map(trip => {
          return(
            <Trip 
              key= {trip.id} 
              value= {trip.id}
            >
              {trip.name}
            </Trip>
          )
        })}
      </ListTrips>
      <Form>
        <InputSub
          placeholder= "Nome"
          type= "text"
          minLength= "5"
          required
        />
        <Select
          required
        >
          <option>-- Planeta --</option>
          <option>Mercúrio</option>
          <option>Vênus</option>
          <option>Terra</option>
          <option>Marte</option>
          <option>Júpter</option>
          <option>Saturno</option>
          <option>Urano</option>
          <option>Neptuno</option>
        </Select>
        <InputSub
          placeholder= "Data"
          type="date"
          min={minDate}
          required
        />
        <InputSub
          placeholder= "Duração em dias"
          type= "number"
          min="50"
          required
        />
        <LabelTextArea>Descrição:</LabelTextArea>
        <TextArea
          minLength= "30"
          required
        />
        <ButtonSendForm>Criar Viagem</ButtonSendForm>
      </Form>
    </ManageTrips>
  );
}

export default ManageTripsPage;
