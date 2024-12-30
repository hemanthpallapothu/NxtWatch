import {Component} from 'react'
import {CgPlayListAdd} from 'react-icons/cg'

import Navbar from '../NavBar'
import SideBar from '../SideBar'
import SavedVideoCard from '../SavedVideoCard'

import ThemeContext from '../../context/ThemeContext'

import {
  SavedVideosPageContainer,
  SavedVideosPageSideContainer,
  SavedVideoPageTitleContainer,
  SavedVideoPageLogoContainer,
  SavedVideoPageTitle,
  NoVideosContainer,
  NoVideosImg,
  NoVideosText,
  NoVideosParagraph,
} from './styledComponents'

class SavedVideos extends Component {
  onRenderNoVideos = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NoVideosContainer>
            <NoVideosImg
              alt="no saved videos"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            />
            <NoVideosText isDarkTheme={isDarkTheme}>
              No saved videos found
            </NoVideosText>
            <NoVideosParagraph isDarkTheme={isDarkTheme}>
              You can save your videos while watching them
            </NoVideosParagraph>
          </NoVideosContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideosList} = value
          console.log(savedVideosList)
          return (
            <>
              <Navbar />
              <SavedVideosPageContainer isDarkTheme={isDarkTheme}>
                <SideBar />
                <SavedVideosPageSideContainer isDarkTheme={isDarkTheme}>
                  <SavedVideoPageTitleContainer isDarkTheme={isDarkTheme}>
                    <SavedVideoPageLogoContainer isDarkTheme={isDarkTheme}>
                      <CgPlayListAdd color="#ff0000" size={25} />
                    </SavedVideoPageLogoContainer>
                    <SavedVideoPageTitle isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </SavedVideoPageTitle>
                  </SavedVideoPageTitleContainer>
                  {savedVideosList.length === 0
                    ? this.onRenderNoVideos()
                    : savedVideosList.map(eachItem => (
                        <SavedVideoCard
                          key={eachItem.id}
                          videoDetails={eachItem}
                        />
                      ))}
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
