import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {IoSunnyOutline} from 'react-icons/io5'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'
import {
  GlobalStyle,
  NavBarBGContainer,
  NavBarImg,
  NavBarOptionsContainer,
  ThemeButton,
  Hamburger,
  UserIcon,
  LogoutIcon,
  LogoutButton,
} from './styledComponents'

class NavBar extends Component {
  onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          return (
            <>
              <GlobalStyle />
              <NavBarBGContainer isDarkTheme={isDarkTheme}>
                {isDarkTheme ? (
                  <NavBarImg
                    alt="Logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  />
                ) : (
                  <NavBarImg
                    alt="Logo"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  />
                )}
                <NavBarOptionsContainer>
                  {isDarkTheme ? (
                    <ThemeButton>
                      <IoSunnyOutline
                        onClick={toggleTheme}
                        color="#ffffff"
                        size={25}
                      />
                    </ThemeButton>
                  ) : (
                    <ThemeButton>
                      <FaMoon onClick={toggleTheme} size={25} />
                    </ThemeButton>
                  )}
                  {isDarkTheme ? (
                    <Hamburger>
                      <GiHamburgerMenu color="#ffffff" size={25} />
                    </Hamburger>
                  ) : (
                    <Hamburger>
                      <GiHamburgerMenu size={25} />
                    </Hamburger>
                  )}
                  <UserIcon
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                  <LogoutButton
                    isDarkTheme={isDarkTheme}
                    onClick={this.onLogout}
                  >
                    LogOut
                  </LogoutButton>
                  {isDarkTheme ? (
                    <LogoutIcon onClick={this.onLogout}>
                      <FiLogOut color="#ffffff" size={25} />
                    </LogoutIcon>
                  ) : (
                    <LogoutIcon onClick={this.onLogout}>
                      <FiLogOut size={25} />
                    </LogoutIcon>
                  )}
                </NavBarOptionsContainer>
              </NavBarBGContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(NavBar)
