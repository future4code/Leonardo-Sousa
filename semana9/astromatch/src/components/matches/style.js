import styled from 'styled-components'

export const MatchesPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`
export const AllMatches = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Match = styled.div`
  align-self: center;
  width: 95%;
  display: flex; 
  align-items: center;
  margin: 4px;
  transition: 0.7s;
  padding: 4px 0 4px 4px;
  border-radius: 2px;
  cursor: default;
  :hover{
    background-color: #E3E6E3;
  }
`
export const Deslizar = styled.span`
  color: blue;
  cursor: pointer;
`
export const ImagemMatch = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  margin-right: 10px;
  transition: 0.7s;
  :hover{
    transform: translate3d(2%, -2%, 0) scale3d(1.5, 1.5, 1.5);
  }
`