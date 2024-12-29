import {Component} from 'react'

import Navbar from '../NavBar'
import SideBar from '../SideBar'

import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosPageContainer,
  SavedVideosPageSideContainer,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosList} = value
          return (
            <>
              <Navbar />
              <SavedVideosPageContainer isDarkTheme={isDarkTheme}>
                <SideBar />
                <SavedVideosPageSideContainer isDarkTheme={isDarkTheme}>
                  <h1>{isDarkTheme}</h1>
                </SavedVideosPageSideContainer>
              </SavedVideosPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
