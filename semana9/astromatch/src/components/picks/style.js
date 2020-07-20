import styled from 'styled-components'

export const Profile = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ImgProfile = styled.img`
  width: 95%;
  height: 450px;
  margin: 0 auto;
  border-radius: 3px;
  :active{
    transform: rotate(20deg);
  }
`
export const Data = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 10%;
  margin: 2px;
`
export const Teste = styled.div`
  width: 95%;
  margin: 0 3%;
  position: absolute;
  bottom: 0;
  color: white;
  text-shadow: 1px 1px black;
`