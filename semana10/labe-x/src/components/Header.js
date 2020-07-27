import React from 'react';
import styled from 'styled-components'
import {useHistory, useLocation} from 'react-router-dom'

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
const ButtonLogout = styled.button`
  display: ${props =>props.display};
  width: 100px;
  height: 30px;
  justify-self: center;
  border: white;
  border-radius: 2px;
  background-color: #FF7819;
  color: black;
  :hover{
    background-color: #FFCC19;
  }
`
const ButtonLogin = styled.button`
  width: 100px;
  height: 30px;
  justify-self: center;
  border: white;
  border-radius: 2px;
  background-color: #FF7819;
  color: black;
  :hover{
    background-color: #FFCC19;
  }
`
const Buttons = styled.div`
  width: 100px;
  > * {
    margin-right: 10px;
  }
`

function Header() {
  const history = useHistory();
  const location = useLocation();

  const goToLoginPage = () => {
    history.push("/LoginPage")
  }

  const goToHomePage = () => {
    history.push("/")
  }

  const logoutButton = () => {
    window.localStorage.removeItem("token");
    history.push("/")
  }

  const rendButton = () => {
    if(location.pathname === "/" || location.pathname === "/SubscriptionPage"){
      return <ButtonLogin onClick= {goToLoginPage}>Login</ButtonLogin>
    } else {
      return <ButtonLogout display={location.pathname === "/LoginPage" ? "none" : "block"} onClick={logoutButton}>Logout</ButtonLogout>
    }
  }

  return (
    <Head>
      <Title onClick={goToHomePage}>
        Labe-X
        <Image src="https://image.flaticon.com/icons/svg/2530/2530888.svg"/>
      </Title>
      <Buttons>
        {rendButton()}
      </Buttons>
    </Head>
  );
}

export default Header;
