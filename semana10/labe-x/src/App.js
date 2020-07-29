import React from 'react';
import Router from './components/Router';
import styled from 'styled-components'

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 80vh 10vh;
  align-items: center;
  justify-content: center;
  color: #FFF;
  background-image: url("https://st.depositphotos.com/1217569/2471/i/450/depositphotos_24714645-stock-photo-starry-sky.jpg");
`

function App() {
  return (
    <Body>
      <Router/>
    </Body>
  );
}

export default App;
