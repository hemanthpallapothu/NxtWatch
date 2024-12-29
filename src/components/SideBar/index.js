import {Component} from 'react'

import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  SideBarContainer,
  GlobalStyle,
  SideBarBGContainer,
  SideBarOptionsContainer,
  SideBarOption,
  SideBarOptionText,
  SideBarBottumContainer,
  SideBarBottumText,
  SideBarBottumImgs,
  SideBarBottumImgsContainer,
  SideBarBottumDescription,
  NavLink,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class SideBar extends Component {
  state = {
    activeOption: 'Home',
  }

  onClickHome = () => {
    this.setState({activeOption: 'Home'})
  }

  onClickTrending = () => {
    this.setState({activeOption: 'Trending'})
  }

  onClickGaming = () => {
    this.setState({activeOption: 'Gaming'})
  }

  onClickSavedVideos = () => {
    this.setState({activeOption: 'Saved videos'})
  }

  render() {
    const {activeOption} = this.state
    return (
      <SideBarContainer>
        <GlobalStyle />
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <SideBarBGContainer isDarkTheme={isDarkTheme}>
                <SideBarOptionsContainer>
                  <NavLink to="/">
                    <SideBarOption
                      onClick={this.onClickHome}
                      isActive={activeOption === 'Home'}
                      isDarkTheme={isDarkTheme}
                    >
                      <IoMdHome
                        color={activeOption === 'Home' ? '#ff0000' : '#909090'}
                        size={20}
                      />
                      <SideBarOptionText isDarkTheme={isDarkTheme}>
                        Home
                      </SideBarOptionText>
                    </SideBarOption>
                  </NavLink>
                  <NavLink to="/trending">
                    <SideBarOption
                      onClick={this.onClickTrending}
                      isActive={activeOption === 'Trending'}
                      isDarkTheme={isDarkTheme}
                    >
                      <HiFire
                        color={
                          activeOption === 'Trending' ? '#ff0000' : '#909090'
                        }
                        size={20}
                      />
                      <SideBarOptionText isDarkTheme={isDarkTheme}>
                        Trending
                      </SideBarOptionText>
                    </SideBarOption>
                  </NavLink>
                  <NavLink to="/gaming">
                    <SideBarOption
                      onClick={this.onClickGaming}
                      isActive={activeOption === 'Gaming'}
                      isDarkTheme={isDarkTheme}
                    >
                      <SiYoutubegaming
                        color={
                          activeOption === 'Gaming' ? '#ff0000' : '#909090'
                        }
                        size={20}
                      />
                      <SideBarOptionText isDarkTheme={isDarkTheme}>
                        Gaming
                      </SideBarOptionText>
                    </SideBarOption>
                  </NavLink>
                  <NavLink to="/saved-videos">
                    <SideBarOption
                      onClick={this.onClickSavedVideos}
                      isActive={activeOption === 'Saved videos'}
                      isDarkTheme={isDarkTheme}
                    >
                      <CgPlayListAdd
                        color={
                          activeOption === 'Saved videos'
                            ? '#ff0000'
                            : '#909090'
                        }
                        size={20}
                      />
                      <SideBarOptionText isDarkTheme={isDarkTheme}>
                        Saved videos
                      </SideBarOptionText>
                    </SideBarOption>
                  </NavLink>
                </SideBarOptionsContainer>
                <SideBarBottumContainer>
                  <SideBarBottumText isDarkTheme={isDarkTheme}>
                    CONTACT US
                  </SideBarBottumText>
                  <SideBarBottumImgsContainer>
                    <SideBarBottumImgs
                      alt="facebook logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    />
                    <SideBarBottumImgs
                      alt="twitter logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    />
                    <SideBarBottumImgs
                      alt="linked in logo"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    />
                  </SideBarBottumImgsContainer>
                  <SideBarBottumDescription isDarkTheme={isDarkTheme}>
                    Enjoy! Now to see your channels and recommendations!
                  </SideBarBottumDescription>
                </SideBarBottumContainer>
              </SideBarBGContainer>
            )
          }}
        </ThemeContext.Consumer>
      </SideBarContainer>
    )
  }
}

export default SideBar
