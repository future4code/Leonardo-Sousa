import React, {useState} from 'react';
import styled , {keyframes}from 'styled-components'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const FormLogin = styled.div`
  justify-self: center;
  grid-row: 2/3;
  width: 80%;
  height: 80%;
  display: flex;
`
const Image = styled.img`
  width: 40%;
  height: 95%;
  margin: 2.5% 5%;
`
const Form = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 3fr 5fr;
  background-color: #041B2E;
  border-radius: 2px;
  > *{
    margin: 10px;
  }
`
const Icon = styled.img`
  width: 26px;
  height: 26px;
  margin-left: 15px;
  cursor: pointer;
`
const ButtonLogin = styled.button`
  justify-self: center;
  align-self: start;
  width: 30%;
  height: 20%;
  border: white;
  border-radius: 2px;
  background-color: blue;
  color: #FFF;
  :hover{
    background-color: green;
  }
`
const FormInputMail = styled.input`
  justify-self: center;
  align-self: end;
  width: 50%;
  height: 28%;
  border: white;
  border-radius: 2px;
`
const FormInputPassword = styled.input`
  justify-self: center;
  align-self: start;
  width: 50%;
  height: 28%;
  border: white;
  border-radius: 2px;
`

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const body = {
      email: email,
      password: password
    };

    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-gomes/login`, body)
      .then(response => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/ManageTripsPage");
      })
      .catch(err => {
        alert("Ops, algo está errado! Confira todos os campos e tente novamente.");
        console.log(err.message)
      });
  };

  const goToHomePage = () => {
    history.push("/")
  }
  return (
    <FormLogin>
      <Image src="https://images.vexels.com/media/users/3/145819/isolated/preview/486c34cf5b3b4badd52bc427dbeb44a1-desenhos-animados-de-foguete-by-vexels.png"/>
      <Form>
        <Icon onClick={goToHomePage} src="https://www.flaticon.com/br/premium-icon/icons/svg/2268/2268485.svg"/>
        <FormInputMail
          onChange= {onChangeEmail}
          value= {email}
          placeholder= "E-mail"
          type= "email"
          required
        />
        <FormInputPassword
          onChange= {onChangePassword}
          value= {password}
          placeholder= "Senha"
          type= "password"
          required
        />
        <ButtonLogin onClick= {handleLogin}>Entrar</ButtonLogin>
      </Form>
    </FormLogin>
  );
}

export default LoginPage;
