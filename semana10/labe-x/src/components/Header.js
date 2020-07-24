import React from 'react';
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Head = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  background-color: #041B2E;
  border-radius: 2px;
`
const Title = styled.h1`
  cursor: pointer;
  background: linear-gradient(#FFCC19,#FF7819);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0px;
  padding: 0px;
`
const Image = styled.img`
  align-self: center;
  justify-self: center;
  width: 26px;
  height: 26px;
  margin-left: 10px;
`
const Buttons = styled.div`
  > * {
    margin-right: 10px;
  }
`

function Header() {
  let history = useHistory();

  const goToLoginPage = () => {
    history.push("/LoginPage")
  }
  const goToHomePage = () => {
    history.push("/")
  }

  return (
    <Head>
      <Title onClick= {goToHomePage}>
        Labe-X
        <Image src="https://image.flaticon.com/icons/svg/2530/2530888.svg"/>
      </Title>
      <Buttons>
        <button onClick= {goToLoginPage}>Login</button>
      </Buttons>
    </Head>
  );
}

export default Header;
