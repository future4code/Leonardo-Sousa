import React, {useState ,useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const DetailsTrip = styled.div`
  justify-self: center;
  width: 80%;
  height: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 1%;
  background-color: #041B2E;
`
const CandidatesList = styled.div`
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
const Candidate = styled.div`
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
const Approve = styled.span`
  color: green;
  margin-right: 10px;
`
const Reprove = styled.span`
  color: red;
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 96%;
  height: 96%;
  margin: 2%;
  transition: 0.5s;
  border-radius: 2px;
  > * {
    width: 100%;
  }
`

function TripDetailsPage() {
  const token = window.localStorage.getItem("token");
  const [detailTrip, setDetailTrip] = useState([]);
  const [idTravel, setIdTravel] = useState("");
  const params = useParams();
  const history = useHistory();

  const getTripDetail = (idTrip) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-gomes/trip/${idTrip}`,{
      headers: {
        auth: token
      }
    })
    .then(response =>{
      setDetailTrip(response.data.trip)
      setIdTravel(idTrip)
    })
    .catch(err =>{
      console.log(err.message)
    })
  }

  const decideCandidate = (idCandidate, choice) => {
    const body ={
      approve: choice
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-gomes/trips/${params.idTrip}/candidates/${idCandidate}/decide`, body,{
      headers: {
        auth: token
      }
    })
    .then(() =>{
      alert(choice ? "Candidato aceito!" : "Candidato recusado!")
      getTripDetail(idTravel)
    })
    .catch(err =>{
      console.log(err.message)
    })
  }

  useEffect(() => {
    if (token === null) {
      history.push("/LoginPage");
    } else {
      getTripDetail(params.idTrip)
    }
  }, [history]);

  return (
    <DetailsTrip>
      <Details>
        <h1>Detalhes</h1>
        <p>Planeta: {detailTrip.planet}</p>
        <p>Nome: {detailTrip.name}</p>
        <p>Duração em dias: {detailTrip.durationInDays}</p>
        <p>Date: {detailTrip.date}</p>
        <p>Descrição: {detailTrip.description}</p>
      </Details>
      <CandidatesList>
      <h1>Candidatos</h1>
        {detailTrip.candidates && detailTrip.candidates.map(candidate => {
          return (
            <Candidate>
              {candidate.name} 
              <div>
                <Approve onClick={() => decideCandidate(candidate.id, true)}>Aprovar</Approve>
                <Reprove onClick={() => decideCandidate(candidate.id, false)}>Reprovar</Reprove>
              </div>
            </Candidate>
          )
        })}
      </CandidatesList>
    </DetailsTrip>
  );
}

export default TripDetailsPage;