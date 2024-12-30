import styled from 'styled-components'

export const NotFoundUrlContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundUrlImg = styled.img`
  height: 400px;
  width: 400px;
`

export const NotFoundUrlText = styled.h1`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#212121')};
  font-size: 20px;
  font-family: roboto;
`

export const NotFoundUrlParagraph = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#212121')};
  font-size: 15px;
  font-family: roboto;
`
