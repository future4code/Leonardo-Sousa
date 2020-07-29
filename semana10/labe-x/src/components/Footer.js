import React from 'react';
import styled from 'styled-components'

const Foot = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  background-color: #041B2E;
  border-radius: 2px;
  font-size: 12px; 
`

function Footer() {
  return (
    <Foot>
      Desenvolvido por Leo Gomes
    </Foot>
  );
}

export default Footer;
