import React from 'react';
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

const Home = styled.div`
  justify-self: center;
  width: 80%;
  height: 80%;
  border-radius: 2px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 5fr 2fr;
  font-size: 36px;
`
const Image = styled.img`
  width: 90%;
  height: 90%;
  grid-row: 1/3;
  align-self: center;
  justify-self: center;
`
const Paragraph = styled.p`
  margin: 0;
`
const ButtonSubscribe = styled.button`
  width: 30%;
  height: 36px;
  justify-self: center;
  border: white;
  border-radius: 2px;
  outline: none;
  background-color: blue;
  color: #FFF;
  margin-top: 10px;
  :hover{
    background-color: green;
  }
`

function HomePage() {
  let history = useHistory();

  const goToSubscriptionPage = () => {
    history.push("/SubscriptionPage")
  }

  return (
    <Home>
      <Image src="https://image.flaticon.com/icons/svg/2530/2530888.svg"></Image>
      <Paragraph> 
        Venha ser uma das primeiras pessoas a fazer uma viagem turistando o espaço.
        Encontre aqui as melhores viagens espaciais!
      </Paragraph>
      <ButtonSubscribe onClick= {goToSubscriptionPage}>Increver-se</ButtonSubscribe>
    </Home>
  );
}

export default HomePage;
