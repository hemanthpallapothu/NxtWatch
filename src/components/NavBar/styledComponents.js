import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
export const NavBarBGContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#212121' : '#f9f9f9'};
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const NavBarImg = styled.img`
  height: 40px;
  width: 150px;
`
export const NavBarOptionsContainer = styled.div`
  width: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const NavBarIcon = styled.div`
  display: flex;
  flex-direction: row;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0;
`
export const Hamburger = styled.button`
  display: flex;
  background-color: transparent;
  border: 0;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const UserIcon = styled.img`
  display: none;
  height: 25px;
  width: 25px;
  @media screen and (min-width: 767px) {
    display: flex;
  }
`

export const LogoutIcon = styled.button`
  background-color: transparent;
  border: 0;
  display: flex;
  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  display: none;
  height: 25px;
  width: 100px;
  margin-left: 10px;
  background-color: transparent;
  border-color: ${props =>
    props.isDarkTheme === true ? '#ffffff' : '#3b82f6'};
  border-style: solid;
  border-width: 1px;
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : '#3b82f6')};

  @media screen and (min-width: 767px) {
    display: flex;
  }
`
