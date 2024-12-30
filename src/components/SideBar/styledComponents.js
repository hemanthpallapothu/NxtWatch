import {Link} from 'react-router-dom'

import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
`

export const SideBarContainer = styled.div`
  display: none;
  @media screen and (min-width: 767px) {
    display: flex;
    width: 20%;
    height: 92vh;
  }
`

export const SideBarBGContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SideBarOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideBarOption = styled.button`
  background-color: ${props => {
    if (props.isActive) {
      return props.isDarkTheme ? '#383838' : '#F1F5F9'
    }
    return 'transparent'
  }};
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  border: 0px;
`

export const SideBarOptionText = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#000000')};
  font-size: 15px;
  font-family: 'roboto';
  margin-left: 10px;
`

export const SideBarBottumContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const SideBarBottumText = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#1e293b')};
  font-size: 20px;
  font-family: roboto;
`

export const SideBarBottumImgsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`

export const SideBarBottumImgs = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 100px;
  margin-right: 20px;
  margin-top: 20px;
`

export const SideBarBottumDescription = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#1e293b')};
  font-size: 18px;
  font-family: roboto;
  font-weight: bold;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
