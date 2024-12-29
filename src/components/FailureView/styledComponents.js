import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
`

export const FailureImg = styled.img`
  height: 400px;
  width: 400px;
`
export const FailureText = styled.h1`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#1e293b')};
  font-size: 25px;
  font-family: roboto;
`

export const FailureDescription = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#f9f9f9' : '#64748b;')};
  font-size: 20px;
  font-family: roboto;
  margin-top: 20px;
`
export const FailureRetryButton = styled.button`
  background-color: #00306e;
  color: #ffffff;
  font-weight: bold;
  height: 35px;
  width: 100px;
  border: 0px;
  border-radius: 5px;
  margin-top: 20px;
`
