import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

export const MainContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const LoginCardContainer = styled.form`
  background-color: ${props =>
    props.isDarkTheme === true ? '#0f0f0f' : '#f9f9f9'};
  height: 400px;
  width: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  height: 50px;
  width: 200px;
`
export const InputLabel = styled.label`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#475569')};
  font-size: 15px;
  font-family: roboto;
  margin-top: 20px;
  font-weight: bold;
`
export const InputContainer = styled.input`
  color: black;
  font-size: 10px;
  font-family: roboto;
  height: 35px;
  width: 300px;
  margin-top: 10px;
  background-color: transparent;
  border-color: #475569;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding-left: 10px;
`
export const LabelAndInputAlinement = styled.div`
  display: flex;
  flex-direction: column;
`
export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
`

export const ShowPasswordCheckBox = styled.div`
  width: 400px;
  margin-left: 85px;
`
export const ShowPasswordText = styled.label`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#475569')};
  font-size: 15px;
  font-family: roboto;
  margin-top: 20px;
  padding-left: 10px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  height: 35px;
  width: 300px;
  color: #ffffff;
  border: 0px;
  border-radius: 5px;
`
export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'roboto';
  font-size: 13px;
`
