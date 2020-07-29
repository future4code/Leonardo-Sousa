import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import SelectCountries from './SelectCountries';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Subscribe = styled.div`
  justify-self: center;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1.2fr 1fr;
  align-items: center;
  justify-content: center;
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
  height: 55%;
  justify-self: center;
  margin-top: 20px;
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
  align-self: flex-start;
  border: white;
  border-radius: 2px;
`
const SelectTrip = styled.select`
  justify-self: center;
  align-self: end;
  height: 53%;
  width: 94%;
  border: white;
  margin: 8px;
  border-radius: 2px;
`
const SelectCountry = styled.select`
  justify-self: center;
  margin: 20px 10px;
  align-self: start;
  height: 54%;
  width: 94%;
  border: white;
  border-radius: 2px;
`

const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  return { form, onChange };
};

function SubscriptionPage() {
  const [allTrips, setAllTrips] = useState([]);
  const history = useHistory();
  const { form, onChange } = useForm({ name: "", age: "18", profession: "", reason: "" , country: "", idTrip: ""});

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

  const applyToTrip = (event) => {
    event.preventDefault()
    const body={
      name: form.name,
      age: form.age,
      applicationText: form.reason,
      profession: form.profession,
      country: form.country
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-gomes/trips/${form.idTrip}/apply`, body)
    .then(() => {
      alert("Seus dados foram enviados para avaliação!")
      history.push("/")
    })
    .catch(err =>{
      console.log(err.message)
    })
  }

  useEffect(() =>{
    getAllTrips()
  }, [])

  return (
    <Subscribe>
      <Form onSubmit={applyToTrip}>
        <InputSub
          value={form.name}
          name= "name"
          placeholder= "Nome"
          type="text"
          minLength="3"
          onChange={handleInputChange}
          required
        />
        <InputSub
          value={form.age}
          name= "age"
          placeholder= "Idade"
          type= "number"
          min="18"
          onChange={handleInputChange}
          required
        />
        <InputSub
          value={form.profession}
          name= "profession"
          placeholder= "Profissão"
          type="text"
          minLength= "10"
          onChange={handleInputChange}
          required
        />
        <SelectCountry
          onChange= {handleInputChange}
          required
          name= "country"
          value= {form.country}
        >
          <SelectCountries/>
        </SelectCountry>
        <SelectTrip
          required
          name= "idTrip"
          value= {form.idTrip}
          onChange= {handleInputChange}
        >
          <option value="" disabled selected>-- Destino --</option>
          {allTrips.map(trip => {
            return(
              <option
                key= {trip.id} 
                value= {trip.id}
              >
                {trip.name}
              </option>
            )
          })}
        </SelectTrip>
        <LabelTextArea>Motivo:</LabelTextArea>
        <TextArea
          value={form.reason}
          name= "reason"
          minLength= "10"
          type="text"
          onChange={handleInputChange}
          required
        />
        <ButtonSendForm type="submit">Enviar</ButtonSendForm>
      </Form>
    </Subscribe>
  );
}

export default SubscriptionPage;
