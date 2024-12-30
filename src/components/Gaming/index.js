import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import {
  GamingPageContainer,
  GamingPageSideContainer,
  GamingPageInprogressView,
  GamingPageTitleContainer,
  GamingPageLogoContainer,
  GamingPageTitle,
  GamingPageVideosContainer,
} from './styledComponents'

import Navbar from '../NavBar'
import SideBar from '../SideBar'
import FailureView from '../FailureView'
import GamingPageVideo from '../GamingPageVideo'

import ThemeContext from '../../context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.onGetGamingVideos()
  }

  onGetGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(api, options)
    if (response.ok === true) {
      this.setState({apiStatus: apiStatusConstants.success})
      const data = await response.json()
      const formattedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({videosList: formattedData})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRenderInprogressView = () => (
    <GamingPageInprogressView data-testid="loader">
      <Loader type="ThreeDots" color="red" height="50" width="50" />
    </GamingPageInprogressView>
  )

  onRenderFailureView = () => (
    <FailureView onGetVideos={this.onGetGamingVideos} />
  )

  onRenderSuccessView = () => {
    const {videosList} = this.state
    return (
      <GamingPageVideosContainer>
        {videosList.map(eachItem => (
          <GamingPageVideo videoDetails={eachItem} />
        ))}
      </GamingPageVideosContainer>
    )
  }

  onRenderGammingView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.onRenderInprogressView()
      case apiStatusConstants.success:
        return this.onRenderSuccessView()
      case apiStatusConstants.failure:
        return this.onRenderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <Navbar />
              <GamingPageContainer>
                <SideBar />
                <GamingPageSideContainer isDarkTheme={isDarkTheme}>
                  <GamingPageTitleContainer isDarkTheme={isDarkTheme}>
                    <GamingPageLogoContainer isDarkTheme={isDarkTheme}>
                      <SiYoutubegaming color="#ff0000" size={25} />
                    </GamingPageLogoContainer>
                    <GamingPageTitle isDarkTheme={isDarkTheme}>
                      Gaming
                    </GamingPageTitle>
                  </GamingPageTitleContainer>
                  {this.onRenderGammingView()}
                </GamingPageSideContainer>
              </GamingPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
