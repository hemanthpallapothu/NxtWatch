import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`
export const NavBarBGContainer = styled.div`
  background-color: ${props =>
    props.isDarkTheme === true ? '#181818' : '#f9f9f9'};
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

export const PopupBGContainer = styled.div`
  height: 100px;
  width: 250px;
  padding: 25px;
  border-radius: 5px;
  background-color: ${props =>
    props.isDarkTheme === true ? '#000000' : '#f4f4f4'};
`

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PopupButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const PopupCancelButton = styled.button`
  height: 35px;
  width: 100px;
  color: ${props => (props.isDarkTheme === true ? '#ffffff' : 'black')};
  background-color: transparent;
  border-color: ${props => (props.isDarkTheme === true ? '#ffffff' : 'black')};
  border-style: ${props => (props.isDarkTheme === true ? '#ffffff' : 'black')};
  border-width: 1px;
  border-radius: 5px;
  margin-top: 10px;
`

export const PopupLogoutButton = styled.button`
  height: 35px;
  width: 100px;
  background-color: #3b82f6;
  border-radius: 5px;
  color: #ffffff;
  border: 0px;
  margin-top: 10px;
`

export const PopupText = styled.p`
  color: ${props => (props.isDarkTheme === true ? '#e2e8f0' : 'black')};
  font-family: roboto;
  font-size: 15px;
  text-align: center;
`
