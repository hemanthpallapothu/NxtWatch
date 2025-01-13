import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

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
  PopupContainer,
  PopupCancelButton,
  PopupButtonsContainer,
  PopupLogoutButton,
  PopupText,
  PopupBGContainer,
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
                <Link to="/">
                  <NavBarImg
                    alt="website logo"
                    src={
                      isDarkTheme === true
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                  />
                </Link>

                <NavBarOptionsContainer>
                  {isDarkTheme ? (
                    <ThemeButton data-testid="theme">
                      <IoSunnyOutline
                        onClick={toggleTheme}
                        color="#ffffff"
                        size={25}
                      />
                    </ThemeButton>
                  ) : (
                    <ThemeButton data-testid="theme">
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
                  <PopupContainer>
                    <Popup
                      modal
                      trigger={
                        <LogoutButton
                          isDarkTheme={isDarkTheme}
                          onClick={this.onLogout}
                        >
                          Logout
                        </LogoutButton>
                      }
                    >
                      {close => (
                        <PopupBGContainer isDarkTheme={isDarkTheme}>
                          <PopupText isDarkTheme={isDarkTheme}>
                            Are you sure, you want to logout
                          </PopupText>

                          <PopupButtonsContainer>
                            <PopupCancelButton
                              type="button"
                              isDarkTheme={isDarkTheme}
                              onClick={() => close()}
                            >
                              Cancel
                            </PopupCancelButton>
                            <PopupLogoutButton
                              type="button"
                              onClick={() => this.onLogout()}
                            >
                              Confirm
                            </PopupLogoutButton>
                          </PopupButtonsContainer>
                        </PopupBGContainer>
                      )}
                    </Popup>
                  </PopupContainer>
                  <PopupContainer>
                    <Popup
                      modal
                      trigger={
                        <LogoutIcon onClick={this.onLogout}>
                          <FiLogOut
                            color={isDarkTheme === true ? '#ffffff' : '#181818'}
                            size={25}
                          />
                        </LogoutIcon>
                      }
                    >
                      {close => (
                        <PopupBGContainer isDarkTheme={isDarkTheme}>
                          <PopupText isDarkTheme={isDarkTheme}>
                            Are you sure, you want to logout
                          </PopupText>

                          <PopupButtonsContainer>
                            <PopupCancelButton
                              type="button"
                              isDarkTheme={isDarkTheme}
                              onClick={() => close()}
                            >
                              Cancel
                            </PopupCancelButton>
                            <PopupLogoutButton
                              type="button"
                              onClick={() => this.onLogout()}
                            >
                              Confirm
                            </PopupLogoutButton>
                          </PopupButtonsContainer>
                        </PopupBGContainer>
                      )}
                    </Popup>
                  </PopupContainer>
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
