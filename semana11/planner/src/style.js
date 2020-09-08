import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Close'

export const Planner = styled.div`
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 10vh 83vh 7vh;
`
export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #3B57BF;
;
`
export const Title = styled.h3`
  color: #F000FF;
  cursor: default;
  text-shadow: #000 2px 2px 2px;
`
export const FormCreateTask = styled.form`
  display: flex;
  justify-content: space-between;
  width: 45%;
  color: #ffFF84;
  text-shadow: #000 1px 1px 1px;
`
export const ButtonCreateTask = styled.button`
  background-color: #F000FF;
  color: #FFF;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 1px #243575;
  text-shadow: #000 2px 2px 2px;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;
  :hover{
    background-color: green;
    box-shadow: none; 
  }
`
export const InputCreateTask = styled.input`
  padding: 0;
  height: 26px;
  width: 200px;
  margin-left: 5px;
  border-radius: 2px;
  border: none;
`
export const AllTasksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( 7, 1fr);
  grid-template-rows: 1fr;
  box-sizing: border-box;
  background-color: #3B57BF;
  > * {
    margin: 5px;
    max-width: 100%;
    border: 1px solid black;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #FFF;
  }
`
export const TaskDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8%;
  width: 100%;
  margin-bottom: 1%;
  background-color: #243575;
  font-weight: bold; 
  border-radius: 2px;
  color: #ffFF84;
  text-shadow: #000 1px 1px 1px;
  cursor: default;
`
export const Task = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2px;
  min-height: 8%;
  width: 98%;
  margin: 1%;
  transition: 0.5s;
  font-size: 18px;
  cursor: pointer;
  :hover{
    color: #FFF;
    background-color: #3B57BF;
    text-shadow: #000 1px 1px 1px;
  }
`
export const Delete = styled(DeleteIcon)`
  color: #FF0000;
  margin: 5px;
`
export const FooterPlanner = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3B57BF;
  font-size: 14px;
  color: #BECBD5;
  text-shadow: #000 1px 1px 1px;
`
export const TextTask = styled.span`
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
  margin: 5px;
`
