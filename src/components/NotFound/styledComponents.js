import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundImg = styled.img`
  height: 400px;
  width: 400px;
  @media screen and (min-width: 767px) {
    height: 500px;
    width: 500px;
  }
`

export const NotFoundText = styled.h1`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#212121')};
  font-size: 25px;
  font-family: 'roboto';
  margin-top: 5px;
`
export const NotFoundParagraph = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#212121')};
  font-size: 20px;
  font-family: 'roboto';
  margin-top: 5px;
`

export const NotFoundButton = styled.button`
  background-color: #00306e;
  height: 35px;
  width: 100px;
  color: white;
  border: 0px;
  border-radius: 5px;
  margin-top: 5px;
`
