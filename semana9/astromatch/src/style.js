import styled from 'styled-components'
import {createMuiTheme} from '@material-ui/core'

export const tema = createMuiTheme({
	palette: {
	  primary: {
		main: "#FF0000"
	  },
	  secondary: {
		main:"#06C442"
    }
	}
})

export const AllPage = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  background-color: grey; 
`
export const ContainerBorder = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 90vh;
  width: 25vw;
  background-color: white;
`
export const Header = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr; 
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 95%;
`
export const Title = styled.a`
  grid-column: 1/2;
  justify-self: center;
  background: -webkit-linear-gradient(red, blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 24px;
`
